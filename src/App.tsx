import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./components/AppLayout";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages for performance
const Index = lazy(() => import("./pages/Index"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Artistes = lazy(() => import("./pages/Artistes"));
const StudioLayout = lazy(() => import("./components/StudioLayout"));
const StudioHome = lazy(() => import("./pages/studio/StudioHome"));
const StudioAbout = lazy(() => import("./pages/studio/StudioAbout"));
const StudioServices = lazy(() => import("./pages/studio/StudioServices"));
const StudioContact = lazy(() => import("./pages/studio/StudioContact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={null}>
          <Routes>
            <Route element={<AppLayout />}>
              {/* Music */}
              <Route path="/" element={<Index />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/artistes" element={<Artistes />} />
              {/* Studio */}
              <Route path="/studio" element={<StudioLayout />}>
                <Route index element={<StudioHome />} />
                <Route path="about" element={<StudioAbout />} />
                <Route path="services" element={<StudioServices />} />
                <Route path="contact" element={<StudioContact />} />
              </Route>
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
