// Comprehensive mapping of Christian/Hebrew/Western/Latin/Hindu/Chinese/Portuguese/Tribal names to Muslim equivalents
import {
  christianToMuslimNameMapping,
  westernNameVariants,
  chineseCharToPinyin,
  getNamesForSearch,
  allMappedWesternNames,
  muslimNameToWesternKeys,
  categoryToWesternKeys,
} from "./nameMappingData";
import type { NameMapping } from "./nameMappingData";
import { getCountryName, getCountryFlag } from "@/lib/country";
export type { NameMapping, NameMappingCategory } from "./nameMappingData";

export { christianToMuslimNameMapping };

/** Affiliation label for a mapping: country (popularIn) or language/culture (category). */
export function getMappingAffiliation(key: string): { label: string; flag?: string } | null {
  const m = christianToMuslimNameMapping[key];
  if (!m) return null;
  if (m.popularIn?.length) {
    const code = m.popularIn[0];
    const label = getCountryName(code) || code;
    return label ? { label, flag: getCountryFlag(code) || undefined } : null;
  }
  if (m.category) {
    const lang = m.category.split("-")[0];
    return lang ? { label: lang.charAt(0).toUpperCase() + lang.slice(1) } : null;
  }
  return null;
}

/** Normalize diacritics for multilanguage: José → jose, João → joao, Đức → duc */
function normalizeDiacritics(s: string): string {
  // Vietnamese đ/Đ (U+0111, U+0110) do not decompose with NFD — normalize explicitly
  const noD = s.replace(/\u0111/g, "d").replace(/\u0110/g, "d");
  return noD.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/**
 * Levenshtein distance — returns minimum edits to transform a into b.
 */
function levenshtein(a: string, b: string): number {
  const an = a.length;
  const bn = b.length;
  const dp: number[][] = Array(an + 1)
    .fill(null)
    .map(() => Array(bn + 1).fill(0));
  for (let i = 0; i <= an; i++) dp[i][0] = i;
  for (let j = 0; j <= bn; j++) dp[0][j] = j;
  for (let i = 1; i <= an; i++) {
    for (let j = 1; j <= bn; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[an][bn];
}

/**
 * Damerau–Levenshtein distance: Levenshtein + transposition of adjacent chars.
 * Better for typos like "chritopher" → "christopher", "mcihael" → "michael".
 */
function damerauLevenshtein(a: string, b: string): number {
  const an = a.length;
  const bn = b.length;
  const maxDist = an + bn;
  const da: Record<string, number> = {};
  const matrix: number[][] = Array(an + 2)
    .fill(null)
    .map(() => Array(bn + 2).fill(maxDist));
  matrix[0][0] = maxDist;
  for (let i = 0; i <= an; i++) {
    matrix[i + 1][0] = maxDist;
    matrix[i + 1][1] = i;
  }
  for (let j = 0; j <= bn; j++) {
    matrix[0][j + 1] = maxDist;
    matrix[1][j + 1] = j;
  }
  for (let i = 1; i <= an; i++) {
    let db = 0;
    for (let j = 1; j <= bn; j++) {
      const k = da[b[j - 1]] ?? 0;
      const l = db;
      let cost = 1;
      if (a[i - 1] === b[j - 1]) {
        cost = 0;
        db = j;
      }
      matrix[i + 1][j + 1] = Math.min(
        matrix[i][j] + cost,
        matrix[i + 1][j] + 1,
        matrix[i][j + 1] + 1,
        matrix[k][l] + (i - k - 1) + 1 + (j - l - 1)
      );
    }
    da[a[i - 1]] = i;
  }
  return matrix[an + 1][bn + 1];
}

/**
 * Jaro–Winkler similarity (0–1). Suited for names: rewards matching prefixes.
 */
function jaroWinkler(a: string, b: string): number {
  if (!a || !b) return 0;
  const len1 = a.length;
  const len2 = b.length;
  const matchWindow = Math.floor(Math.max(len1, len2) / 2) - 1;
  const matchWindowSafe = Math.max(0, matchWindow);
  const s1 = a.split("");
  const s2 = b.split("");
  const match1: boolean[] = new Array(len1).fill(false);
  const match2: boolean[] = new Array(len2).fill(false);
  let matches = 0;
  for (let i = 0; i < len1; i++) {
    const start = Math.max(0, i - matchWindowSafe);
    const end = Math.min(i + matchWindowSafe + 1, len2);
    for (let j = start; j < end; j++) {
      if (match2[j] || s1[i] !== s2[j]) continue;
      match1[i] = true;
      match2[j] = true;
      matches++;
      break;
    }
  }
  if (matches === 0) return 0;
  let transpositions = 0;
  let k = 0;
  for (let i = 0; i < len1; i++) {
    if (!match1[i]) continue;
    while (!match2[k]) k++;
    if (s1[i] !== s2[k]) transpositions++;
    k++;
  }
  const jaro =
    (matches / len1 + matches / len2 + (matches - transpositions / 2) / matches) / 3;
  let prefix = 0;
  for (let i = 0; i < Math.min(4, len1, len2); i++) {
    if (a[i] === b[i]) prefix++;
    else break;
  }
  return jaro + prefix * 0.1 * (1 - jaro);
}

/**
 * Similarity score 0–1. Higher = more similar.
 * Uses Damerau–Levenshtein (handles transpositions), Jaro–Winkler (name-friendly),
 * prefix match, substring match, and same-first-letter boost.
 */
function similarity(a: string, b: string): number {
  if (!a || !b) return 0;
  const al = a.toLowerCase().slice(0, 25);
  const bl = b.toLowerCase().slice(0, 25);
  const lenDiff = Math.abs(al.length - bl.length);
  if (lenDiff > 8) return 0; // too different in length — skip expensive ops
  if (bl.startsWith(al)) return 0.88 + Math.min(0.08, al.length * 0.008);
  if (al.startsWith(bl)) return 0.72 + Math.min(0.1, bl.length * 0.01);
  if (bl.includes(al) && al.length >= 3) return 0.7 + al.length * 0.02;
  if (al.includes(bl) && bl.length >= 3) return 0.65 + bl.length * 0.02;
  const dlDist = damerauLevenshtein(al, bl);
  const maxLen = Math.max(al.length, bl.length, 1);
  const dlScore = 1 - dlDist / maxLen;
  const jwScore = jaroWinkler(al, bl);
  let score = Math.max(dlScore, jwScore);
  if (al[0] === bl[0]) score += 0.15;
  return Math.min(1, score);
}

/**
 * When no exact match is found, suggest closely related names the user can select.
 * Returns up to `limit` suggestions with similarity above threshold.
 * Pass countryCode to boost names popular in that country.
 * Optimized: only searches names with same first letter to reduce iterations.
 */
export function getDidYouMeanSuggestions(
  input: string | null | undefined,
  limit = 5,
  options?: { countryCode?: string }
): { displayName: string; canonicalKey: string }[] {
  const raw = typeof input === "string" ? String(input).trim() : "";
  if (!raw || raw.length < 2) return [];
  const first = normalizeDiacritics(raw.split(/\s+/)[0] || raw);
  if (first.length > 30) return []; // avoid expensive fuzzy match on very long input
  if (getMappingContext(first)) return [];
  const country = options?.countryCode?.toUpperCase();

  const candidates = getNamesForSearch(first);
  const namesToSearch = candidates.length > 0 ? candidates : allMappedWesternNames;
  const scored = namesToSearch
    .map(name => {
      const sim = similarity(first, name);
      const m = christianToMuslimNameMapping[name];
      const countryBoost = country && m?.popularIn?.includes(country) ? 0.15 : 0;
      return {
        displayName: name.charAt(0).toUpperCase() + name.slice(1),
        canonicalKey: name,
        score: sim + countryBoost,
      };
    })
    .filter(x => x.score >= 0.44)
    .sort((a, b) => b.score - a.score);

  const seen = new Set<string>();
  return scored
    .filter(x => {
      if (seen.has(x.canonicalKey)) return false;
      seen.add(x.canonicalKey);
      return true;
    })
    .slice(0, limit)
    .map(({ displayName, canonicalKey }) => ({ displayName, canonicalKey }));
}

// Get all mapped Western names for quick lookup
export function getWesternNameSuggestions(name: string | null | undefined): string[] {
  const key = resolveMappingKey(name);
  if (!key) return [];
  const mapping = christianToMuslimNameMapping[key];
  return mapping?.muslimNames ?? [];
}

/** Prefix-matched Western names for autocomplete. Returns display name + canonical key. Optimized with first-letter index. */
export function getPrefixWesternSuggestions(
  input: string | null | undefined,
  limit = 6,
  options?: { countryCode?: string }
): { displayName: string; canonicalKey: string }[] {
  const raw = typeof input === "string" ? normalizeDiacritics(String(input).trim()) : "";
  if (!raw || raw.length < 2) return [];
  const country = options?.countryCode?.toUpperCase();
  const candidates = getNamesForSearch(raw);
  const keysToSearch = candidates.length > 0 ? candidates : allMappedWesternNames;
  const prefixMatches: { displayName: string; canonicalKey: string; score: number }[] = [];
  for (const key of keysToSearch) {
    let score = 0;
    if (key.startsWith(raw)) {
      score = key === raw ? 100 : 50 + (key.length - raw.length);
    } else if (raw.startsWith(key.slice(0, 2)) && key.length <= raw.length + 3) {
      const sim = similarity(raw, key);
      if (sim >= 0.5) score = sim * 40;
    }
    if (score > 0) {
      const m = christianToMuslimNameMapping[key];
      if (country && m?.popularIn?.includes(country)) score += 20;
      prefixMatches.push({
        displayName: key.charAt(0).toUpperCase() + key.slice(1),
        canonicalKey: key,
        score,
      });
    }
  }
  return prefixMatches
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ displayName, canonicalKey }) => ({ displayName, canonicalKey }));
}

