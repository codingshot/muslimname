/**
 * Currency conversion for legal guide costs.
 * Uses approximate exchange rates from USD (base). Update periodically.
 * Costs in legal guides are stored in USD; we convert for display.
 */

export type CurrencyCode =
  | "USD"
  | "GBP"
  | "EUR"
  | "CAD"
  | "AUD"
  | "NZD"
  | "CHF"
  | "SEK"
  | "NOK"
  | "DKK"
  | "JPY"
  | "CNY"
  | "KRW"
  | "INR"
  | "PKR"
  | "BDT"
  | "MYR"
  | "SGD"
  | "IDR"
  | "THB"
  | "PHP"
  | "TRY"
  | "SAR"
  | "AED"
  | "EGP"
  | "ZAR"
  | "NGN"
  | "KES"
  | "GHS"
  | "BRL"
  | "MXN"
  | "ARS"
  | "COP"
  | "RUB"
  | "MAD"
  | "TND"
  | "JOD"
  | "IQD"
  | "KWD"
  | "QAR"
  | "BHD"
  | "OMR"
  | "LBP"
  | "IRR"
  | "AFN"
  | "MMK"
  | "BND"
  | "MVR"
  | "PLN"
  | "BAM"
  | "ALL"
  | "DZD"
  | "LYD"
  | "SDG"
  | "SOS"
  | "ETB"
  | "TZS"
  | "XOF"
  | "UZS"
  | "KZT"
  | "TJS"
  | "KGS"
  | "TMT"
  | "YER"
  | "XAF";

/** Exchange rate: 1 USD = X units of this currency */
export const USD_TO_CURRENCY: Record<CurrencyCode, number> = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.92,
  CAD: 1.35,
  AUD: 1.53,
  NZD: 1.63,
  CHF: 0.88,
  SEK: 10.5,
  NOK: 11,
  DKK: 6.9,
  JPY: 150,
  CNY: 7.25,
  KRW: 1380,
  INR: 83,
  PKR: 278,
  BDT: 110,
  MYR: 4.75,
  SGD: 1.35,
  IDR: 15800,
  THB: 36,
  PHP: 56,
  TRY: 34,
  SAR: 3.75,
  AED: 3.67,
  EGP: 49,
  ZAR: 18,
  NGN: 1650,
  KES: 130,
  GHS: 13,
  BRL: 6.0,
  MXN: 17.5,
  ARS: 1200,
  COP: 4100,
  RUB: 100,
  MAD: 10,
  TND: 3.1,
  JOD: 0.71,
  IQD: 1310,
  KWD: 0.31,
  QAR: 3.64,
  BHD: 0.38,
  OMR: 0.38,
  LBP: 89500,
  IRR: 42000,
  AFN: 72,
  MMK: 2100,
  BND: 1.35,
  MVR: 15.4,
  PLN: 4.0,
  BAM: 1.8,
  ALL: 95,
  DZD: 134,
  LYD: 4.85,
  SDG: 600,
  SOS: 571,
  ETB: 58,
  TZS: 2600,
  XOF: 600,
  UZS: 12500,
  KZT: 450,
  TJS: 11,
  KGS: 89,
  TMT: 3.5,
  YER: 250,
  XAF: 600,
};

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
  /** Position: 'before' | 'after' */
  symbolPosition: "before" | "after";
  /** For large numbers (IDR, VND, etc) use compact notation */
  useCompact?: boolean;
}

