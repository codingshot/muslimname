import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useProfile, type FavoriteEntry, type NamePosition } from "@/hooks/useProfile";
import { findNameBySlug } from "@/data/names";
import { getMappingContext, getDidYouMeanSuggestions } from "@/data/nameMapping";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, GripVertical, Trash2, Settings, Heart, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const meaningKeywords = [
  "grace", "strong", "light", "beautiful", "pure", "faithful",
  "wise", "life", "courage", "peace", "noble", "love", "leader",
  "eternal", "mercy", "patience", "joy", "knowledge", "sacrifice",
  "devotion", "justice", "beauty", "strength", "purity", "guidance",
];

export default function ProfilePage() {
  const { profile, updateSettings, toggleFavorite, togglePosition, setFavoritePosition, reorderFavorites } = useProfile();
  const [activeTab, setActiveTab] = useState<"favorites" | "settings">("favorites");
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const firstNameMapping = profile.settings.currentFirstName
    ? getMappingContext(profile.settings.currentFirstName)
    : null;

  const handleDragStart = (index: number) => {
    dragItem.current = index;
  };

  const handleDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      reorderFavorites(dragItem.current, dragOverItem.current);
    }
    dragItem.current = null;
    dragOverItem.current = null;
  };

  const firstNameEntries = profile.favorites.filter(f => f.positions.includes("first"));
  const lastNameEntries = profile.favorites.filter(f => f.positions.includes("last"));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground mb-6 text-sm sm:text-base">
            Manage your favorite names, set preferences, and plan your name choices
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-muted rounded-lg p-1">
          {[
            { key: "favorites" as const, label: "My Favorites", icon: Heart },
            { key: "settings" as const, label: "Settings", icon: Settings },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.key === "favorites" && profile.favorites.length > 0 && (
                <span className="bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {profile.favorites.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {activeTab === "favorites" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            {profile.favorites.length === 0 ? (
              <div className="text-center py-16 bg-card rounded-xl border border-border">
                <Star className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">No favorites yet</h3>
                <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                  Browse names and tap the star icon to save your favorites. You can tag them as first or last name contenders.
                </p>
                <Link to="/names">
                  <Button className="rounded-xl">
                    <Sparkles className="w-4 h-4 mr-2" /> Browse Names
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                {/* First Name Contenders */}
                <DropSection
                  title="📝 First Name Contenders"
                  targetPosition="first"
                  entries={firstNameEntries}
                  onDrop={setFavoritePosition}
                  emptyMessage="Drag names here or click the 'First' tag to add"
                />

                {/* Last Name Contenders */}
                <DropSection
                  title="📝 Last Name Contenders"
                  targetPosition="last"
                  entries={lastNameEntries}
                  onDrop={setFavoritePosition}
                  emptyMessage="Drag names here or click the 'Last' tag to add"
                />

                {/* All Saved Names */}
                <div className="rounded-xl p-4 bg-card border border-border">
                  <h3 className="font-display text-base font-semibold text-foreground mb-3">⭐ All Saved Names</h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Tag names as First, Last, or both. Names stay here regardless of tags.
                  </p>
                  <div className="space-y-2">
                    {profile.favorites.map((entry, idx) => {
                      const nameData = findNameBySlug(entry.slug);
                      if (!nameData) return null;
                      return (
                        <div
                          key={entry.slug}
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData("text/slug", entry.slug);
                            handleDragStart(idx);
                          }}
                          onDragEnter={() => handleDragEnter(idx)}
                          onDragEnd={handleDragEnd}
                          onDragOver={e => e.preventDefault()}
                          className="flex items-center gap-3 bg-background rounded-xl border border-border p-3 sm:p-4 cursor-grab active:cursor-grabbing hover:shadow-card-hover transition-shadow"
                        >
                          <GripVertical className="w-4 h-4 text-muted-foreground shrink-0" />
                          <Link to={`/name/${entry.slug}`} className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-semibold text-foreground truncate">{nameData.name}</span>
                              <span className="font-arabic text-sm text-secondary">{nameData.arabic}</span>
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{nameData.meaning}</p>
                          </Link>

                          {/* Position tags */}
                          <div className="flex gap-1 shrink-0">
                            <button
                              onClick={() => togglePosition(entry.slug, "first")}
                              className={`px-2 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                                entry.positions.includes("first")
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                              }`}
                            >
                              First
                            </button>
                            <button
                              onClick={() => togglePosition(entry.slug, "last")}
                              className={`px-2 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                                entry.positions.includes("last")
                                  ? "bg-secondary text-secondary-foreground"
                                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                              }`}
                            >
                              Last
                            </button>
                          </div>

                          <button
                            onClick={() => toggleFavorite(entry.slug)}
                            className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}

        {activeTab === "settings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            {/* Current Name */}
            <div className="bg-card rounded-xl border border-border p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold mb-4">Your Current Name</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">First Name</label>
                  <Input
                    value={profile.settings.currentFirstName ?? ""}
                    onChange={e => updateSettings({ currentFirstName: e.target.value })}
                    placeholder="e.g., David"
                    className="rounded-lg"
                  />
                  {firstNameMapping ? (
                    <p className="mt-1.5 text-xs text-primary">
                      → Maps to: <span className="font-semibold">{firstNameMapping.muslimNames.join(", ")}</span>
                    </p>
                  ) : (profile.settings.currentFirstName ?? "").trim() && (() => {
                    const suggestions = getDidYouMeanSuggestions(profile.settings.currentFirstName ?? "", 3);
                    return suggestions.length > 0 ? (
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                        <span className="text-xs text-muted-foreground">Did you mean:</span>
                        {suggestions.map(({ displayName }) => (
                          <button
                            key={displayName}
                            type="button"
                            onClick={() => updateSettings({ currentFirstName: displayName })}
                            className="text-xs font-medium text-primary hover:underline bg-primary/10 px-2 py-0.5 rounded-full"
                          >
                            {displayName}
                          </button>
                        ))}
                      </div>
                    ) : null;
                  })()}
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Last Name</label>
                  <Input
                    value={profile.settings.currentLastName}
                    onChange={e => updateSettings({ currentLastName: e.target.value })}
                    placeholder="e.g., Smith"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Gender Preference */}
            <div className="bg-card rounded-xl border border-border p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold mb-3">Gender Preference</h3>
              <div className="flex gap-2 flex-wrap">
                {(["all", "male", "female", "unisex"] as const).map(g => (
                  <button
                    key={g}
                    onClick={() => updateSettings({ genderPreference: g })}
                    className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                      profile.settings.genderPreference === g
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {g === "all" ? "No Preference" : g}
                  </button>
                ))}
              </div>
            </div>

            {/* Preferred Meanings */}
            <div className="bg-card rounded-xl border border-border p-5 sm:p-6">
              <h3 className="font-display text-lg font-semibold mb-2">Qualities That Matter to You</h3>
              <p className="text-sm text-muted-foreground mb-4">Select meanings you'd like your name to embody</p>
              <div className="flex gap-2 flex-wrap">
                {meaningKeywords.map(m => (
                  <button
                    key={m}
                    onClick={() => {
                      const current = profile.settings.preferredMeanings;
                      updateSettings({
                        preferredMeanings: current.includes(m)
                          ? current.filter(x => x !== m)
                          : [...current, m],
                      });
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                      profile.settings.preferredMeanings.includes(m)
                        ? "bg-primary text-primary-foreground shadow-glow scale-105"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            {(profile.settings.currentFirstName || profile.settings.preferredMeanings.length > 0) && (
              <div className="bg-primary/5 rounded-xl border border-primary/20 p-5 text-center">
                <p className="text-sm text-muted-foreground mb-3">Ready to discover names based on your preferences?</p>
                <Link
                  to={`/generator${profile.settings.currentFirstName ? `?name=${encodeURIComponent(profile.settings.currentFirstName)}` : ""}`}
                >
                  <Button className="rounded-xl">
                    <Sparkles className="w-4 h-4 mr-2" /> Find My Names <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Layout>
  );
}

/** Drop target section for First/Last name contenders */
function DropSection({
  title,
  targetPosition,
  entries,
  onDrop,
  emptyMessage,
}: {
  title: string;
  targetPosition: NamePosition;
  entries: FavoriteEntry[];
  onDrop: (slug: string, position: "first" | "last" | "undecided") => void;
  emptyMessage: string;
}) {
  const [dragOver, setDragOver] = useState(false);

  return (
    <div
      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={e => {
        e.preventDefault();
        setDragOver(false);
        const slug = e.dataTransfer.getData("text/slug");
        if (slug) onDrop(slug, targetPosition);
      }}
      className={`rounded-xl p-4 transition-colors ${
        dragOver ? "bg-primary/10 border-2 border-dashed border-primary" : "bg-card border border-border"
      }`}
    >
      <h3 className="font-display text-base font-semibold text-foreground mb-2">{title}</h3>
      {entries.length === 0 ? (
        <p className="text-sm text-muted-foreground italic py-2">{emptyMessage}</p>
      ) : (
        <div className="flex gap-1.5 flex-wrap">
          {entries.map(entry => {
            const nameData = findNameBySlug(entry.slug);
            if (!nameData) return null;
            return (
              <Link
                key={entry.slug}
                to={`/name/${entry.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {nameData.name}
                <span className="font-arabic text-xs text-secondary">{nameData.arabic}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
