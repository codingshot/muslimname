// Comprehensive mapping of Christian/Hebrew/Western/Latin/Hindu/Chinese/Portuguese/Tribal names to Muslim equivalents
export interface NameMapping {
  muslimNames: string[];
  meaning: string;
  connection: string;
  hebrewOrigin?: string;
  /** Original script for multilanguage detection (e.g. 伟 for Wei) */
  originalScript?: string;
  /** ISO 3166-1 alpha-2 country codes where this name is especially popular (e.g. ["BR", "PT"]) */
  popularIn?: string[];
  category: NameMappingCategory;
}

export type NameMappingCategory =
  | "biblical-male" | "biblical-female" | "western-male" | "western-female" | "hebrew" | "virtue"
  | "latin-male" | "latin-female" | "hindu-male" | "hindu-female"
  | "chinese-male" | "chinese-female" | "portuguese-male" | "portuguese-female"
  | "russian-male" | "russian-female" | "japanese-male" | "japanese-female"
  | "korean-male" | "korean-female" | "french-male" | "french-female"
  | "german-male" | "german-female" | "italian-male" | "italian-female"
  | "spanish-male" | "spanish-female" | "indonesian-male" | "indonesian-female"
  | "tribal-male" | "tribal-female";

export const christianToMuslimNameMapping: Record<string, NameMapping> = {
  // ===========================
  // BIBLICAL / PROPHETIC MALE
  // ===========================
  "adam": { muslimNames: ["adam"], meaning: "Human, Made from Earth", connection: "Identical — Adam is the first prophet in Islam, father of humanity", hebrewOrigin: "אָדָם (Adam)", category: "biblical-male" },
  "abraham": { muslimNames: ["ibrahim"], meaning: "Father of Nations", connection: "Ibrahim is Khalilullah (Friend of Allah), builder of the Kaaba, patriarch of monotheism", hebrewOrigin: "אַבְרָהָם (Avraham)", category: "biblical-male" },
  "isaac": { muslimNames: ["ishaq"], meaning: "He Will Laugh", connection: "Prophet Ishaq, son of Ibrahim — a prophet honored in the Quran (Surah As-Saffat 37:112)", hebrewOrigin: "יִצְחָק (Yitzhak)", category: "biblical-male" },
  "jacob": { muslimNames: ["yaqub"], meaning: "Supplanter", connection: "Prophet Yaqub, also known as Israel, father of the twelve tribes", hebrewOrigin: "יַעֲקֹב (Ya'akov)", category: "biblical-male" },
  "joseph": { muslimNames: ["yusuf"], meaning: "God Will Increase", connection: "Yusuf — his story is 'the best of stories' in the Quran (Surah Yusuf 12:3)", hebrewOrigin: "יוֹסֵף (Yosef)", popularIn: ["NG", "BR"], category: "biblical-male" },
  "moses": { muslimNames: ["musa"], meaning: "Drawn from Water", connection: "Prophet Musa is the most mentioned prophet in the Quran (136 times)", hebrewOrigin: "מֹשֶׁה (Moshe)", category: "biblical-male" },
  "aaron": { muslimNames: ["harun"], meaning: "High Mountain", connection: "Prophet Harun, brother of Musa, known for eloquence and patience", hebrewOrigin: "אַהֲרֹן (Aharon)", category: "biblical-male" },
  "david": { muslimNames: ["dawud", "dawoud"], meaning: "Beloved", connection: "Prophet Dawud received the Zabur (Psalms) and ruled with justice", hebrewOrigin: "דָּוִד (David)", popularIn: ["NG"], category: "biblical-male" },
  "solomon": { muslimNames: ["sulayman", "suleiman"], meaning: "Peace", connection: "Prophet Sulayman was given dominion over jinn, animals, and winds (Surah An-Naml)", hebrewOrigin: "שְׁלֹמֹה (Shlomo)", category: "biblical-male" },
  "noah": { muslimNames: ["nuh"], meaning: "Rest, Comfort", connection: "Prophet Nuh preached for 950 years — a model of patience (Surah Nuh 71)", hebrewOrigin: "נֹחַ (Noach)", category: "biblical-male" },
  "elijah": { muslimNames: ["ilyas"], meaning: "My God is Yahweh", connection: "Prophet Ilyas called people to worship Allah alone (Surah As-Saffat 37:123-130)", hebrewOrigin: "אֵלִיָּהוּ (Eliyahu)", category: "biblical-male" },
  "elisha": { muslimNames: ["alyasa"], meaning: "God is Salvation", connection: "Prophet Al-Yasa is mentioned among the righteous (Surah Al-An'am 6:86)", hebrewOrigin: "אֱלִישָׁע (Elisha)", category: "biblical-male" },
  "jonah": { muslimNames: ["yunus"], meaning: "Dove", connection: "Prophet Yunus — his supplication from the whale is one of the most powerful duas (Surah Al-Anbiya 21:87)", hebrewOrigin: "יוֹנָה (Yonah)", category: "biblical-male" },
  "job": { muslimNames: ["ayyub"], meaning: "Persecuted", connection: "Prophet Ayyub is the ultimate example of patience through extreme trials (Surah Al-Anbiya 21:83-84)", hebrewOrigin: "אִיּוֹב (Iyov)", category: "biblical-male" },
  "john": { muslimNames: ["yahya"], meaning: "The One Who Gives Life", connection: "Prophet Yahya (John the Baptist) — honored for piety (Surah Maryam 19:12-15)", hebrewOrigin: "יוֹחָנָן (Yochanan)", popularIn: ["NG"], category: "biblical-male" },
  "ezekiel": { muslimNames: ["dhul-kifl"], meaning: "God Strengthens", connection: "Dhul-Kifl is mentioned in the Quran as patient and righteous (Surah Al-Anbiya 21:85-86)", hebrewOrigin: "יְחֶזְקֵאל (Yechezkel)", category: "biblical-male" },
  "joshua": { muslimNames: ["yusha"], meaning: "God is Salvation", connection: "Yusha ibn Nun was the companion of Prophet Musa who led after him", hebrewOrigin: "יְהוֹשֻׁעַ (Yehoshua)", category: "biblical-male" },
  "benjamin": { muslimNames: ["binyamin"], meaning: "Son of the Right Hand", connection: "Binyamin was the brother of Prophet Yusuf", hebrewOrigin: "בִּנְיָמִין (Binyamin)", category: "biblical-male" },
  "samuel": { muslimNames: ["sami", "ismail"], meaning: "Heard by God", connection: "Samuel means 'God heard'; Ismail means 'God will hear'", hebrewOrigin: "שְׁמוּאֵל (Shmuel)", popularIn: ["NG"], category: "biblical-male" },
  "daniel": { muslimNames: ["danyal", "noor"], meaning: "God is My Judge", connection: "Daniel is recognized in Islamic tradition; Danyal is the Arabic form", hebrewOrigin: "דָּנִיֵּאל (Daniel)", popularIn: ["NG"], category: "biblical-male" },
  "michael": { muslimNames: ["mikail"], meaning: "Who is Like God", connection: "Mikail is the angel responsible for provision and rain in Islam", hebrewOrigin: "מִיכָאֵל (Mikha'el)", category: "biblical-male" },
  "gabriel": { muslimNames: ["jibreel", "jibril"], meaning: "God is My Strength", connection: "Jibreel is the angel who revealed the Quran to Prophet Muhammad ﷺ", hebrewOrigin: "גַּבְרִיאֵל (Gavriel)", category: "biblical-male" },
  "raphael": { muslimNames: ["israfil"], meaning: "God Has Healed", connection: "Israfil is the angel who will blow the trumpet on the Day of Judgment", hebrewOrigin: "רְפָאֵל (Refa'el)", category: "biblical-male" },
  "ishmael": { muslimNames: ["ismail"], meaning: "God Will Hear", connection: "Prophet Ismail, son of Ibrahim, forefather of Prophet Muhammad ﷺ (Surah As-Saffat 37:102)", hebrewOrigin: "יִשְׁמָעֵאל (Yishmael)", category: "biblical-male" },
  "zechariah": { muslimNames: ["zakariyya"], meaning: "God Remembers", connection: "Prophet Zakariyya, father of Yahya, prayed for a child in old age (Surah Maryam 19:2-11)", hebrewOrigin: "זְכַרְיָה (Zekharyah)", category: "biblical-male" },
  "enoch": { muslimNames: ["idris"], meaning: "Dedicated", connection: "Prophet Idris was raised to a high station (Surah Maryam 19:56-57)", hebrewOrigin: "חֲנוֹךְ (Chanokh)", category: "biblical-male" },
  "lot": { muslimNames: ["lut"], meaning: "Hidden, Covered", connection: "Prophet Lut preached against immorality (Surah Al-A'raf 7:80-84)", hebrewOrigin: "לוֹט (Lot)", category: "biblical-male" },
  "seth": { muslimNames: ["sheeth"], meaning: "Appointed", connection: "Sheeth (Seth) is considered a prophet in Islam, son of Adam", hebrewOrigin: "שֵׁת (Shet)", category: "biblical-male" },
  "saleh": { muslimNames: ["saleh", "salih"], meaning: "Righteous", connection: "Prophet Saleh was sent to the people of Thamud (Surah Hud 11:61-68)", category: "biblical-male" },

  // ===========================
  // BIBLICAL / PROPHETIC FEMALE
  // ===========================
  "mary": { muslimNames: ["maryam"], meaning: "Star of the Sea, Beloved", connection: "Maryam is the only woman named in the Quran — an entire surah (19) is named after her", hebrewOrigin: "מִרְיָם (Miriam)", popularIn: ["NG"], category: "biblical-female" },
  "miriam": { muslimNames: ["maryam"], meaning: "Beloved", connection: "Miriam and Maryam are the same name — honored in both traditions", hebrewOrigin: "מִרְיָם (Miriam)", category: "biblical-female" },
  "sarah": { muslimNames: ["sarah", "zaynab"], meaning: "Princess", connection: "Sarah was wife of Prophet Ibrahim — the same name is used in Islam", hebrewOrigin: "שָׂרָה (Sarah)", category: "biblical-female" },
  "elizabeth": { muslimNames: ["ilisabat"], meaning: "God's Oath", connection: "Wife of Prophet Zakariyya and mother of Prophet Yahya in Islamic tradition", hebrewOrigin: "אֱלִישֶׁבַע (Elisheva)", popularIn: ["NG"], category: "biblical-female" },
  "hannah": { muslimNames: ["hana", "hannah"], meaning: "Grace, Favor", connection: "Hannah/Hana was the mother of Maryam in Islamic tradition (Surah Al-Imran 3:35-36)", hebrewOrigin: "חַנָּה (Channah)", category: "biblical-female" },
  "anna": { muslimNames: ["anisah", "hana"], meaning: "Grace", connection: "Anna/Hannah was mother of Maryam; Hana means happiness in Arabic", hebrewOrigin: "חַנָּה (Channah)", category: "biblical-female" },
  "ruth": { muslimNames: ["ruqayyah"], meaning: "Loyal Companion", connection: "Ruth embodied loyalty; Ruqayyah was the Prophet's daughter — both represent devotion", hebrewOrigin: "רוּת (Rut)", category: "biblical-female" },
  "rachel": { muslimNames: ["rahma", "rahil"], meaning: "Ewe", connection: "Rachel was beloved of Yaqub; Rahma means divine mercy", hebrewOrigin: "רָחֵל (Rachel)", category: "biblical-female" },
  "rebecca": { muslimNames: ["rabia", "rabiah"], meaning: "Servant of God", connection: "Rebecca was mother of nations; Rabia al-Adawiyya was a great Muslim mystic", hebrewOrigin: "רִבְקָה (Rivkah)", category: "biblical-female" },
  "eve": { muslimNames: ["hawwa"], meaning: "Living, Life-Giver", connection: "Direct equivalent — Hawwa is the Arabic name for Eve, mother of humanity", hebrewOrigin: "חַוָּה (Chavah)", category: "biblical-female" },
  "martha": { muslimNames: ["marthad", "samira"], meaning: "Lady, Mistress", connection: "Martha served; Samira means companion in evening talk", category: "biblical-female" },
  "esther": { muslimNames: ["asiya", "noor"], meaning: "Star, Hidden", connection: "Esther saved her people; Asiya chose faith over Pharaoh's palace", hebrewOrigin: "אֶסְתֵּר (Ester)", popularIn: ["NG"], category: "biblical-female" },
  "naomi": { muslimNames: ["naima", "naeema"], meaning: "Pleasantness", connection: "Naomi means pleasant; Naima means comfort and tranquility", hebrewOrigin: "נָעֳמִי (Na'omi)", category: "biblical-female" },
  "deborah": { muslimNames: ["shahida", "asma"], meaning: "Bee", connection: "Deborah was a leader; Asma bint Abu Bakr showed legendary courage", hebrewOrigin: "דְּבוֹרָה (Devorah)", category: "biblical-female" },
  "leah": { muslimNames: ["layla", "lina"], meaning: "Weary, Delicate", connection: "Leah was mother of many; Layla means night/beauty, Lina means tender", hebrewOrigin: "לֵאָה (Leah)", category: "biblical-female" },
  "abigail": { muslimNames: ["abiha", "farha"], meaning: "Father's Joy", connection: "Abigail means father's joy; Farha means happiness/delight", hebrewOrigin: "אֲבִיגַיִל (Avigail)", category: "biblical-female" },
  "judith": { muslimNames: ["juwairiyah", "shahida"], meaning: "Woman of Judea", connection: "Judith was heroic; Juwairiyah was a wife of the Prophet ﷺ", hebrewOrigin: "יְהוּדִית (Yehudit)", category: "biblical-female" },
  "delilah": { muslimNames: ["dalal", "dalila"], meaning: "Delicate", connection: "Delilah = delicate; Dalal means coquetry/pampering, Dalila means guide", hebrewOrigin: "דְּלִילָה (Delilah)", category: "biblical-female" },
  "susanna": { muslimNames: ["sawsan"], meaning: "Lily", connection: "Susanna = lily; Sawsan is the Arabic word for lily flower", hebrewOrigin: "שׁוֹשַׁנָּה (Shoshannah)", category: "biblical-female" },
  "tabitha": { muslimNames: ["ghazala"], meaning: "Gazelle", connection: "Tabitha means gazelle in Aramaic; Ghazala means gazelle in Arabic", category: "biblical-female" },
  "phoebe": { muslimNames: ["qamar", "noor"], meaning: "Bright, Radiant", connection: "Phoebe = bright/radiant; Qamar means moon, Noor means divine light", category: "biblical-female" },

  // ===========================
  // POPULAR WESTERN MALE NAMES
  // ===========================
  "james": { muslimNames: ["yaqub", "hamza"], meaning: "Supplanter", connection: "James derives from Jacob; Yaqub (Jacob) is a revered prophet in Islam", popularIn: ["NG"], category: "western-male" },
  "peter": { muslimNames: ["salman", "sakhrah"], meaning: "Rock", connection: "Peter means rock; Salman al-Farisi represents a foundation of seeking truth", popularIn: ["NG", "BR"], category: "western-male" },
  "andrew": { muslimNames: ["amir", "hamza"], meaning: "Strong, Manly", connection: "Andrew means strong/manly; Amir denotes commanding leadership", category: "western-male" },
  "thomas": { muslimNames: ["thamir", "sadiq"], meaning: "Twin", connection: "Thomas was called the doubter then believer; Sadiq means truthful", category: "western-male" },
  "mark": { muslimNames: ["malik"], meaning: "King, Ruler", connection: "Similar phonetic pattern; Malik means sovereign, one of Allah's names", category: "western-male" },
  "matthew": { muslimNames: ["mattai", "ata"], meaning: "Gift of God", connection: "Matthew means gift of God; Ata means gift in Arabic", category: "western-male" },
  "timothy": { muslimNames: ["taimur", "tamim"], meaning: "Honoring God", connection: "Tamim means complete/perfect; Taimur means iron/strong", category: "western-male" },
  "paul": { muslimNames: ["harun", "faisal"], meaning: "Small, Humble", connection: "Paul means humble; Faisal means judge/decisive", popularIn: ["NG"], category: "western-male" },
  "luke": { muslimNames: ["luqman"], meaning: "From Lucania", connection: "Luke was a physician; Luqman is the wise man in the Quran (Surah Luqman 31)", category: "western-male" },
  "william": { muslimNames: ["waleed", "wasim"], meaning: "Strong Protector", connection: "William means will/protection; Waleed means newborn, Wasim means graceful", category: "western-male" },
  "richard": { muslimNames: ["rashid"], meaning: "Strong Ruler", connection: "Richard means brave ruler; Rashid means rightly guided", category: "western-male" },
  "charles": { muslimNames: ["karim"], meaning: "Free Man", connection: "Charles means free man; Karim means generous/noble", category: "western-male" },
  "george": { muslimNames: ["jamal", "jibreel"], meaning: "Farmer", connection: "George = earth worker; Jamal = beauty of creation", category: "western-male" },
  "edward": { muslimNames: ["adel", "adil"], meaning: "Wealthy Guardian", connection: "Edward means guardian; Adel/Adil means just — the just guardian", category: "western-male" },
  "henry": { muslimNames: ["harun", "hamid"], meaning: "Ruler of the Home", connection: "Henry = home ruler; Harun was a leader alongside Musa", category: "western-male" },
  "frank": { muslimNames: ["farid"], meaning: "Free, Honest", connection: "Frank means free/honest; Farid means unique/precious", category: "western-male" },
  "anthony": { muslimNames: ["anwar", "anas"], meaning: "Priceless", connection: "Anthony = priceless; Anwar means radiant, Anas means friendly", category: "western-male" },
  "patrick": { muslimNames: ["shareef"], meaning: "Nobleman", connection: "Patrick means noble; Shareef means honorable/noble", category: "western-male" },
  "robert": { muslimNames: ["rashid", "raed"], meaning: "Bright Fame", connection: "Robert = famous/bright; Rashid means guided, Raed means leader", category: "western-male" },
  "christopher": { muslimNames: ["khalil", "hamid"], meaning: "Christ-Bearer", connection: "Christopher carries faith; Khalil means close friend (of Allah)", category: "western-male" },
  "alexander": { muslimNames: ["iskandar", "aziz"], meaning: "Defender", connection: "Alexander is Iskandar in Arabic/Islamic tradition; Aziz means mighty", category: "western-male" },
  "philip": { muslimNames: ["muhibb", "khalil"], meaning: "Lover of Horses", connection: "Philip = love; Muhibb means lover/friend, Khalil means close companion", category: "western-male" },
  "stephen": { muslimNames: ["taj", "ikleel"], meaning: "Crown", connection: "Stephen = crown; Taj means crown in Arabic/Persian", category: "western-male" },
  "kevin": { muslimNames: ["jameel", "hassan"], meaning: "Handsome", connection: "Kevin = handsome; Jameel and Hassan both mean handsome/beautiful", category: "western-male" },
  "brian": { muslimNames: ["shareef", "ali"], meaning: "Noble, High", connection: "Brian = noble/high; Ali means exalted, Shareef means noble", category: "western-male" },
  "jason": { muslimNames: ["shafi", "isa"], meaning: "Healer", connection: "Jason = healer; Shafi means healer (one of Allah's names), Isa healed by Allah's permission", category: "western-male" },
  "ryan": { muslimNames: ["rayyan"], meaning: "Little King", connection: "Ryan sounds like Rayyan — a gate of Paradise for those who fasted", category: "western-male" },
  "brandon": { muslimNames: ["burhan"], meaning: "Beacon Hill", connection: "Brandon = beacon; Burhan means proof/evidence — a guiding light", category: "western-male" },
  "justin": { muslimNames: ["adil", "muqsit"], meaning: "Just, Fair", connection: "Justin = just; Adil means just, Muqsit means equitable", category: "western-male" },
  "tyler": { muslimNames: ["tariq"], meaning: "Tile Maker", connection: "Tyler/Tariq — phonetically similar; Tariq means morning star, the one who knocks at the door", category: "western-male" },
  "eric": { muslimNames: ["ameer", "amir"], meaning: "Eternal Ruler", connection: "Eric = eternal ruler; Amir means commander/prince", category: "western-male" },
  "scott": { muslimNames: ["safwan"], meaning: "From Scotland", connection: "Scott = wanderer; Safwan means rocks/pure — Safwan ibn Mu'attal was a companion", category: "western-male" },
  "nicholas": { muslimNames: ["nasir", "nasr"], meaning: "Victory of the People", connection: "Nicholas = victory; Nasir means helper, Nasr means divine victory", category: "western-male" },
  "dennis": { muslimNames: ["danyal"], meaning: "Follower of Dionysius", connection: "Dennis/Danyal — phonetically similar; Danyal is the Arabic form of Daniel", category: "western-male" },
  "larry": { muslimNames: ["latif"], meaning: "Crowned with Laurel", connection: "Larry = laurel/honor; Latif means subtle/kind — one of Allah's names", category: "western-male" },
  "gary": { muslimNames: ["ghazi"], meaning: "Spear", connection: "Gary = spear; Ghazi means warrior/conqueror in the path of Allah", category: "western-male" },
  "donald": { muslimNames: ["sultan"], meaning: "World Ruler", connection: "Donald = world ruler; Sultan means authority/ruler", category: "western-male" },
  "kenneth": { muslimNames: ["hassan", "husain"], meaning: "Handsome", connection: "Kenneth = handsome/born of fire; Hassan means handsome", category: "western-male" },
  "steven": { muslimNames: ["taj", "ikleel"], meaning: "Crown", connection: "Steven = crown/garland; Taj means crown in Arabic", category: "western-male" },
  "raymond": { muslimNames: ["rami", "rashad"], meaning: "Wise Protector", connection: "Raymond = wise protector; Rashad means right guidance", category: "western-male" },
  "jack": { muslimNames: ["yaqub", "jamal"], meaning: "God is Gracious", connection: "Jack derives from John; maps to Yahya or Yaqub in Islamic tradition", category: "western-male" },
  "liam": { muslimNames: ["waleed", "wali"], meaning: "Strong-Willed Warrior", connection: "Liam = strong protector; Wali means guardian/protector", category: "western-male" },
  "oliver": { muslimNames: ["zaytun", "omar"], meaning: "Olive Tree", connection: "Oliver = olive; Zaytun means olive — the olive tree is mentioned in the Quran (Surah At-Tin 95:1)", category: "western-male" },
  "jesse": { muslimNames: ["isa"], meaning: "Gift", connection: "Jesse was father of David; Isa (Jesus) is a revered prophet in Islam", hebrewOrigin: "יִשַׁי (Yishai)", category: "western-male" },
  "blake": { muslimNames: ["badr"], meaning: "Dark/Fair", connection: "Blake = dark/bright; Badr means full moon — Battle of Badr", category: "western-male" },
  "cole": { muslimNames: ["khalid"], meaning: "Victory", connection: "Cole = dark; Khalid means eternal — Khalid ibn al-Walid", category: "western-male" },
  "chase": { muslimNames: ["saeed"], meaning: "Hunter", connection: "Chase = pursue; Saeed means fortunate/pursuer of good", category: "western-male" },
  "hunter": { muslimNames: ["sayyad"], meaning: "One Who Hunts", connection: "Hunter = hunter; Sayyad means hunter in Arabic", category: "western-male" },
  "austin": { muslimNames: ["azim"], meaning: "Great, Magnificent", connection: "Austin = great; Azim means magnificent/great", category: "western-male" },
  "jordan": { muslimNames: ["nahr", "joudah"], meaning: "To Flow Down", connection: "Jordan = river; named after the river where Yahya (John) baptized", hebrewOrigin: "יַרְדֵּן (Yarden)", category: "western-male" },
  "cameron": { muslimNames: ["kamil"], meaning: "Crooked Nose", connection: "Cameron = crooked; Kamil means perfect/complete", category: "western-male" },
  "evan": { muslimNames: ["ihsan"], meaning: "God is Gracious", connection: "Evan from John; Ihsan means excellence/perfection in worship", category: "western-male" },
  "grant": { muslimNames: ["wahab"], meaning: "Great, Large", connection: "Grant = great; Wahab means the bestower/giver", category: "western-male" },
  "trevor": { muslimNames: ["thabit"], meaning: "Great Settlement", connection: "Trevor = great; Thabit means steadfast/firm", category: "western-male" },
  "shane": { muslimNames: ["shaan"], meaning: "God is Gracious", connection: "Shane from John; Shaan means pride/dignity in Arabic", category: "western-male" },
  "corey": { muslimNames: ["quraish"], meaning: "From the Hollow", connection: "Corey = from the hollow; Quraish was the Prophet's tribe", category: "western-male" },
  "dustin": { muslimNames: ["daud"], meaning: "Valiant Fighter", connection: "Dustin = brave; Daud (David) was a warrior-prophet", category: "western-male" },
  "spencer": { muslimNames: ["sadiq"], meaning: "Dispenser", connection: "Spencer = keeper; Sadiq means truthful/trustworthy", category: "western-male" },
  "mitchell": { muslimNames: ["mikail"], meaning: "Who is Like God", connection: "Mitchell from Michael; Mikail is the angel of provision", category: "western-male" },
  "clifford": { muslimNames: ["jabal"], meaning: "Ford by a Cliff", connection: "Clifford = cliff; Jabal means mountain", category: "western-male" },
  "keith": { muslimNames: ["katib"], meaning: "Wood, Forest", connection: "Keith = wood; Katib means writer/scribe", category: "western-male" },
  "clifton": { muslimNames: ["jabal"], meaning: "Town on a Cliff", connection: "Clifton = cliff settlement; Jabal means mountain", category: "western-male" },
  "chad": { muslimNames: ["shahid"], meaning: "Warrior", connection: "Chad = battle; Shahid means witness to truth", category: "western-male" },
  "troy": { muslimNames: ["tariq"], meaning: "Foot Soldier", connection: "Troy = legendary city; Tariq = the morning star", category: "western-male" },
  "brent": { muslimNames: ["barakat"], meaning: "High Place", connection: "Brent = high; Barakat means blessings from above", category: "western-male" },
  "dwayne": { muslimNames: ["da'ud"], meaning: "Dark", connection: "Dwayne = dark; Da'ud (David) means beloved", category: "western-male" },
  "cedric": { muslimNames: ["siddiq"], meaning: "Chief", connection: "Cedric = chief; Siddiq means truthful — Abu Bakr as-Siddiq", category: "western-male" },
  "claude": { muslimNames: ["qasim"], meaning: "Lame", connection: "Claude = limping; Qasim means distributor — Qasim was the Prophet's son", category: "western-male" },
  "reginald": { muslimNames: ["sultan"], meaning: "King's Advisor", connection: "Reginald = ruler; Sultan means authority/ruler", category: "western-male" },
  "terrence": { muslimNames: ["tahir"], meaning: "Smooth", connection: "Terrence = tender; Tahir means pure/clean", category: "western-male" },
  "curtis": { muslimNames: ["kareem"], meaning: "Courteous", connection: "Curtis = polite; Kareem means generous/courteous", category: "western-male" },
  "vernon": { muslimNames: ["vaqar"], meaning: "Alder Grove", connection: "Vernon = spring; Vaqar means dignity/composure", category: "western-male" },
  "marshall": { muslimNames: ["mushir"], meaning: "Horse Servant", connection: "Marshall = commander; Mushir means advisor/commander", category: "western-male" },
  "leon": { muslimNames: ["laith", "asad"], meaning: "Lion", connection: "Leon = lion; Laith and Asad both mean lion in Arabic", category: "western-male" },
  "ross": { muslimNames: ["rauf"], meaning: "Headland", connection: "Ross = promontory; Rauf means compassionate", category: "western-male" },
  "stuart": { muslimNames: ["sa'id"], meaning: "Steward", connection: "Stuart = guardian; Sa'id means happy/fortunate", category: "western-male" },
  "oscar": { muslimNames: ["askar"], meaning: "God's Spear", connection: "Oscar = divine spear; Askar means army/soldier", category: "western-male" },
  "norman": { muslimNames: ["noman"], meaning: "Northman", connection: "Norman/Noman — Nu'man was a companion; Nu'man ibn Bashir transmitted hadith", category: "western-male" },
  "ian": { muslimNames: ["yahya"], meaning: "God is Gracious", connection: "Ian from John; Yahya is Prophet John in Islam", category: "western-male" },
  "sean": { muslimNames: ["yahya", "shaan"], meaning: "God is Gracious", connection: "Sean from John; Yahya is the Quranic equivalent", category: "western-male" },
  "nathan": { muslimNames: ["nabil"], meaning: "He Gave", connection: "Nathan = giver; Nabil means noble", category: "western-male" },
  "victor": { muslimNames: ["mansur"], meaning: "Conqueror", connection: "Victor = winner; Mansur means divinely aided to victory", category: "western-male" },
  "neil": { muslimNames: ["nael"], meaning: "Champion", connection: "Neil = champion; Nael means one who achieves", category: "western-male" },
  "barry": { muslimNames: ["barir"], meaning: "Spear", connection: "Barry = marksman; Barir means faithful", category: "western-male" },
  "floyd": { muslimNames: ["fayyad"], meaning: "Gray", connection: "Floyd = gray-haired; Fayyad means generous/overflowing", category: "western-male" },
  "louis": { muslimNames: ["layth"], meaning: "Famous Warrior", connection: "Louis = renowned warrior; Layth means lion — brave warrior", category: "western-male" },
  "pedro": { muslimNames: ["salman"], meaning: "Rock", connection: "Pedro from Peter = rock; Salman al-Farisi represents seeking truth", category: "western-male" },
  "marco": { muslimNames: ["malik"], meaning: "Of Mars", connection: "Marco from Marcus; Malik means king/sovereign", category: "western-male" },
  "antonio": { muslimNames: ["anwar"], meaning: "Priceless", connection: "Antonio = priceless; Anwar = radiant/luminous", category: "western-male" },
  "juan": { muslimNames: ["yahya"], meaning: "God is Gracious", connection: "Juan from John; Yahya is Prophet John in Islam", category: "western-male" },
  "jose": { muslimNames: ["yusuf"], meaning: "God Will Increase", connection: "Jose from Joseph; Yusuf's story is 'the best of stories' in the Quran", popularIn: ["BR", "PT"], category: "western-male" },
  "miguel": { muslimNames: ["mikail"], meaning: "Who is Like God", connection: "Miguel from Michael; Mikail is the angel of provision in Islam", category: "western-male" },
  "andre": { muslimNames: ["amir"], meaning: "Manly, Brave", connection: "Andre = brave; Amir = commander/prince", category: "western-male" },
  "rafael": { muslimNames: ["israfil"], meaning: "God Has Healed", connection: "Rafael = healer; Israfil is the angel of the trumpet", category: "western-male" },
  "mateo": { muslimNames: ["ata"], meaning: "Gift of God", connection: "Mateo from Matthew = God's gift; Ata means gift in Arabic", category: "western-male" },
  "hugo": { muslimNames: ["huda"], meaning: "Mind, Spirit", connection: "Hugo = intellect; Huda means guidance", category: "western-male" },
  "giovanni": { muslimNames: ["yahya"], meaning: "God is Gracious", connection: "Giovanni from John; Yahya is the Islamic equivalent", category: "western-male" },
  "pierre": { muslimNames: ["salman"], meaning: "Rock", connection: "Pierre from Peter = rock; Salman represents seeking truth", category: "western-male" },
  "hans": { muslimNames: ["yahya"], meaning: "God is Gracious", connection: "Hans from Johannes/John; Yahya is Prophet John", category: "western-male" },
  "erik": { muslimNames: ["amir"], meaning: "Eternal Ruler", connection: "Erik = eternal ruler; Amir = prince/commander", category: "western-male" },
  "jean": { muslimNames: ["yahya"], meaning: "God is Gracious", connection: "Jean from John; Yahya is Prophet John in Islam", category: "western-male" },

  // ===========================
  // EXPANDED WESTERN FEMALE (to 300+)
  // ===========================
  "brooke": { muslimNames: ["nahr"], meaning: "Stream", connection: "Brooke = stream; Nahr means river — rivers of paradise", category: "western-female" },
  "paige": { muslimNames: ["sahifa"], meaning: "Page", connection: "Paige = page; Sahifa means page/scripture", category: "western-female" },
  "morgan": { muslimNames: ["bahriya"], meaning: "Sea Circle", connection: "Morgan = sea; Bahriya means of the sea", category: "western-female" },
  "taylor": { muslimNames: ["nasiha"], meaning: "Tailor", connection: "Taylor = craftsperson; Nasiha means advisor/counselor", category: "western-female" },
  "madison": { muslimNames: ["majida"], meaning: "Son of Maud", connection: "Madison = strength; Majida means glorious/noble", category: "western-female" },
  "alexis": { muslimNames: ["aziza"], meaning: "Defender", connection: "Alexis = defender; Aziza means mighty/powerful", category: "western-female" },
  "kayla": { muslimNames: ["kala", "kawthar"], meaning: "Crown of Laurels", connection: "Kayla = pure; Kawthar means abundance — a river in paradise (Surah Al-Kawthar)", category: "western-female" },
  "brianna": { muslimNames: ["shareefa"], meaning: "Strong, Noble", connection: "Brianna = noble; Shareefa means honorable/noble", category: "western-female" },
  "autumn": { muslimNames: ["kharif"], meaning: "Fall Season", connection: "Autumn = harvest; Kharif means autumn season", category: "western-female" },
  "destiny": { muslimNames: ["qadar"], meaning: "Fate", connection: "Destiny = fate; Qadar means divine decree — one of Islam's pillars of faith", category: "western-female" },
  "gabriella": { muslimNames: ["jibriya"], meaning: "God is My Strength", connection: "Gabriella = divine strength; derived from Jibreel (Gabriel)", category: "western-female" },
  "vanessa": { muslimNames: ["farasha"], meaning: "Butterfly", connection: "Vanessa = butterfly; Farasha means butterfly in Arabic", category: "western-female" },
  "katherine": { muslimNames: ["tahira"], meaning: "Pure", connection: "Katherine = pure; Tahira means pure/virtuous", category: "western-female" },
  "alexandra": { muslimNames: ["aziza"], meaning: "Defender of People", connection: "Alexandra = defender; Aziza means mighty/precious", category: "western-female" },
  "jocelyn": { muslimNames: ["jawahir"], meaning: "Joyful", connection: "Jocelyn = joyful; Jawahir means jewels/gems", category: "western-female" },
  "julia": { muslimNames: ["jawhara"], meaning: "Youthful", connection: "Julia = youthful; Jawhara means jewel/gem", category: "western-female" },
  "annabelle": { muslimNames: ["anisa", "jamila"], meaning: "Graceful Beautiful", connection: "Annabelle = beautiful grace; Anisa = friendly, Jamila = beautiful", category: "western-female" },
  "adriana": { muslimNames: ["bahriya"], meaning: "From the Adriatic", connection: "Adriana = from the sea; Bahriya = of the sea", category: "western-female" },
  "bethany": { muslimNames: ["bayt"], meaning: "House of Figs", connection: "Bethany = house of figs; Bayt means house — Bayt Allah (House of God)", hebrewOrigin: "בֵּית עַנְיָה", category: "western-female" },
  "caroline": { muslimNames: ["karima"], meaning: "Free Woman", connection: "Caroline = free; Karima means generous/noble", category: "western-female" },
  "danielle": { muslimNames: ["dalila"], meaning: "God is My Judge", connection: "Danielle from Daniel; Dalila means guide/proof", hebrewOrigin: "דָּנִיֵּאל", category: "western-female" },
  "elise": { muslimNames: ["ilham"], meaning: "God's Oath", connection: "Elise from Elizabeth; Ilham means inspiration/revelation", category: "western-female" },
  "florence": { muslimNames: ["zahra"], meaning: "Flowering", connection: "Florence = blooming; Zahra means flower/blooming", category: "western-female" },
  "giselle": { muslimNames: ["ghada"], meaning: "Pledge", connection: "Giselle = pledge; Ghada means graceful young woman", category: "western-female" },
  "holly": { muslimNames: ["rawda"], meaning: "Holly Tree", connection: "Holly = evergreen; Rawda means garden of paradise", category: "western-female" },
  "josephine": { muslimNames: ["yusra"], meaning: "God Will Add", connection: "Josephine from Joseph; Yusra means ease/prosperity", category: "western-female" },
  "kenya": { muslimNames: ["kinana"], meaning: "Named After Country", connection: "Kenya = beautiful; Kinana means treasured — an Arab tribe name", category: "western-female" },
  "lydia": { muslimNames: ["lubna"], meaning: "From Lydia", connection: "Lydia = beautiful; Lubna means storax tree — associated with sweetness", category: "western-female" },
  "melody": { muslimNames: ["nashwa"], meaning: "Song", connection: "Melody = music; Nashwa means ecstasy/elation", category: "western-female" },
  "nina": { muslimNames: ["nida"], meaning: "Little Girl", connection: "Nina = grace; Nida means call/voice", category: "western-female" },
  "priscilla": { muslimNames: ["qudsia"], meaning: "Ancient", connection: "Priscilla = venerable; Qudsia means holy/sacred", category: "western-female" },
  "regina": { muslimNames: ["malika"], meaning: "Queen", connection: "Regina = queen; Malika means queen in Arabic", category: "western-female" },
  "selena": { muslimNames: ["qamar"], meaning: "Moon", connection: "Selena = moon; Qamar means moon in Arabic", category: "western-female" },
  "tamara": { muslimNames: ["thamara"], meaning: "Date Palm", connection: "Tamara = palm tree; Thamara means fruit — dates are blessed in Islam", hebrewOrigin: "תָּמָר (Tamar)", category: "western-female" },
  "ursula": { muslimNames: ["umama"], meaning: "Little Bear", connection: "Ursula = bear; Umama was a granddaughter of the Prophet ﷺ", category: "western-female" },
  "veronica": { muslimNames: ["sidra"], meaning: "True Image", connection: "Veronica = true image; Sidra means lote tree — Sidrat al-Muntaha in the Quran", category: "western-female" },
  "wendy": { muslimNames: ["widad"], meaning: "Friend", connection: "Wendy = friend; Widad means love/friendship", category: "western-female" },
  "yvette": { muslimNames: ["yumna"], meaning: "Yew", connection: "Yvette = yew tree; Yumna means blessed/right side", category: "western-female" },
  "zoe": { muslimNames: ["hayat"], meaning: "Life", connection: "Zoe = life; Hayat means life in Arabic", category: "western-female" },
  "abby": { muslimNames: ["abeer"], meaning: "Joy of the Father", connection: "Abby from Abigail = joy; Abeer means fragrance", category: "western-female" },
  "candice": { muslimNames: ["kaneez"], meaning: "Queen of Ethiopia", connection: "Candice = Ethiopian queen; Kaneez means maiden/servant", category: "western-female" },
  "daphne": { muslimNames: ["daliya"], meaning: "Laurel", connection: "Daphne = laurel; Daliya means vine/grape — beautiful and climbing", category: "western-female" },
  "elena": { muslimNames: ["ilham", "noor"], meaning: "Bright Light", connection: "Elena = shining; Ilham = inspiration, Noor = divine light", category: "western-female" },
  "felicia": { muslimNames: ["sa'ida"], meaning: "Happy", connection: "Felicia = fortunate; Sa'ida means happy/blessed", category: "western-female" },
  "gianna": { muslimNames: ["janna"], meaning: "God is Gracious", connection: "Gianna from Johanna; Janna means paradise in Arabic", category: "western-female" },
  "harmony": { muslimNames: ["itidal"], meaning: "Musical Harmony", connection: "Harmony = balance; Itidal means moderation/balance — a key Islamic virtue", category: "western-female" },
  "imogen": { muslimNames: ["iman"], meaning: "Maiden", connection: "Imogen = maiden; Iman means faith — one of Islam's pillars", category: "western-female" },
  "jasmine": { muslimNames: ["yasmin"], meaning: "Jasmine Flower", connection: "Jasmine/Yasmin — direct equivalent; the same fragrant flower", category: "western-female" },
  "kendra": { muslimNames: ["khadra"], meaning: "Wise Ruler", connection: "Kendra = wise; Khadra means green/verdant — a blessed color in Islam", category: "western-female" },
  "lucille": { muslimNames: ["noor", "munira"], meaning: "Light", connection: "Lucille = light; Noor means divine light, Munira means radiant", category: "western-female" },
  "ophelia": { muslimNames: ["afaf"], meaning: "Help", connection: "Ophelia = help; Afaf means chastity/modesty", category: "western-female" },
  "prudence": { muslimNames: ["hikma"], meaning: "Good Judgment", connection: "Prudence = wisdom; Hikma means wisdom — mentioned frequently in the Quran", category: "virtue" },
  "quinn": { muslimNames: ["qurra", "qudsia"], meaning: "Wise", connection: "Quinn = wise/queen; Qurra means coolness of the eyes, Qudsia means holy", category: "western-female" },
  "rosemary": { muslimNames: ["warda"], meaning: "Dew of the Sea", connection: "Rosemary = rose; Warda means rose in Arabic", category: "western-female" },
  "samantha": { muslimNames: ["samia"], meaning: "Listener", connection: "Samantha = listener; Samia means elevated/noble", category: "western-female" },
  "tara": { muslimNames: ["tara"], meaning: "Star", connection: "Tara = star; used in Muslim communities in South Asia meaning star", category: "western-female" },
  "uma": { muslimNames: ["umm"], meaning: "Mother", connection: "Uma = mother; Umm means mother — Umm Salama was the Prophet's wife", category: "western-female" },
  "vicky": { muslimNames: ["fatiha"], meaning: "Victory", connection: "Vicky from Victoria = victory; Fatiha means the opening — Al-Fatiha", category: "western-female" },
   "willow": { muslimNames: ["rawda"], meaning: "Willow Tree", connection: "Willow = graceful tree; Rawda means garden/meadow", category: "western-female" },
  "jennifer": { muslimNames: ["janan"], meaning: "White Spirit", connection: "Jennifer = fair; Janan means heart/soul — the innermost being", category: "western-female" },
  "susan": { muslimNames: ["sawsan"], meaning: "Lily", connection: "Susan from Susanna = lily; Sawsan is the Arabic word for lily", category: "western-female" },
  "stephanie": { muslimNames: ["taj", "safiya"], meaning: "Crown", connection: "Stephanie = crown; Taj means crown, Safiya means pure/chosen", category: "western-female" },
  "christina": { muslimNames: ["tahira"], meaning: "Follower of Christ", connection: "Christina = anointed; Tahira means pure/virtuous", category: "western-female" },
  "jessica": { muslimNames: ["yasmin", "jamila"], meaning: "God Beholds", connection: "Jessica = to behold; Yasmin = jasmine flower, Jamila = beautiful", category: "western-female" },
  "emily": { muslimNames: ["amila", "noor"], meaning: "Industrious", connection: "Emily = striving; Amila means industrious, Noor means light", category: "western-female" },
  "amanda": { muslimNames: ["amira", "habiba"], meaning: "Worthy of Love", connection: "Amanda = lovable; Amira means princess, Habiba means beloved", category: "western-female" },
  "randall": { muslimNames: ["rashid"], meaning: "Shield Wolf", connection: "Randall = wolf shield; Rashid means rightly guided", category: "western-male" },
  "frederick": { muslimNames: ["farid", "faris"], meaning: "Peaceful Ruler", connection: "Frederick = peaceful power; Farid = unique, Faris = knight", category: "western-male" },
  "jeffrey": { muslimNames: ["jaffer", "jafar"], meaning: "Peace", connection: "Jeffrey = divine peace; Jafar was a companion of the Prophet", category: "western-male" },

   // ===========================
   // VIRTUE-BASED & ARABIC NAMES (100+)
   // ===========================
   "derek": { muslimNames: ["tahir"], meaning: "Ruler of People", connection: "Derek = ruler; Tahir means pure/virtuous", category: "western-male" },
   "dylan": { muslimNames: ["din"], meaning: "Born of the Sea", connection: "Dylan = sea; Din means religion/faith in Arabic", category: "western-male" },
   "kyle": { muslimNames: ["khalil"], meaning: "Narrow Strait", connection: "Kyle = narrow; Khalil means close friend/intimate", category: "western-male" },
   "grace": { muslimNames: ["hana", "noor"], meaning: "Grace", connection: "Grace embodies divine grace; Hana means grace/favor", popularIn: ["NG"], category: "western-female" },
   "hope": { muslimNames: ["raja"], meaning: "Hope", connection: "Hope = trust; Raja means hope", category: "western-female" },
   "faith": { muslimNames: ["iman"], meaning: "Faith", connection: "Faith = belief; Iman means faith — a pillar of Islam", category: "western-female" },
   "joy": { muslimNames: ["bahjah"], meaning: "Joy", connection: "Joy = happiness; Bahjah means splendor/joy", popularIn: ["NG"], category: "western-female" },
   "peace": { muslimNames: ["salam"], meaning: "Peace", connection: "Peace = tranquility; Salam means peace — As-Salaam is a name of Allah", category: "western-female" },
   "mercy": { muslimNames: ["rahma"], meaning: "Mercy", connection: "Mercy = compassion; Rahma means divine mercy", popularIn: ["NG"], category: "western-female" },
   "patience": { muslimNames: ["sabr"], meaning: "Patience", connection: "Patience = endurance; Sabr is a cardinal Islamic virtue", popularIn: ["NG"], category: "western-female" },
   "serenity": { muslimNames: ["sakina"], meaning: "Serenity", connection: "Serenity = peace; Sakina means tranquility/divine peace", category: "western-female" },
   "truth": { muslimNames: ["haqq"], meaning: "Truth", connection: "Truth = reality; Haqq means truth — Al-Haqq is a name of Allah", category: "western-female" },
   "wisdom": { muslimNames: ["hikma"], meaning: "Wisdom", connection: "Wisdom = knowledge; Hikma means wisdom — mentioned 66 times in the Quran", category: "western-female" },
   "strength": { muslimNames: ["quwwa"], meaning: "Strength", connection: "Strength = power; Quwwa means strength", category: "western-female" },
   "courage": { muslimNames: ["shajaa"], meaning: "Courage", connection: "Courage = bravery; Shajaa means courageous", category: "western-female" },
   "honesty": { muslimNames: ["sidq"], meaning: "Honesty", connection: "Honesty = truthfulness; Sidq means truthfulness", category: "western-female" },
   "charity": { muslimNames: ["sadaqah"], meaning: "Charity", connection: "Charity = generosity; Sadaqah is obligatory Islamic giving", category: "western-female" },
   "kindness": { muslimNames: ["lutf"], meaning: "Kindness", connection: "Kindness = gentleness; Lutf means kindness/gentleness — Al-Latif is a divine name", category: "western-female" },
   "justice": { muslimNames: ["adl"], meaning: "Justice", connection: "Justice = fairness; Adl means justice — Al-Adl is a divine name", category: "western-female" },
   "amelia": { muslimNames: ["amila"], meaning: "Work, Industrious", connection: "Amelia = hard worker; Amila means active/industrious", category: "western-female" },
   "levi": { muslimNames: ["lawl"], meaning: "Associated", connection: "Levi = joined; Lawl means turning away/protection", category: "western-male" },
   "ethan": { muslimNames: ["aithan"], meaning: "Firm, Strong", connection: "Ethan = strong/firm; Aithan is close phonetically", category: "western-male" },
   "malachai": { muslimNames: ["malak"], meaning: "My Messenger", connection: "Malachi = God's messenger; Malak means angel", category: "western-male" },
   "obadiah": { muslimNames: ["ubaid"], meaning: "Servant of God", connection: "Obadiah = servant of God; Ubaid means servant", category: "western-male" },
   "diana": { muslimNames: ["din"], meaning: "Divine", connection: "Diana = divine; Din means faith/religion", category: "western-female" },
   "charlotte": { muslimNames: ["shuruq"], meaning: "Free", connection: "Charlotte = free woman; Shuruq means sunrise/dawn", category: "western-female" },
   "amara": { muslimNames: ["amara"], meaning: "Eternal", connection: "Amara = undying; same in Arabic meaning eternal/lasting", category: "western-female" },
   "ava": { muslimNames: ["awah"], meaning: "Like Water", connection: "Ava flows easily; Awah means desire/longing", category: "western-female" },
   "stella": { muslimNames: ["nujum"], meaning: "Star", connection: "Stella = star; Nujum means stars", category: "western-female" },
   "clara": { muslimNames: ["qara"], meaning: "Bright", connection: "Clara = clear/bright; Qara means clarity/brightness", category: "western-female" },
   "lucas": { muslimNames: ["luqman"], meaning: "From Lucania", connection: "Lucas has light; Luqman = wise man in the Quran", category: "western-male" },
   "mason": { muslimNames: ["malik"], meaning: "Stone Worker", connection: "Mason = builder; Malik means king/authority", category: "western-male" },
   "logan": { muslimNames: ["layan"], meaning: "Small Hollow", connection: "Logan = small; Layan means tenderness/softness", category: "western-male" },
   "aiden": { muslimNames: ["haydan"], meaning: "Little Fire", connection: "Aiden = fiery; Haydan means moving/active", category: "western-male" },
   "jonathan": { muslimNames: ["yunus"], meaning: "God is Gracious", connection: "Jonathan = given by God; Yunus is the whale prophet", category: "western-male" },
   "gregory": { muslimNames: ["gharibi"], meaning: "Vigilant", connection: "Gregory = watchful; Gharibi means noble stranger", category: "western-male" },
   "carl": { muslimNames: ["kamal"], meaning: "Free Man", connection: "Carl = free man; Kamal means perfection/completeness", category: "western-male" },
   "wayne": { muslimNames: ["waseem"], meaning: "Wagon Maker", connection: "Wayne = craftsman; Waseem means handsome/graceful", category: "western-male" },
   "dean": { muslimNames: ["din"], meaning: "Valley", connection: "Dean = valley; Din means faith/religion", category: "western-male" },
   "dale": { muslimNames: ["daleel"], meaning: "Valley", connection: "Dale = valley; Daleel means guide/proof", category: "western-male" },
   "ralph": { muslimNames: ["rafi"], meaning: "Wolf Counsel", connection: "Ralph = wise; Rafi means exalted/high", category: "western-male" },
   "alan": { muslimNames: ["ali"], meaning: "Handsome", connection: "Alan = handsome; Ali means exalted/noble", category: "western-male" },
   "bruce": { muslimNames: ["burhan"], meaning: "Willow Lands", connection: "Bruce = thicket; Burhan means proof/evidence", category: "western-male" },
   "russell": { muslimNames: ["rusul"], meaning: "Little Red", connection: "Russell = red-haired; Rusul means messengers", category: "western-male" },
   "craig": { muslimNames: ["kareem"], meaning: "Rock", connection: "Craig = crag/rock; Kareem means generous/noble", category: "western-male" },
   "darren": { muslimNames: ["darwish"], meaning: "Great", connection: "Darren = great; Darwish means seeker of truth", category: "western-male" },
   "glenn": { muslimNames: ["ghaith"], meaning: "Valley", connection: "Glenn = valley; Ghaith means rain/succor", category: "western-male" },
   "herbert": { muslimNames: ["habib"], meaning: "Army Bright", connection: "Herbert = bright army; Habib means beloved", category: "western-male" },
   "iago": { muslimNames: ["yaqub"], meaning: "Supplanter", connection: "Iago from James/Jacob; Yaqub is the Quranic equivalent", category: "western-male" },
   "karl": { muslimNames: ["kamal"], meaning: "Free Man", connection: "Karl = free; Kamal means perfection", category: "western-male" },
   "miles": { muslimNames: ["muaz"], meaning: "Soldier", connection: "Miles = soldier; Muaz means protected — Muaz ibn Jabal", category: "western-male" },
   "noel": { muslimNames: ["naji"], meaning: "Christmas", connection: "Noel = birth; Naji means saved/survivor", category: "western-male" },
   "owen": { muslimNames: ["usman"], meaning: "Young Warrior", connection: "Owen = noble; Usman means baby bustard — Uthman ibn Affan", category: "western-male" },
   "percy": { muslimNames: ["bilal"], meaning: "Pierce Valley", connection: "Percy = piercing; Bilal means water/wetting — the first muezzin", category: "western-male" },
   "rex": { muslimNames: ["malik"], meaning: "King", connection: "Rex = king; Malik means king/sovereign", category: "western-male" },
   "rudy": { muslimNames: ["rushd"], meaning: "Famous Wolf", connection: "Rudy = fame; Rushd means right guidance — Ibn Rushd (Averroes)", category: "western-male" },
   "todd": { muslimNames: ["taha"], meaning: "Fox", connection: "Todd = fox; Taha is a name of Prophet Muhammad ﷺ (Surah Ta-Ha)", category: "western-male" },
   "wade": { muslimNames: ["wadud"], meaning: "Ford", connection: "Wade = ford/crossing; Wadud means loving — Al-Wadud", category: "western-male" },
   "lloyd": { muslimNames: ["layth"], meaning: "Gray", connection: "Lloyd = gray; Layth means lion", category: "western-male" },
   "max": { muslimNames: ["mu'az"], meaning: "Greatest", connection: "Max = greatest; Mu'az means protected by Allah", category: "western-male" },
   "felix": { muslimNames: ["farhan"], meaning: "Happy", connection: "Felix = fortunate; Farhan means joyful/happy", category: "western-male" },
   "theo": { muslimNames: ["tawfiq"], meaning: "God", connection: "Theo = divine; Tawfiq means divine guidance/success", category: "western-male" },
   "archie": { muslimNames: ["arshad"], meaning: "Genuine", connection: "Archie = bold; Arshad means most rightly guided", category: "western-male" },
   "freddie": { muslimNames: ["farid"], meaning: "Peaceful Ruler", connection: "Freddie = peace; Farid means unique/precious", category: "western-male" },
   "charlie": { muslimNames: ["kareem"], meaning: "Free Man", connection: "Charlie = free; Kareem means generous", category: "western-male" },
   "hector": { muslimNames: ["hamza"], meaning: "Steadfast", connection: "Hector = holding fast; Hamza means lion — the Prophet's uncle", category: "western-male" },
   "orion": { muslimNames: ["najm"], meaning: "Hunter", connection: "Orion = celestial hunter; Najm means star — An-Najm is a Quranic surah", category: "western-male" },
   "wyatt": { muslimNames: ["walid"], meaning: "Brave in War", connection: "Wyatt = brave; Walid means newborn — Khalid ibn al-Walid", category: "western-male" },
   "caleb": { muslimNames: ["qalb"], meaning: "Faithful", connection: "Caleb = whole-hearted; Qalb means heart in Arabic", hebrewOrigin: "כָּלֵב (Kalev)", category: "western-male" },
   "connor": { muslimNames: ["qadir"], meaning: "Wolf Lover", connection: "Connor = lover of wolves; Qadir means capable/powerful", category: "western-male" },
   "eli": { muslimNames: ["ali"], meaning: "Ascend", connection: "Eli = ascended; Ali means high/exalted", hebrewOrigin: "עֵלִי (Eli)", category: "western-male" },
   "gavin": { muslimNames: ["jawad"], meaning: "White Hawk", connection: "Gavin = hawk; Jawad means generous/noble steed", category: "western-male" },
   "harrison": { muslimNames: ["harith"], meaning: "Son of Harry", connection: "Harrison = heir; Harith means cultivator/earner", category: "western-male" },
   "ivan": { muslimNames: ["yahya"], meaning: "God is Gracious", connection: "Ivan from John; Yahya is Prophet John in the Quran", category: "western-male" },
   "jared": { muslimNames: ["jareer"], meaning: "Descend", connection: "Jared = descent; Jareer means a rope/companion of the Prophet", hebrewOrigin: "יֶרֶד (Yered)", category: "western-male" },
   "dominic": { muslimNames: ["din"], meaning: "Of the Lord", connection: "Dominic = belonging to God; Din means faith/religion", category: "western-male" },
   "edmund": { muslimNames: ["ahmad"], meaning: "Fortunate Protector", connection: "Edmund = blessed protector; Ahmad means most praiseworthy", category: "western-male" },
   "francis": { muslimNames: ["farouq"], meaning: "Free Man", connection: "Francis = free; Farouq means one who distinguishes truth from falsehood", category: "western-male" },
   "gilbert": { muslimNames: ["jalal"], meaning: "Bright Pledge", connection: "Gilbert = bright; Jalal means majesty/glory", category: "western-male" },
   "harvey": { muslimNames: ["harb"], meaning: "Battle Worthy", connection: "Harvey = blazing; Harb means war — used historically", category: "western-male" },
   "jasper": { muslimNames: ["jawhar"], meaning: "Treasurer", connection: "Jasper = treasure; Jawhar means jewel/essence", category: "western-male" },
   "lance": { muslimNames: ["laith"], meaning: "Spear", connection: "Lance = lance; Laith means lion — brave warrior", category: "western-male" },
   "marcus": { muslimNames: ["mu'min"], meaning: "Of Mars", connection: "Marcus = warlike; Mu'min means believer", category: "western-male" },
   "clyde": { muslimNames: ["khalid"], meaning: "River Clyde", connection: "Clyde = river; Khalid means eternal/immortal", category: "western-male" },
   "dawn": { muslimNames: ["fajr"], meaning: "Dawn", connection: "Dawn = first light; Fajr means dawn — the dawn prayer in Islam", category: "western-female" },
   "crystal": { muslimNames: ["durra"], meaning: "Crystal", connection: "Crystal = clear; Durra means pearl/gem", category: "western-female" },
   "amber": { muslimNames: ["anbar"], meaning: "Amber", connection: "Amber = fossil resin; Anbar means ambergris — precious fragrance", category: "western-female" },
   "heather": { muslimNames: ["huda"], meaning: "Heather Plant", connection: "Heather = flowering plant; Huda means guidance", category: "western-female" },
   "iris": { muslimNames: ["inara"], meaning: "Rainbow", connection: "Iris = rainbow; Inara means ray of light", category: "western-female" },
   "jade": { muslimNames: ["jawahir"], meaning: "Jade Stone", connection: "Jade = precious stone; Jawahir means jewels", category: "western-female" },
   "laurel": { muslimNames: ["lubna"], meaning: "Laurel Tree", connection: "Laurel = honor; Lubna means storax tree", category: "western-female" },
   "megan": { muslimNames: ["muneera"], meaning: "Pearl", connection: "Megan = pearl; Muneera means luminous/radiant", category: "western-female" },
   "natalie": { muslimNames: ["nadia"], meaning: "Born on Christmas", connection: "Natalie = birth; Nadia means caller/tender", category: "western-female" },
   "petra": { muslimNames: ["samira"], meaning: "Rock", connection: "Petra = rock; Samira means companion in evening talk", category: "western-female" },
   "rita": { muslimNames: ["rida"], meaning: "Pearl", connection: "Rita = pearl; Rida means contentment/satisfaction", category: "western-female" },
   "sonia": { muslimNames: ["sanaa"], meaning: "Wisdom", connection: "Sonia = wise; Sanaa means radiance/brilliance", category: "western-female" },
   "tiffany": { muslimNames: ["taqwa"], meaning: "Appearance of God", connection: "Tiffany = divine; Taqwa means God-consciousness", category: "western-female" },
   "violet": { muslimNames: ["banafsaj"], meaning: "Violet Flower", connection: "Violet = purple flower; Banafsaj means violet in Arabic", category: "western-female" },
   "wren": { muslimNames: ["warda"], meaning: "Small Bird", connection: "Wren = tiny bird; Warda means rose", category: "western-female" },
   "xena": { muslimNames: ["zahra"], meaning: "Hospitable", connection: "Xena = welcoming; Zahra means flower/blooming", category: "western-female" },
   "yvonne": { muslimNames: ["yumna"], meaning: "Yew Wood", connection: "Yvonne = yew; Yumna means blessed/right side", category: "western-female" },
   "zelda": { muslimNames: ["zainab"], meaning: "Dark Battle", connection: "Zelda = gray fighter; Zainab means father's precious jewel", category: "western-female" },
   "bianca": { muslimNames: ["bayda"], meaning: "White", connection: "Bianca = white; Bayda means white/pure", category: "western-female" },
   "chloe": { muslimNames: ["khadra"], meaning: "Green Shoot", connection: "Chloe = blooming; Khadra means green/verdant — blessed color in Islam", category: "western-female" },
   "emma": { muslimNames: ["umama"], meaning: "Whole, Universal", connection: "Emma = complete; Umama was granddaughter of Prophet Muhammad ﷺ", category: "western-female" },
   "fiona": { muslimNames: ["firdaus"], meaning: "Fair, White", connection: "Fiona = fair; Firdaus means the highest level of paradise", category: "western-female" },
   "hazel": { muslimNames: ["hala"], meaning: "Hazel Tree", connection: "Hazel = hazelnut; Hala means halo/aura around the moon", category: "western-female" },
   "ivy": { muslimNames: ["iqra"], meaning: "Ivy Plant", connection: "Ivy = climber; Iqra means read — the first word revealed in the Quran", category: "western-female" },
   "jenna": { muslimNames: ["jannah"], meaning: "White Spirit", connection: "Jenna = fair; Jannah means paradise", category: "western-female" },
   "lily": { muslimNames: ["sawsan"], meaning: "Lily Flower", connection: "Lily = pure flower; Sawsan means lily in Arabic", category: "western-female" },
   "mia": { muslimNames: ["maha"], meaning: "Mine, Beloved", connection: "Mia = mine; Maha means wild cow (large beautiful eyes)", category: "western-female" },
   "nora": { muslimNames: ["noor"], meaning: "Honor, Light", connection: "Nora = light; Noor means divine light — Surah An-Nur", category: "western-female" },
   "olive": { muslimNames: ["zaytuna"], meaning: "Olive Tree", connection: "Olive = olive; Zaytuna = olive — blessed tree in the Quran (Surah At-Tin)", category: "western-female" },
   "pearl": { muslimNames: ["lulu"], meaning: "Pearl", connection: "Pearl = gem; Lulu means pearl in Arabic — pearls of paradise", category: "western-female" },
   "ruby": { muslimNames: ["yaqut"], meaning: "Red Gem", connection: "Ruby = precious stone; Yaqut means ruby in Arabic", category: "western-female" },
   "sophia": { muslimNames: ["hikma"], meaning: "Wisdom", connection: "Sophia = wisdom; Hikma means wisdom — mentioned 66 times in the Quran", category: "western-female" },
   "scarlett": { muslimNames: ["hamra"], meaning: "Red", connection: "Scarlett = red; Hamra means red in Arabic", category: "western-female" },
   "isabella": { muslimNames: ["ilisabat"], meaning: "God's Oath", connection: "Isabella from Elizabeth; Ilisabat was wife of Prophet Zakariyya", hebrewOrigin: "אֱלִישֶׁבַע (Elisheva)", category: "western-female" },
   "aria": { muslimNames: ["arwa"], meaning: "Air, Song", connection: "Aria = melody; Arwa means beauty — a companion's name", category: "western-female" },
   "aurora": { muslimNames: ["fajr"], meaning: "Dawn", connection: "Aurora = dawn; Fajr means dawn — the dawn prayer", category: "western-female" },
   "penelope": { muslimNames: ["sabira"], meaning: "Weaver", connection: "Penelope = faithful weaver; Sabira means patient/enduring", category: "western-female" },
   "maya": { muslimNames: ["maha"], meaning: "Illusion", connection: "Maya = water; Maha means wild cow (beautiful eyes) or crystal", category: "western-female" },
   "luna": { muslimNames: ["qamar"], meaning: "Moon", connection: "Luna = moon; Qamar means moon — Al-Qamar is a Quranic surah", category: "western-female" },
   "sylvia": { muslimNames: ["sundus"], meaning: "Forest", connection: "Sylvia = from the forest; Sundus means fine silk — garments of paradise", category: "western-female" },
   "sienna": { muslimNames: ["safiya"], meaning: "Reddish Brown", connection: "Sienna = earth color; Safiya means pure/chosen — wife of the Prophet ﷺ", category: "western-female" },
   "daisy": { muslimNames: ["zahra"], meaning: "Day's Eye", connection: "Daisy = flower; Zahra means flower — Fatimah az-Zahra", category: "western-female" },
   "poppy": { muslimNames: ["warda"], meaning: "Red Flower", connection: "Poppy = bright flower; Warda means rose", category: "western-female" },
   "elsie": { muslimNames: ["ilham"], meaning: "Pledged to God", connection: "Elsie from Elizabeth; Ilham means divine inspiration", category: "western-female" },
   "theodore": { muslimNames: ["ata"], meaning: "Gift of God", connection: "Theodore = God's gift; Ata means gift in Arabic", category: "western-male" },
   "sebastian": { muslimNames: ["sabir"], meaning: "Venerable", connection: "Sebastian = revered; Sabir means patient/steadfast", category: "western-male" },
   "nathaniel": { muslimNames: ["nabil"], meaning: "Gift of God", connection: "Nathaniel = God has given; Nabil means noble/gifted", hebrewOrigin: "נְתַנְאֵל (Netanel)", category: "western-male" },
   "tobias": { muslimNames: ["tayyib"], meaning: "God is Good", connection: "Tobias = goodness of God; Tayyib means good/pure", hebrewOrigin: "טוֹבִיָּה (Toviyah)", category: "western-male" },
   "silas": { muslimNames: ["sulayman"], meaning: "Forest", connection: "Silas = of the forest; Sulayman was given wisdom over nature", category: "western-male" },
   "ezra": { muslimNames: ["uzair"], meaning: "Help", connection: "Ezra = helper; Uzair is mentioned in the Quran (9:30)", hebrewOrigin: "עֶזְרָא (Ezra)", category: "western-male" },
   "rowan": { muslimNames: ["rawh"], meaning: "Little Red Tree", connection: "Rowan = red berry tree; Rawh means rest/mercy", category: "western-male" },
   "finley": { muslimNames: ["fadl"], meaning: "Fair Hero", connection: "Finley = fair warrior; Fadl means grace/virtue", category: "western-male" },
   "hamish": { muslimNames: ["hamza"], meaning: "Supplanter", connection: "Hamish from James; Hamza means lion", category: "western-male" },
   "morris": { muslimNames: ["murad"], meaning: "Dark-Skinned", connection: "Morris = dark; Murad means desired/intended", category: "western-male" },
    "cornelius": { muslimNames: ["qasim"], meaning: "Horn", connection: "Cornelius = strong; Qasim means distributor — the Prophet's son", category: "western-male" },
    // === MORE WESTERN NAMES ===
    "adrienne": { muslimNames: ["adiba"], meaning: "Dark", connection: "Adrienne = dark; Adiba means well-mannered/cultured", category: "western-female" },
    "alana": { muslimNames: ["aliyah"], meaning: "Precious", connection: "Alana = dear child; Aliyah means exalted/noble", category: "western-female" },
    "bailey": { muslimNames: ["barira"], meaning: "Steward", connection: "Bailey = keeper; Barira means pious — a freed slave in Islamic history", category: "western-female" },
    "brenda": { muslimNames: ["bushra"], meaning: "Sword", connection: "Brenda = blade; Bushra means good news/glad tidings", category: "western-female" },
    "cara": { muslimNames: ["karima"], meaning: "Dear", connection: "Cara = beloved; Karima means generous/dear", category: "western-female" },
    "eden": { muslimNames: ["jannah"], meaning: "Paradise", connection: "Eden = paradise; Jannah is the Islamic paradise", category: "western-female" },
    "freya": { muslimNames: ["fariha"], meaning: "Noble Woman", connection: "Freya = noble; Fariha means joyful/happy", category: "western-female" },
    "genevieve": { muslimNames: ["jawahir"], meaning: "Of the Race of Women", connection: "Genevieve = tribe woman; Jawahir means jewels", category: "western-female" },
    "isla": { muslimNames: ["jazeera"], meaning: "Island", connection: "Isla = island; Jazeera means island — Al Jazeera", category: "western-female" },
    "jacqueline": { muslimNames: ["jamila"], meaning: "Supplanter", connection: "Jacqueline from Jacob; Jamila means beautiful", category: "western-female" },
    "kendall": { muslimNames: ["kareema"], meaning: "Valley", connection: "Kendall = valley; Kareema means generous/noble", category: "western-female" },
    "lara": { muslimNames: ["layla"], meaning: "Cheerful", connection: "Lara = cheerful; Layla means night/beauty", category: "western-female" },
    "maeve": { muslimNames: ["majida"], meaning: "Intoxicating", connection: "Maeve = enchanting; Majida means glorious/magnificent", category: "western-female" },
    "octavia": { muslimNames: ["thaniya"], meaning: "Eighth", connection: "Octavia = eighth; Thaniya means praiseworthy/second", category: "western-female" },
    "raquel": { muslimNames: ["rahma"], meaning: "Innocent Lamb", connection: "Raquel = ewe; Rahma means divine mercy", category: "western-female" },
    "tatiana": { muslimNames: ["tahira"], meaning: "Fairy Queen", connection: "Tatiana = queen; Tahira means pure/virtuous", category: "western-female" },
    "una": { muslimNames: ["umnia"], meaning: "One", connection: "Una = singular; Umnia means wish/aspiration", category: "western-female" },
    "vera": { muslimNames: ["wafa"], meaning: "Truth", connection: "Vera = true; Wafa means faithfulness/loyalty", category: "western-female" },
    "wanda": { muslimNames: ["wahida"], meaning: "Wanderer", connection: "Wanda = traveler; Wahida means unique/singular", category: "western-female" },
    "xiomara": { muslimNames: ["zahra"], meaning: "Ready for Battle", connection: "Xiomara = warrior; Zahra means flower — strength in beauty", category: "western-female" },
    "yolanda": { muslimNames: ["yasira"], meaning: "Violet Flower", connection: "Yolanda = violet; Yasira means easy-going/prosperous", category: "western-female" },
    // More Western Male
    "brock": { muslimNames: ["buraq"], meaning: "Badger", connection: "Brock = strong; Buraq is the steed of the Night Journey", category: "western-male" },
    "colton": { muslimNames: ["qutb"], meaning: "Coal Town", connection: "Colton = settlement; Qutb means axis/pole — spiritual center", category: "western-male" },
    "emmett": { muslimNames: ["ammar"], meaning: "Universal", connection: "Emmett = entire; Ammar means long-lived — companion of the Prophet ﷺ", category: "western-male" },
    "garrett": { muslimNames: ["ghaffar"], meaning: "Brave with Spear", connection: "Garrett = brave; Ghaffar means forgiving — Al-Ghaffar is a name of Allah", category: "western-male" },
    "heath": { muslimNames: ["haydar"], meaning: "Moorland", connection: "Heath = open land; Haydar means lion — title of Ali", category: "western-male" },
    "jarvis": { muslimNames: ["jawwad"], meaning: "Spear", connection: "Jarvis = spear servant; Jawwad means generous/swift", category: "western-male" },
    "keegan": { muslimNames: ["kaysan"], meaning: "Small and Fiery", connection: "Keegan = little fire; Kaysan means wise — a historical Muslim figure", category: "western-male" },
    "landon": { muslimNames: ["layyin"], meaning: "Long Hill", connection: "Landon = ridge; Layyin means gentle/tender", category: "western-male" },
    "murphy": { muslimNames: ["murtaza"], meaning: "Sea Warrior", connection: "Murphy = sea battler; Murtaza means chosen/approved — title of Ali", category: "western-male" },
    "nate": { muslimNames: ["nadir"], meaning: "Gift", connection: "Nate from Nathan; Nadir means rare/precious", category: "western-male" },
    "pierce": { muslimNames: ["bilal"], meaning: "Rock", connection: "Pierce = rock; Bilal was the first muezzin", category: "western-male" },
    "quincy": { muslimNames: ["qays"], meaning: "Estate", connection: "Quincy = fifth estate; Qays was a famous companion", category: "western-male" },
    "roger": { muslimNames: ["razi"], meaning: "Famous Spear", connection: "Roger = fame; Razi means content/pleased — Imam Razi", category: "western-male" },
    "travis": { muslimNames: ["tawfeeq"], meaning: "Crossing", connection: "Travis = crossroad; Tawfeeq means divine guidance", category: "western-male" },
    "ulysses": { muslimNames: ["ubayd"], meaning: "Wrathful", connection: "Ulysses = traveler; Ubayd means little servant", category: "western-male" },
    "vincent": { muslimNames: ["ghalib"], meaning: "Conquering", connection: "Vincent = to conquer; Ghalib means dominant/victorious", category: "western-male" },
     "xavier": { muslimNames: ["zahir"], meaning: "New House", connection: "Xavier = bright; Zahir means apparent/manifest", category: "western-male" },
     // === BATCH 3: MORE NAMES ===
     "angus": { muslimNames: ["anas"], meaning: "One Strength", connection: "Angus = unique choice; Anas means friendly — Anas ibn Malik served the Prophet ﷺ", category: "western-male" },
     "benedict": { muslimNames: ["mubarak"], meaning: "Blessed", connection: "Benedict = blessed; Mubarak means blessed/fortunate", category: "western-male" },
     "cyrus": { muslimNames: ["qaysar"], meaning: "Sun", connection: "Cyrus = sun; Qaysar (Caesar) — Cyrus is honored in Abrahamic traditions", category: "western-male" },
     "desmond": { muslimNames: ["daud"], meaning: "Gracious Defender", connection: "Desmond = protector; Daud (David) was a righteous protector", category: "western-male" },
     "edgar": { muslimNames: ["asad"], meaning: "Wealthy Spear", connection: "Edgar = prosperous; Asad means lion — fierce protector", category: "western-male" },
     
     "gideon": { muslimNames: ["ghaith"], meaning: "Mighty Warrior", connection: "Gideon = great warrior; Ghaith means rain/divine help", category: "western-male" },
     "humphrey": { muslimNames: ["hameed"], meaning: "Peaceful Warrior", connection: "Humphrey = peace; Hameed means praiseworthy", category: "western-male" },
     "irving": { muslimNames: ["irfan"], meaning: "Sea Friend", connection: "Irving = sea lover; Irfan means knowledge/wisdom", category: "western-male" },
     "jude": { muslimNames: ["jawad"], meaning: "Praised", connection: "Jude = praised; Jawad means generous/noble", category: "western-male" },
     "kingsley": { muslimNames: ["malik"], meaning: "King's Meadow", connection: "Kingsley = royal; Malik means king/sovereign", category: "western-male" },
     "leopold": { muslimNames: ["layth"], meaning: "Bold People", connection: "Leopold = brave; Layth means lion", category: "western-male" },
     "montgomery": { muslimNames: ["mu'tasim"], meaning: "Mountain Power", connection: "Montgomery = mountain man; Mu'tasim means seeking refuge in Allah", category: "western-male" },
     "nigel": { muslimNames: ["najib"], meaning: "Dark Champion", connection: "Nigel = champion; Najib means noble/distinguished", category: "western-male" },
     "oswald": { muslimNames: ["usama"], meaning: "Divine Power", connection: "Oswald = divine ruler; Usama means lion — Usama ibn Zayd was beloved of the Prophet", category: "western-male" },
     "quentin": { muslimNames: ["qasim"], meaning: "Fifth", connection: "Quentin = fifth; Qasim was the Prophet's firstborn son", category: "western-male" },
     "reece": { muslimNames: ["rais"], meaning: "Ardent", connection: "Reece = passionate; Rais means chief/president", category: "western-male" },
     "stirling": { muslimNames: ["saleem"], meaning: "Little Star", connection: "Sterling = excellent; Saleem means sound/safe", category: "western-male" },
     "tristan": { muslimNames: ["talib"], meaning: "Sad", connection: "Tristan = bold; Talib means seeker of knowledge", category: "western-male" },
     "ulric": { muslimNames: ["aziz"], meaning: "Wolf Ruler", connection: "Ulric = powerful ruler; Aziz means mighty — Al-Aziz is a name of Allah", category: "western-male" },
     "valentino": { muslimNames: ["wadud"], meaning: "Strong, Healthy", connection: "Valentino = strong love; Wadud means the loving — Al-Wadud is a divine name", category: "western-male" },
     "walter": { muslimNames: ["walid"], meaning: "Army Ruler", connection: "Walter = commander; Walid means newborn — Khalid ibn al-Walid", category: "western-male" },
     "yves": { muslimNames: ["yunus"], meaning: "Yew", connection: "Yves = yew tree; Yunus is the prophet of patience", category: "western-male" },
     "zachary": { muslimNames: ["zakariyya"], meaning: "God Remembers", connection: "Zachary from Zechariah; Zakariyya is the Quranic prophet", hebrewOrigin: "זְכַרְיָה (Zekharyah)", category: "western-male" },
     // More female
     "adelaide": { muslimNames: ["adila"], meaning: "Noble Natured", connection: "Adelaide = nobility; Adila means just/fair", category: "western-female" },
     "beatrice": { muslimNames: ["basira"], meaning: "Bringer of Joy", connection: "Beatrice = blessed joy; Basira means insightful/perceptive", category: "western-female" },
     "cassandra": { muslimNames: ["qasima"], meaning: "Prophetess", connection: "Cassandra = prophetess; Qasima means one who distributes", category: "western-female" },
     "dorothy": { muslimNames: ["durra"], meaning: "Gift of God", connection: "Dorothy = God's gift; Durra means pearl/precious gem", category: "western-female" },
     "eleanor": { muslimNames: ["noor"], meaning: "Bright Light", connection: "Eleanor = shining; Noor means divine light", category: "western-female" },
     "francesca": { muslimNames: ["farida"], meaning: "Free", connection: "Francesca = free; Farida means unique/precious", category: "western-female" },
     "gwendolyn": { muslimNames: ["ghalia"], meaning: "White Ring", connection: "Gwendolyn = fair; Ghalia means precious/expensive", category: "western-female" },
     "harriet": { muslimNames: ["huda"], meaning: "Home Ruler", connection: "Harriet = ruler; Huda means guidance", category: "western-female" },
     "ingrid": { muslimNames: ["inara"], meaning: "Beautiful Goddess", connection: "Ingrid = fair; Inara means ray of light", category: "western-female" },
     "kathleen": { muslimNames: ["tahira"], meaning: "Pure", connection: "Kathleen = pure; Tahira means pure/virtuous", category: "western-female" },
     "leonora": { muslimNames: ["lamar"], meaning: "Light", connection: "Leonora = shining; Lamar means the sea", category: "western-female" },
     "margaret": { muslimNames: ["lulu"], meaning: "Pearl", connection: "Margaret = pearl; Lulu means pearl in Arabic — pearls of paradise", category: "western-female" },
     
     "opal": { muslimNames: ["jawahir"], meaning: "Precious Stone", connection: "Opal = gem; Jawahir means jewels", category: "western-female" },
     "philippa": { muslimNames: ["muhibba"], meaning: "Lover of Horses", connection: "Philippa = horse lover; Muhibba means loving/affectionate", category: "western-female" },
     
     "serena": { muslimNames: ["sakina"], meaning: "Calm, Serene", connection: "Serena = calm; Sakina means divine tranquility", category: "western-female" },
     "theresa": { muslimNames: ["tara"], meaning: "Harvest", connection: "Theresa = reaper; Tara means star in some traditions", category: "western-female" },
     "victoria": { muslimNames: ["fatiha"], meaning: "Victory", connection: "Victoria = victory; Fatiha means the opening — Al-Fatiha is the opening of the Quran", popularIn: ["NG"], category: "western-female" },
  // === BATCH 4: MORE NAMES ===
  "mila": { muslimNames: ["mila", "muhja"], meaning: "Gracious", connection: "Mila = gracious; Muhja means heart's joy", category: "western-female" },
  "harper": { muslimNames: ["katibah", "sahiba"], meaning: "Harp Player", connection: "Harper = musician; Sahiba means companion/friend", category: "western-female" },
  "evelyn": { muslimNames: ["hayat", "haya"], meaning: "Wished-for Child", connection: "Evelyn = life; Hayat means life, Haya means modesty", category: "western-female" },
  "addison": { muslimNames: ["adila"], meaning: "Son of Adam", connection: "Addison = Adam's son; Adila means just/fair", category: "western-female" },
  "brooklyn": { muslimNames: ["nahr", "bahira"], meaning: "Broken Land", connection: "Brooklyn = water; Nahr means river, Bahira means dazzling", category: "western-female" },
  "zoey": { muslimNames: ["hayat"], meaning: "Life", connection: "Zoey = life; Hayat means life in Arabic", category: "western-female" },
  "eliana": { muslimNames: ["ilham", "ilyana"], meaning: "My God Answered", connection: "Eliana = God answered; Ilham means inspiration", hebrewOrigin: "אֵלִיָּעַנָה", category: "western-female" },
  "leilani": { muslimNames: ["lina", "layla"], meaning: "Heavenly Flower", connection: "Leilani = flower; Lina means tender, Layla means night", category: "western-female" },
  "reagan": { muslimNames: ["rashida"], meaning: "Little Ruler", connection: "Reagan = ruler; Rashida means rightly guided", category: "western-female" },
  "sawyer": { muslimNames: ["safir", "saqr"], meaning: "Woodcutter", connection: "Sawyer = wood worker; Safir means ambassador, Saqr means falcon", category: "western-male" },
  "grayson": { muslimNames: ["rashid"], meaning: "Son of Gray", connection: "Grayson = son of steward; Rashid means rightly guided", category: "western-male" },
  "lincoln": { muslimNames: ["nur"], meaning: "Lake Colony", connection: "Lincoln = settlement; Nur means light", category: "western-male" },
  "easton": { muslimNames: ["sharq"], meaning: "East Town", connection: "Easton = east; Sharq means east/rising", category: "western-male" },
  "nolan": { muslimNames: ["nabil"], meaning: "Champion", connection: "Nolan = noble; Nabil means noble", category: "western-male" },
  "colin": { muslimNames: ["qasim"], meaning: "Young Creature", connection: "Colin = young; Qasim means distributor — Prophet's son", category: "western-male" },
  "beckett": { muslimNames: ["barakat"], meaning: "Bee Cottage", connection: "Beckett = bee; Barakat means blessings", category: "western-male" },
  "jaxon": { muslimNames: ["yasir"], meaning: "God Has Been Gracious", connection: "Jaxon from John; Yasir means easy/prosperous", category: "western-male" },
  "asher": { muslimNames: ["saad", "saeed"], meaning: "Happy, Blessed", connection: "Asher = happy; Saad/Saeed means fortunate", hebrewOrigin: "אָשֵׁר", category: "western-male" },
  "carter": { muslimNames: ["hamil"], meaning: "Cart Driver", connection: "Carter = transporter; Hamil means bearer", category: "western-male" },
  "parker": { muslimNames: ["hafiz"], meaning: "Park Keeper", connection: "Parker = keeper; Hafiz means guardian — one who memorizes Quran", category: "western-male" },
  "hudson": { muslimNames: ["nahr"], meaning: "Son of Hugh", connection: "Hudson = river; Nahr means river in Arabic", category: "western-male" },
  "graham": { muslimNames: ["karim"], meaning: "Gravelly Homestead", connection: "Graham = home; Karim means generous/noble", category: "western-male" },
  "declan": { muslimNames: ["dawood"], meaning: "Full of Goodness", connection: "Declan = full; Dawood (David) was full of devotion", category: "western-male" },
  "bennett": { muslimNames: ["mubarak"], meaning: "Blessed", connection: "Bennett = blessed; Mubarak means blessed", category: "western-male" },
  "rhett": { muslimNames: ["rashid"], meaning: "Advice", connection: "Rhett = counsel; Rashid means rightly guided", category: "western-male" },
  "remington": { muslimNames: ["raheem"], meaning: "Place on River Bank", connection: "Remington = settlement; Raheem means merciful", category: "western-male" },
  // === BATCH 5: MORE NAMES ===
  "skylar": { muslimNames: ["samaa"], meaning: "Scholar", connection: "Skylar = sky; Samaa means sky/heaven in Arabic", category: "western-female" },
  "mckenzie": { muslimNames: ["mubashira"], meaning: "Son of Kenzie", connection: "McKenzie = fair; Mubashira means bearer of good news", category: "western-female" },
  "presley": { muslimNames: ["safiya"], meaning: "Priest's Meadow", connection: "Presley = meadow; Safiya means pure/chosen", category: "western-female" },
  "kinley": { muslimNames: ["karima"], meaning: "White Warrior", connection: "Kinley = fair; Karima means generous/noble", category: "western-female" },
  "blakely": { muslimNames: ["barakah"], meaning: "Dark Meadow", connection: "Blakely = dark; Barakah means blessings", category: "western-female" },
  "emersyn": { muslimNames: ["iman"], meaning: "Emery's Son", connection: "Emersyn = industrious; Iman means faith", category: "western-female" },
  "hadley": { muslimNames: ["huda"], meaning: "Heather Meadow", connection: "Hadley = heather; Huda means guidance", category: "western-female" },
  "kinsley": { muslimNames: ["khadija"], meaning: "King's Meadow", connection: "Kinsley = royal; Khadija was the first wife of the Prophet ﷺ", category: "western-female" },
  "piper": { muslimNames: ["sabira"], meaning: "Pipe Player", connection: "Piper = musician; Sabira means patient", category: "western-female" },
  "rylee": { muslimNames: ["rayyan"], meaning: "Valiant", connection: "Rylee = rye meadow; Rayyan is a gate of Paradise", category: "western-female" },
  "jace": { muslimNames: ["yusuf"], meaning: "Healer", connection: "Jace from Jason; Yusuf is Prophet Joseph", category: "western-male" },
  "kayden": { muslimNames: ["kareem"], meaning: "Companion", connection: "Kayden = fighter; Kareem means generous", category: "western-male" },
  "bryson": { muslimNames: ["burhan"], meaning: "Son of Brice", connection: "Bryson = noble; Burhan means proof/evidence", category: "western-male" },
  "axel": { muslimNames: ["aziz"], meaning: "Father of Peace", connection: "Axel = father of peace; Aziz means mighty", category: "western-male" },
  "cooper": { muslimNames: ["kamil"], meaning: "Barrel Maker", connection: "Cooper = craftsman; Kamil means perfect/complete", category: "western-male" },
  "brody": { muslimNames: ["barakat"], meaning: "Ditch", connection: "Brody = from the ditch; Barakat means blessings", category: "western-male" },
  "paxton": { muslimNames: ["sadiq"], meaning: "Peace Town", connection: "Paxton = peaceful; Sadiq means truthful", category: "western-male" },
  "holden": { muslimNames: ["hafiz"], meaning: "Hollow Valley", connection: "Holden = guardian; Hafiz means guardian — one who memorizes Quran", category: "western-male" },
  "knox": { muslimNames: ["qadir"], meaning: "Round Hill", connection: "Knox = hill; Qadir means capable/powerful", category: "western-male" },
  "phoenix": { muslimNames: ["anwar"], meaning: "Dark Red", connection: "Phoenix = rebirth; Anwar means radiant/luminous", category: "western-male" },
  // === BATCH 6 ===
  "amir": { muslimNames: ["amir"], meaning: "Prince, Commander", connection: "Amir means prince/commander in both Arabic and Hebrew", category: "western-male" },
  "emery": { muslimNames: ["amir", "umar"], meaning: "Industrious", connection: "Emery = industrious; Amir means commander, Umar means flourishing", category: "western-male" },
  "malachi": { muslimNames: ["malak"], meaning: "My Messenger", connection: "Malachi = God's messenger; Malak means angel", hebrewOrigin: "מַלְאָכִי", category: "biblical-male" },
  "river": { muslimNames: ["nahr", "rayyan"], meaning: "River", connection: "River = stream; Nahr means river, Rayyan is a gate of Paradise", category: "western-male" },
  "sierra": { muslimNames: ["jabal"], meaning: "Mountain Range", connection: "Sierra = mountain; Jabal means mountain", category: "western-female" },
  "sage": { muslimNames: ["hakim", "hikma"], meaning: "Wise", connection: "Sage = wise; Hakim means wise, Hikma means wisdom", category: "western-female" },
  "dakota": { muslimNames: ["sadiq"], meaning: "Friend", connection: "Dakota = ally; Sadiq means truthful friend", category: "western-female" },

  // ===========================
  // LATIN (ANCIENT ROMAN) NAMES
  // ===========================
  "aurelius": { muslimNames: ["noor", "zahir"], meaning: "Golden", connection: "Aurelius = golden; Noor means light, Zahir means radiant", category: "latin-male" },
  "julius": { muslimNames: ["yusuf", "jamal"], meaning: "Youthful, Downy", connection: "Julius = youthful; Yusuf means beauty, Jamal means beauty", category: "latin-male" },
  "augustus": { muslimNames: ["aziz", "jalal"], meaning: "Exalted, Venerable", connection: "Augustus = exalted; Aziz means mighty, Jalal means majesty", category: "latin-male" },
  "maximus": { muslimNames: ["akram", "azim"], meaning: "Greatest", connection: "Maximus = greatest; Akram means most generous, Azim means magnificent", category: "latin-male" },
  "justus": { muslimNames: ["adil", "muqsit"], meaning: "Just, Fair", connection: "Justus = just; Adil means just, Muqsit means equitable", category: "latin-male" },
  "vitalis": { muslimNames: ["hayat", "haya"], meaning: "Life", connection: "Vitalis = vital; Hayat means life", category: "latin-male" },
  "pius": { muslimNames: ["wali", "siddiq"], meaning: "Pious, Devout", connection: "Pius = pious; Wali means guardian, Siddiq means truthful", category: "latin-male" },
  "claudia": { muslimNames: ["karima", "jamila"], meaning: "Lame (ancient clan)", connection: "Claudia = noble; Karima means generous, Jamila means beautiful", category: "latin-female" },
  "flavia": { muslimNames: ["zahra", "safiya"], meaning: "Golden-haired", connection: "Flavia = golden; Zahra means flower, Safiya means pure", category: "latin-female" },
  "lucia": { muslimNames: ["noor", "munira"], meaning: "Light", connection: "Lucia = light; Noor means divine light, Munira means radiant", category: "latin-female" },

  // ===========================
  // HINDU / INDIAN NAMES (top 100 India — StudentsOfTheWorld, census.name)
  // ===========================
  "arjun": { muslimNames: ["hamza", "asad"], meaning: "Bright, White", connection: "Arjun = bright/heroic; Hamza means lion, Asad means lion", popularIn: ["IN"], category: "hindu-male" },
  "rohan": { muslimNames: ["rayyan", "rauf"], meaning: "Ascending", connection: "Rohan = ascending; Rayyan is a gate of Paradise, Rauf means compassionate", popularIn: ["IN"], category: "hindu-male" },
  "dev": { muslimNames: ["abdullah", "abdurrahman"], meaning: "Divine, God", connection: "Dev = divine; Abdullah means servant of Allah", popularIn: ["IN"], category: "hindu-male" },
  "rahul": { muslimNames: ["raheem", "rahim"], meaning: "Efficient", connection: "Rahul = capable; Raheem means merciful — Ar-Raheem", popularIn: ["IN"], category: "hindu-male" },
  "akash": { muslimNames: ["samaa", "falak"], meaning: "Sky", connection: "Akash = sky; Samaa means sky/heaven in Arabic", popularIn: ["IN"], category: "hindu-male" },
  "vivek": { muslimNames: ["hikma", "basir"], meaning: "Wisdom, Discrimination", connection: "Vivek = wisdom; Hikma means wisdom in Arabic", popularIn: ["IN"], category: "hindu-male" },
  "amar": { muslimNames: ["ammar", "khalid"], meaning: "Immortal", connection: "Amar = eternal; Khalid means eternal — Khalid ibn al-Walid", popularIn: ["IN"], category: "hindu-male" },
  "anil": { muslimNames: ["anas", "adil"], meaning: "Air, Wind", connection: "Anil = wind; Anas means friendly", popularIn: ["IN"], category: "hindu-male" },
  "priya": { muslimNames: ["habiba", "wadud"], meaning: "Beloved", connection: "Priya = beloved; Habiba means beloved, Wadud means loving", popularIn: ["IN"], category: "hindu-female" },
  "ananya": { muslimNames: ["wahida", "farida"], meaning: "Unique", connection: "Ananya = unique; Wahida means unique, Farida means precious", popularIn: ["IN"], category: "hindu-female" },
  "meera": { muslimNames: ["maryam", "mercy"], meaning: "Prosperous, Ocean", connection: "Meera = ocean; Maryam is honored in Islam", popularIn: ["IN"], category: "hindu-female" },
  "kavya": { muslimNames: ["shair", "adiba"], meaning: "Poetry", connection: "Kavya = poetry; Adiba means cultured/well-mannered", popularIn: ["IN"], category: "hindu-female" },
  "diya": { muslimNames: ["noor", "siraj"], meaning: "Lamp, Light", connection: "Diya = lamp; Noor means light, Siraj means lamp", popularIn: ["IN"], category: "hindu-female" },
  "nisha": { muslimNames: ["layla", "sahar"], meaning: "Night", connection: "Nisha = night; Layla means night, Sahar means dawn", popularIn: ["IN"], category: "hindu-female" },
  "pooja": { muslimNames: ["ibadah", "dua"], meaning: "Worship, Prayer", connection: "Pooja = worship; Ibadah means worship in Arabic", popularIn: ["IN"], category: "hindu-female" },

  // ===========================
  // CHINESE NAMES (Pinyin + character support, top names China)
  // ===========================
  "wei": { muslimNames: ["aziz", "wali"], meaning: "Great, Mighty", connection: "伟 Wei = greatness; Aziz means mighty, Wali means guardian", originalScript: "伟", popularIn: ["CN"], category: "chinese-male" },
  "qiang": { muslimNames: ["quwwah", "aziz"], meaning: "Strong", connection: "强 Qiang = strong; Quwwah means strength, Aziz means mighty", originalScript: "强", popularIn: ["CN"], category: "chinese-male" },
  "hao": { muslimNames: ["hasan", "jameel"], meaning: "Vast, Grand", connection: "浩 Hao = vast; Hasan means good, Jameel means beautiful", originalScript: "浩", popularIn: ["CN"], category: "chinese-male" },
  "tao": { muslimNames: ["nahr", "rauf"], meaning: "Big Wave", connection: "涛 Tao = wave; Rauf means compassionate", originalScript: "涛", popularIn: ["CN"], category: "chinese-male" },
  "jie": { muslimNames: ["fadl", "karim"], meaning: "Outstanding", connection: "杰 Jie = outstanding; Fadl means excellence, Karim means generous", originalScript: "杰", popularIn: ["CN"], category: "chinese-male" },
  "jun": { muslimNames: ["karim", "adil"], meaning: "Handsome, Army", connection: "俊/军 Jun = talented or army; Karim means generous, Adil means just", originalScript: "俊", popularIn: ["CN"], category: "chinese-male" },
  "lei": { muslimNames: ["rauf", "rahim"], meaning: "Thunder, Upright", connection: "雷/磊 Lei = thunder or upright; Rauf means compassionate", originalScript: "雷", popularIn: ["CN"], category: "chinese-male" },
  "peng": { muslimNames: ["hamza", "asad"], meaning: "Mythic Giant Bird", connection: "鹏 Peng = great bird; Hamza and Asad mean lion — strength", originalScript: "鹏", popularIn: ["CN"], category: "chinese-male" },
  "xin": { muslimNames: ["barakat", "rizq"], meaning: "Prosperity, Joyful", connection: "鑫/欣 Xin = prosperity or joy; Barakat means blessings, Rizq means provision", originalScript: "鑫", popularIn: ["CN"], category: "chinese-male" },
  "ming": { muslimNames: ["noor", "munir"], meaning: "Bright, Clear", connection: "明/铭 Ming = bright or inscribe; Noor means light, Munir means radiant", originalScript: "明", popularIn: ["CN"], category: "chinese-male" },
  "bo": { muslimNames: ["rauf", "rahim"], meaning: "Waves", connection: "波 Bo = waves; Rauf means compassionate", originalScript: "波", popularIn: ["CN"], category: "chinese-male" },
  "jiang": { muslimNames: ["nahr", "salsabil"], meaning: "River", connection: "江 Jiang = river; Nahr means river, Salsabil is a spring in Paradise", originalScript: "江", popularIn: ["CN"], category: "chinese-male" },
  "yu": { muslimNames: ["samad", "wahid"], meaning: "Universe, Space", connection: "宇 Yu = universe; Samad means eternal, Wahid means one", originalScript: "宇", popularIn: ["CN"], category: "chinese-male" },
  "yuhang": { muslimNames: ["siraj", "noor"], meaning: "Space Voyage", connection: "宇航 Yuhang = space; Siraj means lamp, Noor means light", originalScript: "宇航", popularIn: ["CN"], category: "chinese-male" },
  "yuxuan": { muslimNames: ["ali", "aziz"], meaning: "Lofty Universe", connection: "宇轩/子轩 Yuxuan = lofty; Ali means exalted, Aziz means mighty", originalScript: "宇轩", popularIn: ["CN"], category: "chinese-male" },
  "yuze": { muslimNames: ["rahma", "fadl"], meaning: "Universe and Grace", connection: "宇泽 Yuze = grace; Rahma means mercy, Fadl means excellence", originalScript: "宇泽", popularIn: ["CN"], category: "chinese-male" },
  "haoran": { muslimNames: ["karim", "rahim"], meaning: "Vast Noble Spirit", connection: "浩然 Haoran = noble spirit; Karim means generous, Rahim means merciful", originalScript: "浩然", popularIn: ["CN"], category: "chinese-male" },
  "haoyu": { muslimNames: ["samad", "aziz"], meaning: "Vast Universe", connection: "浩宇 Haoyu = vast universe; Samad means eternal", originalScript: "浩宇", popularIn: ["CN"], category: "chinese-male" },
  "jianguo": { muslimNames: ["nasr", "sultan"], meaning: "Build the Nation", connection: "建国 Jianguo = build nation; Nasr means victory, Sultan means authority", originalScript: "建国", popularIn: ["CN"], category: "chinese-male" },
  "jianhua": { muslimNames: ["noor", "jamal"], meaning: "Build Splendor", connection: "建华 Jianhua = build China; Noor means light, Jamal means beauty", originalScript: "建华", popularIn: ["CN"], category: "chinese-male" },
  "jianjun": { muslimNames: ["ghazi", "quwwah"], meaning: "Build the Army", connection: "建军 Jianjun = build army; Ghazi means warrior, Quwwah means strength", originalScript: "建军", popularIn: ["CN"], category: "chinese-male" },
  "zhiming": { muslimNames: ["noor", "hidaya"], meaning: "Aspiring and Bright", connection: "志明 Zhiming = aspiring bright; Noor means light, Hidaya means guidance", originalScript: "志明", popularIn: ["CN"], category: "chinese-male" },
  "deming": { muslimNames: ["sadiq", "amin"], meaning: "Virtuous and Bright", connection: "德明 Deming = virtuous; Sadiq means truthful, Amin means trustworthy", originalScript: "德明", popularIn: ["CN"], category: "chinese-male" },
  "yong": { muslimNames: ["shuja", "hamza"], meaning: "Brave", connection: "勇 Yong = brave; Shuja means courageous, Hamza means lion", originalScript: "勇", popularIn: ["CN"], category: "chinese-male" },
  "chao": { muslimNames: ["fadl", "nasr"], meaning: "Surpass, Exceed", connection: "超 Chao = surpass; Fadl means excellence, Nasr means victory", originalScript: "超", popularIn: ["CN"], category: "chinese-male" },
  "shuai": { muslimNames: ["jameel", "hasan"], meaning: "Handsome, Commander", connection: "帅 Shuai = handsome; Jameel and Hasan mean handsome/beautiful", originalScript: "帅", popularIn: ["CN"], category: "chinese-male" },
  "bin": { muslimNames: ["adib", "karim"], meaning: "Cultured and Martial", connection: "斌 Bin = cultured; Adib means cultured, Karim means generous", originalScript: "斌", popularIn: ["CN"], category: "chinese-male" },
  "yongle": { muslimNames: ["farhan", "saad"], meaning: "Forever Happy", connection: "永乐 Yongle = forever happy; Farhan means joyful, Saad means fortunate", originalScript: "永乐", popularIn: ["CN"], category: "chinese-male" },
  "jiawei": { muslimNames: ["aziz", "wali"], meaning: "Great in Family", connection: "家伟 Jiawei = family greatness; Aziz means mighty, Wali means guardian", originalScript: "家伟", popularIn: ["CN"], category: "chinese-male" },
  "zimo": { muslimNames: ["hakim", "adib"], meaning: "Refined Scholar", connection: "子墨 Zimo = refined ink; Hakim means wise, Adib means cultured", originalScript: "子墨", popularIn: ["CN"], category: "chinese-male" },
  "zihan": { muslimNames: ["rahma", "fadl"], meaning: "Child of Grace", connection: "子涵 Zihan = grace; Rahma means mercy, Fadl means excellence", originalScript: "子涵", popularIn: ["CN"], category: "chinese-male" },
  "zihao": { muslimNames: ["hamza", "aziz"], meaning: "Heroic", connection: "梓豪 Zihao = heroic; Hamza means lion, Aziz means mighty", originalScript: "梓豪", popularIn: ["CN"], category: "chinese-male" },
  "yichen": { muslimNames: ["noor", "siraj"], meaning: "Magnificent, Sun-Moon", connection: "奕辰/亦辰/亦宸 Yichen = celestial; Noor means light, Siraj means lamp", originalScript: "奕辰", popularIn: ["CN"], category: "chinese-male" },
  "yuchen": { muslimNames: ["samad", "wahid"], meaning: "Universe and Celestial", connection: "宇辰 Yuchen = universe celestial; Samad means eternal", originalScript: "宇辰", popularIn: ["CN"], category: "chinese-male" },
  "ziheng": { muslimNames: ["thabit", "sabir"], meaning: "Steadfast Child", connection: "子恒 Ziheng = steadfast; Thabit means firm, Sabir means patient", originalScript: "子恒", popularIn: ["CN"], category: "chinese-male" },
  "ze": { muslimNames: ["rahma", "fadl"], meaning: "Grace, Favor", connection: "泽 Ze = grace; Rahma means mercy, Fadl means excellence", originalScript: "泽", popularIn: ["CN"], category: "chinese-male" },
  "cheng": { muslimNames: ["sadiq", "amin"], meaning: "Sincere, Honest", connection: "诚 Cheng = sincere; Sadiq means truthful, Amin means trustworthy", originalScript: "诚", popularIn: ["CN"], category: "chinese-male" },
  "yuan": { muslimNames: ["basir", "alim"], meaning: "Distant, Far-Reaching", connection: "远 Yuan = far; Basir means insightful, Alim means knowledgeable", originalScript: "远", popularIn: ["CN"], category: "chinese-male" },
  "jingtian": { muslimNames: ["noor", "siraj"], meaning: "Splendid Sky", connection: "景天 Jingtian = splendid sky; Noor means light, Siraj means lamp", originalScript: "景天", popularIn: ["CN"], category: "chinese-male" },
  "jingyu": { muslimNames: ["samad", "aziz"], meaning: "Splendid Universe", connection: "景宇 Jingyu = splendid universe; Samad means eternal", originalScript: "景宇", popularIn: ["CN"], category: "chinese-male" },
  "junjie": { muslimNames: ["fadl", "karim"], meaning: "Outstanding Talent", connection: "俊杰 Junjie = outstanding; Fadl means excellence, Karim means generous", originalScript: "俊杰", popularIn: ["CN"], category: "chinese-male" },
  "haoyang": { muslimNames: ["rauf", "rahim"], meaning: "Vast Ocean", connection: "浩洋 Haoyang = vast ocean; Rauf and Rahim mean compassionate/merciful", originalScript: "浩洋", popularIn: ["CN"], category: "chinese-male" },
  "jingchen": { muslimNames: ["sahar", "fajr"], meaning: "Bright Morning", connection: "景晨 Jingchen = bright morning; Sahar means dawn, Fajr means dawn prayer", originalScript: "景晨", popularIn: ["CN"], category: "chinese-male" },
  "jian": { muslimNames: ["sadiq", "amin"], meaning: "Strong, Healthy", connection: "Jian = strong; Sadiq means truthful, Amin means trustworthy", originalScript: "健", popularIn: ["CN"], category: "chinese-male" },
  "long": { muslimNames: ["hamza", "asad"], meaning: "Dragon", connection: "Long = dragon; Hamza and Asad mean lion — strength", originalScript: "龙", popularIn: ["CN"], category: "chinese-male" },

  "jing": { muslimNames: ["noor", "safiya"], meaning: "Quiet, Calm", connection: "静 Jing = quiet; Noor means light, Safiya means pure", originalScript: "静", popularIn: ["CN"], category: "chinese-female" },
  "fang": { muslimNames: ["warda", "rayhana"], meaning: "Fragrance", connection: "芳 Fang = fragrance; Warda means rose, Rayhana means basil", originalScript: "芳", popularIn: ["CN"], category: "chinese-female" },
  "li": { muslimNames: ["layla", "lubna"], meaning: "Beautiful", connection: "丽 Li = beautiful; Layla means beauty, Lubna means storax", originalScript: "丽", popularIn: ["CN"], category: "chinese-female" },
  "lijuan": { muslimNames: ["jamila", "latifa"], meaning: "Beautiful and Graceful", connection: "丽娟 Lijuan = beautiful graceful; Jamila means beautiful, Latifa means gentle", originalScript: "丽娟", popularIn: ["CN"], category: "chinese-female" },
  "min": { muslimNames: ["sagira", "basira"], meaning: "Quick, Agile", connection: "敏 Min = agile; Basira means insightful", originalScript: "敏", popularIn: ["CN"], category: "chinese-female" },
  "dan": { muslimNames: ["warda", "zahra"], meaning: "Cinnabar Red", connection: "丹 Dan = red; Warda means rose, Zahra means flower", originalScript: "丹", popularIn: ["CN"], category: "chinese-female" },
  "xue": { muslimNames: ["safiya", "noor"], meaning: "Snow", connection: "雪 Xue = snow; Safiya means pure, Noor means light", originalScript: "雪", popularIn: ["CN"], category: "chinese-female" },
  "xia": { muslimNames: ["warda", "rayhana"], meaning: "Rosy Clouds", connection: "霞 Xia = rosy clouds; Warda means rose", originalScript: "霞", popularIn: ["CN"], category: "chinese-female" },
  "yan": { muslimNames: ["noor", "munira"], meaning: "Swallow, Beauty", connection: "燕 Yan = swallow; Noor means light", originalScript: "燕", popularIn: ["CN"], category: "chinese-female" },
  "yao": { muslimNames: ["jawhara", "durra"], meaning: "Precious Jade", connection: "瑶 Yao = jade; Jawhara means jewel, Durra means pearl", originalScript: "瑶", popularIn: ["CN"], category: "chinese-female" },
  "zhen": { muslimNames: ["jawhara", "nafisa"], meaning: "Precious, Treasure", connection: "珍 Zhen = treasure; Jawhara means jewel, Nafisa means precious", originalScript: "珍", popularIn: ["CN"], category: "chinese-female" },
  "yulan": { muslimNames: ["warda", "zahra"], meaning: "Jade Magnolia", connection: "玉兰 Yulan = jade magnolia; Warda means rose, Zahra means flower", originalScript: "玉兰", popularIn: ["CN"], category: "chinese-female" },
  "yuzhen": { muslimNames: ["jawhara", "nafisa"], meaning: "Jade Treasure", connection: "玉珍 Yuzhen = jade treasure; Jawhara means jewel, Nafisa means precious", originalScript: "玉珍", popularIn: ["CN"], category: "chinese-female" },
  "yuying": { muslimNames: ["jamila", "zahra"], meaning: "Jade Beauty", connection: "玉英 Yuying = jade beauty; Jamila means beautiful, Zahra means flower", originalScript: "玉英", popularIn: ["CN"], category: "chinese-female" },
  "hongmei": { muslimNames: ["warda", "rayhana"], meaning: "Red Plum Blossom", connection: "红梅 Hongmei = red plum; Warda means rose", originalScript: "红梅", popularIn: ["CN"], category: "chinese-female" },
  "lan": { muslimNames: ["warda", "rayhana"], meaning: "Orchid", connection: "兰 Lan = orchid; Warda means rose, Rayhana means basil", originalScript: "兰", popularIn: ["CN"], category: "chinese-female" },
  "chunhua": { muslimNames: ["warda", "zahra"], meaning: "Spring Splendor", connection: "春华 Chunhua = spring splendor; Warda and Zahra mean flower", originalScript: "春华", popularIn: ["CN"], category: "chinese-female" },
  "dongmei": { muslimNames: ["warda", "zahra"], meaning: "Winter Plum", connection: "冬梅 Dongmei = winter plum; Warda means rose, Zahra means flower", originalScript: "冬梅", popularIn: ["CN"], category: "chinese-female" },
  "huiying": { muslimNames: ["hikma", "basira"], meaning: "Wise and Clever", connection: "慧颖 Huiying = wise; Hikma means wisdom, Basira means insightful", originalScript: "慧颖", popularIn: ["CN"], category: "chinese-female" },
  "ting": { muslimNames: ["jamila", "latifa"], meaning: "Graceful", connection: "婷 Ting = graceful; Jamila means beautiful, Latifa means gentle", originalScript: "婷", popularIn: ["CN"], category: "chinese-female" },
  "tingting": { muslimNames: ["jamila", "sundus"], meaning: "Very Graceful", connection: "婷婷 Tingting = very graceful; Jamila means beautiful, Sundus means fine silk", originalScript: "婷婷", popularIn: ["CN"], category: "chinese-female" },
  "xinyi": { muslimNames: ["farha", "bahjah"], meaning: "Happy and Joyful", connection: "欣怡 Xinyi = joyful; Farha means happiness, Bahjah means splendor", originalScript: "欣怡", popularIn: ["CN"], category: "chinese-female" },
  "yue": { muslimNames: ["farha", "bahjah"], meaning: "Delight, Joy", connection: "悦 Yue = delight; Farha means happiness, Bahjah means splendor", originalScript: "悦", popularIn: ["CN"], category: "chinese-female" },
  "jiayi": { muslimNames: ["farha", "naeema"], meaning: "Pleasant, Joyful", connection: "佳怡 Jiayi = pleasant; Farha means happiness, Naeema means comfort", originalScript: "佳怡", popularIn: ["CN"], category: "chinese-female" },
  "yuxin": { muslimNames: ["rahma", "farha"], meaning: "Rain and Joy", connection: "雨欣 Yuxin = rain joy; Rahma means mercy, Farha means happiness", originalScript: "雨欣", popularIn: ["CN"], category: "chinese-female" },
  "yuxi": { muslimNames: ["sahar", "fajr"], meaning: "Language and Tide", connection: "语汐 Yuxi = tide; Sahar means dawn, Fajr means dawn", originalScript: "语汐", popularIn: ["CN"], category: "chinese-female" },
  "yutong": { muslimNames: ["warda", "salsabil"], meaning: "Words/Rain and Parasol Tree", connection: "语桐/雨桐 Yutong = tree; Warda means rose, Salsabil is a spring in Paradise", originalScript: "语桐", popularIn: ["CN"], category: "chinese-female" },
  "yuyan": { muslimNames: ["jamila", "latifa"], meaning: "Charming Speech", connection: "语嫣 Yuyan = charming; Jamila means beautiful, Latifa means gentle", originalScript: "语嫣", popularIn: ["CN"], category: "chinese-female" },
  "chenxi": { muslimNames: ["sahar", "fajr"], meaning: "Morning Light", connection: "晨曦 Chenxi = morning light; Sahar means dawn, Fajr means dawn prayer", originalScript: "晨曦", popularIn: ["CN"], category: "chinese-female" },
  "zixuan": { muslimNames: ["jamila", "latifa"], meaning: "Elegant", connection: "子萱/子轩 Zixuan = elegant; Jamila means beautiful, Latifa means gentle", originalScript: "子萱", popularIn: ["CN"], category: "chinese-female" },
  "shihan": { muslimNames: ["adiba", "hikma"], meaning: "Poetic Grace", connection: "诗涵 Shihan = poetic grace; Adiba means cultured, Hikma means wisdom", originalScript: "诗涵", popularIn: ["CN"], category: "chinese-female" },
  "luoyao": { muslimNames: ["jawhara", "durra"], meaning: "Luo River Jade", connection: "洛瑶 Luoyao = jade; Jawhara means jewel, Durra means pearl", originalScript: "洛瑶", popularIn: ["CN"], category: "chinese-female" },
  "siying": { muslimNames: ["hikma", "basira"], meaning: "Thoughtful and Bright", connection: "思颖 Siying = thoughtful; Hikma means wisdom, Basira means insightful", originalScript: "思颖", popularIn: ["CN"], category: "chinese-female" },
  "qianqian": { muslimNames: ["jamila", "latifa"], meaning: "Slender, Graceful", connection: "芊芊 Qianqian = graceful; Jamila means beautiful, Latifa means gentle", originalScript: "芊芊", popularIn: ["CN"], category: "chinese-female" },
  "mengqi": { muslimNames: ["naeema", "barakat"], meaning: "Auspicious Dream", connection: "梦琪 Mengqi = auspicious dream; Naeema means comfort, Barakat means blessings", originalScript: "梦琪", popularIn: ["CN"], category: "chinese-female" },
  "wanting": { muslimNames: ["latifa", "jamila"], meaning: "Gentle and Graceful", connection: "婉婷 Wanting = gentle; Latifa means gentle, Jamila means beautiful", originalScript: "婉婷", popularIn: ["CN"], category: "chinese-female" },
  "jingyi": { muslimNames: ["sakina", "naeema"], meaning: "Peaceful and Happy", connection: "静怡 Jingyi = peaceful; Sakina means divine tranquility, Naeema means comfort", originalScript: "静怡", popularIn: ["CN"], category: "chinese-female" },
  "qingya": { muslimNames: ["safiya", "jamila"], meaning: "Pure and Elegant", connection: "清雅 Qingya = pure elegant; Safiya means pure, Jamila means beautiful", originalScript: "清雅", popularIn: ["CN"], category: "chinese-female" },
  "ruoxue": { muslimNames: ["safiya", "noor"], meaning: "Like Snow", connection: "若雪 Ruoxue = like snow; Safiya means pure, Noor means light", originalScript: "若雪", popularIn: ["CN"], category: "chinese-female" },
  "ziwei": { muslimNames: ["warda", "zahra"], meaning: "Crape Myrtle Flower", connection: "紫薇 Ziwei = flower; Warda means rose, Zahra means flower", originalScript: "紫薇", popularIn: ["CN"], category: "chinese-female" },
  "yiran": { muslimNames: ["sakina", "farha"], meaning: "Cheerful, At Ease", connection: "怡然 Yiran = cheerful; Sakina means tranquility, Farha means happiness", originalScript: "怡然", popularIn: ["CN"], category: "chinese-female" },
  "yina": { muslimNames: ["jamila", "latifa"], meaning: "Graceful", connection: "依娜 Yina = graceful; Jamila means beautiful, Latifa means gentle", originalScript: "依娜", popularIn: ["CN"], category: "chinese-female" },
  "ruoxi": { muslimNames: ["sahar", "fajr"], meaning: "Like Dawn Light", connection: "若曦 Ruoxi = like dawn; Sahar means dawn, Fajr means dawn prayer", originalScript: "若曦", popularIn: ["CN"], category: "chinese-female" },
  "yajing": { muslimNames: ["safiya", "sakina"], meaning: "Elegant and Quiet", connection: "雅静 Yajing = elegant quiet; Safiya means pure, Sakina means tranquility", originalScript: "雅静", popularIn: ["CN"], category: "chinese-female" },
  "huan": { muslimNames: ["farha", "bahjah"], meaning: "Joy, Delight", connection: "欢 Huan = joy; Farha means happiness, Bahjah means splendor", originalScript: "欢", popularIn: ["CN"], category: "chinese-female" },
  "baoyu": { muslimNames: ["jawhara", "nafisa"], meaning: "Precious Jade", connection: "宝玉 Baoyu = precious jade; Jawhara means jewel, Nafisa means precious", originalScript: "宝玉", popularIn: ["CN"], category: "chinese-female" },
  "mei": { muslimNames: ["jamila", "zahra"], meaning: "Beautiful, Plum", connection: "美/梅 Mei = beautiful or plum; Jamila means beautiful, Zahra means flower", originalScript: "美", popularIn: ["CN"], category: "chinese-female" },
  "xiao": { muslimNames: ["sagira", "latifa"], meaning: "Dawn, Filial", connection: "晓 Xiao = dawn; Latifa means gentle/kind", originalScript: "晓", popularIn: ["CN"], category: "chinese-female" },
  "ying": { muslimNames: ["noor", "badia"], meaning: "Flower, Clever", connection: "英/颖 Ying = flower or clever; Noor means light, Badia means wondrous", originalScript: "英", popularIn: ["CN"], category: "chinese-female" },
  "lin": { muslimNames: ["lubna", "lina"], meaning: "Forest, Jade", connection: "林/琳 Lin = forest or jade; Lubna means storax, Lina means tender", originalScript: "琳", popularIn: ["CN"], category: "chinese-female" },

  // ===========================
  // PORTUGUESE NAMES
  // ===========================
  "joao": { muslimNames: ["yahya"], meaning: "God is Gracious", connection: "João (Portuguese John); Yahya is Prophet John in the Quran. Diacritic João normalizes to joao.", popularIn: ["BR", "PT"], category: "portuguese-male" },
  "manuel": { muslimNames: ["immanuel", "abdullah"], meaning: "God is With Us", connection: "Manuel = Emmanuel; Abdullah means servant of Allah", category: "portuguese-male" },
  "carlos": { muslimNames: ["karim"], meaning: "Free Man", connection: "Carlos = Charles (Spanish/Portuguese); Karim means generous/noble", popularIn: ["BR", "PT", "ES"], category: "portuguese-male" },
  "filipe": { muslimNames: ["khalil", "muhibb"], meaning: "Lover of Horses", connection: "Filipe = Philip; Khalil means close friend", category: "portuguese-male" },
  "ricardo": { muslimNames: ["rashid"], meaning: "Strong Ruler", connection: "Ricardo = Richard; Rashid means rightly guided", category: "portuguese-male" },
  "maria": { muslimNames: ["maryam"], meaning: "Star of the Sea, Beloved", connection: "Maria = Mary; Maryam is the only woman named in the Quran", popularIn: ["BR", "PT", "ES"], category: "portuguese-female" },
  "ana": { muslimNames: ["anisah", "hana"], meaning: "Grace", connection: "Ana = Anna; Hana means grace/happiness in Arabic", popularIn: ["BR", "PT"], category: "portuguese-female" },
  "sofia": { muslimNames: ["hikma"], meaning: "Wisdom", connection: "Sofia = wisdom; Hikma means wisdom in the Quran", category: "portuguese-female" },
  "beatriz": { muslimNames: ["basira", "sa'ida"], meaning: "Bringer of Joy", connection: "Beatriz = Beatrice; Basira means insightful", category: "portuguese-female" },
  "inês": { muslimNames: ["anisah", "nafisa"], meaning: "Pure, Holy", connection: "Inês = Agnes; Anisah means friendly, Nafisa means precious", category: "portuguese-female" },
  "ines": { muslimNames: ["anisah", "nafisa"], meaning: "Pure, Holy", connection: "Inês (without diacritic)", category: "portuguese-female" },
  "teresa": { muslimNames: ["tara", "tasnim"], meaning: "Harvest", connection: "Teresa = Theresa; Tara means star, Tasnim is a spring in Paradise", category: "portuguese-female" },

  // ===========================
  // TRIBAL NAMES (Native American, African, Pacific - meaning-based mappings)
  // ===========================
  "tala": { muslimNames: ["najm", "kawkab"], meaning: "Wolf, Star", connection: "Tala = star (Native Am.); Najm means star in Arabic", category: "tribal-female" },
  "koda": { muslimNames: ["sadiq", "amin"], meaning: "Friend, Ally", connection: "Koda = friend; Sadiq means truthful friend", category: "tribal-male" },
  "chenoa": { muslimNames: ["sahira", "sahar"], meaning: "White Dove", connection: "Chenoa = dove; Sahar means dawn — peace", category: "tribal-female" },
  "kai": { muslimNames: ["samad", "wahid"], meaning: "Sea, Earth", connection: "Kai = sea; Wahid means one/unique", category: "tribal-male" },
  "sakari": { muslimNames: ["saeed", "saad"], meaning: "Sweet", connection: "Sakari = sweet; Saeed means fortunate", category: "tribal-male" },
  "malia": { muslimNames: ["maryam", "jamila"], meaning: "Calm, Ocean", connection: "Malia = calm (Pacific); Maryam is honored in Islam", category: "tribal-female" },
  "akira": { muslimNames: ["noor", "munir"], meaning: "Bright, Clear", connection: "Akira = bright; Noor means light", category: "tribal-male" },
  "chidi": { muslimNames: ["abdullah"], meaning: "God Exists", connection: "Chidi = God exists (Igbo); Abdullah means servant of Allah", category: "tribal-male" },
  "zuri": { muslimNames: ["jamila", "sundus"], meaning: "Beautiful", connection: "Zuri = beautiful (Swahili); Jamila means beautiful", category: "tribal-female" },
  "thabo": { muslimNames: ["saad", "farhan"], meaning: "Joy", connection: "Thabo = joy (Sotho); Saad means fortunate, Farhan means joyful", category: "tribal-male" },
  "nala": { muslimNames: ["naeema", "naima"], meaning: "Gift, Beloved", connection: "Nala = gift (African); Naima means comfort", category: "tribal-female" },

  // ===========================
  // RUSSIAN NAMES
  // ===========================
  "aleksandr": { muslimNames: ["iskandar", "aziz"], meaning: "Defender of Mankind", connection: "Aleksandr = Alexander; Iskandar is Alexander in Arabic/Islamic tradition", category: "russian-male" },
  "dmitry": { muslimNames: ["dawud", "musa"], meaning: "Devoted to Earth", connection: "Dmitry = earth; Dawud (David) and Musa are revered prophets", category: "russian-male" },
  "dmitri": { muslimNames: ["dawud", "musa"], meaning: "Devoted to Earth", connection: "Dmitri variant; Dawud and Musa represent devotion", category: "russian-male" },
  "sergei": { muslimNames: ["sadiq", "sharif"], meaning: "Servant", connection: "Sergei = servant; Sadiq means truthful, Sharif means noble", category: "russian-male" },
  "nikolai": { muslimNames: ["nasir", "nasr"], meaning: "Victory of the People", connection: "Nikolai = Nicholas; Nasir means helper, Nasr means divine victory", category: "russian-male" },
  "oleg": { muslimNames: ["wali", "ali"], meaning: "Holy", connection: "Oleg = holy; Wali means guardian, Ali means exalted", category: "russian-male" },
  "vladimir": { muslimNames: ["wali", "sultan"], meaning: "Rule with Greatness", connection: "Vladimir = great ruler; Wali means guardian, Sultan means authority", category: "russian-male" },
  "olga": { muslimNames: ["aliya", "aziza"], meaning: "Holy, Blessed", connection: "Olga = holy; Aliya means exalted, Aziza means mighty", category: "russian-female" },
  "natalia": { muslimNames: ["nadia", "naeema"], meaning: "Birthday, Christmas", connection: "Natalia = birth; Nadia means caller, Naima means comfort", category: "russian-female" },
  "irina": { muslimNames: ["iman", "sakina"], meaning: "Peace", connection: "Irina = peace; Iman means faith, Sakina means divine tranquility", category: "russian-female" },
  "svetlana": { muslimNames: ["noor", "munira"], meaning: "Light", connection: "Svetlana = light; Noor means divine light, Munira means radiant", category: "russian-female" },

  // ===========================
  // JAPANESE NAMES
  // ===========================
  "hiroshi": { muslimNames: ["karim", "rauf"], meaning: "Generous", connection: "Hiroshi = generous; Karim means generous, Rauf means compassionate", category: "japanese-male" },
  "takashi": { muslimNames: ["sadiq", "thabit"], meaning: "Noble, Prosperous", connection: "Takashi = noble; Sadiq means truthful, Thabit means steadfast", category: "japanese-male" },
  "kenji": { muslimNames: ["hakim", "hikma"], meaning: "Strong, Second Son", connection: "Kenji = wisdom; Hakim means wise, Hikma means wisdom", category: "japanese-male" },
  "yuki": { muslimNames: ["barakat", "sabr"], meaning: "Snow, Happiness", connection: "Yuki = snow/happiness; Barakat means blessings", category: "japanese-male" },
  "sakura": { muslimNames: ["warda", "zahra"], meaning: "Cherry Blossom", connection: "Sakura = cherry blossom; Warda means rose, Zahra means flower", category: "japanese-female" },
  "haruka": { muslimNames: ["sahar", "fajr"], meaning: "Distant, Spring", connection: "Haruka = far/distant; Sahar means dawn, Fajr means dawn prayer", category: "japanese-female" },
  "yui": { muslimNames: ["wahda", "widad"], meaning: "Bind, Connect", connection: "Yui = bind; Wahda means unity, Widad means love", category: "japanese-female" },
  "hana": { muslimNames: ["warda", "zahra"], meaning: "Flower", connection: "Hana = flower; Warda means rose, Zahra means flower", category: "japanese-female" },
  "saki": { muslimNames: ["sahar", "fajr"], meaning: "Blossom, Hope", connection: "Saki = blossom; Sahar means dawn", category: "japanese-female" },
  "rei": { muslimNames: ["noor", "rauf"], meaning: "Beautiful, Lovely", connection: "Rei = lovely; Noor means light, Rauf means compassionate", category: "japanese-female" },

  // ===========================
  // KOREAN NAMES (romanized)
  // ===========================
  "minjun": { muslimNames: ["karim", "adil"], meaning: "Talented, Handsome", connection: "Min-jun = clever; Karim means generous, Adil means just", category: "korean-male" },
  "jiwoo": { muslimNames: ["huda", "hidaya"], meaning: "Wisdom, Universe", connection: "Ji-woo = wisdom; Huda means guidance, Hidaya means guidance", category: "korean-male" },
  "seojun": { muslimNames: ["sadiq", "safiy"], meaning: "Omen, Talented", connection: "Seo-jun = good omen; Sadiq means truthful", category: "korean-male" },
  "hyun": { muslimNames: ["hasan", "hakeem"], meaning: "Wise, Virtuous", connection: "Hyun = virtuous; Hasan means good, Hakeem means wise", category: "korean-male" },
  "minho": { muslimNames: ["amin", "hakeem"], meaning: "Clever, Brilliant", connection: "Min-ho = clever; Amin means trustworthy, Hakeem means wise", category: "korean-male" },
  "yeon": { muslimNames: ["lubna", "warda"], meaning: "Lotus, Beautiful", connection: "Yeon = lotus; Lubna means storax, Warda means rose", category: "korean-female" },
  "sooyeon": { muslimNames: ["safiya", "sundus"], meaning: "Excellent, Beautiful", connection: "Soo-yeon = excellence; Safiya means pure, Sundus means fine silk", category: "korean-female" },
  "jimin": { muslimNames: ["amin", "sadiq"], meaning: "Wise, Clever", connection: "Ji-min = wisdom; Amin means trustworthy", category: "korean-female" },
  "eun": { muslimNames: ["noor", "safiya"], meaning: "Kindness, Silver", connection: "Eun = kindness; Noor means light, Safiya means pure", category: "korean-female" },
  "jiyoung": { muslimNames: ["hikma", "basira"], meaning: "Wisdom, Prosperity", connection: "Ji-young = wisdom; Hikma means wisdom, Basira means insightful", category: "korean-female" },

  // ===========================
  // FRENCH NAMES
  // ===========================
  "jacques": { muslimNames: ["yaqub", "jamal"], meaning: "Supplanter", connection: "Jacques = James/Jacob; Yaqub is Prophet Jacob", category: "french-male" },
  "françois": { muslimNames: ["farouq", "farid"], meaning: "Free", connection: "François = Francis; Farouq distinguishes truth, Farid means unique", category: "french-male" },
  "francois": { muslimNames: ["farouq", "farid"], meaning: "Free", connection: "François (without diacritic); Farouq distinguishes truth", category: "french-male" },
  "michel": { muslimNames: ["mikail"], meaning: "Who is Like God", connection: "Michel = Michael; Mikail is the angel of provision", category: "french-male" },
  "claire": { muslimNames: ["noor", "safiya"], meaning: "Clear, Bright", connection: "Claire = clear; Noor means light, Safiya means pure", category: "french-female" },
  "camille": { muslimNames: ["karima", "jamila"], meaning: "Perfect", connection: "Camille = perfect; Karima means generous, Jamila means beautiful", category: "french-female" },
  "léa": { muslimNames: ["layla", "lina"], meaning: "Weary, Delicate", connection: "Léa = Leah; Layla means night/beauty, Lina means tender", category: "french-female" },
  "lea": { muslimNames: ["layla", "lina"], meaning: "Weary, Delicate", connection: "Léa (without diacritic)", category: "french-female" },

  // ===========================
  // GERMAN NAMES
  // ===========================
  "stefan": { muslimNames: ["taj", "sadiq"], meaning: "Crown", connection: "Stefan = Stephen; Taj means crown, Sadiq means truthful", category: "german-male" },
  "andreas": { muslimNames: ["amir", "hamza"], meaning: "Manly, Brave", connection: "Andreas = Andrew; Amir means commander, Hamza means lion", category: "german-male" },
  "markus": { muslimNames: ["malik"], meaning: "King, Ruler", connection: "Markus = Mark; Malik means sovereign", category: "german-male" },
  "christoph": { muslimNames: ["khalil", "hamid"], meaning: "Christ-Bearer", connection: "Christoph = Christopher; Khalil means close friend of Allah", category: "german-male" },
  "sabine": { muslimNames: ["safiya", "sabira"], meaning: "From the Sabines", connection: "Sabine = Sabine tribe; Safiya means pure, Sabira means patient", category: "german-female" },
  "monika": { muslimNames: ["munira", "muneera"], meaning: "Advisor", connection: "Monika = advisor; Munira means radiant", category: "german-female" },
  "birgit": { muslimNames: ["baraka", "safiya"], meaning: "Strength, Exalted", connection: "Birgit = strength; Baraka means blessings, Safiya means pure", category: "german-female" },

  // ===========================
  // ITALIAN NAMES
  // ===========================
  "giuseppe": { muslimNames: ["yusuf"], meaning: "God Will Increase", connection: "Giuseppe = Joseph; Yusuf's story is 'the best of stories' in the Quran", category: "italian-male" },
  "francesco": { muslimNames: ["farouq", "farid"], meaning: "Free", connection: "Francesco = Francis; Farouq distinguishes truth from falsehood", category: "italian-male" },
  "alessandro": { muslimNames: ["iskandar", "aziz"], meaning: "Defender", connection: "Alessandro = Alexander; Iskandar in Arabic", category: "italian-male" },
  "lorenzo": { muslimNames: ["laurel", "rashid"], meaning: "From Laurentum", connection: "Lorenzo = laurel; Rashid means rightly guided", category: "italian-male" },
  "andrea": { muslimNames: ["amir", "adil"], meaning: "Manly, Brave", connection: "Andrea = Andrew; Amir means commander, Adil means just", category: "italian-male" },
  "giulia": { muslimNames: ["jawhara", "jamila"], meaning: "Youthful", connection: "Giulia = Julia; Jawhara means jewel, Jamila means beautiful", category: "italian-female" },
  "chiara": { muslimNames: ["noor", "safiya"], meaning: "Clear, Bright", connection: "Chiara = Clara; Noor means light, Safiya means pure", category: "italian-female" },
  "valentina": { muslimNames: ["wadud", "habiba"], meaning: "Strong, Healthy", connection: "Valentina = strong; Wadud means loving, Habiba means beloved", category: "italian-female" },

  // ===========================
  // SPANISH NAMES
  // ===========================
  "carmen": { muslimNames: ["warda", "sawsan"], meaning: "Song, Garden", connection: "Carmen = song/garden; Warda means rose, Sawsan means lily", category: "spanish-female" },
  "isabel": { muslimNames: ["ilisabat", "safiya"], meaning: "God's Oath", connection: "Isabel = Elizabeth; Ilisabat was wife of Prophet Zakariyya", category: "spanish-female" },
  "jorge": { muslimNames: ["jamal", "jibreel"], meaning: "Farmer", connection: "Jorge = George; Jamal means beauty, Jibreel is the revelation angel", category: "spanish-male" },
  "francisco": { muslimNames: ["farouq", "farid"], meaning: "Free", connection: "Francisco = Francis; Farouq distinguishes truth", category: "spanish-male" },
  "luis": { muslimNames: ["layth", "wali"], meaning: "Famous Warrior", connection: "Luis = Louis; Layth means lion, Wali means guardian", category: "spanish-male" },
  "roberto": { muslimNames: ["rashid", "raed"], meaning: "Bright Fame", connection: "Roberto = Robert; Rashid means rightly guided", category: "spanish-male" },
  "fernando": { muslimNames: ["farouq", "faris"], meaning: "Brave Journey", connection: "Fernando = bold; Farouq means distinguisher, Faris means knight", category: "spanish-male" },
  "alejandro": { muslimNames: ["iskandar", "aziz"], meaning: "Defender", connection: "Alejandro = Alexander; Iskandar in Arabic", category: "spanish-male" },
  "rosa": { muslimNames: ["warda", "zahra"], meaning: "Rose", connection: "Rosa = rose; Warda means rose in Arabic", category: "spanish-female" },

  // ===========================
  // INDONESIAN NAMES (Sanskrit/Javanese/non-Arabic)
  // ===========================
  "aditya": { muslimNames: ["shams", "noor"], meaning: "Sun, Brightness", connection: "Aditya = sun; Shams means sun, Noor means light", popularIn: ["ID"], category: "indonesian-male" },
  "budi": { muslimNames: ["hikma", "adab"], meaning: "Virtue, Character", connection: "Budi = virtue; Hikma means wisdom, Adab means good character", popularIn: ["ID"], category: "indonesian-male" },
  "agus": { muslimNames: ["hasan", "karim"], meaning: "Good, Excellent", connection: "Agus = good; Hasan means good, Karim means generous", popularIn: ["ID"], category: "indonesian-male" },
  "andi": { muslimNames: ["amir", "adil"], meaning: "Noble (Bugis/Makassar)", connection: "Andi = noble title; Amir means commander, Adil means just", popularIn: ["ID"], category: "indonesian-male" },
  "agung": { muslimNames: ["aziz", "jalil"], meaning: "Great, Noble", connection: "Agung = great; Aziz means mighty, Jalil means majestic", popularIn: ["ID"], category: "indonesian-male" },
  "bayu": { muslimNames: ["rauf", "rahim"], meaning: "Wind", connection: "Bayu = wind; Rauf means compassionate", popularIn: ["ID"], category: "indonesian-male" },
  "cahyo": { muslimNames: ["noor", "siraj"], meaning: "Light", connection: "Cahyo = light; Noor means light, Siraj means lamp", popularIn: ["ID"], category: "indonesian-male" },
  "cahya": { muslimNames: ["noor", "siraj"], meaning: "Light", connection: "Cahya = light; Noor means light, Siraj means lamp", popularIn: ["ID"], category: "indonesian-male" },
  "dedi": { muslimNames: ["sadiq", "amin"], meaning: "Common diminutive", connection: "Dedi = common name; Sadiq means truthful, Amin means trustworthy", popularIn: ["ID"], category: "indonesian-male" },
  "dwi": { muslimNames: ["thani", "sadiq"], meaning: "Second, Two", connection: "Dwi = second; Thani means second in Arabic", popularIn: ["ID"], category: "indonesian-male" },
  "eka": { muslimNames: ["awwal", "wahid"], meaning: "First, One", connection: "Eka = first; Awwal means first, Wahid means one", popularIn: ["ID"], category: "indonesian-male" },
  "fajar": { muslimNames: ["fajr", "sahar"], meaning: "Dawn", connection: "Fajar = dawn; Fajr means dawn prayer, Sahar means dawn", popularIn: ["ID"], category: "indonesian-male" },
  "hendra": { muslimNames: ["shuja", "hamza"], meaning: "Man, Hero", connection: "Hendra = hero; Shuja means courageous, Hamza means lion", popularIn: ["ID"], category: "indonesian-male" },
  "heru": { muslimNames: ["hamza", "asad"], meaning: "Heroic, Eagle", connection: "Heru = heroic; Hamza and Asad mean lion", popularIn: ["ID"], category: "indonesian-male" },
  "iwan": { muslimNames: ["sadiq", "amin"], meaning: "Local form", connection: "Iwan = common Indonesian name; Sadiq means truthful, Amin means trustworthy", popularIn: ["ID"], category: "indonesian-male" },
  "joko": { muslimNames: ["shabbir", "ghulam"], meaning: "Young Man", connection: "Joko = young man; Shabbir means patient", popularIn: ["ID"], category: "indonesian-male" },
  "jaya": { muslimNames: ["nasr", "fath"], meaning: "Victory", connection: "Jaya = victory; Nasr means divine victory, Fath means triumph", popularIn: ["ID"], category: "indonesian-male" },
  "kurnia": { muslimNames: ["barakat", "ni'mah"], meaning: "Grace, Blessing", connection: "Kurnia = grace; Barakat means blessings, Ni'mah means grace", popularIn: ["ID"], category: "indonesian-male" },
  "kusuma": { muslimNames: ["warda", "zahra"], meaning: "Flower", connection: "Kusuma = flower; Warda means rose, Zahra means flower", popularIn: ["ID"], category: "indonesian-male" },
  "pratama": { muslimNames: ["awwal", "fadl"], meaning: "First, Primary", connection: "Pratama = first; Awwal means first, Fadl means excellence", popularIn: ["ID"], category: "indonesian-male" },
  "putra": { muslimNames: ["ibn", "walad"], meaning: "Son", connection: "Putra = son; Ibn means son in Arabic", popularIn: ["ID"], category: "indonesian-male" },
  "saputra": { muslimNames: ["shareef", "karim"], meaning: "Noble Son", connection: "Saputra = noble son; Shareef means noble, Karim means generous", popularIn: ["ID"], category: "indonesian-male" },
  "setiawan": { muslimNames: ["sadiq", "amin"], meaning: "Faithful One", connection: "Setiawan = faithful; Sadiq means truthful, Amin means trustworthy", popularIn: ["ID"], category: "indonesian-male" },
  "slamet": { muslimNames: ["salam", "amin"], meaning: "Safe, Blessed", connection: "Slamet = safe; Salam means peace, Amin means trustworthy", popularIn: ["ID"], category: "indonesian-male" },
  "selamat": { muslimNames: ["salam", "amin"], meaning: "Safe, Blessed", connection: "Selamat = safe; Salam means peace", popularIn: ["ID"], category: "indonesian-male" },
  "suryo": { muslimNames: ["shams", "noor"], meaning: "Sun", connection: "Suryo = sun; Shams means sun, Noor means light", popularIn: ["ID"], category: "indonesian-male" },
  "surya": { muslimNames: ["shams", "noor"], meaning: "Sun", connection: "Surya = sun; Shams means sun, Noor means light", popularIn: ["ID"], category: "indonesian-male" },
  "ardi": { muslimNames: ["ard", "jabal"], meaning: "Earth", connection: "Ardi = earth; Ard means earth, Jabal means mountain", popularIn: ["ID"], category: "indonesian-male" },
  "dimas": { muslimNames: ["akh", "sadiq"], meaning: "Younger Brother", connection: "Dimas = younger brother; Sadiq means truthful", popularIn: ["ID"], category: "indonesian-male" },
  "galih": { muslimNames: ["lubab", "jawhar"], meaning: "Essence, Core", connection: "Galih = essence; Jawhar means jewel/essence", popularIn: ["ID"], category: "indonesian-male" },
  "rangga": { muslimNames: ["faris", "ghazi"], meaning: "Knight, Nobleman", connection: "Rangga = knight; Faris means knight, Ghazi means warrior", popularIn: ["ID"], category: "indonesian-male" },
  "satriya": { muslimNames: ["faris", "ghazi"], meaning: "Knight, Warrior", connection: "Satriya = knight; Faris means knight, Ghazi means warrior", popularIn: ["ID"], category: "indonesian-male" },
  "satria": { muslimNames: ["faris", "ghazi"], meaning: "Knight, Warrior", connection: "Satria = knight; Faris means knight, Ghazi means warrior", popularIn: ["ID"], category: "indonesian-male" },
  "wibowo": { muslimNames: ["izzah", "sultan"], meaning: "Authority, Excellence", connection: "Wibowo = authority; Izzah means honor, Sultan means authority", popularIn: ["ID"], category: "indonesian-male" },
  "widodo": { muslimNames: ["saad", "barakat"], meaning: "Prosperous, Successful", connection: "Widodo = prosperous; Saad means fortunate, Barakat means blessings", popularIn: ["ID"], category: "indonesian-male" },
  "wira": { muslimNames: ["shuja", "hamza"], meaning: "Hero", connection: "Wira = hero; Shuja means courageous, Hamza means lion", popularIn: ["ID"], category: "indonesian-male" },
  "yudi": { muslimNames: ["ghazi", "faris"], meaning: "Warrior", connection: "Yudi = warrior; Ghazi means warrior, Faris means knight", popularIn: ["ID"], category: "indonesian-male" },
  "yudha": { muslimNames: ["ghazi", "faris"], meaning: "Battle, Warrior", connection: "Yudha = warrior; Ghazi means warrior, Faris means knight", popularIn: ["ID"], category: "indonesian-male" },
  "yoga": { muslimNames: ["sabr", "taqwa"], meaning: "Discipline", connection: "Yoga = discipline; Sabr means patience, Taqwa means piety", popularIn: ["ID"], category: "indonesian-male" },
  "satya": { muslimNames: ["sadiq", "amin"], meaning: "Truth", connection: "Satya = truth; Sadiq means truthful, Amin means trustworthy", popularIn: ["ID"], category: "indonesian-male" },
  "dharma": { muslimNames: ["adil", "sadiq"], meaning: "Righteousness, Duty", connection: "Dharma = righteousness; Adil means just, Sadiq means truthful", popularIn: ["ID"], category: "indonesian-male" },
  "darma": { muslimNames: ["adil", "sadiq"], meaning: "Righteousness, Duty", connection: "Darma = Dharma variant; Adil means just", popularIn: ["ID"], category: "indonesian-male" },
  "luhur": { muslimNames: ["ali", "jalil"], meaning: "Noble", connection: "Luhur = noble; Ali means exalted, Jalil means majestic", popularIn: ["ID"], category: "indonesian-male" },
  "mahendra": { muslimNames: ["aziz", "jalil"], meaning: "Great Indra", connection: "Mahendra = great; Aziz means mighty, Jalil means majestic", popularIn: ["ID"], category: "indonesian-male" },
  "arya": { muslimNames: ["shareef", "karim"], meaning: "Noble", connection: "Arya = noble; Shareef means noble, Karim means generous", popularIn: ["ID"], category: "indonesian-male" },
  "wijaya": { muslimNames: ["nasr", "fath"], meaning: "Victory", connection: "Wijaya = victory; Nasr means divine victory, Fath means triumph", popularIn: ["ID"], category: "indonesian-male" },
  "pangestu": { muslimNames: ["barakat", "dua"], meaning: "Blessing", connection: "Pangestu = blessing; Barakat means blessings, Dua means supplication", popularIn: ["ID"], category: "indonesian-male" },
  "untung": { muslimNames: ["saad", "barakat"], meaning: "Fortunate", connection: "Untung = fortunate; Saad means fortunate, Barakat means blessings", popularIn: ["ID"], category: "indonesian-male" },
  "raharjo": { muslimNames: ["barakat", "rizq"], meaning: "Plentiful, Prosperous", connection: "Raharjo = prosperous; Barakat means blessings, Rizq means provision", popularIn: ["ID"], category: "indonesian-male" },
  "nugraha": { muslimNames: ["barakat", "fadl"], meaning: "Divine Grace", connection: "Nugraha = grace; Barakat means blessings, Fadl means excellence", popularIn: ["ID"], category: "indonesian-male" },
  "dirgahayu": { muslimNames: ["hayat", "barakat"], meaning: "Long Life", connection: "Dirgahayu = long life; Hayat means life, Barakat means blessings", popularIn: ["ID"], category: "indonesian-male" },

  "ayu": { muslimNames: ["jamila", "zahra"], meaning: "Beautiful", connection: "Ayu = beautiful; Jamila means beautiful, Zahra means flower", popularIn: ["ID"], category: "indonesian-female" },
  "putri": { muslimNames: ["bint", "amira"], meaning: "Daughter, Princess", connection: "Putri = princess; Amira means princess", popularIn: ["ID"], category: "indonesian-female" },
  "dewi": { muslimNames: ["malika", "sultanah"], meaning: "Goddess", connection: "Dewi = goddess; Malika means queen, Sultanah means sovereign", popularIn: ["ID"], category: "indonesian-female" },
  "indah": { muslimNames: ["jamila", "husna"], meaning: "Beautiful", connection: "Indah = beautiful; Jamila means beautiful, Husna means beautiful", popularIn: ["ID"], category: "indonesian-female" },
  "sari": { muslimNames: ["jawhara", "warda"], meaning: "Essence, Flower", connection: "Sari = essence; Jawhara means jewel, Warda means rose", popularIn: ["ID"], category: "indonesian-female" },
  "lestari": { muslimNames: ["khalida", "baqiya"], meaning: "Everlasting", connection: "Lestari = everlasting; Khalida means eternal, Baqiya means enduring", popularIn: ["ID"], category: "indonesian-female" },
  "rina": { muslimNames: ["naeema", "rahma"], meaning: "Common, Neutral", connection: "Rina = common name; Naeema means comfort, Rahma means mercy", popularIn: ["ID"], category: "indonesian-female" },
  "rini": { muslimNames: ["sagira", "latifa"], meaning: "Little Girl", connection: "Rini = little girl; Sagira means small, Latifa means gentle", popularIn: ["ID"], category: "indonesian-female" },
  "wati": { muslimNames: ["bint", "amira"], meaning: "Feminine Suffix", connection: "Wati = feminine suffix; Amira means princess", popularIn: ["ID"], category: "indonesian-female" },
  "kartini": { muslimNames: ["basira", "hikma"], meaning: "From RA Kartini", connection: "Kartini = pioneering; Basira means insightful, Hikma means wisdom", popularIn: ["ID"], category: "indonesian-female" },
  "sulastri": { muslimNames: ["noor", "munira"], meaning: "Radiant", connection: "Sulastri = radiant; Noor means light, Munira means radiant", popularIn: ["ID"], category: "indonesian-female" },
  "sumiati": { muslimNames: ["safiya", "tahira"], meaning: "Good, Pure", connection: "Sumiati = good; Safiya means pure, Tahira means pure", popularIn: ["ID"], category: "indonesian-female" },
  "sunarti": { muslimNames: ["sadiqa", "saliha"], meaning: "Virtuous Woman", connection: "Sunarti = virtuous; Sadiqa means truthful, Saliha means righteous", popularIn: ["ID"], category: "indonesian-female" },
  "ernawati": { muslimNames: ["sadiqa", "aminah"], meaning: "Earnest Woman", connection: "Ernawati = earnest; Sadiqa means truthful, Aminah means trustworthy", popularIn: ["ID"], category: "indonesian-female" },
  "sri": { muslimNames: ["barakat", "ni'mah"], meaning: "Prosperity", connection: "Sri = prosperity (Lakshmi); Barakat means blessings, Ni'mah means grace", popularIn: ["ID"], category: "indonesian-female" },
  "sriwahyuni": { muslimNames: ["hidaya", "hikma"], meaning: "Sri + Inspiration", connection: "Sri Wahyuni = inspiration; Hidaya means guidance, Hikma means wisdom", popularIn: ["ID"], category: "indonesian-female" },
  "yuni": { muslimNames: ["naeema", "warda"], meaning: "From Wahyuni", connection: "Yuni = inspiration; Naeema means comfort, Warda means rose", popularIn: ["ID"], category: "indonesian-female" },
  "intan": { muslimNames: ["jawhara", "durra"], meaning: "Diamond", connection: "Intan = diamond; Jawhara means jewel, Durra means pearl", popularIn: ["ID"], category: "indonesian-female" },
  "melati": { muslimNames: ["yasmin", "rayhana"], meaning: "Jasmine", connection: "Melati = jasmine; Yasmin means jasmine, Rayhana means basil", popularIn: ["ID"], category: "indonesian-female" },
  "citra": { muslimNames: ["sura", "safiya"], meaning: "Image, Reflection", connection: "Citra = image; Sura means form, Safiya means pure", popularIn: ["ID"], category: "indonesian-female" },
  "dian": { muslimNames: ["noor", "siraj"], meaning: "Lamp, Light", connection: "Dian = lamp; Noor means light, Siraj means lamp", popularIn: ["ID"], category: "indonesian-female" },
  "rahayu": { muslimNames: ["salam", "sakina"], meaning: "Peace, Well-Being", connection: "Rahayu = peace; Salam means peace, Sakina means divine tranquility", popularIn: ["ID"], category: "indonesian-female" },
  "puspita": { muslimNames: ["warda", "zahra"], meaning: "Flower", connection: "Puspita = flower; Warda means rose, Zahra means flower", popularIn: ["ID"], category: "indonesian-female" },
  "widya": { muslimNames: ["hikma", "basira"], meaning: "Knowledge", connection: "Widya = knowledge; Hikma means wisdom, Basira means insightful", popularIn: ["ID"], category: "indonesian-female" },
  "wulan": { muslimNames: ["qamar", "badr"], meaning: "Moon", connection: "Wulan = moon; Qamar means moon, Badr means full moon", popularIn: ["ID"], category: "indonesian-female" },
  "ayulestari": { muslimNames: ["jamila", "khalida"], meaning: "Beautiful + Everlasting", connection: "Ayu Lestari = beautiful everlasting; Jamila means beautiful, Khalida means eternal", popularIn: ["ID"], category: "indonesian-female" },
  "dwilestari": { muslimNames: ["thani", "khalida"], meaning: "Second + Everlasting", connection: "Dwi Lestari = second everlasting; Khalida means eternal", popularIn: ["ID"], category: "indonesian-female" },
  "ekaputri": { muslimNames: ["awwal", "amira"], meaning: "First Daughter", connection: "Eka Putri = first daughter; Awwal means first, Amira means princess", popularIn: ["ID"], category: "indonesian-female" },
  "putriayu": { muslimNames: ["amira", "jamila"], meaning: "Beautiful Daughter", connection: "Putri Ayu = beautiful daughter; Amira means princess, Jamila means beautiful", popularIn: ["ID"], category: "indonesian-female" },
  "mega": { muslimNames: ["sahab", "ghamam"], meaning: "Cloud", connection: "Mega = cloud; Sahab means cloud", popularIn: ["ID"], category: "indonesian-female" },
  "rani": { muslimNames: ["malika", "sultanah"], meaning: "Queen", connection: "Rani = queen; Malika means queen, Sultanah means sovereign", popularIn: ["ID"], category: "indonesian-female" },
  "yuliana": { muslimNames: ["lubna", "jamila"], meaning: "July + Anna", connection: "Yuliana = July Anna; Lubna means storax, Jamila means beautiful", popularIn: ["ID"], category: "indonesian-female" },
  "monica": { muslimNames: ["munira", "muneera"], meaning: "Advisor", connection: "Monica = advisor (international); Munira means radiant", popularIn: ["ID"], category: "indonesian-female" },
  "mentari": { muslimNames: ["shams", "noor"], meaning: "The Sun", connection: "Mentari = sun; Shams means sun, Noor means light", popularIn: ["ID"], category: "indonesian-female" },
  "mawar": { muslimNames: ["warda", "zahra"], meaning: "Rose", connection: "Mawar = rose; Warda means rose in Arabic", popularIn: ["ID"], category: "indonesian-female" },
  "nirmala": { muslimNames: ["safiya", "tahira"], meaning: "Pure", connection: "Nirmala = pure; Safiya means pure, Tahira means pure", popularIn: ["ID"], category: "indonesian-female" },
  "santi": { muslimNames: ["salam", "sakina"], meaning: "Peace", connection: "Santi = peace; Salam means peace, Sakina means divine tranquility", popularIn: ["ID"], category: "indonesian-female" },
  "ratna": { muslimNames: ["jawhara", "nafisa"], meaning: "Jewel", connection: "Ratna = jewel; Jawhara means jewel, Nafisa means precious", popularIn: ["ID"], category: "indonesian-female" },
  "ningrum": { muslimNames: ["sakina", "safiya"], meaning: "Calm, Inner Heart", connection: "Ningrum = calm; Sakina means tranquility, Safiya means pure", popularIn: ["ID"], category: "indonesian-female" },
  "ratih": { muslimNames: ["qamar", "badr"], meaning: "Moon Goddess", connection: "Ratih = moon goddess; Qamar means moon, Badr means full moon", popularIn: ["ID"], category: "indonesian-female" },
  "sekar": { muslimNames: ["warda", "zahra"], meaning: "Flower", connection: "Sekar = flower; Warda means rose, Zahra means flower", popularIn: ["ID"], category: "indonesian-female" },
  "ningsih": { muslimNames: ["wadud", "habiba"], meaning: "With Love", connection: "Ningsih = with love; Wadud means loving, Habiba means beloved", popularIn: ["ID"], category: "indonesian-female" },
  "mentariayu": { muslimNames: ["shams", "jamila"], meaning: "Beautiful Sun", connection: "Mentari Ayu = beautiful sun; Shams means sun, Jamila means beautiful", popularIn: ["ID"], category: "indonesian-female" },

  // ===========================
  // MORE HINDU/INDIAN NAMES (top 100 India)
  // ===========================
  "sita": { muslimNames: ["safiya", "siddiqa"], meaning: "Furrow, Goddess", connection: "Sita = goddess of harvest; Safiya means pure, Siddiqa means truthful", popularIn: ["IN"], category: "hindu-female" },
  "rohit": { muslimNames: ["rashid", "raheem"], meaning: "Red", connection: "Rohit = red; Rashid means guided, Raheem means merciful", popularIn: ["IN"], category: "hindu-male" },
  "harpreet": { muslimNames: ["habib", "wadud"], meaning: "Love of God", connection: "Harpreet = God's love; Habib means beloved, Wadud means loving", popularIn: ["IN"], category: "hindu-male" },
  // Top 10 girls (StudentsOfTheWorld + census.name): Priya, Pooja, Neha, Anjali, Aisha, Sonam, Riya, Shreya, Sneha, Divya; + Priyanka, Kiran
  "neha": { muslimNames: ["nadia", "naeema"], meaning: "Love, Affection", connection: "Neha = love; Nadia means caller, Naeema means comfort", popularIn: ["IN"], category: "hindu-female" },
  "anjali": { muslimNames: ["dua", "ibtisam"], meaning: "Offering, Gesture of Respect", connection: "Anjali = offering; Dua means supplication, Ibtisam means smile", popularIn: ["IN"], category: "hindu-female" },
  "aisha": { muslimNames: ["aishah", "aisha"], meaning: "Alive, Living", connection: "Aisha/Aishah is the name of the beloved wife of Prophet Muhammad ﷺ — keep the same Islamic name", popularIn: ["IN"], category: "hindu-female" },
  "sonam": { muslimNames: ["sundus", "safiya"], meaning: "Virtuous", connection: "Sonam = virtuous; Sundus means fine silk of Paradise, Safiya means pure", popularIn: ["IN"], category: "hindu-female" },
  "riya": { muslimNames: ["rahma", "ruqayyah"], meaning: "Singer, Wealth", connection: "Riya = singer; Rahma means mercy, Ruqayyah was the Prophet's daughter", popularIn: ["IN"], category: "hindu-female" },
  "shreya": { muslimNames: ["sharifa", "siddiqa"], meaning: "Auspicious, Fortunate", connection: "Shreya = auspicious; Sharifa means noble, Siddiqa means truthful", popularIn: ["IN"], category: "hindu-female" },
  "sneha": { muslimNames: ["widad", "habiba"], meaning: "Affection, Love", connection: "Sneha = love; Widad means love, Habiba means beloved", popularIn: ["IN"], category: "hindu-female" },
  "divya": { muslimNames: ["noor", "munira"], meaning: "Divine, Heavenly", connection: "Divya = divine; Noor means light, Munira means radiant", popularIn: ["IN"], category: "hindu-female" },
  "priyanka": { muslimNames: ["habiba", "wadud"], meaning: "Beloved", connection: "Priyanka = beloved; Habiba means beloved, Wadud means loving", popularIn: ["IN"], category: "hindu-female" },
  "kiran": { muslimNames: ["noor", "siraj"], meaning: "Ray of Light", connection: "Kiran = light ray; Noor means light, Siraj means lamp", popularIn: ["IN"], category: "hindu-female" },
  // Top 10 boys + more (StudentsOfTheWorld, census.name): Rahul, Amit, Rohit, Raj, Ajay, Vijay, Abhishek, Anil, Sunil, Sanjay; Deepak, Ashish, Ankit, Ravi, Gaurav, Manish
  "amit": { muslimNames: ["amin", "sadiq"], meaning: "Infinite, Boundless", connection: "Amit = infinite; Amin means trustworthy, Sadiq means truthful", popularIn: ["IN"], category: "hindu-male" },
  "raj": { muslimNames: ["malik", "sultan"], meaning: "King, Rule", connection: "Raj = king; Malik means sovereign, Sultan means authority", popularIn: ["IN"], category: "hindu-male" },
  "ajay": { muslimNames: ["ghazi", "aziz"], meaning: "Invincible", connection: "Ajay = invincible; Ghazi means warrior, Aziz means mighty", popularIn: ["IN"], category: "hindu-male" },
  "vijay": { muslimNames: ["nasr", "nasir"], meaning: "Victory", connection: "Vijay = victory; Nasr means divine victory, Nasir means helper", popularIn: ["IN"], category: "hindu-male" },
  "abhishek": { muslimNames: ["tabarak", "barakat"], meaning: "Anointment, Blessing", connection: "Abhishek = blessing; Tabarak and Barakat mean blessings", popularIn: ["IN"], category: "hindu-male" },
  "sunil": { muslimNames: ["siraj", "munir"], meaning: "Very Blue, Dark", connection: "Sunil = dark blue; Siraj means lamp, Munir means radiant", popularIn: ["IN"], category: "hindu-male" },
  "sanjay": { muslimNames: ["sadiq", "amin"], meaning: "Victorious", connection: "Sanjay = victorious; Sadiq means truthful, Amin means trustworthy", popularIn: ["IN"], category: "hindu-male" },
  "deepak": { muslimNames: ["siraj", "noor"], meaning: "Lamp, Light", connection: "Deepak = lamp; Siraj means lamp, Noor means light", popularIn: ["IN"], category: "hindu-male" },
  "ashish": { muslimNames: ["barakat", "dua"], meaning: "Blessing", connection: "Ashish = blessing; Barakat means blessings, Dua means supplication", popularIn: ["IN"], category: "hindu-male" },
  "ankit": { muslimNames: ["ata", "wahb"], meaning: "Consecrated", connection: "Ankit = consecrated; Ata means gift, Wahb means bestower", popularIn: ["IN"], category: "hindu-male" },
  "ravi": { muslimNames: ["shams", "noor"], meaning: "Sun", connection: "Ravi = sun; Shams means sun in Arabic, Noor means light", popularIn: ["IN"], category: "hindu-male" },
  "gaurav": { muslimNames: ["izzah", "karam"], meaning: "Pride, Honor", connection: "Gaurav = pride/honor; Izzah means honor, Karam means generosity", popularIn: ["IN"], category: "hindu-male" },
  "manish": { muslimNames: ["basir", "hakim"], meaning: "God of Mind", connection: "Manish = wisdom; Basir means insightful, Hakim means wise", popularIn: ["IN"], category: "hindu-male" },

  // ===========================
  // BRAZIL (IBGE census – most common given names)
  // ===========================
  "francisca": { muslimNames: ["farida", "safiya"], meaning: "Free, French", connection: "Francisca = Francis (female); Farida means unique, Safiya means pure", popularIn: ["BR"], category: "portuguese-female" },
  "antonia": { muslimNames: ["anisah", "nafisa"], meaning: "Priceless", connection: "Antônia/Antonia = Anthony (female); Anisah means friendly, Nafisa means precious", popularIn: ["BR"], category: "portuguese-female" },
  "juliana": { muslimNames: ["jawhara", "jamila"], meaning: "Youthful", connection: "Juliana = Julia; Jawhara means jewel, Jamila means beautiful", popularIn: ["BR"], category: "portuguese-female" },
  "marcia": { muslimNames: ["malika", "maryam"], meaning: "Of Mars", connection: "Márcia/Marcia; Malika means queen", popularIn: ["BR"], category: "portuguese-female" },
  "fernanda": { muslimNames: ["farida", "farisah"], meaning: "Brave Journey", connection: "Fernanda = Fernando (female); Farida means unique", popularIn: ["BR"], category: "portuguese-female" },
  "patricia": { muslimNames: ["shareefa", "safiya"], meaning: "Noble", connection: "Patrícia = noble; Shareefa means noble, Safiya means pure", popularIn: ["BR"], category: "portuguese-female" },
  "aline": { muslimNames: ["adila", "anisah"], meaning: "Noble", connection: "Aline = Adeline; Adila means just, Anisah means friendly", popularIn: ["BR"], category: "portuguese-female" },
  "paulo": { muslimNames: ["bilal", "sadiq"], meaning: "Small", connection: "Paulo = Paul; Bilal was the first muezzin, Sadiq means truthful", popularIn: ["BR", "PT"], category: "portuguese-male" },
  "luiz": { muslimNames: ["layth", "wali"], meaning: "Famous Warrior", connection: "Luiz = Louis; Layth means lion, Wali means guardian", popularIn: ["BR"], category: "portuguese-male" },
  "marcos": { muslimNames: ["malik"], meaning: "Of Mars, Warlike", connection: "Marcos = Mark; Malik means sovereign", popularIn: ["BR"], category: "portuguese-male" },

  // ===========================
  // NIGERIA (top first names – StudentsOfTheWorld / aggregations)
  // ===========================
  "blessing": { muslimNames: ["baraka", "ni'mah"], meaning: "Divine Favor", connection: "Blessing = divine favor; Baraka means blessings, Ni'mah means grace", popularIn: ["NG"], category: "western-female" },
  "friday": { muslimNames: ["juma", "sabt"], meaning: "Day of Frigg", connection: "Friday = day name; Jumu'ah (Friday) is the blessed day in Islam", popularIn: ["NG"], category: "western-male" },
  "rose": { muslimNames: ["warda", "zahra"], meaning: "Rose Flower", connection: "Rose = flower; Warda means rose in Arabic", popularIn: ["NG"], category: "western-female" },
  "emmanuel": { muslimNames: ["abdullah", "abdurrahman"], meaning: "God is With Us", connection: "Emmanuel = God with us; Abdullah means servant of Allah", popularIn: ["NG"], category: "western-male" },
};


