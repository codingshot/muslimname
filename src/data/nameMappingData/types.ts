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
  | "tribal-male" | "tribal-female"
  | "filipino-male" | "filipino-female"
  | "african-male" | "african-female"
  | "scandinavian-male" | "scandinavian-female"
  | "polish-male" | "polish-female"
  | "greek-male" | "greek-female"
  | "dutch-male" | "dutch-female"
  | "hungarian-male" | "hungarian-female"
  | "romanian-male" | "romanian-female"
  | "czech-male" | "czech-female"
  | "croatian-male" | "croatian-female"
  | "baltic-male" | "baltic-female"
  | "georgian-male" | "georgian-female"
  | "armenian-male" | "armenian-female"
  | "ethiopian-male" | "ethiopian-female"
  | "tamil-male" | "tamil-female"
  | "bengali-male" | "bengali-female"
  | "burmese-male" | "burmese-female"
  | "swahili-male" | "swahili-female"
  | "celtic-male" | "celtic-female";
