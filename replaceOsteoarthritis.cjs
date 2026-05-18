const fs = require('fs');
let content = fs.readFileSync('./src/pages/programs/OsteoarthritisTreatment.tsx', 'utf-8');

const replacements = [
  [/21-Day Panchakarma Detox Program/g, "Ayurveda Treatment for Osteoarthritis"],
  [/21-Day Authentic Panchakarma Detox In India/g, "Ayurveda Treatment for Osteoarthritis in India"],
  [/21-Day Authentic Kerala Panchakarma Detox/g, "Ayurveda Treatment for Osteoarthritis in India"],
  [/21-Day Authentic Panchakarma Detox in India/g, "Ayurveda Treatment for Osteoarthritis in India"],
  [/Experience the ultimate 21-day authentic Kerala Panchakarma Detox\./g, "Escape chronic joint pain. Reclaim your mobility. Experience India's most trusted Ayurvedic healing."],
  [/Every treatment is overseen by senior Ayurvedic physicians/g, "Supervised by qualified Ayurvedic Doctors (BAMS / MD Ayurveda)"],
  [/>Top Rated Panchakarma Detox</g, ">Top Rated Osteoarthritis Treatment<"],
  [/>Complete Body Detox</g, ">Joint Pain & Mobility Focus<"],
  [/>Detoxification</g, ">Inflammation Reduction<"]
];

replacements.forEach(([regex, replace]) => {
  content = content.replace(regex, replace);
});

// Update quickSummaryRows
const newQuickSummary = "const quickSummaryRows = [\n" +
  "  { label: 'Condition Treated', details: 'Osteoarthritis (Sandhivata) — knee, hip, spine, hands' },\n" +
  "  { label: 'Treatment Duration', details: '21–28 Days (recommended for full therapeutic benefit)' },\n" +
  "  { label: 'Who It Is For', details: 'Adults with mild to advanced osteoarthritis seeking natural, drug-free relief' },\n" +
  "  { label: 'Core Approach', details: 'Panchakarma detox + targeted joint therapies + herbal medicines' },\n" +
  "  { label: 'Key Benefit', details: 'Pain relief, reduced inflammation, improved mobility, cartilage support' },\n" +
  "  { label: 'Top Locations', details: 'Kerala, Rishikesh, Bangalore' },\n" +
  "  { label: 'Average Cost', details: '$2,500 – $4,500 USD (all-inclusive)' },\n" +
  "  { label: 'Supervised By', details: 'Qualified Ayurvedic Doctors (BAMS / MD Ayurveda)' },\n" +
  "];";
content = content.replace(/const quickSummaryRows = [\s\S]*?];/, newQuickSummary);

// Update therapies
const newTherapies = "const therapies = [\n" +
  "  {\n" +
  "    name: 'Janu Basti (Knee Oil Pooling Therapy)',\n" +
  "    description: 'A specially designed dough ring is placed around the knee joint and filled with warm, medicated herbal oil. It acts deeply to reduce pain, improve lubrication, and slow cartilage degeneration.',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Abhyanga (Medicated Full-Body Oil Massage)',\n" +
  "    description: 'Daily full-body massage using warm herbal oils specifically chosen for your Vata constitution to improve circulation and nourish joint tissue.',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Kizhi (Herbal Pouch Massage)',\n" +
  "    description: 'Warm bundles filled with medicinal herbs, rice, or sand applied rhythmically to joints to reduce swelling and relieve deep muscular tension.',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Pizhichil (Warm Oil Stream Therapy)',\n" +
  "    description: 'A continuous stream of warm medicated oil is poured over the body while being massaged in, exceptional for restoring mobility and relieving chronic stiffness.',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Basti (Medicated Enema Therapy)',\n" +
  "    description: 'The most powerful Vata-balancing treatment. Acts systemically to reduce Vata throughout the body and bring relief to multiple affected joints.',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Swedana (Herbal Steam Therapy)',\n" +
  "    description: 'Targeted or full-body steam using medicinal herbs opens the body\\'s channels, loosens deep toxin deposits, and significantly reduces stiffness.',\n" +
  "  }\n" +
  "];";
content = content.replace(/const therapies = [\s\S]*?];/, newTherapies);

// Update patient reviews
const newReviews = "const patientReviews = [\n" +
  "  {\n" +
  "    name: 'David Thompson',\n" +
  "    location: 'Manchester, UK',\n" +
  "    text: 'My surgeon told me a knee replacement was inevitable. As a last resort, I came to India for a 21-day Ayurvedic program. The specialized Janu Basti and herbal poultice massages were incredible. My pain has reduced by 80%, and my surgeon has agreed to postpone the surgery indefinitely.',\n" +
  "    icon: 'Male',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Klaus Richter',\n" +
  "    location: 'Munich, Germany',\n" +
  "    text: 'For years, the first hour of my day was a painful battle against morning stiffness. The daily Abhyanga and Pizhichil therapy were a revelation. By the second week, I was waking up and walking with freedom.',\n" +
  "    icon: 'Male',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Sarah Jenkins',\n" +
  "    location: 'New York, USA',\n" +
  "    text: 'Years of sitting at a desk had left me with chronic lower back pain. The 14-day spine care program with Kati Vasti was the first thing that provided deep, lasting relief. The doctors taught me simple yoga stretches I can do at my desk.',\n" +
  "    icon: 'Female',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Isabelle Dubois',\n" +
  "    location: 'Paris, France',\n" +
  "    text: 'My hip osteoarthritis had forced me to give up gardening. After a 21-day program including specialized oil therapies and yoga, I have regained so much mobility. I am back in my garden, and couldn\\'t be more grateful.',\n" +
  "    icon: 'Female',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'William O\\'Connor',\n" +
  "    location: 'Dublin, Ireland',\n" +
  "    text: 'I was worried that at 80, treatments might be too intense. I couldn\\'t have been more wrong. The gentle, highly effective program provided immense comfort, and I am now taking my daily walks with significantly less pain.',\n" +
  "    icon: 'Male',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Marco Rossi',\n" +
  "    location: 'Rome, Italy',\n" +
  "    text: 'I was tired of the side effects of long-term painkillers. Ayurveda offered a natural solution. The detoxification and nourishing oil therapies managed my pain more effectively than any pill ever did.',\n" +
  "    icon: 'Male',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Kenji Tanaka',\n" +
  "    location: 'Kyoto, Japan',\n" +
  "    text: 'My cervical spondylosis caused constant neck stiffness. The Greeva Basti treatment was a game-changer, completely relaxing deep-seated tension in my neck and shoulders. I feel a freedom I haven\\'t had in years.',\n" +
  "    icon: 'Male',\n" +
  "  },\n" +
  "  {\n" +
  "    name: 'Chloe Nguyen',\n" +
  "    location: 'Sydney, Australia',\n" +
  "    text: 'The constant cracking and popping sound in my knees was worrying. The focus on deeply lubricating the joints has been incredible. The cracking has vanished, and my knees feel strong and stable.',\n" +
  "    icon: 'Female',\n" +
  "  }\n" +
  "];";
content = content.replace(/const patientReviews = [\s\S]*?(?=const OsteoarthritisTreatment =)/, newReviews + "\n\n");

fs.writeFileSync('./src/pages/programs/OsteoarthritisTreatment.tsx', content, 'utf-8');
console.log("Successfully replaced contents!");
