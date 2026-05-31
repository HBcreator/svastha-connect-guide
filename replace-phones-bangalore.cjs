const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';

const files = [
  'SriSriAyurvedaHospital.tsx',
  'AdyantAyurvedaJayanagar.tsx',
  'VydehiAyurvedaHospital.tsx',
  'KevaAyurvedaBTMLayout.tsx',
  'JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment.tsx',
  'HealingEarthAyurvedaHospital.tsx',
  'AdivaidyamAyurvedaHospital.tsx',
  'IAIMHealthcareCenter.tsx',
  'HLCAyurvedaAndNatureCureHospital.tsx',
  'PraanaVaidyaAyurvedicHospital.tsx',
  'RamaiahIndicSpecialtyAyurvedaHospital.tsx',
  'AyurKutiraPanchakarmaCentre.tsx',
  'TatkshanaAyurvedaHospital.tsx',
  'VarapradaAyurvedicCenter.tsx',
  'SDAyurvedaManeHolisticWellnessCentre.tsx',
  'AyushmanAyurveda.tsx',
  'TravancoreAyurvedaJayanagar.tsx',
  // Includes Chennai/Mahalingapuram centers mentioned in list
  'KottakkalAryaVaidyaSala.tsx', // already checked and replaced in Kerala step, but doing again is harmless
  'Ayurillam.tsx',
  'DhanwanthralayaAyurvedaSpecialityHospital.tsx'
];

files.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) {
    console.log('NOT FOUND: ' + f);
    return;
  }
  let c = fs.readFileSync(fp, 'utf8');
  
  // Replace the contact numbers
  // This will replace anything looking like +91 12345 67890
  const phoneRegex = /\+91[\s\d\/]+/g;
  
  let changesMade = false;
  
  c = c.replace(phoneRegex, (match) => {
    // skip urls
    if (match.includes('http') || match.includes('embed') || match.includes('989 xxxx xxx')) return match;
    changesMade = true;
    return '+91 989 xxxx xxx';
  });
  
  if (changesMade) {
    fs.writeFileSync(fp, c);
    console.log('REPLACED numbers in ' + f);
  } else {
    console.log('NO CHANGES or ALREADY DEMO in ' + f);
  }
});