/**
 * Combined typing suggestions: Western mapping (prefix + fuzzy) and optionally Muslim names.
 * Use for autocomplete as user types.
 */
export function getCombinedTypingSuggestions(
  input: string | null | undefined,
  options?: { includeMuslimNames?: boolean; limit?: number; countryCode?: string }
): { type: "mapping"; displayName: string; canonicalKey: string }[] {
  const raw = typeof input === "string" ? String(input).trim() : "";
  if (!raw) return [];
  const limit = options?.limit ?? 8;

  const first = normalizeDiacritics(raw.split(/\s+/)[0] || raw);
  if (first.length < 2) return [];

  const results: { type: "mapping"; displayName: string; canonicalKey: string }[] = [];

  const prefix = getPrefixWesternSuggestions(first, limit, { countryCode: options?.countryCode });
  const seen = new Set<string>();
  for (const { displayName, canonicalKey } of prefix) {
    if (!seen.has(canonicalKey)) {
      seen.add(canonicalKey);
      results.push({ type: "mapping", displayName, canonicalKey });
    }
  }

  if (results.length < limit) {
    const fuzzy = getDidYouMeanSuggestions(first, limit - results.length, { countryCode: options?.countryCode });
    for (const { displayName, canonicalKey } of fuzzy) {
      if (!seen.has(canonicalKey)) {
        seen.add(canonicalKey);
        results.push({ type: "mapping", displayName, canonicalKey });
      }
    }
  }

  return results.slice(0, limit);
}

