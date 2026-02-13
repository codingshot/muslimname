# Prompt: Expand Name Mappings

Copy and customize this prompt when asking an AI or doing manual research to expand name mappings.

---

## Basic prompt

```
I'm expanding the non-Muslim name mappings in muslimname (src/data/nameMapping.ts). 

Target: [LANGUAGE/REGION - e.g. Polish, Greek, Dutch]

Please:
1. Look up the most popular given names for [country/region] using Wikipedia "List of most popular given names" or similar sources.
2. For the top 10 male and top 10 female names, provide:
   - The name (romanized/lowercase for the mapping key)
   - Its meaning in the source language
   - A plausible Muslim/Arabic equivalent based on meaning, sound, or virtue (use names like those in namesDatabase: yusuf, fatima, noor, etc.)
3. Suggest the correct category (e.g. polish-male, polish-female) - we may need to add it to NameMappingCategory.

Format each as:
"key": { muslimNames: ["..."], meaning: "...", connection: "...", category: "..." }
```

---

## With language-specific instructions

```
[Same as above, plus:]

Language notes:
- [e.g. Polish uses ą, ę, ł — provide both normalized key (e.g. "jan") and note if diacritic form is common]
- [e.g. Greek names: use Roman transliteration as key]
- [e.g. Dutch: similar to German, check for overlap with existing german-* entries]
```

---

## For Chinese / CJK

```
[Same as above, plus:]

For Chinese names:
- Use Pinyin as the mapping key (e.g. "wei", "ming", "jing")
- Include originalScript with the Chinese character (e.g. originalScript: "伟")
- I'll need to add the character to chineseCharToPinyin for multilanguage lookup
```

---

## Validation checklist (run after adding)

- [ ] `npm run build` passes (no duplicate keys)
- [ ] All muslimNames slugs exist in namesDatabase or slugAliases
- [ ] New category added to NameMappingCategory if new language
- [ ] WesternNamesPage.tsx updated with new category filter/stats if new language
