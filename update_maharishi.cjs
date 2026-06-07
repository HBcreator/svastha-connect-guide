const fs = require('fs');

// 1. Update App.tsx
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(
  /\/centers\/maharishi-ayurveda-hospital-shalimar-bagh-new-delhi-india/g,
  '/centers/maharishi-ayurveda-hospital-new-delhi-india'
);
fs.writeFileSync(appPath, appContent, 'utf8');

// 2. Update DelhiNorthIndiaRegionCenters.tsx
const cardPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let cardContent = fs.readFileSync(cardPath, 'utf8');
cardContent = cardContent.replace(
  /slug: "maharishi-ayurveda-hospital-shalimar-bagh-new-delhi-india"/g,
  'slug: "maharishi-ayurveda-hospital-new-delhi-india"'
);
fs.writeFileSync(cardPath, cardContent, 'utf8');

// 3. Update Breadcrumb in MaharishiAyurvedaHospital.tsx
const pagePath = 'src/pages/centers/MaharishiAyurvedaHospital.tsx';
let pageContent = fs.readFileSync(pagePath, 'utf8');
pageContent = pageContent.replace(
  />\s*Maharishi Ayurveda Hospital Shalimar Bagh New Delhi\s*<\/li>/,
  '>\n              Maharishi Ayurveda Hospital New Delhi\n            </li>'
);
fs.writeFileSync(pagePath, pageContent, 'utf8');

console.log("All fixes applied successfully!");
