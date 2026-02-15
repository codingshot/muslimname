import { useState, useMemo, useEffect, useRef, useDeferredValue } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import NameCard from "@/components/NameCard";
import NameCardSkeleton from "@/components/NameCardSkeleton";
import { suggestFromMeaning, namesDatabase, findNameBySlug, getQuickNameSuggestions } from "@/data/names";
import { getMultiNameMappingContext, getCombinedMuslimNamesFromMultiMapping, getDidYouMeanSuggestions, getCombinedTypingSuggestions, getCanonicalMappingKey, getMappingAffiliation, type NameMapping } from "@/data/nameMapping";
import { getFiqhRuling } from "@/data/fiqh";
import { fetchWordMeaning } from "@/lib/dictionary";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Info, ArrowRight, BookOpen } from "lucide-react";
import FiqhPanel from "@/components/FiqhPanel";
import { MuslimNameHoverCard } from "@/components/MuslimNameHoverCard";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "@/hooks/useProfile";
import { useCountry } from "@/hooks/useCountry";

const meaningKeywords = [
  "grace", "strong", "light", "beautiful", "pure", "faithful",
  "wise", "life", "courage", "peace", "noble", "love", "leader",
  "eternal", "mercy", "patience", "joy", "knowledge", "sacrifice",
  "devotion", "justice", "beauty", "strength", "purity", "guidance",
  "blessing", "truth", "brave", "virtue", "lion", "garden",
  "star", "flower", "faith", "worship", "compassion", "exalted",
  "heaven", "paradise", "forgiving", "grateful", "humble"
];

