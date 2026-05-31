const fs = require('fs');

const files = [
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
  'src/pages/centers/TravancoreAyurvedaJayanagar.tsx',
  'src/pages/centers/KottakkalAryaVaidyaSala.tsx',
  'src/pages/centers/Ayurillam.tsx',
  'src/pages/centers/DhanwanthralayaAyurvedaSpecialityHospital.tsx'
];

let replacedCount = 0;

for (const path of files) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    const before = content;
    // The classes might be "text-justify hyphens-auto md:text-left" or some variation.
    // Replace text-justify and hyphens-auto globally inside className definitions, 
    // or specifically target this common block.
    content = content.replace(/text-justify hyphens-auto md:text-left/g, 'text-left');
    content = content.replace(/text-justify md:text-left/g, 'text-left');
    content = content.replace(/text-justify hyphens-auto/g, 'text-left');
    content = content.replace(/text-justify/g, 'text-left');
    
    if (before !== content) {
       fs.writeFileSync(path, content);
       console.log('Fixed paragraph alignment in ' + path);
       replacedCount++;
    } else {
       console.log('No text-justify found in ' + path);
    }
  } else {
    console.log('File not found: ' + path);
  }
}

console.log('Total files fixed: ' + replacedCount);
