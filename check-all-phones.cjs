const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';

// Kerala files
const kerala = ['ParathuvayalilAyurvedaHospital.tsx','KottakkalAryaVaidyaSala.tsx','RasayanaAyurvedaCentre.tsx','YantraAyurvedicResort.tsx','ChakraAyurvedicResort.tsx','DeepanjaliAyurRetreat.tsx','MadukkakuzhyAyurveda.tsx'];

// Bangalore files
const bangalore = ['SriSriAyurvedaHospital.tsx','AdyantAyurvedaJayanagar.tsx','VydehiAyurvedaHospital.tsx','KevaAyurvedaBTMLayout.tsx','JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment.tsx','HealingEarthAyurvedaHospital.tsx','AdivaidyamAyurvedaHospital.tsx','IAIMHealthcareCenter.tsx','HLCAyurvedaAndNatureCureHospital.tsx','PraanaVaidyaAyurvedicHospital.tsx','RamaiahIndicSpecialtyAyurvedaHospital.tsx','AyurKutiraPanchakarmaCentre.tsx','TatkshanaAyurvedaHospital.tsx','VarapradaAyurvedicCenter.tsx','SDAyurvedaManeHolisticWellnessCentre.tsx','AyushmanAyurveda.tsx','TravancoreAyurvedaJayanagar.tsx','DhanwanthralayaAyurvedaSpecialityHospital.tsx'];

console.log('=== KERALA ===');
kerala.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) { console.log(f + ' NOT FOUND'); return; }
  const c = fs.readFileSync(fp, 'utf8');
  const hasPlaceholder = c.includes('xxxx') || c.includes('xxx xxx');
  if (hasPlaceholder) console.log('❌ PLACEHOLDER: ' + f);
  else console.log('✅ OK: ' + f);
});

console.log('\n=== BANGALORE ===');
bangalore.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) { console.log(f + ' NOT FOUND'); return; }
  const c = fs.readFileSync(fp, 'utf8');
  const hasPlaceholder = c.includes('xxxx') || c.includes('xxx xxx');
  if (hasPlaceholder) console.log('❌ PLACEHOLDER: ' + f);
  else console.log('✅ OK: ' + f);
});
