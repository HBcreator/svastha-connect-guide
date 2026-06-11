const fs = require('fs');

let content = fs.readFileSync('src/pages/centers/AyurNavaKeralaAyurvedaHospital.tsx', 'utf8');

// 1. Rename Component Name First
content = content.replace(/AyurNavaKeralaAyurvedaHospital/g, "KuriasEarthAyurvedaHospital");

// 2. Specific exact strings from AyurNava to replace
content = content.replace(/AyurNava Kerala Ayurveda Hospital/g, "Kurias Earth Ayurveda Hospital");
// Catch any remaining AyurNava references carefully:
content = content.replace(/AyurNava/g, "Kurias Earth");

// 3. Location and Rating
content = content.replace(/Dwarka, New Delhi, India/g, "Green Park, New Delhi, India");
content = content.replace(/4\.5 Rating/g, "4.5 Rating");
content = content.replace(/>4\.5</g, ">4.5<");
content = content.replace(/900\+ Reviews/g, "700+ Reviews");

// 4. Hero Description
content = content.replace(
  /An ISO-certified and NABH-accredited Kerala Ayurveda hospital with clinics across Delhi NCR\. Led by experienced doctors qualified from Kerala including Dr\. Sajna Ali T\.M\., Dr\. Kalpana Rohtela, and Dr\. Jiji K\.P\., we specialize in authentic Panchakarma therapies like Pizhichil, Njavarakizhi, Abhyangam, and Shirodhara for chronic ailments\./g,
  "A multi-specialty Ayurvedic hospital in Green Park, New Delhi, part of the Earth Group of Hospitals led by Dr. Anish M. Kurias — a 5th-generation Ayurvedic Toxicologist from a 155-year family legacy rooted in Kerala. Known for the unique 'Monomedi' approach using single-ingredient medicines for targeted treatments."
);

// 5. Authentic Excellence Description 
content = content.replace(
  /Welcome to <strong className="font-bold text-\[#2C4E5A\]">Kurias Earth<\/strong>, an ISO-certified and NABH-accredited Kerala Ayurveda hospital with clinics across Delhi NCR\. Led by experienced doctors qualified from Kerala including Dr\. Sajna Ali T\.M\., Dr\. Kalpana Rohtela, and Dr\. Jiji K\.P\., we specialize in authentic Panchakarma therapies like Pizhichil, Njavarakizhi, Abhyangam, and Shirodhara for chronic ailments\./g,
  "Welcome to <strong className=\"font-bold text-[#2C4E5A]\">Kurias Earth Ayurveda Hospital</strong>, part of the Earth Group of Hospitals. Led by Dr. Anish M. Kurias, a world-renowned pulse reader who has treated patients across 52 countries, we specialize in addressing chronic ailments through our 155-year-old family legacy of traditional Kerala Ayurveda and specialized toxicology expertise."
);

content = content.replace(
  /With state-of-the-art facilities across Dwarka, Vasant Kunj, Kalkaji, Gurugram, and Noida, we specialize in the comprehensive management of neurological disorders, back pain, arthritis, diabetes, paralysis, piles, and obesity\. Whether you are seeking relief through targeted authentic Kerala therapies, or requiring cashless insurance facilities, Kurias Earth offers unparalleled clinical excellence to restore your physical and mental harmony\./g,
  "With our central facility located in Green Park, New Delhi, we specialize in the comprehensive management of paralysis, diabetes, thyroid conditions, infertility, obesity, and bone & joint disorders. Utilizing our unique 'Monomedi' approach—which employs single-ingredient medicines—Kurias Earth offers unparalleled clinical excellence, Shodhana Karmas, and specialized Panchakarma to restore your physical and mental harmony."
);

// 6. Programs
content = content.replace(/Panchakarma Detoxification/g, "Targeted 'Monomedi' Treatments");
content = content.replace(/Neurological Rehabilitation/g, "Bone & Joint Care");
content = content.replace(/Spine & Joint Care/g, "Metabolic & Thyroid Care");
content = content.replace(/Stress & Lifestyle/g, "Infertility Treatments");
content = content.replace(/Rejuvenation & Immunity/g, "Paralysis Management");
content = content.replace(/Post-Natal Care/g, "Anti-Aging & Rejuvenation");

