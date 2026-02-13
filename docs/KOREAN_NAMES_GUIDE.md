# Korean Name Support — Implementation Guide

South Korea is overwhelmingly non-Muslim. The most common modern Korean given names are effectively non-Muslim in everyday use. MuslimName.me maps 100 popular South Korean names (50 male, 50 female) to Islamic equivalents.

## Data Sources

- [korean-name.com](https://korean-name.com/en/)
- [Haps Korea](https://www.hapskorea.com/) — Popular baby names
- [Korea Times](https://www.koreatimes.co.kr/) — Baby name rankings
- [Wikipedia — List of most popular given names in South Korea](https://en.wikipedia.org/wiki/List_of_the_most_popular_given_names_in_South_Korea)
- [Tandem](https://tandem.net/) — Korean girl names

## Romanization

Korean names use hyphenated romanization (e.g. Seo-jun, Min-jun). Our system:
- **Strips hyphens** in `resolveMappingKey()` — "Seo-jun" → "seojun"
- **Accepts variants** via `westernNameVariants` — siwoo→siu, woojin→ujin, yijun→ijun, seowoo→seou

## Categories

- `korean-male` — Male names
- `korean-female` — Female names
- Unisex names (e.g. Ji-u, Ji-won, Ji-an, Yeon-u) use a single entry with "unisex" in the connection

## Example Mappings

| Korean (Romanized) | Hangul | Islamic Equivalent | Connection |
|-------------------|--------|-------------------|------------|
| Seo-jun | 서준 | Sadiq, Safiy | Auspicious; Sadiq = truthful |
| Min-jun | 민준 | Karim, Adil | Clever; Karim = generous |
| Seo-yun | 서윤 | Safiya, Warda | Auspicious; Safiya = pure |
| Ji-u | 지우 | Huda, Hidaya | Wisdom; Huda = guidance |

## Adding New Korean Names

1. Add to `christianToMuslimNameMapping` in `nameMappingData/mappingRecord.ts`
2. Use lowercase, no hyphen: `"seojun"` not `"Seo-jun"`
3. Set `popularIn: ["KR"]`, `category: "korean-male"` or `"korean-female"`
4. Add `sources` array with URLs
5. For romanization variants, add to `westernNameVariants` in `nameMappingData/variants.ts`
