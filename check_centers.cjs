const fs = require('fs');
const path = require('path');

const filePaths = fs.readFileSync('e:/Demo website/Svastha global site/svastha-connect-guide/topCentersFiles.txt', 'utf8').split('\n').filter(Boolean);

const results = [];

for (const filePath of filePaths) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find topAyurvedicCenters array
  const matchArr = ['export const topAyurvedicCenters = [', 'const topAyurvedicCenters = ['];
  let startIndex = -1;
  
  for (const m of matchArr) {
    const idx = content.indexOf(m);
    if (idx !== -1) {
      startIndex = idx;
      break;
    }
  }

  if (startIndex === -1) {
    results.push({ file: path.basename(filePath), count: 'NOT_FOUND_INLINE', centers: [] });
    continue;
  }

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

  if (endIndex === -1) {
    results.push({ file: path.basename(filePath), count: 'PARSE_ERROR', centers: [] });
    continue;
  }

  // Extract center names
  const arrayStr = content.substring(startBracket, endIndex + 1);
  const nameMatches = arrayStr.match(/name:\s*"([^"]+)"/g) || [];
  const names = nameMatches.map(m => m.replace(/name:\s*"/, '').replace(/"$/, ''));
  
  // Check for image property
  const imageMatches = arrayStr.match(/image:\s*"([^"]+)"/g) || [];
  const images = imageMatches.map(m => m.replace(/image:\s*"/, '').replace(/"$/, ''));
  
  // Check for link property
  const linkMatches = arrayStr.match(/link:\s*"([^"]+)"/g) || [];
  const links = linkMatches.map(m => m.replace(/link:\s*"/, '').replace(/"$/, ''));

  results.push({
    file: path.basename(filePath),
    count: names.length,
    names: names,
    hasImages: images.length === names.length,
    hasLinks: links.length === names.length,
    emptyImages: images.filter(img => !img || img.trim() === '').length,
    emptyLinks: links.filter(link => !link || link.trim() === '').length,
  });
}

// Print summary
console.log('\n=== TOP CENTERS CHECK ACROSS ALL PAGES ===\n');

let issueCount = 0;
const centerSets = {};

for (const r of results) {
  const status = r.count === 12 ? '✅' : (r.count === 'NOT_FOUND_INLINE' ? '⚠️ (imported from data file)' : '❌');
  const key = r.names ? r.names.sort().join('|') : 'N/A';
  
  if (r.count !== 'NOT_FOUND_INLINE') {
    if (!centerSets[key]) centerSets[key] = [];
    centerSets[key].push(r.file);
  }
  
  let line = `${status} ${r.file}: ${r.count} centers`;
  if (r.emptyImages > 0) line += ` | ⚠️ ${r.emptyImages} empty images`;
  if (r.emptyLinks > 0) line += ` | ⚠️ ${r.emptyLinks} empty links`;
  if (r.count !== 12 && r.count !== 'NOT_FOUND_INLINE') {
    issueCount++;
  }
  console.log(line);
}

console.log('\n=== DUPLICATE SET CHECK ===\n');
let dupCount = 0;
for (const [key, files] of Object.entries(centerSets)) {
  if (files.length > 1) {
    dupCount++;
    console.log(`⚠️ DUPLICATE SET found in ${files.length} files: ${files.join(', ')}`);
  }
}
if (dupCount === 0) {
  console.log('✅ All sets are unique! No duplicates found.');
}

console.log('\n=== SUMMARY ===');
console.log(`Total files checked: ${results.length}`);
console.log(`Files with 12 centers: ${results.filter(r => r.count === 12).length}`);
console.log(`Files importing from data file: ${results.filter(r => r.count === 'NOT_FOUND_INLINE').length}`);
console.log(`Files with issues: ${issueCount}`);
console.log(`Duplicate sets: ${dupCount}`);
