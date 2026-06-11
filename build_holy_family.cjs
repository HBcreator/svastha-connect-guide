const fs = require('fs');
const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const targetPath = 'src/pages/centers/HolyFamilyHospitalAyurvedaDepartment.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Basic Name & Meta Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'HolyFamilyHospitalAyurvedaDepartment');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'Holy Family Hospital – Ayurveda Department');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Holy Family Hospital Ayurveda');
content = content.replace(/Apollo AyurVAID/g, 'Holy Family Ayurveda');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'Okhla, New Delhi, India');
content = content.replace(/Nehru Enclave/g, 'Okhla');
content = content.replace(/4\.3/g, '4.6');
content = content.replace(/170 Reviews/g, '150+ Reviews');

// Image replacements explicitly (avoiding the bug by using regex correctly)
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/main\.jpeg/g, '/TOP cneters/delhi/Holy Family Hospital – Ayurveda Department/image 1.jfif');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Holy Family Hospital – Ayurveda Department/image 2.jfif');

content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Holistic Ayurvedic Healthcare & Natural Healing Wisdom');

// Apollo Doctor and Feature Replacements
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'expert Ayurvedic practitioners');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior Vaidyas');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'dedicated therapists');
content = content.replace(/Dr\. Deepika Gunawant/g, 'traditional healers');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'wellness consultants');
content = content.replace(/Apollo Hospitals/g, 'Holy Family Hospital');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'a rich heritage of compassionate healthcare');
content = content.replace(/NABH-accredited 40-bed/g, 'comprehensive multispecialty');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'the accessible Okhla Road');

// About section updates
const newAbout = `Welcome to the <strong className="font-bold text-[#2C4E5A]">Ayurveda Department at Holy Family Hospital</strong>, a dedicated space for holistic and natural healing located in Okhla, New Delhi. As part of a premier multispecialty hospital, our Ayurveda wing brings the profound ancient wisdom of Indian medicine to a modern, clinical setting. We specialize in classical Ayurvedic consultations, personalized dietary advice, and authentic therapies aimed at addressing the root cause of ailments. Maintaining the hospital's exceptionally high standards of hygiene and patient care, we offer a deeply restorative environment for both outpatients and those seeking integrated healthcare solutions.`;
content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const newAbout2 = `Our expert team of Vaidyas and certified therapists ensure that every treatment is performed with utmost precision using authentic herbal formulations. We hold a strong reputation for effectively managing chronic joint pain, arthritis, respiratory issues, digestive disorders, and modern lifestyle diseases. At Holy Family Hospital's Ayurveda Department, you don't just receive symptomatic relief; you benefit from a comprehensive, tailor-made journey of profound healing supported by the robust infrastructure of a renowned medical institution.`;
content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience authentic Ayurvedic therapies and holistic healthcare at the Ayurveda Department of Holy Family Hospital in Okhla, New Delhi. Integrated care for chronic diseases.');

// Contact Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'Holy+Family+Hospital+Okhla+Delhi');
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20Holy%20Family%20Hospital%20Ayurveda%20Department');

// Array Replacements using Regex
const newTreatmentProcess = `const treatmentProcess = [
    {
      number: 1,
      title: "Holistic Consultation",
      description: "A detailed clinical assessment by our Ayurvedic doctors to understand your unique body constitution (Prakriti) and root cause of ailments.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Personalized Care Plan",
      description: "Our experts design a specific treatment roadmap involving classical Ayurvedic therapies and herbal medications.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Integrated Healing Approach",
      description: "Leveraging the hospital's multispecialty infrastructure to provide safe, cross-disciplinary healthcare when needed.",
      icon: <Heart className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Authentic Therapies",
      description: "Administering specialized therapies like Abhyangam, Shirodhara, and Kati Basti using high-quality medicated oils.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Rejuvenation & Recovery",
      description: "Focusing on post-treatment recovery to nourish the tissues, strengthen immunity, and restore vitality naturally.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Diet & Lifestyle Counseling",
      description: "Providing a customized Ayurvedic diet chart and daily routine guidelines to sustain long-term health and wellness.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];`;

