const fs = require('fs');
const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const targetPath = 'src/pages/centers/SriSriTattvaPanchakarmaCentre.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Basic Name & Meta Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'SriSriTattvaPanchakarmaCentre');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'Sri Sri Tattva Panchakarma Centre');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Sri Sri Tattva Centre');
content = content.replace(/Apollo AyurVAID/g, 'Sri Sri Tattva');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'Dwarka Sector 19, New Delhi, India');
content = content.replace(/Nehru Enclave/g, 'Dwarka Sector 19');
content = content.replace(/4\.3/g, '4.6');
content = content.replace(/170 Reviews/g, '250+ Reviews');

// Fix image replacements
content = content.replace(/src="[^"]*main\.jpeg"/g, 'src="/TOP cneters/delhi/Sri Sri Tattva Panchakarma Centre – Delhi/image 1.jpg"');
content = content.replace(/src="[^"]*secondary\.jpeg"/g, 'src="/TOP cneters/delhi/Sri Sri Tattva Panchakarma Centre – Delhi/image 2.webp"');

content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Holistic Ayurveda, Nadi Pariksha & Authentic Wellness Therapies');

// Apollo Doctor and Feature Replacements
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'highly trained Nadi Pariksha experts');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior Ayurvedic Vaidyas');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'wellness consultants');
content = content.replace(/Dr\. Deepika Gunawant/g, 'holistic healers');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'skilled therapists');
content = content.replace(/Apollo Hospitals/g, 'the renowned Art of Living philosophy');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'excellence in holistic lifestyle and natural healing');
content = content.replace(/NABH-accredited 40-bed/g, 'serene and deeply spiritual');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'Pocket 3, Sector 19, Dwarka');

// About section updates
const newAbout = `Welcome to the <strong className="font-bold text-[#2C4E5A]">Sri Sri Tattva Panchakarma Centre</strong>, a sanctuary of holistic wellness located in Dwarka Sector 19, New Delhi. Inspired by the profound vision of Gurudev Sri Sri Ravi Shankar, our center brings the ancient, time-tested science of Ayurveda to modern urban life. We specialize in Nadi Pariksha (Ayurvedic pulse diagnosis), a non-invasive technique that accurately assesses the physical, mental, and emotional imbalances in your body. Our environment is designed to be deeply calming, integrating the physical therapies of Ayurveda with the spiritual essence of meditation and breathwork.`;
content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const newAbout2 = `Our expert Vaidyas and skilled therapists use premium Sri Sri Tattva herbal formulations, crafted under stringent quality standards. We offer highly customized Panchakarma detox programs, stress management therapies, and immune-boosting protocols tailored to your unique Prakriti (body constitution). At Sri Sri Tattva, healing is not just about alleviating symptoms; it is about restoring harmony between the mind, body, and spirit, empowering you to live a vibrant, joyful, and disease-free life.`;
content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience holistic wellness, Nadi Pariksha, and authentic Panchakarma at Sri Sri Tattva Panchakarma Centre in Dwarka Sector 19, New Delhi.');

// Contact Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'Sri+Sri+Ayurveda+Clinic+Dwarka+Sector+19+New+Delhi');
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20Sri%20Sri%20Tattva%20Panchakarma%20Centre');
content = content.replace('R2, Outer Ring Road, Pocket 40/203, Dwarka Sector 19', 'Flat No. 169, Akshardham Apartment, Pocket 3, Sector 19, Dwarka');
// For map iframe explicitly (in case previous replace missed)
content = content.replace(/q=[^&]+&t=/g, 'q=Sri+Sri+Ayurveda+Clinic+Dwarka+Sector+19+New+Delhi&t=');

// Array Replacements
const newTreatmentProcess = `const treatmentProcess = [
    {
      number: 1,
      title: "Nadi Pariksha Consultation",
      description: "An ancient, non-invasive pulse diagnosis technique by our expert Vaidyas to accurately assess your physical and mental doshic imbalances.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Holistic Health Plan",
      description: "Designing a comprehensive roadmap that integrates personalized Ayurvedic therapies, herbal supplements, and dietary guidelines.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Premium Herbal Support",
      description: "Utilizing highly pure, laboratory-tested Sri Sri Tattva herbal formulations specifically prescribed for your unique constitution.",
      icon: <Heart className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Authentic Therapies",
      description: "Experiencing deeply relaxing and detoxifying treatments like Shirodhara and Abhyangam, performed by specially trained therapists.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Mind-Body Integration",
      description: "Complementing physical treatments with guidance on breathwork (Pranayama) and meditation for accelerated holistic healing.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Sustained Balance",
      description: "Receiving continuous support and lifestyle modifications to maintain the harmony of your mind, body, and spirit post-treatment.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];`;

