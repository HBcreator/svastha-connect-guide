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
import BharatiAyurvedHospital from "./pages/centers/BharatiAyurvedHospital";
import SukhayuAyurveda from "./pages/centers/SukhayuAyurveda";
import SwarayuAyurveda from "./pages/centers/SwarayuAyurveda";
import AyushaktiAyurved from "./pages/centers/AyushaktiAyurved";
import KarmaAyurveda from "./pages/centers/KarmaAyurveda";
import KarmaAyurvedaHospital from "./pages/centers/KarmaAyurvedaHospital";
import SRIAASInstitute from "./pages/centers/SRIAASInstitute";
import ThapovanAyurveda from "./pages/centers/ThapovanAyurveda";
import SomaiyaAyurvihar from "./pages/centers/SomaiyaAyurvihar";
import ProfKRKohliAyurveda from "./pages/centers/ProfKRKohliAyurveda";
import SharayuAyurveda from "./pages/centers/SharayuAyurveda";
import AushadhgyanAyurveda from "./pages/centers/AushadhgyanAyurveda";
import AayushreeAyurvedic from "./pages/centers/AayushreeAyurvedic";
import HerbalHillsAyurveda from "./pages/centers/HerbalHillsAyurveda";
import PravaayuAyurveda from "./pages/centers/PravaayuAyurveda";
import AradhanaAyurveda from "./pages/centers/AradhanaAyurveda";
import DivyamrutAyurcare from "./pages/centers/DivyamrutAyurcare";
import KeralaAyurvedaClinic from "./pages/centers/KeralaAyurvedaClinic";
import AyushAyurvedPanchakarmaCenter from "./pages/centers/AyushAyurvedPanchakarmaCenter";
import ShreeAyurvedHospital from "./pages/centers/ShreeAyurvedHospital";
import AatreyaAyurvedClinic from "./pages/centers/AatreyaAyurvedClinic";
import AshtangAyurvedaHospital from "./pages/centers/AshtangAyurvedaHospital";
import AyushmanBhavaAyurvedaClinic from "./pages/centers/AyushmanBhavaAyurvedaClinic";
import ShreeVishwavallabhAyurvedicCenter from "./pages/centers/ShreeVishwavallabhAyurvedicCenter";
import SOUKYACenter from "./pages/centers/SOUKYACenter";
import Somatheeram from "./pages/centers/Somatheeram";
import Veda5Center from "./pages/centers/Veda5Center";
import KairaliHeritage from "./pages/centers/KairaliHeritage";
import AgniAyurvedicVillage from "./pages/centers/AgniAyurvedicVillage";
import DheemahiKumarakom from "./pages/centers/DheemahiKumarakom";
import KumarakomLakeResort from "./pages/centers/KumarakomLakeResort";
import NamasteDwaar from "./pages/centers/namastedwaar";
import KairaliHealingVillage from "./pages/centers/KairaliHealingVillage";
import NagarjunaAyurvedaCenter from "./pages/centers/NagarjunaAyurvedaCenter";
import SanjeevanamAyurvedaHospital from "./pages/centers/SanjeevanamAyurvedaHospital";
import BackToRoots from "./pages/centers/BackToRoots";
import DhathriAyurvedicHospital from "./pages/centers/DhathriAyurvedicHospital";
import KrishnenduAyurvedaHospital from "./pages/centers/KrishnenduAyurvedaHospital";
import AyurmanaCenter from "./pages/centers/AyurmanaCenter";
import ChamundiHillPalace from "./pages/centers/ChamundiHillPalace";
import AthreyaAyurvedicCenter from "./pages/centers/AthreyaAyurvedicCenter";
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
import IndusValleyAyurvedicCenter from "./pages/centers/IndusValleyAyurvedicCenter";
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
import AsthmaTreatment from "./pages/treatments/AsthmaTreatment";
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
import LuxuryAyurvedaRetreatProgram from "./pages/programs/LuxuryAyurvedaRetreatProgram";
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
import AyurKutiraPanchakarmaCenter from "./pages/centers/AyurKutiraPanchakarmaCenter";
import TatkshanaAyurvedaHospital from "./pages/centers/TatkshanaAyurvedaHospital";
import VarapradaAyurvedicCenter from "./pages/centers/VarapradaAyurvedicCenter";
import SDAyurvedaManeHolisticWellnessCenter from "./pages/centers/SDAyurvedaManeHolisticWellnessCenter";
import AyushmanAyurveda from "./pages/centers/AyushmanAyurveda";
import TravancoreAyurvedaJayanagar from "./pages/centers/TravancoreAyurvedaJayanagar";
import KottakkalAryaVaidyaSala from "./pages/centers/KottakkalAryaVaidyaSala";
import Ayurillam from "./pages/centers/Ayurillam";
import DhanwanthralayaAyurvedaSpecialityHospital from "./pages/centers/DhanwanthralayaAyurvedaSpecialityHospital";
import ParathuvayalilAyurvedaHospital from "./pages/centers/ParathuvayalilAyurvedaHospital";
import AryaVaidyaSala from "./pages/centers/AryaVaidyaSala.tsx";
import RasayanaAyurvedaCenter from "./pages/centers/RasayanaAyurvedaCenter.tsx";
import YantraAyurvedicResort from "./pages/centers/YantraAyurvedicResort.tsx";
import ChakraAyurvedicResort from "./pages/centers/ChakraAyurvedicResort.tsx";
import DeepanjaliAyurRetreat from "./pages/centers/DeepanjaliAyurRetreat.tsx";
import MadukkakuzhyAyurveda from "./pages/centers/MadukkakuzhyAyurveda.tsx";
import Veda5WellnessRetreat from "./pages/centers/Veda5WellnessRetreat.tsx";
import AyurTouchAyurvedicHealthcare from "./pages/centers/AyurTouchAyurvedicHealthcare.tsx";
import YashrajAyurvedaClinic from "./pages/centers/YashrajAyurvedaClinic.tsx";
import AyurvedicNaturalHealthCenter from "./pages/centers/AyurvedicNaturalHealthCenter.tsx";
import SreeShantiWellness from "./pages/centers/SreeShantiWellness.tsx";
import NaturalTouchAyurveda from "./pages/centers/NaturalTouchAyurveda.tsx";
import KAREHealth from "./pages/centers/KAREHealth.tsx";
import DharaAyurGlow from "./pages/centers/DharaAyurGlow.tsx";
import LotusGoa from "./pages/centers/LotusGoa.tsx";
import AnviAyurved from "./pages/centers/AnviAyurved.tsx";
import AyushaktiGoaBranch from "./pages/centers/AyushaktiGoaBranch.tsx";
import YogaGoaAyurvedaRetreats from "./pages/centers/YogaGoaAyurvedaRetreats.tsx";
import AyurvedaGoa from "./pages/centers/AyurvedaGoa.tsx";
import SaiAyurvedaClinic from "./pages/centers/SaiAyurvedaClinic.tsx";
import AyurvedaYogaVillage from "./pages/centers/AyurvedaYogaVillage.tsx";
import AbhayaAyurved from "./pages/centers/AbhayaAyurved.tsx";
import AyurcareGoa from "./pages/centers/AyurcareGoa.tsx";
import GoaSianSpa from "./pages/centers/GoaSianSpa.tsx";
import TattvamOnTheBeach from "./pages/centers/TattvamOnTheBeach.tsx";
import AyurGlow from "./pages/centers/AyurGlow.tsx";
import SRHUAyurvedaCenter from "./pages/centers/SRHUAyurvedaCenter.tsx";
import AyuskamaAyurvedaClinicPanchakarmaCenter from "./pages/centers/AyuskamaAyurvedaClinicPanchakarmaCenter.tsx";
import BholeBabaAyurvedicHospitalResearchCenter from "./pages/centers/BholeBabaAyurvedicHospitalResearchCenter.tsx";
import MamgainAyurvedaClinicPanchakarmaCenter from "./pages/centers/MamgainAyurvedaClinicPanchakarmaCenter.tsx";
import HarithaAyurvedaAcademyPanchakarmaCenter from "./pages/centers/HarithaAyurvedaAcademyPanchakarmaCenter.tsx";
import KAYAKALPHimalayanResearchInstituteofYogaNaturopathy from "./pages/centers/KAYAKALPHimalayanResearchInstituteofYogaNaturopathy.tsx";
import VedicYogaAyurvedaRetreatCenter from "./pages/centers/VedicYogaAyurvedaRetreatCenter.tsx";
import VedanjanaYogaAyurvedaPanchakarmaCenter from "./pages/centers/VedanjanaYogaAyurvedaPanchakarmaCenter.tsx";
import DrSIBYAyurvedaCenter from "./pages/centers/DrSIBYAyurvedaCenter.tsx";
import ArogyamPanchkarmaCenterAyurvedicHospital from "./pages/centers/ArogyamPanchkarmaCenterAyurvedicHospital.tsx";
import RishikeshAyurvedaCenter from "./pages/centers/RishikeshAyurvedaCenter.tsx";
import RUDRAMYAAyurvedaattheHimalayas from "./pages/centers/RUDRAMYAAyurvedaattheHimalayas.tsx";
import HimalayaSanjeevniAyurveda from "./pages/centers/HimalayaSanjeevniAyurveda.tsx";
import NaturovilleWellnessResort from "./pages/centers/NaturovilleWellnessResort.tsx";
import VihanaRetreat from "./pages/centers/VihanaRetreat.tsx";
import PranaSpaAyurveda from "./pages/centers/PranaSpaAyurveda.tsx";
import MokshaHimalayaSpaResort from "./pages/centers/MokshaHimalayaSpaResort.tsx";
import AyurvedaHouseHimalayanAyurveda from "./pages/centers/AyurvedaHouseHimalayanAyurveda.tsx";
import AyurVAIDKalmatia from "./pages/centers/AyurVAIDKalmatia.tsx";
import ModiYogaRetreatRishikesh from "./pages/centers/ModiYogaRetreatRishikesh.tsx";
import ArogyadhamRetreatLuxuryAyurvedaHotel from "./pages/centers/ArogyadhamRetreatLuxuryAyurvedaHotel.tsx";
import MaharishiAyurvedaHospital from "./pages/centers/MaharishiAyurvedaHospital.tsx";
import AashaAyurvedaCenter from "./pages/centers/AashaAyurvedaCenter.tsx";
import TarunVedaAyurvedaHospital from "./pages/centers/TarunVedaAyurvedaHospital.tsx";
import SKKAyurvedaPanchakarma from "./pages/centers/SKKAyurvedaPanchakarma.tsx";
import AprasuAyurvedicHospital from "./pages/centers/AprasuAyurvedicHospital.tsx";
import SanjeevaniAyurveda from "./pages/centers/SanjeevaniAyurveda.tsx";
import SriSriAyurvedaPanchakarmaAyurvedaCenter from "./pages/centers/SriSriAyurvedaPanchakarmaAyurvedaCenter.tsx";
import KeralaAyurvedaLifeAyurvedaPanchakarmaClinic from "./pages/centers/KeralaAyurvedaLifeAyurvedaPanchakarmaClinic.tsx";
import ApolloAyurVAIDHospitalsNehruEnclave from "./pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx";

