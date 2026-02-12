import { useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, SlidersHorizontal, X, BookOpen } from "lucide-react";
import { namesDatabase, searchNames, getOrigins, getThemes } from "@/data/names";
import NameCard from "@/components/NameCard";
import NameCardSkeleton from "@/components/NameCardSkeleton";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const genderFilters = ["all", "male", "female", "unisex"];

export default function NamesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

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
  const [showFilters, setShowFilters] = useState(
    gender !== "all" || quranicOnly || selectedOrigin !== "all" || selectedThemes.length > 0 || scriptureFilter !== "all"
  );

  const origins = useMemo(() => getOrigins(), []);
  const themes = useMemo(() => getThemes(), []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, []);

  // URL-synced setters
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
  const setQuranicOnly = (v: boolean) => updateParam("quranic", v ? "true" : "false");
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
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Browse Muslim Names
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Explore {namesDatabase.length}+ authentic Islamic names with meanings, origins, and Quranic references
          </p>
        </motion.div>

        {/* Search + Filter Toggle */}
        <div className="max-w-xl mx-auto mb-4 md:mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, meaning, theme, origin, or feeling..."
              className="pl-10 pr-12 h-11 md:h-12 rounded-xl bg-card text-sm md:text-base"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted text-muted-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="mt-2 md:mt-3 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Advanced Filters
            {activeFilterCount > 0 && (
              <span className="bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {/* Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden max-w-3xl mx-auto mb-6 md:mb-8"
            >
              <div className="space-y-4 py-2">
                {/* Gender */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Gender</label>
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    {genderFilters.map(g => (
                      <button
                        key={g}
                        onClick={() => setGender(g)}
                        className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium capitalize transition-colors ${
                          gender === g
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {g === "all" ? "All" : g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scripture */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Scripture</label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[
                      { key: "all", label: "All" },
                      { key: "quran", label: "📖 Quranic" },
                      { key: "bible", label: "✝️ Also in Bible" },
                      { key: "torah", label: "✡️ Also in Torah" },
                      { key: "shared", label: "🤝 Shared Prophets" },
                    ].map(s => (
                      <button
                        key={s.key}
                        onClick={() => setScriptureFilter(s.key === scriptureFilter ? "all" : s.key)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                          scriptureFilter === s.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Origin */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Origin</label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <button
                      onClick={() => setSelectedOrigin("all")}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedOrigin === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      All Origins
                    </button>
                    {origins.map(o => (
                      <button
                        key={o}
                        onClick={() => setSelectedOrigin(o === selectedOrigin ? "all" : o)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedOrigin === o ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Themes */}
                <div>
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">Themes</label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {themes.map(theme => (
                      <button
                        key={theme}
                        onClick={() => toggleTheme(theme)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize transition-colors ${
                          selectedThemes.includes(theme)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>

                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="text-xs text-primary hover:underline">
                    Clear all filters
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            {results.length} name{results.length !== 1 ? "s" : ""} found
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {loading ? (
              Array.from({ length: 9 }).map((_, i) => <NameCardSkeleton key={i} />)
            ) : (
              results.map((name, i) => (
                <NameCard key={name.slug} name={name} index={i} />
              ))
            )}
          </div>

          {!loading && results.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <p className="text-lg font-display font-semibold text-foreground mb-2">No names found</p>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filters</p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline text-sm font-medium"
              >
                Clear all filters
              </button>
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
