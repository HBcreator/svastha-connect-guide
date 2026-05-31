const { execSync } = require('child_process');
const fs = require('fs');

const files = [
  'src/pages/centers/PraanaVaidyaAyurvedicHospital.tsx',
  'src/pages/centers/RamaiahIndicSpecialtyAyurvedaHospital.tsx',
  'src/pages/centers/AyurKutiraPanchakarmaCentre.tsx',
  'src/pages/centers/TatkshanaAyurvedaHospital.tsx'
];

files.forEach(file => {
  try {
     const original = execSync('git show HEAD:' + file, {encoding: 'utf8'});
     const reviewRegex = /review:\s*(["'`])([\s\S]*?)\1/g;
     let match;
     while ((match = reviewRegex.exec(original)) !== null) {
       if (match[2].length > 250) {
          console.log(JSON.stringify(match[2]) + ': "REWRITTEN VERSION",');
       }
     }
  } catch(e) {
     console.error('Error on ' + file);
  }
});
