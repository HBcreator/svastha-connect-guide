const fs = require('fs');

const slugToTitle = JSON.parse(fs.readFileSync('slug-to-title.json', 'utf8'));

let tsCode = `const SLUG_BY_NAME: Record<string, string> = {\n`;
for (const [slug, title] of Object.entries(slugToTitle)) {
    // Escape quotes
    const safeTitle = title.replace(/"/g, '\\"');
    tsCode += `  "${safeTitle}": "${slug}",\n`;
}
tsCode += `};\n`;

fs.writeFileSync('slug-by-name.ts', tsCode, 'utf8');
console.log("Generated slug-by-name.ts");
