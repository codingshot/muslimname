import { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { christianToMuslimNameMapping } from "@/data/nameMapping";
import { useProfile } from "@/hooks/useProfile";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Search, BookOpen, ArrowRight, Sparkles, Shuffle } from "lucide-react";
import { MuslimNameHoverCard } from "@/components/MuslimNameHoverCard";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { key: "all", label: "All" },
  { key: "biblical-male", label: "Biblical Male" },
  { key: "biblical-female", label: "Biblical Female" },
  { key: "western-male", label: "Western Male" },
  { key: "western-female", label: "Western Female" },
  { key: "latin-male", label: "Latin Male" },
  { key: "latin-female", label: "Latin Female" },
  { key: "hindu-male", label: "Hindu Male" },
  { key: "hindu-female", label: "Hindu Female" },
  { key: "chinese-male", label: "Chinese Male" },
  { key: "chinese-female", label: "Chinese Female" },
  { key: "portuguese-male", label: "Portuguese Male" },
  { key: "portuguese-female", label: "Portuguese Female" },
  { key: "russian-male", label: "Russian Male" },
  { key: "russian-female", label: "Russian Female" },
  { key: "japanese-male", label: "Japanese Male" },
  { key: "japanese-female", label: "Japanese Female" },
  { key: "korean-male", label: "Korean Male" },
  { key: "korean-female", label: "Korean Female" },
  { key: "french-male", label: "French Male" },
  { key: "french-female", label: "French Female" },
  { key: "german-male", label: "German Male" },
  { key: "german-female", label: "German Female" },
  { key: "italian-male", label: "Italian Male" },
  { key: "italian-female", label: "Italian Female" },
  { key: "spanish-male", label: "Spanish Male" },
  { key: "spanish-female", label: "Spanish Female" },
  { key: "indonesian-male", label: "Indonesian Male" },
  { key: "indonesian-female", label: "Indonesian Female" },
  { key: "vietnamese-male", label: "Vietnamese Male" },
  { key: "vietnamese-female", label: "Vietnamese Female" },
  { key: "vietnamese-unisex", label: "Vietnamese Unisex" },
  { key: "thai-male", label: "Thai Male" },
  { key: "thai-female", label: "Thai Female" },
  { key: "thai-unisex", label: "Thai Unisex" },
  { key: "tribal-male", label: "Tribal Male" },
  { key: "tribal-female", label: "Tribal Female" },
  { key: "hebrew", label: "Hebrew" },
  { key: "virtue", label: "Virtue" },
] as const;

