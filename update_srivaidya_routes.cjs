const fs = require('fs');
const appPath = 'src/App.tsx';
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';

let appContent = fs.readFileSync(appPath, 'utf8');

// Inject Import
if (!appContent.includes('import SriVaidyaAyurvedaPanchakarma')) {
  appContent = appContent.replace(
    'import AllIndiaInstituteOfAyurveda from "./pages/centers/AllIndiaInstituteOfAyurveda.tsx";',
    'import AllIndiaInstituteOfAyurveda from "./pages/centers/AllIndiaInstituteOfAyurveda.tsx";\nimport SriVaidyaAyurvedaPanchakarma from "./pages/centers/SriVaidyaAyurvedaPanchakarma.tsx";'
  );
}

// Inject Route
if (!appContent.includes('path="/centers/sri-vaidya-ayurveda-panchakarma-hospital-delhi-india"')) {
  appContent = appContent.replace(
    '<Route path="/centers/all-india-institute-of-ayurveda-hospital-new-delhi-india" element={<AllIndiaInstituteOfAyurveda />} />',
    '<Route path="/centers/all-india-institute-of-ayurveda-hospital-new-delhi-india" element={<AllIndiaInstituteOfAyurveda />} />\n          <Route path="/centers/sri-vaidya-ayurveda-panchakarma-hospital-delhi-india" element={<SriVaidyaAyurvedaPanchakarma />} />'
  );
}

fs.writeFileSync(appPath, appContent);
console.log("App.tsx updated!");

// Update centers mapping
let centersContent = fs.readFileSync(centersPath, 'utf8');
if (!centersContent.includes('case "Sri Vaidya Ayurveda Panchakarma"')) {
  centersContent = centersContent.replace(
    'case "All India Institute of Ayurveda (AIIA)":\n        return "all-india-institute-of-ayurveda-hospital-new-delhi-india";',
    'case "All India Institute of Ayurveda (AIIA)":\n        return "all-india-institute-of-ayurveda-hospital-new-delhi-india";\n      case "Sri Vaidya Ayurveda Panchakarma":\n        return "sri-vaidya-ayurveda-panchakarma-hospital-delhi-india";'
  );
}

// Update review mapping
if (!centersContent.includes('reviews: "250+ Reviews"')) {
  centersContent = centersContent.replace(
    'const customData: Record<string, { rating: string; reviews: string }> = {\n    "Apollo AyurVAID Hospitals (Nehru Enclave)": { rating: "4.3", reviews: "170 Reviews" },',
    'const customData: Record<string, { rating: string; reviews: string }> = {\n    "Sri Vaidya Ayurveda Panchakarma": { rating: "4.6", reviews: "250+ Reviews" },\n    "Apollo AyurVAID Hospitals (Nehru Enclave)": { rating: "4.3", reviews: "170 Reviews" },'
  );
}

fs.writeFileSync(centersPath, centersContent);
console.log("DelhiNorthIndiaRegionCenters.tsx updated!");
