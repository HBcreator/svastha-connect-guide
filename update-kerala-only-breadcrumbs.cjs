const fs = require('fs');

const filesToProcess = [
  'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx',
  'src/pages/centers/AryaVaidyaSala.tsx.tsx',
  'src/pages/centers/RasayanaAyurvedaCentre.tsx',
  'src/pages/centers/YantraAyurvedicResort.tsx',
  'src/pages/centers/ChakraAyurvedicResort.tsx',
  'src/pages/centers/DeepanjaliAyurRetreat.tsx',
  'src/pages/centers/MadukkakuzhyAyurveda.tsx'
];

for (const path of filesToProcess) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Find the <h1> tag
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/;
    const h1Match = content.match(h1Regex);
    
    if (h1Match) {
      let heroTitle = h1Match[1].trim();
      heroTitle = heroTitle.replace(/<[^>]+>/g, '').trim();

      // Ensure we don't duplicate "Kerala"
      let newBreadcrumb = heroTitle;
      if (!/\bkerala\b/i.test(heroTitle)) {
          newBreadcrumb = heroTitle + ' Kerala';
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
