const fs = require('fs');

const path = 'src/pages/centers/AryaVaidyaSala.tsx.tsx';

const replacements = {
  "Following a grueling series of chemotherapy sessions, my body was entirely depleted of energy and plagued by intense chronic fatigue. Coming to Kottakkal's flagship hospital was a turning point. The integrated oncology protocols and tailored Rasayana therapies supervised by senior Vaidyas were extraordinary. Within three weeks, my natural appetite returned, my cellular vitality was completely restored, and I regained my physical strength. The dedication to healing here is unmatched.": 
  "Following grueling chemotherapy sessions, coming to Kottakkal's flagship hospital was a massive turning point. The integrated oncology protocols and tailored Rasayana therapies supervised by senior Vaidyas completely restored my cellular vitality, natural appetite, and physical strength.",

  "Severe knee osteoarthritis and deep joint stiffness had made walking incredibly painful for over five years. I tried several treatments in Europe with no success. The warm medicated oil stream treatments (Pizhichil) and synchronized massages here worked absolute wonders. The joint inflammation subsided entirely, and I can walk pain-free again. Arya Vaidya Sala represents the absolute gold standard in classical Keralite orthopedic care.": 
  "Severe knee osteoarthritis made walking incredibly painful for five years. The warm medicated oil stream treatments and synchronized massages here worked absolute wonders. The joint inflammation subsided entirely, and I can happily walk pain-free again. Absolute gold standard care.",

  "I had suffered from chronic skin flare-ups and agonizing eczema for nearly a decade. The dermatological team at AVS developed a specialized protocol combining a strict Ayurvedic detox (Virechana) and daily botanical wraps. The results were nothing short of miraculous. My skin has cleared up completely and feels healthy for the first time in years. They truly heal chronic diseases from the root.": 
  "Suffering from agonizing eczema for a decade, the dermatological team developed a specialized protocol combining Ayurvedic detox and botanical wraps. The results were absolutely miraculous. My skin has cleared up completely and feels healthy for the first time.",

  "Intense corporate burnout and stress had given me chronic digestive issues and insomnia. Undergoing the classical three-week Panchakarma program in Kottakkal was a deeply transformative experience. The clinical precision, pristine environment, and profound knowledge of the Vaidyas helped me completely reset my system. My digestion is perfect, my sleep is restored, and I feel reborn. An incredible sanctuary!": 
  "Corporate burnout gave me chronic digestive issues and insomnia. The classical three-week Panchakarma program in Kottakkal was a deeply transformative experience. The clinical precision and profound knowledge of the Vaidyas perfectly restored my digestion and sleep. An incredible sanctuary!",

  "Severe insomnia and persistent anxiety had completely ruined my daily routine. AVS's serene, legacy-rich healing environment immediately put me at ease. The rhythmic warm oil stream of Shirodhara and classical head poolings quieted my overactive nervous system. I am finally sleeping deeply for eight hours every night and feel completely recharged. Excellent authentic Keralite hospital care!": 
  "Severe insomnia and persistent anxiety completely ruined my daily routine. The serene healing environment and rhythmic warm oil stream of Shirodhara quieted my nervous system. I am finally sleeping deeply every night and feel completely recharged. Excellent authentic care!"
};

let content = fs.readFileSync(path, 'utf8');

// Replace reviews
for (const [long, short] of Object.entries(replacements)) {
  if (content.includes(long)) {
     content = content.replace(long, short);
  }
}

// Ensure auto-rotate is off
content = content.replace(/useState\(true\)/g, 'useState(false)');

// Change text alignment from justify to left
content = content.replace(/text-justify hyphens-auto md:text-left/g, 'text-left');
content = content.replace(/text-justify md:text-left/g, 'text-left');
content = content.replace(/text-justify hyphens-auto/g, 'text-left');
content = content.replace(/text-justify/g, 'text-left');

// Change text size
content = content.replace(/className="space-y-6 text-lg md:text-xl/g, 'className="space-y-6 text-base md:text-xl');

fs.writeFileSync(path, content);
console.log('Fixed AryaVaidyaSala.tsx.tsx');
