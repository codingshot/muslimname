import { useState, useMemo, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { christianToMuslimNameMapping } from "@/data/nameMapping";
import { useProfile } from "@/hooks/useProfile";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Search, BookOpen, ArrowRight, Sparkles, Shuffle, TrendingUp, TrendingDown, Star, Gem } from "lucide-react";
import { MuslimNameHoverCard } from "@/components/MuslimNameHoverCard";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { key: "all", label: "All" },
  { key: "biblical-male", label: "Biblical Male" },
  { key: "biblical-female", label: "Biblical Female" },
  { key: "western-male", label: "Western Male" },
  { key: "western-female", label: "Western Female" },
  { key: "latin-male", label: "Latin Male" },
  { key: "latin-female", label: "Latin Female" },
  { key: "hindu-male", label: "Hindu Male" },
  { key: "hindu-female", label: "Hindu Female" },
  { key: "chinese-male", label: "Chinese Male" },
  { key: "chinese-female", label: "Chinese Female" },
  { key: "portuguese-male", label: "Portuguese Male" },
  { key: "portuguese-female", label: "Portuguese Female" },
  { key: "russian-male", label: "Russian Male" },
  { key: "russian-female", label: "Russian Female" },
  { key: "japanese-male", label: "Japanese Male" },
  { key: "japanese-female", label: "Japanese Female" },
  { key: "korean-male", label: "Korean Male" },
  { key: "korean-female", label: "Korean Female" },
  { key: "french-male", label: "French Male" },
  { key: "french-female", label: "French Female" },
  { key: "german-male", label: "German Male" },
  { key: "german-female", label: "German Female" },
  { key: "italian-male", label: "Italian Male" },
  { key: "italian-female", label: "Italian Female" },
  { key: "spanish-male", label: "Spanish Male" },
  { key: "spanish-female", label: "Spanish Female" },
  { key: "indonesian-male", label: "Indonesian Male" },
  { key: "indonesian-female", label: "Indonesian Female" },
  { key: "vietnamese-male", label: "Vietnamese Male" },
  { key: "vietnamese-female", label: "Vietnamese Female" },
  { key: "vietnamese-unisex", label: "Vietnamese Unisex" },
  { key: "thai-male", label: "Thai Male" },
  { key: "thai-female", label: "Thai Female" },
  { key: "thai-unisex", label: "Thai Unisex" },
  { key: "tribal-male", label: "Tribal Male" },
  { key: "tribal-female", label: "Tribal Female" },
  { key: "filipino-male", label: "Filipino Male" },
  { key: "filipino-female", label: "Filipino Female" },
  { key: "african-male", label: "African Male" },
  { key: "african-female", label: "African Female" },
  { key: "scandinavian-male", label: "Scandinavian Male" },
  { key: "scandinavian-female", label: "Scandinavian Female" },
  { key: "polish-male", label: "Polish Male" },
  { key: "polish-female", label: "Polish Female" },
  { key: "greek-male", label: "Greek Male" },
  { key: "greek-female", label: "Greek Female" },
  { key: "dutch-male", label: "Dutch Male" },
  { key: "dutch-female", label: "Dutch Female" },
  { key: "hungarian-male", label: "Hungarian Male" },
  { key: "hungarian-female", label: "Hungarian Female" },
  { key: "romanian-male", label: "Romanian Male" },
  { key: "romanian-female", label: "Romanian Female" },
  { key: "czech-male", label: "Czech Male" },
  { key: "czech-female", label: "Czech Female" },
  { key: "croatian-male", label: "Croatian Male" },
  { key: "croatian-female", label: "Croatian Female" },
  { key: "baltic-male", label: "Baltic Male" },
  { key: "baltic-female", label: "Baltic Female" },
  { key: "georgian-male", label: "Georgian Male" },
  { key: "georgian-female", label: "Georgian Female" },
  { key: "armenian-male", label: "Armenian Male" },
  { key: "armenian-female", label: "Armenian Female" },
  { key: "ethiopian-male", label: "Ethiopian Male" },
  { key: "ethiopian-female", label: "Ethiopian Female" },
  { key: "tamil-male", label: "Tamil Male" },
  { key: "tamil-female", label: "Tamil Female" },
  { key: "bengali-male", label: "Bengali Male" },
  { key: "bengali-female", label: "Bengali Female" },
  { key: "burmese-male", label: "Burmese Male" },
  { key: "burmese-female", label: "Burmese Female" },
  { key: "swahili-male", label: "Swahili Male" },
  { key: "swahili-female", label: "Swahili Female" },
  { key: "celtic-male", label: "Celtic Male" },
  { key: "celtic-female", label: "Celtic Female" },
  { key: "ukrainian-male", label: "Ukrainian Male" },
  { key: "ukrainian-female", label: "Ukrainian Female" },
  { key: "serbian-male", label: "Serbian Male" },
  { key: "serbian-female", label: "Serbian Female" },
  { key: "slovak-male", label: "Slovak Male" },
  { key: "slovak-female", label: "Slovak Female" },
  { key: "albanian-male", label: "Albanian Male" },
  { key: "albanian-female", label: "Albanian Female" },
  { key: "mongolian-male", label: "Mongolian Male" },
  { key: "mongolian-female", label: "Mongolian Female" },
  { key: "nepali-male", label: "Nepali Male" },
  { key: "nepali-female", label: "Nepali Female" },
  { key: "hausa-male", label: "Hausa Male" },
  { key: "hausa-female", label: "Hausa Female" },
  { key: "yoruba-male", label: "Yoruba Male" },
  { key: "yoruba-female", label: "Yoruba Female" },
  { key: "pashto-male", label: "Pashto Male" },
  { key: "pashto-female", label: "Pashto Female" },
  { key: "sindhi-male", label: "Sindhi Male" },
  { key: "sindhi-female", label: "Sindhi Female" },
  { key: "malagasy-male", label: "Malagasy Male" },
  { key: "malagasy-female", label: "Malagasy Female" },
  { key: "maltese-male", label: "Maltese Male" },
  { key: "maltese-female", label: "Maltese Female" },
  { key: "tibetan-male", label: "Tibetan Male" },
  { key: "tibetan-female", label: "Tibetan Female" },
  { key: "igbo-male", label: "Igbo Male" },
  { key: "igbo-female", label: "Igbo Female" },
  { key: "sinhala-male", label: "Sinhala Male" },
  { key: "sinhala-female", label: "Sinhala Female" },
  { key: "khmer-male", label: "Khmer Male" },
  { key: "khmer-female", label: "Khmer Female" },
  { key: "lao-male", label: "Lao Male" },
  { key: "lao-female", label: "Lao Female" },
  { key: "polynesian-male", label: "Polynesian Male" },
  { key: "polynesian-female", label: "Polynesian Female" },
  { key: "kazakh-male", label: "Kazakh Male" },
  { key: "kazakh-female", label: "Kazakh Female" },
  { key: "uzbek-male", label: "Uzbek Male" },
  { key: "uzbek-female", label: "Uzbek Female" },
  { key: "kurdish-male", label: "Kurdish Male" },
  { key: "kurdish-female", label: "Kurdish Female" },
  { key: "amazigh-male", label: "Amazigh Male" },
  { key: "amazigh-female", label: "Amazigh Female" },
  { key: "uyghur-male", label: "Uyghur Male" },
  { key: "uyghur-female", label: "Uyghur Female" },
  { key: "finnish-male", label: "Finnish Male" },
  { key: "finnish-female", label: "Finnish Female" },
  { key: "slovenian-male", label: "Slovenian Male" },
  { key: "slovenian-female", label: "Slovenian Female" },
  { key: "persian-male", label: "Persian Male" },
  { key: "persian-female", label: "Persian Female" },
  { key: "turkish-male", label: "Turkish Male" },
  { key: "turkish-female", label: "Turkish Female" },
  { key: "aboriginal-male", label: "Aboriginal Male" },
  { key: "aboriginal-female", label: "Aboriginal Female" },
  { key: "nativeamerican-male", label: "Native American Male" },
  { key: "nativeamerican-female", label: "Native American Female" },
  { key: "maori-male", label: "Māori Male" },
  { key: "maori-female", label: "Māori Female" },
  { key: "inuit-male", label: "Inuit Male" },
  { key: "inuit-female", label: "Inuit Female" },
  { key: "hmong-male", label: "Hmong Male" },
  { key: "hmong-female", label: "Hmong Female" },
  { key: "malay-male", label: "Malay Male" },
  { key: "malay-female", label: "Malay Female" },
  { key: "punjabi-male", label: "Punjabi Male" },
  { key: "punjabi-female", label: "Punjabi Female" },
  { key: "telugu-male", label: "Telugu Male" },
  { key: "telugu-female", label: "Telugu Female" },
  { key: "kannada-male", label: "Kannada Male" },
  { key: "kannada-female", label: "Kannada Female" },
  { key: "malayalam-male", label: "Malayalam Male" },
  { key: "malayalam-female", label: "Malayalam Female" },
  { key: "assamese-male", label: "Assamese Male" },
  { key: "assamese-female", label: "Assamese Female" },
  { key: "odia-male", label: "Odia Male" },
  { key: "odia-female", label: "Odia Female" },
  { key: "basque-male", label: "Basque Male" },
  { key: "basque-female", label: "Basque Female" },
  { key: "catalan-male", label: "Catalan Male" },
  { key: "catalan-female", label: "Catalan Female" },
  { key: "icelandic-male", label: "Icelandic Male" },
  { key: "icelandic-female", label: "Icelandic Female" },
  { key: "estonian-male", label: "Estonian Male" },
  { key: "estonian-female", label: "Estonian Female" },
  { key: "zulu-male", label: "Zulu Male" },
  { key: "zulu-female", label: "Zulu Female" },
  { key: "somali-male", label: "Somali Male" },
  { key: "somali-female", label: "Somali Female" },
  { key: "amhara-male", label: "Amhara Male" },
  { key: "amhara-female", label: "Amhara Female" },
  { key: "akan-male", label: "Akan Male" },
  { key: "akan-female", label: "Akan Female" },
  { key: "shona-male", label: "Shona Male" },
  { key: "shona-female", label: "Shona Female" },
  { key: "fijian-male", label: "Fijian Male" },
  { key: "fijian-female", label: "Fijian Female" },
  { key: "samoan-male", label: "Samoan Male" },
  { key: "samoan-female", label: "Samoan Female" },
  { key: "tongan-male", label: "Tongan Male" },
  { key: "tongan-female", label: "Tongan Female" },
  { key: "guarani-male", label: "Guaraní Male" },
  { key: "guarani-female", label: "Guaraní Female" },
  { key: "quechua-male", label: "Quechua Male" },
  { key: "quechua-female", label: "Quechua Female" },
  { key: "cherokee-male", label: "Cherokee Male" },
  { key: "cherokee-female", label: "Cherokee Female" },
  { key: "cree-male", label: "Cree Male" },
  { key: "cree-female", label: "Cree Female" },
  { key: "tswana-male", label: "Tswana Male" },
  { key: "tswana-female", label: "Tswana Female" },
  { key: "wolof-male", label: "Wolof Male" },
  { key: "wolof-female", label: "Wolof Female" },
  { key: "mandinka-male", label: "Mandinka Male" },
  { key: "mandinka-female", label: "Mandinka Female" },
  { key: "fulani-male", label: "Fulani Male" },
  { key: "fulani-female", label: "Fulani Female" },
  { key: "marathi-male", label: "Marathi Male" },
  { key: "marathi-female", label: "Marathi Female" },
  { key: "gujarati-male", label: "Gujarati Male" },
  { key: "gujarati-female", label: "Gujarati Female" },
  { key: "hebrew", label: "Hebrew" },
  { key: "virtue", label: "Virtue" },
] as const;

