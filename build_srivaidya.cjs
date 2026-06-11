const fs = require('fs');
const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const targetPath = 'src/pages/centers/SriVaidyaAyurvedaPanchakarma.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Basic Name & Meta Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'SriVaidyaAyurvedaPanchakarma');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'Sri Vaidya Ayurveda Panchakarma');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Sri Vaidya Ayurveda Panchakarma');
content = content.replace(/Apollo AyurVAID/g, 'Sri Vaidya');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'Vasant Kunj, Delhi, India');
content = content.replace(/Nehru Enclave/g, 'Vasant Kunj');
content = content.replace(/4\.3/g, '4.6');
content = content.replace(/170 Reviews/g, '250+ Reviews');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/main\.jpeg/g, '/TOP cneters/delhi/Sri Vaidya Ayurveda Panchakarma/image 1.jpg');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Sri Vaidya Ayurveda Panchakarma/image 2.jpg');
content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Authentic Kerala Panchakarma & Advanced Ayurvedic Therapies');

// Apollo Doctor and Feature Replacements
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'experienced Ayurvedic physicians');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior Vaidyas');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'expert doctors');
content = content.replace(/Dr\. Deepika Gunawant/g, 'traditional healers');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'certified therapists');
content = content.replace(/Apollo Hospitals/g, 'traditional Kerala lineage');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'excellent patient outcomes');
content = content.replace(/NABH-accredited 40-bed/g, 'premium Panchakarma');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'the peaceful environment of Vasant Kunj');

// About section updates
const newAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">Sri Vaidya Ayurveda Panchakarma</strong>, a premium destination for authentic Kerala Ayurvedic treatments located in Vasant Kunj, Delhi. We specialize in classical Panchakarma detoxification therapies and holistic disease management. Our facility blends the profound ancient wisdom of Ayurveda with modern diagnostic approaches to provide effective, root-cause healing. Maintained with exceptional hygiene and a deeply relaxing ambiance, Sri Vaidya is dedicated to restoring your physical, mental, and spiritual well-being through highly personalized care.`;
content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const newAbout2 = `Our expert team of Vaidyas and certified therapists from Kerala ensure that every treatment is performed with utmost precision and authentic medicated oils. We hold a strong reputation for effectively managing chronic joint pain, arthritis, spinal issues, severe sinusitis, digestive disorders, and stress-related ailments. At Sri Vaidya, you don't just receive symptomatic relief; you embark on a comprehensive journey of profound healing and rejuvenation.`;
content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience the finest Kerala Ayurveda and Panchakarma therapies at Sri Vaidya Ayurveda Panchakarma in Vasant Kunj, Delhi. Specializing in joint care, detox, and chronic diseases.');

// Contact Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'Sri+Vaidya+Ayurveda+Panchakarma+Vasant+Kunj+Delhi');
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20Sri%20Vaidya%20Ayurveda%20Panchakarma');


// Array Replacements using Regex
const newTreatmentProcess = `const treatmentProcess = [
    {
      number: 1,
      title: "In-Depth Nadi Pariksha",
      description: "A detailed pulse diagnosis and consultation to understand your Tridosha balance (Vata, Pitta, Kapha) and root cause of ailments.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Customized Therapy Plan",
      description: "Our senior Vaidyas design a personalized treatment roadmap involving specific Kerala therapies and herbal formulations.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Preparatory Oleation & Sudation",
      description: "Preparing the body using warm medicated oils (Snehana) and herbal steam (Swedana) to loosen deep-seated toxins.",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Core Panchakarma Detox",
      description: "Administering specialized cleansing therapies like Basti, Nasya, or Virechana to expel toxins from the cellular level.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Rejuvenation (Rasayana)",
      description: "Post-detox therapies to nourish the tissues, strengthen immunity, and restore radiant vitality using potent herbal compounds.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Diet & Lifestyle Counseling",
      description: "Providing a personalized Ayurvedic diet chart and daily routine guidelines to sustain long-term health and prevent recurrence.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];`;

