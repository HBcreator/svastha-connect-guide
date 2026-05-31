const fs = require('fs');

const path = 'src/pages/centers/KottakkalAryaVaidyaSala.tsx';

const replacements = {
  "After months of computing fatigue and neck stiffness, I tried modern physiotherapy to no avail. A colleague recommended Arya Vaidya Sala in Mahalingapuram. Their systematic diagnosis was impressive. Over a 14-day therapeutic regimen involving specialized warm oil pooling (Greeva Vasti) and synchronized leaf pouch massages (Elakizhi), my neck tension dissolved entirely. My posture has improved, and the radiating pain into my shoulders has completely vanished. The doctors truly uphold the pristine standards of Kottakkal.": 
  "After months of computing fatigue, specialized warm oil pooling and synchronized leaf pouch massages at Arya Vaidya Sala dissolved my neck tension entirely. My posture improved, and the radiating pain vanished. The doctors truly uphold pristine standards.",

  "A severe lumbar disc bulge had left me with sharp pain shooting down my left leg. The traditional treatments here were exceptionally precise. The combination of Kati Vasti (lower back oil retention) and localized steam therapies relieved the nerve compression brilliantly. Within two weeks, I regained full mobility without relying on strong painkillers. The atmosphere in the Chennai clinic is serene and strictly professional.": 
  "A severe lumbar disc bulge left me with sharp pain down my leg. The incredibly precise combination of Kati Vasti and localized steam therapies brilliantly relieved the nerve compression. Within two weeks, I perfectly regained full mobility without painkillers.",

  "Corporate burnout and constant stress had severely disrupted my sleep. Looking for natural rejuvenation, I consulted the senior physician here. The prescribed Shirodhara (continuous pouring of warm medicated oil on the forehead) was deeply transformative. It completely calmed my nervous system, restoring deep and uninterrupted sleep within just five sessions. A phenomenal clinic that perfectly balances ancient wisdom with modern urban needs.": 
  "Corporate burnout disrupted my sleep. The prescribed Shirodhara at this phenomenal clinic was deeply transformative. It completely calmed my nervous system, wonderfully restoring deep and uninterrupted sleep within just five sessions. It perfectly balances ancient wisdom with urban needs.",

  "I had been suffering from chronic digestive sluggishness and fatigue. The physicians at the clinic designed a comprehensive internal purification protocol combined with traditional dry powder massages (Udwarthanam). My metabolism has improved drastically, the constant bloating is gone, and I feel significantly lighter. The authentic medicinal formulations provided from their Kottakkal pharmacy are highly effective.": 
  "Suffering from chronic digestive sluggishness, the clinic's internal purification protocol and dry powder massages were exactly what I needed. My metabolism improved drastically, the constant bloating is completely gone, and I feel significantly lighter. Highly effective medicinal formulations.",

  "Recurring sinus congestion and migraines used to ruin my week. The Nasyam (nasal therapeutic oil administration) treatments at the Chennai center worked absolute wonders. The doctor was highly patient in explaining the procedure. By the end of the 7-day protocol, my nasal passages were fully cleared, and I haven't had a migraine since. The staff is incredibly attentive and well-trained.": 
  "Recurring sinus congestion and migraines used to ruin my week. The Nasyam treatments at the Chennai center worked absolute wonders. By the end of the protocol, my nasal passages were fully cleared, and I haven't had a single migraine since."
};

let content = fs.readFileSync(path, 'utf8');
let replacedCount = 0;

for (const [long, short] of Object.entries(replacements)) {
  if (content.includes(long)) {
     content = content.replace(long, short);
     replacedCount++;
  }
}

// Ensure auto-rotate is off
content = content.replace(/useState\(true\)/g, 'useState(false)');

fs.writeFileSync(path, content);
console.log('Fixed Kottakkal: replaced ' + replacedCount + ' reviews.');
