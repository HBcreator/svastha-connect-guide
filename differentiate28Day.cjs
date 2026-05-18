const fs = require('fs');

const filePath = 'src/pages/programs/PanchakarmaHealing28Day.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update gallery images to new 28-day images
const newGalleryImages = `const galleryImages = [
  "/Program Images/28-day-healing-shirodhara.png",
  "/Program Images/28-day-healing-abhyanga.png",
  "/Program Images/28-day-healing-rasayana.png",
  "/Program Images/28-day-healing-yoga.png",
  "/Program Images/28-day-healing-pizhichil.png",
];`;

const galleryStart = content.indexOf('const galleryImages = [');
const galleryEnd = content.indexOf('];', galleryStart) + 2;
content = content.substring(0, galleryStart) + newGalleryImages + content.substring(galleryEnd);

// 2. Update quick summary rows - differentiated for 28-day healing
const newQuickSummaryRows = `const quickSummaryRows = [
  ["Program Name", "28-Day Panchakarma Healing and Rejuvenation"],
  ["Duration", "28 Days / 27 Nights"],
  ["Who It Is For", "Adults with chronic conditions, autoimmune disorders, or seeking complete physiological restoration"],
  ["Key Benefit", "Root-cause healing, chronic disease recovery, deep Rasayana nourishment, long-lasting restoration"],
  ["Top Locations", "Kerala, Rishikesh, Mysore"],
  ["Average Cost", "$3,500 – $6,000 USD"],
  ["Supervised By", "Senior Ayurvedic Physicians (Vaidyas) with chronic care specialization"],
  ["Includes", "Accommodation, three Ayurvedic meals, all therapies, medicines, doctor consultations, Rasayana care"],
];`;

const qsStart = content.indexOf('const quickSummaryRows = [');
const qsEnd = content.indexOf('];', qsStart) + 2;
content = content.substring(0, qsStart) + newQuickSummaryRows + content.substring(qsEnd);

// 3. Update therapies - differentiated for healing context
const newTherapies = `const therapies = [
  {
    title: "Virechana (Therapeutic Purgation)",
    text: "A principal cleansing procedure using medicated herbal preparations to eliminate excess Pitta and deep-seated toxins from the liver, small intestine, and blood. Essential for inflammatory and metabolic conditions.",
    icon: Leaf,
  },
  {
    title: "Basti (Medicated Enema Series)",
    text: "The cornerstone of a 28-day protocol, Basti involves a structured sequence of oil and decoction enemas targeting the colon—the seat of Vata. Effective for joint conditions, neurological issues, and chronic bowel imbalances.",
    icon: Heart,
  },
  {
    title: "Nasya (Cranial Cleansing Therapy)",
    text: "Medicated oils and herbal preparations administered through nasal passages to clear upper channels, support sinus health, improve mental clarity, and address headaches or nervous system imbalances.",
    icon: Sparkles,
  },
  {
    title: "Shirodhara (Neuro-Relaxation Therapy)",
    text: "A continuous warm oil stream on the third-eye point to recalibrate the nervous system. Particularly effective in anxiety, insomnia, burnout, and post-stress recovery phases of the 28-day program.",
    icon: Activity,
  },
  {
    title: "Pizhichil (Oleation Therapy)",
    text: "Warm medicated oil poured continuously over the body by trained therapists. A deeply nourishing procedure used in the restoration phase to strengthen tissues, reduce Vata, and support joint and neuromuscular recovery.",
    icon: Droplet,
  },
  {
    title: "Rasayana (Rejuvenation Protocols)",
    text: "Unique to extended programs, Rasayana therapies in week four use classical herbal formulations to rebuild immunity, nourish deeper tissues (Dhatus), and lock in the detoxification gains achieved in earlier phases.",
    icon: Stethoscope,
  },
];`;

const therapiesStart = content.indexOf('const therapies = [');
const therapiesEnd = content.indexOf('];', therapiesStart) + 2;
content = content.substring(0, therapiesStart) + newTherapies + content.substring(therapiesEnd);

