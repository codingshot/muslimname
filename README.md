# MuslimName.me 🕌

> **Discover Your Muslim Name** — A comprehensive platform helping Muslim converts (reverts) choose meaningful Islamic names with Quranic references, scholarly sources, and legal name change guidance.

🌐 **Live:** [muslimname.me](https://muslimname.me)
📦 **Repo:** [github.com/codingshot/muslimname](https://github.com/ummahbuild/muslimname)
🐦 **X:** [@ummahbuild](https://x.com/ummahbuild)
🏗️ **Built by:** [ummah.build](https://ummah.build)

---

## ✨ Features

- **🔍 Name Database** — 100+ authentic Muslim names with Arabic script, meanings, etymology, and pronunciation guides
- **🗺️ 1700+ Western Name Mappings** — Christian, Korean, Chinese, Hindi, Spanish, Portuguese, and more → Islamic equivalents
- **📖 Quranic & Sunnah References** — Verified Quranic ayat and hadith citations for every applicable name
- **👑 Prophets & Companions** — Special section for names of Prophets and companions with detailed sources
- **🎯 Smart Name Generator** — Enter your name (first + last supported) for meaning-based suggestions
- **⭐ Favorites & Profile** — Save favorites, tag first/last contenders, explore name combinations
- **⚖️ Legal Name Change Guides** — Country-specific guides for 40+ countries
- **🌍 Regional Variations** — Names popular in Nigeria, Brazil, India; Turkish, African, South Asian traditions
- **📊 Multilingual Support** — Korean, Chinese, Japanese, Thai, Vietnamese, Hindi, Russian, European names
- **📱 Mobile-First Design** — Fully responsive, works beautifully on all devices
- **🔒 Privacy-First** — All data stays in your browser, no tracking, no accounts required
- **🌙 Dark Mode Support** — Built-in dark mode with proper contrast
- **🤝 Open Source** — Free forever, community-driven

## 🚀 Quick Start

```bash
git clone https://github.com/ummahbuild/muslimname.git
cd muslimname
npm install
npm run dev
```

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React + TypeScript | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| shadcn/ui | Component library |
| Framer Motion | Animations |
| React Router | Client-side routing |
| Vercel | Hosting |

## 📂 Project Structure

```
muslimname/
├── public/
│   ├── favicon.png          # App favicon
│   └── og-image.png         # Social share image
├── src/
│   ├── assets/              # Images & static assets
│   ├── components/
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── Layout.tsx       # Main layout (nav + footer)
│   │   └── NameCard.tsx     # Name display card component
│   ├── data/
│   │   ├── names.ts         # Core name database (20 names)
│   │   ├── companionsAndProphets.ts  # Prophet & companion names (15+ names)
│   │   └── legalNameChange.ts       # Legal guide data (8 countries)
│   ├── pages/
│   │   ├── Index.tsx        # Homepage with hero & search
│   │   ├── NamesPage.tsx    # Searchable name browse page
│   │   ├── NameDetail.tsx   # Individual name detail page
│   │   ├── GeneratorPage.tsx # AI name generator
│   │   ├── LegalGuidePage.tsx # Legal name change guides
│   │   ├── ContributePage.tsx # How to contribute
│   │   ├── TermsPage.tsx    # Terms of service
│   │   └── PrivacyPage.tsx  # Privacy policy
│   └── hooks/               # Custom React hooks
├── .github/
│   └── ISSUE_TEMPLATE/      # Bug, feature, name data, legal guide templates
├── CONTRIBUTING.md           # Contribution guidelines
├── vercel.json               # Vercel SPA routing config
└── README.md                 # This file
```

## 📊 Routes

| Route | Description |
|---|---|
| `/` | Homepage with hero search & featured names |
| `/names` | Browse & filter all names |
| `/names?gender=male` | Filter by gender |
| `/name/:slug` | Individual name detail page |
| `/generator` | Smart name generator |
| `/legal-guide` | Legal name change guides by country |
| `/contribute` | How to contribute to the project |
| `/terms` | Terms of service |
| `/privacy` | Privacy policy |

## 📝 To-Do List

### 🔴 Priority
- [ ] Add audio pronunciation files (native speaker recordings)
- [ ] Arabic calligraphy preview for each name
- [ ] Name comparison tool (side-by-side)

### 🟡 Done
- [x] Core name database 100+ names
- [x] 1700+ Western/non-Muslim name mappings
- [x] Prophets & Companions special names
- [x] Search & filter functionality
- [x] Name generator with meaning mapping + first/last name support
- [x] Legal name change guides (40+ countries)
- [x] Favorites system + profile with name combinations
- [x] Mobile responsive design
- [x] SEO meta tags & OG images
- [x] Open source setup (contributing, templates)

### 🟢 Future
- [ ] Meme-based personality name quiz
- [ ] AI-powered name suggestions (Lovable AI)
- [ ] User-generated revert stories
- [ ] Name certificate generator (printable PDF)
- [ ] Multi-language support (Arabic, Urdu, Turkish, French, Malay)
- [ ] Quranic verse audio playback
- [ ] Name popularity trends by country
- [ ] Sibling name coordinator
- [ ] Email signature generator (dual identity)
- [ ] Community discussion forum
- [ ] Name day anniversary reminders
- [ ] Voice recording tool (pronunciation practice)
- [ ] Hadith & Quran deep-link integration (sunnah.com, quran.com)
- [ ] Advanced filtering by letter count, phonetic similarity
- [ ] Name etymology tree visualization
- [ ] Country-specific legal guides for 30+ countries
- [ ] Integration with Islamic calendar events

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

**Quick ways to help:**
- 📛 Add names to the database
- 📖 Verify Quranic/hadith references
- ⚖️ Add legal guides for your country
- 🐛 Report bugs
- ✨ Suggest features
- 🌍 Translate the interface

## 📜 Important Links

- **Live Site:** [muslimname.me](https://muslimname.me)
- **GitHub:** [github.com/codingshot/muslimname](https://github.com/ummahbuild/muslimname)
- **Issues:** [github.com/codingshot/muslimname/issues](https://github.com/ummahbuild/muslimname/issues)
- **X (Twitter):** [@ummahbuild](https://x.com/ummahbuild)
- **Built by:** [ummah.build](https://ummah.build)

## 📄 License

Open source — built by the Ummah, for the Ummah.

---

*Made with ❤️ for new Muslims everywhere*
