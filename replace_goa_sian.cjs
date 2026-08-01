const fs = require('fs');

function replaceBlock(content, startMarker, endMarker, newBlock) {
    const startIndex = content.indexOf(startMarker);
    if (startIndex === -1) return content;
    
    // Find the matching end marker
    let endIndex = content.indexOf(endMarker, startIndex);
    if (endIndex === -1) return content;
    
    endIndex += endMarker.length;
    
    return content.substring(0, startIndex) + newBlock + content.substring(endIndex);
}

let content = fs.readFileSync('src/pages/centers/GoaSianSpa.tsx', 'utf8');

const newTreatment = `const treatmentProcess = [
    {
      number: 1,
      title: "Holistic Consultation",
      description: "Your journey begins with a deep dive into your physical and energetic state, understanding your specific needs, whether it's travel fatigue recovery or deep spiritual grounding.",
      icon: <FileSearch className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 2,
      title: "Custom Therapy Design",
      description: "We blend classical Ayurveda with curated Asian therapies to design a session that aligns perfectly with your body's current requirements and dosha balance.",
      icon: <ClipboardList className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 3,
      title: "Aura & Space Preparation",
      description: "Our tranquil, aroma-infused treatment rooms are prepared with warm, medicated oils to ensure an atmosphere of absolute peace before your session starts.",
      icon: <Droplet className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 4,
      title: "Integrative Healing Session",
      description: "Experience a masterful blend of Ayurvedic Abhyanga, deep tissue release, or Shirodhara, executed by skilled therapists attuned to your body's responses.",
      icon: <Activity className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 5,
      title: "Post-Therapy Integration",
      description: "Rest in our serene lounge with herbal tea, allowing the therapeutic oils to penetrate deeply and your mind to absorb the calming effects of the treatment.",
      icon: <Sparkles className="h-8 w-8 text-[#2C4E5A]" />
    },
    {
      number: 6,
      title: "Ongoing Wellness Advice",
      description: "Receive practical lifestyle and dietary recommendations to maintain your newfound balance as you continue your journey in Goa and beyond.",
      icon: <MessageCircleHeart className="h-8 w-8 text-[#2C4E5A]" />
    }
  ];`;
content = replaceBlock(content, 'const treatmentProcess = [', '  ];', newTreatment);

const newTestimonials = `const testimonials = [
    {
      title: "A True Oasis in Arambol",
      review: "The fusion of Ayurvedic massage and Asian spa techniques here is unmatched. It was exactly what my body needed after weeks of backpacking. Truly rejuvenating!",
      name: "Liam D.",
      verified: true,
      location: "London, UK",
      condition: "Deep Tissue & Ayurveda",
      rating: 5
    },
    {
      title: "Deeply Grounding Shirodhara",
      review: "I've tried Shirodhara in many places, but the serene environment at Goa Sian Spa made this experience profoundly spiritual and relaxing. I felt my anxiety melt away.",
      name: "Emma W.",
      verified: true,
      location: "Sydney, Australia",
      condition: "Stress Relief",
      rating: 5
    },
    {
      title: "Perfect Recovery Therapy",
      review: "After days of surfing and exploring, my muscles were incredibly tight. The therapists knew exactly how to release the tension using warm herbal oils.",
      name: "Noah B.",
      verified: true,
      location: "Vancouver, Canada",
      condition: "Muscle Recovery",
      rating: 5
    },
    {
      title: "Exceptional Couple's Spa",
      review: "My partner and I booked a full-day wellness package. The attention to detail, cleanliness, and the skill of the therapists made it the highlight of our Goa trip.",
      name: "Chloe M.",
      verified: true,
      location: "Paris, France",
      condition: "Couples Wellness",
      rating: 5
    },
    {
      title: "Holistic Healing Environment",
      review: "It's not just a massage; it's a healing experience. The energy of the place combined with authentic Ayurvedic oils left me feeling completely renewed.",
      name: "Hans S.",
      verified: true,
      location: "Munich, Germany",
      condition: "Holistic Rejuvenation",
      rating: 5
    }
  ];`;
content = replaceBlock(content, 'const testimonials = [', '  ];', newTestimonials);


