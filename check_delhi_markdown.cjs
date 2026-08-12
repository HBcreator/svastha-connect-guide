const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, 'public', 'Anchor pages', 'Delhi', 'savastha_delhi 25_centers .md');
const content = fs.readFileSync(mdPath, 'utf-8');

const cleanMarkdownText = (value) =>
  value
    .replace(/\*\*/g, "")
    .replace(/\\([.#-])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^\|\s*\*\*\d+\*\*/.test(line));

const centers = lines.map((line) => {
    const parts = line.split("|").map((part) => part.trim());
    if (parts.length < 6) return null;
    return parts;
}).filter(c => c !== null);

console.log(`Valid markdown centers: ${centers.length}`);
