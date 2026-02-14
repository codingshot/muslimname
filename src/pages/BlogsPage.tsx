import { Link, useSearchParams } from "react-router-dom";
import { prefetchBlogDetail } from "@/lib/prefetch";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogs";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Tag, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const allTags = [...new Set(blogPosts.flatMap(b => b.tags))].sort();

export default function BlogsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");

  const filtered = activeTag
    ? blogPosts.filter(b => b.tags.includes(activeTag))
    : blogPosts;

  const toggleTag = (tag: string) => {
    if (activeTag === tag) {
      setSearchParams({});
    } else {
      setSearchParams({ tag });
    }
  };

  const featured = !activeTag ? filtered[0] : null;
  const grid = !activeTag ? filtered.slice(1) : filtered;

  return (
    <Layout>
      <Helmet>
        <title>{activeTag ? `${activeTag} Articles` : "Islamic Naming Blog"} — Guides & Traditions | MuslimName.me</title>
        <meta name="description" content="Explore guides on choosing Muslim names, Islamic naming traditions, Quranic name meanings, and resources for converts. Expert articles on Abrahamic name connections." />
        <link rel="canonical" href={activeTag ? `https://muslimname.me/blogs?tag=${encodeURIComponent(activeTag)}` : "https://muslimname.me/blogs"} />
        <meta property="og:title" content={activeTag ? `${activeTag} Articles | MuslimName.me` : "Islamic Naming Blog | MuslimName.me"} />
        <meta property="og:description" content="Explore guides on choosing Muslim names, Islamic naming traditions, Quranic name meanings, and resources for converts." />
        <meta property="og:url" content={activeTag ? `https://muslimname.me/blogs?tag=${encodeURIComponent(activeTag)}` : "https://muslimname.me/blogs"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content={activeTag ? `${activeTag} Articles | MuslimName.me` : "Islamic Naming Blog | MuslimName.me"} />
        <meta name="twitter:description" content="Explore guides on Muslim names, Islamic naming traditions, and Quranic name meanings." />
        <meta name="twitter:image" content="https://muslimname.me/og-image.png" />
      </Helmet>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
            <BookOpen className="w-4 h-4" /> Knowledge & Guidance
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {activeTag ? <span className="capitalize">{activeTag}</span> : "Islamic Naming Blog"}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            {activeTag
              ? `Showing ${filtered.length} article${filtered.length !== 1 ? "s" : ""} tagged "${activeTag}"`
              : "Guides, insights, and resources for choosing meaningful Muslim names"}
          </p>
        </motion.div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap justify-center mb-12 md:mb-14">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                activeTag === tag
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {activeTag === tag ? <X className="w-3 h-3" /> : <Tag className="w-3 h-3" />}
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featured && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-12 md:mb-16">
            <Link to={`/blogs/${featured.slug}`} className="block group" onMouseEnter={() => prefetchBlogDetail()}>
              <div className="bg-gradient-hero rounded-2xl p-8 md:p-14 lg:p-16 text-white hover:opacity-95 transition-opacity">
                <Badge className="bg-white/20 text-white border-white/30 mb-5">Featured Guide</Badge>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug group-hover:text-white/95 transition-colors">{featured.title}</h2>
                <p className="text-white/80 max-w-2xl text-base md:text-lg mb-6 leading-relaxed">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid */}
        {grid.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center py-20 md:py-24"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <BookOpen className="h-7 w-7" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">No articles for &quot;{activeTag}&quot;</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">Try another tag or browse all guides.</p>
            <button
              onClick={() => setSearchParams({})}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View all articles
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {grid.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link to={`/blogs/${post.slug}`} className="block group h-full" onMouseEnter={() => prefetchBlogDetail()}>
                  <article className="bg-card rounded-xl border border-border p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex gap-2 flex-wrap mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="text-[10px] capitalize">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground line-clamp-3 mb-5 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1.5">
                      Read more <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
