import { Link } from "react-router-dom";
import { Search, Sparkles, BookOpen, Scale, Users, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import NameCard from "@/components/NameCard";
import { namesDatabase } from "@/data/names";
import { getMappingContext, totalMappings } from "@/data/nameMapping";
import { blogPosts } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const featuredNames = namesDatabase.slice(0, 6);
const featuredBlogs = blogPosts.slice(0, 3);

const Index = () => {
  const [currentName, setCurrentName] = useState("");
  const navigate = useNavigate();

  const mappingInfo = currentName.trim() ? getMappingContext(currentName.trim()) : null;

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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
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

            <form onSubmit={handleDiscover} className="flex gap-2 max-w-md mx-auto mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={currentName}
                  onChange={e => setCurrentName(e.target.value)}
                  placeholder="Enter your name (e.g., David, Sarah, Michael)"
                  className="pl-10 h-12 rounded-xl bg-primary-foreground text-foreground border-0 text-base"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6">
                <Sparkles className="w-4 h-4 mr-1.5" /> Discover
              </Button>
            </form>

            {/* Live mapping preview */}
            <AnimatePresence>
              {mappingInfo && (
                <motion.div
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  className="max-w-md mx-auto mb-4"
                >
                  <div className="bg-primary-foreground/15 backdrop-blur-sm rounded-xl px-4 py-3 text-left">
                    <p className="text-sm text-primary-foreground">
                      <span className="font-semibold capitalize">{currentName}</span> → <span className="text-gold font-semibold">{mappingInfo.muslimNames.join(", ")}</span>
                      {mappingInfo.hebrewOrigin && (
                        <span className="text-primary-foreground/60 text-xs ml-2">Hebrew: {mappingInfo.hebrewOrigin}</span>
                      )}
                    </p>
                    <p className="text-xs text-primary-foreground/60 mt-1">{mappingInfo.connection}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/60 flex-wrap">
              <span>{totalMappings}+ Christian/Western Names Mapped</span>
              <span>•</span>
              <span>{namesDatabase.length}+ Islamic Names</span>
              <span>•</span>
              <span>Free Forever</span>
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
      <section className="py-16 bg-gradient-hero geometric-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What's the Islamic Version of Your Name?
            </h2>
            <p className="text-white/90 max-w-md mx-auto mb-8">
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
                <Link to={`/blogs/${post.slug}`} className="block group h-full">
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
