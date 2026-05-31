const fs = require('fs');
const path = require('path');

const dir = 'src/pages/centers';

const fixes = {
  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#1 (44 words -> 40)
  "My chronic psoriasis had flared up terribly. Dhanwanthralaya developed a specialized Panchakarma cleansing protocol combined with daily herbal body wraps and custom botanical oils. The results were nothing short of miraculous. My skin cleared up completely and feels healthy. Highly recommend their dermatology wing.":
  "My chronic psoriasis had flared up terribly. Dhanwanthralaya developed a specialized Panchakarma protocol combined with daily herbal wraps and custom botanical oils. The results were miraculous. My skin cleared up completely and feels healthy. Highly recommend their dermatology wing.",

  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#2 (45 words -> 39)
  "After two unsuccessful surgical attempts, I was skeptical about treating my complex fistula. Dr. Ashok Kumar used classical Kshara Sutra thread therapy with exceptional precision and clinical hygiene. The treatment healed my fistula from the root with zero side effects. True masters of Shalya Tantra.":
  "After two unsuccessful surgical attempts, I was skeptical about treating my fistula. Dr. Ashok Kumar used classical Kshara Sutra therapy with exceptional precision. The treatment healed my fistula from the root with zero side effects. True masters of Shalya Tantra.",

  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#3 (41 words -> 38)
  "Dealing with severe PCOS and fertility struggles for four years, Dhanwanthralaya provided an integrated protocol combining deep Uttara Vasti and strictly managed Ayurvedic diet. Dr. Krithika Narayanan was incredibly compassionate. Within six months of continuing therapies, I conceived naturally! Truly grateful.":
  "Dealing with severe PCOS and fertility struggles, Dhanwanthralaya provided an integrated protocol combining deep Uttara Vasti and strictly managed Ayurvedic diet. Dr. Krithika Narayanan was incredibly compassionate. Within six months of continuing therapies, I conceived naturally!",

  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#4 (42 words -> 37)
  "High-stress corporate work left me with severe insomnia and intense anxiety. The neuropsychiatry wing offered pure peace. Structured Shirodhara and medicated head oil poolings completely quieted my overactive nervous system. I am sleeping deeply now and feel completely revitalized. Outstanding authentic care!":
  "High-stress corporate work left me with severe insomnia and anxiety. The neuropsychiatry wing offered pure peace. Structured Shirodhara and medicated head oil poolings completely quieted my nervous system. I am sleeping deeply now and feel completely revitalized.",

  // VarapradaAyurvedicCenter.tsx - review#1 (41 words -> 38)
  "A herniated disc caused shooting nerve pain down my arm. Dr. Vinay combined classical warm oil treatments with specialized soft tissue manipulation. The approach was gentle yet deeply effective. My neck movement is fully restored and nerve compression has completely vanished.":
  "A herniated disc caused shooting nerve pain down my arm. Dr. Vinay combined classical warm oil treatments with specialized manipulation. The approach was gentle yet deeply effective. My neck movement is fully restored and nerve compression vanished.",
};

const filesToFix = [
  'DhanwanthralayaAyurvedaSpecialityHospital.tsx',
  'VarapradaAyurvedicCenter.tsx',
];

filesToFix.forEach(f => {
  const fp = path.join(dir, f);
  let c = fs.readFileSync(fp, 'utf8');
  let changes = 0;
  
  for (const [old, nw] of Object.entries(fixes)) {
    if (c.includes(old)) {
      c = c.replace(old, nw);
      changes++;
    }
  }
  
  if (changes > 0) {
    fs.writeFileSync(fp, c);
    console.log('FIXED: ' + f + ' (' + changes + ' changes)');
  }
});
