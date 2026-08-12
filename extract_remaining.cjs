const fs = require('fs');
const content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf-8');

const lines = content.split('\n');
const centers = [];
let currentCenter = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('name: "') && !line.includes('title:')) {
    const match = line.match(/name:\s*"([^"]+)"/);
    if (match) {
      if (currentCenter.name) centers.push(currentCenter);
      currentCenter = { name: match[1] };
    }
  } else if (line.includes('slug: "')) {
    const match = line.match(/slug:\s*"([^"]+)"/);
    if (match && currentCenter.name) {
      currentCenter.slug = match[1];
    }
  } else if (line.includes('location: "')) {
    const match = line.match(/location:\s*"([^"]+)"/);
    if (match && currentCenter.name) {
      currentCenter.location = match[1];
    }
  }
}
if (currentCenter.name) centers.push(currentCenter);

const remaining = centers.slice(23, 52);

remaining.forEach((c, index) => {
  console.log(`${index + 1}. ${c.name} | ${c.slug} | ${c.location}`);
});
