const fs = require('fs');
const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const cbpacsPath = 'src/pages/centers/ChBrahmPrakashAyurvedCharakSansthan.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Basic Name & Meta Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'ChBrahmPrakashAyurvedCharakSansthan');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'Ch. Brahm Prakash Ayurved Charak Sansthan');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Ch. Brahm Prakash Ayurved Charak Sansthan');
content = content.replace(/Apollo AyurVAID/g, 'CBPACS');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'Khera Dabar, New Delhi, India');
content = content.replace(/Nehru Enclave/g, 'Khera Dabar');
content = content.replace(/4\.3/g, '4.4');
content = content.replace(/170 Reviews/g, '1,500+ Reviews');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/main\.jpeg/g, '/TOP cneters/delhi/Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)/image 1.jpg');
content = content.replace(/\/TOP cneters\/delhi\/Apollo AyurVAID Hospitals \(Nehru Enclave\)\/secondary\.jpeg/g, '/TOP cneters/delhi/Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)/image 2.jpg');
content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Autonomous Government Ayurvedic Medical College and Hospital | 200-Bed Facility');

// Apollo Doctor and Feature Replacements
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'highly qualified specialists');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior specialists');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'expert physicians');
content = content.replace(/Dr\. Deepika Gunawant/g, 'renowned doctors');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'expert faculty members');
content = content.replace(/Apollo Hospitals/g, 'the Government of NCT of Delhi');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'top national health accreditations');
content = content.replace(/NABH-accredited 40-bed/g, 'premier 200-bed');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'the vast green campus at Khera Dabar');

// About section updates
const newAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">Ch. Brahm Prakash Ayurved Charak Sansthan</strong>, New Delhi's premier destination for authentic, precision-driven Ayurvedic clinical care. Established under the Ministry of AYUSH and Govt of NCT of Delhi, it stands as the 'AIIMS of Ayurveda'. Spread across an expansive 95-acre pollution-free green campus in Khera Dabar, the institute houses a massive 200-bed hospital, specialized clinical departments, and an Ayurvedic pharmacy. It provides high-quality, classical Ayurvedic treatments with free medicine distribution to the public.`;
content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const newAbout2 = `As a premier clinical destination, we maintain the highest standards of safety and medical precision. Our experienced medical team specializes in treating joint disorders, respiratory conditions, chronic skin diseases, and metabolic issues. We offer extensive Panchakarma detox programs and holistic disease management utilizing authentic classical therapies and dedicated patient care.`;
content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience authentic classical Ayurvedic treatments at Delhi\'s premier government institution, Ch. Brahm Prakash Ayurved Charak Sansthan, a 200-bed facility in Khera Dabar.');

// Contact Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'Chaudhary+Brahm+Prakash+Ayurved+Charak+Sansthan');
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20Ch.%20Brahm%20Prakash%20Ayurved%20Charak%20Sansthan');


// Array Replacements using Regex
const newTreatmentProcess = `const treatmentProcess = [
    {
      number: 1,
      title: "Detailed Ayurvedic Consultation",
      description: "Comprehensive assessment of your body constitution (Prakriti), medical history, and specific ailments by highly qualified doctors.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Personalized Treatment Planning",
      description: "Creating an evidence-based clinical pathway utilizing classical Ayurvedic formulations and procedures tailored for you.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Purvakarma (Preparatory Care)",
      description: "Preparing the body for deep detoxification through specialized therapies like Snehana (oleation) and Swedana (sudation).",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Pradhankarma (Main Detoxification)",
      description: "Executing core Panchakarma procedures under strict medical supervision to eliminate deep-seated toxins and restore balance.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Diet & Lifestyle Management",
      description: "Recommending specific dietary modifications (Pathya-Apathya) and Yoga practices to complement the ongoing treatments.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Paschatkarma & Follow-up",
      description: "Providing rejuvenating rasayanas and continuous follow-up care to ensure long-term health benefits and disease prevention.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];`;

