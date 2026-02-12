# Name Data & Lookup Audit

## Summary

Audit of `namesDatabase`, `christianToMuslimNameMapping`, and lookup functions. **Robustness additions**: slug aliases, input validation, null-safety, alias fallback in suggestFromMeaning, Western name variants (nicknames), first-name-only lookup for multi-word input.

---

## Lookup Logic

### `findNameBySlug(slug)`
- Normalizes to lowercase, trims; rejects empty, oversize (>80), or suspicious chars
- Tries direct match, then `slugAliases` fallback (e.g. danyal → daniyal)
- Returns `undefined` for invalid or missing

### `resolveMappingSlugToDb(mappingName)`
- Returns canonical DB slug for a mapping muslimName (for links)
- Uses findNameBySlug (which applies aliases)

### `getMappingContext(name)`
- Accepts `string | null | undefined`; trims and lowercases
- Uses **first name only** for multi-word input (e.g. "John Smith" → looks up "john")
- Resolves nicknames via `westernNameVariants` (e.g. "Mike" → "michael", "Jim" → "james")
- Returns `null` for empty

### `searchNames(query)`
- Accepts `string | null | undefined`; null-safe
- Uses `scoreMatch()` with optional chaining for all name fields

### `suggestFromMeaning(meaning: string)`
- Applies `resolveSlugAlias` when matching slug/theme (danyal → daniyal)
- Filters words to length > 1

---

## Mapping ↔ Database Mismatches

**159 mapping `muslimNames` have no corresponding slug in `namesDatabase`.**

Examples:
- `danyal` (mapping) vs `daniyal` (DB) — spelling variant
- `ilisabat` (mapping) — not in DB
- `sakhrah`, `marthad`, `rahil` — not in DB
- Many virtue/alternative names: `adel`, `farid`, `nasir`, etc.

**Impact**: Generator and Western Names pages previously linked to `/name/{slug}` for all mapped names. Links to missing slugs led to 404.

**Fix**: GeneratorPage and WesternNamesPage now use `findNameBySlug()` before rendering links. Names not in DB are shown as plain text (no link).

---

## Duplicate Slugs

Merge order: `coreNames` → `prophetsNames` (companionsAndProphets) → `quranicNames`.  
First occurrence wins when slugs collide.

~70 duplicate slugs across sources (e.g. `dawud`, `sulayman`, `maryam`). Expected; no bug.

---

## Recommendations

1. **Add missing names to DB** — Either add the mapped names that lack entries, or remove/change them in the mapping.
2. **Slug alias map** — `slugAliases.ts` maps ~30 spelling variants (danyal→daniyal, daud→dawud, sulayman→suleiman, etc.) so links resolve correctly.
3. **Western name variants** — Nicknames (Mike→Michael, Jim→James) and first-name-only lookup improve Generator "my name" discovery.
3. **Run audit script** — `node scripts/audit-names.mjs` to re-check after data changes.