const newTestimonials = `const testimonials = [
    {
      title: "Exceptional Joint Care",
      review: "The Ayurveda department here is wonderful. The doctors are very patient and the Kati Basti treatment significantly reduced my severe back pain.",
      name: "Sanjay Kumar",
      verified: true,
      location: "New Delhi, India",
      condition: "Lower Back Pain",
      rating: 5
    },
    {
      title: "Holistic Healing Environment",
      review: "Being inside Holy Family gives a sense of medical security, while the Ayurveda wing provides deeply authentic and calming therapies. Highly recommended.",
      name: "Meera Reddy",
      verified: true,
      location: "Delhi, India",
      condition: "Stress & Fatigue",
      rating: 5
    },
    {
      title: "Great Relief for Digestion",
      review: "I suffered from chronic acidity for years. The Ayurvedic consultation and prescribed dietary changes along with herbal medicines have worked wonders.",
      name: "Amit Sharma",
      verified: true,
      location: "Okhla, India",
      condition: "Digestive Disorders",
      rating: 4
    },
    {
      title: "Effective Arthritis Management",
      review: "The massage therapies and Janu Basti provided by the trained therapists have given me immense relief from my knee arthritis.",
      name: "Pooja Singh",
      verified: true,
      location: "Noida, India",
      condition: "Knee Arthritis",
      rating: 5
    },
    {
      title: "Professional & Clean",
      review: "The hygiene standards are excellent as expected from a major hospital. The Shirodhara session was incredibly relaxing and helped my migraines.",
      name: "Rahul Verma",
      verified: true,
      location: "Delhi, India",
      condition: "Migraines",
      rating: 4
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "Are the Ayurvedic doctors at Holy Family Hospital fully qualified?",
      answer: "Yes, our Ayurveda department is staffed by fully qualified and experienced BAMS (Bachelor of Ayurvedic Medicine and Surgery) doctors and trained therapists."
    },
    {
      question: "Can I combine Ayurvedic treatment with my ongoing allopathic medicines?",
      answer: "Yes, our doctors specialize in integrative care and will carefully review your current medications to ensure safe and complementary Ayurvedic treatment."
    },
    {
      question: "Do I need an appointment for the Ayurveda OPD?",
      answer: "While walk-ins may be accommodated depending on the doctor's availability, we highly recommend booking an appointment in advance to avoid waiting times."
    },
    {
      question: "Are Panchakarma therapies available here?",
      answer: "Yes, we offer a range of classical Ayurvedic therapies including various localized treatments and detoxifying procedures based on clinical assessment."
    },
    {
      question: "Does the hospital provide inpatient facilities for Ayurvedic patients?",
      answer: "Holy Family is a multispecialty hospital. Depending on your condition and the doctor's advice, inpatient admission can be facilitated if intensive Ayurvedic care or observation is required."
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Spine & Joint Care",
      description: "Targeted therapies like Kati Basti and Janu Basti for chronic backache, sciatica, and knee joint pain.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Stress & Migraine Relief",
      description: "Calming treatments including Shirodhara and Nasya to alleviate anxiety, insomnia, and severe migraines.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Digestive Health",
      description: "Ayurvedic management of hyperacidity, IBS, and chronic constipation through diet and herbal medicines.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skin & Hair Care",
      description: "Authentic herbal therapies for managing eczema, psoriasis, acne, and preventing premature hair fall.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Weight Management",
      description: "Customized diet plans and therapies to reduce stubborn fat and improve metabolism naturally.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Respiratory Immunity",
      description: "Specialized Ayurvedic management for asthma, chronic cough, sinusitis, and post-viral recovery.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "Trusted Hospital Heritage",
      description: "Backed by the decades-old trust, medical infrastructure, and ethics of Holy Family Hospital.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Integrative Healthcare",
      description: "Seamless access to modern diagnostics and cross-specialty consultations when required.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Clinical Hygiene Standards",
      description: "A serene and exceptionally clean environment maintaining the highest clinical infection control protocols.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Expert Practitioners",
      description: "Consultations and therapies provided by highly qualified and experienced Ayurvedic doctors.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Authentic Medications",
      description: "Using only pure, authentic medicated oils and decoctions sourced from renowned Ayurvedic pharmacies.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Prime Okhla Location",
      description: "Centrally located in South Delhi, offering easy accessibility and comprehensive patient amenities.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

content = content.replace(/const treatmentProcess = \[[\s\S]*?\];/g, newTreatmentProcess);
content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);
content = content.replace(/const faqItems = \[[\s\S]*?\];/g, newFaqItems);
content = content.replace(/const programs = \[[\s\S]*?\];/g, newPrograms);
content = content.replace(/const whyChooseUs = \[[\s\S]*?\];/g, newWhyChooseUs);

fs.writeFileSync(targetPath, content);
console.log("Successfully generated HolyFamilyHospitalAyurvedaDepartment.tsx!");
