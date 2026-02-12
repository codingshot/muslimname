import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NamesPage from "./pages/NamesPage";
import NameDetail from "./pages/NameDetail";
import GeneratorPage from "./pages/GeneratorPage";
import LegalGuidePage from "./pages/LegalGuidePage";
import ContributePage from "./pages/ContributePage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/names" element={<NamesPage />} />
          <Route path="/name/:slug" element={<NameDetail />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/legal-guide" element={<LegalGuidePage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
