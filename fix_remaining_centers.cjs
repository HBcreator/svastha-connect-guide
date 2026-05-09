const fs = require('fs');
const path = require('path');

// Master centers from extractedCenters.cjs (simplified to the format needed)
const masterCenters = [
  { name: "SOUKYA - Dr. Mathai's International Holistic Health Centre", city: "Bangalore", description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm.", rating: 4.9, reviews: 500, image: "/Center Images/SOUKYA/top center Thumb.jpg", link: "/centers/bangalore/soukya" },
  { name: "AyurvedaGram Heritage Wellness Centre", city: "Bangalore", description: "A globally recognized destination for traditional Ayurvedic healing rooted in classical principles. Set within a serene heritage village.", rating: 4.7, reviews: 600, image: "/Center Images/AyurvedaGram/Thumb.jpg", link: "/centers/bangalore/ayurvedagram" },
  { name: "Shreyas Yoga Retreat", city: "Bangalore", description: "Serene blend of traditional yoga philosophy and luxury wellness. Classical Hatha Yoga, meditation, Ayurveda therapies, and mindful living.", rating: 4.8, reviews: 500, image: "/Center Images/Shreyas Yoga Retreat/thumb.jpg", link: "/centers/bangalore/shreyas-yoga-retreat" },
  { name: "Viveda Wellness Village", city: "Nashik", description: "Integrated wellness destination in the Sahyadri ranges. Ayurveda, naturopathy, yoga, meditation, and therapeutic spa treatments.", rating: 4.8, reviews: 0, image: "/Center Images/Viveda Wellness Village/Thumb.jpg", link: "/centers/maharashtra/viveda-wellness-village" },
  { name: "Naad Wellness", city: "Sonepat", description: "Luxury integrative wellness retreat combining Ayurveda, yoga, naturopathy, and mindfulness for sustainable healing.", rating: 4.8, reviews: 200, image: "/Center Images/Naad Wellness/Thumb.jpg", link: "/centers/sonepat/naad-wellness" },
  { name: "Fazlani Nature's Nest Wellness Centre", city: "Mumbai", description: "Serene wellness retreat blending time-honored healing with modern therapies for detoxification and sustainable healthy living.", rating: 4.7, reviews: 0, image: "/Center Images/Fazlani Natures Nest/Thumb.jpg", link: "/centers/maharashtra/fazlani-natures-nest" },
  { name: "Atmantan Wellness Resort", city: "Pune", description: "Set amidst the Sahyadri hills overlooking Mulshi Lake. Blends Ayurveda with modern wellness for detox, fitness, and weight management.", rating: 4.7, reviews: 0, image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg", link: "/centers/pune/atmantan-wellness-resort" },
  { name: "Toyam By Orchid Hotels", city: "Pune", description: "Serene wellness retreat near Pune with personalized Ayurvedic therapies, Panchakarma detox, yoga, and meditation.", rating: 4.7, reviews: 0, image: "/Center Images/Toyam By Orchid Hotels/Thumb.jpg", link: "/centers/pune/toyam-by-orchid-hotels" },
  { name: "Dharana At Shillim", city: "Pune", description: "Tranquil retreat in the Sahyadri mountains blending traditional healing wisdom with modern wellness practices.", rating: 4.8, reviews: 3900, image: "/Center Images/Dharana At Shillim/Thumb.jpg", link: "/centers/pune/dharana-at-shillim" },
  { name: "The Imperial Spa and Wellness", city: "Delhi", description: "Luxury wellness destination blending timeless healing traditions with modern therapies for deep rejuvenation of body and mind.", rating: 4.8, reviews: 0, image: "/Center Images/The Imperial Spa & Salon/Thumb.jpg", link: "/centers/delhi/the-imperial-spa-and-wellness" },
  { name: "ITC Grand Bharat", city: "Gurugram", description: "Luxurious all-suite retreat in the Aravalli hills. Royal architecture with personalized Ayurvedic spa and lifestyle wellness.", rating: 4.8, reviews: 17000, image: "/Center Images/ITC Grand Bharat/Thumb.jpg", link: "/centers/gurugram/itc-grand-bharat" },
  { name: "Niraamaya Retreats Surya Samudra", city: "Kerala", description: "Luxurious wellness destination on Kerala's pristine shores. Authentic therapies and tranquil ocean views for deep rejuvenation.", rating: 4.7, reviews: 600, image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg", link: "/centers/kerala/niraamaya-retreats-surya-samudra" },
  { name: "Modi Yoga Retreat", city: "Rishikesh", description: "Mindful wellness sanctuary for yoga practice, meditation, and holistic rejuvenation amid scenic mountain views and flowing waters.", rating: 4.7, reviews: 600, image: "/Center Images/Modi Yoga Retreat/Thumb.jpg", link: "/centers/rishikesh/modi-yoga-retreat" },
  { name: "Amanbagh Heritage Wellness Retreat", city: "Alwar", description: "Sanctuary of timeless elegance surrounded by Rajasthan's Aravalli hills. Holistic wellness, yoga, and Ayurvedic-inspired treatments.", rating: 4.8, reviews: 500, image: "/Center Images/Amanbagh/thumb.jpg", link: "/centers/rajasthan/amanbagh-heritage-wellness-retreat" },
  { name: "HimVeda Heritage Wellness Centre", city: "Dharamshala", description: "Peaceful Ayurvedic wellness centre in the Himalayan foothills. Authentic Panchakarma and chronic disease management.", rating: 4.8, reviews: 500, image: "/Center Images/HimVeda/Thumb.jpeg", link: "/centers/dharamshala/himveda" },
  { name: "Sandhya Hot Spring Health Care", city: "Manikaran", description: "Healing power of natural hot springs. Therapeutic mineral-rich waters for detoxification, stress relief, and body rejuvenation.", rating: 4.6, reviews: 500, image: "/Center Images/Sandhya Hot Spring Health Care/Thumb.jpg", link: "/centers/himachal/sandhya-hot-spring-health-care" },
  { name: "Ayuskama Ayurveda", city: "Dharamshala", description: "Authentic Ayurvedic wellness center integrating traditional Ayurveda with modern lifestyle. Personalized Panchakarma and healing therapies.", rating: 4.8, reviews: 500, image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg", link: "/centers/dharamshala/ayuskama-ayurveda" },
  { name: "Somatheeram Ayurvedic Health Resort", city: "Kerala", description: "World's first Ayurveda retreat offering authentic treatments with German precision and serene beachside location.", rating: 4.9, reviews: 320, image: "/Center Images/somatheeram/Somatheeram 01.jpg", link: "/centers/kerala/somatheeram" },
  { name: "AyurSoma Ayurveda Royal Retreat", city: "Kerala", description: "Premium royal retreat in Kovalam. Traditional wisdom with royal luxury, authentic Panchakarma and personalized wellness programs.", rating: 4.8, reviews: 500, image: "/Center Images/AyurSoma Ayurveda/Photo gallery/img 1.jpg", link: "/centers/kerala/ayursoma" },
  { name: "Kalari Kovilakom - The Palace For Ayurveda", city: "Palakkad", description: "Globally acclaimed palace retreat following classical gurukula system. Extremely strict, traditional Ayurvedic treatments.", rating: 4.8, reviews: 500, image: "/Center Images/Kalari Kovilakom/Thumb.jpg", link: "/centers/kerala/kalari-kovilakom" },
  { name: "Carnoustie Ayurveda & Wellness Resort", city: "Mararikulam", description: "Award-winning beachfront retreat. Deeply immersive Panchakarma, weight management, and rejuvenation therapies.", rating: 4.7, reviews: 500, image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg", link: "/centers/kerala/carnoustie-ayurveda-wellness-resort" },
  { name: "The Nattika Beach Resort", city: "Thrissur", description: "Award-winning wellness retreat along Kerala's pristine shores. Personalized Ayurvedic therapies and rejuvenation programs.", rating: 4.8, reviews: 500, image: "/Center Images/The Nattika Beach Resort/Thumb.jpg", link: "/centers/kerala/the-nattika-beach-resort" },
  { name: "Sitaram Beach Retreat", city: "Kerala", description: "True essence of Ayurveda along Kerala's serene coastline. Classical wisdom with modern comfort for chronic condition management.", rating: 4.6, reviews: 500, image: "/Center Images/Sitaram Beach Retreat/Thumb.jpg", link: "/centers/kerala/sitaram-beach-retreat" },
  { name: "Kairali – The Ayurvedic Healing Village", city: "Palakkad", description: "NABH-accredited Ayurvedic healing village with authentic Panchakarma, personalized treatment plans, and sattvic lifestyle.", rating: 4.9, reviews: 280, image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg", link: "/centers/kerala/kairali-ayurvedic-healing-village" },
  { name: "Veda5 – Ayurveda, Yoga & Wellness Retreat", city: "Rishikesh", description: "One of India's most premium Ayurveda & Yoga retreats combining Himalayan views, world-class therapies, and holistic rejuvenation.", rating: 4.9, reviews: 420, image: "/Center Images/veda5/veda5-1.jpg", link: "/centers/veda5" },
  { name: "Yan Cure Yoga Retreat & Ayurveda", city: "Rishikesh", description: "Perfect blend of yoga, Ayurveda and holistic healing. Traditional therapies and yogic practices for body-mind-soul balance.", rating: 4.8, reviews: 500, image: "/Center Images/Yan Cure Yoga Retreat/Thumb.webp", link: "/centers/rishikesh/yan-cure" },
  { name: "Soul Vacation Resort & Wellness Centre", city: "Goa", description: "Boutique wellness resort near South Goa beaches. Traditional Ayurvedic principles with modern wellness for deep rejuvenation.", rating: 4.8, reviews: 500, image: "/Center Images/Soul Vacation Resort and Spa/thumb.jpg", link: "/centers/goa/soul-vacation" },
  { name: "SWAN Yoga Retreat & Ayurveda", city: "Goa", description: "Authentic yogic living in an ashram-style setting in North Goa. Classical Yoga and Ayurveda for healing and mental clarity.", rating: 4.6, reviews: 500, image: "/Center Images/SWAN Yoga Retreat/Thumb.jpg", link: "/centers/goa/swan-yoga-retreat" },
  { name: "Mercure Goa Devaaya Resort", city: "Goa", description: "Sanctuary of healing on Divar Island where ancient Ayurvedic wisdom meets tranquil island living. Personalized therapies for balance.", rating: 4.7, reviews: 0, image: "/Center Images/Mercure Goa Devaaya Resort/Thumb.jpg", link: "/centers/goa/mercure-goa-devaaya-resort" },
  { name: "Ashiyana Yoga Retreat", city: "Goa", description: "Globally renowned yoga destination at Mandrem Beach. Traditional yoga, meditation, and healing therapies for transformation.", rating: 4.7, reviews: 600, image: "/Center Images/Ashiyana Yoga Retreat/Thumb.jpg", link: "/centers/goa/ashiyana-yoga-retreat" },
  { name: "Nalanda Retreat Goa", city: "Goa", description: "Soulful coastal wellness at Mandrem Beach. Guided yoga, meditation, and Ayurvedic therapies for inner harmony.", rating: 4.5, reviews: 0, image: "/Center Images/Nalanda Retreat Goa/Thumb.jpg", link: "/centers/goa/nalanda-retreat-goa" },
  { name: "Ananda In The Himalayas", city: "Uttarakhand", description: "World-renowned luxury holistic retreat in the Himalayan foothills. Personalized Ayurveda, Yoga, and Vedanta programs.", rating: 4.8, reviews: 900, image: "/Center Images/Ananda in the Himalayas/Thumb.jpg", link: "/centers/uttarakhand/ananda-in-the-himalayas" },
  { name: "Namaste Dwaar – Countryside Retreat", city: "Delhi", description: "Peaceful farmhouse sanctuary near NCR with authentic Ayurvedic therapies, farm-fresh sattvic food, and compassionate care.", rating: 4.8, reviews: 180, image: "/Center Images/Namastedwaar/Namastedwaar main.jpg", link: "/centers/delhi/namastedwaar" },
  { name: "Ayurmana", city: "Kerala", description: "Ayurvedic wellness retreat offering authentic therapies and holistic healing in a serene environment.", rating: 4.8, reviews: 500, image: "/Center Images/Ayurmana center/top center thumb.jpg", link: "/centers/kerala/ayurmana" },
  { name: "Chamundi Hill Palace Ayurvedic Resort", city: "Mysore", description: "Heritage-inspired Ayurvedic resort offering authentic therapies and a serene healing experience.", rating: 4.8, reviews: 500, image: "/Center Images/Chamundi Hill Palace/CTA.jpg", link: "/centers/mysore/chamundi-hill-palace" },
  { name: "Kairali Heritage Resort", city: "Kerala", description: "Tranquil 11-acre riverside haven in Kannur. Authentic Ayurvedic & yoga therapies in river-facing cottages.", rating: 4.8, reviews: 220, image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png", link: "/centers/kerala/kairali-heritage" },
  { name: "Agni Ayurvedic Village Resort", city: "Kerala", description: "Tranquil wellness hideaway blending ancient Ayurvedic wisdom with nature. Time-honored therapies for rejuvenation.", rating: 4.7, reviews: 190, image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg", link: "/centers/kerala/agni-ayurvedic-village" },
  { name: "Dheemahi Kumarakom – Premium Lakeside Retreat", city: "Kumarakom", description: "NABH-accredited sanctuary with 90+ years of family heritage. Deep-rooted Ayurvedic wisdom with modern luxury.", rating: 4.9, reviews: 150, image: "/Center Images/Dheemahi Ayurvedic Centre/center dp.jpg", link: "/centers/kerala/dheemahi-kumarakom" },
  { name: "Kumarakom Lake Resort", city: "Kumarakom", description: "Award-winning heritage retreat on Vembanad Lake. Ayurvedic wellness, private villas, and peaceful nature-led rejuvenation.", rating: 4.8, reviews: 500, image: "/Center Images/kumarakom lake resort/Thumb.jpg", link: "/centers/kerala/kumarakom-lake-resort" },
  { name: "Nagarjuna Ayurveda Centre", city: "Kerala", description: "Heritage-rich Ayurvedic institution with classical treatment approach and strict diagnostic protocols for effective therapy.", rating: 4.8, reviews: 200, image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg", link: "/centers/kerala/nagarjuna-ayurveda-centre" },
  { name: "Sanjeevanam Ayurveda Hospital", city: "Kochi", description: "Pioneering integrative hospital blending ancient Ayurveda with modern medicine. Evidence-based care for deep healing.", rating: 4.8, reviews: 1700, image: "/Center Images/Sanjeevanam/Top center thumbnail.jpg", link: "/centers/kerala/sanjeevanam-ayurveda-hospital" },
  { name: "Back to Roots Ayurveda Retreat", city: "Idukki", description: "NABH-accredited lakeside sanctuary guided by 4th generation Ayurvedic physicians. Classical Panchakarma in pristine nature.", rating: 4.9, reviews: 100, image: "/Center Images/back to roots/Main center image.jpg", link: "/centers/kerala/back-to-roots" },
];

// Unique sets for the 3 remaining files (none of these overlap with each other or with other pages)
const sets = {
  'StressManagementAyurvedaRetreat.tsx': [
    masterCenters[4],  // Naad Wellness
    masterCenters[8],  // Dharana At Shillim
    masterCenters[31], // Ananda In The Himalayas
    masterCenters[14], // HimVeda
    masterCenters[27], // SWAN Yoga
    masterCenters[18], // AyurSoma
    masterCenters[38], // Kumarakom Lake
    masterCenters[22], // Sitaram Beach
    masterCenters[29], // Ashiyana Yoga
    masterCenters[2],  // Shreyas Yoga
    masterCenters[40], // Sanjeevanam
    masterCenters[15], // Sandhya Hot Spring
  ],
  'ImmunityBoostingDetox.tsx': [
    masterCenters[17], // Somatheeram
    masterCenters[23], // Kairali Healing Village
    masterCenters[37], // Dheemahi
    masterCenters[20], // Carnoustie
    masterCenters[13], // Amanbagh
    masterCenters[25], // Yan Cure
    masterCenters[7],  // Toyam
    masterCenters[39], // Nagarjuna
    masterCenters[34], // Chamundi Hill
    masterCenters[32], // Namaste Dwaar
    masterCenters[3],  // Viveda
    masterCenters[36], // Agni Ayurvedic
  ],
  'BurnoutRecoveryProgram.tsx': [
    masterCenters[12], // Modi Yoga
    masterCenters[5],  // Fazlani
    masterCenters[24], // Veda5
    masterCenters[10], // ITC Grand Bharat
    masterCenters[19], // Kalari Kovilakom
    masterCenters[21], // Nattika
    masterCenters[33], // Ayurmana
    masterCenters[16], // Ayuskama
    masterCenters[30], // Nalanda Retreat
    masterCenters[41], // Back to Roots
    masterCenters[26], // Soul Vacation
    masterCenters[35], // Kairali Heritage
  ],
};

function generateCenterArrayCode(centers) {
  let code = 'const topAyurvedicCenters = [\n';
  for (const c of centers) {
    code += '  {\n';
    code += `    name: ${JSON.stringify(c.name)},\n`;
    code += `    city: ${JSON.stringify(c.city)},\n`;
    code += `    description: ${JSON.stringify(c.description)},\n`;
    code += `    rating: ${c.rating},\n`;
    code += `    reviews: ${c.reviews},\n`;
    code += `    image: ${JSON.stringify(c.image)},\n`;
    code += `    link: ${JSON.stringify(c.link)},\n`;
    code += '  },\n';
  }
  code += '];';
  return code;
}

const programsDir = path.join(__dirname, 'src/pages/programs');

for (const [fileName, centerSet] of Object.entries(sets)) {
  const filePath = path.join(programsDir, fileName);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find and replace the old centers array
  const oldPatterns = [
    /const centers = \[[\s\S]*?\] as const;/,
    /const centers = \[[\s\S]*?\];/,
  ];
  
  let replaced = false;
  for (const pattern of oldPatterns) {
    if (pattern.test(content)) {
      content = content.replace(pattern, generateCenterArrayCode(centerSet));
      replaced = true;
      break;
    }
  }
  
  if (!replaced) {
    console.log(`❌ ${fileName}: Could not find old centers array`);
    continue;
  }
  
  // Fix slider logic: centers.length -> topAyurvedicCenters.length
  content = content.replace(/centers\.length/g, 'topAyurvedicCenters.length');
  
  // Fix slider slicing: sliding window -> page-based
  // Old: centers.length - topCentersVisible + 1  
  // New: Math.ceil(topAyurvedicCenters.length / topCentersVisible)
  content = content.replace(
    /topAyurvedicCenters\.length - topCentersVisible \+ 1/g,
    'Math.ceil(topAyurvedicCenters.length / topCentersVisible)'
  );
  
  // Fix slicing: .slice(topCentersSlide, topCentersSlide + topCentersVisible)
  // to: .slice(topCentersSlide * topCentersVisible, topCentersSlide * topCentersVisible + topCentersVisible)
  content = content.replace(
    /\.slice\(topCentersSlide, topCentersSlide \+ topCentersVisible\)/g,
    '.slice(topCentersSlide * topCentersVisible, topCentersSlide * topCentersVisible + topCentersVisible)'
  );
  
  // Fix render: array destructuring -> object property access
  // Pattern: visibleTopCenters.map(([name, city, description, rating, reviewsCount, image, link])
  content = content.replace(
    /visibleTopCenters\.map\(\(\[name, city, description, rating, reviewsCount, image, link\]\)/g,
    'visibleTopCenters.map((center)'
  );
  
  // Replace all cast expressions: name as string -> center.name, etc.
  content = content.replace(/\{name as string\}/g, '{center.name}');
  content = content.replace(/\{city as string\}/g, '{center.city}');
  content = content.replace(/\{description as string\}/g, '{center.description}');
  content = content.replace(/\{rating as number\}/g, '{center.rating}');
  content = content.replace(/\{reviewsCount as number\}/g, '{center.reviews}');
  content = content.replace(/src=\{image as string\}/g, 'src={center.image}');
  content = content.replace(/alt=\{name as string\}/g, 'alt={center.name}');
  content = content.replace(/title=\{city as string\}/g, 'title={center.city}');
  
  // Fix key={name as string} -> key={center.name}
  content = content.replace(/key=\{name as string\}/g, 'key={center.name}');
  
  // Fix navigate(link as string) -> navigate(center.link)
  content = content.replace(/navigate\(link as string\)/g, 'navigate(center.link)');
  
  // Fix expandedCenterName === name -> expandedCenterName === center.name
  content = content.replace(/expandedCenterName === name/g, 'expandedCenterName === center.name');
  
  // Fix toggleCenterDescription(name as string) -> toggleCenterDescription(center.name)
  content = content.replace(/toggleCenterDescription\(name as string\)/g, 'toggleCenterDescription(center.name)');
  
  // Fix expandedCenter === name pattern (used in some files)
  content = content.replace(/expandedCenter === name/g, 'expandedCenter === center.name');
  content = content.replace(/setExpandedCenter\(name as string\)/g, 'setExpandedCenter(center.name)');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ ${fileName}: Updated to 12 unique centers with object format`);
}

console.log('\nDone! All 3 files updated.');
