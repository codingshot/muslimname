import { Settings2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useProfileContext } from "@/contexts/ProfileContext";
import { getOrigins } from "@/data/names";
import { useMemo } from "react";

type GenderOpt = "all" | "male" | "female" | "unisex";

const GENDER_OPTIONS: { value: GenderOpt; label: string }[] = [
  { value: "all", label: "All names" },
  { value: "male", label: "Boy only" },
  { value: "female", label: "Girl only" },
  { value: "unisex", label: "Unisex only" },
];

interface RandomSettingsDropdownProps {
  size?: "sm" | "default";
}

export function RandomSettingsDropdown({ size = "default" }: RandomSettingsDropdownProps) {
  const { profile, updateSettings } = useProfileContext();
  const prefs = profile.settings.randomPreferences ?? {};
  const gender = prefs.gender ?? "all";
  const quranicOnly = prefs.quranicOnly ?? false;
  const origin = prefs.origin ?? "all";

  const origins = useMemo(() => getOrigins(), []);

  const setGender = (v: GenderOpt) =>
    updateSettings({
      randomPreferences: { ...prefs, gender: v },
    });
  const setQuranicOnly = (v: boolean) =>
    updateSettings({
      randomPreferences: { ...prefs, quranicOnly: v },
    });
  const setOrigin = (v: string) =>
    updateSettings({
      randomPreferences: { ...prefs, origin: v },
    });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={size === "sm" ? "h-7 w-7" : "h-8 w-8"}
          aria-label="Random name settings"
        >
          <Settings2 className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52 max-h-[70vh] overflow-y-auto">
        <DropdownMenuLabel>Random name settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={gender} onValueChange={(v) => setGender(v as GenderOpt)}>
          {GENDER_OPTIONS.map((o) => (
            <DropdownMenuRadioItem key={o.value} value={o.value}>
              {o.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={quranicOnly} onCheckedChange={(v) => setQuranicOnly(!!v)}>
          Quranic names only
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="text-xs text-muted-foreground">Origin</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={origin} onValueChange={setOrigin}>
          <DropdownMenuRadioItem value="all">All origins</DropdownMenuRadioItem>
          {origins.map((o) => (
            <DropdownMenuRadioItem key={o} value={o}>
              {o}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
