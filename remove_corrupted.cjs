const fs = require('fs');

let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

const startMarker = '    // SOUTH INDIA SUB CENTERS';
const endMarker = '  ];';

const idxStart = content.indexOf(startMarker);
const idxEnd = content.indexOf(endMarker, idxStart);

if (idxStart !== -1 && idxEnd !== -1) {
    // Delete everything from the marker up to the array end
    // But keep the closing bracket for the previous object if needed?
    // Wait, the previous object ends with:
    //       slug: "ideal-ayurvedic-resort-kerala-india" as string | undefined,
    //     },
    //     // SOUTH INDIA SUB CENTERS
    
    // So we can just replace from idxStart to idxEnd with empty space.
    content = content.substring(0, idxStart) + content.substring(idxEnd);
    fs.writeFileSync('src/pages/TopCenters.tsx', content, 'utf8');
    console.log("Deleted corrupted South India centers.");
} else {
    console.log("Could not find markers to delete.");
}
