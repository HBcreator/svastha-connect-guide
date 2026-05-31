const fs = require('fs');
const content = fs.readFileSync('src/pages/KeralaCenters.tsx', 'utf8');

const regex = /name:\s*"([^"]+)"[\s\S]*?city:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1] + ' | ' + match[2] + ' | ' + match[3]);
}
