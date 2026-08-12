const fs = require('fs');
const content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');
const cityRegex = /city:\s*["']([^"']+)["']/g;
let match, cities = [];
while ((match = cityRegex.exec(content)) !== null) {
    cities.push(match[1]);
}
console.log([...new Set(cities)].sort());
