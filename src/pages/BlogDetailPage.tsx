import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogs";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blogs" replace />;

  const related = getRelatedBlogs(post);

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | MuslimName.me</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://muslimname.me/blogs/${post.slug}`} />
      </Helmet>

      <article className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/blogs" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex gap-2 flex-wrap mb-4">
            {post.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs capitalize">
                <Tag className="w-3 h-3 mr-1" /> {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate max-w-none
            prose-headings:font-display prose-headings:text-foreground
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-li:text-muted-foreground
            prose-table:text-sm
            prose-th:text-foreground prose-th:font-semibold prose-th:bg-muted prose-th:px-3 prose-th:py-2
            prose-td:px-3 prose-td:py-2 prose-td:text-muted-foreground prose-td:border-border
            prose-blockquote:border-primary prose-blockquote:text-muted-foreground
            prose-em:text-foreground/80
          "
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-hero rounded-xl p-8 text-center text-white">
          <h3 className="font-display text-xl font-bold mb-2">Ready to Discover Your Muslim Name?</h3>
          <p className="text-white/80 mb-4 text-sm">Use our name generator to find the Islamic equivalent of your name</p>
          <Link to="/generator" className="inline-flex items-center gap-2 bg-white text-primary font-medium px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors text-sm">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-muted/50 border-t border-border mt-12">
          <div className="container mx-auto px-4 py-12 max-w-5xl">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map(r => (
                <Link key={r.slug} to={`/blogs/${r.slug}`} className="block group">
                  <div className="bg-card rounded-xl border border-border p-5 hover:shadow-card-hover transition-all hover:-translate-y-0.5 h-full">
                    <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {r.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
