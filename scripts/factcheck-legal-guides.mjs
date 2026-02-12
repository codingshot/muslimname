#!/usr/bin/env node
/**
 * Fact-checks legal guide country data against ISO 3166-1.
 * Run: node scripts/factcheck-legal-guides.mjs
 */
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const iso = JSON.parse(readFileSync(join(root, "iso-countries.json"), "utf-8"));
const isoByCode = Object.fromEntries(iso.map(c => [c["alpha-2"], c]));

function flagFromCode(code) {
  if (!code || code.length !== 2) return null;
  return code.split("").map(c => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0))).join("");
}

// Extract entries from legalNameChange.ts (regex-based)
const legalPath = join(root, "src/data/legalNameChange.ts");
const legalContent = readFileSync(legalPath, "utf-8");

const entryRegex = /\{\s*country:\s*"([^"]*)",\s*countryCode:\s*"([^"]*)",\s*flag:\s*"([^"]*)"/g;
const entries = [];
let m;
while ((m = entryRegex.exec(legalContent)) !== null) {
  entries.push({ country: m[1], countryCode: m[2], flag: m[3] });
}

console.log("=== Legal Guide Fact-Check ===\n");
console.log(`Entries found: ${entries.length}\n`);

const issues = [];

// 1. Country code vs ISO
entries.forEach(e => {
  const isoEntry = isoByCode[e.countryCode];
  if (!isoEntry && e.countryCode !== "MY-SS") {
    issues.push({ type: "UNKNOWN_CODE", code: e.countryCode, country: e.country, detail: "Country code not in ISO 3166-1" });
  } else if (isoEntry && e.countryCode !== "MY-SS") {
    const isoName = isoEntry.name;
    const acceptedPairs = [
      ["South Korea", "Korea, Republic of"],
      ["British Virgin Islands", "Virgin Islands (British)"],
      ["United States Virgin Islands", "Virgin Islands (U.S.)"],
      ["United Kingdom", "United Kingdom of Great Britain and Northern Ireland"],
      ["Russia", "Russian Federation"],
    ];
    const similar = 
      e.country === isoName ||
      isoName.includes(e.country) ||
      e.country.includes(isoName) ||
      normalize(e.country) === normalize(isoName) ||
      acceptedPairs.some(([a, b]) => (e.country === a && isoName === b) || (e.country === b && isoName === a));
    if (!similar) {
      issues.push({ type: "NAME_MISMATCH", code: e.countryCode, ours: e.country, iso: isoName });
    }
  }
});

function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/plurinationalstateof/g, "").replace(/bolivarianrepublicof/g, "");
}

// 2. Flag emoji check
entries.forEach(e => {
  if (e.countryCode === "MY-SS") return;
  const expected = flagFromCode(e.countryCode);
  if (expected && e.flag !== expected) {
    issues.push({ type: "FLAG_MISMATCH", code: e.countryCode, country: e.country, ours: e.flag, expected });
  }
});

// 3. Duplicate codes
const byCode = {};
entries.forEach(e => {
  if (!byCode[e.countryCode]) byCode[e.countryCode] = [];
  byCode[e.countryCode].push(e.country);
});
Object.entries(byCode).filter(([, names]) => names.length > 1).forEach(([code, names]) => {
  issues.push({ type: "DUPLICATE_CODE", code, names });
});

// Report
if (issues.length === 0) {
  console.log("✅ No issues found. All country codes match ISO 3166-1, flags are correct, no duplicates.");
} else {
  console.log(`❌ ${issues.length} issue(s) found:\n`);
  const byType = {};
  issues.forEach(i => {
    if (!byType[i.type]) byType[i.type] = [];
    byType[i.type].push(i);
  });
  Object.entries(byType).forEach(([type, list]) => {
    console.log(`\n--- ${type} (${list.length}) ---`);
    list.forEach(i => console.log(JSON.stringify(i, null, 2)));
  });
}

// Summary: ISO name mappings for common variations
console.log("\n=== Name variations (ours vs ISO) - spot check ===\n");
const checkCodes = ["US", "GB", "KR", "KP", "TW", "VN", "RU", "SY", "BO", "VE", "CD", "CG"];
checkCodes.forEach(code => {
  const isoEntry = isoByCode[code];
  const ourEntry = entries.find(e => e.countryCode === code);
  if (isoEntry && ourEntry) {
    const ok = ourEntry.country === isoEntry.name || ["Korea, Republic of", "Korea, Democratic People's Republic of", "Taiwan, Province of China", "Viet Nam", "Russian Federation", "Syrian Arab Republic", "Bolivia (Plurinational State of)", "Venezuela, Bolivarian Republic of", "Congo, Democratic Republic of the"].some(iso => isoEntry.name === iso);
    console.log(`${code}: ${ourEntry.country} ${ourEntry.country === isoEntry.name ? "✓" : `| ISO: ${isoEntry.name}`}`);
  }
});

console.log("\nFact-check complete.");
