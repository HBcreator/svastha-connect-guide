const fs = require('fs');

const fileToProcess = { path: 'src/pages/centers/AryaVaidyaSala.tsx.tsx', city: 'Kottakkal' };

if (fs.existsSync(fileToProcess.path)) {
  let content = fs.readFileSync(fileToProcess.path, 'utf8');
  
  // Find the <h1> tag
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/;
  const h1Match = content.match(h1Regex);
  
  if (h1Match) {
    let heroTitle = h1Match[1].trim();
    
    // Clean up the heroTitle if it has any nested tags
    heroTitle = heroTitle.replace(/<[^>]+>/g, '').trim();

    // Ensure we don't duplicate the city name if it's already at the end of the title
    let newBreadcrumb = heroTitle;
    const cityRegex = new RegExp('\\b' + fileToProcess.city + '\\b', 'i');
    if (!cityRegex.test(heroTitle)) {
        newBreadcrumb = heroTitle + ' ' + fileToProcess.city;
    }
    
    const breadcrumbRegex = /(<li className="text-primary\/90 font-black shrink-0">\s*)([\s\S]*?)(\s*<\/li>)/;
    
    if (breadcrumbRegex.test(content)) {
      content = content.replace(breadcrumbRegex, '$1' + newBreadcrumb + '$3');
      fs.writeFileSync(fileToProcess.path, content);
      console.log('Updated ' + fileToProcess.path + ' -> ' + newBreadcrumb);
    } else {
      console.log('Breadcrumb regex not matched in ' + fileToProcess.path);
    }
  } else {
    console.log('No <h1> found in ' + fileToProcess.path);
  }
} else {
  console.log('File not found: ' + fileToProcess.path);
}
