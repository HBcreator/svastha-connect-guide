const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

const newImport = `import KeralaAyurvedaWellnessClinicEastofKailash from "./pages/centers/KeralaAyurvedaWellnessClinicEastofKailash";\n`;

if (!appContent.includes('KeralaAyurvedaWellnessClinicEastofKailash')) {
    appContent = appContent.replace('const App = () => (', newImport + '\nconst App = () => (');
}

const newRoute = `\n          <Route path="/centers/kerala-ayurveda-wellness-clinic-hospital-east-of-kailash-center-delhi-india" element={<KeralaAyurvedaWellnessClinicEastofKailash />} />\n`;

if (!appContent.includes('kerala-ayurveda-wellness-clinic-hospital-east-of-kailash-center-delhi-india')) {
    appContent = appContent.replace('</Routes>', newRoute + '        </Routes>');
}

fs.writeFileSync(appPath, appContent);
console.log("App.tsx updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

if (!centersContent.includes('} else if (name.includes("Kerala Ayurveda Wellness Clinic")) {')) {
    const replacement = `} else if (name.includes("Kerala Ayurveda Wellness Clinic")) {
        finalSlug = "kerala-ayurveda-wellness-clinic-hospital-east-of-kailash-center-delhi-india";
        finalRating = 4.8;
        finalReviews = "200+";
      } else if (name.includes("CBPACS")) {`;
    
    centersContent = centersContent.replace('} else if (name.includes("CBPACS")) {', replacement);
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx slug fixed!");
} else {
    console.log("Kerala Ayurveda slug already exists.");
}
