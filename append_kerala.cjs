const fs = require('fs');

// Read files
const topContent = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');
const keralaContent = fs.readFileSync('src/pages/KeralaCenters.tsx', 'utf8');

// Function to extract center objects from a file
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
const keralaNames = extractCenters(keralaContent);

// Find missing
const missingNames = keralaNames.filter(name => !topNames.includes(name));
console.log(`Found ${missingNames.length} sub-centers in Kerala not in TopCenters:`);
missingNames.forEach((n, i) => console.log(`${i+1}. ${n}`));

if (missingNames.length === 0) {
    console.log("No missing centers to append!");
    process.exit(0);
}

// Now we need to extract the actual full object blocks from KeralaCenters.tsx
// A crude but effective way is to find each missing name, backtrack to the opening brace `{`, and forward to `},` or `}`
let appendedBlocks = [];
for (const name of missingNames) {
    // Escape regex characters just in case
    const safeName = name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`{\\s*name:\\s*["']${safeName}["'][\\s\\S]*?},?`, 'g');
    const match = regex.exec(keralaContent);
    if (match) {
        let block = match[0];
        if (!block.endsWith(',')) block += ',';
        appendedBlocks.push('    ' + block);
    } else {
        console.log("Could not extract block for: " + name);
    }
}

const appendString = '\n    // KERALA SUB CENTERS\n' + appendedBlocks.join('\n') + '\n';

// Find where to append in TopCenters.tsx
// We must append right before `  ];` which closes the `centers` array.
// But wait, there are multiple `];` in the file. We need to find the one after the centers list.
// The centers array ends right before `const staticTreatments = [`
const endMarker = '  ];\n\n  const staticTreatments = [';
const idxEnd = topContent.indexOf(endMarker);

if (idxEnd !== -1) {
    const newContent = topContent.substring(0, idxEnd) + appendString + topContent.substring(idxEnd);
    fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
    console.log("Successfully appended Kerala sub-centers!");
} else {
    // Maybe spacing is different. Try searching for just '  ];' starting from 'varaprada-ayurvedic-center' or something
    const altMarker = '  ];';
    // Let's just find the last `}` before `const staticTreatments`
    const nextLineIdx = topContent.indexOf('const staticTreatments = [');
    const arrayEndIdx = topContent.lastIndexOf('];', nextLineIdx);
    if (arrayEndIdx !== -1) {
        const newContent = topContent.substring(0, arrayEndIdx) + appendString + topContent.substring(arrayEndIdx);
        fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
        console.log("Successfully appended Kerala sub-centers using alternative marker!");
    } else {
        console.log("Failed to find insertion point.");
    }
}
