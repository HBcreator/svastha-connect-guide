const fs = require('fs');

const files = [
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

    // 1. Auto-play review fix
    content = content.replace(/const \[isReviewAutoPlaying, setIsReviewAutoPlaying\] = useState\(true\);/g, 'const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(false);');

    // 2. Alignment fixes in About section
    
    // Find the `<section id="about"...` and replace within that block to be safe.
    // Or just global replace since the user wants mobile left alignment.
    // The heading wrapper: <div className="text-center mb-8 md:mb-16">
    content = content.replace(/className="text-center mb-8/g, 'className="text-left md:text-center mb-8');
    
    // The paragraph wrapper: <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground\/80 text-justify md:text-left"
    content = content.replace(/text-justify md:text-left/g, 'text-left');
    content = content.replace(/text-justify/g, 'text-left');

    fs.writeFileSync(path, content);
    console.log('Processed ' + path);
  } else {
    console.log('File not found: ' + path);
  }
}
