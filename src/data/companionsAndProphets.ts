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
  },
  // === MORE QURANIC NAMES ===
  {
    slug: "yunus",
    name: "Yunus",
    arabic: "يونس",
    meaning: "Dove",
    detailedMeaning: "Yunus is the Arabic form of Jonah. Prophet Yunus was swallowed by a great fish after fleeing his mission. His supplication from inside the whale — 'La ilaha illa Anta, Subhanaka, inni kuntu min az-zalimin' — is one of the most powerful duas.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 76,
    themes: ["repentance", "patience", "mercy", "faith"],
    variations: ["Younus", "Younes", "Jonas (English)"],
    similarNonArabic: [{ name: "Jonah", meaning: "Dove", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Yunus (AS)", description: "Prophet of the whale, whose supplication is among the most powerful in Islam" }],
    quranicReferences: [
      { surah: "Al-Anbiya", ayah: "21:87", text: "And Dhun-Nun (Yunus), when he went off in anger and imagined that We would not decree anything upon him. Then he called out from the darknesses: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.'" },
      { surah: "As-Saffat", ayah: "37:139-144", text: "And indeed, Yunus was among the messengers. When he ran away to the laden ship... Had he not been of those who exalt Allah, he would have remained inside its belly until the Day they are resurrected." }
    ],
    hadithReferences: [{ source: "Sunan al-Tirmidhi", text: "The Prophet ﷺ said: 'The supplication of Dhun-Nun (Yunus) when he was in the belly of the whale was: La ilaha illa Anta, Subhanaka, inni kuntu min az-zalimin. No Muslim who supplicates with it for anything will fail to have his supplication answered.'" }],
    pronunciation: "YOO-nus",
    scriptureContext: { inBible: true, bibleName: "Jonah", bibleContext: "Jonah was commanded to preach to Nineveh; he fled but was swallowed by a great fish (Jonah 1-4).", inTorah: true, torahName: "Yonah (יוֹנָה)", torahContext: "Yonah is one of the Twelve Minor Prophets in the Hebrew Bible", sharedProphet: true }
  },
  {
    slug: "ishaq",
    name: "Ishaq",
    arabic: "إسحاق",
    meaning: "He Will Laugh",
    detailedMeaning: "Ishaq is the Arabic form of Isaac, son of Prophet Ibrahim and Sarah. He was given as a gift from Allah in their old age, and he is considered a prophet and patriarch in Islam.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 68,
    themes: ["blessing", "joy", "prophecy", "faith"],
    variations: ["Ishaaq", "Isaac (English)"],
    similarNonArabic: [{ name: "Isaac", meaning: "He laughs", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Ishaq (AS)", description: "Son of Ibrahim and Sarah, father of Yaqub, prophet of Allah" }],
    quranicReferences: [
      { surah: "Hud", ayah: "11:71", text: "And his wife was standing, and she smiled. Then We gave her good tidings of Ishaq, and after Ishaq, Yaqub." },
      { surah: "As-Saffat", ayah: "37:112", text: "And We gave him good tidings of Ishaq, a prophet from among the righteous." }
    ],
    hadithReferences: [],
    pronunciation: "is-HAAQ",
    scriptureContext: { inBible: true, bibleName: "Isaac", bibleContext: "Isaac was the son of Abraham and Sarah, born miraculously in their old age (Genesis 21).", inTorah: true, torahName: "Yitzhak (יִצְחָק)", torahContext: "Yitzhak is the second patriarch, whose binding (Akedat Yitzhak) is a central narrative", sharedProphet: true }
  },
  {
    slug: "yaqub",
    name: "Yaqub",
    arabic: "يعقوب",
    meaning: "Supplanter, He Who Follows",
    detailedMeaning: "Yaqub is the Arabic form of Jacob. Also known as Israel, he was the father of the twelve tribes. In the Quran, he is praised for his patience, especially regarding the loss of his son Yusuf.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 70,
    themes: ["patience", "faith", "family", "perseverance"],
    variations: ["Yacoub", "Jacob (English)"],
    similarNonArabic: [{ name: "Jacob", meaning: "Supplanter", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Yaqub (AS)", description: "Son of Ishaq, father of Yusuf and the twelve tribes" }],
    quranicReferences: [
      { surah: "Yusuf", ayah: "12:86", text: "He said, 'I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know.'" },
      { surah: "Al-Baqarah", ayah: "2:132", text: "And Ibrahim instructed his sons and so did Yaqub, 'O my sons, indeed Allah has chosen for you this religion, so do not die except while you are Muslims.'" }
    ],
    hadithReferences: [],
    pronunciation: "yah-QOOB",
    scriptureContext: { inBible: true, bibleName: "Jacob", bibleContext: "Jacob wrestled with an angel and was renamed Israel (Genesis 32).", inTorah: true, torahName: "Ya'akov (יַעֲקֹב)", torahContext: "Ya'akov is the third patriarch, whose twelve sons became the tribes of Israel", sharedProphet: true }
  },
  {
    slug: "harun",
    name: "Harun",
    arabic: "هارون",
    meaning: "High Mountain, Exalted",
    detailedMeaning: "Harun is the Arabic form of Aaron, the brother of Prophet Musa. He was known for his eloquence and gentle character. Allah appointed him as Musa's assistant and prophet.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 72,
    themes: ["eloquence", "support", "brotherhood", "prophecy"],
    variations: ["Haroon", "Aaron (English)"],
    similarNonArabic: [{ name: "Aaron", meaning: "High mountain", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Harun (AS)", description: "Brother and assistant of Musa, known for eloquence and patience" }],
    quranicReferences: [
      { surah: "Taha", ayah: "20:29-32", text: "And appoint for me a minister from my family — Harun, my brother. Increase through him my strength, and let him share my task." },
      { surah: "Al-A'raf", ayah: "7:142", text: "And Musa said to his brother Harun, 'Take my place among my people, do right, and do not follow the way of the corrupters.'" }
    ],
    hadithReferences: [],
    pronunciation: "ha-ROON",
    scriptureContext: { inBible: true, bibleName: "Aaron", bibleContext: "Aaron was the first High Priest of the Israelites and Moses' elder brother (Exodus 4:14).", inTorah: true, torahName: "Aharon (אַהֲרֹן)", torahContext: "Aharon was the first Kohen Gadol (High Priest) of Israel", sharedProphet: true }
  },
  {
    slug: "ilyas",
    name: "Ilyas",
    arabic: "إلياس",
    meaning: "My God is the Lord",
    detailedMeaning: "Ilyas is the Arabic form of Elijah. He called his people to worship Allah alone and abandon the worship of Baal. He is praised among the righteous in the Quran.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 69,
    themes: ["monotheism", "courage", "prophecy", "righteousness"],
    variations: ["Elias", "Elijah (English)"],
    similarNonArabic: [{ name: "Elijah", meaning: "My God is the Lord", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Ilyas (AS)", description: "Prophet who called his people to abandon Baal worship" }],
    quranicReferences: [
      { surah: "As-Saffat", ayah: "37:123-130", text: "And indeed, Ilyas was from among the messengers. When he said to his people, 'Will you not fear Allah? Do you call upon Ba'l and leave the best of creators?'" },
      { surah: "Al-An'am", ayah: "6:85", text: "And Zakariyya and Yahya and Isa and Ilyas — all were of the righteous." }
    ],
    hadithReferences: [],
    pronunciation: "il-YAAS",
    scriptureContext: { inBible: true, bibleName: "Elijah", bibleContext: "Elijah was a prophet who challenged the prophets of Baal (1 Kings 18).", inTorah: true, torahName: "Eliyahu (אֵלִיָּהוּ)", torahContext: "Eliyahu is awaited at every Pesach seder and is said to herald the Messiah", sharedProphet: true }
  },
  {
    slug: "alyasa",
    name: "Al-Yasa",
    arabic: "اليسع",
    meaning: "God is Salvation",
    detailedMeaning: "Al-Yasa is the Arabic form of Elisha, a prophet mentioned among the righteous in the Quran. He succeeded Prophet Ilyas and continued his mission.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 55,
    themes: ["salvation", "righteousness", "continuity"],
    variations: ["Alyasa", "Elisha (English)"],
    similarNonArabic: [{ name: "Elisha", meaning: "God is salvation", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Al-Yasa (AS)", description: "Successor of Ilyas, mentioned among the righteous prophets" }],
    quranicReferences: [
      { surah: "Al-An'am", ayah: "6:86", text: "And Ismail and Al-Yasa and Yunus and Lut — and all We preferred over the worlds." },
      { surah: "Sad", ayah: "38:48", text: "And remember Ismail, Al-Yasa and Dhul-Kifl — all are among the outstanding." }
    ],
    hadithReferences: [],
    pronunciation: "al-YA-sa",
    scriptureContext: { inBible: true, bibleName: "Elisha", bibleContext: "Elisha was the disciple and successor of Elijah, performing many miracles (2 Kings 2-13).", inTorah: true, torahName: "Elisha (אֱלִישָׁע)", torahContext: "Elisha succeeded Eliyahu as prophet", sharedProphet: true }
  },
  {
    slug: "dhulkifl",
    name: "Dhul-Kifl",
    arabic: "ذو الكفل",
    meaning: "The One of the Pledge",
    detailedMeaning: "Dhul-Kifl is mentioned twice in the Quran among the patient and righteous. Many scholars identify him with the biblical Ezekiel. His name means 'the one who undertakes responsibility.'",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 45,
    themes: ["responsibility", "patience", "righteousness"],
    variations: ["Zulkifli", "Dhulkifl"],
    similarNonArabic: [{ name: "Ezekiel", meaning: "God strengthens", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Dhul-Kifl (AS)", description: "Prophet praised for patience and righteousness in the Quran" }],
    quranicReferences: [
      { surah: "Al-Anbiya", ayah: "21:85-86", text: "And Ismail and Idris and Dhul-Kifl — all were of the patient. And We admitted them into Our mercy. Indeed, they were of the righteous." }
    ],
    hadithReferences: [],
    pronunciation: "dhul-KIF-l"
  },
  {
    slug: "shuayb",
    name: "Shuayb",
    arabic: "شعيب",
    meaning: "Who Shows the Right Path",
    detailedMeaning: "Prophet Shuayb was sent to the people of Madyan. He is known as 'Khatib al-Anbiya' (the orator of the prophets) for his eloquence. Often identified with the biblical Jethro.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 60,
    themes: ["justice", "eloquence", "commerce", "honesty"],
    variations: ["Shoaib", "Shuaib"],
    similarNonArabic: [{ name: "Jethro", meaning: "Excellence", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Shuayb (AS)", description: "Prophet sent to Madyan, known for his eloquence and call for honest trade" }],
    quranicReferences: [
      { surah: "Hud", ayah: "11:84-85", text: "And to Madyan [We sent] their brother Shuayb. He said, 'O my people, worship Allah; you have no deity other than Him. And do not decrease from the measure and the scale.'" },
      { surah: "Al-A'raf", ayah: "7:85", text: "And to Madyan [We sent] their brother Shuayb. He said, 'O my people, worship Allah; you have no deity other than Him.'" }
    ],
    hadithReferences: [],
    pronunciation: "shu-AYB"
  },
  {
    slug: "hud",
    name: "Hud",
    arabic: "هود",
    meaning: "Guidance, He Who Guides",
    detailedMeaning: "Prophet Hud was sent to the people of 'Ad, a powerful ancient civilization. An entire surah (Surah 11) is named after him. He called his people to monotheism and warned them of their arrogance.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 55,
    themes: ["guidance", "monotheism", "warning", "courage"],
    variations: ["Hood"],
    similarNonArabic: [],
    famousBearers: [{ name: "Prophet Hud (AS)", description: "Prophet sent to the people of 'Ad, an entire Quranic surah is named after him" }],
    quranicReferences: [
      { surah: "Hud", ayah: "11:50", text: "And to 'Ad [We sent] their brother Hud. He said, 'O my people, worship Allah; you have no deity other than Him. You are not but inventors of falsehood.'" },
      { surah: "Al-A'raf", ayah: "7:65", text: "And to 'Ad [We sent] their brother Hud. He said, 'O my people, worship Allah; you have no deity other than Him. Then will you not fear Him?'" }
    ],
    hadithReferences: [],
    pronunciation: "HOOD"
  },
  {
    slug: "salih",
    name: "Salih",
    arabic: "صالح",
    meaning: "Righteous, Pious, Good",
    detailedMeaning: "Prophet Salih was sent to the people of Thamud. He brought them a miraculous she-camel as a sign from Allah, but they killed it and were destroyed. His name means 'righteous' and is one of the most popular names in Arabic.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 72,
    themes: ["righteousness", "piety", "warning", "miracles"],
    variations: ["Saleh", "Saalih"],
    similarNonArabic: [{ name: "Felix", meaning: "Fortunate, good", origin: "Latin" }],
    famousBearers: [{ name: "Prophet Salih (AS)", description: "Prophet sent to Thamud, brought the miraculous she-camel" }],
    quranicReferences: [
      { surah: "Hud", ayah: "11:61", text: "And to Thamud [We sent] their brother Salih. He said, 'O my people, worship Allah; you have no deity other than Him.'" },
      { surah: "Ash-Shu'ara", ayah: "26:142-145", text: "When their brother Salih said to them, 'Will you not fear Allah? Indeed, I am to you a trustworthy messenger.'" }
    ],
    hadithReferences: [],
    pronunciation: "SAH-lih"
  },
  {
    slug: "zakariyya",
    name: "Zakariyya",
    arabic: "زكريا",
    meaning: "God Remembers",
    detailedMeaning: "Zakariyya is the Arabic form of Zechariah. He was a prophet who cared for Maryam in the temple and prayed to Allah for a son in his extreme old age. Allah answered his prayer and granted him Yahya.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 65,
    themes: ["prayer", "patience", "hope", "devotion"],
    variations: ["Zakariya", "Zechariah (English)"],
    similarNonArabic: [{ name: "Zechariah", meaning: "God remembers", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Zakariyya (AS)", description: "Caretaker of Maryam, father of Yahya, answered by Allah in old age" }],
    quranicReferences: [
      { surah: "Maryam", ayah: "19:2-7", text: "[This is] a mention of the mercy of your Lord to His servant Zakariyya. When he called to his Lord a private supplication. He said, 'My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy.'" },
      { surah: "Al-Imran", ayah: "3:37-38", text: "Every time Zakariyya entered upon her in the prayer chamber, he found with her provision. He said, 'O Maryam, from where is this for you?' She said, 'It is from Allah.'" }
    ],
    hadithReferences: [],
    pronunciation: "za-ka-RIY-yah",
    scriptureContext: { inBible: true, bibleName: "Zechariah", bibleContext: "Zechariah was a priest who was told by an angel that his wife Elizabeth would bear a son, John the Baptist (Luke 1:5-25).", inTorah: true, torahName: "Zekharyah (זְכַרְיָה)", torahContext: "Zekharyah is one of the Twelve Minor Prophets", sharedProphet: true }
  },
  {
    slug: "yahya",
    name: "Yahya",
    arabic: "يحيى",
    meaning: "He Lives, God is Gracious",
    detailedMeaning: "Yahya is the Arabic form of John (the Baptist). He was the son of Prophet Zakariyya, given as a miracle child. The Quran says he was given 'judgment while yet a boy' and was 'compassionate and pure.'",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 78,
    themes: ["purity", "compassion", "wisdom", "devotion"],
    variations: ["Yehya", "John (English)"],
    similarNonArabic: [{ name: "John", meaning: "God is gracious", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Yahya (AS)", description: "Son of Zakariyya, given wisdom as a child, known for extreme piety" }],
    quranicReferences: [
      { surah: "Maryam", ayah: "19:12-15", text: "'O Yahya, take the Scripture with determination.' And We gave him judgment while yet a boy. And affection from Us and purity, and he was fearing of Allah. And dutiful to his parents, and he was not a disobedient tyrant." },
      { surah: "Al-Imran", ayah: "3:39", text: "The angels called him while he was standing in prayer in the chamber, 'Indeed, Allah gives you good tidings of Yahya, confirming a word from Allah and [who will be] noble, abstaining, and a prophet from among the righteous.'" }
    ],
    hadithReferences: [],
    pronunciation: "YAH-yah",
    scriptureContext: { inBible: true, bibleName: "John the Baptist", bibleContext: "John the Baptist baptized Jesus in the Jordan River and is considered the forerunner of the Messiah (Matthew 3).", inTorah: false, sharedProphet: true }
  },
  {
    slug: "adam",
    name: "Adam",
    arabic: "آدم",
    meaning: "Made from Earth, Human",
    detailedMeaning: "Adam is the first human and first prophet in Islam. Created by Allah from clay, he was taught the names of all things and was honored by Allah who commanded the angels to prostrate to him. The story of Adam teaches humility, repentance, and divine mercy.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 92,
    themes: ["creation", "knowledge", "repentance", "humility"],
    variations: ["Aadam"],
    similarNonArabic: [{ name: "Adam", meaning: "Earth", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Adam (AS)", description: "First human, first prophet, father of all humanity" }],
    quranicReferences: [
      { surah: "Al-Baqarah", ayah: "2:31", text: "And He taught Adam the names — all of them. Then He showed them to the angels and said, 'Inform Me of the names of these, if you are truthful.'" },
      { surah: "Al-A'raf", ayah: "7:11", text: "And We have certainly created you, then fashioned you, then said to the angels, 'Prostrate to Adam'; so they prostrated, except for Iblis." }
    ],
    hadithReferences: [{ source: "Sahih Muslim", text: "The Prophet ﷺ said: 'Allah created Adam in His image, sixty cubits tall.'" }],
    pronunciation: "AH-dam",
    scriptureContext: { inBible: true, bibleName: "Adam", bibleContext: "Adam was the first man created by God from the dust of the ground (Genesis 2:7).", inTorah: true, torahName: "Adam (אָדָם)", torahContext: "Adam was created from the adamah (earth) and placed in Gan Eden (Garden of Eden)", sharedProphet: true }
  },
  {
    slug: "lut",
    name: "Lut",
    arabic: "لوط",
    meaning: "Hidden, Covered",
    detailedMeaning: "Lut is the Arabic form of Lot. He was the nephew of Prophet Ibrahim who was sent to the people of Sodom to call them to righteousness. He is praised in the Quran for his perseverance.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 50,
    themes: ["righteousness", "perseverance", "morality"],
    variations: ["Lot (English)"],
    similarNonArabic: [{ name: "Lot", meaning: "Hidden", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Lut (AS)", description: "Nephew of Ibrahim, sent to the people of Sodom" }],
    quranicReferences: [
      { surah: "Al-A'raf", ayah: "7:80-84", text: "And Lut, when he said to his people, 'Do you commit such immorality as no one has preceded you with from among the worlds?'" }
    ],
    hadithReferences: [],
    pronunciation: "LOOT",
    scriptureContext: { inBible: true, bibleName: "Lot", bibleContext: "Lot was Abraham's nephew who lived in Sodom (Genesis 19).", inTorah: true, torahName: "Lot (לוֹט)", torahContext: "Lot was Avraham's nephew who settled in Sedom", sharedProphet: true }
  },
  // Female Quranic-era names
  {
    slug: "jannah",
    name: "Jannah",
    arabic: "جنة",
    meaning: "Paradise, Garden",
    detailedMeaning: "Jannah is the Arabic word for Paradise/Heaven, mentioned over 70 times in the Quran. It represents the ultimate reward for believers — gardens beneath which rivers flow.",
    gender: "female",
    origin: "Arabic",
    isQuranic: true,
    popularity: 75,
    themes: ["paradise", "reward", "beauty", "hope"],
    variations: ["Janna", "Jennah"],
    similarNonArabic: [{ name: "Eden", meaning: "Garden of delight", origin: "Hebrew" }],
    famousBearers: [],
    quranicReferences: [
      { surah: "Al-Baqarah", ayah: "2:35", text: "And We said, 'O Adam, dwell, you and your wife, in Jannah and eat therefrom in abundance from wherever you will.'" }
    ],
    hadithReferences: [{ source: "Sahih Muslim", text: "The Prophet ﷺ said: 'In Jannah there are things that no eye has seen, no ear has heard, and no human heart has imagined.'" }],
    pronunciation: "JAN-nah"
  },
  {
    slug: "kawthar",
    name: "Kawthar",
    arabic: "كوثر",
    meaning: "Abundance, River in Paradise",
    detailedMeaning: "Al-Kawthar is a river in Paradise given exclusively to Prophet Muhammad ﷺ. An entire surah (Surah 108) is named after it. The name represents divine abundance and generosity.",
    gender: "female",
    origin: "Arabic",
    isQuranic: true,
    popularity: 68,
    themes: ["abundance", "blessing", "paradise", "generosity"],
    variations: ["Kawsar", "Kauthar"],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [
      { surah: "Al-Kawthar", ayah: "108:1", text: "Indeed, We have granted you Al-Kawthar." }
    ],
    hadithReferences: [{ source: "Sahih Bukhari", text: "The Prophet ﷺ said: 'Al-Kawthar is a river in Paradise, its banks are of gold and its bed is of pearls and rubies, its soil is more fragrant than musk and its water is sweeter than honey and whiter than milk.'" }],
    pronunciation: "KAW-thar"
  },
  {
    slug: "sidra",
    name: "Sidra",
    arabic: "سدرة",
    meaning: "Lote Tree",
    detailedMeaning: "Sidrat al-Muntaha is the Lote Tree at the boundary of the seventh heaven, beyond which no creation has passed. Prophet Muhammad ﷺ saw it during the Night Journey (Isra and Mi'raj). It represents the ultimate limit of human knowledge.",
    gender: "female",
    origin: "Arabic",
    isQuranic: true,
    popularity: 72,
    themes: ["spirituality", "beauty", "transcendence", "knowledge"],
    variations: ["Sidrah"],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [
      { surah: "An-Najm", ayah: "53:14-16", text: "Near the Sidrat al-Muntaha — Near it is the Garden of Refuge — When there covered the Lote Tree that which covered [it]." }
    ],
    hadithReferences: [],
    pronunciation: "SID-rah"
  },
  {
    slug: "baraka",
    name: "Baraka",
    arabic: "بركة",
    meaning: "Blessing, Divine Grace",
    detailedMeaning: "Baraka means divine blessing and grace. The concept of baraka (بركة) is central to Islamic spirituality — it represents the spiritual power and blessing from Allah that flows through people, places, and objects.",
    gender: "female",
    origin: "Arabic",
    isQuranic: true,
    popularity: 65,
    themes: ["blessing", "grace", "spirituality", "abundance"],
    variations: ["Barakah", "Barka"],
    similarNonArabic: [{ name: "Grace", meaning: "Divine grace", origin: "English" }],
    famousBearers: [{ name: "Umm Ayman (Baraka)", description: "Nursemaid and caretaker of Prophet Muhammad ﷺ, one of the first converts to Islam" }],
    quranicReferences: [
      { surah: "Al-A'raf", ayah: "7:96", text: "And if only the people of the cities had believed and feared Allah, We would have opened upon them blessings (barakat) from the heaven and the earth." }
    ],
    hadithReferences: [],
    pronunciation: "BA-ra-kah"
  },
  {
    slug: "taqwa",
    name: "Taqwa",
    arabic: "تقوى",
    meaning: "God-Consciousness, Piety",
    detailedMeaning: "Taqwa is one of the most important concepts in Islam — it means consciousness and fear of Allah, piety, and mindfulness of one's duty to God. It appears over 250 times in the Quran in various forms.",
    gender: "female",
    origin: "Arabic",
    isQuranic: true,
    popularity: 60,
    themes: ["piety", "consciousness", "virtue", "devotion"],
    variations: ["Takwa"],
    similarNonArabic: [{ name: "Piety", meaning: "Religious devotion", origin: "English" }],
    famousBearers: [],
    quranicReferences: [
      { surah: "Al-Hujurat", ayah: "49:13", text: "Indeed, the most noble of you in the sight of Allah is the most righteous of you (atqakum — having most taqwa)." }
    ],
    hadithReferences: [{ source: "Sahih Muslim", text: "The Prophet ﷺ pointed to his chest three times and said: 'Taqwa is here.'" }],
    pronunciation: "TAQ-wah"
  },
  {
    slug: "ayah",
    name: "Ayah",
    arabic: "آية",
    meaning: "Sign, Miracle, Verse of the Quran",
    detailedMeaning: "Ayah means a sign or miracle from Allah, and it is also the word for a verse of the Quran. The Quran itself contains over 6,000 ayat (verses). The word conveys the idea that everything in creation is a sign pointing to Allah.",
    gender: "female",
    origin: "Arabic",
    isQuranic: true,
    popularity: 78,
    themes: ["miracle", "scripture", "beauty", "divine"],
    variations: ["Aya", "Aaya"],
    similarNonArabic: [{ name: "Miracle", meaning: "Wonder", origin: "English" }],
    famousBearers: [],
    quranicReferences: [
      { surah: "Fussilat", ayah: "41:53", text: "We will show them Our signs (ayat) in the horizons and within themselves until it becomes clear to them that it is the truth." }
    ],
    hadithReferences: [],
    pronunciation: "AH-yah"
  },
  {
    slug: "shuayb",
    name: "Shuayb",
    arabic: "شعيب",
    meaning: "One Who Shows the Right Path",
    detailedMeaning: "Prophet Shuayb was sent to the people of Madyan. He is often identified with Jethro, father-in-law of Moses. He called his people to honest dealings and fair trade.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 62,
    themes: ["justice", "honesty", "guidance", "prophecy"],
    variations: ["Shuaib", "Shoaib"],
    similarNonArabic: [{ name: "Jethro", meaning: "Abundance", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Shuayb (AS)", description: "Prophet sent to the people of Madyan, called them to fair trade and honesty" }],
    quranicReferences: [{ surah: "Hud", ayah: "11:84-85", text: "And to Madyan [We sent] their brother Shuayb. He said, 'O my people, worship Allah; you have no deity other than Him. And do not decrease from the measure and the scale.'" }],
    hadithReferences: [],
    pronunciation: "shu-AYB",
    scriptureContext: { inBible: true, bibleName: "Jethro", bibleContext: "Jethro was the father-in-law of Moses and priest of Midian (Exodus 3:1).", inTorah: true, torahName: "Yitro (יִתְרוֹ)", torahContext: "Yitro advised Moses on governance and the judicial system", sharedProphet: true }
  },
  {
    slug: "hud",
    name: "Hud",
    arabic: "هود",
    meaning: "Repentance, Guidance",
    detailedMeaning: "Prophet Hud was sent to the people of 'Ad. An entire Surah (11) is named after him. He called his people to worship Allah alone and warned against their arrogance.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 60,
    themes: ["guidance", "patience", "prophecy", "faith"],
    variations: ["Hood"],
    similarNonArabic: [],
    famousBearers: [{ name: "Prophet Hud (AS)", description: "Prophet sent to the people of 'Ad" }],
    quranicReferences: [{ surah: "Hud", ayah: "11:50", text: "And to 'Ad [We sent] their brother Hud. He said, 'O my people, worship Allah; you have no deity other than Him.'" }],
    hadithReferences: [],
    pronunciation: "HOOD"
  },
  {
    slug: "salih",
    name: "Salih",
    arabic: "صالح",
    meaning: "Righteous, Pious",
    detailedMeaning: "Prophet Salih was sent to the people of Thamud. He presented them with a miraculous she-camel as a sign from Allah. His name itself means 'righteous.'",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 68,
    themes: ["righteousness", "piety", "prophecy", "miracle"],
    variations: ["Saleh"],
    similarNonArabic: [],
    famousBearers: [{ name: "Prophet Salih (AS)", description: "Prophet sent to the people of Thamud with the miraculous she-camel" }],
    quranicReferences: [{ surah: "Al-A'raf", ayah: "7:73", text: "And to Thamud [We sent] their brother Salih. He said, 'O my people, worship Allah; you have no deity other than Him.'" }],
    hadithReferences: [],
    pronunciation: "SAH-lih"
  },
  {
    slug: "ilyas",
    name: "Ilyas",
    arabic: "إلياس",
    meaning: "My God is Yahweh",
    detailedMeaning: "Ilyas is the Arabic form of Elijah. He called people to abandon idol worship and return to the worship of Allah alone. He is praised in the Quran as righteous.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 66,
    themes: ["faith", "courage", "prophecy", "truth"],
    variations: ["Elias", "Ilias"],
    similarNonArabic: [{ name: "Elijah", meaning: "My God is Yahweh", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Ilyas (AS)", description: "Prophet who fought against Baal worship" }],
    quranicReferences: [{ surah: "As-Saffat", ayah: "37:123-130", text: "And indeed, Ilyas was from among the messengers. When he said to his people, 'Will you not fear Allah?'" }],
    hadithReferences: [],
    pronunciation: "il-YAAS",
    scriptureContext: { inBible: true, bibleName: "Elijah", bibleContext: "Elijah confronted the prophets of Baal on Mount Carmel (1 Kings 18).", inTorah: true, torahName: "Eliyahu (אֵלִיָּהוּ)", torahContext: "Eliyahu ascended in a chariot of fire and is expected to return before Mashiach", sharedProphet: true }
  },
  {
    slug: "alyasa",
    name: "Al-Yasa",
    arabic: "اليسع",
    meaning: "God is Salvation",
    detailedMeaning: "Al-Yasa is the Arabic form of Elisha. He is mentioned in the Quran among the righteous and chosen ones.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 55,
    themes: ["righteousness", "prophecy", "faith"],
    variations: ["Alyasa", "Elisha"],
    similarNonArabic: [{ name: "Elisha", meaning: "God is salvation", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Al-Yasa (AS)", description: "Prophet mentioned among the righteous in the Quran" }],
    quranicReferences: [{ surah: "Al-An'am", ayah: "6:86", text: "And Ismail and Al-Yasa and Yunus and Lut — and all [of them] We preferred over the worlds." }],
    hadithReferences: [],
    pronunciation: "al-YA-sa",
    scriptureContext: { inBible: true, bibleName: "Elisha", bibleContext: "Elisha succeeded Elijah as prophet (2 Kings 2).", inTorah: true, torahName: "Elisha (אֱלִישָׁע)", torahContext: "Elisha performed miracles and served as prophet after Eliyahu", sharedProphet: true }
  },
  {
    slug: "dhulkifl",
    name: "Dhul-Kifl",
    arabic: "ذو الكفل",
    meaning: "Possessor of the Fold, Man of Responsibility",
    detailedMeaning: "Dhul-Kifl is mentioned in the Quran as patient and righteous. Some scholars identify him with Ezekiel or other biblical figures. His name suggests one who fulfilled a great responsibility.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 50,
    themes: ["patience", "responsibility", "righteousness"],
    variations: ["Zulkifl"],
    similarNonArabic: [{ name: "Ezekiel", meaning: "God strengthens", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Dhul-Kifl (AS)", description: "Patient prophet mentioned in the Quran" }],
    quranicReferences: [{ surah: "Al-Anbiya", ayah: "21:85-86", text: "And [mention] Ismail and Idris and Dhul-Kifl; all were of the patient." }],
    hadithReferences: [],
    pronunciation: "dhul-KIF-l",
    scriptureContext: { inBible: true, bibleName: "Ezekiel", bibleContext: "Some scholars link Dhul-Kifl to Ezekiel, the prophet of visions.", inTorah: true, torahName: "Yechezkel (יְחֶזְקֵאל)", torahContext: "Yechezkel saw visions of the divine chariot and prophesied the restoration of Israel", sharedProphet: true }
  },
  {
    slug: "lut",
    name: "Lut",
    arabic: "لوط",
    meaning: "Hidden, Covered",
    detailedMeaning: "Prophet Lut is the Arabic form of Lot. He was sent to the people of Sodom to preach against immorality. He is a nephew of Prophet Ibrahim.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 55,
    themes: ["morality", "prophecy", "faith", "patience"],
    variations: ["Lot"],
    similarNonArabic: [{ name: "Lot", meaning: "Covered", origin: "Hebrew" }],
    famousBearers: [{ name: "Prophet Lut (AS)", description: "Prophet sent to the people of Sodom" }],
    quranicReferences: [{ surah: "Al-A'raf", ayah: "7:80-81", text: "And [We had sent] Lut when he said to his people, 'Do you commit such immorality as no one has preceded you with from among the worlds?'" }],
    hadithReferences: [],
    pronunciation: "LOOT",
    scriptureContext: { inBible: true, bibleName: "Lot", bibleContext: "Lot was Abraham's nephew who lived in Sodom (Genesis 19).", inTorah: true, torahName: "Lot (לוֹט)", torahContext: "Lot was saved from the destruction of Sodom and Gomorrah", sharedProphet: true }
  },
  {
    slug: "hajar",
    name: "Hajar",
    arabic: "هاجر",
    meaning: "To Emigrate, To Flee",
    detailedMeaning: "Hajar (Hagar) was the wife of Prophet Ibrahim and mother of Prophet Ismail. Her desperate search for water between Safa and Marwa is commemorated in the Hajj pilgrimage.",
    gender: "female",
    origin: "Arabic / Hebrew",
    isQuranic: false,
    popularity: 65,
    themes: ["courage", "faith", "motherhood", "sacrifice"],
    variations: ["Hagar", "Hajer"],
    similarNonArabic: [{ name: "Hagar", meaning: "Flight", origin: "Hebrew" }],
    famousBearers: [{ name: "Hajar", description: "Mother of Prophet Ismail, her sa'i (running) between Safa and Marwa is a Hajj rite" }],
    quranicReferences: [],
    hadithReferences: [{ source: "Sahih Bukhari", text: "The sa'i between Safa and Marwa is performed in memory of Hajar's search for water for her son Ismail." }],
    pronunciation: "HA-jar",
    scriptureContext: { inBible: true, bibleName: "Hagar", bibleContext: "Hagar was Sarah's handmaid and mother of Ishmael (Genesis 16).", inTorah: true, torahName: "Hagar (הָגָר)", torahContext: "Hagar bore Yishmael to Avraham and was comforted by an angel in the wilderness" }
  }
];
