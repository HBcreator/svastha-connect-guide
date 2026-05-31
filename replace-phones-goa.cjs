const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';

const files = [
  'Veda5WellnessRetreat.tsx',
  'AyurvedicNaturalHealthCentre.tsx',
  'AyurTouchAyurvedicHealthcare.tsx',
  'YashrajAyurvedaClinic.tsx',
  'SreeShantiWellness.tsx',
  'NaturalTouchAyurveda.tsx',
  'KAREHealth.tsx',
];

files.forEach(f => {
  const fp = path.join(dir, f);
  let c = fs.readFileSync(fp, 'utf8');
  
  // Replace the contact numbers
  // This will replace anything looking like +91 12345 67890 or +911234567890 or similar
  const phoneRegex = /\+91[\s\d\/]+/g;
  
  c = c.replace(phoneRegex, (match) => {
    // We don't want to replace inside map embeds or whatsapp links if there are any
    // Map embeds don't usually have +91 like this, but let's be careful
    return '+91 989 xxxx xxx';
  });

  // For Yashraj, there's a slash like "+91 90119 32151 / +91 96377 11394"
  // The above regex will capture the whole thing and replace it with "+91 989 xxxx xxx" which is what we want
  
  fs.writeFileSync(fp, c);
  console.log('REPLACED numbers in ' + f);
});
