/**
 * Islamic fiqh (jurisprudence) for name rulings.
 * Classifies names as: obligatory to change, recommended to change, permissible, or preferred.
 * Based on Quran, hadith, and scholarly consensus on naming (tawhid, avoiding shirk/kufr).
 */

import type { NameMapping } from "./nameMappingData";

export type FiqhRuling =
  | "obligatory_to_change"
  | "recommended_to_change"
  | "permissible"
  | "preferred";

export interface FiqhResult {
  ruling: FiqhRuling;
  /** Short label for UI */
  label: string;
  /** Explanation for the ruling */
  reason: string;
  /** Quran references (surah:ayah) */
  quranRefs: { surah: string; ayah: string; text: string }[];
  /** Hadith/scholar references */
  hadithRefs?: { source: string; text: string }[];
  /** Suggested Muslim name(s) if change recommended */
  suggestedNames?: string[];
  /** Expanded shirk/kufr explanation when relevant */
  shirkExplanation?: string;
}

/** Allowed objects of servitude: only Allah's names. "Abd" + these = permissible. */
const ALLAH_NAMES_ABD = new Set([
  "allah", "ar-rahman", "al-rahman", "rahman", "ar-rahim", "al-rahim", "rahim",
  "al-karim", "karim", "al-malik", "malik", "al-quddus", "quddus", "as-salam", "salam",
  "al-mu'min", "al-mumin", "mumin", "al-muhaymin", "al-aziz", "aziz", "al-jabbar", "jabbar",
  "al-mutakabbir", "al-khaliq", "khaliq", "al-bari", "bari", "al-musawwir", "musawwir",
  "al-ghaffar", "ghaffar", "al-qahhar", "qahhar", "al-wahhab", "wahhab", "ar-razzaq", "razzaq",
  "al-fattah", "fattah", "al-alim", "alim", "al-hakim", "hakim", "ar-rauf", "rauf", "ar-rahim",
]);

