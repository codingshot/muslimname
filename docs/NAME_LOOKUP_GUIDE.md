# Name Lookup Guide: Expanding Non-Muslim Name Mappings

This guide explains how to find and add names for each country/region when expanding `src/data/nameMapping.ts`. Focus on **major language groups where most speakers are not Muslim**—their top names are effectively "non-Muslim" in everyday use.

---

## 1. Core Principle

There is no clean global list of "most common non-Muslim names" because:
- Many names are shared by Muslims and non-Muslims
- Naming datasets rarely tag religion

**Approach:** Treat major **languages/cultures** with non-Muslim majorities and use their most popular given names.

---

## 2. Where to Look Up Names

### Primary Source: Wikipedia

| Resource | URL | Use for |
|----------|-----|---------|
| List of most popular given names | https://en.wikipedia.org/wiki/List_of_most_popular_given_names | Regional top-10 breakdowns by country |
| List of languages by speakers | https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers | Identify large non-Muslim language groups |

### Search Strategy

1. Open the Wikipedia "List of most popular given names"
2. Use the regional tables (Africa, Americas, Asia, Europe, Oceania)
3. For each country, note **No. 1–10** male and female names
4. Prefer countries where the population is majority non-Muslim

### Language-Specific Wikipedia Variants

- **Chinese:** zh.wikipedia.org/wiki/最常見名字列表
- **Portuguese:** pt.wikipedia.org/wiki/Lista_dos_prenomes_mais_populares
- **Japanese/Korean:** Check the English list for Japan/Korea rows, or regional Wikipedia

### Other Useful Sources

- **Behind the Name:** behindthename.com — etymology, variants, usage by country
- **Baby name sites:** Often list "top names by country" (BabyCenter, Nameberry, etc.)
- **Government census/statistics:** Official birth name rankings (e.g. SSA for US, ONS for UK)

---

## 3. Language Groups & Categories

Map each language/region to a `NameMappingCategory` in `nameMapping.ts`:

| Language/Region | Category | Notes |
|-----------------|----------|-------|
| English (US, UK, Canada, Australia) | western-male, western-female | James, John, Emma, Olivia |
| Spanish (Spain, Latin America) | spanish-male, spanish-female | José, Juan, María, Carmen |
| Portuguese (Brazil, Portugal) | portuguese-male, portuguese-female | João, José, Maria, Ana |
| French (France, Quebec) | french-male, french-female | Pierre, Jean, Marie, Sophie |
| German (Germany, Austria) | german-male, german-female | Michael, Thomas, Anna |
| Italian (Italy) | italian-male, italian-female | Giuseppe, Marco, Maria, Giulia |
| Russian (Russia, Eastern Europe) | russian-male, russian-female | Aleksandr, Dmitry, Anna, Olga |
| Chinese (Mandarin, Sinitic) | chinese-male, chinese-female | Wei, Ming, Jing, Li (Pinyin + originalScript) |
| Japanese | japanese-male, japanese-female | Hiroshi, Yuki, Sakura, Haruka |
| Korean (romanized) | korean-male, korean-female | Minjun, Jiwoo, Yeon (no hyphen in key) |
| Hindi/Sanskrit (India, Hindu majority) | hindu-male, hindu-female | Arjun, Rahul, Priya, Sita |
| Latin (Ancient Roman) | latin-male, latin-female | Aurelius, Julius, Lucia |
| Tribal (Native American, African, Pacific) | tribal-male, tribal-female | Koda, Zuri, Malia, Chidi |
| Biblical/Hebrew | biblical-male, biblical-female | Adam, Moses, Mary, Sarah |

---

## 4. How to Add a New Name

### Mapping Entry Format

```ts
"keyname": {
  muslimNames: ["slug1", "slug2"],  // Use slugs from namesDatabase
  meaning: "Original meaning in source culture",
  connection: "How it maps to Islamic tradition — meaning-based or phonetic",
  originalScript?: "字",  // For Chinese/Japanese/Korean if applicable
  category: "language-male" | "language-female"
}
```

### Checklist for Each Name

- [ ] **Key:** Lowercase, no diacritics for primary key (add diacritic variant separately if needed)
- [ ] **No duplicate keys:** Check `christianToMuslimNameMapping` — each key must be unique
- [ ] **muslimNames:** Prefer slugs that exist in `namesDatabase` (use `findNameBySlug`)
- [ ] **meaning:** Brief, accurate meaning in the source language
- [ ] **connection:** Clear bridge to Islamic/Arabic equivalent (meaning, prophet, virtue, etc.)
- [ ] **category:** Correct `-male` or `-female` for the language

### Diacritics

- Use `normalizeDiacritics()` — José → jose, João → joao
- Add both forms as keys if common: `"joao"` and optionally document `"joão"` normalizes

### Chinese / CJK

- Add `originalScript` for characters used in mapping (e.g. `"伟"` for Wei)
- Add to `chineseCharToPinyin` in nameMapping.ts if using character lookup
- Use Pinyin as primary key; characters for display/search

---

## 5. Validation Checks

Before committing:

1. **Build:** `npm run build` — no duplicate key errors
2. **Slug check:** Ensure `muslimNames` slugs exist in `src/data/names.ts` or `slugAliases.ts`
3. **Category:** Matches an existing `NameMappingCategory`
4. **WesternNamesPage:** Add new categories to the page if you added a new language group

---

## 6. Regions to Expand (Priority)

High-population, non-Muslim-majority regions to target:

1. **Chinese** — China (Mandarin, Cantonese)
2. **Spanish** — Spain, Mexico, Argentina, Colombia, etc.
3. **Portuguese** — Brazil, Portugal
4. **Russian** — Russia, Ukraine, Belarus
5. **Japanese** — Japan
6. **Korean** — South Korea
7. **French** — France, Quebec
8. **German** — Germany, Austria, Switzerland
9. **Italian** — Italy
10. **Hindi/Indian** — India (Hindu/Sikh naming pools)
11. **Polish, Czech, Hungarian** — Eastern Europe (future)
12. **Greek** — Greece (future)
13. **Dutch** — Netherlands (future)
14. **Scandinavian** — Sweden, Norway, Denmark (future)

---

## 7. Cross-Linguistic Names

Some names appear in many languages. Map variants to the same Muslim equivalent:

- **Alexander** → Aleksandr, Alejandro, Alexandre, Alessandro
- **Maria/Mary** → Marie, María, Mariya, Maryam
- **George** → Jorge, Georg, Giorgos
- **Peter** → Pedro, Pietro, Petar, Pierre

Use `westernNameVariants` for nickname/variant resolution; use direct keys for each language-specific spelling when it's the standard form in that culture.
