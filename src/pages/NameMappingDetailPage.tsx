import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { christianToMuslimNameMapping, getSimilarMappings } from "@/data/nameMapping";
import { getCountryFlag, getCountryName } from "@/lib/country";
import { getFiqhRuling } from "@/data/fiqh";
import { findNameBySlug } from "@/data/names";
import FiqhPanel from "@/components/FiqhPanel";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, ExternalLink, Globe, BookOpen, Link2 } from "lucide-react";
import { MuslimNameHoverCard } from "@/components/MuslimNameHoverCard";
import { useProfile } from "@/hooks/useProfile";

/** Detail page for a single name mapping (Western/source name → Muslim equivalents). Hidden route. */
export default function NameMappingDetailPage() {
  const { key } = useParams<{ key: string }>();
  const { profile } = useProfile();
  const showSources = profile.settings.showMappingSources ?? false;

  const canonicalKey = key?.toLowerCase().trim();
  if (!canonicalKey) return <Navigate to="/western-names" replace />;

  const mapping = christianToMuslimNameMapping[canonicalKey];
  if (!mapping) return <Navigate to="/western-names" replace />;

  const displayName = canonicalKey.charAt(0).toUpperCase() + canonicalKey.slice(1);
  const categoryLabel = mapping.category.replace(/-/g, " ");
  const { bySharedMuslimNames, byCategory } = getSimilarMappings(canonicalKey);
  const quranicMuslimNames = mapping.muslimNames.filter(n => {
    const d = findNameBySlug(n);
    return d && (d.isQuranic || (d.quranicReferences && d.quranicReferences.length > 0));
  });

  const muslimStr = mapping.muslimNames.map(n => findNameBySlug(n)?.name ?? n).join(", ");
  const fiqh = getFiqhRuling(displayName, mapping);
  const seoTitle = `${displayName} → Islamic Equivalent (${muslimStr}) | MuslimName.me`;
  const seoDesc = `${displayName} means "${mapping.meaning}". Islamic equivalents: ${muslimStr}. ${mapping.connection.slice(0, 80)}${mapping.connection.length > 80 ? "…" : ""}`;
  const canonicalUrl = `https://muslimname.me/western-names/${canonicalKey}`;

  return (
    <Layout>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content={`${displayName}, Islamic name, Muslim name, ${muslimStr}, name equivalent, convert name`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="MuslimName.me" />
        <meta property="og:image" content="https://muslimname.me/og-image.png" />
        <meta property="og:image:alt" content={`${displayName} → ${muslimStr} Islamic name equivalent`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ummahbuild" />
        <meta name="twitter:title" content={`${displayName} → ${muslimStr} | MuslimName.me`} />
        <meta name="twitter:description" content={seoDesc} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            name: displayName,
            description: seoDesc,
            url: canonicalUrl,
            alternateName: muslimStr,
            inDefinedTermSet: { "@type": "DefinedTermSet", name: "Islamic Name Mappings", url: "https://muslimname.me/western-names" },
          })}
        </script>
      </Helmet>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link
          to="/western-names"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Name Reference
        </Link>

        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-start justify-between mb-4">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">{displayName}</h1>
            <span className="text-xs text-muted-foreground capitalize px-2 py-1 bg-muted rounded">
              {categoryLabel}
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-2">
            <span className="font-medium text-foreground">Meaning:</span> {mapping.meaning}
          </p>

          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="text-sm text-muted-foreground">Muslim equivalents:</span>
            {mapping.muslimNames.map(name => {
              const nameData = findNameBySlug(name);
              const isQuranic = nameData && (nameData.isQuranic || (nameData.quranicReferences?.length ?? 0) > 0);
              return (
                <span key={name} className="inline-flex items-center gap-1">
                  <MuslimNameHoverCard
                    slug={name}
                    className="font-semibold hover:underline capitalize text-primary"
                    fallbackDisplay={name}
                  />
                  {isQuranic && <BookOpen className="w-3 h-3 text-amber-600 shrink-0" title="In the Quran" />}
                </span>
              );
            })}
          </div>

          {quranicMuslimNames.length > 0 && (
            <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              Quran names: {quranicMuslimNames.map(n => findNameBySlug(n)?.name ?? n).join(", ")}
            </p>
          )}

          <p className="text-sm text-muted-foreground mb-4">{mapping.connection}</p>

          {mapping.originalScript && (
            <p className="text-sm font-mono text-secondary mb-4">Original: {mapping.originalScript}</p>
          )}

          {mapping.popularIn && mapping.popularIn.length > 0 && (
            <p className="text-xs text-muted-foreground mb-4 flex flex-wrap items-center gap-x-1.5 gap-y-1">
              <span>Popular in:</span>
              {mapping.popularIn.map((code, i) => (
                <span key={code} className="inline-flex items-center gap-1">
                  {i > 0 && <span className="text-muted-foreground/50">,</span>}
                  {getCountryFlag(code)} {getCountryName(code)}
                </span>
              ))}
            </p>
          )}

          {/* Islamic fiqh ruling */}
          <div className="mt-4">
            <FiqhPanel name={displayName} fiqh={fiqh} />
          </div>

          {/* Similar names in other cultures */}
          {(bySharedMuslimNames.length > 0 || byCategory.length > 0) && (
            <div className="mt-6 pt-4 border-t border-border space-y-4">
              <h3 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                Similar names in other cultures
              </h3>
              {bySharedMuslimNames.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Share the same Muslim equivalent:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {bySharedMuslimNames.map(([k]) => (
                      <Link
                        key={k}
                        to={`/western-names/${k}`}
                        className="text-xs font-medium text-primary hover:underline bg-primary/5 hover:bg-primary/10 px-2 py-1 rounded-md capitalize"
                      >
                        {k.charAt(0).toUpperCase() + k.slice(1)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {byCategory.length > 0 && (
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Same category ({categoryLabel}):</p>
                  <div className="flex flex-wrap gap-1.5">
                    {byCategory.slice(0, 8).map(([k]) => (
                      <Link
                        key={k}
                        to={`/western-names/${k}`}
                        className="text-xs font-medium text-muted-foreground hover:text-primary hover:underline bg-muted/50 hover:bg-primary/5 px-2 py-1 rounded-md capitalize"
                      >
                        {k.charAt(0).toUpperCase() + k.slice(1)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {showSources && mapping.sources && mapping.sources.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5" /> Sources
              </p>
              <ul className="space-y-1">
                {mapping.sources.map((url, i) => (
                  <li key={i}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {url}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link to={`/generator?name=${encodeURIComponent(displayName)}`} className="mt-6 inline-block">
            <Button className="gap-2">
              <Sparkles className="w-4 h-4" />
              Find Islamic equivalents for {displayName}
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
