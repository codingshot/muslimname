import { useState, useEffect, useCallback } from "react";

export interface ProfileSettings {
  currentFirstName: string;
  currentLastName: string;
  preferredMeanings: string[];
  genderPreference: "all" | "male" | "female" | "unisex";
}

export interface FavoriteEntry {
  slug: string;
  position: "first" | "last" | "undecided";
  rank: number;
}

export interface UserProfile {
  settings: ProfileSettings;
  favorites: FavoriteEntry[];
}

const DEFAULT_PROFILE: UserProfile = {
  settings: {
    currentFirstName: "",
    currentLastName: "",
    preferredMeanings: [],
    genderPreference: "all",
  },
  favorites: [],
};

const STORAGE_KEY = "muslimname-profile";

function loadProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {}
  return { ...DEFAULT_PROFILE };
}

function saveProfile(profile: UserProfile) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile>(loadProfile);

  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  const updateSettings = useCallback((partial: Partial<ProfileSettings>) => {
    setProfile(prev => ({
      ...prev,
      settings: { ...prev.settings, ...partial },
    }));
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setProfile(prev => {
      const exists = prev.favorites.find(f => f.slug === slug);
      if (exists) {
        return { ...prev, favorites: prev.favorites.filter(f => f.slug !== slug) };
      }
      return {
        ...prev,
        favorites: [...prev.favorites, { slug, position: "undecided" as const, rank: prev.favorites.length }],
      };
    });
  }, []);

  const isFavorite = useCallback((slug: string) => {
    return profile.favorites.some(f => f.slug === slug);
  }, [profile.favorites]);

  const setFavoritePosition = useCallback((slug: string, position: FavoriteEntry["position"]) => {
    setProfile(prev => ({
      ...prev,
      favorites: prev.favorites.map(f => f.slug === slug ? { ...f, position } : f),
    }));
  }, []);

  const reorderFavorites = useCallback((startIndex: number, endIndex: number) => {
    setProfile(prev => {
      const list = [...prev.favorites];
      const [removed] = list.splice(startIndex, 1);
      list.splice(endIndex, 0, removed);
      return { ...prev, favorites: list.map((f, i) => ({ ...f, rank: i })) };
    });
  }, []);

  return {
    profile,
    updateSettings,
    toggleFavorite,
    isFavorite,
    setFavoritePosition,
    reorderFavorites,
  };
}
