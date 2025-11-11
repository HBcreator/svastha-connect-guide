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
import SOUKYACenter from "./pages/centers/SOUKYACenter";
import Services from "./pages/Services";
import AyurvedaService from "./pages/services/Ayurveda";
import PanchakarmaService from "./pages/services/Panchakarma";
import YogaMeditationService from "./pages/services/YogaMeditation";
import AyurvedicMassageService from "./pages/services/AyurvedicMassage";
import AyurvedicDietService from "./pages/services/AyurvedicDiet";
import PhysiotherapyService from "./pages/services/Physiotherapy";
import KalariMarmaService from "./pages/services/KalariMarma";
import AyurvedaTreatment from "./pages/treatments/AyurvedaTreatment";
import PanchakarmaTreatment from "./pages/treatments/PanchakarmaTreatment";
import SinusitisTreatment from "./pages/treatments/SinusitisTreatment";
import AutismTreatment from "./pages/treatments/AutismTreatment";
import WeightLossTreatment from "./pages/treatments/WeightLossTreatment";
import MonsoonTreatment from "./pages/treatments/MonsoonTreatment";
import ParkinsonsDiseaseTreatment from "./pages/treatments/ParkinsonsDiseaseTreatment";
import SciaticaTreatment from "./pages/treatments/SciaticaTreatment";
import StrokeTreatment from "./pages/treatments/StrokeTreatment";
import VaricoseUlcer from "./pages/treatments/VaricoseUlcer";
import KneePain from "./pages/treatments/KneePain";
import PostNatalCare from "./pages/treatments/PostNatalCare";
import CervicalSpondylosis from "./pages/treatments/CervicalSpondylosis";
import Psoriasis from "./pages/treatments/Psoriasis";
import LumbarSpondylosis from "./pages/treatments/LumbarSpondylosis";
import GastroesophagealRefluxDisease from "./pages/treatments/GastroesophagealRefluxDisease";
import ArthritisTreatment from "./pages/treatments/ArthritisTreatment";
import DysmenorrheaTreatment from "./pages/treatments/DysmenorrheaTreatment";
import UlcerativeColitisTreatment from "./pages/treatments/UlcerativeColitisTreatment";
import DiscBulgeProtrusion from "./pages/treatments/DiscBulgeProtrusion";
import BackPain from "./pages/treatments/BackPain";
import Stress from "./pages/treatments/Stress";
import Alopecia from "./pages/treatments/Alopecia";

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
          <Route path="/centers/bangalore/soukya" element={<SOUKYACenter />} />
          <Route path="/centers/:city/:centerId" element={<CenterDetail />} />
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
          <Route path="/treatments/ayurveda-treatment" element={<AyurvedaTreatment />} />
          <Route path="/treatments/panchakarma-treatment" element={<PanchakarmaTreatment />} />
          <Route path="/treatments/sinusitis-treatment" element={<SinusitisTreatment />} />
          <Route path="/treatments/autism-treatment" element={<AutismTreatment />} />
          <Route path="/treatments/weight-loss-treatment" element={<WeightLossTreatment />} />
          <Route path="/treatments/monsoon-treatment" element={<MonsoonTreatment />} />
          <Route path="/treatments/parkinsons-disease-treatment" element={<ParkinsonsDiseaseTreatment />} />
          <Route path="/treatments/sciatica-treatment" element={<SciaticaTreatment />} />
          <Route path="/treatments/stroke-treatment" element={<StrokeTreatment />} />
          <Route path="/treatments/varicose-ulcer" element={<VaricoseUlcer />} />
          <Route path="/treatments/knee-pain" element={<KneePain />} />
          <Route path="/treatments/post-natal-care" element={<PostNatalCare />} />
          <Route path="/treatments/cervical-spondylosis" element={<CervicalSpondylosis />} />
          <Route path="/treatments/psoriasis" element={<Psoriasis />} />
          <Route path="/treatments/lumbar-spondylosis" element={<LumbarSpondylosis />} />
          <Route path="/treatments/gastroesophageal-reflux-disease" element={<GastroesophagealRefluxDisease />} />
          <Route path="/treatments/arthritis-treatment" element={<ArthritisTreatment />} />
          <Route path="/treatments/dysmenorrhea-treatment" element={<DysmenorrheaTreatment />} />
          <Route path="/treatments/ulcerative-colitis-treatment" element={<UlcerativeColitisTreatment />} />
          <Route path="/treatments/disc-bulge-protrusion" element={<DiscBulgeProtrusion />} />
          <Route path="/treatments/back-pain" element={<BackPain />} />
          <Route path="/treatments/stress" element={<Stress />} />
          <Route path="/treatments/alopecia" element={<Alopecia />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
