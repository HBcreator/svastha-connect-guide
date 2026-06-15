const fs = require('fs');

const sourcePath = 'src/pages/centers/BharatiAyurvedHospital.tsx';
const targetPath = 'src/pages/centers/AyushmanBhavaAyurvedaClinic.tsx';

let content = fs.readFileSync(sourcePath, 'utf8');

// Component name replacements
content = content.replace(/BharatiAyurvedHospital/g, 'AyushmanBhavaAyurvedaClinic');
content = content.replace(/Bharati Ayurved Hospital Pune/g, 'Ayushman Bhava Ayurveda Clinic Nashik');
content = content.replace(/Bharati Ayurved Hospital/g, 'Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic');

// Location & Address
content = content.replace('Pune-Satara Road, Pune, Maharashtra, India', 'Old Gangapur Naka, Nashik, Maharashtra, India');
content = content.replace('NABH Accredited Premium Ayurveda | Outpatient & Inpatient Clinical Care', 'Authentic Keraliya Panchakarma & Advanced Ayurvedic Care');

// Ratings & Reviews
content = content.replace('4.6', '4.9');
content = content.replace('900+ Reviews', '480+ Reviews');

// Meta tags
content = content.replace('Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic Pune | NABH Accredited Ayurvedic Care', 'Ayushman Bhava Ayurveda Clinic Nashik | Keraliya Panchakarma & Expert Care');
content = content.replace('Experience authentic Ayurvedic treatments, Ksharasutra surgery, and Panchakarma at the NABH-accredited Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic on Pune-Satara Road, Pune.', 'Experience authentic Keraliya Panchakarma and expert Ayurvedic consultations with Dr. Yogesh Chavan at Ayushman Bhava Ayurveda Clinic, Nashik.');

// About section (Paragraphs)
const oldAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic</strong>, one of Pune's most reputed and trusted destinations for authentic, clinical Ayurvedic healthcare. Proudly affiliated with Bharati Vidyapeeth—a top-ranked university—our NABH-accredited hospital carries forward a 30-year legacy of clinical excellence. Prominently located on Pune-Satara Road, we offer a serene and highly hygienic environment where traditional Ayurvedic wisdom meets advanced modern medical diagnostics. Our facility integrates traditional pulse diagnosis with state-of-the-art diagnostic tools, ensuring that our patients receive highly precise, evidence-based care tailored precisely to their unique body constitution and health challenges.`;
const newAbout = `Welcome to <strong className="font-bold text-[#2C4E5A]">Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic</strong>, Nashik's premier destination for highly authentic, specialized Keraliya Panchakarma therapies. Led by the highly acclaimed Dr. Yogesh S. Chavan (MD Ayurveda), our clinic focuses on providing root-cause, evidence-based healing for complex chronic illnesses. Situated near the serene Old Gangapur Naka, our modern facility brings the time-tested traditions of Kerala Ayurveda to Maharashtra, ensuring that every patient receives compassionate, individualized, and deeply transformative care.`;
content = content.replace(oldAbout, newAbout);

const oldAbout2 = `Our institution uniquely stands out by providing comprehensive specialties under one roof. From highly successful Ksharasutra surgery for proctological issues to specialized pediatric Ayurveda, women's health, postpartum care, and profound Panchakarma detox programs. Equipped with a modern Intensive Care Unit (ICU) and a team of highly qualified physicians, we are committed to delivering safe, measurable, and deeply transformative healing outcomes for patients across the globe. By integrating deeply purifying Ayurvedic detoxes, rejuvenating therapies, personalized lifestyle counseling, and meticulously sourced organic medicines, we empower our patients to achieve lasting, vibrant health rather than just temporary symptom relief.`;
const newAbout2 = `We specialize in a comprehensive array of Ayurvedic treatments ranging from specialized pain management for arthritis and spondylosis, to deep detoxification via traditional Vamana and Virechana, stress management therapies like Shirodhara, and highly effective protocols for hair fall and skin disorders. At Ayushman Bhava, our philosophy goes beyond temporary relief; we integrate highly curated herbal formulations, personalized dietary counseling, and authentic Ayurvedic treatments to permanently restore the body's natural harmony.`;
content = content.replace(oldAbout2, newAbout2);

// Replace Image paths
content = content.replace(/\/TOP centers\/mumbai pune nashik\/Bharati Ayurved Hospital\/image 1\.webp/g, '/TOP centers/mumbai pune nashik/Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic/image 1.jpg');
content = content.replace(/\/TOP centers\/mumbai pune nashik\/Bharati Ayurved Hospital\/image 2\.webp/g, '/TOP centers/mumbai pune nashik/Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic/image 2.jpg');

