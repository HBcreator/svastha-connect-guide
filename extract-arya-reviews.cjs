const fs = require('fs');
const content = fs.readFileSync('src/pages/centers/AryaVaidyaSala.tsx.tsx', 'utf8');
const reviewRegex = /review:\s*(["'])([\s\S]*?)\1/g;
let match;
while ((match = reviewRegex.exec(content)) !== null) {
  console.log(match[2]);
}
