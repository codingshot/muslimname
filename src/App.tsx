import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { ProfileProvider } from "@/contexts/ProfileContext";

import Index from "./pages/Index";
import Layout from "./components/Layout";

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
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageSuspense({ children }: { children: React.ReactNode }) {
  return (
    <Suspense
      fallback={
        <Layout>
          <div className="container mx-auto px-4 py-16 flex justify-center">
            <div className="animate-pulse text-muted-foreground">Loading...</div>
          </div>
        </Layout>
      }
    >
      {children}
    </Suspense>
  );
}

const App = () => (
  <HelmetProvider>
    <ProfileProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/names"
              element={
                <PageSuspense>
                  <NamesPage />
                </PageSuspense>
              }
            />
            <Route
              path="/name/:slug"
              element={
                <PageSuspense>
                  <NameDetail />
                </PageSuspense>
              }
            />
            <Route
              path="/generator"
              element={
                <PageSuspense>
                  <GeneratorPage />
                </PageSuspense>
              }
            />
            <Route
              path="/western-names"
              element={
                <PageSuspense>
                  <WesternNamesPage />
                </PageSuspense>
              }
            />
            {/* Hidden route: individual name mapping detail (e.g. /western-names/an) */}
            <Route
              path="/western-names/:key"
              element={
                <PageSuspense>
                  <NameMappingDetailPage />
                </PageSuspense>
              }
            />
            <Route
              path="/legal-guide"
              element={
                <PageSuspense>
                  <LegalGuidePage />
                </PageSuspense>
              }
            />
            <Route
              path="/contribute"
              element={
                <PageSuspense>
                  <ContributePage />
                </PageSuspense>
              }
            />
            <Route
              path="/terms"
              element={
                <PageSuspense>
                  <TermsPage />
                </PageSuspense>
              }
            />
            <Route
              path="/privacy"
              element={
                <PageSuspense>
                  <PrivacyPage />
                </PageSuspense>
              }
            />
            <Route
              path="/profile"
              element={
                <PageSuspense>
                  <ProfilePage />
                </PageSuspense>
              }
            />
            <Route
              path="/blogs"
              element={
                <PageSuspense>
                  <BlogsPage />
                </PageSuspense>
              }
            />
            <Route
              path="/blogs/:slug"
              element={
                <PageSuspense>
                  <BlogDetailPage />
                </PageSuspense>
              }
            />
            <Route
              path="*"
              element={
                <PageSuspense>
                  <NotFound />
                </PageSuspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ProfileProvider>
  </HelmetProvider>
);

export default App;
