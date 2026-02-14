import { Link, useLocation } from "react-router-dom";
import { Play, Search, User, Home } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/discover", label: "Discover", icon: Play },
  { to: "/names", label: "Search", icon: Search },
  { to: "/profile", label: "Profile", icon: User },
];

export default function BottomNav() {
  const location = useLocation();
  const { profile } = useProfile();
  const favoriteCount = profile.favorites.length;

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-border md:hidden"
      aria-label="Bottom navigation"
    >
      <div className="h-[env(safe-area-inset-bottom)] min-h-0" aria-hidden />
      <div className="flex items-center justify-around h-14 px-2">
        {navItems.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to || (to === "/discover" && location.pathname.startsWith("/discover"));
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center flex-1 h-full gap-0.5 transition-colors ${
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="relative">
                <Icon className="w-5 h-5" />
                {to === "/profile" && favoriteCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[14px] h-[14px] px-1 flex items-center justify-center bg-primary text-primary-foreground text-[9px] font-bold rounded-full">
                    {favoriteCount > 99 ? "99+" : favoriteCount}
                  </span>
                )}
              </span>
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
