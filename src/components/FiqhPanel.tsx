import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, BookOpen, Scale, Info } from "lucide-react";
import type { FiqhResult } from "@/data/fiqh";
import { Link } from "react-router-dom";

interface FiqhPanelProps {
  name: string;
  fiqh: FiqhResult;
  /** Compact mode for inline display (e.g. generator) */
  compact?: boolean;
}

const rulingStyles: Record<FiqhResult["ruling"], { bg: string; border: string; text: string }> = {
  obligatory_to_change: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-600 dark:text-red-400",
  },
  recommended_to_change: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-600 dark:text-amber-400",
  },
  permissible: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
  },
  preferred: {
    bg: "bg-primary/10",
    border: "border-primary/30",
    text: "text-primary",
  },
};

export default function FiqhPanel({ name, fiqh, compact }: FiqhPanelProps) {
  const style = rulingStyles[fiqh.ruling];
  const hasRefs = fiqh.quranRefs.length > 0 || (fiqh.hadithRefs?.length ?? 0) > 0;

  if (compact) {
    return (
      <div className={`rounded-lg border ${style.border} ${style.bg} p-3`}>
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className={`text-sm font-semibold ${style.text}`}>
            Islamic ruling: {fiqh.label}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">{fiqh.reason}</p>
        {fiqh.suggestedNames && fiqh.suggestedNames.length > 0 && (
          <p className="text-xs mt-1">
            Suggested: {fiqh.suggestedNames.slice(0, 3).map((n, i) => (
              <span key={n}>
                {i > 0 && ", "}
                <Link to={`/name/${n}`} className="text-primary hover:underline capitalize">{n}</Link>
              </span>
            ))}
          </p>
        )}
      </div>
    );
  }

  return (
    <Collapsible>
      <div className={`rounded-xl border ${style.border} ${style.bg} overflow-hidden`}>
        <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-background/80 flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className={`font-semibold ${style.text}`}>
                Islamic ruling: {fiqh.label}
              </p>
              <p className="text-sm text-muted-foreground line-clamp-1">{fiqh.reason}</p>
            </div>
          </div>
          {hasRefs && (
            <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-4 pb-4 space-y-3 border-t border-border/50 pt-3">
            <p className="text-sm text-muted-foreground">{fiqh.reason}</p>

            {fiqh.shirkExplanation && (
              <div className="rounded-lg bg-muted/50 p-3">
                <p className="text-xs font-medium text-foreground mb-1 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  What is shirk?
                </p>
                <p className="text-xs text-muted-foreground">{fiqh.shirkExplanation}</p>
              </div>
            )}

            {fiqh.quranRefs.length > 0 && (
              <div>
                <p className="text-xs font-medium text-foreground mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  Quran references
                </p>
                <ul className="space-y-1.5">
                  {fiqh.quranRefs.map((ref, i) => (
                    <li key={i} className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{ref.surah} {ref.ayah}:</span> {ref.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {fiqh.hadithRefs && fiqh.hadithRefs.length > 0 && (
              <div>
                <p className="text-xs font-medium text-foreground mb-2">Hadith & scholarly sources</p>
                <ul className="space-y-1.5">
                  {fiqh.hadithRefs.map((ref, i) => (
                    <li key={i} className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{ref.source}:</span> {ref.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {fiqh.suggestedNames && fiqh.suggestedNames.length > 0 && (
              <div>
                <p className="text-xs font-medium text-foreground mb-2">Suggested Islamic names</p>
                <div className="flex flex-wrap gap-1.5">
                  {fiqh.suggestedNames.slice(0, 5).map(n => (
                    <Link
                      key={n}
                      to={`/name/${n}`}
                      className="text-xs font-medium text-primary hover:underline bg-primary/10 hover:bg-primary/20 px-2 py-1 rounded-md capitalize"
                    >
                      {n}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
