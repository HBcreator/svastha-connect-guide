const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';

const files = [
  'ParathuvayalilAyurvedaHospital.tsx',
  'KottakkalAryaVaidyaSala.tsx',
  'RasayanaAyurvedaCentre.tsx',
  'YantraAyurvedicResort.tsx',
  'ChakraAyurvedicResort.tsx',
  'DeepanjaliAyurRetreat.tsx',
  'MadukkakuzhyAyurveda.tsx',
];

files.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) {
    console.log('NOT FOUND: ' + f);
    return;
  }
  let c = fs.readFileSync(fp, 'utf8');
  
  // Replace the contact numbers
  // Similar to Goa, find anything looking like +91 12345 67890
  const phoneRegex = /\+91[\s\d\/]+/g;
  
  c = c.replace(phoneRegex, (match) => {
    // skip urls
    if (match.includes('http') || match.includes('embed')) return match;
    return '+91 989 xxxx xxx';
  });
  
  fs.writeFileSync(fp, c);
  console.log('REPLACED numbers in ' + f);
});
