const fs = require('fs');
const path = require('path');
const dir = 'src/pages/centers';
const f = 'AyurvedicNaturalHealthCentre.tsx';
const fp = path.join(dir, f);
const c = fs.readFileSync(fp, 'utf8');

const regex = /review:\s*(["'])([\s\S]*?)\1/g;
let m; let counts = [];
while ((m = regex.exec(c)) !== null) counts.push(m[2].trim().split(/\s+/).length);

const autoMatch = c.match(/isReviewAutoPlaying.*useState\((true|false)\)/);
const hasLargeReview = c.includes('text-xl md:text-2xl leading-relaxed') || c.includes('text-lg md:text-2xl leading-relaxed');
const breadcrumbMatch = c.match(/font-black shrink-0">\s*\n\s*(.*)/);
const introMatch = c.match(/space-y-6 (text-[^ ]+) md:(text-[^ ]+)/);
const hasTextLeft = c.includes('text-foreground/80 text-left');

console.log(f);
console.log('  reviews: ' + counts.join(', '));
console.log('  autoplay: ' + (autoMatch ? autoMatch[1] : 'NOT FOUND'));
console.log('  large-review-text: ' + hasLargeReview);
console.log('  intro-size: ' + (introMatch ? introMatch[1]+' md:'+introMatch[2] : 'NOT FOUND'));
console.log('  intro-align: ' + (hasTextLeft ? 'text-left' : 'NOT text-left'));
console.log('  breadcrumb: ' + (breadcrumbMatch ? breadcrumbMatch[1].trim() : 'NOT FOUND'));
