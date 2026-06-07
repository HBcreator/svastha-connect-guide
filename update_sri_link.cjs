const fs = require('fs');

const appPath = 'src/App.tsx';
const cardPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';

let appContent = fs.readFileSync(appPath, 'utf8');
let cardContent = fs.readFileSync(cardPath, 'utf8');

const oldSlug = /sri-sri-ayurveda-panchakarma-ayurveda-center-hospital-new-delhi-india/g;
const newSlug = 'sri-sri-ayurveda-panchakarma-center-new-delhi-india';

appContent = appContent.replace(oldSlug, newSlug);
cardContent = cardContent.replace(oldSlug, newSlug);

fs.writeFileSync(appPath, appContent, 'utf8');
fs.writeFileSync(cardPath, cardContent, 'utf8');

console.log("Link updated successfully!");
