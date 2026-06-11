const fs = require('fs');

// 1. Fix App.tsx URL
const appPath = 'src/App.tsx';
let appContent = fs.readFileSync(appPath, 'utf8');

appContent = appContent.replace(
    '<Route path="/centers/a-and-u-tibbia-college-hospital-panchakarma-new-delhi-india" element={<AandUTibbiaCollegeHospitalPanchakarma />} />',
    '<Route path="/centers/a-and-u-tibbia-college-hospital-new-delhi-india" element={<AandUTibbiaCollegeHospitalPanchakarma />} />'
);

fs.writeFileSync(appPath, appContent);
console.log("App.tsx URL updated!");

// 2. Fix DelhiNorthIndiaRegionCenters.tsx URL and Name
const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

// Update URL
centersContent = centersContent.replace(
    'finalSlug = "a-and-u-tibbia-college-hospital-panchakarma-new-delhi-india";',
    'finalSlug = "a-and-u-tibbia-college-hospital-new-delhi-india";'
);

// Update Name Override
if (!centersContent.includes('name = "A & U Tibbia College & Hospital";')) {
    const nameOverride = `if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {
        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";
      }
      if (name.includes("Tibbia College")) {
        name = "A & U Tibbia College & Hospital";
      }`;
    centersContent = centersContent.replace(
        'if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {\n        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";\n      }',
        nameOverride
    );
}

fs.writeFileSync(centersPath, centersContent);
console.log("DelhiNorthIndiaRegionCenters.tsx URL and Name updated!");
