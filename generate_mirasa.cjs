const fs = require('fs');

let content = fs.readFileSync('src/pages/centers/KuriasEarthAyurvedaHospital.tsx', 'utf8');

// 1. Rename Component Name First
content = content.replace(/KuriasEarthAyurvedaHospital/g, "MirasaAyurvedaHospital");

// 2. Exact strings from Kurias to replace
content = content.replace(/Kurias Earth Ayurveda Hospital/g, "Mirasa Ayurveda");
content = content.replace(/Kurias Earth/g, "Mirasa Ayurveda");

// 3. Location and Rating
content = content.replace(/Green Park, New Delhi, India/g, "East of Kailash, New Delhi, India");
content = content.replace(/4\.5 Rating/g, "4.6 Rating");
content = content.replace(/>4\.5</g, ">4.6<");
content = content.replace(/700\+ Reviews/g, "800+ Reviews");

// 4. Hero Description
content = content.replace(
  /A multi-specialty Ayurvedic hospital in Green Park, New Delhi, part of the Earth Group of Hospitals led by Dr\. Anish M\. Kurias — a 5th-generation Ayurvedic Toxicologist from a 155-year family legacy rooted in Kerala\. Known for the unique 'Monomedi' approach using single-ingredient medicines for targeted treatments\./g,
  "A modern, premium Ayurvedic Panchakarma clinic in East of Kailash, New Delhi — a proud sister concern of the celebrated Dr. Basu Group. Founded by Dr. Mandeep Singh Basu, Mirasa Ayurveda combines classical Panchakarma wisdom with advanced infrastructure to offer empathetic care and customized wellness programs."
);

// 5. Authentic Excellence Description 
content = content.replace(
  /Welcome to <strong className=\"font-bold text-\[#2C4E5A\]\">Mirasa Ayurveda<\/strong>, part of the Earth Group of Hospitals\. Led by Dr\. Anish M\. Kurias, a world-renowned pulse reader who has treated patients across 52 countries, we specialize in addressing chronic ailments through our 155-year-old family legacy of traditional Kerala Ayurveda and specialized toxicology expertise\./g,
  "Welcome to <strong className=\"font-bold text-[#2C4E5A]\">Mirasa Ayurveda</strong>, a premier wellness destination and proud sister concern of the Dr. Basu Group. Building upon a 44-year legacy of healing, our state-of-the-art clinic integrates classical Panchakarma therapies with modern holistic practices under the guidance of expert BAMS doctors."
);

content = content.replace(
  /With our central facility located in Green Park, New Delhi, we specialize in the comprehensive management of paralysis, diabetes, thyroid conditions, infertility, obesity, and bone & joint disorders\. Utilizing our unique 'Monomedi' approach—which employs single-ingredient medicines—Mirasa Ayurveda offers unparalleled clinical excellence, Shodhana Karmas, and specialized Panchakarma to restore your physical and mental harmony\./g,
  "Located in the serene environs of East of Kailash, New Delhi, we specialize in managing modern lifestyle challenges including severe stress, chronic neck pain, insomnia, and metabolic disorders. From rejuvenating Abhyanga and Shirodhara to specialized Kati Vasti, Mirasa Ayurveda crafts personalized wellness journeys to restore your body's natural balance and vitality."
);

// 6. Programs
content = content.replace(/Targeted 'Monomedi' Treatments/g, "Classical Panchakarma");
content = content.replace(/Bone & Joint Care/g, "Pain Management (Kati Vasti)");
content = content.replace(/Metabolic & Thyroid Care/g, "Stress & Insomnia Relief");
content = content.replace(/Infertility Treatments/g, "Eye Care (Netra Tarpan)");
content = content.replace(/Paralysis Management/g, "Lifestyle Disorder Reversal");
content = content.replace(/Anti-Aging & Rejuvenation/g, "Detoxification & Wellness");

// 7. Why Choose
content = content.replace(/155-Year Family Legacy/g, "Dr. Basu Group Legacy");
content = content.replace(/Rooted in authentic Kerala Ayurveda traditions spanning five generations\./g, "Backed by over 44 years of trusted healthcare excellence.");

content = content.replace(/Expertise in Toxicology/g, "Premium Infrastructure");
content = content.replace(/Specialized knowledge from a 5th-generation Ayurvedic Toxicologist\./g, "A modern facility blending traditional aesthetics with exceptional hygiene.");

