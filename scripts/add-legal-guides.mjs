#!/usr/bin/env node
/**
 * Generates legal guide entries for missing countries.
 * Run: node scripts/add-legal-guides.mjs
 */
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const EXISTING = new Set([
  "US", "GB", "CA", "AU", "DE", "FR", "MY", "ZA", "IN", "PK", "ID", "NG", "EG",
  "TR", "SA", "AE", "NL", "SE", "NZ", "ES", "IT", "BD", "SG", "MA", "JP", "BR",
  "KE", "JO", "IQ", "KW", "QA", "BH", "OM", "LB", "IR", "AF", "PH", "TH", "BN",
  "MV", "NO", "DK", "FI", "BE", "CH", "AT", "IE", "PT", "PL", "GR", "BA", "AL",
  "RU", "DZ", "TN", "LY", "SD", "SO", "ET", "TZ", "GH", "SN", "MX", "AR", "CO",
  "UZ", "KZ", "TJ", "KG", "TM", "YE", "MM", "CN", "KR"
]);

const EXCLUDE = new Set([
  "AQ", "BV", "HM", "TF", "IO", "VA", "AX", "BQ", "CC", "CX", "GG", "GI", "IM",
  "JE", "SH", "SJ", "UM", "XK"  // uninhabited, Vatican, small territories
]);

function flag(code) {
  return code.split("").map(c => String.fromCodePoint(0x1f1e6 - 65 + c.charCodeAt(0))).join("");
}

const genericGuide = (name, code) => ({
  country: name.replace(/ \(.*\)$/, "").replace("Côte d'Ivoire", "Côte d'Ivoire").replace("Brunei Darussalam", "Brunei"),
  countryCode: code,
  flag: flag(code),
  overview: `${name} handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.`,
  estimatedCost: "Varies by jurisdiction",
  estimatedCostUSD: [20, 300],
  estimatedTimeline: "4 - 16 weeks",
  estimatedTimelineWeeks: [4, 16],
  difficulty: "moderate",
  steps: [
    { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID", "Birth certificate"] },
    { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID", "Birth certificate", "Application form"] },
    { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application", "Supporting documents"] },
    { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order", "Old documents"] }
  ],
  tips: [
    "Verify current requirements with local authorities before starting",
    "Local Islamic centers may provide conversion documentation if needed",
    "Keep certified copies of all submitted and received documents"
  ],
  resources: [{ title: "Contact local civil registry", url: "#" }],
  religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
  lastUpdated: "2026-02"
});

// Fetch ISO if not present
async function ensureIso() {
  const p = join(__dirname, "../iso-countries.json");
  try {
    readFileSync(p, "utf-8");
    return;
  } catch {
    const res = await fetch("https://raw.githubusercontent.com/lukes/ISO-3166-Countries-with-Regional-Codes/master/all/all.json");
    const data = await res.json();
    writeFileSync(p, JSON.stringify(data, null, 0));
  }
}

async function main() {
  await ensureIso();
  const data = JSON.parse(readFileSync(join(__dirname, "../iso-countries.json"), "utf-8"));

  const missing = data
    .filter(c => !EXISTING.has(c["alpha-2"]) && !EXCLUDE.has(c["alpha-2"]))
    .map(c => ({ name: c.name, code: c["alpha-2"] }));

  const entries = missing.map(({ name, code }) => genericGuide(name, code));

  const ts = entries.map(e => `  {
    country: ${JSON.stringify(e.country)},
    countryCode: ${JSON.stringify(e.countryCode)},
    flag: ${JSON.stringify(e.flag)},
    overview: ${JSON.stringify(e.overview)},
    estimatedCost: ${JSON.stringify(e.estimatedCost)},
    estimatedCostUSD: [${e.estimatedCostUSD.join(", ")}],
    estimatedTimeline: ${JSON.stringify(e.estimatedTimeline)},
    estimatedTimelineWeeks: [${e.estimatedTimelineWeeks.join(", ")}],
    difficulty: ${JSON.stringify(e.difficulty)},
    steps: [
      ${e.steps.map(s => `{ title: ${JSON.stringify(s.title)}, description: ${JSON.stringify(s.description)}, documents: ${JSON.stringify(s.documents || [])} }`).join(",\n      ")}
    ],
    tips: [
      ${e.tips.map(t => JSON.stringify(t)).join(",\n      ")}
    ],
    resources: [\n      ${e.resources.map(r => `{ title: ${JSON.stringify(r.title)}, url: ${JSON.stringify(r.url)} }`).join(",\n      ")}\n    ],
    religiousExemptions: ${JSON.stringify(e.religiousExemptions)},
    lastUpdated: ${JSON.stringify(e.lastUpdated)}
  }`).join(",\n");

  console.log("// Add these entries before the closing ]; of legalNameChangeDatabase");
  console.log("// Total missing countries:", missing.length);
  writeFileSync(join(__dirname, "../src/data/legalGuidesGenerated.txt"), ts);
  console.log("Written to src/data/legalGuidesGenerated.txt");
}

main().catch(console.error);
