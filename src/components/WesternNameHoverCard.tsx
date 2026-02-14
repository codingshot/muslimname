import { Link } from "react-router-dom";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { christianToMuslimNameMapping } from "@/data/nameMapping";
import { findNameBySlug } from "@/data/names";
import { BookOpen } from "lucide-react";

interface Props {
  /** Western name canonical key (e.g. "david", "mary") */
  keyName: string;
  className?: string;
  children?: React.ReactNode;
}

/** Hover card for Western name links showing meaning and Muslim equivalents. */
export function WesternNameHoverCard({ keyName, className, children }: Props) {
  const mapping = christianToMuslimNameMapping[keyName?.toLowerCase()];
  const displayName = keyName ? keyName.charAt(0).toUpperCase() + keyName.slice(1) : keyName;

  const link = (
    <Link to={`/western-names/${keyName}`} className={className}>
      {children ?? displayName}
    </Link>
  );

  if (!mapping) return link;

  const muslimLabels = mapping.muslimNames.map((slug) => {
    const d = findNameBySlug(slug);
    return d ? `${d.name} (${d.meaning})` : slug;
  });

  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>{link}</HoverCardTrigger>
      <HoverCardContent side="top" align="start" className="w-72">
        <div className="space-y-2">
          <p className="font-semibold text-foreground capitalize">{displayName}</p>
          {mapping.meaning && (
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Meaning:</span> {mapping.meaning}
            </p>
          )}
          <div className="space-y-1 pt-1 border-t border-border">
            <p className="text-xs font-medium text-foreground flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-primary" /> Islamic equivalents
            </p>
            <p className="text-xs text-muted-foreground">{muslimLabels.join("; ")}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
