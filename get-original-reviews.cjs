const { execSync } = require('child_process');
const fs = require('fs');

const files = [
  'src/pages/centers/PraanaVaidyaAyurvedicHospital.tsx',
  'src/pages/centers/RamaiahIndicSpecialtyAyurvedaHospital.tsx',
  'src/pages/centers/AyurKutiraPanchakarmaCentre.tsx',
  'src/pages/centers/TatkshanaAyurvedaHospital.tsx',
  'src/pages/centers/VarapradaAyurvedicCenter.tsx',
  'src/pages/centers/SDAyurvedaManeHolisticWellnessCentre.tsx',
  'src/pages/centers/AyushmanAyurveda.tsx',
  'src/pages/centers/TravancoreAyurvedaJayanagar.tsx'
];

let reviewMap = {};

files.forEach(file => {
  try {
     const original = execSync('git show HEAD:' + file, {encoding: 'utf8'});
     const reviewRegex = /review:\s*(["'`])([\s\S]*?)\1/g;
     let match;
     while ((match = reviewRegex.exec(original)) !== null) {
       if (match[2].length > 250) {
          console.log('\n--- ' + file + ' ---');
          console.log(match[2]);
       }
     }
  } catch(e) {
     console.error('Error on ' + file);
  }
});
