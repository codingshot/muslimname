// Comprehensive mapping of Christian/Hebrew/Western names to Muslim equivalents with context
export const christianToMuslimNameMapping: Record<string, { muslimNames: string[]; meaning: string; connection: string }> = {
  // === BIBLICAL / HEBREW NAMES ===
  "john": { muslimNames: ["yahya"], meaning: "The One Who Gives Life", connection: "John the Baptist is Yahya in the Quran — a prophet honored for his piety and devotion" },
  "james": { muslimNames: ["yaqub", "hamza"], meaning: "Supplanter", connection: "James derives from Jacob; Yaqub (Jacob) is a revered prophet in Islam" },
  "peter": { muslimNames: ["salman", "sakhrah"], meaning: "Rock", connection: "Peter means rock; Salman al-Farisi represents a foundation of seeking truth" },
  "andrew": { muslimNames: ["amir", "hamza"], meaning: "Strong, Manly", connection: "Andrew means strong/manly; Amir denotes commanding leadership" },
  "thomas": { muslimNames: ["thamir", "sadiq"], meaning: "Twin", connection: "Thomas was called the doubter then believer; Sadiq means truthful" },
  "david": { muslimNames: ["dawud", "dawoud"], meaning: "Beloved", connection: "Direct Arabic form — Prophet Dawud received the Zabur and ruled with justice" },
  "samuel": { muslimNames: ["sami", "ismail"], meaning: "Heard by God", connection: "Samuel means 'God heard'; Ismail means 'God will hear'" },
  "daniel": { muslimNames: ["noor", "danyal"], meaning: "God is My Judge", connection: "Daniel is recognized in Islamic tradition; Danyal is the Arabic form" },
  "michael": { muslimNames: ["mikail"], meaning: "Who is Like God", connection: "Mikail is the angel responsible for provision and rain in Islam" },
  "mark": { muslimNames: ["malik"], meaning: "King, Ruler", connection: "Similar phonetic pattern; Malik means sovereign, one of Allah's names" },
  "matthew": { muslimNames: ["mattai", "ata"], meaning: "Gift of God", connection: "Matthew means gift of God; Ata means gift in Arabic" },
  "joseph": { muslimNames: ["yusuf"], meaning: "God Will Increase", connection: "Yusuf is one of the most beloved prophets — his story is 'the best of stories' in the Quran" },
  "benjamin": { muslimNames: ["binyamin"], meaning: "Son of the Right Hand", connection: "Direct Arabic form; Binyamin was the brother of Prophet Yusuf" },
  "noah": { muslimNames: ["nuh"], meaning: "Rest, Comfort", connection: "Prophet Nuh preached for 950 years — a model of patience and perseverance" },
  "adam": { muslimNames: ["adam"], meaning: "Human, Made from Earth", connection: "Identical name — Adam is the first prophet in Islam, father of humanity" },
  "abraham": { muslimNames: ["ibrahim"], meaning: "Father of Nations", connection: "Ibrahim is Khalilullah (Friend of Allah), builder of the Kaaba, patriarch of monotheism" },
  "isaac": { muslimNames: ["ishaq"], meaning: "He Will Laugh", connection: "Prophet Ishaq, son of Ibrahim, father of Yaqub — a prophet in the Quran" },
  "jacob": { muslimNames: ["yaqub"], meaning: "Supplanter", connection: "Prophet Yaqub, also known as Israel, father of the twelve tribes" },
  "moses": { muslimNames: ["musa"], meaning: "Drawn from Water", connection: "Prophet Musa is the most mentioned prophet in the Quran (136 times)" },
  "aaron": { muslimNames: ["harun"], meaning: "High Mountain", connection: "Prophet Harun, brother of Musa, known for eloquence and patience" },
  "solomon": { muslimNames: ["sulayman", "suleiman"], meaning: "Peace", connection: "Prophet Sulayman was given dominion over jinn, animals, and winds" },
  "elijah": { muslimNames: ["ilyas"], meaning: "My God is Yahweh", connection: "Prophet Ilyas is mentioned in the Quran for calling people to worship Allah alone" },
  "elisha": { muslimNames: ["alyasa"], meaning: "God is Salvation", connection: "Prophet Al-Yasa is mentioned in the Quran among the righteous" },
  "jonah": { muslimNames: ["yunus"], meaning: "Dove", connection: "Prophet Yunus was swallowed by a whale; his supplication is one of the most powerful duas" },
  "job": { muslimNames: ["ayyub"], meaning: "Persecuted", connection: "Prophet Ayyub is the ultimate example of patience through extreme trials" },
  "ezekiel": { muslimNames: ["dhul-kifl"], meaning: "God Strengthens", connection: "Dhul-Kifl is mentioned in the Quran as patient and righteous" },
  "joshua": { muslimNames: ["yusha"], meaning: "God is Salvation", connection: "Yusha ibn Nun was the companion of Prophet Musa who led after him" },
  "timothy": { muslimNames: ["taimur", "tamim"], meaning: "Honoring God", connection: "Tamim means complete/perfect; Taimur means iron/strong" },

  // === CHRISTIAN FEMALE NAMES ===
  "sarah": { muslimNames: ["sarah", "zaynab"], meaning: "Princess", connection: "Sarah was wife of Prophet Ibrahim — the same name is used in Islam" },
  "mary": { muslimNames: ["maryam"], meaning: "Star of the Sea, Beloved", connection: "Maryam is the only woman named in the Quran — an entire surah is named after her" },
  "elizabeth": { muslimNames: ["ilisabat"], meaning: "God's Oath", connection: "Wife of Prophet Zakariyya and mother of Prophet Yahya in Islamic tradition" },
  "anna": { muslimNames: ["anisah", "hana"], meaning: "Grace", connection: "Anna/Hannah was mother of Maryam; Hana means happiness in Arabic" },
  "ruth": { muslimNames: ["ruqayyah"], meaning: "Loyal Companion", connection: "Ruth embodied loyalty; Ruqayyah was the Prophet's daughter — both represent devotion" },
  "rachel": { muslimNames: ["rahma", "rahil"], meaning: "Ewe", connection: "Rachel was beloved of Yaqub; Rahma means divine mercy" },
  "rebecca": { muslimNames: ["rabia", "rabiah"], meaning: "Servant of God", connection: "Rebecca was mother of nations; Rabia al-Adawiyya was a great Muslim mystic" },
  "hannah": { muslimNames: ["hana", "hannah"], meaning: "Grace, Favor", connection: "Same name — Hannah/Hana was the mother of Maryam in Islamic tradition" },
  "martha": { muslimNames: ["marthad", "samira"], meaning: "Lady, Mistress", connection: "Martha served; Samira means companion in evening talk" },
  "esther": { muslimNames: ["asiya", "noor"], meaning: "Star, Hidden", connection: "Esther saved her people; Asiya chose faith over Pharaoh's palace" },
  "naomi": { muslimNames: ["naima", "naeema"], meaning: "Pleasantness", connection: "Naomi means pleasant; Naima means comfort and tranquility" },
  "deborah": { muslimNames: ["shahida", "asma"], meaning: "Bee", connection: "Deborah was a leader; Asma bint Abu Bakr showed legendary courage" },
  "miriam": { muslimNames: ["maryam"], meaning: "Beloved", connection: "Miriam and Maryam are the same name — honored in both traditions" },

  // === COMMON ENGLISH / WESTERN NAMES ===
  "grace": { muslimNames: ["noor", "rahma"], meaning: "Divine Grace", connection: "Grace = divine favor; Noor = divine light, Rahma = divine mercy" },
  "joy": { muslimNames: ["farhan", "suroor", "hana"], meaning: "Joy", connection: "Direct meaning match — Farhan (happy), Suroor (delight), Hana (joy)" },
  "faith": { muslimNames: ["amina", "iman"], meaning: "Faith, Trust", connection: "Faith = Iman, one of Islam's pillars; Amina = trustworthy (Prophet's mother)" },
  "hope": { muslimNames: ["raja", "amal"], meaning: "Hope", connection: "Direct meaning match — Raja and Amal both mean hope/aspiration" },
  "charity": { muslimNames: ["sadaqa", "karim"], meaning: "Giving", connection: "Charity = Sadaqa in Islam, a fundamental pillar; Karim means generous" },
  "paul": { muslimNames: ["harun", "faisal"], meaning: "Small, Humble", connection: "Paul means humble; Harun represents eloquent service to Allah" },
  "luke": { muslimNames: ["luqman"], meaning: "From Lucania", connection: "Luke was a physician; Luqman is the wise man in the Quran" },
  "william": { muslimNames: ["waleed", "wasim"], meaning: "Strong Protector", connection: "William means will/protection; Waleed means newborn, Wasim means graceful" },
  "richard": { muslimNames: ["rashid"], meaning: "Strong Ruler", connection: "Richard means brave ruler; Rashid means rightly guided" },
  "charles": { muslimNames: ["karim"], meaning: "Free Man", connection: "Charles means free man; Karim means generous/noble" },
  "george": { muslimNames: ["jamal", "jibreel"], meaning: "Farmer", connection: "George = earth worker; Jamal = beauty of creation" },
  "edward": { muslimNames: ["adel", "adil"], meaning: "Wealthy Guardian", connection: "Edward means guardian; Adel/Adil means just — the just guardian" },
  "henry": { muslimNames: ["harun", "hamid"], meaning: "Ruler of the Home", connection: "Henry = home ruler; Harun was a leader alongside Musa" },
  "frank": { muslimNames: ["farid"], meaning: "Free, Honest", connection: "Frank means free/honest; Farid means unique/precious" },
  "anthony": { muslimNames: ["anwar", "anas"], meaning: "Priceless", connection: "Anthony = priceless; Anwar means radiant, Anas means friendly" },
  "patrick": { muslimNames: ["shareef"], meaning: "Nobleman", connection: "Patrick means noble; Shareef means honorable/noble" },
  "robert": { muslimNames: ["rashid", "raed"], meaning: "Bright Fame", connection: "Robert = famous/bright; Rashid means guided, Raed means leader" },
  "christopher": { muslimNames: ["khalil", "hamid"], meaning: "Christ-Bearer", connection: "Christopher carries faith; Khalil means close friend (of Allah)" },
  "alexander": { muslimNames: ["iskandar", "aziz"], meaning: "Defender", connection: "Alexander is Iskandar in Arabic/Islamic tradition; Aziz means mighty" },
  "jennifer": { muslimNames: ["yasmin", "jannah"], meaning: "Fair One", connection: "Jennifer = fair/beautiful; Yasmin = jasmine flower, Jannah = paradise" },
  "jessica": { muslimNames: ["zara", "zahra"], meaning: "To Behold", connection: "Jessica = sight; Zara/Zahra = blooming flower, something beautiful to behold" },
  "angela": { muslimNames: ["noor", "malak"], meaning: "Angel, Messenger", connection: "Angela = angel; Malak means angel in Arabic" },
  "catherine": { muslimNames: ["fatima", "tahira"], meaning: "Pure", connection: "Catherine = pure; Tahira means pure, Fatima means one who abstains from evil" },
  "stephanie": { muslimNames: ["aisha", "sultana"], meaning: "Crown", connection: "Stephanie = crowned; Sultana means queen/ruler" },
  "victoria": { muslimNames: ["zahra", "nasr"], meaning: "Victory", connection: "Victoria = victory; Nasr means divine victory/help" },
  "sophia": { muslimNames: ["hikma", "safiya"], meaning: "Wisdom", connection: "Sophia = wisdom; Hikma = wisdom in Arabic, Safiya = pure/best friend" },
  "ashley": { muslimNames: ["ayla"], meaning: "Ash Tree Meadow", connection: "Ashley = meadow; Ayla = moonlight — both evoke natural beauty" },
  "amanda": { muslimNames: ["amina", "wudd"], meaning: "Worthy of Love", connection: "Amanda = lovable; Amina = trustworthy, Wudd = love/affection" },
  "nicole": { muslimNames: ["nadia", "naila"], meaning: "Victory of the People", connection: "Nicole = people's victory; Nadia = caller, Naila = attainer" },
  "lisa": { muslimNames: ["layla", "leena"], meaning: "God's Promise", connection: "Lisa = devoted to God; Layla = night beauty, Leena = tender" },
  "emily": { muslimNames: ["amira", "iman"], meaning: "Industrious", connection: "Emily = striving; Amira = princess/leader, Iman = faith" },
  "charlotte": { muslimNames: ["shahira", "karimah"], meaning: "Free Woman", connection: "Charlotte = free; Shahira means famous, Karimah means generous" },
  "eve": { muslimNames: ["hawwa"], meaning: "Living, Life-Giver", connection: "Direct equivalent — Hawwa is the Arabic name for Eve, mother of humanity" },
  "philip": { muslimNames: ["muhibb", "khalil"], meaning: "Lover of Horses", connection: "Philip = love; Muhibb means lover/friend, Khalil means close companion" },
  "stephen": { muslimNames: ["taj", "ikleel"], meaning: "Crown", connection: "Stephen = crown; Taj means crown in Arabic/Persian" },
  "kevin": { muslimNames: ["jameel", "hassan"], meaning: "Handsome", connection: "Kevin = handsome; Jameel and Hassan both mean handsome/beautiful" },
  "brian": { muslimNames: ["shareef", "ali"], meaning: "Noble, High", connection: "Brian = noble/high; Ali means exalted, Shareef means noble" },
  "jason": { muslimNames: ["shafi", "isa"], meaning: "Healer", connection: "Jason = healer; Shafi means healer (one of Allah's names), Isa healed by Allah's permission" },
};

// Get all mapped Western names for quick lookup
export function getWesternNameSuggestions(name: string): string[] {
  const mapping = christianToMuslimNameMapping[name.toLowerCase()];
  return mapping ? mapping.muslimNames : [];
}

// Get context for a mapping
export function getMappingContext(name: string): { muslimNames: string[]; meaning: string; connection: string } | null {
  return christianToMuslimNameMapping[name.toLowerCase()] || null;
}
