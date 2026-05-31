const fs = require('fs');

const path = 'src/pages/centers/KottakkalAryaVaidyaSala.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace long reviews with 30-40 word versions based on keywords
content = content.replace(/review:\s*".*After months of computing fatigue.*"/g, 'review: "After months of computing fatigue, specialized warm oil pooling and synchronized leaf pouch massages at Arya Vaidya Sala dissolved my neck tension entirely. My posture improved, and the radiating pain vanished. The doctors truly uphold pristine standards."');

content = content.replace(/review:\s*".*severe lumbar disc bulge.*"/g, 'review: "A severe lumbar disc bulge left me with sharp pain down my leg. The incredibly precise combination of Kati Vasti and localized steam therapies brilliantly relieved the nerve compression. Within two weeks, I perfectly regained full mobility without painkillers."');

content = content.replace(/review:\s*".*Corporate burnout and constant stress.*"/g, 'review: "Corporate burnout disrupted my sleep. The prescribed Shirodhara at this phenomenal clinic was deeply transformative. It completely calmed my nervous system, wonderfully restoring deep and uninterrupted sleep within just five sessions. It perfectly balances ancient wisdom with urban needs."');

content = content.replace(/review:\s*".*chronic digestive sluggishness and fatigue.*"/g, 'review: "Suffering from chronic digestive sluggishness, the clinic\'s internal purification protocol and dry powder massages were exactly what I needed. My metabolism improved drastically, the constant bloating is completely gone, and I feel significantly lighter. Highly effective medicinal formulations."');

content = content.replace(/review:\s*".*Recurring sinus congestion and migraines.*"/g, 'review: "Recurring sinus congestion and migraines used to ruin my week. The Nasyam treatments at the Chennai center worked absolute wonders. By the end of the protocol, my nasal passages were fully cleared, and I haven\'t had a single migraine since."');

// Ensure auto-rotate is off
content = content.replace(/useState\(true\)/g, 'useState(false)');

fs.writeFileSync(path, content);
console.log('Fixed Kottakkal reviews.');
