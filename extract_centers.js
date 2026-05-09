const fs = require('fs');

const topCentersContent = fs.readFileSync('e:/Demo website/Svastha global site/svastha-connect-guide/src/pages/TopCenters.tsx', 'utf8');

const match = topCentersContent.match(/const centers = (\[[\s\S]*?\]);\s*const /);
if (match) {
  let centersStr = match[1];
  centersStr = centersStr.replace(/ as string \| undefined/g, '');
  centersStr = centersStr.replace(/ as string/g, '');
  
  fs.writeFileSync('e:/Demo website/Svastha global site/svastha-connect-guide/extractedCenters.json', JSON.stringify({ centersStr: centersStr }));
  console.log('Extracted centers string, length: ' + centersStr.length);
} else {
  console.log('Could not match centers array');
}
