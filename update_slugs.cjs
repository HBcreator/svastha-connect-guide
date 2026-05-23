const fs = require('fs');
const path = require('path');

const replacements = [
  { old: 'sri-sri-ayurveda-hospital-bangalore-india', new: 'sri-sri-ayurveda-hospital-bengaluru-india' },
  { old: 'bangalore/adyant-ayurveda-hospital-in-banglore', new: 'adyant-ayurveda-hospital-bengaluru-india' },
  { old: 'bangalore/vydehi-ayurveda-hospital-in-banglore', new: 'vydehi-ayurveda-hospital-bengaluru-india' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const req of replacements) {
        if (content.includes(req.old)) {
          content = content.split(req.old).join(req.new);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('./src');
