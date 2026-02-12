import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import NameCard from "@/components/NameCard";
import { suggestFromMeaning, filterNames, namesDatabase } from "@/data/names";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const meaningKeywords = [
  "grace", "strong", "light", "beautiful", "pure", "faithful",
  "wise", "life", "courage", "peace", "noble", "love", "leader", "eternal"
];

export default function GeneratorPage() {
  const [currentName, setCurrentName] = useState("");
  const [selectedMeanings, setSelectedMeanings] = useState<string[]>([]);
  const [gender, setGender] = useState<"all" | "male" | "female" | "unisex">("all");
  const [generated, setGenerated] = useState(false);

  const toggleMeaning = (m: string) => {
    setSelectedMeanings(prev =>
      prev.includes(m) ? prev.filter(x => x !== m) : [...prev, m]
    );
  };

  const results = useMemo(() => {
    if (!generated) return [];
    // Combine current name meaning search with selected meanings
    const searchTerms = [...selectedMeanings];
    if (currentName.trim()) {
      // Simple mapping of common English names to meaning keywords
      const lowerName = currentName.toLowerCase();
      const nameToMeaning: Record<string, string[]> = {
        "grace": ["grace", "beautiful"],
        "john": ["faithful", "grace"],
        "david": ["love", "strong"],
        "michael": ["strong", "leader"],
        "sarah": ["noble", "pure"],
        "james": ["strong", "faithful"],
        "mary": ["pure", "love"],
        "robert": ["noble", "strong"],
        "elizabeth": ["noble", "faithful"],
        "william": ["strong", "leader"],
        "jennifer": ["beautiful", "pure"],
        "daniel": ["wise", "faithful"],
        "chris": ["faithful", "peace"],
        "matthew": ["faithful", "grace"],
        "paul": ["humble", "peace"],
        "mark": ["strong", "courage"],
        "steven": ["noble", "strong"],
        "andrew": ["strong", "courage"],
        "peter": ["strong", "faithful"],
        "brian": ["noble", "strong"],
        "kevin": ["beautiful", "noble"],
        "jason": ["wise", "light"],
        "lisa": ["beautiful", "pure"],
        "ashley": ["peace", "beautiful"],
        "jessica": ["grace", "wise"],
        "amanda": ["love", "beautiful"],
        "nicole": ["beautiful", "noble"],
        "anna": ["grace", "pure"],
        "victoria": ["strong", "noble"],
        "sophia": ["wise", "beautiful"],
      };
      const mapped = nameToMeaning[lowerName] || [];
      searchTerms.push(...mapped);
    }

    if (searchTerms.length === 0 && gender === "all") {
      // Random selection
      const shuffled = [...namesDatabase].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 6);
    }

    let names = searchTerms.length > 0
      ? suggestFromMeaning(searchTerms.join(" "))
      : [...namesDatabase];

    if (gender !== "all") {
      names = names.filter(n => n.gender === gender);
    }

    return names.slice(0, 9);
  }, [generated, currentName, selectedMeanings, gender]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> Name Generator
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Discover Your Muslim Name
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tell us about yourself and what matters to you — we'll suggest meaningful Islamic names that resonate with your identity
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Current Name */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <label className="block font-display font-semibold text-foreground mb-2">
              Your Current Name <span className="text-muted-foreground font-body font-normal text-sm">(optional)</span>
            </label>
            <p className="text-sm text-muted-foreground mb-3">
              We'll analyze the meaning behind your name and find Muslim names with similar significance
            </p>
            <Input
              value={currentName}
              onChange={e => setCurrentName(e.target.value)}
              placeholder="Enter your first name..."
              className="h-12 rounded-xl text-base"
            />
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
              Select the meanings and qualities you want your name to represent
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
              onClick={() => setGenerated(true)}
              className="bg-gradient-hero text-primary-foreground h-14 px-8 text-lg rounded-xl hover:opacity-90 transition-opacity"
            >
              {generated ? <><RefreshCw className="w-5 h-5 mr-2" /> Regenerate Names</> : <><Sparkles className="w-5 h-5 mr-2" /> Generate Names</>}
            </Button>
          </motion.div>
        </div>

        {/* Results */}
        {generated && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mt-12"
          >
            <h2 className="font-display text-2xl font-semibold mb-6 text-center">
              Your Suggested Names
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((name, i) => (
                <NameCard key={name.slug} name={name} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
