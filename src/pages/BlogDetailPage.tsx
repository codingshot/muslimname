import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { getBlogBySlug, getRelatedBlogs } from "@/data/blogs";
import { linkifyNamesInMarkdown } from "@/lib/linkifyNames";
import { MuslimNameHoverCard } from "@/components/MuslimNameHoverCard";
import { WesternNameHoverCard } from "@/components/WesternNameHoverCard";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Table, TableHeader, TableBody, TableHead, TableRow, TableCell,
} from "@/components/ui/table";

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
        <meta property="og:title" content={`${post.title} | MuslimName.me`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={`https://muslimname.me/blogs/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content={`${post.title} | MuslimName.me`} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content="https://muslimname.me/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            url: `https://muslimname.me/blogs/${post.slug}`,
            publisher: { "@type": "Organization", name: "MuslimName.me", url: "https://muslimname.me" },
          })}
        </script>
      </Helmet>

      <article className="container mx-auto px-4 py-10 md:py-14 max-w-3xl">
        <Link to="/blogs" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex gap-2 flex-wrap mb-6">
            {post.tags.map(tag => (
              <Link key={tag} to={`/blogs?tag=${encodeURIComponent(tag)}`}>
                <Badge variant="outline" className="text-xs capitalize cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Tag className="w-3 h-3 mr-1" /> {tag}
                </Badge>
              </Link>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            {post.excerpt}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-slate max-w-none
            prose-headings:font-display prose-headings:text-foreground prose-headings:leading-tight
            prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
            prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
            prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:my-5
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-li:text-muted-foreground prose-li:my-2
            prose-ul:my-6 prose-ol:my-6
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-8 prose-blockquote:text-muted-foreground prose-blockquote:italic
            prose-em:text-foreground/80
            prose-hr:my-10 prose-hr:border-border
            prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:my-8 prose-pre:rounded-xl
          "
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            children={linkifyNamesInMarkdown(post.content)}
            components={{
              table: ({ children }) => (
                <div className="my-6 rounded-lg border border-border overflow-hidden not-prose">
                  <Table>{children}</Table>
                </div>
              ),
              thead: ({ children }) => <TableHeader>{children}</TableHeader>,
              tbody: ({ children }) => <TableBody>{children}</TableBody>,
              tr: ({ children }) => <TableRow>{children}</TableRow>,
              th: ({ children }) => (
                <TableHead className="bg-muted text-foreground font-semibold text-sm">
                  {children}
                </TableHead>
              ),
              td: ({ children }) => (
                <TableCell className="text-muted-foreground text-sm">{children}</TableCell>
              ),
              a: ({ href, children }) => {
                const isInternal = href?.startsWith("/") && !href.startsWith("//");
                if (isInternal && href) {
                  const nameMatch = href.match(/^\/name\/([^/?#]+)/);
                  const westernMatch = href.match(/^\/western-names\/([^/?#]+)/);
                  if (nameMatch) {
                    return (
                      <MuslimNameHoverCard slug={decodeURIComponent(nameMatch[1])} className="text-primary hover:underline font-medium">
                        {children}
                      </MuslimNameHoverCard>
                    );
                  }
                  if (westernMatch) {
                    return (
                      <WesternNameHoverCard keyName={decodeURIComponent(westernMatch[1])} className="text-primary hover:underline font-medium">
                        {children}
                      </WesternNameHoverCard>
                    );
                  }
                  return (
                    <Link to={href} className="text-primary hover:underline font-medium">
                      {children}
                    </Link>
                  );
                }
                return (
                  <a
                    href={href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    {children}
                  </a>
                );
              },
            }}
          />
        </motion.div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 bg-gradient-hero rounded-xl p-8 md:p-10 text-center text-white">
          <h3 className="font-display text-xl md:text-2xl font-bold mb-3">Ready to Discover Your Muslim Name?</h3>
          <p className="text-white/80 mb-6 text-sm md:text-base max-w-md mx-auto">Use our name generator to find the Islamic equivalent of your name</p>
          <Link to="/generator" className="inline-flex items-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-sm">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-muted/30 border-t border-border mt-16 md:mt-20">
          <div className="container mx-auto px-4 py-14 md:py-16 max-w-5xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" /> Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {related.map(r => (
                <Link key={r.slug} to={`/blogs/${r.slug}`} className="block group">
                  <div className="bg-card rounded-xl border border-border p-6 md:p-7 hover:shadow-card-hover transition-all hover:-translate-y-0.5 h-full">
                    <h3 className="font-display text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2 leading-snug">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{r.excerpt}</p>
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
