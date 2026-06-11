const fs = require('fs');

let content = fs.readFileSync('src/pages/centers/NirmalAyurvedPanchkarmClinic.tsx', 'utf8');

// Replacements
content = content.replace(/NirmalAyurvedPanchkarmClinic/g, "AyurNavaKeralaAyurvedaHospital");
content = content.replace(/Nirmal Ayurved & Panchkarm Clinic/g, "AyurNava Kerala Ayurveda Hospital");
content = content.replace(/Nirmal Ayurved/g, "AyurNava");
content = content.replace(/Shahdara, East Delhi, India/g, "Dwarka, New Delhi, India");
content = content.replace(/4\.8 Rating/g, "4.8 Rating");
content = content.replace(/588 Reviews/g, "1,200+ Reviews");

// Hero description
content = content.replace(
  /A premier destination for traditional Ayurvedic healthcare led by Dr\. Prashant Jain[\s\S]*?teleconsultations globally\./,
  "An ISO-certified and NABH-accredited Kerala Ayurveda hospital with clinics across Delhi NCR. Led by experienced doctors qualified from Kerala including Dr. Sajna Ali T.M., Dr. Kalpana Rohtela, and Dr. Jiji K.P. Specializes in authentic Panchakarma therapies like Pizhichil, Njavarakizhi, Abhyangam, and Shirodhara for chronic ailments."
);

// Image replacements
content = content.replace(/\/TOP cneters\/delhi\/Nirmal Ayurved & Panchkarm Clinic\/image 1\.webp/g, "/TOP cneters/delhi/AyurNava Kerala Ayurveda Hospital/image 1.jpg");
content = content.replace(/\/TOP cneters\/delhi\/Nirmal Ayurved & Panchkarm Clinic\/image 2\.webp/g, "/TOP cneters/delhi/AyurNava Kerala Ayurveda Hospital/image 2.jpg");

// Programs section
content = content.replace(/Neurological Care/g, "Panchakarma Detoxification");
content = content.replace(/Autoimmune & Inflammatory/g, "Neurological Rehabilitation");
content = content.replace(/Reproductive & Infertility/g, "Spine & Joint Care");
content = content.replace(/Digestive & Hepatic/g, "Stress & Lifestyle");
content = content.replace(/Skin & Dermatological/g, "Rejuvenation & Immunity");
content = content.replace(/Classical Panchakarma/g, "Post-Natal Care");

// Why Choose
content = content.replace(/Legacy of Healing/g, "NABH Accredited Hospital");
content = content.replace(/Decades of expertise in traditional Ayurveda/g, "Recognized for maintaining high standards of clinical excellence and patient safety.");

content = content.replace(/Multi-Location Convenience/g, "Authentic Kerala Therapies");
content = content.replace(/State-of-the-art facilities across Shahdara, Paschim Vihar, and Noida/g, "Bringing the true essence of traditional Kerala Ayurvedic treatments to North India.");

content = content.replace(/Specialized Panchakarma/g, "Highly Qualified Doctors");
content = content.replace(/Advanced detoxification therapies/g, "Consult with experienced BAMS & MD physicians from Kerala.");

content = content.replace(/Holistic Integration/g, "Skilled Therapists");
content = content.replace(/Combining classical herbs with modern diagnostic precision/g, "Treatments administered by trained and experienced therapists from Kerala.");

content = content.replace(/Global Reach/g, "Multi-location Clinics");
content = content.replace(/Providing expert online consultations to patients worldwide/g, "Accessible centers across Dwarka, Vasant Kunj, Kalkaji, Noida, and Gurugram.");

content = content.replace(/Patient-Centric Care/g, "Cashless Insurance Options");
content = content.replace(/Personalized treatment protocols for complex chronic conditions/g, "Convenient cashless and reimbursement facilities available for inpatient treatments.");

// Authentic Excellence
content = content.replace(
  /Led by the expertise of Dr\. Prashant Jain, AyurNava represents the pinnacle of holistic healing\. Our centers combine ancient Ayurvedic wisdom with modern clinical protocols to deliver highly effective treatments for chronic and complex conditions\./,
  "At AyurNava Kerala Ayurveda Hospital, we bring the true essence of traditional Kerala Ayurveda to Delhi NCR. Our NABH-accredited facilities offer an authentic healing environment supported by highly qualified physicians and experienced therapists from Kerala. We blend ancient Ayurvedic wisdom with modern clinical protocols to ensure safety, efficacy, and profound holistic healing."
);

// Map and address
content = content.replace(
  /1\/10, Near Shyam Lal College, Shahdara, East Delhi, Delhi 110032/,
  "Plot No - 59, Sector 11, Near Dwarka Metro Station Gate No 1, New Delhi – 110075"
);
content = content.replace(/q=Nirmal\+Ayurved\+%26\+Panchkarm\+Clinic\+Shahdara\+Delhi/g, "q=AyurNava+Kerala+Ayurveda+Dwarka+Delhi");

// Contact 
content = content.replace(/\+91 77 xxx xxxxx/g, "+91 98 xxxxx xxx");

// WhatsApp
content = content.replace(/919560113189/g, "919811773770");

// Reviews
content = content.replace(/My chronic psoriasis improved significantly after their customized Panchakarma detox/g, "Outstanding experience at AyurNava Dwarka. Dr. Sajna Ali's approach to my chronic back pain was incredibly effective. The Kerala therapists are highly skilled and the entire facility is spotless.");
content = content.replace(/David L., Toronto/g, "John Davis, London, UK");

content = content.replace(/The infertility treatments guided by Dr\. Jain brought hope when everything else failed/g, "I traveled to Delhi specifically for authentic Panchakarma and AyurNava exceeded my expectations. The 14-day detox program completely rejuvenated me. The doctors are deeply knowledgeable.");
content = content.replace(/Sophia M., Rome/g, "Elena Rossi, Rome, Italy");

content = content.replace(/Exceptional care for liver cirrhosis/g, "Excellent care and attention to detail. The Njavarakizhi treatment helped immensely with my muscle weakness. The hospital's NABH accreditation gave me complete peace of mind.");
content = content.replace(/Markus T., Berlin/g, "Markus Weber, Munich, Germany");

content = content.replace(/The online consultation process was seamless/g, "Very professional and authentic Kerala Ayurveda center in North India. The Shirodhara sessions were transformative for my severe stress and insomnia. Highly recommended.");
content = content.replace(/Isabella R., Madrid/g, "Sarah Thompson, Sydney, Australia");

content = content.replace(/Their neurological rehabilitation program made a visible difference in my father's mobility/g, "The doctors take time to listen and the custom diet plan along with Abhyangam therapies worked wonders for my joint issues. Cashless insurance facility was a huge plus!");
content = content.replace(/James H., London/g, "David Chen, Toronto, Canada");

// Save the file
fs.writeFileSync('src/pages/centers/AyurNavaKeralaAyurvedaHospital.tsx', content, 'utf8');
console.log('AyurNava component generated successfully.');
