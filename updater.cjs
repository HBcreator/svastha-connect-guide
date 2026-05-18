const fs = require('fs');

const masterCenters = require('./extractedCenters.cjs');
const filePaths = fs.readFileSync('e:/Demo website/Svastha global site/svastha-connect-guide/topCentersFiles.txt', 'utf8').split('\n').filter(Boolean);

// seeded random to generate unique sets per file
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}

function stringToSeed(str) {
    let seed = 0;
    for(let i = 0; i < str.length; i++) {
        seed = (seed * 31 + str.charCodeAt(i)) | 0;
    }
    return seed;
}

let updatedCount = 0;

for (const filePath of filePaths) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find start of topAyurvedicCenters
  const matchArr = ['export const topAyurvedicCenters = [', 'const topAyurvedicCenters = ['];
  let startIndex = -1;
  let isExport = false;
  
  for (const m of matchArr) {
    const idx = content.indexOf(m);
    if (idx !== -1) {
      startIndex = idx;
      isExport = m.includes('export');
      break;
    }
  }

  if (startIndex !== -1) {
    // Find matching bracket
    let bracketCount = 0;
    let inString = false;
    let stringChar = '';
    let endIndex = -1;
    const startBracket = content.indexOf('[', startIndex);

    for (let i = startBracket; i < content.length; i++) {
      const char = content[i];
      if (inString) {
        if (char === stringChar && content[i-1] !== '\\') {
          inString = false;
        }
      } else {
        if (char === '"' || char === "'" || char === '`') {
          inString = true;
          stringChar = char;
        } else if (char === '[') {
          bracketCount++;
        } else if (char === ']') {
          bracketCount--;
          if (bracketCount === 0) {
            endIndex = i;
            break;
          }
        }
      }
    }

    if (endIndex !== -1) {
      // Create new array string
      const seed = stringToSeed(filePath);
      const rand = mulberry32(seed);
      
      const shuffled = [...masterCenters].sort(() => rand() - 0.5);
      const selected = shuffled.slice(0, 12);
      
      let newArrayStr = '[\n';
      for (const c of selected) {
        const cityOrLoc = c.city || c.locationText || 'India';
        newArrayStr += `  {\n`;
        newArrayStr += `    name: ${JSON.stringify(c.name || '')},\n`;
        newArrayStr += `    city: ${JSON.stringify(cityOrLoc)},\n`;
        newArrayStr += `    location: ${JSON.stringify(cityOrLoc)},\n`;
        newArrayStr += `    description: ${JSON.stringify(c.description || '')},\n`;
        newArrayStr += `    rating: ${c.rating || 4.7},\n`;
        newArrayStr += `    reviews: ${c.reviews || 500},\n`;
        newArrayStr += `    image: ${JSON.stringify(c.image || '')},\n`;
        newArrayStr += `    link: ${JSON.stringify(c.slug ? ('/centers/' + c.slug) : '')}\n`;
        newArrayStr += `  },\n`;
      }
      newArrayStr += ']';
      
      const before = content.substring(0, startBracket);
      const after = content.substring(endIndex + 1);
      content = before + newArrayStr + after;
      
      fs.writeFileSync(filePath, content, 'utf8');
      updatedCount++;
    } else {
      console.log('Failed to find end bracket in: ' + filePath);
    }
  } else {
    console.log('Failed to find start in: ' + filePath);
  }
}

console.log('Updated ' + updatedCount + ' files.');