// 4. Update candidate points - differentiated
const newCandidatePoints = `const candidatePoints = [
  "Manage a chronic condition like autoimmune disease, fibromyalgia, or metabolic syndrome",
  "Require root-cause resolution rather than symptom suppression",
  "Have experienced limited results from conventional medical approaches",
  "Deal with severe, long-standing digestive disorders such as IBS, Crohn's, or colitis",
  "Suffer from complex neurological concerns including chronic pain, neuropathy, or fatigue",
  "Are recovering from sustained burnout, adrenal depletion, or prolonged stress exposure",
  "Seek a comprehensive mind-body reset with measurable clinical outcomes",
  "Want a dedicated healing block with maximum Rasayana and rejuvenation benefit",
];`;

const cpStart = content.indexOf('const candidatePoints = [');
const cpEnd = content.indexOf('];', cpStart) + 2;
content = content.substring(0, cpStart) + newCandidatePoints + content.substring(cpEnd);

// 5. Update avoidPoints - differentiated
const newAvoidPoints = `const avoidPoints = [
  "Women who are pregnant or breastfeeding",
  "Individuals within three months of major surgery or organ procedures",
  "Those undergoing active cancer treatment or in acute illness phases",
  "Children under 18 years without explicit medical recommendation",
  "Persons with severe, unmanaged psychiatric disorders",
  "Individuals who are unable to commit to complete dietary and lifestyle restrictions for the full duration",
];`;

const apStart = content.indexOf('const avoidPoints = [');
const apEnd = content.indexOf('];', apStart) + 2;
content = content.substring(0, apStart) + newAvoidPoints + content.substring(apEnd);

// 6. Update benefits - differentiated
const newBenefits = `const benefits = {
  physical: [
    "Complete cellular-level detoxification of chronic toxin accumulations",
    "Measurable reduction in systemic inflammation markers",
    "Significant improvement in chronic digestive disorders including IBS and colitis",
    "Joint pain reduction and improved mobility in arthritic and rheumatic conditions",
    "Skin clarity in persistent dermatological conditions including psoriasis and eczema",
    "Sustainable metabolic recalibration beyond short-program outcomes",
  ],
  mental: [
    "Deep recovery from clinical burnout and adrenal fatigue",
    "Restored nervous system regulation and reduced anxiety load",
    "Sustained improvement in sleep architecture and quality",
    "Enhanced cognitive clarity and long-term mental resilience",
    "Emotional processing and stabilization supported by daily Shirodhara",
    "Stronger mind-body integration sustaining post-program lifestyle shifts",
  ],
  longTerm: [
    "Clinical outcomes frequently sustained for 6–12 months with home protocol compliance",
    "Measurable reductions in dependency on lifestyle medications under supervision",
    "Deeper tissue nourishment via Rasayana week prevents faster relapse compared to shorter formats",
    "Improved biomarkers for metabolic, inflammatory, and immune parameters",
    "Structural lifestyle habit change supported by 28 days of immersive routine",
    "Higher documented satisfaction and repeat-program rates vs 14 or 21-day formats",
  ],
};`;

const bStart = content.indexOf('const benefits = {');
const bEnd = content.indexOf('};', bStart) + 2;
content = content.substring(0, bStart) + newBenefits + content.substring(bEnd);

// 7. Update benefitsSectionImages to new 28-day images
const newBenefitsSectionImages = `const benefitsSectionImages = [
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/shirodhara.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/abhyanga.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/basti-therapy.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/rasayana.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/yoga-meditation.png",
  "/Ayurvedic Programs/Images/28-Day-Panchakarma-Healing-Program-India/Icons/pizhichil.png",
];`;

const bsiStart = content.indexOf('const benefitsSectionImages = [');
const bsiEnd = content.indexOf('];', bsiStart) + 2;
content = content.substring(0, bsiStart) + newBenefitsSectionImages + content.substring(bsiEnd);

