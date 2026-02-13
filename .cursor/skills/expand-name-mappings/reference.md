# Name Mapping Reference: Language → Category

## Category List (NameMappingCategory)

Use these exact strings in `nameMapping.ts`:

```
biblical-male | biblical-female
western-male | western-female
hebrew | virtue
latin-male | latin-female
hindu-male | hindu-female
chinese-male | chinese-female
portuguese-male | portuguese-female
russian-male | russian-female
japanese-male | japanese-female
korean-male | korean-female
french-male | french-female
german-male | german-female
italian-male | italian-female
spanish-male | spanish-female
tribal-male | tribal-female
```

## Language → Category Mapping

| Language / Region | Male Category | Female Category | Key Format |
|-------------------|---------------|-----------------|------------|
| English (US, UK, etc.) | western-male | western-female | lowercase |
| Spanish | spanish-male | spanish-female | jose, maria, carmen |
| Portuguese | portuguese-male | portuguese-female | joao, maria, ana |
| French | french-male | french-female | pierre, marie, claire |
| German | german-male | german-female | stefan, anna, sabine |
| Italian | italian-male | italian-female | giuseppe, giulia, chiara |
| Russian | russian-male | russian-female | aleksandr, olga, natalia |
| Chinese | chinese-male | chinese-female | Pinyin + originalScript |
| Japanese | japanese-male | japanese-female | Romanized |
| Korean | korean-male | korean-female | Romanized, no hyphen |
| Hindi / Indian | hindu-male | hindu-female | arjun, priya, sita |
| Latin (Roman) | latin-male | latin-female | aurelius, lucia |
| Tribal / Indigenous | tribal-male | tribal-female | koda, zuri, malia |
| Biblical / Hebrew | biblical-male | biblical-female | adam, mary, sarah |

## Future Categories (Not Yet Added)

To add a new language, extend `NameMappingCategory` and use e.g.:

- polish-male | polish-female
- greek-male | greek-female
- dutch-male | dutch-female
- swedish-male | swedish-female
- etc.

## Lookup Sources

- Wikipedia: List of most popular given names
- Behind the Name: behindthename.com
- Regional Wikipedia (e.g. pt.wikipedia.org for Portuguese)
