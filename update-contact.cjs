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
  'src/pages/centers/DhanwanthralayaAyurvedaSpecialityHospital.tsx',
  'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx',
  'src/pages/centers/AryaVaidyaSala.tsx.tsx',
  'src/pages/centers/RasayanaAyurvedaCentre.tsx',
  'src/pages/centers/YantraAyurvedicResort.tsx',
  'src/pages/centers/ChakraAyurvedicResort.tsx',
  'src/pages/centers/DeepanjaliAyurRetreat.tsx',
  'src/pages/centers/MadukkakuzhyAyurveda.tsx',
  'src/pages/centers/Veda5WellnessRetreat.tsx',
  'src/pages/centers/AyurvedicNaturalHealthCentre.tsx',
  'src/pages/centers/AyurTouchAyurvedicHealthcare.tsx',
  'src/pages/centers/YashrajAyurvedaClinic.tsx',
  'src/pages/centers/SreeShantiWellness.tsx',
  'src/pages/centers/NaturalTouchAyurveda.tsx',
  'src/pages/centers/KAREHealth.tsx'
];

let notMatched = [];

for (const path of files) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    const pRegex = /(<h3[^>]*>Contact Numbers<\/h3>\s*<p[^>]*>)([\s\S]*?)(<\/p>)/;
    const divRegex = /(<h3[^>]*>(?:Contact Numbers|Contact Details)<\/h3>\s*<div[^>]*>\s*<div[^>]*>)([\s\S]*?)(<\/div>\s*<\/div>)/;
    const directRegex = /(<h3[^>]*>Contact Numbers<\/h3>\s*<div[^>]*>)([\s\S]*?)(<\/div>)/; // In case there's no nested div

    if (pRegex.test(content)) {
      content = content.replace(pRegex, '$1+91 989 xxxx xxx$3');
      fs.writeFileSync(path, content);
      console.log('Updated ' + path + ' via pRegex');
    } else if (divRegex.test(content)) {
      content = content.replace(divRegex, '$1\n                        +91 989 xxxx xxx\n                      $3');
      fs.writeFileSync(path, content);
      console.log('Updated ' + path + ' via divRegex');
    } else if (directRegex.test(content)) {
       content = content.replace(directRegex, '$1+91 989 xxxx xxx$3');
       fs.writeFileSync(path, content);
       console.log('Updated ' + path + ' via directRegex');
    } else {
      notMatched.push(path);
    }
  } else {
    console.log('File not found: ' + path);
  }
}

if (notMatched.length > 0) {
  console.log('Not matched files:', notMatched);
}
