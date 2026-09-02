const fs = require('fs');
const lines = fs.readFileSync('src/components/Navigation.tsx', 'utf-8').split('\n');

const desktopServices = lines.slice(92, 125);
const desktopAyurveda = lines.slice(266, 276);
const mobileServices = lines.slice(352, 383);
const mobileAyurveda = lines.slice(456, 468);

// Validation
const dsValid = desktopServices.join('\n').includes('Services Dropdown');
const daValid = desktopAyurveda.join('\n').includes('Ayurveda treatments');
const msValid = mobileServices.join('\n').includes('Mobile Services Section');
const maValid = mobileAyurveda.join('\n').includes('Ayurveda treatments');

if (!dsValid || !daValid || !msValid || !maValid) {
    console.log("Validation failed!", {dsValid, daValid, msValid, maValid});
} else {
    console.log("Validation passed! Proceeding to swap.");

    let newLines = [];
    newLines = newLines.concat(lines.slice(0, 92));
    newLines = newLines.concat(desktopAyurveda);
    newLines = newLines.concat(lines.slice(125, 266));
    newLines = newLines.concat(desktopServices);
    newLines = newLines.concat(lines.slice(276, 352));
    newLines = newLines.concat(mobileAyurveda);
    newLines = newLines.concat(lines.slice(383, 456));
    newLines = newLines.concat(mobileServices);
    newLines = newLines.concat(lines.slice(468));
    
    fs.writeFileSync('src/components/Navigation.tsx', newLines.join('\n'), 'utf-8');
    console.log("Done!");
}
