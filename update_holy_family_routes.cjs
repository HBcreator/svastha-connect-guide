const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

const newImport = `import HolyFamilyHospitalAyurvedaDepartment from "./pages/centers/HolyFamilyHospitalAyurvedaDepartment";\n`;

if (!appContent.includes('HolyFamilyHospitalAyurvedaDepartment')) {
    appContent = appContent.replace('const App = () => (', newImport + '\nconst App = () => (');
}

const newRoute = `\n          <Route path="/centers/holy-family-hospital-ayurveda-department-okhla-new-delhi-india" element={<HolyFamilyHospitalAyurvedaDepartment />} />\n`;

if (!appContent.includes('holy-family-hospital-ayurveda-department-okhla-new-delhi-india')) {
    appContent = appContent.replace('</Routes>', newRoute + '        </Routes>');
}

fs.writeFileSync(appPath, appContent);
console.log("App.tsx updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

if (!centersContent.includes('} else if (name.includes("Holy Family Hospital")) {')) {
    const replacement = `} else if (name.includes("Holy Family Hospital")) {
        finalSlug = "holy-family-hospital-ayurveda-department-okhla-new-delhi-india";
        finalRating = 4.6;
        finalReviews = "150+";
      } else if (name.includes("Kerala Ayurveda Wellness Clinic")) {`;
    
    centersContent = centersContent.replace('} else if (name.includes("Kerala Ayurveda Wellness Clinic")) {', replacement);
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx slug fixed!");
} else {
    console.log("Holy Family slug already exists.");
}
