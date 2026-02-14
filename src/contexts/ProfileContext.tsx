import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import { toast } from "sonner";

export type NameDisplayFont = "default" | "amiri" | "noto-naskh" | "scheherazade" | "kufi";

/** Settings for the Random name button (boy/girl, filters) — persisted in profile */
export interface RandomSettings {
  gender: "all" | "male" | "female";
  quranicOnly: boolean;
  origin: string;
  themes: string[];
}

export interface ProfileSettings {
  currentFirstName: string;
  currentLastName: string;
  preferredMeanings: string[];
  genderPreference: "all" | "male" | "female" | "unisex";
  /** Random button filters — boy/girl, Quranic only, origin, themes */
  randomSettings?: RandomSettings;
  /** ISO 3166-1 alpha-2 country code for name recommendations (manual override; else IP-detected) */
  country?: string;
  /** Currency for legal guide costs (auto from country if unset) */
  defaultCurrency?: string;
  /** Show source URLs for name mapping data (e.g. on Western Name Reference) */
  showMappingSources?: boolean;
  /** Font for displaying names (applies across the app) */
  nameDisplayFont?: NameDisplayFont;
}

export type NamePosition = "first" | "last";

export interface FavoriteEntry {
  slug: string;
  positions: NamePosition[];
  rank: number;
  position?: "first" | "last" | "undecided";
}

export interface UserProfile {
  settings: ProfileSettings;
  favorites: FavoriteEntry[];
}

const DEFAULT_RANDOM_SETTINGS: RandomSettings = {
  gender: "all",
  quranicOnly: false,
  origin: "all",
  themes: [],
};

const DEFAULT_PROFILE: UserProfile = {
  settings: {
    currentFirstName: "",
    currentLastName: "",
    preferredMeanings: [],
    genderPreference: "all",
    randomSettings: DEFAULT_RANDOM_SETTINGS,
  },
  favorites: [],
};

const STORAGE_KEY = "muslimname-profile";
const SAVE_DEBOUNCE_MS = 300;

function migrateEntry(f: { slug: string; position?: string; rank?: number; positions?: NamePosition[] }): FavoriteEntry {
  if (f.positions) return f as FavoriteEntry;
  const positions: NamePosition[] = [];
  if (f.position === "first") positions.push("first");
  if (f.position === "last") positions.push("last");
  return { slug: f.slug, positions, rank: f.rank ?? 0 };
}

function loadProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<UserProfile>;
      const rs = parsed.settings?.randomSettings;
      const settings: ProfileSettings = {
        ...DEFAULT_PROFILE.settings,
        ...(parsed.settings || {}),
        randomSettings: {
          ...DEFAULT_RANDOM_SETTINGS,
          ...(rs && typeof rs === "object" ? rs : {}),
        },
      };
      const favorites = (parsed.favorites || []).map(migrateEntry);
      return { settings, favorites };
    }
  } catch {}
  return { ...DEFAULT_PROFILE };
}

interface ProfileContextValue {
  profile: UserProfile;
  updateSettings: (partial: Partial<ProfileSettings>) => void;
  /** Update only random button settings (merged with existing) */
  updateRandomSettings: (partial: Partial<RandomSettings>) => void;
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  togglePosition: (slug: string, pos: NamePosition) => void;
  setFavoritePosition: (slug: string, position: "first" | "last" | "undecided") => void;
  addAsFirstOrLast: (slug: string, position: NamePosition) => void;
  reorderFavorites: (startIndex: number, endIndex: number) => void;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(loadProfile);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const profileRef = useRef(profile);
  profileRef.current = profile;

  useEffect(() => {
    const save = () => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profileRef.current));
      } catch {}
    };
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      save();
      saveTimerRef.current = null;
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
        save();
      }
    };
  }, [profile]);

  const updateSettings = useCallback((partial: Partial<ProfileSettings>) => {
    setProfile(prev => ({ ...prev, settings: { ...prev.settings, ...partial } }));
  }, []);

  const updateRandomSettings = useCallback((partial: Partial<RandomSettings>) => {
    setProfile(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        randomSettings: { ...DEFAULT_RANDOM_SETTINGS, ...prev.settings.randomSettings, ...partial },
      },
    }));
  }, []);

  const toggleFavorite = useCallback((slug: string) => {
    setProfile(prev => {
      const exists = prev.favorites.find(f => f.slug === slug);
      if (exists) {
        toast.success("Removed from favorites");
        return { ...prev, favorites: prev.favorites.filter(f => f.slug !== slug) };
      }
      toast.success("Added to favorites");
      return { ...prev, favorites: [...prev.favorites, { slug, positions: [], rank: prev.favorites.length }] };
    });
  }, []);

  const isFavorite = useCallback((slug: string) => profile.favorites.some(f => f.slug === slug), [profile.favorites]);

  const togglePosition = useCallback((slug: string, pos: NamePosition) => {
    setProfile(prev => {
      let removed = false;
      const next = prev.favorites.map(f => {
        if (f.slug !== slug) return f;
        const has = f.positions.includes(pos);
        if (has) removed = true;
        return { ...f, positions: has ? f.positions.filter(p => p !== pos) : [...f.positions, pos] };
      });
      if (removed) {
        toast.success(pos === "first" ? "Removed from first name" : "Removed from last name");
      }
      return { ...prev, favorites: next };
    });
  }, []);

  /** Add name to favorites with position, creating entry if needed */
  const addAsFirstOrLast = useCallback((slug: string, position: NamePosition) => {
    if (!slug?.trim()) return;
    setProfile(prev => {
      const exists = prev.favorites.find(f => f.slug === slug);
      const hadPosition = exists && (exists.positions ?? []).includes(position);
      const nextFavorites = exists
        ? prev.favorites.map(f =>
            f.slug === slug
              ? { ...f, positions: hadPosition ? (f.positions ?? []) : [...(f.positions ?? []), position] }
              : f
          )
        : [...prev.favorites, { slug, positions: [position], rank: prev.favorites.length }];
      if (!hadPosition) {
        toast.success(position === "first" ? "Added as first name contender" : "Added as last name contender");
      }
      return { ...prev, favorites: nextFavorites };
    });
  }, []);

  const setFavoritePosition = useCallback((slug: string, position: "first" | "last" | "undecided") => {
    setProfile(prev => ({
      ...prev,
      favorites: prev.favorites.map(f => {
        if (f.slug !== slug) return f;
        if (position === "undecided") return { ...f, positions: [] };
        const pos = position as NamePosition;
        if (!f.positions.includes(pos)) return { ...f, positions: [...f.positions, pos] };
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

  const value: ProfileContextValue = {
    profile,
    updateSettings,
    updateRandomSettings,
    toggleFavorite,
    isFavorite,
    togglePosition,
    setFavoritePosition,
    addAsFirstOrLast,
    reorderFavorites,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export function useProfileContext(): ProfileContextValue {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
