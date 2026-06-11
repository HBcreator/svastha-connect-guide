const fs = require('fs');
const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const targetPath = 'src/pages/centers/KeralaAyurvedaWellnessClinicEastofKailash.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Basic Name & Meta Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'KeralaAyurvedaWellnessClinicEastofKailash');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'Kerala Ayurveda Wellness Clinic');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Kerala Ayurveda Wellness Clinic');
content = content.replace(/Apollo AyurVAID/g, 'Kerala Ayurveda');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'East of Kailash, New Delhi, India');
content = content.replace(/Nehru Enclave/g, 'East of Kailash');
content = content.replace(/4\.3/g, '4.8');
content = content.replace(/170 Reviews/g, '200+ Reviews');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/main\.jpeg/g, '/TOP cneters/delhi/Kerala Ayurveda Wellness Clinic – East of Kailash/image 1.webp');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Kerala Ayurveda Wellness Clinic – East of Kailash/image 2.webp');
content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Authentic Kerala Panchakarma & Holistic Wellness Therapies');

// Apollo Doctor and Feature Replacements
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'experienced Ayurvedic doctors');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior physicians');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'expert therapists');
content = content.replace(/Dr\. Deepika Gunawant/g, 'traditional healers');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'wellness consultants');
content = content.replace(/Apollo Hospitals/g, 'Kerala Ayurveda Ltd');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'decades of traditional healing expertise');
content = content.replace(/NABH-accredited 40-bed/g, 'premium Ayurvedic');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'the heart of East of Kailash');

// About section updates
const newAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">Kerala Ayurveda Wellness Clinic</strong>, a serene sanctuary for holistic healing located in East of Kailash, New Delhi. Backed by the rich legacy of Kerala Ayurveda Limited, our clinic offers profound traditional healing therapies that address the root cause of ailments. We specialize in classical Panchakarma detoxification, stress management, and chronic disease management. Maintaining exceptionally high standards of hygiene and authentic protocols, we bring the true essence of Kerala's ancient Ayurvedic wisdom right to the capital city.`;
content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const newAbout2 = `Our expert team of Vaidyas and certified therapists from Kerala ensure that every treatment—from rejuvenating Abhyangam to precise Nadi Pariksha (pulse diagnosis)—is performed with utmost precision using proprietary herbal formulations. We hold a strong reputation for effectively managing chronic joint pain, arthritis, respiratory issues, and modern lifestyle disorders. At Kerala Ayurveda Wellness Clinic, you don't just receive symptomatic relief; you embark on a comprehensive, tailor-made journey of profound healing and rejuvenation.`;
content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience authentic Kerala Ayurveda and Panchakarma therapies at the Kerala Ayurveda Wellness Clinic in East of Kailash, New Delhi. Specializing in joint care, detox, and chronic diseases.');

// Contact Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'Kerala+Ayurveda+Wellness+Clinic+East+of+Kailash+Delhi');
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20Kerala%20Ayurveda%20Wellness%20Clinic');

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
      title: "Excellent Relief from Joint Pain",
      review: "The doctors at Kerala Ayurveda are very knowledgeable. I had severe knee pain and osteoarthritis. The authentic Kerala Janu Basti and massage therapies provided me immense relief.",
      name: "Sanjay Kumar",
      verified: true,
      location: "New Delhi, India",
      condition: "Knee Pain & Arthritis",
      rating: 5
    },
    {
      title: "Best Panchakarma Experience",
      review: "I underwent a complete Panchakarma detox here. The hygiene, the quality of oils used, and the professionalism of the therapists are outstanding. I feel completely rejuvenated.",
      name: "Meera Reddy",
      verified: true,
      location: "Delhi, India",
      condition: "Panchakarma Detox",
      rating: 5
    },
    {
      title: "Great for Stress Relief",
      review: "Suffering from chronic stress and insomnia, I tried many treatments. The Shirodhara therapy worked like magic. The ambiance of the clinic is very soothing.",
      name: "Amit Sharma",
      verified: true,
      location: "East of Kailash, India",
      condition: "Stress & Insomnia",
      rating: 4
    },
    {
      title: "Cured My Chronic Back Pain",
      review: "The Kati Basti treatment here is very authentic. The therapists are well-trained from Kerala. My back pain has significantly reduced after just a few sessions.",
      name: "Pooja Singh",
      verified: true,
      location: "Noida, India",
      condition: "Lower Back Pain",
      rating: 5
    },
    {
      title: "Effective for Digestion",
      review: "I visited for chronic acidity problems. The Vaidya took time to explain the root cause and gave dietary changes along with medicines. It has been very effective.",
      name: "Rahul Verma",
      verified: true,
      location: "Delhi, India",
      condition: "Digestive Disorders",
      rating: 5
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "Are the therapists at the clinic trained in authentic Kerala Ayurveda?",
      answer: "Yes, our therapists are highly trained professionals directly from Kerala, ensuring that all massages and Panchakarma therapies strictly follow authentic traditional protocols."
    },
    {
      question: "Do you offer complete Panchakarma detox programs?",
      answer: "Absolutely. We offer comprehensive, customized Panchakarma programs tailored to your specific medical condition and the doctor's assessment."
    },
    {
      question: "Do I need to book an appointment before visiting?",
      answer: "Yes, we highly recommend booking an appointment in advance so our Vaidyas can dedicate sufficient time for your detailed Nadi Pariksha and consultation."
    },
    {
      question: "Is the center equipped with inpatient (admission) facilities?",
      answer: "This center primarily operates as a premium day-care and therapy clinic. For extensive inpatient care, our doctors will advise you accordingly."
    },
    {
      question: "What types of oils and medicines are used?",
      answer: "We use only premium, authentic Ayurvedic oils and herbal formulations manufactured by Kerala Ayurveda Limited to ensure the highest efficacy."
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Kerala Panchakarma Detox",
      description: "Comprehensive bodily purification therapies to eliminate deep-seated toxins and balance the Tridoshas.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
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
      title: "Kerala Ayurveda Legacy",
      description: "Backed by the decades-old heritage and expertise of Kerala Ayurveda Limited.",
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
      title: "Proprietary Herbal Oils",
      description: "Using only pure, authentic medicated oils and decoctions sourced from our own renowned pharmacies.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Prime East of Kailash Location",
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
console.log("Successfully generated KeralaAyurvedaWellnessClinicEastofKailash.tsx!");
