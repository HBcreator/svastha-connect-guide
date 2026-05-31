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
  let changes = [];

  // 1. Fix review text size
  const old = 'text-lg md:text-2xl leading-relaxed" style={{ color: "#7F543D" }}>';
  const nw = 'text-base md:text-xl leading-relaxed" style={{ color: "#7F543D" }}>';
  if (c.includes(old)) {
    c = c.replace(old, nw);
    changes.push('review-text-size');
  }

  // 2. Fix Yashraj breadcrumb
  if (f === 'YashrajAyurvedaClinic.tsx') {
    const breadOld = /font-black shrink-0">\s*\n\s*Yashraj Ayurveda Clinic\s*\n/;
    if (breadOld.test(c)) {
      c = c.replace(breadOld, (match) => match.replace('Yashraj Ayurveda Clinic', 'Yashraj Ayurveda Clinic Goa'));
      changes.push('breadcrumb');
    }
  }

  if (changes.length > 0) {
    fs.writeFileSync(fp, c);
    console.log('FIXED: ' + f + ' (' + changes.join(', ') + ')');
  } else {
    console.log('NO CHANGES: ' + f);
  }
});
