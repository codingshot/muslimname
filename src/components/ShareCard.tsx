import { useState, useRef, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Share2, Download, ImageIcon } from "lucide-react";
import { toast } from "sonner";
import html2canvas from "html2canvas";
import { getNameFontClass, NAME_FONT_OPTIONS } from "@/lib/nameFont";
import type { NameDisplayFont } from "@/contexts/ProfileContext";

const DIMENSION_PRESETS = [
  { id: "square", label: "Square (1:1)", w: 1080, h: 1080 },
  { id: "story", label: "Story (9:16)", w: 1080, h: 1920 },
  { id: "post", label: "Post (1.91:1)", w: 1200, h: 630 },
];

interface ShareCardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  arabic?: string;
  meaning?: string;
  isQuranic?: boolean;
  /** Initial font from profile */
  profileFont?: NameDisplayFont;
}

export function ShareCard({
  open,
  onOpenChange,
  name,
  arabic,
  meaning,
  isQuranic,
  profileFont,
}: ShareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [customText, setCustomText] = useState("");
  const [calligraphyFont, setCalligraphyFont] = useState<NameDisplayFont>(profileFont || "default");
  const [showMeaning, setShowMeaning] = useState(true);
  const [showArabic, setShowArabic] = useState(true);
  const [showQuranic, setShowQuranic] = useState(true);
  const [dimension, setDimension] = useState<(typeof DIMENSION_PRESETS)[0]>(DIMENSION_PRESETS[0]);

  const maxPreview = 380;
  const scale = maxPreview / Math.max(dimension.w, dimension.h);
  const previewW = Math.round(dimension.w * scale);
  const previewH = Math.round(dimension.h * scale);

  const exportScale = dimension.w / previewW;

  const handleExport = useCallback(async () => {
    if (!cardRef.current) return;
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: exportScale,
        useCORS: true,
        backgroundColor: "#0f766e",
        logging: false,
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `muslimname-${name.toLowerCase().replace(/\s/g, "-")}.png`;
      link.href = dataUrl;
      link.click();
      toast.success("Image downloaded");
    } catch (err) {
      toast.error("Failed to create image");
      console.error(err);
    }
  }, [name, exportScale]);

  const handleShare = useCallback(async () => {
    if (!cardRef.current || typeof navigator.share !== "function") {
      handleExport();
      return;
    }
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: exportScale,
        useCORS: true,
        backgroundColor: "#0f766e",
        logging: false,
      });
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const file = new File([blob], `muslimname-${name}.png`, { type: "image/png" });
        await navigator.share({
          title: `${name} — Islamic Name`,
          text: customText || `${name} — ${meaning}`,
          files: [file],
        });
        toast.success("Shared successfully");
      }, "image/png");
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        handleExport();
      }
    }
  }, [name, meaning, customText, handleExport, exportScale]);

  const displayText = customText.trim() || name;
  const fontClass = getNameFontClass(calligraphyFont);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5" /> Create Share Card
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Preview */}
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-muted-foreground mb-2">Preview</p>
            <div
              className="rounded-lg overflow-hidden border-2 border-border bg-card shadow-lg flex items-center justify-center"
              style={{ width: previewW, height: previewH, maxWidth: "100%" }}
            >
              <div
                ref={cardRef}
                className="flex flex-col items-center justify-center p-6 text-white flex-1"
                style={{
                  background: "linear-gradient(135deg, #0f766e 0%, #0d5c56 100%)",
                  width: previewW,
                  height: previewH,
                }}
              >
                {showQuranic && isQuranic && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">Quranic</span>
                )}
                <h2
                  className={`${fontClass} text-center font-bold text-white`}
                  style={{
                    fontSize: `${Math.min(48, Math.max(20, 360 / displayText.length))}px`,
                    lineHeight: 1.2,
                  }}
                >
                  {displayText}
                </h2>
                {showArabic && arabic && (
                  <p
                    className={`${fontClass} text-center text-white/95 mt-2`}
                    style={{ fontSize: "1.5rem", direction: "rtl" }}
                  >
                    {arabic}
                  </p>
                )}
                {showMeaning && meaning && (
                  <p className="text-center text-white/80 text-sm mt-3 max-w-[80%]">{meaning}</p>
                )}
                <p className="text-white/60 text-xs mt-4">MuslimName.me</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div>
              <Label className="text-sm">Custom text (e.g. &quot;My new name&quot;)</Label>
              <Input
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={name}
                className="mt-1"
              />
            </div>
            <div>
              <Label className="text-sm">Calligraphy style</Label>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {NAME_FONT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setCalligraphyFont(opt.value)}
                    className={`px-2.5 py-1.5 rounded text-xs font-medium ${
                      calligraphyFont === opt.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-sm">Show on card</Label>
              <div className="flex flex-wrap gap-3 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showMeaning}
                    onChange={(e) => setShowMeaning(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">Meaning</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showArabic}
                    onChange={(e) => setShowArabic(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">Arabic</span>
                </label>
                {isQuranic && (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showQuranic}
                      onChange={(e) => setShowQuranic(e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Quranic badge</span>
                  </label>
                )}
              </div>
            </div>
            <div>
              <Label className="text-sm">Dimensions</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {DIMENSION_PRESETS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDimension(d)}
                    className={`px-3 py-2 rounded text-xs font-medium ${
                      dimension.id === d.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    {d.label}
                    <span className="block text-[10px] opacity-80">{d.w}×{d.h}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button onClick={handleExport} variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" /> Download
              </Button>
              <Button onClick={handleShare} className="flex-1">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
