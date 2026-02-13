import { Share2, Copy, Check, Send } from "lucide-react";
import { useState, useCallback } from "react";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BASE_URL = "https://muslimname.me";

interface ShareNameProps {
  name: string;
  slug: string;
  meaning: string;
  arabic?: string;
  className?: string;
  /** Compact dropdown-only, or expanded inline buttons */
  variant?: "dropdown" | "inline";
}

function buildShareText(name: string, meaning: string, arabic?: string): string {
  return arabic ? `${name} (${arabic}) — ${meaning}` : `${name} — ${meaning}`;
}

export function ShareName({ name, slug, meaning, arabic, className, variant = "dropdown" }: ShareNameProps) {
  const [copied, setCopied] = useState<"link" | "text" | false>(false);

  const url = `${BASE_URL}/name/${slug}`;
  const shareText = buildShareText(name, meaning, arabic);
  const shareTextWithUrl = `${shareText} — MuslimName.me ${url}`;
  const tweetText = (shareText + " " + url).slice(0, 275); // leave room for URL

  const handleCopy = useCallback(async (withText: boolean) => {
    const toCopy = withText ? shareTextWithUrl : url;
    try {
      await navigator.clipboard.writeText(toCopy);
      setCopied(withText ? "text" : "link");
      toast.success(withText ? "Message and link copied" : "Link copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  }, [url, shareTextWithUrl]);

  const handleNativeShare = useCallback(async () => {
    if (typeof navigator.share !== "function") return false;
    try {
      await navigator.share({
        title: `${name} — Islamic Name`,
        text: shareText,
        url,
      });
      toast.success("Shared successfully");
      return true;
    } catch (err) {
      if ((err as Error).name !== "AbortError") toast.error("Failed to share");
      return false;
    }
  }, [name, shareText, url]);

  const openShare = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareTextWithUrl)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const canNativeShare = typeof navigator !== "undefined" && typeof navigator.share === "function";

  const shareButtons = (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        type="button"
        onClick={() => handleCopy(false)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
        aria-label="Copy link"
      >
        {copied === "link" ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
        Copy link
      </button>
      <button
        type="button"
        onClick={() => handleCopy(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
        aria-label="Copy with message"
      >
        {copied === "text" ? <Check className="w-4 h-4 text-primary" /> : <Send className="w-4 h-4" />}
        Copy message
      </button>
      {canNativeShare && (
        <button
          type="button"
          onClick={handleNativeShare}
          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-colors"
          aria-label="Share"
        >
          <Share2 className="w-4 h-4" />
          Share
        </button>
      )}
      <button
        type="button"
        onClick={() => openShare(twitterUrl)}
        className="p-2 rounded-lg bg-[#000] hover:bg-[#1a1a1a] text-white transition-colors"
        aria-label="Share on X"
        title="Share on X"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </button>
      <button
        type="button"
        onClick={() => openShare(facebookUrl)}
        className="p-2 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] text-white transition-colors"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </button>
      <button
        type="button"
        onClick={() => openShare(whatsappUrl)}
        className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white transition-colors"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </button>
      <button
        type="button"
        onClick={() => openShare(telegramUrl)}
        className="p-2 rounded-lg bg-[#0088cc] hover:bg-[#007ab8] text-white transition-colors"
        aria-label="Share on Telegram"
        title="Share on Telegram"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
      </button>
      <button
        type="button"
        onClick={() => openShare(linkedInUrl)}
        className="p-2 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white transition-colors"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </button>
    </div>
  );

  if (variant === "inline") {
    return <div className={className}>{shareButtons}</div>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all ${className ?? ""}`}
          aria-label="Share name"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Share this name</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleCopy(false)} className="cursor-pointer">
          {copied === "link" ? <Check className="w-4 h-4 mr-2 text-primary" /> : <Copy className="w-4 h-4 mr-2" />}
          Copy link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleCopy(true)} className="cursor-pointer">
          {copied === "text" ? <Check className="w-4 h-4 mr-2 text-primary" /> : <Send className="w-4 h-4 mr-2" />}
          Copy with message
        </DropdownMenuItem>
        {canNativeShare && (
          <DropdownMenuItem onClick={handleNativeShare} className="cursor-pointer">
            <Share2 className="w-4 h-4 mr-2" />
            Share via…
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => openShare(twitterUrl)} className="cursor-pointer">
          <span className="mr-2 w-4 text-center font-bold">𝕏</span>
          X (Twitter)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => openShare(facebookUrl)} className="cursor-pointer">
          <span className="mr-2 w-4 text-center text-[#1877F2] font-bold">f</span>
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => openShare(whatsappUrl)} className="cursor-pointer">
          <span className="mr-2 text-green-600 font-bold">Wa</span>
          WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => openShare(telegramUrl)} className="cursor-pointer">
          <span className="mr-2 text-[#0088cc] font-bold">Telegram</span>
          Telegram
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => openShare(linkedInUrl)} className="cursor-pointer">
          <span className="mr-2 text-[#0A66C2] font-bold">in</span>
          LinkedIn
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
