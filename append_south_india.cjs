const fs = require('fs');

const southIndiaFile = fs.readFileSync('src/pages/SouthIndiaCenters.tsx', 'utf8');
const topCentersFile = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// Get all names from TopCenters
const topNames = new Set();
let match;
const nameRegex = /name:\s*["']([^"']+)["']/g;
while ((match = nameRegex.exec(topCentersFile)) !== null) {
    topNames.add(match[1].toLowerCase().trim());
}

// Extract objects from SouthIndia
const objects = [];
const centerBlockRegex = /{\s*name:\s*["']([^"']+)["'][\s\S]*?},/g;
while ((match = centerBlockRegex.exec(southIndiaFile)) !== null) {
    const name = match[1].toLowerCase().trim();
    if (!topNames.has(name)) {
        objects.push(match[0]);
    }
}

console.log(`Found ${objects.length} sub-centers.`);

// Append to TopCenters.tsx
// Find where the centers array ends in TopCenters.tsx
// It ends with:
//     },
//   ];
// 
//   const staticTreatments = [

const endMarkerRegex = /    \},\s*\];/;
if (endMarkerRegex.test(topCentersFile)) {
    const replacement = '    },\n    // SOUTH INDIA SUB CENTERS\n    ' + objects.join('\n    ') + '\n  ];';
    const newContent = topCentersFile.replace(endMarkerRegex, replacement);
    fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
    console.log("Successfully appended!");
} else {
    console.log("Could not find end marker in TopCenters.tsx");
}

