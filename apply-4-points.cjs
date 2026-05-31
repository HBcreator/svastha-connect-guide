const fs = require('fs');

const files = [
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
    
    // 1. Paragraph Text Alignment: left-aligned
    content = content.replace(/text-justify hyphens-auto md:text-left/g, 'text-left');
    content = content.replace(/text-justify md:text-left/g, 'text-left');
    content = content.replace(/text-justify hyphens-auto/g, 'text-left');
    content = content.replace(/text-justify/g, 'text-left');
    
    // 2. Paragraph Text Size: reduce to text-base on mobile
    content = content.replace(/className="space-y-6 text-lg md:text-xl/g, 'className="space-y-6 text-base md:text-xl');

    // 3. Heading Alignment: explicitly center-aligned
    content = content.replace(/className="text-left md:text-center mb-8/g, 'className="text-center mb-8');

    // 4. Review Auto-Rotate: set to false
    content = content.replace(/const \[isReviewAutoPlaying, setIsReviewAutoPlaying\] = useState\(true\);/g, 'const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(false);');

    if (before !== content) {
       fs.writeFileSync(path, content);
       console.log('Applied fixes to ' + path);
       replacedCount++;
    } else {
       console.log('Already fully configured: ' + path);
    }
  } else {
    console.log('File not found: ' + path);
  }
}

console.log('Total files modified: ' + replacedCount);
