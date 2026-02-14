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
      </Helmet>

      <div className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" /> Knowledge & Guidance
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            {activeTag ? <span className="capitalize">{activeTag}</span> : "Islamic Naming Blog"}
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {activeTag
              ? `Showing ${filtered.length} article${filtered.length !== 1 ? "s" : ""} tagged "${activeTag}"`
              : "Guides, insights, and resources for choosing meaningful Muslim names"}
          </p>
        </motion.div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
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
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link to={`/blogs/${featured.slug}`} className="block mb-10" onMouseEnter={() => prefetchBlogDetail()}>
              <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white hover:opacity-95 transition-opacity">
                <Badge className="bg-white/20 text-white border-white/30 mb-4">Featured Guide</Badge>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">{featured.title}</h2>
                <p className="text-white/80 max-w-2xl mb-4">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid */}
        {grid.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No articles found for this tag.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grid.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link to={`/blogs/${post.slug}`} className="block group h-full" onMouseEnter={() => prefetchBlogDetail()}>
                  <article className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex gap-1.5 flex-wrap mb-3">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="text-[10px] capitalize">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                      Read more <ArrowRight className="w-3.5 h-3.5" />
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
