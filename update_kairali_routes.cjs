const fs = require('fs');

// 1. Fix App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

const newImport = `import KairaliTheAyurvedicHealingVillageDelhiNCR from "./pages/centers/KairaliTheAyurvedicHealingVillageDelhiNCR";\n`;

if (!appContent.includes('KairaliTheAyurvedicHealingVillageDelhiNCR')) {
    appContent = appContent.replace('const App = () => (', newImport + '\nconst App = () => (');
}

const newRoute = `\n          <Route path="/centers/kairali-the-ayurvedic-healing-village-hospital-new-delhi-india" element={<KairaliTheAyurvedicHealingVillageDelhiNCR />} />\n`;

if (!appContent.includes('kairali-the-ayurvedic-healing-village-hospital-new-delhi-india')) {
    appContent = appContent.replace('</Routes>', newRoute + '        </Routes>');
}

fs.writeFileSync(appPath, appContent);
console.log("App.tsx updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

if (!centersContent.includes('} else if (name.includes("Kairali")) {')) {
    const replacement = `} else if (name.includes("Kairali")) {
        finalSlug = "kairali-the-ayurvedic-healing-village-hospital-new-delhi-india";
        finalRating = 4.7;
        finalReviews = "300+";
      } else if (name.includes("Holy Family Hospital")) {`;
    
    centersContent = centersContent.replace('} else if (name.includes("Holy Family Hospital")) {', replacement);
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx slug fixed!");
} else {
    console.log("Kairali slug already exists.");
}
