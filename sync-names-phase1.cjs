const fs = require('fs');
const path = require('path');

const appTsx = fs.readFileSync('src/App.tsx', 'utf8');
const routeRegex = /<Route path="\/centers\/([^"]+)" element={<([^ />]+) \/>} \/>/g;

let match;
const slugToComp = {};
while ((match = routeRegex.exec(appTsx)) !== null) {
    slugToComp[match[1]] = match[2];
}

const slugToTitle = {};

for (const [slug, comp] of Object.entries(slugToComp)) {
    const compPath = path.join('src', 'pages', 'centers', comp + '.tsx');
    if (fs.existsSync(compPath)) {
        const content = fs.readFileSync(compPath, 'utf8');
        // Find <h1>...</h1> or <h1>\n ... \n</h1>
        const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
        if (h1Match) {
            // Strip tags and trim
            let title = h1Match[1].replace(/<[^>]+>/g, '').trim();
            // collapse whitespace
            title = title.replace(/\s+/g, ' ');
            slugToTitle[slug] = title;
        }
    }
}

fs.writeFileSync('slug-to-title.json', JSON.stringify(slugToTitle, null, 2));
console.log("Wrote slug-to-title.json with " + Object.keys(slugToTitle).length + " entries.");
