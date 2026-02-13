/** Shared types for name mapping data */
export interface NameMapping {
  muslimNames: string[];
  meaning: string;
  connection: string;
  hebrewOrigin?: string;
  originalScript?: string;
  popularIn?: string[];
  sources?: string[];
  category: NameMappingCategory;
}

export type NameMappingCategory =
  | "biblical-male" | "biblical-female" | "western-male" | "western-female" | "hebrew" | "virtue"
  | "latin-male" | "latin-female" | "hindu-male" | "hindu-female"
  | "chinese-male" | "chinese-female" | "portuguese-male" | "portuguese-female"
  | "russian-male" | "russian-female" | "japanese-male" | "japanese-female"
  | "korean-male" | "korean-female" | "french-male" | "french-female"
  | "german-male" | "german-female" | "italian-male" | "italian-female"
  | "spanish-male" | "spanish-female" | "indonesian-male" | "indonesian-female"
  | "vietnamese-male" | "vietnamese-female" | "vietnamese-unisex"
  | "thai-male" | "thai-female" | "thai-unisex"
  | "tribal-male" | "tribal-female";
