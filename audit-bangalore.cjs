const fs = require('fs');
const path = require('path');

const dir = 'src/pages/centers';
const allFiles = fs.readdirSync(dir);

// Find all bangalore files
const targets = [
  'SriSriAyurvedaHospital',
  'AdyantAyurvedaJayanagar',
  'VydehiAyurvedaHospital',
  'KevaAyurvedaBTMLayout',
  'JayadevMemorial',
  'HealingEarthAyurvedaHospital',
  'AdivaidyamAyurvedaHospital',
  'IAIMHealthcareCenter',
  'HLCAyurvedaAndNatureCureHospital',
  'PraanaVaidyaAyurvedicHospital',
  'RamaiahIndicSpecialtyAyurvedaHospital',
  'AyurKutiraPanchakarmaCentre',
  'TatkshanaAyurvedaHospital',
  'VarapradaAyurvedicCenter',
  'SDAyurvedaManeHolisticWellnessCentre',
  'AyushmanAyurveda',
  'TravancoreAyurvedaJayanagar',
  'KottakkalAryaVaidyaSala',
  'DhanwanthralayaAyurvedaSpecialityHospital'
];

const found = [];
targets.forEach(t => {
  const match = allFiles.find(f => f.startsWith(t));
  if (match) found.push(path.join(dir, match));
});

console.log('Found ' + found.length + ' files');

// For each file, extract reviews with word counts
found.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const regex = /review:\s*(["'])([\s\S]*?)\1/g;
  let m;
  let reviews = [];
  while ((m = regex.exec(c)) !== null) {
    const words = m[2].trim().split(/\s+/).length;
    reviews.push(words);
  }
  
  // Check breadcrumb
  const breadcrumbMatch = c.match(/font-black shrink-0">\s*\n\s*(.*)/);
  const breadcrumb = breadcrumbMatch ? breadcrumbMatch[1].trim() : 'NOT FOUND';
  const hasBengaluru = breadcrumb.toLowerCase().includes('bengaluru');
  
  console.log(path.basename(f) + ' | reviews: ' + reviews.join(',') + ' | breadcrumb: "' + breadcrumb + '" | hasBengaluru: ' + hasBengaluru);
});
