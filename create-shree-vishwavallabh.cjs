const fs = require('fs');

let content = fs.readFileSync('src/pages/centers/BharatiAyurvedHospital.tsx', 'utf8');

// 1. Component Name Replacement
content = content.replace(/BharatiAyurvedHospital/g, 'ShreeVishwavallabhAyurvedicCenter');

// 2. Name & Location Replacements
content = content.replace(/Bharati Ayurved Hospital/g, 'Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center');
content = content.replace(/Bharati/g, 'Shree Vishwavallabh');
content = content.replace(/Pune/g, 'Nashik');

// 3. Hero Section Specifics
content = content.replace(/15\+ Years/g, '18+ Years');
content = content.replace(/4\.9/g, '4.8');
content = content.replace(/1,500\+/g, '1,100+');
content = content.replace(/20,000\+/g, '1,00,000+');

// 4. Hero Subtitle & Description
content = content.replace(
  /Pune's leading institution for authentic Ayurvedic healing.*/,
  "Nashik's premier destination for authentic Ayurvedic Panchakarma and specialized Garbh Sanskar treatments, delivering root-cause healing and maternal wellness."
);

// 5. About Section
content = content.replace(
  /Welcome to the <strong className="font-bold text-\[\#2C4E5A\]">Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center<\/strong>.*/,
  'Welcome to the <strong className="font-bold text-[#2C4E5A]">Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center</strong>, an ISO and Gold Leaf Certified Ayurvedic clinic in Panchavati, Nashik. Established by Dr. Jeevan Sampat Jadhav, who hails from the celebrated "Vazhimangalathu" family of Ayurveda Vaidyas from central Kerala, our center brings 18 years of profound clinical experience to Maharashtra.'
);

content = content.replace(
  /At our state-of-the-art facility, we specialize in a comprehensive range of Panchakarma detoxification protocols.*/,
  'We specialize in classical Kerala Panchakarma therapies and our highly acclaimed Garbh Sanskar programs, aimed at promoting maternal and fetal health. We also provide root-cause treatments for chronic conditions such as skin diseases, hair loss, joint pain, spine disorders, and gastrointestinal issues, ensuring holistic and deeply personalized care.'
);

// 6. Testimonials
const newTestimonials = `  const testimonials = [
    {
      title: "Excellent Garbh Sanskar Guidance",
      review: "Dr. Jeevan's Garbh Sanskar program was truly a blessing for my pregnancy. The personalized dietary advice, yoga, and Ayurvedic treatments helped me experience a stress-free and healthy delivery. I highly recommend this clinic to all expecting mothers.",
      name: "Priyanka S.",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Maternal Wellness",
      rating: 5
    },
    {
      title: "Remarkable Relief from Psoriasis",
      review: "I had been suffering from severe skin issues for years. The traditional Kerala Panchakarma therapies at Shree Vishwavallabh brought my condition completely under control. The hygiene and authenticity of the treatments are unparalleled in Nashik.",
      name: "Rohit D.",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Skin Disorders",
      rating: 5
    },
    {
      title: "Authentic Kerala Ayurveda",
      review: "Finding genuine Kerala-style Ayurveda in Maharashtra is rare. The Vamana and Virechana detox treatments I underwent were highly effective for my chronic digestive problems. The staff is deeply compassionate and highly professional.",
      name: "Meera K.",
      verified: true,
      location: "Pune, Maharashtra",
      condition: "Digestive Health",
      rating: 5
    },
    {
      title: "Effective Spine Care",
      review: "My cervical spondylosis had restricted my mobility. The Kati Basti and specialized herbal oil massages provided immense relief from the pain and stiffness. The doctor's deep understanding of anatomy and Ayurveda is remarkable.",
      name: "Anand M.",
      verified: true,
      location: "Mumbai, Maharashtra",
      condition: "Spine & Joint Care",
      rating: 5
    },
    {
      title: "Holistic Hair Fall Treatment",
      review: "The holistic approach taken here for my severe hair fall worked wonders. Instead of just prescribing topical oils, they treated the root cause with internal medicines and Nasya therapy. I am seeing visible hair regrowth after just two months.",
      name: "Sneha P.",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Hair & Scalp Care",
      rating: 5
    }
  ];`;

