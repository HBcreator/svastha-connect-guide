import { useState, useMemo, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Star, ChevronDown, ChevronUp, Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";
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
  const [sortBy, setSortBy] = useState("rating");
  const [cityOpen, setCityOpen] = useState(false);
  const [treatmentOpen, setTreatmentOpen] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const navigate = useNavigate();

  const centers = [
    {
      name: "SOUKYA - Dr. Mathai's International Holistic Health Center",
      city: "Bangalore",
      description:
        "SOUKYA is a premier integrative health sanctuary in Bangalore, blending ancient Ayurveda, Homeopathy, and Naturopathy with modern medical standards. As India's first NABH-accredited AYUSH hospital, it offers highly personalized clinical protocols on a lush 30-acre organic farm. Guided by Dr. Isaac Mathai, the center specializes in treating chronic conditions and promoting deep metabolic rejuvenation through authentic healing traditions. Guests experience a tranquil environment where sustainable living meets medical excellence for a truly transformative wellness journey. This world-class retreat is dedicated to restoring the harmony of body, mind, and spirit through integrated natural medicine.",
      specialties: [
        "Panchakarma",
        "Holistic Health",
        "Yoga & Meditation",
        "Homeopathy",
        "Naturopathy",
        "Detox & Rejuvenation",
      ],
      rating: 4.9,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/SOUKYA/top center Thumb.jpg",
      slug: "soukya-international-holistic-health-center-bangalore-india" as string | undefined,
    },
    {
      name: "AyurvedaGram Heritage Wellness Center",
      city: "Bangalore",
      description:
        "AyurvedaGram Heritage Wellness Center is a globally recognized destination in Bangalore that offers an authentic immersion into the ancient world of Ayurvedic Healing. Set within a meticulously restored heritage village, the center provides a sanctuary where classical Vedic principles are practiced with deep reverence and precision. Guests receive personalized treatments guided by experienced Vaidyas, complemented by therapeutic yoga, mindful routines, and organic sattvic nutrition. Every healing journey is tailored to restore the delicate balance of body, mind, and spirit through evidence-informed care and time-tested protocols. This tranquil retreat is the perfect choice for those seeking profound detoxification, rejuvenation, and long-term sustainable wellness.",
      specialties: [
        "Authentic Ayurveda",
        "Panchakarma",
        "Heritage Wellness",
        "Detox & Rejuvenation",
        "Stress Management",
        "Vedic Healing",
      ],
      rating: 4.7,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/AyurvedaGram/Thumb.jpg",
      locationText: "Bangalore, India",
      slug: "ayurvedagram-heritage-wellness-center-bangalore-india" as string | undefined,
    },
    {
      name: "Shreyas Yoga Retreat (Nelamangala)",
      city: "Bangalore",
      description:
        "Shreyas Yoga Retreat is a world-class sanctuary near Bangalore that seamlessly blends traditional hatha yoga philosophy with luxury wellness standards. Set amidst lush, peaceful gardens, the retreat offers an authentic yogic lifestyle designed to nurture physical vitality, mental clarity, and spiritual growth. Guests can enjoy a comprehensive range of personalized programs including Ayurveda therapies, guided meditation, and mindful living practices led by expert teachers. The tranquil environment and organic cuisine provide a rejuvenating space for deep relaxation, inner reflection, and sustainable health transformation. Shreyas is dedicated to helping individuals rediscover their inner balance through the timeless wisdom of classical Indian traditions.",
      specialties: [
        "Yoga Retreat",
        "Meditation & Mindfulness",
        "Ayurveda Therapies",
        "Detox & Rejuvenation",
        "Stress Relief",
        "Holistic Wellness",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/Shreyas Yoga Retreat/thumb.jpg",
      locationText: "Nelamangala, Bangalore, India",
      slug: "shreyas-yoga-retreat-center-bangalore-india" as string | undefined,
    },
    {
      name: "Viveda Wellness Village",
      city: "Nashik",
      description:
        "Viveda Wellness Village is a transformative retreat near Nashik that integrates ancient Indian healing sciences with modern wellness practices for complete rejuvenation. Nestled in the tranquil Sahyadri ranges, the retreat offers personalized programs guided by expert practitioners to reconnect individuals with nature and holistic living. Guests can experience a unique combination of authentic Ayurveda, Naturopathy, yoga, and meditation designed to promote deep detoxification and long-term vitality. The peaceful landscape and therapeutic spa treatments create a perfect sanctuary for managing stress, burnout, and lifestyle-related health concerns. Viveda provides a holistic environment where mindful nutrition and expert guidance lead to sustainable physical and emotional well-being.",
      specialties: [
        "Ayurveda & Holistic Therapies",
        "Naturopathy Treatments",
        "Detox & Rejuvenation Programs",
        "Stress & Burnout Management",
        "Yoga & Meditation",
        "Nutrition & Lifestyle Programs",
      ],
      rating: 4.8,
      reviews: 1100,
      priceRange: "$$$$",
      image: "/Center Images/Viveda Wellness Village/Thumb.jpg",
      locationText: "Nashik, Maharashtra, India",
      slug: "viveda-wellness-village-resort-mumbai-india" as string | undefined,
    },
    {
      name: "Naad Wellness",
      city: "Sonepat",
      description:
        "Naad Wellness is a luxury integrative retreat near Delhi dedicated to holistic healing and the restoration of inner balance through ancient wisdom. Inspired by Ayurvedic principles and modern therapeutic science, the center offers curated wellness journeys that harmonize the body, mind, and spirit. Experienced practitioners guide guests through personalized programs including yoga, naturopathy, and mindfulness to support long-term health and inner transformation. Set within a tranquil natural environment, Naad provides a peaceful sanctuary for deep rejuvenation, stress management, and preventive healthcare. Every experience is thoughtfully designed to foster sustainable lifestyle changes and create a foundation for lasting physical and mental vitality.",
      specialties: [
        "Ayurveda Therapies",
        "Detox & Rejuvenation",
        "Stress & Anxiety Management",
        "Yoga & Meditation",
        "Holistic Wellness Programs",
        "Lifestyle & Preventive Health",
      ],
      rating: 4.8,
      reviews: 200,
      priceRange: "$$$$",
      image: "/Center Images/Naad Wellness/Thumb.jpg",
      locationText: "Sonepat, Haryana, Near Delhi NCR, India",
      slug: "naad-wellness-center-delhi-india" as string | undefined,
    },
    {
      name: "Fazlani Nature's Nest Wellness Center",
      city: "Mumbai",
      description:
        "Fazlani Nature's Nest is a premier wellness retreat near Lonavala that blends time-honored natural healing traditions with modern therapeutic excellence. Nestled within lush green landscapes, the center offers a serene environment dedicated to restoring balance through authentic Ayurveda, Naturopathy, and mindful living. Guests can experience personalized programs guided by expert professionals, focusing on deep detoxification, stress relief, and sustainable healthy lifestyles. Every healing journey is complemented by nourishing organic cuisine and rejuvenating experiences designed to enhance physical vitality and mental clarity. This nature-inspired sanctuary provides a peaceful space for guests to unwind, heal, and rediscover their inner strength through holistic and expert care.",
      specialties: [
        "Naturopathy Therapies",
        "Detox & Rejuvenation",
        "Stress Relief Programs",
        "Lifestyle Wellness Programs",
        "Holistic Healing Treatments",
        "Nutrition & Wellness Guidance",
      ],
      rating: 4.7,
      reviews: 1800,
      priceRange: "$$$$",
      image: "/Center Images/Fazlani Natures Nest/Thumb.jpg",
      locationText: "Pune, Maharashtra, India",
      slug: "fazlani-natures-nest-wellness-center-mumbai-india" as string | undefined,
    },
    {
      name: "Atmantan Wellness Resort",
      city: "Pune",
      description:
        "Atmantan Wellness Resort is a world-class luxury retreat overlooking the pristine Mulshi Lake, dedicated to holistic health and metabolic rejuvenation. The resort seamlessly blends traditional Indian healing systems like Ayurveda and Yoga with advanced modern wellness therapies to support lasting physical and mental vitality. Guided by expert physicians, guests experience highly personalized programs focused on deep detoxification, stress management, and sustainable lifestyle transformation. The serene surroundings and nourishing wellness cuisine provide a perfect sanctuary for relaxation, profound healing, and long-term health empowerment. Every detail at Atmantan is thoughtfully designed to help individuals rediscover their inner balance and achieve their unique wellness goals.",
      specialties: [
        "Ayurveda Wellness Programs",
        "Detox & Rejuvenation",
        "Yoga & Meditation Retreats",
        "Stress Relief Programs",
        "Fitness & Weight Management",
        "Holistic Healing Therapies",
      ],
      rating: 4.7,
      reviews: 3000,
      priceRange: "$$$$",
      image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg",
      locationText: "Mulshi, Near Pune, Maharashtra, India",
      slug: "atmantan-wellness-resort-center-pune-india" as string | undefined,
    },
    {
      name: "Toyam By Orchid Hotels",
      city: "Pune",
      description:
        "Toyam by Orchid Hotels is a premier wellness destination near Pune that offers an authentic and immersive journey into the world of traditional Ayurvedic Healing. Surrounded by tranquil landscapes, the retreat provides a peaceful sanctuary where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive personalized care guided by experienced wellness experts, complemented by therapeutic yoga, mindful meditation, and wholesome sattvic nutrition. Every program is thoughtfully designed to restore the delicate balance of body, mind, and spirit while fostering sustainable healthy living habits. This luxurious retreat is the perfect escape for those seeking profound detoxification, inner peace, and a foundation for lasting physical vitality.",
      specialties: [
        "Panchakarma",
        "Ayurvedic Wellness",
        "Detox & Rejuvenation",
        "Stress Management",
        "Yoga & Meditation",
        "Holistic Healing",
      ],
      rating: 4.7,
      reviews: 1200,
      priceRange: "$$$",
      image: "/Center Images/Toyam By Orchid Hotels/Thumb.jpg",
      locationText: "Pune (Bhor), Maharashtra, India",
      slug: "toyam-by-orchid-hotels-wellness-resort-center-pune-india" as string | undefined,
    },
    {
      name: "Dharana At Shillim",
      city: "Pune",
      description:
        "Dharana At Shillim is a world-renowned wellness retreat nestled in the serene Sahyadri mountains, dedicated to holistic healing and profound inner transformation. The center masterfully blends traditional ancient wisdom with modern therapeutic science to create a unique and deeply restorative wellness experience. Guided by a multidisciplinary team of experts, every guest receives a highly personalized program designed to restore metabolic balance, manage stress, and promote long-term vitality. The tranquil natural environment and mindful architecture provide a perfect sanctuary for deep detoxification, spiritual growth, and sustainable lifestyle changes. Dharana is committed to fostering a foundation for lasting physical and mental health through professional, evidence-informed care.",
      specialties: [
        "Holistic Wellness",
        "Mindfulness & Meditation",
        "Detox & Rejuvenation",
        "Stress Relief Programs",
        "Yoga & Healing Therapies",
        "Lifestyle Transformation",
      ],
      rating: 4.8,
      reviews: 3900,
      priceRange: "$$$$",
      image: "/Center Images/Dharana At Shillim/Thumb.jpg",
      locationText: "Shillim, Pune, Maharashtra, India",
      slug: "dharana-at-shillim-wellness-retreat-center-pune-india" as string | undefined,
    },
    {
      name: "The Imperial Spa and Wellness",
      city: "Delhi",
      description:
        "The Imperial Spa and Wellness is a premier luxury sanctuary in New Delhi, blending timeless Eastern healing traditions with sophisticated modern wellness therapies. Nestled within the iconic Imperial Hotel, the center offers a peaceful retreat where classical Ayurvedic principles and professional spa rituals are practiced with exceptional care. Guests can enjoy highly personalized programs designed to restore metabolic balance, alleviate deep-seated stress, and promote profound rejuvenation. Every experience is thoughtfully curated by expert therapists to ensure a transformative journey that harmonizes the body, mind, and spirit in an elegant setting. This world-class facility is dedicated to delivering medical-grade relaxation and long-term vitality for the discerning wellness seeker.",
      specialties: [
        "Luxury Spa",
        "Holistic Wellness",
        "Massage Therapy",
        "Body Rejuvenation",
        "Stress Relief",
        "Relaxation Therapy",
      ],
      rating: 4.8,
      reviews: 8000,
      priceRange: "$$$$",
      image: "/Center Images/The Imperial Spa & Salon/Thumb.jpg",
      locationText: "New Delhi, India",
      slug: "the-imperial-spa-and-wellness-center-delhi-india" as string | undefined,
    },
    {
      name: "ITC Grand Bharat",
      city: "Gurugram",
      description:
        "ITC Grand Bharat is an ultra-luxury all-suite wellness retreat in Gurugram, inspired by India's rich architectural heritage and the timeless wisdom of the Aravallis. The retreat offers a deeply immersive experience where royal grandeur meets authentic Ayurvedic Healing and modern wellness innovation. Guests can undergo personalized rejuvenation programs guided by expert physicians, supported by therapeutic yoga, mindful routines, and curated sattvic nutrition. The tranquil environment and sprawling grounds provide a unique atmosphere for detoxification, stress relief, and sustainable lifestyle transformation. ITC Grand Bharat remains a global benchmark for holistic luxury, dedicated to restoring the balance of body and mind through indigenous healing traditions.",
      specialties: [
        "Luxury Wellness",
        "Ayurvedic Spa",
        "Holistic Healing",
        "Detox Retreat",
        "Stress Relief",
        "Lifestyle Wellness",
      ],
      rating: 4.8,
      reviews: 17000,
      priceRange: "$$$$",
      image: "/Center Images/ITC Grand Bharat/Thumb.jpg",
      locationText: "Gurugram (near New Delhi), India",
      slug: "itc-grand-bharat-wellness-retreat-center-delhi-india" as string | undefined,
    },

    {
      name: "Niraamaya Retreats Surya Samudra",
      city: "Kerala",
      description:
        "Niraamaya Retreats Surya Samudra is a globally recognized luxury destination in Kerala that offers an authentic immersion into the ancient world of coastal Ayurvedic Healing. Perched on a cliff overlooking the Arabian Sea, the retreat provides a peaceful sanctuary where classical Vedic principles and modern clinical standards are practiced with reverence. Guests undergo personalized treatments guided by experienced Vaidyas, complemented by therapeutic yoga, mindful routines, and organic coastal nutrition. Every healing journey is tailored to restore the delicate balance of body, mind, and spirit through time-tested and evidence-informed care. The tranquil beachfront setting and heritage architecture create a unique atmosphere for detoxification, rejuvenation, and sustainable wellness.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Detox & Rejuvenation",
        "Stress Management",
        "Luxury Wellness Retreat",
        "Holistic Healing",
      ],
      rating: 4.7,
      reviews: 5000,
      priceRange: "$$$$",
      image: "/Center Images/Niraamaya Retreats Surya Samudra/Thumb.jpg",
      locationText: "Kerala, India",
      slug: "niraamaya-retreats-surya-samudra-resort-kerala-india" as string | undefined,
    },
    {
      name: "Modi Yoga Retreat",
      city: "Rishikesh",
      description:
        "Modi Yoga Retreat is a premier riverside sanctuary in Rishikesh that seamlessly integrates traditional Hatha Yoga philosophy with authentic Ayurvedic Healing standards. Located on the banks of the holy Ganges, the retreat offers an authentic yogic lifestyle designed to nurture physical vitality, mental clarity, and spiritual growth. Guests can enjoy a comprehensive range of personalized programs including Ayurveda therapies, guided meditation, and mindful living practices led by expert teachers. The tranquil mountain environment and organic cuisine provide a rejuvenating space for deep relaxation, inner reflection, and sustainable health transformation. Modi Yoga Retreat is dedicated to helping individuals rediscover their inner balance through the timeless wisdom of classical Indian traditions.",
      specialties: [
        "Yoga Retreat",
        "Meditation & Mindfulness",
        "Holistic Wellness",
        "Detox & Rejuvenation",
        "Stress Relief",
        "Lifestyle Wellness",
      ],
      rating: 4.7,
      reviews: 600,
      priceRange: "$$$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Modi Yoga Retreat/main.webp",
      locationText: "Rishikesh, Uttarakhand, India",
      slug: "modi-yoga-retreat-center-rishikesh-india" as string | undefined,
    },
    {
      name: "Amanbagh Heritage Wellness Retreat",
      city: "Alwar",
      description:
        "Amanbagh Heritage Wellness Retreat is a world-class sanctuary in Rajasthan, blending Mughal-inspired architectural elegance with profound Ayurvedic Healing traditions. Nestled in the rugged Aravalli hills, the retreat offers a peaceful sanctuary where classical Vedic principles and personalized wellness protocols are practiced with meticulous care. Guests experience a unique combination of authentic Ayurveda, yoga, and meditation designed to promote deep detoxification and long-term physical vitality. The tranquil landscape and therapeutic spa treatments create a perfect sanctuary for managing stress, burnout, and lifestyle-related health concerns. Amanbagh provides a holistic environment where mindful nutrition and expert guidance lead to sustainable physical and emotional well-being.",
      specialties: [
        "Holistic Wellness Therapies",
        "Yoga & Meditation Sessions",
        "Detox & Rejuvenation Programs",
        "Ayurvedic-Inspired Treatments",
        "Stress Relief & Mindfulness",
        "Lifestyle Wellness Plans",
      ],
      rating: 4.8,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/Amanbagh/thumb.jpg",
      locationText: "Alwar, Rajasthan, India",
      slug: "amanbagh-heritage-wellness-retreat-resort-rajasthan-india" as string | undefined,
    },
    {
      name: "HimVeda Heritage Wellness Center",
      city: "Dharamshala",
      description:
        "HimVeda Heritage Wellness Center is a distinguished Ayurvedic sanctuary nestled in the serene Himalayan foothills near Dharamshala, dedicated to authentic classical healing. Rooted in traditional Vedic principles, the center offers personalized treatments guided by highly experienced Ayurvedic doctors and skilled therapists who focus on the root causes of disease. Guests experience an immersive journey featuring professional Panchakarma, chronic disease management, and nature-centric living designed for holistic well-being. The calm mountain environment and specialized sattvic nutrition create a unique atmosphere for detoxification, rejuvenation, and sustainable health restoration. HimVeda remains a trusted destination for those seeking serious, results-driven Ayurvedic care in a peaceful and medically sound setting.",
      specialties: [
        "Panchakarma",
        "Authentic Himalayan Ayurveda",
        "Chronic Disease Management",
        "Detox & Rejuvenation",
        "Stress & Anxiety Management",
        "Lifestyle Disorder Treatment",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "Premium Wellness Retreat",
      image: "/Center Images/HimVeda/Thumb.jpeg",
      locationText: "Dharamshala, Himachal Pradesh, India",
      slug: "himveda-heritage-wellness-center-himachal-india" as string | undefined,
    },
    {
      name: "Sandhya Hot Spring Health Care",
      city: "Manikaran",
      description:
        "Sandhya Hot Spring Health Care is a premier wellness retreat in Manikaran that harnesses the profound healing power of natural geothermal mineral springs. Surrounded by the majestic Himalayan landscapes, the center blends traditional Ayurvedic practices with the unique restorative benefits of therapeutic hot spring therapy. Guests can enjoy personalized wellness programs designed to detoxify the body, alleviate chronic stress, and promote deep physical and mental rejuvenation. The serene environment and professional care create an ideal sanctuary for those seeking natural relief from lifestyle-related conditions and fatigue. Every healing journey is thoughtfully curated to restore inner balance and vitality through the restorative energy of nature and expert medical guidance.",
      specialties: [
        "Hot Spring Therapy",
        "Detox & Rejuvenation",
        "Stress Relief",
        "Natural Healing",
        "Wellness Retreat",
        "Body Relaxation",
      ],
      rating: 4.6,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/Sandhya Hot Spring Health Care/Thumb.jpg",
      locationText: "Manikaran, Himachal Pradesh, India",
      slug: "sandhya-hot-spring-health-care-hospital-himachal-india" as string | undefined,
    },
    {
      name: "Ayuskama Ayurveda",
      city: "Dharamshala",
      description:
        "Ayuskama Ayurveda is a distinguished wellness center in Dharamshala that seamlessly integrates authentic traditional Ayurveda with modern holistic health standards. The center specializes in professional Panchakarma, detoxification, and personalized healing therapies guided by highly experienced Ayurvedic doctors and dedicated therapists. Guests undergo a transformative journey supported by natural herbal medicines, mindful yoga practices, and a balanced sattvic lifestyle designed for long-term health. Set against the peaceful backdrop of the Himalayas, Ayuskama provides a comprehensive approach to managing chronic health issues and promoting preventive wellness. It is an ideal destination for those seeking profound rejuvenation and a sustainable foundation for physical and mental vitality.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Detox & Rejuvenation",
        "Stress Management",
        "Chronic Disease Management",
        "Weight Management",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
      locationText: "Dharamkot, Dharamshala, Himachal Pradesh",
      slug: "ayuskama-ayurveda-center-himachal-india" as string | undefined,
    },
    {
      name: "Somatheeram Ayurvedic Health Resort",
      city: "Kerala",
      description:
        "Somatheeram Ayurvedic Health Resort is the world's first Ayurveda retreat, offering an authentic immersion into ancient healing traditions with clinical precision. Located on a serene beachside in Kerala, the resort provides a peaceful sanctuary where classical Vedic principles are practiced under the guidance of expert physicians. Guests experience personalized treatments complemented by therapeutic yoga, mindful meditation, and nourishing organic cuisine designed for deep metabolic rejuvenation. The tranquil tropical environment and traditional architecture create a unique atmosphere for detoxification, stress relief, and sustainable wellness. Somatheeram remains a global pioneer in delivering professional, evidence-informed Ayurvedic care to restore the harmony of body, mind, and spirit.",
      specialties: [
        "Panchakarma",
        "Rejuvenation",
        "Stress Relief",
        "Holistic Health",
        "Yoga & Meditation",
        "Beachfront Wellness",
      ],
      rating: 4.9,
      reviews: 320,
      priceRange: "$$$",
      image: "/Center Images/somatheeram/Somatheeram 01.jpg",
      slug: "somatheeram-ayurvedic-health-resort-kerala-india" as string | undefined,
    },
    {
      name: "AyurSoma Ayurveda Royal Retreat",
      city: "Kerala",
      description:
        "AyurSoma Ayurveda Royal Retreat is a world-class sanctuary in Kovalam that masterfully blends the grandeur of royal heritage with the profound precision of traditional Ayurvedic Healing. Perched on a stunning beachfront, the retreat offers an authentic and immersive experience where classical Panchakarma and rejuvenation therapies are practiced with uncompromising medical standards. Guests receive highly personalized care guided by seasoned Vaidyas, complemented by therapeutic yoga, mindful meditation, and nourishing organic cuisine. Every healing journey is thoughtfully designed to restore the delicate balance of body, mind, and spirit while fostering sustainable healthy living habits. This premium royal retreat provides a serene and opulent environment for deep detoxification and the restoration of long-term physical vitality.",
      specialties: [
        "Panchakarma",
        "Royal Retreat",
        "Beachfront Wellness",
        "Rejuvenation",
        "Detox & Rejuvenation",
        "Holistic Health",
      ],
      rating: 4.8,
      reviews: 1000,
      priceRange: "$$$$$",
      image: "/Center Images/AyurSoma Ayurveda/Photo gallery/img 1.jpg",
      slug: "ayursoma-ayurveda-royal-retreat-resort-kerala-india" as string | undefined,
    },
    {
      name: "Kalari Kovilakom - The Palace For Ayurveda",
      city: "Palakkad",
      description:
        "Immerse yourself in the authentic discipline of Ayurveda at Kalari Kovilakom � The Palace For Ayurveda, a globally acclaimed wellness retreat rooted in ancient healing traditions. Set within a restored heritage palace, this unique center follows the classical gurukula system, offering a structured and immersive approach to Ayurvedic care. Guided by experienced Vaidyas, every program is tailored to restore balance, detoxify the body, and promote long-term well-being through time-tested therapies and holistic practices. With a strong focus on Panchakarma and intensive healing programs, Kalari Kovilakom provides a highly personalized wellness journey. From therapeutic treatments and sattvic nutrition to yoga and meditation, every element is carefully designed to support deep rejuvenation of body and mind. Ideal for those seeking serious, results-driven Ayurvedic Healing, the center delivers an environment of discipline, authenticity, and transformative care.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Detox & Rejuvenation",
        "Stress Management",
        "Lifestyle Disorder Treatment",
        "Holistic Healing",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/Kalari Kovilakom/Thumb.jpg",
      locationText: "Palakkad, Kerala, India",
      slug: "kalari-kovilakom-ayurveda-hospital-kerala-india" as string | undefined,
    },    {
      name: "Carnoustie Ayurveda & Wellness Resort",
      city: "Mararikulam",
      description:
        "Carnoustie Ayurveda & Wellness Resort is an award-winning beachfront sanctuary in Mararikulam that harmonizes luxury with the profound wisdom of traditional Indian healing. Nestled along the serene shores of Marari Beach, the resort offers an immersive wellness experience rooted in authentic Ayurveda, Yoga, and Naturopathy. Guided by expert Vaidyas, each program is carefully personalized to balance the body’s doshas and restore holistic well-being through professional clinical protocols. Guests can indulge in signature Panchakarma therapies, therapeutic massages, and integrated healing practices designed to detoxify and strengthen immunity. The tranquil coastal environment and lush greenery provide a restorative atmosphere for profound physical rejuvenation and mental clarity in a professional setting.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Rejuvenation Therapy",
        "Weight Management",
        "Stress Management",
        "Pain & Injury Care",
      ],
      rating: 4.7,
      reviews: 3000,
      priceRange: "",
      image: "/Center Images/Carnoustie Ayurveda/Thumb.jpg",
      locationText: "Mararikulam, Kerala, India",
      slug: "carnoustie-ayurveda-wellness-resort-kerala-india" as string | undefined,
    },
    {
      name: "The Nattika Beach Resort",
      city: "Thrissur",
      description:
        "The Nattika Beach Resort is a premier award-winning wellness retreat along the pristine shores of Kerala, dedicated to the authentic essence of traditional Ayurvedic Healing. Rooted in classical Vedic principles and guided by highly experienced physicians, the resort offers a harmonious blend of medical precision, relaxation, and deep rejuvenation. Surrounded by lush tropical greenery and the calming Arabian Sea, Nattika provides personalized therapies designed to restore the balance of body, mind, and spirit. Guests experience a transformative journey supported by therapeutic yoga, mindful routines, and professional clinical care in a serene beachfront environment. The resort is committed to delivering a deeply immersive wellness experience that fosters long-term health empowerment and metabolic vitality.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Detox & Rejuvenation",
        "Stress Management",
        "Weight Management",
        "Lifestyle Disorder Treatment",
      ],
      rating: 4.8,
      reviews: 3500,
      priceRange: "$$$$",
      image: "/Center Images/The Nattika Beach Resort/Thumb.jpg",
      locationText: "Thrissur, Kerala, India",
      slug: "the-nattika-beach-resort-kerala-india" as string | undefined,
    },
    {
      name: "Sitaram Beach Retreat",
      city: "Kerala",
      description:
        "Sitaram Beach Retreat is a premier coastal sanctuary in Kerala that offers an authentic and immersive journey into the traditional science of Ayurvedic Healing. Nestled along the serene shores of the Arabian Sea, the retreat provides a peaceful environment where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors, complemented by therapeutic yoga, mindful meditation, and wholesome organic cuisine. Every program is thoughtfully designed to restore the delicate balance of body, mind, and spirit while fostering sustainable healthy living habits. The tranquil beachfront setting and professional clinical care create an ideal atmosphere for detoxification, stress relief, and profound physical rejuvenation.",
      specialties: [
        "Panchakarma Therapy",
        "Detox & Rejuvenation Programs",
        "Stress & Anxiety Management",
        "Chronic Disease Treatment",
        "Yoga & Meditation",
        "Personalized Ayurvedic Consultations",
      ],
      rating: 4.6,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/Sitaram Beach Retreat/Thumb.jpg",
      locationText: "Kerala, India",
      slug: "sitaram-beach-retreat-resort-kerala-india" as string | undefined,
    },
    {
      name: "Kairali – The Ayurvedic Healing Village",
      city: "Palakkad",
      description:
        "Kairali – The Ayurvedic Healing Village is a world-renowned NABH-accredited sanctuary in Palakkad that masterfully blends traditional Vedic wisdom with modern clinical standards. Set within lush tropical greenery, this heritage retreat offers a highly personalized approach to Panchakarma, chronic disease management, and metabolic rejuvenation. Guests experience an immersive healing journey guided by expert Vaidyas, supported by therapeutic yoga, mindful routines, and a strictly balanced sattvic lifestyle. The serene environment and nature-centric architecture provide a perfect sanctuary for deep detoxification, stress management, and the restoration of long-term vitality. Kairali remains a global benchmark for authentic Kerala Ayurveda, dedicated to delivering transformative health results in a professional and nurturing setting.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Detox & Rejuvenation",
        "Stress Management",
        "Chronic Disease Management",
        "Weight Management",
      ],
      rating: 4.9,
      reviews: 2000,
      priceRange: "$$$$",
      image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg",
      locationText: "Palakkad, Kerala, India",
      slug: "kairali-ayurvedic-healing-village-hospital-kerala-india" as string | undefined,
    },
    {
      name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
      city: "Rishikesh",
      description:
        "Veda5 is a distinguished luxury wellness retreat in Rishikesh that seamlessly integrates authentic Ayurvedic Healing with world-class hospitality and professional medical standards. Nestled in the Himalayan foothills with stunning mountain views, the center offers a peaceful sanctuary where classical Panchakarma and holistic therapies are practiced with meticulous care. Guests undergo a transformative journey guided by expert physicians, featuring therapeutic yoga, mindful meditation, and personalized wellness protocols designed for deep rejuvenation. Every element of the stay is thoughtfully curated to restore metabolic balance, strengthen immunity, and promote long-term physical and mental vitality. Veda5 is committed to helping individuals achieve sustainable well-being through a powerful combination of ancient wisdom and modern luxury.",
      specialties: [
        "Panchakarma",
        "Rejuvenation",
        "Stress Relief",
        "Weight Management",
        "Yoga",
        "Meditation",
      ],
      rating: 4.9,
      reviews: 1000,
      priceRange: "$$$$",
      image: "/Center Images/veda5/veda5-1.jpg",
      slug: "veda5-ayurveda-yoga-wellness-retreat-center-rishikesh-india",
      badgeColor: "#D9E3DC",
      locationText: "Rishikesh, Kerala, Goa, India",
    },
    {
      name: "Yan Cure Yoga Retreat & Ayurveda Center",
      city: "Rishikesh",
      description:
        "Yan Cure Yoga Retreat & Ayurveda Center is a premier holistic sanctuary in Rishikesh that offers a powerful combination of traditional yoga philosophy and authentic Ayurvedic Healing. Located in a tranquil natural environment, the center provides a peaceful space where professional clinical care and mindful living practices are practiced with clinical precision. Guests receive personalized treatment programs guided by experienced Ayurvedic doctors and certified yoga instructors, focusing on deep detoxification and stress management. Every healing journey is designed to restore the harmony of body, mind, and soul through time-tested and evidence-informed therapies. Yan Cure is dedicated to fostering inner peace and long-term vitality through a comprehensive approach to preventive health and professional rejuvenation.",
      specialties: [
        "Panchakarma Therapy",
        "Authentic Ayurveda Treatments",
        "Yoga & Meditation Programs",
        "Detox & Rejuvenation",
        "Stress & Anxiety Management",
        "Lifestyle Disorder Treatment",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/Yan Cure Yoga Retreat/Thumb.webp",
      locationText: "Rishikesh, Uttarakhand, India",
      slug: "yan-cure-yoga-retreat-and-ayurveda-center-rishikesh-india" as string | undefined,
    },
    {
      name: "🧘‍♂️ Soul Vacation Resort & Wellness Center",
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
      reviews: 850,
      priceRange: "$$$",
      image: "/Center Images/Soul Vacation Resort and Spa/thumb.jpg",
      locationText: "South Goa, India",
      slug: "soul-vacation-resort-and-wellness-center-goa-india" as string | undefined,
    },
    {
      name: "SWAN Yoga Retreat & Ayurveda",
      city: "Goa",
      description:
        "SWAN Yoga Retreat is a premier ashram-style sanctuary in North Goa that offers an authentic and immersive journey into the classical science of Yogic living. Nestled in the lush tropical hills, the retreat provides a peaceful space where traditional Yoga, meditation, and Ayurvedic Healing are practiced with uncompromising devotion. Guests can experience personalized programs including authentic Panchakarma, therapeutic breathwork, and mindful routines designed for profound mental clarity. Every element of the stay is thoughtfully curated to restore the harmony of body, mind, and soul through time-tested ashram traditions. This sanctuary is dedicated to helping individuals achieve lasting inner peace and physical vitality in a professional yet soulful environment.",
      specialties: [
        "Yoga Retreats & Teacher Training",
        "Authentic Ayurveda Therapies",
        "Panchakarma & Detox Programs",
        "Meditation & Pranayama",
        "Stress Relief & Lifestyle Balance",
        "Ashram-Style Living",
      ],
      rating: 4.6,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/SWAN Yoga Retreat/Thumb.jpg",
      locationText: "Assagao, North Goa, India",
      slug: "swan-yoga-retreat-and-ayurveda-center-goa-india" as string | undefined,
    },
    {
      name: "Mercure Goa Devaaya Resort – Ayurveda Wellness Center",
      city: "Goa",
      description:
        "The Ayurveda Wellness Center at Mercure Goa Devaaya Resort is a distinguished sanctuary on Divar Island, blending ancient Vedic wisdom with tranquil island living. Perched along the serene backwaters, the center offers an immersive healing experience where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors and therapists, focusing on deep detoxification and lifestyle disorder management. Every healing journey is tailored to restore the natural balance of body, mind, and spirit through professional clinical protocols and mindful integration of yoga. This world-class retreat provides a serene and opulent environment for those seeking profound rejuvenation and long-term health empowerment.",
      specialties: [
        "Panchakarma Therapies",
        "Authentic Ayurveda Treatments",
        "Detox & Rejuvenation Programs",
        "Stress & Lifestyle Management",
        "Chronic Disease Support",
        "Yoga & Meditation Integration",
      ],
      rating: 4.7,
      reviews: 1900,
      priceRange: "$$$$",
      image: "/Center Images/Mercure Goa Devaaya Resort/Thumb.jpg",
      locationText: "Divar Island, Goa, India",
      slug: "mercure-goa-devaaya-resort-ayurveda-wellness-center-goa-india" as string | undefined,
    },
    {
      name: "Ashiyana Yoga Retreat",
      city: "Goa",
      description:
        "Ashiyana Yoga Retreat is a globally renowned sanctuary in North Goa, dedicated to profound personal transformation and the art of mindful coastal living. Set within lush tropical gardens along the serene Mandrem Beach, the retreat offers a unique blend of traditional yoga, meditation, and authentic Ayurvedic Healing. Guests can experience holistic programs guided by experienced teachers and therapists, designed to restore metabolic balance and promote deep inner peace. Every element of the stay is thoughtfully curated to provide a restorative atmosphere for detoxification, stress relief, and the cultivation of long-lasting wellbeing. Ashiyana is committed to helping individuals rediscover their inner strength through a powerful combination of natural beauty and time-tested wellness practices.",
      specialties: [
        "Yoga Retreats",
        "Meditation & Mindfulness",
        "Detox & Rejuvenation",
        "Ayurvedic Therapies",
        "Stress Management",
        "Teacher Training",
      ],
      rating: 4.7,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/Ashiyana Yoga Retreat/Thumb.jpg",
      locationText: "Mandrem Beach, Goa, India",
      slug: "ashiyana-yoga-retreat-center-goa-india" as string | undefined,
    },
    {
      name: "Nalanda Retreat Goa",
      city: "Goa",
      description:
        "Nalanda Retreat Goa is a soulful beachside sanctuary on Mandrem Beach that seamlessly blends traditional yoga philosophy with authentic Ayurvedic Healing standards. The retreat offers a transformative escape where the rhythms of the Arabian Sea meet ancient wellness traditions to create a deeply restorative atmosphere. Guests receive personalized care featuring guided yoga sessions, mindfulness practices, and professional Ayurvedic therapies designed to restore metabolic harmony and inner peace. Every healing journey is thoughtfully curated to support deep detoxification, stress management, and the restoration of physical vitality in a professional coastal setting. Nalanda provides a peaceful and nurturing environment for those seeking profound rejuvenation and a foundation for sustainable health.",
      specialties: [
        "Yoga Retreats",
        "Ayurveda Healing",
        "Detox Programs",
        "Meditation & Mindfulness",
        "Stress Relief",
        "Holistic Wellness",
      ],
      rating: 4.5,
      reviews: 1300,
      priceRange: "$$$$",
      image: "/Center Images/Nalanda Retreat Goa/Thumb.jpg",
      locationText: "Mandrem, North Goa, India",
      slug: "nalanda-retreat-center-goa-india" as string | undefined,
    },
    {
      name: "Ananda In The Himalayas",
      city: "Uttarakhand",
      description:
        "Ananda In The Himalayas is a world-renowned ultra-luxury wellness retreat in the serene Himalayan foothills, dedicated to the profound integration of ancient wisdom and modern clinical excellence. Surrounded by pristine forests and overlooking the Ganges valley, Ananda offers highly personalized programs rooted in Ayurveda, Yoga, and Vedanta. Guests experience a transformative journey guided by expert physicians and therapists, designed to rejuvenate the body, calm the mind, and elevate the spirit through professional protocols. Every element of the stay is thoughtfully curated to provide a restorative atmosphere for detoxification, stress management, and sustainable metabolic health. Ananda remains a global benchmark for holistic luxury, delivering lasting life-transformation in an environment of unparalleled clinical and aesthetic perfection.",
      specialties: [
        "Ayurveda Therapies",
        "Yoga & Meditation",
        "Detox & Weight Management",
        "Stress Management",
        "Holistic Healing Programs",
        "Vedanta Philosophy",
      ],
      rating: 4.8,
      reviews: 900,
      priceRange: "$$$$$",
      image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
      locationText: "Uttarakhand, India",
      slug: "ananda-in-the-himalayas-resort-uttarakhand-india" as string | undefined,
    },
    {
      name: "Namaste Dwaar – Countryside Wellness Retreat",
      city: "Delhi",
      description:
        "Namaste Dwaar is a peaceful countryside sanctuary near Delhi NCR that offers an authentic immersion into the traditional science of Ayurvedic Healing. Nestled within a serene farmhouse setting, the retreat provides a nurturing environment where classical Panchakarma and natural therapies are practiced with medical precision. Guests receive compassionate care guided by experienced physicians, complemented by farm-fresh sattvic food and mindful wellness practices. Every program is thoughtfully designed to restore metabolic balance, improve sleep quality, and promote long-term physical and mental vitality. This rustic yet professional retreat is the perfect escape for those seeking deep detoxification and a sustainable foundation for holistic health.",
      specialties: [
        "Panchakarma",
        "Stress & Sleep",
        "Weight Management",
        "Immunity",
        "Skin & Beauty",
        "Countryside Wellness",
      ],
      rating: 4.9,
      reviews: 1000,
      priceRange: "$$$",
      image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
      slug: "namaste-dwaar-countryside-wellness-retreat-delhi-india" as string | undefined,
      badgeColor: "#EDE8D0",
      locationText: "Near NCR, Delhi, India",
    },
    {
      name: "Ayurmana",
      city: "Kerala",
      description:
        "Ayurmana is a distinguished Ayurvedic wellness sanctuary in Kerala that masterfully blends ancient Vedic wisdom with professional clinical excellence. Set within a tranquil and immersive healing environment, the center offers a highly personalized approach to Panchakarma, chronic disease management, and deep rejuvenation. Guests experience an authentic healing journey guided by expert Vaidyas, supported by therapeutic routines and mindful living practices designed for metabolic harmony. The serene tropical surroundings and professional clinical care provide a perfect sanctuary for deep detoxification and the restoration of long-term vitality. Ayurmana remains a trusted destination for those seeking serious, results-driven Ayurvedic care in a professional and nurturing setting.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Wellness",
        "Detox & Rejuvenation",
        "Holistic Health",
        "Clinical Ayurveda",
      ],
      rating: 4.8,
      reviews: 5000,
      priceRange: "$$$$",
      image: "/Center Images/Ayurmana center/top center thumb.jpg",
      slug: "ayurmana-ayurveda-hospital-kerala-india" as string | undefined,
      locationText: "Panvel, Mumbai, India",
    },
    {
      name: "Chamundi Hill Palace Ayurvedic Resort",
      city: "Mysore",
      description:
        "Chamundi Hill Palace Ayurvedic Resort is a heritage-inspired sanctuary in Kerala that offers an authentic and immersive journey into the traditional science of Ayurvedic Healing. Nestled in a serene and peaceful environment, the resort provides a nurturing atmosphere where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors, focusing on restoring the natural balance of body, mind, and spirit. Every program is thoughtfully designed to support deep detoxification, stress management, and long-term metabolic health through professional protocols. This tranquil heritage retreat provides an ideal space for those seeking profound rejuvenation and sustainable wellness.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Rejuvenation",
        "Detox Therapies",
        "Holistic Wellness",
        "Heritage Stay",
      ],
      rating: 4.8,
      reviews: 1000,
      priceRange: "$$$$",
      image: "/Center Images/Chamundi Hill Palace/CTA.jpg",
      locationText: "Edakkunnam, Kerala",
      slug: "chamundi-hill-palace-ayurvedic-center-kerala-india" as string | undefined,
    },
    {
      name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
      city: "Kerala",
      description:
        "Kairali Heritage Resort is a tranquil riverside sanctuary in Kannur that blends authentic Ayurvedic Healing with the serene beauty of Kerala’s backwaters. Nestled on the banks of the Kattampally River, the resort offers an immersive wellness experience where classical Panchakarma and Naturopathy are practiced with professional medical standards. Guests receive highly personalized care guided by experienced physicians, complemented by therapeutic yoga and mindful island living. Every healing journey is tailored to restore the natural balance of body, mind, and spirit through evidence-informed protocols and nature-centric rejuvenation. This riverside haven provides a peaceful and opulent environment for those seeking profound detoxification and long-term health empowerment.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Detox",
        "Yoga & Meditation",
        "Stress & Wellness",
        "Naturopathy",
      ],
      rating: 4.9,
      reviews: 2000,
      priceRange: "$$$",
      image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
      locationText: "Kannur, Kerala, India",
      slug: "kairali-heritage-resort-kerala-india" as string | undefined,
    },
    {
      name: "Agni Ayurvedic Village Resort",
      city: "Kerala",
      description:
        "Agni Ayurvedic Village Resort is a tranquil wellness sanctuary in the heart of Mumbai’s outskirts, blending ancient Ayurvedic wisdom with the profound serenity of nature. Surrounded by lush tropical greenery and peaceful water features, the resort provides a nurturing environment where guests can slow down and reset through professional clinical care. Guests experience an authentic healing journey featuring classical Panchakarma, therapeutic yoga, and mindful routines designed for deep rejuvenation. Every program is thoughtfully designed to restore metabolic balance and promote long-term physical and mental vitality under the guidance of expert physicians. This sanctuary offers a professional and soulful atmosphere that fosters deep detoxification and the restoration of inner harmony.",
      specialties: [
        "Panchakarma",
        "Rejuvenation",
        "Stress Relief",
        "Yoga & Meditation",
        "Holistic Healing",
        "Nature Retreat",
      ],
      rating: 4.7,
      reviews: 1000,
      priceRange: "$$$",
      image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
      locationText: "Panvel, Mumbai, Maharashtra, India",
      slug: "agni-ayurvedic-village-resort-kerala-india" as string | undefined,
    },
    {
      name: "Dheemahi Kumarakom – Premium Lakeside Retreat",
      city: "Kumarakom",
      description:
        "Dheemahi Kumarakom is a premium lakeside sanctuary on the banks of Lake Vembanad, dedicated to authentic Ayurvedic Healing with over 90 years of family heritage. This NABH-accredited retreat masterfully blends traditional Vedic wisdom with modern luxury, offering a tranquil haven for profound physical and mental rejuvenation. Guests experience highly personalized care guided by expert Vaidyas, focusing on chronic pain management, stress relief, and deep metabolic detoxification. The serene lakeside environment and heritage-inspired architecture provide an ideal atmosphere for restoring balance through evidence-informed clinical protocols. Dheemahi remains a trusted destination for those seeking serious, results-driven Ayurvedic care in a professional and opulent setting.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Stress Relief",
        "Pain Management",
        "Wellness & Rejuvenation",
        "Lakeside Retreat",
      ],
      rating: 4.9,
      reviews: 1000,
      priceRange: "$$$",
      image: "/Center Images/Dheemahi Ayurvedic Centre/center dp.jpg",
      locationText: "Kumarakom, Kerala, India",
      slug: "dheemahi-kumarakom-premium-lakeside-retreat-kerala-india" as string | undefined,
    },
    {
      name: "Kumarakom Lake Resort",
      city: "Kumarakom",
      description:
        "Kumarakom Lake Resort is a world-class heritage retreat on the serene shores of Vembanad Lake, dedicated to authentic Ayurvedic wellness and cultural preservation. Designed with traditional Kerala architecture, the resort offers an immersive healing experience where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care guided by experienced physicians, complemented by therapeutic yoga and peaceful nature-led rejuvenation in a luxurious environment. Every healing journey is tailored to restore the natural balance of body, mind, and spirit through professional clinical standards and mindful island living. This award-winning retreat provides a serene and opulent sanctuary for those seeking profound detoxification and long-term health.",
      specialties: [
        "Ayurvedic Wellness & Rejuvenation",
        "Luxury Heritage Villas",
        "Backwater Cruises",
        "Traditional Kerala Cuisine",
        "Yoga & Holistic Wellness",
        "Panchakarma",
      ],
      rating: 4.8,
      reviews: 8000,
      priceRange: "$$$$",
      image: "/Center Images/kumarakom lake resort/Thumb.jpg",
      locationText: "Kumarakom, Kerala, India",
      slug: "kumarakom-lake-resort-kerala-india" as string | undefined,
    },
    {
      name: "Nagarjuna Ayurveda Center",
      city: "Kerala",
      description:
        "Nagarjuna Ayurveda Center is one of India’s most trusted and heritage-rich clinical institutions, renowned for its authentic and result-oriented approach to traditional care. Backed by decades of pharmaceutical and clinical expertise, the center follows strict diagnostic protocols combined with classical Ayurvedic principles to deliver effective treatments. Guests undergo a transformative journey featuring intensive Panchakarma, chronic disease management, and metabolic rejuvenation guided by a team of expert Vaidyas. The professional clinical environment and dedicated therapeutic care ensure that every element of the stay is focused on restoring long-term health and vitality. Nagarjuna remains a global benchmark for authentic Ayurvedic healthcare, dedicated to delivering transformative results in a professional setting.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Chronic Disease Management",
        "Detox & Cleansing",
        "Pain Management",
        "Wellness & Rejuvenation",
      ],
      rating: 4.8,
      reviews: 1000,
      priceRange: "$$$",
      image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg",
      locationText: "Kerala, India",
      slug: "nagarjuna-ayurveda-center-kerala-india" as string | undefined,
    },
    {
      name: "Sanjeevanam Ayurveda Hospital",
      city: "Kochi",
      description:
        "Sanjeevanam Ayurveda Hospital is a pioneering integrative healthcare institution in Kochi that masterfully blends ancient Vedic wisdom with the precision of modern medicine. The hospital offers a powerful ecosystem for deep healing, featuring evidence-based clinical protocols and professional multidisciplinary care in a state-of-the-art facility. Guests receive highly personalized treatment plans including classical Panchakarma, pain management, and diabetic care designed for long-term health empowerment. The modern and professional environment ensures a seamless healing journey supported by therapeutic yoga, naturopathy, and expert medical guidance. Sanjeevanam is dedicated to delivering results-driven healthcare that restores metabolic balance and promotes sustainable vitality through an integrative approach.",
      specialties: [
        "Integrative Medicine",
        "Panchakarma",
        "Pain Management",
        "Diabetes Care",
        "Yoga & Naturopathy",
        "Modern Ayurveda",
      ],
      rating: 4.8,
      reviews: 1700,
      priceRange: "$$$",
      image: "/Center Images/Sanjeevanam/Top center thumbnail.jpg",
      locationText: "Kochi, Kerala, India",
      slug: "sanjeevanam-ayurveda-hospital-kerala-india" as string | undefined,
    },
    {
      name: "Back to Roots Ayurveda Retreat",
      city: "Idukki",
      description: "Back to Roots Ayurveda Retreat is a serene lakeside sanctuary in Idukki, guided by the profound wisdom of 4th generation Ayurvedic physicians and classical healing traditions. This NABH-accredited retreat offers an authentic and immersive experience where pure, undiluted Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care in a pristine natural setting, focusing on chronic pain management, deep detoxification, and natural stress relief. Every healing journey is thoughtfully designed to restore the delicate balance of body, mind, and spirit through time-tested and evidence-informed clinical protocols. The tranquil environment and professional care create an ideal sanctuary for those seeking serious, results-driven Ayurvedic Healing.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Pain Management",
        "Stress Relief",
        "Lakeside Retreat",
        "Clinical Ayurveda",
      ],
      rating: 4.9,
      reviews: 1200,
      priceRange: "$$$",
      image: "/Center Images/Back to Roots Ayurveda Retreat/top-center thumb.jpg",
      locationText: "Idukki, Kerala, India",
      slug: "back-to-roots-ayurveda-retreat-kerala-india" as string | undefined,
    },
    {
      name: "Dhathri Ayurveda Hospital & Panchakarma Center",
      city: "Kayamkulam",
      description: "Dhathri Ayurveda Hospital & Panchakarma Center is a distinguished sanctuary on the serene backwaters of Kerala, guided by a profound 300-year-old family legacy of clinical excellence. This NABH-accredited hospital offers an authentic immersion into the ancient science of traditional healing, combining classical therapies with modern medical standards. Guests experience a deeply restorative journey featuring professional Panchakarma, chronic pain management, and metabolic rejuvenation in a tranquil natural environment. Every treatment is carefully tailored by experienced physicians based on individual health conditions to ensure effective and long-lasting wellness results. Dhathri remains a global benchmark for heritage-rich Ayurvedic care, dedicated to restoring inner harmony and physical vitality through professional expertise.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Backwater Retreat",
        "Pain Management",
        "Stress Relief",
        "Heritage Wellness",
      ],
      rating: 4.8,
      reviews: 1200,
      priceRange: "$$$",
      image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
      locationText: "Kayamkulam, Kerala, India",
      slug: "dhathri-ayurveda-hospital-kerala-india" as string | undefined,
    },
    {
      name: "Krishnendu Ayurveda Hospital",
      city: "Alappuzha",
      description: "Krishnendu Ayurveda Hospital is a premier NABH-accredited institution in Alappuzha, guided by over a century of healing wisdom and four generations of clinical excellence. Nestled in the serene backwaters, the hospital masterfully blends its rich heritage with modern professional standards to deliver authentic and result-oriented Ayurvedic care. Guests undergo a transformative journey featuring intensive Panchakarma, arthritis care, and specialized rejuvenation therapies designed for long-term health restoration. Every healing program is highly personalized and guided by expert physicians to ensure profound detoxification and the restoration of metabolic balance. The professional and tranquil environment provides a perfect sanctuary for those seeking serious, evidence-informed Ayurvedic Healing.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Pain Management",
        "Backwater Retreat",
        "Arthritis Care",
        "Holistic Healing",
      ],
      rating: 4.9,
      reviews: 1500,
      priceRange: "$$$",
      image: "/Center Images/Krishnendu Ayurveda Hospital/Thumb.jpg",
      locationText: "Alappuzha, Kerala, India",
      slug: "krishnendu-ayurveda-hospital-kerala-india" as string | undefined,
    },
    {
      name: "Athreya Ayurvedic Center",
      city: "Kerala",
      description: "Athreya Ayurvedic Center is a distinguished sanctuary in Kerala that offers an authentic and immersive journey into the traditional science of Ayurvedic Healing. Nestled in a serene and peaceful environment, the center provides a nurturing atmosphere where classical Panchakarma and rejuvenation therapies are practiced with clinical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors, focusing on restoring the natural balance of body, mind, and spirit. Every program is thoughtfully designed to support deep detoxification, stress management, and long-term metabolic health through professional protocols. This tranquil retreat provides an ideal space for those seeking profound rejuvenation and a sustainable foundation for holistic wellness.",
      specialties: [
        "Ayurveda",
        "Panchakarma",
        "Wellness",
        "Rejuvenation",
        "Holistic Health",
        "Detox & Cleansing",
      ],
      rating: 4.8,
      reviews: 1000,
      priceRange: "$$$$",
      image: "/Center Images/Athreya Ayurvedic Centre/CTA.jpg",
      locationText: "Kerala, India",
      slug: "athreya-ayurvedic-center-kerala-india" as string | undefined,
    },
    {
      name: "Ayur Bethaniya Ayurveda Hospital",
      city: "Kerala",
      description:
        "Immerse yourself in holistic healing at Ayur Bethaniya Ayurveda Hospital, a trusted destination for authentic Ayurveda treatments in the heart of Kerala. Rooted in traditional wisdom and guided by experienced Ayurvedic physicians, the hospital offers personalized therapies designed to restore balance of body, mind, and soul. Set in a calm and healing environment, Ayur Bethaniya combines classical Ayurveda with compassionate care for long-lasting wellness.",
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
      slug: "ayur-bethaniya-ayurveda-hospital-kerala-india" as string | undefined,
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
      locationText: "Cliff Rd, Varkala, Kerala",
      slug: "ayushi-ayurvedic-retreat-kerala-india" as string | undefined,
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
      slug: "sitaram-mountain-retreat-idukki-india" as string | undefined,
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
      slug: "akanta-ayurveda-and-yoga-resort-kochi-india" as string | undefined,
    },
    {
      name: "Indus Valley Ayurvedic Center",
      city: "Mysore",
      description:
        "Indus Valley Ayurvedic Center (IVAC) is a luxury Ayurvedic Healing retreat in serene Mysuru, blending classical Kerala Ayurveda with modern wellness standards through personalized programs for body, mind, and spirit.",
      specialties: [
        "Panchakarma",
        "Detox & Rejuvenation",
        "Stress Management",
        "Weight Management",
        "Chronic Disease Management",
        "Pain Management",
        "Lifestyle Disorder Treatment",
        "Beauty & Anti-Aging Therapies",
      ],
      rating: 4.8,
      reviews: 600,
      priceRange: "$$$$",
      image: "/Center Images/Indus Valley Ayurvedic Centre/Thumb.jpg",
      locationText: "Mysuru (Mysore), Karnataka, India",
      slug: "mysore/indus-valley-ayurvedic-center" as string | undefined,
    },
    {
      name: "Shathayu Ayurveda Yoga Retreat",
      city: "Udupi",
      description:
        "Immerse yourself in a serene coastal sanctuary dedicated to authentic Ayurvedic Healing and yogic living. Shathayu Ayurveda Yoga Retreat blends classical Ayurvedic therapies with structured yoga programs, offering a holistic pathway to detoxification, rejuvenation, and lifestyle transformation. Guided by experienced Vaidyas and yoga practitioners, the retreat emphasizes personalized treatment protocols in a peaceful, nature-rich environment—ideal for deep restoration of body and mind.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Yoga & Meditation",
        "Detox Programs",
        "Stress Management",
        "Weight Management",
        "Rejuvenation Therapy",
        "Lifestyle Disorders Treatment",
      ],
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/Shathayu Ayurveda Yoga Retreat/thumb.jpg",
      locationText: "Udupi, Karnataka, India",
      slug: "shathayu-ayurveda-yoga-retreat-banglore-india" as string | undefined,
    },
    {
      name: "Ideal Ayurvedic Resort",
      city: "Kerala",
      description:
        "Ideal Ayurvedic Resort is a distinguished 'Green Leaf' certified sanctuary in Kerala, dedicated to the authentic essence of traditional Ayurvedic Healing. Nestled within 15 acres of lush tropical coconut groves near Kovalam Beach, the resort offers a peaceful and non-commercialized environment for profound clinical care. Guests experience an authentic healing journey featuring classical Panchakarma, chronic disease management, and nature-centric rejuvenation guided by highly experienced physicians. Every treatment is carefully tailored based on individual health conditions to ensure effective and long-lasting wellness results in a professional and nurturing setting. Ideal Ayurvedic Resort remains a trusted destination for those seeking serious, results-driven Ayurvedic care in a tranquil tropical sanctuary.",
      specialties: [
        "Panchakarma",
        "Authentic Ayurveda",
        "Chronic Disease Management",
        "Detox & Rejuvenation",
        "Stress Management",
        "Green Leaf Certified",
      ],
      rating: 4.5,
      reviews: 2100,
      priceRange: "$$$",
      image: "/Center Images/Ideal Ayurvedic Resort/Thumb.jpg",
      locationText: "Kovalam (Chowara), Kerala, India",
      slug: "ideal-ayurvedic-resort-kerala-india" as string | undefined,
    },
    // SOUTH INDIA SUB CENTERS
    {
      name: "Sri Sri Ayurveda Hospital Bengaluru",
      city: "Bengaluru, Karnataka, India",
      description:
        "A NABH-accredited, ISO-certified multispecialty Ayurvedic hospital administered by Sri Sri Ravi Shankar Vidya Mandir Trust. Spanning over 1 lakh sq. ft. with 268 beds, the hospital blends classical Ayurveda, Naturopathy, Yoga, and modern diagnostics. Specialties include Panchakarma, Cancer Care, Pulse Diagnosis, Gynaecology, and Pediatrics. Offers free Nadi Pariksha consultations, 24/7 emergency services, and online consultations worldwide.",
      rating: 4.4,
      reviews: 950,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/1.jpg",
      slug: "sri-sri-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Adyant Ayurveda – Jayanagar",
      city: "Bengaluru, Karnataka, India",
      description:
        "One of Bangalore's most established Ayurvedic clinic chains with multiple branches across the city including Jayanagar, Indiranagar, RR Nagar, Kalyan Nagar, and Bannerghatta Road. Adyant Ayurveda specializes in Panchakarma detox, spine and joint care, skin disorders, infertility, insomnia, and PCOD. Also offers Swarna Bindu Prashana for children's immunity and comprehensive Ayurvedic beauty and rejuvenation therapies. Open daily 8 AM to 8 PM.",
      rating: 4.8,
      reviews: 230,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/3.jpg",
      slug: "adyant-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Vydehi Ayurveda Hospital (VAYU)",
      city: "Bengaluru (Whitefield), Karnataka, India",
      description:
        "Located within the 1,600-bed Vydehi Institute of Medical Sciences & Research Center in Whitefield, VAYU is a complete Kerala Ayurveda treatment facility offering both in-patient and out-patient care. Nestled in a lush green campus, it delivers authentic Ayurveda treatments including Panchakarma, Stress Management, Rejuvenation, Anti-Obesity therapy, and Spine & Joint Care. Experienced Ayurvedic specialists provide personalized, root-cause-focused healing using classical methods.",
      rating: 4.3,
      reviews: 600,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/4.jpg",
      slug: "vydehi-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Keva Ayurveda – BTM Layout",
      city: "Bengaluru, Karnataka, India",
      description:
        "A well-rounded Ayurvedic clinic offering a wide spectrum of treatments from Weight Management and Panchakarma to Infertility, Paralysis, and Women's Care. Keva Ayurveda also accepts medical insurance and features specialized programs like corporate wellness, traveler's detox, and geriatric care packages. Integrates Yoga and Naturopathy alongside classical Ayurveda treatments, providing end-to-end personalized wellness solutions under one roof.",
      rating: 4.5,
      reviews: 250,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/5.webp",
      slug:"keva-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Jayadev Memorial – Rashtrotthana Hospital Ayurveda Dept.",
      city: "Bengaluru, Karnataka, India",
      description:
        "The Ayurveda Department at Rashtrotthana Hospital offers integrative Ayurvedic care within a trusted multispeciality hospital setting in RR Nagar, Bangalore. Combining the wisdom of classical Ayurveda with modern diagnostic support, the department provides comprehensive treatment for lifestyle disorders, musculoskeletal conditions, and chronic ailments. Patients benefit from a full hospital ecosystem including diagnostics, specialist consultations, and inpatient facilities.",
      rating: 4.7,
      reviews: 1490,
      priceRange: "$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/7.jpg",
      slug: "jayadev-memorial-rashtrotthana-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Healing Earth Ayurveda Hospital Bangalore",
      city: "Bengaluru, Karnataka, India",
      description:
        "Healing Earth is a dedicated Ayurvedic wellness center in Bangalore focused on holistic healing through evidence-based Ayurvedic therapies. The center offers personalized Panchakarma programs, rejuvenation treatments, and chronic disease management using authentic herbal medicines and classical treatment protocols. With a serene, therapeutic environment, Healing Earth is designed to restore balance of body, mind, and spirit for patients seeking genuine Ayurvedic care.",
      rating: 4.6,
      reviews: 930,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/8.jpg",
      slug: "healing-earth-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Adivaidyam Ayurveda Hospital",
      city: "Bengaluru, Karnataka, India",
      description:
        "Adivaidyam is a unique Ayurvedic clinic in Banashankari, Bangalore, that combines classical Ayurveda and Yoga under one roof. Led by Dr. Savitha Sagar, the center focuses on reviving traditional healing practices for chronic disorders. Offerings include Panchakarma detox, Kerala treatments, beauty therapies, skin & hair care, and Swarnaprashana for children's immunity. Open daily from 6 AM to 9 PM with a patient-centered, compassionate approach.",
      rating: 4.7,
      reviews: 372,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/10.JPG",
      slug: "adivaidyam-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "IAIM Healthcare Center",
      city: "Bengaluru, Karnataka, India",
      description:
        "The Institute of Ayurveda and Integrative Medicine (I-AIM) Healthcare Center is a NABH-accredited Ayurvedic hospital in North Bangalore backed by the Foundation for Revitalization of Local Health Traditions (FRLHT). I-AIM integrates evidence-based Ayurvedic medicine with contemporary healthcare, offering specialized Panchakarma therapies including Shirodhara, Basti, Nasyam, Vamana, and Raktamokshana. The center is committed to research, education, and patient-centered integrative care.",
      rating: 4.7,
      reviews: 1140,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/11.jpg",
      slug: "iaim-healthcare-center-hospital-bengaluru-india",
    },
    {
      name: "HLC Ayurveda and Nature Cure Hospital",
      city: "Bengaluru (Electronic City), Karnataka, India",
      description:
        "A holistic Ayurveda and Naturopathy hospital in Electronic City, Bangalore, offering a wide range of curative programs including Diabetic Reversal, Spine & Joint care, Obesity Management, Women's Health, Neurology, Dermatology, and more. HLC provides authentic Panchakarma therapies along with inpatient wellness stay facilities, making it ideal for patients seeking immersive, long-term Ayurvedic Healing combined with naturopathic support.",
      rating: 4.4,
      reviews: 180,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/12.JPG",
      slug: "hlc-ayurveda-and-nature-cure-hospital-bengaluru-india",
    },
    {
      name: "PraanaVaidya Ayurvedic Hospital",
      city: "Bengaluru, Karnataka, India",
      description:
        "A premier Ayurvedic healthcare network in Bangalore with 50+ doctors and a track record of 5,000+ surgeries, 13,000+ therapies, and 45,000+ patients treated. PraanaVaidya specializes in a vast range of conditions including Piles, Fistula, Diabetes Reversal, Stroke Rehabilitation, Autoimmune Diseases, Infertility, Varicose Veins, and Keloid Scars. The center combines Ayurvedic medicine with surgical expertise, offering a truly integrative approach to healing.",
      rating: 4.8,
      reviews: 170,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/13.jpg",
      slug: "praana-vaidya-ayurvedic-hospital-bengaluru-india",
    },
    {
      name: "Ramaiah Indic Specialty Ayurveda Hospital",
      city: "Bengaluru, Karnataka, India",
      description:
        "A NABH-accredited Ayurveda restoration hospital associated with the Ramaiah group, offering specialized care in General Ayurveda Medicine, Panchakarma, Women's Health, Paediatrics, Eye & ENT, Proctology, Palliative Care, and Integrative Medicine. Insurance facility is available, and the hospital operates from Bangalore with a branch in Yelahanka. Committed to bringing evidence-based Ayurvedic Healing with the standards of a full-fledged medical institution.",
      rating: 4.8,
      reviews: 450,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/14.jpg",
      slug: "ramaiah-indic-specialty-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "AyurKutira – Panchakarma Center",
      city: "Bengaluru, Karnataka, India",
      description:
        "AyurKutira is a sanctuary for holistic healing in Mahalakshmipuram, Bengaluru, guided by experienced Ayurvedic practitioners with deep expertise in classical treatments. Specialties include personalized Ayurvedic consultations, Panchakarma detox, Rasayana Chikitsa for vitality, post-chemo or post-surgery rejuvenation, and fertility treatments. The center has a particularly strong track record in treating infertility cases, with multiple patient success stories. Open daily 7 AM to 9 PM.",
      rating: 4.9,
      reviews: 140,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/15.JPG",
      slug: "ayurkutira-panchakarma-center-hospital-bengaluru-india",
    },
    {
      name: "Tatkshana Ayurveda Hospital",
      city: "Bengaluru, Karnataka, India",
      description:
        "Tatkshana Ayurveda Hospital is a dedicated Ayurveda treatment center in Bangalore offering authentic classical therapies for a wide range of health conditions. The hospital focuses on evidence-based Ayurvedic care with qualified practitioners, emphasizing personalized treatment protocols rooted in traditional Ayurvedic science. Services span Panchakarma, lifestyle disorder management, and targeted therapies for chronic and acute conditions.",
      rating: 4.8,
      reviews: 300,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/16.png",
      slug: "tatkshana-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Varaprada Ayurvedic Center",
      city: "Bengaluru, Karnataka, India",
      description:
        "Varaprada Ayurvedic Center is a respected Ayurvedic clinic in Bangalore offering traditional healing through time-tested Ayurvedic therapies. The center provides curative and rejuvenative treatments with an emphasis on personalized care, classical formulations, and authentic Panchakarma procedures. With experienced Ayurvedic physicians guiding each patient's journey, Varaprada is a trusted destination for those seeking natural and sustainable wellness solutions.",
      rating: 4.9,
      reviews: 330,
      priceRange: "$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/17.JPG",
      slug: "varaprada-ayurvedic-center-hospital-bengaluru-india",
    },
    {
      name: "SD Ayurveda Mane – Holistic Wellness Center",
      city: "Bengaluru (Electronic City), Karnataka, India",
      description:
        "SD Ayurveda Mane – Holistic Wellness Center is a leading Ayurvedic hospital in Electronic City, Bangalore. Directed by expert physicians, the center is highly renowned for its specialized postnatal (post-pregnancy) care programs, traditional Kerala Ayurveda, authentic Panchakarma, and customized stress and musculoskeletal rehabilitation in a fully residential setting.",
      rating: 5,
      reviews: 10,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/18.jpeg",
      slug: "sd-ayurveda-mane-holistic-wellness-center-hospital-bengaluru-india",
    },
    {
      name: "Ayushman Ayurveda",
      city: "Bengaluru, Karnataka, India",
      description:
        "A specialized Ayurveda treatment center in Bangalore offering a comprehensive range of therapies including Panchakarma, Shirodhara, Abhyangam, Pizhichil, Njavara Kizhi, and Marma Therapy. Ayushman Ayurveda is particularly known for expert pain management solutions covering Back Pain, Sciatica, Arthritis, Osteoarthritis, Cervical Spondylitis, and Fibromyalgia. The center brings together qualified Ayurvedic doctors and skilled therapists for root-cause healing.",
      rating: 4.8,
      reviews: 1390,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/9.JPG",
      slug: "ayushman-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Travancore Ayurveda – Jayanagar",
      city: "Bengaluru, Karnataka, India",
      description:
        "Part of a pan-India Ayurvedic clinic chain with 14+ locations across Karnataka, Telangana, and Andhra Pradesh, Travancore Ayurveda has been recognized as the Top Ayurvedic Clinic at the World Health & Wellness Congress & Awards 2025. The Jayanagar branch offers authentic Kerala-rooted treatments including Panchakarma, pain management, and chronic disease care. In-patient facilities are available, and insurance reimbursement is accepted at select branches.",
      rating: 4.8,
      reviews: 800,
      priceRange: "$$",
      image:
        "/TOP centers/bangalore-hyderabad-chennai-south-india-ayurvedic-centers/Travancore Ayurveda – Jayanagar/main.webp",
      slug: "travancore-ayurveda-hospital-bengaluru-india",
    },
    {
      name: "Kottakkal Arya Vaidya Sala - Mahalingapuram",
      city: "Chennai (Mahalingapuram), Tamil Nadu, India",
      description:
        "The Mahalingapuram branch of Arya Vaidya Sala (AVS), one of India's most iconic Ayurvedic institutions founded in 1902 by Vaidyaratnam P.S. Varier. With over a century of healing heritage, AVS offers classical Ayurvedic medicines, authentic Panchakarma therapies, and doctor consultations rooted in Kerala tradition. This branch provides Vaidya consultations, Oushadhi sales, and Panchakarma services including Shirodhara, Nasyam, Elakizhi, and Navarakizhi using genuine AVS-manufactured herbal oils and formulations.",
      rating: 4.7,
      reviews: 500,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/19.jpg",
      slug: "kottakkal-arya-vaidya-sala-hospital-chennai-india",
    },
    {
      name: "Ayurillam - Home of Ayurvedic Therapy Center",
      city: "Chennai, Tamil Nadu, India",
      description:
        "Ayurillam is a premium Kerala-rooted Ayurvedic therapy center offering high-end holistic wellness programs and Panchakarma treatments designed to purify, rejuvenate, and restore the mind and body. Specialties include Shirodhara, Abhyangam, Kativasthi, Greevavasthi, Nasya, Januvasti, and Podikizhi. The center addresses chronic conditions including back pain, arthritis, migraines, stress, PCOD, sciatica, diabetes, and skin disorders. Treatments are fully personalized based on individual Prakriti assessment by trained male and female therapists.",
      rating: 4.7,
      reviews: 890,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/20.jpg",
      slug: "ayurillam-home-of-ayurvedic-therapy-hospital-chennai-india",
    },
    {
      name: "Dhanwanthralaya Ayurveda Speciality Hospital",
      city: "Chennai (West Tambaram), Tamil Nadu, India",
      description:
        "Established in 2001 by Dr. Vanitha Muralikumar, Dhanwanthralaya is a 30-bed Ayurvedic speciality hospital treating both medical and surgical conditions using natural procedures rooted in classical Ayurvedic Samhithas. Specialities include Kayachikitsa, Gynaecology, Paediatrics, ENT, Surgery, and Psychiatry. Known for effective Panchakarma for back pain, disc bulge, arthritis, fistula, and chronic ailments. Branches in Chennai (West Tambaram, Nandanam) and Delhi, with an international presence through Smrithi Ayur Care in Malaysia.",
      rating: 4.6,
      reviews: 250,
      priceRange: "$$",
      image:
        "/Anchor pages/bangalore-hyderabad-chennai-south-india/Images/21.jpg",
      slug: "dhanwanthralaya-ayurveda-speciality-hospital-chennai-india",
    },

    // KERALA SUB CENTERS
    {
      name: "Kairali - The Ayurvedic Healing Village",
      city: "Palakkad, Kerala, India",
      description:
        "Kairali - The Ayurvedic Healing Village is a world-renowned wellness destination that focuses on authentic Ayurveda, Panchakarma and holistic healing. Nestled in lush greenery, this NABH-accredited retreat blends traditional Ayurvedic wisdom with modern comfort.",
      rating: 4.9,
      reviews: 280,
      priceRange: "$$$$",
      image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg",
      slug: "kairali-the-ayurvedic-healing-village-kerala-india",
    },
    {
      name: "Nagarjuna Ayurveda",
      city: "Kalady, Kerala, India",
      description:
        "Nagarjuna Ayurveda Center is one of India's most trusted and heritage-rich Ayurvedic healthcare institutions, renowned for its authentic, classical treatment approach. Backed by decades of clinical expertise, the center follows traditional Ayurvedic principles combined with strict diagnostic protocols.",
      rating: 4.8,
      reviews: 200,
      priceRange: "$$$",
      image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg",
      slug: "nagarjuna-ayurvedic-center-kerala-india",
    },
    {
      name: "Dhathri Ayurveda Resort",
      city: "Thrissur, Kerala, India",
      description:
        "Immerse yourself in three centuries of healing wisdom at Dhathri, a NABH-accredited hospital nestled on the serene backwaters of Kerala. Guided by a profound 300-year-old family legacy, this sanctuary offers authentic, traditional Ayurveda and Panchakarma.",
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
      slug: "dhathri-ayurveda-hospital-and-retreat-kerala-india",
    },
    {
      name: "Ayurmana Ayurveda Center",
      city: "Kannur, Kerala, India",
      description:
        "Ayurmana Ayurveda Center is a Kerala wellness retreat focused on authentic therapies, physician-led treatment planning, and restorative lifestyle routines. The center blends classical Panchakarma with calm, nature-driven recovery programs designed to support sustainable long-term well-being.",
      rating: 4.8,
      reviews: 234,
      priceRange: "$$$$",
      image: "/Center Images/Ayurmana center/top center thumb.jpg",
      slug: "ayurmana-dharma-ayurvedic-center-kerala-india",
    },
    {
      name: "Parathuvayalil Ayurveda Hospital",
      city: "Perumbavoor, Kochi, Kerala, India",
      description:
        "Parathuvayalil Ayurveda Hospital is a long-standing multispecialty center known for classical Kerala healing with a strong focus on bone, joint, and musculoskeletal care. The hospital combines traditional Marma and Kaya Chikitsa protocols with structured diagnostics, rehabilitation support, and physician-led treatment planning for both acute and chronic conditions.",
      rating: 4.1,
      reviews: 150,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/1.webp",
      slug: "parathuvayalil-ayurveda-hospital-hospital-kerala-india",
    },
    {
      name: "Arya Vaidya Sala (Kottakkal)",
      city: "Kottakkal, Malappuram, Kerala, India",
      description:
        "Arya Vaidya Sala (Kottakkal) is one of the most respected Ayurvedic institutions in India, recognized for preserving classical treatment traditions at large scale. Patients choose AVS for authentic Panchakarma, time-tested formulations, and experienced Vaidyas delivering disciplined, protocol-based care rooted in Kerala Ayurveda heritage.",
      rating: 4.5,
      reviews: 380,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/2.jpg",
      slug: "arya-vaidya-sala-hospital-kerala-india",
    },
    {
      name: "Rasayana Ayurveda Center",
      city: "Ezhakkaranadu, Ernakulam, Kerala, India",
      description:
        "Rasayana Ayurveda Center offers a retreat-style clinical environment focused on detoxification, rejuvenation, and metabolic balance through authentic Ayurvedic therapies. Its programs are commonly selected for digestive disorders, lifestyle diseases, stress management, and long-stay recovery supported by yoga, mindful routines, and sattvic nutrition.",
      rating: 4.8,
      reviews: 210,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/3.webp",
      slug: "rasayana-ayurveda-center-hospital-kerala-india",
    },
    {
      name: "Yantra Ayurvedic Resort",
      city: "Nattika Beach, Thrissur, Kerala, India",
      description:
        "Yantra Ayurvedic Resort is a coastal wellness destination designed for travelers who want Panchakarma and restorative therapies in a beachside setting. The center blends traditional doctor-guided treatment plans with yoga, meditation, and customizable rejuvenation programs, making it suitable for detox, stress reset, and preventive care.",
      rating: 4.1,
      reviews: 520,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/4.jpeg",
      slug: "yantra-ayurvedic-resort-hospital-kerala-india",
    },
    {
      name: "Chakra Ayurvedic Resort",
      city: "Kovalam, Thiruvananthapuram, Kerala, India",
      description:
        "Chakra Ayurvedic Resort combines beachside comfort with structured Ayurveda programs for purification, rejuvenation, weight management, and musculoskeletal wellness. With in-house therapies, yoga support, and a calm resort environment, it is often chosen by wellness travelers seeking practical healing outcomes with a relaxed stay format.",
      rating: 4.4,
      reviews: 110,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/5.jpg",
      slug: "chakra-ayurvedic-resort-hospital-kerala-india",
    },
    {
      name: "Deepanjali Ayur Retreat",
      city: "Chazhur, Thrissur, Kerala, India",
      description:
        "Deepanjali Ayur Retreat is a nature-focused healing campus built around intensive Ayurveda and yoga routines in a low-noise village setting. Its physician-supervised plans are tailored for detox, skin and metabolic concerns, pain conditions, and stress disorders, with daily therapeutic schedules and diet discipline aimed at long-term results.",
      rating: 4.9,
      reviews: 70,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/6.jpg",
      slug: "deepanjali-ayur-retreat-hospital-kerala-india",
    },
    {
      name: "Madukkakuzhy Ayurveda",
      city: "Kanjirappally, Kottayam, Kerala, India",
      description:
        "A family-owned Ayurveda institution with 9 generations of unbroken healing tradition since 1938 - Green Leaf Certified by Kerala Tourism (the highest government recognition for authentic Ayurvedic care) and Diamond Certified Homestay by the Kerala Tourism Department. Founded by Vaidyakalanidhi M.C. Mathew, now stewarded by the 9th generation of the Madukkakuzhy family in the lush mountain landscapes of Idukki. All medicines are prepared in-house from organically grown herbs, customized to each patient's Prakriti. Specialties include arthritis, fibromyalgia, digestive disorders, skin conditions, post-natal care, and pre-conception care with 3-week Panchakarma programs. Global reach spanning 42+ countries with a European center in Bad Bocklet, Germany. Endorsed by Kerala celebrities and international wellness seekers who return year after year.",
      rating: 4.9,
      reviews: 390,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/Madukkakuzhy Ayurveda.webp",
      slug: "madukkakuzhy-ayurveda-retreat-hospital-kerala-india",
    },
  
    // GOA SUB CENTERS
    {
      name: "Ashiyana Yoga Retreat & Ayurveda",
      city: "Ashvem, North Goa, India",
      description:
        "One of Goa's most established eco-wellness Ayurveda retreats, Ashiyana offers residential detox plans, daily yoga, meditation, sattvic food, and long-stay healing experiences in a lush beach garden setting. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.8,
      reviews: 850,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/images/10.jpg",
      slug: "ashiyana-yoga-retreat-center-goa-india",
    },
    {
      name: "Soul Vacation Resort & Wellness Center",
      city: "Colva Beach, South Goa, India",
      description:
        "Immerse yourself in a rejuvenating escape at Soul Vacation, a boutique wellness resort near South Goa beaches. It blends serene coastal living with authentic Ayurveda, stress-relief therapies, and personalized wellness plans for deep rejuvenation. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.8,
      reviews: 1200,
      priceRange: "$$$",
      image: "/Center Images/Soul Vacation Resort and Spa/thumb.jpg",
      slug: "soul-vacation-resort-and-wellness-center-goa-india",
    },
    {
      name: "Veda5 Wellness Retreat - Arambol",
      city: "Arambol, North Goa, India",
      description:
        "A luxury Ayurveda and Yoga retreat spread across lush coconut groves near Arambol Beach, offering Vaidya consultations, Panchakarma detox plans, daily yoga, meditation, and sattvic nutrition. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.8,
      reviews: 130,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/images/7.jpg",
      slug: "veda5-wellness-retreat-hospital-goa-india",
      // detailsDisabled: "veda5-wellness-retreat-hospital-goa-india",
    },
    {
      name: "Health and Ayurveda (ANHC Goa)",
      city: "Calangute, North Goa, India",
      description:
        "Established in 2001, ANHC is one of Goa's most trusted authentic Ayurveda institutions, known for Kerala-standard Panchakarma, yoga, detox, rejuvenation, and therapeutic healing programs in a serene retreat setting. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.9,
      reviews: 180,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/1.png",
      slug: "ayurvedic-natural-health-center-hospital-goa-india",
    },
    {
      name: "Ayur Touch Ayurvedic Healthcare",
      city: "Candolim, North Goa, India",
      description:
        "A popular and affordable Kerala Ayurveda clinic on Candolim Beach Road, Ayur Touch is recognized for authentic Abhyanga massage, Shirodhara, and Panchakarma therapies focused on stress relief and full-body wellness. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.6,
      reviews: 330,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/2.jpg",
      slug: "ayur-touch-ayurvedic-healthcare-hospital-goa-india",
    },
    {
      name: "Yashraj Ayurveda Clinic",
      city: "Calangute, North Goa, India",
      description:
        "A trusted Panchakarma clinic led by Dr. Raju Bhusnar, Yashraj provides consultation-led Ayurveda with detox, Marma, Shirodhara, and condition-specific healing plans for digestive, hormonal, and lifestyle concerns. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.7,
      reviews: 230,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/3.jpg",
      slug: "yashraj-ayurveda-clinic-hospital-goa-india",
    },
    {
      name: "SreeShanti Wellness",
      city: "Nerul, North Goa, India",
      description:
        "An authentic Panchakarma clinic led by Dr. Jijith C. Ravindran, SreeShanti blends classical Kerala therapies with focused care for skin, weight, PCOD, arthritis, digestive, and chronic lifestyle disorders. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.9,
      reviews: 150,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/5.PNG",
      slug: "shree-shanti-wellness-hospital-goa-india",
    },
    {
      name: "Natural Touch Ayurveda",
      city: "Canacona, South Goa, India",
      description:
        "Rooted in Kerala traditional Ayurveda since 1960, Natural Touch offers beachside Abhyanga, Shirodhara, herbal steam therapies, and Panchakarma in a calm natural setting ideal for long-stay wellness seekers. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.9,
      reviews: 130,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/6.jpg",
      slug: "natural-touch-ayurveda-hospital-goa-india",
    },
    {
      name: "KARE Health - Goa",
      city: "Colva Beach, South Goa, India",
      description:
        "A holistic Ayurveda and Yoga retreat in South Goa offering Panchakarma cleanses, dosha consultations, stress-reset programs, Iyengar yoga, and resort-style comfort near Colva Beach. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.9,
      reviews: 680,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/images/14.jpg",
      slug: "kare-health-hospital-goa-india",
    },
    {
      name: "Tattvam on the Beach",
      city: "Arambol, North Goa, India",
      description:
        "A beachside Ayurveda and Yoga wellness retreat featuring Panchakarma programs, Abhyangam, Shirodhara, detox plans, vegetarian meals, and daily yoga for restorative healing in natural surroundings. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 3.9,
      reviews: 450,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Tattvam on the Beach/image 1.webp",
      slug: "tattvam-on-the-beach-resort-goa-india",
    },
    {
      name: "AyurGlow",
      city: "Anjuna, Goa, India",
      description:
        "AyurGlow is a trusted wellness center delivering authentic Panchakarma, rejuvenation therapies, and personalized Ayurveda consultations for stress, lifestyle disorders, skin concerns, and musculoskeletal issues. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.4,
      reviews: 380,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/AyurGlow/image 1.jpg",
      slug: "ayurglow-ayurveda-center-goa-india",
    },
    {
      name: "Goa Sian Spa",
      city: "Arambol, Goa, India",
      description:
        "A premium spa that blends traditional Ayurvedic Healing with curated Asian wellness therapies, offering customized sessions including Abhyanga, Shirodhara, Panchakarma, and holistic rejuvenation. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.3,
      reviews: 320,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Goa Sian Spa/image 1.jpg",
      slug: "goa-sian-spa-center-goa-india",
    },
    {
      name: "Dhara AyurGlow",
      city: "Mapusa, Goa, India",
      description:
        "An established Ayurvedic center known for personalized, root-cause-focused care using classical protocols, premium herbal medicines, and targeted therapies for chronic and lifestyle-related health concerns. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.4,
      reviews: 290,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Dhara AyurGlow/image 1.jpg",
      slug: "dhara-ayurglow-center-goa-india",
    },
    {
      name: "Lotus Goa",
      city: "Orlim, South Goa, India",
      description:
        "A residential nature cure retreat near Varca Beach where Ayurveda, Naturopathy and Yoga run together on one campus, offering classical Panchakarma, Pizhichil, localised Vasti therapies and guided yoga stays. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.3,
      reviews: 400,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Lotus Goa/image 1.jpg",
      slug: "lotus-goa-resort-goa-india",
    },
    {
      name: "Anvi Ayurved",
      city: "Morjim, Goa, India",
      description:
        "Anvi Ayurved offers holistic and organic therapies including Shirodhara, Nasya, Abhyanga, and traditional herbal massage by qualified practitioners, focused on complete mind-body wellness. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.4,
      reviews: 500,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Anvi Ayurved/image 1.jpg",
      slug: "anvi-ayurved-center-goa-india",
    },
    {
      name: "Ayushakti - Goa Branch",
      city: "Porvorim, Goa, India",
      description:
        "A branch of the renowned Ayushakti network, this center is known for Nadi Pariksha-based assessment and customized Panchakarma care for chronic diseases through evidence-backed Ayurveda protocols. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.6,
      reviews: 900,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/Ayushakti Goa Branch/image 1.jpg",
      slug: "ayushakti-goa-branch-center-goa-india",
    },
    {
      name: "Yoga Goa - Ayurveda Retreats",
      city: "Assagao, North Goa, India",
      description:
        "Structured Ayurveda and yoga retreats offering 3 to 21-day healing plans with therapeutic treatments, daily yoga, vegetarian nutrition, and rejuvenation programs in a serene environment. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.5,
      reviews: 550,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Yoga Goa Ayurveda Retreats/image 1.jpg",
      slug: "yoga-goa-ayurveda-retreats-resort-goa-india",
    },
    {
      name: "Ayurveda Goa",
      city: "Arpora & Mandrem, North Goa, India",
      description:
        "Trusted by domestic and international patients since 2008, Ayurveda Goa provides consultation-led Panchakarma and chronic disease management with a practical, non-commercial, patient-first approach. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.7,
      reviews: 1100,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Ayurveda Goa/image 1.jpg",
      slug: "ayurveda-goa-center-goa-india",
    },
    {
      name: "Sai Ayurveda Clinic",
      city: "Colva, Goa, India",
      description:
        "A patient-focused Ayurveda clinic offering personalized consultations, classical Panchakarma, and herbal care for digestive, joint, skin, stress, and lifestyle-related conditions. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.3,
      reviews: 280,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Sai Ayurveda Clinic/image 1.png",
      slug: "sai-ayurveda-clinic-center-goa-india",
    },
    {
      name: "Ayurveda Yoga Village",
      city: "Canacona, Goa, India",
      description:
        "A village-style residential retreat combining classical Ayurvedic therapies, Panchakarma detox, daily yoga, meditation, and sattvic diet for immersive lifestyle reset and long-term wellness. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.5,
      reviews: 480,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/Ayurveda Yoga Village/image 1.jpg",
      slug: "ayurveda-yoga-village-resort-goa-india",
    },
    {
      name: "Abhaya Ayurved",
      city: "Ponda, Goa, India",
      description:
        "A classical Ayurveda treatment center focused on authentic formulations and time-tested protocols for chronic joint, skin, respiratory, neurological, and lifestyle health concerns. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.4,
      reviews: 300,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Abhaya Ayurved/image 1.jpg",
      slug: "abhaya-ayurved-center-goa-india",
    },
    {
      name: "Ayurcare Goa",
      city: "Mandrem, Goa, India",
      description:
        "A comprehensive Ayurveda healthcare center known for personalized treatment plans, diet and lifestyle correction, and Panchakarma therapies for preventive and curative healing. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.5,
      reviews: 520,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Ayurcare Goa/image 1.jpg",
      slug: "ayurcare-goa-center-goa-india",
    },

    // HIMALAYAS/RISHIKESH SUB CENTERS
    {
      name: "Swami Rama Himalayan University Ayurvedic Center",
      city: "Dehradun, Uttarakhand, India",
      description: "A specialized clinical wellness facility located on the lush campus of Swami Rama Himalayan University. Operating under the Himalayan Institute Hospital Trust (HIHT), founded in 1989, the center integrates traditional Ayurvedic healing, yoga sciences, and modern clinical standards to promote physical vitality and mental harmony.",
      rating: 4.6,
      reviews: 180,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Swami Rama Himalayan University/main.webp",
      slug: "swami-rama-himalayan-university-ayurveda-center-dehradun-uttarakhand-india",
    },
    {
      name: "Ayuskama Ayurveda Clinic & Panchakarma Center",
      city: "Rishikesh, Uttarakhand, India",
      description: "A renowned Ayurvedic retreat nestled in the foothills of the Himalayas in Rishikesh, offering authentic Panchakarma therapies, herbal treatments, and personalized wellness programs in a serene natural setting.",
      rating: 4.7,
      reviews: 220,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayuskama Ayurveda Clinic & Panchakarma Centre/main.avif",
      slug: "ayuskama-ayurveda-rishikesh-india",
    },
    {
      name: "Bhole Baba Ayurvedic Hospital & Research Center",
      city: "Ranikhet, Uttarakhand, India",
      description: "A dedicated Ayurvedic hospital and research center in the serene hills of Ranikhet, offering comprehensive Panchakarma therapies, herbal medicine research, and traditional healing programs amidst pristine Himalayan surroundings.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Bhole Baba Ayurvedic Hospital/main.webp",
      slug: "bhole-baba-ayurvedic-hospital-and-research-center-ranikhet-uttarakhand-india",
    },
    {
      name: "Mamgain's Ayurveda Clinic & Panchakarma Center",
      city: "Rishikesh, Uttarakhand, India",
      description: "A trusted Ayurvedic clinic in Rishikesh specializing in classical Panchakarma treatments, chronic disease management, and personalized herbal therapy protocols guided by experienced Vaidyas.",
      rating: 4.6,
      reviews: 190,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Mamgain's Ayurveda Clinic & Panchakarma Center/main.webp",
      slug: "mamgain-ayurvedic-clinic-and-panchakarma-center-rishikesh-uttarakhand-india",
    },
    {
      name: "Haritha Ayurveda Academy & Panchakarma Center",
      city: "Rishikesh, Uttarakhand, India",
      description: "An academy-cum-treatment center in Rishikesh that combines Ayurvedic education with authentic Panchakarma therapies, offering deep detox programs and wellness retreats in a spiritually enriching environment.",
      rating: 4.5,
      reviews: 160,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Haritha Ayurveda Academy & Panchakarma Center/main.webp",
      slug: "haritha-ayurveda-academy-and-panchakarma-center-rishikesh-uttarakhand-india",
    },
    {
      name: "KAYAKALP – Himalayan Research Institute of Yoga & Naturopathy",
      city: "Himachal Pradesh, India",
      description: "A unique Himalayan research institute blending Yoga, Naturopathy, and Ayurveda for holistic healing. Offers residential programs, detox retreats, and therapeutic treatments surrounded by pristine mountain landscapes.",
      rating: 4.5,
      reviews: 140,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/KAYAKALP – Himalayan Research Institute of Yoga & Naturopathy/main.jpg",
      slug: "kayakalp-himalayan-research-institute-of-yoga-and-naturopathy-hospital-himachal-india",
    },
    {
      name: "Vedic Yoga & Ayurveda Retreat Center",
      city: "Rishikesh, Uttarakhand, India",
      description: "A tranquil retreat center in Rishikesh offering an integrated approach of Vedic Yoga and traditional Ayurvedic therapies. Provides customized wellness programs, meditation sessions, and Panchakarma treatments.",
      rating: 4.6,
      reviews: 170,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vedic Yoga & Ayurveda Retreat Center/main.jpg",
      slug: "vedic-yoga-and-ayurveda-retreat-center-rishikesh-uttarakhand-india",
    },
    {
      name: "Vedanjana Yoga & Ayurveda Panchakarma Center",
      city: "Rishikesh, Uttarakhand, India",
      description: "A specialized Panchakarma and Yoga center in Rishikesh that offers authentic Ayurvedic detox programs, therapeutic yoga sessions, and holistic wellness retreats guided by certified practitioners.",
      rating: 4.5,
      reviews: 155,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vedanjana Yoga & Ayurveda Panchakarma Center/main.webp",
      slug: "vedanjana-yoga-and-ayurveda-panchakarma-center-rishikesh-uttarakhand-india",
    },
    {
      name: "Dr. SIBY's Kerala Ayurveda & Panchakarma Center",
      city: "Himachal Pradesh, India",
      description: "A Kerala-style Ayurvedic treatment center in the Himalayas, bringing authentic South Indian Panchakarma traditions to the North. Specializes in deep tissue therapies, chronic disease management, and rejuvenation programs.",
      rating: 4.6,
      reviews: 175,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Dr. SIBY's Ayurveda Center/main.avif",
      slug: "dr-sibys-kerala-ayurveda-and-panchakarma-center-himachal-india",
    },
    {
      name: "Arogyam Panchkarma Center & Ayurvedic Hospital",
      city: "Haridwar, Uttarakhand, India",
      description: "A comprehensive Ayurvedic hospital in Haridwar offering clinical Panchakarma treatments, herbal medicine consultations, and residential healing programs in a serene riverside setting near the sacred Ganges.",
      rating: 4.5,
      reviews: 200,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Arogyam Panchkarma Center & Ayurvedic Hospital/main.JPG",
      slug: "arogyam-panchkarma-center-haridwar-himachal-india",
    },
    {
      name: "Rishikesh Ayurveda Center",
      city: "Rishikesh, Uttarakhand, India",
      description: "A well-established Ayurvedic center in the heart of Rishikesh offering traditional Panchakarma therapies, Ayurvedic consultations, herbal treatments, and yoga-integrated wellness programs.",
      rating: 4.5,
      reviews: 165,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Rishikesh Ayurveda Center/main.avif",
      slug: "rishikesh-ayurveda-center-uttarakhand-india",
    },
    {
      name: "RUDRAMYA – Ayurveda at the Himalayas",
      city: "Himachal Pradesh, India",
      description: "A premium Himalayan Ayurveda retreat offering luxurious wellness experiences amidst breathtaking mountain vistas. Specializes in Panchakarma detox, stress management, and rejuvenation therapies.",
      rating: 4.7,
      reviews: 145,
      priceRange: "$$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/RUDRAMYA – Ayurveda at the Himalayas/main.webp",
      slug: "rudramya-ayurveda-at-the-himalayas-hospital-himachal-india",
    },
    {
      name: "Himalaya Sanjeevni Ayurveda",
      city: "Dehradun, Uttarakhand, India",
      description: "A traditional Ayurvedic healing center in Dehradun offering classical herbal treatments, Panchakarma therapies, and wellness programs designed to restore balance and vitality in the foothills of the Himalayas.",
      rating: 4.5,
      reviews: 130,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Himalaya Sanjeevni Ayurveda/main.webp",
      slug: "himalaya-sanjeevni-ayurveda-hospital-dehradun-uttarakhand-india",
    },
    {
      name: "Naturoville Wellness Resort",
      city: "Rishikesh, Uttarakhand, India",
      description: "A luxury wellness resort in Rishikesh combining Naturopathy, Ayurveda, and Yoga for comprehensive healing. Offers premium accommodation, therapeutic spa treatments, and personalized wellness programs.",
      rating: 4.6,
      reviews: 210,
      priceRange: "$$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Naturoville Wellness Resort/main.jpg",
      slug: "naturoville-wellness-resort-rishikesh-uttarakhand-india",
    },
    {
      name: "Vihana Retreat",
      city: "Rishikesh, Uttarakhand, India",
      description: "A boutique wellness retreat in Rishikesh offering curated Ayurvedic healing journeys, mindfulness programs, and Panchakarma therapies in an intimate and peaceful Himalayan setting.",
      rating: 4.6,
      reviews: 135,
      priceRange: "$$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Vihana Retreat/main.jpg",
      slug: "vihana-retreat-hospital-rishikesh-uttarakhand-india",
    },
    {
      name: "Prana Spa & Ayurveda (Holy Prana)",
      city: "Rishikesh, Uttarakhand, India",
      description: "A holistic spa and Ayurveda center in Rishikesh offering traditional healing therapies, relaxation treatments, and Panchakarma programs designed to rejuvenate mind, body, and spirit.",
      rating: 4.5,
      reviews: 160,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Prana Spa & Ayurveda (Holy Prana)/main.webp",
      slug: "prana-spa-and-ayurveda-resort-rishikesh-uttarakhand-india",
    },
    {
      name: "Moksha Himalaya Spa Resort",
      city: "Himachal Pradesh, India",
      description: "A luxurious Himalayan spa resort offering world-class Ayurvedic treatments, wellness retreats, and therapeutic programs surrounded by breathtaking mountain scenery and pristine natural beauty.",
      rating: 4.7,
      reviews: 195,
      priceRange: "$$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Moksha Himalaya Spa Resort/main.webp",
      slug: "moksha-himalaya-spa-resort-himachal-india",
    },
    {
      name: "Ayurveda House (Himalayan Ayurveda)",
      city: "Himachal Pradesh, India",
      description: "A traditional Himalayan Ayurveda center offering authentic herbal treatments, Panchakarma therapies, and wellness consultations in the serene mountain environment of Himachal Pradesh.",
      rating: 4.5,
      reviews: 140,
      priceRange: "$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Ayurveda House (Himalayan Ayurveda)/main.jpg",
      slug: "ayurveda-house-himalayan-ayurveda-hospital-himachal-india",
    },
    {
      name: "AyurVAID Kalmatia – Center of Healing, Almora",
      city: "Almora, Uttarakhand, India",
      description: "A premium AyurVAID center in the tranquil hills of Almora offering evidence-based Ayurvedic treatments, Panchakarma therapies, and personalized healing programs with stunning Himalayan views.",
      rating: 4.7,
      reviews: 170,
      priceRange: "$$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/AyurVAID Kalmatia/main.webp",
      slug: "ayurvaid-kalmatia-center-almora-uttarakhand-india",
    },
    {
      name: "Arogyadham Retreat – Luxury Ayurveda Hotel",
      city: "Rishikesh, Uttarakhand, India",
      description: "A luxury Ayurveda hotel retreat in Rishikesh offering premium accommodation combined with authentic Ayurvedic treatments, Panchakarma therapies, and holistic wellness programs in an elegant setting.",
      rating: 4.6,
      reviews: 185,
      priceRange: "$$$",
      image: "/TOP centers/himalayas-rishikesh-uttarakhand-north-east/Arogyadham Retreat – Luxury Ayurveda Hotel/main.webp",
      slug: "arogyadham-retreat-luxury-ayurveda-hotel-rishikesh-uttarakhand-india",
    },

    // DELHI & NORTH INDIA SUB CENTERS
    {
      name: "Maharishi Ayurveda Hospital",
      city: "New Delhi, India",
      description: "A premier Ayurvedic hospital in Delhi offering authentic Maharishi Ayurveda treatments including Panchakarma, pulse diagnosis, and holistic wellness programs rooted in Vedic traditions.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Maharishi Ayurveda Hospital/main.avif",
      slug: "maharishi-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)",
      city: "New Delhi, India",
      description: "The Delhi branch of the legendary Kottakkal Arya Vaidya Sala, offering authentic Kerala Ayurvedic treatments, Panchakarma therapies, and classical herbal formulations in the capital city.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Arya Vaidya Sala - Ayurvedic Hospital & Research Center (Delhi)/main.jpg",
      slug: "arya-vaidya-sala-delhi-ncr-india",
    },
    {
      name: "TarunVeda Ayurveda Hospital",
      city: "New Delhi, India",
      description: "A dedicated Ayurvedic hospital in Delhi specializing in classical treatments, Panchakarma detox, chronic disease management, and personalized herbal therapy protocols.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/TarunVeda Ayurveda Hospital/main.webp",
      slug: "tarunveda-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "SKK Ayurveda & Panchakarma",
      city: "New Delhi, India",
      description: "A specialized Ayurveda and Panchakarma center in Delhi offering comprehensive detox programs, chronic disease treatments, and rejuvenation therapies guided by experienced practitioners.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/SKK Ayurveda & Panchakarma/main.jpg",
      slug: "skk-ayurveda-and-panchakarma-hospital-new-delhi-india",
    },
    {
      name: "Aprasu Ayurvedic Hospital",
      city: "New Delhi, India",
      description: "A well-established Ayurvedic hospital in North Delhi providing classical Ayurvedic treatments, Panchakarma therapies, and holistic healthcare solutions for chronic and acute conditions.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Aprasu Ayurvedic Hospital/main.webp",
      slug: "aprasu-ayurvedic-hospital-north-delhi-india",
    },
    {
      name: "Sanjeevani Ayurveda",
      city: "New Delhi, India",
      description: "A trusted Ayurvedic healthcare center in Delhi offering traditional healing therapies, Panchakarma treatments, and wellness programs designed for urban lifestyle disorders.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Sanjeevani Ayurveda/main.webp",
      slug: "sanjeevani-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "Sri Sri Ayurveda Panchakarma Ayurveda Center",
      city: "New Delhi, India",
      description: "Founded on the principles of Sri Sri Ravi Shankar, this center offers authentic Panchakarma detox, Ayurvedic consultations, and holistic wellness programs in a serene environment.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Karma Ayurveda Hospital/main.webp",
      slug: "sri-sri-ayurveda-panchakarma-center-new-delhi-india",
    },
    {
      name: "Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)",
      city: "New Delhi, India",
      description: "An authentic Kerala-style Ayurvedic clinic in Delhi offering traditional Panchakarma treatments, herbal therapies, and wellness programs by experienced Kerala Ayurveda practitioners.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)/main.jpg",
      slug: "kerala-ayurveda-life-panchakarma-clinic-new-delhi-india",
    },
    {
      name: "Apollo AyurVAID Hospitals (Nehru Enclave)",
      city: "New Delhi, India",
      description: "Part of the Apollo healthcare network, this AyurVAID center offers evidence-based classical Ayurveda treatments, Panchakarma therapies, and integrated wellness programs.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Apollo AyurVAID Hospitals (Nehru Enclave)/main.jpeg",
      slug: "apollo-ayurvaid-life-hospital-new-delhi-india",
    },
    {
      name: "Aasha Ayurveda",
      city: "New Delhi, India",
      description: "A compassionate Ayurvedic center in Delhi offering personalized treatments, Panchakarma detox programs, and natural healing solutions for a wide range of health conditions.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Aasha Ayurveda Centre/main.webp",
      slug: "aasha-ayurveda-center-new-delhi-india",
    },
    {
      name: "Karma Ayurveda Hospital",
      city: "New Delhi, India",
      description: "A specialized Ayurvedic hospital in Delhi focusing on kidney care, chronic disease management, and traditional Ayurvedic treatments with a modern clinical approach.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Karma Ayurveda Hospital/main.webp",
      slug: "karma-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "Nirmal Ayurved & Panchkarm Clinic",
      city: "New Delhi, India",
      description: "A dedicated Ayurvedic clinic in Delhi offering authentic Panchakarma treatments, herbal medicine consultations, and holistic wellness programs for chronic conditions.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/12.jpg",
      slug: "nirmal-ayurved-panchkarm-clinic-hospital-new-delhi-india",
    },
    {
      name: "AyurNava Kerala Ayurveda Hospital",
      city: "New Delhi, India",
      description: "A Kerala-style Ayurveda hospital in Delhi bringing authentic South Indian healing traditions to North India, specializing in Panchakarma and traditional herbal therapies.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)/main.jpg",
      slug: "ayurnava-kerala-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "Kurias Earth Ayurveda Hospital",
      city: "New Delhi, India",
      description: "An Ayurvedic hospital in Delhi combining earth-based natural healing with classical Ayurvedic treatments, offering Panchakarma, herbal therapies, and wellness consultations.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/14.jpg",
      slug: "kurias-earth-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "Mirasa Ayurveda",
      city: "New Delhi, India",
      description: "A modern Ayurvedic center in Delhi offering comprehensive treatments, Panchakarma detox, skin and hair care therapies, and personalized wellness programs.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/15.webp",
      slug: "mirasa-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "Ayurveda Kendra (Dr. Sudha Asokan)",
      city: "New Delhi, India",
      description: "A renowned Ayurvedic clinic led by Dr. Sudha Asokan, offering expert consultations, classical Ayurvedic treatments, Panchakarma therapies, and holistic health programs in Delhi.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/16.webp",
      slug: "ayurveda-kendra-hospital-delhi-india",
    },
    {
      name: "All India Institute of Ayurveda (AIIA)",
      city: "New Delhi, India",
      description: "India's apex Ayurvedic institution under the Ministry of AYUSH, offering world-class Ayurvedic treatments, research-driven therapies, and Panchakarma programs with government-backed excellence.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/17.webp",
      slug: "all-india-institute-of-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)",
      city: "New Delhi, India",
      description: "A prestigious government Ayurvedic college and hospital in Delhi offering affordable classical Ayurvedic treatments, Panchakarma, and holistic healthcare with academic excellence.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/18.webp",
      slug: "ch-brahm-prakash-ayurved-charak-sansthan-hospital-new-delhi-india",
    },
    {
      name: "Sri Vaidya Ayurveda Panchakarma",
      city: "New Delhi, India",
      description: "A trusted Ayurvedic Panchakarma center in Delhi offering authentic detox treatments, herbal consultations, and personalized wellness programs guided by experienced Vaidyas.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/19.jpg",
      slug: "sri-vaidya-ayurveda-panchkarma-hospital-new-delhi-india",
    },
    {
      name: "Kerala Ayurveda Wellness Clinic – East of Kailash",
      city: "New Delhi, India",
      description: "An authentic Kerala Ayurveda wellness clinic in East of Kailash, Delhi, offering traditional Panchakarma treatments, therapeutic massages, and holistic healing programs.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/TOP centers/delhi/Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)/main.jpg",
      slug: "kerala-ayurveda-wellness-center-new-delhi-india",
    },
    {
      name: "Holy Family Hospital – Ayurveda Department",
      city: "New Delhi, India",
      description: "The Ayurveda department of the renowned Holy Family Hospital in Delhi, offering integrated Ayurvedic treatments alongside modern medical care for comprehensive patient wellness.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/21.webp",
      slug: "holy-family-ayurveda-hospital-new-delhi-india",
    },
    {
      name: "A & U Tibbia College & Hospital – Panchakarma",
      city: "New Delhi, India",
      description: "A historic Unani and Ayurvedic college-hospital in Delhi offering classical Panchakarma treatments, Ayurvedic consultations, and traditional healing therapies at affordable rates.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/22.webp",
      slug: "a-and-u-tibbia-college-hospital-new-delhi-india",
    },
    {
      name: "Kairali The Ayurvedic Healing Village – Delhi NCR",
      city: "New Delhi, India",
      description: "The Delhi NCR branch of the famous Kairali Ayurvedic Healing Village, offering premium Panchakarma treatments, wellness packages, and authentic Kerala Ayurvedic therapies.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/23.webp",
      slug: "kairali-the-ayurvedic-healing-village-center-new-delhi-india",
    },
    {
      name: "Sanjivani Ayurvedic Research Institute",
      city: "Delhi NCR, India",
      description: "A research-oriented Ayurvedic institute in Delhi NCR offering evidence-based traditional treatments, Panchakarma therapies, and clinical research-driven wellness programs.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/24.jpg",
      slug: "sanjivani-ayurveda-center-delhi-ncr-india",
    },
    {
      name: "Sri Sri Tattva Panchakarma – Delhi",
      city: "New Delhi, India",
      description: "A Sri Sri Tattva branded Panchakarma center in Delhi offering authentic Ayurvedic detox treatments, stress management programs, and holistic wellness therapies.",
      rating: 4.5,
      reviews: 150,
      priceRange: "$$",
      image: "/Anchor pages/Delhi/images/25.webp",
      slug: "sri-sri-tattva-panchkarma-center-new-delhi-india",
    },

    // MUMBAI, PUNE, NASHIK & WEST INDIA SUB CENTERS
    {
      name: "Bharati Ayurved Hospital",
      city: "Pune, Maharashtra, India",
      description: "A prestigious Ayurvedic teaching hospital in Pune offering classical treatments, advanced Panchakarma, and holistic wellness programs integrated with comprehensive medical care.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Bharati Ayurved Hospital/image 1.webp",
      slug: "bharati-ayurved-hospital-pune-india",
    },
    {
      name: "Sukhayu Ayurveda & Panchakarma",
      city: "Pune, Maharashtra, India",
      description: "A dedicated Ayurvedic clinic in Pune specializing in authentic Panchakarma therapies, herbal treatments, and personalized lifestyle counseling for chronic conditions.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Sukhayu Ayurveda & Panchakarma Centre/image 1.png",
      slug: "sukhayu-ayurveda-panchakarma-center-nashik-india",
    },
    {
      name: "Swarayu Ayurveda Clinic & Panchakarma",
      city: "Pune, Maharashtra, India",
      description: "An expert Ayurvedic center in Pune providing comprehensive wellness solutions, classical detox therapies, and specialized care for metabolic and joint disorders.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Swarayu Ayurveda Clinic & Panchakarma Centre/image 1.webp",
      slug: "swarayu-ayurveda-clinic-panchakarma-center-mumbai-india",
    },
    {
      name: "Ayushakti Ayurved Health",
      city: "Mumbai, Maharashtra, India",
      description: "A globally recognized Ayurvedic brand in Mumbai known for its proven pulse reading (Nadi Pariksha), deep detox programs, and effective natural remedies for chronic ailments.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Ayushakti Ayurved Health Centre/image 1.png",
      slug: "ayushakti-ayurved-health-center-mumbai-india",
    },
    {
      name: "Karma Ayurveda Mumbai",
      city: "Mumbai, Maharashtra, India",
      description: "The Mumbai branch of the renowned Karma Ayurveda network, specializing in non-surgical Ayurvedic kidney care, chronic disease management, and customized herbal protocols.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/karma ayurveda mumbai/image 1.webp",
      slug: "karma-ayurveda-clinic-mumbai-india",
    },
    {
      name: "SRIAAS – SR Institute of Advanced Ayurvedic Sciences",
      city: "Mumbai, Maharashtra, India",
      description: "An advanced Ayurvedic institute in Mumbai offering research-backed treatments, classical Panchakarma, and specialized care for lifestyle and neurological disorders.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/SRIAAS – SR Institute of Advanced Ayurvedic Sciences/image 1.webp",
      slug: "sriaas-sr-institute-of-advanced-ayurvedic-sciences-mumbai-india",
    },
    {
      name: "Thapovan Ayurveda",
      city: "Mumbai, Maharashtra, India",
      description: "A serene Kerala Ayurveda center in Mumbai delivering authentic Panchakarma detox, stress management therapies, and traditional rejuvenation programs.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Thapovan Ayurveda/image 1.webp",
      slug: "thapovan-ayurveda-hospital-mumbai-india",
    },
    {
      name: "Somaiya Ayurvihar – Panchakarma",
      city: "Mumbai, Maharashtra, India",
      description: "An institutional Ayurvedic center in Mumbai offering traditional Panchakarma therapies, therapeutic massages, and holistic healthcare supported by academic excellence.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Somaiya Ayurvihar – Panchakarma Centre/image 1.jpg",
      slug: "somaiya-ayurvihar-panchakarma-center-mumbai-india",
    },
    {
      name: "Prof. K.R. Kohli's Ayurveda & Panchakarma (KAPC)",
      city: "Mumbai, Maharashtra, India",
      description: "Led by eminent Ayurvedic physician Prof. K.R. Kohli, this Mumbai center offers expert consultations, classical Panchakarma, and specialized treatments for complex diseases.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Prof. K.R. Kohli's Ayurveda & Panchakarma Centre (KAPC)/image 1.jpg",
      slug: "prof-kr-kohlis-ayurveda-panchakarma-center-mumbai-india",
    },
    {
      name: "Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai",
      city: "Mumbai, Maharashtra, India",
      description: "A highly-rated Ayurvedic clinic in Mumbai providing personalized consultations, herbal medicine, and traditional healing therapies for holistic well-being.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Sharayu Ayurveda – Best Ayurvedic Doctor in Mumbai/image 1.jpg",
      slug: "sharayu-ayurveda-best-ayurvedic-doctor-center-mumbai-india",
    },
    {
      name: "Aushadhgyan Ayurveda & Wellness",
      city: "Mumbai, Maharashtra, India",
      description: "A comprehensive Ayurvedic wellness center in Mumbai combining traditional herbal medicine with lifestyle modifications and classical Panchakarma treatments.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Aushadhgyan Ayurveda & Wellness Centre/image 1.webp",
      slug: "aushadhgyan-ayurveda-wellness-center-mumbai-india",
    },
    {
      name: "Aayushree Ayurvedic – Polyclinic & Panchakarma",
      city: "Mumbai, Maharashtra, India",
      description: "A well-equipped Ayurvedic polyclinic in Mumbai offering multi-specialty consultations, Panchakarma therapies, and preventive healthcare programs.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Aayushree Ayurvedic – Polyclinic & Panchakarma Center/image 1.jpg",
      slug: "aayushree-ayurvedic-polyclinic-panchakarma-center-mumbai-india",
    },
    {
      name: "Herbal Hills Ayurvedic Wellness Center",
      city: "Mumbai, Maharashtra, India",
      description: "An integrated Ayurvedic wellness center in Mumbai providing herbal therapies, detox programs, and lifestyle consultations for natural healing.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Herbal Hills Ayurvedic Wellness Center/image 1.webp",
      slug: "herbal-hills-ayurvedic-wellness-center-mumbai-india",
    },
    {
      name: "Pravaayu Ayurveda & Panchkarma Clinic",
      city: "Mumbai, Maharashtra, India",
      description: "A specialized clinic in Mumbai offering authentic Panchakarma procedures, customized herbal treatments, and holistic care for chronic diseases.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Pravaayu Ayurveda & Panchkarma Clinic/image 1.webp",
      slug: "pravaayu-ayurveda-panchkarma-clinic-mumbai-india",
    },
    {
      name: "Aradhana Ayurveda Clinic & Panchakarma",
      city: "Mumbai, Maharashtra, India",
      description: "A trusted Ayurvedic clinic in Mumbai focusing on root-cause healing through traditional Panchakarma therapies, diet counseling, and herbal medicine.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Aradhana Ayurveda Clinic & Panchakarma Center/image 1.webp",
      slug: "aradhana-ayurveda-clinic-panchakarma-center-mumbai-india",
    },
    {
      name: "Divyamrut Ayurcare",
      city: "Mumbai, Maharashtra, India",
      description: "A dedicated Ayurvedic center in Mumbai providing specialized care for joint pain, digestive disorders, and metabolic conditions using classical therapies.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Divyamrut Ayurcare/image 1.webp",
      slug: "divyamrut-ayurcare-hospital-mumbai-india",
    },
    {
      name: "Kerala Ayurveda Multi Speciality Clinic",
      city: "Mumbai, Maharashtra, India",
      description: "A Kerala-style multi-specialty Ayurvedic clinic in Mumbai bringing authentic South Indian healing traditions, Panchakarma, and herbal therapies to the city.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Kerala Ayurveda Multi Speciality Clinic/image 1.webp",
      slug: "kerala-ayurveda-multi-speciality-clinic-mumbai-india",
    },
    {
      name: "Ayush Ayurved Panchakarma Center",
      city: "Nashik, Maharashtra, India",
      description: "A renowned Ayurvedic center in Nashik offering comprehensive Panchakarma therapies, detox programs, and traditional healthcare solutions in a serene environment.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Ayush Ayurved Panchakarma Center/image 1.jpeg",
      slug: "ayush-ayurved-panchakarma-center-mumbai-india",
    },
    {
      name: "Shree Ayurved & Panchakarma Hospital",
      city: "Pune, Maharashtra, India",
      description: "A comprehensive Ayurvedic hospital in Pune offering inpatient facilities, classical Panchakarma, and specialized treatments for chronic lifestyle disorders.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Shree Ayurved & Panchakarma Hospital/image 1.webp",
      slug: "aayushree-ayurvedic-polyclinic-panchakarma-center-mumbai-india",
    },
    {
      name: "Aatreya Ayurved & Panchakarma Clinic",
      city: "Pune, Maharashtra, India",
      description: "A dedicated clinic in Pune offering personalized Ayurvedic consultations, authentic Panchakarma therapies, and holistic wellness programs.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Aatreya Ayurved & Panchakarma Clinic/image 1.webp",
      slug: "aatreya-ayurved-panchakarma-clinic-pune-india",
    },
    {
      name: "Ashtang Ayurveda Super Multi Speciality Hospital",
      city: "Pune, Maharashtra, India",
      description: "A multi-specialty Ayurvedic hospital in Pune integrating traditional healing wisdom with modern diagnostic facilities for comprehensive patient care.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Ashtang Ayurveda Super Multi Speciality Hospital/image 1.webp",
      slug: "ashtang-ayurveda-super-multi-speciality-hospital-nashik-india",
    },
    {
      name: "Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic",
      city: "Nashik, Maharashtra, India",
      description: "An authentic Kerala Panchakarma clinic in Nashik offering traditional detox therapies, stress management, and rejuvenation programs.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Ayushman Bhava Ayurveda & Keraliya Panchakarma Clinic/image 1.jpg",
      slug: "ayurveda-kendra-hospital-delhi-india",
    },
    {
      name: "Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center",
      city: "Nashik, Maharashtra, India",
      description: "A specialized center in Nashik offering classical Panchakarma and traditional Garbh Sanskar (prenatal care) programs for holistic maternal and child wellness.",
      rating: 4.5,
      reviews: 120,
      priceRange: "$$",
      image: "/TOP centers/mumbai pune nashik/Shree Vishwavallabh Ayurvedic Panchakarma & Garbh Sanskar Center/image 1.webp",
      slug: "shree-vishwavallabh-ayurvedic-panchakarma-garbh-sanskar-center-nashik-india",
    },
];

  const staticTreatments = [
    "Ayurveda Treatment", "Panchakarma Treatment", "Sinusitis Treatment", "Autism Treatment", 
    "Weight Loss Treatment", "Monsoon Treatment", "Parkinson's Disease Treatment", "Sciatica Treatment", 
    "Stroke Treatment", "Varicose Ulcer", "Knee Pain", "Post Natal Care", "Cervical Spondylosis", 
    "Psoriasis", "Lumbar Spondylosis", "Gastroesophageal Reflux Disease", "Arthritis Treatment", 
    "Dysmenorrhea Treatment", "Ulcerative Colitis Treatment", "Disc Bulge Protrusion", "Back Pain", 
    "Stress Management", "Alopecia", "Yoga & Meditation", "Detox & Rejuvenation"
  ];
  
  const REGION_MAPPING = {
    "Kerala Region": ["Kerala", "Alappuzha", "Chazhur", "Ezhakkaranadu", "Idukki", "Kalady", "Kanjirappally", "Kannur", "Kayamkulam", "Kochi", "Kottakkal", "Kovalam", "Kumarakom", "Mararikulam", "Nattika", "Palakkad", "Perumbavoor", "Thrissur"],
    "Goa Region": ["Goa", "Anjuna", "Arambol", "Arpora", "Ashvem", "Assagao", "Calangute", "Canacona", "Candolim", "Colva", "Mandrem", "Mapusa", "Morjim", "Nerul", "Orlim", "Ponda", "Porvorim"],
    "Delhi & North India": ["Delhi", "Gurugram", "Sonepat", "Alwar"],
    "Himalayas, Rishikesh, Uttarakhand & North East": ["Himalaya", "Rishikesh", "Uttarakhand", "Dehradun", "Almora", "Haridwar", "Dharamshala", "Manikaran", "Himachal Pradesh", "Ranikhet"],
    "Mumbai, Pune, Nashik & West India": ["Mumbai", "Pune", "Nashik", "Maharashtra"],
    "Bangalore, Hyderabad, Chennai & South India": ["Bangalore", "Bengaluru", "Chennai", "Tamil Nadu", "Karnataka", "Telangana", "Coimbatore", "Mysore", "Udupi"]
  };

  const getRegionForCenter = (cityStr: string) => {
    const loc = (cityStr || "").toLowerCase();
    for (const [region, keywords] of Object.entries(REGION_MAPPING)) {
      if (keywords.some(kw => loc.includes(kw.toLowerCase()))) {
        return region;
      }
    }
    return "Other";
  };

  const cities = ["All", "Kerala Region", "Goa Region", "Delhi & North India", "Himalayas, Rishikesh, Uttarakhand & North East", "Mumbai, Pune, Nashik & West India", "Bangalore, Hyderabad, Chennai & South India"];
  const dynamicTreatments = centers.flatMap(c => c.specialties || []).filter(Boolean);
  const treatments = ["All", ...Array.from(new Set([...staticTreatments, ...dynamicTreatments])).sort()];

  const filteredCenters = useMemo(() => {
    return centers
      .filter((center) => {
        const cityMatch = selectedCity === "All" || getRegionForCenter(center.city) === selectedCity;
        return cityMatch;
      })
      .sort((a, b) => {
        // Enforce Main Centers (first 52) always before Sub Centers
        const idxA = centers.indexOf(a);
        const idxB = centers.indexOf(b);
        const isMainA = idxA < 52;
        const isMainB = idxB < 52;
        
        if (isMainA && !isMainB) return -1;
        if (!isMainA && isMainB) return 1;

        // For sub-centers: preserve original array order (region-wise)
        if (!isMainA && !isMainB) {
          return idxA - idxB;
        }

        // For main centers: apply rating/treatment sorts
        if (selectedTreatment !== "All") {
          const aHas = (a.specialties || []).includes(selectedTreatment);
          const bHas = (b.specialties || []).includes(selectedTreatment);
          if (aHas && !bHas) return -1;
          if (!aHas && bHas) return 1;
        }
        if (sortBy === "rating") {
          return (b.rating || 0) - (a.rating || 0);
        } else if (sortBy === "distance") {
          return (a.city || "").localeCompare(b.city || "");
        }
        return 0;
      });
  }, [centers, selectedCity, selectedTreatment, sortBy]);

  const totalPages = Math.ceil(filteredCenters.length / 15) || 1;
  const paginatedCenters = filteredCenters.slice((currentPage - 1) * 15, currentPage * 15);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCountry, selectedCity, selectedTreatment, sortBy]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen font-poppins bg-[#E5E7E2] flex flex-col overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <main className="flex-grow">

      {/* Header */}
      <section className="bg-[#2F5B63] text-white pt-12 pb-10 md:pt-20 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            Top Ayurvedic Centers <span className="text-[#EDE8D0]">in India</span>
          </h1>
          <p className="text-sm md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed italic">
            Explore India's most prestigious Ayurvedic sanctuaries, clinical hospitals, and heritage wellness retreats, curated for your healing journey.
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
                <SelectTrigger className="h-12 bg-[#E5E7E2] border-none shadow-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="India">India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">City / Region</label>
              <Popover open={cityOpen} onOpenChange={setCityOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={cityOpen}
                    className="w-full h-12 justify-between bg-[#E5E7E2] hover:bg-[#D8DED3] border-none text-foreground font-normal shadow-sm"
                  >
                    {selectedCity === "All" ? "All Cities" : selectedCity}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0 z-50">
                  <Command>
                    <CommandInput placeholder="Search city..." />
                    <CommandList>
                      <CommandEmpty>No city found.</CommandEmpty>
                      <CommandGroup>
                        {cities.map((city) => (
                          <CommandItem
                            key={city}
                            value={city}
                            onSelect={(currentValue) => {
                              // CommandItem converts value to lowercase internally, 
                              // so we match against the original city string.
                              const selected = cities.find(c => c.toLowerCase() === currentValue) || city;
                              setSelectedCity(selected === "all" ? "All" : selected);
                              setCityOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                selectedCity === city ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {city}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Treatment</label>
              <Popover open={treatmentOpen} onOpenChange={setTreatmentOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={treatmentOpen}
                    className="w-full h-12 justify-between bg-[#E5E7E2] hover:bg-[#D8DED3] border-none text-foreground font-normal shadow-sm"
                  >
                    <span className="truncate pr-2 text-left">{selectedTreatment === "All" ? "All Treatments" : selectedTreatment}</span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 flex-none" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 z-50">
                  <Command>
                    <CommandInput placeholder="Search treatment..." />
                    <CommandList>
                      <CommandEmpty>No treatment found.</CommandEmpty>
                      <CommandGroup>
                        {treatments.map((treatment) => (
                          <CommandItem
                            key={treatment}
                            value={treatment}
                            onSelect={(currentValue) => {
                              const selected = treatments.find(t => t.toLowerCase() === currentValue) || treatment;
                              setSelectedTreatment(selected === "all" ? "All" : selected);
                              setTreatmentOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4 shrink-0",
                                selectedTreatment === treatment ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {treatment}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 bg-[#E5E7E2] border-none shadow-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="distance">Distance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {paginatedCenters.map((center, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full h-full"
              >
                  {/* Image Section */}
                  <div className="relative aspect-[16/7] md:aspect-[16/8.2] overflow-hidden">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      onError={(e) => { e.currentTarget.src = centerKerala; }}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-3 md:p-5 flex flex-col flex-grow">
                    <h3
                      title={center.name}
                      className="text-base md:text-lg font-bold text-[#2C4E5A] mb-1.5 md:mb-2 leading-tight line-clamp-2 min-h-0 md:min-h-[2.5rem]"
                    >
                      {center.name}
                    </h3>

                    {/* Location and Rating Row */}
                    <div className="flex items-center justify-between mb-2 md:mb-3 gap-2">
                      <div className="flex items-center gap-1.5 text-foreground/80 min-w-0 flex-1">
                        <MapPin size={14} className="text-primary shrink-0" />
                        <span className="text-xs font-semibold truncate">
                          {(center as { locationText?: string }).locationText || `${center.city}, India`}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-black text-foreground">{center.rating}</span>
                        <span className="text-xs font-semibold text-foreground/80">({center.reviews}{center.reviews > 0 ? "+" : ""})</span>
                      </div>
                    </div>

                    <p className={`text-xs md:text-sm leading-relaxed text-foreground/80 mb-1 transition-all duration-300 ${expandedCards.has(index) ? "" : "line-clamp-3 md:line-clamp-5 min-h-0 md:min-h-[6.25rem]"}`}>
                      {center.description}
                    </p>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-1 text-[10px] font-bold text-[#2C4E5A] hover:text-[#1e363e] mb-3 transition-colors duration-200"
                    >
                      {expandedCards.has(index) ? (
                        <><ChevronUp size={12} /> Read Less</>                      ) : (
                        <><ChevronDown size={12} /> Read More</>
                      )}
                    </button>

                    {/* Tags Section */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-5">
                      {(center.specialties || []).slice(0, 3).map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-[#F0F7F4] text-[#1E7A4D] text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md border border-[#E0EBE6] text-center truncate max-w-full"
                          title={specialty}
                        >
                          {specialty}
                        </span>
                      ))}
                      {(center.specialties?.length || 0) > 3 && (
                        <span className="bg-[#F0F7F4] text-[#1E7A4D] text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md border border-[#E0EBE6] text-center truncate max-w-full">
                          +{center.specialties.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Buttons Container */}
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          to={center.slug ? `/top-ayurvedic-centers-in-india/${center.slug}` : "#"} 
                          className="w-full"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            variant="outline" 
                            className="w-full font-bold py-3 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-xs uppercase tracking-tight"
                          >
                            View Details
                          </Button>
                        </Link>
                        <Button
                          onClick={() => setQuoteModalOpen(true)}
                          className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-3 md:py-5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 text-xs uppercase tracking-tight"
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
        </div>
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="rounded-xl border-[#2C4E5A] text-[#2C4E5A] hover:bg-[#2C4E5A] hover:text-white"
            >
              Previous
            </Button>
            
            <div className="flex items-center gap-1.5 md:gap-2">
              {(() => {
                let startPage = Math.max(1, currentPage - 1);
                let endPage = Math.min(totalPages, startPage + 3);
                if (endPage - startPage < 3) {
                  startPage = Math.max(1, endPage - 3);
                }
                return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((pageNum) => (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 md:w-10 md:h-10 p-0 rounded-lg md:rounded-xl font-bold transition-all text-xs md:text-sm ${
                      currentPage === pageNum 
                        ? "bg-[#2C4E5A] text-white hover:bg-[#1e363e]" 
                        : "border-[#2C4E5A] text-[#2C4E5A] hover:bg-[#2C4E5A] hover:text-white"
                    }`}
                  >
                    {pageNum}
                  </Button>
                ));
              })()}
            </div>

            <Button
              variant="outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="rounded-xl border-[#2C4E5A] text-[#2C4E5A] hover:bg-[#2C4E5A] hover:text-white"
            >
              Next
            </Button>
          </div>
        )}
      </section>
      </main>

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




