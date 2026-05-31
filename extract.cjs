const fs = require('fs');
const tsxContent = fs.readFileSync('src/pages/SouthIndiaCenters.tsx', 'utf8');

// Regex to extract all center name and slug pairs
const centersRegex = /name:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"/g;

let match;
while ((match = centersRegex.exec(tsxContent)) !== null) {
  const name = match[1];
  const slug = match[2];
  console.log(slug + ' ===> ' + name);
}
