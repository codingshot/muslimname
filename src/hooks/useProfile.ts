import { useState, useEffect, useCallback } from "react";

export interface ProfileSettings {
  currentFirstName: string;
  currentLastName: string;
  preferredMeanings: string[];
  genderPreference: "all" | "male" | "female" | "unisex";
}

export type NamePosition = "first" | "last";

export interface FavoriteEntry {
  slug: string;
  /** Tags: can be empty (just saved), or contain "first", "last", or both */
  positions: NamePosition[];
  rank: number;
  // Legacy compat
  position?: "first" | "last" | "undecided";
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

function migrateEntry(f: any): FavoriteEntry {
  // Migrate old single-position to new multi-position array
  if (f.positions) return f;
  const positions: NamePosition[] = [];
  if (f.position === "first") positions.push("first");
  if (f.position === "last") positions.push("last");
  return { slug: f.slug, positions, rank: f.rank ?? 0 };
}

function loadProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
      parsed.favorites = (parsed.favorites || []).map(migrateEntry);
      return parsed;
    }
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
        favorites: [...prev.favorites, { slug, positions: [], rank: prev.favorites.length }],
      };
    });
  }, []);

  const isFavorite = useCallback((slug: string) => {
    return profile.favorites.some(f => f.slug === slug);
  }, [profile.favorites]);

  const togglePosition = useCallback((slug: string, pos: NamePosition) => {
    setProfile(prev => ({
      ...prev,
      favorites: prev.favorites.map(f => {
        if (f.slug !== slug) return f;
        const has = f.positions.includes(pos);
        return {
          ...f,
          positions: has
            ? f.positions.filter(p => p !== pos)
            : [...f.positions, pos],
        };
      }),
    }));
  }, []);

  // Legacy compat — keep for drag-and-drop section drops
  const setFavoritePosition = useCallback((slug: string, position: "first" | "last" | "undecided") => {
    setProfile(prev => ({
      ...prev,
      favorites: prev.favorites.map(f => {
        if (f.slug !== slug) return f;
        if (position === "undecided") {
          return { ...f, positions: [] };
        }
        // Add if not present
        const pos = position as NamePosition;
        if (!f.positions.includes(pos)) {
          return { ...f, positions: [...f.positions, pos] };
        }
        return f;
      }),
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
    togglePosition,
    setFavoritePosition,
    reorderFavorites,
  };
}
