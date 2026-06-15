const fs = require('fs');

const bharatiContent = fs.readFileSync('src/pages/centers/BharatiAyurvedHospital.tsx', 'utf8');

let ashtangContent = bharatiContent;

// 1. Name & Component Replacements
ashtangContent = ashtangContent.replace(/BharatiAyurvedHospital/g, 'AshtangAyurvedaHospital');
ashtangContent = ashtangContent.replace(/Bharati Ayurved Hospital Pune/g, 'Ashtang Ayurveda Super Multi Speciality Hospital Nashik');
ashtangContent = ashtangContent.replace(/Bharati Ayurved Hospital/g, 'Ashtang Ayurveda Super Multi Speciality Hospital');

// 2. Location & Subtitle
ashtangContent = ashtangContent.replace('Pune-Satara Road, Pune, Maharashtra, India', 'Panchavati, Nashik, Maharashtra, India');
ashtangContent = ashtangContent.replace('NABH Accredited Premium Ayurveda | Outpatient & Inpatient Clinical Care', "Nashik's Premier Authentic Ayurvedic & Panchakarma Centre");

// 3. Stats
ashtangContent = ashtangContent.replace('4.6', '4.7');
ashtangContent = ashtangContent.replace('900+ Reviews', '850+ Reviews');

// 4. Meta & Title
ashtangContent = ashtangContent.replace(
  'Ashtang Ayurveda Super Multi Speciality Hospital Pune | NABH Accredited Ayurvedic Care',
  'Ashtang Ayurveda Super Multi Speciality Hospital Nashik | Panchakarma & Authentic Ayurveda'
);
ashtangContent = ashtangContent.replace(
  'Experience authentic Ayurvedic treatments, Ksharasutra surgery, and Panchakarma at the NABH-accredited Ashtang Ayurveda Super Multi Speciality Hospital on Pune-Satara Road, Pune.',
  'Experience authentic Ayurvedic treatments and Panchakarma therapies at Ashtang Ayurveda Super Multi Speciality Hospital in Nashik. Led by Dr. Pravin Kenge.'
);

// 5. About Section Text
const oldAboutText = `Welcome to <strong className="font-bold text-[#2C4E5A]">Ashtang Ayurveda Super Multi Speciality Hospital</strong>, one of Pune's most reputed and trusted destinations for authentic, clinical Ayurvedic healthcare. Proudly affiliated with Bharati Vidyapeeth—a top-ranked university—our NABH-accredited hospital carries forward a 30-year legacy of clinical excellence. Prominently located on Pune-Satara Road, we offer a serene and highly hygienic environment where traditional Ayurvedic wisdom meets advanced modern medical diagnostics. Our facility integrates traditional pulse diagnosis with state-of-the-art diagnostic tools, ensuring that our patients receive highly precise, evidence-based care tailored precisely to their unique body constitution and health challenges.`;
const newAboutText = `Welcome to the <strong className="font-bold text-[#2C4E5A]">Ashtang Ayurveda Super Multi Speciality Hospital</strong>, a premier destination for holistic healing in Nashik. For over 15 years, we have been delivering authentic, classical Ayurvedic therapies that strictly adhere to the ancient texts. Led by Dr. Pravin Kenge and Dr. Pranali, our institution is built on the profound philosophy of treating the root cause of the illness, rather than just suppressing the symptoms.`;

const oldAboutText2 = `Our institution uniquely stands out by providing comprehensive specialties under one roof. From highly successful Ksharasutra surgery for proctological issues to specialized pediatric Ayurveda, women's health, postpartum care, and profound Panchakarma detox programs. Equipped with a modern Intensive Care Unit (ICU) and a team of highly qualified physicians, we are committed to delivering safe, measurable, and deeply transformative healing outcomes for patients across the globe. By integrating deeply purifying Ayurvedic detoxes, rejuvenating therapies, personalized lifestyle counseling, and meticulously sourced organic medicines, we empower our patients to achieve lasting, vibrant health rather than just temporary symptom relief.`;
const newAboutText2 = `At our state-of-the-art facility, we specialize in a comprehensive range of Panchakarma detoxification protocols and customized herbal formulations. Whether you are seeking relief from chronic conditions like arthritis, cervical spondylosis, hypertension, psoriasis, or navigating infertility, our multi-speciality approach ensures that every treatment plan is personalized to your unique physiological constitution. We pride ourselves on offering a deeply compassionate, highly effective, and entirely natural pathway to lifelong wellness.`;

