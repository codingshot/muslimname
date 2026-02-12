import type { MuslimName } from "./names";

// Additional names specifically for Prophets and Companions with detailed sources
export const prophetsNames: MuslimName[] = [
  {
    slug: "muhammad",
    name: "Muhammad",
    arabic: "محمد",
    meaning: "Praised, Praiseworthy",
    detailedMeaning: "Muhammad derives from the Arabic root 'h-m-d' meaning to praise. It is the name of the final Prophet of Islam ﷺ. The name appears four times in the Quran and signifies one who is constantly praised and worthy of praise.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 99,
    themes: ["praise", "leadership", "mercy", "prophecy"],
    variations: ["Mohammed", "Mohamed", "Muhammed", "Mehmet", "Mamadou"],
    similarNonArabic: [
      { name: "Benedict", meaning: "Blessed, Praised", origin: "Latin" }
    ],
    famousBearers: [
      { name: "Prophet Muhammad ﷺ", description: "The final Prophet and Messenger of Allah, Seal of the Prophets" },
      { name: "Muhammad Ali", description: "Legendary boxer and civil rights activist who converted to Islam" },
      { name: "Muhammad ibn Musa al-Khwarizmi", description: "Father of Algebra, pioneering mathematician" }
    ],
    quranicReferences: [
      { surah: "Al-Imran", ayah: "3:144", text: "Muhammad is not but a messenger. Other messengers have passed on before him." },
      { surah: "Al-Ahzab", ayah: "33:40", text: "Muhammad is not the father of any of your men, but he is the Messenger of Allah and the Seal of the Prophets." },
      { surah: "Muhammad", ayah: "47:2", text: "And those who believe and do righteous deeds and believe in what has been sent down upon Muhammad — and it is the truth from their Lord." },
      { surah: "Al-Fath", ayah: "48:29", text: "Muhammad is the Messenger of Allah; and those with him are forceful against the disbelievers, merciful among themselves." }
    ],
    hadithReferences: [
      { source: "Sahih Muslim", text: "I have five names: I am Muhammad, I am Ahmad, I am al-Mahi through whom Allah obliterates disbelief, I am al-Hashir at whose feet people will be gathered, and I am al-Aqib after whom there is no prophet." }
    ],
    pronunciation: "moo-HAM-mad"
  },
  {
    slug: "isa",
    name: "Isa",
    arabic: "عيسى",
    meaning: "God is Salvation",
    detailedMeaning: "Isa is the Arabic name for Jesus, one of the greatest prophets in Islam. He is called Isa ibn Maryam (Jesus son of Mary) and is revered as the Messiah (al-Masih). Muslims believe he was born miraculously, performed miracles by Allah's permission, and will return before the Day of Judgment.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 75,
    themes: ["prophecy", "miracles", "mercy", "faith"],
    variations: ["Eisa", "Essa", "Jesus (English)"],
    similarNonArabic: [
      { name: "Jesus", meaning: "God is salvation", origin: "Hebrew/Greek" },
      { name: "Joshua", meaning: "God is salvation", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Prophet Isa (AS)", description: "The Messiah, son of Maryam, one of the greatest prophets in Islam" }
    ],
    quranicReferences: [
      { surah: "Al-Imran", ayah: "3:45", text: "When the angels said, 'O Maryam, indeed Allah gives you good tidings of a word from Him, whose name will be the Messiah, Isa, the son of Maryam.'" },
      { surah: "An-Nisa", ayah: "4:171", text: "The Messiah, Isa, the son of Maryam, was but a messenger of Allah and His word which He directed to Maryam and a soul from Him." }
    ],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said: 'Both in this world and in the Hereafter, I am the nearest of all people to Isa, the son of Maryam.'" }
    ],
    pronunciation: "EE-sah"
  },
  {
    slug: "musa",
    name: "Musa",
    arabic: "موسى",
    meaning: "Drawn from Water",
    detailedMeaning: "Musa is the Arabic name for Moses, one of the most mentioned prophets in the Quran (mentioned by name 136 times). He is revered as Kalimullah — the one to whom Allah spoke directly. His story of standing against Pharaoh symbolizes the triumph of truth over tyranny.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 82,
    themes: ["strength", "courage", "truth", "leadership"],
    variations: ["Mousa", "Moussa", "Moses (English)"],
    similarNonArabic: [
      { name: "Moses", meaning: "Drawn from water", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Prophet Musa (AS)", description: "Kalimullah (one whom Allah spoke to directly), liberated Bani Israel from Pharaoh" },
      { name: "Musa ibn Nusayr", description: "Muslim general who conquered North Africa and aided the conquest of Hispania" }
    ],
    quranicReferences: [
      { surah: "Al-Baqarah", ayah: "2:51", text: "And when We appointed for Musa forty nights, then you took the calf after him while you were wrongdoers." },
      { surah: "Al-Qasas", ayah: "28:7", text: "And We inspired to the mother of Musa, 'Suckle him; but when you fear for him, cast him into the river.'" },
      { surah: "Taha", ayah: "20:9-14", text: "And has the story of Musa reached you? When he saw a fire and said to his family, 'Stay here; indeed, I have perceived a fire...' Indeed, I am Allah. There is no deity except Me, so worship Me." }
    ],
    hadithReferences: [],
    pronunciation: "MOO-sah"
  },
  {
    slug: "sulayman",
    name: "Sulayman",
    arabic: "سليمان",
    meaning: "Peaceful, Safe",
    detailedMeaning: "Sulayman is the Arabic form of Solomon. Prophet Sulayman was blessed with extraordinary wisdom, the ability to communicate with animals and jinn, and command over the winds. His kingdom was unparalleled in human history.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 74,
    themes: ["wisdom", "power", "peace", "leadership"],
    variations: ["Suleiman", "Suleyman", "Solomon (English)"],
    similarNonArabic: [
      { name: "Solomon", meaning: "Peace", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Prophet Sulayman (AS)", description: "Son of Prophet Dawud, king blessed with dominion over jinn, animals, and winds" },
      { name: "Suleiman the Magnificent", description: "Greatest Ottoman Sultan, ruled during the empire's golden age" }
    ],
    quranicReferences: [
      { surah: "An-Naml", ayah: "27:16", text: "And Sulayman inherited Dawud. He said, 'O people, we have been taught the language of birds, and we have been given from all things.'" },
      { surah: "Sad", ayah: "38:30", text: "And to Dawud We gave Sulayman. An excellent servant, indeed he was one repeatedly turning back [to Allah]." }
    ],
    hadithReferences: [],
    pronunciation: "su-LAY-maan"
  },
  {
    slug: "dawud",
    name: "Dawud",
    arabic: "داود",
    meaning: "Beloved",
    detailedMeaning: "Dawud is the Arabic form of David. Prophet Dawud was blessed with a beautiful voice, given the Zabur (Psalms), and was both a prophet and a king. Mountains and birds would glorify Allah alongside him.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 70,
    themes: ["devotion", "beauty", "leadership", "praise"],
    variations: ["Dawood", "Davud", "David (English)"],
    similarNonArabic: [
      { name: "David", meaning: "Beloved", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Prophet Dawud (AS)", description: "Prophet-King who received the Zabur (Psalms), father of Sulayman" }
    ],
    quranicReferences: [
      { surah: "Al-Baqarah", ayah: "2:251", text: "And Dawud killed Jalut, and Allah gave him the kingship and wisdom and taught him from that which He willed." },
      { surah: "Saba", ayah: "34:10", text: "And We certainly gave Dawud from Us bounty. [We said], 'O mountains, repeat [Our] praises with him, and the birds [as well].'" }
    ],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said: 'The most beloved prayer to Allah is the prayer of Dawud, and the most beloved fasting to Allah is the fasting of Dawud. He used to sleep half the night, pray for a third of it, and sleep for a sixth of it. He used to fast on alternate days.'" }
    ],
    pronunciation: "da-WOOD"
  },
  {
    slug: "ismail",
    name: "Ismail",
    arabic: "إسماعيل",
    meaning: "God Will Hear",
    detailedMeaning: "Ismail is the Arabic form of Ishmael, the son of Prophet Ibrahim. He is considered the ancestor of the Arab people and co-builder of the Kaaba with his father Ibrahim. His willingness to be sacrificed by his father symbolizes ultimate submission to Allah's will.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 78,
    themes: ["sacrifice", "obedience", "faith", "patience"],
    variations: ["Ismael", "Isma'il", "Ishmael (English)"],
    similarNonArabic: [
      { name: "Ishmael", meaning: "God will hear", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Prophet Ismail (AS)", description: "Son of Ibrahim, co-builder of the Kaaba, ancestor of the Arab people" }
    ],
    quranicReferences: [
      { surah: "Al-Baqarah", ayah: "2:127", text: "And when Ibrahim was raising the foundations of the House and Ismail, [saying], 'Our Lord, accept [this] from us.'" },
      { surah: "Maryam", ayah: "19:54", text: "And mention in the Book, Ismail. Indeed, he was true to his promise, and he was a messenger and a prophet." }
    ],
    hadithReferences: [],
    pronunciation: "is-ma-EEL"
  },
  {
    slug: "nuh",
    name: "Nuh",
    arabic: "نوح",
    meaning: "Rest, Comfort",
    detailedMeaning: "Nuh is the Arabic name for Noah. He is one of the five greatest prophets in Islam (Ulul Azm). Prophet Nuh called his people to monotheism for 950 years and built the Ark by Allah's command to survive the Great Flood.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 72,
    themes: ["patience", "perseverance", "faith", "salvation"],
    variations: ["Noah (English)", "Nooh"],
    similarNonArabic: [
      { name: "Noah", meaning: "Rest, comfort", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Prophet Nuh (AS)", description: "One of the Ulul Azm (greatest prophets), preached for 950 years, built the Ark" }
    ],
    quranicReferences: [
      { surah: "Nuh", ayah: "71:1", text: "Indeed, We sent Nuh to his people, [saying], 'Warn your people before there comes to them a painful punishment.'" },
      { surah: "Hud", ayah: "11:37", text: "And construct the ship under Our observation and Our inspiration and do not address Me concerning those who have wronged; indeed, they are to be drowned." }
    ],
    hadithReferences: [],
    pronunciation: "NOOH"
  },
  {
    slug: "abubakar",
    name: "Abu Bakr",
    arabic: "أبو بكر",
    meaning: "Father of the Young Camel",
    detailedMeaning: "Abu Bakr is a kunya (epithet) meaning 'Father of the Young Camel.' Abu Bakr al-Siddiq was the closest companion of Prophet Muhammad ﷺ, the first adult male to accept Islam, and the first Caliph. He was given the title al-Siddiq (the Truthful).",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 76,
    themes: ["truth", "friendship", "devotion", "leadership"],
    variations: ["Abubakar", "Abubakr", "Aboubacar", "Ebubekir"],
    similarNonArabic: [],
    famousBearers: [
      { name: "Abu Bakr al-Siddiq", description: "First Caliph of Islam, closest companion of the Prophet ﷺ, titled 'The Truthful'" }
    ],
    quranicReferences: [
      { surah: "At-Tawbah", ayah: "9:40", text: "...when they were in the cave and he said to his companion, 'Do not grieve; indeed Allah is with us.' (Referring to Abu Bakr)" }
    ],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said: 'If I were to take a Khalil (intimate friend) from this Ummah, I would take Abu Bakr.'" },
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said: 'Abu Bakr has favoured me much with his property and company. If I were to take a Khalil, I would certainly have taken Abu Bakr.'" }
    ],
    pronunciation: "ah-boo BAK-r"
  },
  {
    slug: "ali",
    name: "Ali",
    arabic: "علي",
    meaning: "Exalted, Noble, High",
    detailedMeaning: "Ali comes from the Arabic root 'a-l-w' meaning to be high or exalted. Al-Ali is one of the 99 Names of Allah. Ali ibn Abi Talib was the cousin and son-in-law of Prophet Muhammad ﷺ, the fourth Rightly Guided Caliph, known as Bab al-Ilm (Gate of Knowledge).",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 90,
    themes: ["nobility", "knowledge", "courage", "justice"],
    variations: ["Aly", "Aliy"],
    similarNonArabic: [
      { name: "Hugh", meaning: "Mind, Intellect", origin: "Germanic" },
      { name: "Albert", meaning: "Noble, Bright", origin: "Germanic" }
    ],
    famousBearers: [
      { name: "Ali ibn Abi Talib", description: "Fourth Rightly Guided Caliph, cousin and son-in-law of Prophet Muhammad ﷺ, Gate of Knowledge" },
      { name: "Muhammad Ali", description: "Boxing champion born Cassius Clay, converted to Islam in 1964" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sunan al-Tirmidhi", text: "The Prophet ﷺ said: 'I am the city of knowledge and Ali is its gate.'" },
      { source: "Sahih Muslim", text: "The Prophet ﷺ said to Ali: 'You are to me in the position that Harun was to Musa, except that there is no prophet after me.'" }
    ],
    pronunciation: "ah-LEE"
  },
  {
    slug: "uthman",
    name: "Uthman",
    arabic: "عثمان",
    meaning: "Baby Bustard (a bird), Wise Companion",
    detailedMeaning: "Uthman originally referred to a baby bustard (a type of bird). The name became one of the most prestigious in Islam through Uthman ibn Affan, the third Rightly Guided Caliph, who was known for his extreme generosity and modesty. He compiled the Quran into a single standardized text.",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 72,
    themes: ["generosity", "modesty", "wisdom", "devotion"],
    variations: ["Osman", "Othman", "Usman"],
    similarNonArabic: [],
    famousBearers: [
      { name: "Uthman ibn Affan", description: "Third Rightly Guided Caliph, married two daughters of the Prophet, compiled the Quran" },
      { name: "Osman I", description: "Founder of the Ottoman Empire" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sahih Muslim", text: "The Prophet ﷺ said: 'Should I not feel shy before a man before whom the angels feel shy? (Referring to Uthman)'" }
    ],
    pronunciation: "uth-MAAN"
  },
  {
    slug: "ruqayyah",
    name: "Ruqayyah",
    arabic: "رقية",
    meaning: "Gentle, Ascending, Enchanting",
    detailedMeaning: "Ruqayyah derives from the Arabic root meaning ascension or rising. The name is associated with gentleness and spiritual elevation. Two prominent women in early Islam bore this name — a daughter of the Prophet and a companion.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 68,
    themes: ["gentleness", "elevation", "grace"],
    variations: ["Ruqayya", "Ruqaia", "Rokaya"],
    similarNonArabic: [
      { name: "Serena", meaning: "Calm, Serene", origin: "Latin" }
    ],
    famousBearers: [
      { name: "Ruqayyah bint Muhammad", description: "Daughter of Prophet Muhammad ﷺ, wife of Uthman ibn Affan" }
    ],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "ru-QAY-yah"
  },
  {
    slug: "hussain",
    name: "Hussain",
    arabic: "حسين",
    meaning: "Beautiful, Handsome (diminutive)",
    detailedMeaning: "Hussain is the diminutive form of Hasan, meaning beautiful. The name carries immense weight in Islamic history through Hussain ibn Ali, the grandson of Prophet Muhammad ﷺ who was martyred at Karbala, becoming a symbol of standing against injustice.",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 85,
    themes: ["beauty", "sacrifice", "justice", "courage"],
    variations: ["Hussein", "Husayn", "Hüseyin"],
    similarNonArabic: [],
    famousBearers: [
      { name: "Hussain ibn Ali", description: "Grandson of Prophet Muhammad ﷺ, martyred at Karbala standing against tyranny" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sunan al-Tirmidhi", text: "The Prophet ﷺ said: 'Hussain is from me and I am from Hussain. Allah loves those who love Hussain.'" }
    ],
    pronunciation: "hoo-SAYN"
  },
  {
    slug: "hasan",
    name: "Hasan",
    arabic: "حسن",
    meaning: "Beautiful, Good, Handsome",
    detailedMeaning: "Hasan comes from the Arabic root 'h-s-n' meaning beauty and goodness. The word 'ihsan' (excellence in worship) shares the same root. Hasan ibn Ali was the elder grandson of Prophet Muhammad ﷺ, known for his wisdom and peacemaking.",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 83,
    themes: ["beauty", "goodness", "peace", "wisdom"],
    variations: ["Hassan", "Hasen"],
    similarNonArabic: [
      { name: "Kenneth", meaning: "Handsome", origin: "Scottish" },
      { name: "Beau", meaning: "Beautiful", origin: "French" }
    ],
    famousBearers: [
      { name: "Hasan ibn Ali", description: "Elder grandson of Prophet Muhammad ﷺ, known for peacemaking and generosity" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said about Hasan: 'This son of mine is a sayyid (leader), and perhaps Allah will reconcile two great groups of Muslims through him.'" }
    ],
    pronunciation: "HA-san"
  },
  {
    slug: "asiya",
    name: "Asiya",
    arabic: "آسية",
    meaning: "One Who Heals, Comforting",
    detailedMeaning: "Asiya is associated with healing and comfort. In Islamic tradition, Asiya bint Muzahim is one of the four greatest women of all time, who believed in Allah despite being the wife of Pharaoh. She chose faith over royal luxury and is promised Paradise.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 73,
    themes: ["faith", "courage", "healing", "sacrifice"],
    variations: ["Asia", "Asiyah", "Assiya"],
    similarNonArabic: [
      { name: "Faith", meaning: "Faith, Trust", origin: "English" }
    ],
    famousBearers: [
      { name: "Asiya bint Muzahim", description: "Wife of Pharaoh, one of the four greatest women in Islam, chose faith over power" }
    ],
    quranicReferences: [
      { surah: "At-Tahrim", ayah: "66:11", text: "And Allah presents an example of those who believed: the wife of Pharaoh, when she said, 'My Lord, build for me near You a house in Paradise.'" }
    ],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said: 'Sufficient for you among the women of the world are Maryam, Khadijah, Fatimah, and Asiya.'" }
    ],
    pronunciation: "AH-see-yah"
  },
  {
    slug: "salman",
    name: "Salman",
    arabic: "سلمان",
    meaning: "Safe, Secure, Peaceful",
    detailedMeaning: "Salman derives from the Arabic root 's-l-m' meaning peace and safety (the same root as Islam and Muslim). Salman al-Farisi's journey to Islam — from Zoroastrian Persia through Christianity to finally finding Prophet Muhammad ﷺ — makes him an inspirational figure for converts.",
    gender: "male",
    origin: "Arabic / Persian",
    isQuranic: false,
    popularity: 74,
    themes: ["peace", "journey", "seeking", "devotion"],
    variations: ["Salmaan", "Selman"],
    similarNonArabic: [
      { name: "Solomon", meaning: "Peace", origin: "Hebrew" },
      { name: "Frederick", meaning: "Peaceful ruler", origin: "Germanic" }
    ],
    famousBearers: [
      { name: "Salman al-Farisi", description: "Persian companion who traveled across empires seeking truth, suggested the trench at Battle of Khandaq" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Al-Hakim", text: "The Prophet ﷺ said: 'Salman is one of us, the People of the House (Ahl al-Bayt).'" }
    ],
    pronunciation: "sal-MAAN"
  }
];
