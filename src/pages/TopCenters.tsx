import { useState } from "react";
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
      name: "SOUKYA - Dr. Mathai's International Holistic Health Centre",
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
      slug: "bangalore/soukya" as string | undefined,
    },
    {
      name: "AyurvedaGram Heritage Wellness Centre",
      city: "Bangalore",
      description:
        "AyurvedaGram Heritage Wellness Centre is a globally recognized destination in Bangalore that offers an authentic immersion into the ancient world of Ayurvedic healing. Set within a meticulously restored heritage village, the center provides a sanctuary where classical Vedic principles are practiced with deep reverence and precision. Guests receive personalized treatments guided by experienced Vaidyas, complemented by therapeutic yoga, mindful routines, and organic sattvic nutrition. Every healing journey is tailored to restore the delicate balance of body, mind, and spirit through evidence-informed care and time-tested protocols. This tranquil retreat is the perfect choice for those seeking profound detoxification, rejuvenation, and long-term sustainable wellness.",
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
      slug: "bangalore/ayurvedagram" as string | undefined,
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
      slug: "bangalore/shreyas-yoga-retreat" as string | undefined,
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
      slug: "maharashtra/viveda-wellness-village" as string | undefined,
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
      slug: "sonepat/naad-wellness" as string | undefined,
    },
    {
      name: "Fazlani Nature's Nest Wellness Centre",
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
      slug: "maharashtra/fazlani-natures-nest" as string | undefined,
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
      slug: "pune/atmantan-wellness-resort" as string | undefined,
    },
    {
      name: "Toyam By Orchid Hotels",
      city: "Pune",
      description:
        "Toyam by Orchid Hotels is a premier wellness destination near Pune that offers an authentic and immersive journey into the world of traditional Ayurvedic healing. Surrounded by tranquil landscapes, the retreat provides a peaceful sanctuary where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive personalized care guided by experienced wellness experts, complemented by therapeutic yoga, mindful meditation, and wholesome sattvic nutrition. Every program is thoughtfully designed to restore the delicate balance of body, mind, and spirit while fostering sustainable healthy living habits. This luxurious retreat is the perfect escape for those seeking profound detoxification, inner peace, and a foundation for lasting physical vitality.",
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
      slug: "pune/toyam-by-orchid-hotels" as string | undefined,
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
      slug: "pune/dharana-at-shillim" as string | undefined,
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
      slug: "delhi/the-imperial-spa-and-wellness" as string | undefined,
    },
    {
      name: "ITC Grand Bharat",
      city: "Gurugram",
      description:
        "ITC Grand Bharat is an ultra-luxury all-suite wellness retreat in Gurugram, inspired by India's rich architectural heritage and the timeless wisdom of the Aravallis. The retreat offers a deeply immersive experience where royal grandeur meets authentic Ayurvedic healing and modern wellness innovation. Guests can undergo personalized rejuvenation programs guided by expert physicians, supported by therapeutic yoga, mindful routines, and curated sattvic nutrition. The tranquil environment and sprawling grounds provide a unique atmosphere for detoxification, stress relief, and sustainable lifestyle transformation. ITC Grand Bharat remains a global benchmark for holistic luxury, dedicated to restoring the balance of body and mind through indigenous healing traditions.",
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
      slug: "gurugram/itc-grand-bharat" as string | undefined,
    },

    {
      name: "Niraamaya Retreats Surya Samudra",
      city: "Kerala",
      description:
        "Niraamaya Retreats Surya Samudra is a globally recognized luxury destination in Kerala that offers an authentic immersion into the ancient world of coastal Ayurvedic healing. Perched on a cliff overlooking the Arabian Sea, the retreat provides a peaceful sanctuary where classical Vedic principles and modern clinical standards are practiced with reverence. Guests undergo personalized treatments guided by experienced Vaidyas, complemented by therapeutic yoga, mindful routines, and organic coastal nutrition. Every healing journey is tailored to restore the delicate balance of body, mind, and spirit through time-tested and evidence-informed care. The tranquil beachfront setting and heritage architecture create a unique atmosphere for detoxification, rejuvenation, and sustainable wellness.",
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
      slug: "kerala/niraamaya-retreats-surya-samudra" as string | undefined,
    },
    {
      name: "Modi Yoga Retreat",
      city: "Rishikesh",
      description:
        "Modi Yoga Retreat is a premier riverside sanctuary in Rishikesh that seamlessly integrates traditional Hatha Yoga philosophy with authentic Ayurvedic healing standards. Located on the banks of the holy Ganges, the retreat offers an authentic yogic lifestyle designed to nurture physical vitality, mental clarity, and spiritual growth. Guests can enjoy a comprehensive range of personalized programs including Ayurveda therapies, guided meditation, and mindful living practices led by expert teachers. The tranquil mountain environment and organic cuisine provide a rejuvenating space for deep relaxation, inner reflection, and sustainable health transformation. Modi Yoga Retreat is dedicated to helping individuals rediscover their inner balance through the timeless wisdom of classical Indian traditions.",
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
      image: "/Center Images/Modi Yoga Retreat/Thumb.jpg",
      locationText: "Rishikesh, Uttarakhand, India",
      slug: "rishikesh/modi-yoga-retreat" as string | undefined,
    },
    {
      name: "Amanbagh Heritage Wellness Retreat",
      city: "Alwar",
      description:
        "Amanbagh Heritage Wellness Retreat is a world-class sanctuary in Rajasthan, blending Mughal-inspired architectural elegance with profound Ayurvedic healing traditions. Nestled in the rugged Aravalli hills, the retreat offers a peaceful sanctuary where classical Vedic principles and personalized wellness protocols are practiced with meticulous care. Guests experience a unique combination of authentic Ayurveda, yoga, and meditation designed to promote deep detoxification and long-term physical vitality. The tranquil landscape and therapeutic spa treatments create a perfect sanctuary for managing stress, burnout, and lifestyle-related health concerns. Amanbagh provides a holistic environment where mindful nutrition and expert guidance lead to sustainable physical and emotional well-being.",
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
      slug: "rajasthan/amanbagh-heritage-wellness-retreat" as string | undefined,
    },
    {
      name: "HimVeda Heritage Wellness Centre",
      city: "Dharamshala",
      description:
        "HimVeda Heritage Wellness Centre is a distinguished Ayurvedic sanctuary nestled in the serene Himalayan foothills near Dharamshala, dedicated to authentic classical healing. Rooted in traditional Vedic principles, the center offers personalized treatments guided by highly experienced Ayurvedic doctors and skilled therapists who focus on the root causes of disease. Guests experience an immersive journey featuring professional Panchakarma, chronic disease management, and nature-centric living designed for holistic well-being. The calm mountain environment and specialized sattvic nutrition create a unique atmosphere for detoxification, rejuvenation, and sustainable health restoration. HimVeda remains a trusted destination for those seeking serious, results-driven Ayurvedic care in a peaceful and medically sound setting.",
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
      slug: "dharamshala/himveda" as string | undefined,
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
      slug: "himachal/sandhya-hot-spring-health-care" as string | undefined,
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
      slug: "dharamshala/ayuskama-ayurveda" as string | undefined,
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
      slug: "kerala/somatheeram" as string | undefined,
    },
    {
      name: "AyurSoma Ayurveda Royal Retreat",
      city: "Kerala",
      description:
        "AyurSoma Ayurveda Royal Retreat is a world-class sanctuary in Kovalam that masterfully blends the grandeur of royal heritage with the profound precision of traditional Ayurvedic healing. Perched on a stunning beachfront, the retreat offers an authentic and immersive experience where classical Panchakarma and rejuvenation therapies are practiced with uncompromising medical standards. Guests receive highly personalized care guided by seasoned Vaidyas, complemented by therapeutic yoga, mindful meditation, and nourishing organic cuisine. Every healing journey is thoughtfully designed to restore the delicate balance of body, mind, and spirit while fostering sustainable healthy living habits. This premium royal retreat provides a serene and opulent environment for deep detoxification and the restoration of long-term physical vitality.",
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
      slug: "kerala/ayursoma" as string | undefined,
    },
    {
      name: "Kalari Kovilakom - The Palace For Ayurveda",
      city: "Palakkad",
      description:
        "Immerse yourself in the authentic discipline of Ayurveda at Kalari Kovilakom � The Palace For Ayurveda, a globally acclaimed wellness retreat rooted in ancient healing traditions. Set within a restored heritage palace, this unique center follows the classical gurukula system, offering a structured and immersive approach to Ayurvedic care. Guided by experienced Vaidyas, every program is tailored to restore balance, detoxify the body, and promote long-term well-being through time-tested therapies and holistic practices. With a strong focus on Panchakarma and intensive healing programs, Kalari Kovilakom provides a highly personalized wellness journey. From therapeutic treatments and sattvic nutrition to yoga and meditation, every element is carefully designed to support deep rejuvenation of body and mind. Ideal for those seeking serious, results-driven Ayurvedic healing, the center delivers an environment of discipline, authenticity, and transformative care.",
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
      slug: "kerala/kalari-kovilakom" as string | undefined,
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
      slug: "kerala/carnoustie-ayurveda-wellness-resort" as string | undefined,
    },
    {
      name: "The Nattika Beach Resort",
      city: "Thrissur",
      description:
        "The Nattika Beach Resort is a premier award-winning wellness retreat along the pristine shores of Kerala, dedicated to the authentic essence of traditional Ayurvedic healing. Rooted in classical Vedic principles and guided by highly experienced physicians, the resort offers a harmonious blend of medical precision, relaxation, and deep rejuvenation. Surrounded by lush tropical greenery and the calming Arabian Sea, Nattika provides personalized therapies designed to restore the balance of body, mind, and spirit. Guests experience a transformative journey supported by therapeutic yoga, mindful routines, and professional clinical care in a serene beachfront environment. The resort is committed to delivering a deeply immersive wellness experience that fosters long-term health empowerment and metabolic vitality.",
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
      slug: "kerala/the-nattika-beach-resort" as string | undefined,
    },
    {
      name: "Sitaram Beach Retreat",
      city: "Kerala",
      description:
        "Sitaram Beach Retreat is a premier coastal sanctuary in Kerala that offers an authentic and immersive journey into the traditional science of Ayurvedic healing. Nestled along the serene shores of the Arabian Sea, the retreat provides a peaceful environment where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors, complemented by therapeutic yoga, mindful meditation, and wholesome organic cuisine. Every program is thoughtfully designed to restore the delicate balance of body, mind, and spirit while fostering sustainable healthy living habits. The tranquil beachfront setting and professional clinical care create an ideal atmosphere for detoxification, stress relief, and profound physical rejuvenation.",
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
      slug: "kerala/sitaram-beach-retreat" as string | undefined,
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
      slug: "kerala/kairali-ayurvedic-healing-village" as string | undefined,
    },
    {
      name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
      city: "Rishikesh",
      description:
        "Veda5 is a distinguished luxury wellness retreat in Rishikesh that seamlessly integrates authentic Ayurvedic healing with world-class hospitality and professional medical standards. Nestled in the Himalayan foothills with stunning mountain views, the center offers a peaceful sanctuary where classical Panchakarma and holistic therapies are practiced with meticulous care. Guests undergo a transformative journey guided by expert physicians, featuring therapeutic yoga, mindful meditation, and personalized wellness protocols designed for deep rejuvenation. Every element of the stay is thoughtfully curated to restore metabolic balance, strengthen immunity, and promote long-term physical and mental vitality. Veda5 is committed to helping individuals achieve sustainable well-being through a powerful combination of ancient wisdom and modern luxury.",
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
      slug: "veda5",
      badgeColor: "#D9E3DC",
      locationText: "Rishikesh, Kerala, Goa, India",
    },
    {
      name: "Yan Cure Yoga Retreat & Ayurveda Centre",
      city: "Rishikesh",
      description:
        "Yan Cure Yoga Retreat & Ayurveda Centre is a premier holistic sanctuary in Rishikesh that offers a powerful combination of traditional yoga philosophy and authentic Ayurvedic healing. Located in a tranquil natural environment, the center provides a peaceful space where professional clinical care and mindful living practices are practiced with clinical precision. Guests receive personalized treatment programs guided by experienced Ayurvedic doctors and certified yoga instructors, focusing on deep detoxification and stress management. Every healing journey is designed to restore the harmony of body, mind, and soul through time-tested and evidence-informed therapies. Yan Cure is dedicated to fostering inner peace and long-term vitality through a comprehensive approach to preventive health and professional rejuvenation.",
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
      reviews: 850,
      priceRange: "$$$",
      image: "/Center Images/Soul Vacation Resort and Spa/thumb.jpg",
      locationText: "South Goa, India",
      slug: "goa/soul-vacation" as string | undefined,
    },
    {
      name: "SWAN Yoga Retreat & Ayurveda",
      city: "Goa",
      description:
        "SWAN Yoga Retreat is a premier ashram-style sanctuary in North Goa that offers an authentic and immersive journey into the classical science of Yogic living. Nestled in the lush tropical hills, the retreat provides a peaceful space where traditional Yoga, meditation, and Ayurvedic healing are practiced with uncompromising devotion. Guests can experience personalized programs including authentic Panchakarma, therapeutic breathwork, and mindful routines designed for profound mental clarity. Every element of the stay is thoughtfully curated to restore the harmony of body, mind, and soul through time-tested ashram traditions. This sanctuary is dedicated to helping individuals achieve lasting inner peace and physical vitality in a professional yet soulful environment.",
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
      slug: "goa/swan-yoga-retreat" as string | undefined,
    },
    {
      name: "Mercure Goa Devaaya Resort – Ayurveda Wellness Centre",
      city: "Goa",
      description:
        "The Ayurveda Wellness Centre at Mercure Goa Devaaya Resort is a distinguished sanctuary on Divar Island, blending ancient Vedic wisdom with tranquil island living. Perched along the serene backwaters, the center offers an immersive healing experience where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors and therapists, focusing on deep detoxification and lifestyle disorder management. Every healing journey is tailored to restore the natural balance of body, mind, and spirit through professional clinical protocols and mindful integration of yoga. This world-class retreat provides a serene and opulent environment for those seeking profound rejuvenation and long-term health empowerment.",
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
      slug: "goa/mercure-goa-devaaya-resort" as string | undefined,
    },
    {
      name: "Ashiyana Yoga Retreat",
      city: "Goa",
      description:
        "Ashiyana Yoga Retreat is a globally renowned sanctuary in North Goa, dedicated to profound personal transformation and the art of mindful coastal living. Set within lush tropical gardens along the serene Mandrem Beach, the retreat offers a unique blend of traditional yoga, meditation, and authentic Ayurvedic healing. Guests can experience holistic programs guided by experienced teachers and therapists, designed to restore metabolic balance and promote deep inner peace. Every element of the stay is thoughtfully curated to provide a restorative atmosphere for detoxification, stress relief, and the cultivation of long-lasting wellbeing. Ashiyana is committed to helping individuals rediscover their inner strength through a powerful combination of natural beauty and time-tested wellness practices.",
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
      slug: "goa/ashiyana-yoga-retreat" as string | undefined,
    },
    {
      name: "Nalanda Retreat Goa",
      city: "Goa",
      description:
        "Nalanda Retreat Goa is a soulful beachside sanctuary on Mandrem Beach that seamlessly blends traditional yoga philosophy with authentic Ayurvedic healing standards. The retreat offers a transformative escape where the rhythms of the Arabian Sea meet ancient wellness traditions to create a deeply restorative atmosphere. Guests receive personalized care featuring guided yoga sessions, mindfulness practices, and professional Ayurvedic therapies designed to restore metabolic harmony and inner peace. Every healing journey is thoughtfully curated to support deep detoxification, stress management, and the restoration of physical vitality in a professional coastal setting. Nalanda provides a peaceful and nurturing environment for those seeking profound rejuvenation and a foundation for sustainable health.",
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
      slug: "goa/nalanda-retreat-goa" as string | undefined,
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
      slug: "uttarakhand/ananda-in-the-himalayas" as string | undefined,
    },
    {
      name: "Namaste Dwaar – Countryside Wellness Retreat",
      city: "Delhi",
      description:
        "Namaste Dwaar is a peaceful countryside sanctuary near Delhi NCR that offers an authentic immersion into the traditional science of Ayurvedic healing. Nestled within a serene farmhouse setting, the retreat provides a nurturing environment where classical Panchakarma and natural therapies are practiced with medical precision. Guests receive compassionate care guided by experienced physicians, complemented by farm-fresh sattvic food and mindful wellness practices. Every program is thoughtfully designed to restore metabolic balance, improve sleep quality, and promote long-term physical and mental vitality. This rustic yet professional retreat is the perfect escape for those seeking deep detoxification and a sustainable foundation for holistic health.",
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
      slug: "delhi/namastedwaar" as string | undefined,
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
      slug: "kerala/ayurmana" as string | undefined,
      locationText: "Panvel, Mumbai, India",
    },
    {
      name: "Chamundi Hill Palace Ayurvedic Resort",
      city: "Mysore",
      description:
        "Chamundi Hill Palace Ayurvedic Resort is a heritage-inspired sanctuary in Kerala that offers an authentic and immersive journey into the traditional science of Ayurvedic healing. Nestled in a serene and peaceful environment, the resort provides a nurturing atmosphere where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors, focusing on restoring the natural balance of body, mind, and spirit. Every program is thoughtfully designed to support deep detoxification, stress management, and long-term metabolic health through professional protocols. This tranquil heritage retreat provides an ideal space for those seeking profound rejuvenation and sustainable wellness.",
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
      slug: "mysore/chamundi-hill-palace" as string | undefined,
    },
    {
      name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
      city: "Kerala",
      description:
        "Kairali Heritage Resort is a tranquil riverside sanctuary in Kannur that blends authentic Ayurvedic healing with the serene beauty of Kerala’s backwaters. Nestled on the banks of the Kattampally River, the resort offers an immersive wellness experience where classical Panchakarma and Naturopathy are practiced with professional medical standards. Guests receive highly personalized care guided by experienced physicians, complemented by therapeutic yoga and mindful island living. Every healing journey is tailored to restore the natural balance of body, mind, and spirit through evidence-informed protocols and nature-centric rejuvenation. This riverside haven provides a peaceful and opulent environment for those seeking profound detoxification and long-term health empowerment.",
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
      slug: "kerala/kairali-heritage" as string | undefined,
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
      slug: "kerala/agni-ayurvedic-village" as string | undefined,
    },
    {
      name: "Dheemahi Kumarakom – Premium Lakeside Retreat",
      city: "Kumarakom",
      description:
        "Dheemahi Kumarakom is a premium lakeside sanctuary on the banks of Lake Vembanad, dedicated to authentic Ayurvedic healing with over 90 years of family heritage. This NABH-accredited retreat masterfully blends traditional Vedic wisdom with modern luxury, offering a tranquil haven for profound physical and mental rejuvenation. Guests experience highly personalized care guided by expert Vaidyas, focusing on chronic pain management, stress relief, and deep metabolic detoxification. The serene lakeside environment and heritage-inspired architecture provide an ideal atmosphere for restoring balance through evidence-informed clinical protocols. Dheemahi remains a trusted destination for those seeking serious, results-driven Ayurvedic care in a professional and opulent setting.",
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
      slug: "kerala/dheemahi-kumarakom" as string | undefined,
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
      slug: "kerala/kumarakom-lake-resort" as string | undefined,
    },
    {
      name: "Nagarjuna Ayurveda Centre",
      city: "Kerala",
      description:
        "Nagarjuna Ayurveda Centre is one of India’s most trusted and heritage-rich clinical institutions, renowned for its authentic and result-oriented approach to traditional care. Backed by decades of pharmaceutical and clinical expertise, the centre follows strict diagnostic protocols combined with classical Ayurvedic principles to deliver effective treatments. Guests undergo a transformative journey featuring intensive Panchakarma, chronic disease management, and metabolic rejuvenation guided by a team of expert Vaidyas. The professional clinical environment and dedicated therapeutic care ensure that every element of the stay is focused on restoring long-term health and vitality. Nagarjuna remains a global benchmark for authentic Ayurvedic healthcare, dedicated to delivering transformative results in a professional setting.",
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
      slug: "kerala/nagarjuna-ayurveda-centre" as string | undefined,
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
      slug: "kerala/sanjeevanam-ayurveda-hospital" as string | undefined,
    },
    {
      name: "Back to Roots Ayurveda Retreat",
      city: "Idukki",
      description: "Back to Roots Ayurveda Retreat is a serene lakeside sanctuary in Idukki, guided by the profound wisdom of 4th generation Ayurvedic physicians and classical healing traditions. This NABH-accredited retreat offers an authentic and immersive experience where pure, undiluted Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care in a pristine natural setting, focusing on chronic pain management, deep detoxification, and natural stress relief. Every healing journey is thoughtfully designed to restore the delicate balance of body, mind, and spirit through time-tested and evidence-informed clinical protocols. The tranquil environment and professional care create an ideal sanctuary for those seeking serious, results-driven Ayurvedic healing.",
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
      slug: "kerala/back-to-roots" as string | undefined,
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
      slug: "kerala/dhathri-ayurveda" as string | undefined,
    },
    {
      name: "Krishnendu Ayurveda Hospital",
      city: "Alappuzha",
      description: "Krishnendu Ayurveda Hospital is a premier NABH-accredited institution in Alappuzha, guided by over a century of healing wisdom and four generations of clinical excellence. Nestled in the serene backwaters, the hospital masterfully blends its rich heritage with modern professional standards to deliver authentic and result-oriented Ayurvedic care. Guests undergo a transformative journey featuring intensive Panchakarma, arthritis care, and specialized rejuvenation therapies designed for long-term health restoration. Every healing program is highly personalized and guided by expert physicians to ensure profound detoxification and the restoration of metabolic balance. The professional and tranquil environment provides a perfect sanctuary for those seeking serious, evidence-informed Ayurvedic healing.",
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
      slug: "kerala/krishnendu-ayurveda-hospital" as string | undefined,
    },
    {
      name: "Athreya Ayurvedic Centre",
      city: "Kerala",
      description: "Athreya Ayurvedic Centre is a distinguished sanctuary in Kerala that offers an authentic and immersive journey into the traditional science of Ayurvedic healing. Nestled in a serene and peaceful environment, the center provides a nurturing atmosphere where classical Panchakarma and rejuvenation therapies are practiced with clinical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors, focusing on restoring the natural balance of body, mind, and spirit. Every program is thoughtfully designed to support deep detoxification, stress management, and long-term metabolic health through professional protocols. This tranquil retreat provides an ideal space for those seeking profound rejuvenation and a sustainable foundation for holistic wellness.",
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
      locationText: "Cliff Rd, Varkala, Kerala",
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
    {
      name: "Indus Valley Ayurvedic Centre",
      city: "Mysore",
      description:
        "Indus Valley Ayurvedic Centre (IVAC) is a luxury Ayurvedic healing retreat in serene Mysuru, blending classical Kerala Ayurveda with modern wellness standards through personalized programs for body, mind, and spirit.",
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
      slug: "mysore/indus-valley-ayurvedic-centre" as string | undefined,
    },
    {
      name: "Shathayu Ayurveda Yoga Retreat",
      city: "Udupi",
      description:
        "Immerse yourself in a serene coastal sanctuary dedicated to authentic Ayurvedic healing and yogic living. Shathayu Ayurveda Yoga Retreat blends classical Ayurvedic therapies with structured yoga programs, offering a holistic pathway to detoxification, rejuvenation, and lifestyle transformation. Guided by experienced Vaidyas and yoga practitioners, the retreat emphasizes personalized treatment protocols in a peaceful, nature-rich environment—ideal for deep restoration of body and mind.",
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
      slug: "udupi/shathayu-ayurveda-yoga-retreat" as string | undefined,
    },
    {
      name: "Ideal Ayurvedic Resort",
      city: "Kerala",
      description:
        "Ideal Ayurvedic Resort is a distinguished 'Green Leaf' certified sanctuary in Kerala, dedicated to the authentic essence of traditional Ayurvedic healing. Nestled within 15 acres of lush tropical coconut groves near Kovalam Beach, the resort offers a peaceful and non-commercialized environment for profound clinical care. Guests experience an authentic healing journey featuring classical Panchakarma, chronic disease management, and nature-centric rejuvenation guided by highly experienced physicians. Every treatment is carefully tailored based on individual health conditions to ensure effective and long-lasting wellness results in a professional and nurturing setting. Ideal Ayurvedic Resort remains a trusted destination for those seeking serious, results-driven Ayurvedic care in a tranquil tropical sanctuary.",
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
      slug: "kerala/ideal-ayurvedic-resort" as string | undefined,
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
  
  const cities = ["All", ...Array.from(new Set(centers.map(c => c.city).filter(Boolean))).sort()];
  const dynamicTreatments = centers.flatMap(c => c.specialties).filter(Boolean);
  const treatments = ["All", ...Array.from(new Set([...staticTreatments, ...dynamicTreatments])).sort()];

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
          {centers
            .filter((center) => {
              const cityMatch = selectedCity === "All" || center.city === selectedCity;
              return cityMatch;
            })
            .sort((a, b) => {
              if (selectedTreatment !== "All") {
                const aHas = a.specialties.includes(selectedTreatment);
                const bHas = b.specialties.includes(selectedTreatment);
                if (aHas && !bHas) return -1;
                if (!aHas && bHas) return 1;
              }
              if (sortBy === "rating") {
                return b.rating - a.rating;
              } else if (sortBy === "distance") {
                return a.city.localeCompare(b.city);
              }
              return 0;
            })
            .map((center, index) => (
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
                        <><ChevronUp size={12} /> Read Less</>
                      ) : (
                        <><ChevronDown size={12} /> Read More</>
                      )}
                    </button>

                    {/* Tags Section */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-5">
                      {center.specialties.slice(0, 3).map((specialty, i) => (
                        <span
                          key={i}
                          className="bg-[#F0F7F4] text-[#1E7A4D] text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-md border border-[#E0EBE6] text-center truncate max-w-full"
                          title={specialty}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    {/* Buttons Container */}
                    <div className="mt-auto pt-4 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-2">
                        <Link 
                          to={center.slug ? `/centers/${center.slug}` : "#"} 
                          className="w-full"
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



