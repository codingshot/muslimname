import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { findNameBySlug } from "@/data/names";
import { BookOpen } from "lucide-react";

interface Props {
  slug: string;
  className?: string;
  children?: React.ReactNode;
  /** Display name override when nameData is missing */
  fallbackDisplay?: string;
}

/**
 * Wraps a Muslim name link with a hover card showing meaning and Quran references.
 */
export function MuslimNameHoverCard({ slug, className, children, fallbackDisplay }: Props) {
  const nameData = findNameBySlug(slug);
  const displayName = nameData?.name ?? fallbackDisplay ?? slug;
  const meaning = nameData?.meaning ?? "";
  const refs = (nameData?.quranicReferences ?? []).slice(0, 2);

  const link = (
    <Link to={`/name/${slug}`} className={className}>
      {children ?? displayName}
    </Link>
  );

  if (!nameData) {
    return link;
  }

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        {link}
      </HoverCardTrigger>
      <HoverCardContent side="top" align="start" className="w-72">
        <div className="space-y-2">
          <p className="font-semibold text-foreground capitalize">{displayName}</p>
          {meaning && (
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Meaning:</span> {meaning}
            </p>
          )}
          {refs.length > 0 && (
            <div className="space-y-1.5 pt-1 border-t border-border">
              <p className="text-xs font-medium text-foreground flex items-center gap-1">
                <BookOpen className="w-3 h-3 text-amber-600" /> Quran
              </p>
              {refs.map((ref, i) => (
                <p key={i} className="text-xs text-muted-foreground line-clamp-2">
                  {ref.surah} {ref.ayah}: &quot;{ref.text}&quot;
                </p>
              ))}
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
