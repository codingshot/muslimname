# Fiqh of Names: Islamic Rulings on Name Changes

This document describes how MuslimName.me implements Islamic fiqh (jurisprudence) for name rulings when a user enters a name.

## Core Rulings

Names fall into four categories:

1. **Obligatory to change (wajib)** — Names involving shirk or explicit kufr
2. **Recommended to change (mustahabb/makruh)** — Names with bad, ugly, arrogant, or inappropriate meanings
3. **Permissible (mubah)** — Neutral or good names, even if non-Arabic
4. **Preferred (mustahabb)** — Names indicating servitude to Allah, prophets, or virtuous meanings

## Names That Must Be Changed

### Servitude to other than Allah
- **Abd al-Masih** — Servant of the Messiah (Jesus)
- **Abd al-Rasul** — Servant of the Messenger
- **Abd al-Ka'bah** — Servant of the Kaaba
- **Abd al-Husayn** — Servant of a human
- **Abd al-Shams** — Servant of the sun (created thing)

**Logic:** "Abd" + X is a statement of worship; only Allah's names are allowed (Abdullah, Abdur-Rahman, etc.).

### Divinity claims
- **Malik al-Amlak** — King of kings (explicitly condemned in hadith)
- Names that use Allah's exclusive names for humans (Ar-Rahman, Al-Alim, etc. when not "Abd Ar-Rahman")

### Deity names
- Names of idols/deities used in religious veneration (e.g. Shiva, Vishnu, Zeus when clearly tied to worship)

## Names That Are Recommended to Change

- **Harb** (War) — Harsh meaning; Prophet ﷺ changed such names
- Names with arrogant or self-praising meanings
- Names that invite mockery

## Names That Are Fine to Keep

- Neutral or good meanings (John, Maria, David, Hope, Grace)
- Culturally non-Muslim but clean
- Islam does not require Arabization

## Quran References Used

- Luqman 31:13 — "Indeed, shirk is a great injustice."
- An-Nisa 4:48 — Allah does not forgive shirk
- Ash-Shu'ara 26:213 — Do not call upon another deity alongside Allah
- Al-Qasas 28:88 — Do not invoke any deity besides Him

## Hadith References

- "The most despicable name in the sight of Allah is a man named 'King of kings'; there is no king except Allah."
- Prophet ﷺ changed names like Harb (War) to Salm (Peace)

## Implementation

The fiqh module lives in `src/data/fiqh.ts` and is displayed via `FiqhPanel` on:
- Name Mapping Detail page
- Generator page (when mapping exists or when name is entered without mapping)

Detection uses regex patterns for forbidden "Abd" combinations, a set of deity names, and pattern matching for divinity claims.
