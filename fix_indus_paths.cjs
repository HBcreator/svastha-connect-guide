const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.{ts,tsx}');

let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('Indus Valley Ayurvedic Center/')) {
    content = content.replace(/Indus Valley Ayurvedic Center\//g, 'Indus Valley Ayurvedic Centre/');
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    changedCount++;
  }
}

console.log(`Replaced in ${changedCount} files.`);
