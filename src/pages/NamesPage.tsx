import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { Search, X, ChevronDown, Shuffle, LayoutGrid, Smartphone } from "lucide-react";
import { namesDatabase, searchNames, getOrigins, getThemes, getRandomName } from "@/data/names";
import NameCard from "@/components/NameCard";
import NameCardSkeleton from "@/components/NameCardSkeleton";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const genderFilters = ["all", "male", "female", "unisex"];

const scriptureOptions = [
  { key: "all", label: "All Scripture" },
  { key: "quran", label: "📖 Quranic" },
  { key: "bible", label: "✝️ Also in Bible" },
  { key: "torah", label: "✡️ Also in Torah" },
  { key: "shared", label: "🤝 Shared Prophets" },
];

function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { key: string; label: string }[];
  onChange: (key: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = options.find(o => o.key === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`${label}: ${active?.label || value}`}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors border ${
          value !== "all"
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
        }`}
      >
        {active?.label || label}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[160px] py-1">
          {options.map(o => (
            <button
              key={o.key}
              onClick={() => { onChange(o.key); setOpen(false); }}
              className={`block w-full text-left px-3 py-2 text-xs font-medium transition-colors ${
                value === o.key
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ThemesDropdown({
  themes,
  selected,
  onToggle,
}: {
  themes: string[];
  selected: string[];
  onToggle: (t: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Themes filter${selected.length > 0 ? `: ${selected.length} selected` : ""}`}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors border ${
          selected.length > 0
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
        }`}
      >
        {selected.length > 0 ? `Themes (${selected.length})` : "Themes"}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-50 min-w-[180px] max-h-[240px] overflow-y-auto py-1">
          {themes.map(t => (
            <button
              key={t}
              onClick={() => onToggle(t)}
              className={`flex items-center gap-2 w-full text-left px-3 py-2 text-xs font-medium capitalize transition-colors ${
                selected.includes(t) ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              }`}
            >
              <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                selected.includes(t) ? "bg-primary border-primary text-primary-foreground" : "border-border"
              }`}>
                {selected.includes(t) && <span className="text-[8px]">✓</span>}
              </span>
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NamesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q") || "";
  const gender = searchParams.get("gender") || "all";
  const quranicOnly = searchParams.get("quranic") === "true";
  const selectedOrigin = searchParams.get("origin") || "all";
  const selectedThemes = useMemo(() => {
    const t = searchParams.get("themes");
    return t ? t.split(",").filter(Boolean) : [];
  }, [searchParams]);
  const scriptureFilter = searchParams.get("scripture") || "all";

  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "swipe">("grid");

  const origins = useMemo(() => getOrigins(), []);
  const themes = useMemo(() => getThemes(), []);

  const originOptions = useMemo(() => [
    { key: "all", label: "All Origins" },
    ...origins.map(o => ({ key: o, label: o })),
  ], [origins]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  const updateParam = useCallback((key: string, value: string) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (!value || value === "all" || value === "false") {
        next.delete(key);
      } else {
        next.set(key, value);
      }
      return next;
    }, { replace: true });
  }, [setSearchParams]);

  const setQuery = (v: string) => updateParam("q", v);
  const setGender = (v: string) => updateParam("gender", v);
  const setSelectedOrigin = (v: string) => updateParam("origin", v);
  const setScriptureFilter = (v: string) => updateParam("scripture", v);

  const toggleTheme = (theme: string) => {
    const newThemes = selectedThemes.includes(theme)
      ? selectedThemes.filter(t => t !== theme)
      : [...selectedThemes, theme];
    updateParam("themes", newThemes.join(","));
  };

  const results = useMemo(() => {
    let names = query ? searchNames(query) : [...namesDatabase];
    if (gender !== "all") names = names.filter(n => n.gender === gender);
    if (quranicOnly) names = names.filter(n => n.isQuranic);
    if (selectedOrigin !== "all") names = names.filter(n => n.origin === selectedOrigin);
    if (selectedThemes.length > 0) {
      names = names.filter(n => selectedThemes.some(t => n.themes.includes(t)));
    }
    if (scriptureFilter === "quran") names = names.filter(n => n.isQuranic);
    if (scriptureFilter === "bible") names = names.filter(n => n.scriptureContext?.inBible);
    if (scriptureFilter === "torah") names = names.filter(n => n.scriptureContext?.inTorah);
    if (scriptureFilter === "shared") names = names.filter(n => n.scriptureContext?.sharedProphet);
    if (!query) names.sort((a, b) => b.popularity - a.popularity);
    return names;
  }, [query, gender, quranicOnly, selectedOrigin, selectedThemes, scriptureFilter]);

  const activeFilterCount = (gender !== "all" ? 1 : 0) + (quranicOnly ? 1 : 0) + (selectedOrigin !== "all" ? 1 : 0) + selectedThemes.length + (scriptureFilter !== "all" ? 1 : 0);

  const clearFilters = () => {
    setSearchParams({}, { replace: true });
  };

  return (
    <Layout>
      <Helmet>
        <title>Browse Muslim Names — Meanings, Origins &amp; Quranic References | MuslimName.me</title>
        <meta name="description" content={`Explore ${namesDatabase.length}+ Islamic names with meanings, origins, and Quranic references. Search by name, meaning, or filter by gender and scripture.`} />
        <link rel="canonical" href="https://muslimname.me/names" />
        <meta name="keywords" content="Muslim names, Islamic names, Quranic names, Arabic names, baby names Muslim, name meanings" />
        <meta property="og:title" content="Browse Muslim Names — Meanings & Quranic References | MuslimName.me" />
        <meta property="og:description" content={`${namesDatabase.length}+ Islamic names with meanings, origins, Quranic references. Search by name or meaning.`} />
        <meta property="og:url" content="https://muslimname.me/names" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content="Browse Muslim Names | MuslimName.me" />
        <meta name="twitter:description" content={`${namesDatabase.length}+ Islamic names with meanings & Quranic references.`} />
      </Helmet>
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4 md:mb-6"
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">
            Browse Muslim Names
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm">
            Explore {namesDatabase.length}+ authentic Islamic names with meanings, origins, and Quranic references
          </p>
        </motion.div>

        {/* Search + inline filters */}
        <div className="max-w-4xl mx-auto mb-4 md:mb-6 space-y-3">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, meaning, or origin..."
              className="pl-10 pr-12 h-10 md:h-11 rounded-xl bg-card text-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-muted text-muted-foreground min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter row */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Gender pills */}
            {genderFilters.map(g => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                  gender === g
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {g === "all" ? "All" : g}
              </button>
            ))}

            <span className="w-px h-5 bg-border" />

            {/* Dropdowns */}
            <FilterDropdown
              label="Origin"
              value={selectedOrigin}
              options={originOptions}
              onChange={setSelectedOrigin}
            />
            <FilterDropdown
              label="Scripture"
              value={scriptureFilter}
              options={scriptureOptions}
              onChange={setScriptureFilter}
            />
            <ThemesDropdown
              themes={themes}
              selected={selectedThemes}
              onToggle={toggleTheme}
            />

            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="text-xs text-primary hover:underline ml-1">
                Clear all
              </button>
            )}
            <div className="ml-auto flex items-center gap-1">
              <div className="flex rounded-lg border border-border overflow-hidden" role="group" aria-label="View mode">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
                  aria-pressed={viewMode === "grid"}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("swipe")}
                  className={`p-1.5 ${viewMode === "swipe" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
                  aria-pressed={viewMode === "swipe"}
                  aria-label="Swipe view"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => navigate(`/name/${getRandomName(gender !== "all" ? gender as "male" | "female" : undefined).slug}`)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Shuffle className="w-3.5 h-3.5" /> Surprise me
              </button>
            </div>
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div className="flex gap-1.5 flex-wrap">
              {gender !== "all" && (
                <button onClick={() => setGender("all")} className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors capitalize">
                  {gender} <X className="w-3 h-3" />
                </button>
              )}
              {selectedOrigin !== "all" && (
                <button onClick={() => setSelectedOrigin("all")} className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors">
                  {selectedOrigin} <X className="w-3 h-3" />
                </button>
              )}
              {scriptureFilter !== "all" && (
                <button onClick={() => setScriptureFilter("all")} className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors">
                  {scriptureOptions.find(s => s.key === scriptureFilter)?.label} <X className="w-3 h-3" />
                </button>
              )}
              {selectedThemes.map(t => (
                <button key={t} onClick={() => toggleTheme(t)} className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors capitalize">
                  {t} <X className="w-3 h-3" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted-foreground mb-3">
            {results.length} name{results.length !== 1 ? "s" : ""} found
            {viewMode === "swipe" && " · Swipe or use arrows to browse"}
          </p>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {loading ? (
                Array.from({ length: 9 }).map((_, i) => <NameCardSkeleton key={i} />)
              ) : (
                results.map((name, i) => (
                  <NameCard key={name.slug} name={name} index={i} />
                ))
              )}
            </div>
          ) : (
            <div className="relative -mx-4 sm:mx-0 px-4 sm:px-12">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                  {Array.from({ length: 3 }).map((_, i) => <NameCardSkeleton key={i} />)}
                </div>
              ) : results.length > 0 ? (
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                    dragFree: false,
                    containScroll: "trimSnaps",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 sm:-ml-4">
                    {results.map((name, i) => (
                      <CarouselItem
                        key={name.slug}
                        className="pl-2 sm:pl-4 basis-full sm:basis-[85%] md:basis-[70%] lg:basis-[50%] max-w-[420px] mx-auto"
                      >
                        <div className="py-2">
                          <NameCard name={name} index={i} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-1 sm:-left-10 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10" />
                  <CarouselNext className="-right-1 sm:-right-10 top-1/2 -translate-y-1/2 flex h-9 w-9 sm:h-10 sm:w-10" />
                </Carousel>
              ) : null}
            </div>
          )}

          {!loading && results.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <p className="text-lg font-display font-semibold text-foreground mb-2">No names found</p>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filters, or discover names by meaning</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <button onClick={clearFilters} className="text-primary hover:underline text-sm font-medium">
                  Clear all filters
                </button>
                <span className="text-muted-foreground">·</span>
                <Link to="/generator" className="text-primary hover:underline text-sm font-medium">
                  Try the Name Generator
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Contribution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 rounded-xl border border-primary/20 p-8 text-center max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">Help Expand Our Name Database</h3>
          <p className="text-muted-foreground mb-4">Know a Western or Christian name we should add? Have corrections to existing mappings? Every contribution helps new Muslims find their perfect Islamic name.</p>
          <Link to="/contribute" className="inline-block">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
              Contribute a Name
            </button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
}