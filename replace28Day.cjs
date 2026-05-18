const fs = require('fs');

const filePath = 'src/pages/programs/PanchakarmaHealing28Day.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// More rigorous replacements
content = content.replace(/21-Day/gi, '28-Day');
content = content.replace(/21 Day/gi, '28 Day');
content = content.replace(/21 Days/gi, '28 Days');
content = content.replace(/21 days/gi, '28 days');
content = content.replace(/21-day/gi, '28-day');
content = content.replace(/20 Nights/gi, '27 Nights');
content = content.replace(/20 nights/gi, '27 nights');

// Restore image paths that might have been changed
content = content.replace(/\/Ayurvedic Programs\/Images\/28-Day-Panchakarma-Detox-Program-India\//g, '/Ayurvedic Programs/Images/21-Day-Panchakarma-Detox-Program-India/');
content = content.replace(/\/Program Images\/28-day-detox\.png/g, '/Program Images/21-day-detox.png');

// Reviews replacement
const newReviews = `const patientReviews = [
  {
    name: "Walther Brinkmann",
    location: "Cologne, Germany",
    condition: "Autoimmune condition",
    title: "Twenty-Eight Days That Rebuilt My Health From the Ground Up.",
    review: "I committed to a twenty-eight day programme for my autoimmune condition. The three-phase protocol—including Snehana oleation, followed by Virechana, Basti, and Nasya procedures, and concluding with Rasayana rejuvenation—produced a daily transformation. My departure tests showed the most significant reduction in chronic inflammation markers my physician in Cologne had seen in three years.",
    rating: 5,
    verified: true,
  },
  {
    name: "Assumpta Brennan",
    location: "Cork, Ireland",
    condition: "IBS and gut issues",
    title: "The Only Duration That Delivers Complete Results.",
    review: "A seven-day Panchakarma in Europe was superficial; this 28-day commitment was profound. It allowed for a full Purvakarma preparation before the main procedures. My IBS, which had been unmanaged for four years, resolved within the Basti sequence of the third week. The Paschatkarma restoration in the final days embedded changes I still feel nine months later.",
    rating: 5,
    verified: true,
  },
  {
    name: "Delphine Aubert",
    location: "Toulouse, France",
    condition: "Burnout and fatigue",
    title: "Week One Prepared Me. Week Two Transformed Me. Week Three Rebuilt Me. Week Four Sustained It.",
    review: "The twenty-eight day programme unfolded in a clear progression. The first week of Snehana prepared my tissues. The second week of Virechana and Basti released toxins, bringing a physical lightness I had never experienced. The third week's Navarakizhi and Rasayana herbs rebuilt my system, returning my energy and mental clarity daily.",
    rating: 5,
    verified: true,
  },
  {
    name: "Sander Hoekstra",
    location: "Utrecht, Netherlands",
    condition: "Metabolic Syndrome",
    title: "The Only Programme That Addressed My Metabolic Syndrome Comprehensively.",
    review: "My metabolic syndrome was being managed by four separate medications. The physician designed a 28-day Panchakarma programme to address the common root. The Lekhana Basti, Virechana, and Udwarthanam herbal massage produced measurable improvements in all four parameters. My Dutch physician noted the best results in blood pressure, glucose, and triglycerides he had seen in two years.",
    rating: 5,
    verified: true,
  },
  {
    name: "Brigid Connolly",
    location: "Galway, Ireland",
    condition: "Fibromyalgia and anxiety",
    title: "The Most Significant Health Decision of My Life.",
    review: "I arrived with fibromyalgia, anxiety, chronic fatigue, and severe gut issues. The physician identified a single deep Vata-Ama imbalance and designed a 28-day programme. The Snehana phase reduced my joint pain, the Basti sequence normalised my gut, and the Shirodhara sessions dissolved my anxiety. I returned home with four conditions measurably improved and one integrated home protocol.",
    rating: 5,
    verified: true,
  },
];`;

// Replace the array exactly
// find start index of `const patientReviews = [`
const startIndex = content.indexOf('const patientReviews = [');
if (startIndex !== -1) {
  const endIndex = content.indexOf('];', startIndex) + 2;
  content = content.substring(0, startIndex) + newReviews + content.substring(endIndex);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replacements completed successfully.');
