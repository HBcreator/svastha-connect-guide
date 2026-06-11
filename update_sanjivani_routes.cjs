const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

const newImport = `import SanjivaniAyurvedicResearchInstitute from "./pages/centers/SanjivaniAyurvedicResearchInstitute";\n`;

if (!appContent.includes('SanjivaniAyurvedicResearchInstitute')) {
    appContent = appContent.replace('const App = () => (', newImport + '\nconst App = () => (');
}

const newRoute = `\n          <Route path="/centers/sanjivani-ayurvedic-research-institute-center-delhi-india" element={<SanjivaniAyurvedicResearchInstitute />} />\n`;

if (!appContent.includes('sanjivani-ayurvedic-research-institute-center-delhi-india')) {
    appContent = appContent.replace('</Routes>', newRoute + '        </Routes>');
}

fs.writeFileSync(appPath, appContent);
console.log("App.tsx updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

// Add the routing and rating logic
if (!centersContent.includes('} else if (name.includes("Sanjivani")) {')) {
    const replacement = `} else if (name.includes("Sanjivani")) {
        finalSlug = "sanjivani-ayurvedic-research-institute-center-delhi-india";
        finalRating = 4.7;
        finalReviews = "400+";
      } else if (name.includes("Kairali")) {`;
    
    centersContent = centersContent.replace('} else if (name.includes("Kairali")) {', replacement);
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx slug fixed!");
} else {
    console.log("Sanjivani slug already exists.");
}

// Ensure the name is exactly "Sanjivani Ayurvedic Research Institute"
if (!centersContent.includes('name = "Sanjivani Ayurvedic Research Institute";')) {
    const nameOverride = `if (name.includes("Tibbia College")) {
        name = "A & U Tibbia College & Hospital";
      }
      if (name.includes("Sanjivani")) {
        name = "Sanjivani Ayurvedic Research Institute";
      }`;
    centersContent = centersContent.replace(
        'if (name.includes("Tibbia College")) {\n        name = "A & U Tibbia College & Hospital";\n      }',
        nameOverride
    );
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx name overriden!");
}
