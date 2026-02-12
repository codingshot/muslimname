import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { findNameBySlug, namesDatabase } from "@/data/names";
import { christianToMuslimNameMapping } from "@/data/nameMapping";
import Layout from "@/components/Layout";
import NameDetailSkeleton from "@/components/NameDetailSkeleton";
import NameCard from "@/components/NameCard";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Users, Globe, Star, Volume2, ExternalLink, Book } from "lucide-react";
import { motion } from "framer-motion";
import { useProfile } from "@/hooks/useProfile";

export default function NameDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite } = useProfile();

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [slug]);

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

  if (loading) {
    return <Layout><NameDetailSkeleton /></Layout>;
  }

  const similarNames = namesDatabase
    .filter(n => n.slug !== name.slug && n.themes.some(t => name.themes.includes(t)))
    .sort((a, b) => {
      const aShared = a.themes.filter(t => name.themes.includes(t)).length;
      const bShared = b.themes.filter(t => name.themes.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, 3);

  const reverseMapping: { westernName: string; connection: string }[] = [];
  for (const [western, data] of Object.entries(christianToMuslimNameMapping)) {
    if (data.muslimNames.some(n => n.toLowerCase() === name.slug || n.toLowerCase() === name.name.toLowerCase())) {
      reverseMapping.push({ westernName: western, connection: data.connection });
    }
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        {/* Back */}
        <Link to="/names" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-4 md:mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to all names
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl border border-border p-6 sm:p-8 md:p-12 mb-6 md:mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1">
                {name.name}
              </h1>
              <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-primary">{name.arabic}</p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2">
              <div className="flex gap-2 flex-wrap items-center">
                <button
                  onClick={() => toggleFavorite(name.slug)}
                  className={`p-2 rounded-lg transition-all ${
                    isFavorite(name.slug)
                      ? "text-secondary bg-secondary/10"
                      : "text-muted-foreground hover:text-secondary hover:bg-secondary/10"
                  }`}
                  aria-label={isFavorite(name.slug) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Star className={`w-5 h-5 ${isFavorite(name.slug) ? "fill-current" : ""}`} />
                </button>
                {name.isQuranic && (
                  <Link to="/names?scripture=quran">
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30 cursor-pointer hover:bg-secondary/30">📖 Quranic</Badge>
                  </Link>
                )}
                <Link to={`/names?gender=${name.gender}`}>
                  <Badge variant="outline" className="capitalize cursor-pointer hover:bg-muted">{name.gender}</Badge>
                </Link>
              </div>
              <Link to={`/names?origin=${encodeURIComponent(name.origin)}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {name.origin}
              </Link>
            </div>
          </div>
          <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-1.5">
              <Volume2 className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground text-sm font-medium">{name.pronunciation}</span>
            </div>
            {name.themes.map(theme => (
              <Link
                key={theme}
                to={`/names?themes=${theme}`}
                className="px-2.5 py-1 rounded-full bg-teal-light text-primary text-xs capitalize hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {theme}
              </Link>
            ))}
          </div>
          {/* Scripture badges */}
          {name.scriptureContext && (
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              {name.scriptureContext.inBible && (
                <Link to="/names?scripture=bible">
                  <Badge variant="outline" className="text-[10px] cursor-pointer hover:bg-muted">
                    ✝️ In Bible as "{name.scriptureContext.bibleName}"
                  </Badge>
                </Link>
              )}
              {name.scriptureContext.inTorah && (
                <Link to="/names?scripture=torah">
                  <Badge variant="outline" className="text-[10px] cursor-pointer hover:bg-muted">
                    ✡️ In Torah as "{name.scriptureContext.torahName}"
                  </Badge>
                </Link>
              )}
              {name.scriptureContext.sharedProphet && (
                <Link to="/names?scripture=shared">
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px] cursor-pointer hover:bg-secondary/30">
                    🤝 Shared Prophet
                  </Badge>
                </Link>
              )}
            </div>
          )}
        </motion.div>

        {/* Meaning */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-4 sm:mb-6"
        >
          <h2 className="font-display text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-secondary" /> Meaning
          </h2>
          <p className="text-base sm:text-lg font-medium text-foreground mb-2">{name.meaning}</p>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{name.detailedMeaning}</p>
        </motion.section>

        {/* Scripture Cross-References */}
        {name.scriptureContext && (name.scriptureContext.inBible || name.scriptureContext.inTorah) && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-4 sm:mb-6"
          >
            <h2 className="font-display text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <Book className="w-5 h-5 text-secondary" /> Across the Abrahamic Traditions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Quran */}
              <div className="bg-teal-light rounded-lg p-4 border-l-4 border-primary">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">📖 In the Quran</p>
                <p className="font-display text-lg font-semibold text-foreground">{name.name} ({name.arabic})</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {name.isQuranic ? "Directly mentioned in the Quran" : "Used in Islamic tradition"}
                </p>
              </div>

              {/* Bible */}
              {name.scriptureContext.inBible && (
                <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-muted-foreground/30">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">✝️ In the Bible</p>
                  <p className="font-display text-lg font-semibold text-foreground">{name.scriptureContext.bibleName}</p>
                  <p className="text-sm text-muted-foreground mt-1">{name.scriptureContext.bibleContext}</p>
                </div>
              )}

              {/* Torah */}
              {name.scriptureContext.inTorah && (
                <div className="bg-gold-light/30 rounded-lg p-4 border-l-4 border-secondary/50 sm:col-span-2">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">✡️ In the Torah</p>
                  <p className="font-display text-lg font-semibold text-foreground">{name.scriptureContext.torahName}</p>
                  <p className="text-sm text-muted-foreground mt-1">{name.scriptureContext.torahContext}</p>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Western Name Equivalents */}
        {reverseMapping.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
            className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-4 sm:mb-6"
          >
            <h2 className="font-display text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
              🔄 Western Name Equivalent
            </h2>
            <div className="space-y-3">
              {reverseMapping.slice(0, 5).map((m, i) => (
                <div key={i} className="bg-muted/50 rounded-lg p-3">
                  <p className="font-medium text-foreground capitalize">{m.westernName}</p>
                  <p className="text-sm text-muted-foreground">{m.connection}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Quranic References */}
        {name.quranicReferences.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-4 sm:mb-6"
          >
            <h2 className="font-display text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" /> Quranic References
            </h2>
            <div className="space-y-4">
              {name.quranicReferences.map((ref, i) => (
                <div key={i} className="group bg-teal-light rounded-lg p-4 border-l-4 border-primary relative">
                  <p className="text-foreground italic leading-relaxed text-sm sm:text-base">"{ref.text}"</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <p className="text-sm text-primary font-medium">
                      Surah {ref.surah} ({ref.ayah})
                    </p>
                    <a
                      href={`https://quran.com/${ref.ayah.split(":")[0]}/${ref.ayah.split(":")[1]?.split("-")[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Read on Quran.com <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  {/* Hover tooltip */}
                  <div className="hidden group-hover:block absolute left-0 right-0 -bottom-1 translate-y-full z-20 px-2">
                    <div className="bg-card border border-border rounded-lg shadow-card-hover p-3 text-xs">
                      <p className="font-semibold text-foreground mb-1">📖 Surah {ref.surah}</p>
                      <p className="text-muted-foreground">Verse {ref.ayah} — This Quranic verse directly references or relates to the name <span className="font-medium text-foreground">{name.name}</span>. The Quran contains 114 surahs (chapters) revealed to Prophet Muhammad ﷺ over 23 years.</p>
                      <p className="text-primary mt-1.5 font-medium">Click "Read on Quran.com" to see the full context with tafsir (commentary).</p>
                    </div>
                  </div>
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
            className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-4 sm:mb-6"
          >
            <h2 className="font-display text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-secondary" /> Hadith References
            </h2>
            <div className="space-y-4">
              {name.hadithReferences.map((ref, i) => (
                <div key={i} className="group bg-gold-light/30 rounded-lg p-4 border-l-4 border-secondary relative">
                  <p className="text-foreground italic leading-relaxed text-sm sm:text-base">"{ref.text}"</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <p className="text-sm text-secondary font-medium">{ref.source}</p>
                    <a
                      href={`https://sunnah.com/search?q=${encodeURIComponent(ref.text.slice(0, 50))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-secondary hover:underline inline-flex items-center gap-1"
                    >
                      Search on Sunnah.com <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  {/* Hover tooltip */}
                  <div className="hidden group-hover:block absolute left-0 right-0 -bottom-1 translate-y-full z-20 px-2">
                    <div className="bg-card border border-border rounded-lg shadow-card-hover p-3 text-xs">
                      <p className="font-semibold text-foreground mb-1">📚 {ref.source}</p>
                      <p className="text-muted-foreground">
                        {ref.source.includes("Bukhari") && "Sahih al-Bukhari is the most authentic collection of hadith, compiled by Imam Muhammad al-Bukhari (810–870 CE). It contains 7,563 hadith carefully verified through chains of narration."}
                        {ref.source.includes("Muslim") && "Sahih Muslim is the second most authentic hadith collection, compiled by Imam Muslim ibn al-Hajjaj (815–875 CE). It contains 7,500 hadith rigorously authenticated."}
                        {!ref.source.includes("Bukhari") && !ref.source.includes("Muslim") && `This hadith comes from ${ref.source}, one of the major collections of prophetic traditions recording the sayings and actions of Prophet Muhammad ﷺ.`}
                      </p>
                      <p className="text-secondary mt-1.5 font-medium">Click "Search on Sunnah.com" to verify and read related narrations.</p>
                    </div>
                  </div>
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
            className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-4 sm:mb-6"
          >
            <h2 className="font-display text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-secondary" /> Famous Bearers
            </h2>
            <div className="space-y-3">
              {name.famousBearers.map((bearer, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-display font-bold text-sm">{bearer.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base">{bearer.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{bearer.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Variations & Similar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {name.variations.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-xl border border-border p-5 sm:p-6"
            >
              <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary" /> Regional Variations
              </h2>
              <div className="flex flex-wrap gap-2">
                {name.variations.map(v => (
                  <Link key={v} to={`/names?q=${encodeURIComponent(v)}`}>
                    <Badge variant="outline" className="text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">{v}</Badge>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {name.similarNonArabic.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-card rounded-xl border border-border p-5 sm:p-6"
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
          )}
        </div>

        {/* Similar Names */}
        {similarNames.length > 0 && (
          <section className="mt-8 md:mt-12">
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-4">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {similarNames.map((n, i) => (
                <NameCard key={n.slug} name={n} index={i} />
              ))}
            </div>
          </section>
        )}

        {/* External References */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 md:mt-12 bg-muted/50 rounded-xl border border-border p-5 sm:p-6"
        >
          <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-secondary" /> Sources & References
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Learn more about the name "{name.name}" from these verified Islamic name resources:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { title: `${name.name} on QuranicNames.com`, url: `https://quranicnames.com/search/?q=${encodeURIComponent(name.name)}`, desc: "Quranic name meanings & rulings" },
              { title: `${name.name} on Behind the Name`, url: `https://www.behindthename.com/name/${name.name.toLowerCase()}`, desc: "Etymology & history" },
              { title: `Search "${name.name}" on IslamicFinder`, url: `https://www.islamicfinder.org/baby-names/search/?q=${encodeURIComponent(name.name)}`, desc: "Islamic baby name meanings" },
              ...(name.isQuranic ? [{ title: `Search in Quran.com`, url: `https://quran.com/search?q=${encodeURIComponent(name.name)}`, desc: "Quranic verse references" }] : []),
              ...(name.hadithReferences.length > 0 ? [{ title: `Search on Sunnah.com`, url: `https://sunnah.com/search?q=${encodeURIComponent(name.name)}`, desc: "Hadith references" }] : []),
              { title: `${name.name} on Wikipedia`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(name.name)}_(name)`, desc: "General name information" },
            ].map(ref => (
              <a
                key={ref.title}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 p-3 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
              >
                <ExternalLink className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{ref.title}</span>
                  <p className="text-xs text-muted-foreground">{ref.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground mt-3">
            External links open in a new tab. MuslimName.me is not responsible for external content.
          </p>
        </motion.section>
      </article>
    </Layout>
  );
}
