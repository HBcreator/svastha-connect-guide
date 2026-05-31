const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';

const files = [
  'ParathuvayalilAyurvedaHospital.tsx',
  'KottakkalAryaVaidyaSala.tsx',
  'RasayanaAyurvedaCentre.tsx',
  'YantraAyurvedicResort.tsx',
  'ChakraAyurvedicResort.tsx',
  'DeepanjaliAyurRetreat.tsx',
  'MadukkakuzhyAyurveda.tsx',
];

files.forEach(f => {
  const fp = path.join(dir, f);
  const c = fs.readFileSync(fp, 'utf8');
  
  // Review word counts
  const regex = /review:\s*(["'])([\s\S]*?)\1/g;
  let m;
  let counts = [];
  while ((m = regex.exec(c)) !== null) {
    counts.push(m[2].trim().split(/\s+/).length);
  }
  
  // Autoplay
  const autoMatch = c.match(/isReviewAutoPlaying.*useState\((true|false)\)/);
  const autoplay = autoMatch ? autoMatch[1] : 'NOT FOUND';
  
  // Review text size
  const reviewTextMatch = c.match(/<p className="(text-[^ ]+) md:(text-[^ ]+) leading-relaxed" style=\{\{ color: "#7F543D" \}\}>/);
  const reviewSize = reviewTextMatch ? reviewTextMatch[1] + ' md:' + reviewTextMatch[2] : 'NOT FOUND';
  
  // Breadcrumb
  const breadcrumbMatch = c.match(/font-black shrink-0">\s*\n\s*(.*)/);
  const breadcrumb = breadcrumbMatch ? breadcrumbMatch[1].trim() : 'NOT FOUND';
  
  // Intro text
  const introMatch = c.match(/space-y-6 (text-[^ ]+) md:(text-[^ ]+)/);
  const introSize = introMatch ? introMatch[1] + ' md:' + introMatch[2] : 'NOT FOUND';
  
  // Intro alignment
  const hasTextLeft = c.includes('text-foreground/80 text-left');
  const hasTextJustify = c.includes('text-justify');
  
  console.log(f);
  console.log('  reviews: ' + counts.join(', '));
  console.log('  autoplay: ' + autoplay);
  console.log('  review-text-size: ' + reviewSize);
  console.log('  intro-size: ' + introSize);
  console.log('  intro-align: ' + (hasTextLeft ? 'text-left' : (hasTextJustify ? 'text-justify' : 'unknown')));
  console.log('  breadcrumb: ' + breadcrumb);
  console.log('');
});
