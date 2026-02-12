import { useState } from "react";
import Layout from "@/components/Layout";
import { legalNameChangeDatabase, type LegalNameChangeGuide } from "@/data/legalNameChange";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Clock, DollarSign, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, AlertTriangle, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

function CountryGuide({ guide }: { guide: LegalNameChangeGuide }) {
  const [expanded, setExpanded] = useState(false);
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);

  const toggleStep = (i: number) => {
    setExpandedSteps(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl border border-border overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{guide.flag}</span>
          <div>
            <h3 className="font-display font-semibold text-foreground">{guide.country}</h3>
            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{guide.estimatedCost}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{guide.estimatedTimeline}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DifficultyBadge difficulty={guide.difficulty} />
          {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-5 border-t border-border pt-5">
              <p className="text-sm text-muted-foreground leading-relaxed">{guide.overview}</p>

              {/* Steps */}
              <div>
                <h4 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-secondary" /> Step-by-Step Process
                </h4>
                <div className="space-y-2">
                  {guide.steps.map((step, i) => (
                    <div key={i} className="bg-muted/50 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleStep(i)}
                        className="w-full flex items-center gap-3 p-3 text-left text-sm"
                      >
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                          {i + 1}
                        </span>
                        <span className="font-medium text-foreground flex-1">{step.title}</span>
                        {expandedSteps.includes(i) ? <ChevronUp className="w-3.5 h-3.5 text-muted-foreground" /> : <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />}
                      </button>
                      {expandedSteps.includes(i) && (
                        <div className="px-3 pb-3 pl-12">
                          <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                          {step.documents && step.documents.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                              {step.documents.map(doc => (
                                <Badge key={doc} variant="outline" className="text-[10px]">{doc}</Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Religious Exemptions */}
              <div className="bg-teal-light rounded-lg p-4 border-l-4 border-primary">
                <h4 className="font-display font-semibold text-foreground text-sm mb-1">Religious Considerations</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{guide.religiousExemptions}</p>
              </div>

              {/* Tips */}
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Tips
                </h4>
                <ul className="space-y-1">
                  {guide.tips.map((tip, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-primary mt-0.5">•</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-2">Official Resources</h4>
                <div className="flex flex-wrap gap-2">
                  {guide.resources.map(res => (
                    <a
                      key={res.title}
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      {res.title} <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <AlertTriangle className="w-3 h-3" />
                <span>Last updated: {guide.lastUpdated}. This is general guidance, not legal advice. Consult a local attorney.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LegalGuidePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Scale className="w-4 h-4" /> Legal Guide
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Legal Name Change Guides
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Country-specific guides for legally changing your name after converting to Islam. Costs, timelines, documents, and tips from the community.
          </p>
        </motion.div>

        <div className="space-y-3">
          {legalNameChangeDatabase.map(guide => (
            <CountryGuide key={guide.countryCode} guide={guide} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
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
      </div>
    </Layout>
  );
}
