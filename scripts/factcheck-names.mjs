#!/usr/bin/env node
/**
 * Fact-checks name data:
 * - Validates Quran references (surah exists, ayah number in range)
 * - Reports potential issues
 * Run: node scripts/factcheck-names.mjs
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// Standard 114 surahs: number -> { names[], verses }
// Kufic/standard verse count
const SURAHS = {
  1: { names: ["Al-Fatiha", "Al-Fatihah"], verses: 7 },
  2: { names: ["Al-Baqarah", "Al-Baqara"], verses: 286 },
  3: { names: ["Al-Imran", "Al Imran", "Ali Imran"], verses: 200 },
  4: { names: ["An-Nisa", "An-Nisa'"], verses: 176 },
  5: { names: ["Al-Ma'idah", "Al-Maida"], verses: 120 },
  6: { names: ["Al-An'am", "Al-Anam"], verses: 165 },
  7: { names: ["Al-A'raf", "Al-Araf"], verses: 206 },
  8: { names: ["Al-Anfal"], verses: 75 },
  9: { names: ["At-Tawbah", "At-Tawba"], verses: 129 },
  10: { names: ["Yunus"], verses: 109 },
  11: { names: ["Hud"], verses: 123 },
  12: { names: ["Yusuf"], verses: 111 },
  13: { names: ["Ar-Ra'd", "Ar-Rad"], verses: 43 },
  14: { names: ["Ibrahim"], verses: 52 },
  15: { names: ["Al-Hijr"], verses: 99 },
  16: { names: ["An-Nahl"], verses: 128 },
  17: { names: ["Al-Isra", "Al-Isra'"], verses: 111 },
  18: { names: ["Al-Kahf"], verses: 110 },
  19: { names: ["Maryam"], verses: 98 },
  20: { names: ["Ta-Ha", "Taha", "Ta-Ha'"], verses: 135 },
  21: { names: ["Al-Anbiya", "Al-Anbiya'"], verses: 112 },
  22: { names: ["Al-Hajj"], verses: 78 },
  23: { names: ["Al-Mu'minun", "Al-Muminun"], verses: 118 },
  24: { names: ["An-Nur"], verses: 64 },
  25: { names: ["Al-Furqan"], verses: 77 },
  26: { names: ["Ash-Shu'ara", "Ash-Shuara"], verses: 227 },
  27: { names: ["An-Naml"], verses: 93 },
  28: { names: ["Al-Qasas"], verses: 88 },
  29: { names: ["Al-Ankabut"], verses: 69 },
  30: { names: ["Ar-Rum"], verses: 60 },
  31: { names: ["Luqman"], verses: 34 },
  32: { names: ["As-Sajda", "As-Sajdah"], verses: 30 },
  33: { names: ["Al-Ahzab"], verses: 73 },
  34: { names: ["Saba"], verses: 54 },
  35: { names: ["Fatir"], verses: 45 },
  36: { names: ["Ya-Sin", "Yasin"], verses: 83 },
  37: { names: ["As-Saffat"], verses: 182 },
  38: { names: ["Sad"], verses: 88 },
  39: { names: ["Az-Zumar"], verses: 75 },
  40: { names: ["Ghafir"], verses: 85 },
  41: { names: ["Fussilat"], verses: 54 },
  42: { names: ["Ash-Shura", "Ash-Shura'"], verses: 53 },
  43: { names: ["Az-Zukhruf"], verses: 89 },
  44: { names: ["Ad-Dukhan"], verses: 59 },
  45: { names: ["Al-Jathiya", "Al-Jathiyah"], verses: 37 },
  46: { names: ["Al-Ahqaf"], verses: 35 },
  47: { names: ["Muhammad"], verses: 38 },
  48: { names: ["Al-Fath"], verses: 29 },
  49: { names: ["Al-Hujurat"], verses: 18 },
  50: { names: ["Qaf"], verses: 45 },
  51: { names: ["Adh-Dhariyat", "Ad-Dhariyat"], verses: 60 },
  52: { names: ["At-Tur"], verses: 49 },
  53: { names: ["An-Najm"], verses: 62 },
  54: { names: ["Al-Qamar"], verses: 55 },
  55: { names: ["Ar-Rahman"], verses: 78 },
  56: { names: ["Al-Waqi'a", "Al-Waqiah"], verses: 96 },
  57: { names: ["Al-Hadid"], verses: 29 },
  58: { names: ["Al-Mujadila", "Al-Mujadilah"], verses: 22 },
  59: { names: ["Al-Hashr"], verses: 24 },
  60: { names: ["Al-Mumtahina"], verses: 13 },
  61: { names: ["As-Saff"], verses: 14 },
  62: { names: ["Al-Jumuah", "Al-Jumua"], verses: 11 },
  63: { names: ["Al-Munafiqun"], verses: 11 },
  64: { names: ["At-Taghabun"], verses: 18 },
  65: { names: ["At-Talaq"], verses: 12 },
  66: { names: ["At-Tahrim"], verses: 12 },
  67: { names: ["Al-Mulk"], verses: 30 },
  68: { names: ["Al-Qalam"], verses: 52 },
  69: { names: ["Al-Haqqah"], verses: 52 },
  70: { names: ["Al-Ma'arij"], verses: 44 },
  71: { names: ["Nuh"], verses: 28 },
  72: { names: ["Al-Jinn"], verses: 28 },
  73: { names: ["Al-Muzzammil"], verses: 20 },
  74: { names: ["Al-Muddaththir"], verses: 56 },
  75: { names: ["Al-Qiyamah"], verses: 40 },
  76: { names: ["Al-Insan"], verses: 31 },
  77: { names: ["Al-Mursalat"], verses: 50 },
  78: { names: ["An-Naba"], verses: 40 },
  79: { names: ["An-Nazi'at", "An-Naziat"], verses: 46 },
  80: { names: ["Abasa"], verses: 42 },
  81: { names: ["At-Takwir"], verses: 29 },
  82: { names: ["Al-Infitar"], verses: 19 },
  83: { names: ["Al-Mutaffifin"], verses: 36 },
  84: { names: ["Al-Inshiqaq"], verses: 25 },
  85: { names: ["Al-Buruj"], verses: 22 },
  86: { names: ["At-Tariq"], verses: 17 },
  87: { names: ["Al-A'la", "Al-Ala"], verses: 19 },
  88: { names: ["Al-Ghashiyah"], verses: 26 },
  89: { names: ["Al-Fajr"], verses: 30 },
  90: { names: ["Al-Balad"], verses: 20 },
  91: { names: ["Ash-Shams"], verses: 15 },
  92: { names: ["Al-Lail"], verses: 21 },
  93: { names: ["Ad-Duha"], verses: 11 },
  94: { names: ["Al-Inshirah", "Ash-Sharh"], verses: 8 },
  95: { names: ["At-Tin"], verses: 8 },
  96: { names: ["Al-Alaq"], verses: 19 },
  97: { names: ["Al-Qadr"], verses: 5 },
  98: { names: ["Al-Bayyinah"], verses: 8 },
  99: { names: ["Az-Zalzalah"], verses: 8 },
  100: { names: ["Al-Adiyat"], verses: 11 },
  101: { names: ["Al-Qari'ah", "Al-Qariah"], verses: 11 },
  102: { names: ["At-Takathur"], verses: 8 },
  103: { names: ["Al-Asr"], verses: 3 },
  104: { names: ["Al-Humazah"], verses: 9 },
  105: { names: ["Al-Fil"], verses: 5 },
  106: { names: ["Quraysh"], verses: 4 },
  107: { names: ["Al-Ma'un"], verses: 7 },
  108: { names: ["Al-Kawthar"], verses: 3 },
  109: { names: ["Al-Kafirun"], verses: 6 },
  110: { names: ["An-Nasr"], verses: 3 },
  111: { names: ["Al-Masad", "Al-Lahab"], verses: 5 },
  112: { names: ["Al-Ikhlas"], verses: 4 },
  113: { names: ["Al-Falaq"], verses: 5 },
  114: { names: ["An-Nas"], verses: 6 },
};

// Build surah name -> { num, verses } lookup
const surahByName = new Map();
for (const [num, data] of Object.entries(SURAHS)) {
  const n = parseInt(num, 10);
  for (const name of data.names) {
    surahByName.set(name.toLowerCase().replace(/[''`]/g, "'"), {
      num: n,
      verses: data.verses,
    });
  }
}

function parseAyahRef(ayahStr) {
  // "2:255" or "55:19-20" or "112:1-4"
  const m = ayahStr.match(/^(\d+):(\d+)(?:-(\d+))?$/);
  if (!m) return null;
  const surahNum = parseInt(m[1], 10);
  const start = parseInt(m[2], 10);
  const end = m[3] ? parseInt(m[3], 10) : start;
  return { surahNum, start, end };
}

function validateRef(surahName, ayahStr) {
  const normalized = surahName
    .toLowerCase()
    .trim()
    .replace(/[''`]/g, "'");
  const surahData = surahByName.get(normalized);
  if (!surahData) {
    return { ok: false, err: `Unknown surah: "${surahName}"` };
  }
  const parsed = parseAyahRef(ayahStr);
  if (!parsed) {
    return { ok: false, err: `Invalid ayah format: "${ayahStr}"` };
  }
  if (parsed.surahNum !== surahData.num) {
    return {
      ok: false,
      err: `Ayah "${ayahStr}" surah number (${parsed.surahNum}) doesn't match surah "${surahName}" (${surahData.num})`,
    };
  }
  const maxVerse = surahData.verses;
  if (parsed.start < 1 || parsed.start > maxVerse) {
    return { ok: false, err: `Ayah ${parsed.start} out of range for ${surahName} (1-${maxVerse})` };
  }
  if (parsed.end < parsed.start || parsed.end > maxVerse) {
    return { ok: false, err: `Ayah range ${parsed.start}-${parsed.end} invalid for ${surahName} (1-${maxVerse})` };
  }
  return { ok: true };
}

// Extract quranicReferences from file
const quranicPath = join(root, "src/data/quranicNames.ts");
const namesPath = join(root, "src/data/names.ts");
const companionsPath = join(root, "src/data/companionsAndProphets.ts");

function extractQuranRefs(content) {
  const refs = [];
  const re = /surah:\s*["']([^"']+)["']\s*,\s*ayah:\s*["']([^"']+)["']/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    refs.push({ surah: m[1], ayah: m[2] });
  }
  return refs;
}

const files = [
  { path: quranicPath, label: "quranicNames.ts" },
  { path: namesPath, label: "names.ts" },
  { path: companionsPath, label: "companionsAndProphets.ts" },
];

console.log("=== Name Fact-Check (Quran References) ===\n");

let totalRefs = 0;
let errors = 0;

for (const { path: p, label } of files) {
  try {
    const content = readFileSync(p, "utf-8");
    const refs = extractQuranRefs(content);
    if (refs.length === 0) continue;
    totalRefs += refs.length;
    console.log(`${label}: ${refs.length} references`);
    for (const ref of refs) {
      const result = validateRef(ref.surah, ref.ayah);
      if (!result.ok) {
        errors++;
        console.log(`  ❌ ${ref.surah} ${ref.ayah}: ${result.err}`);
      }
    }
    if (refs.length > 0) console.log("");
  } catch (e) {
    console.log(`${label}: error reading - ${e.message}\n`);
  }
}

console.log(`Total references checked: ${totalRefs}`);
console.log(`Errors: ${errors}`);

if (errors === 0 && totalRefs > 0) {
  console.log("\n✅ All Quran references validated.");
} else if (errors > 0) {
  console.log("\n⚠️  Please fix the errors above.");
  process.exit(1);
}

console.log("\nFact-check complete.");
