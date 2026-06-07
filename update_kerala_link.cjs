const fs = require('fs');

const appPath = 'src/App.tsx';
const cardPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';

let appContent = fs.readFileSync(appPath, 'utf8');
let cardContent = fs.readFileSync(cardPath, 'utf8');

const oldSlug = /kerala-ayurveda-life-ayurveda-panchakarma-clinic-hospital-new-delhi-india/g;
const newSlug = 'kerala-ayurveda-life-panchakarma-clinic-new-delhi-india';

appContent = appContent.replace(oldSlug, newSlug);
cardContent = cardContent.replace(oldSlug, newSlug);

fs.writeFileSync(appPath, appContent, 'utf8');
fs.writeFileSync(cardPath, cardContent, 'utf8');

console.log("Kerala Ayurveda Link updated successfully!");
