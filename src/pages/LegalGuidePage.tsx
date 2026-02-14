import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { legalNameChangeDatabase, type LegalNameChangeGuide } from "@/data/legalNameChange";
import { getRelatedCountries } from "@/data/countryRelations";
import { getMappingsByCountry } from "@/data/nameMapping";
import { findNameBySlug } from "@/data/names";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCountry } from "@/hooks/useCountry";
import { Scale, Clock, DollarSign, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, AlertTriangle, FileText, Search, X, ArrowLeft, Check, RotateCcw, Filter, LayoutGrid, Table2, ArrowUpDown, ArrowUp, ArrowDown, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const difficultyOrder: Record<string, number> = { easy: 0, moderate: 1, complex: 2 };

// Price filter presets
const priceFilters = [
  { label: "All Prices", key: "all", match: () => true },
  { label: "Free", key: "free", match: (g: LegalNameChangeGuide) => g.estimatedCostUSD[0] === 0 },
  { label: "Under $50", key: "under50", match: (g: LegalNameChangeGuide) => g.estimatedCostUSD[0] < 50 },
  { label: "Under $200", key: "under200", match: (g: LegalNameChangeGuide) => g.estimatedCostUSD[0] < 200 },
  { label: "$200+", key: "over200", match: (g: LegalNameChangeGuide) => g.estimatedCostUSD[0] >= 200 },
];

const timeFilters = [
  { label: "Any Time", key: "all", match: () => true },
  { label: "Under 4 wks", key: "under4", match: (g: LegalNameChangeGuide) => g.estimatedTimelineWeeks[1] <= 4 },
  { label: "Under 8 wks", key: "under8", match: (g: LegalNameChangeGuide) => g.estimatedTimelineWeeks[1] <= 8 },
  { label: "Under 12 wks", key: "under12", match: (g: LegalNameChangeGuide) => g.estimatedTimelineWeeks[1] <= 12 },
];

function formatUSD(range: [number, number]) {
  if (range[0] === 0 && range[1] === 0) return "Free";
  if (range[0] === 0) return `Free - $${range[1].toLocaleString()}`;
  return `$${range[0].toLocaleString()} - $${range[1].toLocaleString()}`;
}

const PROGRESS_SAVE_DEBOUNCE_MS = 250;

// --- Progress checklist hook (localStorage) ---
function useStepProgress(countryCode: string, totalSteps: number) {
  const key = `legal-progress-${countryCode}`;
  const [completed, setCompleted] = useState<boolean[]>(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const arr = JSON.parse(saved);
        if (Array.isArray(arr) && arr.length === totalSteps) return arr;
        // Resize if step count changed
        return Array.from({ length: totalSteps }, (_, i) => !!arr[i]);
      }
    } catch {}
    return Array(totalSteps).fill(false);
  });

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completedRef = useRef(completed);
  completedRef.current = completed;

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      try {
        localStorage.setItem(key, JSON.stringify(completedRef.current));
      } catch {
        // QuotaExceeded or private mode
      }
      timerRef.current = null;
    }, PROGRESS_SAVE_DEBOUNCE_MS);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        try {
          localStorage.setItem(key, JSON.stringify(completedRef.current));
        } catch {}
      }
    };
  }, [completed, key]);

  const toggle = useCallback((i: number) => {
    setCompleted(prev => prev.map((v, idx) => (idx === i ? !v : v)));
  }, []);

  const reset = useCallback(() => setCompleted(Array(totalSteps).fill(false)), [totalSteps]);

  const completedCount = completed.filter(Boolean).length;
  return { completed, toggle, reset, completedCount };
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors: Record<string, string> = {
    easy: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    moderate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    complex: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${colors[difficulty] || colors.moderate}`}>
      {difficulty}
    </span>
  );
}

function CountryCard({ guide, onClick, isUserLocation }: { guide: LegalNameChangeGuide; onClick: () => void; isUserLocation?: boolean }) {
  const key = `legal-progress-${guide.countryCode}`;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) {
        const arr = JSON.parse(saved);
        setProgress(arr.filter(Boolean).length);
      }
    } catch {}
  }, [key]);

  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className={`bg-card rounded-xl border p-4 sm:p-5 text-left hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full ${
        isUserLocation ? "border-primary ring-1 ring-primary/20" : "border-border"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-3xl">{guide.flag}</span>
          {isUserLocation && (
            <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] shrink-0">Your location</Badge>
          )}
        </div>
        <DifficultyBadge difficulty={guide.difficulty} />
      </div>
      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-1">{guide.country}</h3>
      <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">{guide.overview.slice(0, 100)}...</p>
      {progress > 0 && (
        <div className="mb-3">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
            <span>{progress}/{guide.steps.length} steps done</span>
            <span>{Math.round((progress / guide.steps.length) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(progress / guide.steps.length) * 100}%` }} />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-1.5 mt-auto pt-3 border-t border-border">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-secondary" />{guide.estimatedCost.split("(")[0].trim()}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-secondary" />{guide.estimatedTimeline}</span>
        </div>
        <span className="text-[10px] text-muted-foreground/70">≈ {formatUSD(guide.estimatedCostUSD)} USD</span>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span className="text-xs text-primary font-medium">View full guide →</span>
      </div>
    </motion.button>
  );
}

function CountryDetail({
  guide,
  onBack,
  onSelectCountry,
}: {
  guide: LegalNameChangeGuide;
  onBack: () => void;
  onSelectCountry: (countryCode: string) => void;
}) {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);
  const { completed, toggle, reset, completedCount } = useStepProgress(guide.countryCode, guide.steps.length);
  const progress = guide.steps.length > 0 ? Math.round((completedCount / guide.steps.length) * 100) : 0;

  const toggleStep = (i: number) => {
    setExpandedSteps(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <Helmet>
        <title>{`Legal Name Change in ${guide.country} — MuslimName.me`}</title>
        <meta name="description" content={`Step-by-step guide to legally changing your name in ${guide.country} after converting to Islam. Cost: ${guide.estimatedCost}, Timeline: ${guide.estimatedTimeline}.`} />
        <meta property="og:title" content={`Legal Name Change in ${guide.country} — MuslimName.me`} />
        <meta property="og:description" content={`Step-by-step guide to legally changing your name in ${guide.country}. Cost: ${guide.estimatedCost}, Timeline: ${guide.estimatedTimeline}.`} />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Name Change Guide: ${guide.country}`} />
        <meta name="twitter:description" content={`${guide.flag} Legal name change guide for ${guide.country}. Difficulty: ${guide.difficulty}. Cost: ${guide.estimatedCost}.`} />
      </Helmet>

      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to all countries
      </button>

      {/* Hero card */}
      <div className="bg-card rounded-2xl border border-border p-5 sm:p-8 mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
          <span className="text-4xl">{guide.flag}</span>
          <div>
            <h2 className="font-display text-xl sm:text-3xl font-bold text-foreground">{guide.country}</h2>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
              <DifficultyBadge difficulty={guide.difficulty} />
              <span className="text-xs text-muted-foreground flex items-center gap-1"><DollarSign className="w-3 h-3" />{guide.estimatedCost}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{guide.estimatedTimeline}</span>
            </div>
            <p className="text-[10px] text-muted-foreground/70 mt-1">≈ {formatUSD(guide.estimatedCostUSD)} USD</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{guide.overview}</p>
      </div>

      {/* Progress bar */}
      <div className="bg-card rounded-xl border border-border p-4 sm:p-5 mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-sm font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" /> Your Progress
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">{completedCount}/{guide.steps.length} complete</span>
            {completedCount > 0 && (
              <button onClick={reset} className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1 transition-colors">
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>
        </div>
        <div className="h-2.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        {progress === 100 && (
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-sm text-primary font-medium mt-3 flex items-center gap-2 py-2 px-3 rounded-lg bg-primary/10"
          >
            <Check className="w-4 h-4 shrink-0" /> All steps completed! MashAllah!
          </motion.p>
        )}
      </div>

      {/* Steps with checkboxes */}
      <div className="bg-card rounded-xl border border-border p-4 sm:p-6 mb-4">
        <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-secondary" /> Step-by-Step Process
        </h3>
        <div className="space-y-2">
          {guide.steps.map((step, i) => (
            <div key={i} className={`rounded-lg overflow-hidden transition-colors ${completed[i] ? "bg-primary/5 border border-primary/20" : "bg-muted/50"}`}>
              <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4">
                <button
                  onClick={(e) => { e.stopPropagation(); toggle(i); }}
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                    completed[i]
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted border-2 border-border text-muted-foreground hover:border-primary"
                  }`}
                  aria-label={completed[i] ? `Mark step ${i + 1} incomplete` : `Mark step ${i + 1} complete`}
                >
                  {completed[i] ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </button>
                <button
                  onClick={() => toggleStep(i)}
                  className={`flex-1 text-left text-sm font-medium transition-colors ${completed[i] ? "text-primary line-through opacity-70" : "text-foreground"}`}
                >
                  {step.title}
                </button>
                <button onClick={() => toggleStep(i)} className="shrink-0">
                  {expandedSteps.includes(i) ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>
              </div>
              <AnimatePresence>
                {expandedSteps.includes(i) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pl-12 sm:pl-14">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      {step.documents && step.documents.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {step.documents.map(doc => (
                            <Badge key={doc} variant="outline" className="text-[10px] sm:text-xs">{doc}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Religious Considerations */}
      <div className="bg-teal-light rounded-xl p-4 sm:p-5 border-l-4 border-primary mb-4">
        <h3 className="font-display font-semibold text-foreground text-sm mb-2">Religious Considerations</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{guide.religiousExemptions}</p>
      </div>

      {/* Related Countries */}
      {useMemo(() => {
        const related = getRelatedCountries(guide, legalNameChangeDatabase, 6);
        if (related.length === 0) return null;
        return (
          <div className="bg-card rounded-xl border border-border p-4 sm:p-5 mb-4">
            <h3 className="font-display text-sm font-semibold text-foreground mb-3">
              Related countries
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              Bordering countries and guides in the same region
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {related.map((r) => (
                <button
                  key={r.countryCode}
                  onClick={() => { onSelectCountry(r.countryCode); window.scrollTo(0, 0); }}
                  className="flex items-start gap-2 p-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors text-left min-w-0 overflow-hidden"
                >
                  <span className="text-xl shrink-0">{r.flag}</span>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <p className="text-sm font-medium text-foreground truncate">{r.country}</p>
                    <p className="text-[10px] text-muted-foreground truncate mt-0.5">{r.estimatedCost?.split("(")[0]?.trim() ?? ""}</p>
                    <div className="mt-1">
                      <DifficultyBadge difficulty={r.difficulty} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      }, [guide.countryCode, guide.difficulty, guide.estimatedCostUSD])}

      {/* Popular names in this country (from name mapping) */}
      {(() => {
        if (!guide.countryCode?.trim()) return null;
        const mappings = getMappingsByCountry(guide.countryCode.trim());
        if (mappings.length === 0) return null;
        const displayMappings = mappings
          .filter(([, m]) => m.muslimNames?.length)
          .slice(0, 12);
        if (displayMappings.length === 0) return null;
        return (
          <div className="bg-card rounded-xl border border-border p-4 sm:p-5 mb-4">
            <h3 className="font-display text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" /> Popular names in {guide.country}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              Names commonly used in {guide.country} and their Islamic equivalents — useful when choosing your new name.
            </p>
            <div className="flex flex-wrap gap-2">
              {displayMappings.map(([key, m]) => {
                const muslimStr = (m.muslimNames ?? []).map(mn => findNameBySlug(mn)?.name ?? mn).join(", ");
                return (
                  <Link
                    key={key}
                    to={`/western-names/${key}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-muted/80 hover:bg-primary/10 text-sm text-foreground hover:text-primary transition-colors border border-transparent hover:border-primary/30"
                  >
                    <span className="font-medium capitalize">{key}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="text-primary">{muslimStr || "—"}</span>
                  </Link>
                );
              })}
            </div>
            {mappings.length > 12 && (
              <Link
                to="/western-names"
                className="inline-block mt-3 text-xs text-primary hover:underline font-medium"
              >
                View all {mappings.length} name mappings →
              </Link>
            )}
          </div>
        );
      })()}

      {/* Tips & Resources side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
        <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
          <h3 className="font-display font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" /> Tips
          </h3>
          <ul className="space-y-2">
            {guide.tips.map((tip, i) => (
              <li key={i} className="text-xs sm:text-sm text-muted-foreground flex gap-2 leading-relaxed">
                <span className="text-primary mt-0.5 shrink-0">•</span> {tip}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card rounded-xl border border-border p-4 sm:p-5">
          <h3 className="font-display font-semibold text-foreground text-sm mb-3">Official Resources</h3>
          <div className="space-y-2">
            {guide.resources.map(res => (
              <a
                key={res.title}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm text-primary hover:underline p-2 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                {res.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
        <AlertTriangle className="w-3 h-3" />
        <span>Last updated: {guide.lastUpdated}. This is general guidance, not legal advice. Consult a local attorney.</span>
      </div>
    </motion.div>
  );
}

type SortColumn = "country" | "difficulty" | "cost" | "timeline";
type SortDir = "asc" | "desc";

export default function LegalGuidePage() {
  const { country: userCountry } = useCountry();
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");
  const [filterPrice, setFilterPrice] = useState<string>("all");
  const [filterTime, setFilterTime] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [sortBy, setSortBy] = useState<SortColumn>("country");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const activePriceFilter = priceFilters.find(f => f.key === filterPrice) ?? priceFilters[0];
  const activeTimeFilter = timeFilters.find(f => f.key === filterTime) ?? timeFilters[0];

  const handleSort = useCallback((col: SortColumn) => {
    setSortBy(col);
    setSortDir(prev => (prev === "asc" && sortBy === col ? "desc" : "asc"));
  }, [sortBy]);

  const filtered = useMemo(() => {
    let list = legalNameChangeDatabase.filter(g => {
      if (search && !g.country.toLowerCase().includes(search.toLowerCase())) return false;
      if (filterDifficulty !== "all" && g.difficulty !== filterDifficulty) return false;
      if (!activePriceFilter.match(g)) return false;
      if (!activeTimeFilter.match(g)) return false;
      return true;
    });
    const mult = sortDir === "asc" ? 1 : -1;
    list = [...list].sort((a, b) => {
      if (sortBy === "country") return mult * a.country.localeCompare(b.country);
      if (sortBy === "difficulty") return mult * ((difficultyOrder[a.difficulty] ?? 1) - (difficultyOrder[b.difficulty] ?? 1));
      if (sortBy === "cost") return mult * (a.estimatedCostUSD[0] - b.estimatedCostUSD[0]);
      if (sortBy === "timeline") return mult * (a.estimatedTimelineWeeks[0] - b.estimatedTimelineWeeks[0]);
      return 0;
    });
    // Pin user's country guide first (from settings or IP detection)
    const code = userCountry?.trim().toUpperCase();
    if (code && code.length === 2) {
      const idx = list.findIndex(g => g.countryCode === code);
      if (idx > 0) {
        const [match] = list.splice(idx, 1);
        list.unshift(match);
      }
    }
    return list;
  }, [search, filterDifficulty, activePriceFilter, activeTimeFilter, sortBy, sortDir, userCountry]);

  const selectedGuide = selectedCountry
    ? legalNameChangeDatabase.find(g => g.countryCode === selectedCountry)
    : null;

  const freeCount = legalNameChangeDatabase.filter(g => g.estimatedCostUSD[0] === 0).length;
  const activeFilterCount = (filterDifficulty !== "all" ? 1 : 0) + (filterPrice !== "all" ? 1 : 0) + (filterTime !== "all" ? 1 : 0);

  return (
    <Layout>
      <Helmet>
        <title>Legal Name Change Guides for Muslims — MuslimName.me</title>
        <meta name="description" content={`Legal name change guides for ${legalNameChangeDatabase.length} countries. Step-by-step processes, costs, timelines, and tips for Muslims changing their name after conversion.`} />
        <link rel="canonical" href="https://muslimname.me/legal-guide" />
        <meta property="og:title" content="Legal Name Change Guides for Muslims | MuslimName.me" />
        <meta property="og:description" content={`Legal name change guides for ${legalNameChangeDatabase.length} countries. Step-by-step processes, costs, timelines, and tips for Muslims.`} />
        <meta property="og:url" content="https://muslimname.me/legal-guide" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content="Legal Name Change Guides for Muslims | MuslimName.me" />
        <meta name="twitter:description" content={`Legal guides for ${legalNameChangeDatabase.length} countries. Costs, timelines, documents.`} />
        <meta name="twitter:image" content="https://muslimname.me/og-image.png" />
      </Helmet>
      <div className="container mx-auto px-4 py-6 sm:py-8 md:py-12 max-w-5xl">
        <AnimatePresence mode="wait">
          {selectedGuide ? (
            <CountryDetail
              key="detail"
              guide={selectedGuide}
              onBack={() => setSelectedCountry(null)}
              onSelectCountry={(code) => setSelectedCountry(code)}
            />
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                  <Scale className="w-4 h-4" /> Legal Guide
                </div>
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Legal Name Change Guides
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
                  Country-specific guides for legally changing your name. Costs, timelines, documents, and tips.
                </p>
              </motion.div>

              {/* Stats — clickable */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto mb-6">
                {[
                  { label: "Countries", value: legalNameChangeDatabase.length, action: () => { setFilterDifficulty("all"); setFilterPrice("all"); setFilterTime("all"); setSearch(""); } },
                  { label: "Easy Process", value: legalNameChangeDatabase.filter(g => g.difficulty === "easy").length, action: () => { setFilterDifficulty("easy"); setFilterPrice("all"); setFilterTime("all"); } },
                  { label: "Free Options", value: freeCount, action: () => { setFilterPrice("free"); setFilterDifficulty("all"); setFilterTime("all"); } },
                ].map(stat => (
                  <button
                    key={stat.label}
                    onClick={stat.action}
                    className="bg-card rounded-xl border border-border p-3 text-center hover:border-primary hover:shadow-card-hover transition-all cursor-pointer"
                  >
                    <p className="font-display text-xl sm:text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                  </button>
                ))}
              </div>

              {/* Search & Inline Filters */}
              <div className="max-w-3xl mx-auto mb-6">
                {/* Search + Filter row */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                      placeholder="Search countries..."
                      className="pl-10 h-10 rounded-xl bg-card"
                    />
                    {search && (
                      <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted text-muted-foreground">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Price filter dropdown */}
                  <select
                    value={filterPrice}
                    onChange={e => setFilterPrice(e.target.value)}
                    className="h-10 rounded-xl bg-card border border-border px-3 text-xs font-medium text-foreground cursor-pointer"
                  >
                    {priceFilters.map(f => (
                      <option key={f.key} value={f.key}>{f.label}</option>
                    ))}
                  </select>

                  {/* Time filter dropdown */}
                  <select
                    value={filterTime}
                    onChange={e => setFilterTime(e.target.value)}
                    className="h-10 rounded-xl bg-card border border-border px-3 text-xs font-medium text-foreground cursor-pointer"
                  >
                    {timeFilters.map(f => (
                      <option key={f.key} value={f.key}>{f.label}</option>
                    ))}
                  </select>
                </div>

                {/* Difficulty pills */}
                <div className="flex gap-1.5 flex-wrap items-center">
                  {["all", "easy", "moderate", "complex"].map(d => (
                    <button
                      key={d}
                      onClick={() => setFilterDifficulty(d)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                        filterDifficulty === d
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {d === "all" ? "All" : d}
                    </button>
                  ))}

                  {activeFilterCount > 0 && (
                    <button
                      onClick={() => { setFilterDifficulty("all"); setFilterPrice("all"); setFilterTime("all"); setSearch(""); }}
                      className="ml-auto text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Clear filters ({activeFilterCount})
                    </button>
                  )}
                </div>

                {/* Active filter chips */}
                {activeFilterCount > 0 && (
                  <div className="flex gap-1.5 flex-wrap mt-2">
                    {filterDifficulty !== "all" && (
                      <button onClick={() => setFilterDifficulty("all")} className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors capitalize">
                        {filterDifficulty} <X className="w-3 h-3" />
                      </button>
                    )}
                    {filterPrice !== "all" && (
                      <button onClick={() => setFilterPrice("all")} className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors">
                        {activePriceFilter.label} <X className="w-3 h-3" />
                      </button>
                    )}
                    {filterTime !== "all" && (
                      <button onClick={() => setFilterTime("all")} className="inline-flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/20 transition-colors">
                        {activeTimeFilter.label} <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Results count + view toggle */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
                <p className="text-xs text-muted-foreground">
                  Showing {filtered.length} of {legalNameChangeDatabase.length} countries
                </p>
                <div className="flex rounded-lg border border-border p-0.5 bg-muted/30">
                  <button
                    onClick={() => setViewMode("cards")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      viewMode === "cards" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-pressed={viewMode === "cards"}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" /> Cards
                  </button>
                  <button
                    onClick={() => setViewMode("table")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      viewMode === "table" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-pressed={viewMode === "table"}
                  >
                    <Table2 className="w-3.5 h-3.5" /> Table
                  </button>
                </div>
              </div>

              {/* Card Grid */}
              {viewMode === "cards" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {filtered.map((guide) => (
                  <CountryCard
                    key={guide.countryCode}
                    guide={guide}
                    onClick={() => { setSelectedCountry(guide.countryCode); window.scrollTo(0, 0); }}
                    isUserLocation={!!(userCountry?.trim() && userCountry.trim().toUpperCase() === guide.countryCode)}
                  />
                ))}
              </div>
              )}

              {/* Table view */}
              {viewMode === "table" && (
              <div className="rounded-xl border border-border overflow-hidden bg-card">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th>
                          <button
                            onClick={() => handleSort("country")}
                            className="w-full flex items-center gap-1.5 px-4 py-3 text-left font-semibold hover:bg-muted/80 transition-colors"
                          >
                            Country
                            {sortBy === "country" ? (sortDir === "asc" ? <ArrowUp className="w-3.5 h-3.5" /> : <ArrowDown className="w-3.5 h-3.5" />) : <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground/50" />}
                          </button>
                        </th>
                        <th>
                          <button
                            onClick={() => handleSort("difficulty")}
                            className="w-full flex items-center gap-1.5 px-4 py-3 text-left font-semibold hover:bg-muted/80 transition-colors"
                          >
                            Difficulty
                            {sortBy === "difficulty" ? (sortDir === "asc" ? <ArrowUp className="w-3.5 h-3.5" /> : <ArrowDown className="w-3.5 h-3.5" />) : <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground/50" />}
                          </button>
                        </th>
                        <th>
                          <button
                            onClick={() => handleSort("cost")}
                            className="w-full flex items-center gap-1.5 px-4 py-3 text-left font-semibold hover:bg-muted/80 transition-colors"
                          >
                            Cost
                            {sortBy === "cost" ? (sortDir === "asc" ? <ArrowUp className="w-3.5 h-3.5" /> : <ArrowDown className="w-3.5 h-3.5" />) : <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground/50" />}
                          </button>
                        </th>
                        <th>
                          <button
                            onClick={() => handleSort("timeline")}
                            className="w-full flex items-center gap-1.5 px-4 py-3 text-left font-semibold hover:bg-muted/80 transition-colors"
                          >
                            Timeline
                            {sortBy === "timeline" ? (sortDir === "asc" ? <ArrowUp className="w-3.5 h-3.5" /> : <ArrowDown className="w-3.5 h-3.5" />) : <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground/50" />}
                          </button>
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-muted-foreground w-20">Guide</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((guide) => (
                        <tr
                          key={guide.countryCode}
                          className={`border-b border-border last:border-0 hover:bg-muted/30 transition-colors ${
                            userCountry?.trim() && userCountry.trim().toUpperCase() === guide.countryCode ? "bg-primary/5" : ""
                          }`}
                        >
                          <td className="px-4 py-3">
                            <button
                              onClick={() => { setSelectedCountry(guide.countryCode); window.scrollTo(0, 0); }}
                              className="flex items-center gap-2 text-left font-medium text-primary hover:underline"
                            >
                              <span className="text-xl">{guide.flag}</span>
                              {guide.country}
                              {userCountry?.trim() && userCountry.trim().toUpperCase() === guide.countryCode && (
                                <Badge className="bg-primary/15 text-primary border-primary/30 text-[10px] ml-1">Your location</Badge>
                              )}
                            </button>
                          </td>
                          <td className="px-4 py-3">
                            <DifficultyBadge difficulty={guide.difficulty} />
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">{formatUSD(guide.estimatedCostUSD)}</td>
                          <td className="px-4 py-3 text-muted-foreground">{guide.estimatedTimeline}</td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => { setSelectedCountry(guide.countryCode); window.scrollTo(0, 0); }}
                              className="text-xs font-medium text-primary hover:underline"
                            >
                              View →
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              )}

              {filtered.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg font-display font-semibold text-foreground mb-2">No countries found</p>
                  <p className="text-muted-foreground text-sm mb-4">Try adjusting your filters</p>
                  <button
                    onClick={() => { setFilterDifficulty("all"); setFilterPrice("all"); setFilterTime("all"); setSearch(""); }}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 sm:mt-10 text-center"
              >
                <p className="text-sm text-muted-foreground mb-2">
                  Don't see your country? Help us add it!
                </p>
                <a
                  href="https://github.com/codingshot/muslimname/issues/new?template=legal-guide.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  Submit a legal guide <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
