const fs = require('fs');

const filePath = "E:/Demo website/Svastha global site/svastha-connect-guide/src/pages/centers/AushadhgyanAyurveda.tsx";
let content = fs.readFileSync(filePath, 'utf-8');

const newTestimonials = `const testimonials = [
    {
      name: "Rohit K.",
      location: "Mumbai",
      text: "The Vaidyas at Aushadhgyan truly listen. My chronic digestive issues improved dramatically within just weeks of their tailored herbal treatment.",
      rating: 5
    },
    {
      name: "Meera D.",
      location: "Pune",
      text: "I travelled from Pune specifically for their Panchakarma therapies to treat my severe PCOD. The authentic Kerala protocols they use are incredibly effective and restorative.",
      rating: 5
    },
    {
      name: "Samantha L.",
      location: "UK",
      text: "As an international patient seeking natural relief for joint pain, Aushadhgyan provided an oasis of authentic care. Their holistic approach completely changed my daily life.",
      rating: 5
    },
    {
      name: "Arjun V.",
      location: "Mumbai",
      text: "Exceptional center for stress management. The Shirodhara sessions are purely magical, and the clinic atmosphere is incredibly calming and professional.",
      rating: 5
    },
    {
      name: "Priya M.",
      location: "Mumbai",
      text: "After struggling with skin conditions for years, the personalized Prakriti assessment and natural medicines here finally gave me clear, healthy skin.",
      rating: 5
    }
  ];`;

const newFaqData = `const faqData = [
    {
      question: "What specific conditions does Aushadhgyan Ayurveda specialize in?",
      answer: "We offer holistic, traditional Ayurvedic solutions for a variety of concerns including digestive disorders, skin conditions, PCOD, thyroid imbalances, infertility, joint pain, and stress management."
    },
    {
      question: "Do I need to book an appointment before visiting?",
      answer: "Yes, we highly advise booking an appointment in advance. This ensures our Vaidyas have dedicated time for your comprehensive Prakriti assessment and Nadi Parikshan."
    },
    {
      question: "Are your Panchakarma therapies authentic?",
      answer: "Absolutely. We strictly follow classical Ayurvedic protocols and use genuine herbal medicines and oils specifically sourced from Kerala to ensure maximum efficacy and safety."
    },
    {
      question: "Where is the center located in Mumbai?",
      answer: "We are centrally located in Andheri West, near the Azad Nagar Metro Station, making us highly accessible for both local residents and international wellness seekers."
    },
    {
      question: "Is Ayurvedic treatment safe for long-term use?",
      answer: "Yes, our highly tailored, natural herbal preparations are designed to address the root cause of illness safely, promoting long-term healing without the side effects often associated with synthetic medications."
    }
  ];`;

// Replace testimonials
content = content.replace(/const testimonials = \[[\s\S]*?\];/m, newTestimonials);

// Replace faqData
content = content.replace(/const faqData = \[[\s\S]*?\];/m, newFaqData);

// Fix title and breadcrumb
content = content.replace(/Aushadhgyan Ayurveda & Wellness Center Mumbai \| Authentic Care/, "Aushadhgyan Ayurveda & Wellness Center | Authentic Care");
content = content.replace(/Aushadhgyan Ayurveda & Wellness Center Mumbai/g, "Aushadhgyan Ayurveda & Wellness Center");

// Let's add the map correct query
content = content.replace(/q=Aushadhgyan\+Ayurveda,\+Andheri\+West,\+Mumbai/g, "q=Aushadhgyan+Ayurveda+Panchkarma+&+Wellness+Center,+Andheri+West,+Mumbai");

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Testimonials and FAQs replaced successfully.');
