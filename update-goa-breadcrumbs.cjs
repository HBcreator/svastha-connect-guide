const fs = require('fs');
const files = [
  'src/pages/centers/Veda5WellnessRetreat.tsx',
  'src/pages/centers/AyurvedicNaturalHealthCentre.tsx',
  'src/pages/centers/AyurTouchAyurvedicHealthcare.tsx',
  'src/pages/centers/YashrajAyurvedaClinic.tsx',
  'src/pages/centers/SreeShantiWellness.tsx',
  'src/pages/centers/NaturalTouchAyurveda.tsx',
  'src/pages/centers/KAREHealth.tsx'
];

for (const path of files) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/;
    const h1Match = content.match(h1Regex);
    if (h1Match) {
      let heroTitle = h1Match[1].replace(/<[^>]+>/g, '').trim();
      let newBreadcrumb = heroTitle;
      if (!/\bGoa\b/i.test(heroTitle)) {
          newBreadcrumb = heroTitle + ' Goa';
      }
      const breadcrumbRegex = /(<li className="text-primary\/90 font-black shrink-0">\s*)([\s\S]*?)(\s*<\/li>)/;
      if (breadcrumbRegex.test(content)) {
        content = content.replace(breadcrumbRegex, '$1' + newBreadcrumb + '$3');
        fs.writeFileSync(path, content);
        console.log('Updated ' + path + ' -> ' + newBreadcrumb);
      } else {
        console.log('No breadcrumb regex matched in ' + path);
      }
    } else {
      console.log('No h1 found in ' + path);
    }
  } else {
    console.log('File not found: ' + path);
  }
}
