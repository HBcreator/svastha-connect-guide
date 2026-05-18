const fs = require('fs');
let content = fs.readFileSync('./src/pages/programs/OsteoarthritisTreatment.tsx', 'utf-8');

const newFaqs = "const faqItems = [\n" +
  "  { question: 'Can Ayurveda actually treat osteoarthritis, or is it only for mild pain?', answer: 'Ayurvedic treatment is effective across a wide spectrum of osteoarthritis severity. Clinical studies have documented measurable improvement in pain scores, joint mobility, and body weight following structured Panchakarma programs. It significantly reduces pain and slows further degeneration.' },\n" +
  "  { question: 'How long does it take to see results?', answer: 'Many patients notice reduced stiffness and improved sleep within the first 7–10 days. Significant pain relief and improved mobility are typically observed by week two. The most complete transformation develops fully over the 21–28 day program and continues to improve after returning home.' },\n" +
  "  { question: 'Will I be able to walk and move during the treatment program?', answer: 'Yes. The program is not bed-rest based. Light walking, gentle yoga, and moderate daily movement are actively encouraged from day one.' },\n" +
  "  { question: 'Can this program help me avoid knee replacement surgery?', answer: 'For many patients, yes. Surveys from leading Indian Ayurvedic centers report that a significant proportion of patients who undergo full structured programs avoid elective joint replacement surgery for extended periods.' },\n" +
  "  { question: 'Do I need to stop my current medications before starting?', answer: 'No. You should never stop prescribed medications without guidance from your treating doctor at home. Your Ayurvedic physician will create a plan that works safely alongside them.' }\n" +
  "];";
content = content.replace(/const faqItems = [\s\S]*?];/, newFaqs);

const newWeekBreakdown = "const weekBreakdown = [\n" +
  "  { week: 'Week 1', title: 'Purva Karma (Preparation)', focus: 'Loosening toxins, preparing joints for deep treatment', description: 'Your program begins with a thorough consultation. Daily Abhyanga and Swedana begin to soften deep tissue deposits, improve circulation around the joints, and prepare your body to release toxins. A carefully designed anti-inflammatory Ayurvedic diet begins.' },\n" +
  "  { week: 'Week 2', title: 'Pradhana Karma (Core Treatment)', focus: 'Active detox and targeted joint healing', description: 'The most intensive phase. Janu Basti is performed daily. Kizhi treatments targeting hips and lower back bring significant relief. Basti therapy works on Vata at its root, producing effects felt throughout the musculoskeletal system.' },\n" +
  "  { week: 'Week 3', title: 'Paschat Karma (Rejuvenation)', focus: 'Tissue rebuilding, strengthening, mobility restoration', description: 'Treatment shifts to rebuilding. Rasayana therapies nourish bone tissue and synovial fluid. Daily therapeutic yoga sessions restore functional mobility and muscle strength around affected joints.' },\n" +
  "  { week: 'Week 4', title: 'Extended Recovery (Optional)', focus: 'For advanced cases needing deeper systemic treatment', description: 'For patients with advanced osteoarthritis or multiple joint involvement. Additional week allows for extended Basti cycles generating more profound systemic Vata correction and cartilage-supporting benefits.' }\n" +
  "];";
content = content.replace(/const weekBreakdown = [\s\S]*?];/, newWeekBreakdown);

fs.writeFileSync('./src/pages/programs/OsteoarthritisTreatment.tsx', content, 'utf-8');
console.log("Replaced FAQs and Week Breakdown");
