const fs = require('fs');
const path = require('path');

const dir = 'src/pages/centers';

// ============================================
// REVIEW REPLACEMENTS (long -> short 30-40 words)
// ============================================
const reviewReplacements = {
  // RamaiahIndicSpecialtyAyurvedaHospital.tsx - review#0 (41 words)
  "Struggling with severe pain from rheumatoid arthritis, the integrative care model here completely changed my life. Within twelve days of personalized Panchakarma cleansing and targeted joint-nourishing oils, my knee swelling vanished. I happily regained complete mobility with immense peace of mind.": 
  "Struggling with severe rheumatoid arthritis pain, the integrative care model here completely changed my life. Within twelve days of personalized Panchakarma and targeted joint-nourishing oils, my knee swelling vanished. I happily regained complete mobility.",

  // AyurKutiraPanchakarmaCentre.tsx - review#0 (41 words)
  "After struggling with severe PCOS and trying to conceive for four years, Dr. Latha designed a targeted Panchakarma detox and custom fertility herbs. I am overjoyed to say we naturally conceived just four months after finishing the treatment! Absolute miracle workers.": 
  "After struggling with severe PCOS for four years, Dr. Latha designed a targeted Panchakarma detox and custom fertility herbs. We naturally conceived just four months after finishing the treatment! Absolute miracle workers.",

  // AyurKutiraPanchakarmaCentre.tsx - review#2 (41 words)
  "After chemotherapy left me with debilitating fatigue, the restorative care and specialized rejuvenation formulations at AyurKutira safely rebuilt my strength. It quickly ended my chronic nausea and completely restored my appetite. The highly skilled doctors treat every patient with profound compassion.": 
  "After chemotherapy left me with debilitating fatigue, the restorative care at AyurKutira safely rebuilt my strength. It quickly ended my chronic nausea and completely restored my appetite. The highly skilled doctors treat every patient with profound compassion.",

  // AyurKutiraPanchakarmaCentre.tsx - review#4 (41 words)
  "Severe seasonal asthma and nasal allergies made cold weather a nightmare. The specialized respiratory detox therapies and customized lung-strengthening oils at AyurKutira cleared my chest congestion entirely. I am happily off my daily inhalers and highly recommend their authentic Panchakarma treatments!": 
  "Severe seasonal asthma and nasal allergies made cold weather a nightmare. The specialized respiratory detox therapies at AyurKutira cleared my chest congestion entirely. I am happily off my daily inhalers and highly recommend their authentic treatments!",

  // TatkshanaAyurvedaHospital.tsx - review#0 (42 words)
  "Struggling with painful hyperacidity and IBS distress, I was exhausted. A thorough diagnostic consultation at Tatkshana led to a custom Panchakarma cleansing program and fresh herbal teas that completely healed my gut. My digestion is excellent, and I finally feel incredibly light!": 
  "Struggling with painful hyperacidity and IBS, a thorough diagnostic consultation at Tatkshana led to custom Panchakarma cleansing and fresh herbal teas that completely healed my gut. My digestion is excellent, and I finally feel incredibly light!",

  // TatkshanaAyurvedaHospital.tsx - review#1 (43 words)
  "A herniated disc and severe sciatica pain made walking a nightmare. The specialized spine restoration therapies, targeted oils, and restorative massages at Tatkshana worked absolute wonders. The pain has completely vanished, my flexibility is fully restored, and the private rooms were extremely clean.": 
  "A herniated disc and severe sciatica made walking a nightmare. The specialized spine restoration therapies and targeted oils at Tatkshana worked absolute wonders. The pain has completely vanished and my flexibility is fully restored. Extremely clean rooms.",

  // TatkshanaAyurvedaHospital.tsx - review#2 (43 words)
  "I suffered from chronic skin allergies and persistent red hives. The doctors put me on an intensive blood purification program and customized external herbal packs. Within a week, the intense itching stopped and the redness cleared, leaving my skin completely normal and healthy.": 
  "Suffering from chronic skin allergies and persistent red hives, the doctors put me on intensive blood purification and customized herbal packs. Within a week, the intense itching stopped and redness cleared, leaving my skin completely healthy.",

  // TatkshanaAyurvedaHospital.tsx - review#3 (42 words)
  "Suffering from recurrent kidney stones was extremely painful. The non-invasive diuretic herbs freshly prepared at the Tatkshana pharmacy safely dissolved and cleared my stones within just ten days. The doctors were exceptionally supportive, highly skilled, and I highly recommend this wonderful hospital!": 
  "Suffering from recurrent kidney stones, the non-invasive diuretic herbs freshly prepared at the Tatkshana pharmacy safely dissolved my stones within just ten days. The doctors were exceptionally supportive and highly skilled. I highly recommend this hospital!",

  // TatkshanaAyurvedaHospital.tsx - review#4 (43 words)
  "Dr. Manasa's hormone balancing program is completely outstanding. Her compassionate guidance, custom dietary adjustments, and herbal remedies successfully regulated my cycles and permanently eliminated my chronic PCOS fatigue. The hospital is highly professional, hygienic, and conveniently located right next to the metro station.": 
  "Dr. Manasa's hormone balancing program is completely outstanding. Her compassionate guidance, custom dietary adjustments, and herbal remedies successfully regulated my cycles and permanently eliminated my PCOS fatigue. The hospital is highly professional and hygienic.",

  // VarapradaAyurvedicCenter.tsx - review#0 (63 words)
  "I suffered from chronic, excruciating migraines and painful nasal congestion for over four years. I tried several modern nasal sprays with no real relief. The detailed pulse diagnosis at Varaprada was eye-opening. Under Dr. Vinay's guidance, a course of customized sinus therapies, specific breathing exercises, and acupuncture completely cleared my blockages. I haven't had a single migraine in months! The relief is absolute.": 
  "Suffering from chronic migraines and nasal congestion for years, Dr. Vinay's detailed pulse diagnosis was eye-opening. Customized sinus therapies and acupuncture completely cleared my blockages. I haven't had a single migraine in months! The relief is absolute.",

  // VarapradaAyurvedicCenter.tsx - review#1 (62 words)
  "A herniated disc in my neck caused shooting nerve pain down my left arm. It was incredibly painful, and my mobility was severely limited. Dr. Vinay combined classical warm oil treatments (Kati Basti) with specialized soft tissue manipulation therapies. The therapeutic approach was so gentle yet deeply effective. My neck movement is fully restored, and the painful nerve compression has completely vanished.": 
  "A herniated disc caused shooting nerve pain down my arm. Dr. Vinay combined classical warm oil treatments with specialized soft tissue manipulation. The approach was gentle yet deeply effective. My neck movement is fully restored and nerve compression has completely vanished.",

  // SDAyurvedaManeHolisticWellnessCentre.tsx - review#0 (41 words)
  "After giving birth, I felt completely drained and suffered from intense lower back pain. The residential postnatal stay at SD Ayurveda Mane was the best decision. Their customized massages and herbal baths fully restored my strength and cured my back pain.": 
  "After giving birth, I felt completely drained with intense lower back pain. The residential postnatal stay at SD Ayurveda Mane was the best decision. Customized massages and herbal baths fully restored my strength and cured my pain.",

  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#0 (71 words)
  "Years of battling a severe lumbar disc bulge and shooting sciatica had made my life miserable, with surgery looking like the only option left. I decided to try Dhanwanthralaya on a friend's advice. Dr. Vanitha Muralikumar's diagnosis was extremely profound. Undergoing a two-week course of Kati Vasti and intensive Abhyangam completely relieved the sciatic nerve compression. I walked out pain-free without any surgery. The level of care here is absolutely unparalleled.": 
  "Years of severe lumbar disc bulge and shooting sciatica made surgery seem inevitable. Dr. Vanitha Muralikumar's diagnosis was extremely profound. Two weeks of Kati Vasti and intensive Abhyangam completely relieved the sciatic nerve compression. I walked out pain-free without surgery.",

  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#1 (64 words)
  "My chronic psoriasis had flared up terribly due to cold weather and stress. The clinical team at Dhanwanthralaya developed a specialized protocol of mild Panchakarma cleansing combined with daily herbal body wraps and custom botanical oils. The results have been nothing short of miraculous. My skin has cleared up completely and feels healthy for the first time in years. Highly recommend their dermatology wing.": 
  "My chronic psoriasis had flared up terribly. Dhanwanthralaya developed a specialized Panchakarma cleansing protocol combined with daily herbal body wraps and custom botanical oils. The results were nothing short of miraculous. My skin cleared up completely and feels healthy. Highly recommend their dermatology wing.",

  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#2 (68 words)
  "After two unsuccessful surgical attempts back home, I was highly skeptical about treating my complex anal fistula. The surgical department here led by Dr. Ashok Kumar used the classical Kshara Sutra thread therapy. The precision, clinical hygiene, and daily monitoring in the 30-bed hospital made me feel extremely safe. The treatment healed my fistula from the root with zero side effects. They are true masters of Shalya Tantra.": 
  "After two unsuccessful surgical attempts, I was skeptical about treating my complex fistula. Dr. Ashok Kumar used classical Kshara Sutra thread therapy with exceptional precision and clinical hygiene. The treatment healed my fistula from the root with zero side effects. True masters of Shalya Tantra.",

  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#3 (66 words)
  "Dealing with severe PCOS and fertility struggles for over four years had taken a heavy toll on us. The doctors at Dhanwanthralaya provided an integrated protocol combining deep uterine detox (Uttara Vasti) and a strictly managed Ayurvedic diet. The gynecologist Dr. Krithika Narayanan was incredibly compassionate. Within six months of returning home and continuing the therapies, I conceived naturally! I cannot thank the entire team enough.": 
  "Dealing with severe PCOS and fertility struggles for four years, Dhanwanthralaya provided an integrated protocol combining deep Uttara Vasti and strictly managed Ayurvedic diet. Dr. Krithika Narayanan was incredibly compassionate. Within six months of continuing therapies, I conceived naturally! Truly grateful.",

  // DhanwanthralayaAyurvedaSpecialityHospital.tsx - review#4 (58 words)
  "High-stress corporate work left me with severe insomnia, intense anxiety, and physical exhaustion. The neuropsychiatry wing at this hospital offered pure peace. A structured series of Shirodhara and medicated head oil poolings, along with therapeutic yoga, completely quieted my overactive nervous system. I am sleeping deeply for eight hours now and feel completely revitalized. Outstanding authentic hospital care!": 
  "High-stress corporate work left me with severe insomnia and intense anxiety. The neuropsychiatry wing offered pure peace. Structured Shirodhara and medicated head oil poolings completely quieted my overactive nervous system. I am sleeping deeply now and feel completely revitalized. Outstanding authentic care!",
};

