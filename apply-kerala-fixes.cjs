const fs = require('fs');
const files = [
  'src/pages/centers/ParathuvayalilAyurvedaHospital.tsx',
  'src/pages/centers/KottakkalAryaVaidyaSala.tsx',
  'src/pages/centers/RasayanaAyurvedaCentre.tsx',
  'src/pages/centers/YantraAyurvedicResort.tsx',
  'src/pages/centers/ChakraAyurvedicResort.tsx',
  'src/pages/centers/DeepanjaliAyurRetreat.tsx',
  'src/pages/centers/MadukkakuzhyAyurveda.tsx'
];

const replacements = {
  // Reviews 
  "Severe lower back stiffness and sciatica had limited my daily movements for years. The medical team formulated a targeted physical therapy regimen combining specialized oil retention therapy (Kati Vasti) and localized synchronized massages. Within ten days, the agony in my spine had subsided significantly, and I could move with full comfort. Healing in this ocean-facing resort made the entire treatment experience incredibly pleasant and peaceful.": 
  "Severe lower back stiffness and sciatica limited my movements for years. The targeted Kati Vasti and synchronized massages here were incredible. Within ten days, my spine agony subsided significantly, allowing me to move with full comfort.",

  "Struggling with sluggish digestion and metabolic weight gain led me to seek traditional Ayurvedic care. The specialized dry-powder massages (Udwarthanam) and the customized diet program developed by the resort's physicians worked wonders. The meals were fresh, tasty, and prepared strictly to balance my dosha profile. I lost weight naturally, my digestion has improved immensely, and I have so much more energy now.": 
  "Struggling with sluggish digestion and metabolic weight gain, I sought traditional care. The specialized dry-powder massages and customized dosha-balancing diet worked wonders. I naturally lost weight, my digestion improved immensely, and I have much more energy.",

  "Persistent skin eczema flare-ups had left my skin dry, irritated, and painful. The clinical team prescribed a comprehensive blood-purifying detox schedule combined with natural botanical body wraps. The results were truly spectacular. My skin has cleared up completely, the itching has vanished, and its natural texture has been fully restored. Healing on the golden beach was a deeply soothing experience for my soul.": 
  "Persistent eczema flare-ups left my skin dry and painful. The clinical team's comprehensive blood-purifying detox and botanical body wraps were truly spectacular. My skin cleared up completely, the itching vanished, and its natural texture was fully restored.",

  "After months of feeling entirely depleted of energy and plagued by intense chronic fatigue, undergoing Panchakarma at Chakra was exactly what I needed. The clinical assessments with the resident doctors were highly thorough, and the therapists were incredibly precise and caring. The daily Abhyangam and specialized herbal treatments, combined with the relaxing sounds of Kovalam Beach, completely reset my nervous system. I returned home with a profound sense of physical lightness and renewed mental clarity.": 
  "Feeling entirely energy-depleted and plagued by chronic fatigue, Panchakarma here was exactly what I needed. The highly thorough clinical assessments, daily Abhyangam, and specialized herbal treatments completely reset my nervous system, providing profound physical lightness.",
  
  "Severe joint stiffness and chronic neck pain had limited my daily movements for years. The medical team formulated a targeted physical therapy regimen combining specialized oil massages and localized therapies (Kizhi). Within ten days, the swelling and pain in my spine had subsided significantly, and I could move with full comfort. Healing in this peaceful sea-facing resort made the entire treatment experience exceptionally smooth and pleasant.": 
  "Severe joint stiffness and chronic neck pain limited my movements for years. The targeted physical therapy combining specialized oil massages and Kizhi worked wonders. Within ten days, my spinal swelling subsided significantly, allowing me to move comfortably.",

  "I had been suffering from chronic insomnia and severe anxiety for nearly a year. The anti-stress program here was a absolute blessing. Through specialized warm oil retention therapies (Shirodhara), daily breathing techniques, and guided yoga sessions overlooking Kovalam Beach, my sleep patterns were fully restored. The peaceful environment, cozy cottages, and the nutritious Ayurvedic vegetarian food made my recovery exceptionally smooth.": 
  "Suffering from chronic insomnia and severe anxiety, the anti-stress program was an absolute blessing. Through specialized Shirodhara, daily breathing techniques, and guided yoga sessions overlooking Kovalam Beach, my sleep patterns were fully and wonderfully restored.",

  "As someone looking to promote healthy aging and build natural stamina, the Body Immunization and Rejuvenation program here exceeded my expectations. The combination of medicated synchronized massages, restorative herbal steam therapies, and personal doctor checks worked wonders. My follow-up checks showed a remarkable increase in vitality, and I feel significantly stronger. Truly a world-class sanctuary for traditional care.": 
  "Looking to build natural stamina, the Rejuvenation program here exceeded my expectations. The combination of medicated synchronized massages, restorative herbal steam therapies, and personal doctor checks worked wonders. I feel significantly stronger and remarkably revitalized.",

  "Struggling with sluggish digestion and metabolic weight gain led me to seek traditional Ayurvedic care at Kovalam. The specialized dry-herb powder massages (Udwarthanam) and the customized diet program developed by the resort's physicians worked wonders. The meals were fresh, tasty, and prepared strictly to balance my dosha profile. I lost weight naturally, my digestion has improved immensely, and I have so much more energy now.": 
  "Struggling with sluggish digestion and weight gain, I sought traditional care at Kovalam. The specialized dry-herb powder massages and customized dosha-balancing diet worked wonders. I successfully lost weight, my digestion improved immensely, and I feel energized.",

  "The low-noise village environment of Chazhur was perfect for my three-week Panchakarma program. The clinical expertise of the doctors and the gentle touch of the therapists completely restored my physical and mental vitality. The daily synchronized massages and traditional gut-cleansing routines worked wonders. I returned home feeling completely toxin-free, light, and mentally refreshed.": 
  "The peaceful village environment of Chazhur was perfect for my Panchakarma program. The clinical expertise and daily synchronized massages completely restored my vitality. I happily returned home feeling completely toxin-free, remarkably light, and mentally refreshed.",

  "Agonizing lower back stiffness and sciatica pain had limited my daily movements. The medical panel designed an intensive therapy plan combining targeted warm herbal oil retention (Kati Vasti) and synchronized leaf bag massages (Kizhi). Within two weeks, my spine swelling disappeared completely, and I regained full mobility. The level of care and hygiene in this traditional sanctuary is outstanding.": 
  "Agonizing sciatica pain and lower back stiffness severely limited my movements. The intensive therapy plan combining targeted Kati Vasti and Kizhi massages was incredible. Within two weeks, my spinal swelling disappeared completely, wonderfully restoring my full mobility.",

  "Suffering from chronic insomnia and burnout had left me physically depleted. The anti-stress program at Deepanjali, utilizing continuous head oil pouring (Shirodhara) and guided meditation in their scenic hall, completely restored my sleep patterns. Living among their organic herbal gardens and lotus ponds was deeply therapeutic. An absolute oasis of peace!": 
  "Suffering from chronic insomnia and burnout, the anti-stress program at Deepanjali completely restored my sleep patterns. The soothing Shirodhara treatments and guided meditation among their beautiful organic herbal gardens were deeply therapeutic. An absolute oasis of peace!",

  "Looking to address persistent skin dryness and sluggish metabolism, I underwent a customized weight and skin care program. The dry-powder massages (Udwarthanam) combined with fresh botanical body wraps completely cleared my skin and boosted my metabolism. The freshly prepared Ayurvedic vegetarian food customized to my doshas made a massive difference.": 
  "Addressing persistent skin dryness and sluggish metabolism, I underwent a customized weight and skincare program. The Udwarthanam massages combined with fresh botanical body wraps completely cleared my skin and boosted my metabolism. A truly excellent wellness experience.",

  "At 74, severe joint stiffness and low physical stamina made my daily life difficult. The geriatric care protocols, including Pizhichil and custom rejuvenation herbs, restored my physical strength and joint flexibility. The medical panel's dedication and the quiet village atmosphere accelerated my recovery. I highly recommend their healthy aging programs.": 
  "At 74, severe joint stiffness made daily life difficult. The geriatric care protocols, including Pizhichil and custom rejuvenation herbs, beautifully restored my physical strength and joint flexibility. The medical panel's amazing dedication significantly accelerated my recovery.",

  "Years of battling stiff knees and chronic joint inflammation had left me dependent on heavy painkillers. A friend suggested I try the traditional joint program at Madukkakuzhy, and it was the best decision I ever made. Over three weeks, the doctors monitored me daily as they applied synchronized hot herbal bag massages (Elakizhi) and custom oils. The pain has reduced significantly, and my mobility is back to normal. The place feels like a genuine home.": 
  "Battling chronic joint inflammation left me dependent on painkillers. The traditional joint program at Madukkakuzhy was my best decision. Thanks to three weeks of synchronized Elakizhi massages and custom oils, my pain significantly reduced and mobility beautifully normalized.",

  "My experience with the 21-day Panchakarma detox was nothing short of life-changing. Severe fibromyalgia had left me completely exhausted. Under the gentle guidance of the physicians here, my body underwent a methodical purification. The custom organic meals prepared with fresh garden herbs combined with soothing, traditional massages worked miracles. I returned home to Switzerland with a level of vitality and peace I haven't felt in a decade.": 
  "My 21-day Panchakarma detox was absolutely life-changing. Severe fibromyalgia had left me completely exhausted, but the methodical purification, custom organic meals, and soothing traditional massages worked miracles. I returned home with incredible vitality and profound peace.",

  "As a regular visitor from Germany, I can confidently say this sanctuary is unmatched. I struggled with severe digestive issues and irregular metabolism for years. The medical team customized a rigorous gut-cleansing protocol and daily dosha-balancing organic diet. Not only did my gastrointestinal health completely normalize, but I also lost several kilos of metabolic weight. The integrity and deep Ayurvedic knowledge of the family is absolute.": 
  "Struggling with severe digestive issues for years, the medical team customized a rigorous gut-cleansing protocol and daily dosha-balancing organic diet. My gastrointestinal health completely normalized, and I safely lost several kilos. Their deep Ayurvedic knowledge is absolutely unmatched.",

  "Following my second pregnancy, I felt physically depleted and was suffering from persistent lower back strain. I booked a customized rejuvenation and recovery program at Madukkakuzhy. The warmth and personal attention of the doctors and female therapists made me feel secure. The herbal baths, traditional muscle-nourishing therapies, and targeted massages completely restored my physical core. I am incredibly grateful for this authentic healing.": 
  "Following my second pregnancy, I suffered from persistent lower back strain. A customized recovery program at Madukkakuzhy completely restored my physical core. The incredibly warm doctors, soothing herbal baths, and targeted massages provided authentic, deeply effective healing.",

  "High-stress corporate work had led to severe insomnia and physical burnout. The tranquil environment of this green Kottayam homestay was exactly what I needed. The daily head oil-pouring therapies (Shirodhara), specialized breathing exercises, and physician-guided yoga sessions resolved my sleep troubles within the first week. The hospitality is warm, genuine, and deeply grounding.": 
  "High-stress corporate work led to severe insomnia and burnout. The tranquil environment, daily Shirodhara therapies, specialized breathing exercises, and guided yoga sessions resolved my sleep troubles within the very first week. Their warm hospitality is deeply grounding."
};

let filesModified = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // 1. Turn off auto-rotate in Patient Reviews
    const autoPlayMatch = content.match(/isReviewAutoPlaying,\s*setIsReviewAutoPlaying\]\s*=\s*useState\((true)\)/);
    if (autoPlayMatch) {
      content = content.replace(autoPlayMatch[0], autoPlayMatch[0].replace('true', 'false'));
      modified = true;
    }

    // 2. Change text alignment for intro section from center/justify to text-left
    const textJustifyRegex = /text-justify md:text-left/g;
    if (textJustifyRegex.test(content)) {
      content = content.replace(textJustifyRegex, 'text-left');
      modified = true;
    }

    // Replace also general text-center if it applies to paragraphs
    // But safely targeting just the `text-justify md:text-left` is best since that's what was used everywhere.

    // 3. Shorten the reviews
    for (const [long, short] of Object.entries(replacements)) {
      if (content.includes(long)) {
         content = content.replace(long, short);
         modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(file, content);
      console.log('Successfully fixed: ' + file);
      filesModified++;
    } else {
      console.log('Already configured correctly: ' + file);
    }
  } else {
    console.log('File not found: ' + file);
  }
});

console.log('Total Kerala files fixed: ' + filesModified);
