const fs = require('fs');

const tsxPath = 'src/pages/HimalayasRishikeshUttarakhandNorthEastCenters.tsx';
const mdPath = 'public/Anchor pages/Himalayan/savastha_himalaya_centers.md';

const tsxContent = fs.readFileSync(tsxPath, 'utf8');
const mdContent = fs.readFileSync(mdPath, 'utf8');

// Get SLUG_BY_SERIES
const slugMatch = tsxContent.match(/const SLUG_BY_SERIES: Partial<Record<number, string>> = {([\s\S]*?)};/);
const slugs = {};
if (slugMatch) {
    const lines = slugMatch[1].split('\n');
    lines.forEach(line => {
        const m = line.match(/^\s*(\d+):\s*"([^"]+)"/);
        if (m) slugs[m[1]] = m[2];
    });
}

// Get static premium centers
const staticMatch = tsxContent.match(/const staticPremiumCenters: HimalayanCenter\[\] = \[([\s\S]*?)\];/);
const statics = [];
if (staticMatch) {
    const blocks = staticMatch[1].split('},');
    blocks.forEach(block => {
        const nameM = block.match(/name:\s*"([^"]+)"/);
        const slugM = block.match(/slug:\s*"([^"]+)"/);
        if (nameM && slugM) {
            statics.push({ name: nameM[1], slug: slugM[1] });
        }
    });
}

// Get from MD
const mds = [];
mdContent.split('\n').forEach(line => {
    if (line.trim().startsWith('| **')) {
        const parts = line.split('|').map(p => p.trim());
        if (parts.length > 2) {
            const seriesStr = parts[1].replace(/\*/g, '');
            const series = parseInt(seriesStr);
            const name = parts[2].replace(/\*/g, '').replace(/\\/g, '').trim();
            if (slugs[series]) {
                mds.push({ name, slug: slugs[series] });
            }
        }
    }
});

const result = [...statics, ...mds];
const domain = "https://svastha-connect-guide.vercel.app/centers/";

result.forEach(r => {
    console.log(`- **${r.name}**\n  ${domain}${r.slug}`);
});