/**
 * Nicknames and variants that map to canonical Western names in the mapping.
 * Enables "John Smith" → "john", "Mike" → "michael", "Jim" → "james", etc.
 */
const westernNameVariants: Record<string, string> = {
  // John variants
  johnny: "john", jon: "john", jack: "john", johnnie: "john", juan: "john", jean: "john", giovanni: "john", hans: "john", ian: "john", sean: "john", shawn: "john", ivan: "john", evan: "john", jan: "john",
  // Michael
  mike: "michael", mikey: "michael", mick: "michael", mickey: "michael", miguel: "michael", mitchell: "michael",
  // James
  jim: "james", jimmy: "james", jamie: "james", diego: "james",
  // William
  bill: "william", billy: "william", will: "william", liam: "william", willy: "william",
  // Robert
  bob: "robert", bobby: "robert", rob: "robert", robby: "robert", bert: "robert",
  // David, Daniel
  dave: "david", davey: "david", danny: "daniel", dan: "daniel",
  // Steven, Christopher, Matthew
  steve: "steven", stevie: "steven", chris: "christopher", matt: "matthew", mattie: "matthew", matty: "matthew",
  // Joseph, Anthony, Thomas
  joe: "joseph", joey: "joseph", jose: "joseph", tony: "anthony", tom: "thomas", tommy: "thomas", tam: "thomas",
  // Samuel, Benjamin, Joshua
  sam: "samuel", sammy: "samuel", ben: "benjamin", benny: "benjamin", binyamin: "benjamin", josh: "joshua",
  // Andrew, Alexander, Nicholas
  andy: "andrew", alex: "alexander", alejandro: "alexander", nick: "nicholas", nico: "nicholas",
  // Katherine / Catherine spellings
  kate: "katherine", kathy: "katherine", katie: "katherine", katy: "katherine",
  catherine: "katherine", cathy: "katherine", kathryn: "katherine", kaitlyn: "katherine", caitlin: "katherine", katelyn: "katherine",
  // Elizabeth
  liz: "elizabeth", lizzy: "elizabeth", beth: "elizabeth", eliza: "elizabeth", betsy: "elizabeth", lisa: "elizabeth", betty: "elizabeth", ellen: "elizabeth",
  // Margaret, Anna, Susan
  meg: "margaret", maggie: "margaret", peg: "margaret",
  ann: "anna", anne: "anna", annie: "anna", anna: "anna",
  sue: "susan", suzy: "susan", susie: "susan", suzanne: "susan",
  jenny: "jennifer", jen: "jennifer", jenn: "jennifer",
  amy: "amanda", mandy: "amanda", manda: "amanda",
  em: "emily", emmie: "emily",
  sara: "sarah",
  rach: "rachel",
  // More male
  rick: "richard", rich: "richard", dick: "richard",
  ted: "theodore", teddy: "theodore", theo: "theodore",
  ed: "edward", eddie: "edward", ned: "edward",
  fred: "frederick", freddie: "frederick",
  greg: "gregory", gregg: "gregory",
  jeff: "jeffrey",
  jonny: "jonathan",
  pat: "patrick", paddy: "patrick",
  randy: "randall",
  tim: "timothy", timmy: "timothy",
  // More female
  abigail: "abby",
  carol: "caroline",
  deb: "deborah", debbie: "deborah",
  jess: "jessica", jessie: "jessica",
  molly: "mary", polly: "mary",
  nancy: "anna", nan: "anna",
  becky: "rebecca", becca: "rebecca",
  steph: "stephanie", steff: "stephanie",
  tina: "christina",
  vicky: "victoria", tori: "victoria",
  zoey: "zoe",
  // Additional variants (nickname -> canonical)
  cloe: "chloe",
  maddie: "madison", maddy: "madison",
  liv: "olivia", livvy: "olivia",
  sophie: "sophia",
  charlie: "charles",
  ollie: "oliver",
  harry: "harold",
  jake: "jacob",
  lucas: "luke",
  addie: "addison", addison: "addison",
  ellie: "eleanor", ella: "eleanor",
};

