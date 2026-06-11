const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

const newImport = `import SriSriTattvaPanchakarmaCentre from "./pages/centers/SriSriTattvaPanchakarmaCentre";\n`;

if (!appContent.includes('SriSriTattvaPanchakarmaCentre')) {
    appContent = appContent.replace('const App = () => (', newImport + '\nconst App = () => (');
}

const newRoute = `\n          <Route path="/centers/sri-sri-tattva-panchakarma-centre-new-delhi-india" element={<SriSriTattvaPanchakarmaCentre />} />\n`;

if (!appContent.includes('sri-sri-tattva-panchakarma-centre-new-delhi-india')) {
    appContent = appContent.replace('</Routes>', newRoute + '        </Routes>');
}

fs.writeFileSync(appPath, appContent);
console.log("App.tsx updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

// Add the routing and rating logic
if (!centersContent.includes('} else if (name.includes("Sri Sri")) {')) {
    const replacement = `} else if (name.includes("Sri Sri")) {
        finalSlug = "sri-sri-tattva-panchakarma-centre-new-delhi-india";
        finalRating = 4.6;
        finalReviews = "250+";
      } else if (name.includes("Sanjivani")) {`;
    
    centersContent = centersContent.replace('} else if (name.includes("Sanjivani")) {', replacement);
    console.log("DelhiNorthIndiaRegionCenters.tsx slug fixed!");
}

// Ensure the name is exactly "Sri Sri Tattva Panchakarma Centre - Delhi" and location is Dwarka
const oldNameOverride = `if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {
        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";
      }`;

const newNameOverride = `if (name.includes("Sri Sri")) {
        name = "Sri Sri Tattva Panchakarma Centre - Delhi";
        city = "Dwarka Sector 19, New Delhi, India";
      }`;

if (centersContent.includes(oldNameOverride)) {
    centersContent = centersContent.replace(oldNameOverride, newNameOverride);
    console.log("DelhiNorthIndiaRegionCenters.tsx name and location overriden!");
} else {
    // If exact match fails, try generic replacement
    centersContent = centersContent.replace(
        /if\s*\(name === "Sri Sri Ayurveda Panchakarma \(PanchkarmaTreatment\.com\)"\)\s*\{\s*name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";\s*\}/,
        newNameOverride
    );
    console.log("Used regex to override Sri Sri name and location.");
}

fs.writeFileSync(centersPath, centersContent);