const newTestimonials = `const testimonials = [
    {
      title: "Remarkable Relief from Knee Pain",
      review: "The doctors at Sri Vaidya are very knowledgeable. I had severe knee pain and osteoarthritis. The authentic Kerala Janu Basti and massage therapies provided me immense relief. The staff is highly cooperative.",
      name: "Sanjay Kumar",
      verified: true,
      location: "New Delhi, India",
      condition: "Knee Pain & Arthritis",
      rating: 5
    },
    {
      title: "Best Panchakarma Experience",
      review: "I underwent a complete 14-day Panchakarma detox here. The hygiene, the quality of oils used, and the professionalism of the therapists are outstanding. I feel completely rejuvenated and lighter.",
      name: "Meera Reddy",
      verified: true,
      location: "Delhi, India",
      condition: "Panchakarma Detox",
      rating: 5
    },
    {
      title: "Excellent Sinusitis Treatment",
      review: "Suffering from chronic sinusitis for years, I tried many treatments with no luck. The Nasya therapy at Sri Vaidya worked like magic. The ambiance of the clinic is very soothing and peaceful.",
      name: "Amit Sharma",
      verified: true,
      location: "Vasant Kunj, India",
      condition: "Chronic Sinusitis",
      rating: 4
    },
    {
      title: "Cured My Chronic Back Pain",
      review: "The Kati Basti treatment here is very authentic. The therapists are well-trained from Kerala. My back pain has significantly reduced after just a few sessions. Highly recommend this center.",
      name: "Pooja Singh",
      verified: true,
      location: "Gurugram, India",
      condition: "Lower Back Pain",
      rating: 5
    },
    {
      title: "Great for Digestive Issues",
      review: "I visited for chronic acidity and digestion problems. The Vaidya took time to explain the root cause and gave dietary changes along with Ayurvedic medicines. It has been very effective so far.",
      name: "Rahul Verma",
      verified: true,
      location: "Delhi, India",
      condition: "Digestive Disorders",
      rating: 4
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "Are the therapists at Sri Vaidya trained in authentic Kerala Ayurveda?",
      answer: "Yes, our therapists are highly trained professionals directly from Kerala, ensuring that all massages and Panchakarma therapies strictly follow authentic traditional protocols."
    },
    {
      question: "Do you offer complete Panchakarma detox programs?",
      answer: "Absolutely. We offer comprehensive, customized Panchakarma programs lasting 7, 14, or 21 days depending on your medical condition and the doctor's assessment."
    },
    {
      question: "Do I need to book an appointment before visiting?",
      answer: "Yes, we highly recommend booking an appointment in advance so our Vaidyas can dedicate sufficient time for your detailed Nadi Pariksha and consultation."
    },
    {
      question: "Is the center equipped with inpatient (admission) facilities?",
      answer: "Sri Vaidya primarily operates as a premium day-care and therapy center. However, we do assist outstation patients with organizing stays nearby for longer treatment courses."
    },
    {
      question: "What types of oils and medicines are used?",
      answer: "We use only premium, authentic Ayurvedic oils and herbal formulations sourced from trusted traditional pharmacies to ensure the highest efficacy of our treatments."
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Kerala Panchakarma Detox",
      description: "Comprehensive bodily purification therapies to eliminate deep-seated toxins and balance the Tridoshas.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Spine & Joint Care (Meru Chikitsa)",
      description: "Targeted therapies like Kati Basti and Janu Basti for chronic backache, sciatica, and knee joint pain.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Stress & Migraine Relief",
      description: "Calming treatments including Shirodhara and Nasya to alleviate anxiety, insomnia, and severe migraines.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skin & Hair Care",
      description: "Authentic herbal therapies for managing eczema, psoriasis, acne, and preventing premature hair fall.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Weight Management",
      description: "Udwarthanam (herbal powder massage) and customized diet plans to reduce stubborn fat and improve metabolism.",
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
      title: "Authentic Kerala Lineage",
      description: "Treatments and therapies strictly following the classical Kerala Ayurveda traditions and texts.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Expert Kerala Therapists",
      description: "Highly skilled, trained, and certified therapists providing exact and effective therapeutic massages.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Premium & Hygienic Facility",
      description: "A serene, exceptionally clean, and relaxing environment designed to accelerate your healing process.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Personalized Care Plans",
      description: "Every treatment is customized based on individual Prakriti (body constitution) and Vikriti (disease state).",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "High-Quality Herbal Oils",
      description: "Using only pure, authentic medicated oils and decoctions sourced from renowned Ayurvedic pharmacies.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Prime Vasant Kunj Location",
      description: "Easily accessible and situated in a peaceful area of South Delhi, providing a perfect urban retreat.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

content = content.replace(/const treatmentProcess = \[[\s\S]*?\];/g, newTreatmentProcess);
content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);
content = content.replace(/const faqItems = \[[\s\S]*?\];/g, newFaqItems);
content = content.replace(/const programs = \[[\s\S]*?\];/g, newPrograms);
content = content.replace(/const whyChooseUs = \[[\s\S]*?\];/g, newWhyChooseUs);

fs.writeFileSync(targetPath, content);
console.log("Successfully generated SriVaidyaAyurvedaPanchakarma.tsx!");
