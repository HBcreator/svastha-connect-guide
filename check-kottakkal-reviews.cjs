const fs = require('fs');
const content = fs.readFileSync('src/pages/centers/KottakkalAryaVaidyaSala.tsx', 'utf8');
const reviewRegex = /review:\s*(["'])([\s\S]*?)\1/g;
let match;
while ((match = reviewRegex.exec(content)) !== null) {
  console.log('Review length: ' + match[2].length);
  if (match[2].length > 150) {
    console.log(match[2].substring(0, 100) + '...');
  }
}
