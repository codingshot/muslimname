export interface MuslimName {
  slug: string;
  name: string;
  arabic: string;
  meaning: string;
  detailedMeaning: string;
  gender: "male" | "female" | "unisex";
  origin: string;
  isQuranic: boolean;
  popularity: number;
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
    detailedMeaning: "Abdullah is composed of 'Abd' meaning servant and 'Allah' meaning God. One of the most beloved names to Allah.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 95,
    themes: ["devotion", "worship", "humility"],
    variations: ["Abdallah", "Abdellah", "Abdulla"],
    similarNonArabic: [{ name: "Theodore", meaning: "Gift of God", origin: "Greek" }],
    famousBearers: [{ name: "Abdullah ibn Abd al-Muttalib", description: "Father of Prophet Muhammad ﷺ" }],
    quranicReferences: [{ surah: "Al-Jinn", ayah: "72:19", text: "And when the servant of Allah stood up calling upon Him, they almost became about him a compacted mass." }],
    hadithReferences: [{ source: "Sahih Muslim", text: "The most beloved names to Allah are Abdullah and Abdur-Rahman." }],
    pronunciation: "ab-DUL-lah"
  },
  {
    slug: "fatima",
    name: "Fatima",
    arabic: "فاطمة",
    meaning: "The One Who Abstains",
    detailedMeaning: "Fatima means 'the one who abstains' from evil. Famous daughter of Prophet Muhammad ﷺ, one of the four greatest women.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 92,
    themes: ["virtue", "devotion", "strength"],
    variations: ["Fatimah", "Fatemeh"],
    similarNonArabic: [{ name: "Virtue", meaning: "Moral excellence", origin: "English" }],
    famousBearers: [{ name: "Fatimah bint Muhammad", description: "Daughter of Prophet Muhammad ﷺ, mother of Hasan and Hussain" }],
    quranicReferences: [],
    hadithReferences: [{ source: "Sahih Bukhari", text: "The best women in Paradise are Khadijah, Fatimah, Maryam, and Asiyah." }],
    pronunciation: "fa-TEE-mah"
  },
  {
    slug: "aisha",
    name: "Aisha",
    arabic: "عائشة",
    meaning: "Alive, Living",
    detailedMeaning: "Means 'the living one.' Wife of Prophet Muhammad ﷺ and one of the most learned women, transmitter of 2,000+ hadith.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 88,
    themes: ["wisdom", "knowledge", "life"],
    variations: ["Aesha", "Ayesha"],
    similarNonArabic: [{ name: "Vivian", meaning: "Lively", origin: "Latin" }],
    famousBearers: [{ name: "Aisha bint Abi Bakr", description: "Wife of Prophet Muhammad, scholar and hadith transmitter" }],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "AH-ee-shah"
  },
  {
    slug: "ahmad",
    name: "Ahmad",
    arabic: "أحمد",
    meaning: "More Praised, Very Praiseworthy",
    detailedMeaning: "The comparative form of Mahmoud. Often mentioned in hadith as one of the names of Prophet Muhammad ﷺ.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 93,
    themes: ["praise", "virtue"],
    variations: ["Ahmed", "Aḥmad"],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "AH-med"
  },
  {
    slug: "noor",
    name: "Noor",
    arabic: "نور",
    meaning: "Light",
    detailedMeaning: "From the Arabic word for 'light.' Represents guidance, knowledge, and divine illumination in Islamic tradition.",
    gender: "unisex",
    origin: "Arabic",
    isQuranic: true,
    popularity: 85,
    themes: ["light", "guidance", "knowledge"],
    variations: ["Nur", "Nura"],
    similarNonArabic: [{ name: "Lux", meaning: "Light", origin: "Latin" }],
    famousBearers: [],
    quranicReferences: [{ surah: "An-Nur", ayah: "24:35", text: "Allah is the Light of the heavens and the earth. The example of His light is like a niche..." }],
    hadithReferences: [],
    pronunciation: "NOOR"
  },
  {
    slug: "yasmin",
    name: "Yasmin",
    arabic: "ياسمين",
    meaning: "Jasmine Flower",
    detailedMeaning: "Derived from the jasmine flower, known for delicate beauty and fragrance. Symbol of grace and elegance.",
    gender: "female",
    origin: "Persian",
    isQuranic: false,
    popularity: 82,
    themes: ["beauty", "nature", "elegance"],
    variations: ["Jasmine", "Yasmeen"],
    similarNonArabic: [{ name: "Jasmine", meaning: "Jasmine flower", origin: "English" }],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "YAS-min"
  },
  {
    slug: "reza",
    name: "Reza",
    arabic: "رضا",
    meaning: "Satisfaction, Contentment",
    detailedMeaning: "From Arabic root meaning 'to be pleased.' Carries the spiritual concept of finding peace through acceptance of Allah's will.",
    gender: "male",
    origin: "Persian",
    isQuranic: false,
    popularity: 74,
    themes: ["contentment", "faith", "peace"],
    variations: ["Rida"],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "REH-zah"
  },
  {
    slug: "mehmet",
    name: "Mehmet",
    arabic: "محمد",
    meaning: "Praised, Praiseworthy",
    detailedMeaning: "Turkish form of Muhammad. Popular throughout Ottoman Empire and remains most common in Turkey.",
    gender: "male",
    origin: "Turkish",
    isQuranic: true,
    popularity: 87,
    themes: ["praise", "leadership", "prophecy"],
    variations: ["Mehmed", "Mohamed"],
    similarNonArabic: [],
    famousBearers: [{ name: "Mehmed II", description: "Ottoman Sultan who conquered Constantinople" }],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "meh-MET"
  },
  {
    slug: "ayla",
    name: "Ayla",
    arabic: "أيلة",
    meaning: "Halo, Moon Light",
    detailedMeaning: "Turkish name meaning 'halo' or the light of the moon. Associated with elegance and grace.",
    gender: "female",
    origin: "Turkish",
    isQuranic: false,
    popularity: 77,
    themes: ["beauty", "light", "elegance"],
    variations: ["Ayyala"],
    similarNonArabic: [{ name: "Luna", meaning: "Moon", origin: "Latin" }],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "AY-lah"
  },
  {
    slug: "emir",
    name: "Emir",
    arabic: "أمير",
    meaning: "Prince, Commander",
    detailedMeaning: "Turkish form of Arabic Amir. Denotes a leader, prince, or commander with authority, leadership, and nobility.",
    gender: "male",
    origin: "Turkish",
    isQuranic: false,
    popularity: 80,
    themes: ["leadership", "nobility", "strength"],
    variations: ["Amir", "Ameer"],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "EH-meer"
  },
  {
    slug: "farhan",
    name: "Farhan",
    arabic: "فرحان",
    meaning: "Happy, Joyful",
    detailedMeaning: "From Arabic root meaning 'to be happy.' Popular across African Muslim communities with connotations of joy.",
    gender: "male",
    origin: "African",
    isQuranic: false,
    popularity: 73,
    themes: ["joy", "happiness", "positivity"],
    variations: ["Farhaan"],
    similarNonArabic: [{ name: "Felix", meaning: "Happy", origin: "Latin" }],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "FAR-hahn"
  },
  {
    slug: "jamal",
    name: "Jamal",
    arabic: "جمال",
    meaning: "Beauty, Handsomeness",
    detailedMeaning: "From Arabic root meaning 'beauty.' Widely used across African Muslim communities representing physical and spiritual beauty.",
    gender: "male",
    origin: "African",
    isQuranic: false,
    popularity: 79,
    themes: ["beauty", "elegance", "grace"],
    variations: ["Jamaal"],
    similarNonArabic: [],
    famousBearers: [{ name: "Jamal al-Din al-Afghani", description: "Islamic reformer and political activist" }],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "jah-MAHL"
  },
  {
    slug: "imran",
    name: "Imran",
    arabic: "عمران",
    meaning: "Building, Prosperity",
    detailedMeaning: "From Arabic root meaning 'to build and prosper.' Mentioned in Quran as father of Maryam. Popular in South Asia.",
    gender: "male",
    origin: "South Asian",
    isQuranic: true,
    popularity: 77,
    themes: ["prosperity", "growth", "blessing"],
    variations: ["Imrane", "Imraan"],
    similarNonArabic: [],
    famousBearers: [{ name: "Imran Khan", description: "Former Pakistani cricketer and politician" }],
    quranicReferences: [{ surah: "Ali Imran", ayah: "3:35-36", text: "When the wife of Imran said, 'My Lord...'" }],
    hadithReferences: [],
    pronunciation: "im-RAHN"
  },
  {
    slug: "zara",
    name: "Zara",
    arabic: "زهرة",
    meaning: "Flower, Blooming",
    detailedMeaning: "Derived from Arabic root meaning 'flower' or 'blooming.' Popular across South and Middle Eastern communities.",
    gender: "female",
    origin: "South Asian",
    isQuranic: false,
    popularity: 83,
    themes: ["beauty", "nature", "growth"],
    variations: ["Zarah"],
    similarNonArabic: [{ name: "Flora", meaning: "Flower", origin: "Latin" }],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "ZAH-rah"
  },
  {
    slug: "malik",
    name: "Malik",
    arabic: "مالك",
    meaning: "King, Master, Owner",
    detailedMeaning: "From Arabic root meaning 'to possess.' Signifies sovereignty, kingship, and authority.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 84,
    themes: ["leadership", "strength", "sovereignty"],
    variations: [],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "mah-LEEK"
  },
  {
    slug: "hana",
    name: "Hana",
    arabic: "هناء",
    meaning: "Joy, Happiness",
    detailedMeaning: "From Arabic root meaning joy and happiness. Represents contentment and inner peace from living righteously.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 74,
    themes: ["joy", "happiness", "contentment"],
    variations: ["Hannah"],
    similarNonArabic: [{ name: "Joy", meaning: "Happiness", origin: "English" }],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "HAH-nah"
  },
  {
    slug: "karim",
    name: "Karim",
    arabic: "كريم",
    meaning: "Generous, Noble",
    detailedMeaning: "From Arabic root meaning generosity and nobility. Al-Karim is one of the 99 Names of Allah.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 81,
    themes: ["generosity", "nobility", "honor"],
    variations: ["Kareem"],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "ka-REEM"
  },
  {
    slug: "nadia",
    name: "Nadia",
    arabic: "ناديا",
    meaning: "Caller, Tender",
    detailedMeaning: "From Arabic root meaning 'to call' or tender and delicate. Popular across Arab and Eastern European communities.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 79,
    themes: ["kindness", "tenderness", "grace"],
    variations: ["Nadya"],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "nah-DEE-ah"
  },
  {
    slug: "amina",
    name: "Amina",
    arabic: "أمينة",
    meaning: "Trustworthy, Safe",
    detailedMeaning: "From Arabic root 'amn' meaning security. Borne by Amina bint Wahb, mother of Prophet Muhammad ﷺ.",
    gender: "female",
    origin: "Arabic",
    isQuranic: false,
    popularity: 86,
    themes: ["trust", "safety", "honesty"],
    variations: ["Ameena"],
    similarNonArabic: [],
    famousBearers: [{ name: "Amina bint Wahb", description: "Mother of Prophet Muhammad ﷺ" }],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "ah-MEE-nah"
  },
  {
    slug: "rashid",
    name: "Rashid",
    arabic: "رشيد",
    meaning: "Rightly Guided, Wise",
    detailedMeaning: "From Arabic root meaning 'to guide correctly.' Signifies one guided to the right path with wisdom.",
    gender: "male",
    origin: "Arabic",
    isQuranic: true,
    popularity: 75,
    themes: ["wisdom", "guidance", "righteousness"],
    variations: ["Rasheed"],
    similarNonArabic: [],
    famousBearers: [],
    quranicReferences: [],
    hadithReferences: [],
    pronunciation: "ra-SHEED"
  }
];

