const fs = require('fs');
let content = fs.readFileSync('src/pages/centers/AllIndiaInstituteOfAyurveda.tsx', 'utf8');

const programsStr = `  const programs = [
    {
      title: "Advanced Panchakarma Therapy",
      description: "Classical detoxification therapies (Vamana, Virechana, Vasti, Nasya, Raktamokshana) under expert observation.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Neurological & Stroke Management",
      description: "Integrative care for neurodegenerative diseases, stroke rehabilitation, and spinal cord disorders.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Musculoskeletal & Joint Care",
      description: "Evidence-based Ayurvedic protocols for osteoarthritis, rheumatoid arthritis, gout, and cervical spondylosis.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Metabolic Disorders & Diabetology",
      description: "Specialized clinics for managing diabetes (Madhumeha), thyroid issues, and obesity through holistic lifestyle and herbal support.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Women's Health (Prasuti & Stri Roga)",
      description: "Comprehensive care for PCOS, menstrual disorders, antenatal, and postnatal wellness.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Balroga (Pediatrics)",
      description: "Ayurvedic pediatric care, focusing on immunity, developmental milestones, and childhood respiratory disorders.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];`;

const whyChooseUsStr = `  const whyChooseUs = [
    {
      title: "Government Apex Institute",
      description: "Operating under the Ministry of AYUSH, ensuring the highest standards of authentic Ayurvedic care and research.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "200-Bed Tertiary Care",
      description: "A world-class facility equipped with modern diagnostics, an ICU, and comprehensive classical therapy rooms.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Eminent Medical Faculty",
      description: "Treatment guided by top-tier Ayurvedic academicians, researchers, and specialized senior doctors.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Integrative Medicine Approach",
      description: "A unique blend of ancient Vedic wisdom combined with advanced clinical and diagnostic technologies.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "NABH Accredited & ISO Certified",
      description: "Upholding global standards of safety, quality, and hygiene in clinical Ayurveda.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Affordable & Accessible",
      description: "Providing top-notch healthcare that is cost-effective, with seamless connectivity in South Delhi.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

const testimonialsStr = `  const testimonials = [
    {
      title: "Incredible Recovery from Arthritis",
      review: "The treatment protocols at AIIA are exceptional. The doctors were very thorough, and the Panchakarma therapies gave me immense relief from joint pain.",
      name: "Priya Sharma",
      verified: true,
      location: "New Delhi, India",
      condition: "Osteoarthritis",
      rating: 5
    },
    {
      title: "Professional and Caring Staff",
      review: "I visited for severe migraines and stress. The integrative approach and Shirodhara sessions here completely changed my life. Highly recommended.",
      name: "Rahul Verma",
      verified: true,
      location: "Noida, UP",
      condition: "Migraine & Stress",
      rating: 5
    },
    {
      title: "Best Place for Stroke Rehab",
      review: "Brought my uncle here after a stroke. The dedication of the physiotherapists and Ayurvedic doctors helped him regain mobility faster than we expected.",
      name: "Amit Gupta",
      verified: true,
      location: "Delhi, India",
      condition: "Stroke Rehabilitation",
      rating: 5
    },
    {
      title: "Excellent Diabetes Management",
      review: "The holistic lifestyle advice and Ayurvedic medicines prescribed at the Madhumeha clinic helped me stabilize my blood sugar levels naturally.",
      name: "Sunita Agarwal",
      verified: true,
      location: "Gurugram, Haryana",
      condition: "Diabetes",
      rating: 4
    },
    {
      title: "World-Class Ayurvedic Facility",
      review: "You don't feel like you are in a traditional clinic; the hygiene, modern diagnostics, and organized structure rival top private hospitals.",
      name: "Dr. Rajiv Menon",
      verified: true,
      location: "Chennai, India",
      condition: "Panchakarma Detox",
      rating: 5
    }
  ];`;

const faqItemsStr = `  const faqItems = [
    {
      question: "Is AIIA a government hospital?",
      answer: "Yes, All India Institute of Ayurveda (AIIA) is an apex institute operating under the Ministry of AYUSH, Government of India."
    },
    {
      question: "What are the OPD timings?",
      answer: "The OPD generally operates from Monday to Saturday between 8:30 AM and 1:00 PM. It is highly recommended to book an appointment via the online portal or arrive early."
    },
    {
      question: "Are modern diagnostic facilities available?",
      answer: "Yes, AIIA is a unique hospital that integrates Ayurvedic treatments with modern diagnostic tools including pathology labs, X-ray, and ultrasound."
    },
    {
      question: "Do they provide in-patient Panchakarma treatments?",
      answer: "Yes, AIIA has a dedicated 200-bed facility with specialized wards and fully equipped Panchakarma theaters for extensive therapies."
    },
    {
      question: "How do I reach the hospital via Metro?",
      answer: "The closest metro station is Sarita Vihar on the Violet Line, which is approximately 1.2 km away from the institute."
    }
  ];`;

// Replace arrays
content = content.replace(/const programs = \[.*?\];/s, programsStr);
content = content.replace(/const whyChooseUs = \[.*?\];/s, whyChooseUsStr);
content = content.replace(/const testimonials = \[.*?\];/s, testimonialsStr);
content = content.replace(/const faqItems = \[.*?\];/s, faqItemsStr);

fs.writeFileSync('src/pages/centers/AllIndiaInstituteOfAyurveda.tsx', content);