const queryClient = new QueryClient();


import MirasaAyurvedaHospital from "./pages/centers/MirasaAyurvedaHospital";
import AyurvedaKendraHospital from "./pages/centers/AyurvedaKendraHospital";
import NirmalAyurvedPanchkarmClinic from "./pages/centers/NirmalAyurvedPanchkarmClinic";
import AyurNavaKeralaAyurvedaHospital from "./pages/centers/AyurNavaKeralaAyurvedaHospital";
import KuriasEarthAyurvedaHospital from "./pages/centers/KuriasEarthAyurvedaHospital";
import AllIndiaInstituteOfAyurveda from "./pages/centers/AllIndiaInstituteOfAyurveda";
import ChBrahmPrakashAyurvedCharakSansthan from "./pages/centers/ChBrahmPrakashAyurvedCharakSansthan";
import SriVaidyaAyurvedaPanchakarma from "./pages/centers/SriVaidyaAyurvedaPanchakarma";

import KeralaAyurvedaWellnessClinicEastofKailash from "./pages/centers/KeralaAyurvedaWellnessClinicEastofKailash";

import HolyFamilyHospitalAyurvedaDepartment from "./pages/centers/HolyFamilyHospitalAyurvedaDepartment";

import AandUTibbiaCollegeHospitalPanchakarma from "./pages/centers/AandUTibbiaCollegeHospitalPanchakarma";

