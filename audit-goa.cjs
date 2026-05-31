const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';

const files = [
  'Veda5WellnessRetreatArambol.tsx',
  'HealthAndAyurvedaANHCGoa.tsx',
  'AyurTouchAyurvedicHealthcare.tsx',
  'YashrajAyurvedaClinic.tsx',
  'SreeShantiWellness.tsx',
  'NaturalTouchAyurveda.tsx',
  'KAREHealthGoa.tsx',
];

// Try to find actual filenames
const allFiles = fs.readdirSync(dir);
const found = [];
files.forEach(f => {
  const base = f.replace('.tsx','');
  const match = allFiles.find(af => af.replace('.tsx','').toLowerCase().replace(/[-_\s]/g,'') === base.toLowerCase().replace(/[-_\s]/g,''));
  if (match) found.push(match);
  else {
    // fuzzy
    const fuzzy = allFiles.find(af => af.toLowerCase().includes(base.substring(0,10).toLowerCase()));
    if (fuzzy) found.push(fuzzy);
    else console.log('NOT FOUND: ' + f);
  }
});

found.forEach(f => {
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
  
  // Review text size - check for large text
  const hasLargeReview = c.includes('text-xl md:text-2xl leading-relaxed') || c.includes('text-lg md:text-2xl leading-relaxed');
  const reviewSizeMatch = c.match(/"(text-[^\s"]+)\s+md:(text-[^\s"]+)\s+leading-relaxed"\s+style=\{\{\s*color:\s*"#7F543D"/);
  const reviewSize = reviewSizeMatch ? reviewSizeMatch[1] + ' md:' + reviewSizeMatch[2] : 'NOT FOUND';
  
  // Breadcrumb
  const breadcrumbMatch = c.match(/font-black shrink-0">\s*\n\s*(.*)/);
  const breadcrumb = breadcrumbMatch ? breadcrumbMatch[1].trim() : 'NOT FOUND';
  
  // Intro text
  const introMatch = c.match(/space-y-6 (text-[^ ]+) md:(text-[^ ]+)/);
  const introSize = introMatch ? introMatch[1] + ' md:' + introMatch[2] : 'NOT FOUND';
  
  // Intro alignment
  const hasTextLeft = c.includes('text-foreground/80 text-left');
  
  console.log(f);
  console.log('  reviews: ' + counts.join(', '));
  console.log('  autoplay: ' + autoplay);
  console.log('  review-text-size: ' + reviewSize);
  console.log('  large-review-text: ' + hasLargeReview);
  console.log('  intro-size: ' + introSize);
  console.log('  intro-align: ' + (hasTextLeft ? 'text-left' : 'NOT text-left'));
  console.log('  breadcrumb: ' + breadcrumb);
  console.log('');
});
