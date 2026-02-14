import { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Download,
  Moon,
  Sun,
  Copy,
  Palette,
  Type,
  Square,
  ImageIcon,
  FileArchive,
  Search,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import JSZip from "jszip";
import { NAME_FONT_OPTIONS } from "@/lib/nameFont";
import { getNameFontClass } from "@/lib/nameFont";

// Color definitions with hex, rgb, hsl for light and dark
const LIGHT_COLORS = [
  { name: "Background", token: "--background", hsl: "40 20% 98%", hex: "#FAF8F5", rgb: "250 248 245" },
  { name: "Foreground", token: "--foreground", hsl: "210 29% 13%", hex: "#1A2332", rgb: "26 35 50" },
  { name: "Primary", token: "--primary", hsl: "181 82% 25%", hex: "#0F766E", rgb: "15 118 110" },
  { name: "Primary Foreground", token: "--primary-foreground", hsl: "0 0% 100%", hex: "#FFFFFF", rgb: "255 255 255" },
  { name: "Secondary", token: "--secondary", hsl: "42 45% 59%", hex: "#C9A227", rgb: "201 162 39" },
  { name: "Accent", token: "--accent", hsl: "0 100% 71%", hex: "#FF6B6B", rgb: "255 107 107" },
  { name: "Muted", token: "--muted", hsl: "40 20% 94%", hex: "#F0EDE8", rgb: "240 237 232" },
  { name: "Muted Foreground", token: "--muted-foreground", hsl: "210 10% 45%", hex: "#6B7280", rgb: "107 114 128" },
  { name: "Destructive", token: "--destructive", hsl: "0 84% 60%", hex: "#EF4444", rgb: "239 68 68" },
  { name: "Border", token: "--border", hsl: "40 15% 88%", hex: "#E5E1DB", rgb: "229 225 219" },
  { name: "Gold", token: "--gold", hsl: "42 45% 59%", hex: "#C9A227", rgb: "201 162 39" },
  { name: "Coral", token: "--coral", hsl: "0 100% 71%", hex: "#FF6B6B", rgb: "255 107 107" },
  { name: "Teal Dark", token: "--teal-dark", hsl: "181 82% 18%", hex: "#0B5C56", rgb: "11 92 86" },
];

const DARK_COLORS = [
  { name: "Background", token: "--background", hsl: "210 29% 8%", hex: "#0D1219", rgb: "13 18 25" },
  { name: "Foreground", token: "--foreground", hsl: "40 20% 95%", hex: "#F2EFE8", rgb: "242 239 232" },
  { name: "Primary", token: "--primary", hsl: "181 70% 35%", hex: "#2A9D8F", rgb: "42 157 143" },
  { name: "Primary Foreground", token: "--primary-foreground", hsl: "0 0% 100%", hex: "#FFFFFF", rgb: "255 255 255" },
  { name: "Secondary", token: "--secondary", hsl: "42 45% 50%", hex: "#B8860B", rgb: "184 134 11" },
  { name: "Accent", token: "--accent", hsl: "0 80% 65%", hex: "#F08080", rgb: "240 128 128" },
  { name: "Muted", token: "--muted", hsl: "210 20% 18%", hex: "#262D38", rgb: "38 45 56" },
  { name: "Muted Foreground", token: "--muted-foreground", hsl: "210 10% 60%", hex: "#94A3B8", rgb: "148 163 184" },
  { name: "Destructive", token: "--destructive", hsl: "0 63% 31%", hex: "#991B1B", rgb: "153 27 27" },
  { name: "Border", token: "--border", hsl: "210 20% 20%", hex: "#334155", rgb: "51 65 85" },
];

const FONTS = [
  { name: "Display (Playfair Display)", var: "--font-display", usage: "Headings" },
  { name: "Body (Inter)", var: "--font-body", usage: "Body text, UI" },
  { name: "Arabic (Amiri)", var: "--font-arabic", usage: "Arabic script" },
];

const ASSETS = [
  { path: "/favicon.svg", label: "Favicon (SVG)" },
  { path: "/favicon.ico", label: "Favicon (ICO)" },
  { path: "/placeholder.svg", label: "Placeholder" },
];

const META_IMAGES = [
  { url: "https://muslimname.me/og-image.png", label: "OG Image (1200×630)", w: 1200, h: 630 },
];

function ColorSwatch({ color, onCopy }: { color: (typeof LIGHT_COLORS)[0]; onCopy: (text: string) => void }) {
  const copyRow = (value: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy(value);
  };
  return (
    <div className="group rounded-xl overflow-hidden border border-border bg-card shadow-card hover:shadow-card-hover transition-shadow">
      <div className="h-24 sm:h-28" style={{ backgroundColor: color.hex }} />
      <div className="p-3 space-y-1">
        <p className="font-medium text-sm text-foreground">{color.name}</p>
        <div className="space-y-0.5 text-xs text-muted-foreground font-mono">
          <button
            type="button"
            onClick={(e) => copyRow(color.hex, e)}
            className="block w-full text-left hover:text-foreground flex items-center justify-between gap-2 cursor-pointer"
          >
            <span>{color.hex}</span>
            <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 shrink-0" />
          </button>
          <button
            type="button"
            onClick={(e) => copyRow(`rgb(${color.rgb})`, e)}
            className="block w-full text-left hover:text-foreground cursor-pointer"
          >
            RGB: rgb({color.rgb})
          </button>
          <button
            type="button"
            onClick={(e) => copyRow(`hsl(${color.hsl})`, e)}
            className="block w-full text-left hover:text-foreground cursor-pointer"
          >
            HSL: hsl({color.hsl})
          </button>
        </div>
      </div>
    </div>
  );
}

function copyToClipboard(text: string, label: string) {
  navigator.clipboard.writeText(text);
  toast.success(`Copied ${label}`);
}

export default function BrandPage() {
  const { resolvedTheme, setTheme } = useTheme();
  const [downloading, setDownloading] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  const handleDownloadZip = useCallback(async () => {
    setDownloading(true);
    try {
      const zip = new JSZip();
      const brandFolder = zip.folder("muslimname-brand");

      if (!brandFolder) throw new Error("Could not create folder");

      // Brand guide markdown
      const guideMd = `# MuslimName.me Brand Guidelines

## Colors

### Light Mode
${LIGHT_COLORS.map((c) => `- **${c.name}**: \`${c.hex}\` | rgb(${c.rgb}) | hsl(${c.hsl})`).join("\n")}

### Dark Mode
${DARK_COLORS.map((c) => `- **${c.name}**: \`${c.hex}\` | rgb(${c.rgb}) | hsl(${c.hsl})`).join("\n")}

## Typography
- **Display**: Playfair Display (headings)
- **Body**: Inter (UI, body text)
- **Arabic**: Amiri, Noto Naskh Arabic, Scheherazade New, Reem Kufi Fun (name display)

## Button Variants
- default (primary)
- secondary
- destructive
- outline
- ghost
- link

## Button Sizes
- default, sm, lg, icon

## Badge Variants
- default, secondary, destructive, outline

## Assets
- Favicon: /favicon.svg, /favicon.ico
- OG Image: https://muslimname.me/og-image.png (1200×630)

## Meta
- Site: https://muslimname.me
- Twitter: @ummahbuild
- GitHub: codingshot/muslimname
`;
      brandFolder.file("BRAND-GUIDE.md", guideMd);

      // JSON export for programmatic use
      brandFolder.file(
        "colors.json",
        JSON.stringify(
          {
            light: LIGHT_COLORS,
            dark: DARK_COLORS,
          },
          null,
          2
        )
      );

      // Fetch and add assets
      for (const asset of ASSETS) {
        try {
          const res = await fetch(asset.path);
          if (res.ok) {
            const blob = await res.blob();
            brandFolder.file(asset.path.replace(/^\//, ""), blob);
          }
        } catch {
          // Skip if fetch fails (e.g. 404)
        }
      }

      // Add meta image URL reference and try to fetch OG image
      brandFolder.file(
        "meta-images.txt",
        META_IMAGES.map((m) => `${m.label}: ${m.url} (${m.w}×${m.h})`).join("\n")
      );
      for (const img of META_IMAGES) {
        try {
          const res = await fetch(img.url);
          if (res.ok) {
            const blob = await res.blob();
            brandFolder.file(`og-image-${img.w}x${img.h}.png`, blob);
          }
        } catch {
          // CORS may block; URL is in meta-images.txt
        }
      }

      const content = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(content);
      link.download = "muslimname-brand-assets.zip";
      link.click();
      URL.revokeObjectURL(link.href);
      toast.success("Brand kit downloaded");
    } catch (err) {
      toast.error("Failed to create zip");
      console.error(err);
    } finally {
      setDownloading(false);
    }
  }, []);

  const onCopyColor = useCallback((text: string) => {
    copyToClipboard(text, "to clipboard");
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Brand Kit | MuslimName.me</title>
        <meta name="description" content="MuslimName.me brand guidelines, colors, fonts, logos, and downloadable assets." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        {/* Moon-tone hero */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 geometric-pattern opacity-50" />
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2"
            style={{ background: "radial-gradient(circle, hsl(181 82% 35%) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-15 blur-3xl translate-y-1/2 -translate-x-1/2"
            style={{ background: "radial-gradient(circle, hsl(42 45% 59%) 0%, transparent 70%)" }}
          />
          <div className="container mx-auto px-4 py-16 sm:py-24 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-6">
                <Moon className="w-4 h-4" /> Brand Kit
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Muslim<span className="text-primary">Name</span>.me
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Logos, colors, fonts, and components for marketing and design consistency.
              </p>
              <Button size="lg" onClick={handleDownloadZip} disabled={downloading} className="gap-2">
                <FileArchive className="w-5 h-5" />
                {downloading ? "Creating..." : "Download All (ZIP)"}
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-20 space-y-20">
          {/* Theme toggle */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="gap-2"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              View {isDark ? "Light" : "Dark"} Mode
            </Button>
          </div>

          {/* Colors */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Palette className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Colors</h2>
              <Badge variant="secondary">{isDark ? "Dark" : "Light"} Mode</Badge>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {(isDark ? DARK_COLORS : LIGHT_COLORS).map((color) => (
                <ColorSwatch key={color.name + color.hex} color={color} onCopy={onCopyColor} />
              ))}
            </div>
          </section>

          {/* Typography */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Type className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Typography</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 space-y-8">
              {FONTS.map((f) => (
                <div key={f.name} className="border-b border-border last:border-0 pb-6 last:pb-0">
                  <p className="text-sm text-muted-foreground mb-1">{f.usage}</p>
                  <p className="text-2xl" style={{ fontFamily: `var(${f.var})` }}>
                    {f.name}
                  </p>
                  <p className="text-3xl mt-2 text-primary" style={{ fontFamily: `var(${f.var})` }}>
                    The quick brown fox
                  </p>
                </div>
              ))}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Name Display Fonts (calligraphy)</p>
                <div className="flex flex-wrap gap-6 mt-4">
                  {NAME_FONT_OPTIONS.map((opt) => (
                    <div key={opt.value} className="text-center">
                      <p className={`${getNameFontClass(opt.value)} text-2xl text-primary`} style={{ direction: "rtl" }}>
                        محمد
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">{opt.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Square className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Buttons</h2>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 space-y-8">
              <div>
                <p className="text-sm text-muted-foreground mb-4">Variants</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-4">Sizes</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Moon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Badges</h2>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </section>

          {/* Inputs */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Form Elements</h2>
            <div className="max-w-md space-y-4">
              <Input placeholder="Placeholder text" />
              <Input placeholder="Disabled" disabled />
            </div>
          </section>

          {/* Contrast & Visibility (test dark mode search and text) */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Contrast & Visibility</h2>
              <Badge variant="secondary">{isDark ? "Dark" : "Light"} Mode</Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Test text visibility in both themes. Toggle dark mode above and verify all samples remain readable.
            </p>
            <div className="rounded-xl border border-border bg-card p-6 space-y-8">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Text samples (foreground on background)</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border bg-background p-4">
                    <p className="text-foreground font-medium">Primary text (text-foreground)</p>
                    <p className="text-muted-foreground text-sm mt-1">Muted text (text-muted-foreground)</p>
                    <p className="text-primary text-sm mt-1">Primary color link</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted p-4">
                    <p className="text-foreground font-medium">Text on muted bg</p>
                    <p className="text-muted-foreground text-sm mt-1">Muted on muted</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Search input (must show typed text clearly)</p>
                <div className="flex items-center gap-2 rounded-lg border border-input bg-muted/50 px-3 py-2 focus-within:bg-background focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20 max-w-sm">
                  <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <input
                    type="search"
                    data-search-input
                    placeholder="Search names"
                    className="flex-1 min-w-0 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                    aria-label="Test search visibility"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Type here — text should stay visible in light and dark mode.
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Primary button / card text</p>
                <div className="flex flex-wrap gap-3">
                  <Button>Primary button</Button>
                  <div className="rounded-lg bg-primary px-4 py-2">
                    <span className="text-primary-foreground font-medium">Primary foreground on primary</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logos & Assets */}
          <section>
            <div className="flex items-center gap-2 mb-6">
              <ImageIcon className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-foreground">Logos & Assets</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col items-center">
                <img src="/favicon.svg" alt="Favicon" className="w-20 h-20 mb-4" />
                <p className="font-medium text-foreground">Favicon</p>
                <a
                  href="/favicon.svg"
                  download
                  className="text-sm text-primary hover:underline mt-1"
                >
                  Download SVG
                </a>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-display text-2xl font-bold text-foreground">
                    Muslim<span className="text-primary">Name</span>.me
                  </span>
                </div>
                <p className="font-medium text-foreground">Wordmark</p>
              </div>
              {ASSETS.slice(1).map((a) => (
                <div
                  key={a.path}
                  className="rounded-xl border border-border bg-card p-6 flex flex-col items-center"
                >
                  <p className="font-medium text-foreground">{a.label}</p>
                  <a href={a.path} download className="text-sm text-primary hover:underline mt-2">
                    Download
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Meta / OG Images */}
          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Meta / Social Images</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {META_IMAGES.map((img) => (
                <div key={img.label} className="rounded-xl border border-border bg-card overflow-hidden">
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: 280 }}
                  />
                  <div className="p-4">
                    <p className="font-medium text-foreground">{img.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{img.w} × {img.h}px</p>
                    <a
                      href={img.url}
                      download={`og-image-${img.w}x${img.h}.png`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-primary hover:underline mt-2 inline-block"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="text-center py-12">
            <Button size="lg" onClick={handleDownloadZip} disabled={downloading} className="gap-2">
              <Download className="w-5 h-5" />
              {downloading ? "Creating ZIP..." : "Download All Assets"}
            </Button>
          </section>
        </div>
      </div>
    </Layout>
  );
}
