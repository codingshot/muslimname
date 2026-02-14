import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState, useEffect, useCallback } from "react";
import { findNameBySlug, namesDatabase, getRandomName } from "@/data/names";
import { christianToMuslimNameMapping } from "@/data/nameMapping";
import Layout from "@/components/Layout";
import NameDetailSkeleton from "@/components/NameDetailSkeleton";
import NameCard from "@/components/NameCard";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Users, Globe, Star, Volume2, ExternalLink, Book, Shuffle } from "lucide-react";
import { ShareName } from "@/components/ShareName";
import { motion } from "framer-motion";
import { useProfile } from "@/hooks/useProfile";
import { speakArabic, preloadVoices } from "@/lib/pronunciation";

export default function NameDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite, addAsFirstOrLast } = useProfile();

  // Defer voice preload until user interacts with speak button (saves initial work)
  const preloadOnInteraction = useCallback(() => {
    preloadVoices();
  }, []);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(t);
  }, [slug]);

  const handleSpeak = useCallback(async (arabic: string, name: string) => {
    await preloadVoices(); // Ensure voices ready before first speak
    setIsSpeaking(true);
    speakArabic(arabic, name);
    // Reset speaking state after a delay
    setTimeout(() => setIsSpeaking(false), 2000);
  }, []);

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

  const nameThemes = name.themes ?? [];
  const similarNames = namesDatabase
    .filter(n => n.slug !== name.slug && (n.themes ?? []).some(t => nameThemes.includes(t)))
    .sort((a, b) => {
      const aShared = (a.themes ?? []).filter(t => nameThemes.includes(t)).length;
      const bShared = (b.themes ?? []).filter(t => nameThemes.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, 3);

  const reverseMapping: { westernName: string; connection: string }[] = [];
  for (const [western, data] of Object.entries(christianToMuslimNameMapping)) {
    const muslimNames = data.muslimNames ?? [];
    if (muslimNames.some(m => m.toLowerCase() === name.slug || m.toLowerCase() === (name.name ?? "").toLowerCase())) {
      reverseMapping.push({ westernName: western, connection: data.connection });
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>{name.name} — Islamic Name Meaning &amp; Origin | MuslimName.me</title>
        <meta name="description" content={`${name.meaning ?? ""}. ${(name.detailedMeaning ?? "").slice(0, 120)}${(name.detailedMeaning ?? "").length > 120 ? "…" : ""}`} />
        <link rel="canonical" href={`https://muslimname.me/name/${name.slug}`} />
        <meta name="keywords" content={`${name.name}, Islamic name, Muslim name, ${name.meaning}, Arabic name${name.isQuranic ? ", Quranic name" : ""}`} />
        {/* Open Graph / Share Cards — rich previews when shared */}
        <meta property="og:title" content={`${name.name} — Islamic Name Meaning & Origin | MuslimName.me`} />
        <meta property="og:description" content={`${name.meaning}.${name.arabic ? ` ${name.arabic}.` : ""} Meanings, Quranic references, pronunciation & more. Discover your ideal Muslim name.`} />
        <meta property="og:url" content={`https://muslimname.me/name/${name.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${name.name} — Islamic name meaning "${name.meaning}" on MuslimName.me`} />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content={`${name.name} — Islamic Name | MuslimName.me`} />
        <meta name="twitter:description" content={`${name.meaning}.${name.arabic ? ` ${name.arabic}.` : ""} Meanings, Quranic refs & more.`} />
        <meta name="twitter:image" content="https://muslimname.me/og-image.png" />
        <meta name="twitter:image:alt" content={`${name.name} — Islamic name on MuslimName.me`} />
        {/* JSON-LD for rich results */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: name.name,
            description: name.meaning,
            url: `https://muslimname.me/name/${name.slug}`,
            alternateName: name.arabic || name.variations?.[0],
            ...(name.arabic && { inLanguage: "ar" }),
            ...(name.isQuranic && { termCode: "quranic" }),
            inDefinedTermSet: { "@type": "DefinedTermSet", name: "Islamic Names", url: "https://muslimname.me/names" },
          })}
        </script>
      </Helmet>
      <article className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
        {/* Back + Random */}
        <div className="flex items-center justify-between gap-4 mb-4 md:mb-6">
          <Link to="/names" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to all names
          </Link>
          <button
            onClick={() => navigate(`/name/${getRandomName(name.gender === "male" || name.gender === "female" ? name.gender : undefined).slug}`)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Random name"
          >
            <Shuffle className="w-4 h-4" /> Surprise me
          </button>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl border border-border p-6 sm:p-8 md:p-12 mb-6 md:mb-8"
        >
          {/* Row 1: Name + quick actions (star, share) — primary focus */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1">
                {name.name}
              </h1>
              <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-primary">{name.arabic}</p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 sm:self-start">
              <button
                onClick={() => toggleFavorite(name.slug)}
                className={`p-2.5 rounded-xl transition-all ${
                  isFavorite(name.slug)
                    ? "text-secondary bg-secondary/15"
                    : "text-muted-foreground hover:text-secondary hover:bg-secondary/10"
                }`}
                aria-label={isFavorite(name.slug) ? "Remove from favorites" : "Add to favorites"}
              >
                <Star className={`w-5 h-5 ${isFavorite(name.slug) ? "fill-current" : ""}`} />
              </button>
              <ShareName name={name.name} slug={name.slug} meaning={name.meaning} arabic={name.arabic} />
            </div>
          </div>

          {/* Row 2: Badges — Quranic, Gender, Origin grouped as metadata */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {name.isQuranic && (
              <Link to="/names?scripture=quran">
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 cursor-pointer hover:bg-secondary/30 text-xs">
                  📖 Quranic
                </Badge>
              </Link>
            )}
            <Link to={`/names?gender=${name.gender}`}>
              <Badge variant="outline" className="capitalize cursor-pointer hover:bg-muted text-xs">
                {name.gender}
              </Badge>
            </Link>
            <Link to={`/names?origin=${encodeURIComponent(name.origin)}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
              {name.origin}
            </Link>
            {name.scriptureContext?.inBible && (
              <Link to="/names?scripture=bible">
                <Badge variant="outline" className="text-[10px] cursor-pointer hover:bg-muted">
                  ✝️ Bible
                </Badge>
              </Link>
            )}
            {name.scriptureContext?.inTorah && (
              <Link to="/names?scripture=torah">
                <Badge variant="outline" className="text-[10px] cursor-pointer hover:bg-muted">
                  ✡️ Torah
                </Badge>
              </Link>
            )}
            {name.scriptureContext?.sharedProphet && (
              <Link to="/names?scripture=shared">
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px] cursor-pointer hover:bg-secondary/30">
                  🤝 Shared Prophet
                </Badge>
              </Link>
            )}
          </div>

          {/* Row 3: Add as First/Last — primary CTAs (quick add, no popup) */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => addAsFirstOrLast(name.slug, "first")}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              Add as First Name
            </button>
            <button
              onClick={() => addAsFirstOrLast(name.slug, "last")}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
            >
              Add as Last Name
            </button>
          </div>

          {/* Row 4: Pronunciation + theme tags — explore more */}
          <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => handleSpeak(name.arabic, name.name)}
              onMouseEnter={preloadOnInteraction}
              onFocus={preloadOnInteraction}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 transition-all ${
                isSpeaking
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-primary/10 hover:text-primary"
              }`}
              aria-label={`Listen to ${name.name} in Arabic`}
            >
              <Volume2 className={`w-4 h-4 ${isSpeaking ? "animate-pulse" : ""}`} />
              <span className="text-sm font-medium">{name.pronunciation}</span>
            </button>
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
        </motion.div>

        {/* Meaning */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-5 sm:p-6 mb-4 sm:mb-6"
        >
          <h2 className="font-display text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-secondary" /> Meaning
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

        {/* Share this name */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-8 md:mt-12 bg-card rounded-xl border border-border p-5 sm:p-6"
        >
          <h2 className="font-display text-lg font-semibold mb-3">Share this name</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Help others discover {name.name}. Copy the link, share to social media, or use your device&apos;s share menu.
          </p>
          <ShareName
            name={name.name}
            slug={name.slug}
            meaning={name.meaning}
            arabic={name.arabic}
            variant="inline"
            className="flex flex-wrap gap-2"
          />
        </motion.section>

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
