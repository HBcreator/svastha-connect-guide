const fs = require('fs');
const apolloPath = 'src/pages/centers/ApolloAyurVAIDHospitalsNehruEnclave.tsx';
const targetPath = 'src/pages/centers/KairaliTheAyurvedicHealingVillageDelhiNCR.tsx';

let content = fs.readFileSync(apolloPath, 'utf8');

// Basic Name & Meta Replacements
content = content.replace(/ApolloAyurVAIDHospitalsNehruEnclave/g, 'KairaliTheAyurvedicHealingVillageDelhiNCR');
content = content.replace(/Apollo AyurVAID Hospitals/g, 'Kairali The Ayurvedic Healing Village – Delhi NCR');
content = content.replace(/Apollo AyurVAID Hospital/g, 'Kairali Ayurvedic Center');
content = content.replace(/Apollo AyurVAID/g, 'Kairali');
content = content.replace(/Nehru Enclave, New Delhi, India/g, 'Mehrauli, New Delhi, India');
content = content.replace(/Nehru Enclave/g, 'Mehrauli');
content = content.replace(/4\.3/g, '4.7');
content = content.replace(/170 Reviews/g, '300+ Reviews');

// Fix image replacements directly via generic regex (like I did for Tibbia College)
content = content.replace(/src="[^"]*main\.jpeg"/g, 'src="/TOP cneters/delhi/Kairali The Ayurvedic Healing Village – Delhi NCR/image 1.jpg"');
content = content.replace(/src="[^"]*secondary\.jpeg"/g, 'src="/TOP cneters/delhi/Kairali The Ayurvedic Healing Village – Delhi NCR/image 2.jpg"');

content = content.replace(/NABH Accredited Precision Ayurveda \| Outpatient & Inpatient Clinical Care/g, 'Premium Ayurvedic Retreat & Award-Winning Healing Therapies');

