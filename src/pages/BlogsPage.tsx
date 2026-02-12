import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { blogPosts } from "@/data/blogs";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const allTags = [...new Set(blogPosts.flatMap(b => b.tags))].sort();

export default function BlogsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Islamic Naming Blog — Guides, Meanings & Traditions | MuslimName.me</title>
        <meta name="description" content="Explore guides on choosing Muslim names, Islamic naming traditions, Quranic name meanings, and resources for converts. Expert articles on Abrahamic name connections." />
      </Helmet>

      <div className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" /> Knowledge & Guidance
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Islamic Naming Blog
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Guides, insights, and resources for choosing meaningful Muslim names — for converts, parents, and seekers of knowledge
          </p>
        </motion.div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {allTags.map(tag => (
            <Badge key={tag} variant="outline" className="capitalize text-xs cursor-default">
              <Tag className="w-3 h-3 mr-1" /> {tag}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Link to={`/blogs/${blogPosts[0].slug}`} className="block mb-10">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white hover:opacity-95 transition-opacity">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">Featured Guide</Badge>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">{blogPosts[0].title}</h2>
              <p className="text-white/80 max-w-2xl mb-4">{blogPosts[0].excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-white">
                Read Guide <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link to={`/blogs/${post.slug}`} className="block group h-full">
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
      </div>
    </Layout>
  );
}