export default function WesternNamesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [trendFilter, setTrendFilter] = useState<string>("all");
  const { profile } = useProfile();
  const showSources = profile.settings.showMappingSources ?? false;

  const allMappings = useMemo(() => {
    return Object.entries(christianToMuslimNameMapping)
      .map(([key, mapping]) => ({
        westernName: key.charAt(0).toUpperCase() + key.slice(1),
        key,
        ...mapping,
      }))
      .sort((a, b) => a.westernName.localeCompare(b.westernName));
  }, []);

  const filteredMappings = useMemo(() => {
    return allMappings.filter(m => {
      const cat = m.category ?? "";
      if (categoryFilter !== "all" && cat !== categoryFilter) return false;
      if (trendFilter !== "all" && (m.trend ?? "") !== trendFilter) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        m.westernName.toLowerCase().includes(q) ||
        (m.muslimNames ?? []).some(n => n.toLowerCase().includes(q)) ||
        (m.meaning ?? "").toLowerCase().includes(q) ||
        (m.connection ?? "").toLowerCase().includes(q) ||
        (m.originalScript && m.originalScript.includes(search.trim()))
      );
    });
  }, [allMappings, search, categoryFilter, trendFilter]);

  const stats = useMemo(() => {
    const counts = new Map<string, number>();
    for (const m of allMappings) {
      const cat = m.category ?? "";
      const group = cat.replace(/-(?:male|female|unisex)$/, "");
      counts.set(group, (counts.get(group) ?? 0) + 1);
    }
    return { total: allMappings.length, groups: counts };
  }, [allMappings]);

  const topGroups = useMemo(() => {
    return [...stats.groups.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);
  }, [stats.groups]);

  const handleRandomName = useCallback(() => {
    const pool = filteredMappings.length > 0 ? filteredMappings : allMappings;
    if (pool.length === 0) return;
    const random = pool[Math.floor(Math.random() * pool.length)];
    navigate(`/western-names/${random.key}`);
  }, [filteredMappings, allMappings, navigate]);

  return (
    <Layout>
      <Helmet>
        <title>{`Western to Muslim Name Reference — ${stats.total}+ Names Mapped | MuslimName.me`}</title>
        <meta name="description" content={`Find Islamic equivalents for ${stats.total}+ Western, Christian, Hindu, Chinese, Japanese & more names. Search by name or meaning. Biblical, Latin, Spanish, Arabic name mappings.`} />
        <link rel="canonical" href="https://muslimname.me/western-names" />
        <meta name="keywords" content="Western name to Muslim, Christian name Islamic equivalent, name conversion Islam, David Muslim name, Sarah Islamic name, convert name Muslim" />
        <meta property="og:title" content={`Western to Muslim Name Reference — ${stats.total}+ Names | MuslimName.me`} />
        <meta property="og:description" content="Find Islamic equivalents for Western, Christian, Hindu, Chinese & more names. Search by name or meaning." />
        <meta property="og:url" content="https://muslimname.me/western-names" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content="Western to Muslim Name Reference | MuslimName.me" />
        <meta name="twitter:description" content={`${stats.total}+ names mapped to Islamic equivalents. Biblical, Latin, Hindu, Chinese, Japanese & more.`} />
        <meta name="twitter:image" content="https://muslimname.me/og-image.png" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" /> Name Reference Guide
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Western to Muslim Name Reference
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore {stats.total}+ names from Western, Latin, Hindu, Chinese, Portuguese, Tribal, and Hebrew traditions mapped to their Islamic equivalents
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-sm">
            {topGroups.map(([group, count]) => (
              <span key={group} className="text-muted-foreground">
                <strong className="text-foreground">{count}</strong> {group.charAt(0).toUpperCase() + group.slice(1)}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Search + filters */}
        <div className="max-w-2xl mx-auto mb-8 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, Muslim equivalent, or meaning..."
              className="pl-10 h-12 rounded-xl text-base"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap justify-center">
            {categories.map(c => (
              <button
                key={c.key}
                onClick={() => setCategoryFilter(c.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  categoryFilter === c.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5 flex-wrap justify-center">
            {([
              { key: "all", label: "All Trends", icon: null },
              { key: "rising", label: "🔥 Trending", icon: null },
              { key: "classic", label: "⭐ Classic", icon: null },
              { key: "declining", label: "📉 Traditional", icon: null },
              { key: "rare", label: "💎 Rare", icon: null },
            ] as const).map(t => (
              <button
                key={t.key}
                onClick={() => setTrendFilter(t.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  trendFilter === t.key
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count + Random button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <p className="text-sm text-muted-foreground">
            {filteredMappings.length} name{filteredMappings.length !== 1 ? "s" : ""} found
          </p>
          <button
            type="button"
            onClick={handleRandomName}
            disabled={allMappings.length === 0}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shuffle className="w-4 h-4" /> Random Name
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredMappings.map((m, i) => (
              <motion.div
                key={m.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: Math.min(i * 0.02, 0.5) }}
                className="bg-card rounded-xl border border-border p-4 hover:shadow-card-hover transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-2">
                  <Link
                    to={`/western-names/${m.key}`}
                    className="font-display text-lg font-semibold text-foreground hover:text-primary hover:underline"
                  >
                    {m.westernName}
                  </Link>
                  <Badge variant="outline" className="text-[10px] capitalize shrink-0">
                    {(m.category ?? "").replace("-", " ")
                      .replace("biblical", "📖").replace("western", "🌍").replace("hebrew", "✡").replace("virtue", "✨")
                      .replace("latin", "🏛").replace("hindu", "🪷").replace("chinese", "中").replace("portuguese", "🇵🇹").replace("tribal", "🌿")
                      .replace("russian", "🇷🇺").replace("japanese", "🇯🇵").replace("korean", "🇰🇷").replace("french", "🇫🇷").replace("german", "🇩🇪").replace("italian", "🇮🇹").replace("spanish", "🇪🇸").replace("indonesian", "🇮🇩").replace("vietnamese", "🇻🇳").replace("thai", "🇹🇭")}
                  </Badge>
                </div>

                <div className="flex items-center gap-1.5 mb-2">
                  <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                  <div className="flex gap-1.5 flex-wrap">
                    {m.muslimNames.map(name => (
                      <MuslimNameHoverCard
                        key={name}
                        slug={name}
                        className="text-primary font-semibold hover:underline capitalize"
                        fallbackDisplay={name}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Meaning:</span> {m.meaning}
                </p>

                {/* Alt meanings */}
                {m.altMeanings && m.altMeanings.length > 0 && (
                  <p className="text-[10px] text-muted-foreground mb-1">
                    <span className="font-medium text-foreground/70">Also:</span> {m.altMeanings.join(", ")}
                  </p>
                )}

                <p className="text-xs text-muted-foreground line-clamp-2">{m.connection}</p>

                {/* Trend badge */}
                {m.trend && (
                  <div className="mt-1.5">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-medium rounded-full px-2 py-0.5 ${
                      m.trend === "rising" ? "bg-green-500/10 text-green-400" :
                      m.trend === "classic" ? "bg-blue-500/10 text-blue-400" :
                      m.trend === "declining" ? "bg-orange-500/10 text-orange-400" :
                      "bg-purple-500/10 text-purple-400"
                    }`}>
                      {m.trend === "rising" && <TrendingUp className="w-2.5 h-2.5" />}
                      {m.trend === "classic" && <Star className="w-2.5 h-2.5" />}
                      {m.trend === "declining" && <TrendingDown className="w-2.5 h-2.5" />}
                      {m.trend === "rare" && <Gem className="w-2.5 h-2.5" />}
                      {m.trend === "rising" ? "Trending" : m.trend === "classic" ? "Classic" : m.trend === "declining" ? "Traditional" : "Rare"}
                    </span>
                  </div>
                )}

                {/* Cultural note */}
                {m.culturalNote && (
                  <p className="text-[10px] text-muted-foreground/80 italic mt-1">{m.culturalNote}</p>
                )}

                {showSources && m.sources && m.sources.length > 0 && (
                  <p className="text-[10px] text-muted-foreground mt-1 truncate" title={m.sources.join(", ")}>
                    Sources: {m.sources.slice(0, 2).map(u => new URL(u).hostname).join(", ")}
                    {m.sources.length > 2 ? "…" : ""}
                  </p>
                )}

                {m.hebrewOrigin && (
                  <p className="text-[10px] text-secondary mt-2 font-mono">{m.hebrewOrigin}</p>
                )}

                {/* Popular in countries */}
                {m.popularIn && m.popularIn.length > 0 && (
                  <p className="text-[10px] text-muted-foreground mt-1">
                    📍 Popular in: {m.popularIn.join(", ")}
                  </p>
                )}

                <div className="mt-3 pt-2 border-t border-border">
                  <Link
                    to={`/generator?name=${encodeURIComponent(m.westernName)}`}
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <Sparkles className="w-3 h-3" /> Find Islamic equivalents for {m.westernName}
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredMappings.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center py-16"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <BookOpen className="h-7 w-7" />
            </div>
            <p className="font-display font-semibold text-foreground mb-2">No matching names found</p>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">Try a different search term or category.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                type="button"
                onClick={() => { setSearch(""); setCategoryFilter("all"); setTrendFilter("all"); }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted/50 transition-colors"
              >
                Clear search
              </button>
              <Link
                to="/generator"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Name Generator
              </Link>
              <Link
                to="/names"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted/50 transition-colors"
              >
                Browse Islamic names
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </Layout>
  );
}
