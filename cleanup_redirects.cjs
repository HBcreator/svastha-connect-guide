const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.tsx');
const content = fs.readFileSync(appPath, 'utf-8');
const lines = content.split('\n');

const newLines = lines.filter(line => {
  // If it's a Route with a Navigate inside and it's for a /centers/ path, remove it.
  if (line.includes('<Route') && line.includes('element={<Navigate') && line.includes('path="/centers/')) {
    return false; // Skip this line
  }
  return true; // Keep everything else
});

fs.writeFileSync(appPath, newLines.join('\n'), 'utf-8');
console.log(`Cleaned up ${lines.length - newLines.length} redirect routes from App.tsx`);