// 8. Update chooseIndiaPoints - differentiated
const newChooseIndiaPoints = `const chooseIndiaPoints = [
  {
    title: "Deepest Classical Lineage",
    text: "India's Ayurvedic tradition spans over 5,000 years. For a 28-day healing program requiring maximum clinical accuracy, Indian Vaidyas trained in traditional lineage schools deliver unmatched depth of diagnosis and treatment.",
    icon: Sparkles,
  },
  {
    title: "Specialist Chronic Care Physicians",
    text: "Senior Ayurvedic doctors in India hold BAMS and MD Ayurveda qualifications with extensive experience managing complex chronic conditions across autoimmune, neurological, and metabolic categories.",
    icon: Stethoscope,
  },
  {
    title: "Maximum Value for Extended Stays",
    text: "A fully supervised 28-day clinical program in India costs 70–80% less than comparable duration programs in Germany, UK, or Australia—without any compromise on physician quality or treatment authenticity.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Dedicated Healing Ecosystems",
    text: "India's top centers in Kerala and Rishikesh are designed specifically for extended therapeutic stays—quiet environments, sattvic food, structured daily routines, and clinical supervision all under one roof.",
    icon: Leaf,
  },
  {
    title: "Comprehensive Integrated Protocol",
    text: "Diet therapy, yoga, pranayama, meditation, and Rasayana herbs are seamlessly woven into the 28-day structure—not offered as optional add-ons but as core clinical components.",
    icon: Activity,
  },
  {
    title: "Strong Discharge and Follow-Up Systems",
    text: "Leading Indian Ayurvedic hospitals provide detailed discharge protocols, home Rasayana plans, and remote physician follow-up to sustain the healing outcomes achieved over 28 days.",
    icon: ShieldCheck,
  },
];`;

const cipStart = content.indexOf('const chooseIndiaPoints = [');
const cipEnd = content.indexOf('];', cipStart) + 2;
content = content.substring(0, cipStart) + newChooseIndiaPoints + content.substring(cipEnd);

// 9. Update whyChooseUsPoints - differentiated
const newWhyChooseUsPoints = `const whyChooseUsPoints = [
  {
    title: "Chronic Condition Expertise",
    description: "We specifically shortlist centers experienced in managing complex and long-standing conditions that benefit from the full 28-day clinical protocol.",
    icon: ShieldCheck,
  },
  {
    title: "Physician Pre-Screening",
    description: "Before any booking, our medical advisors assess your health history to ensure the 28-day format is appropriate and to recommend the right physician profile.",
    icon: CalendarCheck2,
  },
  {
    title: "International Patient Logistics",
    description: "We manage visa documentation support, airport coordination, center check-in, and in-country communication across 40+ source countries.",
    icon: Globe2,
  },
  {
    title: "Full 28-Day Journey Support",
    description: "From departure planning to your final Rasayana consultation, our team provides continuous support throughout your complete healing stay.",
    icon: Route,
  },
  {
    title: "Transparent Clinical Standards",
    description: "All partner centers undergo our verification process covering physician qualifications, therapy safety protocols, treatment documentation, and patient feedback systems.",
    icon: UserCog,
  },
  {
    title: "Post-Program Continuity Planning",
    description: "We coordinate your discharge plan, Rasayana supplement guidance, and remote follow-up consultation to protect and extend your 28-day investment.",
    icon: Headset,
  },
];`;

const wcupStart = content.indexOf('const whyChooseUsPoints = [');
const wcupEnd = content.indexOf('];', wcupStart) + 2;
content = content.substring(0, wcupStart) + newWhyChooseUsPoints + content.substring(wcupEnd);

// 10. Update inclusionsRows - differentiated
const newInclusionsRows = `const inclusionsRows = [
  { label: "Accommodation", details: "Private room or suite for 27 nights with dedicated clinical care environment (as per package tier)", icon: BedDouble },
  { label: "Meals", details: "Three daily physician-prescribed Ayurvedic meals aligned to your constitution, treatment phase, and Rasayana requirements", icon: UtensilsCrossed },
  { label: "Doctor Consultations", details: "Daily physician review across all four weeks, with protocol adjustments based on treatment response", icon: Stethoscope },
  { label: "Daily Therapeutic Procedures", details: "Abhyanga, Shirodhara, Basti sequence, Virechana, Pizhichil, Navarakizhi, Nasya, and Rasayana sessions as clinically prescribed", icon: Activity },
  { label: "Ayurvedic Medicines", details: "Classical herbal formulations, medicated oils, Rasayana preparations, and supporting medicines throughout all four program phases", icon: Pill },
  { label: "Yoga and Pranayama", details: "Daily physician-integrated sessions tailored to support detox phases and the final Rasayana week", icon: Brain },
  { label: "Discharge and Home Protocol", details: "Comprehensive post-program diet plan, Rasayana continuation guide, and follow-up consultation scheduling", icon: ClipboardCheck },
];`;

