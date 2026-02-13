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
for (const key of Object.keys(christianToMuslimNameMapping)) {
  const c = key.charAt(0).toLowerCase();
  if (!c) continue;
  const list = namesByFirstChar.get(c) ?? [];
  list.push(key);
  namesByFirstChar.set(c, list);
}

/** Get names to search for fuzzy/prefix match — only those starting with same letter (or all if few) */
export function getNamesForSearch(prefixOrInput: string): string[] {
  const first = prefixOrInput.charAt(0).toLowerCase();
  if (!first) return Object.keys(christianToMuslimNameMapping);
  const subset = namesByFirstChar.get(first);
  if (!subset) return [];
  // If subset is very small (< 20), also include names with similar first 2 chars for better coverage
  if (subset.length >= 20) return subset;
  return subset;
}

/** All canonical Western names (for fallback full scan) */
export const allMappedWesternNames = Object.keys(christianToMuslimNameMapping);