// ============================================
// BREADCRUMB FIXES
// ============================================
const breadcrumbFixes = {
  'PraanaVaidyaAyurvedicHospital.tsx': ['PraanaVaidya Ayurvedic Hospital', 'PraanaVaidya Ayurvedic Hospital Bengaluru'],
  'RamaiahIndicSpecialtyAyurvedaHospital.tsx': ['Ramaiah Indic Specialty Ayurveda Hospital', 'Ramaiah Indic Specialty Ayurveda Hospital Bengaluru'],
  'AyurKutiraPanchakarmaCentre.tsx': ['AyurKutira \u2013 Panchakarma Center', 'AyurKutira \u2013 Panchakarma Center Bengaluru'],
  'TatkshanaAyurvedaHospital.tsx': ['Tatkshana Ayurveda Hospital', 'Tatkshana Ayurveda Hospital Bengaluru'],
  'VarapradaAyurvedicCenter.tsx': ['Varaprada Ayurvedic Center', 'Varaprada Ayurvedic Center Bengaluru'],
  'SDAyurvedaManeHolisticWellnessCentre.tsx': ['SD Ayurveda Mane \u2013 Holistic Wellness Center', 'SD Ayurveda Mane \u2013 Holistic Wellness Center Bengaluru'],
  'AyushmanAyurveda.tsx': ['Ayushman Ayurveda', 'Ayushman Ayurveda Bengaluru'],
  'TravancoreAyurvedaJayanagar.tsx': ['Travancore Ayurveda \u2013 Jayanagar', 'Travancore Ayurveda \u2013 Jayanagar Bengaluru'],
  'KottakkalAryaVaidyaSala.tsx': ['Kottakkal Arya Vaidya Sala \u2013 Mahalingapuram', 'Kottakkal Arya Vaidya Sala \u2013 Mahalingapuram Bengaluru'],
};

