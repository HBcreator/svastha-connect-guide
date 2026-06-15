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
  let changed = false;
  
  if (content.includes('Dheemahi Ayurvedic Center')) {
    content = content.replace(/Dheemahi Ayurvedic Center/g, 'Dheemahi Ayurvedic Centre');
    changed = true;
  }
  if (content.includes('Dheemahi Kumarakom Ayurvedic Center')) {
    content = content.replace(/Dheemahi Kumarakom Ayurvedic Center/g, 'Dheemahi Kumarakom Ayurvedic Centre');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
    changedCount++;
  }
}

console.log(`Replaced in ${changedCount} files.`);
