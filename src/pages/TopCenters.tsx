import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Star } from "lucide-react";
import centerKerala from "@/assets/center-kerala.jpg";
import centerGoa from "@/assets/center-goa.jpg";
import centerBangalore from "@/assets/center-bangalore.jpg";
import centerRishikesh from "@/assets/center-rishikesh.jpg";
import centerMumbai from "@/assets/center-mumbai.jpg";
import centerChennai from "@/assets/center-chennai.jpg";

const TopCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedTreatment, setSelectedTreatment] = useState("All");

  const cities = ["All", "Goa", "Bangalore", "Kochi", "Mumbai", "Delhi", "Rishikesh", "Chennai", "Kumarakom", "Palakkad", "Idukki", "Kayamkulam", "Mysore", "Uttarakhand", "Dharamshala"];

  const treatments = [
    "All",
    "Panchakarma",
    "Abhyanga",
    "Shirodhara",
    "Kati Basti",
    "Stress & Wellness",
    "Weight Management",
  ];

  const navigate = useNavigate();

  const centers = [
    {
      name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
      city: "Bangalore",
      description: "India's first NABH-accredited AYUSH Hospital integrating Ayurveda, Homeopathy, Yoga & Naturopathy on a 30-acre organic farm",
      specialties: ["Panchakarma", "Yoga", "Naturopathy"],
      rating: 4.9,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/SOUKYA/top center Thumb.jpg",
      slug: "bangalore/soukya" as string | undefined,
    },
    {
      name: "AyurvedaGram Heritage Wellness Centre",
      city: "Bangalore",
      description:
        "Immerse yourself in the authentic spirit of Ayurveda at AyurvedaGram Heritage Wellness Centre, a globally recognized destination for traditional Ayurvedic healing. Rooted in classical Ayurvedic principles and set within a serene heritage village, AyurvedaGram offers holistic therapies guided by experienced Vaidyas. Each treatment is personalized to restore balance of body, mind, and spirit, promoting long-lasting wellness through time-tested natural healing practices.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Chronic Disease Management",
        "Detox & Rejuvenation",
        "Stress Management",
        "Lifestyle Disorder Treatment",
      ],
      rating: 4.7,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/AyurvedaGram/Thumb.jpg",
      locationText: "Bangalore, India",
      slug: "bangalore/ayurvedagram" as string | undefined,
    },
    {
      name: "HimVeda Heritage Wellness Centre",
      city: "Dharamshala",
      description:
        "Immerse yourself in the serene and healing environment of HimVeda, a peaceful Ayurvedic wellness centre located in the Himalayan foothills near Dharamshala. HimVeda is dedicated to authentic Ayurvedic healing, combining classical therapies with nature-centric living for holistic well-being. Rooted in traditional Ayurvedic principles, HimVeda offers personalized treatments guided by experienced Ayurvedic doctors and skilled therapists. Each wellness program is carefully designed to restore balance to the body, mind, and spirit, supporting long-term health through natural, time-tested healing practices in a calm mountain setting.",
      specialties: [
        "Panchakarma",
        "Authentic Himalayan Ayurveda",
        "Chronic Disease Management",
        "Detox & Rejuvenation",
        "Stress & Anxiety Management",
        "Lifestyle Disorder Treatment",
        "Yoga & Meditation Therapy",
      ],
      rating: 4.8,
      reviews: 0,
      priceRange: "Premium Wellness Retreat",
      image: "/Center Images/HimVeda/Thumb.jpeg",
      locationText: "Dharamshala, Himachal Pradesh, India",
      slug: "dharamshala/himveda" as string | undefined,
    },
    {
      name: "Ayuskama Ayurveda",
      city: "Dharamshala",
      description:
        "Ayuskama Ayurveda ek authentic Ayurvedic wellness center hai jo traditional Ayurveda ko modern lifestyle ke saath integrate karta hai. Yeh center Ayurveda, Panchakarma aur holistic healing therapies par focus karta hai, jahan personalized treatment plans experienced Ayurvedic doctors ke guidance mein design kiye jaate hain. Natural therapies, herbal medicines aur sattvic lifestyle ke through Ayuskama long-term health, detoxification aur overall rejuvenation ko promote karta hai. Yeh center chronic health issues, stress management aur preventive healthcare ke liye ek holistic approach provide karta hai.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Detox & Rejuvenation",
        "Stress Management",
        "Chronic Disease Management",
        "Weight Management",
        "Yoga & Meditation",
        "Holistic Healing",
        "Wellness Retreat",
      ],
      rating: 4.8,
      reviews: 0,
      priceRange: "$$$$",
      image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
      locationText: "33 Ayurveda Street, After Tipa, Dharamkot Rd, Dharamkot, Dharamshala, Himachal Pradesh 176216",
      slug: "dharamshala/ayuskama-ayurveda" as string | undefined,
    },
    {
      name: "Somatheeram Ayurvedic Health Resort",
      city: "Kerala",
      description: "World's first Ayurveda retreat offering authentic treatments with German precision and serene beachside location.",
      specialties: ["Panchakarma", "Rejuvenation", "Stress Relief"],
      rating: 4.9,
      reviews: 320,
      priceRange: "$$$",
      image: "/Center Images/somatheeram/Somatheeram 01.jpg",
      slug: "kerala/somatheeram" as string | undefined,
    },
    {
      name: "AyurSoma Ayurveda Royal Retreat",
      city: "Kerala",
      description:
        "Experience world-class Ayurvedic healing at AyurSoma, a premium royal retreat in Kovalam. Combining traditional wisdom with royal luxury, our sanctuary offers authentic Panchakarma, rejuvenation therapies, and personalized wellness programs guided by seasoned Vaidyas in a stunning beachfront setting.",
      specialties: ["Panchakarma", "Royal Retreat", "Beachfront Wellness", "Rejuvenation"],
      rating: 4.8,
      reviews: 0,
      priceRange: "$$$$$",
      image: "/Center Images/AyurSoma Ayurveda/Photo gallery/img 1.jpg",
      slug: "kerala/ayursoma" as string | undefined,
    },
    {
      name: "Kairali – The Ayurvedic Healing Village",
      city: "Palakkad",
      description:
        "Kairali – The Ayurvedic Healing Village ek world-renowned wellness destination hai jo authentic Ayurveda, Panchakarma aur holistic healing par focus karta hai. Lush green surroundings ke beech sthit, yeh NABH-accredited retreat traditional Ayurvedic wisdom ko modern comfort ke saath blend karta hai. Yahan personalized treatment plans, experienced vaidyas aur sattvic lifestyle ke through long-term health, detox aur rejuvenation par kaam kiya jata hai.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Detox & Rejuvenation",
        "Stress Management",
        "Chronic Disease Management",
        "Weight Management",
        "Yoga & Meditation",
        "Holistic Healing",
        "Wellness Retreat",
        "Kerala Ayurveda",
      ],
      rating: 4.9,
      reviews: 280,
      priceRange: "$$$$",
      image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg",
      locationText: "Palakkad, Kerala, India",
      slug: "kerala/kairali-ayurvedic-healing-village" as string | undefined,
    },
    {
      name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
      city: "Rishikesh",
      description:
        "Veda5 is one of India’s most premium Ayurveda & Yoga wellness retreats — combining luxury, nature, and authentic healing. From Himalayan views in Rishikesh to a serene beachfront retreat in Kerala & Goa, Veda5 offers world-class Ayurveda, detox therapies, and holistic rejuvenation.",
      specialties: [
        "Panchakarma",
        "Rejuvenation",
        "Stress Relief",
        "Weight Management",
        "Yoga",
        "Meditation",
        "Naturopathy",
      ],
      rating: 4.9,
      reviews: 420,
      priceRange: "$$$$",
      image: "/Center Images/veda5/veda5-1.jpg",
      slug: "veda5",
      badgeColor: "#D9E3DC",
      locationText: "Rishikesh, Kerala, Goa, India",
    },
    {
      name: "Yan Cure Yoga Retreat & Ayurveda Centre",
      city: "Rishikesh",
      description:
        "Yan Cure Yoga Retreat & Ayurveda Centre mein aap paayenge yoga, Ayurveda aur holistic healing ka perfect sangam. Yeh centre ek shaant aur prakritik environment mein sthit hai, jahan traditional Ayurvedic therapies aur yogic practices ke zariye body, mind aur soul ko balance kiya jaata hai. Experienced Ayurvedic doctors aur certified yoga instructors ke guidance mein, Yan Cure personalized treatment programs offer karta hai jo detoxification, stress relief aur overall rejuvenation par focus karte hain. Yahan ki healing therapies ancient wisdom aur modern wellness approaches ka ek powerful combination hain, jo long-term health aur inner peace ko promote karti hain.",
      specialties: [
        "Panchakarma Therapy",
        "Authentic Ayurveda Treatments",
        "Yoga & Meditation Programs",
        "Detox & Rejuvenation",
        "Stress & Anxiety Management",
        "Lifestyle Disorder Treatment",
        "Wellness Retreat Programs",
      ],
      rating: 4.8,
      reviews: 0,
      priceRange: "$$$$",
      image: "/Center Images/Yan Cure Yoga Retreat/Thumb.webp",
      locationText: "Rishikesh, Uttarakhand, India",
      slug: "rishikesh/yan-cure" as string | undefined,
    },
    {
      name: "🧘‍♂️ Soul Vacation Resort & Wellness Centre",
      city: "Goa",
      description:
        "Immerse yourself in a rejuvenating escape at Soul Vacation, a boutique wellness resort nestled near the tranquil beaches of South Goa. This destination blends serene coastal living with holistic healing, offering an ideal retreat for those seeking relaxation, stress relief, and natural wellness. Rooted in traditional Ayurvedic principles and enhanced with modern wellness therapies, Soul Vacation provides personalized care designed to restore balance to the body, mind, and spirit — promoting deep rejuvenation through time-honored healing practices.",
      specialties: [
        "Panchakarma & Ayurvedic Detox",
        "Holistic Wellness & Stress Relief",
        "Yoga, Meditation & Breathwork",
        "Rejuvenation & Relaxation Packages",
        "Personalized Wellness Planning",
      ],
      rating: 4.8,
      reviews: 0,
      priceRange: "$$$",
      image: "/Center Images/Soul Vacation Resort and Spa/thumb.jpg",
      locationText: "South Goa, India",
      slug: "goa/soul-vacation" as string | undefined,
    },
    {
      name: "SWAN Yoga Retreat & Ayurveda",
      city: "Goa",
      description:
        "Experience authentic yogic living at SWAN Yoga Retreat & Ayurveda, a peaceful ashram-style wellness centre set in the lush hills of North Goa. Rooted in classical Yoga and Ayurveda, the retreat offers a calm space for healing, mental clarity, and inner growth.",
      specialties: [
        "Yoga Retreats & Teacher Training",
        "Authentic Ayurveda Therapies",
        "Panchakarma & Detox Programs",
        "Meditation & Pranayama",
        "Stress Relief & Lifestyle Balance",
      ],
      rating: 4.6,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/SWAN Yoga Retreat/Thumb.jpg",
      locationText: "Assagao, North Goa, India",
      slug: "goa/swan-yoga-retreat" as string | undefined,
    },
    {
      name: "Ananda In The Himalayas",
      city: "Uttarakhand",
      description:
        "Experience ultimate luxury wellness at Ananda In The Himalayas, a world-renowned holistic retreat nestled in the serene Himalayan foothills. Surrounded by pristine forests and overlooking the Ganges valley, Ananda blends ancient Indian wellness wisdom with modern luxury. Rooted in Ayurveda, Yoga, and Vedanta, Ananda offers highly personalized wellness programs guided by expert physicians and therapists. Each journey is designed to rejuvenate the body, calm the mind, and elevate the spirit—creating lasting transformation through mindful living and natural healing practices.",
      specialties: [
        "Ayurveda Therapies",
        "Yoga & Meditation",
        "Detox & Weight Management",
        "Stress Management",
        "Holistic Healing Programs",
      ],
      rating: 4.8,
      reviews: 900,
      priceRange: "$$$$$",
      image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
      locationText: "Uttarakhand, India",
      slug: "uttarakhand/ananda-in-the-himalayas" as string | undefined,
    },
    {
      name: "Namaste Dwaar – Countryside Wellness Retreat",
      city: "Delhi",
      description:
        "Peaceful farmhouse sanctuary near NCR offering authentic Ayurvedic therapies, farm-fresh sattvic food, and compassionate care.",
      specialties: [
        "Panchakarma",
        "Stress & Sleep",
        "Weight Management",
        "Immunity",
        "Skin & Beauty",
      ],
      rating: 4.8,
      reviews: 180,
      priceRange: "$$$",
      image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
      slug: "delhi/namastedwaar" as string | undefined,
      badgeColor: "#EDE8D0",
      locationText: "Near NCR, Delhi, India",
    },
    {
      name: "Ayurmana",
      city: "Kerala",
      description: "Ayurvedic wellness retreat offering authentic therapies and holistic healing in a serene environment.",
      specialties: ["Ayurveda", "Panchakarma", "Wellness"],
      rating: 4.8,
      reviews: 0,
      priceRange: "$$$$",
      image: "/Center Images/Ayurmana center/top center thumb.jpg",
      slug: "kerala/ayurmana" as string | undefined,
      locationText: "Kerala, India",
    },
    {
      name: "Chamundi Hill Palace Ayurvedic Resort",
      city: "Mysore",
      description: "A heritage-inspired Ayurvedic resort offering authentic therapies and a serene healing experience.",
      specialties: ["Ayurveda", "Panchakarma", "Rejuvenation"],
      rating: 4.8,
      reviews: 0,
      priceRange: "$$$$",
      image: "/Center Images/Chamundi Hill Palace/CTA.jpg",
      locationText: "Edakkunnam, Keralak",
      slug: "mysore/chamundi-hill-palace" as string | undefined,
    },
    {
      name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
      city: "Kerala",
      description:
        "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Detox",
        "Yoga & Meditation",
        "Stress & Wellness",
        "Wellness & Rejuvenation",
        "Naturopathy",
        "River-view Stay",
      ],
      rating: 4.8,
      reviews: 220,
      priceRange: "$$$",
      image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
      locationText: "Kannur, Kerala, India",
      slug: "kerala/kairali-heritage" as string | undefined,
    },
    {
      name: "Agni Ayurvedic Village Resort",
      city: "Kerala",
      description:
        "A tranquil wellness hideaway in the heart of Kerala, Agni Ayurvedic Village Resort blends ancient Ayurvedic wisdom with the serenity of nature. Surrounded by lush greenery and peaceful water features, it’s a sanctuary where you can slow down, reset your mind, and allow your body to rejuvenate through time-honored therapies. Expect genuine care, nurturing treatments, and an atmosphere that feels like coming home to yourself.",
      specialties: [
        "Panchakarma",
        "Rejuvenation",
        "Stress Relief",
        "Yoga & Meditation",
      ],
      rating: 4.7,
      reviews: 190,
      priceRange: "$$$",
      image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
      locationText: "Kerala, India",
      slug: "kerala/agni-ayurvedic-village" as string | undefined,
    },
    {
      name: "Dheemahi Kumarakom – Premium Lakeside Retreat",
      city: "Kumarakom",
      description:
        "Nestled on the serene banks of Lake Vembanad, Dheemahi Kumarakom is a premium NABH-accredited sanctuary for authentic healing. Rooted in over 90 years of family heritage, this retreat masterfully blends deep-rooted Ayurvedic wisdom with modern luxury, offering personalized care in a tranquil lakeside haven.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Stress Relief",
        "Pain Management",
        "Wellness & Rejuvenation",
        "Lakeside Retreat",
      ],
      rating: 4.9,
      reviews: 150,
      priceRange: "$$$",
      image: "/Center Images/Dheemahi Ayurvedic Centre/center dp.jpg",
      locationText: "Kumarakom, Kerala, India",
      slug: "kerala/dheemahi-kumarakom" as string | undefined,
    },
    {
      name: "Nagarjuna Ayurveda Centre",
      city: "Kerala",
      description:
        "Nagarjuna Ayurveda Centre is one of India’s most trusted and heritage-rich Ayurvedic healthcare institutions, renowned for its authentic, classical treatment approach. Backed by decades of clinical expertise, the centre follows traditional Ayurvedic principles combined with strict diagnostic protocols to deliver effective, result-oriented therapies.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Chronic Disease Management",
        "Detox & Cleansing",
        "Pain Management",
        "Wellness & Rejuvenation",
      ],
      rating: 4.8,
      reviews: 200,
      priceRange: "$$$",
      image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg",
      locationText: "Kerala, India",
      slug: "kerala/nagarjuna-ayurveda-centre" as string | undefined,
    },
    {
      name: "Sanjeevanam Ayurveda Hospital",
      city: "Kochi",
      description:
        "Experience the future of holistic healthcare at Sanjeevanam, a pioneering integrative hospital in the heart of Kochi. It masterfully blends the ancient wisdom of Ayurveda with the precision of modern medicine, creating a unique and powerful ecosystem for deep healing. Expect evidence-based care in a modern, professional setting, where your journey to wellness is guided by a multi-disciplinary team of experts.",
      specialties: [
        "Integrative Medicine",
        "Panchakarma",
        "Pain Management",
        "Diabetes Care",
        "Yoga & Naturopathy",
      ],
      rating: 4.8,
      reviews: 1700,
      priceRange: "$$$",
      image: "/Center Images/Sanjeevanam/Top center thumbnail.jpg",
      locationText: "Kochi, Kerala, India",
      slug: "kerala/sanjeevanam-ayurveda-hospital" as string | undefined,
    },
    {
      name: "Back to Roots Ayurveda Retreat",
      city: "Idukki",
      description: "Rediscover the roots of true healing at this serene lakeside sanctuary in Idukki. Guided by the wisdom of 4th generation Ayurvedic physicians, this NABH-accredited retreat offers authentic, classical Panchakarma in a pristine natural setting. Expect a deeply personal journey where the focus is on pure, undiluted Ayurveda.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Pain Management",
        "Stress Relief",
        "Lakeside Retreat",
      ],
      rating: 4.9,
      reviews: 100,
      priceRange: "$$$",
      image: "/Center Images/Back to Roots Ayurveda Retreat/top-center thumb.jpg",
      locationText: "Idukki, Kerala, India",
      slug: "kerala/back-to-roots" as string | undefined,
    },
    {
      name: "Dhathri Ayurveda Hospital & Panchakarma Center",
      city: "Kayamkulam",
      description: "Immerse yourself in three centuries of healing wisdom at Dhathri, a NABH-accredited hospital nestled on the serene backwaters of Kerala. Guided by a profound 300-year-old family legacy, this sanctuary offers authentic, traditional Ayurveda and Panchakarma. Expect a deeply healing journey where ancient heritage meets clinical excellence in a tranquil, natural environment.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Backwater Retreat",
        "Pain Management",
        "Stress Relief",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
      locationText: "Kayamkulam, Kerala, India",
      slug: "kerala/dhathri-ayurveda" as string | undefined,
    },
    {
      name: "Krishnendu Ayurveda Hospital",
      city: "Alappuzha",
      description: "Immerse yourself in over 100 years of healing wisdom at Krishnendu, a NABH-accredited hospital in the serene backwaters of Alleppey. Guided by the fourth generation of a renowned physician family, this sanctuary masterfully blends a rich heritage with modern clinical excellence. Expect an authentic and personalized healing journey in a professional and tranquil environment.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Pain Management",
        "Backwater Retreat",
        "Arthritis Care",
        "PCOD/PCOS Treatment",
        "Anti-Aging Therapy",
      ],
      rating: 4.9,
      reviews: 1500,
      priceRange: "$$$",
      image: "/Center Images/Krishnendu Ayurveda Hospital/Thumb.jpg",
      locationText: "Alappuzha, Kerala, India",
      slug: "kerala/krishnendu-ayurveda-hospital" as string | undefined,
    },
    {
      name: "Athreya Ayurvedic Centre",
      city: "Kerala",
      description: "Authentic Ayurvedic care with personalized therapies and holistic healing in Kerala.",
      specialties: ["Ayurveda", "Panchakarma", "Wellness"],
      rating: 4.8,
      reviews: 0,
      priceRange: "$$$$",
      image: "/Center Images/Athreya Ayurvedic Centre/CTA.jpg",
      locationText: "Kerala, India",
      slug: "kerala/athreya-ayurvedic-centre" as string | undefined,
    },
    {
      name: "Ayur Bethaniya Ayurveda Hospital",
      city: "Kerala",
      description:
        "Immerse yourself in holistic healing at Ayur Bethaniya Ayurveda Hospital, a trusted destination for authentic Ayurvedic treatments in the heart of Kerala. Rooted in traditional wisdom and guided by experienced Ayurvedic physicians, the hospital offers personalized therapies designed to restore balance of body, mind, and soul. Set in a calm and healing environment, Ayur Bethaniya combines classical Ayurveda with compassionate care for long-lasting wellness.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Chronic Disease Management",
        "Detox & Rejuvenation",
        "Stress Relief",
        "Lifestyle Disorders",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/Ayur Bethaniya/CTA.jpg",
      locationText: "Kerala, India",
      slug: "kerala/ayur-bethaniya-ayurveda-hospital" as string | undefined,
    },
    {
      name: "Ayushi Ayurvedic Retreat",
      city: "Kerala",
      description:
        "Experience the essence of authentic Ayurveda at Ayushi Ayurvedic Retreat, a peaceful destination dedicated to holistic healing and natural wellness. Rooted in classical Ayurvedic principles, the retreat offers personalized therapies designed to restore balance of body, mind, and spirit.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Chronic Disease Management",
        "Detox & Rejuvenation",
        "Stress Management",
        "Lifestyle Disorder Treatment",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/Ayushi Ayurvedic Retreat/Thumb.jpg",
      locationText: "N Cliff Rd, near Helipad, Varkala, Kerala 695141",
      slug: "kerala/ayushi-ayurvedic-retreat" as string | undefined,
    },
    {
      name: "Sitaram Mountain Retreat",
      city: "Idukki",
      description:
        "Discover profound healing amidst the breathtaking hills of Munnar at Sitaram Mountain Retreat, a globally acclaimed sanctuary for authentic Ayurvedic wellness. Carrying forward a remarkable 104-year family legacy in traditional healing, this NABH-accredited retreat seamlessly blends classical Ayurvedic principles with the therapeutic power of pristine mountain nature.",
      specialties: [
        "Authentic Panchakarma",
        "Chronic Disease Management",
        "Neurological & Lifestyle Disorders",
        "Stress & Mental Health Support",
        "Hormonal Balance & Weight Management",
        "Post-Treatment Rasayana Therapies",
      ],
      rating: 4.8,
      reviews: 928,
      priceRange: "$$$$",
      image: "/Center Images/Sitaram Mountain Retreat/thumb.jpg",
      locationText: "Munnar, Kerala, India",
      slug: "idukki/sitaram-mountain-retreat" as string | undefined,
    },
    {
      name: "Akanta Ayurveda and Yoga Resort",
      city: "Kochi",
      description:
        "Embrace holistic transformation at Akanta Ayurveda & Yoga Cherai, Kerala's exclusive fully-licensed Ayurveda resort harmoniously positioned between the pristine Arabian Sea and tranquil backwaters. As the only yoga retreat center at Cherai Beach licensed as an Ayurvedic hospital, Akanta integrates government-verified Oushadi Clinic medicines with personalized therapeutic protocols.",
      specialties: [
        "Licensed Ayurvedic Hospital Treatments",
        "Detox & Rejuvenation Programs",
        "Stress Relief & Emotional Wellness",
        "Panchakarma & Traditional Therapies",
        "Yoga & Meditation Retreats",
        "Lifestyle Disorder Management",
      ],
      rating: 4.5,
      reviews: 479,
      priceRange: "$$$$",
      image: "/Center Images/Akanta Ayurveda and Yoga Resort/thumb.jpg",
      locationText: "Cherai Beach, Kochi, Kerala, India",
      slug: "kochi/akanta-ayurveda-and-yoga-resort" as string | undefined,
    },
  ];

  return (
    <div className="min-h-screen font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Top Ayurvedic Centers</h1>
          <p className="text-lg text-white/90">
            Discover India's finest Ayurvedic centers and wellness retreats
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Country</label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="India">India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">City / Region</label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Treatment</label>
              <Select value={selectedTreatment} onValueChange={setSelectedTreatment}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  {treatments.map((treatment) => (
                    <SelectItem key={treatment} value={treatment}>
                      {treatment}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Sort By</label>
              <Select defaultValue="rating">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centers
            .filter((center) => {
              const cityMatch = selectedCity === "All" || center.city === selectedCity;
              const treatmentMatch = selectedTreatment === "All" || center.specialties.includes(selectedTreatment);
              return cityMatch && treatmentMatch;
            })
            .map((center, index) => (
              <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <div className="w-full aspect-video overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => { e.currentTarget.src = centerKerala; }}
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{center.name}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1 min-w-0">
                    <MapPin size={14} className="shrink-0 text-primary" />
                    <span
                      className="truncate"
                      title={(center as { locationText?: string }).locationText || `${center.city}, India`}
                    >
                      {(center as { locationText?: string }).locationText || `${center.city}, India`}
                    </span>
                  </p>

                  <p className="text-foreground text-sm mb-4">{center.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {center.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="bg-secondary/30 text-xs px-2 py-1 rounded-full text-secondary-foreground"
                        style={(center as { badgeColor?: string }).badgeColor ? { backgroundColor: (center as { badgeColor?: string }).badgeColor } : undefined}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-500 fill-yellow-500" size={16} />
                      <span className="font-semibold">{center.rating}</span>
                      <span className="text-xs text-muted-foreground">({center.reviews} reviews)</span>
                    </div>
                    <span className="text-muted-foreground font-medium">{center.priceRange}</span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1 font-semibold"
                      onClick={() => {
                        const ext = (center as { externalLink?: string }).externalLink;
                        if (ext) {
                          window.open(ext, "_blank", "noopener,noreferrer");
                          return;
                        }
                        if (center.slug) {
                          navigate(`/centers/${center.slug}`);
                          return;
                        }
                        navigate("#");
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => setQuoteModalOpen(true)}
                      className="flex-1 font-semibold"
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Floating Quote Button */}
      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 font-semibold"
      >
        <Phone size={20} />
        <span className="hidden md:inline">Get Free Quote</span>
      </button>
    </div>
  );
};

export default TopCenters;
