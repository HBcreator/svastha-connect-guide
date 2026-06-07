const fs = require('fs');

const delhiPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let delhiContent = fs.readFileSync(delhiPath, 'utf8');

// Replace the broken name and old slug
delhiContent = delhiContent.replace(
  /name:\s*"Arya Vaidya Sala[^"]+Research Center & Ayurvedic Hospital \(Delhi\)"/,
  'name: "Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)"'
);
delhiContent = delhiContent.replace(
  /slug:\s*"arya-vaidya-sala-research-center-and-ayurvedia-hospital-karkardooma-east-delhi-india"/,
  'slug: "arya-vaidya-sala-ayurvedic-hospital-and-research-center-delhi"'
);

fs.writeFileSync(delhiPath, delhiContent, 'utf8');

const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');
appContent = appContent.replace(
  /\/centers\/arya-vaidya-sala-research-center-and-ayurvedia-hospital-karkardooma-east-delhi-india/g,
  '/centers/arya-vaidya-sala-ayurvedic-hospital-and-research-center-delhi'
);
fs.writeFileSync(appPath, appContent, 'utf8');

const centerPath = 'src/pages/centers/AryaVaidyaSala.tsx';
let centerContent = fs.readFileSync(centerPath, 'utf8');
// Fix H1 and H2s
centerContent = centerContent.replace(/Arya Vaidya Sala Research Center And Ayruveda Hospital/g, "Arya Vaidya Sala - Ayurvedic Hospital & Research Center");
fs.writeFileSync(centerPath, centerContent, 'utf8');

console.log("Updated Arya Vaidya Sala in Delhi.");
