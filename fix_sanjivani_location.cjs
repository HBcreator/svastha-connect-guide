const fs = require('fs');

// 1. Fix DelhiNorthIndiaRegionCenters.tsx location
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

if (!centersContent.includes('city = "Dwarka Sector 13, Delhi, India";')) {
    const locationOverride = `if (name.includes("Sanjivani")) {
        name = "Sanjivani Ayurvedic Research Institute";
        city = "Dwarka Sector 13, Delhi, India";
      }`;
    centersContent = centersContent.replace(
        'if (name.includes("Sanjivani")) {\n        name = "Sanjivani Ayurvedic Research Institute";\n      }',
        locationOverride
    );
    
    // Also try to replace the static map if it exists
    centersContent = centersContent.replace(
        '"Sanjivani Ayurvedic Research Institute": "Vijay Nagar, Delhi, India"',
        '"Sanjivani Ayurvedic Research Institute": "Dwarka Sector 13, Delhi, India"'
    );
    
    fs.writeFileSync(centersPath, centersContent);
    console.log("Centers list location updated!");
}

// 2. Fix SanjivaniAyurvedicResearchInstitute.tsx content
const pagePath = 'src/pages/centers/SanjivaniAyurvedicResearchInstitute.tsx';
let pageContent = fs.readFileSync(pagePath, 'utf8');

pageContent = pageContent.replace(/Vijay Nagar/g, 'Dwarka Sector 13');
pageContent = pageContent.replace(
    'R2, Outer Ring Road, Pocket 40/203, Dwarka Sector 13<br />',
    'Plot No. 54, Upper Ground Floor, Sector 13 B, Dwarka<br />'
);
pageContent = pageContent.replace(
    'q=Dwarka+Sector+13+Delhi',
    'q=Sanjeevani+Ayurveda+Dwarka+Sector+13+Delhi'
);
pageContent = pageContent.replace(
    'Approx. 500 meters from Dwarka Sector 13 Metro Station (Magenta Line) / Nehru Place Metro Station (Violet Line)',
    'Approx. 800 meters from Dwarka Sector 13 Metro Station (Blue Line)'
);
pageContent = pageContent.replace(
    'Sanjivani Ayurvedic Institute Dwarka Sector 13 Delhi',
    'Sanjivani Ayurvedic Institute Dwarka Sector 13 Delhi'
);

fs.writeFileSync(pagePath, pageContent);
console.log("Sanjivani page location updated!");