/** Chinese character → Pinyin for multilanguage detection (simplified/traditional) */
const chineseCharToPinyin: Record<string, string> = {
  "伟": "wei", "明": "ming", "俊": "jun", "雷": "lei", "浩": "hao",
  "健": "jian", "龙": "long", "龍": "long",
  "静": "jing", "丽": "li", "麗": "li", "美": "mei", "燕": "yan",
  "晓": "xiao", "曉": "xiao", "英": "ying", "琳": "lin",
};

/** Normalize diacritics for multilanguage: José → jose, João → joao */
function normalizeDiacritics(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

/**
 * Levenshtein distance — returns minimum edits to transform a into b.
 */
function levenshtein(a: string, b: string): number {
  const an = a.length;
  const bn = b.length;
  const dp: number[][] = Array(an + 1)
    .fill(null)
    .map(() => Array(bn + 1).fill(0));
  for (let i = 0; i <= an; i++) dp[i][0] = i;
  for (let j = 0; j <= bn; j++) dp[0][j] = j;
  for (let i = 1; i <= an; i++) {
    for (let j = 1; j <= bn; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[an][bn];
}

/**
 * Similarity score 0–1. Higher = more similar.
 * Uses Levenshtein normalized by max length, with boost for same first letter and prefix match.
 */
function similarity(a: string, b: string): number {
  if (!a || !b) return 0;
  const al = a.toLowerCase().slice(0, 25);
  const bl = b.toLowerCase().slice(0, 25);
  if (bl.startsWith(al)) return 0.85 + al.length * 0.01;
  if (al.startsWith(bl)) return 0.7 + bl.length * 0.01;
  const dist = levenshtein(al, bl);
  const maxLen = Math.max(al.length, bl.length, 1);
  let score = 1 - dist / maxLen;
  if (al[0] === bl[0]) score += 0.18;
  return Math.min(1, score);
}

/** All canonical Western names in the mapping (for fuzzy search). */
const allMappedWesternNames = Object.keys(christianToMuslimNameMapping);

/**
 * When no exact match is found, suggest closely related names the user can select.
 * Returns up to `limit` suggestions with similarity above threshold.
 * Pass countryCode to boost names popular in that country.
 */
export function getDidYouMeanSuggestions(
  input: string | null | undefined,
  limit = 5,
  options?: { countryCode?: string }
): { displayName: string; canonicalKey: string }[] {
  const raw = typeof input === "string" ? String(input).trim() : "";
  if (!raw || raw.length < 2) return [];
  const first = raw.split(/\s+/)[0]?.toLowerCase() || raw.toLowerCase();
  if (first.length > 30) return []; // avoid expensive fuzzy match on very long input
  if (getMappingContext(first)) return [];
  const country = options?.countryCode?.toUpperCase();

  const scored = allMappedWesternNames
    .map(name => {
      const sim = similarity(first, name);
      const m = christianToMuslimNameMapping[name];
      const countryBoost = country && m?.popularIn?.includes(country) ? 0.15 : 0;
      return {
        displayName: name.charAt(0).toUpperCase() + name.slice(1),
        canonicalKey: name,
        score: sim + countryBoost,
      };
    })
    .filter(x => x.score >= 0.48)
    .sort((a, b) => b.score - a.score);

  const seen = new Set<string>();
  return scored
    .filter(x => {
      if (seen.has(x.canonicalKey)) return false;
      seen.add(x.canonicalKey);
      return true;
    })
    .slice(0, limit)
    .map(({ displayName, canonicalKey }) => ({ displayName, canonicalKey }));
}

// Get all mapped Western names for quick lookup
export function getWesternNameSuggestions(name: string | null | undefined): string[] {
  const key = resolveMappingKey(name);
  if (!key) return [];
  const mapping = christianToMuslimNameMapping[key];
  return mapping?.muslimNames ?? [];
}

/** Prefix-matched Western names for autocomplete. Returns display name + canonical key. */
export function getPrefixWesternSuggestions(
  input: string | null | undefined,
  limit = 6,
  options?: { countryCode?: string }
): { displayName: string; canonicalKey: string }[] {
  const raw = typeof input === "string" ? String(input).trim().toLowerCase() : "";
  if (!raw || raw.length < 2) return [];
  const country = options?.countryCode?.toUpperCase();
  const prefixMatches: { displayName: string; canonicalKey: string; score: number }[] = [];
  for (const key of allMappedWesternNames) {
    let score = 0;
    if (key.startsWith(raw)) {
      score = key === raw ? 100 : 50 + (key.length - raw.length);
    } else if (raw.startsWith(key.slice(0, 2)) && key.length <= raw.length + 3) {
      const sim = similarity(raw, key);
      if (sim >= 0.5) score = sim * 40;
    }
    if (score > 0) {
      const m = christianToMuslimNameMapping[key];
      if (country && m?.popularIn?.includes(country)) score += 20;
      prefixMatches.push({
        displayName: key.charAt(0).toUpperCase() + key.slice(1),
        canonicalKey: key,
        score,
      });
    }
  }
  return prefixMatches
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ displayName, canonicalKey }) => ({ displayName, canonicalKey }));
}

