/**
 * Name mapping data — optimized for detection and lookup.
 * Pre-builds first-letter index for faster fuzzy/prefix search.
 */

import { christianToMuslimNameMapping } from "./mappingRecord";
import { westernNameVariants } from "./variants";
import { chineseCharToPinyin } from "./chinesePinyin";

export { christianToMuslimNameMapping, westernNameVariants, chineseCharToPinyin };
export type { NameMapping, NameMappingCategory } from "./types";

/** Names grouped by first character — used to reduce search space for fuzzy/prefix lookup */
const namesByFirstChar = new Map<string, string[]>();
/** Names grouped by first 2 chars — smaller set for prefix typing (e.g. "da" → david, daniel) */
const namesByFirstTwo = new Map<string, string[]>();
/** Names grouped by first 3 chars — smallest set for 3+ char input (e.g. "dav" → david) */
const namesByFirstThree = new Map<string, string[]>();
for (const key of Object.keys(christianToMuslimNameMapping)) {
  const k = key.toLowerCase();
  const c = k.charAt(0);
  if (!c) continue;
  const list = namesByFirstChar.get(c) ?? [];
  list.push(key);
  namesByFirstChar.set(c, list);
  if (k.length >= 2) {
    const two = k.slice(0, 2);
    const list2 = namesByFirstTwo.get(two) ?? [];
    list2.push(key);
    namesByFirstTwo.set(two, list2);
  }
  if (k.length >= 3) {
    const three = k.slice(0, 3);
    const list3 = namesByFirstThree.get(three) ?? [];
    list3.push(key);
    namesByFirstThree.set(three, list3);
  }
}

/** Get names to search for fuzzy/prefix match. Uses 3-char index when input ≥ 3 chars for smallest search set. */
export function getNamesForSearch(prefixOrInput: string): string[] {
  const s = prefixOrInput.toLowerCase();
  const first = s.charAt(0);
  if (!first) return Object.keys(christianToMuslimNameMapping);
  if (s.length >= 3) {
    const three = s.slice(0, 3);
    const subset3 = namesByFirstThree.get(three);
    if (subset3 && subset3.length >= 3) return subset3;
  }
  if (s.length >= 2) {
    const two = s.slice(0, 2);
    const subset2 = namesByFirstTwo.get(two);
    if (subset2 && subset2.length >= 5) return subset2;
  }
  const subset = namesByFirstChar.get(first);
  return subset ?? [];
}

/** Reverse index: muslim name (lowercase) → western keys that map to it. For O(1) similar-mappings lookup. */
export const muslimNameToWesternKeys = new Map<string, string[]>();
/** Reverse index: category → western keys. For fast same-category lookup. */
export const categoryToWesternKeys = new Map<string, string[]>();
for (const [key, m] of Object.entries(christianToMuslimNameMapping)) {
  for (const mn of m.muslimNames) {
    const l = mn.toLowerCase();
    const list = muslimNameToWesternKeys.get(l) ?? [];
    if (!list.includes(key)) list.push(key);
    muslimNameToWesternKeys.set(l, list);
  }
  const cat = m.category;
  const list = categoryToWesternKeys.get(cat) ?? [];
  list.push(key);
  categoryToWesternKeys.set(cat, list);
}

/** All canonical Western names (for fallback full scan) */
export const allMappedWesternNames = Object.keys(christianToMuslimNameMapping);
