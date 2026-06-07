const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const centersDir = path.join(srcDir, 'pages', 'centers');

if (!fs.existsSync(centersDir)) {
  console.log("Centers directory not found!");
  process.exit(1);
}

// 1. Rename files in src/pages/centers/ that contain "Centre" or "centre"
const files = fs.readdirSync(centersDir);
files.forEach(file => {
  if (file.includes('Centre') || file.includes('centre')) {
    const newName = file.replace(/Centre/g, 'Center').replace(/centre/g, 'center');
    fs.renameSync(path.join(centersDir, file), path.join(centersDir, newName));
    console.log(`RENAMED: ${file} -> ${newName}`);
  }
});

// 2. Function to process and replace text in a file
function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Safe global replace
  content = content.replace(/Centre/g, 'Center');
  content = content.replace(/centre/g, 'center');
  content = content.replace(/CENTRE/g, 'CENTER');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`UPDATED TEXT IN: ${filePath}`);
  }
}

// 3. Process App.tsx
replaceInFile(path.join(srcDir, 'App.tsx'));

// 4. Process all .tsx files in src/pages/centers
const updatedFiles = fs.readdirSync(centersDir);
updatedFiles.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    replaceInFile(path.join(centersDir, file));
  }
});

// 5. Process components if they exist
const componentsDir = path.join(srcDir, 'components');
if (fs.existsSync(componentsDir)) {
  const compFiles = fs.readdirSync(componentsDir);
  compFiles.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      replaceInFile(path.join(componentsDir, file));
    }
  });
}

console.log("All Centre -> Center spelling replacements completed.");
