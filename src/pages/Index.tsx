import { Link } from "react-router-dom";
import { Search, Sparkles, BookOpen, Scale, Users, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import NameCard from "@/components/NameCard";
import { namesDatabase } from "@/data/names";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const featuredNames = namesDatabase.slice(0, 6);

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/names?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("/names");
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
              <Heart className="w-3.5 h-3.5" /> Made for Muslim converts & reverts
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              Discover Your
              <br />
              <span className="text-gold">Muslim Name</span>
            </h1>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg mx-auto leading-relaxed">
              Find meaningful Islamic names with authentic origins, Quranic significance, and practical guidance for your new journey
            </p>

            <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Try 'peaceful' or 'servant of Allah'"
                  className="pl-10 h-12 rounded-xl bg-primary-foreground text-foreground border-0 text-base"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6">
                Search
              </Button>
            </form>

            <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/60">
              <span>{namesDatabase.length}+ Names</span>
              <span>•</span>
              <span>Scholarly Verified</span>
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
              { icon: Sparkles, title: "Smart Name Generator", desc: "Get personalized suggestions based on your preferences, heritage, and desired meanings" },
              { icon: BookOpen, title: "Quranic & Sunnah References", desc: "Every name comes with authentic scholarly sources, hadith references, and Quranic context" },
              { icon: Scale, title: "Legal Name Change Support", desc: "Step-by-step guides, document templates, and cost calculators for your country" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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

      {/* CTA */}
      <section className="py-16 bg-gradient-hero geometric-pattern">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Find Your Name?
            </h2>
            <p className="text-primary-foreground/80 max-w-md mx-auto mb-8">
              Our generator considers your heritage, preferences, and desired meanings to suggest the perfect Muslim name
            </p>
            <Link to="/generator">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 h-14 px-8 text-lg rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" /> Start Name Generator
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
