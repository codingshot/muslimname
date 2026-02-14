import { useNavigate } from "react-router-dom";
import { Shuffle, ChevronDown, Settings2 } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import type { RandomSettings } from "@/contexts/ProfileContext";
import { getRandomNameFiltered, getOrigins, getThemes } from "@/data/names";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { useMemo } from "react";

const defaultSettings: RandomSettings = {
  gender: "all",
  quranicOnly: false,
  origin: "all",
  themes: [],
};

interface RandomButtonWithDropdownProps {
  /** Called when navigating to a random name (e.g. to close mobile menu) */
  onNavigate?: () => void;
}

export function RandomButtonWithDropdown({ onNavigate }: RandomButtonWithDropdownProps) {
  const navigate = useNavigate();
  const { profile, updateRandomSettings } = useProfile();
  const rs: RandomSettings = { ...defaultSettings, ...profile.settings.randomSettings };
  const origins = useMemo(() => getOrigins(), []);
  const themes = useMemo(() => getThemes(), []);

  const handleRandom = () => {
    const name = getRandomNameFiltered({
      gender: rs.gender !== "all" ? rs.gender : undefined,
      quranicOnly: rs.quranicOnly || undefined,
      origin: rs.origin !== "all" ? rs.origin : undefined,
      themes: rs.themes?.length ? rs.themes : undefined,
    });
    if (name) {
      onNavigate?.();
      navigate(`/name/${name.slug}`);
    }
  };

  const toggleTheme = (t: string) => {
    const next = rs.themes?.includes(t)
      ? (rs.themes ?? []).filter(x => x !== t)
      : [...(rs.themes ?? []), t];
    updateRandomSettings({ themes: next });
  };

  return (
    <div className="flex items-center rounded-lg border border-border overflow-hidden">
      <button
        onClick={handleRandom}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        aria-label="Surprise me with a random name"
      >
        <Shuffle className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline">Random</span>
      </button>
      <DropdownMenu>
        <DropdownMenuTrigger
          className="p-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border-l border-primary-foreground/20"
          aria-label="Random name settings"
        >
          <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[220px]">
          <DropdownMenuLabel className="flex items-center gap-2 text-xs">
            <Settings2 className="w-3.5 h-3.5" /> Random settings
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-[11px] font-normal text-muted-foreground px-2 py-1">
            Gender
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={rs.gender} onValueChange={(v) => updateRandomSettings({ gender: v as RandomSettings["gender"] })}>
            <DropdownMenuRadioItem value="all">Both</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="male">Boy</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="female">Girl</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={rs.quranicOnly}
            onCheckedChange={(checked) => updateRandomSettings({ quranicOnly: !!checked })}
          >
            Quranic only
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Origin: {rs.origin === "all" ? "Any" : rs.origin}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={rs.origin} onValueChange={(v) => updateRandomSettings({ origin: v })}>
                <DropdownMenuRadioItem value="all">Any</DropdownMenuRadioItem>
                {origins.map((o) => (
                  <DropdownMenuRadioItem key={o} value={o}>{o}</DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Themes {rs.themes?.length ? `(${rs.themes.length})` : ""}</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="max-h-[280px] overflow-y-auto">
              {themes.map((t) => (
                <DropdownMenuCheckboxItem
                  key={t}
                  checked={rs.themes?.includes(t)}
                  onCheckedChange={() => toggleTheme(t)}
                >
                  {t}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