const irStart = content.indexOf('const inclusionsRows = [');
const irEnd = content.indexOf('];', irStart) + 2;
content = content.substring(0, irStart) + newInclusionsRows + content.substring(irEnd);

// 11. Update costComparisonRows - differentiated
const newCostComparisonRows = `const costComparisonRows = [
  {
    program: "28-Day Panchakarma Healing",
    category: "Extended Healing Program",
    cost: "$3,500 – $6,000",
    notes: "Maximum duration, full Rasayana week, chronic condition recovery",
  },
];`;

const ccrStart = content.indexOf('const costComparisonRows = [');
const ccrEnd = content.indexOf('];', ccrStart) + 2;
content = content.substring(0, ccrStart) + newCostComparisonRows + content.substring(ccrEnd);

// 12. Update faqItems - differentiated
const newFaqItems = `const faqItems = [
  {
    question: "Why is 28 days considered the optimal Panchakarma duration for chronic conditions?",
    answer:
      "A 28-day program allows all three classical Panchakarma phases—Purvakarma preparation, Pradhana Karma core elimination, and Paschat Karma restoration—plus a dedicated Rasayana week. This fourth phase is what genuinely distinguishes a 28-day protocol from shorter formats.",
  },
  {
    question: "How much does a 28-day Panchakarma Healing Program cost in India?",
    answer:
      "Well-supervised programs in Kerala or Rishikesh range from $3,500 to $6,000 USD for mid-range to premium centers. Luxury heritage retreats may exceed this. The cost typically includes accommodation, all meals, medicines, and physician consultations.",
  },
  {
    question: "What conditions respond particularly well to the 28-day format?",
    answer:
      "Autoimmune conditions, fibromyalgia, chronic IBS, metabolic syndrome, psoriasis, long-term burnout, and neurological conditions like neuropathy or chronic pain tend to show more significant outcomes in 28-day programs compared to shorter formats.",
  },
  {
    question: "Is it safe to undergo a 28-day Panchakarma without prior Ayurveda experience?",
    answer:
      "Yes. The program is medically supervised from day one. The physician assesses your baseline health and progressively introduces therapies based on your constitution and tolerance. No prior Ayurveda knowledge is required.",
  },
  {
    question: "What is the Rasayana week and why does it matter?",
    answer:
      "Rasayana refers to classical Ayurvedic rejuvenation protocols. Week four is dedicated to rebuilding deeper body tissues (Dhatus) using herbal formulations, nourishing oils, and supportive therapies. This phase significantly increases how long the detox results are sustained after you return home.",
  },
  {
    question: "What is the best time of year for a 28-day Panchakarma in India?",
    answer:
      "October through March is preferred for international visitors due to favorable climate and high center availability. However, Kerala centers often recommend the monsoon season (June–August) as traditionally considered the most effective period for Panchakarma.",
  },
  {
    question: "How different is a 28-day program from a 21-day program?",
    answer:
      "The primary difference is the addition of a complete Rasayana (rejuvenation) week. In 21-day programs, restoration is partial. The 28-day format allows the body to fully recover from the elimination phase and receive deep tissue nourishment before discharge.",
  },
  {
    question: "Can I reduce my dependency on medications through this program?",
    answer:
      "Some patients experience reduced medication requirements under physician supervision following a 28-day program, particularly for lifestyle-related conditions. This is always managed in coordination with your treating physician at home.",
  },
];`;

const faqStart = content.indexOf('const faqItems = [');
const faqEnd = content.indexOf('];', faqStart) + 2;
content = content.substring(0, faqStart) + newFaqItems + content.substring(faqEnd);

// 13. Update hero subtitle 
content = content.replace(
  'Complete full body detox and rejuvenation with physician-led care.',
  'A four-week physician-led Ayurvedic healing protocol designed for chronic condition recovery, deep cellular restoration, and Rasayana rejuvenation.'
);

