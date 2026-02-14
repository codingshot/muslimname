/**
 * Country detection and lookup for name recommendations.
 * Uses IP geolocation (ip-api.com) when no manual country is set.
 */

const IP_API_URL = "https://ipapi.co/json/";
const CACHE_KEY = "muslimname-country-ip";
const CACHE_HOURS = 24;

export interface CountryInfo {
  code: string;
  name: string;
}

/** Convert ISO 3166-1 alpha-2 code to flag emoji (e.g. "US" → "🇺🇸") */
export function getCountryFlag(code: string): string {
  if (!code || code.length !== 2) return "";
  const c = code.toUpperCase();
  return [...c].map(char => String.fromCodePoint(0x1f1e6 - 65 + char.charCodeAt(0))).join("");
}

/** Get display name for country code; uses COUNTRY_OPTIONS when available */
export function getCountryName(code: string): string {
  const upper = code?.toUpperCase();
  if (!upper || upper.length !== 2) return code || "";
  const found = COUNTRY_OPTIONS.find(c => c.code === upper);
  if (found) return found.name;
  const names: Record<string, string> = {
    VN: "Vietnam", CN: "China", KR: "South Korea", JP: "Japan",
    AE: "UAE", EG: "Egypt", SA: "Saudi Arabia", MY: "Malaysia",
    ID: "Indonesia", PK: "Pakistan", BD: "Bangladesh", PH: "Philippines",
    TR: "Turkey", RU: "Russia", MX: "Mexico", AR: "Argentina",
    CO: "Colombia", GH: "Ghana", ZA: "South Africa", KE: "Kenya",
  };
  return names[upper] || upper;
}

/** Common countries for name popularity (ISO 3166-1 alpha-2) */
export const COUNTRY_OPTIONS: CountryInfo[] = [
  { code: "BR", name: "Brazil" },
  { code: "NG", name: "Nigeria" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "IN", name: "India" },
  { code: "PK", name: "Pakistan" },
  { code: "BD", name: "Bangladesh" },
  { code: "ID", name: "Indonesia" },
  { code: "VN", name: "Vietnam" },
  { code: "TH", name: "Thailand" },
  { code: "EG", name: "Egypt" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "MY", name: "Malaysia" },
  { code: "ZA", name: "South Africa" },
  { code: "KE", name: "Kenya" },
  { code: "GH", name: "Ghana" },
  { code: "PT", name: "Portugal" },
  { code: "ES", name: "Spain" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "IT", name: "Italy" },
  { code: "RU", name: "Russia" },
  { code: "CN", name: "China" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "TR", name: "Turkey" },
  { code: "MX", name: "Mexico" },
  { code: "AR", name: "Argentina" },
  { code: "CO", name: "Colombia" },
  { code: "PH", name: "Philippines" },
];

function getCachedCountry(): string | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { code, at } = JSON.parse(raw);
    if (!code || typeof code !== "string") return null;
    const age = Date.now() - (at || 0);
    if (age > CACHE_HOURS * 60 * 60 * 1000) return null;
    return code.toUpperCase();
  } catch {
    return null;
  }
}

function setCachedCountry(code: string) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ code: code.toUpperCase(), at: Date.now() }));
  } catch {}
}

/** Fetch country from IP (cached). Returns ISO 3166-1 alpha-2 or null. */
export async function detectCountryFromIP(): Promise<string | null> {
  const cached = getCachedCountry();
  if (cached) return cached;

  try {
    const res = await fetch(IP_API_URL, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const data = await res.json();
    const code = data?.country_code;
    if (typeof code === "string" && code.length === 2) {
      const upper = code.toUpperCase();
      setCachedCountry(upper);
      return upper;
    }
  } catch {}

  return null;
}
