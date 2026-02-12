import { useParams, Link } from "react-router-dom";
import { findNameBySlug, namesDatabase } from "@/data/names";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Users, Globe, Star, Volume2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import NameCard from "@/components/NameCard";

export default function NameDetail() {
  const { slug } = useParams<{ slug: string }>();
  const name = findNameBySlug(slug || "");

  if (!name) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="font-display text-2xl mb-4">Name not found</h1>
          <Link to="/names" className="text-primary hover:underline">Browse all names</Link>
        </div>
      </Layout>
    );
  }

  const similarNames = namesDatabase
    .filter(n => n.slug !== name.slug && n.themes.some(t => name.themes.includes(t)))
    .slice(0, 3);

  return (
    <Layout>
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back */}
        <Link to="/names" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to all names
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-hero geometric-pattern rounded-2xl p-8 md:p-12 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-1">
                {name.name}
              </h1>
              <p className="font-arabic text-3xl md:text-4xl text-primary-foreground/80">{name.arabic}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <div className="flex gap-2">
                {name.isQuranic && (
                  <Badge className="bg-secondary text-secondary-foreground border-0">📖 Quranic</Badge>
                )}
                <Badge className="bg-primary-foreground/20 text-primary-foreground border-0 capitalize">{name.gender}</Badge>
              </div>
              <p className="text-primary-foreground/70 text-sm">{name.origin}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-3 py-1.5">
              <Volume2 className="w-4 h-4 text-primary-foreground/70" />
              <span className="text-primary-foreground text-sm font-medium">{name.pronunciation}</span>
            </div>
            {name.themes.map(theme => (
              <span key={theme} className="px-2.5 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs capitalize">
                {theme}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Meaning */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-6 mb-6"
        >
          <h2 className="font-display text-xl font-semibold mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-secondary" /> Meaning
          </h2>
          <p className="text-lg font-medium text-foreground mb-2">{name.meaning}</p>
          <p className="text-muted-foreground leading-relaxed">{name.detailedMeaning}</p>
        </motion.section>

        {/* Quranic References */}
        {name.quranicReferences.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-xl border border-border p-6 mb-6"
          >
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" /> Quranic References
            </h2>
            <div className="space-y-4">
              {name.quranicReferences.map((ref, i) => (
                <div key={i} className="bg-teal-light rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-foreground italic leading-relaxed">"{ref.text}"</p>
                  <p className="text-sm text-primary font-medium mt-2">
                    Surah {ref.surah} ({ref.ayah})
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Hadith References */}
        {name.hadithReferences.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-xl border border-border p-6 mb-6"
          >
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" /> Hadith References
            </h2>
            <div className="space-y-4">
              {name.hadithReferences.map((ref, i) => (
                <div key={i} className="bg-gold-light/30 rounded-lg p-4 border-l-4 border-secondary">
                  <p className="text-foreground italic leading-relaxed">"{ref.text}"</p>
                  <p className="text-sm text-secondary font-medium mt-2">{ref.source}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Famous Bearers */}
        {name.famousBearers.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-card rounded-xl border border-border p-6 mb-6"
          >
            <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" /> Famous Bearers
            </h2>
            <div className="space-y-3">
              {name.famousBearers.map((bearer, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-display font-bold text-sm">{bearer.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{bearer.name}</p>
                    <p className="text-sm text-muted-foreground">{bearer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Variations & Similar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-secondary" /> Regional Variations
            </h2>
            <div className="flex flex-wrap gap-2">
              {name.variations.map(v => (
                <Badge key={v} variant="outline" className="text-sm">{v}</Badge>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-card rounded-xl border border-border p-6"
          >
            <h2 className="font-display text-lg font-semibold mb-3">Similar Non-Arabic Names</h2>
            <div className="space-y-2">
              {name.similarNonArabic.map((sim, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="font-medium">{sim.name}</span>
                  <span className="text-muted-foreground">{sim.meaning} ({sim.origin})</span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Similar Names */}
        {similarNames.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-2xl font-semibold mb-4">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {similarNames.map((n, i) => (
                <NameCard key={n.slug} name={n} index={i} />
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}
