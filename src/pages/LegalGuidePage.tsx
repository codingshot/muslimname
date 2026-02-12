import { useState } from "react";
import Layout from "@/components/Layout";
import { legalNameChangeDatabase, type LegalNameChangeGuide } from "@/data/legalNameChange";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Clock, DollarSign, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, AlertTriangle, FileText, Search, X, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const difficultyOrder = { easy: 0, moderate: 1, complex: 2 };

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const colors = {
    easy: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    moderate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    complex: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${colors[difficulty as keyof typeof colors] || colors.moderate}`}>
      {difficulty}
    </span>
  );
}

function CountryCard({ guide, onClick }: { guide: LegalNameChangeGuide; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
      className="bg-card rounded-xl border border-border p-5 text-left hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-3xl">{guide.flag}</span>
        <DifficultyBadge difficulty={guide.difficulty} />
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-1">{guide.country}</h3>
      <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">{guide.overview.slice(0, 100)}...</p>
      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-3 border-t border-border">
        <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-secondary" />{guide.estimatedCost.split("(")[0].trim()}</span>
        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-secondary" />{guide.estimatedTimeline}</span>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span className="text-xs text-primary font-medium">View full guide →</span>
      </div>
    </motion.button>
  );
}

function CountryDetail({ guide, onBack }: { guide: LegalNameChangeGuide; onBack: () => void }) {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);
  const toggleStep = (i: number) => {
    setExpandedSteps(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <button onClick={onBack} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to all countries
      </button>

      {/* Hero card */}
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-4xl">{guide.flag}</span>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{guide.country}</h2>
            <div className="flex items-center gap-3 mt-1">
              <DifficultyBadge difficulty={guide.difficulty} />
              <span className="text-xs text-muted-foreground flex items-center gap-1"><DollarSign className="w-3 h-3" />{guide.estimatedCost}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{guide.estimatedTimeline}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{guide.overview}</p>
      </div>

      {/* Steps */}
      <div className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-4">
        <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-secondary" /> Step-by-Step Process
        </h3>
        <div className="space-y-2">
          {guide.steps.map((step, i) => (
            <div key={i} className="bg-muted/50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleStep(i)}
                className="w-full flex items-center gap-3 p-3 sm:p-4 text-left text-sm hover:bg-muted/80 transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="font-medium text-foreground flex-1">{step.title}</span>
                {expandedSteps.includes(i) ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
              </button>
              <AnimatePresence>
                {expandedSteps.includes(i) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 pl-14">
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
      <div className="bg-teal-light rounded-xl p-5 border-l-4 border-primary mb-4">
        <h3 className="font-display font-semibold text-foreground text-sm mb-2">Religious Considerations</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{guide.religiousExemptions}</p>
      </div>

      {/* Tips & Resources side by side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="bg-card rounded-xl border border-border p-5">
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
        <div className="bg-card rounded-xl border border-border p-5">
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

export default function LegalGuidePage() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");

  const filtered = legalNameChangeDatabase
    .filter(g => {
      if (search && !g.country.toLowerCase().includes(search.toLowerCase())) return false;
      if (filterDifficulty !== "all" && g.difficulty !== filterDifficulty) return false;
      return true;
    })
    .sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);

  const selectedGuide = selectedCountry
    ? legalNameChangeDatabase.find(g => g.countryCode === selectedCountry)
    : null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
        <AnimatePresence mode="wait">
          {selectedGuide ? (
            <CountryDetail
              key="detail"
              guide={selectedGuide}
              onBack={() => setSelectedCountry(null)}
            />
          ) : (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                  <Scale className="w-4 h-4" /> Legal Guide
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  Legal Name Change Guides
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Country-specific guides for legally changing your name. Costs, timelines, documents, and tips.
                </p>
              </motion.div>

              {/* Search & Filters */}
              <div className="max-w-md mx-auto mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search countries..."
                    className="pl-10 h-11 rounded-xl bg-card"
                  />
                  {search && (
                    <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted text-muted-foreground">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="flex gap-2 mt-3 justify-center">
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
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-8">
                {[
                  { label: "Countries", value: legalNameChangeDatabase.length },
                  { label: "Easy Process", value: legalNameChangeDatabase.filter(g => g.difficulty === "easy").length },
                  { label: "Free Options", value: legalNameChangeDatabase.filter(g => g.estimatedCost.includes("£0") || g.estimatedCost.includes("€0")).length },
                ].map(stat => (
                  <div key={stat.label} className="bg-card rounded-xl border border-border p-3 text-center">
                    <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.map((guide, i) => (
                  <CountryCard
                    key={guide.countryCode}
                    guide={guide}
                    onClick={() => setSelectedCountry(guide.countryCode)}
                  />
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg font-display font-semibold text-foreground mb-2">No countries found</p>
                  <p className="text-muted-foreground text-sm">Try a different search term</p>
                </div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-10 text-center"
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
