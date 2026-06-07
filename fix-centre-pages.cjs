const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  content = content.replace(/Centre/g, 'Center');
  content = content.replace(/centre/g, 'center');
  content = content.replace(/CENTRE/g, 'CENTER');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`UPDATED TEXT IN: ${filePath}`);
  }
}

const files = fs.readdirSync(pagesDir);
files.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    replaceInFile(path.join(pagesDir, file));
  }
});

console.log("All Centre -> Center spelling replacements completed in src/pages/.");