/** Resolves input (full name, nickname, variant, multilanguage) to canonical mapping key. */
function resolveMappingKey(name: string | null | undefined): string {
  const raw = typeof name === "string" ? name.trim() : "";
  if (!raw) return "";
  const firstWord = raw.split(/\s+/)[0] || raw;
  let normalized = normalizeDiacritics(firstWord);
  // Strip hyphens for Korean/compound names (Seo-jun → seojun)
  normalized = normalized.replace(/-/g, "");

  // Direct match (ASCII normalized)
  if (christianToMuslimNameMapping[normalized]) return normalized;

  // Chinese character(s) → Pinyin
  if (/[\u4e00-\u9fff]/.test(firstWord)) {
    // Try full multi-char conversion first (e.g. 浩宇 → haoyu)
    let pinyinFull = "";
    for (let i = 0; i < firstWord.length; i++) {
      const c = firstWord.charAt(i);
      const py = chineseCharToPinyin[c];
      if (py) pinyinFull += py;
      else break;
    }
    if (pinyinFull && christianToMuslimNameMapping[pinyinFull]) return pinyinFull;
    // Fallback: first char only
    const pinyin = chineseCharToPinyin[firstWord.charAt(0)];
    if (pinyin && christianToMuslimNameMapping[pinyin]) return pinyin;
  }

  return westernNameVariants[normalized] ?? normalized;
}

