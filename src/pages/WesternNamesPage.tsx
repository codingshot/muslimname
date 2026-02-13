import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import { christianToMuslimNameMapping, getMappingContext } from "@/data/nameMapping";
import { findNameBySlug } from "@/data/names";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, BookOpen, ArrowRight, Sparkles } from "lucide-react";
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
  { key: "tribal-male", label: "Tribal Male" },
  { key: "tribal-female", label: "Tribal Female" },
  { key: "hebrew", label: "Hebrew" },
  { key: "virtue", label: "Virtue" },
] as const;

export default function WesternNamesPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

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
      if (categoryFilter !== "all" && m.category !== categoryFilter) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        m.westernName.toLowerCase().includes(q) ||
        m.muslimNames.some(n => n.toLowerCase().includes(q)) ||
        m.meaning.toLowerCase().includes(q) ||
        m.connection.toLowerCase().includes(q) ||
        (m.originalScript && m.originalScript.includes(search.trim()))
      );
    });
  }, [allMappings, search, categoryFilter]);

  const stats = useMemo(() => ({
    total: allMappings.length,
    biblical: allMappings.filter(m => m.category.startsWith("biblical")).length,
    western: allMappings.filter(m => m.category.startsWith("western")).length,
    latin: allMappings.filter(m => m.category.startsWith("latin")).length,
    hindu: allMappings.filter(m => m.category.startsWith("hindu")).length,
    chinese: allMappings.filter(m => m.category.startsWith("chinese")).length,
    portuguese: allMappings.filter(m => m.category.startsWith("portuguese")).length,
    russian: allMappings.filter(m => m.category.startsWith("russian")).length,
    japanese: allMappings.filter(m => m.category.startsWith("japanese")).length,
    korean: allMappings.filter(m => m.category.startsWith("korean")).length,
    french: allMappings.filter(m => m.category.startsWith("french")).length,
    german: allMappings.filter(m => m.category.startsWith("german")).length,
    italian: allMappings.filter(m => m.category.startsWith("italian")).length,
    spanish: allMappings.filter(m => m.category.startsWith("spanish")).length,
    tribal: allMappings.filter(m => m.category.startsWith("tribal")).length,
  }), [allMappings]);

  return (
    <Layout>
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
              placeholder="Search by Western name, Muslim name, or meaning..."
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

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-4 text-center">
          {filteredMappings.length} name{filteredMappings.length !== 1 ? "s" : ""} found
        </p>

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
                  <h3 className="font-display text-lg font-semibold text-foreground">{m.westernName}</h3>
                  <Badge variant="outline" className="text-[10px] capitalize shrink-0">
                    {m.category.replace("-", " ")
                      .replace("biblical", "📖").replace("western", "🌍").replace("hebrew", "✡").replace("virtue", "✨")
                      .replace("latin", "🏛").replace("hindu", "🪷").replace("chinese", "中").replace("portuguese", "🇵🇹").replace("tribal", "🌿")
                      .replace("russian", "🇷🇺").replace("japanese", "🇯🇵").replace("korean", "🇰🇷").replace("french", "🇫🇷").replace("german", "🇩🇪").replace("italian", "🇮🇹").replace("spanish", "🇪🇸")}
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 mb-2">
                  <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                  <div className="flex gap-1.5 flex-wrap">
                    {m.muslimNames.map(name => {
                      const nameData = findNameBySlug(name);
                      return nameData ? (
                        <Link
                          key={name}
                          to={`/name/${nameData.slug}`}
                          className="text-primary font-semibold hover:underline capitalize"
                        >
                          {nameData.name}
                        </Link>
                      ) : (
                        <span key={name} className="text-primary font-semibold capitalize">{name}</span>
                      );
                    })}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Meaning:</span> {m.meaning}
                </p>

                <p className="text-xs text-muted-foreground line-clamp-2">{m.connection}</p>

                {m.hebrewOrigin && (
                  <p className="text-[10px] text-secondary mt-2 font-mono">{m.hebrewOrigin}</p>
                )}

                <div className="mt-3 pt-2 border-t border-border">
                  <Link
                    to={`/generator?name=${encodeURIComponent(m.westernName)}`}
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <Sparkles className="w-3 h-3" /> Find names like {m.westernName}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMappings.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No matching names found. Try a different search term.</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
