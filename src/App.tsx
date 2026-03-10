import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Artistes from "./pages/Artistes";
import StudioLayout from "./components/StudioLayout";
import StudioHome from "./pages/studio/StudioHome";
import StudioAbout from "./pages/studio/StudioAbout";
import StudioServices from "./pages/studio/StudioServices";
import StudioContact from "./pages/studio/StudioContact";
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/studio" element={<StudioLayout />}>
            <Route index element={<StudioHome />} />
            <Route path="about" element={<StudioAbout />} />
            <Route path="services" element={<StudioServices />} />
            <Route path="contact" element={<StudioContact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
