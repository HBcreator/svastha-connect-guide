import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import TopCenters from "./pages/TopCenters";
import LocationCenters from "./pages/LocationCenters";
import Treatments from "./pages/Treatments";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CenterDetail from "./pages/CenterDetail";
import SOUKYACenter from "./pages/centers/SOUKYACenter";
import Somatheeram from "./pages/centers/Somatheeram";
import Veda5Center from "./pages/centers/Veda5Center";
import KairaliHeritage from "./pages/centers/KairaliHeritage";
import AgniAyurvedicVillage from "./pages/centers/AgniAyurvedicVillage";
import DheemahiKumarakom from "./pages/centers/DheemahiKumarakom";
import KumarakomLakeResort from "./pages/centers/KumarakomLakeResort";
import NamasteDwaar from "./pages/centers/namastedwaar";
import KairaliHealingVillage from "./pages/centers/KairaliHealingVillage";
import NagarjunaAyurvedaCentre from "./pages/centers/NagarjunaAyurvedaCentre";
import SanjeevanamAyurvedaHospital from "./pages/centers/SanjeevanamAyurvedaHospital";
import BackToRoots from "./pages/centers/BackToRoots";
import DhathriAyurvedicHospital from "./pages/centers/DhathriAyurvedicHospital";
import KrishnenduAyurvedaHospital from "./pages/centers/KrishnenduAyurvedaHospital";
import AyurmanaCenter from "./pages/centers/AyurmanaCenter";
import ChamundiHillPalace from "./pages/centers/ChamundiHillPalace";
import AthreyaAyurvedicCentre from "./pages/centers/AthreyaAyurvedicCentre";
import AyurBethaniyaAyurvedaHospital from "./pages/centers/AyurBethaniyaAyurvedaHospital";
import AyurvedaGram from "./pages/centers/AyurvedaGram";
import AnandaInTheHimalayas from "./pages/centers/AnandaInTheHimalayas";
import YanCureYogaRetreat from "./pages/centers/YanCureYogaRetreat";
import SoulVacationResort from "./pages/centers/SoulVacationResort";
import SWANYogaRetreat from "./pages/centers/SWANYogaRetreat";
import HimVeda from "./pages/centers/HimVeda";
import AyuskamaAyurveda from "./pages/centers/AyuskamaAyurveda";
import AyurSomaAyurvedaRoyalRetreat from "./pages/centers/AyurSomaAyurvedaRoyalRetreat";
import AyushiAyurvedicRetreat from "./pages/centers/AyushiAyurvedicRetreat";
import SitaramMountainRetreat from "./pages/centers/SitaramMountainRetreat";
import AkantaAyurvedaYogaResort from "./pages/centers/AkantaAyurvedaYogaResort";
import IndusValleyAyurvedicCentre from "./pages/centers/IndusValleyAyurvedicCentre";
import ShathayuAyurvedaYogaRetreat from "./pages/centers/ShathayuAyurvedaYogaRetreat";
import ShreyasYogaRetreat from "./pages/centers/ShreyasYogaRetreat";
import NaadWellness from "./pages/centers/NaadWellness";
import FazlaniNaturesNest from "./pages/centers/FazlaniNaturesNest";
import AtmantanWellnessResort from "./pages/centers/AtmantanWellnessResort";
import DharanaAtShillim from "./pages/centers/DharanaAtShillim";
import ToyamByOrchidHotels from "./pages/centers/ToyamByOrchidHotels";
import VivedaWellnessVillage from "./pages/centers/VivedaWellnessVillage";
import TheImperialSpaAndWellness from "./pages/centers/TheImperialSpaAndWellness";
import SandhyaHotSpringHealthCare from "./pages/centers/SandhyaHotSpringHealthCare";
import AshiyanaYogaRetreat from "./pages/centers/AshiyanaYogaRetreat";
import MercureGoaDevaayaResort from "./pages/centers/MercureGoaDevaayaResort";
import NalandaRetreatGoa from "./pages/centers/NalandaRetreatGoa";
import ITCGrandBharat from "./pages/centers/ITCGrandBharat";
import NiraamayaRetreatsSuryaSamudra from "./pages/centers/NiraamayaRetreatsSuryaSamudra";
import AmanbaghHeritageWellnessRetreat from "./pages/centers/AmanbaghHeritageWellnessRetreat";
import KalariKovilakomPalaceForAyurveda from "./pages/centers/KalariKovilakomPalaceForAyurveda";
import CarnoustieAyurvedaWellnessResort from "./pages/centers/CarnoustieAyurvedaWellnessResort";
import TheNattikaBeachResort from "./pages/centers/TheNattikaBeachResort";
import SitaramBeachRetreat from "./pages/centers/SitaramBeachRetreat";
import IdealAyurvedicResort from "./pages/centers/IdealAyurvedicResort";
import ModiYogaRetreat from "./pages/centers/ModiYogaRetreat";
import SriSriAyurvedaHospital from "./pages/centers/SriSriAyurvedaHospital";
import SouthIndiaCenters from "./pages/SouthIndiaCenters";
import KeralaCenters from "./pages/KeralaCenters";
import GoaCenters from "./pages/GoaCenters";
import Services from "./pages/Services";
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
import HimalayasRishikeshUttarakhandNorthEastCenters from "./pages/HimalayasRishikeshUttarakhandNorthEastCenters";
import DelhiNorthIndiaRegionCenters from "./pages/DelhiNorthIndiaRegionCenters";
import MumbaiPuneRajasthanWestIndiaCenters from "./pages/MumbaiPuneRajasthanWestIndiaCenters";
import PanchakarmaDetox from "./pages/programs/PanchakarmaDetox";
import PanchakarmaDetox21Day from "./pages/programs/PanchakarmaDetox21Day";
import PanchakarmaHealing28Day from "./pages/programs/PanchakarmaHealing28Day";
import DiseaseSpecific from "./pages/programs/DiseaseSpecific";
import OsteoarthritisTreatment from "./pages/programs/OsteoarthritisTreatment";
import SciaticaTreatmentProgram from "./pages/programs/SciaticaTreatment";
import AyurvedicWeightLossProgramIndia from "./pages/programs/AyurvedicWeightLossProgramIndia";
import LifestyleAndWellness from "./pages/programs/LifestyleAndWellness";
import AntiAgingAyurvedaProgramIndia from "./pages/programs/AntiAgingAyurvedaProgramIndia";
import RheumatoidArthritis from "./pages/programs/RheumatoidArthritis";
import PsoriasisTreatmentProgram from "./pages/programs/PsoriasisTreatmentProgram";
import MigraineTreatment from "./pages/programs/MigraineTreatment";
import CervicalSpondylosisProgram from "./pages/programs/CervicalSpondylosisProgram";
import StressManagementAyurvedaRetreat from "./pages/programs/StressManagementAyurvedaRetreat";
import BurnoutRecoveryProgram from "./pages/programs/BurnoutRecoveryProgram";
import ImmunityBoostingDetox from "./pages/programs/ImmunityBoostingDetox";
import BeautyAndRejuvenation from "./pages/programs/BeautyAndRejuvenation";
import SkinRejuvenation from "./pages/programs/SkinRejuvenation";
import HairLoss from "./pages/programs/HairLoss";
import AyurvedicBeautyDetoxIndia from "./pages/programs/AyurvedicBeautyDetoxIndia";
import IntegratedRetreat from "./pages/programs/IntegratedRetreat";
import AyurvedaYogaRetreat from "./pages/programs/AyurvedaYogaRetreat";
import AyurvedaDigitalDetox from "./pages/programs/AyurvedaDigitalDetox";
import TouchBodyworkTherapies from "./pages/services/TouchBodyworkTherapies";
import EnergyAndSpiritualHealing from "./pages/services/EnergyAndSpiritualHealing";
import MindBodyInterventions from "./pages/services/MindBodyInterventions";
import BiologicalNaturalTherapies from "./pages/services/BiologicalNaturalTherapies";
import SpecializedAlternativeMedicalSystems from "./pages/services/SpecializedAlternativeMedicalSystems";
import Ayurveda from "./pages/services/Ayurveda";
import Panchakarma from "./pages/services/Panchakarma";
import YogaMeditation from "./pages/services/YogaMeditation";
import AyurvedicMassage from "./pages/services/AyurvedicMassage";
import AyurvedicDiet from "./pages/services/AyurvedicDiet";
import Physiotherapy from "./pages/services/Physiotherapy";
import KalariMarma from "./pages/services/KalariMarma";

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
          <Route path="/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india" element={<SouthIndiaCenters />} />
          <Route path="/top-10-ayurvedic-centers-hospitals-bangalore" element={<Navigate to="/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india" replace />} />
          <Route path="/centers/bangalore-south-india" element={<Navigate to="/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india" replace />} />
          <Route path="/centers/bangalore-hyderabad-chennai-south-india-ayurvedic-centers-and-hospitals" element={<Navigate to="/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india" replace />} />
          <Route path="/centers/south-india" element={<SouthIndiaCenters />} />
          <Route path="/top-10-ayurvedic-centers-hospitals-himalayas-rishikesh-uttarakhand-north-east-india" element={<HimalayasRishikeshUttarakhandNorthEastCenters />} />
          <Route path="/himalayas-rishikesh-uttarakhand-north-east-ayurvedic-centers-and-hospitals" element={<Navigate to="/top-10-ayurvedic-centers-hospitals-himalayas-rishikesh-uttarakhand-north-east-india" replace />} />
          <Route path="/top-11-ayurvedic-centers-hospitals-delhi-ncr-north-india" element={<DelhiNorthIndiaRegionCenters />} />
          <Route path="/delhi-and-north-india-region-ayurvedic-centers-and-hospitals" element={<Navigate to="/top-11-ayurvedic-centers-hospitals-delhi-ncr-north-india" replace />} />
          <Route path="/top-15-ayurvedic-centers-hospitals-mumbai-pune-nashik-west-india" element={<MumbaiPuneRajasthanWestIndiaCenters />} />
          <Route path="/mumbai-pune-nashik-west-india-ayurvedic-centers-and-hospitals" element={<Navigate to="/top-15-ayurvedic-centers-hospitals-mumbai-pune-nashik-west-india" replace />} />
          <Route path="/top-12-ayurvedic-centers-hospitals-kerala-india" element={<KeralaCenters />} />
          <Route path="/top-10-ayurvedic-centers-hospitals-kerala" element={<Navigate to="/top-12-ayurvedic-centers-hospitals-kerala-india" replace />} />
          <Route path="/kerala-ayurvedic-centers-and-hospitals" element={<Navigate to="/top-12-ayurvedic-centers-hospitals-kerala-india" replace />} />
          
          <Route path="/top-15-ayurvedic-centers-hospitals-goa-india" element={<GoaCenters />} />
          <Route path="/top-10-ayurvedic-centers-hospitals-goa" element={<Navigate to="/top-15-ayurvedic-centers-hospitals-goa-india" replace />} />
          <Route path="/goa-ayurvedic-centers-and-hospitals" element={<Navigate to="/top-15-ayurvedic-centers-hospitals-goa-india" replace />} />
          <Route path="/centers/:location" element={<LocationCenters />} />
          <Route path="/centers/soukya-international-holistic-health-centre-bangalore-india" element={<SOUKYACenter />} />
          <Route path="/centers/ayurvedagram-heritage-wellness-centre-bangalore-india" element={<AyurvedaGram />} />
          <Route path="/centers/ananda-in-the-himalayas-uttarakhand-india" element={<AnandaInTheHimalayas />} />
          <Route path="/centers/yan-cure-yoga-retreat-and-ayurveda-centre-rishikesh-india" element={<YanCureYogaRetreat />} />
          <Route path="/centers/soul-vacation-resort-spa-goa-india" element={<SoulVacationResort />} />
          <Route path="/centers/swan-yoga-retreat-goa-india" element={<SWANYogaRetreat />} />
          <Route path="/centers/mercure-goa-devaaya-retreat-goa-india" element={<MercureGoaDevaayaResort />} />
          <Route path="/centers/ashiyana-yoga-retreat-village-goa-india" element={<AshiyanaYogaRetreat />} />
          <Route path="/centers/nalanda-retreat-goa-india" element={<NalandaRetreatGoa />} />
          <Route path="/centers/rishikesh/modi-yoga-retreat" element={<ModiYogaRetreat />} />
          <Route path="/centers/sri-sri-ayurveda-hospital-bangalore-india" element={<SriSriAyurvedaHospital />} />
          <Route path="/centers/itc-grand-bharat-wellness-retreat-gurugram-delhi-india" element={<ITCGrandBharat />} />
          <Route path="/centers/kerala/niraamaya-retreats-surya-samudra" element={<NiraamayaRetreatsSuryaSamudra />} />
          <Route path="/centers/amanbagh-heritage-wellness-retreat-rajasthan-india" element={<AmanbaghHeritageWellnessRetreat />} />
          <Route path="/centers/dharamshala/himveda" element={<HimVeda />} />
          <Route path="/centers/kerala/kalari-kovilakom" element={<KalariKovilakomPalaceForAyurveda />} />
          <Route path="/centers/kerala/carnoustie-ayurveda-wellness-resort" element={<CarnoustieAyurvedaWellnessResort />} />
          <Route path="/centers/kerala/the-nattika-beach-resort" element={<TheNattikaBeachResort />} />
          <Route path="/centers/kerala/sitaram-beach-retreat" element={<SitaramBeachRetreat />} />
          <Route path="/centers/kerala/ideal-ayurvedic-resort" element={<IdealAyurvedicResort />} />
          <Route path="/centers/bangalore/soukya" element={<Navigate to="/centers/soukya-international-holistic-health-centre-bangalore-india" replace />} />
          <Route path="/centers/:city/:centerId" element={<CenterDetail />} />
          <Route path="/ayurveda-treatments" element={<Treatments />} />
          <Route path="/treatments" element={<Navigate to="/ayurveda-treatments" replace />} />
          <Route path="/ayurvedic-treatments" element={<Navigate to="/ayurveda-treatments" replace />} />
          <Route path="/ayurveda-treatments/ayurveda-treatment-in-india" element={<AyurvedaTreatment />} />
          <Route path="/ayurveda-treatments/ayurvedic-therapy-in-india" element={<Navigate to="/ayurveda-treatments/ayurveda-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/ayurvedic-therapy-in-india" element={<Navigate to="/ayurveda-treatments/ayurveda-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/panchakarma-treatment-in-india" element={<PanchakarmaTreatment />} />
          <Route path="/ayurveda-treatments/panchakarma-therapy-in-india" element={<Navigate to="/ayurveda-treatments/panchakarma-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/panchakarma-therapy-in-india" element={<Navigate to="/ayurveda-treatments/panchakarma-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/panchakarma" element={<Navigate to="/ayurveda-treatments/panchakarma-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/sinusitis-treatment-in-india" element={<SinusitisTreatment />} />
          <Route path="/ayurveda-treatments/sinusitis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/sinusitis-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/sinusitis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/sinusitis-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/autism-treatment-in-india" element={<AutismTreatment />} />
          <Route path="/ayurveda-treatments/autism-therapy-in-india" element={<Navigate to="/ayurveda-treatments/autism-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/autism-therapy-in-india" element={<Navigate to="/ayurveda-treatments/autism-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/weight-loss-treatment-in-india" element={<WeightLossTreatment />} />
          <Route path="/ayurveda-treatments/weight-loss-therapy-in-india" element={<Navigate to="/ayurveda-treatments/weight-loss-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/weight-loss-therapy-in-india" element={<Navigate to="/ayurveda-treatments/weight-loss-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/monsoon-treatment-in-india" element={<MonsoonTreatment />} />
          <Route path="/ayurveda-treatments/monsoon-therapy-in-india" element={<Navigate to="/ayurveda-treatments/monsoon-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/monsoon-therapy-in-india" element={<Navigate to="/ayurveda-treatments/monsoon-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/parkinsons-disease-treatment-in-india" element={<ParkinsonsDiseaseTreatment />} />
          <Route path="/ayurveda-treatments/parkinsons-disease-therapy-in-india" element={<Navigate to="/ayurveda-treatments/parkinsons-disease-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/parkinsons-disease-therapy-in-india" element={<Navigate to="/ayurveda-treatments/parkinsons-disease-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/sciatica-treatment-in-india" element={<SciaticaTreatment />} />
          <Route path="/ayurveda-treatments/sciatica-therapy-in-india" element={<Navigate to="/ayurveda-treatments/sciatica-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/sciatica-therapy-in-india" element={<Navigate to="/ayurveda-treatments/sciatica-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/stroke-treatment-in-india" element={<StrokeTreatment />} />
          <Route path="/ayurveda-treatments/stroke-therapy-in-india" element={<Navigate to="/ayurveda-treatments/stroke-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/stroke-therapy-in-india" element={<Navigate to="/ayurveda-treatments/stroke-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/varicose-ulcer-treatment-in-india" element={<VaricoseUlcer />} />
          <Route path="/ayurveda-treatments/varicose-ulcer-therapy-in-india" element={<Navigate to="/ayurveda-treatments/varicose-ulcer-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/varicose-ulcer-therapy-in-india" element={<Navigate to="/ayurveda-treatments/varicose-ulcer-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/knee-pain-treatment-in-india" element={<KneePain />} />
          <Route path="/ayurveda-treatments/knee-pain-therapy-in-india" element={<Navigate to="/ayurveda-treatments/knee-pain-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/knee-pain-therapy-in-india" element={<Navigate to="/ayurveda-treatments/knee-pain-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/post-natal-treatment-in-india" element={<PostNatalCare />} />
          <Route path="/ayurveda-treatments/post-natal-therapy-in-india" element={<Navigate to="/ayurveda-treatments/post-natal-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/post-natal-therapy-in-india" element={<Navigate to="/ayurveda-treatments/post-natal-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/cervical-spondylosis-treatment-in-india" element={<CervicalSpondylosis />} />
          <Route path="/ayurveda-treatments/cervical-spondylosis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/cervical-spondylosis-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/cervical-spondylosis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/cervical-spondylosis-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/psoriasis-treatment-in-india" element={<Psoriasis />} />
          <Route path="/ayurveda-treatments/psoriasis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/psoriasis-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/psoriasis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/psoriasis-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/lumbar-spondylosis-treatment-in-india" element={<LumbarSpondylosis />} />
          <Route path="/ayurveda-treatments/lumbar-spondylosis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/lumbar-spondylosis-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/lumbar-spondylosis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/lumbar-spondylosis-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/gastroesophageal-reflux-disease-treatment-in-india" element={<GastroesophagealRefluxDisease />} />
          <Route path="/ayurveda-treatments/gastroesophageal-reflux-disease-therapy-in-india" element={<Navigate to="/ayurveda-treatments/gastroesophageal-reflux-disease-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/gastroesophageal-reflux-disease-therapy-in-india" element={<Navigate to="/ayurveda-treatments/gastroesophageal-reflux-disease-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/arthritis-treatment-in-india" element={<ArthritisTreatment />} />
          <Route path="/ayurveda-treatments/arthritis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/arthritis-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/arthritis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/arthritis-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/dysmenorrhea-treatment-in-india" element={<DysmenorrheaTreatment />} />
          <Route path="/ayurveda-treatments/dysmenorrhea-therapy-in-india" element={<Navigate to="/ayurveda-treatments/dysmenorrhea-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/dysmenorrhea-therapy-in-india" element={<Navigate to="/ayurveda-treatments/dysmenorrhea-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/ulcerative-colitis-treatment-in-india" element={<UlcerativeColitisTreatment />} />
          <Route path="/ayurveda-treatments/ulcerative-colitis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/ulcerative-colitis-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/ulcerative-colitis-therapy-in-india" element={<Navigate to="/ayurveda-treatments/ulcerative-colitis-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/disc-bulge-protrusion-treatment-in-india" element={<DiscBulgeProtrusion />} />
          <Route path="/ayurveda-treatments/disc-bulge-protrusion-therapy-in-india" element={<Navigate to="/ayurveda-treatments/disc-bulge-protrusion-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/disc-bulge-protrusion-therapy-in-india" element={<Navigate to="/ayurveda-treatments/disc-bulge-protrusion-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/back-pain-treatment-in-india" element={<BackPain />} />
          <Route path="/ayurveda-treatments/back-pain-therapy-in-india" element={<Navigate to="/ayurveda-treatments/back-pain-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/back-pain-therapy-in-india" element={<Navigate to="/ayurveda-treatments/back-pain-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/stress-treatment-in-india" element={<Stress />} />
          <Route path="/ayurveda-treatments/stress-therapy-in-india" element={<Navigate to="/ayurveda-treatments/stress-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/stress-therapy-in-india" element={<Navigate to="/ayurveda-treatments/stress-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/alopecia-treatment-in-india" element={<Alopecia />} />
          <Route path="/ayurveda-treatments/alopecia-therapy-in-india" element={<Navigate to="/ayurveda-treatments/alopecia-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/alopecia-therapy-in-india" element={<Navigate to="/ayurveda-treatments/alopecia-treatment-in-india" replace />} />
          
          <Route path="/ayurveda-treatments/:id" element={<AyurvedaTreatment />} />
          <Route path="/ayurvedic-treatments/:id" element={<Navigate to="/ayurveda-treatments/:id" replace />} />
          
          <Route path="/holistic-healing/ayurveda-ancient-wisdom-for-modern-wellness-in-india" element={<Ayurveda />} />
          <Route path="/holistic-healing" element={<Navigate to="/holistic-healing/ayurveda-ancient-wisdom-for-modern-wellness-in-india" replace />} />
          <Route path="/ayurveda-healing" element={<Navigate to="/holistic-healing/ayurveda-ancient-wisdom-for-modern-wellness-in-india" replace />} />
          <Route path="/ayurvedic-healing" element={<Navigate to="/holistic-healing/ayurveda-ancient-wisdom-for-modern-wellness-in-india" replace />} />
          
          <Route path="/holistic-healing/touch-and-bodywork-therapies-in-india" element={<TouchBodyworkTherapies />} />
          <Route path="/ayurveda-healing/touch-and-bodywork-therapies-in-india" element={<Navigate to="/holistic-healing/touch-and-bodywork-therapies-in-india" replace />} />
          <Route path="/ayurvedic-healing/touch-and-bodywork-therapies-in-india" element={<Navigate to="/holistic-healing/touch-and-bodywork-therapies-in-india" replace />} />
          
          <Route path="/holistic-healing/energy-and-spiritual-healing-treatments-in-india" element={<EnergyAndSpiritualHealing />} />
          <Route path="/ayurveda-healing/energy-and-spiritual-healing-treatments-in-india" element={<Navigate to="/holistic-healing/energy-and-spiritual-healing-treatments-in-india" replace />} />
          <Route path="/ayurvedic-healing/energy-and-spiritual-healing-treatments-in-india" element={<Navigate to="/holistic-healing/energy-and-spiritual-healing-treatments-in-india" replace />} />
          
          <Route path="/holistic-healing/mind-body-interventions-therapies-in-india" element={<MindBodyInterventions />} />
          <Route path="/ayurveda-healing/mind-body-interventions-therapies-in-india" element={<Navigate to="/holistic-healing/mind-body-interventions-therapies-in-india" replace />} />
          <Route path="/ayurvedic-healing/mind-body-interventions-therapies-in-india" element={<Navigate to="/holistic-healing/mind-body-interventions-therapies-in-india" replace />} />
          
          <Route path="/holistic-healing/biological-and-natural-plant-based-therapies-in-india" element={<BiologicalNaturalTherapies />} />
          <Route path="/ayurveda-healing/biological-and-natural-plant-based-therapies-in-india" element={<Navigate to="/holistic-healing/biological-and-natural-plant-based-therapies-in-india" replace />} />
          <Route path="/ayurvedic-healing/biological-and-natural-plant-based-therapies-in-india" element={<Navigate to="/holistic-healing/biological-and-natural-plant-based-therapies-in-india" replace />} />
          
          <Route path="/holistic-healing/specialized-alternative-medical-systems-in-india" element={<SpecializedAlternativeMedicalSystems />} />
          <Route path="/ayurveda-healing/specialized-alternative-medical-systems-in-india" element={<Navigate to="/holistic-healing/specialized-alternative-medical-systems-in-india" replace />} />
          <Route path="/ayurvedic-healing/specialized-alternative-medical-systems-in-india" element={<Navigate to="/holistic-healing/specialized-alternative-medical-systems-in-india" replace />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/ayurveda-packages/panchakarma-detox" element={<PanchakarmaDetox />} />
          <Route path="/ayurvedic-programs/panchakarma-detox" element={<Navigate to="/ayurveda-packages/panchakarma-detox" replace />} />
          <Route path="/ayurveda-packages/disease-specific" element={<DiseaseSpecific />} />
          <Route path="/ayurvedic-programs/disease-specific" element={<Navigate to="/ayurveda-packages/disease-specific" replace />} />
          <Route path="/ayurveda-packages/lifestyle-wellness" element={<LifestyleAndWellness />} />
          <Route path="/lifestyle-wellness" element={<Navigate to="/ayurveda-packages/lifestyle-wellness" replace />} />
          <Route path="/ayurveda-packages/lifestyle-and-wellness" element={<Navigate to="/ayurveda-packages/lifestyle-wellness" replace />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness" element={<Navigate to="/ayurveda-packages/lifestyle-wellness" replace />} />
          <Route path="/ayurveda-packages/anti-aging-ayurveda-program-in-india" element={<AntiAgingAyurvedaProgramIndia />} />
          <Route path="/lifestyle-wellness/anti-aging-ayurveda-program-in-india" element={<Navigate to="/ayurveda-packages/anti-aging-ayurveda-program-in-india" replace />} />
          <Route path="/ayurveda-packages/lifestyle-and-wellness/anti-aging-ayurveda-program-in-india" element={<Navigate to="/ayurveda-packages/anti-aging-ayurveda-program-in-india" replace />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/anti-aging-ayurveda-program-in-india" element={<Navigate to="/ayurveda-packages/anti-aging-ayurveda-program-in-india" replace />} />
          <Route path="/ayurveda-packages/ayurveda-treatment-for-osteoarthritis-in-india" element={<OsteoarthritisTreatment />} />
          <Route path="/disease-specific/ayurveda-treatment-for-osteoarthritis-in-india" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-osteoarthritis-in-india" replace />} />
          <Route path="/ayurvedic-programs/disease-specific/osteoarthritis" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-osteoarthritis-in-india" replace />} />
          <Route path="/ayurveda-packages/disease-specific/osteoarthritis" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-osteoarthritis-in-india" replace />} />
          
          <Route path="/ayurveda-packages/ayurveda-treatment-for-sciatica-in-india" element={<SciaticaTreatmentProgram />} />
          <Route path="/disease-specific/ayurveda-treatment-for-sciatica-in-india" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-sciatica-in-india" replace />} />
          <Route path="/ayurvedic-programs/disease-specific/sciatica" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-sciatica-in-india" replace />} />
          <Route path="/ayurveda-packages/disease-specific/sciatica" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-sciatica-in-india" replace />} />
          
          <Route path="/ayurveda-packages/ayurveda-treatment-for-rheumatoid-arthritis-in-india" element={<RheumatoidArthritis />} />
          <Route path="/disease-specific/ayurveda-treatment-for-rheumatoid-arthritis-in-india" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-rheumatoid-arthritis-in-india" replace />} />
          <Route path="/ayurvedic-programs/disease-specific/rheumatoid-arthritis-treatment-in-india" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-rheumatoid-arthritis-in-india" replace />} />
          <Route path="/ayurveda-packages/disease-specific/rheumatoid-arthritis-treatment-in-india" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-rheumatoid-arthritis-in-india" replace />} />
          
          <Route path="/ayurveda-packages/ayurvedic-psoriasis-treatment-program-in-india" element={<PsoriasisTreatmentProgram />} />
          <Route path="/disease-specific/ayurvedic-psoriasis-treatment-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-psoriasis-treatment-program-in-india" replace />} />
          <Route path="/ayurvedic-programs/disease-specific/psoriasis-treatment-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-psoriasis-treatment-program-in-india" replace />} />
          <Route path="/ayurveda-packages/disease-specific/psoriasis-treatment-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-psoriasis-treatment-program-in-india" replace />} />
          
          <Route path="/ayurveda-packages/ayurvedic-treatment-for-migraine-in-india" element={<MigraineTreatment />} />
          <Route path="/disease-specific/ayurvedic-treatment-for-migraine-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-treatment-for-migraine-in-india" replace />} />
          <Route path="/ayurvedic-programs/disease-specific/ayurvedic-treatment-for-migraine-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-treatment-for-migraine-in-india" replace />} />
          <Route path="/ayurveda-packages/disease-specific/ayurvedic-treatment-for-migraine-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-treatment-for-migraine-in-india" replace />} />
          
          <Route path="/ayurveda-packages/ayurveda-treatment-for-cervical-spondylosis-in-india" element={<CervicalSpondylosisProgram />} />
          <Route path="/disease-specific/ayurveda-treatment-for-cervical-spondylosis-in-india" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-cervical-spondylosis-in-india" replace />} />
          <Route path="/ayurvedic-programs/disease-specific/cervical-spondylosis-treatment-in-india" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-cervical-spondylosis-in-india" replace />} />
          <Route path="/ayurveda-packages/disease-specific/cervical-spondylosis-treatment-in-india" element={<Navigate to="/ayurveda-packages/ayurveda-treatment-for-cervical-spondylosis-in-india" replace />} />
          <Route path="/ayurveda-packages/ayurvedic-weight-loss-program-in-india" element={<AyurvedicWeightLossProgramIndia />} />
          <Route path="/lifestyle-wellness/ayurvedic-weight-loss-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-weight-loss-program-in-india" replace />} />
          <Route path="/ayurveda-packages/lifestyle-and-wellness/ayurvedic-weight-loss-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-weight-loss-program-in-india" replace />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/ayurvedic-weight-loss-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-weight-loss-program-in-india" replace />} />
          <Route path="/ayurveda-packages/stress-management-ayurveda-retreat-in-india" element={<StressManagementAyurvedaRetreat />} />
          <Route path="/lifestyle-wellness/stress-management-ayurveda-retreat-in-india" element={<Navigate to="/ayurveda-packages/stress-management-ayurveda-retreat-in-india" replace />} />
          <Route path="/ayurveda-packages/lifestyle-and-wellness/stress-management-ayurveda-retreat-in-india" element={<Navigate to="/ayurveda-packages/stress-management-ayurveda-retreat-in-india" replace />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/stress-management-ayurveda-retreat-in-india" element={<Navigate to="/ayurveda-packages/stress-management-ayurveda-retreat-in-india" replace />} />
          <Route path="/ayurveda-packages/ayurvedic-burnout-recovery-program-in-india" element={<BurnoutRecoveryProgram />} />
          <Route path="/lifestyle-wellness/ayurvedic-burnout-recovery-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-burnout-recovery-program-in-india" replace />} />
          <Route path="/ayurveda-packages/lifestyle-and-wellness/burnout-recovery-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-burnout-recovery-program-in-india" replace />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/burnout-recovery-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-burnout-recovery-program-in-india" replace />} />
          <Route path="/ayurveda-packages/immunity-boosting-detox-program-in-india" element={<ImmunityBoostingDetox />} />
          <Route path="/lifestyle-wellness/immunity-boosting-detox-program-in-india" element={<Navigate to="/ayurveda-packages/immunity-boosting-detox-program-in-india" replace />} />
          <Route path="/ayurveda-packages/lifestyle-and-wellness/immunity-boosting-detox-program-in-india" element={<Navigate to="/ayurveda-packages/immunity-boosting-detox-program-in-india" replace />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/immunity-boosting-detox-program-in-india" element={<Navigate to="/ayurveda-packages/immunity-boosting-detox-program-in-india" replace />} />
          <Route
            path="/ayurveda-packages/21-day-panchakarma-detox-program-in-india"
            element={<PanchakarmaDetox21Day />}
          />
          <Route
            path="/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india"
            element={<Navigate to="/ayurveda-packages/21-day-panchakarma-detox-program-in-india" replace />}
          />
          <Route
            path="/ayurvedic-programs/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india"
            element={<Navigate to="/ayurveda-packages/21-day-panchakarma-detox-program-in-india" replace />}
          />
          <Route
            path="/ayurvedic-programs/panchakarma-detox/21-day"
            element={<Navigate to="/ayurveda-packages/21-day-panchakarma-detox-program-in-india" replace />}
          />
          <Route
            path="/ayurveda-packages/panchakarma-detox/21-day"
            element={<Navigate to="/ayurveda-packages/21-day-panchakarma-detox-program-in-india" replace />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="/ayurveda-packages/28-day-panchakarma-healing-program-in-india"
            element={<PanchakarmaHealing28Day />}
          />
          <Route
            path="/panchakarma-healing-programs/28-day-panchakarma-healing-program-in-india"
            element={<Navigate to="/ayurveda-packages/28-day-panchakarma-healing-program-in-india" replace />}
          />
          <Route
            path="/ayurvedic-programs/panchakarma-healing-programs/28-day-panchakarma-healing-program-in-india"
            element={<Navigate to="/ayurveda-packages/28-day-panchakarma-healing-program-in-india" replace />}
          />
          <Route path="/ayurveda-packages/beauty-rejuvenation" element={<BeautyAndRejuvenation />} />
          <Route path="/beauty-rejuvenation" element={<Navigate to="/ayurveda-packages/beauty-rejuvenation" replace />} />
          <Route path="/ayurvedic-programs/beauty-and-rejuvenation" element={<Navigate to="/ayurveda-packages/beauty-rejuvenation" replace />} />
          
          <Route path="/ayurveda-packages/ayurvedic-skin-rejuvenation-therapy-in-india" element={<SkinRejuvenation />} />
          <Route path="/beauty-rejuvenation/ayurvedic-skin-rejuvenation-therapy-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-skin-rejuvenation-therapy-in-india" replace />} />
          <Route path="/ayurveda-packages/beauty-and-rejuvenation/skin-rejuvenation-treatment-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-skin-rejuvenation-therapy-in-india" replace />} />
          <Route path="/ayurvedic-programs/beauty-and-rejuvenation/skin-rejuvenation-treatment-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-skin-rejuvenation-therapy-in-india" replace />} />
          
          <Route path="/ayurveda-packages/ayurvedic-hair-loss-treatment-program-in-india" element={<HairLoss />} />
          <Route path="/beauty-rejuvenation/ayurvedic-hair-loss-treatment-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-hair-loss-treatment-program-in-india" replace />} />
          <Route path="/ayurveda-packages/beauty-and-rejuvenation/hair-loss-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-hair-loss-treatment-program-in-india" replace />} />
          <Route path="/ayurvedic-programs/beauty-and-rejuvenation/hair-loss-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-hair-loss-treatment-program-in-india" replace />} />
          
          <Route path="/ayurveda-packages/ayurvedic-beauty-detox-retreat-in-india" element={<AyurvedicBeautyDetoxIndia />} />
          <Route path="/beauty-rejuvenation/ayurvedic-beauty-detox-retreat-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-beauty-detox-retreat-in-india" replace />} />
          <Route path="/ayurveda-packages/beauty-and-rejuvenation/ayurvedic-beauty-detox-retreat-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-beauty-detox-retreat-in-india" replace />} />
          <Route path="/ayurvedic-programs/beauty-and-rejuvenation/ayurvedic-beauty-detox-retreat-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-beauty-detox-retreat-in-india" replace />} />
          <Route path="/ayurveda-packages/integrated-retreat" element={<IntegratedRetreat />} />
          <Route path="/integrated-retreat" element={<Navigate to="/ayurveda-packages/integrated-retreat" replace />} />
          <Route path="/ayurvedic-programs/integrated-retreat" element={<Navigate to="/ayurveda-packages/integrated-retreat" replace />} />
          
          <Route path="/ayurveda-packages/ayurvedic-yoga-retreat-program-in-india" element={<AyurvedaYogaRetreat />} />
          <Route path="/integrated-retreat/ayurvedic-yoga-retreat-program-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-yoga-retreat-program-in-india" replace />} />
          <Route path="/ayurveda-packages/integrated-retreat/ayurveda-yoga-retreat" element={<Navigate to="/ayurveda-packages/ayurvedic-yoga-retreat-program-in-india" replace />} />
          <Route path="/ayurvedic-programs/integrated-retreat/ayurveda-yoga-retreat" element={<Navigate to="/ayurveda-packages/ayurvedic-yoga-retreat-program-in-india" replace />} />
          <Route path="/integrated-retreat/ayurveda-yoga-retreat" element={<Navigate to="/ayurveda-packages/ayurvedic-yoga-retreat-program-in-india" replace />} />
          
          <Route path="/ayurveda-packages/ayurvedic-digital-detox-retreat-in-india" element={<AyurvedaDigitalDetox />} />
          <Route path="/integrated-retreat/ayurvedic-digital-detox-retreat-in-india" element={<Navigate to="/ayurveda-packages/ayurvedic-digital-detox-retreat-in-india" replace />} />
          <Route path="/ayurveda-packages/integrated-retreat/ayurveda-digital-detox" element={<Navigate to="/ayurveda-packages/ayurvedic-digital-detox-retreat-in-india" replace />} />
          <Route path="/ayurvedic-programs/integrated-retreat/ayurveda-digital-detox" element={<Navigate to="/ayurveda-packages/ayurvedic-digital-detox-retreat-in-india" replace />} />
          <Route path="/integrated-retreat/ayurveda-digital-detox" element={<Navigate to="/ayurveda-packages/ayurvedic-digital-detox-retreat-in-india" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
