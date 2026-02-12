import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Filter, BookOpen, SlidersHorizontal } from "lucide-react";
import { namesDatabase, searchNames, filterNames } from "@/data/names";
import NameCard from "@/components/NameCard";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const genderFilters = ["all", "male", "female", "unisex"];
const themeOptions = ["devotion", "strength", "beauty", "light", "purity", "courage", "wisdom", "peace", "faith", "leadership"];

export default function NamesPage() {
  const [searchParams] = useSearchParams();
  const initialGender = searchParams.get("gender") || "all";
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState(initialGender);
  const [quranicOnly, setQuranicOnly] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

  const results = useMemo(() => {
    let names = query ? searchNames(query) : [...namesDatabase];

    if (gender !== "all") {
      names = names.filter(n => n.gender === gender);
    }
    if (quranicOnly) {
      names = names.filter(n => n.isQuranic);
    }
    if (selectedThemes.length > 0) {
      names = names.filter(n => selectedThemes.some(t => n.themes.includes(t)));
    }

    return names.sort((a, b) => b.popularity - a.popularity);
  }, [query, gender, quranicOnly, selectedThemes]);

  const toggleTheme = (theme: string) => {
    setSelectedThemes(prev =>
      prev.includes(theme) ? prev.filter(t => t !== theme) : [...prev, theme]
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Browse Muslim Names
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore {namesDatabase.length}+ authentic Islamic names with meanings, origins, and Quranic references
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, meaning, or theme..."
              className="pl-10 h-12 rounded-xl bg-card text-base"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            {genderFilters.map(g => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${
                  gender === g
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {g === "all" ? "All" : g}
              </button>
            ))}
            <button
              onClick={() => setQuranicOnly(!quranicOnly)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                quranicOnly
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              📖 Quranic Only
            </button>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {themeOptions.map(theme => (
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

        {/* Results */}
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            {results.length} name{results.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((name, i) => (
              <NameCard key={name.slug} name={name} index={i} />
            ))}
          </div>
          {results.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-2">No names found matching your criteria</p>
              <button
                onClick={() => { setQuery(""); setGender("all"); setQuranicOnly(false); setSelectedThemes([]); }}
                className="text-primary hover:underline text-sm"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
