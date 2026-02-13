/**
 * Maps mapping muslimNames (spelling variants) to actual namesDatabase slugs.
 * Add entries when audit reports missing mapping names that have DB equivalents.
 * Run `node scripts/audit-names.mjs` to find mismatches.
 */
export const slugAliases: Record<string, string> = {
  // Biblical / prophetic variants
  danyal: "daniyal",
  daud: "dawud",
  "da'ud": "dawud",
  hawwa: "hawa",
  hawraa: "hawa",
  hassan: "hasan",
  husain: "hussain",
  jibril: "jibreel",
  dhulkifl: "dhulkifl",
  "dhul-kifl": "dhulkifl",
  // Common spelling variants
  zainab: "zaynab",
  kareem: "karim",
  kareema: "karima",
  naeema: "naima",
  hannah: "hana",
  saleh: "salih",
  usman: "uthman",
  othman: "uthman",
  waseem: "wasim",
  shareefa: "shareef",
  sulayman: "suleiman",
  sulaiman: "suleiman",
  saeed: "saad",
  "sa'id": "saad",
  // Virtue / meaning-based (map to closest)
  adel: "adil",
  ghazala: "ghazal",
  bahjah: "bahja",
  sabira: "sabirah",
  munira: "sakina",
  muneera: "sakina",
  barakat: "barakah",
  ubayd: "ubaid",
  amir: "ameer",
  shahida: "shahid",
  kamil: "kamal",
  tawfeeq: "tawfiq",
  farouq: "farooq",
  sabil: "sabeel",
  hanin: "haneen",
  sama: "samaa",
  bashir: "basheer",
  munib: "muneeb",
  rawda: "rawdah",
  wafaa: "wafa",
  najam: "najm",
  zain: "zayn",
  zein: "zayn",
  yameen: "yamin",
  rahmah: "rahma",
  hikmah: "hikma",
};

/**
 * Resolves a slug to a canonical form (alias target or original).
 * Does not verify the target exists in DB — use with findNameBySlug.
 */
export function resolveSlugAlias(slug: string): string {
  const normalized = slug?.toLowerCase().trim() || "";
  return slugAliases[normalized] ?? normalized;
}