/**
 * Combined typing suggestions: Western mapping (prefix + fuzzy) and optionally Muslim names.
 * Use for autocomplete as user types.
 */
export function getCombinedTypingSuggestions(
  input: string | null | undefined,
  options?: { includeMuslimNames?: boolean; limit?: number; countryCode?: string }
): { type: "mapping"; displayName: string; canonicalKey: string }[] {
  const raw = typeof input === "string" ? String(input).trim() : "";
  if (!raw) return [];
  const limit = options?.limit ?? 8;

  const first = raw.split(/\s+/)[0]?.toLowerCase() || raw.toLowerCase();
  if (first.length < 2) return [];

  const results: { type: "mapping"; displayName: string; canonicalKey: string }[] = [];

  const prefix = getPrefixWesternSuggestions(first, limit, { countryCode: options?.countryCode });
  const seen = new Set<string>();
  for (const { displayName, canonicalKey } of prefix) {
    if (!seen.has(canonicalKey)) {
      seen.add(canonicalKey);
      results.push({ type: "mapping", displayName, canonicalKey });
    }
  }

  if (results.length < limit) {
    const fuzzy = getDidYouMeanSuggestions(first, limit - results.length, { countryCode: options?.countryCode });
    for (const { displayName, canonicalKey } of fuzzy) {
      if (!seen.has(canonicalKey)) {
        seen.add(canonicalKey);
        results.push({ type: "mapping", displayName, canonicalKey });
      }
    }
  }

  return results.slice(0, limit);
}

