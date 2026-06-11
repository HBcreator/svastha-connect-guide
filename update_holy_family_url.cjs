const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

appContent = appContent.replace(
    '<Route path="/centers/holy-family-hospital-ayurveda-department-okhla-new-delhi-india" element={<HolyFamilyHospitalAyurvedaDepartment />} />',
    '<Route path="/centers/holy-family-hospital-ayurveda-department-hospital-new-delhi-india" element={<HolyFamilyHospitalAyurvedaDepartment />} />'
);

fs.writeFileSync(appPath, appContent);
console.log("App.tsx route updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

centersContent = centersContent.replace(
    'finalSlug = "holy-family-hospital-ayurveda-department-okhla-new-delhi-india";',
    'finalSlug = "holy-family-hospital-ayurveda-department-hospital-new-delhi-india";'
);

fs.writeFileSync(centersPath, centersContent);
console.log("DelhiNorthIndiaRegionCenters.tsx slug updated!");
