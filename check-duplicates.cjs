const fs = require('fs');

const files = [
  'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx',
  'src/pages/centers/YantraAyurvedicResort.tsx'
];

files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const regex = /review:\s*(["'])([\s\S]*?)\1/g;
  let m;
  let reviews = [];
  while ((m = regex.exec(c)) !== null) {
    reviews.push(m[2]);
  }
  console.log('--- ' + f.split('/').pop() + ' ---');
  reviews.forEach((r, i) => {
    console.log(i + ': ' + r.substring(0, 50) + '...');
  });
});