// 14. Update hero rating
content = content.replace('4.8/5 Excellent Rating', '4.9/5 Excellent Rating');

// 15. Update the Quick Summary top cards "Ideal For"
content = content.replace('Detox, Recovery, Reset', 'Chronic Healing, Rasayana, Restoration');

// 16. Update program overview text
const oldOverview = `This program is a structured, physician-supervised Ayurvedic detox protocol designed for full-system cleansing, recovery, and rejuvenation. It is not a spa format; it is a clinical wellness process personalized by constitution and health condition. Panchakarma means "five actions" and refers to core elimination therapies used to remove deep toxic load (Ama), restore organ function, and improve long-term vitality.`;
const newOverview = `The 28-Day Panchakarma Healing Program is a physician-supervised, four-phase clinical protocol designed specifically for individuals dealing with chronic health conditions, persistent physiological imbalances, or those who require more than detox—they require genuine healing. Unlike shorter formats, this program does not conclude with elimination. It includes a dedicated week of Rasayana (classical rejuvenation), ensuring the body is not just cleansed but rebuilt at a cellular level.`;
content = content.replace(oldOverview, newOverview);

const oldOverview2 = `The 28-day format is widely used because it can complete the three classical stages: preparation, core elimination, and restoration.`;
const newOverview2 = `The 28-day duration is the minimum recommended by classical Ayurvedic texts for addressing deep-rooted Ama (toxin accumulations) in chronic cases. With four full weeks, the program completes all classical stages plus Rasayana—the phase most programs omit.`;
content = content.replace(oldOverview2, newOverview2);

// 17. Update Understanding Panchakarma sub-heading
content = content.replace(
  'Not all five therapies are given to every guest. Your doctor prescribes the combination based on diagnosis and tolerance.',
  'In a 28-day format, the physician has sufficient time to sequence therapies across all four phases with precision. The extended duration enables deeper Basti series, more complete elimination, and a full Rasayana restoration—each procedure building on the last.'
);

// 18. Update Top Centers sub-heading
content = content.replace(
  'Handpicked hospitals and retreats with specialized care for 21-day detox programs.',
  'Verified hospitals and healing retreats with demonstrated expertise in extended 28-day Panchakarma protocols and chronic condition recovery.'
);

// 19. Update "Book Your" section
content = content.replace(
  'Book Your 28-Day Panchakarma Program',
  'Begin Your 28-Day Healing Journey'
);
content = content.replace(
  'Begin with a no-obligation consultation. We help you choose the right center, dates, and package for your condition and budget.',
  'A senior Svastha Global advisor will review your health profile, recommend the right center and physician match, and walk you through what to expect across all four phases of your healing program.'
);
content = content.replace(
  'Hi%2C%20I%20want%20to%20book%20a%20free%20consultation%20for%20the%2028-day%20Panchakarma%20Healing%20program.',
  'Hi%2C%20I%20am%20interested%20in%20the%2028-Day%20Panchakarma%20Healing%20Program.%20Please%20help%20me%20plan%20my%20stay.'
);

// 20. Update gallery section heading
content = content.replace(
  'Ayurvedic Treatment and Program Gallery',
  '28-Day Panchakarma Healing — Program Gallery'
);

// 21. Update Cost section
content = content.replace(
  'Cost of the 28-Day Panchakarma in India',
  'Cost of the 28-Day Panchakarma Healing Program in India'
);
content = content.replace('notes: "Highest demand, long stay, full package"', 'notes: "Maximum duration, full Rasayana week, chronic condition focus"');

// 22. Update Why Choose Us heading
content = content.replace(
  'Why Choose Us for 28 Day Panchakarma',
  'Why Choose Svastha Global for Your 28-Day Healing Program'
);

// 23. Update Inclusions section
content = content.replace(
  'What Is Included in the 28-Day Package?',
  'What Is Included in the 28-Day Panchakarma Healing Package?'
);
content = content.replace(
  /<p className="text-lg font-bold text-\[#335765\] mt-1">28 Days<\/p>/,
  '<p className="text-lg font-bold text-[#335765] mt-1">28 Days</p>'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('All content differentiation completed successfully.');