const newTestimonials = `const testimonials = [
    {
      title: "Profoundly Spiritual Experience",
      review: "The Nadi Pariksha consultation was incredibly accurate; the doctor diagnosed my chronic stress and digestive issues just by checking my pulse. The subsequent Shirodhara and meditation sessions brought a level of mental clarity and deep peace that I haven't felt in years. The entire atmosphere is infused with positivity.",
      name: "Michael Peterson",
      verified: true,
      location: "Toronto, Canada",
      condition: "Chronic Stress",
      rating: 5
    },
    {
      title: "Excellent Detoxification",
      review: "I visited the center for a full Panchakarma detox program. The therapists were exceptional, maintaining high standards of hygiene and care. The Sri Sri Tattva herbal supplements provided alongside the physical therapies drastically improved my metabolism and cleared up my skin within weeks.",
      name: "Sophie Laurent",
      verified: true,
      location: "Paris, France",
      condition: "Metabolic Issues",
      rating: 5
    },
    {
      title: "Relief from Joint Pain",
      review: "The holistic approach here is what makes the difference. I came in for severe knee pain. The specialized Kati and Janu Basti therapies, combined with their specific dietary advice, reduced the inflammation significantly. They don't just treat the pain, they teach you how to prevent it from returning.",
      name: "David Chen",
      verified: true,
      location: "Singapore",
      condition: "Joint Inflammation",
      rating: 4
    },
    {
      title: "Authentic and Calming",
      review: "From the moment you walk in, the aroma and the serene chants immediately relax your nervous system. I underwent an Abhyangam massage to relieve muscle stiffness from frequent traveling. The oil quality is premium, and the therapists are very attentive to your specific pressure preferences.",
      name: "Elena Rossi",
      verified: true,
      location: "Milan, Italy",
      condition: "Muscle Stiffness",
      rating: 5
    },
    {
      title: "A True Healing Sanctuary",
      review: "What impressed me most was the integration of Ayurveda with mental wellness. The Vaidya took time to explain how my anxiety was linked to my gut health. The personalized treatment plan involving diet changes, herbs, and Marma therapy completely restored my sleep cycle and digestion.",
      name: "Johnathan Brooks",
      verified: true,
      location: "Melbourne, Australia",
      condition: "Anxiety & Insomnia",
      rating: 5
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "What is Nadi Pariksha and how does it help?",
      answer: "Nadi Pariksha is an ancient Ayurvedic technique of pulse diagnosis. By placing fingers on your wrist, our expert Vaidyas can accurately read the vibrational frequencies of your doshas, identifying both physical and mental root causes of diseases even before symptoms manifest."
    },
    {
      question: "Are the herbal medicines safe and certified?",
      answer: "Yes, all our treatments use authentic Sri Sri Tattva herbal formulations, which are manufactured in world-class facilities maintaining strict GMP and ISO certifications to ensure absolute purity and safety."
    },
    {
      question: "Do I need to be a follower of the Art of Living to get treated?",
      answer: "Not at all. Sri Sri Tattva Panchakarma Centre is a purely medical and wellness facility open to everyone, regardless of their background or beliefs, who seeks genuine Ayurvedic healing."
    },
    {
      question: "How long does a typical Panchakarma therapy take?",
      answer: "A single relaxing therapy like Abhyangam takes about 60 to 90 minutes. However, a comprehensive clinical Panchakarma detox program can last anywhere from 7 to 21 days depending on your medical condition and the Vaidya's prescription."
    },
    {
      question: "Can Ayurveda help with chronic mental stress?",
      answer: "Absolutely. Ayurveda views the mind and body as deeply connected. Therapies like Shirodhara and Marma chikitsa, combined with our lifestyle advice on breathwork, are highly effective in treating stress, anxiety, and insomnia."
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Nadi Pariksha & Consultation",
      description: "Comprehensive pulse diagnosis to detect root imbalances and create a personalized wellness roadmap.",
      icon: <FileSearch className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Stress & Anxiety Relief",
      description: "Deeply calming therapies like Shirodhara designed to pacify the nervous system and restore mental peace.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Panchakarma Detox",
      description: "Systematic purification therapies to eliminate deep-seated toxins and rejuvenate cellular health.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Pain Management",
      description: "Targeted localized treatments using warm medicated oils for arthritis, backache, and muscle stiffness.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skin & Hair Care",
      description: "Holistic beauty therapies using pure, natural Sri Sri Tattva products for glowing skin and healthy hair.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Immunity Enhancement",
      description: "Specialized Rasayana protocols and diet plans focused on boosting natural resistance against illnesses.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "Expert Nadi Pariksha",
      description: "Highly accurate, non-invasive pulse diagnosis by specially trained and experienced Vaidyas.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Premium Products",
      description: "Exclusive use of high-quality, lab-tested Sri Sri Tattva herbal oils and supplements.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Holistic Philosophy",
      description: "Integrating physical Ayurvedic treatments with guidance on mental wellness and breathwork.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Hygienic Environment",
      description: "A serene, clean, and spiritually uplifting atmosphere that accelerates the healing process.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skilled Therapists",
      description: "Professional therapists trained extensively in traditional Kerala and classical Ayurvedic techniques.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Accessible Location",
      description: "Conveniently located in Dwarka, making authentic Ayurvedic wellness accessible in the capital.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

content = content.replace(/const treatmentProcess = \[[\s\S]*?\];/g, newTreatmentProcess);
content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);
content = content.replace(/const faqItems = \[[\s\S]*?\];/g, newFaqItems);
content = content.replace(/const programs = \[[\s\S]*?\];/g, newPrograms);
content = content.replace(/const whyChooseUs = \[[\s\S]*?\];/g, newWhyChooseUs);

// Fix distance text
content = content.replace(
    /Approx\. \d+ meters from [^<]+/,
    'Approx. 1 km from Dwarka Sector 12 Metro Station (Blue Line)'
);

fs.writeFileSync(targetPath, content);
console.log("Successfully generated SriSriTattvaPanchakarmaCentre.tsx!");
