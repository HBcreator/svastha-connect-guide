const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';

const files = [
  'ParathuvayalilAyurvedaHospital.tsx',
  'RasayanaAyurvedaCentre.tsx',
  'YantraAyurvedicResort.tsx',
  'ChakraAyurvedicResort.tsx',
  'DeepanjaliAyurRetreat.tsx',
  'MadukkakuzhyAyurveda.tsx',
];

files.forEach(f => {
  const fp = path.join(dir, f);
  let c = fs.readFileSync(fp, 'utf8');
  const old = 'text-lg md:text-2xl leading-relaxed" style={{ color: "#7F543D" }}>';
  const nw = 'text-base md:text-xl leading-relaxed" style={{ color: "#7F543D" }}>';
  if (c.includes(old)) {
    c = c.replace(old, nw);
    fs.writeFileSync(fp, c);
    console.log('FIXED review text size: ' + f);
  } else {
    console.log('SKIP (already ok): ' + f);
  }
});
