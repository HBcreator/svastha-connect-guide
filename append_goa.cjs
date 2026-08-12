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

// Find missing
const missingNames = goaNames.filter(name => !topNames.includes(name));

if (missingNames.length === 0) {
    console.log("No missing centers to append!");
    process.exit(0);
}

let appendedBlocks = [];
for (const name of missingNames) {
    // Escape regex characters just in case
    const safeName = name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`{\\s*name:\\s*["']${safeName}["'][\\s\\S]*?},?`, 'g');
    const match = regex.exec(goaContent);
    if (match) {
        let block = match[0];
        if (!block.endsWith(',')) block += ',';
        appendedBlocks.push('    ' + block);
    } else {
        console.log("Could not extract block for: " + name);
    }
}

const appendString = '\n    // GOA SUB CENTERS\n' + appendedBlocks.join('\n') + '\n';

const nextLineIdx = topContent.indexOf('const staticTreatments = [');
const arrayEndIdx = topContent.lastIndexOf('];', nextLineIdx);

if (arrayEndIdx !== -1) {
    const newContent = topContent.substring(0, arrayEndIdx) + appendString + topContent.substring(arrayEndIdx);
    fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
    console.log(`Successfully appended ${missingNames.length} Goa sub-centers!`);
} else {
    console.log("Failed to find insertion point.");
}
