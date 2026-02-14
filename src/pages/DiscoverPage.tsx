import { useState, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { prefetchNameDetail } from "@/lib/prefetch";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight, Star, Search, Check } from "lucide-react";
import Layout from "@/components/Layout";
import { namesDatabase, type MuslimName } from "@/data/names";
import { useProfile } from "@/hooks/useProfile";
import { Badge } from "@/components/ui/badge";

const AUTOPLAY_INTERVAL_MS = 4500;

export default function DiscoverPage() {
  const { profile, toggleFavorite, isFavorite, addAsFirstOrLast } = useProfile();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [names, setNames] = useState<MuslimName[]>(() =>
    [...namesDatabase].sort(() => Math.random() - 0.5).slice(0, 100)
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = names[index];

  const goNext = useCallback(() => {
    setIndex(i => (i + 1) % names.length);
  }, [names.length]);

  const goPrev = useCallback(() => {
    setIndex(i => (i - 1 + names.length) % names.length);
  }, [names.length]);

  useEffect(() => {
    if (!playing || !current) return;
    timerRef.current = setTimeout(goNext, AUTOPLAY_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [playing, current, goNext]);

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (current) toggleFavorite(current.slug);
  };

  const handleAddFirst = (e: React.MouseEvent) => {
    e.preventDefault();
    if (current) addAsFirstOrLast(current.slug, "first");
  };

  const handleAddLast = (e: React.MouseEvent) => {
    e.preventDefault();
    if (current) addAsFirstOrLast(current.slug, "last");
  };

  const shufflePool = useCallback(() => {
    setNames(prev => [...prev].sort(() => Math.random() - 0.5));
    setIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!current) return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goPrev();
          break;
        case "ArrowRight":
          e.preventDefault();
          goNext();
          break;
        case " ":
          e.preventDefault();
          setPlaying(p => !p);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, goPrev, goNext]);

  if (!current || names.length === 0) {
    return (
      <Layout>
        <Helmet>
          <title>Discover Names | MuslimName.me</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center max-w-sm mx-auto"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <Search className="h-7 w-7" />
            </div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              {names.length === 0 ? "No names to discover" : "Loading..."}
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              {names.length === 0 ? "Browse our full database to explore Islamic names." : "Getting names ready..."}
            </p>
            {names.length === 0 && (
              <Link
                to="/names"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 font-medium hover:opacity-90 transition-opacity"
              >
                <Search className="h-4 w-4" />
                Browse all names
              </Link>
            )}
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Discover Names — Autoplay | MuslimName.me</title>
        <meta name="description" content="Discover Muslim names one at a time. Swipe through, favorite, and add to your first or last name contenders." />
        <link rel="canonical" href="https://muslimname.me/discover" />
        <meta property="og:title" content="Discover Muslim Names | MuslimName.me" />
        <meta property="og:description" content="Discover Muslim names one at a time. Swipe through, favorite, and add to your first or last name contenders." />
        <meta property="og:url" content="https://muslimname.me/discover" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content="Discover Muslim Names | MuslimName.me" />
        <meta name="twitter:description" content="Discover Muslim names one at a time. Swipe, favorite, and explore." />
        <meta name="twitter:image" content="https://muslimname.me/og-image.png" />
      </Helmet>
      <div className="min-h-[calc(100vh-8rem)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h1 className="font-display text-lg font-semibold">Discover Names</h1>
          <div className="flex items-center gap-1">
            <Link
              to="/names"
              className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
              aria-label="Search names"
            >
              <Search className="w-5 h-5" />
            </Link>
            <button
              onClick={shufflePool}
              className="text-xs text-muted-foreground hover:text-primary px-2 py-1"
            >
              Shuffle
            </button>
          </div>
        </div>

        {/* Main card area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 relative">
          {/* Left arrow - desktop */}
          <button
            onClick={goPrev}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/90 border border-border shadow-md hover:bg-muted text-foreground transition-colors"
            aria-label="Previous name (←)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Right arrow - desktop */}
          <button
            onClick={goNext}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card/90 border border-border shadow-md hover:bg-muted text-foreground transition-colors"
            aria-label="Next name (→)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full max-w-md"
            >
              <Link to={`/name/${current.slug}`} className="block" onMouseEnter={() => prefetchNameDetail()}>
                <div className="bg-card rounded-2xl border border-border p-8 shadow-card hover:shadow-card-hover transition-shadow">
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-1">
                    {current.name}
                  </h2>
                  <p className="font-arabic text-2xl sm:text-3xl text-primary text-center mb-3">
                    {current.arabic}
                  </p>
                  <p className="text-center text-muted-foreground text-sm mb-4">
                    {current.meaning}
                  </p>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {current.isQuranic && (
                      <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px]">Quranic</Badge>
                    )}
                    <Badge variant="outline" className="text-[10px] capitalize">{current.gender}</Badge>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Quick actions */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handleFavorite}
              className={`p-3 rounded-full transition-colors ${
                isFavorite(current.slug)
                  ? "bg-secondary/20 text-secondary"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-secondary"
              }`}
              aria-label={isFavorite(current.slug) ? "Remove from favorites" : "Add to favorites"}
            >
              <Star className={`w-6 h-6 ${isFavorite(current.slug) ? "fill-current" : ""}`} />
            </button>
            {(() => {
              const entry = profile.favorites.find(f => f.slug === current.slug);
              const isInFirst = entry?.positions?.includes("first") ?? false;
              const isInLast = entry?.positions?.includes("last") ?? false;
              return (
                <>
                  <button
                    onClick={handleAddFirst}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isInFirst
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary hover:bg-primary/20"
                    }`}
                    title={isInFirst ? "Added as first name" : "Add as first name"}
                  >
                    {isInFirst && <Check className="w-4 h-4" />}
                    {isInFirst ? "First" : "Add as First"}
                  </button>
                  <button
                    onClick={handleAddLast}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isInLast
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                    }`}
                    title={isInLast ? "Added as last name" : "Add as last name"}
                  >
                    {isInLast && <Check className="w-4 h-4" />}
                    {isInLast ? "Last" : "Add as Last"}
                  </button>
                </>
              );
            })()}
          </div>
        </div>

        {/* Bottom controls bar */}
        <div className="sticky bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t border-border px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <div className="max-w-md mx-auto flex items-center justify-between gap-4">
            <button
              onClick={goPrev}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Previous name"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setPlaying(p => !p)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? (
                <>
                  <Pause className="w-5 h-5" /> Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" /> Play
                </>
              )}
            </button>
            <button
              onClick={goNext}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 text-foreground transition-colors"
              aria-label="Next name"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-2">
            {index + 1} of {names.length}
            <span className="hidden sm:inline ml-2">· ← → navigate · Space pause</span>
          </p>
        </div>
      </div>
    </Layout>
  );
}
