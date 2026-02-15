import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { prefetchBlogDetail } from "@/lib/prefetch";
import { Search, Sparkles, BookOpen, Scale, Users, ArrowRight, Heart, Shuffle } from "lucide-react";
import { useState, useMemo, useDeferredValue } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { MuslimNameHoverCard } from "@/components/MuslimNameHoverCard";
import NameCard from "@/components/NameCard";
import { namesDatabase, getNameOfTheDay, getQuickNameSuggestions, getRandomName } from "@/data/names";
import { useProfileContext } from "@/contexts/ProfileContext";
import { RandomSettingsDropdown } from "@/components/RandomSettingsDropdown";
import { getMultiNameMappingContext, getDidYouMeanSuggestions, getCombinedTypingSuggestions, getCanonicalMappingKey, totalMappings, getMappingAffiliation } from "@/data/nameMapping";
import { blogPosts } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useCountry } from "@/hooks/useCountry";

const featuredNames = namesDatabase.slice(0, 6);
const featuredBlogs = blogPosts.slice(0, 3);
const nameOfTheDay = getNameOfTheDay();

const exploreByVirtue = [
  { label: "Patience", theme: "patience", icon: "🌿" },
  { label: "Light", theme: "guidance", icon: "✨" },
  { label: "Mercy", theme: "compassion", icon: "💚" },
  { label: "Strength", theme: "strength", icon: "🦁" },
  { label: "Wisdom", theme: "wisdom", icon: "📖" },
  { label: "Beauty", theme: "beauty", icon: "🌸" },
];