export const CURRENCY_INFO: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: "USD", symbol: "$", name: "US Dollar", symbolPosition: "before" },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", symbolPosition: "before" },
  EUR: { code: "EUR", symbol: "€", name: "Euro", symbolPosition: "before" },
  CAD: { code: "CAD", symbol: "CA$", name: "Canadian Dollar", symbolPosition: "before" },
  AUD: { code: "AUD", symbol: "A$", name: "Australian Dollar", symbolPosition: "before" },
  NZD: { code: "NZD", symbol: "NZ$", name: "New Zealand Dollar", symbolPosition: "before" },
  CHF: { code: "CHF", symbol: "CHF", name: "Swiss Franc", symbolPosition: "before" },
  SEK: { code: "SEK", symbol: "kr", name: "Swedish Krona", symbolPosition: "after" },
  NOK: { code: "NOK", symbol: "kr", name: "Norwegian Krone", symbolPosition: "after" },
  DKK: { code: "DKK", symbol: "kr", name: "Danish Krone", symbolPosition: "after" },
  JPY: { code: "JPY", symbol: "¥", name: "Japanese Yen", symbolPosition: "before" },
  CNY: { code: "CNY", symbol: "¥", name: "Chinese Yuan", symbolPosition: "before" },
  KRW: { code: "KRW", symbol: "₩", name: "South Korean Won", symbolPosition: "before" },
  INR: { code: "INR", symbol: "₹", name: "Indian Rupee", symbolPosition: "before" },
  PKR: { code: "PKR", symbol: "Rs", name: "Pakistani Rupee", symbolPosition: "before" },
  BDT: { code: "BDT", symbol: "৳", name: "Bangladeshi Taka", symbolPosition: "before" },
  MYR: { code: "MYR", symbol: "RM", name: "Malaysian Ringgit", symbolPosition: "before" },
  SGD: { code: "SGD", symbol: "S$", name: "Singapore Dollar", symbolPosition: "before" },
  IDR: { code: "IDR", symbol: "Rp", name: "Indonesian Rupiah", symbolPosition: "before", useCompact: true },
  THB: { code: "THB", symbol: "฿", name: "Thai Baht", symbolPosition: "before" },
  PHP: { code: "PHP", symbol: "₱", name: "Philippine Peso", symbolPosition: "before" },
  TRY: { code: "TRY", symbol: "₺", name: "Turkish Lira", symbolPosition: "before" },
  SAR: { code: "SAR", symbol: "﷼", name: "Saudi Riyal", symbolPosition: "before" },
  AED: { code: "AED", symbol: "د.إ", name: "UAE Dirham", symbolPosition: "before" },
  EGP: { code: "EGP", symbol: "E£", name: "Egyptian Pound", symbolPosition: "before" },
  ZAR: { code: "ZAR", symbol: "R", name: "South African Rand", symbolPosition: "before" },
  NGN: { code: "NGN", symbol: "₦", name: "Nigerian Naira", symbolPosition: "before" },
  KES: { code: "KES", symbol: "KSh", name: "Kenyan Shilling", symbolPosition: "before" },
  GHS: { code: "GHS", symbol: "₵", name: "Ghanaian Cedi", symbolPosition: "before" },
  BRL: { code: "BRL", symbol: "R$", name: "Brazilian Real", symbolPosition: "before" },
  MXN: { code: "MXN", symbol: "MX$", name: "Mexican Peso", symbolPosition: "before" },
  ARS: { code: "ARS", symbol: "$", name: "Argentine Peso", symbolPosition: "before" },
  COP: { code: "COP", symbol: "CO$", name: "Colombian Peso", symbolPosition: "before", useCompact: true },
  RUB: { code: "RUB", symbol: "₽", name: "Russian Ruble", symbolPosition: "after" },
  MAD: { code: "MAD", symbol: "DH", name: "Moroccan Dirham", symbolPosition: "before" },
  TND: { code: "TND", symbol: "DT", name: "Tunisian Dinar", symbolPosition: "before" },
  JOD: { code: "JOD", symbol: "JD", name: "Jordanian Dinar", symbolPosition: "before" },
  IQD: { code: "IQD", symbol: "IQD", name: "Iraqi Dinar", symbolPosition: "before", useCompact: true },
  KWD: { code: "KWD", symbol: "KD", name: "Kuwaiti Dinar", symbolPosition: "before" },
  QAR: { code: "QAR", symbol: "QR", name: "Qatari Riyal", symbolPosition: "before" },
  BHD: { code: "BHD", symbol: "BD", name: "Bahraini Dinar", symbolPosition: "before" },
  OMR: { code: "OMR", symbol: "OMR", name: "Omani Rial", symbolPosition: "before" },
  LBP: { code: "LBP", symbol: "L£", name: "Lebanese Pound", symbolPosition: "before", useCompact: true },
  IRR: { code: "IRR", symbol: "﷼", name: "Iranian Rial", symbolPosition: "before", useCompact: true },
  AFN: { code: "AFN", symbol: "؋", name: "Afghan Afghani", symbolPosition: "before" },
  MMK: { code: "MMK", symbol: "K", name: "Myanmar Kyat", symbolPosition: "before" },
  BND: { code: "BND", symbol: "B$", name: "Brunei Dollar", symbolPosition: "before" },
  MVR: { code: "MVR", symbol: "Rf", name: "Maldivian Rufiyaa", symbolPosition: "before" },
  PLN: { code: "PLN", symbol: "zł", name: "Polish Złoty", symbolPosition: "after" },
  BAM: { code: "BAM", symbol: "KM", name: "Bosnia-Herzegovina Mark", symbolPosition: "before" },
  ALL: { code: "ALL", symbol: "L", name: "Albanian Lek", symbolPosition: "before" },
  DZD: { code: "DZD", symbol: "DA", name: "Algerian Dinar", symbolPosition: "before" },
  LYD: { code: "LYD", symbol: "LD", name: "Libyan Dinar", symbolPosition: "before" },
  SDG: { code: "SDG", symbol: "SDG", name: "Sudanese Pound", symbolPosition: "before" },
  SOS: { code: "SOS", symbol: "Sh", name: "Somali Shilling", symbolPosition: "before" },
  ETB: { code: "ETB", symbol: "Br", name: "Ethiopian Birr", symbolPosition: "before" },
  TZS: { code: "TZS", symbol: "TSh", name: "Tanzanian Shilling", symbolPosition: "before", useCompact: true },
  XOF: { code: "XOF", symbol: "CFA", name: "West African CFA", symbolPosition: "before" },
  UZS: { code: "UZS", symbol: "so'm", name: "Uzbek Som", symbolPosition: "before", useCompact: true },
  KZT: { code: "KZT", symbol: "₸", name: "Kazakhstani Tenge", symbolPosition: "before" },
  TJS: { code: "TJS", symbol: "SM", name: "Tajikistani Somoni", symbolPosition: "before" },
  KGS: { code: "KGS", symbol: "сом", name: "Kyrgyzstani Som", symbolPosition: "after" },
  TMT: { code: "TMT", symbol: "m", name: "Turkmenistani Manat", symbolPosition: "before" },
  YER: { code: "YER", symbol: "﷼", name: "Yemeni Rial", symbolPosition: "before" },
  XAF: { code: "XAF", symbol: "FCFA", name: "Central African CFA", symbolPosition: "before" },
};

