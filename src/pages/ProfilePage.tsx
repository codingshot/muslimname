import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { useProfile, type FavoriteEntry, type NamePosition } from "@/hooks/useProfile";
import { useCountry } from "@/hooks/useCountry";
import { useCurrency } from "@/hooks/useCurrency";
import { COUNTRY_OPTIONS, getCountryFlag, getCountryName } from "@/lib/country";
import { CURRENCY_OPTIONS, CURRENCY_INFO, getCurrencyForCountry } from "@/lib/currency";
import { findNameBySlug, searchNames } from "@/data/names";
import { getNameFontClass, NAME_FONT_OPTIONS } from "@/lib/nameFont";
import { getMappingContext, getDidYouMeanSuggestions } from "@/data/nameMapping";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, GripVertical, Trash2, Heart, Sparkles, ArrowRight, Search, Globe, BookOpen, Book, Check } from "lucide-react";
import { motion } from "framer-motion";

const meaningKeywords = [
  "grace", "strong", "light", "beautiful", "pure", "faithful",
  "wise", "life", "courage", "peace", "noble", "love", "leader",
  "eternal", "mercy", "patience", "joy", "knowledge", "sacrifice",
  "devotion", "justice", "beauty", "strength", "purity", "guidance",
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { profile, updateSettings, toggleFavorite, togglePosition, setFavoritePosition, addAsFirstOrLast, reorderFavorites } = useProfile();
  const { country } = useCountry();
  const { currency, currencyLabel, isAuto, setCurrency } = useCurrency();
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);
  const firstSectionRef = useRef<HTMLDivElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);

  const firstNameMapping = profile.settings.currentFirstName
    ? getMappingContext(profile.settings.currentFirstName)
    : null;

  const handleDragStart = (index: number) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      reorderFavorites(dragItem.current, dragOverItem.current);
    }
    dragItem.current = null;
    dragOverItem.current = null;
  };

  const firstNameEntries = profile.favorites.filter(f => f.positions.includes("first"));
  const lastNameEntries = profile.favorites.filter(f => f.positions.includes("last"));

  useEffect(() => {
    const scroll = searchParams.get("scroll");
    if (!scroll) return;
    const el = scroll === "first" ? firstSectionRef.current : scroll === "last" ? lastSectionRef.current : null;
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      setSearchParams(prev => { const next = new URLSearchParams(prev); next.delete("scroll"); return next; }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return (
    <Layout>
      <Helmet>
        <title>My Profile | MuslimName.me</title>
        <meta name="description" content="Manage your favorite Muslim names, first and last name contenders, and preferences." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Add favorites, set preferences, and explore first+last combinations with meanings, Quranic fit, and best matches
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          {/* Quick Add */}
          <QuickAddNames
            isFavorite={(slug: string) => profile.favorites.some(f => f.slug === slug)}
            isInFirst={(slug: string) => profile.favorites.find(f => f.slug === slug)?.positions?.includes("first") ?? false}
            isInLast={(slug: string) => profile.favorites.find(f => f.slug === slug)?.positions?.includes("last") ?? false}
            toggleFavorite={toggleFavorite}
            addAsFirstOrLast={addAsFirstOrLast}
          />

          {/* Your Current Name + Islamic mapping */}
          <div className="bg-card rounded-xl border border-border p-5 sm:p-6">
            <h3 className="font-display text-lg font-semibold mb-4">Your Current Name</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">First Name</label>
                <Input
                  value={profile.settings.currentFirstName ?? ""}
                  onChange={e => updateSettings({ currentFirstName: e.target.value })}
                  placeholder="e.g., David"
                  className="rounded-lg"
                />
                {firstNameMapping ? (
                  <p className="mt-1.5 text-xs text-primary">
                    → Maps to: <span className="font-semibold">{firstNameMapping.muslimNames.join(", ")}</span>
                  </p>
                ) : (profile.settings.currentFirstName ?? "").trim() && (() => {
                  const suggestions = getDidYouMeanSuggestions(profile.settings.currentFirstName ?? "", 3, { countryCode: country ?? undefined });
                  return suggestions.length > 0 ? (
                    <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-muted-foreground">Did you mean:</span>
                      {suggestions.map(({ displayName, canonicalKey }) => (
                        <button
                          key={canonicalKey}
                          type="button"
                          onClick={() => updateSettings({ currentFirstName: displayName })}
                          onDoubleClick={() => navigate(`/western-names/${canonicalKey}`)}
                          title="Double-click to see full details"
                          className="text-xs font-medium text-primary hover:underline bg-primary/10 px-2 py-0.5 rounded-full"
                        >
                          {displayName}
                        </button>
                      ))}
                    </div>
                  ) : null;
                })()}
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Last Name</label>
                <Input
                  value={profile.settings.currentLastName}
                  onChange={e => updateSettings({ currentLastName: e.target.value })}
                  placeholder="e.g., Smith"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Qualities you like + Gender — locally saved */}
          <div className="bg-card rounded-xl border border-border p-5 sm:p-6">
            <h3 className="font-display text-lg font-semibold mb-2">Qualities That Matter to You</h3>
            <p className="text-sm text-muted-foreground mb-4">We use these to highlight name combinations that fit your preferences</p>
            <div className="flex gap-2 flex-wrap">
              {meaningKeywords.map(m => (
                <button
                  key={m}
                  onClick={() => {
                    const current = profile.settings.preferredMeanings;
                    updateSettings({
                      preferredMeanings: current.includes(m)
                        ? current.filter(x => x !== m)
                        : [...current, m],
                    });
                  }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                    profile.settings.preferredMeanings.includes(m)
                      ? "bg-primary text-primary-foreground shadow-glow scale-105"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <h3 className="font-display text-base font-semibold mt-4 mb-2">Gender Preference</h3>
            <div className="flex gap-2 flex-wrap">
              {(["all", "male", "female", "unisex"] as const).map(g => (
                <button
                  key={g}
                  onClick={() => updateSettings({ genderPreference: g })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                    profile.settings.genderPreference === g
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {g === "all" ? "No Preference" : g}
                </button>
              ))}
            </div>
            <h3 className="font-display text-base font-semibold mt-4 mb-2">Name Display Font</h3>
            <p className="text-sm text-muted-foreground mb-2">Font used when displaying names across the app</p>
            <div className="flex gap-2 flex-wrap">
              {NAME_FONT_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => updateSettings({ nameDisplayFont: opt.value })}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    (profile.settings.nameDisplayFont || "default") === opt.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {profile.favorites.length === 0 ? (
              <div className="text-center py-16 bg-card rounded-xl border border-border">
                <Star className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">No favorites yet</h3>
                <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                  Use Quick Add above or browse names and tap the star icon to save your favorites. You can tag them as first or last name contenders.
                </p>
                <Link to="/names">
                  <Button className="rounded-xl">
                    <Sparkles className="w-4 h-4 mr-2" /> Browse Names
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                {/* First Name Contenders */}
                <div ref={firstSectionRef}>
                    <DropSection
                    title="📝 First Name Contenders"
                    targetPosition="first"
                    entries={firstNameEntries}
                    onDrop={setFavoritePosition}
                    emptyMessage="Drag names here or click the 'First' tag to add"
                  />
                </div>

                {/* Last Name Contenders */}
                <div ref={lastSectionRef}>
                    <DropSection
                    title="📝 Last Name Contenders"
                    targetPosition="last"
                    entries={lastNameEntries}
                    onDrop={setFavoritePosition}
                    emptyMessage="Drag names here or click the 'Last' tag to add"
                  />
                </div>

                {/* Name Combinations — first+last meaning, Quranic, best fit */}
                {firstNameEntries.length > 0 && lastNameEntries.length > 0 && (
                  <NameCombinationsSection
                    firstEntries={firstNameEntries}
                    lastEntries={lastNameEntries}
                    preferredMeanings={profile.settings.preferredMeanings}
                    findNameBySlug={findNameBySlug}
                    navigate={navigate}
                  />
                )}

                {/* All Saved Names */}
                <div className="rounded-xl p-4 bg-card border border-border">
                  <h3 className="font-display text-base font-semibold text-foreground mb-3">⭐ All Saved Names</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Tag names as First, Last, or both. Names stay here regardless of tags.
                  </p>
                  <div className="space-y-2">
                    {profile.favorites.map((entry, idx) => {
                      const nameData = findNameBySlug(entry.slug);
                      if (!nameData) return null;
                      return (
                        <div
                          key={entry.slug}
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData("text/slug", entry.slug);
                            handleDragStart(idx);
                          }}
                          onDragEnter={() => handleDragEnter(idx)}
                          onDragEnd={handleDragEnd}
                          onDragOver={e => e.preventDefault()}
                          className="flex flex-col gap-3 bg-background rounded-xl border border-border p-3 sm:p-4 cursor-grab active:cursor-grabbing hover:shadow-card-hover transition-shadow"
                        >
                          {/* Options at top: First, Last, Trash */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <GripVertical className="w-4 h-4 text-muted-foreground shrink-0" />
                              <div className="flex gap-1">
                                <button
                                  onClick={() => togglePosition(entry.slug, "first")}
                                  className={`px-2.5 py-1.5 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                                    entry.positions.includes("first")
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                                  }`}
                                >
                                  First
                                </button>
                                <button
                                  onClick={() => togglePosition(entry.slug, "last")}
                                  className={`px-2.5 py-1.5 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                                    entry.positions.includes("last")
                                      ? "bg-secondary text-secondary-foreground"
                                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                                  }`}
                                >
                                  Last
                                </button>
                              </div>
                            </div>
                            <button
                              onClick={() => toggleFavorite(entry.slug)}
                              className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors shrink-0 flex items-center justify-center"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <Link to={`/name/${entry.slug}`} className="flex-1 min-w-0 -mt-1 block">
                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                              <span className="font-display font-semibold text-foreground truncate">{nameData.name}</span>
                              <span className="font-arabic text-sm text-secondary shrink-0">{nameData.arabic}</span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate mt-0.5">{nameData.meaning}</p>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}

          {/* Region + Options */}
          <div className="bg-card rounded-xl border border-border p-5 sm:p-6 space-y-5">
            <div>
              <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" /> Region / Country
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                We use your country to recommend names popular in your region.
              </p>
              <select
                value={profile.settings.country ?? (country ?? "")}
                onChange={e => updateSettings({ country: e.target.value || undefined })}
                className="w-full max-w-xs rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">🌐 Auto-detect</option>
                {COUNTRY_OPTIONS.map(c => (
                  <option key={c.code} value={c.code}>{getCountryFlag(c.code)} {c.name}</option>
                ))}
              </select>
              {country && !profile.settings.country && (
                <p className="mt-1.5 text-xs text-muted-foreground flex items-center gap-1">
                  {getCountryFlag(country)} Detected: {getCountryName(country)}
                </p>
              )}
            </div>
            <div>
              <h3 className="font-display text-base font-semibold mb-2 flex items-center gap-2">
                <span className="text-primary">💱</span> Default Currency
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Used for legal guide costs. Auto-defaults from your location.
              </p>
              <select
                value={profile.settings.defaultCurrency ?? ""}
                onChange={e => setCurrency(e.target.value ? (e.target.value as import("@/lib/currency").CurrencyCode) : null)}
                className="w-full max-w-xs rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">
                  Auto ({currencyLabel}{isAuto && country ? ` from ${getCountryName(country)}` : ""})
                </option>
                {CURRENCY_OPTIONS.map(c => (
                  <option key={c.code} value={c.code}>{CURRENCY_INFO[c.code]?.symbol ?? c.code} {c.label}</option>
                ))}
              </select>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Name Reference
              </h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={profile.settings.showMappingSources ?? false}
                  onChange={e => updateSettings({ showMappingSources: e.target.checked || undefined })}
                  className="rounded border-border"
                />
                <span className="text-sm font-medium">Show source URLs on mapping pages</span>
              </label>
            </div>
          </div>

          {(profile.settings.currentFirstName || profile.settings.preferredMeanings.length > 0) && (
            <div className="bg-primary/5 rounded-xl border border-primary/20 p-5 text-center">
              <p className="text-sm text-muted-foreground mb-3">Ready to discover more names based on your preferences?</p>
              <Link
                to={`/generator${profile.settings.currentFirstName ? `?name=${encodeURIComponent(profile.settings.currentFirstName)}` : ""}`}
              >
                <Button className="rounded-xl">
                  <Sparkles className="w-4 h-4 mr-2" /> Find My Names <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
}

/** Quick add names via search without leaving profile */
function QuickAddNames({
  isFavorite,
  isInFirst,
  isInLast,
  toggleFavorite,
  addAsFirstOrLast,
}: {
  isFavorite: (slug: string) => boolean;
  isInFirst: (slug: string) => boolean;
  isInLast: (slug: string) => boolean;
  toggleFavorite: (slug: string) => void;
  addAsFirstOrLast: (slug: string, pos: NamePosition) => void;
}) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const results = query.trim() ? searchNames(query).slice(0, 8) : [];

  return (
    <div className="rounded-xl p-4 bg-card border border-border">
      <h3 className="font-display text-base font-semibold text-foreground mb-2 flex items-center gap-2">
        <Search className="w-4 h-4 text-primary" /> Quick Add Name
      </h3>
      <p className="text-xs text-muted-foreground mb-3">
        Search and add names to your favorites without leaving this page
      </p>
      <div className="relative">
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder="Type a name to search…"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {focused && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 z-20 rounded-lg border border-border bg-card shadow-lg overflow-hidden">
            {results.map(n => (
              <div
                key={n.slug}
                className="flex flex-col gap-2 px-3 py-2.5 hover:bg-muted/50 border-b border-border last:border-0"
              >
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="font-display font-semibold text-foreground">{n.name}</span>
                  <span className="font-arabic text-sm text-secondary shrink-0">{n.arabic}</span>
                  <Link
                    to={`/name/${n.slug}`}
                    className="text-xs text-muted-foreground hover:text-primary ml-auto shrink-0"
                  >
                    View →
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground truncate -mt-1">{n.meaning}</p>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => toggleFavorite(n.slug)}
                    className={`inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                      isFavorite(n.slug)
                        ? "bg-secondary/20 text-secondary border border-secondary/40"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border"
                    }`}
                  >
                    {isFavorite(n.slug) && <Star className="w-3 h-3 fill-current" />}
                    {isFavorite(n.slug) ? "Saved" : "+ Save"}
                  </button>
                  <button
                    onClick={() => addAsFirstOrLast(n.slug, "first")}
                    className={`inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold uppercase transition-colors ${
                      isInFirst(n.slug)
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/15 text-primary hover:bg-primary/25 border border-primary/30"
                    }`}
                  >
                    {isInFirst(n.slug) && <Check className="w-3 h-3" />}
                    {isInFirst(n.slug) ? "First" : "+ First"}
                  </button>
                  <button
                    onClick={() => addAsFirstOrLast(n.slug, "last")}
                    className={`inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold uppercase transition-colors ${
                      isInLast(n.slug)
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-secondary/15 text-secondary hover:bg-secondary/25 border border-secondary/30"
                    }`}
                  >
                    {isInLast(n.slug) && <Check className="w-3 h-3" />}
                    {isInLast(n.slug) ? "Last" : "+ Last"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** Name combinations: first+last pairs with combined meaning, Quranic, best fit */
function NameCombinationsSection({
  firstEntries,
  lastEntries,
  preferredMeanings,
  findNameBySlug,
  navigate,
}: {
  firstEntries: FavoriteEntry[];
  lastEntries: FavoriteEntry[];
  preferredMeanings: string[];
  findNameBySlug: (slug: string) => { name: string; arabic?: string; meaning: string; isQuranic: boolean; themes: string[]; popularity: number } | undefined;
  navigate: (path: string) => void;
}) {
  const combos = firstEntries.flatMap(fe => {
    const firstData = findNameBySlug(fe.slug);
    if (!firstData) return [];
    const firstThemes = firstData.themes ?? [];
    return lastEntries.map(le => {
      const lastData = findNameBySlug(le.slug);
      if (!lastData) return null;
      const lastThemes = lastData.themes ?? [];
      const sharedThemes = firstThemes.filter(t => lastThemes.includes(t));
      const prefs = preferredMeanings ?? [];
      const matchedPrefsDetails = prefs
        .filter(p => firstThemes.includes(p) || lastThemes.includes(p))
        .map(quality => ({
          quality,
          inFirst: firstThemes.includes(quality),
          inLast: lastThemes.includes(quality),
        }));
      const matchesPrefs = matchedPrefsDetails.length;
      const bothQuranic = !!(firstData.isQuranic && lastData.isQuranic);
      const avgPopularity = ((firstData.popularity ?? 0) + (lastData.popularity ?? 0)) / 2;
      return {
        first: firstData,
        last: lastData,
        combinedMeaning: `${firstData.meaning ?? ""} + ${lastData.meaning ?? ""}`.trim() || "—",
        bothQuranic,
        sharedThemes,
        matchedPrefsDetails,
        matchScore: matchesPrefs * 2 + sharedThemes.length + (bothQuranic ? 1 : 0),
        avgPopularity,
      };
    }).filter(Boolean) as { first: typeof firstData; last: typeof lastData; combinedMeaning: string; bothQuranic: boolean; sharedThemes: string[]; matchedPrefsDetails: { quality: string; inFirst: boolean; inLast: boolean }[]; matchScore: number; avgPopularity: number }[];
  });

  const sorted = [...combos].sort((a, b) => b.matchScore - a.matchScore);

  return (
    <div className="rounded-xl p-4 bg-card border border-border">
      <h3 className="font-display text-base font-semibold text-foreground mb-1 flex items-center gap-2">
        <Book className="w-5 h-5 text-secondary" /> Name Combinations
      </h3>
      <p className="text-xs text-muted-foreground mb-3">
        See how your first + last contenders pair together. We rank by how many of your chosen qualities appear in each name, shared themes between both names, and whether both are Quranic.
      </p>
      <div className="space-y-3">
        {sorted.map(({ first, last, combinedMeaning, bothQuranic, sharedThemes, matchedPrefsDetails, matchScore, avgPopularity }) => (
          <div
            key={`${first.name}-${last.name}`}
            className="rounded-lg border border-border p-3 bg-background hover:shadow-card-hover transition-shadow"
          >
            <div className="flex flex-wrap items-baseline gap-2 mb-1">
              <button
                onClick={() => navigate(`/name/${first.slug}`)}
                className="font-display font-semibold text-primary hover:underline"
              >
                {first.name}
              </button>
              <span className="text-muted-foreground">+</span>
              <button
                onClick={() => navigate(`/name/${last.slug}`)}
                className="font-display font-semibold text-secondary hover:underline"
              >
                {last.name}
              </button>
              {bothQuranic && (
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px]">Both Quranic</Badge>
              )}
              {matchScore > 0 && (preferredMeanings?.length ?? 0) > 0 && (
                <Badge variant="outline" className="text-[10px]">Good fit</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{combinedMeaning}</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              {matchedPrefsDetails.length > 0 && (
                <p>
                  <span className="font-medium text-foreground">Matches your picks:</span>{" "}
                  {matchedPrefsDetails.map(({ quality, inFirst, inLast }, i) => {
                    const where = inFirst && inLast ? "both" : inFirst ? first.name : last.name;
                    return (
                      <span key={quality}>
                        {quality}
                        <span className="text-muted-foreground/80"> ({where})</span>
                        {i < matchedPrefsDetails.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                </p>
              )}
              {sharedThemes.length > 0 && (
                <p>
                  <span className="font-medium text-foreground">Shared qualities:</span>{" "}
                  {sharedThemes.join(", ")}
                </p>
              )}
              {bothQuranic && (
                <p>
                  <span className="font-medium text-foreground">Both names appear in the Quran</span>
                </p>
              )}
              {matchedPrefsDetails.length === 0 && sharedThemes.length === 0 && !bothQuranic && (
                <p className="italic">Combined meaning and flow — try pairing with names that share themes</p>
              )}
              {avgPopularity >= 70 && (
                <p className="text-muted-foreground/80">Popular choice</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Drop target section for First/Last name contenders */
function DropSection({
  title,
  targetPosition,
  entries,
  onDrop,
  emptyMessage,
}: {
  title: string;
  targetPosition: NamePosition;
  entries: FavoriteEntry[];
  onDrop: (slug: string, position: "first" | "last" | "undecided") => void;
  emptyMessage: string;
}) {
  const [dragOver, setDragOver] = useState(false);

  return (
    <div
      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={e => {
        e.preventDefault();
        setDragOver(false);
        const slug = e.dataTransfer.getData("text/slug");
        if (slug) onDrop(slug, targetPosition);
      }}
      className={`rounded-xl p-4 transition-colors ${
        dragOver ? "bg-primary/10 border-2 border-dashed border-primary" : "bg-card border border-border"
      }`}
    >
      <h3 className="font-display text-base font-semibold text-foreground mb-2">{title}</h3>
      {entries.length === 0 ? (
        <p className="text-sm text-muted-foreground italic py-2">{emptyMessage}</p>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {entries.map(entry => {
            const nameData = findNameBySlug(entry.slug);
            if (!nameData) return null;
            return (
              <Link
                key={entry.slug}
                to={`/name/${entry.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors min-h-[36px] sm:min-h-0"
              >
                {nameData.name}
                <span className="font-arabic text-xs text-secondary">{nameData.arabic}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
