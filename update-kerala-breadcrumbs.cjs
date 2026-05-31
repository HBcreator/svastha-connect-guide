const fs = require('fs');

const filesToProcess = [
  { path: 'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx', city: 'Kochi' },
  { path: 'src/pages/centers/AryaVaidyaSala.tsx', city: 'Kottakkal' },
  { path: 'src/pages/centers/RasayanaAyurvedaCentre.tsx', city: 'Ernakulam' },
  { path: 'src/pages/centers/YantraAyurvedicResort.tsx', city: 'Thrissur' },
  { path: 'src/pages/centers/ChakraAyurvedicResort.tsx', city: 'Kovalam' },
  { path: 'src/pages/centers/DeepanjaliAyurRetreat.tsx', city: 'Thrissur' },
  { path: 'src/pages/centers/MadukkakuzhyAyurveda.tsx', city: 'Kottayam' }
];

for (const { path, city } of filesToProcess) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    
    // Find the <h1> tag
    const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/;
    const h1Match = content.match(h1Regex);
    
    if (h1Match) {
      let heroTitle = h1Match[1].trim();
      
      // Clean up the heroTitle if it has any nested tags
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
