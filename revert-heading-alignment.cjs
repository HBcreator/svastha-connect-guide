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

for (const path of files) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Revert heading alignment to center
    content = content.replace(/className="text-left md:text-center mb-8/g, 'className="text-center mb-8');

    fs.writeFileSync(path, content);
    console.log('Reverted heading alignment in ' + path);
  } else {
    console.log('File not found: ' + path);
  }
}
