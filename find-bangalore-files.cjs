const fs = require('fs');

// Find all bangalore page files
const centerDir = 'src/pages/centers';
const allFiles = fs.readdirSync(centerDir);

// Map of known bangalore pages
const bangaloreTargets = [
  'SriSriAyurveda',
  'Adyant',
  'Vydehi',
  'Keva',
  'JayadevMemorial',
  'HealingEarth',
  'Adivaidyam',
  'IAIM',
  'HLC',
  'PraanaVaidya',
  'Ramaiah',
  'AyurKutira',
  'Tatkshana',
  'Varaprada',
  'SDAyurveda',
  'Ayushman',
  'Travancore',
  'KottakkalMahalingapuram',
  'Ayurillam',
  'Dhanwanthralaya'
];

const found = [];
bangaloreTargets.forEach(t => {
  const match = allFiles.find(f => f.toLowerCase().includes(t.toLowerCase()));
  found.push({ target: t, file: match || 'NOT FOUND' });
  console.log(t + ' -> ' + (match || 'NOT FOUND'));
});
