export interface MuslimName {
  slug: string;
  name: string;
  arabic: string;
  meaning: string;
  detailedMeaning: string;
  gender: "male" | "female" | "unisex";
  origin: string;
  isQuranic: boolean;
  popularity: number; // 1-100
  themes: string[];
  variations: string[];
  similarNonArabic: { name: string; meaning: string; origin: string }[];
  famousBearers: { name: string; description: string }[];
  quranicReferences: { surah: string; ayah: string; text: string }[];
  hadithReferences: { source: string; text: string }[];
  pronunciation: string;
}

import { prophetsNames } from "./companionsAndProphets";

const coreNames: MuslimName[] = [
  {
    slug: "abdullah",
    name: "Abdullah",
    arabic: "عبد الله",
    meaning: "Servant of Allah",
    detailedMeaning: "Abdullah is composed of two Arabic words: 'Abd' meaning servant/worshipper and 'Allah' meaning God. It is considered one of the most beloved names to Allah, as mentioned in authentic hadith. The name signifies complete devotion and submission to the Creator.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 95,
    themes: ["devotion", "worship", "humility"],
    variations: ["Abdallah", "Abdellah", "Abdulla", "Obaidullah"],
    similarNonArabic: [
      { name: "Theodore", meaning: "Gift of God", origin: "Greek" },
      { name: "Gottlieb", meaning: "Love of God", origin: "German" },
      { name: "Amadeus", meaning: "Love of God", origin: "Latin" }
    ],
    famousBearers: [
      { name: "Abdullah ibn Abd al-Muttalib", description: "Father of Prophet Muhammad ﷺ" },
      { name: "Abdullah ibn Umar", description: "Prominent companion of the Prophet and son of Umar ibn al-Khattab" },
      { name: "Abdullah ibn Abbas", description: "Cousin of the Prophet, known as the scholar of the Ummah" }
    ],
    quranicReferences: [
      { surah: "Al-Jinn", ayah: "72:19", text: "And when the servant of Allah stood up calling upon Him, they almost became about him a compacted mass." }
    ],
    hadithReferences: [
      { source: "Sahih Muslim", text: "The most beloved names to Allah are Abdullah and Abdur-Rahman." }
    ],
    pronunciation: "Ab-DUL-lah"
  },
  {
    slug: "aisha",
    name: "Aisha",
    arabic: "عائشة",
    meaning: "Living, Alive, Prosperous",
    detailedMeaning: "Aisha comes from the Arabic root 'ayn-ya-shin' which means to live or to be alive. The name carries connotations of vitality, prosperity, and a full life. It represents someone who is vibrant, lively, and blessed with well-being.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 92,
    themes: ["life", "vitality", "prosperity"],
    variations: ["Ayesha", "Aysha", "Aischa", "Aicha"],
    similarNonArabic: [
      { name: "Vivian", meaning: "Alive, Living", origin: "Latin" },
      { name: "Zoe", meaning: "Life", origin: "Greek" },
      { name: "Eve", meaning: "Living one", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Aisha bint Abu Bakr", description: "Wife of Prophet Muhammad ﷺ, renowned scholar and narrator of hadith" },
      { name: "Aisha bint Talha", description: "Granddaughter of Abu Bakr, known for her beauty and knowledge" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "Aisha reported that the Prophet ﷺ said: 'The superiority of Aisha over other women is like the superiority of tharid over other foods.'" }
    ],
    pronunciation: "AH-ee-shah"
  },
  {
    slug: "yusuf",
    name: "Yusuf",
    arabic: "يوسف",
    meaning: "God Increases, God Will Add",
    detailedMeaning: "Yusuf is the Arabic form of Joseph. In Islamic tradition, Prophet Yusuf is celebrated for his extraordinary beauty, patience through trials, wisdom in governance, and his ability to forgive. His story occupies an entire surah in the Quran, described as 'the best of stories.'",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 90,
    themes: ["beauty", "patience", "wisdom", "forgiveness"],
    variations: ["Youssef", "Yousuf", "Yousif", "Jusuf", "Yousef"],
    similarNonArabic: [
      { name: "Joseph", meaning: "He will add", origin: "Hebrew" },
      { name: "José", meaning: "He will add", origin: "Spanish" },
      { name: "Giuseppe", meaning: "He will add", origin: "Italian" }
    ],
    famousBearers: [
      { name: "Prophet Yusuf (AS)", description: "Prophet mentioned extensively in the Quran, known for his beauty and patience" },
      { name: "Yusuf ibn Tashfin", description: "Founder of the Almoravid dynasty, united Muslim Spain" },
      { name: "Yusuf Islam (Cat Stevens)", description: "British musician who embraced Islam in 1977" }
    ],
    quranicReferences: [
      { surah: "Yusuf", ayah: "12:4", text: "When Yusuf said to his father, 'O my father, indeed I have seen eleven stars and the sun and the moon; I saw them prostrating to me.'" },
      { surah: "Yusuf", ayah: "12:3", text: "We relate to you the best of stories in what We have revealed to you of this Quran." }
    ],
    hadithReferences: [],
    pronunciation: "YOO-suf"
  },
  {
    slug: "fatima",
    name: "Fatima",
    arabic: "فاطمة",
    meaning: "One Who Abstains, One Who Weans",
    detailedMeaning: "Fatima derives from the Arabic root 'fa-ta-ma' meaning to abstain or wean. In Islamic tradition, it symbolizes purity and distinction. The name carries deep spiritual significance as Fatima al-Zahra is one of the most revered women in Islam.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 88,
    themes: ["purity", "distinction", "strength"],
    variations: ["Fatimah", "Fatemeh", "Fatma", "Fatouma", "Fátima"],
    similarNonArabic: [
      { name: "Catherine", meaning: "Pure", origin: "Greek" },
      { name: "Agnes", meaning: "Pure, Holy", origin: "Latin" }
    ],
    famousBearers: [
      { name: "Fatima al-Zahra", description: "Daughter of Prophet Muhammad ﷺ, wife of Ali ibn Abi Talib" },
      { name: "Fatima bint Mubarak", description: "Mother of the Nation of the UAE" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said: 'Fatima is a part of me, whoever angers her angers me.'" }
    ],
    pronunciation: "FAH-tee-mah"
  },
  {
    slug: "omar",
    name: "Omar",
    arabic: "عمر",
    meaning: "Flourishing, Long-lived",
    detailedMeaning: "Omar comes from the Arabic root 'a-m-r' meaning to live long or to flourish. It also carries connotations of eloquence and prosperity. The name is strongly associated with justice and leadership in Islamic tradition.",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 87,
    themes: ["leadership", "justice", "strength"],
    variations: ["Umar", "Omer", "Ömer"],
    similarNonArabic: [
      { name: "Victor", meaning: "Conqueror", origin: "Latin" },
      { name: "Edmund", meaning: "Prosperity protector", origin: "English" }
    ],
    famousBearers: [
      { name: "Umar ibn al-Khattab", description: "Second Caliph of Islam, known as al-Farooq (the one who distinguishes truth from falsehood)" },
      { name: "Umar ibn Abd al-Aziz", description: "Eighth Umayyad Caliph, known as the fifth rightly guided caliph" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said: 'If there were to be a prophet after me, it would be Umar ibn al-Khattab.'" }
    ],
    pronunciation: "OH-mar"
  },
  {
    slug: "khadijah",
    name: "Khadijah",
    arabic: "خديجة",
    meaning: "Premature Child, Trustworthy",
    detailedMeaning: "Khadijah originally meant a premature child, but the name became synonymous with trustworthiness, dignity, and strength through its most famous bearer. Khadijah bint Khuwaylid was known as al-Tahira (the Pure) even before Islam.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 85,
    themes: ["strength", "trust", "dignity", "independence"],
    variations: ["Khadija", "Hadija", "Hatice", "Kadija"],
    similarNonArabic: [
      { name: "Fides", meaning: "Faith, Trust", origin: "Latin" },
      { name: "Vera", meaning: "Truth, Faith", origin: "Russian" }
    ],
    famousBearers: [
      { name: "Khadijah bint Khuwaylid", description: "First wife of Prophet Muhammad ﷺ, first person to accept Islam, successful businesswoman" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sahih Muslim", text: "Jibreel came to the Prophet and said: 'Give Khadijah greetings of peace from her Lord.'" }
    ],
    pronunciation: "kha-DEE-jah"
  },
  {
    slug: "ibrahim",
    name: "Ibrahim",
    arabic: "إبراهيم",
    meaning: "Father of Nations",
    detailedMeaning: "Ibrahim is the Arabic form of Abraham. In Islam, Prophet Ibrahim is revered as Khalilullah (the Friend of Allah) and is considered the father of monotheism. He demonstrated unwavering faith and is the patriarch shared by Islam, Christianity, and Judaism.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 93,
    themes: ["faith", "sacrifice", "friendship with God", "monotheism"],
    variations: ["Abraham", "Ibraheem", "Brahim", "Ebrahim"],
    similarNonArabic: [
      { name: "Abraham", meaning: "Father of many", origin: "Hebrew" },
      { name: "Avram", meaning: "Exalted father", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Prophet Ibrahim (AS)", description: "Known as Khalilullah, builder of the Kaaba, father of Prophets Ismail and Ishaq" },
      { name: "Ibrahim ibn Muhammad", description: "Son of Prophet Muhammad ﷺ" }
    ],
    quranicReferences: [
      { surah: "Al-Baqarah", ayah: "2:124", text: "And when Ibrahim was tested by his Lord with certain words, and he fulfilled them. [Allah] said, 'Indeed, I will make you a leader for the people.'" },
      { surah: "Ibrahim", ayah: "14:35", text: "And when Ibrahim said, 'My Lord, make this city secure and keep me and my sons away from worshipping idols.'" }
    ],
    hadithReferences: [],
    pronunciation: "ib-ra-HEEM"
  },
  {
    slug: "maryam",
    name: "Maryam",
    arabic: "مريم",
    meaning: "Beloved, Wished-for Child",
    detailedMeaning: "Maryam is the Arabic form of Mary. She is the only woman mentioned by name in the Quran and has an entire surah named after her. Maryam represents the pinnacle of piety, purity, and devotion in Islam, chosen above all women of the worlds.",
    gender: "female",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 91,
    themes: ["piety", "purity", "devotion", "chosen"],
    variations: ["Mariam", "Meriem", "Meryem", "Miriam"],
    similarNonArabic: [
      { name: "Mary", meaning: "Beloved", origin: "Hebrew" },
      { name: "Maria", meaning: "Beloved", origin: "Latin" },
      { name: "Marie", meaning: "Beloved", origin: "French" }
    ],
    famousBearers: [
      { name: "Maryam bint Imran", description: "Mother of Prophet Isa (Jesus), the most honored woman in the Quran" }
    ],
    quranicReferences: [
      { surah: "Al-Imran", ayah: "3:42", text: "And when the angels said, 'O Maryam, indeed Allah has chosen you and purified you and chosen you above the women of the worlds.'" },
      { surah: "Maryam", ayah: "19:16", text: "And mention in the Book, Maryam, when she withdrew from her family to a place facing east." }
    ],
    hadithReferences: [],
    pronunciation: "MAR-yam"
  },
  {
    slug: "hamza",
    name: "Hamza",
    arabic: "حمزة",
    meaning: "Lion, Strong, Steadfast",
    detailedMeaning: "Hamza derives from the Arabic root meaning strength and steadfastness. It evokes the image of a lion — courageous, dignified, and unwavering. The name carries powerful associations with bravery and conviction in Islamic history.",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 82,
    themes: ["courage", "strength", "bravery", "honor"],
    variations: ["Hamzah", "Hamze"],
    similarNonArabic: [
      { name: "Leo", meaning: "Lion", origin: "Latin" },
      { name: "Ari", meaning: "Lion", origin: "Hebrew" },
      { name: "Leon", meaning: "Lion", origin: "Greek" }
    ],
    famousBearers: [
      { name: "Hamza ibn Abd al-Muttalib", description: "Uncle of Prophet Muhammad ﷺ, known as the Lion of Allah and martyred at Uhud" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Various collections", text: "The Prophet ﷺ called Hamza 'Asadullah' (the Lion of Allah) and 'Sayyid al-Shuhada' (Chief of the Martyrs)." }
    ],
    pronunciation: "HAM-zah"
  },
  {
    slug: "noor",
    name: "Noor",
    arabic: "نور",
    meaning: "Light, Radiance",
    detailedMeaning: "Noor comes from the Arabic root 'nun-waw-ra' meaning light. In the Quran, Allah is described as the Light of the heavens and the earth. The name symbolizes divine guidance, spiritual illumination, and inner radiance.",
    gender: "unisex",
    origin: "Arabic",
    isQuranic: true,
    popularity: 86,
    themes: ["light", "guidance", "spirituality", "radiance"],
    variations: ["Nur", "Nour", "Noora", "Nura"],
    similarNonArabic: [
      { name: "Lucy", meaning: "Light", origin: "Latin" },
      { name: "Claire", meaning: "Clear, Bright", origin: "French" },
      { name: "Elena", meaning: "Shining light", origin: "Greek" }
    ],
    famousBearers: [
      { name: "Noor Inayat Khan", description: "WWII British spy of Indian-Muslim heritage, awarded George Cross posthumously" },
      { name: "Queen Noor of Jordan", description: "American-born queen consort of Jordan" }
    ],
    quranicReferences: [
      { surah: "An-Nur", ayah: "24:35", text: "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp." }
    ],
    hadithReferences: [],
    pronunciation: "NOOR"
  },
  {
    slug: "zayn",
    name: "Zayn",
    arabic: "زين",
    meaning: "Beauty, Grace, Adornment",
    detailedMeaning: "Zayn comes from the Arabic root meaning beauty, grace, and adornment. It refers to both physical and spiritual beauty — the beauty of character, faith, and righteousness. The name embodies elegance and excellence.",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 78,
    themes: ["beauty", "grace", "excellence"],
    variations: ["Zain", "Zein", "Zayne", "Zen"],
    similarNonArabic: [
      { name: "Beau", meaning: "Beautiful", origin: "French" },
      { name: "Kenneth", meaning: "Handsome", origin: "Scottish" }
    ],
    famousBearers: [
      { name: "Zayn al-Abidin", description: "Great-grandson of Prophet Muhammad ﷺ, renowned for his piety and devotion" }
    ],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "ZAYN"
  },
  {
    slug: "aminah",
    name: "Aminah",
    arabic: "آمنة",
    meaning: "Trustworthy, Faithful, Secure",
    detailedMeaning: "Aminah derives from the Arabic root 'a-m-n' meaning safety, security, and trust. The name conveys a sense of reliability, faithfulness, and peace. It is deeply connected to the concept of iman (faith) in Islam.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 80,
    themes: ["trust", "faith", "security", "peace"],
    variations: ["Amina", "Ameena", "Amine"],
    similarNonArabic: [
      { name: "Faye", meaning: "Faith", origin: "English" },
      { name: "Vera", meaning: "Faith, Truth", origin: "Russian" },
      { name: "Grace", meaning: "Grace, Blessing", origin: "English" }
    ],
    famousBearers: [
      { name: "Aminah bint Wahb", description: "Mother of Prophet Muhammad ﷺ" }
    ],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "ah-MEE-nah"
  },
  {
    slug: "khalid",
    name: "Khalid",
    arabic: "خالد",
    meaning: "Eternal, Immortal, Everlasting",
    detailedMeaning: "Khalid comes from the Arabic root 'kh-l-d' meaning to be eternal or everlasting. The word appears frequently in the Quran in the context of eternal life in Paradise. The name symbolizes enduring legacy and timelessness.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 84,
    themes: ["eternity", "legacy", "strength", "valor"],
    variations: ["Khaled", "Halid"],
    similarNonArabic: [
      { name: "Ethan", meaning: "Enduring, Strong", origin: "Hebrew" },
      { name: "Aidan", meaning: "Little fire, Enduring", origin: "Irish" }
    ],
    famousBearers: [
      { name: "Khalid ibn al-Walid", description: "Companion of the Prophet, greatest Muslim military commander, called 'Sword of Allah'" }
    ],
    quranicReferences: [
      { surah: "Al-Baqarah", ayah: "2:25", text: "...they will abide therein eternally (khalideen)." }
    ],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ named Khalid ibn al-Walid 'Saifullah' (Sword of Allah)." }
    ],
    pronunciation: "KHAH-lid"
  },
  {
    slug: "safiya",
    name: "Safiya",
    arabic: "صفية",
    meaning: "Pure, Best Friend, Chosen",
    detailedMeaning: "Safiya derives from the Arabic root 'sa-fa-wa' meaning purity, clarity, and being chosen or selected. It refers to someone of pure heart and sincere intention, someone who is the best and most select among their peers.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 75,
    themes: ["purity", "friendship", "sincerity"],
    variations: ["Safiyya", "Safia", "Sofia (related)"],
    similarNonArabic: [
      { name: "Sophia", meaning: "Wisdom", origin: "Greek" },
      { name: "Clara", meaning: "Clear, Pure", origin: "Latin" }
    ],
    famousBearers: [
      { name: "Safiyya bint Huyayy", description: "Wife of Prophet Muhammad ﷺ" },
      { name: "Safiyya bint Abd al-Muttalib", description: "Aunt of Prophet Muhammad ﷺ, known for her courage" }
    ],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "sa-FEE-yah"
  },
  {
    slug: "bilal",
    name: "Bilal",
    arabic: "بلال",
    meaning: "Moistening, Refreshing, Water",
    detailedMeaning: "Bilal derives from a root meaning moisture or refreshment. The name gained its greatest significance through Bilal ibn Rabah, an Abyssinian (Ethiopian) companion who became the first muezzin of Islam, symbolizing that Islam transcends all racial and social barriers.",
    gender: "male",
    origin: "Arabic",
    isQuranic: false,
    popularity: 79,
    themes: ["equality", "devotion", "resilience", "voice"],
    variations: ["Bilaal", "Belal"],
    similarNonArabic: [
      { name: "Brooks", meaning: "Water, Stream", origin: "English" }
    ],
    famousBearers: [
      { name: "Bilal ibn Rabah", description: "Freed Ethiopian slave who became the first muezzin, one of the most beloved companions" }
    ],
    quranicReferences: [],
    hadithReferences: [
      { source: "Sahih Bukhari", text: "The Prophet ﷺ said to Bilal: 'O Bilal, tell me of the best deed you did after embracing Islam, for I heard your footsteps in Paradise.'" }
    ],
    pronunciation: "bi-LAAL"
  },
  {
    slug: "layla",
    name: "Layla",
    arabic: "ليلى",
    meaning: "Night, Dark Beauty",
    detailedMeaning: "Layla comes from the Arabic word for night (layl). The name evokes the beauty and tranquility of the nighttime, a time of peace, reflection, and spiritual connection in Islam. Many significant events in Islamic history occurred at night, including the Night Journey (Isra and Mi'raj).",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 83,
    themes: ["beauty", "night", "mystery", "peace"],
    variations: ["Leila", "Leyla", "Laylah", "Laila"],
    similarNonArabic: [
      { name: "Celeste", meaning: "Heavenly", origin: "Latin" },
      { name: "Stella", meaning: "Star", origin: "Latin" },
      { name: "Nyx", meaning: "Night", origin: "Greek" }
    ],
    famousBearers: [
      { name: "Layla bint al-Minhal", description: "Female companion of the Prophet" }
    ],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "LAY-lah"
  },
  {
    slug: "adam",
    name: "Adam",
    arabic: "آدم",
    meaning: "Made from Earth, Humanity",
    detailedMeaning: "Adam is the name of the first human being and first prophet in Islam. The name is believed to derive from 'adim al-ard' (surface of the earth), referring to his creation from clay. Adam represents the beginning of humanity and the covenant between God and humankind.",
    gender: "male",
    origin: "Arabic / Hebrew",
    isQuranic: true,
    popularity: 89,
    themes: ["origin", "humanity", "knowledge", "repentance"],
    variations: ["Adem"],
    similarNonArabic: [
      { name: "Adam", meaning: "Man, Earth", origin: "Hebrew" }
    ],
    famousBearers: [
      { name: "Prophet Adam (AS)", description: "First human being and first prophet in Islam" }
    ],
    quranicReferences: [
      { surah: "Al-Baqarah", ayah: "2:31", text: "And He taught Adam the names — all of them. Then He showed them to the angels and said, 'Inform Me of the names of these, if you are truthful.'" }
    ],
    hadithReferences: [],
    pronunciation: "AH-dam"
  },
  {
    slug: "sumaya",
    name: "Sumaya",
    arabic: "سمية",
    meaning: "High Above, Elevated",
    detailedMeaning: "Sumaya derives from the Arabic root meaning height and elevation. The name symbolizes loftiness of character and spirit. Its historical significance is profound — Sumaya bint Khayyat was the first martyr of Islam, demonstrating ultimate courage and conviction.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 72,
    themes: ["courage", "elevation", "sacrifice", "conviction"],
    variations: ["Sumayyah", "Sumayya", "Soumaya"],
    similarNonArabic: [
      { name: "Alta", meaning: "High, Elevated", origin: "Latin" },
      { name: "Celeste", meaning: "Heavenly", origin: "Latin" }
    ],
    famousBearers: [
      { name: "Sumaya bint Khayyat", description: "First martyr in Islam, mother of Ammar ibn Yasir" }
    ],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "soo-MAY-yah"
  },
  {
    slug: "tariq",
    name: "Tariq",
    arabic: "طارق",
    meaning: "Morning Star, Night Visitor, He Who Knocks",
    detailedMeaning: "Tariq comes from the Arabic root meaning to knock or to come at night. In the Quran, it refers to the morning star (An-Najm ath-Thaqib). The name symbolizes guidance, like a star piercing through darkness, and initiative — one who opens doors.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 76,
    themes: ["guidance", "light", "initiative", "conquest"],
    variations: ["Tarek", "Tarik", "Tareq"],
    similarNonArabic: [
      { name: "Lucian", meaning: "Light", origin: "Latin" },
      { name: "Stellan", meaning: "Star", origin: "Scandinavian" }
    ],
    famousBearers: [
      { name: "Tariq ibn Ziyad", description: "Berber Muslim commander who led the conquest of Hispania (Spain), Gibraltar named after him" }
    ],
    quranicReferences: [
      { surah: "At-Tariq", ayah: "86:1-3", text: "By the sky and the night visitor — And what can make you know what the night visitor is? It is the piercing star." }
    ],
    hadithReferences: [],
    pronunciation: "TAH-riq"
  },
  {
    slug: "zainab",
    name: "Zainab",
    arabic: "زينب",
    meaning: "Father's Precious Jewel, Fragrant Flower",
    detailedMeaning: "Zainab is one of the most historically significant names for Muslim women. It may derive from 'zayn' (beauty) and 'ab' (father), meaning the beauty or jewel of the father. Others trace it to a fragrant desert tree. Multiple women close to the Prophet bore this name.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 81,
    themes: ["beauty", "nobility", "resilience"],
    variations: ["Zaynab", "Zenab", "Zineb"],
    similarNonArabic: [
      { name: "Margaret", meaning: "Pearl", origin: "Greek" },
      { name: "Gemma", meaning: "Jewel", origin: "Italian" }
    ],
    famousBearers: [
      { name: "Zainab bint Muhammad", description: "Eldest daughter of Prophet Muhammad ﷺ" },
      { name: "Zainab bint Jahsh", description: "Wife of Prophet Muhammad ﷺ, known for her generosity" },
      { name: "Zainab bint Ali", description: "Granddaughter of the Prophet, known for her eloquence and bravery at Karbala" }
    ],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "ZAY-nab"
  }
];

// Merge core names with prophets and companions
export const namesDatabase: MuslimName[] = [
  ...coreNames,
  ...prophetsNames.filter(p => !coreNames.some(c => c.slug === p.slug))
];

// Utility to map English name meanings to potential Muslim names
export const meaningMap: Record<string, string[]> = {
  "grace": ["aminah", "zayn"],
  "strong": ["hamza", "khalid", "omar"],
  "light": ["noor", "tariq"],
  "beautiful": ["zayn", "layla", "zainab"],
  "pure": ["safiya", "maryam", "fatima"],
  "faithful": ["aminah", "bilal"],
  "wise": ["yusuf", "ibrahim"],
  "life": ["aisha"],
  "night": ["layla", "tariq"],
  "lion": ["hamza"],
  "eternal": ["khalid"],
  "servant": ["abdullah"],
  "peace": ["aminah", "noor"],
  "noble": ["fatima", "zainab", "omar"],
  "courage": ["hamza", "sumaya", "khalid"],
  "love": ["maryam", "layla"],
  "star": ["tariq", "noor"],
  "earth": ["adam"],
  "trust": ["aminah", "khadijah"],
  "leader": ["omar", "ibrahim"],
};

export function findNameBySlug(slug: string): MuslimName | undefined {
  return namesDatabase.find(n => n.slug === slug);
}

export function searchNames(query: string): MuslimName[] {
  const q = query.toLowerCase();
  return namesDatabase.filter(n =>
    n.name.toLowerCase().includes(q) ||
    n.meaning.toLowerCase().includes(q) ||
    n.themes.some(t => t.includes(q)) ||
    n.arabic.includes(query)
  );
}

export function filterNames(opts: { gender?: string; origin?: string; isQuranic?: boolean; themes?: string[] }): MuslimName[] {
  return namesDatabase.filter(n => {
    if (opts.gender && opts.gender !== "all" && n.gender !== opts.gender) return false;
    if (opts.origin && !n.origin.toLowerCase().includes(opts.origin.toLowerCase())) return false;
    if (opts.isQuranic !== undefined && n.isQuranic !== opts.isQuranic) return false;
    if (opts.themes?.length && !opts.themes.some(t => n.themes.includes(t))) return false;
    return true;
  });
}

export function suggestFromMeaning(meaning: string): MuslimName[] {
  const words = meaning.toLowerCase().split(/\s+/);
  const slugs = new Set<string>();
  for (const word of words) {
    const mapped = meaningMap[word];
    if (mapped) mapped.forEach(s => slugs.add(s));
  }
  // Also search themes
  for (const name of namesDatabase) {
    for (const word of words) {
      if (name.themes.includes(word) || name.meaning.toLowerCase().includes(word)) {
        slugs.add(name.slug);
      }
    }
  }
  return Array.from(slugs).map(s => findNameBySlug(s)!).filter(Boolean);
}
