const fs = require('fs');

const filePath = "E:/Demo website/Svastha global site/svastha-connect-guide/src/pages/centers/AushadhgyanAyurveda.tsx";
let content = fs.readFileSync(filePath, 'utf-8');

const newTestimonials = `const testimonials = [
    {
      title: "Exceptional Digestive Care",
      review: "The Vaidyas at Aushadhgyan truly listen. My chronic digestive issues improved dramatically within just weeks of their tailored herbal treatment. Highly recommend for any international visitors.",
      name: "Michael R.",
      verified: true,
      location: "New York, USA",
      condition: "Digestive Disorders",
      rating: 5
    },
    {
      title: "Authentic PCOD Treatment",
      review: "I travelled from the UK specifically for their Panchakarma therapies to treat my severe PCOD. The authentic Kerala protocols they use are incredibly effective and restorative.",
      name: "Sarah L.",
      verified: true,
      location: "London, UK",
      condition: "PCOD & Hormonal Imbalance",
      rating: 5
    },
    {
      title: "Miraculous Joint Relief",
      review: "As an international patient seeking natural relief for joint pain, Aushadhgyan provided an oasis of authentic care. Their holistic approach completely changed my daily life and mobility.",
      name: "David W.",
      verified: true,
      location: "Sydney, Australia",
      condition: "Joint Pain & Arthritis",
      rating: 5
    },
    {
      title: "Profound Stress Management",
      review: "Exceptional center for stress management. The Shirodhara sessions are purely magical, and the clinic atmosphere is incredibly calming. I left feeling completely rejuvenated.",
      name: "Elena G.",
      verified: true,
      location: "Toronto, Canada",
      condition: "Chronic Stress",
      rating: 5
    },
    {
      title: "Transformative Skin Healing",
      review: "After struggling with skin conditions for years, the personalized Prakriti assessment and natural medicines here finally gave me clear, healthy skin. The Vaidyas are extremely knowledgeable.",
      name: "Sophie M.",
      verified: true,
      location: "Paris, France",
      condition: "Skin Conditions",
      rating: 5
    }
  ];`;

// Replace testimonials
content = content.replace(/const testimonials = \[[\s\S]*?\];/m, newTestimonials);

// Fix breadcrumb to append Mumbai
content = content.replace(/<li className="text-primary\/90 font-black shrink-0">\s*Aushadhgyan Ayurveda & Wellness Center\s*<\/li>/, '<li className="text-primary/90 font-black shrink-0">\n              Aushadhgyan Ayurveda & Wellness Center Mumbai\n            </li>');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Testimonials and breadcrumb fixed successfully.');
