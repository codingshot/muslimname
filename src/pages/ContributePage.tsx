import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Bug, Lightbulb, BookOpen, Database, Scale, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const contributionAreas = [
  {
    icon: Database,
    title: "Name Database",
    description: "Add new names with meanings, Quranic references, hadith sources, and regional variations. Verify existing name data for accuracy.",
    labels: ["name-data", "good first issue"],
    examples: ["Add Persian/Turkish origin names", "Add pronunciation audio files", "Verify hadith references"]
  },
  {
    icon: BookOpen,
    title: "Islamic Content",
    description: "Help verify Quranic references, hadith citations, and scholarly content. All religious content should be sourced from authentic references.",
    labels: ["islamic-content", "scholarly-review"],
    examples: ["Review Quranic verse translations", "Add missing hadith references", "Verify companion biographies"]
  },
  {
    icon: Scale,
    title: "Legal Guides",
    description: "Contribute country-specific legal name change guides. Include costs, timelines, required documents, and tips from personal experience.",
    labels: ["legal-guide", "country-specific"],
    examples: ["Add guide for Indonesia", "Update US state-specific info", "Add cost estimates for 2026"]
  },
  {
    icon: Bug,
    title: "Bug Reports",
    description: "Found something broken? Report bugs with clear reproduction steps. Include browser, device, and screenshots when possible.",
    labels: ["bug"],
    examples: ["Search not returning results", "Mobile layout issues", "Broken links"]
  },
  {
    icon: Lightbulb,
    title: "Feature Ideas",
    description: "Suggest new features that would help Muslim converts in their name journey. Think about what would have helped you.",
    labels: ["feature-request", "enhancement"],
    examples: ["Calligraphy preview", "Audio pronunciation", "Name comparison tool"]
  },
  {
    icon: Heart,
    title: "Translations",
    description: "Help translate the platform into other languages. Priority languages: Arabic, Urdu, Turkish, French, Malay, Spanish.",
    labels: ["translation", "i18n"],
    examples: ["French translation", "Arabic RTL support", "Turkish interface"]
  }
];

export default function ContributePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <GitBranch className="w-4 h-4" /> Open Source
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contribute to MuslimName.me
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            MuslimName.me is built by the Ummah, for the Ummah. Whether you're a developer, Islamic scholar, legal expert, or someone who's been through the convert name journey — your contribution matters.
          </p>
        </motion.div>

        {/* Repo Link */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <a
            href="https://github.com/codingshot/muslimname"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-background" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">codingshot/muslimname</p>
                <p className="text-sm text-muted-foreground">Star & fork the repository to get started</p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="font-display text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4">
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-muted rounded-lg p-3">
                <p className="text-muted-foreground mb-1"># Clone the repository</p>
                <p className="text-foreground">git clone https://github.com/codingshot/muslimname.git</p>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <p className="text-muted-foreground mb-1"># Install dependencies</p>
                <p className="text-foreground">cd muslimname && npm install</p>
              </div>
              <div className="bg-muted rounded-lg p-3">
                <p className="text-muted-foreground mb-1"># Start development server</p>
                <p className="text-foreground">npm run dev</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contribution Areas */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="font-display text-2xl font-semibold mb-6 text-center">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contributionAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="bg-card rounded-xl border border-border p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <area.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{area.description}</p>
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {area.labels.map(label => (
                    <Badge key={label} variant="outline" className="text-[10px]">{label}</Badge>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Examples:</p>
                  <ul className="list-disc pl-4 space-y-0.5">
                    {area.examples.map(ex => <li key={ex}>{ex}</li>)}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-2xl font-semibold mb-4">Contribution Guidelines</h2>
          <div className="bg-card rounded-xl border border-border p-6 space-y-4 text-sm text-muted-foreground">
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">📋 Before You Start</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Check existing issues to avoid duplicates</li>
                <li>For large changes, open an issue first to discuss your approach</li>
                <li>Fork the repository and create a new branch for your changes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">📖 For Name Data Contributions</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>All Quranic references must include Surah name, ayah number, and verified translation</li>
                <li>Hadith references must cite the collection (e.g., Sahih Bukhari, Sahih Muslim)</li>
                <li>Name meanings should be verified against Arabic linguistic sources</li>
                <li>Include pronunciation guides using common phonetic notation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">⚖️ For Legal Guide Contributions</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Clearly state the jurisdiction (country/state/province)</li>
                <li>Include source links to official government websites</li>
                <li>Note the date of your information for accuracy</li>
                <li>Add disclaimers that this is informational, not legal advice</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-1">🤝 Code of Conduct</h3>
              <p>This project serves the Muslim community. All contributions should be respectful, accurate, and in the spirit of helping new Muslims. We welcome contributors of all backgrounds and skill levels.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
