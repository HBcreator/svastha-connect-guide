const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages');
const anchorDir = path.join(__dirname, 'public', 'Anchor pages');

const topCenters = Array.from(new Set(extractFromTsx('TopCenters.tsx')));

function extractFromTsx(fileName) {
  const filePath = path.join(srcDir, fileName);
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  // Just find `name: "..."`
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

function parseMarkdownCenters(folderName, fileName) {
  const filePath = path.join(anchorDir, folderName, fileName);
  if (!fs.existsSync(filePath)) return [];
  const mdContent = fs.readFileSync(filePath, 'utf-8');
  
  const lines = mdContent.split("\n").map(line => line.trim()).filter(line => /^\|\s*\*\*\d+\*\*/.test(line));
  const centers = lines.map(line => {
    const parts = line.split("|").map(p => p.trim());
    if (parts.length >= 6) {
      return parts[2].replace(/\*\*/g, "").replace(/\\([.#-])/g, "$1").replace(/\s+/g, " ").trim();
    }
    return null;
  }).filter(c => c !== null);
  
  return centers;
}

function calculateFinal(region, tsxFile, mdFolder, mdFile) {
    const tsxNames = extractFromTsx(tsxFile);
    const mdNames = parseMarkdownCenters(mdFolder, mdFile);
    
    // Deduplicate logic just added to React:
    const manualSet = new Set(tsxNames.map(c => c.toLowerCase().trim()));
    const uniqueMd = mdNames.filter(c => !manualSet.has(c.toLowerCase().trim()));
    
    const finalAllCenters = [...tsxNames, ...uniqueMd];
    
    let mainCount = 0;
    let subCount = 0;
    
    finalAllCenters.forEach(center => {
        const isMain = topCenters.some(tc => tc.toLowerCase() === center.toLowerCase());
        if (isMain) mainCount++;
        else subCount++;
    });
    
    console.log(`\n=== ${region} ===`);
    console.log(`Total Rendered Centers: ${finalAllCenters.length}`);
    console.log(`Main Centers (In Top 52): ${mainCount}`);
    console.log(`Sub Centers: ${subCount}`);
}

calculateFinal('Delhi NCR', 'DelhiNorthIndiaRegionCenters.tsx', 'Delhi', 'savastha_delhi 25_centers .md');
calculateFinal('Himalayas/Rishikesh', 'HimalayasRishikeshUttarakhandNorthEastCenters.tsx', 'Himalayan', 'savastha_himalaya_centers.md');
calculateFinal('Mumbai/Pune', 'MumbaiPuneRajasthanWestIndiaCenters.tsx', 'mumbai', 'savastha_mumbai_centers-updated.md');
