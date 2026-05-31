const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';
const files = ['Veda5WellnessRetreat.tsx','AyurvedicNaturalHealthCentre.tsx','AyurTouchAyurvedicHealthcare.tsx','YashrajAyurvedaClinic.tsx','SreeShantiWellness.tsx','NaturalTouchAyurveda.tsx','KAREHealth.tsx'];

files.forEach(f => {
  const fp = path.join(dir, f);
  const c = fs.readFileSync(fp, 'utf8');
  const regex = /review:\s*(["'])([\s\S]*?)\1/g;
  let m; let counts = [];
  while ((m = regex.exec(c)) !== null) counts.push(m[2].trim().split(/\s+/).length);
  const auto = c.match(/isReviewAutoPlaying.*useState\((true|false)\)/);
  const hasLarge = c.includes('text-lg md:text-2xl') || c.includes('text-xl md:text-2xl');
  const bread = c.match(/font-black shrink-0">\s*\n\s*(.*)/);
  console.log(f + ' | reviews: ' + counts.join(',') + ' | auto: ' + (auto?auto[1]:'?') + ' | largeText: ' + hasLarge + ' | bread: ' + (bread?bread[1].trim():'?'));
});
