const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.ts') || dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const files = walkSync('src');
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
