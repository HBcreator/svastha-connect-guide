const fs = require('fs');

const centersPath = 'src/pages/DelhiNorthIndiaRegionCenters.tsx';
let centersContent = fs.readFileSync(centersPath, 'utf8');

const targetStr = `if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {
        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";
      }`;

const replacementStr = `if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {
        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";
      }
      if (name.includes("Tibbia College")) {
        name = "A & U Tibbia College & Hospital";
      }`;

if (centersContent.includes(targetStr)) {
    centersContent = centersContent.replace(targetStr, replacementStr);
    fs.writeFileSync(centersPath, centersContent);
    console.log("DelhiNorthIndiaRegionCenters.tsx card name successfully updated!");
} else {
    console.log("Could not find the target string. Checking manually via regex...");
    // Fallback regex if spacing is weird
    centersContent = centersContent.replace(/if\s*\(name === "Sri Sri Ayurveda Panchakarma \(PanchkarmaTreatment\.com\)"\)\s*\{\s*name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";\s*\}/, replacementStr);
    fs.writeFileSync(centersPath, centersContent);
    console.log("Applied regex replacement instead.");
}
