#!/usr/bin/env node
/**
 * Audits Quranic references in name data: validates surah:ayah format and range.
 * Run: node scripts/audit-quran-refs.mjs
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Quran metadata: surah number -> numberOfAyahs (from api.alquran.cloud)
const surahAyahCounts = {
  1: 7, 2: 286, 3: 200, 4: 176, 5: 120, 6: 165, 7: 206, 8: 75, 9: 129, 10: 109,
  11: 123, 12: 111, 13: 43, 14: 52, 15: 99, 16: 128, 17: 111, 18: 110, 19: 98, 20: 135,
  21: 112, 22: 78, 23: 118, 24: 64, 25: 77, 26: 227, 27: 93, 28: 88, 29: 69, 30: 60,
  31: 34, 32: 30, 33: 73, 34: 54, 35: 45, 36: 83, 37: 182, 38: 88, 39: 75, 40: 85,
  41: 54, 42: 53, 43: 89, 44: 59, 45: 37, 46: 35, 47: 38, 48: 29, 49: 18, 50: 45,
  51: 60, 52: 49, 53: 62, 54: 55, 55: 78, 56: 96, 57: 29, 58: 22, 59: 24, 60: 13,
  61: 14, 62: 11, 63: 11, 64: 18, 65: 12, 66: 12, 67: 30, 68: 52, 69: 52, 70: 44,
  71: 28, 72: 28, 73: 20, 74: 56, 75: 40, 76: 31, 77: 50, 78: 40, 79: 46, 80: 42,
  81: 29, 82: 19, 83: 36, 84: 25, 85: 22, 86: 17, 87: 19, 88: 26, 89: 30, 90: 20,
  91: 15, 92: 21, 93: 11, 94: 8, 95: 8, 96: 19, 97: 5, 98: 8, 99: 8, 100: 11,
  101: 11, 102: 8, 103: 3, 104: 9, 105: 5, 106: 4, 107: 7, 108: 3, 109: 6, 110: 3,
  111: 5, 112: 4, 113: 5, 114: 6,
};

function validateAyah(surah, ayah) {
  const max = surahAyahCounts[surah];
  if (!max) return { valid: false, reason: `Surah ${surah} out of range (1-114)` };
  if (ayah < 1 || ayah > max) return { valid: false, reason: `Ayah ${ayah} out of range for surah ${surah} (1-${max})` };
  return { valid: true };
}

function parseAyahStr(ayahStr) {
  // Formats: "2:255", "19:56-57", "20:9-14", "1:1-7"
  const m = ayahStr.match(/^(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return null;
  const surah = parseInt(m[1], 10);
  const start = parseInt(m[2], 10);
  const end = m[3] ? parseInt(m[3], 10) : start;
  return { surah, start, end };
}

function validateRef(ref, slug, file) {
  const parsed = parseAyahStr(ref.ayah);
  if (!parsed) return { valid: false, reason: `Invalid ayah format: "${ref.ayah}"` };
  const { surah, start, end } = parsed;
  if (surah < 1 || surah > 114) return { valid: false, reason: `Surah ${surah} out of range` };
  const r1 = validateAyah(surah, start);
  if (!r1.valid) return r1;
  if (end > start) {
    const r2 = validateAyah(surah, end);
    if (!r2.valid) return r2;
    if (end < start) return { valid: false, reason: `Invalid range: ${ref.ayah} (end < start)` };
  }
  return { valid: true };
}

function extractQuranicRefs(content, file) {
  const refs = [];
  const re = /quranicReferences:\s*\[([\s\S]*?)\](?=\s*,)/g;
  const slugRe = /slug:\s*["']([^"']+)["']/g;
  let m;
  let lastIdx = 0;
  while ((m = re.exec(content)) !== null) {
    const block = m[1];
    const slugM = content.substring(lastIdx, m.index).match(/slug:\s*["']([^"']+)["']/g);
    const slug = slugM ? slugM[slugM.length - 1].match(/["']([^"']+)["']/)[1] : "?";
    lastIdx = m.index;
    const refMatches = block.matchAll(/\{\s*surah:\s*["']([^"']+)["']\s*,\s*ayah:\s*["']([^"']+)["']/g);
    for (const rm of refMatches) {
      refs.push({ surah: rm[1], ayah: rm[2], slug, file });
    }
  }
  return refs;
}

const files = [
  { path: join(root, "src/data/names.ts"), name: "names.ts" },
  { path: join(root, "src/data/quranicNames.ts"), name: "quranicNames.ts" },
  { path: join(root, "src/data/companionsAndProphets.ts"), name: "companionsAndProphets.ts" },
];

const allRefs = [];
for (const f of files) {
  try {
    const content = readFileSync(f.path, "utf-8");
    const refs = extractQuranicRefs(content, f.name);
    allRefs.push(...refs.map((r) => ({ ...r, file: f.name })));
  } catch (e) {
    console.error(`Failed to read ${f.path}:`, e.message);
  }
}

console.log("=== Quran Reference Audit ===\n");
console.log(`Total references: ${allRefs.length}\n`);

const invalid = [];
const seen = new Set();
for (const ref of allRefs) {
  const key = `${ref.file}:${ref.slug}:${ref.ayah}`;
  if (seen.has(key)) continue;
  seen.add(key);
  const result = validateRef(ref, ref.slug, ref.file);
  if (!result.valid) {
    invalid.push({ ...ref, reason: result.reason });
  }
}

if (invalid.length > 0) {
  console.log("❌ Invalid references:");
  invalid.forEach((r) => {
    console.log(`   [${r.file}] ${r.slug} - ${r.surah} ${r.ayah}: ${r.reason}`);
  });
  console.log("");
} else {
  console.log("✅ All Quran references have valid surah:ayah values.\n");
}

// Report isQuranic: true with empty quranicReferences
const emptyRefRe = /slug:\s*["']([^"']+)["'][\s\S]*?isQuranic:\s*true[\s\S]*?quranicReferences:\s*\[\s*\]/g;
let emptyCount = 0;
const emptyNames = [];
for (const f of files) {
  const content = readFileSync(f.path, "utf-8");
  let m;
  while ((m = emptyRefRe.exec(content)) !== null) {
    emptyCount++;
    emptyNames.push(`${m[1]} (${f.name})`);
  }
}

if (emptyCount > 0) {
  console.log(`⚠️  Names with isQuranic: true but empty quranicReferences: ${emptyCount}`);
  emptyNames.slice(0, 20).forEach((n) => console.log(`   - ${n}`));
  if (emptyNames.length > 20) console.log(`   ... and ${emptyNames.length - 20} more`);
  console.log("");
}

console.log("Audit complete.");
