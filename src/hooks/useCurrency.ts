import { useMemo } from "react";
import { useProfile } from "./useProfile";
import { useCountry } from "./useCountry";
import {
  getCurrencyForCountry,
  type CurrencyCode,
  CURRENCY_INFO,
} from "@/lib/currency";

/**
 * Returns the user's display currency for legal guide costs.
 * Uses profile.settings.defaultCurrency if set, else auto-defaults from country/location.
 */
export function useCurrency(): {
  currency: CurrencyCode;
  currencyLabel: string;
  isAuto: boolean;
  setCurrency: (code: CurrencyCode | null) => void;
} {
  const { profile, updateSettings } = useProfile();
  const { country } = useCountry();

  const countryCurrency = useMemo(
    () => getCurrencyForCountry(country),
    [country]
  );

  const explicit = profile.settings.defaultCurrency?.trim().toUpperCase();
  const currency: CurrencyCode =
    explicit && isValidCurrencyCode(explicit)
      ? (explicit as CurrencyCode)
      : countryCurrency;

  const info = CURRENCY_INFO[currency];
  const currencyLabel = info ? `${info.name} (${info.symbol})` : currency;
  const isAuto = !explicit || !isValidCurrencyCode(explicit);

  const setCurrency = (code: CurrencyCode | null) => {
    updateSettings({ defaultCurrency: code || undefined });
  };

  return { currency, currencyLabel, isAuto, setCurrency };
}

const VALID_CODES = new Set([
  "USD", "GBP", "EUR", "CAD", "AUD", "NZD", "CHF", "SEK", "NOK", "DKK",
  "JPY", "CNY", "KRW", "INR", "PKR", "BDT", "MYR", "SGD", "IDR", "THB",
  "PHP", "TRY", "SAR", "AED", "EGP", "ZAR", "NGN", "KES", "GHS", "BRL",
  "MXN", "ARS", "COP", "RUB", "MAD", "TND", "JOD", "IQD", "KWD", "QAR",
  "BHD", "OMR", "LBP", "IRR", "AFN", "MMK", "BND", "MVR", "PLN", "BAM",
  "ALL", "DZD", "LYD", "SDG", "SOS", "ETB", "TZS", "XOF", "UZS", "KZT",
  "TJS", "KGS", "TMT", "YER", "XAF",
]);

function isValidCurrencyCode(s: string): boolean {
  return VALID_CODES.has(s);
}
