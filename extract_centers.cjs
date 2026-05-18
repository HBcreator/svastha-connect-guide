const fs = require('fs');

const topCentersContent = fs.readFileSync('e:/Demo website/Svastha global site/svastha-connect-guide/src/pages/TopCenters.tsx', 'utf8');

const startIndex = topCentersContent.indexOf('const centers = [');
if (startIndex !== -1) {
  let bracketCount = 0;
  let inString = false;
  let stringChar = '';
  let endIndex = -1;

  for (let i = startIndex + 16; i < topCentersContent.length; i++) {
    const char = topCentersContent[i];
    
    if (inString) {
      if (char === stringChar && topCentersContent[i-1] !== '\\') {
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
    let centersStr = topCentersContent.substring(startIndex + 16, endIndex + 1);
    // remove typescript types
    centersStr = centersStr.replace(/ as string \| undefined/g, '');
    centersStr = centersStr.replace(/ as string/g, '');
    fs.writeFileSync('e:/Demo website/Svastha global site/svastha-connect-guide/extractedCenters.cjs', `module.exports = ${centersStr};`);
    console.log('Extracted centers string, length: ' + centersStr.length);
  } else {
    console.log('Could not find matching bracket.');
  }
} else {
  console.log('Could not find const centers = [');
}
