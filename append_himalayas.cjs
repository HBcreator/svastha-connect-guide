const fs = require('fs');

// These are the 21 Himalaya centers from the user's list.
// We need to check which are already in TopCenters and add the missing ones.
const himalayaCenters = [
    {
        name: "Swami Rama Himalayan University Ayurvedic Center",
        city: "Dehradun, Uttarakhand, India",
        description: "A specialized clinical wellness facility located on the lush campus of Swami Rama Himalayan University. Operating under the Himalayan Institute Hospital Trust (HIHT), founded in 1989, the center integrates traditional Ayurvedic healing, yoga sciences, and modern clinical standards to promote physical vitality and mental harmony.",
        rating: 4.6,
        reviews: 180,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Swami Rama Himalayan University/main.webp",
        slug: "swami-rama-himalayan-university-ayurveda-center-dehradun-uttarakhand-india"
    },
    {
        name: "Ayuskama Ayurveda Clinic & Panchakarma Center",
        city: "Rishikesh, Uttarakhand, India",
        description: "A renowned Ayurvedic retreat nestled in the foothills of the Himalayas in Rishikesh, offering authentic Panchakarma therapies, herbal treatments, and personalized wellness programs in a serene natural setting.",
        rating: 4.7,
        reviews: 220,
        priceRange: "$$",
        image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
        slug: "ayuskama-ayurveda-rishikesh-india"
    },
    {
        name: "Bhole Baba Ayurvedic Hospital & Research Center",
        city: "Ranikhet, Uttarakhand, India",
        description: "A dedicated Ayurvedic hospital and research center in the serene hills of Ranikhet, offering comprehensive Panchakarma therapies, herbal medicine research, and traditional healing programs amidst pristine Himalayan surroundings.",
        rating: 4.5,
        reviews: 150,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Bhole Baba Ayurvedic Hospital/main.webp",
        slug: "bhole-baba-ayurvedic-hospital-and-research-center-ranikhet-uttarakhand-india"
    },
    {
        name: "Mamgain's Ayurveda Clinic & Panchakarma Center",
        city: "Rishikesh, Uttarakhand, India",
        description: "A trusted Ayurvedic clinic in Rishikesh specializing in classical Panchakarma treatments, chronic disease management, and personalized herbal therapy protocols guided by experienced Vaidyas.",
        rating: 4.6,
        reviews: 190,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Mamgain Ayurveda Clinic/main.webp",
        slug: "mamgain-ayurvedic-clinic-and-panchakarma-center-rishikesh-uttarakhand-india"
    },
    {
        name: "Haritha Ayurveda Academy & Panchakarma Center",
        city: "Rishikesh, Uttarakhand, India",
        description: "An academy-cum-treatment center in Rishikesh that combines Ayurvedic education with authentic Panchakarma therapies, offering deep detox programs and wellness retreats in a spiritually enriching environment.",
        rating: 4.5,
        reviews: 160,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Haritha Ayurveda Academy/main.webp",
        slug: "haritha-ayurveda-academy-and-panchakarma-center-rishikesh-uttarakhand-india"
    },
    {
        name: "KAYAKALP – Himalayan Research Institute of Yoga & Naturopathy",
        city: "Himachal Pradesh, India",
        description: "A unique Himalayan research institute blending Yoga, Naturopathy, and Ayurveda for holistic healing. Offers residential programs, detox retreats, and therapeutic treatments surrounded by pristine mountain landscapes.",
        rating: 4.5,
        reviews: 140,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/KAYAKALP Himalayan Research Institute/main.webp",
        slug: "kayakalp-himalayan-research-institute-of-yoga-and-naturopathy-hospital-himachal-india"
    },
    {
        name: "Vedic Yoga & Ayurveda Retreat Center",
        city: "Rishikesh, Uttarakhand, India",
        description: "A tranquil retreat center in Rishikesh offering an integrated approach of Vedic Yoga and traditional Ayurvedic therapies. Provides customized wellness programs, meditation sessions, and Panchakarma treatments.",
        rating: 4.6,
        reviews: 170,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vedic Yoga Ayurveda Retreat/main.webp",
        slug: "vedic-yoga-and-ayurveda-retreat-center-rishikesh-uttarakhand-india"
    },
    {
        name: "Vedanjana Yoga & Ayurveda Panchakarma Center",
        city: "Rishikesh, Uttarakhand, India",
        description: "A specialized Panchakarma and Yoga center in Rishikesh that offers authentic Ayurvedic detox programs, therapeutic yoga sessions, and holistic wellness retreats guided by certified practitioners.",
        rating: 4.5,
        reviews: 155,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vedanjana Yoga Ayurveda/main.webp",
        slug: "vedanjana-yoga-and-ayurveda-panchakarma-center-rishikesh-uttarakhand-india"
    },
    {
        name: "Dr. SIBY's Kerala Ayurveda & Panchakarma Center",
        city: "Himachal Pradesh, India",
        description: "A Kerala-style Ayurvedic treatment center in the Himalayas, bringing authentic South Indian Panchakarma traditions to the North. Specializes in deep tissue therapies, chronic disease management, and rejuvenation programs.",
        rating: 4.6,
        reviews: 175,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Dr SIBY Kerala Ayurveda/main.webp",
        slug: "dr-sibys-kerala-ayurveda-and-panchakarma-center-himachal-india"
    },
    {
        name: "Arogyam Panchkarma Center & Ayurvedic Hospital",
        city: "Haridwar, Uttarakhand, India",
        description: "A comprehensive Ayurvedic hospital in Haridwar offering clinical Panchakarma treatments, herbal medicine consultations, and residential healing programs in a serene riverside setting near the sacred Ganges.",
        rating: 4.5,
        reviews: 200,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center/main.webp",
        slug: "arogyam-panchkarma-center-haridwar-himachal-india"
    },
    {
        name: "Rishikesh Ayurveda Center",
        city: "Rishikesh, Uttarakhand, India",
        description: "A well-established Ayurvedic center in the heart of Rishikesh offering traditional Panchakarma therapies, Ayurvedic consultations, herbal treatments, and yoga-integrated wellness programs.",
        rating: 4.5,
        reviews: 165,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Rishikesh Ayurveda Center/main.webp",
        slug: "rishikesh-ayurveda-center-uttarakhand-india"
    },
    {
        name: "RUDRAMYA – Ayurveda at the Himalayas",
        city: "Himachal Pradesh, India",
        description: "A premium Himalayan Ayurveda retreat offering luxurious wellness experiences amidst breathtaking mountain vistas. Specializes in Panchakarma detox, stress management, and rejuvenation therapies.",
        rating: 4.7,
        reviews: 145,
        priceRange: "$$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/RUDRAMYA Ayurveda/main.webp",
        slug: "rudramya-ayurveda-at-the-himalayas-hospital-himachal-india"
    },
    {
        name: "Himalaya Sanjeevni Ayurveda",
        city: "Dehradun, Uttarakhand, India",
        description: "A traditional Ayurvedic healing center in Dehradun offering classical herbal treatments, Panchakarma therapies, and wellness programs designed to restore balance and vitality in the foothills of the Himalayas.",
        rating: 4.5,
        reviews: 130,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Himalaya Sanjeevni Ayurveda/main.webp",
        slug: "himalaya-sanjeevni-ayurveda-hospital-dehradun-uttarakhand-india"
    },
    {
        name: "Naturoville Wellness Resort",
        city: "Rishikesh, Uttarakhand, India",
        description: "A luxury wellness resort in Rishikesh combining Naturopathy, Ayurveda, and Yoga for comprehensive healing. Offers premium accommodation, therapeutic spa treatments, and personalized wellness programs.",
        rating: 4.6,
        reviews: 210,
        priceRange: "$$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Naturoville Wellness Resort/main.webp",
        slug: "naturoville-wellness-resort-rishikesh-uttarakhand-india"
    },
    {
        name: "Vihana Retreat",
        city: "Rishikesh, Uttarakhand, India",
        description: "A boutique wellness retreat in Rishikesh offering curated Ayurvedic healing journeys, mindfulness programs, and Panchakarma therapies in an intimate and peaceful Himalayan setting.",
        rating: 4.6,
        reviews: 135,
        priceRange: "$$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vihana Retreat/main.webp",
        slug: "vihana-retreat-hospital-rishikesh-uttarakhand-india"
    },
    {
        name: "Prana Spa & Ayurveda (Holy Prana)",
        city: "Rishikesh, Uttarakhand, India",
        description: "A holistic spa and Ayurveda center in Rishikesh offering traditional healing therapies, relaxation treatments, and Panchakarma programs designed to rejuvenate mind, body, and spirit.",
        rating: 4.5,
        reviews: 160,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Prana Spa Ayurveda/main.webp",
        slug: "prana-spa-and-ayurveda-resort-rishikesh-uttarakhand-india"
    },
    {
        name: "Moksha Himalaya Spa Resort",
        city: "Himachal Pradesh, India",
        description: "A luxurious Himalayan spa resort offering world-class Ayurvedic treatments, wellness retreats, and therapeutic programs surrounded by breathtaking mountain scenery and pristine natural beauty.",
        rating: 4.7,
        reviews: 195,
        priceRange: "$$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Moksha Himalaya Spa Resort/main.webp",
        slug: "moksha-himalaya-spa-resort-himachal-india"
    },
    {
        name: "Ayurveda House (Himalayan Ayurveda)",
        city: "Himachal Pradesh, India",
        description: "A traditional Himalayan Ayurveda center offering authentic herbal treatments, Panchakarma therapies, and wellness consultations in the serene mountain environment of Himachal Pradesh.",
        rating: 4.5,
        reviews: 140,
        priceRange: "$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayurveda House Himalayan/main.webp",
        slug: "ayurveda-house-himalayan-ayurveda-hospital-himachal-india"
    },
    {
        name: "AyurVAID Kalmatia – Center of Healing, Almora",
        city: "Almora, Uttarakhand, India",
        description: "A premium AyurVAID center in the tranquil hills of Almora offering evidence-based Ayurvedic treatments, Panchakarma therapies, and personalized healing programs with stunning Himalayan views.",
        rating: 4.7,
        reviews: 170,
        priceRange: "$$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/AyurVAID Kalmatia/main.webp",
        slug: "ayurvaid-kalmatia-center-almora-uttarakhand-india"
    },
    {
        name: "Modi Yoga Retreat",
        city: "Rishikesh, Uttarakhand, India",
        description: "A premier riverside sanctuary in Rishikesh that seamlessly integrates traditional Hatha Yoga philosophy with authentic Ayurvedic Healing standards, offering transformative retreats and wellness programs.",
        rating: 4.8,
        reviews: 320,
        priceRange: "$$$",
        image: "/Center Images/Modi Yoga Retreat/Thumb.jpg",
        slug: "modi-yoga-retreat-rishikesh-india"
    },
    {
        name: "Arogyadham Retreat – Luxury Ayurveda Hotel",
        city: "Rishikesh, Uttarakhand, India",
        description: "A luxury Ayurveda hotel retreat in Rishikesh offering premium accommodation combined with authentic Ayurvedic treatments, Panchakarma therapies, and holistic wellness programs in an elegant setting.",
        rating: 4.6,
        reviews: 185,
        priceRange: "$$$",
        image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Arogyadham Retreat/main.webp",
        slug: "arogyadham-retreat-luxury-ayurveda-hotel-rishikesh-uttarakhand-india"
    }
];

