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
      {
        title: "Obtain a Name Change Petition Form",
        description: "Visit your local county courthouse or their website to get the official name change petition form. Some states offer online filing.",
        documents: ["Government-issued ID", "Birth certificate"]
      },
      {
        title: "Complete the Petition",
        description: "Fill out the petition with your current legal name, desired new name, and reason for the change (religious conversion). Some states require you to list all addresses for the past 5 years.",
        documents: ["Completed petition form"]
      },
      {
        title: "File the Petition with the Court",
        description: "Submit your petition to the clerk of court in your county of residence. Pay the filing fee (typically $150-$400).",
        documents: ["Petition", "Filing fee payment"]
      },
      {
        title: "Publish a Legal Notice (if required)",
        description: "Many states require publishing a notice of name change in a local newspaper for a set period (usually 1-4 weeks). The newspaper can usually handle this for you.",
        documents: ["Court order for publication"]
      },
      {
        title: "Attend the Court Hearing",
        description: "Appear before a judge who will review your petition. The judge will typically grant the request unless there is evidence of fraud. Bring identification and any supporting documents.",
        documents: ["Photo ID", "All filed documents"]
      },
      {
        title: "Receive Your Court Order",
        description: "Once approved, obtain certified copies of the name change court order (get at least 5 copies for updating various documents).",
        documents: ["Court order (certified copies)"]
      },
      {
        title: "Update Your Documents",
        description: "Update your Social Security card first, then driver's license, passport, bank accounts, and other records.",
        documents: ["Court order", "Current ID", "SS-5 form"]
      }
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
      {
        title: "Decide Between Unenrolled and Enrolled Deed Poll",
        description: "An unenrolled deed poll is free and sufficient for most purposes. An enrolled deed poll (£42) creates a permanent public record at the Royal Courts of Justice.",
        documents: []
      },
      {
        title: "Create Your Deed Poll Document",
        description: "Write or print a deed poll document stating your old name, new name, and your intention to abandon the old name. You can use free templates online.",
        documents: ["Deed poll document"]
      },
      {
        title: "Sign and Witness",
        description: "Sign the deed poll in the presence of two independent witnesses (not family members). They must also sign.",
        documents: ["Signed deed poll", "Witness signatures"]
      },
      {
        title: "Update Your Records",
        description: "Send copies of your deed poll to update your passport, driving licence, bank accounts, HMRC records, GP, etc.",
        documents: ["Deed poll copies", "Current documents"]
      }
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
      {
        title: "Obtain the Application Form",
        description: "Contact your provincial Vital Statistics office or download the name change application from their website.",
        documents: ["Government photo ID"]
      },
      {
        title: "Complete the Application",
        description: "Fill out the form with your current name, desired name, and reason for change. Religious conversion is an accepted reason in all provinces.",
        documents: ["Completed application form"]
      },
      {
        title: "Gather Supporting Documents",
        description: "Collect required documents including birth certificate, current ID, and any documentation of your conversion (certificate from mosque, etc.).",
        documents: ["Birth certificate", "Photo ID", "Conversion certificate (optional)"]
      },
      {
        title: "Get Fingerprinted (some provinces)",
        description: "Some provinces require a criminal record check as part of the process.",
        documents: ["Fingerprint results"]
      },
      {
        title: "Submit Application and Fee",
        description: "Submit your completed application with all supporting documents and the required fee to your provincial Vital Statistics office.",
        documents: ["Complete application package", "Fee payment"]
      },
      {
        title: "Receive Name Change Certificate",
        description: "Once approved, you'll receive an official name change certificate to use for updating all other documents.",
        documents: ["Name change certificate"]
      }
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
      {
        title: "Check Eligibility",
        description: "You must be an Australian citizen or permanent resident and have lived in the state for at least 12 months (3 months in some states).",
        documents: ["Proof of residency"]
      },
      {
        title: "Complete Application",
        description: "Fill out the Change of Name application form from your state's Registry of Births, Deaths and Marriages.",
        documents: ["Application form", "Proof of identity"]
      },
      {
        title: "Provide Supporting Documents",
        description: "Submit identity documents (usually 3 forms of ID following a point system) and your current birth certificate or citizenship certificate.",
        documents: ["Birth certificate", "Three forms of ID"]
      },
      {
        title: "Submit and Pay",
        description: "Lodge your application in person or by post with the required fee.",
        documents: ["Application package", "Fee payment"]
      },
      {
        title: "Receive Change of Name Certificate",
        description: "After processing, you'll receive an official certificate to update all your records.",
        documents: ["Change of name certificate"]
      }
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
      {
        title: "Consult Your Local Standesamt",
        description: "Visit your local civil registry office (Standesamt) to understand the specific requirements in your district.",
        documents: ["Current ID/passport"]
      },
      {
        title: "Gather Documentation",
        description: "Collect all required documents including birth certificate, registration certificate, and proof of religious conversion.",
        documents: ["Birth certificate (Geburtsurkunde)", "Registration certificate (Meldebescheinigung)", "Conversion certificate"]
      },
      {
        title: "Submit Application",
        description: "File your name change application (Namensänderungsantrag) with the Standesamt or relevant authority.",
        documents: ["Application form", "All supporting documents", "Fee payment"]
      },
      {
        title: "Attend Interview (if required)",
        description: "Some offices may require a personal interview to discuss your reasons for the name change.",
        documents: []
      },
      {
        title: "Receive Decision",
        description: "The authority will issue a decision. If approved, you'll receive an official name change certificate (Namensänderungsurkunde).",
        documents: ["Name change certificate"]
      }
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
      {
        title: "Prepare Your Request",
        description: "Write a formal letter explaining your reasons for wanting to change your first name, including your religious conversion.",
        documents: ["Written request letter"]
      },
      {
        title: "Gather Documents",
        description: "Collect your birth certificate (less than 3 months old), ID, and any supporting documents.",
        documents: ["Recent birth certificate", "Identity document", "Proof of conversion"]
      },
      {
        title: "Submit to Mairie",
        description: "Submit your request to the civil registrar (officier de l'état civil) at your birth town hall or current residence town hall.",
        documents: ["Complete application package"]
      },
      {
        title: "Receive Decision",
        description: "The registrar will decide within about 30 days. If they find the request legitimate, the change is made directly in the civil registry.",
        documents: []
      }
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
      {
        title: "Obtain Conversion Certificate",
        description: "Register your conversion with the State Islamic Religious Department (JAIS/JAKIM) to receive an official conversion certificate (Kad Mualaf).",
        documents: ["Conversion certificate (Kad Mualaf)"]
      },
      {
        title: "Visit JPN (National Registration Department)",
        description: "Go to your nearest JPN office with your conversion certificate and current identity documents.",
        documents: ["IC (Identity Card)", "Conversion certificate", "Application form"]
      },
      {
        title: "Submit Application",
        description: "Fill out the name change application form. Your new name will typically include 'bin/binti Abdullah' if your father is non-Muslim.",
        documents: ["Completed form", "Supporting documents"]
      },
      {
        title: "Receive Updated IC",
        description: "Once approved, you'll receive a new identity card with your Muslim name and updated religion status.",
        documents: ["New IC"]
      }
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
      {
        title: "Publish Notice in Government Gazette",
        description: "Submit a notice of your intended name change to be published in the Government Gazette.",
        documents: ["Notice form"]
      },
      {
        title: "Complete Application Form",
        description: "Fill out the DHA-195 form from the Department of Home Affairs.",
        documents: ["DHA-195 form", "ID document"]
      },
      {
        title: "Submit to Home Affairs",
        description: "Submit your application with the Gazette notice, ID, and required fee.",
        documents: ["Application", "Gazette proof", "ID", "Fee"]
      },
      {
        title: "Receive Amended ID",
        description: "Once approved, apply for an amended identity document.",
        documents: ["Approval letter"]
      }
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
  }
];

export function getGuideByCountry(countryCode: string): LegalNameChangeGuide | undefined {
  return legalNameChangeDatabase.find(g => g.countryCode === countryCode);
}