/** Country code (ISO 3166-1 alpha-2) → currency code */
export const COUNTRY_TO_CURRENCY: Record<string, CurrencyCode> = {
  US: "USD",
  GB: "GBP",
  CA: "CAD",
  AU: "AUD",
  NZ: "NZD",
  CH: "CHF",
  SE: "SEK",
  NO: "NOK",
  DK: "DKK",
  JP: "JPY",
  CN: "CNY",
  KR: "KRW",
  IN: "INR",
  PK: "PKR",
  BD: "BDT",
  MY: "MYR",
  SG: "SGD",
  ID: "IDR",
  TH: "THB",
  PH: "PHP",
  TR: "TRY",
  SA: "SAR",
  AE: "AED",
  EG: "EGP",
  ZA: "ZAR",
  NG: "NGN",
  KE: "KES",
  GH: "GHS",
  BR: "BRL",
  MX: "MXN",
  AR: "ARS",
  CO: "COP",
  RU: "RUB",
  MA: "MAD",
  TN: "TND",
  JO: "JOD",
  IQ: "IQD",
  KW: "KWD",
  QA: "QAR",
  BH: "BHD",
  OM: "OMR",
  LB: "LBP",
  IR: "IRR",
  AF: "AFN",
  MM: "MMK",
  BN: "BND",
  MV: "MVR",
  PL: "PLN",
  BA: "BAM",
  AL: "ALL",
  DZ: "DZD",
  LY: "LYD",
  SD: "SDG",
  SO: "SOS",
  ET: "ETB",
  TZ: "TZS",
  SN: "XOF",
  UZ: "UZS",
  KZ: "KZT",
  TJ: "TJS",
  KG: "KGS",
  TM: "TMT",
  YE: "YER",
  // Eurozone
  DE: "EUR",
  FR: "EUR",
  IT: "EUR",
  ES: "EUR",
  NL: "EUR",
  BE: "EUR",
  AT: "EUR",
  IE: "EUR",
  PT: "EUR",
  FI: "EUR",
  GR: "EUR",
  // Additional eurozone / EU
  SK: "EUR",
  SI: "EUR",
  LT: "EUR",
  LV: "EUR",
  EE: "EUR",
  CY: "EUR",
  MT: "EUR",
  LU: "EUR",
  HR: "EUR",
  // Territories / variants
  "MY-SS": "USD", // South Sudan - use USD as placeholder
};

