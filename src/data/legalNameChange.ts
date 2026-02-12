export interface LegalNameChangeGuide {
  country: string;
  countryCode: string;
  flag: string;
  overview: string;
  estimatedCost: string;
  estimatedTimeline: string;
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
    estimatedTimeline: "4 - 12 weeks",
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
      { title: "USCIS - Legal Name Change", url: "https://www.uscis.gov" },
      { title: "Social Security Name Change", url: "https://www.ssa.gov/myaccount/name-change.html" },
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
    estimatedCost: "£0 - £42 (enrolled deed poll costs more)",
    estimatedTimeline: "1 - 4 weeks",
    difficulty: "easy",
    steps: [
      { title: "Decide Between Unenrolled and Enrolled Deed Poll", description: "An unenrolled deed poll is free and sufficient for most purposes. An enrolled deed poll (£42) creates a permanent public record at the Royal Courts of Justice.", documents: [] },
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
    estimatedTimeline: "6 - 16 weeks",
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
    estimatedTimeline: "4 - 8 weeks",
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
    estimatedTimeline: "2 - 6 months",
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
    estimatedTimeline: "1 - 3 months",
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
    estimatedTimeline: "2 - 8 weeks",
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
    estimatedTimeline: "4 - 12 weeks",
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
  // --- NEW COUNTRIES ---
  {
    country: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    overview: "In India, name changes are done through a combination of newspaper publication, Government Gazette notification, and an affidavit. The process is handled at the state level and does not require a court order for adults.",
    estimatedCost: "₹1,000 - ₹5,000",
    estimatedTimeline: "4 - 10 weeks",
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
    estimatedTimeline: "2 - 6 weeks",
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
    estimatedTimeline: "4 - 12 weeks",
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
    estimatedTimeline: "2 - 8 weeks",
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
    estimatedTimeline: "2 - 6 weeks",
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
    country: "Turkey",
    countryCode: "TR",
    flag: "🇹🇷",
    overview: "Turkey requires a court order for name changes, obtained through a Civil Court of First Instance (Asliye Hukuk Mahkemesi). The process is well-defined under the Turkish Civil Code Article 27.",
    estimatedCost: "₺500 - ₺2,000",
    estimatedTimeline: "4 - 12 weeks",
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
      "Turkey's civil code allows name changes for 'just cause' (haklı sebep) — religion qualifies",
      "After court approval, updates to nüfus records happen within days",
      "Passport and other document updates follow the nüfus update automatically"
    ],
    resources: [
      { title: "e-Devlet (e-Government Portal)", url: "https://www.turkiye.gov.tr" },
      { title: "Diyanet İşleri Başkanlığı", url: "https://www.diyanet.gov.tr" },
      { title: "Nüfus ve Vatandaşlık İşleri", url: "https://www.nvi.gov.tr" }
    ],
    religiousExemptions: "Turkish Civil Code Article 27 allows name changes for 'just cause' (haklı sebep). Religious conversion is well-established as a valid reason. Turkey's Diyanet (Religious Affairs) can provide supporting documentation.",
    lastUpdated: "2026-01"
  },
  {
    country: "Saudi Arabia",
    countryCode: "SA",
    flag: "🇸🇦",
    overview: "In Saudi Arabia, name changes for new Muslims are facilitated through the Ministry of Interior's Civil Affairs department (الأحوال المدنية). The process is streamlined for converts with proper Islamic documentation.",
    estimatedCost: "SAR 0 - 100",
    estimatedTimeline: "1 - 4 weeks",
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
    estimatedTimeline: "1 - 4 weeks",
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
    estimatedTimeline: "4 - 16 weeks",
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
    estimatedTimeline: "2 - 8 weeks",
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
  }
];

export function getGuideByCountry(countryCode: string): LegalNameChangeGuide | undefined {
  return legalNameChangeDatabase.find(g => g.countryCode === countryCode);
}
