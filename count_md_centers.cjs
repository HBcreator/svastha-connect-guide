const fs = require('fs');
const path = require('path');

const anchorDir = path.join(__dirname, 'public', 'Anchor pages');
const folders = fs.readdirSync(anchorDir).filter(f => fs.statSync(path.join(anchorDir, f)).isDirectory());

let totalMarkdownCenters = 0;
let countsByRegion = {};
let allCenters = new Set();

folders.forEach(folder => {
  const folderPath = path.join(anchorDir, folder);
  const files = fs.readdirSync(folderPath);
  const mdFile = files.find(f => f.endsWith('.md'));
  
  if (mdFile) {
    const mdPath = path.join(folderPath, mdFile);
    const content = fs.readFileSync(mdPath, 'utf-8');
    
    // Parse table rows starting with | **number**
    const lines = content.split('\n');
    const centerLines = lines.filter(line => /^\|\s*\*\*\d+\*\*/.test(line.trim()));
    
    countsByRegion[folder] = centerLines.length;
    totalMarkdownCenters += centerLines.length;
    
    centerLines.forEach(line => {
      const parts = line.split('|').map(p => p.trim());
      if (parts.length >= 4) {
        // center name is usually in the second column after the number
        const name = parts[2].replace(/\*\*/g, '').trim();
        allCenters.add(name);
      }
    });
  }
});

console.log("=== REGION COUNTS FROM MARKDOWN ===");
console.log(countsByRegion);
console.log(`Total Centers from Markdown: ${totalMarkdownCenters}`);
console.log(`Unique Centers from Markdown: ${allCenters.size}`);
