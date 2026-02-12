import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import NameCard from "@/components/NameCard";
import NameCardSkeleton from "@/components/NameCardSkeleton";
import { suggestFromMeaning, namesDatabase } from "@/data/names";
import { getMappingContext, type NameMapping } from "@/data/nameMapping";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Info, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const meaningKeywords = [
  "grace", "strong", "light", "beautiful", "pure", "faithful",
  "wise", "life", "courage", "peace", "noble", "love", "leader",
  "eternal", "mercy", "patience", "joy", "knowledge", "sacrifice",
  "devotion", "justice", "beauty", "strength", "purity", "guidance"
];

export default function GeneratorPage() {
  const [searchParams] = useSearchParams();
  const [currentName, setCurrentName] = useState(searchParams.get("name") || "");
  const [selectedMeanings, setSelectedMeanings] = useState<string[]>([]);
  const [gender, setGender] = useState<"all" | "male" | "female" | "unisex">("all");
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Auto-generate if name came from URL
  useEffect(() => {
    const urlName = searchParams.get("name");
    if (urlName) {
      setCurrentName(urlName);
      setGenerated(true);
      setLoading(true);
      setTimeout(() => setLoading(false), 600);
    }
  }, []);

  const mappingInfo = useMemo(() => {
    if (!currentName.trim()) return null;
    return getMappingContext(currentName.trim());
  }, [currentName]);

  const toggleMeaning = (m: string) => {
    setSelectedMeanings(prev =>
      prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]
    );
  };

  const handleGenerate = () => {
    setLoading(true);
    setGenerated(true);
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 600);
  };

  const results = useMemo(() => {
    if (!generated || loading) return [];
    const searchTerms = [...selectedMeanings];

    if (currentName.trim() && mappingInfo) {
      searchTerms.push(...mappingInfo.muslimNames);
    }

    // Work with partial params — no need to fill everything
    const hasName = currentName.trim().length > 0;
    const hasMeanings = selectedMeanings.length > 0;
    const hasGender = gender !== "all";

    // If nothing is filled at all, show random names
    if (!hasName && !hasMeanings && !hasGender) {
      const shuffled = [...namesDatabase].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 9);
    }

    let names = searchTerms.length > 0
      ? suggestFromMeaning(searchTerms.join(" "))
      : [...namesDatabase];

    if (hasGender) {
      names = names.filter(n => n.gender === gender);
    }

    // If only gender selected and no search terms, shuffle for variety
    if (!hasName && !hasMeanings && hasGender) {
      names = [...names].sort(() => Math.random() - 0.5);
    }

    return names.slice(0, 9);
  }, [generated, loading, currentName, selectedMeanings, gender, mappingInfo]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> Name Discovery Journey
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Discover Your Muslim Name
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Enter your Christian, Hebrew, or Western name to find its Islamic equivalent — or explore by meaning and qualities
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Current Name — Primary CTA */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <label className="block font-display font-semibold text-foreground mb-2">
              What's your current name?
            </label>
            <p className="text-sm text-muted-foreground mb-3">
              We've mapped 200+ Christian, Hebrew & Western names to their Islamic equivalents
            </p>
            <Input
              value={currentName}
              onChange={e => setCurrentName(e.target.value)}
              placeholder="Enter your name (e.g., David, Sarah, Michael...)"
              className="h-12 rounded-xl text-base"
            />

            {/* Live mapping info */}
            <AnimatePresence>
              {mappingInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 bg-teal-light rounded-xl p-4 border border-primary/20"
                >
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">
                        <span className="capitalize">{currentName}</span> → <span className="text-primary font-semibold">{mappingInfo.muslimNames.join(", ")}</span>
                      </p>
                      {mappingInfo.hebrewOrigin && (
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Hebrew origin:</span> {mappingInfo.hebrewOrigin}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground">{mappingInfo.connection}</p>
                      <div className="flex gap-2 flex-wrap pt-1">
                        {mappingInfo.muslimNames.map(n => (
                          <Link
                            key={n}
                            to={`/name/${n.toLowerCase()}`}
                            className="inline-flex items-center gap-1 text-xs text-primary hover:underline bg-primary/5 px-2 py-1 rounded-full"
                          >
                            <BookOpen className="w-3 h-3" /> View {n}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {currentName.trim() && !mappingInfo && (
              <p className="mt-2 text-xs text-muted-foreground">
                We don't have a direct mapping for "{currentName}" yet, but you can still explore by meaning below
              </p>
            )}
          </motion.div>

          {/* Gender */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <label className="block font-display font-semibold text-foreground mb-3">Gender Preference</label>
            <div className="flex gap-2 flex-wrap">
              {(["all", "male", "female", "unisex"] as const).map(g => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                    gender === g
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {g === "all" ? "All" : g}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Meanings */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <label className="block font-display font-semibold text-foreground mb-2">
              What qualities inspire you?
            </label>
            <p className="text-sm text-muted-foreground mb-3">
              Select meanings you want your name to represent
            </p>
            <div className="flex gap-2 flex-wrap">
              {meaningKeywords.map(m => (
                <button
                  key={m}
                  onClick={() => toggleMeaning(m)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                    selectedMeanings.includes(m)
                      ? "bg-primary text-primary-foreground shadow-glow scale-105"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Generate Button */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-center pt-4">
            <Button
              size="lg"
              onClick={handleGenerate}
              className="bg-gradient-hero text-primary-foreground h-14 px-8 text-lg rounded-xl hover:opacity-90 transition-opacity"
            >
              {generated ? <><RefreshCw className="w-5 h-5 mr-2" /> Regenerate Names</> : <><Sparkles className="w-5 h-5 mr-2" /> Discover My Muslim Names</>}
            </Button>
          </motion.div>
        </div>

        {/* Results */}
        {generated && (
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mt-12 scroll-mt-6"
          >
            <h2 className="font-display text-2xl font-semibold mb-6 text-center">
              {mappingInfo ? (
                <>Islamic Names Connected to <span className="text-primary capitalize">{currentName}</span></>
              ) : (
                "Your Suggested Names"
              )}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => <NameCardSkeleton key={i} />)
                : results.map((name, i) => <NameCard key={name.slug} name={name} index={i} />)
              }
            </div>
            {!loading && results.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No matches found. Try different qualities or clear your filters.
              </p>
            )}
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