/** Names of servitude to other than Allah — obligatory to change. */
const FORBIDDEN_ABD_PATTERNS = [
  { pattern: /abd\s*(al[-']?|ul[-']?)?masih|abd\s*(al[-']?|ul[-']?)?al[-']?masih/i, reason: "Servant of the Messiah (Jesus) — servitude to other than Allah" },
  { pattern: /abd\s*(al[-']?|ul[-']?)?rasul|abd\s*(al[-']?|ul[-']?)?an[-']?nabi|abd\s*(al[-']?|ul[-']?)?nabi/i, reason: "Servant of the Prophet — servitude to a human" },
  { pattern: /abd\s*(al[-']?|ul[-']?)?(husayn|hussain|husain)|abd\s*(al[-']?|ul[-']?)?ali/i, reason: "Servant of a human — servitude to other than Allah" },
  { pattern: /abd\s*(al[-']?|ul[-']?)?(ka['']?bah|kaba)|abd\s*(al[-']?|ul[-']?)?kaaba/i, reason: "Servant of the Kaaba — servitude to a structure" },
  { pattern: /abd\s*(al[-']?|ul[-']?)?(shams|qamar|nur)\b/i, reason: "Servant of created things (sun, moon, light) — servitude to other than Allah" },
];

/** Names implying divinity or rival to Allah. */
const FORBIDDEN_DIVINITY_PATTERNS = [
  { pattern: /malik\s*(al[-']?)?amlak|king\s*of\s*kings|shahanshah/i, reason: "Claims ultimate kingship — a Name unique to Allah" },
  { pattern: /\bar[-']?rahman\b(?!\s*abd)|\bal[-']?['']?alim\b(?!\s*abd)|\bal[-']?qahhar\b/i, reason: "Using Allah's exclusive names for a human" },
];

/** Deity/idol names used in religious veneration context. */
const FORBIDDEN_DEITY_NAMES = new Set([
  "shiva", "vishnu", "brahma", "murugan", "ganesh", "ganesha", "krishna", "rama",
  "laksmi", "lakshmi", "saraswati", "durga", "kali", "hanuman",
  "zeus", "apollo", "athena", "poseidon", "hermes", "ares",
]);

/** Names with harsh/bad meanings — recommended to change. */
const DISLIKED_MEANING_PATTERNS = [
  { words: ["harb", "war", "bitter", "rough", "hard"], reason: "Harsh or negative meaning — Prophet ﷺ changed such names" },
  { words: ["malik al-amlak", "king of kings"], reason: "Arrogant claim — explicitly condemned in hadith" },
];

/** Preferred Muslim names (servitude to Allah, prophets, good meanings). */
const PREFERRED_MUSLIM_NAMES = new Set([
  "abdullah", "abdurrahman", "abd al-rahman", "abdul rahman", "abdulrahman",
  "abdulkarim", "abd al-karim", "abdul karim", "ibrahim", "musa", "isa", "yusuf",
  "yaqub", "ismail", "ishaq", "dawud", "dawoud", "sulayman", "suleiman", "nuh",
  "yunus", "ayyub", "harun", "zakariyya", "yahya", "idris", "ilyas",
  "muhammad", "ahmad", "maryam", "fatima", "aisha", "khadija", "asiya",
  "sarah", "hajar", "salim", "halim", "karim", "sadiq", "amin", "rahma",
  "noor", "ruqayyah", "zaynab", "safiya", "hana", "warda",
]);

/** Quran references on shirk and naming principles. */
const QURAN_REFS_SHIRK = [
  { surah: "Luqman", ayah: "31:13", text: "Indeed, shirk is a great injustice." },
  { surah: "An-Nisa", ayah: "4:48", text: "Allah does not forgive associating partners with Him, but He forgives what is less than that for whom He wills." },
  { surah: "Ash-Shu'ara", ayah: "26:213", text: "So do not call upon another deity alongside Allah, lest you be among the punished." },
  { surah: "Al-Qasas", ayah: "28:88", text: "Do not invoke any deity besides Him. There is no god but Him." },
  { surah: "Al-Isra", ayah: "17:110", text: "Say: Call upon Allah or call upon ar-Rahman. Whichever you call, to Him belong the best names." },
];

/** Hadith references on naming. */
const HADITH_REFS = [
  { source: "Sahih Bukhari / Muslim", text: "The most despicable name in the sight of Allah is a man named 'King of kings'; there is no king except Allah." },
  { source: "Sunan Abu Dawud", text: "The Prophet ﷺ would change names with bad meanings, such as Harb (War) to Salm (Peace)." },
];

function normalizeForFiqh(s: string): string {
  return s
    .toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[-]/g, " ")
    .trim();
}

/**
 * Checks if a name uses "Abd" (servant of) with an allowed Allah name.
 */
function isAbdAllahPermissible(name: string): boolean {
  const n = normalizeForFiqh(name);
  const abdMatch = n.match(/^abd\s*(al[-']?|ul[-']?|u[-']?)?\s*(\w+)/);
  if (!abdMatch) return false;
  const entity = abdMatch[2].replace(/[''-]/g, "");
  return ALLAH_NAMES_ABD.has(entity) || ALLAH_NAMES_ABD.has(`al-${entity}`);
}

/**
 * Get fiqh ruling for a name. Uses mapping context when available.
 */
export function getFiqhRuling(
  name: string | null | undefined,
  mapping?: NameMapping | null
): FiqhResult {
  const raw = typeof name === "string" ? name.trim() : "";
  if (!raw) {
    return {
      ruling: "permissible",
      label: "Permissible",
      reason: "Enter a name to check its Islamic ruling.",
      quranRefs: [],
    };
  }

  const normalized = normalizeForFiqh(raw);
  const firstWord = raw.split(/\s+/)[0] || raw;

  // 1. Check forbidden: Abd + non-Allah
  for (const { pattern, reason } of FORBIDDEN_ABD_PATTERNS) {
    if (pattern.test(normalized) && !isAbdAllahPermissible(raw)) {
      return {
        ruling: "obligatory_to_change",
        label: "Obligatory to change",
        reason,
        quranRefs: QURAN_REFS_SHIRK,
        hadithRefs: HADITH_REFS,
        suggestedNames: ["Abdullah", "Abdurrahman", "Abdul Karim"],
        shirkExplanation: "Shirk means associating partners with Allah. A name that says 'servant of X' (where X is not Allah) linguistically affirms servitude to other than Allah. The Quran forbids calling upon any deity besides Allah (28:88). Scholars hold it is obligatory (wajib) to change such names.",
      };
    }
  }

  // 2. Check forbidden: divinity claims
  for (const { pattern, reason } of FORBIDDEN_DIVINITY_PATTERNS) {
    if (pattern.test(normalized)) {
      return {
        ruling: "obligatory_to_change",
        label: "Obligatory to change",
        reason,
        quranRefs: QURAN_REFS_SHIRK,
        hadithRefs: HADITH_REFS,
        suggestedNames: ["Abdullah", "Malik"],
        shirkExplanation: "Names that claim ultimate sovereignty or use Allah's exclusive names for humans conflict with tawhid. The Prophet ﷺ explicitly condemned 'King of kings'.",
      };
    }
  }

  // 3. Check forbidden: deity names (when used as given name in religious context)
  const firstLower = firstWord.toLowerCase().replace(/[-']/g, "");
  if (FORBIDDEN_DEITY_NAMES.has(firstLower)) {
    return {
      ruling: "obligatory_to_change",
      label: "Obligatory to change",
      reason: "Name of a deity or idol used in religious veneration — keeping it may imply attachment to false gods.",
      quranRefs: QURAN_REFS_SHIRK,
      hadithRefs: HADITH_REFS,
      suggestedNames: mapping?.muslimNames ?? ["Abdullah", "Ibrahim"],
      shirkExplanation: "The Quran states: 'So do not call upon another deity alongside Allah' (26:213). Names tied to false deities carry reverence to other than Allah.",
    };
  }

  // 4. Check disliked: bad meanings
  for (const { words, reason } of DISLIKED_MEANING_PATTERNS) {
    if (words.some(w => normalized.includes(w))) {
      return {
        ruling: "recommended_to_change",
        label: "Recommended to change",
        reason,
        quranRefs: QURAN_REFS_SHIRK.slice(0, 2),
        hadithRefs: HADITH_REFS,
        suggestedNames: mapping?.muslimNames ?? ["Salim", "Karim"],
      };
    }
  }

  // 5. Check preferred: Muslim equivalents from mapping or known good names
  if (mapping?.muslimNames) {
    const muslimLower = mapping.muslimNames.map(m => m.toLowerCase());
    const hasPreferred = muslimLower.some(m => PREFERRED_MUSLIM_NAMES.has(m));
    if (hasPreferred) {
      return {
        ruling: "permissible",
        label: "Permissible",
        reason: "Your name has a neutral or good meaning. The suggested Islamic equivalents (e.g. " + mapping.muslimNames.slice(0, 2).join(", ") + ") are preferred names in Islam.",
        quranRefs: [],
        suggestedNames: mapping.muslimNames,
      };
    }
  }

  if (PREFERRED_MUSLIM_NAMES.has(normalized) || PREFERRED_MUSLIM_NAMES.has(firstLower)) {
    return {
      ruling: "preferred",
      label: "Preferred",
      reason: "This is a beautiful Islamic name — indicating servitude to Allah, a prophet, or a virtuous meaning.",
      quranRefs: [],
    };
  }

  // 6. Default: permissible
  return {
    ruling: "permissible",
    label: "Permissible",
    reason: "Islam does not require Arabization. A name with a neutral or good meaning—regardless of language or culture—is permissible to keep. The Shari'ah cares about meaning, not the ethnicity of the word.",
    quranRefs: [],
    suggestedNames: mapping?.muslimNames,
  };
}