export default function GeneratorPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { profile, updateSettings } = useProfile();
  const { country } = useCountry();
  const initialName = searchParams.get("name") || 
    [profile.settings.currentFirstName, profile.settings.currentLastName].filter(Boolean).join(" ");
  const [currentName, setCurrentName] = useState(initialName);
  const [customMeaning, setCustomMeaning] = useState("");
  const [selectedMeanings, setSelectedMeanings] = useState<string[]>([]);
  const [gender, setGender] = useState<"all" | "male" | "female" | "unisex">(profile.settings.genderPreference);
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [detectedMeaning, setDetectedMeaning] = useState<{ word: string; meaning: string; searchWords: string[] } | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Sync current name to profile first/last name settings
  useEffect(() => {
    const trimmed = currentName.trim();
    if (!trimmed) {
      updateSettings({ currentFirstName: "", currentLastName: "" });
      return;
    }
    const parts = trimmed.split(/\s+/);
    if (parts.length === 1) {
      updateSettings({ currentFirstName: parts[0], currentLastName: "" });
    } else {
      updateSettings({ currentFirstName: parts[0], currentLastName: parts.slice(1).join(" ") });
    }
  }, [currentName, updateSettings]);

  // Auto-generate if name came from URL
  useEffect(() => {
    const urlName = searchParams.get("name");
    if (urlName) {
      setCurrentName(decodeURIComponent(urlName));
      setGenerated(true);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }, 600);
    }
  }, [searchParams]);

  const multiMappingInfo = useMemo(() => getMultiNameMappingContext(currentName.trim()), [currentName]);
  const hasAnyMapping = multiMappingInfo.some(p => p.mapping);

  // When no mapping, try to detect meaning from dictionary (for names like Grace, Hope, Rose)
  useEffect(() => {
    if (hasAnyMapping) {
      setDetectedMeaning(null);
      return;
    }
    const firstWord = currentName.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
    if (firstWord.length < 3 || !/^[a-z-]+$/.test(firstWord)) {
      setDetectedMeaning(null);
      return;
    }
    let cancelled = false;
    fetchWordMeaning(firstWord).then((result) => {
      if (cancelled || !result) return;
      setDetectedMeaning({ word: firstWord, meaning: result.meaning, searchWords: result.searchWords });
    }).catch(() => {
      if (!cancelled) setDetectedMeaning(null);
    });
    return () => { cancelled = true; };
  }, [currentName, hasAnyMapping]);

  const deferredNameForSuggestions = useDeferredValue(
    hasAnyMapping ? "" : currentName.trim()
  );
  const didYouMeanSuggestions = useMemo(
    () => getDidYouMeanSuggestions(deferredNameForSuggestions, 4, { countryCode: country ?? undefined }),
    [deferredNameForSuggestions, country]
  );
  const typingSuggestions = useMemo(() => {
    const parts = currentName.trim().split(/\s+/).filter(Boolean);
    return parts.map((word, index) => {
      if (!word || word.length < 2) return { word, index, mapping: [] as { displayName: string; canonicalKey: string }[], muslim: [] as { slug: string; name: string; meaning: string }[] };
      return {
        word,
        index,
        mapping: getCombinedTypingSuggestions(word, { limit: 5, countryCode: country ?? undefined }),
        muslim: getQuickNameSuggestions(word, 4),
      };
    }).filter(w => w.mapping.length > 0 || w.muslim.length > 0);
  }, [currentName, country]);

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

    if (customMeaning.trim()) {
      searchTerms.push(...customMeaning.trim().toLowerCase().split(/[\s,]+/).filter(w => w.length > 1));
    }

    // Use detected dictionary meaning when no mapping (e.g., "Grace" → grace, elegant, charming)
    if (!hasAnyMapping && detectedMeaning?.searchWords?.length && !customMeaning.trim()) {
      searchTerms.push(...detectedMeaning.searchWords.slice(0, 8));
    }
    // Fallback: use the name itself as search term when no mapping (matches themes/meanings containing the word)
    if (!hasAnyMapping && searchTerms.length === 0 && currentName.trim()) {
      const firstWord = currentName.trim().split(/\s+/)[0]?.toLowerCase();
      if (firstWord && firstWord.length >= 2) searchTerms.push(firstWord);
    }

    if (currentName.trim() && hasAnyMapping) {
      searchTerms.push(...getCombinedMuslimNamesFromMultiMapping(currentName.trim()));
      for (const p of multiMappingInfo) {
        if (p.mapping) {
          const meaningWords = p.mapping.meaning.toLowerCase().split(/[\s,]+/).filter(w => w.length > 2);
          searchTerms.push(...meaningWords);
          const connectionWords = p.mapping.connection.toLowerCase().split(/[\s,]+/).filter(w => w.length > 3);
          searchTerms.push(...connectionWords.slice(0, 3));
        }
      }
    }

    const hasName = currentName.trim().length > 0;
    const hasMeanings = selectedMeanings.length > 0;
    const hasCustomMeaning = customMeaning.trim().length > 0;
    const hasGender = gender !== "all";

    if (!hasName && !hasMeanings && !hasCustomMeaning && !hasGender) {
      const shuffled = [...namesDatabase].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 9);
    }

    let names = searchTerms.length > 0
      ? suggestFromMeaning(searchTerms.join(" "))
      : [...namesDatabase];

    if (hasGender) names = names.filter(n => n.gender === gender);

    if (!hasName && !hasMeanings && !hasCustomMeaning && hasGender) {
      names = [...names].sort(() => Math.random() - 0.5);
    }

    if (names.length === 0 && (hasAnyMapping || hasCustomMeaning)) {
      names = [...namesDatabase]
        .filter(n => !hasGender || n.gender === gender)
        .sort(() => Math.random() - 0.5)
        .slice(0, 9);
    }

    return names.slice(0, 9);
  }, [generated, loading, currentName, customMeaning, selectedMeanings, gender, hasAnyMapping, multiMappingInfo, detectedMeaning]);

  return (
    <Layout>
      <Helmet>
        <title>Muslim Name Generator — Find Your Islamic Name | Converts, Reverts & Cultural</title>
        <meta name="description" content="Find your Islamic name equivalent. Enter your name — Christian, Hindu, Chinese, Korean or Western — and discover Muslim names with Quranic references. For converts, reverts & cultural name changes." />
        <link rel="canonical" href="https://muslimname.me/generator" />
        <meta name="keywords" content="Muslim name generator, Islamic name equivalent, convert name to Muslim, revert name finder, new Muslim name, cultural name change, Hindu name Islamic, Christian name Muslim" />
        <meta property="og:title" content="Discover Your Muslim Name — Generator | MuslimName.me" />
        <meta property="og:description" content="Enter your current name and find its Islamic equivalent. Quranic references, meanings & legal name change guides." />
        <meta property="og:url" content="https://muslimname.me/generator" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content="Discover Your Muslim Name | MuslimName.me" />
        <meta name="twitter:description" content="Enter your name and find its Islamic equivalent. Quranic references & legal guides." />
      </Helmet>
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
            Find your Islamic equivalent in 3 simple steps — or explore by meaning and qualities
          </p>
        </motion.div>

        {/* Step Indicators */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-4 left-[16%] right-[16%] h-0.5 bg-border" />
            {[
              { num: 1, label: "Your Name", active: true },
              { num: 2, label: "Preferences", active: currentName.trim().length > 0 || selectedMeanings.length > 0 },
              { num: 3, label: "Discover", active: generated },
            ].map(step => (
              <div key={step.num} className="flex flex-col items-center relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step.active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>{step.num}</div>
                <span className={`text-xs mt-1.5 font-medium ${step.active ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Current Name — Primary CTA */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <label className="block font-display font-semibold text-foreground mb-2">
              What's your current name?
            </label>
            <p className="text-sm text-muted-foreground mb-3">
              We've mapped 1,700+ non-Muslim names — Christian, Hindu, Chinese, Korean & more — to Islamic equivalents
            </p>
            <div className="relative">
              <Input
                value={currentName}
                onChange={e => { setCurrentName(e.target.value); setShowSuggestions(true); }}
                onFocus={() => currentName.trim().length >= 2 && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                placeholder="Enter your name (e.g., David, Sarah, Michael...)"
                aria-label="Enter your current name to discover Islamic equivalent"
                aria-autocomplete="list"
                aria-controls="name-suggestions"
                className="h-12 rounded-xl text-base"
              />
              {showSuggestions && typingSuggestions.length > 0 && (
                <div
                  id="name-suggestions"
                  role="listbox"
                  className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg z-50 py-2 max-h-72 overflow-y-auto"
                >
                  {typingSuggestions.map(({ word, index, mapping, muslim }) => {
                    const parts = currentName.trim().split(/\s+/).filter(Boolean);
                    const replaceWordAt = (newVal: string) => {
                      const next = [...parts];
                      next[index] = newVal;
                      return next.join(" ");
                    };
                    return (
                      <div key={`${word}-${index}`} className="border-b border-border last:border-0 last:mb-0 mb-2 last:pb-0 pb-2 px-3">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground py-1 mb-1">
                          Suggestions for &quot;{word}&quot;
                        </p>
                        {mapping.length > 0 && (
                          <div className="mb-1">
                            {mapping.map(({ displayName, canonicalKey }) => {
                              const aff = getMappingAffiliation(canonicalKey);
                              return (
                                <button
                                  key={canonicalKey}
                                  type="button"
                                  role="option"
                                  onClick={() => { setCurrentName(replaceWordAt(displayName)); setShowSuggestions(false); }}
                                  onDoubleClick={() => { setCurrentName(replaceWordAt(displayName)); setShowSuggestions(false); navigate(`/western-names/${canonicalKey}`); }}
                                  title="Double-click to see full details"
                                  className="block w-full text-left px-3 py-2 text-sm hover:bg-muted rounded-lg"
                                >
                                  <span>{displayName}</span>
                                  {aff && (
                                    <span className="ml-1.5 text-xs text-muted-foreground">
                                      {aff.flag && <span className="mr-0.5">{aff.flag}</span>}{aff.label}
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                        {muslim.length > 0 && (
                          <div>
                            {muslim.map(n => (
                              <Link
                                key={n.slug}
                                to={`/name/${n.slug}`}
                                onClick={() => setShowSuggestions(false)}
                                className="block px-3 py-2 text-sm hover:bg-muted rounded-lg"
                              >
                                {n.name} <span className="text-muted-foreground text-xs">— {n.meaning}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Live mapping info */}
            <AnimatePresence>
              {hasAnyMapping && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 space-y-3"
                >
                  {multiMappingInfo.filter(p => p.mapping).map((part, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-teal-light rounded-xl p-4 border border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div className="space-y-2 flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {part.canonicalKey ? (
                              <Link to={`/western-names/${part.canonicalKey}`} className="capitalize hover:text-primary hover:underline">
                                {part.western}
                              </Link>
                            ) : (
                              <span className="capitalize">{part.western}</span>
                            )}
                            {" → "}
                            <span className="text-primary font-semibold">{part.mapping!.muslimNames.join(", ")}</span>
                          </p>
                          {part.mapping!.hebrewOrigin && (
                            <p className="text-xs text-muted-foreground">
                              <span className="font-medium">Hebrew origin:</span> {part.mapping!.hebrewOrigin}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground">{part.mapping!.connection}</p>
                          <div className="flex gap-2 flex-wrap pt-1">
                            {part.mapping!.muslimNames.map(n => (
                              <MuslimNameHoverCard
                                key={n}
                                slug={n}
                                className="inline-flex items-center gap-1 text-xs text-primary hover:underline bg-primary/5 px-2 py-1 rounded-full"
                                fallbackDisplay={n}
                              >
                                <BookOpen className="w-3 h-3" /> View {findNameBySlug(n)?.name ?? n}
                              </MuslimNameHoverCard>
                            ))}
                          </div>
                          <div className="mt-2">
                            <FiqhPanel name={part.western} fiqh={getFiqhRuling(part.western, part.mapping)} compact />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {multiMappingInfo.some(p => !p.mapping) && (
                    <p className="text-xs text-muted-foreground">
                      {multiMappingInfo.filter(p => !p.mapping).map(p => p.western).join(", ")} — not in our mapping database
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {currentName.trim() && !hasAnyMapping && (
              <div className="mt-3 space-y-3">
                <p className="text-xs text-muted-foreground">
                  We don&apos;t have a direct mapping for &quot;{currentName.trim().split(/\s+/)[0]}&quot;
                </p>
                <FiqhPanel name={currentName} fiqh={getFiqhRuling(currentName, null)} compact />
                {didYouMeanSuggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs text-muted-foreground">Did you mean:</span>
                    {didYouMeanSuggestions.map(({ displayName, canonicalKey }) => (
                      <button
                        key={canonicalKey}
                        type="button"
                        onClick={() => {
                          const rest = currentName.trim().split(/\s+/).slice(1).join(" ");
                          setCurrentName(rest ? `${displayName} ${rest}` : displayName);
                        }}
                        onDoubleClick={() => navigate(`/western-names/${canonicalKey}`)}
                        title="Double-click to see full details"
                        className="text-xs font-medium text-primary hover:underline bg-primary/10 hover:bg-primary/20 px-2 py-1 rounded-full transition-colors"
                      >
                        {displayName}
                      </button>
                    ))}
                  </div>
                )}
                <div className="space-y-2">
                  {detectedMeaning && (
                    <p className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                      <span>
                        <span className="font-medium text-foreground capitalize">{detectedMeaning.word}</span>
                        {" "}likely means: {detectedMeaning.meaning.slice(0, 80)}{detectedMeaning.meaning.length > 80 ? "…" : ""}
                        {" "}— we&apos;ll use this to find similar names (via Free Dictionary API).
                      </span>
                    </p>
                  )}
                  <label className="text-xs font-medium text-muted-foreground block">
                    {detectedMeaning ? "Override or add more: " : "Optional: What does your name mean? "}
                    (e.g., gift of God, strong, light)
                  </label>
                  <Input
                    value={customMeaning}
                    onChange={e => setCustomMeaning(e.target.value)}
                    placeholder={detectedMeaning ? "Add more meaning words..." : "Enter meaning to find similar names..."}
                    className="h-9 text-sm"
                  />
                </div>
              </div>
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
            <div className="flex items-center justify-between mb-2">
              <label className="block font-display font-semibold text-foreground">
                What qualities inspire you?
              </label>
              {selectedMeanings.length > 0 && (
                <span className="text-xs text-primary font-medium">{selectedMeanings.length} selected</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Select meanings you want your name to represent
            </p>
            <div className={`flex gap-1.5 flex-wrap ${generated ? "max-h-24 overflow-hidden relative" : ""}`}>
              {meaningKeywords.map(m => (
                <button
                  key={m}
                  onClick={() => toggleMeaning(m)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize transition-all ${
                    selectedMeanings.includes(m)
                      ? "bg-primary text-primary-foreground shadow-glow scale-105"
                      : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {m}
                </button>
              ))}
              {generated && (
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              )}
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
            className="max-w-5xl mx-auto mt-12 scroll-mt-24"
          >
            <h2 className="font-display text-2xl font-semibold mb-6 text-center">
              {hasAnyMapping ? (
                <>Islamic Names Connected to <span className="text-primary capitalize">{currentName.trim()}</span></>
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
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                  <Sparkles className="h-7 w-7" />
                </div>
                <p className="font-display font-semibold text-foreground mb-2">No matches found</p>
                <p className="text-muted-foreground text-sm mb-6 max-w-sm">Try different qualities or clear your filters.</p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Link
                    to="/names"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Browse all names
                  </Link>
                  <button
                    type="button"
                    onClick={() => { setSelectedMeanings([]); setCustomMeaning(""); setGender("all"); }}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted/50 transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
