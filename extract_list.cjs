const fs = require('fs');
const content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');
const lines = content.split('\n');
const startIndex = lines.findIndex(l => l.includes('SOUTH INDIA SUB CENTERS'));
let count = 0;
for(let i = startIndex; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if(trimmed.startsWith('name:')) {
        count++;
        // Use a regex to extract the name regardless of quotes
        const match = trimmed.match(/name:\s*["']([^"']+)["']/);
        if (match) {
            console.log(count + '. ' + match[1]);
        } else {
            console.log(count + '. ' + trimmed); // fallback
        }
    }
    if(trimmed === '];') break;
}
