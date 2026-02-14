import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { ProfileProvider } from "@/contexts/ProfileContext";

import Index from "./pages/Index";
import Layout from "./components/Layout";
import { PageErrorBoundary } from "./components/PageErrorBoundary";

// Lazy-load non-critical routes
const NamesPage = lazy(() => import("./pages/NamesPage"));
const NameDetail = lazy(() => import("./pages/NameDetail"));
const GeneratorPage = lazy(() => import("./pages/GeneratorPage"));
const WesternNamesPage = lazy(() => import("./pages/WesternNamesPage"));
const NameMappingDetailPage = lazy(() => import("./pages/NameMappingDetailPage"));
const LegalGuidePage = lazy(() => import("./pages/LegalGuidePage"));
const ContributePage = lazy(() => import("./pages/ContributePage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const DiscoverPage = lazy(() => import("./pages/DiscoverPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const BrandPage = lazy(() => import("./pages/BrandPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageWithFallback({ children }: { children: React.ReactNode }) {
  return (
    <PageErrorBoundary>
      <Suspense
        fallback={
          <Layout>
            <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[50vh]">
              <div className="flex gap-1.5 mb-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-2 w-2 rounded-full bg-primary/60 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Loading...</p>
            </div>
          </Layout>
        }
      >
        {children}
      </Suspense>
    </PageErrorBoundary>
  );
}

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ProfileProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<PageErrorBoundary><Index /></PageErrorBoundary>} />
            <Route
              path="/names"
              element={
                <PageWithFallback>
                  <NamesPage />
                </PageWithFallback>
              }
            />
            <Route
              path="/name/:slug"
              element={
                <PageWithFallback>
                  <NameDetail />
                </PageWithFallback>
              }
            />
            <Route
              path="/generator"
              element={
                <PageWithFallback>
                  <GeneratorPage />
                </PageWithFallback>
              }
            />
            <Route
              path="/western-names"
              element={
                <PageWithFallback>
                  <WesternNamesPage />
                </PageWithFallback>
              }
            />
            {/* Hidden route: individual name mapping detail (e.g. /western-names/an) */}
            <Route
              path="/western-names/:key"
              element={
                <PageWithFallback>
                  <NameMappingDetailPage />
                </PageWithFallback>
              }
            />
            <Route
              path="/legal-guide"
              element={
                <PageWithFallback>
                  <LegalGuidePage />
                </PageWithFallback>
              }
            />
            <Route
              path="/contribute"
              element={
                <PageWithFallback>
                  <ContributePage />
                </PageWithFallback>
              }
            />
            <Route
              path="/terms"
              element={
                <PageWithFallback>
                  <TermsPage />
                </PageWithFallback>
              }
            />
            <Route
              path="/privacy"
              element={
                <PageWithFallback>
                  <PrivacyPage />
                </PageWithFallback>
              }
            />
            <Route
              path="/discover"
              element={
                <PageWithFallback>
                  <DiscoverPage />
                </PageWithFallback>
              }
            />
            <Route
              path="/profile"
              element={
                <PageWithFallback>
                  <ProfilePage />
                </PageWithFallback>
              }
            />
            <Route
              path="/blogs"
              element={
                <PageWithFallback>
                  <BlogsPage />
                </PageWithFallback>
              }
            />
            <Route
              path="/blogs/:slug"
              element={
                <PageWithFallback>
                  <BlogDetailPage />
                </PageWithFallback>
              }
            />
            <Route
              path="/brand"
              element={
                <PageWithFallback>
                  <BrandPage />
                </PageWithFallback>
              }
            />
            <Route
              path="*"
              element={
                <PageWithFallback>
                  <NotFound />
                </PageWithFallback>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ProfileProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