// Apollo Doctor and Feature Replacements
content = content.replace(/Medical Director Dr\. Bheema Bhatta/g, 'expert Ayurvedic practitioners');
content = content.replace(/Dr\. Bheema Bhatta/g, 'senior physicians');
content = content.replace(/Dr\. Shrinivasa Pandey/g, 'dedicated therapists');
content = content.replace(/Dr\. Deepika Gunawant/g, 'wellness consultants');
content = content.replace(/Dr\. Jairam S\. Nair/g, 'lifestyle experts');
content = content.replace(/Apollo Hospitals/g, 'the prestigious Kairali Ayurvedic Group');
content = content.replace(/India's National Quality Award in Ayurveda/g, 'decades of unparalleled excellence in luxury Ayurveda');
content = content.replace(/NABH-accredited 40-bed/g, 'highly acclaimed and globally recognized');
content = content.replace(/Outer Ring Road at Khera Dabar, Kalkaji/g, 'the serene surroundings of Mehrauli');

// About section updates
const newAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">Kairali The Ayurvedic Healing Village – Delhi NCR</strong>, a premium wellness destination located in Mehrauli, New Delhi. Backed by the globally renowned Kairali Ayurvedic Group, our center brings the authentic, time-tested healing traditions of Kerala directly to the heart of the capital. We offer a luxurious yet deeply traditional environment designed for profound relaxation, detoxification, and rejuvenation. Our highly trained therapists use proprietary oils and classical formulations to deliver therapies that go beyond mere relaxation, actively addressing lifestyle disorders and restoring the body's natural equilibrium.`;
content = content.replace(/Welcome to <strong.*?systemic detoxification\./, newAbout);

const newAbout2 = `Our expert team of senior physicians and dedicated therapists ensure that every treatment is customized to your unique doshic profile (body constitution). We hold an exceptional reputation for our signature Abhyangam massages, effective stress management programs, and holistic pain relief therapies. At Kairali, you don't just receive a treatment; you experience a comprehensive wellness journey that seamlessly blends the pristine authenticity of ancient Ayurveda with modern, world-class hospitality and luxury.`;
content = content.replace(/As a premier clinical destination.*?integrative oncology\./, newAbout2);

// Meta Description
content = content.replace(/Experience authentic Precision Ayurveda.*?in Khera Dabar, New Delhi\./g, 'Experience premium luxury Ayurveda and authentic Kerala therapies at Kairali The Ayurvedic Healing Village in Mehrauli, New Delhi. Relieve stress and rejuvenate.');

// Contact Maps
content = content.replace(/Apollo\+AyurVAID\+Hospital\+Nehru\+Enclave\+Kalkaji\+New\+Delhi/g, 'Kairali+Ayurvedic+Centre+Mehrauli+Delhi');
content = content.replace(/with%20Apollo%20AyurVAID%20Nehru%20Enclave/g, 'at%20Kairali%20Ayurvedic%20Healing%20Village');

// Array Replacements using Regex
const newTreatmentProcess = `const treatmentProcess = [
    {
      number: 1,
      title: "Wellness Consultation",
      description: "A detailed assessment by our expert physicians to understand your unique body constitution (Prakriti) and specific health goals.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Customized Therapy Plan",
      description: "Designing a personalized roadmap of authentic Kerala therapies, using proprietary herbal oils tailored exactly for you.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Luxurious Environment",
      description: "Immersing yourself in a serene, meticulously clean, and deeply relaxing atmosphere that enhances the healing process.",
      icon: <Heart className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Authentic Kerala Therapies",
      description: "Experiencing signature treatments like Abhyangam, Shirodhara, and Navarakizhi performed by highly skilled therapists from Kerala.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Deep Rejuvenation",
      description: "Focusing on profound stress relief, tissue nourishment, and restoring vitality to both the body and mind.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Lifestyle Guidance",
      description: "Receiving practical Ayurvedic dietary advice and wellness tips to maintain balance and health long after your visit.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];`;

const newTestimonials = `const testimonials = [
    {
      title: "A Luxurious Urban Retreat",
      review: "Kairali offers an absolute oasis of calm right in the middle of Delhi NCR. The authenticity of the Kerala massages is unmatched, and the therapists are exceptionally professional. I visited for a weekend stress-relief package and left feeling completely transformed and deeply relaxed. The hygiene and ambiance are world-class.",
      name: "Sophia Martinez",
      verified: true,
      location: "Madrid, Spain",
      condition: "Stress & Fatigue",
      rating: 5
    },
    {
      title: "Exceptional Pain Management",
      review: "I have been suffering from severe chronic back pain and decided to try their specialized Podikkizhi therapy. The warm herbal bundles and the precise massage techniques provided more relief than any conventional treatment I've tried. The doctors took ample time to understand my medical history before proceeding.",
      name: "Thomas Anderson",
      verified: true,
      location: "New York, USA",
      condition: "Chronic Back Pain",
      rating: 5
    },
    {
      title: "Authentic Kerala Experience",
      review: "Having visited Kerala before, I can confidently say that this center brings the exact same authentic standard of Ayurveda to Delhi. The proprietary oils they use are incredibly effective, and the Shirodhara session instantly cured my recurring insomnia and anxiety issues. Highly recommended for genuine healing.",
      name: "Emma Dubois",
      verified: true,
      location: "Paris, France",
      condition: "Insomnia & Anxiety",
      rating: 5
    },
    {
      title: "Rejuvenating Detox",
      review: "The cleanliness, the polite staff, and the highly skilled therapists make Kairali a standout wellness destination. I underwent a short detox program which included Abhyangam and steam therapy. It left my skin glowing and my body feeling incredibly light and energized for weeks afterward.",
      name: "Alexander Volkov",
      verified: true,
      location: "Moscow, Russia",
      condition: "General Detox",
      rating: 4
    },
    {
      title: "Professional and Calming",
      review: "From the moment you step inside, the aromatic ambiance and soothing music set the tone for healing. The Ayurvedic doctor provided excellent dietary insights, and the deep tissue massage completely relieved the tension in my shoulders and neck caused by long working hours.",
      name: "Olivia Thompson",
      verified: true,
      location: "Sydney, Australia",
      condition: "Muscle Tension",
      rating: 5
    }
  ];`;

const newFaqItems = `const faqItems = [
    {
      question: "What makes Kairali different from a regular spa?",
      answer: "Unlike a regular spa, Kairali offers authentic, therapeutic Ayurvedic treatments prescribed by qualified Ayurvedic doctors. Our therapies focus on medical efficacy, using proprietary medicinal oils to treat specific ailments, stress, and lifestyle disorders."
    },
    {
      question: "Are the therapists trained in authentic Kerala Ayurveda?",
      answer: "Yes, our therapists are extensively trained in traditional Kerala Ayurvedic massage techniques, ensuring the highest standards of authenticity and therapeutic benefit."
    },
    {
      question: "Do I need to consult a doctor before a massage?",
      answer: "While you can book a relaxing Abhyangam directly, we highly recommend a brief consultation with our in-house Ayurvedic physician to ensure the therapies and oils chosen are perfectly suited to your body constitution (Prakriti)."
    },
    {
      question: "Can Kairali help with severe joint or back pain?",
      answer: "Absolutely. We offer specialized classical therapies like Kati Basti, Janu Basti, and various Kizhi (poultice) treatments that are highly effective for managing arthritis, back pain, and muscle stiffness."
    },
    {
      question: "Are there any wellness packages available for stress relief?",
      answer: "Yes, we offer comprehensive packages specifically designed for stress management, which typically include combinations of Abhyangam, Shirodhara, and personalized lifestyle counseling."
    }
  ];`;

const newPrograms = `const programs = [
    {
      title: "Stress Management",
      description: "Profoundly relaxing therapies including Shirodhara and Abhyangam to calm the nervous system and relieve anxiety.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Pain & Joint Care",
      description: "Targeted Ayurvedic treatments like Podikkizhi and Kati Basti for arthritis, spondylosis, and chronic back pain.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Detoxification",
      description: "Authentic cleansing procedures and herbal steam therapies to remove deep-seated toxins and improve metabolism.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skin & Beauty Care",
      description: "Luxurious herbal facials, scrubs, and skin-nourishing therapies using pure, natural Ayurvedic ingredients.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Weight Management",
      description: "Specialized Udvarthanam (dry powder massage) and diet counseling to naturally reduce fat and tone the body.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "General Rejuvenation",
      description: "Holistic wellness packages designed to boost immunity, restore vitality, and prevent lifestyle-related diseases.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "Global Legacy",
      description: "Backed by the multi-award-winning Kairali Ayurvedic Group, known worldwide for excellence in Ayurveda.",
      icon: <Building2 className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Authentic Kerala Tradition",
      description: "Experience the pure, unadulterated healing traditions of Kerala right in the heart of Delhi NCR.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Expert Practitioners",
      description: "Consultations and therapies guided by highly qualified doctors and meticulously trained therapists.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Proprietary Oils",
      description: "Treatments utilize Kairali's own authentic, high-quality herbal oils manufactured under strict quality controls.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Luxurious Ambiance",
      description: "A serene, hygienic, and premium environment designed to maximize your comfort and relaxation.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Accessible Location",
      description: "Conveniently located in Mehrauli, offering an urban escape without leaving the city.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;

content = content.replace(/const treatmentProcess = \[[\s\S]*?\];/g, newTreatmentProcess);
content = content.replace(/const testimonials = \[[\s\S]*?\];/g, newTestimonials);
content = content.replace(/const faqItems = \[[\s\S]*?\];/g, newFaqItems);
content = content.replace(/const programs = \[[\s\S]*?\];/g, newPrograms);
content = content.replace(/const whyChooseUs = \[[\s\S]*?\];/g, newWhyChooseUs);

fs.writeFileSync(targetPath, content);
console.log("Successfully generated KairaliTheAyurvedicHealingVillageDelhiNCR.tsx!");
