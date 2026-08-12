const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const anchorDir = path.join(__dirname, 'public', 'Anchor pages');

function cleanName(name) {
  return name.replace(/\*\*/g, "").trim();
}

function extractFromTsx(fileName) {
  const filePath = path.join(srcDir, fileName);
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const regex = /name:\s*["']([^"']+)["']/g;
  const centers = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const name = match[1].trim();
    if (name.length > 5 && !name.includes('Sort') && !name.includes('Price')) {
      centers.push(name);
    }
  }
  return centers;
}

function extractFromMd(folderName) {
  const folderPath = path.join(anchorDir, folderName);
  if (!fs.existsSync(folderPath)) return [];
  const files = fs.readdirSync(folderPath);
  const mdFile = files.find(f => f.endsWith('.md'));
  if (!mdFile) return [];
  
  const content = fs.readFileSync(path.join(folderPath, mdFile), 'utf-8');
  const lines = content.split('\n');
  const centerLines = lines.filter(line => /^\|\s*\*\*\d+\*\*/.test(line.trim()));
  
  return centerLines.map(line => {
    const parts = line.split('|').map(p => p.trim());
    return cleanName(parts[2]);
  });
}

const regions = [
  { name: 'South India', tsx: 'SouthIndiaCenters.tsx', md: 'bangalore-hyderabad-chennai-south-india' },
  { name: 'Kerala', tsx: 'KeralaCenters.tsx', md: 'Kerala centers' },
  { name: 'Goa', tsx: 'GoaCenters.tsx', md: 'Goa centers' },
  { name: 'Himalayas/Rishikesh', tsx: 'HimalayasRishikeshUttarakhandNorthEastCenters.tsx', md: 'Himalayan' },
  { name: 'Delhi NCR', tsx: 'DelhiNorthIndiaRegionCenters.tsx', md: 'Delhi' },
  { name: 'Mumbai/Pune', tsx: 'MumbaiPuneRajasthanWestIndiaCenters.tsx', md: 'mumbai' }
];

let topCenters = Array.from(new Set(extractFromTsx('TopCenters.tsx')));

let subCenterTracker = {};

regions.forEach(region => {
  const tsxCenters = extractFromTsx(region.tsx);
  const mdCenters = extractFromMd(region.md);
  let allRegionCenters = new Set([...tsxCenters, ...mdCenters]);
  
  allRegionCenters.forEach(center => {
    const isMain = topCenters.some(tc => tc.toLowerCase() === center.toLowerCase());
    if (!isMain) {
      if (!subCenterTracker[center]) subCenterTracker[center] = [];
      subCenterTracker[center].push(region.name);
    }
  });
});

console.log("=== OVERLAPPING SUB CENTERS ===");
for (let center in subCenterTracker) {
  if (subCenterTracker[center].length > 1) {
    console.log(`- "${center}" appears in: ${subCenterTracker[center].join(' AND ')}`);
  }
}
