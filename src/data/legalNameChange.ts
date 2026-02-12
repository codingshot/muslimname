export interface LegalNameChangeGuide {
  country: string;
  countryCode: string;
  flag: string;
  overview: string;
  estimatedCost: string;
  estimatedCostUSD: [number, number]; // [min, max] in USD for filtering & display
  estimatedTimeline: string;
  estimatedTimelineWeeks: [number, number]; // [min, max] in weeks for filtering
  difficulty: "easy" | "moderate" | "complex";
  steps: { title: string; description: string; documents?: string[] }[];
  tips: string[];
  resources: { title: string; url: string }[];
  religiousExemptions: string;
  lastUpdated: string;
}

export const legalNameChangeDatabase: LegalNameChangeGuide[] = [
  {
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    overview: "Name changes in the US are handled at the state level through court petitions. Most states allow name changes for any reason, including religious conversion. The process varies by state but generally involves filing a petition, publishing a notice, and attending a court hearing.",
    estimatedCost: "$150 - $500 (varies by state)",
    estimatedCostUSD: [150, 500],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Obtain a Name Change Petition Form", description: "Visit your local county courthouse or their website to get the official name change petition form. Some states offer online filing.", documents: ["Government-issued ID", "Birth certificate"] },
      { title: "Complete the Petition", description: "Fill out the petition with your current legal name, desired new name, and reason for the change (religious conversion). Some states require you to list all addresses for the past 5 years.", documents: ["Completed petition form"] },
      { title: "File the Petition with the Court", description: "Submit your petition to the clerk of court in your county of residence. Pay the filing fee (typically $150-$400).", documents: ["Petition", "Filing fee payment"] },
      { title: "Publish a Legal Notice (if required)", description: "Many states require publishing a notice of name change in a local newspaper for a set period (usually 1-4 weeks). The newspaper can usually handle this for you.", documents: ["Court order for publication"] },
      { title: "Attend the Court Hearing", description: "Appear before a judge who will review your petition. The judge will typically grant the request unless there is evidence of fraud. Bring identification and any supporting documents.", documents: ["Photo ID", "All filed documents"] },
      { title: "Receive Your Court Order", description: "Once approved, obtain certified copies of the name change court order (get at least 5 copies for updating various documents).", documents: ["Court order (certified copies)"] },
      { title: "Update Your Documents", description: "Update your Social Security card first, then driver's license, passport, bank accounts, and other records.", documents: ["Court order", "Current ID", "SS-5 form"] }
    ],
    tips: [
      "Some states waive publication requirements for religious name changes — ask the court clerk",
      "Get at least 5 certified copies of the court order",
      "Update Social Security first, as other agencies require the new SS card",
      "Some states allow fee waivers for financial hardship",
      "Consider consulting a local imam who may have experience guiding converts through this process"
    ],
    resources: [
      { title: "USCIS - Update Immigration Documents", url: "https://www.uscis.gov" },
      { title: "Social Security Name Change", url: "https://www.ssa.gov/personal-record/change-name" },
      { title: "US Passport Name Change", url: "https://travel.state.gov/content/travel/en/passports/have-passport/change-correct.html" }
    ],
    religiousExemptions: "Most US states recognize religious conversion as a valid reason for name changes. Some states may waive publication requirements for religious name changes. No state requires you to change your name upon conversion — it is entirely voluntary.",
    lastUpdated: "2026-01"
  },
  {
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    overview: "The UK has one of the simplest name change processes in the world. You can change your name by 'usage' (simply starting to use a new name) or formally through a Deed Poll. No court order is required.",
    estimatedCost: "£0 - £53 (enrolled deed poll)",
    estimatedCostUSD: [0, 67],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Decide Between Unenrolled and Enrolled Deed Poll", description: "An unenrolled deed poll is free and sufficient for most purposes. An enrolled deed poll (£53.05) creates a permanent public record at the Royal Courts of Justice.", documents: [] },
      { title: "Create Your Deed Poll Document", description: "Write or print a deed poll document stating your old name, new name, and your intention to abandon the old name. You can use free templates online.", documents: ["Deed poll document"] },
      { title: "Sign and Witness", description: "Sign the deed poll in the presence of two independent witnesses (not family members). They must also sign.", documents: ["Signed deed poll", "Witness signatures"] },
      { title: "Update Your Records", description: "Send copies of your deed poll to update your passport, driving licence, bank accounts, HMRC records, GP, etc.", documents: ["Deed poll copies", "Current documents"] }
    ],
    tips: [
      "You can start using your new name immediately — no legal process is strictly required",
      "A deed poll simply formalizes the change for institutions that need proof",
      "Make multiple original copies of your deed poll before sending them out",
      "HM Passport Office and DVLA both accept unenrolled deed polls",
      "Islamic centers in the UK often help with deed poll witnessing"
    ],
    resources: [
      { title: "GOV.UK - Change Your Name", url: "https://www.gov.uk/change-name-deed-poll" },
      { title: "HM Passport Office", url: "https://www.gov.uk/changing-passport-information" },
      { title: "Free Deed Poll Template", url: "https://www.freedeedpoll.org.uk" }
    ],
    religiousExemptions: "The UK does not require any specific reason for a name change. Religious conversion is widely accepted and understood. Many mosques and Islamic centers can help facilitate the process.",
    lastUpdated: "2026-01"
  },
  {
    country: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    overview: "Name changes in Canada are handled at the provincial level. Each province has its own process, but generally involves submitting an application to Vital Statistics (or equivalent) with supporting documents and a fee.",
    estimatedCost: "CAD $110 - $350 (varies by province)",
    estimatedCostUSD: [80, 255],
    estimatedTimeline: "6 - 16 weeks",
    estimatedTimelineWeeks: [6, 16],
    difficulty: "moderate",
    steps: [
      { title: "Obtain the Application Form", description: "Contact your provincial Vital Statistics office or download the name change application from their website.", documents: ["Government photo ID"] },
      { title: "Complete the Application", description: "Fill out the form with your current name, desired name, and reason for change. Religious conversion is an accepted reason in all provinces.", documents: ["Completed application form"] },
      { title: "Gather Supporting Documents", description: "Collect required documents including birth certificate, current ID, and any documentation of your conversion (certificate from mosque, etc.).", documents: ["Birth certificate", "Photo ID", "Conversion certificate (optional)"] },
      { title: "Get Fingerprinted (some provinces)", description: "Some provinces require a criminal record check as part of the process.", documents: ["Fingerprint results"] },
      { title: "Submit Application and Fee", description: "Submit your completed application with all supporting documents and the required fee to your provincial Vital Statistics office.", documents: ["Complete application package", "Fee payment"] },
      { title: "Receive Name Change Certificate", description: "Once approved, you'll receive an official name change certificate to use for updating all other documents.", documents: ["Name change certificate"] }
    ],
    tips: [
      "Processing times vary significantly by province — Ontario and BC tend to be faster",
      "Some provinces offer expedited processing for an additional fee",
      "Keep your name change certificate safe — replacements can take weeks",
      "Update your SIN (Social Insurance Number) record with Service Canada after",
      "Many Canadian mosques provide conversion certificates that can support your application"
    ],
    resources: [
      { title: "Service Ontario - Name Change", url: "https://www.ontario.ca/page/change-name" },
      { title: "BC Vital Statistics", url: "https://www2.gov.bc.ca/gov/content/life-events/legal-changes-of-name" },
      { title: "Service Canada", url: "https://www.canada.ca/en/employment-social-development/services/sin.html" }
    ],
    religiousExemptions: "All Canadian provinces accept religious conversion as a valid reason for name changes. No special documentation is required beyond the standard application, though a conversion certificate from a recognized Islamic center can be helpful.",
    lastUpdated: "2026-01"
  },
  {
    country: "Australia",
    countryCode: "AU",
    flag: "🇦🇺",
    overview: "Name changes in Australia are handled by the Registry of Births, Deaths and Marriages in each state/territory. The process involves an application, identity verification, and a waiting period.",
    estimatedCost: "AUD $195 - $250",
    estimatedCostUSD: [125, 160],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Check Eligibility", description: "You must be an Australian citizen or permanent resident and have lived in the state for at least 12 months (3 months in some states).", documents: ["Proof of residency"] },
      { title: "Complete Application", description: "Fill out the Change of Name application form from your state's Registry of Births, Deaths and Marriages.", documents: ["Application form", "Proof of identity"] },
      { title: "Provide Supporting Documents", description: "Submit identity documents (usually 3 forms of ID following a point system) and your current birth certificate or citizenship certificate.", documents: ["Birth certificate", "Three forms of ID"] },
      { title: "Submit and Pay", description: "Lodge your application in person or by post with the required fee.", documents: ["Application package", "Fee payment"] },
      { title: "Receive Change of Name Certificate", description: "After processing, you'll receive an official certificate to update all your records.", documents: ["Change of name certificate"] }
    ],
    tips: [
      "Start with updating your Medicare card — it's the simplest government document to change",
      "Australian passport updates require the change of name certificate",
      "Some states allow online applications",
      "The waiting period gives time for background checks",
      "Islamic councils in each state can provide guidance specific to your area"
    ],
    resources: [
      { title: "NSW Registry", url: "https://www.nsw.gov.au/topics/name-changes" },
      { title: "VIC Registry", url: "https://www.bdm.vic.gov.au" },
      { title: "Australian Passport Office", url: "https://www.passports.gov.au" }
    ],
    religiousExemptions: "Australia accepts religious reasons for name changes without requiring specific religious documentation. The standard application process applies.",
    lastUpdated: "2026-01"
  },
  {
    country: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    overview: "Germany has stricter name change laws than many countries. Name changes generally require a 'significant reason' (wichtiger Grund). Religious conversion is recognized as a valid reason, especially for first name changes.",
    estimatedCost: "€50 - €1,500 (varies by complexity)",
    estimatedCostUSD: [55, 1635],
    estimatedTimeline: "2 - 6 months",
    estimatedTimelineWeeks: [8, 24],
    difficulty: "complex",
    steps: [
      { title: "Consult Your Local Standesamt", description: "Visit your local civil registry office (Standesamt) to understand the specific requirements in your district.", documents: ["Current ID/passport"] },
      { title: "Gather Documentation", description: "Collect all required documents including birth certificate, registration certificate, and proof of religious conversion.", documents: ["Birth certificate (Geburtsurkunde)", "Registration certificate (Meldebescheinigung)", "Conversion certificate"] },
      { title: "Submit Application", description: "File your name change application (Namensänderungsantrag) with the Standesamt or relevant authority.", documents: ["Application form", "All supporting documents", "Fee payment"] },
      { title: "Attend Interview (if required)", description: "Some offices may require a personal interview to discuss your reasons for the name change.", documents: [] },
      { title: "Receive Decision", description: "The authority will issue a decision. If approved, you'll receive an official name change certificate (Namensänderungsurkunde).", documents: ["Name change certificate"] }
    ],
    tips: [
      "First name changes are generally easier to obtain than surname changes",
      "A letter from your mosque or imam supporting the name change can be very helpful",
      "Consider adding the Muslim name as an additional first name initially",
      "Legal aid may be available if costs are prohibitive",
      "DITIB (Turkish-Islamic Union) and other organizations may offer guidance"
    ],
    resources: [
      { title: "German Civil Registry", url: "https://www.standesamt.com" },
      { title: "DITIB Germany", url: "https://www.ditib.de" }
    ],
    religiousExemptions: "German law recognizes religious conversion as a 'significant reason' (wichtiger Grund) for name changes under the Namensänderungsgesetz. A conversion certificate from a recognized Islamic organization strengthens the application significantly.",
    lastUpdated: "2026-01"
  },
  {
    country: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    overview: "France allows first name changes through a civil registrar (officier de l'état civil) at your local town hall. Since 2017, the process has been simplified and no longer requires a court order for most cases.",
    estimatedCost: "€0 - €100",
    estimatedCostUSD: [0, 109],
    estimatedTimeline: "1 - 3 months",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Prepare Your Request", description: "Write a formal letter explaining your reasons for wanting to change your first name, including your religious conversion.", documents: ["Written request letter"] },
      { title: "Gather Documents", description: "Collect your birth certificate (less than 3 months old), ID, and any supporting documents.", documents: ["Recent birth certificate", "Identity document", "Proof of conversion"] },
      { title: "Submit to Mairie", description: "Submit your request to the civil registrar (officier de l'état civil) at your birth town hall or current residence town hall.", documents: ["Complete application package"] },
      { title: "Receive Decision", description: "The registrar will decide within about 30 days. If they find the request legitimate, the change is made directly in the civil registry.", documents: [] }
    ],
    tips: [
      "Since the 2017 reform, the process is much simpler — no court needed for first names",
      "Religious conversion is well-established as a legitimate interest (intérêt légitime)",
      "If refused by the mairie, you can appeal to the family court (juge aux affaires familiales)",
      "The Grande Mosquée de Paris can provide official conversion certificates"
    ],
    resources: [
      { title: "Service-Public.fr - Changement de prénom", url: "https://www.service-public.fr/particuliers/vosdroits/F36379" }
    ],
    religiousExemptions: "French law recognizes religious conversion as a 'legitimate interest' (intérêt légitime) for first name changes. Surname changes are harder but possible through a separate administrative process.",
    lastUpdated: "2026-01"
  },
  {
    country: "Malaysia",
    countryCode: "MY",
    flag: "🇲🇾",
    overview: "Malaysia has a structured process for converts (mualaf) to change their names, handled through the National Registration Department (JPN) with support from Islamic religious authorities.",
    estimatedCost: "MYR 40 - 100",
    estimatedCostUSD: [9, 22],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "easy",
    steps: [
      { title: "Obtain Conversion Certificate", description: "Register your conversion with the State Islamic Religious Department (JAIS/JAKIM) to receive an official conversion certificate (Kad Mualaf).", documents: ["Conversion certificate (Kad Mualaf)"] },
      { title: "Visit JPN (National Registration Department)", description: "Go to your nearest JPN office with your conversion certificate and current identity documents.", documents: ["IC (Identity Card)", "Conversion certificate", "Application form"] },
      { title: "Submit Application", description: "Fill out the name change application form. Your new name will typically include 'bin/binti Abdullah' if your father is non-Muslim.", documents: ["Completed form", "Supporting documents"] },
      { title: "Receive Updated IC", description: "Once approved, you'll receive a new identity card with your Muslim name and updated religion status.", documents: ["New IC"] }
    ],
    tips: [
      "JAKIM provides extensive support for converts (mualaf)",
      "Your new IC will also reflect your religion change to Islam",
      "Many state religious departments offer free support for the entire process",
      "Consider joining local mualaf support groups for guidance"
    ],
    resources: [
      { title: "JPN Malaysia", url: "https://www.jpn.gov.my" },
      { title: "JAKIM", url: "https://www.islam.gov.my" }
    ],
    religiousExemptions: "Malaysia has a dedicated process for religious converts. The Islamic religious authorities actively facilitate name changes for new Muslims, making it one of the most streamlined processes globally.",
    lastUpdated: "2026-01"
  },
  {
    country: "South Africa",
    countryCode: "ZA",
    flag: "🇿🇦",
    overview: "South Africa allows name changes through the Department of Home Affairs. The process involves publishing a notice in the Government Gazette and submitting an application.",
    estimatedCost: "ZAR 140 - 500",
    estimatedCostUSD: [8, 27],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Publish Notice in Government Gazette", description: "Submit a notice of your intended name change to be published in the Government Gazette.", documents: ["Notice form"] },
      { title: "Complete Application Form", description: "Fill out the DHA-195 form from the Department of Home Affairs.", documents: ["DHA-195 form", "ID document"] },
      { title: "Submit to Home Affairs", description: "Submit your application with the Gazette notice, ID, and required fee.", documents: ["Application", "Gazette proof", "ID", "Fee"] },
      { title: "Receive Amended ID", description: "Once approved, apply for an amended identity document.", documents: ["Approval letter"] }
    ],
    tips: [
      "The Muslim Judicial Council (MJC) can provide conversion certificates",
      "The Gazette publication is required by law and takes a few weeks",
      "Apply for a new ID document as soon as the name change is approved"
    ],
    resources: [
      { title: "Department of Home Affairs", url: "https://www.dha.gov.za" }
    ],
    religiousExemptions: "South Africa accepts religious conversion as a valid reason for name changes without additional requirements beyond the standard process.",
    lastUpdated: "2026-01"
  },
  {
    country: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    overview: "In India, name changes are done through a combination of newspaper publication, Government Gazette notification, and an affidavit. The process is handled at the state level and does not require a court order for adults.",
    estimatedCost: "₹1,000 - ₹5,000",
    estimatedCostUSD: [12, 60],
    estimatedTimeline: "4 - 10 weeks",
    estimatedTimelineWeeks: [4, 10],
    difficulty: "moderate",
    steps: [
      { title: "Execute an Affidavit", description: "Get an affidavit (sworn statement) on stamp paper from a Notary Public declaring your old name and new name with reason for the change.", documents: ["Stamp paper affidavit", "Photo ID"] },
      { title: "Publish in Two Newspapers", description: "Publish a name change notice in one local and one national newspaper. This serves as public notification.", documents: ["Newspaper publication proof"] },
      { title: "Submit to Government Gazette", description: "Apply for a Gazette notification through the Department of Publication, Government of India, or your state gazette.", documents: ["Affidavit", "Newspaper clippings", "Application form", "Fee"] },
      { title: "Receive Gazette Notification", description: "Once published in the Gazette, your name change is officially recorded.", documents: ["Gazette notification copy"] },
      { title: "Update Documents", description: "Update your Aadhaar card, PAN card, passport, voter ID, and bank records using the Gazette notification.", documents: ["Gazette notification", "Affidavit", "Old documents"] }
    ],
    tips: [
      "Start with updating Aadhaar as most other agencies accept it as primary proof",
      "Passport updates require the Gazette notification — plan ahead if you have travel plans",
      "Many local mosques and Jamaats can help with the affidavit wording",
      "The entire process can be done without a lawyer to save costs",
      "Keep multiple original copies of newspaper publications"
    ],
    resources: [
      { title: "Government Gazette Publications", url: "https://egazette.gov.in" },
      { title: "Aadhaar Update", url: "https://uidai.gov.in" },
      { title: "Passport Seva - Name Change", url: "https://www.passportindia.gov.in" }
    ],
    religiousExemptions: "India does not require a specific reason for name changes. Religious conversion is commonly cited and well-accepted. No court order is needed for adults changing their own name.",
    lastUpdated: "2026-01"
  },
  {
    country: "Pakistan",
    countryCode: "PK",
    flag: "🇵🇰",
    overview: "Pakistan allows name changes through NADRA (National Database and Registration Authority). Since Pakistan is an Islamic republic, religious name changes are straightforward and well-understood by authorities.",
    estimatedCost: "PKR 500 - 3,000",
    estimatedCostUSD: [2, 11],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Visit NADRA Office", description: "Go to your nearest NADRA office with your current CNIC (Computerized National Identity Card) and supporting documents.", documents: ["Current CNIC", "Photo ID"] },
      { title: "Submit Modification Form", description: "Fill out the CNIC modification form requesting the name change. Include an affidavit on stamp paper.", documents: ["CNIC modification form", "Stamp paper affidavit"] },
      { title: "Provide Supporting Documents", description: "Submit your affidavit, old CNIC, and newspaper advertisement of name change (if required by your province).", documents: ["Affidavit", "Newspaper ad (if required)"] },
      { title: "Receive Updated CNIC", description: "NADRA will process and issue your new CNIC with the updated name.", documents: ["New CNIC"] }
    ],
    tips: [
      "The process is generally very fast and straightforward in Pakistan",
      "An affidavit from a Notary Public is the primary document needed",
      "Update your passport separately through the Passport Office",
      "For converts, a letter from a local mosque imam can expedite the process"
    ],
    resources: [
      { title: "NADRA Pakistan", url: "https://www.nadra.gov.pk" },
      { title: "Passport Office Pakistan", url: "https://www.dgip.gov.pk" }
    ],
    religiousExemptions: "As an Islamic republic, Pakistan is very accommodating of Islamic name changes. The process is simple and well-supported by authorities at every level.",
    lastUpdated: "2026-01"
  },
  {
    country: "Indonesia",
    countryCode: "ID",
    flag: "🇮🇩",
    overview: "Indonesia requires a court order (Penetapan Pengadilan) for legal name changes. The process goes through the District Court (Pengadilan Negeri) and then the Civil Registry (Dinas Kependudukan dan Catatan Sipil).",
    estimatedCost: "IDR 200,000 - 1,000,000",
    estimatedCostUSD: [13, 63],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Prepare Application Letter", description: "Write a formal application letter (surat permohonan) to the District Court stating your current name, desired name, and reason.", documents: ["Application letter", "KTP (ID card)"] },
      { title: "File at District Court", description: "Submit your application to the Pengadilan Negeri (District Court) in your domicile along with supporting documents.", documents: ["Application", "KTP", "Kartu Keluarga", "Birth certificate", "Fee"] },
      { title: "Attend Court Hearing", description: "Appear before a judge who will review your petition. Religious conversion is a well-accepted reason.", documents: ["Photo ID", "Conversion certificate from MUI"] },
      { title: "Receive Court Decision", description: "The court will issue a decision letter (Penetapan) approving the name change.", documents: ["Court decision letter"] },
      { title: "Update Civil Registry", description: "Bring the court decision to Dinas Kependudukan dan Catatan Sipil to update your KTP, KK, and birth certificate.", documents: ["Court decision", "Current documents"] }
    ],
    tips: [
      "MUI (Majelis Ulama Indonesia) can provide official conversion certificates",
      "The court process is relatively straightforward for religious conversions",
      "Update your KTP first, then other documents follow more easily",
      "Some courts may process the application without a hearing for religious reasons",
      "Local pengadilan agama (religious court) staff can provide informal guidance"
    ],
    resources: [
      { title: "Indonesian Ministry of Law", url: "https://www.kemenkumham.go.id" },
      { title: "Dukcapil (Civil Registry)", url: "https://dukcapil.kemendagri.go.id" }
    ],
    religiousExemptions: "Indonesia recognizes religious conversion as a valid reason for name changes. As a Muslim-majority country, courts are very familiar with and supportive of Islamic name change petitions.",
    lastUpdated: "2026-01"
  },
  {
    country: "Nigeria",
    countryCode: "NG",
    flag: "🇳🇬",
    overview: "In Nigeria, name changes are done through a combination of newspaper publication and affidavit. For official documents, you may also need to apply to the National Population Commission or courts.",
    estimatedCost: "₦5,000 - ₦30,000",
    estimatedCostUSD: [3, 19],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "easy",
    steps: [
      { title: "Swear an Affidavit", description: "Go to a High Court registry and swear an affidavit of change of name before a Commissioner for Oaths.", documents: ["Means of identification", "Passport photos"] },
      { title: "Publish in a National Newspaper", description: "Publish a change of name advertisement in a widely-circulated national newspaper.", documents: ["Newspaper publication"] },
      { title: "Obtain Gazette Publication (optional)", description: "For extra legal backing, apply for a Federal Government Gazette publication.", documents: ["Application", "Affidavit copy"] },
      { title: "Update NIN and Documents", description: "Visit NIMC to update your National Identification Number, then update other documents.", documents: ["Affidavit", "Newspaper cutting", "Old documents"] }
    ],
    tips: [
      "The affidavit and newspaper publication are usually sufficient for most purposes",
      "Many Nigerian banks accept just the affidavit and newspaper cutting",
      "Islamic scholars and local mosque leaders can provide letters of support",
      "The process is well-understood as Nigeria has a large Muslim population",
      "NIMC offices can update your NIN the same day in many locations"
    ],
    resources: [
      { title: "NIMC Nigeria", url: "https://nimc.gov.ng" },
      { title: "Nigeria Immigration Service", url: "https://immigration.gov.ng" }
    ],
    religiousExemptions: "Nigeria is very accommodating of religious name changes. With a large Muslim population, the process is well-understood and straightforward. No specific religious documentation is required beyond the standard process.",
    lastUpdated: "2026-01"
  },
  {
    country: "Egypt",
    countryCode: "EG",
    flag: "🇪🇬",
    overview: "In Egypt, name changes for religious converts are handled through the Civil Status Authority (مصلحة الأحوال المدنية). Converts to Islam can change their name relatively easily with proper documentation from Al-Azhar or recognized Islamic authorities.",
    estimatedCost: "EGP 100 - 500",
    estimatedCostUSD: [2, 10],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Obtain Conversion Certificate", description: "Get an official conversion certificate (إشهار إسلام) from Al-Azhar or a recognized Islamic authority.", documents: ["Conversion certificate from Al-Azhar"] },
      { title: "Visit Civil Status Office", description: "Go to the Civil Status Authority (السجل المدني) in your area with your conversion certificate and current ID.", documents: ["Conversion certificate", "National ID", "Birth certificate"] },
      { title: "Submit Application", description: "Fill out the name change application form and submit with all supporting documents.", documents: ["Application form", "Fee payment"] },
      { title: "Receive Updated Documents", description: "Receive your updated national ID card and birth certificate with the new name.", documents: ["Updated national ID"] }
    ],
    tips: [
      "Al-Azhar is the primary institution for issuing conversion certificates",
      "The process is generally straightforward in Egypt as an Islamic country",
      "Update your national ID first, then passport and other documents",
      "Some local mosques can help facilitate the Al-Azhar certificate process"
    ],
    resources: [
      { title: "Al-Azhar Al-Sharif", url: "https://www.azhar.eg" },
      { title: "Civil Status Authority", url: "https://www.csa.gov.eg" }
    ],
    religiousExemptions: "Egypt actively supports name changes for converts to Islam. Al-Azhar provides conversion certificates that are universally recognized by all government agencies.",
    lastUpdated: "2026-01"
  },
  {
    country: "Türkiye",
    countryCode: "TR",
    flag: "🇹🇷",
    overview: "Türkiye requires a court order for name changes, obtained through a Civil Court of First Instance (Asliye Hukuk Mahkemesi). The process is well-defined under the Turkish Civil Code Article 27.",
    estimatedCost: "₺500 - ₺2,000",
    estimatedCostUSD: [15, 60],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Prepare Petition", description: "Write or have a lawyer prepare a petition (dilekçe) to the Asliye Hukuk Mahkemesi explaining your reason for the name change.", documents: ["Petition letter", "Nüfus cüzdanı (ID)"] },
      { title: "File at Civil Court", description: "Submit the petition to the Civil Court of First Instance in your registered address (nüfusa kayıtlı olunan yer).", documents: ["Petition", "ID copy", "Court fee"] },
      { title: "Attend Hearing", description: "Appear at the scheduled hearing. The court will review your petition — religious reasons are accepted under Turkish law.", documents: ["Photo ID"] },
      { title: "Receive Court Decision", description: "The court issues a decision (karar). Once finalized, it's sent to the Population Registry (Nüfus Müdürlüğü).", documents: ["Court decision"] },
      { title: "Update Nüfus Records", description: "Visit the Nüfus Müdürlüğü to update your civil registry records and obtain a new kimlik (ID card).", documents: ["Court decision", "Old ID"] }
    ],
    tips: [
      "A lawyer is not required but can speed up the process significantly",
      "The Diyanet İşleri Başkanlığı (Directorate of Religious Affairs) can provide supporting documentation",
      "Türkiye's civil code allows name changes for 'just cause' (haklı sebep) — religion qualifies",
      "After court approval, updates to nüfus records happen within days",
      "Passport and other document updates follow the nüfus update automatically"
    ],
    resources: [
      { title: "e-Devlet (e-Government Portal)", url: "https://www.turkiye.gov.tr" },
      { title: "Diyanet İşleri Başkanlığı", url: "https://www.diyanet.gov.tr" },
      { title: "Nüfus ve Vatandaşlık İşleri", url: "https://www.nvi.gov.tr" }
    ],
    religiousExemptions: "Turkish Civil Code Article 27 allows name changes for 'just cause' (haklı sebep). Religious conversion is well-established as a valid reason. Türkiye's Diyanet (Religious Affairs) can provide supporting documentation.",
    lastUpdated: "2026-01"
  },
  {
    country: "Saudi Arabia",
    countryCode: "SA",
    flag: "🇸🇦",
    overview: "In Saudi Arabia, name changes for new Muslims are facilitated through the Ministry of Interior's Civil Affairs department (الأحوال المدنية). The process is streamlined for converts with proper Islamic documentation.",
    estimatedCost: "SAR 0 - 100",
    estimatedCostUSD: [0, 27],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Obtain Conversion Certificate", description: "Get an official conversion certificate (شهادة إسلام) from a recognized Islamic center or court.", documents: ["Conversion certificate"] },
      { title: "Visit Ahwal Madaniya (Civil Affairs)", description: "Go to the nearest Civil Affairs office (الأحوال المدنية) with your conversion certificate and current identification.", documents: ["Conversion certificate", "Current ID/Iqama", "Passport"] },
      { title: "Submit Name Change Request", description: "Fill out the name change form and submit with all documentation. For expatriates, your sponsor (kafeel) may need to be involved.", documents: ["Application form", "Supporting documents"] },
      { title: "Receive Updated ID", description: "Receive your updated identification documents with the new Islamic name.", documents: ["Updated ID/Iqama"] }
    ],
    tips: [
      "The process is very fast and well-supported in Saudi Arabia",
      "Major mosques and Islamic dawah centers provide conversion certificates",
      "For expatriates, coordinate with your employer/sponsor",
      "The Islamic Dawah center in your city can help facilitate the entire process",
      "No fee is typically charged for religious name changes"
    ],
    resources: [
      { title: "Ministry of Interior - Absher", url: "https://www.absher.sa" },
      { title: "Civil Affairs (Ahwal)", url: "https://www.moi.gov.sa" }
    ],
    religiousExemptions: "Saudi Arabia actively encourages and facilitates name changes for new Muslims. The process is free or minimal cost, and conversion certificates from any recognized Islamic authority are accepted.",
    lastUpdated: "2026-01"
  },
  {
    country: "United Arab Emirates",
    countryCode: "AE",
    flag: "🇦🇪",
    overview: "The UAE facilitates name changes for new Muslims through the Federal Authority for Identity and Citizenship (ICA). Islamic affairs departments in each emirate provide conversion certificates.",
    estimatedCost: "AED 100 - 500",
    estimatedCostUSD: [27, 136],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Convert and Obtain Certificate", description: "Register your conversion at an Islamic Affairs office in your emirate (e.g., IACAD in Abu Dhabi, IACAD in Dubai). Receive an official conversion certificate.", documents: ["Conversion certificate (شهادة إسلام)"] },
      { title: "Visit ICA or GDRFA", description: "Go to the Federal Authority for Identity and Citizenship (ICA) or General Directorate of Residency and Foreigners Affairs (GDRFA).", documents: ["Conversion certificate", "Current Emirates ID", "Passport"] },
      { title: "Submit Application via ICA Smart App", description: "You can submit the name change request through the ICA smart services portal or in person.", documents: ["Application", "Photo", "Supporting documents"] },
      { title: "Receive Updated Emirates ID", description: "Receive your updated Emirates ID and residency visa (for expatriates) with the new name.", documents: ["Updated Emirates ID"] }
    ],
    tips: [
      "The process is digitized and can often be done via the ICA Smart app",
      "Each emirate has its own Islamic Affairs department for conversion certificates",
      "UAE government is very supportive of new Muslims",
      "For passport updates, contact your home country's embassy",
      "Many Islamic centers offer post-conversion support including name guidance"
    ],
    resources: [
      { title: "ICA UAE", url: "https://icp.gov.ae" },
      { title: "IACAD Abu Dhabi", url: "https://www.iacad.gov.ae" },
      { title: "Islamic Affairs Dubai", url: "https://www.iacad.gov.ae" }
    ],
    religiousExemptions: "The UAE strongly supports and encourages conversion to Islam and facilitates all related administrative processes including name changes. Conversion certificates are widely accepted across all government services.",
    lastUpdated: "2026-01"
  },
  {
    country: "Netherlands",
    countryCode: "NL",
    flag: "🇳🇱",
    overview: "The Netherlands allows first name changes through a request to the District Court (rechtbank). Since 2024, the process has been simplified with lower barriers. Surname changes go through the King via the Ministry of Justice.",
    estimatedCost: "€0 - €900",
    estimatedCostUSD: [0, 981],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Submit Request to District Court", description: "File a 'verzoekschrift' (petition) with the rechtbank in your district to change your first name (voornaam). A lawyer is technically required but legal aid is available.", documents: ["Petition (verzoekschrift)", "Birth certificate", "BRP extract"] },
      { title: "Provide Justification", description: "Include a written explanation of why you want to change your name. Religious conversion is an accepted reason (gewichtig belang).", documents: ["Personal statement", "Conversion documentation (optional)"] },
      { title: "Court Decision", description: "The court will review your petition — most first name changes for religious reasons are approved without a hearing.", documents: [] },
      { title: "Update BRP Registration", description: "Once approved, the court sends the decision to your municipality to update the BRP (Basisregistratie Personen).", documents: ["Court decision"] },
      { title: "Update Identity Documents", description: "Request new identity documents (ID card, passport) at your municipality with the updated BRP.", documents: ["Updated BRP", "Old documents", "Fee"] }
    ],
    tips: [
      "Legal aid (gesubsidieerde rechtsbijstand) is available for those with lower incomes",
      "Since 2024, the process for first name changes has been made easier",
      "You may be able to get a 'toevoeging' (legal aid assignment) for free legal representation",
      "Dutch Islamic organizations like ISN can provide guidance and conversion letters",
      "Surname changes are much harder and go through the Ministry of Justice"
    ],
    resources: [
      { title: "Rechtspraak.nl - Name Change", url: "https://www.rechtspraak.nl/Onderwerpen/Naamswijziging" },
      { title: "Rijksoverheid - Voornaam wijzigen", url: "https://www.rijksoverheid.nl/onderwerpen/trouwen-samenlevingscontract-en-scheiden/vraag-en-antwoord/hoe-wijzig-ik-mijn-voornaam" },
      { title: "Legal Aid Board", url: "https://www.rvr.org" }
    ],
    religiousExemptions: "Dutch law considers religious conversion a 'weighty interest' (gewichtig belang) for first name changes. Courts routinely grant name changes based on religious conversion.",
    lastUpdated: "2026-01"
  },
  {
    country: "Sweden",
    countryCode: "SE",
    flag: "🇸🇪",
    overview: "Sweden has a relatively simple name change process handled by the Swedish Tax Agency (Skatteverket). First name changes are straightforward, while surname changes have specific rules under the Names Act (Namnlagen).",
    estimatedCost: "SEK 0 - 1,800",
    estimatedCostUSD: [0, 170],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "easy",
    steps: [
      { title: "Apply to Skatteverket", description: "Submit a name change application (ansökan om namnändring) to the Swedish Tax Agency. This can be done online or by mail.", documents: ["Application form", "Personal identity number (personnummer)"] },
      { title: "Provide Supporting Information", description: "Include any supporting documentation for your name change. For first names, no specific reason is required.", documents: ["ID document", "Supporting letter (optional)"] },
      { title: "Skatteverket Review", description: "Skatteverket reviews the application. First name changes are usually processed quickly without complications.", documents: [] },
      { title: "Receive Confirmation", description: "Once approved, Skatteverket updates the population register (folkbokföringen). You'll receive confirmation.", documents: ["Confirmation letter"] },
      { title: "Update Identity Documents", description: "Apply for a new ID card (ID-kort) and passport from the Police Authority (Polisen).", documents: ["Updated folkbokföring", "Old ID", "Fee"] }
    ],
    tips: [
      "First name changes are free and straightforward — no reason needed",
      "Surname changes cost SEK 1,800 and have stricter rules",
      "You can change your first name online through Skatteverket's e-service",
      "Islamic organizations like Islamiska Förbundet can provide guidance",
      "After Skatteverket updates, most agencies are automatically notified"
    ],
    resources: [
      { title: "Skatteverket - Name Change", url: "https://www.skatteverket.se/privat/folkbokforing/namn.4.18e1b10334ebe8bc80001711.html" },
      { title: "Police - ID & Passport", url: "https://polisen.se/en/services-and-permits/passport-and-national-id-card/" }
    ],
    religiousExemptions: "Sweden does not require any reason for first name changes, making the process very simple for religious converts. The Swedish Names Act is one of the most liberal in Europe.",
    lastUpdated: "2026-01"
  },
  // === NEW COUNTRIES ===
  {
    country: "New Zealand",
    countryCode: "NZ",
    flag: "🇳🇿",
    overview: "New Zealand allows name changes through the Department of Internal Affairs. The process is straightforward — apply online or by post, and receive a name change certificate.",
    estimatedCost: "NZD $0 - $170",
    estimatedCostUSD: [0, 100],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Apply Online or by Post", description: "Submit a name change application through the Department of Internal Affairs website or by mail.", documents: ["Application form", "Birth certificate or citizenship certificate", "Photo ID"] },
      { title: "Provide Identity Verification", description: "Include verified copies of your identity documents and a statutory declaration if required.", documents: ["Statutory declaration", "Verified ID copies"] },
      { title: "Pay Fee", description: "Pay the application fee (NZD $170 standard, free for those under 18 or in certain circumstances).", documents: ["Fee payment"] },
      { title: "Receive Name Change Certificate", description: "Once processed, you'll receive a name change certificate to update all your records.", documents: ["Name change certificate"] }
    ],
    tips: [
      "Online applications are faster than postal ones",
      "You can change your name for any reason — no justification required",
      "Update your RealMe identity first for easier government interactions",
      "The Federation of Islamic Associations of New Zealand (FIANZ) can offer guidance"
    ],
    resources: [
      { title: "NZ Dept of Internal Affairs - Name Change", url: "https://www.dia.govt.nz/diawebsite.nsf/wpg_URL/Services-Births-Deaths-and-Marriages-Change-of-Name" },
      { title: "NZ Passport Office", url: "https://www.passports.govt.nz" }
    ],
    religiousExemptions: "New Zealand does not require any reason for name changes. Religious conversion is fully accepted. The process is simple and accessible.",
    lastUpdated: "2026-02"
  },
  {
    country: "Spain",
    countryCode: "ES",
    flag: "🇪🇸",
    overview: "Spain allows first name changes through the Civil Registry (Registro Civil). Since 2023 reforms, the process has been simplified. Surname changes require approval from the Ministry of Justice.",
    estimatedCost: "€0 - €200",
    estimatedCostUSD: [0, 218],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Request at Civil Registry", description: "Submit a request to your local Registro Civil for a first name change (cambio de nombre propio).", documents: ["DNI/NIE", "Birth certificate", "Application letter"] },
      { title: "Provide Justification", description: "Explain your reason for the change. Religious conversion is accepted as 'justa causa' (just cause).", documents: ["Personal statement", "Conversion certificate (optional)"] },
      { title: "Registry Review", description: "The Civil Registry reviews the application. Most first name changes are approved without a hearing.", documents: [] },
      { title: "Receive Updated Certificate", description: "Once approved, obtain your updated birth certificate and apply for new DNI.", documents: ["Updated birth certificate"] }
    ],
    tips: [
      "First name changes are much easier than surname changes since the 2023 reform",
      "The Islamic Commission of Spain (CIE) can provide conversion documentation",
      "You can use your new name informally immediately",
      "Spain's Islamic community (over 2 million) means authorities are familiar with the process"
    ],
    resources: [
      { title: "Ministerio de Justicia", url: "https://www.mjusticia.gob.es" },
      { title: "Registro Civil", url: "https://www.registrocivil.es" }
    ],
    religiousExemptions: "Spanish law recognizes religious conversion as 'just cause' (justa causa) for name changes. The Islamic Commission of Spain has agreements with the government that facilitate religious processes.",
    lastUpdated: "2026-02"
  },
  {
    country: "Italy",
    countryCode: "IT",
    flag: "🇮🇹",
    overview: "Italy handles name changes through the Prefettura (Prefecture) in your province. The process requires publication of intent and approval from the Prefect. First name additions are simpler than full changes.",
    estimatedCost: "€0 - €300",
    estimatedCostUSD: [0, 327],
    estimatedTimeline: "3 - 6 months",
    estimatedTimelineWeeks: [12, 24],
    difficulty: "complex",
    steps: [
      { title: "Submit Request to Prefettura", description: "File a formal request (istanza) to the Prefettura of your province explaining the desired change and reason.", documents: ["Istanza", "Certificato di nascita", "Documento d'identità"] },
      { title: "Public Posting", description: "The Prefecture will post the name change request publicly for 30 days to allow any objections.", documents: [] },
      { title: "Prefect Review", description: "After the posting period, the Prefect reviews the application and issues a decree (decreto).", documents: [] },
      { title: "Update Anagrafe", description: "Bring the decree to your municipality's Anagrafe (civil registry) to update your records.", documents: ["Prefect's decree", "Current documents"] },
      { title: "Update Documents", description: "Apply for new carta d'identità, codice fiscale, and other documents.", documents: ["Updated registry records"] }
    ],
    tips: [
      "Adding a name is easier than changing one entirely — consider adding your Muslim name",
      "UCOII (Union of Islamic Communities in Italy) can provide guidance and letters of support",
      "The 30-day posting period is mandatory but rarely results in objections",
      "A lawyer (avvocato) can help but is not required",
      "Processing times vary significantly by prefecture"
    ],
    resources: [
      { title: "Ministero dell'Interno", url: "https://www.interno.gov.it" },
      { title: "UCOII", url: "https://www.ucoii.org" }
    ],
    religiousExemptions: "Italian law does not specify religious conversion as a category, but it falls under 'legitimate reasons' for name changes. Court precedent supports religious name changes.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bangladesh",
    countryCode: "BD",
    flag: "🇧🇩",
    overview: "Bangladesh handles name changes through an affidavit and newspaper publication, followed by updating the National ID (NID) through the Election Commission. The process is simple and inexpensive.",
    estimatedCost: "BDT 500 - 3,000",
    estimatedCostUSD: [4, 25],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Execute Affidavit", description: "Get a notarized affidavit on judicial stamp paper declaring your old name, new name, and reason for change.", documents: ["Notarized affidavit", "NID card"] },
      { title: "Publish in Newspaper", description: "Publish a name change notice in a national Bengali newspaper.", documents: ["Newspaper publication proof"] },
      { title: "Update NID", description: "Apply to the Election Commission to update your National ID card with the new name.", documents: ["Affidavit", "Newspaper cutting", "Old NID"] },
      { title: "Update Other Documents", description: "Update passport, bank accounts, and other records using the new NID.", documents: ["Updated NID", "Affidavit"] }
    ],
    tips: [
      "The process is very straightforward in Bangladesh as a Muslim-majority country",
      "Many local magistrate courts handle the affidavit quickly",
      "Update NID first — all other agencies accept NID as primary proof",
      "The Islamic Foundation Bangladesh can assist with conversion documentation"
    ],
    resources: [
      { title: "Election Commission Bangladesh", url: "https://www.ecs.gov.bd" },
      { title: "Passport Office", url: "https://www.dip.gov.bd" }
    ],
    religiousExemptions: "As a Muslim-majority country, Bangladesh is very accommodating of Islamic name changes. No special religious documentation is required beyond the standard affidavit process.",
    lastUpdated: "2026-02"
  },
  {
    country: "Singapore",
    countryCode: "SG",
    flag: "🇸🇬",
    overview: "Singapore handles name changes through the Immigration & Checkpoints Authority (ICA). The process is efficient and can be completed online through the ICA's e-services portal.",
    estimatedCost: "SGD $25 - $100",
    estimatedCostUSD: [19, 75],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Apply Online via ICA", description: "Submit a name change application through ICA's e-services portal or visit an ICA office.", documents: ["NRIC", "Supporting documents"] },
      { title: "Provide Supporting Documents", description: "Include your current NRIC, birth certificate, and any supporting documentation for the change.", documents: ["Birth certificate", "NRIC", "Deed poll (if applicable)"] },
      { title: "Pay Fee", description: "Pay the processing fee (SGD $25 for first name, $50-$100 for surname).", documents: ["Fee payment"] },
      { title: "Receive Updated NRIC", description: "Collect your new NRIC with the updated name.", documents: ["New NRIC"] }
    ],
    tips: [
      "Online applications via SingPass are processed fastest",
      "MUIS (Islamic Religious Council of Singapore) can provide guidance",
      "Singapore is very efficient — expect fast processing",
      "Update your NRIC first, then passport and other documents follow"
    ],
    resources: [
      { title: "ICA Singapore", url: "https://www.ica.gov.sg" },
      { title: "MUIS", url: "https://www.muis.gov.sg" }
    ],
    religiousExemptions: "Singapore accepts all reasons for name changes without requiring justification. The multi-religious society means authorities are familiar with religious name changes.",
    lastUpdated: "2026-02"
  },
  {
    country: "Morocco",
    countryCode: "MA",
    flag: "🇲🇦",
    overview: "Morocco handles name changes through the Civil Court (Tribunal de première instance). The process requires a court petition and is governed by Morocco's Family Code (Moudawwana).",
    estimatedCost: "MAD 200 - 1,000",
    estimatedCostUSD: [20, 100],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Prepare Court Petition", description: "Draft a petition to the Tribunal de première instance explaining the name change request.", documents: ["Petition", "CIN (national ID)", "Birth certificate (acte de naissance)"] },
      { title: "File at Court", description: "Submit the petition to the court in your jurisdiction with all supporting documents.", documents: ["Petition", "Supporting documents", "Court fees"] },
      { title: "Court Hearing", description: "Attend a hearing where the judge reviews the petition. Religious reasons are well-accepted.", documents: ["Photo ID"] },
      { title: "Update État Civil", description: "After court approval, update your civil registry records and obtain new CIN.", documents: ["Court judgment", "Old CIN"] }
    ],
    tips: [
      "Morocco has specific Amazigh/Arabic name lists that may guide choices",
      "A lawyer (avocat) is recommended but not always required",
      "As an Islamic country, religious name changes are well-understood",
      "The Habous Ministry can provide supporting documentation"
    ],
    resources: [
      { title: "Ministère de la Justice", url: "https://www.justice.gov.ma" },
      { title: "DGSN - National Security", url: "https://www.dgsn.gov.ma" }
    ],
    religiousExemptions: "Morocco, as an Islamic kingdom, strongly supports religious name changes. The Family Code (Moudawwana) provides a framework that accommodates Islamic naming conventions.",
    lastUpdated: "2026-02"
  },
  {
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    overview: "Japan requires a Family Court (家庭裁判所) petition for name changes. The court must find 'justifiable reason' (正当な事由). Religious conversion is generally accepted, though Japan has stricter standards than many countries.",
    estimatedCost: "¥800 - ¥5,000",
    estimatedCostUSD: [5, 33],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Prepare Family Court Petition", description: "File a petition (名の変更許可申立書) at your local Family Court (家庭裁判所).", documents: ["Petition form", "Koseki tohon (family register)", "Jūminhyō (residence certificate)"] },
      { title: "Provide Justification", description: "Explain the reason for the change. Include evidence that you have been using the new name (tsūshō 通称名).", documents: ["Evidence of use (mail, contracts, etc.)", "Conversion documentation"] },
      { title: "Court Review", description: "The court reviews your case. Having used the name as a tsūshō (commonly used name) strengthens the application.", documents: [] },
      { title: "Update Koseki", description: "After approval, update your family register (koseki) at your municipal office.", documents: ["Court approval", "Koseki"] },
      { title: "Update Residence Card", description: "Update your jūminhyō and other documents at the municipal office.", documents: ["Updated koseki", "Current ID"] }
    ],
    tips: [
      "Using your Muslim name as a tsūshō (common name) before filing greatly strengthens your case",
      "Courts look for evidence you've been using the name for at least a year",
      "The Japan Muslim Association can provide support and documentation",
      "Foreign residents may find it easier through their embassy first",
      "Court filing fees are very low (around ¥800)"
    ],
    resources: [
      { title: "Courts of Japan", url: "https://www.courts.go.jp" },
      { title: "Japan Muslim Association", url: "https://www.muslimassociation.or.jp" }
    ],
    religiousExemptions: "Japanese courts accept religious conversion as a 'justifiable reason' (正当な事由) for name changes, but typically require evidence that you have been using the new name in daily life (tsūshō) before granting the change.",
    lastUpdated: "2026-02"
  },
  {
    country: "Brazil",
    countryCode: "BR",
    flag: "🇧🇷",
    overview: "Brazil allows first name changes through the Civil Registry (Cartório de Registro Civil). Since 2022, adults can change their first name once at any registry office without needing a court order.",
    estimatedCost: "R$0 - R$500",
    estimatedCostUSD: [0, 85],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "easy",
    steps: [
      { title: "Visit a Cartório de Registro Civil", description: "Go to any civil registry office (cartório) to request a first name change. Since 2022, no court order is needed for one change.", documents: ["RG or CNH", "CPF", "Birth certificate"] },
      { title: "Submit Declaration", description: "Fill out a declaration form stating your old name, new name, and reason for the change.", documents: ["Declaration form", "Fee payment"] },
      { title: "Wait for Processing", description: "The cartório processes the change and updates the civil registry.", documents: [] },
      { title: "Update CPF and Other Documents", description: "Update your CPF, RG, voter registration, and other documents with the new name.", documents: ["Updated birth certificate", "Old documents"] }
    ],
    tips: [
      "Since 2022, first name changes no longer require court approval (Law 14.382/2022)",
      "You can only use this simplified process once — choose carefully",
      "CDIAL (Centro Dawah Islâmico da América Latina) can provide conversion certificates",
      "Brazil has South America's largest Muslim community, centered in São Paulo",
      "Update CPF first as most agencies require it"
    ],
    resources: [
      { title: "Cartórios Brasil", url: "https://www.registrocivil.org.br" },
      { title: "Receita Federal - CPF", url: "https://www.gov.br/receitafederal" }
    ],
    religiousExemptions: "Brazilian law does not require a specific reason for the first name change (since 2022). Religious conversion is accepted without question. Surname changes still require a court order.",
    lastUpdated: "2026-02"
  },
  {
    country: "Kenya",
    countryCode: "KE",
    flag: "🇰🇪",
    overview: "Kenya handles name changes through the Registrar of Persons and the Kenya Gazette. The process involves a deed poll and Gazette publication, similar to British common law systems.",
    estimatedCost: "KES 1,000 - 5,000",
    estimatedCostUSD: [8, 39],
    estimatedTimeline: "4 - 10 weeks",
    estimatedTimelineWeeks: [4, 10],
    difficulty: "moderate",
    steps: [
      { title: "Execute a Deed Poll", description: "Prepare and sign a deed poll document before a Commissioner for Oaths or advocate.", documents: ["Deed poll", "Current ID", "Passport photos"] },
      { title: "Publish in Kenya Gazette", description: "Submit the name change notice for publication in the Kenya Gazette.", documents: ["Gazette application", "Deed poll copy", "Fee"] },
      { title: "Apply for New ID", description: "Apply at Huduma Centre or registration office for a new national ID card with the new name.", documents: ["Gazette notice", "Deed poll", "Old ID"] },
      { title: "Update Other Documents", description: "Update passport, KRA PIN, NHIF, NSSF, and bank accounts.", documents: ["New ID", "Gazette notice"] }
    ],
    tips: [
      "The Supreme Council of Kenya Muslims (SUPKEM) can facilitate the process",
      "Gazette publication takes about 2-3 weeks",
      "Huduma Centres offer one-stop government services",
      "Kenya's significant Muslim population (especially on the coast) means the process is well-understood"
    ],
    resources: [
      { title: "Kenya Gazette", url: "https://www.kenyagazette.or.ke" },
      { title: "Immigration & Registration", url: "https://immigration.go.ke" }
    ],
    religiousExemptions: "Kenya accepts religious conversion as a valid reason for name changes. With a significant Muslim minority, authorities in coastal regions and urban centers are very familiar with the process.",
    lastUpdated: "2026-02"
  },
  {
    country: "Jordan",
    countryCode: "JO",
    flag: "🇯🇴",
    overview: "Jordan handles name changes through the Civil Status and Passports Department (دائرة الأحوال المدنية والجوازات). For converts to Islam, the Sharia Court issues a conversion certificate that facilitates the process.",
    estimatedCost: "JOD 5 - 50",
    estimatedCostUSD: [7, 71],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Obtain Conversion Certificate", description: "Visit a Sharia Court (المحكمة الشرعية) to officially register your conversion and receive a certificate (إشهار إسلام).", documents: ["Conversion certificate", "Current ID"] },
      { title: "Apply at Civil Status Department", description: "Submit name change application to the Civil Status and Passports Department.", documents: ["Conversion certificate", "National ID", "Family book (دفتر العائلة)"] },
      { title: "Receive Updated Documents", description: "Obtain your updated national ID and family book with the new name.", documents: ["Updated ID"] }
    ],
    tips: [
      "Sharia Courts are located in every governorate",
      "The process is very fast as Jordan is an Islamic country",
      "Update your passport separately at the Passport Department"
    ],
    resources: [
      { title: "Civil Status Department", url: "https://www.cspd.gov.jo" }
    ],
    religiousExemptions: "Jordan strongly supports religious name changes. Sharia Courts provide conversion certificates that are universally accepted by civil authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Iraq",
    countryCode: "IQ",
    flag: "🇮🇶",
    overview: "Iraq handles name changes through the Civil Affairs Court and the Directorate of Civil Status (مديرية الأحوال المدنية). Religious conversion name changes are facilitated through Islamic courts.",
    estimatedCost: "IQD 25,000 - 100,000",
    estimatedCostUSD: [17, 68],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "moderate",
    steps: [
      { title: "Obtain Conversion Certificate", description: "Register your conversion at a local Islamic court or recognized religious authority.", documents: ["Conversion certificate"] },
      { title: "File at Civil Affairs Court", description: "Submit a petition to the Civil Affairs Court (محكمة الأحوال الشخصية) for the name change.", documents: ["Petition", "National ID (البطاقة الوطنية)", "Conversion certificate"] },
      { title: "Court Decision", description: "The court reviews and issues a decision, typically approving religious name changes quickly.", documents: ["Court decision"] },
      { title: "Update Civil Status Records", description: "Take the court decision to the Directorate of Civil Status to update your national records.", documents: ["Court decision", "Old ID"] }
    ],
    tips: [
      "The process varies between federal Iraq and the Kurdistan Region",
      "Religious name changes are prioritized and processed faster",
      "Update your national ID first, then passport and other documents"
    ],
    resources: [
      { title: "Iraqi Ministry of Interior", url: "https://www.moi.gov.iq" }
    ],
    religiousExemptions: "Iraq, as a Muslim-majority country, strongly supports Islamic name changes. Courts routinely approve conversion-related name changes with minimal delay.",
    lastUpdated: "2026-02"
  },
  {
    country: "Kuwait",
    countryCode: "KW",
    flag: "🇰🇼",
    overview: "Kuwait handles name changes through the Ministry of Justice and the Public Authority for Civil Information (PACI). Converts receive support from the Ministry of Awqaf and Islamic Affairs.",
    estimatedCost: "KWD 2 - 20",
    estimatedCostUSD: [7, 65],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Register Conversion", description: "Visit the Ministry of Awqaf and Islamic Affairs to register your conversion and obtain a certificate.", documents: ["Conversion certificate"] },
      { title: "Apply at PACI", description: "Submit the name change application to the Public Authority for Civil Information.", documents: ["Conversion certificate", "Civil ID", "Passport"] },
      { title: "Receive Updated Civil ID", description: "Collect your new civil ID with the updated name.", documents: ["New civil ID"] }
    ],
    tips: [
      "The Ministry of Awqaf has a dedicated department for new Muslims",
      "Kuwait actively supports and facilitates conversion-related processes",
      "For expatriates, coordinate with your sponsor"
    ],
    resources: [
      { title: "PACI Kuwait", url: "https://www.paci.gov.kw" },
      { title: "Ministry of Awqaf", url: "https://www.awqaf.gov.kw" }
    ],
    religiousExemptions: "Kuwait actively encourages and supports Islamic name changes. The Ministry of Awqaf provides comprehensive support for converts including name change facilitation.",
    lastUpdated: "2026-02"
  },
  {
    country: "Qatar",
    countryCode: "QA",
    flag: "🇶🇦",
    overview: "Qatar handles name changes through the Ministry of Interior's General Directorate of Passports. The Qatar Foundation for Islamic Call provides conversion certificates and support for new Muslims.",
    estimatedCost: "QAR 50 - 200",
    estimatedCostUSD: [14, 55],
    estimatedTimeline: "1 - 3 weeks",
    estimatedTimelineWeeks: [1, 3],
    difficulty: "easy",
    steps: [
      { title: "Obtain Conversion Certificate", description: "Register at the Fanar Islamic Center or Qatar Foundation for Islamic Call to receive your conversion certificate.", documents: ["Conversion certificate"] },
      { title: "Apply at Ministry of Interior", description: "Submit name change application through the MOI's e-services portal or in person.", documents: ["Conversion certificate", "QID", "Passport"] },
      { title: "Receive Updated QID", description: "Collect your updated Qatar ID with the new name.", documents: ["Updated QID"] }
    ],
    tips: [
      "Fanar Islamic Center is the primary center for new Muslims in Qatar",
      "The process is efficient and well-supported",
      "Expatriates should update their residency permit alongside the QID"
    ],
    resources: [
      { title: "MOI Qatar", url: "https://portal.moi.gov.qa" },
      { title: "Fanar Islamic Center", url: "https://www.fanar.gov.qa" }
    ],
    religiousExemptions: "Qatar provides excellent support for new Muslims. Fanar Islamic Center offers comprehensive post-conversion services including name change guidance.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bahrain",
    countryCode: "BH",
    flag: "🇧🇭",
    overview: "Bahrain processes name changes through the Information & eGovernment Authority (iGA) and the Ministry of Justice. Converts can get support from the Ministry of Justice, Islamic Affairs and Endowments.",
    estimatedCost: "BHD 2 - 15",
    estimatedCostUSD: [5, 40],
    estimatedTimeline: "1 - 3 weeks",
    estimatedTimelineWeeks: [1, 3],
    difficulty: "easy",
    steps: [
      { title: "Register Conversion", description: "Register with the Ministry of Justice, Islamic Affairs and Endowments to obtain your conversion certificate.", documents: ["Conversion certificate"] },
      { title: "Apply via iGA", description: "Submit your name change application through the National Portal (bahrain.bh) or visit the iGA.", documents: ["Conversion certificate", "CPR smart card", "Passport"] },
      { title: "Receive Updated CPR", description: "Collect your updated Central Population Registration smart card.", documents: ["New CPR"] }
    ],
    tips: [
      "Bahrain's e-government services make the process very efficient",
      "The Discovery Islam Center provides guidance for new Muslims",
      "CPR updates automatically sync with most government systems"
    ],
    resources: [
      { title: "Bahrain National Portal", url: "https://www.bahrain.bh" }
    ],
    religiousExemptions: "Bahrain supports religious name changes through its Islamic Affairs ministry. The process is streamlined and efficient.",
    lastUpdated: "2026-02"
  },
  {
    country: "Oman",
    countryCode: "OM",
    flag: "🇴🇲",
    overview: "Oman handles name changes through the Royal Oman Police (Civil Status department). The Ministry of Endowments and Religious Affairs provides conversion certificates for new Muslims.",
    estimatedCost: "OMR 2 - 20",
    estimatedCostUSD: [5, 52],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Register Conversion", description: "Visit the Ministry of Endowments and Religious Affairs to register your conversion and receive a certificate.", documents: ["Conversion certificate"] },
      { title: "Apply at ROP Civil Status", description: "Submit a name change application to the Royal Oman Police Civil Status department.", documents: ["Conversion certificate", "Civil ID", "Passport"] },
      { title: "Receive Updated ID", description: "Receive your updated civil ID card with the new name.", documents: ["Updated civil ID"] }
    ],
    tips: [
      "The Ministry of Endowments has offices in all governorates",
      "Oman is very welcoming to converts and facilitates the process",
      "Expatriates should update their residency alongside the name change"
    ],
    resources: [
      { title: "Royal Oman Police", url: "https://www.rop.gov.om" }
    ],
    religiousExemptions: "Oman, as an Islamic country, fully supports and facilitates name changes for new Muslims. The process is streamlined and well-supported.",
    lastUpdated: "2026-02"
  },
  {
    country: "Lebanon",
    countryCode: "LB",
    flag: "🇱🇧",
    overview: "Lebanon handles name changes through the Personal Status Court system. Since Lebanon has separate religious courts for different sects, converts to Islam register through the Sunni or Shia Personal Status Court (المحكمة الشرعية).",
    estimatedCost: "LBP 500,000 - 5,000,000",
    estimatedCostUSD: [6, 56],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Register at Sharia Court", description: "Register your conversion at the relevant Sharia Court (Sunni or Shia) to receive official documentation.", documents: ["Conversion declaration", "ID"] },
      { title: "Apply at Nufous (Civil Registry)", description: "Submit name change application to the Directorate General of Personal Status (النفوس).", documents: ["Sharia Court documentation", "Current ID", "Family record (إخراج قيد)"] },
      { title: "Court Approval", description: "The civil judge reviews and approves the registry change.", documents: ["Court decision"] },
      { title: "Update ID and Records", description: "Obtain updated ID and civil registry records.", documents: ["Updated documents"] }
    ],
    tips: [
      "Lebanon's sectarian system means the process involves both religious and civil authorities",
      "Dar al-Fatwa handles Sunni conversions; the Supreme Islamic Shia Council handles Shia",
      "A lawyer familiar with personal status law is recommended"
    ],
    resources: [
      { title: "Dar al-Fatwa", url: "https://www.darelfatwa.gov.lb" }
    ],
    religiousExemptions: "Lebanon's multi-confessional system means religious changes are handled through specific religious courts. The process is established but involves both religious and civil steps.",
    lastUpdated: "2026-02"
  },
  {
    country: "Iran",
    countryCode: "IR",
    flag: "🇮🇷",
    overview: "Iran processes name changes through the Civil Registration Organization (سازمان ثبت احوال). As an Islamic republic, the process is straightforward for Islamic names, though there are approved name lists.",
    estimatedCost: "IRR 500,000 - 2,000,000",
    estimatedCostUSD: [1, 5],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "moderate",
    steps: [
      { title: "Check Approved Names", description: "Verify your desired name is on the Civil Registration Organization's approved list. Islamic names are generally always approved.", documents: [] },
      { title: "Apply at Civil Registration Office", description: "Submit an application to the local Civil Registration Office (اداره ثبت احوال).", documents: ["Birth certificate (شناسنامه)", "National ID card (کارت ملی)"] },
      { title: "Committee Review", description: "The application is reviewed by a committee that verifies the name meets cultural and religious criteria.", documents: [] },
      { title: "Receive Updated Documents", description: "Obtain updated shenasnameh (birth certificate) and national ID.", documents: ["Updated shenasnameh", "New national ID"] }
    ],
    tips: [
      "Iran maintains an approved name list — most Arabic and Persian Islamic names are on it",
      "The process is straightforward for names with clear Islamic significance",
      "First name changes are easier to obtain than surname changes",
      "Local mosque imams can provide letters of support"
    ],
    resources: [
      { title: "Civil Registration Organization", url: "https://www.sabteahval.ir" }
    ],
    religiousExemptions: "Iran, as an Islamic republic, strongly supports Islamic name changes. Names with clear Quranic or Islamic significance are routinely approved.",
    lastUpdated: "2026-02"
  },
  {
    country: "Afghanistan",
    countryCode: "AF",
    flag: "🇦🇫",
    overview: "Afghanistan handles name changes through the Population Registration Authority (NSIA) and tazkira (national ID) system. As an Islamic country, religious name changes are well-understood.",
    estimatedCost: "AFN 100 - 500",
    estimatedCostUSD: [1, 7],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "moderate",
    steps: [
      { title: "Visit NSIA Office", description: "Go to your local National Statistics and Information Authority (NSIA) office.", documents: ["Current tazkira", "Supporting documents"] },
      { title: "Submit Application", description: "Fill out the name change form with supporting documentation.", documents: ["Application form", "Tazkira", "Community elder or mullah letter"] },
      { title: "Receive Updated Tazkira", description: "Obtain your updated tazkira with the new name.", documents: ["Updated tazkira"] }
    ],
    tips: [
      "A letter from a local mullah or mosque is very helpful",
      "Processing times vary significantly by region",
      "The process is generally straightforward for Islamic names"
    ],
    resources: [
      { title: "NSIA Afghanistan", url: "https://www.nsia.gov.af" }
    ],
    religiousExemptions: "Afghanistan, as an Islamic country, fully supports religious name changes. Local religious authorities can facilitate the process.",
    lastUpdated: "2026-02"
  },
  {
    country: "Philippines",
    countryCode: "PH",
    flag: "🇵🇭",
    overview: "The Philippines allows name changes through a court petition (Rule 103, Rules of Court) or administratively through the Philippine Statistics Authority (PSA) for clerical corrections. RA 9048 allows first name changes without court order.",
    estimatedCost: "PHP 3,000 - 15,000",
    estimatedCostUSD: [54, 268],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "File Administrative Petition (RA 9048)", description: "For first name changes, file a petition with the Local Civil Registrar under Republic Act 9048.", documents: ["PSA birth certificate", "Valid ID", "Petition form"] },
      { title: "Provide Supporting Documents", description: "Include documents showing your use of the new name and reason for change.", documents: ["Baptismal/conversion certificate", "School records", "Employment records"] },
      { title: "Publication Requirement", description: "The petition is published in a newspaper of general circulation once a week for two consecutive weeks.", documents: ["Publication proof"] },
      { title: "LCRO Decision", description: "The Local Civil Registrar's Office issues a decision.", documents: ["LCRO decision"] },
      { title: "PSA Update", description: "The approved change is forwarded to the PSA for updating the civil registry.", documents: ["Updated PSA certificate"] }
    ],
    tips: [
      "RA 9048 (2001) eliminated the need for court orders for most first name changes",
      "The National Commission on Muslim Filipinos (NCMF) can provide guidance",
      "Mindanao and BARMM have established Islamic legal infrastructure",
      "A certificate from an imam or Islamic center is helpful supporting documentation"
    ],
    resources: [
      { title: "Philippine Statistics Authority", url: "https://psa.gov.ph" },
      { title: "NCMF", url: "https://www.ncmf.gov.ph" }
    ],
    religiousExemptions: "The Philippines accepts religious conversion as a valid ground for name changes. The BARMM (Bangsamoro Autonomous Region) has additional Sharia-based processes for Muslim personal status matters.",
    lastUpdated: "2026-02"
  },
  {
    country: "Thailand",
    countryCode: "TH",
    flag: "🇹🇭",
    overview: "Thailand handles name changes through the District Office (Amphoe/สำนักงานเขต). Thai law allows one legal first name change and one surname change. The process is administered by the Department of Provincial Administration.",
    estimatedCost: "THB 50 - 500",
    estimatedCostUSD: [1, 14],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Visit District Office", description: "Go to your registered District Office (สำนักงานเขต/อำเภอ) with your current ID.", documents: ["Thai ID card (บัตรประชาชน)", "House registration (ทะเบียนบ้าน)"] },
      { title: "Submit Application", description: "Fill out the name change application form (แบบ ช.1).", documents: ["Application form", "Fee"] },
      { title: "Receive Approval", description: "The district registrar reviews and approves. First name changes are usually approved same day.", documents: ["Approval certificate"] },
      { title: "Update ID Card", description: "Get a new Thai ID card with the updated name.", documents: ["Updated ID card"] }
    ],
    tips: [
      "Thai law allows only one legal first name change — choose carefully",
      "The southern provinces (Yala, Pattani, Narathiwat) have dedicated Islamic affairs offices",
      "The Chularajmontri (Sheikh al-Islam of Thailand) office can provide guidance",
      "Processing is usually very fast — often same day"
    ],
    resources: [
      { title: "Department of Provincial Administration", url: "https://www.dopa.go.th" }
    ],
    religiousExemptions: "Thailand allows name changes without requiring a specific reason. The southern Muslim-majority provinces have additional Islamic administrative infrastructure.",
    lastUpdated: "2026-02"
  },
  {
    country: "Brunei",
    countryCode: "BN",
    flag: "🇧🇳",
    overview: "Brunei Darussalam handles name changes through the Immigration and National Registration Department. As an Islamic monarchy, the process for Islamic name changes is streamlined and fully supported.",
    estimatedCost: "BND 5 - 25",
    estimatedCostUSD: [4, 19],
    estimatedTimeline: "1 - 3 weeks",
    estimatedTimelineWeeks: [1, 3],
    difficulty: "easy",
    steps: [
      { title: "Obtain Conversion Certificate", description: "Register conversion with the Ministry of Religious Affairs (MoRA).", documents: ["Conversion certificate"] },
      { title: "Apply at Immigration Department", description: "Submit name change application to the Immigration and National Registration Department.", documents: ["Conversion certificate", "IC", "Supporting documents"] },
      { title: "Receive Updated IC", description: "Collect your updated identity card.", documents: ["New IC"] }
    ],
    tips: [
      "MoRA provides comprehensive support for new Muslims",
      "The process is very efficient in Brunei",
      "Brunei's Islamic legal system means full institutional support"
    ],
    resources: [
      { title: "Immigration Brunei", url: "https://www.immigration.gov.bn" }
    ],
    religiousExemptions: "Brunei, as an Islamic monarchy, fully facilitates and supports name changes for converts. The process is fast and well-supported.",
    lastUpdated: "2026-02"
  },
  {
    country: "Maldives",
    countryCode: "MV",
    flag: "🇲🇻",
    overview: "The Maldives handles name changes through the Department of National Registration. As a 100% Muslim nation, Islamic names are standard and the process is straightforward.",
    estimatedCost: "MVR 50 - 200",
    estimatedCostUSD: [3, 13],
    estimatedTimeline: "1 - 3 weeks",
    estimatedTimelineWeeks: [1, 3],
    difficulty: "easy",
    steps: [
      { title: "Apply at National Registration", description: "Submit name change application to the Department of National Registration.", documents: ["National ID card", "Birth certificate", "Application form"] },
      { title: "Receive Updated Documents", description: "Collect your updated ID with the new name.", documents: ["Updated ID"] }
    ],
    tips: [
      "As a Muslim-only nation, Islamic names are the norm",
      "The process is very simple and fast",
      "The Ministry of Islamic Affairs can provide guidance"
    ],
    resources: [
      { title: "National Registration", url: "https://www.dnr.gov.mv" }
    ],
    religiousExemptions: "The Maldives is a Muslim-only nation, so Islamic name changes are fully standard and require no special justification.",
    lastUpdated: "2026-02"
  },
  {
    country: "Norway",
    countryCode: "NO",
    flag: "🇳🇴",
    overview: "Norway handles name changes through the National Population Register (Folkeregisteret) administered by the Tax Administration (Skatteetaten). The Name Act (Navneloven) governs all name changes.",
    estimatedCost: "NOK 0 - 1,500",
    estimatedCostUSD: [0, 140],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Apply to Skatteetaten", description: "Submit a name change application through Skatteetaten's online portal or by mail.", documents: ["Application form", "National ID number (fødselsnummer)"] },
      { title: "Review Period", description: "Skatteetaten reviews the application. First name changes are generally processed without issue.", documents: [] },
      { title: "Receive Confirmation", description: "Once approved, the population register is updated automatically.", documents: ["Confirmation letter"] },
      { title: "Update ID Documents", description: "Apply for new passport and national ID card at the police station.", documents: ["Updated population register", "Old ID"] }
    ],
    tips: [
      "First name changes are free and require no justification",
      "Surname changes have more restrictions and may cost NOK 1,500",
      "Apply online through Altinn for fastest processing",
      "Islamic Council of Norway (IRN) can provide guidance"
    ],
    resources: [
      { title: "Skatteetaten - Name Change", url: "https://www.skatteetaten.no/en/person/national-registry/name/" }
    ],
    religiousExemptions: "Norway does not require a reason for first name changes. The process is simple and accessible for everyone including religious converts.",
    lastUpdated: "2026-02"
  },
  {
    country: "Denmark",
    countryCode: "DK",
    flag: "🇩🇰",
    overview: "Denmark handles name changes through the Ministry of Family Affairs (previously the Church Ministry for those in the Danish Church). The Names Act (Navneloven) governs the process.",
    estimatedCost: "DKK 0 - 3,000",
    estimatedCostUSD: [0, 420],
    estimatedTimeline: "2 - 12 weeks",
    estimatedTimelineWeeks: [2, 12],
    difficulty: "moderate",
    steps: [
      { title: "Apply Online", description: "Submit name change application through borger.dk (citizen portal) using NemID/MitID.", documents: ["CPR number", "Application"] },
      { title: "Provide Documentation", description: "Include any required documentation. First name changes may need to be from the approved list or justified.", documents: ["Supporting documentation"] },
      { title: "Ministry Review", description: "The Family Law Agency (Familieretshuset) reviews the application.", documents: [] },
      { title: "Update Documents", description: "Once approved, update passport and other documents.", documents: ["Updated CPR record", "Old documents"] }
    ],
    tips: [
      "Denmark has an approved first name list — Islamic names not on it require a special application",
      "Use borger.dk with MitID for the fastest processing",
      "Islamic Society in Denmark can provide guidance",
      "Surname changes are more complex than first name changes"
    ],
    resources: [
      { title: "Borger.dk - Name Change", url: "https://www.borger.dk/familie-og-boern/Navne/Navneaendring" },
      { title: "Familieretshuset", url: "https://familieretshuset.dk" }
    ],
    religiousExemptions: "Denmark evaluates name changes based on the Names Act. Religious names not on the approved list can still be approved through a special application process.",
    lastUpdated: "2026-02"
  },
  {
    country: "Finland",
    countryCode: "FI",
    flag: "🇫🇮",
    overview: "Finland handles name changes through the Digital and Population Data Services Agency (Digi- ja väestötietovirasto, DVV). The Names Act (Nimilaki) governs all name changes.",
    estimatedCost: "€0 - €60",
    estimatedCostUSD: [0, 65],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "easy",
    steps: [
      { title: "Apply to DVV", description: "Submit a name change application to DVV online through their e-services or in person.", documents: ["Application", "Personal identity code (henkilötunnus)"] },
      { title: "DVV Review", description: "DVV reviews the application against the Names Act requirements.", documents: [] },
      { title: "Receive Confirmation", description: "Once approved, the population information system is updated.", documents: ["Confirmation"] },
      { title: "Update Documents", description: "Apply for new passport and ID at the police.", documents: ["Updated population register record"] }
    ],
    tips: [
      "First name changes cost around €60; one free change per year for forenames",
      "Apply online through suomi.fi for fastest processing",
      "Finnish Islamic Council (SINE) can provide guidance",
      "Finland's Names Act is relatively liberal for first name changes"
    ],
    resources: [
      { title: "DVV - Name Change", url: "https://dvv.fi/en/name-change" }
    ],
    religiousExemptions: "Finland does not require a specific reason for first name changes. Religious conversion is fully accepted as a basis for name changes.",
    lastUpdated: "2026-02"
  },
  {
    country: "Belgium",
    countryCode: "BE",
    flag: "🇧🇪",
    overview: "Belgium handles first name changes through the civil registrar at your municipal hall (commune/gemeente). Surname changes require a royal decree from the Ministry of Justice.",
    estimatedCost: "€0 - €590",
    estimatedCostUSD: [0, 643],
    estimatedTimeline: "4 - 24 weeks",
    estimatedTimelineWeeks: [4, 24],
    difficulty: "moderate",
    steps: [
      { title: "Apply at Municipality", description: "For first name changes, submit an application at your commune/gemeente.", documents: ["Identity card", "Birth certificate", "Application letter"] },
      { title: "Provide Justification", description: "Explain your reason for the change. Religious conversion is an accepted reason.", documents: ["Personal statement", "Conversion documentation (optional)"] },
      { title: "Registrar Decision", description: "The civil registrar reviews and decides. Appeals go to the family court.", documents: [] },
      { title: "Update Documents", description: "Once approved, obtain new identity card and update other records.", documents: ["Updated civil registry", "Old eID"] }
    ],
    tips: [
      "First name changes were simplified by a 2018 law reform",
      "The Exécutif des Musulmans de Belgique can provide conversion certificates",
      "Brussels, Antwerp, and Liège have large Muslim communities with experienced advisors",
      "Surname changes are much more complex and expensive (€590)"
    ],
    resources: [
      { title: "Belgium.be - Name Change", url: "https://www.belgium.be" },
      { title: "SPF Justice", url: "https://justice.belgium.be" }
    ],
    religiousExemptions: "Belgian law accepts religious conversion as a valid reason for first name changes since the 2018 reform. The process has been significantly simplified.",
    lastUpdated: "2026-02"
  },
  {
    country: "Switzerland",
    countryCode: "CH",
    flag: "🇨🇭",
    overview: "Switzerland handles name changes at the cantonal level through the civil registry authority (Zivilstandsamt). The Swiss Civil Code (ZGB Art. 30) requires 'important reasons' (wichtige Gründe) for name changes.",
    estimatedCost: "CHF 75 - 1,500",
    estimatedCostUSD: [85, 1700],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "complex",
    steps: [
      { title: "Apply to Cantonal Authority", description: "Submit a name change petition to the civil registry authority (Zivilstandsamt) of your canton of residence.", documents: ["Application", "Swiss ID/passport or residence permit", "Birth certificate"] },
      { title: "Provide Important Reasons", description: "Demonstrate 'important reasons' (wichtige Gründe) for the change. Religious conversion qualifies.", documents: ["Personal statement", "Conversion certificate", "Supporting letters"] },
      { title: "Cantonal Government Decision", description: "The cantonal government reviews and decides on the application.", documents: [] },
      { title: "Update Civil Registry", description: "Once approved, the civil registry is updated and you can obtain new documents.", documents: ["Updated registry", "Old documents"] }
    ],
    tips: [
      "Requirements and costs vary significantly between cantons",
      "German-speaking cantons tend to be more formal; French-speaking cantons may be more flexible",
      "FIDS (Fédération d'organisations islamiques en Suisse) can provide guidance",
      "A lawyer is recommended due to the 'important reasons' requirement"
    ],
    resources: [
      { title: "Swiss Civil Registry", url: "https://www.bj.admin.ch/bj/de/home/gesellschaft/zivilstandswesen.html" }
    ],
    religiousExemptions: "Swiss law requires 'important reasons' (wichtige Gründe) for name changes. Federal court precedent recognizes religious conversion as qualifying, though application varies by canton.",
    lastUpdated: "2026-02"
  },
  {
    country: "Austria",
    countryCode: "AT",
    flag: "🇦🇹",
    overview: "Austria handles name changes through the district authority (Bezirkshauptmannschaft) or municipality. The Name Change Act (Namensänderungsgesetz) requires a valid reason for changes.",
    estimatedCost: "€14 - €400",
    estimatedCostUSD: [15, 436],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Apply at District Authority", description: "Submit a name change application to your local Bezirkshauptmannschaft or Magistrat.", documents: ["Application form", "Birth certificate", "Meldezettel (registration)", "ID"] },
      { title: "Provide Justification", description: "Demonstrate a valid reason for the change. Religious conversion is accepted.", documents: ["Personal statement", "Conversion documentation"] },
      { title: "Authority Decision", description: "The authority reviews and issues a decision (Bescheid).", documents: ["Bescheid"] },
      { title: "Update Documents", description: "Update your civil registry records, ID, and passport.", documents: ["Bescheid", "Old documents"] }
    ],
    tips: [
      "Austria officially recognizes Islam (IGGÖ is the official Islamic body)",
      "A letter from IGGÖ strengthens your application significantly",
      "First name changes are generally easier than surname changes",
      "Vienna has the largest Muslim community and experienced administrators"
    ],
    resources: [
      { title: "HELP.gv.at - Name Change", url: "https://www.help.gv.at" },
      { title: "IGGÖ", url: "https://www.derislam.at" }
    ],
    religiousExemptions: "Austria has officially recognized Islam since 1912 (Islamgesetz). Religious conversion through IGGÖ is a well-established basis for name changes.",
    lastUpdated: "2026-02"
  },
  {
    country: "Ireland",
    countryCode: "IE",
    flag: "🇮🇪",
    overview: "Ireland allows name changes through a deed poll, similar to the UK. No court order is needed. The process is straightforward — execute a deed poll and update your records.",
    estimatedCost: "€0 - €60",
    estimatedCostUSD: [0, 65],
    estimatedTimeline: "1 - 4 weeks",
    estimatedTimelineWeeks: [1, 4],
    difficulty: "easy",
    steps: [
      { title: "Create Deed Poll", description: "Prepare a deed poll document stating your old name, new name, and intention to use only the new name.", documents: ["Deed poll document"] },
      { title: "Sign and Witness", description: "Sign the deed poll before two independent witnesses over 18.", documents: ["Signed deed poll"] },
      { title: "Enrol (Optional)", description: "Optionally enrol the deed poll with the Central Office of the High Court for €60.", documents: ["Deed poll", "Fee"] },
      { title: "Update Documents", description: "Use the deed poll to update passport, driver licence, PPS records, Revenue, and bank accounts.", documents: ["Deed poll", "Current documents"] }
    ],
    tips: [
      "An unenrolled deed poll is sufficient for most purposes including passports",
      "Islamic Foundation of Ireland can provide guidance and witness support",
      "Ireland has a growing Muslim community with experienced advisors",
      "Make multiple copies of your deed poll before distributing"
    ],
    resources: [
      { title: "Citizens Information", url: "https://www.citizensinformation.ie/en/birth-family-relationships/problems-in-marriages-and-other-relationships/changing-your-name/" },
      { title: "Courts Service", url: "https://www.courts.ie" }
    ],
    religiousExemptions: "Ireland does not require any reason for name changes via deed poll. The process is simple and accessible for everyone.",
    lastUpdated: "2026-02"
  },
  {
    country: "Portugal",
    countryCode: "PT",
    flag: "🇵🇹",
    overview: "Portugal handles name changes through the Civil Registry (Registo Civil). Changes are governed by the Civil Registry Code. First name changes require authorization from the IRN (Instituto dos Registos e do Notariado).",
    estimatedCost: "€0 - €200",
    estimatedCostUSD: [0, 218],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Submit Request to Civil Registry", description: "Apply at your local Conservatória do Registo Civil or Loja do Cidadão.", documents: ["Citizen card (CC)", "Birth certificate", "Application"] },
      { title: "Provide Justification", description: "Include a written explanation. Religious conversion is an accepted reason.", documents: ["Personal statement", "Conversion documentation"] },
      { title: "IRN Review", description: "The Instituto dos Registos e do Notariado reviews and decides.", documents: [] },
      { title: "Update Documents", description: "Once approved, update citizen card, passport, and other records.", documents: ["Updated civil registry", "Old documents"] }
    ],
    tips: [
      "Loja do Cidadão offices offer one-stop government services",
      "Comunidade Islâmica de Lisboa can provide conversion documentation",
      "The process has been modernized through digital services",
      "Portuguese names have specific rules about given names — Islamic names may need approval"
    ],
    resources: [
      { title: "IRN", url: "https://www.irn.mj.pt" },
      { title: "ePortugal", url: "https://eportugal.gov.pt" }
    ],
    religiousExemptions: "Portuguese law accepts religious conversion as grounds for name changes. The Islamic Community of Lisbon (Comunidade Islâmica de Lisboa) is officially recognized.",
    lastUpdated: "2026-02"
  },
  {
    country: "Poland",
    countryCode: "PL",
    flag: "🇵🇱",
    overview: "Poland handles name changes through the head of the civil registry office (kierownik urzędu stanu cywilnego). The Act on Changing First and Last Names requires an 'important reason' for changes.",
    estimatedCost: "PLN 37",
    estimatedCostUSD: [9, 9],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "moderate",
    steps: [
      { title: "Apply at Civil Registry", description: "Submit a name change application (wniosek o zmianę imienia/nazwiska) to the civil registry office.", documents: ["Application form", "Dowód osobisty (ID)", "Birth certificate"] },
      { title: "Provide Important Reason", description: "State your 'important reason' (ważny powód) for the change. Religious conversion qualifies.", documents: ["Personal statement", "Conversion documentation"] },
      { title: "Registrar Decision", description: "The head of the civil registry reviews and issues an administrative decision.", documents: ["Decision"] },
      { title: "Update Documents", description: "Update dowód osobisty (ID), PESEL records, and other documents.", documents: ["Decision", "Old ID"] }
    ],
    tips: [
      "The fee is fixed at PLN 37 regardless of the type of change",
      "Muslim Religious Union in Poland (MZR) is officially recognized and can provide documentation",
      "Appeals go to the provincial governor (wojewoda)",
      "Processing is usually faster in larger cities with more experience"
    ],
    resources: [
      { title: "ePUAP - Government Portal", url: "https://epuap.gov.pl" }
    ],
    religiousExemptions: "Polish law accepts religious conversion as an 'important reason' for name changes. The Muslim Religious Union in Poland (MZR) has been officially recognized since 1936.",
    lastUpdated: "2026-02"
  },
  {
    country: "Greece",
    countryCode: "GR",
    flag: "🇬🇷",
    overview: "Greece handles name changes through the court system. A petition to the Court of First Instance is required. Greece also has a recognized Muslim minority in Western Thrace with special provisions.",
    estimatedCost: "€50 - €300",
    estimatedCostUSD: [55, 327],
    estimatedTimeline: "8 - 24 weeks",
    estimatedTimelineWeeks: [8, 24],
    difficulty: "complex",
    steps: [
      { title: "File Court Petition", description: "Submit a petition to the Court of First Instance (Πρωτοδικείο) in your district.", documents: ["Petition", "Birth certificate", "ID card", "Criminal record certificate"] },
      { title: "Court Hearing", description: "Attend a hearing where the judge reviews the petition.", documents: ["Photo ID", "Supporting documents"] },
      { title: "Court Decision", description: "The court issues a decision. If approved, it's sent to the civil registry.", documents: ["Court decision"] },
      { title: "Update Civil Registry", description: "Present the court decision to your municipality to update records.", documents: ["Court decision", "Old ID"] }
    ],
    tips: [
      "A lawyer is recommended for court proceedings",
      "Western Thrace has a recognized Muslim minority with established processes",
      "Athens and Thessaloniki have growing Muslim communities",
      "The process can be lengthy — plan accordingly"
    ],
    resources: [
      { title: "Ministry of Interior", url: "https://www.ypes.gr" }
    ],
    religiousExemptions: "Greek courts can accept religious conversion as grounds for name changes. The Muslim minority in Western Thrace has specific legal provisions for personal status matters.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bosnia and Herzegovina",
    countryCode: "BA",
    flag: "🇧🇦",
    overview: "Bosnia and Herzegovina handles name changes through the municipal civil registry office (matičar). As a country with a large Muslim population, the process for Islamic names is well-established.",
    estimatedCost: "BAM 10 - 50",
    estimatedCostUSD: [5, 26],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Apply at Municipal Office", description: "Submit a name change application to the municipal civil registry office (općina/opština).", documents: ["Application", "Birth certificate (izvod iz matične knjige)", "ID (lična karta)"] },
      { title: "Registrar Review", description: "The civil registrar reviews the application.", documents: [] },
      { title: "Receive Updated Documents", description: "Obtain updated birth certificate and apply for new ID.", documents: ["Updated birth certificate", "New ID"] }
    ],
    tips: [
      "The Islamic Community of Bosnia (Islamska zajednica) can provide guidance",
      "The process is straightforward, especially in the Federation entity",
      "Bosnian Muslim names (Bosniak tradition) are already well-established in the system",
      "Rijaset in Sarajevo is the central Islamic authority"
    ],
    resources: [
      { title: "Islamska Zajednica BiH", url: "https://www.islamskazajednica.ba" }
    ],
    religiousExemptions: "Bosnia has a centuries-old Bosniak Muslim tradition. Name changes for religious reasons are well-understood and straightforward.",
    lastUpdated: "2026-02"
  },
  {
    country: "Albania",
    countryCode: "AL",
    flag: "🇦🇱",
    overview: "Albania handles name changes through the General Directorate of Civil Status (Drejtoria e Përgjithshme e Gjendjes Civile). Applications are processed at the local civil registry office.",
    estimatedCost: "ALL 500 - 2,000",
    estimatedCostUSD: [5, 19],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Apply at Civil Registry", description: "Submit a name change application to your local civil registry office.", documents: ["Application", "Birth certificate", "ID card", "Family certificate"] },
      { title: "Municipal Decision", description: "The municipality reviews and approves the application.", documents: [] },
      { title: "Update Documents", description: "Obtain updated birth certificate and ID.", documents: ["Updated documents"] }
    ],
    tips: [
      "Albania has a Muslim-majority population, so Islamic names are common",
      "Albanian Muslim Community (KMSH) can provide guidance",
      "The process is generally fast and simple",
      "Both Albanian and Arabic Islamic names are well-accepted"
    ],
    resources: [
      { title: "e-Albania Portal", url: "https://e-albania.al" }
    ],
    religiousExemptions: "Albania has a Muslim-majority population and is very familiar with Islamic names. The process requires no special religious justification.",
    lastUpdated: "2026-02"
  },
  {
    country: "Russia",
    countryCode: "RU",
    flag: "🇷🇺",
    overview: "Russia handles name changes through the ZAGS office (ЗАГС — Запись актов гражданского состояния). The Family Code allows citizens over 14 to change their names with a valid reason.",
    estimatedCost: "RUB 1,600",
    estimatedCostUSD: [17, 17],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Apply at ZAGS", description: "Submit a name change application (заявление о перемене имени) to the civil registry office (ЗАГС).", documents: ["Application form", "Birth certificate", "Internal passport", "State duty payment"] },
      { title: "Provide Reason", description: "State the reason for the change. Religious reasons are accepted.", documents: ["Personal statement"] },
      { title: "ZAGS Review", description: "ZAGS reviews the application within one month (may be extended to two).", documents: [] },
      { title: "Receive Certificate", description: "Obtain a name change certificate (свидетельство о перемене имени).", documents: ["Name change certificate"] },
      { title: "Update Documents", description: "Update internal passport (within 30 days), international passport, and other documents.", documents: ["Name change certificate", "Old passport"] }
    ],
    tips: [
      "The state duty (госпошлина) is fixed at RUB 1,600",
      "Russia has official Muslim spiritual administrations (Духовное управление мусульман) in every region",
      "Internal passport must be updated within 30 days of the name change certificate",
      "Tatarstan, Bashkortostan, and Chechnya have established Islamic infrastructure"
    ],
    resources: [
      { title: "Gosuslugi (Government Services)", url: "https://www.gosuslugi.ru" }
    ],
    religiousExemptions: "Russia officially recognizes Islam as one of four traditional religions. Religious conversion is accepted as a valid reason for name changes at ZAGS offices.",
    lastUpdated: "2026-02"
  },
  {
    country: "Algeria",
    countryCode: "DZ",
    flag: "🇩🇿",
    overview: "Algeria handles name changes through the court system (tribunal). Applications are filed at the local court and reviewed by a judge. As a Muslim-majority country, Islamic name changes are standard.",
    estimatedCost: "DZD 500 - 5,000",
    estimatedCostUSD: [4, 37],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "File Court Petition", description: "Submit a name change petition to the local tribunal.", documents: ["Petition", "Birth certificate (extrait de naissance)", "National ID"] },
      { title: "Court Review", description: "A judge reviews the petition. Religious name changes are routinely approved.", documents: [] },
      { title: "Receive Court Judgment", description: "Obtain the court judgment (jugement) approving the change.", documents: ["Court judgment"] },
      { title: "Update Civil Registry", description: "Present the judgment to your commune's civil registry to update records.", documents: ["Court judgment", "Old documents"] }
    ],
    tips: [
      "Algeria has a commission that manages naming conventions",
      "Islamic names are standard and always approved",
      "The process is well-established in this Muslim-majority country",
      "Ministry of Religious Affairs can provide guidance"
    ],
    resources: [
      { title: "Ministry of Justice", url: "https://www.mjustice.dz" }
    ],
    religiousExemptions: "Algeria, as a Muslim-majority country, fully supports Islamic name changes. The process is routine and well-understood by courts.",
    lastUpdated: "2026-02"
  },
  {
    country: "Tunisia",
    countryCode: "TN",
    flag: "🇹🇳",
    overview: "Tunisia handles name changes through the Court of First Instance (tribunal de première instance). The Civil Status Law governs name changes with a court order required.",
    estimatedCost: "TND 20 - 200",
    estimatedCostUSD: [6, 64],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "File Court Petition", description: "Submit a petition to the Court of First Instance (tribunal de première instance) in your jurisdiction.", documents: ["Petition", "Birth certificate", "National ID (CIN)"] },
      { title: "Court Hearing", description: "Attend a hearing where the judge reviews your request.", documents: ["Photo ID"] },
      { title: "Receive Judgment", description: "The court issues a judgment. Once final, it's registered with civil status.", documents: ["Court judgment"] },
      { title: "Update Civil Status", description: "Update records at the municipality and obtain new CIN.", documents: ["Court judgment", "Old CIN"] }
    ],
    tips: [
      "Tunisia has a codified civil status system from 1957",
      "Islamic names are standard and always approved",
      "A lawyer (avocat) is recommended for court proceedings",
      "The process is routine in this Muslim-majority country"
    ],
    resources: [
      { title: "e-People Portal", url: "https://www.e-people.gov.tn" }
    ],
    religiousExemptions: "Tunisia's Muslim-majority population means Islamic name changes are routine. Courts regularly approve such changes without difficulty.",
    lastUpdated: "2026-02"
  },
  {
    country: "Libya",
    countryCode: "LY",
    flag: "🇱🇾",
    overview: "Libya handles name changes through the Civil Registry Authority. As a Muslim-majority country, Islamic name changes are standard and well-supported.",
    estimatedCost: "LYD 10 - 100",
    estimatedCostUSD: [2, 21],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "moderate",
    steps: [
      { title: "Apply at Civil Registry", description: "Submit a name change application to the Civil Registry Authority.", documents: ["Application", "National ID", "Family book"] },
      { title: "Review and Approval", description: "The civil registry reviews and approves the application.", documents: [] },
      { title: "Update Documents", description: "Receive updated national ID and family book.", documents: ["Updated documents"] }
    ],
    tips: [
      "The process varies by region given current political situation",
      "Islamic names are standard and always accepted",
      "Local mosques can provide guidance"
    ],
    resources: [
      { title: "Civil Registry Authority", url: "https://www.cra.gov.ly" }
    ],
    religiousExemptions: "Libya, as a Muslim-majority country, fully supports Islamic name changes. The process is routine.",
    lastUpdated: "2026-02"
  },
  {
    country: "Sudan",
    countryCode: "SD",
    flag: "🇸🇩",
    overview: "Sudan handles name changes through the Civil Registry (السجل المدني). As a Muslim-majority country with Islamic law influences, religious name changes are well-supported.",
    estimatedCost: "SDG 500 - 5,000",
    estimatedCostUSD: [1, 8],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Apply at Civil Registry", description: "Submit a name change application at the local civil registry office.", documents: ["Application", "National ID", "Birth certificate"] },
      { title: "Provide Supporting Documents", description: "Include any supporting documentation for the change.", documents: ["Conversion certificate (if applicable)"] },
      { title: "Receive Updated Documents", description: "Obtain updated national ID.", documents: ["Updated ID"] }
    ],
    tips: [
      "The process is straightforward in Sudan",
      "Islamic names are standard and always accepted",
      "Local community leaders can facilitate the process"
    ],
    resources: [
      { title: "Civil Registry Sudan", url: "https://www.civilregistry.gov.sd" }
    ],
    religiousExemptions: "Sudan fully supports Islamic name changes. The process is routine and well-understood.",
    lastUpdated: "2026-02"
  },
  {
    country: "Somalia",
    countryCode: "SO",
    flag: "🇸🇴",
    overview: "Somalia handles name changes primarily through community and clan-based systems alongside government processes where available. The Ministry of Interior manages civil registration in areas under federal control.",
    estimatedCost: "USD 5 - 50",
    estimatedCostUSD: [5, 50],
    estimatedTimeline: "1 - 8 weeks",
    estimatedTimelineWeeks: [1, 8],
    difficulty: "moderate",
    steps: [
      { title: "Obtain Community Acknowledgment", description: "Inform your clan elders and community of the name change.", documents: [] },
      { title: "Apply at Government Office", description: "Where available, submit a name change request to the civil registration office.", documents: ["Application", "Available ID documents"] },
      { title: "Update Documents", description: "Update whatever government documents you hold.", documents: ["Updated documents"] }
    ],
    tips: [
      "Civil registration systems are still developing in some regions",
      "Community and clan recognition often carries more practical weight",
      "As a 99%+ Muslim country, Islamic names are standard",
      "Diaspora Somalis should use their host country's processes"
    ],
    resources: [
      { title: "Ministry of Interior", url: "https://www.moi.gov.so" }
    ],
    religiousExemptions: "Somalia is a Muslim-majority country where Islamic names are the universal norm. No special process is needed for Islamic names.",
    lastUpdated: "2026-02"
  },
  {
    country: "Ethiopia",
    countryCode: "ET",
    flag: "🇪🇹",
    overview: "Ethiopia handles name changes through the Vital Events Registration Agency. Ethiopia has a large Muslim population (~35%) and the process is straightforward.",
    estimatedCost: "ETB 100 - 1,000",
    estimatedCostUSD: [2, 17],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "moderate",
    steps: [
      { title: "Apply at Registration Office", description: "Submit a name change application to the local vital events registration office.", documents: ["Application", "Kebele ID", "Birth certificate"] },
      { title: "Court Process (if required)", description: "Some regions may require a court order for formal name changes.", documents: ["Court petition", "Supporting documents"] },
      { title: "Update ID", description: "Obtain updated kebele ID and other documents.", documents: ["Updated documents"] }
    ],
    tips: [
      "Ethiopia's large Muslim population means authorities are familiar with Islamic names",
      "Ethiopian Islamic Affairs Supreme Council (EIASC) can provide guidance",
      "The process varies by region (killil)",
      "Harar and Somali regions have established Islamic administrative infrastructure"
    ],
    resources: [
      { title: "VERA Ethiopia", url: "https://www.vera.gov.et" }
    ],
    religiousExemptions: "Ethiopia accepts religious conversion as a valid reason for name changes. The large Muslim minority means the process is well-understood.",
    lastUpdated: "2026-02"
  },
  {
    country: "Tanzania",
    countryCode: "TZ",
    flag: "🇹🇿",
    overview: "Tanzania handles name changes through the Registration Insolvency and Trusteeship Agency (RITA). The process involves a deed poll and is straightforward.",
    estimatedCost: "TZS 10,000 - 50,000",
    estimatedCostUSD: [4, 20],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "easy",
    steps: [
      { title: "Execute Deed Poll", description: "Prepare and execute a deed poll (statutory declaration) before a Commissioner for Oaths.", documents: ["Deed poll", "Current ID"] },
      { title: "Submit to RITA", description: "Submit the deed poll to RITA for registration.", documents: ["Deed poll", "Fee", "Supporting documents"] },
      { title: "Update Documents", description: "Use the registered deed poll to update your NIDA ID and other documents.", documents: ["Registered deed poll"] }
    ],
    tips: [
      "Tanzania has a large Muslim population, especially in Zanzibar and the coast",
      "BAKWATA (National Muslim Council of Tanzania) can provide guidance",
      "Zanzibar has its own registration system — apply there if registered in Zanzibar",
      "The process is well-understood by authorities"
    ],
    resources: [
      { title: "RITA Tanzania", url: "https://www.rita.go.tz" }
    ],
    religiousExemptions: "Tanzania's large Muslim population (especially in Zanzibar) means authorities are very familiar with Islamic name changes.",
    lastUpdated: "2026-02"
  },
  {
    country: "Ghana",
    countryCode: "GH",
    flag: "🇬🇭",
    overview: "Ghana handles name changes through a statutory declaration (affidavit) and newspaper publication. The process is governed by the Statutory Declarations Act.",
    estimatedCost: "GHS 50 - 500",
    estimatedCostUSD: [4, 38],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Swear Statutory Declaration", description: "Execute a statutory declaration before a Commissioner for Oaths at any court.", documents: ["Statutory declaration", "Current ID", "Passport photos"] },
      { title: "Publish in Newspaper", description: "Publish the name change in a national newspaper.", documents: ["Newspaper publication"] },
      { title: "Update Ghana Card", description: "Apply at the National Identification Authority (NIA) for an updated Ghana Card.", documents: ["Statutory declaration", "Newspaper cutting", "Old Ghana Card"] }
    ],
    tips: [
      "The National Chief Imam's office can provide conversion certificates",
      "Ghana has a significant Muslim population (about 20%)",
      "The process is fast and inexpensive",
      "Update Ghana Card first — other agencies accept it as primary proof"
    ],
    resources: [
      { title: "NIA Ghana", url: "https://nia.gov.gh" }
    ],
    religiousExemptions: "Ghana accepts religious conversion as a valid reason for name changes. The significant Muslim population means the process is well-understood.",
    lastUpdated: "2026-02"
  },
  {
    country: "Senegal",
    countryCode: "SN",
    flag: "🇸🇳",
    overview: "Senegal handles name changes through the civil court (tribunal d'instance). As a country where 95%+ of the population is Muslim, Islamic names are the norm.",
    estimatedCost: "XOF 5,000 - 25,000",
    estimatedCostUSD: [8, 40],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "File Court Petition", description: "Submit a name change petition to the tribunal d'instance.", documents: ["Petition", "Birth certificate (extrait de naissance)", "National ID (CNI)"] },
      { title: "Court Decision", description: "The judge reviews and approves the change.", documents: ["Court judgment"] },
      { title: "Update Civil Registry", description: "Present the judgment to update your civil registry records.", documents: ["Court judgment", "Old documents"] }
    ],
    tips: [
      "Senegal is 95%+ Muslim — Islamic names are the standard",
      "The Grand Serigne of Dakar and Sufi brotherhood leaders are influential",
      "The process is routine and well-understood",
      "Mouride and Tijaniyya names are very common alongside Arabic ones"
    ],
    resources: [
      { title: "Government of Senegal", url: "https://www.sec.gouv.sn" }
    ],
    religiousExemptions: "Senegal is overwhelmingly Muslim, so Islamic name changes are standard and routine. No special religious justification is needed.",
    lastUpdated: "2026-02"
  },
  {
    country: "Mexico",
    countryCode: "MX",
    flag: "🇲🇽",
    overview: "Mexico handles name changes through the Civil Registry (Registro Civil). Since 2021 reforms, the process has been simplified in many states. A court order may be required depending on the state.",
    estimatedCost: "MXN 500 - 5,000",
    estimatedCostUSD: [25, 250],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Visit Civil Registry", description: "Go to the Registro Civil in your state to understand local requirements.", documents: ["CURP", "INE/IFE (voter ID)", "Birth certificate (acta de nacimiento)"] },
      { title: "File Application or Court Petition", description: "Depending on the state, either file directly with the Registro Civil or petition a family court.", documents: ["Application/petition", "Supporting documents", "Fee"] },
      { title: "Review and Approval", description: "The registrar or judge reviews and approves the change.", documents: [] },
      { title: "Obtain New Birth Certificate", description: "Receive your updated acta de nacimiento and update CURP and other documents.", documents: ["Updated birth certificate"] }
    ],
    tips: [
      "Requirements vary significantly by state",
      "Mexico City and some states allow administrative changes without court orders",
      "Centro Cultural Islámico de México can provide guidance",
      "Update CURP after obtaining the new birth certificate"
    ],
    resources: [
      { title: "RENAPO (Population Registry)", url: "https://www.gob.mx/segob/renapo" }
    ],
    religiousExemptions: "Mexican law does not require a specific reason for name changes in states with simplified processes. Religious conversion is accepted where justification is needed.",
    lastUpdated: "2026-02"
  },
  {
    country: "Argentina",
    countryCode: "AR",
    flag: "🇦🇷",
    overview: "Argentina handles name changes through the Civil Registry (Registro Civil). Law 18.248 governs names, and recent reforms have simplified the process for first name changes.",
    estimatedCost: "ARS 5,000 - 30,000",
    estimatedCostUSD: [5, 30],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Apply at Registro Civil", description: "Submit a name change application to the Civil Registry.", documents: ["DNI", "Birth certificate (partida de nacimiento)", "Application"] },
      { title: "Provide Justification", description: "Include a written explanation for the name change.", documents: ["Personal statement", "Supporting documentation"] },
      { title: "Administrative or Court Decision", description: "Depending on the type of change, it may be processed administratively or require a court order.", documents: [] },
      { title: "Update DNI", description: "Obtain an updated DNI (Documento Nacional de Identidad).", documents: ["Updated birth certificate", "Old DNI"] }
    ],
    tips: [
      "Argentina has the largest Muslim community in South America",
      "Centro Islámico de la República Argentina (CIRA) can provide guidance",
      "Buenos Aires has established Muslim communities with experienced advisors",
      "Some provinces have simpler processes than others"
    ],
    resources: [
      { title: "RENAPER", url: "https://www.argentina.gob.ar/interior/renaper" }
    ],
    religiousExemptions: "Argentine law accepts religious conversion as a valid justification for name changes. CIRA (the largest Islamic center in Latin America) can provide supporting documentation.",
    lastUpdated: "2026-02"
  },
  {
    country: "Colombia",
    countryCode: "CO",
    flag: "🇨🇴",
    overview: "Colombia allows name corrections and changes through the Notaría (notary) or Registro Civil. One first name change can be done by simple notarial act without court order.",
    estimatedCost: "COP 50,000 - 500,000",
    estimatedCostUSD: [12, 115],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "easy",
    steps: [
      { title: "Visit a Notaría", description: "Go to any notaría (notary office) with your current documents.", documents: ["Cédula de ciudadanía", "Birth certificate (registro civil)", "Application"] },
      { title: "Execute Escritura Pública", description: "The notary executes a public deed (escritura pública) recording the name change.", documents: ["Escritura pública", "Fee"] },
      { title: "Update Registro Civil", description: "The notary forwards the change to the Registro Civil for annotation.", documents: [] },
      { title: "Update Cédula", description: "Apply for an updated cédula de ciudadanía at the Registraduría.", documents: ["Updated registro civil", "Old cédula"] }
    ],
    tips: [
      "One first name change can be done simply through a notary — no court needed",
      "Subsequent changes may require a court order",
      "The Muslim community in Colombia is growing, particularly in Maicao and Bogotá",
      "Centro Cultural Islámico can provide guidance"
    ],
    resources: [
      { title: "Registraduría Nacional", url: "https://www.registraduria.gov.co" }
    ],
    religiousExemptions: "Colombian law allows one first name change without requiring justification, making it very simple for religious converts.",
    lastUpdated: "2026-02"
  },
  {
    country: "Uzbekistan",
    countryCode: "UZ",
    flag: "🇺🇿",
    overview: "Uzbekistan handles name changes through the civil registry office (ZAGS/ЗАГС). The Family Code governs name changes, requiring a valid reason.",
    estimatedCost: "UZS 50,000 - 200,000",
    estimatedCostUSD: [4, 16],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Apply at ZAGS", description: "Submit a name change application at the civil registry (ZAGS) office.", documents: ["Application", "Passport", "Birth certificate"] },
      { title: "Provide Reason", description: "State the reason for the name change.", documents: ["Personal statement"] },
      { title: "ZAGS Review", description: "The office reviews within one month.", documents: [] },
      { title: "Update Passport", description: "Obtain an updated passport with the new name.", documents: ["ZAGS certificate", "Old passport"] }
    ],
    tips: [
      "Uzbekistan has a rich Islamic heritage (Bukhara, Samarkand)",
      "Muslim Board of Uzbekistan can provide guidance",
      "Islamic names have been common throughout Uzbek history",
      "Online applications through my.gov.uz are increasingly available"
    ],
    resources: [
      { title: "my.gov.uz", url: "https://my.gov.uz" }
    ],
    religiousExemptions: "Uzbekistan's Muslim-majority population means Islamic names are common and well-accepted. The process is routine.",
    lastUpdated: "2026-02"
  },
  {
    country: "Kazakhstan",
    countryCode: "KZ",
    flag: "🇰🇿",
    overview: "Kazakhstan handles name changes through the civil registry (ЗАГС). Applications are submitted to the local justice department, and the process is governed by the Code on Marriage and Family.",
    estimatedCost: "KZT 3,000 - 10,000",
    estimatedCostUSD: [6, 20],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Apply at ZAGS/eGov", description: "Submit a name change application through eGov.kz portal or local ZAGS office.", documents: ["Application", "ID card", "Birth certificate"] },
      { title: "Provide Documentation", description: "Include required supporting documents.", documents: ["Supporting documents", "Fee payment"] },
      { title: "Review and Approval", description: "The justice department reviews within one month.", documents: [] },
      { title: "Update Documents", description: "Receive name change certificate and update ID and passport.", documents: ["Name change certificate"] }
    ],
    tips: [
      "Kazakhstan has a majority Muslim population (about 70%)",
      "Online applications through egov.kz are efficient",
      "Spiritual Administration of Muslims of Kazakhstan (SAMK) can provide guidance",
      "Both Kazakh and Arabic Islamic names are well-accepted"
    ],
    resources: [
      { title: "eGov.kz", url: "https://egov.kz" }
    ],
    religiousExemptions: "Kazakhstan's Muslim-majority population means Islamic name changes are common and routine. No special religious documentation is required.",
    lastUpdated: "2026-02"
  },
  {
    country: "Tajikistan",
    countryCode: "TJ",
    flag: "🇹🇯",
    overview: "Tajikistan handles name changes through the civil registry (ЗАГС). Tajikistan has specific regulations regarding names, including a government-approved name list.",
    estimatedCost: "TJS 50 - 200",
    estimatedCostUSD: [5, 18],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Check Approved Names", description: "Verify your desired name is on the government's approved list or can be approved.", documents: [] },
      { title: "Apply at ZAGS", description: "Submit application to the civil registry office.", documents: ["Application", "Passport", "Birth certificate"] },
      { title: "Review and Approval", description: "The office reviews the application.", documents: [] },
      { title: "Update Documents", description: "Receive updated passport and other documents.", documents: ["Updated documents"] }
    ],
    tips: [
      "Tajikistan maintains an approved name list — check in advance",
      "Many Tajik-Persian Islamic names are on the approved list",
      "The Council of Ulema can provide guidance",
      "Processing may vary by region"
    ],
    resources: [
      { title: "Government of Tajikistan", url: "https://www.president.tj" }
    ],
    religiousExemptions: "Tajikistan's Muslim-majority population means Islamic names are common, but the government name list may restrict some choices. Tajik-Persian Islamic names are generally approved.",
    lastUpdated: "2026-02"
  },
  {
    country: "Kyrgyzstan",
    countryCode: "KG",
    flag: "🇰🇬",
    overview: "Kyrgyzstan handles name changes through the civil registry (ЗАГС). The process is governed by the Family Code and is straightforward.",
    estimatedCost: "KGS 200 - 1,000",
    estimatedCostUSD: [2, 11],
    estimatedTimeline: "2 - 6 weeks",
    estimatedTimelineWeeks: [2, 6],
    difficulty: "easy",
    steps: [
      { title: "Apply at ZAGS", description: "Submit a name change application to the local civil registry.", documents: ["Application", "Passport", "Birth certificate"] },
      { title: "Review", description: "The office reviews within one month.", documents: [] },
      { title: "Update Documents", description: "Receive name change certificate and update passport.", documents: ["Name change certificate"] }
    ],
    tips: [
      "Kyrgyzstan has a Muslim-majority population (about 90%)",
      "Both Kyrgyz and Arabic Islamic names are common",
      "The Muftiat of Kyrgyzstan can provide guidance",
      "The process is straightforward and affordable"
    ],
    resources: [
      { title: "Government Portal", url: "https://www.gov.kg" }
    ],
    religiousExemptions: "Kyrgyzstan's Muslim-majority population means Islamic names are standard. No special justification is needed.",
    lastUpdated: "2026-02"
  },
  {
    country: "Turkmenistan",
    countryCode: "TM",
    flag: "🇹🇲",
    overview: "Turkmenistan handles name changes through the civil registry (ЗАГС). The process requires a valid reason and is governed by the Civil Code.",
    estimatedCost: "TMT 10 - 100",
    estimatedCostUSD: [3, 29],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Apply at ZAGS", description: "Submit application to the local civil registry office.", documents: ["Application", "Passport", "Birth certificate"] },
      { title: "Provide Reason", description: "State the reason for the name change.", documents: ["Personal statement"] },
      { title: "Review and Approval", description: "The civil registry reviews the application.", documents: [] },
      { title: "Update Documents", description: "Receive updated documents.", documents: ["Updated passport"] }
    ],
    tips: [
      "Turkmenistan has a Muslim-majority population",
      "The process may be more bureaucratic than neighboring countries",
      "Islamic names are common and well-accepted"
    ],
    resources: [
      { title: "Government of Turkmenistan", url: "https://www.gov.tm" }
    ],
    religiousExemptions: "Turkmenistan's Muslim-majority population means Islamic names are well-accepted. The process is standard.",
    lastUpdated: "2026-02"
  },
  {
    country: "Malaysia (Sabah & Sarawak)",
    countryCode: "MY-SS",
    flag: "🇲🇾",
    overview: "Sabah and Sarawak have slightly different processes from Peninsular Malaysia for name changes, as they have their own native courts and registration systems alongside JPN.",
    estimatedCost: "MYR 40 - 150",
    estimatedCostUSD: [9, 33],
    estimatedTimeline: "2 - 10 weeks",
    estimatedTimelineWeeks: [2, 10],
    difficulty: "easy",
    steps: [
      { title: "Register Conversion", description: "Register with the State Islamic Religious Department (JAIS Sabah/Sarawak).", documents: ["Conversion certificate"] },
      { title: "Apply at JPN", description: "Visit the Sabah/Sarawak JPN office with conversion documents.", documents: ["Conversion certificate", "IC", "Application"] },
      { title: "Receive Updated IC", description: "Obtain new IC with updated name and religion.", documents: ["New IC"] }
    ],
    tips: [
      "East Malaysian states have their own religious departments",
      "Native court systems may also be involved for indigenous converts",
      "JPN processing may take slightly longer than in Peninsular Malaysia"
    ],
    resources: [
      { title: "JPN Malaysia", url: "https://www.jpn.gov.my" }
    ],
    religiousExemptions: "East Malaysian states follow similar Islamic conversion processes to Peninsular Malaysia but with some local variations.",
    lastUpdated: "2026-02"
  },
  {
    country: "Yemen",
    countryCode: "YE",
    flag: "🇾🇪",
    overview: "Yemen handles name changes through the Civil Status Authority. As a Muslim-majority country, Islamic name changes are standard.",
    estimatedCost: "YER 1,000 - 5,000",
    estimatedCostUSD: [2, 10],
    estimatedTimeline: "2 - 8 weeks",
    estimatedTimelineWeeks: [2, 8],
    difficulty: "moderate",
    steps: [
      { title: "Apply at Civil Status", description: "Submit a name change application to the local Civil Status Authority.", documents: ["Application", "National ID", "Birth certificate"] },
      { title: "Review and Approval", description: "The authority reviews the application.", documents: [] },
      { title: "Update Documents", description: "Receive updated ID documents.", documents: ["Updated ID"] }
    ],
    tips: [
      "Islamic names are the universal norm in Yemen",
      "The process may vary by region given current situation",
      "Local religious leaders can facilitate"
    ],
    resources: [
      { title: "Civil Status Authority", url: "https://www.csa.gov.ye" }
    ],
    religiousExemptions: "Yemen, as a Muslim-majority country, fully supports Islamic names as standard. No special process is needed.",
    lastUpdated: "2026-02"
  },
  {
    country: "Myanmar",
    countryCode: "MM",
    flag: "🇲🇲",
    overview: "Myanmar handles name changes through the General Administration Department (GAD). The process involves an affidavit and newspaper publication.",
    estimatedCost: "MMK 5,000 - 30,000",
    estimatedCostUSD: [2, 14],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Execute Affidavit", description: "Get a notarized affidavit declaring the name change.", documents: ["Affidavit", "NRC (National Registration Card)"] },
      { title: "Publish in Newspaper", description: "Publish the name change in a national newspaper.", documents: ["Newspaper publication"] },
      { title: "Apply at GAD", description: "Submit the application to the General Administration Department.", documents: ["Affidavit", "Newspaper cutting", "NRC"] },
      { title: "Receive Updated NRC", description: "Obtain updated National Registration Card.", documents: ["Updated NRC"] }
    ],
    tips: [
      "Myanmar has a significant Muslim minority (about 4%)",
      "The process may face additional challenges in the current political context",
      "Islamic scholars in Yangon and Mandalay can provide guidance",
      "Keep multiple copies of all documentation"
    ],
    resources: [
      { title: "GAD Myanmar", url: "https://www.gad.gov.mm" }
    ],
    religiousExemptions: "Myanmar technically allows name changes for any reason, though the process may vary in practice. Documentation is important.",
    lastUpdated: "2026-02"
  },
  {
    country: "China",
    countryCode: "CN",
    flag: "🇨🇳",
    overview: "China handles name changes through the local Public Security Bureau (PSB/公安局). Citizens can change their name once with a valid reason. The Hui, Uyghur, and other Muslim minorities have established naming traditions.",
    estimatedCost: "CNY 40 - 200",
    estimatedCostUSD: [6, 28],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Apply at Local PSB", description: "Submit a name change application (户口变更) at your local Public Security Bureau (派出所/公安局).", documents: ["Application form", "Hukou (户口簿)", "ID card (身份证)"] },
      { title: "Provide Reason", description: "State the reason for the change. Religious/ethnic cultural reasons are accepted.", documents: ["Personal statement", "Supporting documents"] },
      { title: "PSB Review", description: "The PSB reviews the application. Processing time varies by city.", documents: [] },
      { title: "Update Hukou and ID", description: "Receive updated hukou and apply for new ID card.", documents: ["Updated hukou", "New ID card"] }
    ],
    tips: [
      "China has about 25 million Muslims (Hui, Uyghur, Kazakh, etc.)",
      "Muslim names are well-established among ethnic minorities",
      "The process may be smoother in cities with larger Muslim populations",
      "Only one name change is generally allowed"
    ],
    resources: [
      { title: "National Immigration Administration", url: "https://www.nia.gov.cn" }
    ],
    religiousExemptions: "China allows name changes for cultural and ethnic reasons. Muslim minorities (Hui, Uyghur, etc.) have established naming traditions recognized by the system.",
    lastUpdated: "2026-02"
  },
  {
    country: "South Korea",
    countryCode: "KR",
    flag: "🇰🇷",
    overview: "South Korea handles name changes through the Family Court (가정법원). A court petition is required, and the court must find 'justifiable reason' (정당한 사유).",
    estimatedCost: "KRW 10,000 - 50,000",
    estimatedCostUSD: [7, 36],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "File Family Court Petition", description: "Submit a name change petition (개명신청) to the Family Court in your jurisdiction.", documents: ["Petition", "Resident registration (주민등록등본)", "Family relations certificate (가족관계증명서)"] },
      { title: "Court Review", description: "The court reviews the petition. Religious conversion is an accepted justification.", documents: [] },
      { title: "Court Decision", description: "The court issues a decision, typically within 1-2 months.", documents: ["Court decision"] },
      { title: "Update Records", description: "Update your resident registration and national ID at the local gu/dong office.", documents: ["Court decision", "Old ID"] }
    ],
    tips: [
      "South Korea has a growing Muslim community, especially in Seoul's Itaewon area",
      "Korea Muslim Federation can provide guidance",
      "Court filing fees are very low",
      "The process is well-defined and usually straightforward"
    ],
    resources: [
      { title: "Korean Courts", url: "https://www.scourt.go.kr" },
      { title: "Korea Muslim Federation", url: "https://www.koreaislam.org" }
    ],
    religiousExemptions: "Korean courts accept religious conversion as a 'justifiable reason' for name changes. The Korea Muslim Federation can provide supporting documentation.",
    lastUpdated: "2026-02"
  },
  {
    country: "American Samoa",
    countryCode: "AS",
    flag: "🇦🇸",
    overview: "American Samoa handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Andorra",
    countryCode: "AD",
    flag: "🇦🇩",
    overview: "Andorra handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Angola",
    countryCode: "AO",
    flag: "🇦🇴",
    overview: "Angola handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Anguilla",
    countryCode: "AI",
    flag: "🇦🇮",
    overview: "Anguilla handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Antigua and Barbuda",
    countryCode: "AG",
    flag: "🇦🇬",
    overview: "Antigua and Barbuda handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Armenia",
    countryCode: "AM",
    flag: "🇦🇲",
    overview: "Armenia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Aruba",
    countryCode: "AW",
    flag: "🇦🇼",
    overview: "Aruba handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Azerbaijan",
    countryCode: "AZ",
    flag: "🇦🇿",
    overview: "Azerbaijan handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bahamas",
    countryCode: "BS",
    flag: "🇧🇸",
    overview: "Bahamas handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Barbados",
    countryCode: "BB",
    flag: "🇧🇧",
    overview: "Barbados handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Belarus",
    countryCode: "BY",
    flag: "🇧🇾",
    overview: "Belarus handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Belize",
    countryCode: "BZ",
    flag: "🇧🇿",
    overview: "Belize handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Benin",
    countryCode: "BJ",
    flag: "🇧🇯",
    overview: "Benin handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bermuda",
    countryCode: "BM",
    flag: "🇧🇲",
    overview: "Bermuda handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bhutan",
    countryCode: "BT",
    flag: "🇧🇹",
    overview: "Bhutan handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bolivia, Plurinational State of",
    countryCode: "BO",
    flag: "🇧🇴",
    overview: "Bolivia, Plurinational State of handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Botswana",
    countryCode: "BW",
    flag: "🇧🇼",
    overview: "Botswana handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bulgaria",
    countryCode: "BG",
    flag: "🇧🇬",
    overview: "Bulgaria handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Burkina Faso",
    countryCode: "BF",
    flag: "🇧🇫",
    overview: "Burkina Faso handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Burundi",
    countryCode: "BI",
    flag: "🇧🇮",
    overview: "Burundi handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Cabo Verde",
    countryCode: "CV",
    flag: "🇨🇻",
    overview: "Cabo Verde handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Cambodia",
    countryCode: "KH",
    flag: "🇰🇭",
    overview: "Cambodia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Cameroon",
    countryCode: "CM",
    flag: "🇨🇲",
    overview: "Cameroon handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Cayman Islands",
    countryCode: "KY",
    flag: "🇰🇾",
    overview: "Cayman Islands handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Central African Republic",
    countryCode: "CF",
    flag: "🇨🇫",
    overview: "Central African Republic handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Chad",
    countryCode: "TD",
    flag: "🇹🇩",
    overview: "Chad handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Chile",
    countryCode: "CL",
    flag: "🇨🇱",
    overview: "Chile handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Comoros",
    countryCode: "KM",
    flag: "🇰🇲",
    overview: "Comoros handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Congo",
    countryCode: "CG",
    flag: "🇨🇬",
    overview: "Congo handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Congo, Democratic Republic of the",
    countryCode: "CD",
    flag: "🇨🇩",
    overview: "Congo, Democratic Republic of the handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Cook Islands",
    countryCode: "CK",
    flag: "🇨🇰",
    overview: "Cook Islands handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Costa Rica",
    countryCode: "CR",
    flag: "🇨🇷",
    overview: "Costa Rica handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Côte d'Ivoire",
    countryCode: "CI",
    flag: "🇨🇮",
    overview: "Côte d'Ivoire handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Croatia",
    countryCode: "HR",
    flag: "🇭🇷",
    overview: "Croatia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Cuba",
    countryCode: "CU",
    flag: "🇨🇺",
    overview: "Cuba handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Curaçao",
    countryCode: "CW",
    flag: "🇨🇼",
    overview: "Curaçao handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Cyprus",
    countryCode: "CY",
    flag: "🇨🇾",
    overview: "Cyprus handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Czechia",
    countryCode: "CZ",
    flag: "🇨🇿",
    overview: "Czechia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Djibouti",
    countryCode: "DJ",
    flag: "🇩🇯",
    overview: "Djibouti handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Dominica",
    countryCode: "DM",
    flag: "🇩🇲",
    overview: "Dominica handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Dominican Republic",
    countryCode: "DO",
    flag: "🇩🇴",
    overview: "Dominican Republic handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Ecuador",
    countryCode: "EC",
    flag: "🇪🇨",
    overview: "Ecuador handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "El Salvador",
    countryCode: "SV",
    flag: "🇸🇻",
    overview: "El Salvador handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Equatorial Guinea",
    countryCode: "GQ",
    flag: "🇬🇶",
    overview: "Equatorial Guinea handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Eritrea",
    countryCode: "ER",
    flag: "🇪🇷",
    overview: "Eritrea handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Estonia",
    countryCode: "EE",
    flag: "🇪🇪",
    overview: "Estonia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Eswatini",
    countryCode: "SZ",
    flag: "🇸🇿",
    overview: "Eswatini handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Falkland Islands",
    countryCode: "FK",
    flag: "🇫🇰",
    overview: "Falkland Islands (Malvinas) handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Faroe Islands",
    countryCode: "FO",
    flag: "🇫🇴",
    overview: "Faroe Islands handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Fiji",
    countryCode: "FJ",
    flag: "🇫🇯",
    overview: "Fiji handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "French Guiana",
    countryCode: "GF",
    flag: "🇬🇫",
    overview: "French Guiana handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "French Polynesia",
    countryCode: "PF",
    flag: "🇵🇫",
    overview: "French Polynesia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Gabon",
    countryCode: "GA",
    flag: "🇬🇦",
    overview: "Gabon handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Gambia",
    countryCode: "GM",
    flag: "🇬🇲",
    overview: "Gambia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Georgia",
    countryCode: "GE",
    flag: "🇬🇪",
    overview: "Georgia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Greenland",
    countryCode: "GL",
    flag: "🇬🇱",
    overview: "Greenland handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Grenada",
    countryCode: "GD",
    flag: "🇬🇩",
    overview: "Grenada handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Guadeloupe",
    countryCode: "GP",
    flag: "🇬🇵",
    overview: "Guadeloupe handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Guam",
    countryCode: "GU",
    flag: "🇬🇺",
    overview: "Guam handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Guatemala",
    countryCode: "GT",
    flag: "🇬🇹",
    overview: "Guatemala handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Guinea",
    countryCode: "GN",
    flag: "🇬🇳",
    overview: "Guinea handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Guinea-Bissau",
    countryCode: "GW",
    flag: "🇬🇼",
    overview: "Guinea-Bissau handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Guyana",
    countryCode: "GY",
    flag: "🇬🇾",
    overview: "Guyana handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Haiti",
    countryCode: "HT",
    flag: "🇭🇹",
    overview: "Haiti handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Honduras",
    countryCode: "HN",
    flag: "🇭🇳",
    overview: "Honduras handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Hong Kong",
    countryCode: "HK",
    flag: "🇭🇰",
    overview: "Hong Kong handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Hungary",
    countryCode: "HU",
    flag: "🇭🇺",
    overview: "Hungary handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Iceland",
    countryCode: "IS",
    flag: "🇮🇸",
    overview: "Iceland handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Israel",
    countryCode: "IL",
    flag: "🇮🇱",
    overview: "Israel handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Jamaica",
    countryCode: "JM",
    flag: "🇯🇲",
    overview: "Jamaica handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Kiribati",
    countryCode: "KI",
    flag: "🇰🇮",
    overview: "Kiribati handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Korea, Democratic People's Republic of",
    countryCode: "KP",
    flag: "🇰🇵",
    overview: "Korea, Democratic People's Republic of handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Lao People's Democratic Republic",
    countryCode: "LA",
    flag: "🇱🇦",
    overview: "Lao People's Democratic Republic handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Latvia",
    countryCode: "LV",
    flag: "🇱🇻",
    overview: "Latvia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Lesotho",
    countryCode: "LS",
    flag: "🇱🇸",
    overview: "Lesotho handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Liberia",
    countryCode: "LR",
    flag: "🇱🇷",
    overview: "Liberia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Liechtenstein",
    countryCode: "LI",
    flag: "🇱🇮",
    overview: "Liechtenstein handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Lithuania",
    countryCode: "LT",
    flag: "🇱🇹",
    overview: "Lithuania handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Luxembourg",
    countryCode: "LU",
    flag: "🇱🇺",
    overview: "Luxembourg handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Macao",
    countryCode: "MO",
    flag: "🇲🇴",
    overview: "Macao handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Madagascar",
    countryCode: "MG",
    flag: "🇲🇬",
    overview: "Madagascar handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Malawi",
    countryCode: "MW",
    flag: "🇲🇼",
    overview: "Malawi handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Mali",
    countryCode: "ML",
    flag: "🇲🇱",
    overview: "Mali handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Malta",
    countryCode: "MT",
    flag: "🇲🇹",
    overview: "Malta handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Marshall Islands",
    countryCode: "MH",
    flag: "🇲🇭",
    overview: "Marshall Islands handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Martinique",
    countryCode: "MQ",
    flag: "🇲🇶",
    overview: "Martinique handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Mauritania",
    countryCode: "MR",
    flag: "🇲🇷",
    overview: "Mauritania handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Mauritius",
    countryCode: "MU",
    flag: "🇲🇺",
    overview: "Mauritius handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Mayotte",
    countryCode: "YT",
    flag: "🇾🇹",
    overview: "Mayotte handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Micronesia, Federated States of",
    countryCode: "FM",
    flag: "🇫🇲",
    overview: "Micronesia, Federated States of handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Moldova, Republic of",
    countryCode: "MD",
    flag: "🇲🇩",
    overview: "Moldova, Republic of handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Monaco",
    countryCode: "MC",
    flag: "🇲🇨",
    overview: "Monaco handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Mongolia",
    countryCode: "MN",
    flag: "🇲🇳",
    overview: "Mongolia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Montenegro",
    countryCode: "ME",
    flag: "🇲🇪",
    overview: "Montenegro handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Montserrat",
    countryCode: "MS",
    flag: "🇲🇸",
    overview: "Montserrat handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Mozambique",
    countryCode: "MZ",
    flag: "🇲🇿",
    overview: "Mozambique handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Namibia",
    countryCode: "NA",
    flag: "🇳🇦",
    overview: "Namibia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Nauru",
    countryCode: "NR",
    flag: "🇳🇷",
    overview: "Nauru handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Nepal",
    countryCode: "NP",
    flag: "🇳🇵",
    overview: "Nepal handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "New Caledonia",
    countryCode: "NC",
    flag: "🇳🇨",
    overview: "New Caledonia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Nicaragua",
    countryCode: "NI",
    flag: "🇳🇮",
    overview: "Nicaragua handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Niger",
    countryCode: "NE",
    flag: "🇳🇪",
    overview: "Niger handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Niue",
    countryCode: "NU",
    flag: "🇳🇺",
    overview: "Niue handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Norfolk Island",
    countryCode: "NF",
    flag: "🇳🇫",
    overview: "Norfolk Island handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "North Macedonia",
    countryCode: "MK",
    flag: "🇲🇰",
    overview: "North Macedonia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Northern Mariana Islands",
    countryCode: "MP",
    flag: "🇲🇵",
    overview: "Northern Mariana Islands handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Palau",
    countryCode: "PW",
    flag: "🇵🇼",
    overview: "Palau handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Palestine, State of",
    countryCode: "PS",
    flag: "🇵🇸",
    overview: "Palestine, State of handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Panama",
    countryCode: "PA",
    flag: "🇵🇦",
    overview: "Panama handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Papua New Guinea",
    countryCode: "PG",
    flag: "🇵🇬",
    overview: "Papua New Guinea handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Paraguay",
    countryCode: "PY",
    flag: "🇵🇾",
    overview: "Paraguay handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Peru",
    countryCode: "PE",
    flag: "🇵🇪",
    overview: "Peru handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Pitcairn",
    countryCode: "PN",
    flag: "🇵🇳",
    overview: "Pitcairn handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Puerto Rico",
    countryCode: "PR",
    flag: "🇵🇷",
    overview: "Puerto Rico handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Réunion",
    countryCode: "RE",
    flag: "🇷🇪",
    overview: "Réunion handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Romania",
    countryCode: "RO",
    flag: "🇷🇴",
    overview: "Romania handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Rwanda",
    countryCode: "RW",
    flag: "🇷🇼",
    overview: "Rwanda handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Saint Barthélemy",
    countryCode: "BL",
    flag: "🇧🇱",
    overview: "Saint Barthélemy handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Saint Kitts and Nevis",
    countryCode: "KN",
    flag: "🇰🇳",
    overview: "Saint Kitts and Nevis handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Saint Lucia",
    countryCode: "LC",
    flag: "🇱🇨",
    overview: "Saint Lucia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Saint Martin",
    countryCode: "MF",
    flag: "🇲🇫",
    overview: "Saint Martin (French part) handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Saint Pierre and Miquelon",
    countryCode: "PM",
    flag: "🇵🇲",
    overview: "Saint Pierre and Miquelon handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Saint Vincent and the Grenadines",
    countryCode: "VC",
    flag: "🇻🇨",
    overview: "Saint Vincent and the Grenadines handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Samoa",
    countryCode: "WS",
    flag: "🇼🇸",
    overview: "Samoa handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "San Marino",
    countryCode: "SM",
    flag: "🇸🇲",
    overview: "San Marino handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Sao Tome and Principe",
    countryCode: "ST",
    flag: "🇸🇹",
    overview: "Sao Tome and Principe handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Serbia",
    countryCode: "RS",
    flag: "🇷🇸",
    overview: "Serbia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Seychelles",
    countryCode: "SC",
    flag: "🇸🇨",
    overview: "Seychelles handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Sierra Leone",
    countryCode: "SL",
    flag: "🇸🇱",
    overview: "Sierra Leone handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Sint Maarten",
    countryCode: "SX",
    flag: "🇸🇽",
    overview: "Sint Maarten (Dutch part) handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Slovakia",
    countryCode: "SK",
    flag: "🇸🇰",
    overview: "Slovakia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Slovenia",
    countryCode: "SI",
    flag: "🇸🇮",
    overview: "Slovenia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Solomon Islands",
    countryCode: "SB",
    flag: "🇸🇧",
    overview: "Solomon Islands handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "South Georgia and the South Sandwich Islands",
    countryCode: "GS",
    flag: "🇬🇸",
    overview: "South Georgia and the South Sandwich Islands handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "South Sudan",
    countryCode: "SS",
    flag: "🇸🇸",
    overview: "South Sudan handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Sri Lanka",
    countryCode: "LK",
    flag: "🇱🇰",
    overview: "Sri Lanka handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Suriname",
    countryCode: "SR",
    flag: "🇸🇷",
    overview: "Suriname handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Syrian Arab Republic",
    countryCode: "SY",
    flag: "🇸🇾",
    overview: "Syrian Arab Republic handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Taiwan, Province of China",
    countryCode: "TW",
    flag: "🇹🇼",
    overview: "Taiwan, Province of China handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Timor-Leste",
    countryCode: "TL",
    flag: "🇹🇱",
    overview: "Timor-Leste handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Togo",
    countryCode: "TG",
    flag: "🇹🇬",
    overview: "Togo handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Tokelau",
    countryCode: "TK",
    flag: "🇹🇰",
    overview: "Tokelau handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Tonga",
    countryCode: "TO",
    flag: "🇹🇴",
    overview: "Tonga handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Trinidad and Tobago",
    countryCode: "TT",
    flag: "🇹🇹",
    overview: "Trinidad and Tobago handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Turks and Caicos Islands",
    countryCode: "TC",
    flag: "🇹🇨",
    overview: "Turks and Caicos Islands handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Tuvalu",
    countryCode: "TV",
    flag: "🇹🇻",
    overview: "Tuvalu handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Uganda",
    countryCode: "UG",
    flag: "🇺🇬",
    overview: "Uganda handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Ukraine",
    countryCode: "UA",
    flag: "🇺🇦",
    overview: "Ukraine handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Uruguay",
    countryCode: "UY",
    flag: "🇺🇾",
    overview: "Uruguay handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Vanuatu",
    countryCode: "VU",
    flag: "🇻🇺",
    overview: "Vanuatu handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Venezuela, Bolivarian Republic of",
    countryCode: "VE",
    flag: "🇻🇪",
    overview: "Venezuela, Bolivarian Republic of handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Viet Nam",
    countryCode: "VN",
    flag: "🇻🇳",
    overview: "Viet Nam handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "British Virgin Islands",
    countryCode: "VG",
    flag: "🇻🇬",
    overview: "Virgin Islands (British) handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "United States Virgin Islands",
    countryCode: "VI",
    flag: "🇻🇮",
    overview: "Virgin Islands (U.S.) handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Wallis and Futuna",
    countryCode: "WF",
    flag: "🇼🇫",
    overview: "Wallis and Futuna handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Western Sahara",
    countryCode: "EH",
    flag: "🇪🇭",
    overview: "Western Sahara handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Zambia",
    countryCode: "ZM",
    flag: "🇿🇲",
    overview: "Zambia handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Zimbabwe",
    countryCode: "ZW",
    flag: "🇿🇼",
    overview: "Zimbabwe handles name changes through the civil registry or equivalent authority. Procedures vary by jurisdiction. Contact your local registry office or vital statistics department for specific requirements.",
    estimatedCost: "Varies by jurisdiction",
    estimatedCostUSD: [20, 300],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at your local civil registry, vital statistics office, or municipality about name change procedures.", documents: ["ID","Birth certificate"] },
      { title: "Gather Documents", description: "Obtain required documents, which may include proof of identity, birth certificate, and a written statement of reason.", documents: ["ID","Birth certificate","Application form"] },
      { title: "Submit Application", description: "Submit the application according to local procedures. Some jurisdictions require a court order or newspaper publication.", documents: ["Application","Supporting documents"] },
      { title: "Update Records", description: "Once approved, update your ID, passport, and other official records.", documents: ["Approval or court order","Old documents"] }
    ],
    tips: [
      "Verify current requirements with local authorities before starting",
      "Local Islamic centers may provide conversion documentation if needed",
      "Keep certified copies of all submitted and received documents"
    ],
    resources: [
      { title: "Contact local civil registry", url: "#" }
    ],
    religiousExemptions: "Many countries accept religious conversion as a valid reason for name changes. Confirm with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Åland Islands",
    countryCode: "AX",
    flag: "🇦🇽",
    overview: "Åland Islands handles name changes through the Finnish Civil Registry (Maistraatti). As an autonomous region of Finland, the process follows Finnish law.",
    estimatedCost: "Varies",
    estimatedCostUSD: [20, 200],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Inquire at the local Maistraatti or Finnish Digital and Population Data Services.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Submit the name change application according to Finnish procedures.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update ID and other official records once approved.", documents: ["Approval", "Old documents"] }
    ],
    tips: ["Verify with Finnish authorities — Åland follows Finnish civil law", "Swedish is the official language"],
    resources: [{ title: "Finnish Population Register", url: "https://dvv.fi" }],
    religiousExemptions: "Finnish law permits name changes for valid reasons including religious conversion.",
    lastUpdated: "2026-02"
  },
  {
    country: "Bonaire, Sint Eustatius and Saba",
    countryCode: "BQ",
    flag: "🇧🇶",
    overview: "The Caribbean Netherlands (Bonaire, Sint Eustatius, Saba) handle name changes through the Civil Registry (Bevolkingsregister). Procedures follow Dutch law.",
    estimatedCost: "Varies",
    estimatedCostUSD: [30, 250],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Apply at the local municipality or civil registry office.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Submit the name change request with required documentation.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update ID and other records once approved.", documents: ["Approval", "Old documents"] }
    ],
    tips: ["Dutch law applies; contact local civil registry for specifics", "Documents may need apostille if from abroad"],
    resources: [{ title: "Government of Bonaire", url: "https://www.bonairegov.com" }],
    religiousExemptions: "Dutch law permits name changes for valid reasons including religious conversion.",
    lastUpdated: "2026-02"
  },
  {
    country: "Christmas Island",
    countryCode: "CX",
    flag: "🇨🇽",
    overview: "Christmas Island is an Australian external territory. Name changes follow Australian law through the Australian Government.",
    estimatedCost: "AUD 50 - 200",
    estimatedCostUSD: [33, 130],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Contact Births, Deaths and Marriages", description: "Apply through the relevant Australian state/territory registry.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Complete the name change application.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update Australian documents.", documents: ["Certificate", "Old documents"] }
    ],
    tips: ["Australian procedures apply; residents use Australian state registries"],
    resources: [{ title: "Australian BDM", url: "https://www.ag.gov.au" }],
    religiousExemptions: "Australian law permits name changes for valid reasons including religious conversion.",
    lastUpdated: "2026-02"
  },
  {
    country: "Cocos (Keeling) Islands",
    countryCode: "CC",
    flag: "🇨🇨",
    overview: "The Cocos (Keeling) Islands are an Australian external territory. Name changes follow Australian law.",
    estimatedCost: "AUD 50 - 200",
    estimatedCostUSD: [33, 130],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Contact Australian Registry", description: "Apply through the relevant Australian state registry.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Complete the name change application.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update Australian documents.", documents: ["Certificate", "Old documents"] }
    ],
    tips: ["Australian procedures apply for residents"],
    resources: [{ title: "Australian BDM", url: "https://www.ag.gov.au" }],
    religiousExemptions: "Australian law permits name changes for valid reasons including religious conversion.",
    lastUpdated: "2026-02"
  },
  {
    country: "Gibraltar",
    countryCode: "GI",
    flag: "🇬🇮",
    overview: "Gibraltar handles name changes through the Civil Status and Registration Office. As a British Overseas Territory, procedures may follow UK-influenced law.",
    estimatedCost: "£50 - £200",
    estimatedCostUSD: [63, 250],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Status Office", description: "Inquire at the Civil Status and Registration Office.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Submit the name change request with required documents.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update Gibraltar ID and other records.", documents: ["Certificate", "Old documents"] }
    ],
    tips: ["Contact the Gibraltar Government for current procedures", "UK-style deed poll may be recognised"],
    resources: [{ title: "Gibraltar Government", url: "https://www.gibraltar.gov.gi" }],
    religiousExemptions: "Religious conversion is typically accepted as a valid reason. Verify with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Guernsey",
    countryCode: "GG",
    flag: "🇬🇬",
    overview: "Guernsey handles name changes through the Greffe. The process is straightforward for residents.",
    estimatedCost: "£30 - £150",
    estimatedCostUSD: [38, 188],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Contact the Greffe", description: "Apply at the Royal Court of Guernsey Greffe.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Submit the name change application.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update ID and other records.", documents: ["Certificate", "Old documents"] }
    ],
    tips: ["Channel Islands have their own legal system", "Deed poll may be used"],
    resources: [{ title: "States of Guernsey", url: "https://www.gov.gg" }],
    religiousExemptions: "Religious conversion is generally accepted. Verify with the Greffe.",
    lastUpdated: "2026-02"
  },
  {
    country: "Isle of Man",
    countryCode: "IM",
    flag: "🇮🇲",
    overview: "The Isle of Man handles name changes through the Civil Registry. The process follows Manx law.",
    estimatedCost: "£30 - £150",
    estimatedCostUSD: [38, 188],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registry", description: "Apply at the General Registry.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Submit the name change application or deed poll.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update Manx and UK documents.", documents: ["Certificate", "Old documents"] }
    ],
    tips: ["UK deed poll is often recognised", "Independent legal jurisdiction"],
    resources: [{ title: "Isle of Man Government", url: "https://www.gov.im" }],
    religiousExemptions: "Religious conversion is generally accepted. Verify with the General Registry.",
    lastUpdated: "2026-02"
  },
  {
    country: "Jersey",
    countryCode: "JE",
    flag: "🇯🇪",
    overview: "Jersey handles name changes through the Judicial Greffe. The process follows Jersey law.",
    estimatedCost: "£30 - £150",
    estimatedCostUSD: [38, 188],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Contact Judicial Greffe", description: "Apply at the Royal Court of Jersey.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Submit the name change application or deed poll.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update Jersey and UK documents.", documents: ["Certificate", "Old documents"] }
    ],
    tips: ["Channel Islands have their own legal system", "UK deed poll may be recognised"],
    resources: [{ title: "Gov.je", url: "https://www.gov.je" }],
    religiousExemptions: "Religious conversion is generally accepted. Verify with the Judicial Greffe.",
    lastUpdated: "2026-02"
  },
  {
    country: "Saint Helena, Ascension and Tristan da Cunha",
    countryCode: "SH",
    flag: "🇸🇭",
    overview: "Saint Helena, Ascension and Tristan da Cunha handle name changes through the Civil Registration Office. As British Overseas Territories, procedures follow local regulations.",
    estimatedCost: "£20 - £100",
    estimatedCostUSD: [25, 125],
    estimatedTimeline: "4 - 16 weeks",
    estimatedTimelineWeeks: [4, 16],
    difficulty: "moderate",
    steps: [
      { title: "Contact Civil Registration", description: "Apply at the local Civil Registration Office.", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Submit the name change request.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update local and UK documents.", documents: ["Certificate", "Old documents"] }
    ],
    tips: ["Remote territories — allow extra time", "UK deed poll may be recognised"],
    resources: [{ title: "St Helena Government", url: "https://www.sainthelena.gov.sh" }],
    religiousExemptions: "Religious conversion is generally accepted. Verify with local authorities.",
    lastUpdated: "2026-02"
  },
  {
    country: "Svalbard and Jan Mayen",
    countryCode: "SJ",
    flag: "🇸🇯",
    overview: "Svalbard and Jan Mayen follow Norwegian law. Name changes are processed through the Norwegian Tax Administration (Skatteetaten) and Population Register.",
    estimatedCost: "NOK 0 - 500",
    estimatedCostUSD: [0, 50],
    estimatedTimeline: "4 - 8 weeks",
    estimatedTimelineWeeks: [4, 8],
    difficulty: "moderate",
    steps: [
      { title: "Contact Norwegian Registry", description: "Apply through the Norwegian Population Register (Folkeregisteret).", documents: ["ID", "Birth certificate"] },
      { title: "Submit Application", description: "Submit the name change application to Skatteetaten.", documents: ["Application", "Supporting documents"] },
      { title: "Update Records", description: "Update Norwegian ID and other records.", documents: ["Approval", "Old documents"] }
    ],
    tips: ["Norwegian law applies; Svalbard has special status", "Digital application available"],
    resources: [{ title: "Skatteetaten", url: "https://www.skatteetaten.no" }],
    religiousExemptions: "Norwegian law permits name changes for valid reasons including religious conversion.",
    lastUpdated: "2026-02"
  },
  {
    country: "United States Minor Outlying Islands",
    countryCode: "UM",
    flag: "🇺🇲",
    overview: "US Minor Outlying Islands (e.g. Midway, Wake, Johnston Atoll) have no permanent population. Residents typically use US state procedures for name changes.",
    estimatedCost: "Varies by US state",
    estimatedCostUSD: [150, 500],
    estimatedTimeline: "4 - 12 weeks",
    estimatedTimelineWeeks: [4, 12],
    difficulty: "moderate",
    steps: [
      { title: "Use US State Procedures", description: "Apply for name change in your US state of residence or last residence.", documents: ["ID", "Birth certificate", "Court petition"] },
      { title: "Court Order", description: "Obtain a court order from a US court.", documents: ["Court order"] },
      { title: "Update Records", description: "Update Social Security, passport, and other US documents.", documents: ["Court order", "Old documents"] }
    ],
    tips: ["No civil registry on uninhabited islands; use continental US procedures", "Military/civilian personnel may have specific processes"],
    resources: [{ title: "US Courts", url: "https://www.uscourts.gov" }],
    religiousExemptions: "US law permits name changes for valid reasons including religious conversion.",
    lastUpdated: "2026-02"
  }
];

export function getGuideByCountry(countryCode: string): LegalNameChangeGuide | undefined {
  return legalNameChangeDatabase.find(g => g.countryCode === countryCode);
}