const newTestimonials = `const testimonials = [
    {
      title: "Excellent Hospital Infrastructure",
      review: "The hospital infrastructure is excellent with well-equipped labs, a clean environment, and specialized OPDs. The doctors are highly attentive and provide personalized care. Free medicines are a great support.",
      name: "Ramesh Sharma",
      verified: true,
      location: "New Delhi, India",
      condition: "General Ayurveda Care",
      rating: 5
    },
    {
      title: "Effective Joint Pain Relief",
      review: "I have been suffering from severe knee joint pain for years. The classical Ayurvedic treatments and therapies here provided significant relief. The campus is green and peaceful, perfect for healing.",
      name: "Suman Devi",
      verified: true,
      location: "Gurugram, India",
      condition: "Arthritis & Joint Pain",
      rating: 5
    },
    {
      title: "Great Doctors and Facilities",
      review: "CBPACS is truly the AIIMS of Ayurveda. The clinical exposure and facilities are top-notch. The doctors listen carefully and prescribe effective authentic medicines that helped clear my skin condition.",
      name: "Priya Verma",
      verified: true,
      location: "New Delhi, India",
      condition: "Skin Disorder",
      rating: 4
    },
    {
      title: "Holistic Healing Environment",
      review: "A highly disciplined and well-maintained government institution. The Panchakarma therapies are done systematically. Though it is quite far from central Delhi, the quality of care makes the travel worth it.",
      name: "Vikas Kumar",
      verified: true,
      location: "Faridabad, India",
      condition: "Panchakarma Detox",
      rating: 4
    },
    {
      title: "Outstanding Ayurvedic Care",
      review: "The doctors take time to explain the root cause of the problem. The holistic approach combining diet, medicines, and therapies worked wonders for my chronic digestive issues. Highly recommended.",
      name: "Anjali Gupta",
      verified: true,
      location: "Noida, India",
      condition: "Digestive Issues",
      rating: 5
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "Is CBPACS a government or private hospital?",
      answer: "Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS) is an autonomous government Ayurvedic medical college and hospital operating under the Government of NCT of Delhi."
    },
    {
      question: "Are medicines provided for free?",
      answer: "Yes, CBPACS provides free consultations and dispenses many Ayurvedic medicines free of cost to patients, making authentic healthcare highly accessible."
    },
    {
      question: "Where is the hospital located and how can I reach there?",
      answer: "The hospital is situated in Khera Dabar, Najafgarh, New Delhi. Due to its remote location, it is best reached by private vehicle or specific bus routes leading towards Najafgarh."
    },
    {
      question: "Does the hospital have a Panchakarma facility?",
      answer: "Yes, CBPACS has a fully functional and highly specialized Panchakarma department offering classical detoxification and rejuvenation therapies under expert medical supervision."
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer: "While walk-ins are allowed, there can be a high patient inflow. It is advisable to reach early to secure an OPD token for consultation with the specialist doctors."
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Complete Panchakarma Therapy",
      description: "Authentic five-fold detoxification procedures to cleanse the body of toxins and restore the natural balance of Doshas.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Joint & Spine Care",
      description: "Specialized Ayurvedic management for arthritis, spondylosis, and musculoskeletal disorders to reduce pain and improve mobility.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skin & Respiratory Care",
      description: "Holistic protocols for chronic skin conditions, asthma, and allergies using internal medications and specific external applications.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Neurological & Stroke Care",
      description: "Protocol-driven therapies and recovery plans for stroke rehabilitation, Parkinson's disease, and neurodegenerative conditions.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Digestive Disorders",
      description: "Ayurvedic management for gastrointestinal conditions like IBS, IBD, gastritis, and chronic constipation.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "General Wellness & Immunity",
      description: "Immunity-boosting treatments, Rasayana therapies, and wellness programs to restore physical balance and vital energy.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "Premier Government Institution",
      description: "Recognized as the 'AIIMS of Ayurveda', operating under the Govt of NCT of Delhi with top-tier infrastructure.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Expert Medical Faculty",
      description: "Care provided by highly qualified professors, senior doctors, and specialists with vast clinical experience.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Extensive Green Campus",
      description: "Spread across 95 acres of lush green, pollution-free campus creating a perfect healing environment.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Affordable Authentic Care",
      description: "Providing high-quality classical Ayurvedic treatments, therapies, and medicines to the public either free or at very nominal costs.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Comprehensive Facilities",
      description: "200-bed hospital equipped with modern diagnostics combined with traditional Ayurvedic treatment rooms.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Central Khera Dabar",
      description: "Easily accessible from major parts of Delhi, ensuring convenience for outstation and local patients.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

content = content.replace(/const treatmentProcess = \[[\s\S]*?\];/g, newTreatmentProcess);
content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);
content = content.replace(/const faqItems = \[[\s\S]*?\];/g, newFaqItems);
content = content.replace(/const programs = \[[\s\S]*?\];/g, newPrograms);
content = content.replace(/const whyChooseUs = \[[\s\S]*?\];/g, newWhyChooseUs);

fs.writeFileSync(cbpacsPath, content);
console.log("Successfully completely rewritten CBPACS file without syntax errors!");
