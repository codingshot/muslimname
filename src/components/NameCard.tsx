import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { prefetchNameDetail } from "@/lib/prefetch";
import { Star } from "lucide-react";
import type { MuslimName } from "@/data/names";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useProfile } from "@/hooks/useProfile";
import { getWesternKeysForMuslimName } from "@/data/nameMapping";
import { getNameFontClass } from "@/lib/nameFont";

interface NameCardProps {
  name: MuslimName;
  index?: number;
}

function NameCard({ name, index = 0 }: NameCardProps) {
  const navigate = useNavigate();
  const { profile, isFavorite, toggleFavorite } = useProfile();
  const fontClass = getNameFontClass(profile.settings.nameDisplayFont);
  const starred = isFavorite(name.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.3 }}
    >
      <div className="group relative bg-card rounded-xl border border-border p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        {/* Star button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(name.slug);
          }}
          className={`absolute top-3 right-3 p-1.5 rounded-lg transition-all z-10 ${
            starred
              ? "text-secondary bg-secondary/10"
              : "text-muted-foreground/40 hover:text-secondary hover:bg-secondary/10"
          }`}
          aria-label={starred ? "Remove from favorites" : "Add to favorites"}
        >
          <Star className={`w-4 h-4 ${starred ? "fill-current" : ""}`} />
        </button>

        <Link
          to={`/name/${name.slug}`}
          className="block"
          onMouseEnter={() => prefetchNameDetail()}
        >
          <div className="flex items-start justify-between mb-2 sm:mb-3 pr-8">
            <div className="min-w-0 flex-1">
              <h3 className={`${fontClass} text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors truncate`}>
                {name.name}
              </h3>
              <p className={`${fontClass} text-base sm:text-lg text-secondary mt-0.5`} style={{ direction: "rtl" }}>{name.arabic}</p>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
              {name.isQuranic && (
                <Badge className="bg-secondary/20 text-secondary border-secondary/30 text-[10px] font-semibold uppercase tracking-wider">
                  Quranic
                </Badge>
              )}
              <Badge variant="outline" className="text-[10px] capitalize">
                {name.gender}
              </Badge>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 line-clamp-2">
            <span className="font-medium text-foreground">{name.meaning}</span> — {name.detailedMeaning.slice(0, 80)}...
          </p>

          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {name.themes.slice(0, 3).map(theme => (
              <span
                key={theme}
                className="px-1.5 sm:px-2 py-0.5 rounded-full bg-teal-light text-primary text-[10px] sm:text-[11px] font-medium capitalize"
              >
                {theme}
              </span>
            ))}
            {name.scriptureContext?.inBible && (() => {
              const westernKey = getWesternKeysForMuslimName(name.slug)[0];
              const goTo = () => { navigate(westernKey ? `/western-names/${westernKey}` : "/names?scripture=bible"); };
              const trigger = (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(); }}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goTo(); } }}
                  className="text-[10px] text-muted-foreground hover:text-primary cursor-pointer"
                >
                  ✝️ Bible
                </span>
              );
              return westernKey && name.scriptureContext?.bibleName ? (
                <Tooltip>
                  <TooltipTrigger asChild>{trigger}</TooltipTrigger>
                  <TooltipContent side="top">
                    {name.scriptureContext.bibleName} — View Western mapping →
                  </TooltipContent>
                </Tooltip>
              ) : trigger;
            })()}
            {name.scriptureContext?.inTorah && (() => {
              const westernKey = getWesternKeysForMuslimName(name.slug)[0];
              const goTo = () => { navigate(westernKey ? `/western-names/${westernKey}` : "/names?scripture=torah"); };
              const trigger = (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(); }}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goTo(); } }}
                  className="text-[10px] text-muted-foreground hover:text-primary cursor-pointer"
                >
                  ✡️ Torah
                </span>
              );
              return westernKey && name.scriptureContext?.torahName ? (
                <Tooltip>
                  <TooltipTrigger asChild>{trigger}</TooltipTrigger>
                  <TooltipContent side="top">
                    {name.scriptureContext.torahName} — View Western mapping →
                  </TooltipContent>
                </Tooltip>
              ) : trigger;
            })()}
            {name.scriptureContext?.sharedProphet && (
              <span className="text-[10px] text-secondary">🤝 Shared</span>
            )}
            <span className="text-[10px] sm:text-[11px] text-muted-foreground ml-auto">{name.pronunciation}</span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}

export default memo(NameCard);
