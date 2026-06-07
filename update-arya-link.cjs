const fs = require('fs');

const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(
  /\/centers\/arya-vaidya-sala-ayurvedic-hospital-and-research-center-delhi/g,
  '/centers/arya-vaidya-sala-ayurvedic-hospital-and-research-center-east-delhi-india'
);
fs.writeFileSync(appPath, appContent, 'utf8');

const delhiPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let delhiContent = fs.readFileSync(delhiPath, 'utf8');
delhiContent = delhiContent.replace(
  /slug:\s*"arya-vaidya-sala-ayurvedic-hospital-and-research-center-delhi"/g,
  'slug: "arya-vaidya-sala-ayurvedic-hospital-and-research-center-east-delhi-india"'
);
fs.writeFileSync(delhiPath, delhiContent, 'utf8');

console.log("Updated Arya Vaidya Sala slug to include east-delhi-india");
