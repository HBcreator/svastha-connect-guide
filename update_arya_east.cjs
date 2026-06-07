const fs = require('fs');

const appPath = 'src/App.tsx';
const cardPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
const pagePath = 'src/pages/centers/AryaVaidyaSala.tsx';

let appContent = fs.readFileSync(appPath, 'utf8');
let cardContent = fs.readFileSync(cardPath, 'utf8');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Update URL slug
const oldSlug = /arya-vaidya-sala-ayurvedic-hospital-and-research-center-new-delhi-india/g;
const newSlug = 'arya-vaidya-sala-ayurvedic-hospital-and-research-center-east-delhi-india';

appContent = appContent.replace(oldSlug, newSlug);
cardContent = cardContent.replace(oldSlug, newSlug);

// Update Breadcrumb
const oldBreadcrumb = />\s*Arya Vaidya Sala - Ayurvedic Hospital & Research Center New Delhi\s*<\/li>/;
const newBreadcrumb = '>\n              Arya Vaidya Sala - Ayurvedic Hospital & Research Center East Delhi\n            </li>';

pageContent = pageContent.replace(oldBreadcrumb, newBreadcrumb);

fs.writeFileSync(appPath, appContent, 'utf8');
fs.writeFileSync(cardPath, cardContent, 'utf8');
fs.writeFileSync(pagePath, pageContent, 'utf8');

console.log("Arya Vaidya Sala link and breadcrumb updated to East Delhi!");