// Read current TopCenters
let topContent = fs.readFileSync('src/pages/TopCenters.tsx', 'utf8');

// Extract existing names
const existingNames = [];
const nameRegex = /name:\s*["']([^"']+)["']/g;
let match;
while ((match = nameRegex.exec(topContent)) !== null) {
    existingNames.push(match[1]);
}

// Filter to only missing centers
const missingCenters = himalayaCenters.filter(c => !existingNames.includes(c.name));

console.log(`Already in TopCenters: ${himalayaCenters.length - missingCenters.length}`);
console.log(`Missing (will be added): ${missingCenters.length}`);
missingCenters.forEach((c, i) => console.log(`  ${i+1}. ${c.name}`));

if (missingCenters.length === 0) {
    console.log("Nothing to add!");
    process.exit(0);
}

// Build the append string
let blocks = missingCenters.map(c => {
    return `    {
      name: "${c.name}",
      city: "${c.city}",
      description: "${c.description.replace(/"/g, '\\"')}",
      rating: ${c.rating},
      reviews: ${c.reviews},
      priceRange: "${c.priceRange}",
      image: "${c.image}",
      slug: "${c.slug}",
    },`;
});

const appendString = '\n    // HIMALAYAS/RISHIKESH SUB CENTERS\n' + blocks.join('\n') + '\n';

// Find insertion point
const nextLineIdx = topContent.indexOf('const staticTreatments = [');
const arrayEndIdx = topContent.lastIndexOf('];', nextLineIdx);

if (arrayEndIdx !== -1) {
    const newContent = topContent.substring(0, arrayEndIdx) + appendString + topContent.substring(arrayEndIdx);
    fs.writeFileSync('src/pages/TopCenters.tsx', newContent, 'utf8');
    console.log(`\nSuccessfully appended ${missingCenters.length} Himalayas sub-centers!`);
} else {
    console.log("Failed to find insertion point.");
}