export const namesDatabase: MuslimName[] = [
  ...coreNames,
  ...prophetsNames.filter(p => !coreNames.some(c => c.slug === p.slug))
];

export function searchNames(query: string): MuslimName[] {
  const lowerQuery = query.toLowerCase();
  return namesDatabase.filter(n =>
    n.name.toLowerCase().includes(lowerQuery) ||
    n.meaning.toLowerCase().includes(lowerQuery) ||
    n.arabic.includes(query) ||
    n.themes.some(t => t.toLowerCase().includes(lowerQuery)) ||
    n.variations.some(v => v.toLowerCase().includes(lowerQuery))
  );
}

export function filterNames(criteria: {
  gender?: string;
  origin?: string;
  isQuranic?: boolean;
  themes?: string[];
}): MuslimName[] {
  return namesDatabase.filter(n => {
    if (criteria.gender && n.gender !== criteria.gender) return false;
    if (criteria.origin && n.origin !== criteria.origin) return false;
    if (criteria.isQuranic !== undefined && n.isQuranic !== criteria.isQuranic) return false;
    if (criteria.themes && criteria.themes.length > 0) {
      if (!criteria.themes.some(t => n.themes.includes(t))) return false;
    }
    return true;
  });
}

export function suggestFromMeaning(meaning: string): MuslimName[] {
  const words = meaning.toLowerCase().split(/\s+/);
  const slugs = new Set<string>();
  for (const name of namesDatabase) {
    for (const word of words) {
      if (name.themes.includes(word) || name.meaning.toLowerCase().includes(word)) {
        slugs.add(name.slug);
      }
    }
  }
  return Array.from(slugs).map(s => findNameBySlug(s)!).filter(Boolean);
}

export function findNameBySlug(slug: string): MuslimName | undefined {
  return namesDatabase.find(n => n.slug === slug);
}
