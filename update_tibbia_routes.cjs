const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

const newImport = `import AandUTibbiaCollegeHospitalPanchakarma from "./pages/centers/AandUTibbiaCollegeHospitalPanchakarma";\n`;

if (!appContent.includes('AandUTibbiaCollegeHospitalPanchakarma')) {
    appContent = appContent.replace('const App = () => (', newImport + '\nconst App = () => (');
}

const newRoute = `\n          <Route path="/centers/a-and-u-tibbia-college-hospital-panchakarma-new-delhi-india" element={<AandUTibbiaCollegeHospitalPanchakarma />} />\n`;

if (!appContent.includes('a-and-u-tibbia-college-hospital-panchakarma-new-delhi-india')) {
    appContent = appContent.replace('</Routes>', newRoute + '        </Routes>');
}

fs.writeFileSync(appPath, appContent);
console.log("App.tsx updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

if (!centersContent.includes('} else if (name.includes("Tibbia College")) {')) {
    const replacement = `} else if (name.includes("Tibbia College")) {
        finalSlug = "a-and-u-tibbia-college-hospital-panchakarma-new-delhi-india";
        finalRating = 4.1;
        finalReviews = "500+";
      } else if (name.includes("Holy Family Hospital")) {`;
    
    centersContent = centersContent.replace('} else if (name.includes("Holy Family Hospital")) {', replacement);
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx slug fixed!");
} else {
    console.log("Tibbia College slug already exists.");
}
