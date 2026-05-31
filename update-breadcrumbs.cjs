const fs = require('fs');

const mapping = {
  'src/pages/centers/IndusValleyAyurvedicCentre.tsx': 'Indus Valley Ayurvedic Centre Mysuru',
  'src/pages/centers/SriSriAyurvedaHospital.tsx': 'Sri Sri Ayurveda Hospital Bengaluru',
  'src/pages/centers/AdyantAyurvedaJayanagar.tsx': 'Adyant Ayurveda Hospital Bengaluru',
  'src/pages/centers/VydehiAyurvedaHospital.tsx': 'Vydehi Ayurveda Hospital Bengaluru',
  'src/pages/centers/KevaAyurvedaBTMLayout.tsx': 'Keva Ayurveda Hospital Bengaluru',
  'src/pages/centers/JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment.tsx': 'Jayadev Memorial – Rashtrotthana Ayurveda Hospital Bengaluru',
  'src/pages/centers/HealingEarthAyurvedaHospital.tsx': 'Healing Earth Ayurveda Hospital Bengaluru',
  'src/pages/centers/AdivaidyamAyurvedaHospital.tsx': 'Adivaidyam Ayurveda Hospital Bengaluru',
  'src/pages/centers/IAIMHealthcareCenter.tsx': 'IAIM Healthcare Hospital Bengaluru',
  'src/pages/centers/HLCAyurvedaAndNatureCureHospital.tsx': 'HLC Ayurveda and Nature Cure Hospital Bengaluru',
  'src/pages/centers/PraanaVaidyaAyurvedicHospital.tsx': 'PraanaVaidya Ayurvedic Hospital Bengaluru',
  'src/pages/centers/RamaiahIndicSpecialtyAyurvedaHospital.tsx': 'Ramaiah Indic Specialty Ayurveda Hospital Bengaluru',
  'src/pages/centers/AyurKutiraPanchakarmaCentre.tsx': 'AyurKutira Panchakarma Hospital Bengaluru',
  'src/pages/centers/TatkshanaAyurvedaHospital.tsx': 'Tatkshana Ayurveda Hospital Bengaluru',
  'src/pages/centers/VarapradaAyurvedicCenter.tsx': 'Varaprada Ayurvedic Hospital Bengaluru',
  'src/pages/centers/SDAyurvedaManeHolisticWellnessCentre.tsx': 'SD Ayurveda Mane Holistic Wellness Hospital Bengaluru',
  'src/pages/centers/AyushmanAyurveda.tsx': 'Ayushman Ayurveda Hospital Bengaluru',
  'src/pages/centers/TravancoreAyurvedaJayanagar.tsx': 'Travancore Ayurveda Hospital Bengaluru',
  'src/pages/centers/KottakkalAryaVaidyaSala.tsx': 'Kottakkal Arya Vaidya Sala Hospital Chennai',
  'src/pages/centers/Ayurillam.tsx': 'Ayurillam Hospital Chennai',
  'src/pages/centers/DhanwanthralayaAyurvedaSpecialityHospital.tsx': 'Dhanwanthralaya Ayurveda Speciality Hospital Chennai'
};

for (const [file, newTitle] of Object.entries(mapping)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const regex = /(<li className="text-primary\/90 font-black shrink-0">\s*)([\s\S]*?)(\s*<\/li>)/;
    if (regex.test(content)) {
      content = content.replace(regex, '$1' + newTitle + '$3');
      fs.writeFileSync(file, content);
      console.log('Updated ' + file);
    } else {
      console.log('Regex not matched in ' + file);
    }
  } else {
    console.log('File not found: ' + file);
  }
}
console.log('Done!');