export default function WesternNamesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const { profile } = useProfile();
  const showSources = profile.settings.showMappingSources ?? false;

  const allMappings = useMemo(() => {
    return Object.entries(christianToMuslimNameMapping)
      .map(([key, mapping]) => ({
        westernName: key.charAt(0).toUpperCase() + key.slice(1),
        key,
        ...mapping,
      }))
      .sort((a, b) => a.westernName.localeCompare(b.westernName));
  }, []);

  const filteredMappings = useMemo(() => {
    return allMappings.filter(m => {
      const cat = m.category ?? "";
      if (categoryFilter !== "all" && cat !== categoryFilter) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        m.westernName.toLowerCase().includes(q) ||
        (m.muslimNames ?? []).some(n => n.toLowerCase().includes(q)) ||
        (m.meaning ?? "").toLowerCase().includes(q) ||
        (m.connection ?? "").toLowerCase().includes(q) ||
        (m.originalScript && m.originalScript.includes(search.trim()))
      );
    });
  }, [allMappings, search, categoryFilter]);

  const stats = useMemo(() => {
    const cat = (m: (typeof allMappings)[0]) => m.category ?? "";
    return {
      total: allMappings.length,
      biblical: allMappings.filter(m => cat(m).startsWith("biblical")).length,
      western: allMappings.filter(m => cat(m).startsWith("western")).length,
      latin: allMappings.filter(m => cat(m).startsWith("latin")).length,
      hindu: allMappings.filter(m => cat(m).startsWith("hindu")).length,
      chinese: allMappings.filter(m => cat(m).startsWith("chinese")).length,
      portuguese: allMappings.filter(m => cat(m).startsWith("portuguese")).length,
      russian: allMappings.filter(m => cat(m).startsWith("russian")).length,
      japanese: allMappings.filter(m => cat(m).startsWith("japanese")).length,
      korean: allMappings.filter(m => cat(m).startsWith("korean")).length,
      french: allMappings.filter(m => cat(m).startsWith("french")).length,
      german: allMappings.filter(m => cat(m).startsWith("german")).length,
      italian: allMappings.filter(m => cat(m).startsWith("italian")).length,
      spanish: allMappings.filter(m => cat(m).startsWith("spanish")).length,
      indonesian: allMappings.filter(m => cat(m).startsWith("indonesian")).length,
      vietnamese: allMappings.filter(m => cat(m).startsWith("vietnamese")).length,
      thai: allMappings.filter(m => cat(m).startsWith("thai")).length,
      tribal: allMappings.filter(m => cat(m).startsWith("tribal")).length,
    };
  }, [allMappings]);

  const handleRandomName = useCallback(() => {
    const pool = filteredMappings.length > 0 ? filteredMappings : allMappings;
    if (pool.length === 0) return;
    const random = pool[Math.floor(Math.random() * pool.length)];
    navigate(`/western-names/${random.key}`);
  }, [filteredMappings, allMappings, navigate]);

  return (
    <Layout>
      <Helmet>
        <title>Western to Muslim Name Reference — {stats.total}+ Names Mapped | MuslimName.me</title>
        <meta name="description" content={`Find Islamic equivalents for ${stats.total}+ Western, Christian, Hindu, Chinese, Japanese & more names. Search by name or meaning. Biblical, Latin, Spanish, Arabic name mappings.`} />
        <link rel="canonical" href="https://muslimname.me/western-names" />
        <meta name="keywords" content="Western name to Muslim, Christian name Islamic equivalent, name conversion Islam, David Muslim name, Sarah Islamic name, convert name Muslim" />
        <meta property="og:title" content={`Western to Muslim Name Reference — ${stats.total}+ Names | MuslimName.me`} />
        <meta property="og:description" content="Find Islamic equivalents for Western, Christian, Hindu, Chinese & more names. Search by name or meaning." />
        <meta property="og:url" content="https://muslimname.me/western-names" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content="Western to Muslim Name Reference | MuslimName.me" />
        <meta name="twitter:description" content={`${stats.total}+ names mapped to Islamic equivalents. Biblical, Latin, Hindu, Chinese, Japanese & more.`} />
        <meta name="twitter:image" content="https://muslimname.me/og-image.png" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" /> Name Reference Guide
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Western to Muslim Name Reference
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore {stats.total}+ names from Western, Latin, Hindu, Chinese, Portuguese, Tribal, and Hebrew traditions mapped to their Islamic equivalents
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.biblical}</strong> Biblical</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.western}</strong> Western</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.spanish}</strong> Spanish</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.portuguese}</strong> Portuguese</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.russian}</strong> Russian</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.french}</strong> French</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.german}</strong> German</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.italian}</strong> Italian</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.chinese}</strong> Chinese</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.japanese}</strong> Japanese</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.korean}</strong> Korean</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.hindu}</strong> Hindu</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.latin}</strong> Latin</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.indonesian}</strong> Indonesian</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.vietnamese}</strong> Vietnamese</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.thai}</strong> Thai</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.tribal}</strong> Tribal</span>
          </div>
        </motion.div>

        {/* Search + filters */}
        <div className="max-w-2xl mx-auto mb-8 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, Muslim equivalent, or meaning..."
              className="pl-10 h-12 rounded-xl text-base"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap justify-center">
            {categories.map(c => (
              <button
                key={c.key}
                onClick={() => setCategoryFilter(c.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === c.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count + Random button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredMappings.length} name{filteredMappings.length !== 1 ? "s" : ""} found
          </p>
          <button
            type="button"
            onClick={handleRandomName}
            disabled={allMappings.length === 0}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shuffle className="w-4 h-4" /> Random Name
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredMappings.map((m, i) => (
              <motion.div
                key={m.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: Math.min(i * 0.02, 0.5) }}
                className="bg-card rounded-xl border border-border p-4 hover:shadow-card-hover transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-2">
                  <Link
                    to={`/western-names/${m.key}`}
                    className="font-display text-lg font-semibold text-foreground hover:text-primary hover:underline"
                  >
                    {m.westernName}
                  </Link>
                  <Badge variant="outline" className="text-[10px] capitalize shrink-0">
                    {(m.category ?? "").replace("-", " ")
                      .replace("biblical", "📖").replace("western", "🌍").replace("hebrew", "✡").replace("virtue", "✨")
                      .replace("latin", "🏛").replace("hindu", "🪷").replace("chinese", "中").replace("portuguese", "🇵🇹").replace("tribal", "🌿")
                      .replace("russian", "🇷🇺").replace("japanese", "🇯🇵").replace("korean", "🇰🇷").replace("french", "🇫🇷").replace("german", "🇩🇪").replace("italian", "🇮🇹").replace("spanish", "🇪🇸").replace("indonesian", "🇮🇩").replace("vietnamese", "🇻🇳").replace("thai", "🇹🇭")}
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 mb-2">
                  <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                  <div className="flex gap-1.5 flex-wrap">
                    {m.muslimNames.map(name => (
                      <MuslimNameHoverCard
                        key={name}
                        slug={name}
                        className="text-primary font-semibold hover:underline capitalize"
                        fallbackDisplay={name}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Meaning:</span> {m.meaning}
                </p>

                <p className="text-xs text-muted-foreground line-clamp-2">{m.connection}</p>

                {showSources && m.sources && m.sources.length > 0 && (
                  <p className="text-[10px] text-muted-foreground mt-1 truncate" title={m.sources.join(", ")}>
                    Sources: {m.sources.slice(0, 2).map(u => new URL(u).hostname).join(", ")}
                    {m.sources.length > 2 ? "…" : ""}
                  </p>
                )}

                {m.hebrewOrigin && (
                  <p className="text-[10px] text-secondary mt-2 font-mono">{m.hebrewOrigin}</p>
                )}

                <div className="mt-3 pt-2 border-t border-border">
                  <Link
                    to={`/generator?name=${encodeURIComponent(m.westernName)}`}
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <Sparkles className="w-3 h-3" /> Find Islamic equivalents for {m.westernName}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMappings.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center py-16"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <BookOpen className="h-7 w-7" />
            </div>
            <p className="font-display font-semibold text-foreground mb-2">No matching names found</p>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">Try a different search term or category.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                type="button"
                onClick={() => { setSearch(""); setCategoryFilter("all"); }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted/50 transition-colors"
              >
                Clear search
              </button>
              <Link
                to="/generator"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Name Generator
              </Link>
              <Link
                to="/names"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted/50 transition-colors"
              >
                Browse Islamic names
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
