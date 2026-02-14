import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { prefetchNameDetail } from "@/lib/prefetch";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight, Star, Search, Check, LayoutGrid, Table2, ChevronUp, ChevronDown, Info, X, SlidersHorizontal } from "lucide-react";
import Layout from "@/components/Layout";
import { namesDatabase, type MuslimName, getOrigins, getThemes } from "@/data/names";
import { useProfile } from "@/hooks/useProfile";
import { Badge } from "@/components/ui/badge";
import { getWesternNamesForMuslimName, getWesternKeysForMuslimName } from "@/data/nameMapping";
import { getNameFontClass } from "@/lib/nameFont";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const AUTOPLAY_INTERVAL_MS_DEFAULT = 4500;
const SPEED_OPTIONS = [
  { label: "Fast", ms: 2500 },
  { label: "Normal", ms: 4500 },
  { label: "Slow", ms: 7000 },
  { label: "Very slow", ms: 12000 },
];

const ONBOARDING_KEY = "discover-onboarding-seen";

const GENDER_FILTERS = ["all", "male", "female", "unisex"];
const SCRIPTURE_OPTIONS = [
  { key: "all", label: "All Scripture" },
  { key: "quran", label: "📖 Quranic" },
  { key: "bible", label: "✝️ Also in Bible" },
  { key: "torah", label: "✡️ Also in Torah" },
  { key: "shared", label: "🤝 Shared Prophets" },
];

type ViewMode = "card" | "table";
type SortKey = "name" | "meaning" | "quranic" | "gender" | "western";
type SortDir = "asc" | "desc";

