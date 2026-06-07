const fs = require('fs');

const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(
  /\/centers\/dr-siby-ayurveda-center-himachal-india/g,
  '/centers/dr-sibys-kerala-ayurveda-and-panchakarma-center-himachal-india'
);
fs.writeFileSync(appPath, appContent, 'utf8');

const himalayaPath = 'src/pages/HimalayasRishikeshUttarakhandNorthEastCenters.tsx';
let himContent = fs.readFileSync(himalayaPath, 'utf8');
himContent = himContent.replace(
  /"dr-siby-ayurveda-center-himachal-india"/g,
  '"dr-sibys-kerala-ayurveda-and-panchakarma-center-himachal-india"'
);
fs.writeFileSync(himalayaPath, himContent, 'utf8');

const mdPath = 'public/Anchor pages/Himalayan/savastha_himalaya_centers.md';
let mdContent = fs.readFileSync(mdPath, 'utf8');
mdContent = mdContent.replace(
  /Dr\. SIBY's Ayurveda Center/g,
  "Dr. SIBY's Kerala Ayurveda & Panchakarma Center"
);
fs.writeFileSync(mdPath, mdContent, 'utf8');

console.log("Updated Dr. SIBY link and name in App.tsx, HimalayasRishikeshUttarakhandNorthEastCenters.tsx, and markdown file.");
