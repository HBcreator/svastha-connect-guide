const fs = require('fs');

const filesToProcess = [
  { path: 'src/pages/centers/IndusValleyAyurvedicCentre.tsx', city: 'Mysuru' },
  { path: 'src/pages/centers/SriSriAyurvedaHospital.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/AdyantAyurvedaJayanagar.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/VydehiAyurvedaHospital.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/KevaAyurvedaBTMLayout.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/HealingEarthAyurvedaHospital.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/AdivaidyamAyurvedaHospital.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/IAIMHealthcareCenter.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/HLCAyurvedaAndNatureCureHospital.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/PraanaVaidyaAyurvedicHospital.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/RamaiahIndicSpecialtyAyurvedaHospital.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/AyurKutiraPanchakarmaCentre.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/TatkshanaAyurvedaHospital.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/VarapradaAyurvedicCenter.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/SDAyurvedaManeHolisticWellnessCentre.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/AyushmanAyurveda.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/TravancoreAyurvedaJayanagar.tsx', city: 'Bengaluru' },
  { path: 'src/pages/centers/KottakkalAryaVaidyaSala.tsx', city: 'Chennai' },
  { path: 'src/pages/centers/Ayurillam.tsx', city: 'Chennai' },
  { path: 'src/pages/centers/DhanwanthralayaAyurvedaSpecialityHospital.tsx', city: 'Chennai' }
];

for (const { path, city } of filesToProcess) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Find the <h1> tag
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/;
    const h1Match = content.match(h1Regex);
    
    if (h1Match) {
      let heroTitle = h1Match[1].trim();
      
      // Clean up the heroTitle if it has any nested tags (it shouldn't usually, but just in case)
      heroTitle = heroTitle.replace(/<[^>]+>/g, '').trim();

      // Ensure we don't duplicate the city name if it's already at the end of the title
      let newBreadcrumb = heroTitle;
      const cityRegex = new RegExp('\\b' + city + '\\b', 'i');
      if (!cityRegex.test(heroTitle)) {
          newBreadcrumb = heroTitle + ' ' + city;
      }
      
      const breadcrumbRegex = /(<li className="text-primary\/90 font-black shrink-0">\s*)([\s\S]*?)(\s*<\/li>)/;
      
      if (breadcrumbRegex.test(content)) {
        content = content.replace(breadcrumbRegex, '$1' + newBreadcrumb + '$3');
        fs.writeFileSync(path, content);
        console.log('Updated ' + path + ' -> ' + newBreadcrumb);
      } else {
        console.log('Breadcrumb regex not matched in ' + path);
      }
    } else {
      console.log('No <h1> found in ' + path);
    }
  } else {
    console.log('File not found: ' + path);
  }
}
console.log('Done!');
