const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');
const centersDir = path.join(pagesDir, 'centers');
const appPath = path.join(srcDir, 'App.tsx');

const oldSlugs = [
  'shathayu-ayurveda-yoga-retreat-udupi-banglore-india',
  'udupi/shathayu-ayurveda-yoga-retreat'
];
const newSlug = 'shathayu-ayurveda-yoga-retreat-banglore-india';

// 1. Update App.tsx
let appContent = fs.readFileSync(appPath, 'utf-8');
const lines = appContent.split('\n');
const newLines = lines.filter(line => {
    // Delete any old references to the old slugs in Route paths
    if (line.includes('<Route path="/centers/shathayu-ayurveda-yoga-retreat-udupi-banglore-india"') ||
        line.includes('<Route path="/centers/udupi/shathayu-ayurveda-yoga-retreat"')) {
        return false;
    }
    return true;
});

// Find the last route and insert the new one if we removed the old ones
const lastRouteIndex = newLines.findLastIndex(line => line.includes('<Route'));
if (lastRouteIndex !== -1) {
    newLines.splice(lastRouteIndex + 1, 0, `          <Route path="/centers/${newSlug}" element={<ShathayuAyurvedaYogaRetreat />} />`);
}
fs.writeFileSync(appPath, newLines.join('\n'), 'utf-8');
console.log('Updated App.tsx');

// 2. Global String Replace in all pages (recursive)
function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf-8');
            let changed = false;
            oldSlugs.forEach(oldSlug => {
                const target = '"' + oldSlug + '"';
                const replacement = '"' + newSlug + '"';
                if (content.includes(target)) {
                    content = content.split(target).join(replacement);
                    changed = true;
                }
                const target2 = "'/" + oldSlug + "'";
                const replacement2 = "'/" + newSlug + "'";
                if (content.includes(target2)) {
                    content = content.split(target2).join(replacement2);
                    changed = true;
                }
            });
            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf-8');
                console.log('Updated strings in ' + fullPath);
            }
        }
    });
}
replaceInDir(pagesDir);

// 3. Add Breadcrumb
const shathayuPath = path.join(centersDir, 'ShathayuAyurvedaYogaRetreat.tsx');
let shathayuContent = fs.readFileSync(shathayuPath, 'utf-8');

if (!shathayuContent.includes('Breadcrumb Navigation') && !shathayuContent.includes('Centers</Link>')) {
  const breadcrumbCode = '\n      {/* Breadcrumb Navigation */}\n' +
    '      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">\n' +
    '        <div className="container mx-auto px-4 max-w-6xl">\n' +
    '          <ol className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">\n' +
    '            <li className="flex items-center gap-2 shrink-0">\n' +
    '              <Link to="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">\n' +
    '                Home\n' +
    '              </Link>\n' +
    '              <ChevronRight className="h-3 w-3 text-primary/20" />\n' +
    '            </li>\n' +
    '            <li className="flex items-center gap-2 shrink-0">\n' +
    '              <Link to="/centers" className="text-primary/50 hover:text-primary transition-colors">\n' +
    '                Centers\n' +
    '              </Link>\n' +
    '              <ChevronRight className="h-3 w-3 text-primary/20" />\n' +
    '            </li>\n' +
    '            <li className="text-primary/90 font-black shrink-0">\n' +
    '              SHATHAYU AYURVEDA YOGA RETREAT BANGALORE\n' +
    '            </li>\n' +
    '          </ol>\n' +
    '        </div>\n' +
    '      </nav>\n';

  const navRegex = /(<Navigation[\s\S]*?\/>)/;
  if (navRegex.test(shathayuContent)) {
    shathayuContent = shathayuContent.replace(navRegex, '$1' + breadcrumbCode);

    if (!shathayuContent.includes('ChevronRight')) {
      shathayuContent = shathayuContent.replace(/import\s+{([^}]+)}\s+from\s+["']lucide-react["'];/, 'import { $1, ChevronRight } from "lucide-react";');
    }

    if (!shathayuContent.includes('import { Link }')) {
      if (shathayuContent.includes('react-router-dom')) {
        shathayuContent = shathayuContent.replace(/import\s+{([^}]+)}\s+from\s+["']react-router-dom["'];/, 'import { Link, $1 } from "react-router-dom";');
      } else {
        shathayuContent = 'import { Link } from "react-router-dom";\n' + shathayuContent;
      }
    }

    fs.writeFileSync(shathayuPath, shathayuContent, 'utf-8');
    console.log('Added breadcrumb to ShathayuAyurvedaYogaRetreat');
  } else {
      console.log('Navigation not found in ShathayuAyurvedaYogaRetreat');
  }
} else {
    console.log('Breadcrumb already exists in ShathayuAyurvedaYogaRetreat');
}
