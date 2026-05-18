const fs = require('fs');

const filePath = 'src/pages/programs/PanchakarmaHealing28Day.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const newWeekBreakdown = `const weekBreakdown = [
  {
    title: "Week 1 - Purva Karma (Preparation)",
    duration: "Day 1-7",
    focus: "Preparing the body for deep detox",
    description:
      "Daily Abhyanga, Swedana, personalized diet, and internal oleation are used to mobilize stored toxins and prepare elimination pathways.",
    bullets: ["Snehana (oil massage)", "Swedana (herbal steam)", "Dietary adjustments", "Herbal medicines"],
    image: "/Program Images/detox_preparation.png",
  },
  {
    title: "Week 2 - Pradhana Karma (Core Detox)",
    duration: "Day 8-14",
    focus: "Active toxin elimination",
    description:
      "This is the core cleansing phase. Based on constitution and diagnosis, physicians prescribe Virechana, Basti, Nasya, and sometimes Vamana, plus supportive therapies.",
    bullets: ["Virechana", "Basti", "Nasya or Vamana (as prescribed)", "Shirodhara and Abhyanga"],
    image: "/Program Images/detox_core.png",
  },
  {
    title: "Week 3 - Paschat Karma (Restoration)",
    duration: "Day 15-21",
    focus: "Restoration of digestive fire and tissue healing",
    description:
      "Following intense elimination, the body is delicate. Therapies transition to gentle restorative procedures, rebuilding the digestive fire (Agni) and calming the nervous system.",
    bullets: ["Samsarjana Krama (special diet)", "Mild Abhyanga", "Navarakizhi", "Pranayama and rest"],
    image: "/Program Images/14-day-retreat.png",
  },
  {
    title: "Week 4 - Rasayana (Deep Rejuvenation)",
    duration: "Day 22-28",
    focus: "Deep cellular nourishment and immunity building",
    description:
      "The final week focuses on Rasayana (rejuvenation) therapies. Having removed toxins, the body is primed to absorb deep nourishment, ensuring the healing effects last for months or years.",
    bullets: ["Rasayana herbs", "Rejuvenating oils", "Pizhichil", "Yoga and integration planning"],
    image: "/Program Images/28-day-healing.png",
  },
];`;

const startIndex = content.indexOf('const weekBreakdown = [');
if (startIndex !== -1) {
  const endIndex = content.indexOf('];', startIndex) + 2;
  content = content.substring(0, startIndex) + newWeekBreakdown + content.substring(endIndex);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Week breakdown updated.');
