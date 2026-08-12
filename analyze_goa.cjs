const fs = require('fs');

// Read files
const topContent = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');
const goaContent = fs.readFileSync('src/pages/GoaCenters.tsx', 'utf8');

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
const goaNames = extractCenters(goaContent);

const mainCenters = goaNames.filter(name => topNames.includes(name));
const subCenters = goaNames.filter(name => !topNames.includes(name));

console.log(`Goa Region:`);
console.log(`Total Centers: ${goaNames.length}`);
console.log(`Main Centers (In Top 52): ${mainCenters.length}`);
console.log(`Sub Centers (Region only): ${subCenters.length}`);
console.log(`\nNames of ${subCenters.length} Sub Centers that will be added:`);
subCenters.forEach((n, i) => console.log(`${i+1}. ${n}`));
