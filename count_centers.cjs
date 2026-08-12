const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');

// Extract centers from TopCenters
function extractCenters(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const regex = /name:\s*["']([^"']+)["']/g;
  const centers = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    const name = match[1].trim();
    if (name.length > 5) centers.add(name);
  }
  return centers;
}

const topCenters = extractCenters(path.join(srcDir, 'TopCenters.tsx'));

const regionFiles = [
  'SouthIndiaCenters.tsx',
  'KeralaCenters.tsx',
  'GoaCenters.tsx',
  'HimalayasRishikeshUttarakhandNorthEastCenters.tsx',
  'DelhiNorthIndiaRegionCenters.tsx',
  'MumbaiPuneRajasthanWestIndiaCenters.tsx',
];

let allRegionCenters = new Set();
let regionBreakdown = {};

regionFiles.forEach(file => {
  const centers = extractCenters(path.join(srcDir, file));
  regionBreakdown[file] = { total: centers.size, centers: [] };
  centers.forEach(c => {
    allRegionCenters.add(c);
    regionBreakdown[file].centers.push(c);
  });
});

// Find region centers NOT in TopCenters
const extraCenters = [...allRegionCenters].filter(c => !topCenters.has(c)).sort();

console.log(`TopCenters.tsx total: ${topCenters.size}`);
console.log(`\n=== REGION PAGE BREAKDOWN ===`);
for (const [file, data] of Object.entries(regionBreakdown)) {
  const extra = data.centers.filter(c => !topCenters.has(c));
  console.log(`\n${file}: ${data.total} total, ${extra.length} NOT in TopCenters`);
  extra.forEach(c => console.log(`  - ${c}`));
}

console.log(`\n=== TOTAL CENTERS IN REGION PAGES BUT NOT IN TOP 52 ===`);
console.log(`Count: ${extraCenters.length}`);
extraCenters.forEach((c, i) => console.log(`${i+1}. ${c}`));
