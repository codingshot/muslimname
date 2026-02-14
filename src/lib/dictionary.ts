/**
 * Free Dictionary API - https://dictionaryapi.dev/
 * Open source, no API key required.
 * Used to detect meanings of English words when people are named after things (e.g., Grace, Hope, Rose).
 */

const API_BASE = "https://api.dictionaryapi.dev/api/v2/entries/en";

interface DictionaryDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

interface DictionaryMeaning {
  partOfSpeech: string;
  definitions: DictionaryDefinition[];
  synonyms: string[];
  antonyms: string[];
}

interface DictionaryEntry {
  word: string;
  meanings: DictionaryMeaning[];
}

const cache = new Map<string, { meaning: string; words: string[] }>();
const MIN_WORD_LENGTH = 3;
const MAX_CACHE_SIZE = 100;

/** Extract searchable meaning words from definition text (e.g., "Charming, pleasing qualities" → ["charming", "pleasing", "qualities"]) */
function extractMeaningWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s,]/g, " ")
    .split(/[\s,]+/)
    .filter((w) => w.length >= 2 && !/^\d+$/.test(w));
}

/** Get the best meaning string and search terms for suggestFromMeaning */
export async function fetchWordMeaning(
  word: string
): Promise<{ meaning: string; searchWords: string[] } | null> {
  const normalized = word.trim().toLowerCase();
  if (normalized.length < MIN_WORD_LENGTH || !/^[a-z-]+$/.test(normalized)) {
    return null;
  }

  const cached = cache.get(normalized);
  if (cached) return { meaning: cached.meaning, searchWords: cached.words };

  try {
    const res = await fetch(`${API_BASE}/${encodeURIComponent(normalized)}`, {
      signal: AbortSignal.timeout(5000),
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return null;

    const data = (await res.json()) as DictionaryEntry[];
    if (!Array.isArray(data) || data.length === 0) return null;

    const entry = data[0];
    const allWords = new Set<string>([normalized]);

    // Prefer noun meanings for names (people are often named after things/qualities)
    const nounMeanings = entry.meanings.filter((m) => m.partOfSpeech === "noun");
    const meaningsToUse = nounMeanings.length > 0 ? nounMeanings : entry.meanings;

    let meaningStr = "";
    for (const m of meaningsToUse.slice(0, 2)) {
      for (const def of m.definitions.slice(0, 2)) {
        const words = extractMeaningWords(def.definition);
        words.forEach((w) => allWords.add(w));
        if (def.synonyms?.length) {
          def.synonyms.slice(0, 3).forEach((s) => allWords.add(s.toLowerCase()));
        }
        if (!meaningStr) meaningStr = def.definition;
      }
    }

    // Fallback: first definition from any part of speech
    if (!meaningStr && entry.meanings[0]?.definitions[0]) {
      meaningStr = entry.meanings[0].definitions[0].definition;
      extractMeaningWords(meaningStr).forEach((w) => allWords.add(w));
    }

    if (!meaningStr) return null;

    const searchWords = [...allWords].filter((w) => w.length >= 2);
    const result = { meaning: meaningStr, searchWords };

    // Simple cache eviction
    if (cache.size >= MAX_CACHE_SIZE) {
      const firstKey = cache.keys().next().value;
      if (firstKey) cache.delete(firstKey);
    }
    cache.set(normalized, result);

    return result;
  } catch {
    return null;
  }
}
