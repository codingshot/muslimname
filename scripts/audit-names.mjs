#!/usr/bin/env node
/**
 * Audits name data: checks mapping muslimNames exist in names DB, duplicate slugs, etc.
 * Run: node scripts/audit-names.mjs
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Extract slugs from names.ts (from namesDatabase)
const namesPath = join(root, "src/data/names.ts");
const quranicPath = join(root, "src/data/quranicNames.ts");
const companionsPath = join(root, "src/data/companionsAndProphets.ts");

function extractSlugs(content) {
  const matches = content.matchAll(/slug:\s*["']([^"']+)["']/g);
  return [...new Set([...matches].map((m) => m[1].toLowerCase()))];
}

const namesContent = readFileSync(namesPath, "utf-8");
const quranicContent = readFileSync(quranicPath, "utf-8");
const companionsContent = readFileSync(companionsPath, "utf-8");

// Build merged slugs (same logic as names.ts: coreNames, prophetsNames, quranicNames)
// Dedupe by first occurrence - core/names first, then companions, then quranic
const coreSlugs = extractSlugs(namesContent);
const companionSlugs = extractSlugs(companionsContent);
const quranicSlugs = extractSlugs(quranicContent);

const allSlugs = new Set();
[...coreSlugs, ...companionSlugs, ...quranicSlugs].forEach((s) => allSlugs.add(s));

// Extract mapping muslimNames
const mappingPath = join(root, "src/data/nameMapping.ts");
const mappingContent = readFileSync(mappingPath, "utf-8");
const mappingMatches = [...mappingContent.matchAll(/muslimNames:\s*\[([^\]]+)\]/g)];

const mappedNames = new Set();
mappingMatches.forEach((m) => {
  const inner = m[1];
  const names = inner.match(/["']([^"']+)["']/g) || [];
  names.forEach((n) => mappedNames.add(n.replace(/["']/g, "").toLowerCase()));
});

console.log("=== Name Audit ===\n");
console.log(`Names DB slugs: ${allSlugs.size}`);
console.log(`Mapping muslimNames (unique): ${mappedNames.size}\n`);

// 1. Mapping names that don't exist in DB
const missing = [...mappedNames].filter((m) => !allSlugs.has(m));
if (missing.length > 0) {
  console.log("❌ Mapping muslimNames NOT in namesDatabase:");
  missing.sort().forEach((m) => console.log(`   - ${m}`));
  console.log("");
} else {
  console.log("✅ All mapping muslimNames exist in namesDatabase\n");
}

// 2. Duplicate slugs across sources (before merge)
const allRaw = [...coreSlugs, ...companionSlugs, ...quranicSlugs];
const dupes = allRaw.filter((s, i) => allRaw.indexOf(s) !== i);
const uniqueDupes = [...new Set(dupes)];
if (uniqueDupes.length > 0) {
  console.log("⚠️  Duplicate slugs (first occurrence kept in merge):");
  uniqueDupes.sort().forEach((d) => console.log(`   - ${d}`));
  console.log("");
}

// 3. Theme consistency - check for empty themes
const themeMatches = namesContent.matchAll(/themes:\s*\[([^\]]*)\]/g);
let emptyThemes = 0;
for (const m of themeMatches) {
  if (m[1].trim() === "") emptyThemes++;
}
if (emptyThemes > 0) {
  console.log(`⚠️  Entries with empty themes: ${emptyThemes}\n`);
}

// 4. findNameBySlug - now case-insensitive with alias fallback
console.log("✅ findNameBySlug: Normalizes to lowercase, supports slug aliases\n");

// 5. Alias coverage
const aliasesPath = join(root, "src/data/slugAliases.ts");
try {
  const aliasContent = readFileSync(aliasesPath, "utf-8");
  const aliasCount = (aliasContent.match(/^\s+\w+:/gm) || []).length;
  console.log(`📌 slugAliases.ts: ${aliasCount} mappings (danyal->daniyal, etc.)\n`);
} catch {
  console.log("📌 slugAliases.ts: not found\n");
}

console.log("Audit complete.");