const Index = () => {
  const [currentName, setCurrentName] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const { country } = useCountry();
  const { profile } = useProfileContext();

  const multiMappingInfo = currentName.trim() ? getMultiNameMappingContext(currentName.trim()) : [];
  const hasAnyMapping = multiMappingInfo.some(p => p.mapping);
  const deferredNameForSuggestions = useDeferredValue(
    hasAnyMapping ? "" : currentName.trim()
  );
  const didYouMeanSuggestions = useMemo(
    () => getDidYouMeanSuggestions(deferredNameForSuggestions, 3, { countryCode: country ?? undefined }),
    [deferredNameForSuggestions, country]
  );
  const typingSuggestions = useMemo(() => {
    const parts = currentName.trim().split(/\s+/).filter(Boolean);
    return parts.map((word, index) => {
      if (!word || word.length < 2) return { word, index, mapping: [] as { displayName: string; canonicalKey: string }[], muslim: [] as { slug: string; name: string; meaning: string }[] };
      return {
        word,
        index,
        mapping: getCombinedTypingSuggestions(word, { limit: 4, countryCode: country ?? undefined }),
        muslim: getQuickNameSuggestions(word, 3),
      };
    }).filter(w => w.mapping.length > 0 || w.muslim.length > 0);
  }, [currentName, country]);

  const handleDiscover = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentName.trim()) {
      navigate(`/generator?name=${encodeURIComponent(currentName.trim())}`);
    } else {
      navigate("/generator");
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>MuslimName.me — Muslim Names for Converts, Reverts & New Babies</title>
        <meta name="description" content="Find your Muslim name — for converts, reverts, new babies & cultural name changes. 3000+ Islamic names, 1700+ non-Muslim mappings. Meanings, Quranic refs, legal guides. Free & private." />
        <meta name="keywords" content="Muslim names, Islamic names, convert to Islam names, revert names, new Muslim name, Muslim baby names, name change Islam, cultural name change, Quranic names" />
        <link rel="canonical" href="https://muslimname.me" />
      </Helmet>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero-bg.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 geometric-pattern" />

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-primary-foreground/90 mb-6">
              <Heart className="w-3.5 h-3.5" /> Made for reverts
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Discover Your
              <br />
              <span className="text-gold">Muslim Name</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto leading-relaxed">
              Enter your current name and we'll find its Islamic equivalent — connecting your identity across Abrahamic traditions
            </p>

            <form onSubmit={handleDiscover} className="flex gap-2 max-w-md mx-auto mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                <Input
                  value={currentName}
                  onChange={e => { setCurrentName(e.target.value); setShowSuggestions(true); }}
                  onFocus={() => currentName.trim().length >= 2 && setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                  placeholder="Enter your name (e.g., David, Sarah, Michael)"
                  aria-label="Enter your current name to discover Islamic equivalent"
                  className="pl-10 h-12 rounded-xl bg-primary-foreground text-foreground dark:text-slate-900 dark:placeholder:text-slate-500 border-0 text-base"
                />
                {showSuggestions && typingSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-card/95 backdrop-blur border border-border rounded-xl shadow-lg z-50 py-2 max-h-64 overflow-y-auto">
                    {typingSuggestions.map(({ word, index, mapping, muslim }) => {
                      const parts = currentName.trim().split(/\s+/).filter(Boolean);
                      const replaceWordAt = (newVal: string) => {
                        const next = [...parts];
                        next[index] = newVal;
                        return next.join(" ");
                      };
                      return (
                        <div key={`${word}-${index}`} className="border-b border-border last:border-0 last:mb-0 mb-2 last:pb-0 pb-2">
                          <p className="px-4 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                            Suggestions for &quot;{word}&quot;
                          </p>
                          {mapping.map(({ displayName, canonicalKey }) => {
                            const aff = getMappingAffiliation(canonicalKey);
                            return (
                              <button
                                key={canonicalKey}
                                type="button"
                                onClick={() => { setCurrentName(replaceWordAt(displayName)); setShowSuggestions(false); }}
                                onDoubleClick={() => { setCurrentName(replaceWordAt(displayName)); setShowSuggestions(false); navigate(`/western-names/${canonicalKey}`); }}
                                title="Double-click to see full details"
                                className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-primary-foreground/10"
                              >
                                <span>{displayName}</span>
                                {aff && (
                                  <span className="ml-1.5 text-xs text-muted-foreground">
                                    {aff.flag && <span className="mr-0.5">{aff.flag}</span>}{aff.label}
                                  </span>
                                )}
                              </button>
                            );
                          })}
                          {muslim.map(n => (
                            <Link
                              key={n.slug}
                              to={`/name/${n.slug}`}
                              onClick={() => setShowSuggestions(false)}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-primary-foreground/10"
                            >
                              {n.name} — {n.meaning}
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <Button type="submit" size="lg" className="h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6">
                <Sparkles className="w-4 h-4 mr-1.5" /> Discover
              </Button>
            </form>
            <div className="inline-flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  const prefs = profile.settings.randomPreferences ?? {};
                  navigate(`/name/${getRandomName({
                    gender: prefs.gender ?? "all",
                    quranicOnly: prefs.quranicOnly ?? false,
                    origin: prefs.origin,
                  }).slug}`);
                }}
                className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Shuffle className="w-4 h-4" /> Surprise me with a random name
              </button>
              <RandomSettingsDropdown />
            </div>

            {/* Live mapping preview */}
            <AnimatePresence mode="wait">
              {hasAnyMapping
                ? (
                <motion.div
                  key="match"
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  className="max-w-md mx-auto mb-4"
                >
                  <div className="bg-primary-foreground/15 backdrop-blur-sm rounded-xl px-4 py-3 text-left hover:bg-primary-foreground/20 transition-colors">
                    <p className="text-sm text-primary-foreground">
                      {multiMappingInfo.map((part, i) => (
                        <span key={i}>
                          {i > 0 && " · "}
                          {part.mapping ? (
                            <>
                              {part.canonicalKey ? (
                                <Link to={`/western-names/${part.canonicalKey}`} className="font-semibold capitalize hover:underline">
                                  {part.western}
                                </Link>
                              ) : (
                                <span className="font-semibold capitalize">{part.western}</span>
                              )}
                              {" → "}
                              {part.mapping.muslimNames.map((mn, j) => (
                                <span key={mn}>
                                  {j > 0 && ", "}
                                  <MuslimNameHoverCard
                                    slug={mn}
                                    className="text-gold font-semibold hover:underline"
                                    fallbackDisplay={mn}
                                  />
                                </span>
                              ))}
                              {part.mapping.hebrewOrigin && (
                                <span className="text-primary-foreground/60 text-xs ml-1">(Hebrew: {part.mapping.hebrewOrigin})</span>
                              )}
                            </>
                          ) : (
                            <span className="text-primary-foreground/80">
                              <span className="capitalize">{part.western}</span>
                              <span className="text-primary-foreground/60 text-xs ml-1">(no mapping)</span>
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                    {multiMappingInfo.some(p => p.mapping?.connection) && (
                      <p className="text-xs text-primary-foreground/60 mt-1">
                        {multiMappingInfo.filter(p => p.mapping?.connection).map(p => p.mapping!.connection).join(" · ")}
                      </p>
                    )}
                  </div>
                </motion.div>
                )
                : didYouMeanSuggestions.length > 0
                ? (
                  <motion.div
                    key="suggestions"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="max-w-md mx-auto mb-4"
                  >
                    <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 text-left flex flex-wrap items-center gap-1.5">
                      <span className="text-xs text-primary-foreground/80">Did you mean:</span>
                      {didYouMeanSuggestions.map(({ displayName, canonicalKey }) => {
                        const aff = getMappingAffiliation(canonicalKey);
                        return (
                          <button
                            key={canonicalKey}
                            type="button"
                            onClick={() => setCurrentName(displayName)}
                            onDoubleClick={() => navigate(`/western-names/${canonicalKey}`)}
                            title={aff ? `${displayName} — ${aff.label}. Double-click for details` : "Double-click to see full details"}
                            className="text-xs font-medium text-gold hover:underline bg-primary-foreground/20 hover:bg-primary-foreground/30 px-2 py-1 rounded-full transition-colors"
                          >
                            {displayName}{aff ? ` ${aff.flag ? aff.flag + " " : ""}${aff.label}` : ""}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )
                : null}
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/60 flex-wrap">
              <span>{totalMappings}+ Non-Muslim Names Mapped</span>
              <span>•</span>
              <span>{namesDatabase.length}+ Islamic Names</span>
              <span>•</span>
              <span>Free, open source, local & private</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, title: "Name Discovery Journey", desc: "Enter your Christian, Hebrew, or Western name and discover its Islamic equivalent with spiritual context across traditions", link: "/generator" },
              { icon: BookOpen, title: "Quran, Bible & Torah Links", desc: "See how names connect across all three Abrahamic scriptures with verified references and Hebrew origins", link: "/names" },
              { icon: Scale, title: "Legal Name Change Support", desc: "Step-by-step guides for 40+ countries with verified sources, costs, and timelines", link: "/legal-guide" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={item.link} className="block bg-card rounded-xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Name of the Day */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Name of the Day</p>
            <Link
              to={`/name/${nameOfTheDay.slug}`}
              className="block bg-card rounded-xl p-5 border border-border hover:border-primary/40 hover:shadow-card-hover transition-all group"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {nameOfTheDay.name}
                  </h3>
                  <p className="font-arabic text-xl text-primary mt-1">{nameOfTheDay.arabic}</p>
                  <p className="text-sm text-muted-foreground mt-2">{nameOfTheDay.meaning}</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {nameOfTheDay.themes.slice(0, 3).map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary capitalize">{t}</span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore by Virtue */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="font-display text-xl font-bold mb-1">Explore by Meaning</h2>
            <p className="text-sm text-muted-foreground">Find names that reflect virtues you value</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {exploreByVirtue.map(({ label, theme, icon }) => (
              <Link
                key={theme}
                to={`/names?themes=${theme}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary text-sm font-medium transition-colors"
              >
                <span>{icon}</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Names */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-2">Popular Muslim Names</h2>
            <p className="text-muted-foreground">Beloved names from the Quran and Islamic tradition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {featuredNames.map((name, i) => (
              <NameCard key={name.slug} name={name} index={i} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/names">
              <Button variant="outline" size="lg" className="rounded-xl">
                Browse All Names <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — Name Discovery Flow */}
      <section className="py-16 bg-primary geometric-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              What's the Islamic Version of Your Name?
            </h2>
            <p className="text-primary-foreground/90 max-w-md mx-auto mb-8">
              We've mapped {totalMappings}+ Christian, Hebrew, and Western names to their Islamic equivalents with spiritual context from all three Abrahamic traditions
            </p>
            <Link to="/generator">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-lg rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" /> Start Your Name Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold mb-2">Guides & Resources</h2>
            <p className="text-muted-foreground">Expert articles on Islamic naming traditions, meanings, and guidance for converts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {featuredBlogs.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/blogs/${post.slug}`} className="block group h-full" onMouseEnter={() => prefetchBlogDetail()}>
                  <article className="bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex gap-1.5 mb-2">
                      {post.tags.slice(0, 2).map(t => (
                        <Badge key={t} variant="outline" className="text-[10px] capitalize">{t}</Badge>
                      ))}
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 flex-1">{post.excerpt}</p>
                    <span className="text-xs text-primary font-medium mt-3 inline-flex items-center gap-1">Read more <ArrowRight className="w-3 h-3" /></span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blogs"><Button variant="outline" size="lg" className="rounded-xl">View All Articles <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Contribution CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Missing Your Name?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're constantly expanding our database of {totalMappings}+ Christian, Hebrew, and Western names mapped to Islamic equivalents. If your name isn't here, help us add it! Every contribution strengthens the community.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/contribute">
                <Button variant="default" size="lg" className="rounded-xl">
                  Suggest a Name
                </Button>
              </Link>
              <Link to="/contribute">
                <Button variant="outline" size="lg" className="rounded-xl">
                  View All Ways to Help
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
