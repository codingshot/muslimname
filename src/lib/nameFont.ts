import type { NameDisplayFont } from "@/contexts/ProfileContext";

const FONT_CLASS_MAP: Record<NameDisplayFont, string> = {
  default: "font-name-default",
  amiri: "font-name-amiri",
  "noto-naskh": "font-name-noto-naskh",
  scheherazade: "font-name-scheherazade",
  kufi: "font-name-kufi",
};

export function getNameFontClass(font?: NameDisplayFont | null): string {
  return FONT_CLASS_MAP[font || "default"] ?? FONT_CLASS_MAP.default;
}

export const NAME_FONT_OPTIONS: { value: NameDisplayFont; label: string }[] = [
  { value: "default", label: "Default (Playfair)" },
  { value: "amiri", label: "Amiri (Classic Arabic)" },
  { value: "noto-naskh", label: "Noto Naskh (Quranic)" },
  { value: "scheherazade", label: "Scheherazade (Decorative)" },
  { value: "kufi", label: "Reem Kufi (Geometric)" },
];
