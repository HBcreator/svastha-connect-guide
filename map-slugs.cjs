const fs = require('fs');
const tsxContent = fs.readFileSync('src/pages/SouthIndiaCenters.tsx', 'utf8');
const appContent = fs.readFileSync('src/App.tsx', 'utf8');

const centersRegex = /name:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"/g;
let match;
while ((match = centersRegex.exec(tsxContent)) !== null) {
  const name = match[1];
  const slug = match[2];

  let componentName = null;
  // <Route path="/centers/slug" element={<Component />} />
  // or <Route path="/centers/slug" element={<Component/>} />
  // or <Route path="/centers/slug" element={<Component />} />
  
  const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const routeRegex = new RegExp('<Route path="/centers/' + escapedSlug + '" element={<([^>\\s]+)[^>]*>}');
  const routeMatch = appContent.match(routeRegex);
  
  if (routeMatch) {
    componentName = routeMatch[1];
    
    // Find import
    const importRegex = new RegExp('import ' + componentName + ' from "([^"]+)"');
    const importMatch = appContent.match(importRegex);
    if (importMatch) {
      const importPath = importMatch[1];
      const filePath = 'src/' + importPath.replace(/^\.\//, '') + '.tsx';
      console.log(slug + '|' + filePath + '|' + name);
    } else {
      console.log(slug + '|IMPORT_NOT_FOUND|' + name);
    }
  } else {
    console.log(slug + '|ROUTE_NOT_FOUND|' + name);
  }
}
