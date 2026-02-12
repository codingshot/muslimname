import { Link, useLocation } from "react-router-dom";
import { Search, Heart, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/names", label: "Browse Names" },
  { to: "/generator", label: "Name Generator" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Muslim<span className="text-primary">Name</span>.me
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/names"
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              Search names...
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted text-foreground"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="font-display text-lg font-bold">MuslimName.me</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Helping new Muslims discover meaningful Islamic names with guidance, education, and practical support.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3">Explore</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/names" className="hover:text-primary transition-colors">Browse Names</Link>
                <Link to="/generator" className="hover:text-primary transition-colors">Name Generator</Link>
                <Link to="/names?gender=male" className="hover:text-primary transition-colors">Boy Names</Link>
                <Link to="/names?gender=female" className="hover:text-primary transition-colors">Girl Names</Link>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3">Resources</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span>Islamic Naming Guide</span>
                <span>Legal Name Change</span>
                <span>Family Conversation Tips</span>
                <span>Revert Stories</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} MuslimName.me — Made with ❤️ for the Ummah
          </div>
        </div>
      </footer>
    </div>
  );
}
