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
for (const key of Object.keys(christianToMuslimNameMapping)) {
  const c = key.charAt(0).toLowerCase();
  if (!c) continue;
  const list = namesByFirstChar.get(c) ?? [];
  list.push(key);
  namesByFirstChar.set(c, list);
  if (key.length >= 2) {
    const two = (key.slice(0, 2)).toLowerCase();
    const list2 = namesByFirstTwo.get(two) ?? [];
    list2.push(key);
    namesByFirstTwo.set(two, list2);
  }
}

/** Get names to search for fuzzy/prefix match. Uses 2-char index when input ≥ 2 chars. */
export function getNamesForSearch(prefixOrInput: string): string[] {
  const s = prefixOrInput.toLowerCase();
  const first = s.charAt(0);
  if (!first) return Object.keys(christianToMuslimNameMapping);
  if (s.length >= 2) {
    const two = s.slice(0, 2);
    const subset2 = namesByFirstTwo.get(two);
    if (subset2 && subset2.length >= 5) return subset2;
  }
  const subset = namesByFirstChar.get(first);
  return subset ?? [];
}

/** All canonical Western names (for fallback full scan) */
export const allMappedWesternNames = Object.keys(christianToMuslimNameMapping);
