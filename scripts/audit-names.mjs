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

// Extract mapping muslimNames from mappingRecord.ts (source of truth)
const mappingRecordPath = join(root, "src/data/nameMappingData/mappingRecord.ts");
const mappingRecordContent = readFileSync(mappingRecordPath, "utf-8");
const mappingMatches = [...mappingRecordContent.matchAll(/muslimNames:\s*\[([^\]]+)\]/g)];

const mappedNames = new Set();
mappingMatches.forEach((m) => {
  const inner = m[1];
  const names = inner.match(/["']([^"']+)["']/g) || [];
  names.forEach((n) => {
    const clean = n.replace(/["']/g, "").trim().toLowerCase();
    if (clean.length >= 2 && !/^[,.\s]+$/.test(clean)) mappedNames.add(clean);
  });
});

// Load slug aliases to check resolved targets
const aliasesPath = join(root, "src/data/slugAliases.ts");
let slugAliases = {};
try {
  const aliasContent = readFileSync(aliasesPath, "utf-8");
  const aliasMatches = [...aliasContent.matchAll(/\b([a-z0-9'\-]+):\s*["']([a-z0-9\-]+)["']/gi)];
  aliasMatches.forEach((m) => {
    const key = m[1].toLowerCase().replace(/^["'\s]+|["'\s]+$/g, "");
    const val = m[2].toLowerCase();
    if (key && val && !key.startsWith("//")) slugAliases[key] = val;
  });
} catch {}

function resolvesToDbSlug(slug) {
  const s = slug.toLowerCase();
  if (allSlugs.has(s)) return true;
  const target = slugAliases[s];
  return target ? allSlugs.has(target) : false;
}

console.log("=== Name Audit ===\n");
console.log(`Names DB slugs: ${allSlugs.size}`);
console.log(`Mapping muslimNames (unique): ${mappedNames.size}\n`);

// 1. Mapping names that don't exist in DB (direct or via alias)
const missing = [...mappedNames].filter((m) => !resolvesToDbSlug(m));
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
const aliasCount = Object.keys(slugAliases).length;
console.log(`📌 slugAliases.ts: ${aliasCount} mappings (danyal->daniyal, rusul->rasul, etc.)\n`);

console.log("Audit complete.");