// ============================================
// ALL FILES TO PROCESS
// ============================================
const allFiles = [
  'SriSriAyurvedaHospital.tsx',
  'AdyantAyurvedaJayanagar.tsx',
  'VydehiAyurvedaHospital.tsx',
  'KevaAyurvedaBTMLayout.tsx',
  'JayadevMemorialRashtrotthanaHospitalAyurvedaDepartment.tsx',
  'HealingEarthAyurvedaHospital.tsx',
  'AdivaidyamAyurvedaHospital.tsx',
  'IAIMHealthcareCenter.tsx',
  'HLCAyurvedaAndNatureCureHospital.tsx',
  'PraanaVaidyaAyurvedicHospital.tsx',
  'RamaiahIndicSpecialtyAyurvedaHospital.tsx',
  'AyurKutiraPanchakarmaCentre.tsx',
  'TatkshanaAyurvedaHospital.tsx',
  'VarapradaAyurvedicCenter.tsx',
  'SDAyurvedaManeHolisticWellnessCentre.tsx',
  'AyushmanAyurveda.tsx',
  'TravancoreAyurvedaJayanagar.tsx',
  'KottakkalAryaVaidyaSala.tsx',
  'DhanwanthralayaAyurvedaSpecialityHospital.tsx',
];

let totalChanges = 0;

