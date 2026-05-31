const fs = require('fs');

const blrFiles = [
  'src/pages/centers/SriSriAyurvedaHospital.tsx',
  'src/pages/centers/AdyantAyurvedaJayanagar.tsx',
  'src/pages/centers/VydehiAyurvedaHospital.tsx',
  'src/pages/centers/KevaAyurvedaBTMLayout.tsx',
  'src/pages/centers/JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment.tsx',
  'src/pages/centers/HealingEarthAyurvedaHospital.tsx',
  'src/pages/centers/AdivaidyamAyurvedaHospital.tsx',
  'src/pages/centers/IAIMHealthcareCenter.tsx',
  'src/pages/centers/HLCAyurvedaAndNatureCureHospital.tsx',
  'src/pages/centers/PraanaVaidyaAyurvedicHospital.tsx',
  'src/pages/centers/RamaiahIndicSpecialtyAyurvedaHospital.tsx',
  'src/pages/centers/AyurKutiraPanchakarmaCentre.tsx',
  'src/pages/centers/TatkshanaAyurvedaHospital.tsx',
  'src/pages/centers/VarapradaAyurvedicCenter.tsx',
  'src/pages/centers/SDAyurvedaManeHolisticWellnessCentre.tsx',
  'src/pages/centers/AyushmanAyurveda.tsx',
  'src/pages/centers/TravancoreAyurvedaJayanagar.tsx'
];

blrFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Support double quotes, single quotes, and backticks
    const contentRegex = /content:\s*(["'`])([\s\S]*?)\1/g;
    let match;
    let maxLen = 0;
    while ((match = contentRegex.exec(content)) !== null) {
      if (match[2].length > maxLen) {
         maxLen = match[2].length;
      }
    }
    
    if (maxLen > 300) {
       console.log(file.split('/').pop() + ' has LONG reviews (Max: ' + maxLen + ')');
    } else if (maxLen > 0) {
       console.log(file.split('/').pop() + ' has short reviews (Max: ' + maxLen + ')');
    } else {
       console.log(file.split('/').pop() + ' NO REVIEWS FOUND');
    }
  }
});