ashtangContent = ashtangContent.replace(oldAboutText, newAboutText);
ashtangContent = ashtangContent.replace(oldAboutText2, newAboutText2);

// 6. Data Arrays

const oldTestimonials = `const testimonials = [
    {
      title: "Excellent Ksharasutra Treatment",
      review: "I suffered from chronic piles for years. The Ksharasutra procedure done here was highly effective with minimal pain. The post-operative care and hygiene standards of the hospital were truly commendable. A lifesaver!",
      name: "Rohit Deshmukh",
      verified: true,
      location: "Pune, Maharashtra",
      condition: "Proctology & Piles",
      rating: 5
    },
    {
      title: "Miraculous Panchakarma Results",
      review: "The 14-day Panchakarma detox completely transformed my health. My chronic digestive issues and lethargy are gone. The doctors are incredibly knowledgeable and the hospital environment is very clean and peaceful.",
      name: "Sunita Kulkarni",
      verified: true,
      location: "Mumbai, India",
      condition: "Panchakarma Detox",
      rating: 5
    },
    {
      title: "Superior Postpartum Care",
      review: "The specialized women's health and postpartum care program helped me recover my strength immensely after delivery. The traditional massages, diet plan, and warm support from the nurses made all the difference.",
      name: "Priyanka Sharma",
      verified: true,
      location: "Satara, Maharashtra",
      condition: "Postpartum Care",
      rating: 5
    },
    {
      title: "Great Relief from Arthritis",
      review: "My rheumatoid arthritis was causing severe joint pain. The combination of Basti treatments, Pinda Sweda, and their authentic herbal formulations brought my inflammation down significantly. I can walk comfortably now.",
      name: "Vijay Patwardhan",
      verified: true,
      location: "Pune, India",
      condition: "Rheumatoid Arthritis",
      rating: 5
    },
    {
      title: "Effective Psoriasis Management",
      review: "After struggling with Psoriasis and trying various treatments with no luck, I came here. The integrated approach and blood purification therapies cleared my skin up to 80% within a month. Highly professional setup.",
      name: "Anand Joshi",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Skin Disorders",
      rating: 5
    }
  ];`;

const newTestimonials = `const testimonials = [
    {
      title: "Tremendous Relief from Arthritis",
      review: "I was suffering from severe joint pain and arthritis for years. Dr. Pravin Kenge's personalized Panchakarma treatment plan at Ashtang Ayurveda brought me tremendous relief within just a few weeks. The staff is highly professional and deeply compassionate.",
      name: "Ramesh P.",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Arthritis & Joint Care",
      rating: 5
    },
    {
      title: "Cured from the Root",
      review: "This hospital is a true blessing. Their approach to treating my chronic digestive issues was entirely different from the allopathic route I took before. The therapies and dietary changes they prescribed cured my ailment from the root.",
      name: "Suman T.",
      verified: true,
      location: "Pune, Maharashtra",
      condition: "Digestive Disorders",
      rating: 5
    },
    {
      title: "Complete Detoxification",
      review: "I underwent a complete detoxification program here. The Vamana and Virechana therapies were conducted with utmost care and hygiene. I feel rejuvenated, lighter, and completely energized. A must-visit for anyone seeking authentic Ayurveda.",
      name: "Avinash D.",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Panchakarma Detox",
      rating: 5
    },
    {
      title: "Supportive Infertility Treatment",
      review: "Dr. Pranali's guidance during my infertility treatment was incredibly supportive. The holistic Ayurvedic approach not only improved my physical health but also brought peace to my mind. We are so grateful to the entire team.",
      name: "Priya S.",
      verified: true,
      location: "Mumbai, Maharashtra",
      condition: "Reproductive Health",
      rating: 5
    },
    {
      title: "Effective Hypertension Management",
      review: "The best Ayurvedic hospital in Nashik! They effectively managed my hypertension and stress levels through Shirodhara and customized herbal formulations. The atmosphere in the clinic is incredibly serene and healing.",
      name: "Vikram R.",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Stress & Hypertension",
      rating: 5
    }
  ];`;
