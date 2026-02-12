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
        m.connection.toLowerCase().includes(q)
      );
    });
  }, [allMappings, search, categoryFilter]);

  const stats = useMemo(() => ({
    total: allMappings.length,
    biblical: allMappings.filter(m => m.category.startsWith("biblical")).length,
    western: allMappings.filter(m => m.category.startsWith("western")).length,
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
            Explore {stats.total}+ Western, Christian, and Hebrew names mapped to their Islamic equivalents with shared meanings and Abrahamic connections
          </p>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.biblical}</strong> Biblical</span>
            <span className="text-muted-foreground"><strong className="text-foreground">{stats.western}</strong> Western</span>
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
                    {m.category.replace("-", " ").replace("biblical", "📖").replace("western", "🌍").replace("hebrew", "✡").replace("virtue", "✨")}
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 mb-2">
                  <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                  <div className="flex gap-1.5 flex-wrap">
                    {m.muslimNames.map(name => {
                      const nameData = findNameBySlug(name.toLowerCase());
                      return nameData ? (
                        <Link
                          key={name}
                          to={`/name/${name.toLowerCase()}`}
                          className="text-primary font-semibold hover:underline capitalize"
                        >
                          {name}
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
