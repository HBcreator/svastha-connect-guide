const fs = require('fs');
const path = require('path');

const dir = 'src/pages/centers';

// Files that need breadcrumb fix (add Bengaluru)
const breadcrumbFixes = {
  'PraanaVaidyaAyurvedicHospital.tsx': { old: 'PraanaVaidya Ayurvedic Hospital', new: 'PraanaVaidya Ayurvedic Hospital Bengaluru' },
  'RamaiahIndicSpecialtyAyurvedaHospital.tsx': { old: 'Ramaiah Indic Specialty Ayurveda Hospital', new: 'Ramaiah Indic Specialty Ayurveda Hospital Bengaluru' },
  'AyurKutiraPanchakarmaCentre.tsx': { old: 'AyurKutira – Panchakarma Center', new: 'AyurKutira – Panchakarma Center Bengaluru' },
  'TatkshanaAyurvedaHospital.tsx': { old: 'Tatkshana Ayurveda Hospital', new: 'Tatkshana Ayurveda Hospital Bengaluru' },
  'VarapradaAyurvedicCenter.tsx': { old: 'Varaprada Ayurvedic Center', new: 'Varaprada Ayurvedic Center Bengaluru' },
  'SDAyurvedaManeHolisticWellnessCentre.tsx': { old: 'SD Ayurveda Mane – Holistic Wellness Center', new: 'SD Ayurveda Mane – Holistic Wellness Center Bengaluru' },
  'AyushmanAyurveda.tsx': { old: 'Ayushman Ayurveda', new: 'Ayushman Ayurveda Bengaluru' },
  'TravancoreAyurvedaJayanagar.tsx': { old: 'Travancore Ayurveda – Jayanagar', new: 'Travancore Ayurveda – Jayanagar Bengaluru' },
  'KottakkalAryaVaidyaSala.tsx': { old: 'Kottakkal Arya Vaidya Sala – Mahalingapuram', new: 'Kottakkal Arya Vaidya Sala – Mahalingapuram Bengaluru' },
};

// Files with long reviews that need shortening
// Extract, rewrite, and replace
const filesToProcess = [
  'PraanaVaidyaAyurvedicHospital.tsx',
  'RamaiahIndicSpecialtyAyurvedaHospital.tsx',
  'AyurKutiraPanchakarmaCentre.tsx',
  'TatkshanaAyurvedaHospital.tsx',
  'VarapradaAyurvedicCenter.tsx',
  'SDAyurvedaManeHolisticWellnessCentre.tsx',
  'DhanwanthralayaAyurvedaSpecialityHospital.tsx',
];

// First extract all reviews from these files
filesToProcess.forEach(f => {
  const fp = path.join(dir, f);
  const c = fs.readFileSync(fp, 'utf8');
  const regex = /review:\s*(["'])([\s\S]*?)\1/g;
  let m;
  let idx = 0;
  while ((m = regex.exec(c)) !== null) {
    const words = m[2].trim().split(/\s+/).length;
    if (words > 40) {
      console.log('LONG: ' + f + ' review#' + idx + ' (' + words + ' words): ' + m[2].substring(0, 80) + '...');
    }
    idx++;
  }
});
