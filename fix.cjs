const fs = require('fs');
const path = 'src/pages/centers/NirmalAyurvedPanchkarmClinic.tsx';
let content = fs.readFileSync(path, 'utf8');

// The write_to_file tool literally wrote \` instead of `
content = content.replace(/\\`/g, '`');
// Same for \$
content = content.replace(/\\\$/g, '$');

fs.writeFileSync(path, content, 'utf8');
console.log("Fixed syntax error");