// Reviews
const newTestimonials = `const testimonials = [
    {
      title: "Excellent Relief from Joint Pain",
      review: "Dr. Yogesh Chavan's approach to treating my severe joint pain and arthritis was incredible. The traditional Keraliya Panchakarma therapies, specially the Janu Basti, provided me with long-lasting relief that modern medicine failed to give.",
      name: "Sanjay Deshmukh",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Arthritis & Joint Pain",
      rating: 5
    },
    {
      title: "Best Clinic for Hair Fall",
      review: "I visited Ayushman Bhava Clinic after trying everything for my severe hair fall. Dr. Chavan diagnosed the root cause correctly and the Ayurvedic oils and internal medicines stopped my hair fall within a month. Highly recommended!",
      name: "Pooja Patil",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Hair & Scalp Care",
      rating: 5
    },
    {
      title: "Effective Migraine Treatment",
      review: "My chronic migraines were completely disrupting my life. The Shirodhara and Nasya treatments I received here were deeply relaxing and have significantly reduced the frequency and intensity of my headaches. A truly healing environment.",
      name: "Amit Kulkarni",
      verified: true,
      location: "Pune, Maharashtra",
      condition: "Migraine & Stress",
      rating: 5
    },
    {
      title: "Cured my Digestive Issues",
      review: "I was suffering from IBS and chronic acidity. The personalized diet chart and deep detoxification via Virechana at this clinic completely reset my digestive system. The staff is very professional and the hygiene is top-notch.",
      name: "Rajesh S.",
      verified: true,
      location: "Nashik, Maharashtra",
      condition: "Gastrointestinal Disorders",
      rating: 5
    },
    {
      title: "Miraculous PCOD Management",
      review: "Dr. Yogesh provided exceptional care for my PCOD. Instead of relying on hormones, his holistic Ayurvedic approach regulated my cycles naturally. I cannot thank the Ayushman Bhava team enough for their supportive guidance.",
      name: "Snehal J.",
      verified: true,
      location: "Mumbai, Maharashtra",
      condition: "Women's Health & PCOD",
      rating: 5
    }
  ];`;
content = content.replace(/const testimonials = \[\s*\{[\s\S]*?\}\s*\];/m, newTestimonials);

// Programs
const newPrograms = `const programs = [
    {
      title: "Authentic Keraliya Panchakarma",
      description: "Deep cellular detoxification utilizing classical therapies like Vamana, Virechana, and Basti to completely reset metabolic functions.",
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Advanced Pain Management",
      description: "Specialized joint care therapies including Kati Basti, Janu Basti, and Patra Pinda Sweda for arthritis, spondylosis, and sciatica.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Hair Fall & Scalp Care",
      description: "Targeted Ayurvedic treatments using potent medicated oils, Shirodhara, and internal purification to reverse chronic hair loss.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Migraine & Stress Relief",
      description: "Profoundly relaxing neurological therapies like Shirodhara and Nasya that balance Vata dosha to cure severe migraines and insomnia.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Digestive Disorder Cure",
      description: "Root-cause healing protocols for hyperacidity, IBS, and chronic constipation through precise dietary counseling and herbal medicines.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />,
    },
    {
      title: "Women's Health & PCOD",
      description: "Holistic, hormone-free Ayurvedic approaches to successfully manage PCOS, menstrual irregularities, and infertility.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
    }
  ];`;
content = content.replace(/const programs = \[\s*\{[\s\S]*?\}\s*\];/m, newPrograms);

// Why Choose Us
const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "Expert Guidance",
      description: "Led by Dr. Yogesh S. Chavan (MD Ayurveda), renowned for his extensive clinical expertise and compassionate patient care.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Authentic Keraliya Methods",
      description: "We strictly adhere to the traditional, time-tested Keraliya Panchakarma protocols to ensure maximum therapeutic efficacy.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Root-Cause Philosophy",
      description: "Our approach focuses deeply on eliminating the fundamental cause of the disease, rather than just masking the symptoms.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "High Hygiene Standards",
      description: "We maintain uncompromised cleanliness and hygiene across all our therapy rooms and clinical spaces.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Customized Formulations",
      description: "Every patient receives highly personalized medicinal prescriptions and diet charts tailored precisely to their unique Prakriti.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Convenient Location",
      description: "Easily accessible and centrally located near Old Gangapur Naka, providing a peaceful retreat within Nashik city.",
      icon: <MapPin className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;
content = content.replace(/const whyChooseUs = \[\s*\{[\s\S]*?\}\s*\];/m, newWhyChooseUs);

// FAQs
const newFaqItems = `const faqItems = [
    {
      question: "What is Keraliya Panchakarma?",
      answer: "Keraliya Panchakarma involves authentic, highly specialized detoxification and rejuvenation therapies originating from Kerala. It utilizes unique medicated oils, herbal powders, and specialized massage techniques like Pizhichil and Njavara Kizhi for deep tissue healing."
    },
    {
      question: "Who is the chief consultant at the clinic?",
      answer: "The clinic is spearheaded by Dr. Yogesh S. Chavan, an MD in Ayurveda. He is highly respected in Nashik for his accurate diagnoses and successful track record in treating chronic illnesses."
    },
    {
      question: "Do you treat severe joint pain and arthritis?",
      answer: "Yes, we specialize in Ayurvedic orthopedics. We use highly effective therapies like Janu Basti, Kati Basti, and Patra Pinda Sweda combined with potent internal medicines to successfully manage arthritis, spondylosis, and sciatica."
    },
    {
      question: "Are your treatments safe and without side effects?",
      answer: "Absolutely. We strictly use pure, natural Ayurvedic formulations and adhere to classical treatment protocols. When administered by our expert doctors, these treatments are completely safe and free from adverse side effects."
    },
    {
      question: "Do I need to book an appointment beforehand?",
      answer: "Yes, we highly recommend booking your appointment in advance. Dr. Yogesh spends significant time on individual consultations to perform Nadi Pariksha and detailed assessments, ensuring personalized care."
    }
  ];`;
content = content.replace(/const faqItems = \[\s*\{[\s\S]*?\}\s*\];/m, newFaqItems);

// Phone number and Map
content = content.replace('+91-020-40555600', '+91-8042753729');
content = content.replace('https://maps.google.com/maps?q=Ayushman+Bhava+Ayurveda+%26+Keraliya+Panchakarma+Clinic,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed', 'https://maps.google.com/maps?q=Ayushman+Bhava+Ayurveda+%26+Keraliya+Panchakarma+Clinic,+Nashik&t=&z=15&ie=UTF8&iwloc=&output=embed');

fs.writeFileSync(targetPath, content);
console.log('Successfully created AyushmanBhavaAyurvedaClinic.tsx');
