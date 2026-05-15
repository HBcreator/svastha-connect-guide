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
import AyurvedaService from "./pages/services/Ayurveda";
import PanchakarmaService from "./pages/services/Panchakarma";
import YogaMeditationService from "./pages/services/YogaMeditation";
import AyurvedicMassageService from "./pages/services/AyurvedicMassage";
import AyurvedicDietService from "./pages/services/AyurvedicDiet";
import PhysiotherapyService from "./pages/services/Physiotherapy";
import KalariMarmaService from "./pages/services/KalariMarma";
import TouchBodyworkTherapies from "./pages/services/TouchBodyworkTherapies";
import EnergyAndSpiritualHealing from "./pages/services/EnergyAndSpiritualHealing";
import MindBodyInterventions from "./pages/services/MindBodyInterventions";
import BiologicalNaturalTherapies from "./pages/services/BiologicalNaturalTherapies";
import SpecializedAlternativeMedicalSystems from "./pages/services/SpecializedAlternativeMedicalSystems";
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
          <Route path="/centers/soukya-dr-mathais-international-holistic-health-centre-bangalore-india" element={<Navigate to="/centers/soukya-international-holistic-health-centre-bangalore-india" replace />} />
          <Route path="/centers/bangalore/soukya" element={<Navigate to="/centers/soukya-international-holistic-health-centre-bangalore-india" replace />} />
          
          <Route path="/centers/ayurvedagram-heritage-wellness-centre-bangalore-india" element={<AyurvedaGram />} />
          <Route path="/centers/bangalore/ayurvedagram" element={<Navigate to="/centers/ayurvedagram-heritage-wellness-centre-bangalore-india" replace />} />
          <Route path="/centers/ananda-in-the-himalayas-uttarakhand-india" element={<AnandaInTheHimalayas />} />
          <Route path="/centers/uttarakhand/ananda-in-the-himalayas" element={<Navigate to="/centers/ananda-in-the-himalayas-uttarakhand-india" replace />} />
          <Route path="/centers/yan-cure-yoga-retreat-and-ayurveda-centre-rishikesh-india" element={<YanCureYogaRetreat />} />
          <Route path="/centers/rishikesh/yan-cure" element={<Navigate to="/centers/yan-cure-yoga-retreat-and-ayurveda-centre-rishikesh-india" replace />} />
          <Route path="/centers/soul-vacation-resort-spa-goa-india" element={<SoulVacationResort />} />
          <Route path="/centers/goa/soul-vacation" element={<Navigate to="/centers/soul-vacation-resort-spa-goa-india" replace />} />
          
          <Route path="/centers/swan-yoga-retreat-goa-india" element={<SWANYogaRetreat />} />
          <Route path="/centers/goa/swan-yoga-retreat" element={<Navigate to="/centers/swan-yoga-retreat-goa-india" replace />} />
          
          <Route path="/centers/mercure-goa-devaaya-retreat-goa-india" element={<MercureGoaDevaayaResort />} />
          <Route path="/centers/goa/mercure-goa-devaaya-resort" element={<Navigate to="/centers/mercure-goa-devaaya-retreat-goa-india" replace />} />
          
          <Route path="/centers/ashiyana-yoga-retreat-village-goa-india" element={<AshiyanaYogaRetreat />} />
          <Route path="/centers/goa/ashiyana-yoga-retreat" element={<Navigate to="/centers/ashiyana-yoga-retreat-village-goa-india" replace />} />
          
          <Route path="/centers/nalanda-retreat-goa-india" element={<NalandaRetreatGoa />} />
          <Route path="/centers/goa/nalanda-retreat-goa" element={<Navigate to="/centers/nalanda-retreat-goa-india" replace />} />
          <Route path="/centers/rishikesh/modi-yoga-retreat" element={<ModiYogaRetreat />} />
          <Route path="/centers/sri-sri-ayurveda-hospital-bangalore-india" element={<SriSriAyurvedaHospital />} />
          <Route path="/centers/bangalore/sri-sri-ayurveda-hospital-bengaluru" element={<Navigate to="/centers/sri-sri-ayurveda-hospital-bangalore-india" replace />} />
          <Route path="/centers/itc-grand-bharat-wellness-retreat-gurugram-delhi-india" element={<ITCGrandBharat />} />
          <Route path="/centers/itc-grand-bharat-wellness-retreat-gurugram-india" element={<Navigate to="/centers/itc-grand-bharat-wellness-retreat-gurugram-delhi-india" replace />} />
          <Route path="/centers/gurugram/itc-grand-bharat" element={<Navigate to="/centers/itc-grand-bharat-wellness-retreat-gurugram-delhi-india" replace />} />
          <Route path="/centers/kerala/niraamaya-retreats-surya-samudra" element={<NiraamayaRetreatsSuryaSamudra />} />
          <Route path="/centers/amanbagh-heritage-wellness-retreat-rajasthan-india" element={<AmanbaghHeritageWellnessRetreat />} />
          <Route path="/centers/amanbagh-heritage-wellness-retreat-rajasthan-delhi-india" element={<Navigate to="/centers/amanbagh-heritage-wellness-retreat-rajasthan-india" replace />} />
          <Route path="/centers/rajasthan/amanbagh-heritage-wellness-retreat" element={<Navigate to="/centers/amanbagh-heritage-wellness-retreat-rajasthan-india" replace />} />
          <Route path="/centers/dharamshala/himveda" element={<HimVeda />} />
          <Route path="/centers/kerala/kalari-kovilakom" element={<KalariKovilakomPalaceForAyurveda />} />
          <Route path="/centers/kerala/carnoustie-ayurveda-wellness-resort" element={<CarnoustieAyurvedaWellnessResort />} />
          <Route path="/centers/kerala/the-nattika-beach-resort" element={<TheNattikaBeachResort />} />
          <Route path="/centers/sitaram-beach-retreat-kerala-india" element={<SitaramBeachRetreat />} />
          <Route path="/centers/kerala/sitaram-beach-retreat" element={<Navigate to="/centers/sitaram-beach-retreat-kerala-india" replace />} />
          <Route path="/centers/kerala/ideal-ayurvedic-resort" element={<IdealAyurvedicResort />} />
          <Route path="/centers/ayuskama-ayurveda-and-panchakarma-center-dharamshala-india" element={<AyuskamaAyurveda />} />
          <Route path="/centers/dharamshala/ayuskama-ayurveda" element={<Navigate to="/centers/ayuskama-ayurveda-and-panchakarma-center-dharamshala-india" replace />} />
          <Route path="/centers/ayushi-ayurvedic-retreat-kerala-india" element={<AyushiAyurvedicRetreat />} />
          <Route path="/centers/kerala/ayushi-ayurvedic-retreat" element={<Navigate to="/centers/ayushi-ayurvedic-retreat-kerala-india" replace />} />
          
          <Route path="/centers/sitaram-mountain-retreat-idukki-india" element={<SitaramMountainRetreat />} />
          <Route path="/centers/idukki/sitaram-mountain-retreat" element={<Navigate to="/centers/sitaram-mountain-retreat-idukki-india" replace />} />
          
          <Route path="/centers/akanta-ayurveda-and-yoga-resort-kochi-india" element={<AkantaAyurvedaYogaResort />} />
          <Route path="/centers/kochi/akanta-ayurveda-and-yoga-resort" element={<Navigate to="/centers/akanta-ayurveda-and-yoga-resort-kochi-india" replace />} />
          <Route path="/centers/indus-valley-ayurvedic-centre-mysore-banglore-india" element={<IndusValleyAyurvedicCentre />} />
          <Route path="/centers/mysore/indus-valley-ayurvedic-centre" element={<Navigate to="/centers/indus-valley-ayurvedic-centre-mysore-banglore-india" replace />} />
          
          <Route path="/centers/shathayu-ayurveda-yoga-retreat-udupi-banglore-india" element={<ShathayuAyurvedaYogaRetreat />} />
          <Route path="/centers/udupi/shathayu-ayurveda-yoga-retreat" element={<Navigate to="/centers/shathayu-ayurveda-yoga-retreat-udupi-banglore-india" replace />} />
          <Route path="/centers/ayursoma-ayurveda-royal-retreat-kerala-india" element={<AyurSomaAyurvedaRoyalRetreat />} />
          <Route path="/centers/kerala/ayursoma" element={<Navigate to="/centers/ayursoma-ayurveda-royal-retreat-kerala-india" replace />} />
          
          <Route path="/centers/somatheeram-ayurvedic-health-resort-kerala-india" element={<Somatheeram />} />
          <Route path="/centers/kerala/somatheeram" element={<Navigate to="/centers/somatheeram-ayurvedic-health-resort-kerala-india" replace />} />
          
          <Route path="/centers/kairali-heritage-resort-kerala-india" element={<KairaliHeritage />} />
          <Route path="/centers/kerala/kairali-heritage" element={<Navigate to="/centers/kairali-heritage-resort-kerala-india" replace />} />
          
          <Route path="/centers/kairali-the-ayurvedic-healing-village-kerala-india" element={<KairaliHealingVillage />} />
          <Route path="/centers/kerala/kairali-ayurvedic-healing-village" element={<Navigate to="/centers/kairali-the-ayurvedic-healing-village-kerala-india" replace />} />
          
          <Route path="/centers/agni-ayurvedic-village-resort-panvel-mumbai-india" element={<AgniAyurvedicVillage />} />
          <Route path="/centers/kerala/agni-ayurvedic-village" element={<Navigate to="/centers/agni-ayurvedic-village-resort-panvel-mumbai-india" replace />} />
          <Route path="/centers/nagarjuna-ayurvedic-centre-kerala-india" element={<NagarjunaAyurvedaCentre />} />
          <Route path="/centers/kerala/nagarjuna-ayurveda-centre" element={<Navigate to="/centers/nagarjuna-ayurvedic-centre-kerala-india" replace />} />
          
          <Route path="/centers/sanjeevanam-ayurveda-hospital-kerala-india" element={<SanjeevanamAyurvedaHospital />} />
          <Route path="/centers/kerala/sanjeevanam-ayurveda-hospital" element={<Navigate to="/centers/sanjeevanam-ayurveda-hospital-kerala-india" replace />} />
          
          <Route path="/centers/dheemahi-ayurveda-village-kumarakom-kerala-india" element={<DheemahiKumarakom />} />
          <Route path="/centers/kerala/dheemahi-kumarakom" element={<Navigate to="/centers/dheemahi-ayurveda-village-kumarakom-kerala-india" replace />} />
          <Route path="/centers/kerala/kumarakom-lake-resort" element={<KumarakomLakeResort />} />
          
          <Route path="/centers/back-to-roots-ayurveda-retreat-kerala-india" element={<BackToRoots />} />
          <Route path="/centers/kerala/back-to-roots" element={<Navigate to="/centers/back-to-roots-ayurveda-retreat-kerala-india" replace />} />
          
          <Route path="/centers/dhathri-ayurveda-hospital-and-retreat-kerala-india" element={<DhathriAyurvedicHospital />} />
          <Route path="/centers/kerala/dhathri-ayurveda" element={<Navigate to="/centers/dhathri-ayurveda-hospital-and-retreat-kerala-india" replace />} />
          
          <Route path="/centers/krishnendu-ayurveda-hospital-kerala-india" element={<KrishnenduAyurvedaHospital />} />
          <Route path="/centers/kerala/krishnendu-ayurveda-hospital" element={<Navigate to="/centers/krishnendu-ayurveda-hospital-kerala-india" replace />} />
          
          <Route path="/centers/ayurmana-dharma-ayurvedic-centre-kerala-india" element={<AyurmanaCenter />} />
          <Route path="/centers/kerala/ayurmana" element={<Navigate to="/centers/ayurmana-dharma-ayurvedic-centre-kerala-india" replace />} />
          
          <Route path="/centers/chamundi-hill-palace-ayurvedic-resort-mysore-india" element={<ChamundiHillPalace />} />
          <Route path="/centers/mysore/chamundi-hill-palace" element={<Navigate to="/centers/chamundi-hill-palace-ayurvedic-resort-mysore-india" replace />} />
          
          <Route path="/centers/athreya-ayurvedic-centre-kerala-india" element={<AthreyaAyurvedicCentre />} />
          <Route path="/centers/kerala/athreya-ayurvedic-centre" element={<Navigate to="/centers/athreya-ayurvedic-centre-kerala-india" replace />} />
          
          <Route path="/centers/ayur-bethaniya-ayurveda-hospital-kerala-india" element={<AyurBethaniyaAyurvedaHospital />} />
          <Route path="/centers/kerala/ayur-bethaniya-ayurveda-hospital" element={<Navigate to="/centers/ayur-bethaniya-ayurveda-hospital-kerala-india" replace />} />
          <Route path="/centers/shreyas-yoga-retreat-bangalore-india" element={<ShreyasYogaRetreat />} />
          <Route path="/centers/bangalore/shreyas-yoga-retreat" element={<Navigate to="/centers/shreyas-yoga-retreat-bangalore-india" replace />} />
          <Route path="/centers/naad-wellness-centre-sonepat-delhi-india" element={<NaadWellness />} />
          <Route path="/centers/naad-wellness-centre-sonepat-india" element={<Navigate to="/centers/naad-wellness-centre-sonepat-delhi-india" replace />} />
          <Route path="/centers/sonepat/naad-wellness" element={<Navigate to="/centers/naad-wellness-centre-sonepat-delhi-india" replace />} />
          <Route path="/centers/atmantan-wellness-resort-pune-india" element={<AtmantanWellnessResort />} />
          <Route path="/centers/pune/atmantan-wellness-resort" element={<Navigate to="/centers/atmantan-wellness-resort-pune-india" replace />} />
          <Route path="/centers/fazlani-natures-nest-wellness-centre-mumbai-india" element={<FazlaniNaturesNest />} />
          <Route path="/centers/maharashtra/fazlani-natures-nest" element={<Navigate to="/centers/fazlani-natures-nest-wellness-centre-mumbai-india" replace />} />
          <Route path="/centers/the-imperial-spa-and-wellness-delhi-india" element={<TheImperialSpaAndWellness />} />
          <Route path="/centers/delhi/the-imperial-spa-and-wellness" element={<Navigate to="/centers/the-imperial-spa-and-wellness-delhi-india" replace />} />
          <Route path="/centers/dharana-at-shillim-wellness-retreat-pune-india" element={<DharanaAtShillim />} />
          <Route path="/centers/pune/dharana-at-shillim" element={<Navigate to="/centers/dharana-at-shillim-wellness-retreat-pune-india" replace />} />
          <Route path="/centers/toyam-by-orchid-hotels-wellness-resort-pune-india" element={<ToyamByOrchidHotels />} />
          <Route path="/centers/pune/toyam-by-orchid-hotels" element={<Navigate to="/centers/toyam-by-orchid-hotels-wellness-resort-pune-india" replace />} />
          <Route path="/centers/viveda-wellness-village-mumbai-india" element={<VivedaWellnessVillage />} />
          <Route path="/centers/maharashtra/viveda-wellness-village" element={<Navigate to="/centers/viveda-wellness-village-mumbai-india" replace />} />
          <Route path="/centers/himachal/sandhya-hot-spring-health-care" element={<SandhyaHotSpringHealthCare />} />
          <Route path="/centers/veda5-ayurveda-and-yoga-retreat-rishikesh-india" element={<Veda5Center />} />
          <Route path="/centers/veda5-ayurveda-and-yoga-retreat-kerala-india" element={<Navigate to="/centers/veda5-ayurveda-and-yoga-retreat-rishikesh-india" replace />} />
          <Route path="/centers/veda5" element={<Navigate to="/centers/veda5-ayurveda-and-yoga-retreat-rishikesh-india" replace />} />
          
          <Route path="/centers/namaste-dwaar-countryside-wellness-retreat-delhi-india" element={<NamasteDwaar />} />
          <Route path="/centers/delhi/namastedwaar" element={<Navigate to="/centers/namaste-dwaar-countryside-wellness-retreat-delhi-india" replace />} />
          <Route path="/centers/:city/:centerId" element={<CenterDetail />} />
          <Route path="/centers/:city/:centerId" element={<CenterDetail />} />
          <Route path="/ayurvedic-healing" element={<Services />} />
          <Route path="/services" element={<Navigate to="/ayurvedic-healing" replace />} />
          <Route path="/ayurvedic-healing/ayurveda-healing-program-in-india" element={<AyurvedaService />} />
          <Route path="/ayurvedic-healing/ayurveda" element={<Navigate to="/ayurvedic-healing/ayurveda-healing-program-in-india" replace />} />
          <Route path="/services/ayurveda" element={<Navigate to="/ayurvedic-healing/ayurveda-healing-program-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/panchakarma-healing-program-in-india" element={<PanchakarmaService />} />
          <Route path="/ayurvedic-healing/panchakarma" element={<Navigate to="/ayurvedic-healing/panchakarma-healing-program-in-india" replace />} />
          <Route path="/services/panchakarma" element={<Navigate to="/ayurvedic-healing/panchakarma-healing-program-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/yoga-and-meditation-healing-program-in-india" element={<YogaMeditationService />} />
          <Route path="/ayurvedic-healing/yoga-meditation" element={<Navigate to="/ayurvedic-healing/yoga-and-meditation-healing-program-in-india" replace />} />
          <Route path="/services/yoga-meditation" element={<Navigate to="/ayurvedic-healing/yoga-and-meditation-healing-program-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/ayurvedic-massage-healing-program-in-india" element={<AyurvedicMassageService />} />
          <Route path="/ayurvedic-healing/ayurvedic-massage" element={<Navigate to="/ayurvedic-healing/ayurvedic-massage-healing-program-in-india" replace />} />
          <Route path="/services/ayurvedic-massage" element={<Navigate to="/ayurvedic-healing/ayurvedic-massage-healing-program-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/ayurvedic-diet-healing-program-in-india" element={<AyurvedicDietService />} />
          <Route path="/ayurvedic-healing/ayurvedic-diet" element={<Navigate to="/ayurvedic-healing/ayurvedic-diet-healing-program-in-india" replace />} />
          <Route path="/services/ayurvedic-diet" element={<Navigate to="/ayurvedic-healing/ayurvedic-diet-healing-program-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/physiotherapy-healing-program-in-india" element={<PhysiotherapyService />} />
          <Route path="/ayurvedic-healing/physiotherapy" element={<Navigate to="/ayurvedic-healing/physiotherapy-healing-program-in-india" replace />} />
          <Route path="/services/physiotherapy" element={<Navigate to="/ayurvedic-healing/physiotherapy-healing-program-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/kalari-and-marma-healing-program-in-india" element={<KalariMarmaService />} />
          <Route path="/ayurvedic-healing/kalari-marma" element={<Navigate to="/ayurvedic-healing/kalari-and-marma-healing-program-in-india" replace />} />
          <Route path="/services/kalari-marma" element={<Navigate to="/ayurvedic-healing/kalari-and-marma-healing-program-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/touch-and-bodywork-therapies-in-india" element={<TouchBodyworkTherapies />} />
          <Route path="/services/touch-and-bodywork-therapies-in-india" element={<Navigate to="/ayurvedic-healing/touch-and-bodywork-therapies-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/energy-and-spiritual-healing-treatments-in-india" element={<EnergyAndSpiritualHealing />} />
          <Route path="/services/energy-and-spiritual-healing-treatments-in-india" element={<Navigate to="/ayurvedic-healing/energy-and-spiritual-healing-treatments-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/mind-body-interventions-therapies-in-india" element={<MindBodyInterventions />} />
          <Route path="/services/mind-body-interventions-therapies-in-india" element={<Navigate to="/ayurvedic-healing/mind-body-interventions-therapies-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/biological-and-natural-plant-based-therapies-in-india" element={<BiologicalNaturalTherapies />} />
          <Route path="/services/biological-and-natural-plant-based-therapies-in-india" element={<Navigate to="/ayurvedic-healing/biological-and-natural-plant-based-therapies-in-india" replace />} />
          
          <Route path="/ayurvedic-healing/specialized-alternative-medical-systems-in-india" element={<SpecializedAlternativeMedicalSystems />} />
          <Route path="/services/specialized-alternative-medical-systems-in-india" element={<Navigate to="/ayurvedic-healing/specialized-alternative-medical-systems-in-india" replace />} />
          <Route path="/ayurvedic-treatments" element={<Treatments />} />
          <Route path="/treatments" element={<Navigate to="/ayurvedic-treatments" replace />} />
          <Route path="/ayurvedic-treatments/ayurvedic-therapy-in-india" element={<AyurvedaTreatment />} />
          <Route path="/ayurvedic-treatments/ayurveda-treatment" element={<Navigate to="/ayurvedic-treatments/ayurvedic-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/panchakarma-therapy-in-india" element={<PanchakarmaTreatment />} />
          <Route path="/ayurvedic-treatments/panchakarma-treatment" element={<Navigate to="/ayurvedic-treatments/panchakarma-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/sinusitis-therapy-in-india" element={<SinusitisTreatment />} />
          <Route path="/ayurvedic-treatments/sinusitis-treatment" element={<Navigate to="/ayurvedic-treatments/sinusitis-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/autism-therapy-in-india" element={<AutismTreatment />} />
          <Route path="/ayurvedic-treatments/autism-treatment" element={<Navigate to="/ayurvedic-treatments/autism-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/weight-loss-therapy-in-india" element={<WeightLossTreatment />} />
          <Route path="/ayurvedic-treatments/weight-loss-treatment" element={<Navigate to="/ayurvedic-treatments/weight-loss-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/monsoon-therapy-in-india" element={<MonsoonTreatment />} />
          <Route path="/ayurvedic-treatments/monsoon-treatment" element={<Navigate to="/ayurvedic-treatments/monsoon-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/parkinsons-disease-therapy-in-india" element={<ParkinsonsDiseaseTreatment />} />
          <Route path="/ayurvedic-treatments/parkinsons-disease-treatment" element={<Navigate to="/ayurvedic-treatments/parkinsons-disease-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/sciatica-therapy-in-india" element={<SciaticaTreatment />} />
          <Route path="/ayurvedic-treatments/sciatica-treatment" element={<Navigate to="/ayurvedic-treatments/sciatica-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/stroke-therapy-in-india" element={<StrokeTreatment />} />
          <Route path="/ayurvedic-treatments/stroke-treatment" element={<Navigate to="/ayurvedic-treatments/stroke-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/varicose-ulcer-therapy-in-india" element={<VaricoseUlcer />} />
          <Route path="/ayurvedic-treatments/varicose-ulcer" element={<Navigate to="/ayurvedic-treatments/varicose-ulcer-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/knee-pain-therapy-in-india" element={<KneePain />} />
          <Route path="/ayurvedic-treatments/knee-pain" element={<Navigate to="/ayurvedic-treatments/knee-pain-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/post-natal-therapy-in-india" element={<PostNatalCare />} />
          <Route path="/ayurvedic-treatments/post-natal-care" element={<Navigate to="/ayurvedic-treatments/post-natal-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/cervical-spondylosis-therapy-in-india" element={<CervicalSpondylosis />} />
          <Route path="/ayurvedic-treatments/cervical-spondylosis" element={<Navigate to="/ayurvedic-treatments/cervical-spondylosis-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/psoriasis-therapy-in-india" element={<Psoriasis />} />
          <Route path="/ayurvedic-treatments/psoriasis" element={<Navigate to="/ayurvedic-treatments/psoriasis-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/lumbar-spondylosis-therapy-in-india" element={<LumbarSpondylosis />} />
          <Route path="/ayurvedic-treatments/lumbar-spondylosis" element={<Navigate to="/ayurvedic-treatments/lumbar-spondylosis-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/gastroesophageal-reflux-disease-therapy-in-india" element={<GastroesophagealRefluxDisease />} />
          <Route path="/ayurvedic-treatments/gastroesophageal-reflux-disease" element={<Navigate to="/ayurvedic-treatments/gastroesophageal-reflux-disease-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/arthritis-therapy-in-india" element={<ArthritisTreatment />} />
          <Route path="/ayurvedic-treatments/arthritis-treatment" element={<Navigate to="/ayurvedic-treatments/arthritis-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/dysmenorrhea-therapy-in-india" element={<DysmenorrheaTreatment />} />
          <Route path="/ayurvedic-treatments/dysmenorrhea-treatment" element={<Navigate to="/ayurvedic-treatments/dysmenorrhea-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/ulcerative-colitis-therapy-in-india" element={<UlcerativeColitisTreatment />} />
          <Route path="/ayurvedic-treatments/ulcerative-colitis-treatment" element={<Navigate to="/ayurvedic-treatments/ulcerative-colitis-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/disc-bulge-protrusion-therapy-in-india" element={<DiscBulgeProtrusion />} />
          <Route path="/ayurvedic-treatments/disc-bulge-protrusion" element={<Navigate to="/ayurvedic-treatments/disc-bulge-protrusion-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/back-pain-therapy-in-india" element={<BackPain />} />
          <Route path="/ayurvedic-treatments/back-pain" element={<Navigate to="/ayurvedic-treatments/back-pain-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/stress-therapy-in-india" element={<Stress />} />
          <Route path="/ayurvedic-treatments/stress" element={<Navigate to="/ayurvedic-treatments/stress-therapy-in-india" replace />} />
          
          <Route path="/ayurvedic-treatments/alopecia-therapy-in-india" element={<Alopecia />} />
          <Route path="/ayurvedic-treatments/alopecia" element={<Navigate to="/ayurvedic-treatments/alopecia-therapy-in-india" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/ayurvedic-programs/panchakarma-detox" element={<PanchakarmaDetox />} />
          <Route path="/ayurvedic-programs/disease-specific" element={<DiseaseSpecific />} />
          <Route path="/lifestyle-wellness" element={<LifestyleAndWellness />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness" element={<Navigate to="/lifestyle-wellness" replace />} />
          <Route path="/lifestyle-wellness/anti-aging-ayurveda-program-in-india" element={<AntiAgingAyurvedaProgramIndia />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/anti-aging-ayurveda-program-in-india" element={<Navigate to="/lifestyle-wellness/anti-aging-ayurveda-program-in-india" replace />} />
          <Route path="/disease-specific/ayurveda-treatment-for-osteoarthritis-in-india" element={<OsteoarthritisTreatment />} />
          <Route path="/ayurvedic-programs/disease-specific/osteoarthritis" element={<Navigate to="/disease-specific/ayurveda-treatment-for-osteoarthritis-in-india" replace />} />
          <Route path="/disease-specific/ayurveda-treatment-for-sciatica-in-india" element={<SciaticaTreatmentProgram />} />
          <Route path="/ayurvedic-programs/disease-specific/sciatica" element={<Navigate to="/disease-specific/ayurveda-treatment-for-sciatica-in-india" replace />} />
          <Route path="/disease-specific/ayurveda-treatment-for-rheumatoid-arthritis-in-india" element={<RheumatoidArthritis />} />
          <Route path="/ayurvedic-programs/disease-specific/rheumatoid-arthritis-treatment-in-india" element={<Navigate to="/disease-specific/ayurveda-treatment-for-rheumatoid-arthritis-in-india" replace />} />
          <Route path="/disease-specific/ayurvedic-psoriasis-treatment-program-in-india" element={<PsoriasisTreatmentProgram />} />
          <Route path="/ayurvedic-programs/disease-specific/psoriasis-treatment-in-india" element={<Navigate to="/disease-specific/ayurvedic-psoriasis-treatment-program-in-india" replace />} />
          <Route path="/disease-specific/ayurvedic-treatment-for-migraine-in-india" element={<MigraineTreatment />} />
          <Route path="/ayurvedic-programs/disease-specific/ayurvedic-treatment-for-migraine-in-india" element={<Navigate to="/disease-specific/ayurvedic-treatment-for-migraine-in-india" replace />} />
          <Route path="/disease-specific/ayurveda-treatment-for-cervical-spondylosis-in-india" element={<CervicalSpondylosisProgram />} />
          <Route path="/ayurvedic-programs/disease-specific/cervical-spondylosis-treatment-in-india" element={<Navigate to="/disease-specific/ayurveda-treatment-for-cervical-spondylosis-in-india" replace />} />
          <Route path="/lifestyle-wellness/ayurvedic-weight-loss-program-in-india" element={<AyurvedicWeightLossProgramIndia />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/ayurvedic-weight-loss-program-in-india" element={<Navigate to="/lifestyle-wellness/ayurvedic-weight-loss-program-in-india" replace />} />
          <Route path="/lifestyle-wellness/stress-management-ayurveda-retreat-in-india" element={<StressManagementAyurvedaRetreat />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/stress-management-ayurveda-retreat-in-india" element={<Navigate to="/lifestyle-wellness/stress-management-ayurveda-retreat-in-india" replace />} />
          <Route path="/lifestyle-wellness/ayurvedic-burnout-recovery-program-in-india" element={<BurnoutRecoveryProgram />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/burnout-recovery-program-in-india" element={<Navigate to="/lifestyle-wellness/ayurvedic-burnout-recovery-program-in-india" replace />} />
          <Route path="/lifestyle-wellness/immunity-boosting-detox-program-in-india" element={<ImmunityBoostingDetox />} />
          <Route path="/ayurvedic-programs/lifestyle-and-wellness/immunity-boosting-detox-program-in-india" element={<Navigate to="/lifestyle-wellness/immunity-boosting-detox-program-in-india" replace />} />
          <Route
            path="/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india"
            element={<PanchakarmaDetox21Day />}
          />
          <Route
            path="/ayurvedic-programs/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india"
            element={<Navigate to="/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india" replace />}
          />
          <Route
            path="/ayurvedic-programs/panchakarma-detox/21-day"
            element={<Navigate to="/panchakarma-detox-programs/21-day-panchakarma-detox-program-in-india" replace />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="/panchakarma-healing-programs/28-day-panchakarma-healing-program-in-india"
            element={<PanchakarmaHealing28Day />}
          />
          <Route
            path="/ayurvedic-programs/panchakarma-healing-programs/28-day-panchakarma-healing-program-in-india"
            element={<Navigate to="/panchakarma-healing-programs/28-day-panchakarma-healing-program-in-india" replace />}
          />
          <Route path="/beauty-rejuvenation" element={<BeautyAndRejuvenation />} />
          <Route path="/ayurvedic-programs/beauty-and-rejuvenation" element={<Navigate to="/beauty-rejuvenation" replace />} />
          
          <Route path="/beauty-rejuvenation/ayurvedic-skin-rejuvenation-therapy-in-india" element={<SkinRejuvenation />} />
          <Route path="/ayurvedic-programs/beauty-and-rejuvenation/skin-rejuvenation-treatment-in-india" element={<Navigate to="/beauty-rejuvenation/ayurvedic-skin-rejuvenation-therapy-in-india" replace />} />
          
          <Route path="/beauty-rejuvenation/ayurvedic-hair-loss-treatment-program-in-india" element={<HairLoss />} />
          <Route path="/ayurvedic-programs/beauty-and-rejuvenation/hair-loss-in-india" element={<Navigate to="/beauty-rejuvenation/ayurvedic-hair-loss-treatment-program-in-india" replace />} />
          
          <Route path="/beauty-rejuvenation/ayurvedic-beauty-detox-retreat-in-india" element={<AyurvedicBeautyDetoxIndia />} />
          <Route path="/ayurvedic-programs/beauty-and-rejuvenation/ayurvedic-beauty-detox-retreat-in-india" element={<Navigate to="/beauty-rejuvenation/ayurvedic-beauty-detox-retreat-in-india" replace />} />
          <Route path="/integrated-retreat" element={<IntegratedRetreat />} />
          <Route path="/ayurvedic-programs/integrated-retreat" element={<Navigate to="/integrated-retreat" replace />} />
          
          <Route path="/integrated-retreat/ayurvedic-yoga-retreat-program-in-india" element={<AyurvedaYogaRetreat />} />
          <Route path="/ayurvedic-programs/integrated-retreat/ayurveda-yoga-retreat" element={<Navigate to="/integrated-retreat/ayurvedic-yoga-retreat-program-in-india" replace />} />
          <Route path="/integrated-retreat/ayurveda-yoga-retreat" element={<Navigate to="/integrated-retreat/ayurvedic-yoga-retreat-program-in-india" replace />} />
          
          <Route path="/integrated-retreat/ayurvedic-digital-detox-retreat-in-india" element={<AyurvedaDigitalDetox />} />
          <Route path="/ayurvedic-programs/integrated-retreat/ayurveda-digital-detox" element={<Navigate to="/integrated-retreat/ayurvedic-digital-detox-retreat-in-india" replace />} />
          <Route path="/integrated-retreat/ayurveda-digital-detox" element={<Navigate to="/integrated-retreat/ayurvedic-digital-detox-retreat-in-india" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
