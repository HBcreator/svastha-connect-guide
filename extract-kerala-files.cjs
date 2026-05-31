const fs = require('fs');
const appContent = fs.readFileSync('src/App.tsx', 'utf8');

const targetSlugs = [
  'parathuvayalil-ayurveda-hospital-hospital-kerala-india',
  'arya-vaidya-sala-hospital-kerala-india',
  'rasayana-ayurveda-center-hospital-kerala-india',
  'yantra-ayurvedic-resort-hospital-kerala-india',
  'chakra-ayurvedic-resort-hospital-kerala-india',
  'deepanjali-ayur-retreat-hospital-kerala-india',
  'madukkakuzhy-ayurveda-retreat-hospital-kerala-india'
];

for (const slug of targetSlugs) {
  const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const routeRegex = new RegExp('<Route path="/centers/' + escapedSlug + '" element={<([^>\\s]+)[^>]*>}');
  const routeMatch = appContent.match(routeRegex);
  
  if (routeMatch) {
    const componentName = routeMatch[1];
    const importRegex = new RegExp('import ' + componentName + ' from "([^"]+)"');
    const importMatch = appContent.match(importRegex);
    if (importMatch) {
      const importPath = importMatch[1];
      const filePath = 'src/' + importPath.replace(/^\.\//, '') + '.tsx';
      console.log(slug + '|' + filePath);
    } else {
      console.log(slug + '|IMPORT_NOT_FOUND');
    }
  } else {
    console.log(slug + '|ROUTE_NOT_FOUND');
  }
}