content = content.replace(/const testimonials = \[[\s\S]*?\];/, newTestimonials);

// 7. FAQs
const newFaqs = `  const faqItems = [
    {
      question: "What is Garbh Sanskar and who is it for?",
      answer: "Garbh Sanskar is an ancient Ayurvedic science of nurturing the fetus in the womb. It involves a customized regimen of diet, yoga, mantras, and herbal supplements designed for pregnant women to ensure the optimal physical, mental, and spiritual development of the baby."
    },
    {
      question: "Do you offer authentic Kerala Panchakarma therapies?",
      answer: "Yes, our founder belongs to the renowned 'Vazhimangalathu' family of Ayurveda Vaidyas from Kerala. We strictly adhere to classical Kerala protocols, utilizing specialized medicated oils and traditional massage techniques for profound detoxification."
    },
    {
      question: "Is Shree Vishwavallabh a certified clinic?",
      answer: "Yes, we are proudly an ISO 9001:2015 certified and Gold Leaf Certified Ayurvedic Panchakarma clinic, ensuring uncompromising standards of hygiene, safety, and authentic medical care."
    },
    {
      question: "How long does a typical Panchakarma detox take?",
      answer: "A complete Panchakarma detox program usually spans 7 to 21 days, depending on your individual health condition, body constitution (Prakriti), and the specific therapies required for optimal healing."
    },
    {
      question: "Can Ayurveda effectively treat chronic skin diseases?",
      answer: "Absolutely. We specialize in treating chronic skin conditions like psoriasis and eczema through deep cellular detoxification (like Vamana and Virechana) and targeted herbal formulations that purify the blood and restore natural immunity."
    }
  ];`;

content = content.replace(/const faqItems = \[[\s\S]*?\];/, newFaqs);

// 8. Top Programs
const newPrograms = `  const programs = [
    {
      title: "Garbh Sanskar Program",
      description: "A comprehensive maternal wellness program promoting healthy fetal development through customized diet, prenatal yoga, and Ayurvedic therapies.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Kerala Panchakarma Detox",
      description: "Deep cellular purification using authentic Kerala protocols to eliminate toxins, reset the digestive fire, and restore physiological balance.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skin & Hair Care Therapy",
      description: "Specialized treatments targeting the root causes of chronic skin conditions and hair fall using customized herbal oils and blood-purifying therapies.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Spine & Joint Management",
      description: "Targeted localized therapies like Kati Basti and Janu Basti for chronic pain relief, mobility restoration, and arthritis management.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

content = content.replace(/const programs = \[[\s\S]*?\];/, newPrograms);

// 9. Map Embed
content = content.replace(
  /https:\/\/maps\.google\.com\/maps\?q=[^&]+&t=&z=15&ie=UTF8&iwloc=&output=embed/g,
  'https://maps.google.com/maps?q=Shree+Vishwavallabh+Ayurvedic+Panchakarma+Clinic,+Nashik&t=&z=15&ie=UTF8&iwloc=&output=embed'
);

// 10. Image Paths
content = content.replace(
  /\/Anchor pages\/mumbai\/images\/19\.jpg/g,
  '/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp'
);

content = content.replace(
  /src="\/TOP centers\/mumbai pune nashik\/Bharati Ayurved Hospital\/image 1\.webp"/g,
  'src="/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.jpg"'
);

content = content.replace(
  /src="\/TOP centers\/mumbai pune nashik\/Bharati Ayurved Hospital\/image 2\.webp"/g,
  'src="/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 2.jpg"'
);

// Quick fallback replacement for any .webp images left over
content = content.replace(/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center\/image 1\.webp/g, 'Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.jpg');
content = content.replace(/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center\/image 2\.webp/g, 'Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 2.jpg');


fs.writeFileSync('src/pages/centers/ShreeVishwavallabhAyurvedicCenter.tsx', content);
console.log('Successfully created ShreeVishwavallabhAyurvedicCenter.tsx');