/** Convert USD amount to target currency */
export function convertUSDToCurrency(usdAmount: number, toCurrency: CurrencyCode): number {
  const rate = USD_TO_CURRENCY[toCurrency];
  if (!rate) return usdAmount;
  return usdAmount * rate;
}

/** Get currency for country; defaults to USD if unknown */
export function getCurrencyForCountry(countryCode: string | null | undefined): CurrencyCode {
  if (!countryCode) return "USD";
  const upper = countryCode.trim().toUpperCase();
  return COUNTRY_TO_CURRENCY[upper] ?? "USD";
}

/** Format a range [min, max] in the target currency */
export function formatCurrency(
  rangeUSD: [number, number],
  currency: CurrencyCode,
  options?: { showApprox?: boolean }
): string {
  const info = CURRENCY_INFO[currency];
  const rate = USD_TO_CURRENCY[currency];
  if (!info || !rate) return formatCurrency(rangeUSD, "USD", options);

  const [minUSD, maxUSD] = rangeUSD;
  if (minUSD === 0 && maxUSD === 0) return "Free";

  const formatOne = (n: number): string => {
    const converted = n * rate;
    if (info.useCompact && converted >= 10000) {
      const compact = converted >= 1e6 ? `${(converted / 1e6).toFixed(1)}M` : `${Math.round(converted / 1000)}K`;
      return info.symbolPosition === "before" ? `${info.symbol}${compact}` : `${compact} ${info.symbol}`;
    }
    const rounded = converted < 1 ? converted.toFixed(2) : Math.round(converted).toLocaleString();
    return info.symbolPosition === "before" ? `${info.symbol}${rounded}` : `${rounded} ${info.symbol}`;
  };

  const prefix = options?.showApprox !== false && currency !== "USD" ? "≈ " : "";
  if (minUSD === 0) return `${prefix}Free - ${formatOne(maxUSD)}`;
  if (minUSD === maxUSD) return `${prefix}${formatOne(minUSD)}`;
  return `${prefix}${formatOne(minUSD)} - ${formatOne(maxUSD)}`;
}

/** Common currencies for settings dropdown */
export const CURRENCY_OPTIONS: { code: CurrencyCode; label: string }[] = [
  { code: "USD", label: "US Dollar ($)" },
  { code: "GBP", label: "British Pound (£)" },
  { code: "EUR", label: "Euro (€)" },
  { code: "CAD", label: "Canadian Dollar (CA$)" },
  { code: "AUD", label: "Australian Dollar (A$)" },
  { code: "NZD", label: "New Zealand Dollar (NZ$)" },
  { code: "CHF", label: "Swiss Franc (CHF)" },
  { code: "INR", label: "Indian Rupee (₹)" },
  { code: "PKR", label: "Pakistani Rupee (Rs)" },
  { code: "BDT", label: "Bangladeshi Taka (৳)" },
  { code: "MYR", label: "Malaysian Ringgit (RM)" },
  { code: "SGD", label: "Singapore Dollar (S$)" },
  { code: "IDR", label: "Indonesian Rupiah (Rp)" },
  { code: "SAR", label: "Saudi Riyal" },
  { code: "AED", label: "UAE Dirham" },
  { code: "EGP", label: "Egyptian Pound" },
  { code: "ZAR", label: "South African Rand (R)" },
  { code: "NGN", label: "Nigerian Naira (₦)" },
  { code: "BRL", label: "Brazilian Real (R$)" },
  { code: "MXN", label: "Mexican Peso (MX$)" },
];