const newPrograms = `const programs = [
    {
      title: "Asian Wellness Fusion",
      duration: "7-14 Days",
      description: "A unique blend of traditional Ayurvedic therapies and Southeast Asian massage techniques designed to release deep-seated tension, improve flexibility, and restore vitality.",
      benefits: [
        "Deep muscle relaxation",
        "Enhanced joint mobility",
        "Improved energy flow (Prana/Qi)",
        "Stress and fatigue reduction"
      ]
    },
    {
      title: "Arambol Rejuvenation Package",
      duration: "5-10 Days",
      description: "Tailored for travelers seeking a quick yet profound reset. This program combines Abhyanga (oil massage), Shirodhara, and reflexology to balance the mind and body.",
      benefits: [
        "Mental clarity and calmness",
        "Nourishment of skin and tissues",
        "Better sleep quality",
        "Nervous system soothing"
      ]
    },
    {
      title: "Holistic Detox & Cleansing",
      duration: "14-21 Days",
      description: "A comprehensive detoxification program using mild Panchakarma principles, herbal steam therapy, and specialized diets to flush out toxins and restart your metabolism.",
      benefits: [
        "Toxin elimination (Ama)",
        "Digestive fire restoration (Agni)",
        "Weight management support",
        "Cellular renewal"
      ]
    },
    {
      title: "Spiritual Grounding & De-stress",
      duration: "3-7 Days",
      description: "Designed to combat anxiety, burnout, and mental exhaustion. Features intensive Shirodhara, Indian head massage, and guided relaxation in a tranquil setting.",
      benefits: [
        "Reduction in anxiety levels",
        "Relief from chronic headaches",
        "Emotional balancing",
        "Deep psychological rest"
      ]
    }
  ];`;
content = replaceBlock(content, 'const programs = [', '  ];', newPrograms);

const newWhyChooseUs = `const whyChooseUs = [
    {
      title: "Fusion Therapy Expertise",
      description: "Expertly combining authentic Indian Ayurveda with renowned Southeast Asian massage techniques for a comprehensive healing experience.",
      icon: <Award className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Tranquil Beachside Vibe",
      description: "Located in the spiritual heart of Arambol, offering a serene, meditative environment perfectly conducive to deep relaxation and healing.",
      icon: <TreePine className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Personalized Attention",
      description: "Every treatment is customized following a careful consultation to match your specific physical needs and energetic balance.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Premium Natural Oils",
      description: "We use only the highest quality, traditionally prepared Ayurvedic medicated oils and natural aromatic blends in all our therapies.",
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Skilled Therapists",
      description: "Our dedicated team of therapists brings years of experience, a healing touch, and a deep understanding of holistic wellness.",
      icon: <ShieldCheck className="h-6 w-6 text-[#2C4E5A]" />
    },
    {
      title: "Holistic Rejuvenation",
      description: "A complete approach that not only addresses physical tension but also harmonizes the mind and spirit for total well-being.",
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />
    }
  ];`;
content = replaceBlock(content, 'const whyChooseUs = [', '  ];', newWhyChooseUs);

const newFaqData = `const faqItems = [
    {
      question: "Do you offer both Ayurvedic and Asian massages?",
      answer: "Yes, our unique strength is offering a curated menu that includes both classical Ayurvedic therapies like Abhyanga and Shirodhara, alongside Asian relaxation techniques such as reflexology and Thai-inspired stretching."
    },
    {
      question: "Do I need to book in advance?",
      answer: "Since we are located in Arambol and frequently receive travelers, we highly recommend booking in advance, especially during the peak tourist season in Goa."
    },
    {
      question: "Can I book a couple's spa session?",
      answer: "Absolutely! We offer dedicated couple's treatment rooms and specialized packages so you and your partner can enjoy a relaxing, shared healing experience."
    },
    {
      question: "What should I wear during the treatment?",
      answer: "We provide disposable undergarments and robes for your comfort. Our therapists are trained to drape you properly, ensuring your privacy and comfort at all times."
    },
    {
      question: "Are your oils authentic?",
      answer: "Yes, we source our Ayurvedic oils directly from traditional pharmacies to ensure authenticity and efficacy, while our aromatic blends use premium essential oils."
    }
  ];`;
content = replaceBlock(content, 'const faqItems = [', '  ];', newFaqData);

fs.writeFileSync('src/pages/centers/GoaSianSpa.tsx', content);