// Get context for a mapping (robust to null/undefined/whitespace)
// Uses first name only for "John Smith", and resolves nicknames (Mike → Michael)
export function getMappingContext(name: string | null | undefined): NameMapping | null {
  const key = resolveMappingKey(name);
  if (!key) return null;
  return christianToMuslimNameMapping[key] ?? null;
}

/** Result for one name part in a multi-name input (e.g. "David Smith" → David + Smith) */
export interface MultiNameMappingPart {
  western: string;
  canonicalKey: string | null;
  mapping: NameMapping | null;
}

/**
 * Map each word in a full name to its Islamic equivalent.
 * "David Smith" → [{ western: "David", mapping }, { western: "Smith", mapping: null }]
 * Supports first + last names and multiple middle names.
 */
export function getMultiNameMappingContext(input: string | null | undefined): MultiNameMappingPart[] {
  const raw = typeof input === "string" ? input.trim() : "";
  if (!raw) return [];
  const parts = raw.split(/\s+/).filter(Boolean);
  return parts.map(part => {
    const key = getCanonicalMappingKey(part);
    const mapping = key ? (christianToMuslimNameMapping[key] ?? null) : null;
    return {
      western: part,
      canonicalKey: key,
      mapping,
    };
  });
}

/** All Muslim name equivalents from a multi-name input (for search/display). */
export function getCombinedMuslimNamesFromMultiMapping(input: string | null | undefined): string[] {
  const parts = getMultiNameMappingContext(input);
  const out: string[] = [];
  for (const p of parts) {
    if (p.mapping?.muslimNames) {
      for (const mn of p.mapping.muslimNames) {
        if (!out.includes(mn)) out.push(mn);
      }
    }
  }
  return out;
}

/** Canonical mapping key for a name, or null if no mapping. Use for navigation to /western-names/:key */
export function getCanonicalMappingKey(name: string | null | undefined): string | null {
  const key = resolveMappingKey(name);
  if (!key) return null;
  return christianToMuslimNameMapping[key] ? key : null;
}

/** Similar mappings: by shared Muslim names, and by same category. Excludes current key. Uses pre-built indexes for O(1) lookup. */
const SIMILAR_LIMIT = 12;

export function getSimilarMappings(key: string): {
  bySharedMuslimNames: [string, NameMapping][];
  byCategory: [string, NameMapping][];
} {
  const m = christianToMuslimNameMapping[key];
  if (!m) return { bySharedMuslimNames: [], byCategory: [] };
  const sharedKeys = new Set<string>();

  for (const mn of m.muslimNames) {
    const keys = muslimNameToWesternKeys.get(mn.toLowerCase());
    if (keys) for (const k of keys) if (k !== key) sharedKeys.add(k);
  }
  const byShared: [string, NameMapping][] = [];
  for (const k of sharedKeys) {
    const v = christianToMuslimNameMapping[k];
    if (v) byShared.push([k, v]);
    if (byShared.length >= SIMILAR_LIMIT) break;
  }

  const catKeys = categoryToWesternKeys.get(m.category) ?? [];
  const byCategory: [string, NameMapping][] = [];
  for (const k of catKeys) {
    if (k === key || sharedKeys.has(k)) continue;
    const v = christianToMuslimNameMapping[k];
    if (v) byCategory.push([k, v]);
    if (byCategory.length >= SIMILAR_LIMIT) break;
  }

  return {
    bySharedMuslimNames: byShared.slice(0, SIMILAR_LIMIT),
    byCategory: byCategory.slice(0, SIMILAR_LIMIT),
  };
}

// Get all names in a category
export function getNamesByCategory(category: NameMapping["category"]): [string, NameMapping][] {
  return Object.entries(christianToMuslimNameMapping).filter(([, v]) => v.category === category);
}

/** Mappings popular in a given country (ISO 3166-1 alpha-2, e.g. "BR", "NG") */
export function getMappingsByCountry(countryCode: string | null | undefined): [string, NameMapping][] {
  const code = (countryCode ?? "").trim().toUpperCase();
  if (!code || code.length !== 2) return [];
  return Object.entries(christianToMuslimNameMapping).filter(
    ([, v]) => v.popularIn?.includes(code)
  );
}

// Get total count
export const totalMappings = Object.keys(christianToMuslimNameMapping).length;
