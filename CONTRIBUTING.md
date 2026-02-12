# Contributing to MuslimName.me

Assalamu Alaikum! 👋 Thank you for your interest in contributing to MuslimName.me. This project is built by the Ummah, for the Ummah.

## 🌟 Ways to Contribute

### 📛 Name Database
- Add new Muslim names with meanings, origins, and references
- Verify existing Quranic and hadith references
- Add pronunciation guides and regional variations
- Include famous bearers and historical context

### ⚖️ Legal Guides
- Add country-specific legal name change guides
- Update existing guides with current costs and timelines
- Share personal experience navigating the process

### 🐛 Bug Reports
- Report issues with clear reproduction steps
- Include browser, device, and screenshots

### ✨ Feature Requests
- Suggest features that help Muslim converts
- Provide mockups or detailed descriptions

### 🌍 Translations
- Translate the interface into other languages
- Priority: Arabic, Urdu, Turkish, French, Malay

### 📖 Islamic Content
- Review scholarly content for accuracy
- Add missing Quranic/hadith references
- All content must be from authentic sources

## 🚀 Getting Started

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/muslimname.git
cd muslimname

# Install dependencies
npm install

# Start dev server
npm run dev
```

## 📋 Contribution Process

1. **Check existing issues** to avoid duplicates
2. **Open an issue first** for large changes
3. **Fork** the repository
4. **Create a branch** (`git checkout -b feature/your-feature`)
5. **Make your changes** with clear commit messages
6. **Test** your changes locally
7. **Submit a Pull Request** with a clear description

## 📖 Name Data Guidelines

When adding names to `src/data/names.ts`:

- **Meanings** must be verified against Arabic linguistic sources
- **Quranic references** must include Surah name, ayah number, and verified translation
- **Hadith references** must cite the collection (Sahih Bukhari, Sahih Muslim, etc.)
- **Pronunciation** should use common phonetic notation
- **Variations** should include regional spellings (Arab, Turkish, South Asian, African)

## ⚖️ Legal Guide Guidelines

When contributing to `src/data/legalNameChange.ts`:

- State the jurisdiction clearly
- Include links to official government sources
- Note the date of your information
- Add disclaimers — this is informational, not legal advice
- Include estimated costs and timelines

## 🤝 Code of Conduct

- Be respectful and welcoming to all contributors
- Ensure Islamic content is from authentic, verified sources
- Respect diverse cultural expressions of Islam
- Keep discussions focused and constructive
- No sectarian content — this platform serves all Muslims

## 🛠️ Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Framer Motion
- **Data:** Local JSON (no backend required)
- **Hosting:** Vercel

## 📂 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui base components
│   ├── Layout.tsx   # Main layout with nav & footer
│   └── NameCard.tsx # Name display card
├── data/            # Local JSON data
│   ├── names.ts     # Main name database
│   ├── companionsAndProphets.ts  # Prophet & companion names
│   └── legalNameChange.ts       # Legal guide data
├── pages/           # Route pages
│   ├── Index.tsx
│   ├── NamesPage.tsx
│   ├── NameDetail.tsx
│   ├── GeneratorPage.tsx
│   ├── LegalGuidePage.tsx
│   ├── ContributePage.tsx
│   ├── TermsPage.tsx
│   └── PrivacyPage.tsx
└── hooks/           # Custom React hooks
```

## 📬 Contact

- **GitHub Issues:** [github.com/codingshot/muslimname/issues](https://github.com/codingshot/muslimname/issues)
- **X (Twitter):** [@ummahbuild](https://x.com/ummahbuild)
- **Built by:** [ummah.build](https://ummah.build)

JazakAllahu Khairan for contributing! 🤲