ashtangContent = ashtangContent.replace(oldTestimonials, newTestimonials);

const oldPrograms = `const programs = [
    {
      title: "Ksharasutra Surgery",
      description: "Advanced, minimally invasive Ayurvedic surgical procedures for the effective and permanent management of piles, fissures, and fistulas.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Women's Health & Postpartum",
      description: "Holistic care for gynecological disorders, PCOS, menstrual irregularities, and specialized rejuvenating postnatal care programs.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Classical Panchakarma",
      description: "Systematic, authentic body detoxification therapies designed to eliminate deep-seated toxins and restore metabolic balance.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Pediatric Ayurveda",
      description: "Specialized gentle therapies and immunity-boosting protocols designed to address health issues and support healthy development in children.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Skin & Hair Care",
      description: "Targeted internal purification and external applications for chronic conditions like psoriasis, eczema, acne, and severe hair loss.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Eye & ENT Disorders",
      description: "Authentic Shalakya Tantra treatments for managing various chronic ailments related to the eyes, ears, nose, and throat.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Panchakarma Detoxification",
      description: "Comprehensive cleansing procedures including Vamana, Virechana, and Basti to eliminate deep-seated toxins and reset the body's metabolic functions.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Arthritis & Joint Care",
      description: "Specialized therapies like Kati Basti, Janu Basti, and Pinda Sweda for sustained relief from arthritis, joint pain, and cervical/lumbar spondylosis.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Stress & Neurological Care",
      description: "Calming treatments including Shirodhara and Nasya, designed to combat modern lifestyle stress, migraine, insomnia, and aid in paralysis recovery.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Infertility & Reproductive Health",
      description: "Dedicated holistic care to naturally balance hormones, treat menstrual disorders, and support couples on their fertility journey.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Skin & Psoriasis Management",
      description: "Blood purification therapies (Raktamokshana) and herbal applications to naturally treat chronic skin conditions like psoriasis and eczema.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Digestive Disorders",
      description: "Personalized dietary plans and deep-acting herbal medicines to cure hyperacidity, IBS, and chronic indigestion from the root.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];`;
ashtangContent = ashtangContent.replace(oldPrograms, newPrograms);

