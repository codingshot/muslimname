# Legal Guides Fact-Check Report

Last run: 2026-02

## Summary

- **244 entries** verified
- **Country codes**: All match ISO 3166-1 alpha-2 (including MY-SS for Sabah & Sarawak)
- **Flags**: All correct (regional indicator symbols from country code)
- **Duplicates**: None

## Corrections Applied

| Item | Before | After |
|------|--------|-------|
| **Turkey** | "Turkey" | "Türkiye" (official name since 2022) |
| **US SSA URL** | ssa.gov/myaccount/name-change.html (404) | ssa.gov/personal-record/change-name |
| **UK deed poll cost** | £42 | £53.05 (current gov.uk figure) |
| **US USCIS resource** | "Legal Name Change" | "Update Immigration Documents" (USCIS updates docs after court order; courts grant name changes) |

## Accepted Name Variations

These differ from ISO formal names but are correct and user-friendly:

- **South Korea** (ISO: "Korea, Republic of")
- **British Virgin Islands** (ISO: "Virgin Islands (British)")
- **United States Virgin Islands** (ISO: "Virgin Islands (U.S.)")
- **United Kingdom** (ISO: "United Kingdom of Great Britain and Northern Ireland")
- **Russia** (ISO: "Russian Federation")

## Running the Fact-Check

```bash
node scripts/factcheck-legal-guides.mjs
```