// 7. Why Choose
content = content.replace(/NABH Accredited Hospital/g, "155-Year Family Legacy");
content = content.replace(/Recognized for maintaining high standards of clinical excellence and patient safety\./g, "Rooted in authentic Kerala Ayurveda traditions spanning five generations.");

content = content.replace(/Authentic Kerala Therapies/g, "Expertise in Toxicology");
content = content.replace(/Bringing the true essence of traditional Kerala Ayurvedic treatments to North India\./g, "Specialized knowledge from a 5th-generation Ayurvedic Toxicologist.");

content = content.replace(/Highly Qualified Doctors/g, "World-Renowned Pulse Reading");
content = content.replace(/Consult with experienced BAMS & MD physicians from Kerala\./g, "Expert Nadi Pariksha diagnosis by Dr. Anish M. Kurias.");

content = content.replace(/Skilled Therapists/g, "Global Patient Reach");
content = content.replace(/Treatments administered by trained and experienced therapists from Kerala\./g, "Successfully treated patients across 52 countries worldwide.");

content = content.replace(/Multi-location Clinics/g, "Unique 'Monomedi' Approach");
content = content.replace(/Accessible centers across Dwarka, Vasant Kunj, Kalkaji, Noida, and Gurugram\./g, "Innovative single-ingredient medicine treatments for targeted, one-time relief.");

content = content.replace(/Cashless Insurance Options/g, "Comprehensive Panchakarma");
content = content.replace(/Convenient cashless and reimbursement facilities available for inpatient treatments\./g, "Offering Shodhana Karmas, Navarakizhi, Pizhichil, and Shiro Ksheeradhara.");

// 8. Map & Address
content = content.replace(/Plot No \- 59, Sector 11, Near Dwarka Metro Station Gate No 1, New Delhi – 110075/g, "Ground Floor 5, A-23, Behind Green Park Free Church, Sri Aurobindo Marg, Green Park, New Delhi - 110016");
content = content.replace(/q=AyurNava\+Kerala\+Ayurveda\+Dwarka\+Delhi/g, "q=Kurias+Earth+Ayurveda+Hospital+Green+Park+Delhi");

// 9. Image Paths mapping
// They are already mapped because I renamed AyurNava Kerala Ayurveda Hospital -> Kurias Earth Ayurveda Hospital above!
// Check extension: they are already .jpg in the source file! 

// 10. Reviews
content = content.replace(/Outstanding experience at Kurias Earth Dwarka\. Dr\. Sajna Ali's approach to my chronic back pain was incredibly effective\. The Kerala therapists are highly skilled and the entire facility is spotless\./g, "Outstanding experience at Kurias Earth Green Park. Dr. Anish Kurias' pulse reading was incredibly accurate, diagnosing my underlying thyroid issue immediately. The unique single-medicine approach worked wonders.");

content = content.replace(/I traveled to Delhi specifically for authentic Panchakarma and Kurias Earth exceeded my expectations\. The 14-day detox program completely rejuvenated me\. The doctors are deeply knowledgeable\./g, "I traveled to Delhi specifically for Dr. Anish's expertise. The targeted treatments for my arthritis provided relief I couldn't find anywhere else. The staff is highly professional and welcoming.");

content = content.replace(/Excellent care and attention to detail\. The Njavarakizhi treatment helped immensely with my muscle weakness\. The hospital's NABH accreditation gave me complete peace of mind\./g, "Excellent care and attention to detail. The Navarakizhi treatment helped immensely with my father's paralysis recovery. The legacy of their Ayurvedic knowledge is truly evident in the results.");

content = content.replace(/Very professional and authentic Kerala Ayurveda center in North India\. The Shirodhara sessions were transformative for my severe stress and insomnia\. Highly recommended\./g, "A very professional center in South Delhi. The Shiro Ksheeradhara sessions were transformative for my chronic migraines. I highly recommend their specialized 'Monomedi' approach.");

content = content.replace(/The doctors take time to listen and the custom diet plan along with Abhyangam therapies worked wonders for my joint issues\. Cashless insurance facility was a huge plus!/g, "The doctor takes time to explain everything through pulse diagnosis. The customized Pizhichil therapies worked wonders for my severe obesity and metabolic issues. Truly a world-class facility!");

// Save the file
fs.writeFileSync('src/pages/centers/KuriasEarthAyurvedaHospital.tsx', content, 'utf8');
console.log('Kurias Earth component generated successfully.');
