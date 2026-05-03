import { Link, useLocation } from "react-router-dom";
import { Home, Play, Search, Sparkles, Scale, User } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import {
  prefetchDiscover,
  prefetchNamesPage,
  prefetchGenerator,
  prefetchLegalGuide,
  prefetchProfile,
} from "@/lib/prefetch";
import type { LucideIcon } from "lucide-react";

type BottomNavItem = { to: string; label: string; icon: LucideIcon; prefetch?: () => void };

const bottomNavItems: BottomNavItem[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/discover", label: "Discover", icon: Play, prefetch: prefetchDiscover },
  { to: "/names", label: "Browse", icon: Search, prefetch: prefetchNamesPage },
  { to: "/generator", label: "Generator", icon: Sparkles, prefetch: prefetchGenerator },
  { to: "/legal-guide", label: "Legal", icon: Scale, prefetch: prefetchLegalGuide },
  { to: "/profile", label: "Profile", icon: User, prefetch: prefetchProfile },
];

function routeActive(pathname: string, to: string): boolean {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export default function BottomNav() {
  const location = useLocation();
  const { profile } = useProfile();
  const favoriteCount = profile.favorites.length;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 md:hidden border-t border-border bg-card/95 backdrop-blur-xl pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_24px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_-6px_28px_-10px_rgba(0,0,0,0.45)]"
      aria-label="Bottom navigation"
    >
      <div className="flex w-full items-stretch justify-between gap-0 px-0.5 pt-1">
        {bottomNavItems.map(({ to, label, icon: Icon, prefetch }) => {
          const active = routeActive(location.pathname, to);
          return (
            <Link
              key={to}
              to={to}
              onPointerEnter={() => prefetch?.()}
              className={[
                "flex min-h-[3.25rem] min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-t-lg px-0.5 py-1.5 transition-colors [-webkit-tap-highlight-color:transparent]",
                "touch-manipulation outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                active
                  ? "text-primary"
                  : "text-muted-foreground active:bg-muted/80 hover:text-foreground",
              ].join(" ")}
              aria-current={active ? "page" : undefined}
            >
              <span
                className={[
                  "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
                  active ? "bg-primary/15 text-primary" : "text-current",
                ].join(" ")}
              >
                <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={active ? 2.25 : 2} aria-hidden />
                {to === "/profile" && favoriteCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-primary px-0.5 text-[9px] font-bold leading-none text-primary-foreground">
                    {favoriteCount > 99 ? "99+" : favoriteCount}
                  </span>
                )}
              </span>
              <span
                className={[
                  "max-w-full truncate text-center text-[10px] font-semibold leading-tight tracking-tight",
                  active ? "text-primary" : "text-muted-foreground",
                ].join(" ")}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
