import { Link } from "react-router-dom";
import { Heart, BookOpen, Volume2 } from "lucide-react";
import type { MuslimName } from "@/data/names";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface NameCardProps {
  name: MuslimName;
  index?: number;
}

export default function NameCard({ name, index = 0 }: NameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        to={`/name/${name.slug}`}
        className="group block bg-card rounded-xl border border-border p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {name.name}
            </h3>
            <p className="font-arabic text-lg text-secondary mt-0.5">{name.arabic}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
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

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          <span className="font-medium text-foreground">{name.meaning}</span> — {name.detailedMeaning.slice(0, 100)}...
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          {name.themes.slice(0, 3).map(theme => (
            <span
              key={theme}
              className="px-2 py-0.5 rounded-full bg-teal-light text-primary text-[11px] font-medium capitalize"
            >
              {theme}
            </span>
          ))}
          <span className="text-[11px] text-muted-foreground ml-auto">{name.pronunciation}</span>
        </div>
      </Link>
    </motion.div>
  );
}
