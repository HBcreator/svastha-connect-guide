import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import TopCenters from "./pages/TopCenters";
import LocationCenters from "./pages/LocationCenters";
import Treatments from "./pages/Treatments";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CenterDetail from "./pages/CenterDetail";
import Services from "./pages/Services";
import AyurvedaService from "./pages/services/Ayurveda";
import PanchakarmaService from "./pages/services/Panchakarma";
import YogaMeditationService from "./pages/services/YogaMeditation";
import AyurvedicMassageService from "./pages/services/AyurvedicMassage";
import AyurvedicDietService from "./pages/services/AyurvedicDiet";
import PhysiotherapyService from "./pages/services/Physiotherapy";
import KalariMarmaService from "./pages/services/KalariMarma";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/centers" element={<TopCenters />} />
          <Route path="/centers/:location" element={<LocationCenters />} />
          <Route path="/centers/:city/:centerId" element={<CenterDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ayurveda" element={<AyurvedaService />} />
          <Route path="/services/panchakarma" element={<PanchakarmaService />} />
          <Route path="/services/yoga-meditation" element={<YogaMeditationService />} />
          <Route path="/services/ayurvedic-massage" element={<AyurvedicMassageService />} />
          <Route path="/services/ayurvedic-diet" element={<AyurvedicDietService />} />
          <Route path="/services/physiotherapy" element={<PhysiotherapyService />} />
          <Route path="/services/kalari-marma" element={<KalariMarmaService />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