import KairaliTheAyurvedicHealingVillageDelhiNCR from "./pages/centers/KairaliTheAyurvedicHealingVillageDelhiNCR";

import SanjivaniAyurvedicResearchInstitute from "./pages/centers/SanjivaniAyurvedicResearchInstitute";

import SriSriTattvaPanchakarmaCentre from "./pages/centers/SriSriTattvaPanchakarmaCentre";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/top-ayurvedic-centers-in-india" element={<TopCenters />} />
          <Route path="/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india" element={<SouthIndiaCenters />} />
          <Route path="/top-10-ayurvedic-centers-hospitals-bangalore" element={<Navigate to="/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india" replace />} />
          <Route path="/top-ayurvedic-centers-in-india/south-india" element={<SouthIndiaCenters />} />
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
          <Route path="/top-ayurvedic-centers-in-india/agni-ayurvedic-village-resort-kerala-india" element={<AgniAyurvedicVillage />} />
          <Route path="/top-ayurvedic-centers-in-india/fazlani-natures-nest-wellness-center-mumbai-india" element={<FazlaniNaturesNest />} />
          <Route path="/top-ayurvedic-centers-in-india/bharati-ayurved-hospital-pune-india" element={<BharatiAyurvedHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/sukhayu-ayurveda-panchakarma-center-nashik-india" element={<SukhayuAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/swarayu-ayurveda-clinic-panchakarma-center-mumbai-india" element={<SwarayuAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/ayushakti-ayurved-health-center-mumbai-india" element={<AyushaktiAyurved />} />
          <Route path="/top-ayurvedic-centers-in-india/karma-ayurveda-clinic-mumbai-india" element={<KarmaAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/karma-ayurveda-hospital-new-delhi-india" element={<KarmaAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/sriaas-sr-institute-of-advanced-ayurvedic-sciences-hospital-mumbai-india" element={<SRIAASInstitute />} />
          <Route path="/top-ayurvedic-centers-in-india/thapovan-ayurveda-hospital-mumbai-india" element={<ThapovanAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/somaiya-ayurvihar-panchakarma-center-mumbai-india" element={<SomaiyaAyurvihar />} />
          <Route path="/top-ayurvedic-centers-in-india/prof-kr-kohlis-ayurveda-panchakarma-center-mumbai-india" element={<ProfKRKohliAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/sharayu-ayurveda-best-ayurvedic-doctor-center-mumbai-india" element={<SharayuAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/aushadhgyan-ayurveda-wellness-center-mumbai-india" element={<AushadhgyanAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/aayushree-ayurvedic-polyclinic-panchakarma-center-mumbai-india" element={<AayushreeAyurvedic />} />
          <Route path="/top-ayurvedic-centers-in-india/herbal-hills-ayurvedic-wellness-center-mumbai-india" element={<HerbalHillsAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/pravaayu-ayurveda-panchkarma-clinic-mumbai-india" element={<PravaayuAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/aradhana-ayurveda-clinic-panchakarma-center-mumbai-india" element={<AradhanaAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/divyamrut-ayurcare-hospital-mumbai-india" element={<DivyamrutAyurcare />} />
          <Route path="/top-ayurvedic-centers-in-india/kerala-ayurveda-multi-speciality-clinic-mumbai-india" element={<KeralaAyurvedaClinic />} />
          <Route path="/top-ayurvedic-centers-in-india/ayush-ayurved-panchakarma-center-mumbai-india" element={<AyushAyurvedPanchakarmaCenter />} />
          <Route path="/top-ayurvedic-centers-in-india/shree-ayurved-panchakarma-hospital-pune-india" element={<ShreeAyurvedHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/aatreya-ayurved-panchakarma-clinic-pune-india" element={<AatreyaAyurvedClinic />} />
          <Route path="/top-ayurvedic-centers-in-india/atmantan-wellness-resort-center-pune-india" element={<AtmantanWellnessResort />} />
          <Route path="/top-ayurvedic-centers-in-india/viveda-wellness-village-resort-mumbai-india" element={<VivedaWellnessVillage />} />
          <Route path="/top-ayurvedic-centers-in-india/dharana-at-shillim-wellness-retreat-center-pune-india" element={<DharanaAtShillim />} />
          <Route path="/top-ayurvedic-centers-in-india/toyam-by-orchid-hotels-wellness-resort-center-pune-india" element={<ToyamByOrchidHotels />} />
          <Route path="/top-ayurvedic-centers-in-india/shreyas-yoga-retreat-center-bangalore-india" element={<ShreyasYogaRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/indus-valley-ayurvedic-hospital-mysore-india" element={<IndusValleyAyurvedicCenter />} />
          <Route path="/top-ayurvedic-centers-in-india/sri-sri-ayurveda-hospital-bengaluru-india" element={<SriSriAyurvedaHospital />} />

          {/* Kerala flat URL redirects for SEO and button compatibility */}

          {/* Himalayas / Rishikesh / Uttarakhand / North East flat URL redirects for SEO */}

          {/* Delhi NCR / North India flat URL redirects for SEO */}
          <Route path="/top-ayurvedic-centers-in-india/naad-wellness-center-delhi-india" element={<NaadWellness />} />
          <Route path="/top-ayurvedic-centers-in-india/the-imperial-spa-and-wellness-center-delhi-india" element={<TheImperialSpaAndWellness />} />

          <Route path="/top-ayurvedic-centers-in-india/:location" element={<LocationCenters />} />
          <Route path="/top-ayurvedic-centers-in-india/soukya-international-holistic-health-center-bangalore-india" element={<SOUKYACenter />} />

          <Route path="/top-ayurvedic-centers-in-india/kare-health-hospital-goa-india" element={<KAREHealth />}/>
          <Route path="/top-ayurvedic-centers-in-india/dhara-ayurglow-center-goa-india" element={<DharaAyurGlow />}/>
          <Route path="/top-ayurvedic-centers-in-india/lotus-goa-resort-goa-india" element={<LotusGoa />}/>
          <Route path="/top-ayurvedic-centers-in-india/anvi-ayurved-center-goa-india" element={<AnviAyurved />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayushakti-goa-branch-center-goa-india" element={<AyushaktiGoaBranch />}/>
          <Route path="/top-ayurvedic-centers-in-india/yoga-goa-ayurveda-retreats-resort-goa-india" element={<YogaGoaAyurvedaRetreats />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurveda-goa-center-goa-india" element={<AyurvedaGoa />}/>
          <Route path="/top-ayurvedic-centers-in-india/sai-ayurveda-clinic-center-goa-india" element={<SaiAyurvedaClinic />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurveda-yoga-village-resort-goa-india" element={<AyurvedaYogaVillage />}/>
          <Route path="/top-ayurvedic-centers-in-india/abhaya-ayurved-center-goa-india" element={<AbhayaAyurved />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurcare-goa-center-goa-india" element={<AyurcareGoa />}/>
          <Route path="/top-ayurvedic-centers-in-india/goa-sian-spa-center-goa-india" element={<GoaSianSpa />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurglow-ayurveda-center-goa-india" element={<AyurGlow />}/>
          <Route path="/top-ayurvedic-centers-in-india/tattvam-on-the-beach-resort-goa-india" element={<TattvamOnTheBeach />}/>
          <Route path="/top-ayurvedic-centers-in-india/natural-touch-ayurveda-hospital-goa-india" element={<NaturalTouchAyurveda />}/>
          <Route path="/top-ayurvedic-centers-in-india/shree-shanti-wellness-hospital-goa-india" element={<SreeShantiWellness />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurvedic-natural-health-center-hospital-goa-india" element={<AyurvedicNaturalHealthCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/yashraj-ayurveda-clinic-hospital-goa-india" element={<YashrajAyurvedaClinic />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayur-touch-ayurvedic-healthcare-hospital-goa-india" element={<AyurTouchAyurvedicHealthcare />}/>
          <Route path="/top-ayurvedic-centers-in-india/veda5-wellness-retreat-hospital-goa-india" element={<Veda5WellnessRetreat />}/>

          <Route path="/top-ayurvedic-centers-in-india/madukkakuzhy-ayurveda-retreat-hospital-kerala-india" element={<MadukkakuzhyAyurveda />}/>
          <Route path="/top-ayurvedic-centers-in-india/deepanjali-ayur-retreat-hospital-kerala-india" element={<DeepanjaliAyurRetreat />}/>
          <Route path="/top-ayurvedic-centers-in-india/chakra-ayurvedic-resort-hospital-kerala-india" element={<ChakraAyurvedicResort />}/>
          <Route path="/top-ayurvedic-centers-in-india/yantra-ayurvedic-resort-hospital-kerala-india" element={<YantraAyurvedicResort />}/>
          <Route path="/top-ayurvedic-centers-in-india/rasayana-ayurveda-center-hospital-kerala-india" element={<RasayanaAyurvedaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/arya-vaidya-sala-hospital-kerala-india" element={<AryaVaidyaSala />}/>
          <Route path="/top-ayurvedic-centers-in-india/parathuvayalil-ayurveda-hospital-hospital-kerala-india" element={<ParathuvayalilAyurvedaHospital />}/>

          <Route path="/top-ayurvedic-centers-in-india/apollo-ayurvaid-life-hospital-new-delhi-india" element={<ApolloAyurVAIDHospitalsNehruEnclave />}/>
          <Route path="/top-ayurvedic-centers-in-india/kerala-ayurveda-life-panchakarma-clinic-new-delhi-india" element={<KeralaAyurvedaLifeAyurvedaPanchakarmaClinic />}/>
          <Route path="/top-ayurvedic-centers-in-india/sri-sri-ayurveda-panchakarma-center-new-delhi-india" element={<SriSriAyurvedaPanchakarmaAyurvedaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/sanjeevani-ayurveda-hospital-new-delhi-india" element={<SanjeevaniAyurveda />}/>
          <Route path="/top-ayurvedic-centers-in-india/aprasu-ayurvedic-hospital-north-delhi-india" element={<AprasuAyurvedicHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/skk-ayurveda-and-panchakarma-hospital-new-delhi-india" element={<SKKAyurvedaPanchakarma />}/>
          <Route path="/top-ayurvedic-centers-in-india/tarunveda-ayurveda-hospital-new-delhi-india" element={<TarunVedaAyurvedaHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/aasha-ayurveda-center-new-delhi-india" element={<AashaAyurvedaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/arya-vaidya-sala-ayurvedic-hospital-and-research-center-east-delhi-india" element={<AryaVaidyaSala/>}/>
          <Route path="/top-ayurvedic-centers-in-india/maharishi-ayurveda-hospital-new-delhi-india" element={<MaharishiAyurvedaHospital />}/>

          <Route path="/top-ayurvedic-centers-in-india/arogyadham-retreat-luxury-ayurveda-hotel-rishikesh-uttarakhand-india" element={<ArogyadhamRetreatLuxuryAyurvedaHotel />}/>
          <Route path="/top-ayurvedic-centers-in-india/modi-yoga-retreat-hospital-rishikesh-uttarakhand-india" element={<ModiYogaRetreatRishikesh />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurvaid-kalmatia-center-almora-uttarakhand-india" element={<AyurVAIDKalmatia />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurveda-house-himalayan-ayurveda-hospital-himachal-india" element={<AyurvedaHouseHimalayanAyurveda />}/>
          <Route path="/top-ayurvedic-centers-in-india/moksha-himalaya-spa-resort-himachal-india" element={<MokshaHimalayaSpaResort />}/>
          <Route path="/top-ayurvedic-centers-in-india/prana-spa-and-ayurveda-resort-rishikesh-uttarakhand-india" element={<PranaSpaAyurveda />}/>
          <Route path="/top-ayurvedic-centers-in-india/vihana-retreat-hospital-rishikesh-uttarakhand-india" element={<VihanaRetreat />}/>
          <Route path="/top-ayurvedic-centers-in-india/naturoville-wellness-resort-rishikesh-uttarakhand-india" element={<NaturovilleWellnessResort />}/>
          <Route path="/top-ayurvedic-centers-in-india/himalaya-sanjeevni-ayurveda-hospital-dehradun-uttarakhand-india" element={<HimalayaSanjeevniAyurveda />}/>
          <Route path="/top-ayurvedic-centers-in-india/rudramya-ayurveda-at-the-himalayas-hospital-himachal-india" element={<RUDRAMYAAyurvedaattheHimalayas />}/>
          <Route path="/top-ayurvedic-centers-in-india/rishikesh-ayurveda-center-uttarakhand-india" element={<RishikeshAyurvedaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/arogyam-panchkarma-center-haridwar-himachal-india" element={<ArogyamPanchkarmaCenterAyurvedicHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/dr-sibys-kerala-ayurveda-and-panchakarma-center-himachal-india" element={<DrSIBYAyurvedaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/vedanjana-yoga-and-ayurveda-panchakarma-center-rishikesh-uttarakhand-india" element={<VedanjanaYogaAyurvedaPanchakarmaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/vedic-yoga-and-ayurveda-retreat-center-rishikesh-uttarakhand-india" element={<VedicYogaAyurvedaRetreatCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/kayakalp-himalayan-research-institute-of-yoga-and-naturopathy-hospital-himachal-india" element={<KAYAKALPHimalayanResearchInstituteofYogaNaturopathy />}/>
          <Route path="/top-ayurvedic-centers-in-india/haritha-ayurveda-academy-and-panchakarma-center-rishikesh-uttarakhand-india" element={<HarithaAyurvedaAcademyPanchakarmaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/mamgain-ayurvedic-clinic-and-panchakarma-center-rishikesh-uttarakhand-india" element={<MamgainAyurvedaClinicPanchakarmaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/bhole-baba-ayurvedic-hospital-and-research-center-ranikhet-uttarakhand-india" element={<BholeBabaAyurvedicHospitalResearchCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayuskama-ayurveda-clinic-and-panchakarma-center-rishikesh-uttarakhand-india" element={<AyuskamaAyurvedaClinicPanchakarmaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/swami-rama-himalayan-university-ayurveda-center-dehradun-uttarakhand-india" element={<SRHUAyurvedaCenter />}/>

          <Route path="/top-ayurvedic-centers-in-india/dhanwanthralaya-ayurveda-speciality-hospital-chennai-india" element={<DhanwanthralayaAyurvedaSpecialityHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurillam-home-of-ayurvedic-therapy-hospital-chennai-india" element={<Ayurillam />}/>
          <Route path="/top-ayurvedic-centers-in-india/kottakkal-arya-vaidya-sala-hospital-chennai-india" element={<KottakkalAryaVaidyaSala />}/>
          <Route path="/top-ayurvedic-centers-in-india/travancore-ayurveda-hospital-bengaluru-india" element={<TravancoreAyurvedaJayanagar />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayushman-ayurveda-hospital-bengaluru-india" element={<AyushmanAyurveda />}/>
          <Route path="/top-ayurvedic-centers-in-india/sd-ayurveda-mane-holistic-wellness-center-hospital-bengaluru-india" element={<SDAyurvedaManeHolisticWellnessCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/varaprada-ayurvedic-center-hospital-bengaluru-india" element={<VarapradaAyurvedicCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/tatkshana-ayurveda-hospital-bengaluru-india" element={<TatkshanaAyurvedaHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/ayurkutira-panchakarma-center-hospital-bengaluru-india" element={<AyurKutiraPanchakarmaCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/ramaiah-indic-specialty-ayurveda-hospital-bengaluru-india" element={<RamaiahIndicSpecialtyAyurvedaHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/praana-vaidya-ayurvedic-hospital-bengaluru-india" element={<PraanaVaidyaAyurvedicHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/hlc-ayurveda-and-nature-cure-hospital-bengaluru-india" element={<HLCAyurvedaAndNatureCureHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/iaim-healthcare-center-hospital-bengaluru-india" element={<IAIMHealthcareCenter />}/>
          <Route path="/top-ayurvedic-centers-in-india/adivaidyam-ayurveda-hospital-bengaluru-india" element={<AdivaidyamAyurvedaHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/healing-earth-ayurveda-hospital-bengaluru-india" element={<HealingEarthAyurvedaHospital />}/>
          <Route path="/top-ayurvedic-centers-in-india/jayadev-memorial-rashtrotthana-ayurveda-hospital-bengaluru-india" element={<JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment/>} />
          <Route path="/top-ayurvedic-centers-in-india/keva-ayurveda-hospital-bengaluru-india" element={<KevaAyurvedaBMTLayout/>} />
          <Route path="/top-ayurvedic-centers-in-india/vydehi-ayurveda-hospital-bengaluru-india" element={<VydehiAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/ayurvedagram-heritage-wellness-center-bangalore-india" element={<AyurvedaGram />} />
          <Route path="/top-ayurvedic-centers-in-india/ananda-in-the-himalayas-uttarakhand-india" element={<AnandaInTheHimalayas />} />
          <Route path="/top-ayurvedic-centers-in-india/yan-cure-yoga-retreat-and-ayurveda-center-rishikesh-india" element={<YanCureYogaRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/soul-vacation-resort-and-wellness-center-goa-india" element={<SoulVacationResort />} />
          <Route path="/top-ayurvedic-centers-in-india/swan-yoga-retreat-and-ayurveda-center-goa-india" element={<SWANYogaRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/mercure-goa-devaaya-resort-ayurveda-wellness-center-goa-india" element={<MercureGoaDevaayaResort />} />
          <Route path="/top-ayurvedic-centers-in-india/ashiyana-yoga-retreat-center-goa-india" element={<AshiyanaYogaRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/nalanda-retreat-center-goa-india" element={<NalandaRetreatGoa />} />
          <Route path="/top-ayurvedic-centers-in-india/modi-yoga-retreat-center-rishikesh-india" element={<ModiYogaRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/sri-sri-ayurveda-hospital-bengaluru-india" element={<SriSriAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/adyant-ayurveda-hospital-bengaluru-india" element={<AdyantAyurvedaJayanagar />} />
          <Route path="/top-ayurvedic-centers-in-india/itc-grand-bharat-wellness-retreat-gurugram-delhi-india" element={<ITCGrandBharat />} />
          <Route path="/top-ayurvedic-centers-in-india/niraamaya-retreats-surya-samudra-resort-kerala-india" element={<NiraamayaRetreatsSuryaSamudra />} />
          <Route path="/top-ayurvedic-centers-in-india/amanbagh-heritage-wellness-retreat-rajasthan-india" element={<AmanbaghHeritageWellnessRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/himveda-heritage-wellness-center-himachal-india" element={<HimVeda />} />
          <Route path="/top-ayurvedic-centers-in-india/kalari-kovilakom-ayurveda-hospital-kerala-india" element={<KalariKovilakomPalaceForAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/carnoustie-ayurveda-wellness-resort-kerala-india" element={<CarnoustieAyurvedaWellnessResort />} />
          <Route path="/top-ayurvedic-centers-in-india/the-nattika-beach-resort-kerala-india" element={<TheNattikaBeachResort />} />
          <Route path="/top-ayurvedic-centers-in-india/sitaram-beach-retreat-resort-kerala-india" element={<SitaramBeachRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/ideal-ayurvedic-resort-kerala-india" element={<IdealAyurvedicResort />} />
          <Route path="/top-ayurvedic-centers-in-india/somatheeram-ayurvedic-health-resort-kerala-india" element={<Somatheeram />} />
          <Route path="/top-ayurvedic-centers-in-india/kairali-ayurvedic-healing-village-hospital-kerala-india" element={<KairaliHealingVillage />} />
          <Route path="/top-ayurvedic-centers-in-india/veda5-ayurveda-yoga-wellness-retreat-center-rishikesh-india" element={<Veda5Center />} />
          <Route path="/top-ayurvedic-centers-in-india/namaste-dwaar-countryside-wellness-retreat-delhi-india" element={<NamasteDwaar />} />
          <Route path="/top-ayurvedic-centers-in-india/kairali-heritage-resort-kerala-india" element={<KairaliHeritage />} />
          <Route path="/top-ayurvedic-centers-in-india/dheemahi-kumarakom-premium-lakeside-retreat-kerala-india" element={<DheemahiKumarakom />} />
          <Route path="/top-ayurvedic-centers-in-india/back-to-roots-ayurveda-retreat-kerala-india" element={<BackToRoots />} />
          <Route path="/top-ayurvedic-centers-in-india/krishnendu-ayurveda-hospital-kerala-india" element={<KrishnenduAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/itc-grand-bharat-wellness-retreat-center-delhi-india" element={<ITCGrandBharat />} />
          <Route path="/top-ayurvedic-centers-in-india/amanbagh-heritage-wellness-retreat-resort-rajasthan-india" element={<AmanbaghHeritageWellnessRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/ayuskama-ayurveda-center-himachal-india" element={<AyuskamaAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/ayursoma-ayurveda-royal-retreat-resort-kerala-india" element={<AyurSomaAyurvedaRoyalRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/sandhya-hot-spring-health-care-hospital-himachal-india" element={<SandhyaHotSpringHealthCare />} />
          <Route path="/top-ayurvedic-centers-in-india/ayurmana-ayurveda-hospital-kerala-india" element={<AyurmanaCenter />} />
          <Route path="/top-ayurvedic-centers-in-india/chamundi-hill-palace-ayurvedic-center-kerala-india" element={<ChamundiHillPalace />} />
          <Route path="/top-ayurvedic-centers-in-india/kumarakom-lake-resort-kerala-india" element={<KumarakomLakeResort />} />
          <Route path="/top-ayurvedic-centers-in-india/athreya-ayurvedic-center-kerala-india" element={<AthreyaAyurvedicCenter />} />
          <Route path="/top-ayurvedic-centers-in-india/ayur-bethaniya-ayurveda-hospital-kerala-india" element={<AyurBethaniyaAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/ayushi-ayurvedic-retreat-kerala-india" element={<AyushiAyurvedicRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/sitaram-mountain-retreat-idukki-india" element={<SitaramMountainRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/akanta-ayurveda-and-yoga-resort-kochi-india" element={<AkantaAyurvedaYogaResort />} />
          <Route path="/top-ayurvedic-centers-in-india/mysore/indus-valley-ayurvedic-center" element={<IndusValleyAyurvedicCenter />} />
          <Route path="/top-ayurvedic-centers-in-india/nagarjuna-ayurveda-center-kerala-india" element={<NagarjunaAyurvedaCenter />} />
          <Route path="/top-ayurvedic-centers-in-india/sanjeevanam-ayurveda-hospital-kerala-india" element={<SanjeevanamAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/dhathri-ayurveda-hospital-kerala-india" element={<DhathriAyurvedicHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/ananda-in-the-himalayas-resort-uttarakhand-india" element={<AnandaInTheHimalayas />} />
          <Route path="/top-ayurvedic-centers-in-india/yan-cure-yoga-retreat-and-ayurveda-center-rishikesh-india" element={<YanCureYogaRetreat />} />
          <Route path="/top-ayurvedic-centers-in-india/:city/:centerId" element={<CenterDetail />} />
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

          <Route path="/ayurveda-treatments/asthma-treatment-in-india" element={<AsthmaTreatment />} />
          <Route path="/ayurveda-treatments/asthma-therapy-in-india" element={<Navigate to="/ayurveda-treatments/asthma-treatment-in-india" replace />} />
          <Route path="/ayurvedic-treatments/asthma-therapy-in-india" element={<Navigate to="/ayurveda-treatments/asthma-treatment-in-india" replace />} />
          
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

          <Route path="/ayurveda-packages/luxury-ayurveda-retreat-program-in-india" element={<LuxuryAyurvedaRetreatProgram />} />
          
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
        
          <Route path="/top-ayurvedic-centers-in-india/mirasa-ayurveda-hospital-new-delhi-india" element={<MirasaAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/ayurveda-kendra-hospital-delhi-india" element={<AyurvedaKendraHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/nirmal-ayurved-panchkarm-clinic-hospital-new-delhi-india" element={<NirmalAyurvedPanchkarmClinic />} />
          <Route path="/top-ayurvedic-centers-in-india/ayurnava-kerala-ayurveda-hospital-new-delhi-india" element={<AyurNavaKeralaAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/kurias-earth-ayurveda-hospital-new-delhi-india" element={<KuriasEarthAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/all-india-institute-of-ayurveda-hospital-new-delhi-india" element={<AllIndiaInstituteOfAyurveda />} />
          <Route path="/top-ayurvedic-centers-in-india/ch-brahm-prakash-ayurved-charak-sansthan-hospital-new-delhi-india" element={<ChBrahmPrakashAyurvedCharakSansthan />} />
          <Route path="/top-ayurvedic-centers-in-india/sri-vaidya-ayurveda-panchkarma-hospital-new-delhi-india" element={<SriVaidyaAyurvedaPanchakarma />} />

        
          <Route path="/top-ayurvedic-centers-in-india/kerala-ayurveda-wellness-center-new-delhi-india" element={<KeralaAyurvedaWellnessClinicEastofKailash />} />
        
          <Route path="/top-ayurvedic-centers-in-india/holy-family-ayurveda-hospital-new-delhi-india" element={<HolyFamilyHospitalAyurvedaDepartment />} />
        
          <Route path="/top-ayurvedic-centers-in-india/a-and-u-tibbia-college-hospital-new-delhi-india" element={<AandUTibbiaCollegeHospitalPanchakarma />} />
        
          <Route path="/top-ayurvedic-centers-in-india/kairali-the-ayurvedic-healing-village-center-new-delhi-india" element={<KairaliTheAyurvedicHealingVillageDelhiNCR />} />
        
          <Route path="/top-ayurvedic-centers-in-india/sanjivani-ayurveda-center-delhi-ncr-india" element={<SanjivaniAyurvedicResearchInstitute />} />
        
          <Route path="/top-ayurvedic-centers-in-india/sri-sri-tattva-panchkarma-center-new-delhi-india" element={<SriSriTattvaPanchakarmaCentre />} />
          <Route path="/top-ayurvedic-centers-in-india/ashtang-ayurveda-super-multi-speciality-hospital-nashik-india" element={<AshtangAyurvedaHospital />} />
          <Route path="/top-ayurvedic-centers-in-india/ayushman-bhava-ayurveda-keraliya-panchakarma-clinic-nashik-india" element={<AyushmanBhavaAyurvedaClinic />} />
          <Route path="/top-ayurvedic-centers-in-india/shree-vishwavallabh-ayurvedic-panchakarma-garbh-sanskar-center-nashik-india" element={<ShreeVishwavallabhAyurvedicCenter />} />
          <Route path="/top-ayurvedic-centers-in-india/shathayu-ayurveda-yoga-retreat-banglore-india" element={<ShathayuAyurvedaYogaRetreat />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