allFiles.forEach(f => {
  const fp = path.join(dir, f);
  if (!fs.existsSync(fp)) {
    console.log('SKIP (not found): ' + f);
    return;
  }
  
  let c = fs.readFileSync(fp, 'utf8');
  let changes = 0;

  // 1. Review text replacements
  for (const [long, short] of Object.entries(reviewReplacements)) {
    if (c.includes(long)) {
      c = c.replace(long, short);
      changes++;
    }
  }

  // 2. Breadcrumb fix
  if (breadcrumbFixes[f]) {
    const [oldBread, newBread] = breadcrumbFixes[f];
    // Match inside the breadcrumb li
    const breadPattern = new RegExp('(font-black shrink-0">\\s*\\n\\s*)' + oldBread.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\s*\\n)');
    if (breadPattern.test(c)) {
      c = c.replace(breadPattern, '$1' + newBread + '$2');
      changes++;
    } else {
      console.log('WARN: breadcrumb pattern not found in ' + f + ' for: ' + oldBread);
    }
  }

  // 3. Review text size: change text-xl md:text-2xl to text-base md:text-xl in review paragraph
  // Target only the review text paragraph with brown color
  c = c.replace(
    /(<p className="text-xl md:text-2xl leading-relaxed" style=\{\{ color: "#7F543D" \}\}>)/g,
    '<p className="text-base md:text-xl leading-relaxed" style={{ color: "#7F543D" }}>'
  );
  
  if (c !== fs.readFileSync(fp, 'utf8')) {
    fs.writeFileSync(fp, c);
    totalChanges++;
    console.log('FIXED: ' + f + ' (' + changes + ' review replacements)');
  } else {
    console.log('NO CHANGES: ' + f);
  }
});

console.log('\nTotal files modified: ' + totalChanges);
