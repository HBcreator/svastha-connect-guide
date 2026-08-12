const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');
const appPath = path.join(srcDir, 'App.tsx');

const replacements = {
  'shreyas-yoga-retreat-bangalore-india': 'shreyas-yoga-retreat-center-bangalore-india',
  'viveda-wellness-village-mumbai-india': 'viveda-wellness-village-resort-mumbai-india',
  'naad-wellness-center-sonepat-delhi-india': 'naad-wellness-center-delhi-india',
  'atmantan-wellness-resort-pune-india': 'atmantan-wellness-resort-center-pune-india',
  'toyam-by-orchid-hotels-wellness-resort-pune-india': 'toyam-by-orchid-hotels-wellness-resort-center-pune-india',
  'dharana-at-shillim-wellness-retreat-pune-india': 'dharana-at-shillim-wellness-retreat-center-pune-india',
  'the-imperial-spa-and-wellness-delhi-india': 'the-imperial-spa-and-wellness-center-delhi-india'
};

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  for (const [oldStr, newStr] of Object.entries(replacements)) {
    // Check if the old string exists in the content
    if (content.includes(oldStr)) {
      // Use global regex replacement for the old string
      const regex = new RegExp(oldStr, 'g');
      content = content.replace(regex, newStr);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated URLs in ${path.basename(filePath)}`);
  }
}

// Update App.tsx
updateFile(appPath);

// Update all pages (TopCenters.tsx, region files, etc.)
const pagesFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));
pagesFiles.forEach(file => {
  const filePath = path.join(pagesDir, file);
  updateFile(filePath);
});

console.log('All URL string replacements completed!');
