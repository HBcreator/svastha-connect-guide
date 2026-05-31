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
    // Using simple logic to extract strings inside content: "..."
    const contentRegex = /content:\s*\"([^\"]+)\"/g;
    let match;
    let hasLongReview = false;
    let maxLen = 0;
    while ((match = contentRegex.exec(content)) !== null) {
      if (match[1].length > maxLen) {
         maxLen = match[1].length;
      }
    }
    
    // E.g., if a review is longer than 250 characters, it might cause mobile overflow
    if (maxLen > 250) {
       console.log(file.split('/').pop() + ' has LONG reviews (Max length: ' + maxLen + ' characters)');
    } else if (maxLen > 0) {
       console.log(file.split('/').pop() + ' has short reviews (Max length: ' + maxLen + ' characters)');
    }
  }
});