export default function DiscoverPage() {
  const { profile, toggleFavorite, isFavorite, addAsFirstOrLast } = useProfile();
  const [viewMode, setViewMode] = useState<ViewMode>("card");
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [autoplayMs, setAutoplayMs] = useState(SPEED_OPTIONS[1].ms);
  const [showOnboarding, setShowOnboarding] = useState(() => !localStorage.getItem(ONBOARDING_KEY));
  const [filterGender, setFilterGender] = useState("all");
  const [filterScripture, setFilterScripture] = useState("all");
  const [filterOrigin, setFilterOrigin] = useState("all");
  const [filterThemes, setFilterThemes] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [names, setNames] = useState<MuslimName[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const origins = useMemo(() => getOrigins(), []);
  const themes = useMemo(() => getThemes(), []);
  const originOptions = useMemo(() => [{ key: "all", label: "All Origins" }, ...origins.map(o => ({ key: o, label: o }))], [origins]);

  const filteredPool = useMemo(() => {
    let pool = [...namesDatabase];
    if (filterGender !== "all") pool = pool.filter(n => n.gender === filterGender);
    if (filterScripture === "quran") pool = pool.filter(n => n.isQuranic);
    if (filterScripture === "bible") pool = pool.filter(n => n.scriptureContext?.inBible);
    if (filterScripture === "torah") pool = pool.filter(n => n.scriptureContext?.inTorah);
    if (filterScripture === "shared") pool = pool.filter(n => n.scriptureContext?.sharedProphet);
    if (filterOrigin !== "all") pool = pool.filter(n => n.origin === filterOrigin);
    if (filterThemes.length > 0) pool = pool.filter(n => filterThemes.some(t => n.themes.includes(t)));
    return pool;
  }, [filterGender, filterScripture, filterOrigin, filterThemes]);

  useEffect(() => {
    const shuffled = [...filteredPool].sort(() => Math.random() - 0.5).slice(0, 100);
    setNames(shuffled);
    setIndex(0);
  }, [filteredPool]);

  const activeFilterCount = (filterGender !== "all" ? 1 : 0) + (filterScripture !== "all" ? 1 : 0) + (filterOrigin !== "all" ? 1 : 0) + filterThemes.length;
  const clearFilters = useCallback(() => {
    setFilterGender("all");
    setFilterScripture("all");
    setFilterOrigin("all");
    setFilterThemes([]);
  }, []);
  const toggleTheme = useCallback((t: string) => {
    setFilterThemes(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  }, []);

  const sortedNames = useMemo(() => {
    const arr = [...names];
    const mult = sortDir === "asc" ? 1 : -1;
    arr.sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "name":
          cmp = (a.name ?? "").localeCompare(b.name ?? "");
          break;
        case "meaning":
          cmp = (a.meaning ?? "").localeCompare(b.meaning ?? "");
          break;
        case "quranic": {
          const aHas = (a.quranicReferences?.length ?? 0) > 0 || a.isQuranic;
          const bHas = (b.quranicReferences?.length ?? 0) > 0 || b.isQuranic;
          cmp = (aHas ? 1 : 0) - (bHas ? 1 : 0);
          break;
        }
        case "gender":
          cmp = (a.gender ?? "").localeCompare(b.gender ?? "");
          break;
        case "western": {
          const aN = getWesternNamesForMuslimName(a.slug).length;
          const bN = getWesternNamesForMuslimName(b.slug).length;
          cmp = aN - bN;
          break;
        }
      }
      return mult * cmp;
    });
    return arr;
  }, [names, sortKey, sortDir]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(d => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const current = names[index];

  const goNext = useCallback(() => {
    setIndex(i => (i + 1) % names.length);
  }, [names.length]);

  const goPrev = useCallback(() => {
    setIndex(i => (i - 1 + names.length) % names.length);
  }, [names.length]);

  useEffect(() => {
    if (!playing || !current) return;
    timerRef.current = setTimeout(goNext, autoplayMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [playing, current, goNext, autoplayMs]);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (current) toggleFavorite(current.slug);
  };

  const handleAddFirst = (e: React.MouseEvent) => {
    e.preventDefault();
    if (current) addAsFirstOrLast(current.slug, "first");
  };

  const handleAddLast = (e: React.MouseEvent) => {
    e.preventDefault();
    if (current) addAsFirstOrLast(current.slug, "last");
  };

  const shufflePool = useCallback(() => {
    setNames(prev => [...prev].sort(() => Math.random() - 0.5));
    setIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!current) return;
      const target = e.target as HTMLElement;
      if (target?.closest("input, textarea, [contenteditable]")) return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goPrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          goNext();
          break;
        case " ":
          e.preventDefault();
          setPlaying(p => !p);
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFavorite(current.slug);
          break;
        case "1":
          e.preventDefault();
          addAsFirstOrLast(current.slug, "first");
          break;
        case "2":
          e.preventDefault();
          addAsFirstOrLast(current.slug, "last");
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, goPrev, goNext, toggleFavorite, addAsFirstOrLast]);

  if (!current || names.length === 0) {
    const noMatch = filteredPool.length === 0;
    return (
      <Layout>
        <Helmet>
          <title>Discover Names | MuslimName.me</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center max-w-sm mx-auto"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <Search className="h-7 w-7" />
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              {noMatch ? "No names match your filters" : names.length === 0 ? "No names to discover" : "Loading..."}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              {noMatch ? "Try adjusting your filters or clear all to browse." : names.length === 0 ? "Browse our full database to explore Islamic names." : "Getting names ready..."}
            </p>
            {noMatch && activeFilterCount > 0 ? (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90 transition-opacity"
              >
                Clear filters
              </button>
            ) : names.length === 0 && !noMatch && (
              <Link
                to="/names"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90 transition-opacity"
              >
                <Search className="h-4 w-4" />
                Browse all names
              </Link>
            )}
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Discover Names — Autoplay | MuslimName.me</title>
        <meta name="description" content="Discover Muslim names one at a time. Swipe through, favorite, and add to your first or last name contenders." />
        <link rel="canonical" href="https://muslimname.me/discover" />
        <meta property="og:title" content="Discover Muslim Names | MuslimName.me" />
        <meta property="og:description" content="Discover Muslim names one at a time. Swipe through, favorite, and add to your first or last name contenders." />
        <meta property="og:url" content="https://muslimname.me/discover" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content="Discover Muslim Names | MuslimName.me" />
        <meta name="twitter:description" content="Discover Muslim names one at a time. Swipe, favorite, and explore." />
        <meta name="twitter:image" content="https://muslimname.me/og-image.png" />
      </Helmet>
      <div className="min-h-[calc(100vh-8rem)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h1 className="font-display text-lg font-semibold">Discover Names</h1>
          <div className="flex items-center gap-1">
            <Popover open={filterOpen} onOpenChange={setFilterOpen}>
              <PopoverTrigger
                className={`p-2 rounded-lg transition-colors relative ${
                  activeFilterCount > 0 ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
                aria-label={`Filters${activeFilterCount > 0 ? ` (${activeFilterCount} active)` : ""}`}
              >
                <SlidersHorizontal className="w-5 h-5" />
                {activeFilterCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[14px] h-[14px] px-0.5 flex items-center justify-center bg-primary text-primary-foreground text-[9px] font-bold rounded-full">
                    {activeFilterCount}
                  </span>
                )}
              </PopoverTrigger>
              <PopoverContent align="end" className="w-64 p-3" sideOffset={8}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Filters</span>
                    {activeFilterCount > 0 && (
                      <button onClick={clearFilters} className="text-xs text-primary hover:underline">
                        Clear all
                      </button>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">Gender</p>
                    <div className="flex gap-1 flex-wrap">
                      {GENDER_FILTERS.map(g => (
                        <button
                          key={g}
                          onClick={() => setFilterGender(g)}
                          className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                            filterGender === g ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {g === "all" ? "All" : g}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">Origin</p>
                    <select
                      value={filterOrigin}
                      onChange={e => setFilterOrigin(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-card text-xs"
                    >
                      {originOptions.map(o => (
                        <option key={o.key} value={o.key}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">Scripture</p>
                    <select
                      value={filterScripture}
                      onChange={e => setFilterScripture(e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded-lg border border-border bg-card text-xs"
                    >
                      {SCRIPTURE_OPTIONS.map(o => (
                        <option key={o.key} value={o.key}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1.5">Themes</p>
                    <div className="max-h-28 overflow-y-auto flex flex-wrap gap-1">
                      {themes.slice(0, 24).map(t => (
                        <button
                          key={t}
                          onClick={() => toggleTheme(t)}
                          className={`px-2 py-1 rounded text-xs capitalize ${
                            filterThemes.includes(t) ? "bg-primary/15 text-primary border border-primary/30" : "bg-muted/60 text-muted-foreground hover:bg-muted border border-transparent"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] text-muted-foreground pt-1 border-t border-border">
                    {filteredPool.length} names match
                  </p>
                </div>
              </PopoverContent>
            </Popover>
            <div className="flex rounded-lg border border-border overflow-hidden">
              <button
                onClick={() => setViewMode("card")}
                className={`p-2 ${viewMode === "card" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-label="Card view"
                title="Card view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-2 ${viewMode === "table" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-label="Table view"
                title="Table view"
              >
                <Table2 className="w-4 h-4" />
              </button>
            </div>
            <Link
              to="/names"
              className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
              aria-label="Search names"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              onClick={shufflePool}
              className="text-xs text-muted-foreground hover:text-primary px-2 py-1"
            >
              Shuffle
            </button>
            {viewMode === "card" && (
              <button
                onClick={() => setShowOnboarding(true)}
                className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                aria-label="Show keyboard shortcuts"
                title="Keyboard shortcuts"
              >
                <Info className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Main content: card or table */}
        {viewMode === "table" ? (
          <div className="flex-1 overflow-auto px-4 py-4">
            <div className="max-w-5xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <button
                        onClick={() => handleSort("name")}
                        className="inline-flex items-center gap-1 font-medium hover:text-foreground transition-colors"
                      >
                        Name
                        {sortKey === "name" && (sortDir === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button
                        onClick={() => handleSort("meaning")}
                        className="inline-flex items-center gap-1 font-medium hover:text-foreground transition-colors"
                      >
                        Meaning
                        {sortKey === "meaning" && (sortDir === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button
                        onClick={() => handleSort("western")}
                        className="inline-flex items-center gap-1 font-medium hover:text-foreground transition-colors"
                      >
                        Western mappings
                        {sortKey === "western" && (sortDir === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button
                        onClick={() => handleSort("quranic")}
                        className="inline-flex items-center gap-1 font-medium hover:text-foreground transition-colors"
                      >
                        Quran refs
                        {sortKey === "quranic" && (sortDir === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                      </button>
                    </TableHead>
                    <TableHead>
                      <button
                        onClick={() => handleSort("gender")}
                        className="inline-flex items-center gap-1 font-medium hover:text-foreground transition-colors"
                      >
                        Gender
                        {sortKey === "gender" && (sortDir === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
                      </button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedNames.map((n) => {
                    const westernKeys = getWesternKeysForMuslimName(n.slug);
                    const quranRefs = (n.quranicReferences ?? []).length > 0 || n.isQuranic
                      ? (n.quranicReferences ?? [])
                          .map((r) => r.ayah)
                          .filter(Boolean)
                          .join(", ") || (n.isQuranic ? "✓" : "—")
                      : "—";
                    return (
                      <TableRow key={n.slug}>
                        <TableCell>
                          <Link to={`/name/${n.slug}`} className={`${getNameFontClass(profile.settings.nameDisplayFont)} font-semibold hover:text-primary hover:underline block`} onMouseEnter={() => prefetchNameDetail()}>
                            {n.name}
                          </Link>
                          {n.arabic && <span className={`${getNameFontClass(profile.settings.nameDisplayFont)} text-primary text-sm block`} style={{ direction: "rtl" }}>{n.arabic}</span>}
                        </TableCell>
                        <TableCell className="text-muted-foreground max-w-[200px] truncate" title={n.meaning ?? undefined}>
                          {n.meaning ?? "—"}
                        </TableCell>
                        <TableCell>
                          {westernKeys.length > 0 ? (
                            <span className="flex flex-wrap gap-1">
                              {westernKeys.map((k) => (
                                <Link key={k} to={`/western-names/${k}`} className="text-xs px-2 py-0.5 rounded bg-muted hover:bg-primary/20 hover:text-primary capitalize">
                                  {k.charAt(0).toUpperCase() + k.slice(1)}
                                </Link>
                              ))}
                            </span>
                          ) : (
                            <span className="text-muted-foreground text-xs">—</span>
                          )}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-xs">
                          {quranRefs}
                        </TableCell>
                        <TableCell>
                          <span className="capitalize text-muted-foreground text-xs">{n.gender ?? "—"}</span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 relative">
          {/* Left arrow - desktop */}
          <button
            onClick={goPrev}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/90 border border-border shadow-md hover:bg-muted text-foreground transition-colors"
            aria-label="Previous name (←)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Right arrow - desktop */}
          <button
            onClick={goNext}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/90 border border-border shadow-md hover:bg-muted text-foreground transition-colors"
            aria-label="Next name (→)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-md"
            >
              <Link to={`/name/${current.slug}`} className="block" onMouseEnter={() => prefetchNameDetail()}>
                <div className="bg-card rounded-2xl border border-border p-8 shadow-card hover:shadow-card-hover transition-shadow">
                  <h2 className={`${getNameFontClass(profile.settings.nameDisplayFont)} text-3xl sm:text-4xl font-bold text-foreground text-center mb-1`}>
                    {current.name}
                  </h2>
                  <p className={`${getNameFontClass(profile.settings.nameDisplayFont)} text-2xl sm:text-3xl text-primary text-center mb-3`} style={{ direction: "rtl" }}>
                    {current.arabic}
                  </p>
                  <p className="text-center text-muted-foreground text-sm mb-4">
                    {current.meaning}
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {current.isQuranic && (
                      <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px]">Quranic</Badge>
                    )}
                    <Badge variant="outline" className="text-[10px] capitalize">{current.gender}</Badge>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Quick actions with onboarding */}
          <div className="flex flex-col items-center mt-6 relative">
            {showOnboarding && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[min(320px,90vw)]"
              >
                <div className="bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg border border-primary/20 text-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Keyboard shortcuts</p>
                        <p className="text-primary-foreground/90 text-xs">
                          <kbd className="px-1.5 py-0.5 rounded bg-primary-foreground/20 font-mono text-[10px]">F</kbd> favorite
                          {" · "}
                          <kbd className="px-1.5 py-0.5 rounded bg-primary-foreground/20 font-mono text-[10px]">1</kbd> first name
                          {" · "}
                          <kbd className="px-1.5 py-0.5 rounded bg-primary-foreground/20 font-mono text-[10px]">2</kbd> last name
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setShowOnboarding(false);
                        localStorage.setItem(ONBOARDING_KEY, "1");
                      }}
                      className="p-1 rounded hover:bg-primary-foreground/20 -mt-1 -mr-1"
                      aria-label="Dismiss"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleFavorite}
              className={`p-3 rounded-full transition-colors ${
                isFavorite(current.slug)
                  ? "bg-secondary/20 text-secondary"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-secondary"
              }`}
              aria-label={isFavorite(current.slug) ? "Remove from favorites (F)" : "Add to favorites (F)"}
              title={isFavorite(current.slug) ? "Remove from favorites (F)" : "Add to favorites (F)"}
            >
              <Star className={`w-6 h-6 ${isFavorite(current.slug) ? "fill-current" : ""}`} />
            </button>
            {(() => {
              const entry = profile.favorites.find(f => f.slug === current.slug);
              const isInFirst = entry?.positions?.includes("first") ?? false;
              const isInLast = entry?.positions?.includes("last") ?? false;
              return (
                <>
                  <button
                    onClick={handleAddFirst}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isInFirst
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                    title={isInFirst ? "Added as first name (1)" : "Add as first name (1)"}
                  >
                    {isInFirst && <Check className="w-4 h-4" />}
                    {isInFirst ? "First" : "Add as First"}
                  </button>
                  <button
                    onClick={handleAddLast}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isInLast
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                    }`}
                    title={isInLast ? "Added as last name (2)" : "Add as last name (2)"}
                  >
                    {isInLast && <Check className="w-4 h-4" />}
                    {isInLast ? "Last" : "Add as Last"}
                  </button>
                </>
              );
            })()}
            </div>
          </div>
        </div>
        )}

        {/* Bottom controls bar (card mode only) */}
        {viewMode === "card" && (
        <div className="sticky bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t border-border px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="max-w-md mx-auto flex items-center justify-between gap-4">
            <button
              onClick={goPrev}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Previous name"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setPlaying(p => !p)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <>
                  <Pause className="w-5 h-5" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" /> Play
                </>
              )}
            </button>
            <button
              onClick={goNext}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Next name"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-2 mt-2">
            <p className="text-center text-xs text-muted-foreground">
              {index + 1} of {names.length}
              <span className="hidden sm:inline ml-2">· ← → navigate · Space pause · F/1/2 shortcuts</span>
            </p>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-muted-foreground mr-1">Speed:</span>
              {SPEED_OPTIONS.map((opt) => (
                <button
                  key={opt.ms}
                  onClick={() => setAutoplayMs(opt.ms)}
                  className={`px-2 py-1 rounded text-[10px] transition-colors ${
                    autoplayMs === opt.ms
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted"
                  }`}
                  title={`${opt.label}: ${opt.ms / 1000}s per card`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </Layout>
  );
}
