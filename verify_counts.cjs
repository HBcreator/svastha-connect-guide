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

// 1. Get Top Centers
const topCentersArr = extractFromTsx('TopCenters.tsx');
// Remove duplicates from TopCenters if any
const topCenters = Array.from(new Set(topCentersArr));

const regions = [
  { name: 'South India', tsx: 'SouthIndiaCenters.tsx', md: 'bangalore-hyderabad-chennai-south-india' },
  { name: 'Kerala', tsx: 'KeralaCenters.tsx', md: 'Kerala centers' },
  { name: 'Goa', tsx: 'GoaCenters.tsx', md: 'Goa centers' },
  { name: 'Himalayas/Rishikesh', tsx: 'HimalayasRishikeshUttarakhandNorthEastCenters.tsx', md: 'Himalayan' },
  { name: 'Delhi NCR', tsx: 'DelhiNorthIndiaRegionCenters.tsx', md: 'Delhi' },
  { name: 'Mumbai/Pune', tsx: 'MumbaiPuneRajasthanWestIndiaCenters.tsx', md: 'mumbai' }
];

let allSubCenters = new Set();
let grandTotalMainMatched = 0;

console.log(`Top Centers count: ${topCenters.length}\n`);

regions.forEach(region => {
  const tsxCenters = extractFromTsx(region.tsx);
  const mdCenters = extractFromMd(region.md);
  
  // For the pages with both TSX and MD, the TSX contains the `staticPremiumCenters`
  // plus some dynamically fetched ones. We need to combine them carefully.
  // Actually, let's just union the names.
  let allRegionCenters = new Set([...tsxCenters, ...mdCenters]);
  
  let mainCount = 0;
  let subCount = 0;
  
  allRegionCenters.forEach(center => {
    // Check if this center is in the topCenters list
    // Use case-insensitive exact match
    const isMain = topCenters.some(tc => tc.toLowerCase() === center.toLowerCase());
    if (isMain) {
      mainCount++;
      grandTotalMainMatched++;
    } else {
      subCount++;
      allSubCenters.add(center);
    }
  });
  
  console.log(`**${region.name}:**`);
  console.log(`* **Total Centers:** ${allRegionCenters.size}`);
  console.log(`* **Main Centers (In Top 52):** ${mainCount}`);
  console.log(`* **Sub Centers (Region only):** ${subCount}\n`);
});

console.log(`Total Unique Sub Centers Across All Regions: ${allSubCenters.size}`);
