import { useState, useEffect, useCallback } from "react";
import { useProfile } from "./useProfile";
import { detectCountryFromIP } from "@/lib/country";

/**
 * Returns the user's country for name recommendations.
 * Prefers manual setting (profile.settings.country), else IP-detected country.
 */
export function useCountry(): {
  country: string | null;
  isLoading: boolean;
  setCountry: (code: string | null) => void;
} {
  const { profile, updateSettings } = useProfile();
  const [ipCountry, setIpCountry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    detectCountryFromIP()
      .then((code) => {
        if (!cancelled) {
          setIpCountry(code);
        }
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const manual = profile.settings.country?.trim().toUpperCase() || null;
  const country = manual || ipCountry;

  const setCountry = useCallback(
    (code: string | null) => {
      updateSettings({ country: code || undefined });
    },
    [updateSettings]
  );

  return { country, isLoading, setCountry };
}
