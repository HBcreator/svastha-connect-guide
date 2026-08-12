const fs = require('fs');

const topContent = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');
const delhiContent = fs.readFileSync('src/pages/DelhiNorthIndiaRegionCenters.tsx', 'utf8');

function extractCenters(content) {
    const centers = [];
    const nameRegex = /name:\s*["']([^"']+)["']/g;
    let match;
    while ((match = nameRegex.exec(content)) !== null) {
        centers.push(match[1]);
    }
    return centers;
}

const topNames = extractCenters(topContent);
const delhiNames = extractCenters(delhiContent);

const mainCenters = delhiNames.filter(name => topNames.includes(name));
const subCenters = delhiNames.filter(name => !topNames.includes(name));

console.log(`Delhi & North India Region:`);
console.log(`Total Centers: ${delhiNames.length}`);
console.log(`Main Centers (already in Top Centers): ${mainCenters.length}`);
console.log(`Sub Centers (to be added): ${subCenters.length}`);
console.log(`\nSub Centers list:`);
subCenters.forEach((n, i) => console.log(`${i+1}. ${n}`));