content = content.replace(/World-Renowned Pulse Reading/g, "Personalized Care Plans");
content = content.replace(/Expert Nadi Pariksha diagnosis by Dr\. Anish M\. Kurias\./g, "Customized therapies designed by highly experienced BAMS physicians.");

content = content.replace(/Global Patient Reach/g, "Empathetic Healing Environment");
content = content.replace(/Successfully treated patients across 52 countries worldwide\./g, "A serene, welcoming space that supports mental and physical rejuvenation.");

content = content.replace(/Unique 'Monomedi' Approach/g, "Comprehensive Therapy Range");
content = content.replace(/Innovative single-ingredient medicine treatments for targeted, one-time relief\./g, "From Udvartana to Shirodhara, offering a full spectrum of classical treatments.");

content = content.replace(/Offering Shodhana Karmas, Navarakizhi, Pizhichil, and Shiro Ksheeradhara\./g, "Focused programs targeting the root causes of chronic ailments.");

// 8. Map & Address
content = content.replace(/Ground Floor 5, A-23, Behind Green Park Free Church/g, "D-136, East of Kailash");
content = content.replace(/Sri Aurobindo Marg, Green Park/g, "New Delhi");
content = content.replace(/New Delhi - 110016, India/g, "New Delhi - 110065, India");

// Distance & Transit section
content = content.replace(/Walking distance from Green Park Metro Station \(Yellow Line\)/g, "Approx. 800m from Kailash Colony Metro Station (Violet Line)");
content = content.replace(/Approx\. 11 km from Indira Gandhi International \(IGI\) Airport/g, "Approx. 18 km from Indira Gandhi International (IGI) Airport");


content = content.replace(/q=Kurias\+Earth\+Ayurveda\+Hospital\+Green\+Park\+Delhi/g, "q=Mirasa+Ayurveda+East+of+Kailash+Delhi");

// 9. Image Paths mapping
content = content.replace(/\/TOP cneters\/delhi\/Kurias Earth Ayurveda Hospital\/image 1\.jpg/g, "/TOP cneters/delhi/mirasa ayurveda/image 1.jpg");
content = content.replace(/\/TOP cneters\/delhi\/Kurias Earth Ayurveda Hospital\/image 2\.jpg/g, "/TOP cneters/delhi/mirasa ayurveda/image 2.webp"); // Note the webp extension here

// 10. Reviews
content = content.replace(/Outstanding experience at Mirasa Ayurveda Green Park\. Dr\. Anish Kurias' pulse reading was incredibly accurate, diagnosing my underlying thyroid issue immediately\. The unique single-medicine approach worked wonders\./g, "Mirasa Ayurveda is truly a premium wellness sanctuary. The Dr. Basu Group's legacy of care is evident. The Shirodhara treatment completely cured my chronic insomnia and severe stress levels.");

content = content.replace(/I traveled to Delhi specifically for Dr\. Anish's expertise\. The targeted treatments for my arthritis provided relief I couldn't find anywhere else\. The staff is highly professional and welcoming\./g, "An oasis of calm in busy Delhi. The Kati Vasti therapy provided immense relief for my persistent lower back pain. The therapists are incredibly skilled and the hygiene standards are top-notch.");

content = content.replace(/Excellent care and attention to detail\. The Navarakizhi treatment helped immensely with my father's paralysis recovery\. The legacy of their Ayurvedic knowledge is truly evident in the results\./g, "I highly recommend their classical Panchakarma program. The personalized attention from the doctors and the holistic diet plan helped me reverse my early-stage diabetes and lifestyle issues.");

content = content.replace(/A very professional center in South Delhi\. The Shiro Ksheeradhara sessions were transformative for my chronic migraines\. I highly recommend their specialized 'Monomedi' approach\./g, "The Netra Tarpan therapy was exceptional. Given their background with Dr. Basu Eye Care, the expertise here is unmatched. It significantly reduced my eye strain and dryness from continuous screen time.");

content = content.replace(/The doctor takes time to explain everything through pulse diagnosis\. The customized Pizhichil therapies worked wonders for my severe obesity and metabolic issues\. Truly a world-class facility!/g, "A wonderfully empathetic environment. The Udvartana weight management therapies combined with their strict Ayurvedic protocols helped me achieve my health goals safely. Truly a fantastic experience.");

// Save the file
fs.writeFileSync('src/pages/centers/MirasaAyurvedaHospital.tsx', content, 'utf8');
console.log('Mirasa Ayurveda component generated successfully.');
