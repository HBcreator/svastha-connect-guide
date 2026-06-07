const fs = require('fs');

const appPath = 'src/App.tsx';
const cardPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
const pagePath = 'src/pages/centers/AprasuAyurvedicHospital.tsx';

let appContent = fs.readFileSync(appPath, 'utf8');
let cardContent = fs.readFileSync(cardPath, 'utf8');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Update URL slug
const oldSlug = /aprasu-ayurvedic-hospital-new-delhi-india/g;
const newSlug = 'aprasu-ayurvedic-hospital-north-delhi-india';

appContent = appContent.replace(oldSlug, newSlug);
cardContent = cardContent.replace(oldSlug, newSlug);

// Update Breadcrumb
const oldBreadcrumb = />\s*Aprasu Ayurveda Hospital New Delhi\s*<\/li>/;
const newBreadcrumb = '>\n              Aprasu Ayurveda Hospital North Delhi\n            </li>';

pageContent = pageContent.replace(oldBreadcrumb, newBreadcrumb);

fs.writeFileSync(appPath, appContent, 'utf8');
fs.writeFileSync(cardPath, cardContent, 'utf8');
fs.writeFileSync(pagePath, pageContent, 'utf8');

console.log("Aprasu Ayurvedic Hospital link and breadcrumb updated to North Delhi!");