const oldWhyChooseUs = `const whyChooseUs = [
    {
      title: "30 Years of Excellence",
      description: "A profound legacy of clinical success, backed by the academic prestige and research prowess of Bharati Vidyapeeth University.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "NABH Accredited Hospital",
      description: "Recognized nationally for uncompromising standards in patient safety, clinical quality, and exceptional hygiene protocols.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Integrative Approach",
      description: "We seamlessly blend ancient classical Ayurvedic wisdom with state-of-the-art modern diagnostic technology.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "In-House ICU Facility",
      description: "One of the few Ayurvedic hospitals equipped with a fully functional Intensive Care Unit to handle medical emergencies 24/7.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Community Focused",
      description: "Actively running adopted village programs to provide free health check-ups and treatments to rural families across Maharashtra.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Prime Location",
      description: "Conveniently situated on the main Pune-Satara Road, making it highly accessible for patients from all over the state.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "15+ Years Experience",
      description: "Over a decade and a half of clinical excellence and trusted patient care under expert leadership.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Authentic Protocols",
      description: "Strict adherence to classical Ayurvedic texts for pure, holistic treatments and therapies.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Expert Specialists",
      description: "Led by highly qualified practitioners, Dr. Pravin Kenge and Dr. Pranali, ensuring top-tier medical guidance.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Holistic Root-Cause Care",
      description: "We focus on treating the fundamental root cause of illnesses, rather than merely suppressing symptoms.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Comprehensive Panchakarma",
      description: "Fully equipped to perform all deep cellular cleansing protocols safely and hygienically.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Serene Environment",
      description: "A peaceful, clean, and positive healing environment located conveniently in Panchavati, Nashik.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;
ashtangContent = ashtangContent.replace(oldWhyChooseUs, newWhyChooseUs);

const oldFaqItems = `const faqItems = [
    {
      question: "Is Ashtang Ayurveda Super Multi Speciality Hospital accredited?",
      answer: "Yes, Ashtang Ayurveda Super Multi Speciality Hospital is a highly reputed NABH-accredited Ayurvedic hospital, reflecting our strict adherence to the highest standards of safety, quality, and hygiene in clinical healthcare."
    },
    {
      question: "What makes Ashtang Ayurveda Super Multi Speciality Hospital unique?",
      answer: "We are affiliated with the top-ranked Bharati Vidyapeeth university, boasting 30 years of clinical excellence. We uniquely integrate classical Ayurvedic therapies with advanced modern diagnostics and house a full-fledged ICU facility for critical care."
    },
    {
      question: "What specialties are offered at the hospital?",
      answer: "Our key specialties include Ksharasutra surgery for proctological conditions (piles, fissures, fistulas), pediatric Ayurveda, comprehensive women's health and postpartum care, authentic Panchakarma detox, and specialized care for skin, hair, eye, and ENT disorders."
    },
    {
      question: "Do you have inpatient facilities?",
      answer: "Yes, we are a fully equipped Ayurvedic hospital offering comprehensive inpatient care with various room categories, 24/7 nursing, a dedicated Saatvic diet kitchen, and an Intensive Care Unit (ICU) for emergencies."
    },
    {
      question: "Where is the hospital located in Pune?",
      answer: "We are prominently located on Pune-Satara Road in Pune, Maharashtra. The hospital is easily accessible from major transit points in the city."
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "What types of chronic diseases do you treat?",
      answer: "We specialize in treating a wide range of chronic ailments including arthritis, paralysis, cervical/lumbar spondylosis, hypertension, diabetes, skin disorders like psoriasis, and digestive issues. Our treatments are aimed at correcting the root imbalances rather than just suppressing symptoms."
    },
    {
      question: "Are the Panchakarma treatments authentic?",
      answer: "Yes, absolutely. Ashtang Ayurveda firmly adheres to the classical Ayurvedic texts. All our Panchakarma therapies (such as Vamana, Virechana, and Basti) are strictly authentic and administered by trained, certified therapists under the constant supervision of our senior doctors."
    },
    {
      question: "How long does a typical treatment program last?",
      answer: "The duration of treatment varies significantly depending on the chronicity and severity of the ailment. A minor detox might take 7 days, whereas comprehensive Panchakarma for a chronic condition might require 14 to 28 days."
    },
    {
      question: "Do you offer therapies for stress and mental well-being?",
      answer: "Yes. We provide targeted therapies like Shirodhara, Nasya, and Abhyanga which are incredibly effective for managing modern lifestyle stress, anxiety, depression, and severe sleep disorders like insomnia."
    },
    {
      question: "Is an appointment necessary for a consultation?",
      answer: "Yes, we highly recommend booking an appointment in advance. Dr. Pravin Kenge and Dr. Pranali dedicate substantial time to each patient's Nadi Pariksha and consultation, so prior scheduling ensures you receive the dedicated attention required."
    }
  ];`;
ashtangContent = ashtangContent.replace(oldFaqItems, newFaqItems);

// 7. Map URL
ashtangContent = ashtangContent.replace(
  'https://maps.google.com/maps?q=Bharati+Ayurved+Hospital,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed',
  'https://maps.google.com/maps?q=Ashtang+Ayurveda+Super+Multi+Speciality+Hospital,+Nashik&t=&z=15&ie=UTF8&iwloc=&output=embed'
);

// 8. Contact Details
ashtangContent = ashtangContent.replace('+91-020-40555600', '+91-7383238961');

fs.writeFileSync('src/pages/centers/AshtangAyurvedaHospital.tsx', ashtangContent);
console.log('Successfully cloned Bharati layout to Ashtang');
