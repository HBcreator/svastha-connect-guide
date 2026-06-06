const fs = require('fs');

const componentNames = {
  'Sri Sri Ayurveda Hospital Bengaluru': 'SriSriAyurvedaHospital',
  'Adyant Ayurveda – Jayanagar': 'AdyantAyurvedaJayanagar',
  'Vydehi Ayurveda Hospital (VAYU)': 'VydehiAyurvedaHospital',
  'Keva Ayurveda – BTM Layout': 'KevaAyurvedaBTMLayout',
  'Jayadev Memorial – Rashtrotthana Hospital Ayurveda Dept.': 'JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment',
  'Healing Earth Ayurveda Hospital Bangalore': 'HealingEarthAyurvedaHospital',
  'Adivaidyam Ayurveda Hospital': 'AdivaidyamAyurvedaHospital',
  'IAIM Healthcare Center': 'IAIMHealthcareCenter',
  'HLC Ayurveda and Nature Cure Hospital': 'HLCAyurvedaAndNatureCureHospital',
  'PraanaVaidya Ayurvedic Hospital': 'PraanaVaidyaAyurvedicHospital',
  'Ramaiah Indic Specialty Ayurveda Hospital': 'RamaiahIndicSpecialtyAyurvedaHospital',
  'AyurKutira – Panchakarma Center': 'AyurKutiraPanchakarmaCentre',
  'Tatkshana Ayurveda Hospital': 'TatkshanaAyurvedaHospital',
  'Varaprada Ayurvedic Center': 'VarapradaAyurvedicCenter',
  'SD Ayurveda Mane – Holistic Wellness Center': 'SDAyurvedaManeHolisticWellnessCentre',
  'Ayushman Ayurveda': 'AyushmanAyurveda',
  'Travancore Ayurveda – Jayanagar': 'TravancoreAyurvedaJayanagar',
  'Kottakkal Arya Vaidya Sala - Mahalingapuram': 'KottakkalAryaVaidyaSala',
  'Ayurillam - Home of Ayurvedic Therapy Center': 'Ayurillam',
  'Dhanwanthralaya Ayurveda Speciality Hospital': 'DhanwanthralayaAyurvedaSpecialityHospital'
};

const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const domain = 'https://svastha-connect-guide.vercel.app';

let result = '';

Object.entries(componentNames).forEach(([displayName, componentName]) => {
  // Find something like: <Route path="/centers/something" element={<ComponentName />} />
  const regex = new RegExp(`path=["'](.*?)["']\\s+element=\\{\\s*<${componentName}\\s*/>\\s*\\}`, 'i');
  const match = appContent.match(regex);
  
  if (match) {
    const p = match[1];
    result += `${displayName}\n${domain}${p}\n\n`;
  } else {
    // maybe Navigate? Or exact syntax differs. Let's try finding the component name first
    const lineRegex = new RegExp(`path=["']([^"']+)["'][^>]*${componentName}`, 'i');
    const lineMatch = appContent.match(lineRegex);
    if (lineMatch) {
      result += `${displayName}\n${domain}${lineMatch[1]}\n\n`;
    } else {
      result += `${displayName}\nCOULD NOT FIND ROUTE\n\n`;
    }
  }
});

console.log(result);
