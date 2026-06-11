const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

const newImports = `
import MirasaAyurvedaHospital from "./pages/centers/MirasaAyurvedaHospital";
import AyurvedaKendraHospital from "./pages/centers/AyurvedaKendraHospital";
import NirmalAyurvedPanchkarmClinic from "./pages/centers/NirmalAyurvedPanchkarmClinic";
import AyurNavaKeralaAyurvedaHospital from "./pages/centers/AyurNavaKeralaAyurvedaHospital";
import KuriasEarthAyurvedaHospital from "./pages/centers/KuriasEarthAyurvedaHospital";
import AllIndiaInstituteOfAyurveda from "./pages/centers/AllIndiaInstituteOfAyurveda";
import ChBrahmPrakashAyurvedCharakSansthan from "./pages/centers/ChBrahmPrakashAyurvedCharakSansthan";
import SriVaidyaAyurvedaPanchakarma from "./pages/centers/SriVaidyaAyurvedaPanchakarma";
`;

if (!appContent.includes('MirasaAyurvedaHospital')) {
    appContent = appContent.replace('const App = () => (', newImports + '\nconst App = () => (');
}

const newRoutes = `
          <Route path="/centers/mirasa-ayurveda-hospital-new-delhi-india" element={<MirasaAyurvedaHospital />} />
          <Route path="/centers/ayurveda-kendra-hospital-safdarjung-delhi-india" element={<AyurvedaKendraHospital />} />
          <Route path="/centers/nirmal-ayurved-panchkarm-clinic-hospital-new-delhi-india" element={<NirmalAyurvedPanchkarmClinic />} />
          <Route path="/centers/ayurnava-kerala-ayurveda-hospital-dwarka-new-delhi-india" element={<AyurNavaKeralaAyurvedaHospital />} />
          <Route path="/centers/kurias-earth-ayurveda-hospital-green-park-new-delhi-india" element={<KuriasEarthAyurvedaHospital />} />
          <Route path="/centers/all-india-institute-of-ayurveda-hospital-new-delhi-india" element={<AllIndiaInstituteOfAyurveda />} />
          <Route path="/centers/ch-brahm-prakash-ayurved-charak-sansthan-hospital-new-delhi-india" element={<ChBrahmPrakashAyurvedCharakSansthan />} />
          <Route path="/centers/sri-vaidya-ayurveda-panchakarma-hospital-delhi-india" element={<SriVaidyaAyurvedaPanchakarma />} />
`;

if (!appContent.includes('mirasa-ayurveda-hospital-new-delhi-india')) {
    appContent = appContent.replace('</Routes>', newRoutes + '\n        </Routes>');
}

fs.writeFileSync(appPath, appContent);
console.log("App.tsx routes fixed successfully!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

if (!centersContent.includes('} else if (name.includes("Sri Vaidya")) {')) {
    const replacement = `} else if (name.includes("Sri Vaidya")) {
        finalSlug = "sri-vaidya-ayurveda-panchakarma-hospital-delhi-india";
        finalRating = 4.6;
        finalReviews = "250+";
      } else if (name.includes("CBPACS")) {`;
    
    centersContent = centersContent.replace('} else if (name.includes("CBPACS")) {', replacement);
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx slug fixed successfully!");
} else {
    console.log("Sri Vaidya slug already exists.");
}
