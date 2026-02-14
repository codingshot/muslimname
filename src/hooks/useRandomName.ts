import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "./useProfile";
import { getRandomNameFiltered } from "@/data/names";

const defaultSettings = { gender: "all" as const, quranicOnly: false, origin: "all", themes: [] as string[] };

/** Returns a function to pick a random name using the profile's random settings. */
export function useRandomName() {
  const navigate = useNavigate();
  const { profile } = useProfile();

  const pickRandom = useCallback(() => {
    const rs = { ...defaultSettings, ...profile.settings.randomSettings };
    const name = getRandomNameFiltered({
      gender: rs.gender !== "all" ? rs.gender : undefined,
      quranicOnly: rs.quranicOnly || undefined,
      origin: rs.origin !== "all" ? rs.origin : undefined,
      themes: rs.themes?.length ? rs.themes : undefined,
    });
    if (name) navigate(`/name/${name.slug}`);
  }, [navigate, profile.settings.randomSettings]);

  return { pickRandom };
}
