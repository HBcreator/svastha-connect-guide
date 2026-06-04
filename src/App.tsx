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
import VydehiAyurvedaHospital from "./pages/centers/VydehiAyurvedaHospital";
import SriSriAyurvedaHospital from "./pages/centers/SriSriAyurvedaHospital";
import AdyantAyurvedaJayanagar from "./pages/centers/AdyantAyurvedaJayanagar";
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
import KevaAyurvedaBMTLayout from "./pages/centers/KevaAyurvedaBTMLayout";
import JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment from "./pages/centers/JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment";
import HealingEarthAyurvedaHospital from "./pages/centers/HealingEarthAyurvedaHospital";
import AdivaidyamAyurvedaHospital from "./pages/centers/AdivaidyamAyurvedaHospital";
import IAIMHealthcareCenter from "./pages/centers/IAIMHealthcareCenter";
import HLCAyurvedaAndNatureCureHospital from "./pages/centers/HLCAyurvedaAndNatureCureHospital";
import PraanaVaidyaAyurvedicHospital from "./pages/centers/PraanaVaidyaAyurvedicHospital";
import RamaiahIndicSpecialtyAyurvedaHospital from "./pages/centers/RamaiahIndicSpecialtyAyurvedaHospital";
import AyurKutiraPanchakarmaCentre from "./pages/centers/AyurKutiraPanchakarmaCentre";
import TatkshanaAyurvedaHospital from "./pages/centers/TatkshanaAyurvedaHospital";
import VarapradaAyurvedicCentre from "./pages/centers/VarapradaAyurvedicCenter";
import SDAyurvedaManeHolisticWellnessCentre from "./pages/centers/SDAyurvedaManeHolisticWellnessCentre";
import AyushmanAyurveda from "./pages/centers/AyushmanAyurveda";
import TravancoreAyurvedaJayanagar from "./pages/centers/TravancoreAyurvedaJayanagar";
import KottakkalAryaVaidyaSala from "./pages/centers/KottakkalAryaVaidyaSala";
import Ayurillam from "./pages/centers/Ayurillam";
import DhanwanthralayaAyurvedaSpecialityHospital from "./pages/centers/DhanwanthralayaAyurvedaSpecialityHospital";
import ParathuvayalilAyurvedaHospital from "./pages/centers/ParathuvayalilAyurvedaHospital";
import AryaVaidyaSala from "./pages/centers/AryaVaidyaSala.tsx";
import RasayanaAyurvedaCentre from "./pages/centers/RasayanaAyurvedaCentre.tsx";
import YantraAyurvedicResort from "./pages/centers/YantraAyurvedicResort.tsx";
import ChakraAyurvedicResort from "./pages/centers/ChakraAyurvedicResort.tsx";
import DeepanjaliAyurRetreat from "./pages/centers/DeepanjaliAyurRetreat.tsx";
import MadukkakuzhyAyurveda from "./pages/centers/MadukkakuzhyAyurveda.tsx";
import Veda5WellnessRetreat from "./pages/centers/Veda5WellnessRetreat.tsx";
import AyurTouchAyurvedicHealthcare from "./pages/centers/AyurTouchAyurvedicHealthcare.tsx";
import YashrajAyurvedaClinic from "./pages/centers/YashrajAyurvedaClinic.tsx";
import AyurvedicNaturalHealthCentre from "./pages/centers/AyurvedicNaturalHealthCentre.tsx";
import SreeShantiWellness from "./pages/centers/SreeShantiWellness.tsx";
import NaturalTouchAyurveda from "./pages/centers/NaturalTouchAyurveda.tsx";
import KAREHealth from "./pages/centers/KAREHealth.tsx";
import SRHUAyurvedaCentre from "./pages/centers/SRHUAyurvedaCentre.tsx";
import AyuskamaAyurvedaClinicPanchakarmaCentre from "./pages/centers/AyuskamaAyurvedaClinicPanchakarmaCentre.tsx";
import BholeBabaAyurvedicHospitalResearchCentre from "./pages/centers/BholeBabaAyurvedicHospitalResearchCentre.tsx";
import MamgainAyurvedaClinicPanchakarmaCentre from "./pages/centers/MamgainAyurvedaClinicPanchakarmaCentre.tsx";
import HarithaAyurvedaAcademyPanchakarmaCenter from "./pages/centers/HarithaAyurvedaAcademyPanchakarmaCenter.tsx";
import KAYAKALPHimalayanResearchInstituteofYogaNaturopathy from "./pages/centers/KAYAKALPHimalayanResearchInstituteofYogaNaturopathy.tsx";
import VedicYogaAyurvedaRetreatCentre from "./pages/centers/VedicYogaAyurvedaRetreatCentre.tsx";
import VedanjanaYogaAyurvedaPanchakarmaCentre from "./pages/centers/VedanjanaYogaAyurvedaPanchakarmaCentre.tsx";
import DrSIBYAyurvedaCenter from "./pages/centers/DrSIBYAyurvedaCenter.tsx";
import ArogyamPanchkarmaCentreAyurvedicHospital from "./pages/centers/ArogyamPanchkarmaCentreAyurvedicHospital.tsx";
import RishikeshAyurvedaCenter from "./pages/centers/RishikeshAyurvedaCenter.tsx";
import RUDRAMYAAyurvedaattheHimalayas from "./pages/centers/RUDRAMYAAyurvedaattheHimalayas.tsx";
import HimalayaSanjeevniAyurveda from "./pages/centers/HimalayaSanjeevniAyurveda.tsx";

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
          <Route path="/centers/kerala/agni-ayurvedic-village" element={<AgniAyurvedicVillage />} />
          <Route path="/centers/agni-ayurvedic-village-resort-panvel-mumbai-india" element={<Navigate to="/centers/kerala/agni-ayurvedic-village" replace />} />
          <Route path="/centers/fazlani-natures-nest-wellness-centre-mumbai-india" element={<FazlaniNaturesNest />} />
          <Route path="/centers/atmantan-wellness-resort-pune-india" element={<AtmantanWellnessResort />} />
          <Route path="/centers/viveda-wellness-village-mumbai-india" element={<VivedaWellnessVillage />} />
          <Route path="/centers/dharana-at-shillim-wellness-retreat-pune-india" element={<DharanaAtShillim />} />
          <Route path="/centers/toyam-by-orchid-hotels-wellness-resort-pune-india" element={<ToyamByOrchidHotels />} />
          <Route path="/centers/shathayu-ayurveda-yoga-retreat-udupi-banglore-india" element={<ShathayuAyurvedaYogaRetreat />} />
          <Route path="/centers/shreyas-yoga-retreat-bangalore-india" element={<ShreyasYogaRetreat />} />
          <Route path="/centers/indus-valley-ayurvedic-hospital-mysore-india" element={<IndusValleyAyurvedicCentre />} />
          <Route path="/centers/sri-sri-ayurveda-hospital-bengaluru-india" element={<SriSriAyurvedaHospital />} />

          {/* Kerala flat URL redirects for SEO and button compatibility */}
          <Route path="/centers/somatheeram-ayurvedic-health-resort-kerala-india" element={<Navigate to="/centers/kerala/somatheeram" replace />} />
          <Route path="/centers/veda5-ayurveda-and-yoga-retreat-kerala-india" element={<Navigate to="/centers/veda5" replace />} />
          <Route path="/centers/kairali-heritage-resort-kerala-india" element={<Navigate to="/centers/kerala/kairali-heritage" replace />} />
          <Route path="/centers/dheemahi-ayurveda-village-kumarakom-kerala-india" element={<Navigate to="/centers/kerala/dheemahi-kumarakom" replace />} />
          <Route path="/centers/kairali-the-ayurvedic-healing-village-kerala-india" element={<Navigate to="/centers/kerala/kairali-ayurvedic-healing-village" replace />} />
          <Route path="/centers/nagarjuna-ayurvedic-centre-kerala-india" element={<Navigate to="/centers/kerala/nagarjuna-ayurveda-centre" replace />} />
          <Route path="/centers/sanjeevanam-ayurveda-hospital-kerala-india" element={<Navigate to="/centers/kerala/sanjeevanam-ayurveda-hospital" replace />} />
          <Route path="/centers/back-to-roots-ayurveda-retreat-kerala-india" element={<Navigate to="/centers/kerala/back-to-roots" replace />} />
          <Route path="/centers/dhathri-ayurveda-hospital-and-retreat-kerala-india" element={<Navigate to="/centers/kerala/dhathri-ayurveda" replace />} />
          <Route path="/centers/krishnendu-ayurveda-hospital-kerala-india" element={<Navigate to="/centers/kerala/krishnendu-ayurveda-hospital" replace />} />
          <Route path="/centers/ayurmana-dharma-ayurvedic-centre-kerala-india" element={<Navigate to="/centers/kerala/ayurmana" replace />} />
          <Route path="/centers/chamundi-hill-palace-ayurvedic-resort-mysore-india" element={<Navigate to="/centers/mysore/chamundi-hill-palace" replace />} />
          <Route path="/centers/athreya-ayurvedic-centre-kerala-india" element={<Navigate to="/centers/kerala/athreya-ayurvedic-centre" replace />} />
          <Route path="/centers/ayur-bethaniya-ayurveda-hospital-kerala-india" element={<Navigate to="/centers/kerala/ayur-bethaniya-ayurveda-hospital" replace />} />
          <Route path="/centers/ayursoma-ayurveda-royal-retreat-kerala-india" element={<Navigate to="/centers/kerala/ayursoma" replace />} />
          <Route path="/centers/ayushi-ayurvedic-retreat-kerala-india" element={<Navigate to="/centers/kerala/ayushi-ayurvedic-retreat" replace />} />
          <Route path="/centers/sitaram-mountain-retreat-idukki-india" element={<Navigate to="/centers/idukki/sitaram-mountain-retreat" replace />} />
          <Route path="/centers/akanta-ayurveda-and-yoga-resort-kochi-india" element={<Navigate to="/centers/kochi/akanta-ayurveda-and-yoga-resort" replace />} />
          <Route path="/centers/sitaram-beach-retreat-kerala-india" element={<Navigate to="/centers/kerala/sitaram-beach-retreat" replace />} />

          {/* Himalayas / Rishikesh / Uttarakhand / North East flat URL redirects for SEO */}
          <Route path="/centers/veda5-ayurveda-and-yoga-retreat-rishikesh-india" element={<Navigate to="/centers/veda5" replace />} />
          <Route path="/centers/ayuskama-ayurveda-and-panchakarma-center-dharamshala-india" element={<Navigate to="/centers/dharamshala/ayuskama-ayurveda" replace />} />

          {/* Delhi NCR / North India flat URL redirects for SEO */}
          <Route path="/centers/namaste-dwaar-countryside-wellness-retreat-delhi-india" element={<Navigate to="/centers/delhi/namastedwaar" replace />} />
          <Route path="/centers/naad-wellness-centre-sonepat-delhi-india" element={<Navigate to="/centers/sonepat/naad-wellness" replace />} />
          <Route path="/centers/the-imperial-spa-and-wellness-delhi-india" element={<Navigate to="/centers/delhi/the-imperial-spa-and-wellness" replace />} />
          <Route path="/centers/amanbagh-heritage-wellness-retreat-rajasthan-delhi-india" element={<Navigate to="/centers/rajasthan/amanbagh-heritage-wellness-retreat" replace />} />

          <Route path="/centers/:location" element={<LocationCenters />} />
          <Route path="/centers/soukya-international-holistic-health-centre-bangalore-india" element={<SOUKYACenter />} />

          <Route path="/centers/kare-health-hospital-goa-india" element={<KAREHealth />}/>
          <Route path="/centers/natural-touch-ayurveda-hospital-goa-india" element={<NaturalTouchAyurveda />}/>
          <Route path="/centers/shree-shanti-wellness-hospital-goa-india" element={<SreeShantiWellness />}/>
          <Route path="/centers/ayurvedic-natural-health-center-hospital-goa-india" element={<AyurvedicNaturalHealthCentre />}/>
          <Route path="/centers/yashraj-ayurveda-clinic-hospital-goa-india" element={<YashrajAyurvedaClinic />}/>
          <Route path="/centers/ayur-touch-ayurvedic-healthcare-hospital-goa-india" element={<AyurTouchAyurvedicHealthcare />}/>
          <Route path="/centers/veda5-wellness-retreat-hospital-goa-india" element={<Veda5WellnessRetreat />}/>

          <Route path="/centers/madukkakuzhy-ayurveda-retreat-hospital-kerala-india" element={<MadukkakuzhyAyurveda />}/>
          <Route path="/centers/deepanjali-ayur-retreat-hospital-kerala-india" element={<DeepanjaliAyurRetreat />}/>
          <Route path="/centers/chakra-ayurvedic-resort-hospital-kerala-india" element={<ChakraAyurvedicResort />}/>
          <Route path="/centers/yantra-ayurvedic-resort-hospital-kerala-india" element={<YantraAyurvedicResort />}/>
          <Route path="/centers/rasayana-ayurveda-center-hospital-kerala-india" element={<RasayanaAyurvedaCentre />}/>
          <Route path="/centers/arya-vaidya-sala-hospital-kerala-india" element={<AryaVaidyaSala />}/>
          <Route path="/centers/parathuvayalil-ayurveda-hospital-hospital-kerala-india" element={<ParathuvayalilAyurvedaHospital />}/>

          <Route path="/centers/himalaya-sanjeevni-ayurveda-hospital-dehradun-uttarakhand-india" element={<HimalayaSanjeevniAyurveda />}/>
          <Route path="/centers/rudramya-ayurveda-at-the-himalayas-hospital-himachal-india" element={<RUDRAMYAAyurvedaattheHimalayas />}/>
          <Route path="/centers/rishikesh-ayurveda-center-uttarakhand-india" element={<RishikeshAyurvedaCenter />}/>
          <Route path="/centers/arogyam-panchkarma-centre-haridwar-uttarakhand-india" element={<ArogyamPanchkarmaCentreAyurvedicHospital />}/>
          <Route path="/centers/dr-siby-ayurveda-center-himachal-india" element={<DrSIBYAyurvedaCenter />}/>
          <Route path="/centers/vedanjana-yoga-and-ayurveda-panchakarma-center-rishikesh-uttarakhand-india" element={<VedanjanaYogaAyurvedaPanchakarmaCentre />}/>
          <Route path="/centers/vedic-yoga-and-ayurveda-retreat-center-rishikesh-uttarakhand-india" element={<VedicYogaAyurvedaRetreatCentre />}/>
          <Route path="/centers/kayakalp-himalayan-research-institute-of-yoga-and-naturopath-hospital-himachal-india" element={<KAYAKALPHimalayanResearchInstituteofYogaNaturopathy />}/>
          <Route path="/centers/haritha-ayurveda-academy-and-panchakarma-center-rishikesh-uttarakhand-india" element={<HarithaAyurvedaAcademyPanchakarmaCenter />}/>
          <Route path="/centers/mamgain-ayurvedic-clinic-and-panchakarma-centre-rishikesh-uttarakhand-india" element={<MamgainAyurvedaClinicPanchakarmaCentre />}/>
          <Route path="/centers/bhole-baba-ayurvedic-hospital-and-research-centre-ranikhet-uttarakhand-india" element={<BholeBabaAyurvedicHospitalResearchCentre />}/>
          <Route path="/centers/ayuskama-ayurveda-clinic-and-panchakarma-centre-rishikesh-uttarakhand-india" element={<AyuskamaAyurvedaClinicPanchakarmaCentre />}/>
          <Route path="/centers/swami-rama-himalayan-university-ayurveda-center-dehradun-uttarakhand-india" element={<SRHUAyurvedaCentre />}/>

          <Route path="/centers/dhanwanthralaya-ayurveda-speciality-hospital-chennai-india" element={<DhanwanthralayaAyurvedaSpecialityHospital />}/>
          <Route path="/centers/ayurillam-home-of-ayurvedic-therapy-hospital-chennai-india" element={<Ayurillam />}/>
          <Route path="/centers/kottakkal-arya-vaidya-sala-hospital-chennai-india" element={<KottakkalAryaVaidyaSala />}/>
          <Route path="/centers/travancore-ayurveda-hospital-bengaluru-india" element={<TravancoreAyurvedaJayanagar />}/>
          <Route path="/centers/ayushman-ayurveda-hospital-bengaluru-india" element={<AyushmanAyurveda />}/>
          <Route path="/centers/sd-ayurveda-mane-holistic-wellness-center-hospital-bengaluru-india" element={<SDAyurvedaManeHolisticWellnessCentre />}/>
          <Route path="/centers/varaprada-ayurvedic-center-hospital-bengaluru-india" element={<VarapradaAyurvedicCentre />}/>
          <Route path="/centers/tatkshana-ayurveda-hospital-bengaluru-india" element={<TatkshanaAyurvedaHospital />}/>
          <Route path="/centers/ayurkutira-panchakarma-center-hospital-bengaluru-india" element={<AyurKutiraPanchakarmaCentre />}/>
          <Route path="/centers/ramaiah-indic-specialty-ayurveda-hospital-bengaluru-india" element={<RamaiahIndicSpecialtyAyurvedaHospital />}/>
          <Route path="/centers/praana-vaidya-ayurvedic-hospital-bengaluru-india" element={<PraanaVaidyaAyurvedicHospital />}/>
          <Route path="/centers/hlc-ayurveda-and-nature-cure-hospital-bengaluru-india" element={<HLCAyurvedaAndNatureCureHospital />}/>
          <Route path="/centers/iaim-healthcare-center-hospital-bengaluru-india" element={<IAIMHealthcareCenter />}/>
          <Route path="/centers/adivaidyam-ayurveda-hospital-bengaluru-india" element={<AdivaidyamAyurvedaHospital />}/>
          <Route path="/centers/healing-earth-ayurveda-hospital-bengaluru-india" element={<HealingEarthAyurvedaHospital />}/>
          <Route path="/centers/jayadev-memorial-rashtrotthana-ayurveda-hospital-bengaluru-india" element={<JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment/>} />
          <Route path="/centers/keva-ayurveda-hospital-bengaluru-india" element={<KevaAyurvedaBMTLayout/>} />
          <Route path="/centers/vydehi-ayurveda-hospital-bengaluru-india" element={<VydehiAyurvedaHospital />} />
          <Route path="/centers/bangalore/ayurvedagram" element={<AyurvedaGram />} />
          <Route path="/centers/ayurvedagram-heritage-wellness-centre-bangalore-india" element={<Navigate to="/centers/bangalore/ayurvedagram" replace />} />
          <Route path="/centers/ananda-in-the-himalayas-uttarakhand-india" element={<AnandaInTheHimalayas />} />
          <Route path="/centers/yan-cure-yoga-retreat-and-ayurveda-centre-rishikesh-india" element={<YanCureYogaRetreat />} />
          <Route path="/centers/soul-vacation-resort-spa-goa-india" element={<SoulVacationResort />} />
          <Route path="/centers/swan-yoga-retreat-goa-india" element={<SWANYogaRetreat />} />
          <Route path="/centers/mercure-goa-devaaya-retreat-goa-india" element={<MercureGoaDevaayaResort />} />
          <Route path="/centers/ashiyana-yoga-retreat-village-goa-india" element={<AshiyanaYogaRetreat />} />
          <Route path="/centers/nalanda-retreat-goa-india" element={<NalandaRetreatGoa />} />
          <Route path="/centers/rishikesh/modi-yoga-retreat" element={<ModiYogaRetreat />} />
          <Route path="/centers/sri-sri-ayurveda-hospital-bengaluru-india" element={<SriSriAyurvedaHospital />} />
          <Route path="/centers/adyant-ayurveda-hospital-bengaluru-india" element={<AdyantAyurvedaJayanagar />} />
          <Route path="/centers/itc-grand-bharat-wellness-retreat-gurugram-delhi-india" element={<ITCGrandBharat />} />
          <Route path="/centers/kerala/niraamaya-retreats-surya-samudra" element={<NiraamayaRetreatsSuryaSamudra />} />
          <Route path="/centers/amanbagh-heritage-wellness-retreat-rajasthan-india" element={<AmanbaghHeritageWellnessRetreat />} />
          <Route path="/centers/dharamshala/himveda" element={<HimVeda />} />
          <Route path="/centers/kerala/kalari-kovilakom" element={<KalariKovilakomPalaceForAyurveda />} />
          <Route path="/centers/kerala/carnoustie-ayurveda-wellness-resort" element={<CarnoustieAyurvedaWellnessResort />} />
          <Route path="/centers/kerala/the-nattika-beach-resort" element={<TheNattikaBeachResort />} />
          <Route path="/centers/kerala/sitaram-beach-retreat" element={<SitaramBeachRetreat />} />
          <Route path="/centers/kerala/ideal-ayurvedic-resort" element={<IdealAyurvedicResort />} />
          <Route path="/centers/kerala/somatheeram" element={<Somatheeram />} />
          <Route path="/centers/kerala/kairali-ayurvedic-healing-village" element={<KairaliHealingVillage />} />
          <Route path="/centers/veda5" element={<Veda5Center />} />
          <Route path="/centers/delhi/namastedwaar" element={<NamasteDwaar />} />
          <Route path="/centers/kerala/kairali-heritage" element={<KairaliHeritage />} />
          <Route path="/centers/kerala/dheemahi-kumarakom" element={<DheemahiKumarakom />} />
          <Route path="/centers/kerala/back-to-roots" element={<BackToRoots />} />
          <Route path="/centers/kerala/krishnendu-ayurveda-hospital" element={<KrishnenduAyurvedaHospital />} />
          <Route path="/centers/maharashtra/viveda-wellness-village" element={<VivedaWellnessVillage />} />
          <Route path="/centers/sonepat/naad-wellness" element={<NaadWellness />} />
          <Route path="/centers/pune/dharana-at-shillim" element={<DharanaAtShillim />} />
          <Route path="/centers/delhi/the-imperial-spa-and-wellness" element={<TheImperialSpaAndWellness />} />
          <Route path="/centers/gurugram/itc-grand-bharat" element={<ITCGrandBharat />} />
          <Route path="/centers/rajasthan/amanbagh-heritage-wellness-retreat" element={<AmanbaghHeritageWellnessRetreat />} />
          <Route path="/centers/dharamshala/ayuskama-ayurveda" element={<AyuskamaAyurveda />} />
          <Route path="/centers/kerala/ayursoma" element={<AyurSomaAyurvedaRoyalRetreat />} />
          <Route path="/centers/himachal/sandhya-hot-spring-health-care" element={<SandhyaHotSpringHealthCare />} />
          <Route path="/centers/kerala/ayurmana" element={<AyurmanaCenter />} />
          <Route path="/centers/mysore/chamundi-hill-palace" element={<ChamundiHillPalace />} />
          <Route path="/centers/kerala/kumarakom-lake-resort" element={<KumarakomLakeResort />} />
          <Route path="/centers/kerala/athreya-ayurvedic-centre" element={<AthreyaAyurvedicCentre />} />
          <Route path="/centers/kerala/ayur-bethaniya-ayurveda-hospital" element={<AyurBethaniyaAyurvedaHospital />} />
          <Route path="/centers/kerala/ayushi-ayurvedic-retreat" element={<AyushiAyurvedicRetreat />} />
          <Route path="/centers/idukki/sitaram-mountain-retreat" element={<SitaramMountainRetreat />} />
          <Route path="/centers/kochi/akanta-ayurveda-and-yoga-resort" element={<AkantaAyurvedaYogaResort />} />
          <Route path="/centers/mysore/indus-valley-ayurvedic-centre" element={<IndusValleyAyurvedicCentre />} />
          <Route path="/centers/udupi/shathayu-ayurveda-yoga-retreat" element={<ShathayuAyurvedaYogaRetreat />} />
          <Route path="/centers/kerala/nagarjuna-ayurveda-centre" element={<NagarjunaAyurvedaCentre />} />
          <Route path="/centers/kerala/sanjeevanam-ayurveda-hospital" element={<SanjeevanamAyurvedaHospital />} />
          <Route path="/centers/kerala/dhathri-ayurveda" element={<DhathriAyurvedicHospital />} />
          <Route path="/centers/maharashtra/fazlani-natures-nest" element={<FazlaniNaturesNest />} />
          <Route path="/centers/pune/atmantan-wellness-resort" element={<AtmantanWellnessResort />} />
          <Route path="/centers/pune/toyam-by-orchid-hotels" element={<ToyamByOrchidHotels />} />
          <Route path="/centers/uttarakhand/ananda-in-the-himalayas" element={<AnandaInTheHimalayas />} />
          <Route path="/centers/rishikesh/yan-cure" element={<YanCureYogaRetreat />} />
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
          
          <Route path="/about-myvaidyam" element={<About />} />
          <Route path="/about" element={<Navigate to="/about-myvaidyam" replace />} />
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
