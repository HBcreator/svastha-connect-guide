const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// Extract all centers with their names and image paths
const centerRegex = /name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g;
let centers = [];
let match;
while ((match = centerRegex.exec(content)) !== null) {
    centers.push({ name: match[1], image: match[2] });
}

console.log(`Total centers: ${centers.length}`);

// Page 8 = items 106-120, Page 9 = items 121-135 (0-indexed: 105-119, 120-134)
// But first 52 are main, rest are sub. With sorting, main come first.
// So page 8 centers are index 105-119, page 9 are 120-134
// Since main centers are sorted by rating, the order might differ.
// Let's just check ALL sub-centers (index >= 52) for broken images.

console.log("\n=== Checking ALL sub-center images (index 52+) ===\n");

let broken = 0;
for (let i = 52; i < centers.length; i++) {
    const c = centers[i];
    const imgPath = path.join('public', c.image);
    const exists = fs.existsSync(imgPath);
    if (!exists) {
        broken++;
        console.log(`BROKEN [${i+1}]: ${c.name}`);
        console.log(`  Path: ${c.image}`);
        
        // Try to find the correct path
        // Check common image directories
        const possibleDirs = [
            'public/TOP centers/himalayas-rishikesh-uttarakhand-north-east',
            'public/Anchor pages/bangalore-hyderabad-chennai-south-india/Images',
            'public/Anchor pages/Kerala centers/images',
            'public/Anchor pages/Goa centers/images',
            'public/Center Images',
        ];
        
        // Try to match by center name in directories
        for (const dir of possibleDirs) {
            if (fs.existsSync(dir)) {
                try {
                    const items = fs.readdirSync(dir);
                    const nameSimple = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
                    for (const item of items) {
                        const itemSimple = item.toLowerCase().replace(/[^a-z0-9]/g, '');
                        if (itemSimple.includes(nameSimple.substring(0, 10)) || nameSimple.includes(itemSimple.substring(0, 10))) {
                            const fullDir = path.join(dir, item);
                            if (fs.statSync(fullDir).isDirectory()) {
                                const files = fs.readdirSync(fullDir);
                                const mainImg = files.find(f => f.startsWith('main') || f === 'Thumb.jpg' || f === 'thumb.jpg');
                                if (mainImg) {
                                    const correctPath = `/${path.relative('public', path.join(fullDir, mainImg)).replace(/\\/g, '/')}`;
                                    console.log(`  SUGGESTION: ${correctPath}`);
                                }
                            }
                        }
                    }
                } catch(e) {}
            }
        }
        console.log('');
    }
}

console.log(`\nTotal broken images: ${broken} out of ${centers.length - 52} sub-centers`);
