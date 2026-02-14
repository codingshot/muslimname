/**
 * Route prefetch helpers. Call on link hover to warm the chunk cache for faster navigation.
 */
export const prefetchNameDetail = () => import("@/pages/NameDetail");
export const prefetchBlogDetail = () => import("@/pages/BlogDetailPage");
export const prefetchNamesPage = () => import("@/pages/NamesPage");
export const prefetchGenerator = () => import("@/pages/GeneratorPage");
export const prefetchDiscover = () => import("@/pages/DiscoverPage");
export const prefetchProfile = () => import("@/pages/ProfilePage");
export const prefetchWesternNames = () => import("@/pages/WesternNamesPage");
export const prefetchLegalGuide = () => import("@/pages/LegalGuidePage");
