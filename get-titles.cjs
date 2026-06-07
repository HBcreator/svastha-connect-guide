const fs = require('fs');
const path = require('path');

const himalayaTsx = fs.readFileSync('src/pages/HimalayasRishikeshUttarakhandNorthEastCenters.tsx', 'utf8');
const delhiTsx = fs.readFileSync('src/pages/DelhiNorthIndiaRegionCenters.tsx', 'utf8');

const himalayaMd = fs.readFileSync('public/Anchor pages/Himalayan/savastha_himalaya_centers.md', 'utf8');
const delhiMd = fs.readFileSync('public/Anchor pages/Delhi/savastha_delhi 25_centers .md', 'utf8');

console.log("=== HIMALAYA MD ===");
himalayaMd.split('\n').forEach(line => {
    if (line.trim().startsWith('| **')) {
        const parts = line.split('|');
        if (parts.length > 2) {
            console.log(parts[1].trim() + " : " + parts[2].trim());
        }
    }
});

console.log("\n=== DELHI MD ===");
delhiMd.split('\n').forEach(line => {
    if (line.trim().startsWith('| **')) {
        const parts = line.split('|');
        if (parts.length > 2) {
            console.log(parts[1].trim() + " : " + parts[2].trim());
        }
    }
});