/** Resolves input (full name, nickname, variant, multilanguage) to canonical mapping key. */
function resolveMappingKey(name: string | null | undefined): string {
  const raw = typeof name === "string" ? name.trim() : "";
  if (!raw) return "";
  const firstWord = raw.split(/\s+/)[0] || raw;
  const normalized = normalizeDiacritics(firstWord);

  // Direct match (ASCII normalized)
  if (christianToMuslimNameMapping[normalized]) return normalized;

  // Chinese character → Pinyin (single char or first char of multi-char)
  if (/[\u4e00-\u9fff]/.test(firstWord)) {
    const char = firstWord.charAt(0);
    const pinyin = chineseCharToPinyin[char];
    if (pinyin && christianToMuslimNameMapping[pinyin]) return pinyin;
  }

  return westernNameVariants[normalized] ?? normalized;
}

// Get context for a mapping (robust to null/undefined/whitespace)
// Uses first name only for "John Smith", and resolves nicknames (Mike → Michael)
export function getMappingContext(name: string | null | undefined): NameMapping | null {
  const key = resolveMappingKey(name);
  if (!key) return null;
  return christianToMuslimNameMapping[key] ?? null;
}

// Get all names in a category
export function getNamesByCategory(category: NameMapping["category"]): [string, NameMapping][] {
  return Object.entries(christianToMuslimNameMapping).filter(([, v]) => v.category === category);
}

/** Mappings popular in a given country (ISO 3166-1 alpha-2, e.g. "BR", "NG") */
export function getMappingsByCountry(countryCode: string): [string, NameMapping][] {
  const code = countryCode.toUpperCase();
  return Object.entries(christianToMuslimNameMapping).filter(
    ([, v]) => v.popularIn?.includes(code)
  );
}

// Get total count
export const totalMappings = Object.keys(christianToMuslimNameMapping).length;
