import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, Heart, Menu, X, Sparkles, Scale, User, Shuffle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/hooks/useProfile";
import { namesDatabase } from "@/data/names";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/names", label: "Browse Names" },
  { to: "/generator", label: "Name Generator" },
  { to: "/blogs", label: "Blog" },
  { to: "/legal-guide", label: "Legal Guide" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="MuslimName.me" className="w-8 h-8" />
            <span className="font-display text-xl font-bold text-foreground">
              Muslim<span className="text-primary">Name</span>.me
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
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
            <Link
              to="/profile"
              className={`p-2 rounded-lg transition-colors ${
                location.pathname === "/profile"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
              aria-label="My Profile"
            >
              <User className="w-5 h-5" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src={logo} alt="MuslimName.me" className="w-7 h-7" />
                <span className="font-display text-lg font-bold">MuslimName.me</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Helping new Muslims discover meaningful Islamic names with guidance, education, and practical support.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/ummahbuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
                  aria-label="Follow on X (Twitter)"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/ummah-build/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
                  aria-label="Follow on LinkedIn"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/codingshot/muslimname"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground"
                  aria-label="GitHub Repository"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3">Explore</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/names" className="hover:text-primary transition-colors">Browse Names</Link>
                <Link to="/generator" className="hover:text-primary transition-colors">Name Generator</Link>
                <Link to="/names?gender=male" className="hover:text-primary transition-colors">Male Names</Link>
                <Link to="/names?gender=female" className="hover:text-primary transition-colors">Female Names</Link>
                <button
                  onClick={() => {
                    const quranic = namesDatabase.filter(n => n.isQuranic);
                    const random = quranic[Math.floor(Math.random() * quranic.length)];
                    if (random) navigate(`/name/${random.slug}`);
                  }}
                  className="text-left hover:text-primary transition-colors inline-flex items-center gap-1.5"
                >
                  <Shuffle className="w-3.5 h-3.5" /> Random Quranic Name
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3">Resources</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/blogs" className="hover:text-primary transition-colors">Blog</Link>
                <Link to="/legal-guide" className="hover:text-primary transition-colors">Legal Name Change Guide</Link>
                <Link to="/contribute" className="hover:text-primary transition-colors">Contribute</Link>
                <a href="https://github.com/codingshot/muslimname" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub Repo</a>
              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold mb-3">Legal</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} MuslimName.me — Made with ❤️ for the Ummah</span>
            <a
              href="https://ummah.build"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
            >
              Built by ummah.build
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
