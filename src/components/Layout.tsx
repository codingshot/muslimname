import { Link, useLocation, useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { prefetchDiscover, prefetchNamesPage, prefetchGenerator, prefetchLegalGuide, prefetchProfile, prefetchNameDetail } from "@/lib/prefetch";
import { searchNames } from "@/data/names";
import { Search, Heart, Menu, X, User, Shuffle, Star, Moon, Sun } from "lucide-react";
import { useState, useCallback, useEffect, useMemo, useDeferredValue } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProfile } from "@/hooks/useProfile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

const navLinks = [
  { to: "/discover", label: "Discover", prefetch: prefetchDiscover },
  { to: "/names", label: "Browse Names", prefetch: prefetchNamesPage },
  { to: "/generator", label: "Name Generator", prefetch: prefetchGenerator },
  { to: "/legal-guide", label: "Legal Guide", prefetch: prefetchLegalGuide },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [favoriteNames, setFavoriteNames] = useState<{ slug: string; name: string; positions: string[] }[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState("");
  const [navSearchFocused, setNavSearchFocused] = useState(false);
  const deferredNavSearch = useDeferredValue(navSearchQuery);
  const navResults = useMemo(() => {
    const q = deferredNavSearch.trim().toLowerCase();
    if (!q || q.length < 2) return [];
    return searchNames(deferredNavSearch).slice(0, 8);
  }, [deferredNavSearch]);
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = useProfile();
  const { resolvedTheme, setTheme } = useTheme();
  const favoriteCount = profile.favorites.length;

  useEffect(() => {
    if (!dropdownOpen || favoriteCount === 0) return;
    import("@/data/names").then(({ findNameBySlug }) => {
      setFavoriteNames(
        profile.favorites.slice(0, 6).map(f => ({
          slug: f.slug,
          name: findNameBySlug(f.slug)?.name ?? f.slug,
          positions: f.positions ?? [],
        }))
      );
    });
  }, [dropdownOpen, favoriteCount, profile.favorites]);

  const handleRandomQuranic = useCallback(async () => {
    const { namesDatabase } = await import("@/data/names");
    const quranic = namesDatabase.filter(n => n.isQuranic);
    const random = quranic[Math.floor(Math.random() * quranic.length)];
    if (random) navigate(`/name/${random.slug}`);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.ico" alt="MuslimName.me" width={32} height={32} className="w-8 h-8" fetchPriority="high" />
            <span className="font-display text-xl font-bold text-foreground">
              Muslim<span className="text-primary">Name</span>.me
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onMouseEnter={() => link.prefetch?.()}
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
            <div className="relative hidden md:block">
              <div className="flex items-center gap-2 rounded-lg border border-input bg-muted/50 px-3 py-1.5 text-sm focus-within:bg-background focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
                <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <input
                  type="search"
                  data-search-input
                  value={navSearchQuery}
                  onChange={(e) => setNavSearchQuery(e.target.value)}
                  onFocus={() => setNavSearchFocused(true)}
                  onBlur={() => setTimeout(() => setNavSearchFocused(false), 180)}
                  placeholder="Search names"
                  className="min-w-[120px] max-w-[180px] bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                  aria-label="Search Muslim names"
                />
              </div>
              {navSearchFocused && (
                <div className="absolute left-0 top-full z-50 mt-1 min-w-[260px] max-w-[360px] rounded-lg border border-border bg-popover shadow-lg">
                  {deferredNavSearch.trim().length < 2 ? (
                    <div className="px-3 py-4 text-sm text-muted-foreground">
                      Type 2+ characters to search
                    </div>
                  ) : navResults.length === 0 ? (
                    <div className="px-3 py-4 text-sm text-muted-foreground">
                      No names found. <Link to={`/names?q=${encodeURIComponent(deferredNavSearch)}`} className="text-primary underline">Browse all</Link>
                    </div>
                  ) : (
                    <>
                      {navResults.map((n) => (
                        <Link
                          key={n.slug}
                          to={`/name/${n.slug}`}
                          onMouseEnter={() => prefetchNameDetail(n.slug)}
                          className="block px-3 py-2 text-sm hover:bg-muted first:rounded-t-md last:rounded-b-md"
                        >
                          <span className="font-medium">{n.name}</span>
                          {n.transliteration && n.transliteration !== n.name && (
                            <span className="ml-1 text-muted-foreground">({n.transliteration})</span>
                          )}
                          {n.meaning && <span className="ml-2 text-muted-foreground truncate">— {n.meaning}</span>}
                        </Link>
                      ))}
                      <Link
                        to={`/names?q=${encodeURIComponent(deferredNavSearch)}`}
                        className="block px-3 py-2 text-sm text-primary hover:bg-muted rounded-b-md border-t border-border"
                      >
                        View all results
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger
                className={`p-2 rounded-lg transition-colors relative ${
                  location.pathname === "/profile"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                aria-label={`My Profile${favoriteCount > 0 ? `, ${favoriteCount} favorites` : ""}`}
              >
                <User className="w-5 h-5" />
                {favoriteCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-primary text-primary-foreground text-[10px] font-bold rounded-full">
                    {favoriteCount > 99 ? "99+" : favoriteCount}
                  </span>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[200px]">
                <DropdownMenuItem asChild>
                  <Link to="/profile" onClick={() => setDropdownOpen(false)} className="flex items-center gap-2 cursor-pointer">
                    <User className="w-4 h-4" /> My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {favoriteCount > 0 ? (
                  <>
                    <DropdownMenuLabel className="text-xs text-muted-foreground font-normal px-2 py-1">
                      Quick access — Favorites ({favoriteCount})
                    </DropdownMenuLabel>
                    {favoriteNames.map(({ slug, name, positions }) => (
                      <DropdownMenuItem key={slug} asChild>
                        <Link to={`/name/${slug}`} onClick={() => setDropdownOpen(false)} onMouseEnter={() => prefetchNameDetail()} className="flex items-center gap-2 cursor-pointer">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
                          <span className="truncate flex-1 min-w-0">{name}</span>
                          {(positions.includes("first") || positions.includes("last")) && (
                            <span className="flex shrink-0 gap-0.5 text-[10px] font-medium text-muted-foreground">
                              {positions.includes("first") && <span className="px-1 py-0.5 rounded bg-primary/15 text-primary" title="First name">F</span>}
                              {positions.includes("last") && <span className="px-1 py-0.5 rounded bg-secondary/20 text-secondary" title="Last name">L</span>}
                            </span>
                          )}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuItem asChild>
                      <Link to="/profile" onClick={() => setDropdownOpen(false)} onMouseEnter={() => prefetchProfile()} className="text-primary font-medium cursor-pointer">
                        View all {favoriteCount} favorites →
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link to="/names" onClick={() => setDropdownOpen(false)} className="flex items-center gap-2 cursor-pointer">
                      <Star className="w-3.5 h-3.5 text-muted-foreground shrink-0" /> Browse names to add favorites
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-lg hover:bg-muted text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                <div className="relative mb-2">
                  <div className="flex items-center gap-2 rounded-lg border border-input bg-muted/50 px-3 py-2 text-sm focus-within:bg-background focus-within:border-ring">
                    <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <input
                      type="search"
                      data-search-input
                      value={navSearchQuery}
                      onChange={(e) => setNavSearchQuery(e.target.value)}
                      onFocus={() => setNavSearchFocused(true)}
                      onBlur={() => setTimeout(() => setNavSearchFocused(false), 180)}
                      placeholder="Search names"
                      className="flex-1 min-w-0 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                      aria-label="Search Muslim names"
                    />
                  </div>
                  {navSearchFocused && (
                    <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-border bg-popover shadow-lg max-h-[60vh] overflow-y-auto">
                      {deferredNavSearch.trim().length < 2 ? (
                        <div className="px-3 py-4 text-sm text-muted-foreground">
                          Type 2+ characters to search
                        </div>
                      ) : navResults.length === 0 ? (
                        <div className="px-3 py-4 text-sm text-muted-foreground">
                          No names found. <Link to={`/names?q=${encodeURIComponent(deferredNavSearch)}`} onClick={() => setMobileOpen(false)} className="text-primary underline">Browse all</Link>
                        </div>
                      ) : (
                        <>
                          {navResults.map((n) => (
                            <Link
                              key={n.slug}
                              to={`/name/${n.slug}`}
                              onClick={() => { setMobileOpen(false); setNavSearchFocused(false); }}
                              onMouseEnter={() => prefetchNameDetail(n.slug)}
                              className="block px-3 py-2.5 text-sm hover:bg-muted first:rounded-t-md last:rounded-b-md"
                            >
                              <span className="font-medium">{n.name}</span>
                              {n.transliteration && n.transliteration !== n.name && (
                                <span className="ml-1 text-muted-foreground">({n.transliteration})</span>
                              )}
                              {n.meaning && <span className="ml-2 text-muted-foreground truncate">— {n.meaning}</span>}
                            </Link>
                          ))}
                          <Link
                            to={`/names?q=${encodeURIComponent(deferredNavSearch)}`}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2.5 text-sm text-primary hover:bg-muted rounded-b-md border-t border-border"
                          >
                            View all results
                          </Link>
                        </>
                      )}
                    </div>
                  )}
                </div>
                <Link
                  to="/profile"
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    location.pathname === "/profile"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4" /> My Favorites
                  </span>
                  {favoriteCount > 0 && (
                    <span className={`text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center ${
                      location.pathname === "/profile" ? "bg-primary-foreground/20" : "bg-primary/20 text-primary"
                    }`}>
                      {favoriteCount}
                    </span>
                  )}
                </Link>
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

      <main id="main-content" className="flex-1 pb-16 md:pb-0">{children}</main>

      <BottomNav />

      <footer className="border-t border-border bg-card pb-20 md:pb-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/favicon.ico" alt="MuslimName.me" width={28} height={28} className="w-7 h-7" loading="lazy" />
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
                <Link to="/profile" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  My Favorites {favoriteCount > 0 && <span className="text-primary">({favoriteCount})</span>}
                </Link>
                <Link to="/names" className="hover:text-primary transition-colors">Browse Names</Link>
                <Link to="/generator" className="hover:text-primary transition-colors">Name Generator</Link>
                <Link to="/western-names" className="hover:text-primary transition-colors">Western Name Reference</Link>
                <Link to="/names?gender=male" className="hover:text-primary transition-colors">Male Names</Link>
                <Link to="/names?gender=female" className="hover:text-primary transition-colors">Female Names</Link>
                <button
                  onClick={handleRandomQuranic}
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
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2">
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
                aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              >
                {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {resolvedTheme === "dark" ? "Light" : "Dark"} mode
              </button>
              <a
                href="https://praysap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                PRAYSAP
              </a>
              <a
                href="https://ummah.build"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Built by ummah.build
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
