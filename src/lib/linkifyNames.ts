/**
 * Auto-link Muslim names in markdown content to /name/{slug} pages.
 * Preserves existing markdown links. Uses names from the database.
 */

import { namesDatabase } from "@/data/names";
import { christianToMuslimNameMapping } from "@/data/nameMapping";

const PLACEHOLDER = "\u200B\u200B\u200B"; // zero-width chars to avoid collision

/** Build regex-safe list of names, longest first to avoid partial matches. */
function getLinkableNames(): { name: string; slug: string }[] {
  const seen = new Set<string>();
  const pairs: { name: string; slug: string }[] = [];
  for (const n of namesDatabase) {
    const key = n.name.toLowerCase();
    if (!seen.has(key) && n.name.length >= 2) {
      seen.add(key);
      pairs.push({ name: n.name, slug: n.slug });
    }
  }
  return pairs.sort((a, b) => b.name.length - a.name.length);
}

/** Wrap Muslim names in markdown links. Skips content inside existing links. */
export function linkifyNamesInMarkdown(content: string): string {
  // 1. Replace existing markdown links with placeholders
  const links: string[] = [];
  let processed = content.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (_, text, url) => {
    links.push(`[${text}](${url})`);
    return `${PLACEHOLDER}${links.length - 1}${PLACEHOLDER}`;
  });

  // 2. Replace Muslim names with links to /name/slug
  const muslimPairs = getLinkableNames();
  for (const { name, slug } of muslimPairs) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(?<![\\[\\/\\w])(${escaped})(?![\\]\\w])`, "gi");
    processed = processed.replace(regex, (match) => `[${match}](/name/${slug})`);
  }

  // 3. Replace Western/non-Muslim names with links to /western-names/key (skip if same as Muslim name)
  const muslimLower = new Set(muslimPairs.map((p) => p.name.toLowerCase()));
  const westernKeys = Object.keys(christianToMuslimNameMapping)
    .filter((k) => k.length >= 2 && !muslimLower.has(k))
    .sort((a, b) => b.length - a.length);
  for (const key of westernKeys) {
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(?<![\\[\\/\\w])(${escaped})(?![\\]\\w])`, "gi");
    processed = processed.replace(regex, (match) => `[${match}](/western-names/${key})`);
  }

  // 4. Restore original links
  links.forEach((link, i) => {
    processed = processed.replace(`${PLACEHOLDER}${i}${PLACEHOLDER}`, link);
  });

  return processed;
}
