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

const newPrograms = `const programs = [
    {
      title: "Asian Wellness Fusion",
      duration: "7-14 Days",
      description: "A unique blend of traditional Ayurvedic therapies and Southeast Asian massage techniques designed to release deep-seated tension, improve flexibility, and restore vitality.",
      icon: <Sparkles className="h-6 w-6 text-[#2C4E5A]" />,
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
      icon: <Droplet className="h-6 w-6 text-[#2C4E5A]" />,
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
      icon: <Leaf className="h-6 w-6 text-[#2C4E5A]" />,
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
      icon: <Heart className="h-6 w-6 text-[#2C4E5A]" />,
      benefits: [
        "Reduction in anxiety levels",
        "Relief from chronic headaches",
        "Emotional balancing",
        "Deep psychological rest"
      ]
    },
    {
      title: "Active Muscle Recovery",
      duration: "3-5 Days",
      description: "Ideal for active travelers and yogis. Uses deep tissue Asian massage combined with heated herbal poultices (Kizhi) to rapidly relieve muscle soreness and inflammation.",
      icon: <Activity className="h-6 w-6 text-[#2C4E5A]" />,
      benefits: [
        "Lactic acid flush",
        "Rapid soreness reduction",
        "Restored muscle flexibility",
        "Improved physical stamina"
      ]
    },
    {
      title: "Couples Harmony Retreat",
      duration: "1-3 Days",
      description: "A shared wellness experience focusing on tandem relaxation therapies, utilizing fragrant essential oils and rhythmic massage to foster deep connection and serenity.",
      icon: <Users className="h-6 w-6 text-[#2C4E5A]" />,
      benefits: [
        "Shared relaxation experience",
        "Aromatherapy benefits",
        "Deep emotional connection",
        "Complete physical ease"
      ]
    }
  ];`;
  
content = replaceBlock(content, 'const programs = [', '  ];', newPrograms);

fs.writeFileSync('src/pages/centers/GoaSianSpa.tsx', content);
