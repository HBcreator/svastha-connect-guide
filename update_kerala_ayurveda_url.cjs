const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

appContent = appContent.replace(
    '<Route path="/centers/kerala-ayurveda-wellness-clinic-hospital-east-of-kailash-center-delhi-india" element={<KeralaAyurvedaWellnessClinicEastofKailash />} />',
    '<Route path="/centers/kerala-ayurveda-wellness-clinic-hospital-new-delhi-india" element={<KeralaAyurvedaWellnessClinicEastofKailash />} />'
);

fs.writeFileSync(appPath, appContent);
console.log("App.tsx route updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

centersContent = centersContent.replace(
    'finalSlug = "kerala-ayurveda-wellness-clinic-hospital-east-of-kailash-center-delhi-india";',
    'finalSlug = "kerala-ayurveda-wellness-clinic-hospital-new-delhi-india";'
);

fs.writeFileSync(centersPath, centersContent);
console.log("DelhiNorthIndiaRegionCenters.tsx slug updated!");
