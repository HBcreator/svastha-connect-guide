import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import { MapPin, Star, Phone, Mail, Images, Video, ChevronLeft, ChevronRight, X, Heart, Droplet, Brain, Sparkles, Activity, ShieldCheck, Stethoscope, Moon, HeartPulse, Pill, Wind, UserCheck, Award, Users, Globe, Leaf, Utensils, ClipboardList, FileSearch, Home, MessageCircle, TrendingUp, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Veda5Center = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<"Rishikesh" | "Kerala" | "Goa">("Rishikesh");
  const [selectedGallery, setSelectedGallery] = useState<"photos" | "videos">("photos");
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [reviewCity, setReviewCity] = useState<"Rishikesh" | "Kerala" | "Goa">("Rishikesh");
  const [reviewsByCity, setReviewsByCity] = useState<Record<string, { name: string; location: string; title: string; text: string; rating: number; verified?: boolean; condition?: string }[]>>({ Rishikesh: [], Kerala: [], Goa: [] });
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);
  const [contactData, setContactData] = useState<{ city: string; address: string[]; distances: string[] }[]>([]);
  const [currentContactIdx, setCurrentContactIdx] = useState(0);
  const [transportText, setTransportText] = useState("");
  const [currentAward, setCurrentAward] = useState(0);

  const [videoGalleryCity, setVideoGalleryCity] = useState<"Rishikesh" | "Kerala" | "Goa">("Rishikesh");
  const [videoGalleryIndex, setVideoGalleryIndex] = useState(0);
  const videoGalleryRef = useRef<HTMLVideoElement>(null);

  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  // Jump Navigation (Browse) Modal
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose VEDA5" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories" },
    { id: "awards", title: "Awards & Media" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "FAQs" },
    { id: "contact", title: "Contact Information" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const awards = [
    {
      image: "/Awards and rewards/VEDA5/award-01.png",
      title: "International Wellness Recognition",
      description: "Excellence in holistic wellness and care. Authentic Ayurveda and yoga programs. High guest satisfaction and trust."
    },
    {
      image: "/Awards and rewards/VEDA5/award-02.png",
      title: "Luxury Retreat Distinction",
      description: "Premium facilities. Personalized care and comfort. Consistent service quality."
    },
    {
      image: "/Awards and rewards/VEDA5/award-03.png",
      title: "Trusted Healing Destination",
      description: "Evidence-based Ayurvedic protocols. Experienced physicians and therapists. Long-term wellness outcomes."
    },
    {
      image: "/Awards and rewards/VEDA5/award-04.png",
      title: "Sustainable Wellness Leadership",
      description: "Nature-based healing practices. Clean, mindful living environments. Ethical and responsible operations."
    },
    {
      image: "/Awards and rewards/VEDA5/award-05.png",
      title: "Guest Experience Excellence",
      description: "Warm hospitality and attentive care. Comfortable, serene accommodations. Consistent 5-star feedback."
    },
    {
      image: "/Awards and rewards/VEDA5/award-06.png",
      title: "Global Wellness Community",
      description: "Holistic programs for diverse needs. Integrative therapies and education. Recognition from wellness bodies."
    }
  ];

  const maxAwardIndex = awards.length - 1;

  // Auto-rotate awards
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAward((prev) => {
        // Desktop shows 3 items, Mobile shows 1
        const isDesktop = window.innerWidth >= 768;
        const maxIndex = isDesktop ? awards.length - 3 : awards.length - 1;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPreviousAward = () => {
    const isDesktop = window.innerWidth >= 768;
    const maxIndex = isDesktop ? awards.length - 3 : awards.length - 1;
    setCurrentAward((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToNextAward = () => {
    const isDesktop = window.innerWidth >= 768;
    const maxIndex = isDesktop ? awards.length - 3 : awards.length - 1;
    setCurrentAward((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    fetch("/content/Top Centers/veda5/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const locations: { city: string; address: string[]; distances: string[] }[] = [];
        const sections = text.split(/\*\*([^*]+-(?:\s+The\s+)[^*]+)\*\*/g);

        for (let i = 1; i < sections.length; i += 2) {
          const city = sections[i].split(" - ")[0].trim();
          const content = sections[i + 1];

          const addressMatch = content.match(/\*\*Address\*\*\s*([\s\S]*?)(?=\*\*|$)/);
          const distanceMatch = content.match(/\*\*Distance from Major Locations\*\*\s*([\s\S]*?)(?=\*\*|$)/);

          const address = addressMatch ? addressMatch[1].trim().split("<br/>").map(l => l.trim()).filter(Boolean) : [];
          const distances = distanceMatch ? distanceMatch[1].trim().split("\n").map(l => l.replace(/^\*\s*/, "").trim()).filter(Boolean) : [];

          locations.push({ city, address, distances });
        }
        setContactData(locations);

        const transportMatch = text.match(/\*\*Transportation Services\*\*\s*([\s\S]*?)$/);
        if (transportMatch) {
          setTransportText(transportMatch[1].trim());
        }
      })
      .catch((err) => console.error("Error loading Contact Information:", err));
  }, []);

  useEffect(() => {
    fetch("/Center Videos/veda5/yt i frame testimonies.txt")
      .then((res) => res.text())
      .then((text) => {
        const urls = Array.from(text.matchAll(/src\s*=\s*"([^"]+)"/g)).map((m) => m[1].trim());
        setTestimonialVideos(urls.filter(Boolean));
        setSelectedTestimonialVideo(0);
      })
      .catch((err) => console.error("Error loading testimonial iframes:", err));
  }, []);

  useEffect(() => {
    const sectionElement = testimonialSectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTestimonialsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionElement);
    return () => observer.disconnect();
  }, []);

  const maps = [
    {
      city: "Rishikesh",
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.7823577946774!2d78.38040667463417!3d30.100418915918233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909140066ecb731%3A0x73581c9cd60e7dfe!2sVeda5%20Ayurveda%20%26%20Yoga%20Retreat%20Rishikesh!5e0!3m2!1sen!2sin!4v1767709592204!5m2!1sen!2sin'
    },
    {
      city: "Kerala",
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.1251699842796!2d76.1142780740818!3d10.331866767238248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f56e8f73b593%3A0x847600b29c9f57b7!2sVeda5%20Ayurveda%20Living%20Village!5e0!3m2!1sen!2sin!4v1767709633043!5m2!1sen!2sin'
    },
    {
      city: "Goa",
      iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.395315096163!2d73.70565997417128!3d15.677156249816587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfef14b7771dc7%3A0xdf775064f019fce3!2sVeda5%20Wellness%20Retreat%20%26%20Spa%2C%20Goa!5e0!3m2!1sen!2sin!4v1767709660066!5m2!1sen!2sin'
    }
  ];

  const goPrevMap = () => setCurrentContactIdx((prev) => (prev - 1 + maps.length) % maps.length);
  const goNextMap = () => setCurrentContactIdx((prev) => (prev + 1) % maps.length);

  type ProgramItem = { title: string; description: string; bullets: string[] };
  type SectionData = { heading: string; intro: string; items: ProgramItem[] };
  const [wellnessSection, setWellnessSection] = useState<SectionData | null>(null);
  const [medicalSection, setMedicalSection] = useState<SectionData | null>(null);
  const [whyChooseSection, setWhyChooseSection] = useState<SectionData | null>(null);
  const [facilitiesSection, setFacilitiesSection] = useState<SectionData | null>(null);
  const [treatmentSection, setTreatmentSection] = useState<SectionData | null>(null);



  const facilityImages = [
    "/Center Images/veda5/Facilities & Amenities/veda5-01.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-02.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-03.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-04.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-05.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-06.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-07.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-08.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-09.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-10.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-11.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-12.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-13.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-14.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-15.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-16.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-17.jpg",
  ];

  const LotusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 20c4-2 6-5 6-8-2 1-4 1-6 0-2 1-4 1-6 0 0 3 2 6 6 8z" />
      <path d="M12 12c-1.5-2-1.5-4 0-6 1.5 2 1.5 4 0 6z" />
      <path d="M8 12c-2-1.5-3-3.5-3-6 2 1.5 3 3.5 3 6z" />
      <path d="M16 12c2-1.5 3-3.5 3-6-2 1.5-3 3.5-3 6z" />
    </svg>
  );

  const OilPotIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 10h10" />
      <path d="M6 10c0-3 2-5 6-5s6 2 6 5" />
      <path d="M6 10v4a6 6 0 0 0 12 0v-4" />
      <path d="M12 6c0-1 1.5-2 3-2" />
    </svg>
  );

  const assets: Record<string, { photos: string[]; videos: string[] }> = {
    Rishikesh: {
      photos: [
        "/Center Images/veda5/Rishikesh/veda5-R1.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R2.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R3.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R4.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R5.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R6.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R7.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R8.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R9.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R10.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R11.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R12.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R13.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R14.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R15.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R16.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R17.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R18.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R19.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R20.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R21.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R22.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R23.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R24.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R25.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R27.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R28.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R29.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R30.jpg",
      ],
      videos: [
        "/Center Videos/veda5/veda5-Rishikesh-01.mp4",
        "/Center Videos/veda5/veda5-Rishikesh-02.mp4",
        "/Center Videos/veda5/veda5-Rishikesh-03.mp4",
        "/Center Videos/veda5/veda5-Rishikesh-04.mp4",
      ],
    },
    Kerala: {
      photos: [
        "/Center Images/veda5/Kerala/veda5-kerala-01.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-02.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-03.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-04.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-05.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-06.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-07.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-08.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-09.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-10.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-11.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-12.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-13.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-14.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-15.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-16.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-17.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-18.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-19.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-20.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-21.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-22.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-23.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-24.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-25.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-26.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-27.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-28.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-29.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-30.jpg",
      ],
      videos: [
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-01.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-02.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-03.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-04.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-05.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-06.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-07.mp4",
      ],
    },
    Goa: {
      photos: [
        "/Center Images/veda5/Goa/veda5-goa-01.jpg",
        "/Center Images/veda5/Goa/veda5-goa-02.jpg",
        "/Center Images/veda5/Goa/veda5-goa-03.jpg",
        "/Center Images/veda5/Goa/veda5-goa-04.jpg",
        "/Center Images/veda5/Goa/veda5-goa-05.jpg",
        "/Center Images/veda5/Goa/veda5-goa-06.jpg",
        "/Center Images/veda5/Goa/veda5-goa-07.jpg",
        "/Center Images/veda5/Goa/veda5-goa-08.jpg",
        "/Center Images/veda5/Goa/veda5-goa-09.jpg",
        "/Center Images/veda5/Goa/veda5-goa-10.jpg",
        "/Center Images/veda5/Goa/veda5-goa-11.jpg",
        "/Center Images/veda5/Goa/veda5-goa-12.jpg",
        "/Center Images/veda5/Goa/veda5-goa-13.jpg",
        "/Center Images/veda5/Goa/veda5-goa-14.jpg",
        "/Center Images/veda5/Goa/veda5-goa-15.jpg",
        "/Center Images/veda5/Goa/veda5-goa-16.jpg",
        "/Center Images/veda5/Goa/veda5-goa-17.jpg",
        "/Center Images/veda5/Goa/veda5-goa-18.jpg",
        "/Center Images/veda5/Goa/veda5-goa-19.jpg",
        "/Center Images/veda5/Goa/veda5-goa-20.jpg",
        "/Center Images/veda5/Goa/veda5-goa-21.jpg",
        "/Center Images/veda5/Goa/veda5-goa-22.jpg",
        "/Center Images/veda5/Goa/veda5-goa-23.jpg",
        "/Center Images/veda5/Goa/veda5-goa-24.jpg",
        "/Center Images/veda5/Goa/veda5-goa-25.jpg",
        "/Center Images/veda5/Goa/veda5-goa-26.jpg",
        "/Center Images/veda5/Goa/veda5-goa-27.jpg",
        "/Center Images/veda5/Goa/veda5-goa-28.jpg",
        "/Center Images/veda5/Goa/veda5-goa-29.jpg",
        "/Center Images/veda5/Goa/veda5-goa-30.jpg",
      ],
      videos: [
        "/Center Videos/veda5/Goa-videos/VEDA5-goa-01.mp4",
        "/Center Videos/veda5/Goa-videos/VEDA5-goa-02.mp4",
        "/Center Videos/veda5/Goa-videos/VEDA5-goa-03.mp4",
      ],
    },
  };

  const images = assets[selectedLocation].photos;
  const videos = assets[selectedLocation].videos;
  const isAutoPlaying = true;

  const galleryVideosByCity = assets[videoGalleryCity].videos;

  useEffect(() => {
    setVideoGalleryIndex(0);
  }, [videoGalleryCity]);

  useEffect(() => {
    const videoEl = videoGalleryRef.current;
    if (!videoEl) return;
    try {
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
    } catch {
      // ignore
    }
  }, [videoGalleryIndex]);

  const prevVideoGallery = () => {
    if (!galleryVideosByCity.length) return;
    setVideoGalleryIndex((prev) => (prev - 1 + galleryVideosByCity.length) % galleryVideosByCity.length);
  };

  const nextVideoGallery = () => {
    if (!galleryVideosByCity.length) return;
    setVideoGalleryIndex((prev) => (prev + 1) % galleryVideosByCity.length);
  };

  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [isTeamAutoPlaying, setIsTeamAutoPlaying] = useState(true);

  const teamIntro = "A dedicated team of wellness masters powers VEDA5, creating authentic and life-transforming healing experiences.";
  const founderImage = images[0];
  const teamImage = images[1] || images[0];

  const teamGroups = [
    {
      title: "Ayurvedic Physicians",
      description: "",
      items: [
        "Experienced doctors holding BAMS degrees from prestigious Ayurvedic medical colleges",
        "Specialized in classical diagnostics including pulse examination (Nadi Pariksha)",
        "Experts in Panchakarma therapies and chronic disease management",
        "Design personalized treatment protocols tailored to individual wellness goals",
      ],
    },
    {
      title: "Panchakarma Therapy Specialists",
      description: "",
      items: [
        "Expert therapists trained in authentic Panchakarma procedures and protocols",
        "Proficient in preparatory therapies and main elimination treatments",
        "Skilled in post-purification rejuvenation care and follow-up protocols",
        "Undergo continuous training to maintain highest international treatment standards",
      ],
    },
    {
      title: "Hatha Yoga Masters",
      description: "",
      items: [
        "Certified instructors trained in traditional Hatha Yoga lineages and philosophy",
        "Expertise in asana styles, pranayama breathing, and meditation practices",
        "Provide personalized attention and safe modifications for health conditions",
        "Conduct sessions suitable for all levels from beginners to advanced",
      ],
    },
    {
      title: "Naturopathy Practitioners",
      description: "",
      items: [
        "Qualified naturopathic doctors with specialized training in natural healing",
        "Experts in dietary planning, hydrotherapy, mud therapy, and detox protocols",
        "Design individualized lifestyle modifications complementing Ayurvedic treatments",
        "Create comprehensive wellness strategies for sustainable long-term health",
      ],
    },
    {
      title: "Wellness Counselors & Support Staff",
      description: "",
      items: [
        "Professional counselors providing lifestyle guidance and wellness education",
        "Experts in stress management coaching and emotional support services",
        "Help guests understand Ayurvedic principles and maintain healthy habits",
        "Offer post-treatment follow-up and ongoing wellness consultation support",
      ],
    },
    {
      title: "Medical Support & Care Team",
      description: "",
      items: [
        "24/7 medical professionals available at each VEDA5 location for emergencies",
        "Continuous monitoring of treatment progress and guest health conditions",
        "Ensure safety, comfort, and immediate attention when needed",
        "Coordinate between different specialists for integrated comprehensive care",
      ],
    },
  ];

  useEffect(() => {
    if (!isTeamAutoPlaying || teamGroups.length === 0) return;
    const id = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isTeamAutoPlaying, teamGroups.length]);

  const prevTeam = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + teamGroups.length) % teamGroups.length);
  };
  const nextTeam = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
  };

  if (selectedImage >= images.length && images.length) setSelectedImage(0);
  if (lightboxImage >= images.length && images.length) setLightboxImage(0);

  useEffect(() => {
    if (selectedGallery !== "photos") return;
    if (!images.length) return;
    const id = setInterval(() => {
      setSelectedImage((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [selectedGallery, images.length]);



  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setLightboxImage((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, images.length]);

  const parseTreatmentProcess = (text: string) => {
    const lines = text.split("\n").map(l => l.trim());
    let heading = "";
    let intro = "";
    const items: { title: string; description: string; step: number }[] = [];
    let current: any = null;

    for (const line of lines) {
      if (!line) continue;

      if (line.startsWith("**") && line.endsWith("**")) {
        if (!heading) {
          heading = line.replace(/\*\*/g, "");
          continue;
        }
      }

      const stepMatch = line.match(/^(\d+)\.\s+\*\*(.+?)\*\*$/);
      if (stepMatch) {
        if (current) items.push(current);
        current = {
          step: parseInt(stepMatch[1]),
          title: stepMatch[2].trim(),
          description: ""
        };
        continue;
      }

      if (!current && heading) {
        intro += (intro ? " " : "") + line;
      } else if (current) {
        current.description += (current.description ? " " : "") + line;
      }
    }
    if (current) items.push(current);
    return { heading, intro, items };
  };

  const parseProgramsFile = (text: string): SectionData => {
    const lines = text.split("\n").map((l) => l.trim());
    let heading = "";
    const introParts: string[] = [];
    const items: ProgramItem[] = [];
    let current: ProgramItem | null = null;
    let inItems = false;

    const flush = () => {
      if (current) {
        current.description = current.description.trim();
        items.push(current);
        current = null;
      }
    };

    for (const raw of lines) {
      const line = raw.trim();
      if (!line) continue;

      if (line.startsWith("### ")) {
        heading = line.replace(/^###\s+/, "").trim();
        continue;
      }

      const titleMatch = line.match(/^\*\*(.+?)\*\*$/);
      if (titleMatch) {
        flush();
        current = { title: titleMatch[1].trim(), description: "", bullets: [] };
        inItems = true;
        continue;
      }

      const bulletMatch = line.match(/^[*-]\s+(.*)$/);
      if (bulletMatch && current) {
        current.bullets.push(bulletMatch[1].trim());
        continue;
      }

      if (!inItems) {
        introParts.push(line);
        continue;
      }

      if (current) {
        current.description = current.description ? `${current.description} ${line}` : line;
      }
    }

    flush();
    return { heading, intro: introParts.join(" ").trim(), items };
  };

  useEffect(() => {
    Promise.all([
      fetch("/content/Top Centers/veda5/Wellness Programs.txt").then((r) => r.text()).catch(() => ""),
      fetch("/content/Top Centers/veda5/Medical Programs.txt").then((r) => r.text()).catch(() => ""),
      fetch("/content/Top Centers/veda5/Why Choose VEDA5.txt").then((r) => r.text()).catch(() => ""),
      fetch("/content/Top Centers/veda5/Facilities & Amenities.txt").then((r) => r.text()).catch(() => ""),
      fetch("/content/Top Centers/veda5/Veda5 Treatment Process & Patient Journey.txt").then((r) => r.text()).catch(() => ""),
    ]).then(([wellnessText, medicalText, whyText, facilitiesText, treatmentText]) => {
      if (wellnessText) setWellnessSection(parseProgramsFile(wellnessText));
      if (medicalText) setMedicalSection(parseProgramsFile(medicalText));
      if (whyText) setWhyChooseSection(parseProgramsFile(whyText));
      if (facilitiesText) setFacilitiesSection(parseProgramsFile(facilitiesText));
      if (treatmentText) setTreatmentSection(parseTreatmentProcess(treatmentText) as any);
    });
  }, []);

  useEffect(() => {
    if (facilityLightboxOpen) return;
    if (!facilityImages.length) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((p) => (p + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityLightboxOpen, facilityImages.length]);

  useEffect(() => {
    if (!facilityLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFacilityLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
      } else if (e.key === "ArrowRight") {
        setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [facilityLightboxOpen, facilityImages.length]);

  const getTreatmentStepIcon = (step: number) => {
    switch (step) {
      case 1: return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 2: return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 3: return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 4: return <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 5: return <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 6: return <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      default: return <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
  };

  const getStepTag = (step: number) => {
    switch (step) {
      case 1: return "Day 1";
      case 2: return "Day 1–2";
      case 3: return "Ongoing";
      case 4: return "Daily";
      case 5: return "Throughout Stay";
      case 6: return "Post-Retreat";
      default: return "";
    }
  };

  useEffect(() => {
    if (selectedGallery === "videos") {
      setSelectedVideo(0);
    }
    if (selectedGallery === "photos") {
      setSelectedImage(0);
    }
  }, [selectedLocation, selectedGallery]);

  const parseReviews = (text: string) => {
    const lines = text.split("\n").map((l) => l.trim());
    const items: { name: string; location: string; title: string; text: string; rating: number; verified: boolean; condition?: string }[] = [];
    let current: { name: string; location: string; title: string; text: string; rating: number; verified: boolean; condition?: string } | null = null;

    for (const line of lines) {
      if (!line || line.startsWith("###")) continue;

      // New format: **Name - Location**
      const nameMatch = line.match(/^\*\*(.+?)\*\*$/);
      if (nameMatch && !line.includes("Rating:")) {
        if (current) items.push(current);
        const fullStr = nameMatch[1];
        const parts = fullStr.split(" - ");
        current = {
          name: parts[0] || "",
          location: parts[1] || "",
          title: "",
          text: "",
          rating: 5,
          verified: true,
          condition: ""
        };
        continue;
      }

      // Title: *"Title"*
      if (current && line.startsWith('*\"') && line.endsWith('\"*')) {
        current.title = line.replace(/^\*"/, "").replace(/"\*$/, "");
        // condition extraction logic like Soukya
        const knownConditions = ["Arthritis", "Burnout", "Back Pain", "PCOD", "Addiction", "Diabetes", "Insomnia", "Psoriasis", "Cancer", "Detox", "Weight Loss", "Stress"];
        for (const c of knownConditions) {
          if (current.title.includes(c) || current.text.includes(c)) {
            current.condition = c;
            break;
          }
        }
        continue;
      }

      // Rating
      if (current && line.startsWith("**Rating:")) {
        const match = line.match(/(\d)\/5/);
        current.rating = match ? parseInt(match[1], 10) : 5;
        continue;
      }

      // Review Text
      if (current) {
        current.text = current.text ? current.text + " " + line : line;
      }
    }
    if (current) items.push(current);
    return items;
  };

  useEffect(() => {
    Promise.all([
      fetch("/content/Top Centers/veda5/patient and reviews/Rishikesh.txt").then((r) => r.text()).catch(() => ""),
      fetch("/content/Top Centers/veda5/patient and reviews/Kerala.txt").then((r) => r.text()).catch(() => ""),
      fetch("/content/Top Centers/veda5/patient and reviews/Goa.txt").then((r) => r.text()).catch(() => ""),
    ]).then(([rishikesh, kerala, goa]) => {
      setReviewsByCity({ Rishikesh: parseReviews(rishikesh), Kerala: parseReviews(kerala), Goa: parseReviews(goa) });
      setCurrentReview(0);
      setIsReviewAutoPlaying(true);
    });
  }, []);

  useEffect(() => {
    setCurrentReview(0);
    setIsReviewAutoPlaying(true);
  }, [reviewCity]);

  useEffect(() => {
    if (!isReviewAutoPlaying) return;
    const arr = reviewsByCity[reviewCity] || [];
    if (!arr.length) return;
    const id = setInterval(() => {
      setCurrentReview((p) => (p + 1) % arr.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isReviewAutoPlaying, reviewCity, reviewsByCity]);

  const goPrevReview = () => {
    const arr = reviewsByCity[reviewCity] || [];
    if (!arr.length) return;
    setIsReviewAutoPlaying(false);
    setCurrentReview((p) => (p - 1 + arr.length) % arr.length);
  };
  const goNextReview = () => {
    const arr = reviewsByCity[reviewCity] || [];
    if (!arr.length) return;
    setIsReviewAutoPlaying(false);
    setCurrentReview((p) => (p + 1) % arr.length);
  };
  const selectReviewDot = (idx: number) => {
    setIsReviewAutoPlaying(false);
    setCurrentReview(idx);
  };
  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );

  const iconForWellnessTitle = (t: string) => {
    const s = t.toLowerCase();
    const color = "text-green-600";
    const size = "h-4 w-4 md:h-5 md:w-5";

    if (s.includes("rejuvenation")) return <Sparkles className={`${size} ${color}`} />;
    if (s.includes("ayurveda detox")) return <Leaf className={`${size} ${color}`} />;
    if (s.includes("panchakarma")) return <OilPotIcon className={`${size} ${color}`} />;
    if (s.includes("weight")) return <Activity className={`${size} ${color}`} />;
    if (s.includes("stress") || s.includes("anxiety")) return <Brain className={`${size} ${color}`} />;
    if (s.includes("immunity")) return <ShieldCheck className={`${size} ${color}`} />;
    if (s.includes("anti-aging")) return <Sparkles className={`${size} ${color}`} />;
    if (s.includes("beauty") || s.includes("skin")) return <Droplet className={`${size} ${color}`} />;
    if (s.includes("digital detox")) return <Moon className={`${size} ${color}`} />;
    if (s.includes("yoga") || s.includes("meditation")) return <LotusIcon className={`${size} ${color}`} />;
    if (s.includes("spine") || s.includes("joint")) return <Activity className={`${size} ${color}`} />;
    if (s.includes("women")) return <Heart className={`${size} ${color}`} />;

    return <LotusIcon className={`${size} ${color}`} />;
  };

  const iconForMedicalTitle = (t: string) => {
    const s = t.toLowerCase();
    const color = "text-blue-600";
    const size = "h-4 w-4 md:h-5 md:w-5";

    if (s.includes("spine") || s.includes("back") || s.includes("neck")) return <Activity className={`${size} ${color}`} />;
    if (s.includes("joint") || s.includes("arthritis")) return <Activity className={`${size} ${color}`} />;
    if (s.includes("diabetes")) return <Pill className={`${size} ${color}`} />;
    if (s.includes("skin") || s.includes("psoriasis")) return <Sparkles className={`${size} ${color}`} />;
    if (s.includes("respiratory")) return <Wind className={`${size} ${color}`} />;
    if (s.includes("neuro")) return <Brain className={`${size} ${color}`} />;
    if (s.includes("digest")) return <Droplet className={`${size} ${color}`} />;
    if (s.includes("weight")) return <Activity className={`${size} ${color}`} />;
    if (s.includes("women")) return <Heart className={`${size} ${color}`} />;
    if (s.includes("cardio") || s.includes("heart")) return <HeartPulse className={`${size} ${color}`} />;
    if (s.includes("post-natal")) return <Users className={`${size} ${color}`} />;
    if (s.includes("post-covid")) return <ShieldCheck className={`${size} ${color}`} />;

    return <Stethoscope className={`${size} ${color}`} />;
  };

  const iconForFacilityTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("accommod") || s.includes("room") || s.includes("suite") || s.includes("stay")) return <Home className="h-7 w-7 text-white" />;
    if (s.includes("beach") || s.includes("sea") || s.includes("ocean")) return <MapPin className="h-7 w-7 text-white" />;
    if (s.includes("treatment") || s.includes("ayurved") || s.includes("panchakarma")) return <Droplet className="h-7 w-7 text-white" />;
    if (s.includes("yoga") || s.includes("meditat")) return <LotusIcon className="h-7 w-7 text-white" />;
    if (s.includes("dining") || s.includes("cuisine") || s.includes("food") || s.includes("sattvic")) return <Utensils className="h-7 w-7 text-white" />;
    if (s.includes("pool") || s.includes("swim")) return <Droplet className="h-7 w-7 text-white" />;
    if (s.includes("garden") || s.includes("nature") || s.includes("surround")) return <Leaf className="h-7 w-7 text-white" />;
    if (s.includes("service") || s.includes("wifi") || s.includes("transfer") || s.includes("guest")) return <Users className="h-7 w-7 text-white" />;
    return <Globe className="h-7 w-7 text-white" />;
  };

  const iconForWhyChooseTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("award") || s.includes("globally") || s.includes("excellence") || s.includes("tripadvisor")) return <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("sanctuar") || s.includes("location") || s.includes("himal") || s.includes("beach") || s.includes("goa") || s.includes("kerala") || s.includes("rish")) return <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("cert") || s.includes("authentic") || s.includes("ayur gold") || s.includes("government")) return <ShieldCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("physician") || s.includes("expert") || s.includes("care") || s.includes("therap")) return <Stethoscope className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("integration") || s.includes("yoga") || s.includes("mind") || s.includes("meditat")) return <UserCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("accommod") || s.includes("room") || s.includes("suite") || s.includes("luxur")) return <Home className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("cuisine") || s.includes("meal") || s.includes("food") || s.includes("organic")) return <Utensils className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    if (s.includes("guest") || s.includes("transform") || s.includes("experience") || s.includes("review")) return <Users className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
    return <Sparkles className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  };

  // Helper to get initials
  const getInitials = (name: string) => {
    return name?.split(" ").map(w => w[0]).join("").slice(0, 2) || "";
  };



  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Veda5</h1>
                <p className="text-xl mb-4 opacity-90">Best Ayurveda, Yoga & Wellness Retreat Center</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Rishikesh, Kerala, Goa, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(1000+ reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-8" id="gallery">
        <div className="max-w-6xl mx-auto mb-6">
          <div className="flex flex-wrap justify-center gap-3">
            {(["Rishikesh", "Kerala", "Goa"] as const).map((loc) => (
              <Button
                key={loc}
                size="lg"
                variant="outline"
                className={
                  selectedLocation === loc
                    ? "font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl bg-accent text-white border-2 border-accent hover:bg-accent/90 hover:text-white"
                    : "font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl bg-white text-primary border-2 border-primary hover:bg-accent hover:text-white hover:border-accent"
                }
                onClick={() => setSelectedLocation(loc)}
              >
                {loc}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-6">
          <div className="flex justify-center flex-wrap gap-3">
            <Button
              size="lg"
              variant={selectedGallery === "photos" ? "default" : "outline"}
              className={`font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 ${selectedGallery === "photos"
                ? "scale-105 shadow-lg"
                : "bg-accent text-white hover:bg-accent/90"
                }`}
              onClick={() => setSelectedGallery("photos")}
            >
              <Images className="mr-2 h-5 w-5" /> Photo Gallery
            </Button>
            <Button
              size="lg"
              variant={selectedGallery === "videos" ? "default" : "outline"}
              className={`font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 ${selectedGallery === "videos"
                ? "scale-105 shadow-lg"
                : "bg-accent text-white hover:bg-accent/90"
                }`}
              onClick={() => setSelectedGallery("videos")}
            >
              <Video className="mr-2 h-5 w-5" /> Video Gallery
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {selectedGallery === "photos" ? (
            images.length ? (
              <div className="space-y-4">
                <div className="relative mb-6 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  <img
                    src={images[selectedImage]}
                    alt={`${selectedLocation} Photo`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <button
                    onClick={() => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev + 1) % images.length)}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {images.length}
                  </div>
                  {isAutoPlaying && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Auto
                    </div>
                  )}

                </div>

                {(() => {
                  const len = images.length;
                  const thumbnailImages = images.slice(0, Math.min(5, len));

                  return (
                    <div className="flex flex-col md:flex-row gap-3 mb-6">
                      <div
                        className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                        onClick={() => {
                          setLightboxImage(thumbnailImages.length ? images.indexOf(thumbnailImages[0]) : 0);
                          setLightboxOpen(true);
                        }}
                      >
                        <img
                          src={thumbnailImages[0]}
                          alt={`${selectedLocation} thumb 1`}
                          className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>

                      <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                        {thumbnailImages.slice(1, 5).map((img, idx) => {
                          const actualIndex = images.indexOf(img);
                          const isLast = idx === 3;
                          return (
                            <div
                              key={idx}
                              className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                              onClick={() => {
                                setLightboxImage(actualIndex);
                                setLightboxOpen(true);
                              }}
                            >
                              <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "100%" }}>
                                <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                {isLast && (
                                  <div className="absolute inset-0 flex items-end justify-center pb-2 md:pb-4 bg-black/40">
                                    <Button
                                      size="sm"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setShowFullGallery(true);
                                      }}
                                      className="bg-white text-primary hover:bg-white/95 hover:scale-105 font-semibold text-xs md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform w-[90%] max-w-[180px]"
                                    >
                                      <Images className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
                                      <span className="hidden md:inline">Show Full Gallery</span>
                                      <span className="md:hidden">Gallery</span>
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="rounded-xl border p-6 text-center text-muted-foreground">No photos available for {selectedLocation} yet.</div>
            )
          ) : videos.length ? (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
                <video
                  key={`${selectedLocation}-${selectedVideo}`}
                  controls
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src={videos[selectedVideo]} type="video/mp4" />
                </video>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  Video {selectedVideo + 1} / {videos.length}
                </div>
              </div>
              <div key={selectedLocation} className="grid grid-cols-2 gap-4">
                {videos.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVideo(idx)}
                    className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-4 ring-primary" : "ring-2 ring-transparent hover:ring-primary/30"}`}
                  >
                    <video src={src} className="w-full h-full object-cover" muted />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Video className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Video {idx + 1}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-xl border p-6 text-center text-muted-foreground">No videos available for {selectedLocation} yet.</div>
          )}
        </div>

        {showFullGallery && (
          <div className="fixed inset-0 bg-[#EDE8D0]/80 backdrop-blur-sm z-50 overflow-auto" onClick={() => setShowFullGallery(false)}>
            <div className="container mx-auto px-4 py-10" onClick={(e) => e.stopPropagation()}>
              <div className="relative flex items-center justify-center mb-4 pl-16 md:pl-0">
                <Button onClick={() => setShowFullGallery(false)} className="absolute left-0 bg-white text-primary hover:bg-white/90">
                  Back
                </Button>
                <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">
                  VEDA5 Health Center
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full cursor-pointer"
                    style={{ paddingBottom: "75%" }}
                    onClick={() => {
                      setLightboxImage(i);
                      setLightboxOpen(true);
                    }}
                  >
                    <img src={img} alt={`VEDA5 ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm" onClick={() => setLightboxOpen(false)}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
              }}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage((prev) => (prev + 1) % images.length);
              }}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">VEDA5 Health Center</div>
              <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                <img src={images[lightboxImage]} alt={`VEDA5 ${lightboxImage + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>

              <div className="flex md:hidden items-center justify-between mt-4">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
                  }}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                >
                  Previous
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImage((prev) => (prev + 1) % images.length);
                  }}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto mt-12">
          <Card className="mb-12 rounded-xl">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
              <MarkdownContent
                contentPath="/content/Top Centers/veda5/veda5 Main content.txt"
                h3ClassName="text-xl sm:text-2xl md:text-2xl font-semibold text-primary leading-snug"
                titleClassName="text-2xl sm:text-3xl md:text-3xl font-semibold text-primary border-b-2 border-primary/20 pb-2"
                onLinkClick={(action) => {
                  if (action === "quote") {
                    setQuoteModalOpen(true);
                  }
                }}
              />
            </CardContent>
          </Card>
        </div>



        {/* Wellness & Rejuvenation Programs */}
        <div className="mb-12 max-w-6xl mx-auto rounded-xl p-6 md:p-8" style={{ backgroundColor: '#EDE8D0' }} id="wellness">
          {/* Statistics Section */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10">
            <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Happy Patients</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">4.5/5</div>
              <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Average Rating</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Success Rate</div>
            </div>
          </div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 border-green-700 mb-4">
              <LotusIcon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-primary mb-3">{wellnessSection?.heading || "Wellness Programs"}</h3>
            <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
              {wellnessSection?.intro || "Loading programs…"}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {(wellnessSection?.items || []).map((p, idx) => (
              <AccordionItem
                key={idx}
                value={`well-${idx}`}
                className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white"
              >
                <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-green-700">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 border-2 border-green-700">
                      {iconForWellnessTitle(p.title)}
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  {p.description && (
                    <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                      {p.description}
                    </p>
                  )}
                  {p.bullets.length > 0 && (
                    <ul className="space-y-1.5 md:space-y-2">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mb-12 max-w-6xl mx-auto rounded-xl p-6 md:p-8" style={{ backgroundColor: '#EDE8D0' }} id="medical">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-700 mb-4">
              <Stethoscope className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-primary mb-3">{medicalSection?.heading || "Medical Programs"}</h3>
            <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
              {medicalSection?.intro || "Loading programs…"}
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {(medicalSection?.items || []).map((p, idx) => (
              <AccordionItem
                key={idx}
                value={`med-${idx}`}
                className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white"
              >
                <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-blue-700">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 border-2 border-blue-700">
                      {iconForMedicalTitle(p.title)}
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  {p.description && (
                    <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                      {p.description}
                    </p>
                  )}
                  {p.bullets.length > 0 && (
                    <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm">
                          <span className="text-blue-600 mt-1">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Video Gallery Section (SOUKYA-style) */}
        <div className="mb-12 max-w-6xl mx-auto" id="videos">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
              Video Gallery of VEDA5
            </h2>
            <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
              Explore VEDA5 across locations through our curated videos.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 flex-wrap px-4">
            {(["Rishikesh", "Goa", "Kerala"] as const).map((city) => (
              <Button
                key={city}
                size="lg"
                variant={videoGalleryCity === city ? "default" : "outline"}
                className={`font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl transition-all duration-300 ease-in-out hover:scale-105 ${videoGalleryCity === city
                  ? "scale-105 shadow-lg"
                  : "bg-white text-primary border-2 border-primary hover:bg-accent hover:text-white hover:border-accent"
                  }`}
                onClick={() => setVideoGalleryCity(city)}
              >
                {city}
              </Button>
            ))}
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
              <CardContent className="p-0">
                <div className="aspect-video w-full relative bg-black">
                  {galleryVideosByCity[videoGalleryIndex] && (
                    <video
                      ref={videoGalleryRef}
                      key={galleryVideosByCity[videoGalleryIndex]}
                      src={galleryVideosByCity[videoGalleryIndex]}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows - Desktop Only */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
              <button
                onClick={prevVideoGallery}
                className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                aria-label="Previous video"
                disabled={galleryVideosByCity.length === 0}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={nextVideoGallery}
                className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                aria-label="Next video"
                disabled={galleryVideosByCity.length === 0}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            {/* Navigation Buttons - Mobile Only */}
            <div className="flex md:hidden items-center justify-between mt-4 px-6">
              <Button
                onClick={prevVideoGallery}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                disabled={galleryVideosByCity.length === 0}
              >
                Previous
              </Button>
              <Button
                onClick={nextVideoGallery}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                disabled={galleryVideosByCity.length === 0}
              >
                Next
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {galleryVideosByCity.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setVideoGalleryIndex(index)}
                  className={`transition-all ${index === videoGalleryIndex
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                    } rounded-full`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose VEDA5 - Infographic Section */}
        <div className="mb-12 max-w-6xl mx-auto" id="why-choose">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">
              {whyChooseSection?.heading || "Why Choose VEDA5 for Your Holistic Health Journey"}
            </h2>
            <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
              {whyChooseSection?.intro || "Loading…"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(whyChooseSection?.items || []).map((it, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        {iconForWhyChooseTitle(it.title)}
                      </div>
                      <h3 className="text-lg font-bold text-primary">{it.title}</h3>
                    </div>
                    {it.description && (
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        {it.description}
                      </p>
                    )}
                    {it.bullets.length > 0 && (
                      <ul className="list-none pl-0 space-y-1.5">
                        {it.bullets.slice(0, 3).map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                            <span className="text-primary mt-1">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials of VEDA5 Center - Video Section */}
        <div className="mb-12" id="testimonial-videos" ref={testimonialSectionRef}>
          <div className="text-center mb-8 md:mb-10 px-4">
            <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
              Testimonials of VEDA5 Center
            </h2>
            <div className="w-12 h-1 bg-primary/20 mx-auto mb-3 rounded-full hidden md:block" />
            <p className="text-sm md:text-lg mx-auto max-w-none leading-relaxed italic" style={{ color: "#7F543D" }}>
              Watch inspiring stories of recovery and wellness from our global family of patients.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 md:px-0">
            <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
              <CardContent className="p-0">
                <div className="aspect-video w-full relative">
                  {testimonialVideos[selectedTestimonialVideo] && (
                    <iframe
                      key={testimonialVideos[selectedTestimonialVideo]}
                      src={`${testimonialVideos[selectedTestimonialVideo]}?autoplay=${isTestimonialsInView ? "1" : "0"}&mute=0&rel=0`}
                      title="VEDA5 Testimonial Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows - Desktop Only */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
              <button
                onClick={() =>
                  setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)
                }
                className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                aria-label="Previous testimonial"
                disabled={testimonialVideos.length === 0}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={() => setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)}
                className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                aria-label="Next testimonial"
                disabled={testimonialVideos.length === 0}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            {/* Navigation Buttons - Mobile Only */}
            <div className="flex md:hidden items-center justify-between mt-4 px-6">
              <Button
                onClick={() =>
                  setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)
                }
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                disabled={testimonialVideos.length === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                disabled={testimonialVideos.length === 0}
              >
                Next
              </Button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {testimonialVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTestimonialVideo(index)}
                  className={`transition-all ${index === selectedTestimonialVideo
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                    } rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Treatment Process & Patient Journey */}
        <div className="mb-12 py-10 md:py-16" style={{ backgroundColor: "#D4E0D6" }} id="process">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">{(treatmentSection as any)?.heading || "Treatment Process & Patient Journey"}</h2>
            <p className="text-base md:text-lg mx-auto px-4 max-w-2xl" style={{ color: "#7F543D" }}>{(treatmentSection as any)?.intro || "Your personalized healing journey at Veda5, step by step"}</p>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            {((treatmentSection as any)?.items || []).map((it: any, idx: number) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 group ${idx !== ((treatmentSection as any).items.length - 1) ? "mb-10 md:mb-16" : ""}`}>
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    {it.step}
                  </div>
                  {idx !== ((treatmentSection as any).items.length - 1) && (
                    <div className="w-0.5 md:w-1 h-full bg-[#2F5B63]/20 mt-2"></div>
                  )}
                </div>
                <Card className="relative w-full md:flex-1 hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary bg-white rounded-2xl shadow-xl">
                  <CardContent className="p-4 md:p-8">
                    <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md z-10">
                      {it.step}
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 pl-10 md:pl-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2F5B63]/10 flex items-center justify-center flex-shrink-0">
                        {getTreatmentStepIcon(it.step)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base md:text-xl font-bold text-primary leading-tight">{it.title}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold mt-1 inline-block">
                          {getStepTag(it.step)}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      {it.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-12 max-w-6xl mx-auto">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="md:hidden">
              <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                <img src="/Center Images/veda5/CTA-image.jpg" alt="VEDA5 Wellness Center" className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105" />
                <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                <p className="text-sm text-center mb-4" style={{ color: '#7F543D' }}>
                  Take the first step towards holistic healing. Our expert team guides you with personalized treatment plans tailored to your unique needs.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full rounded-full bg-[#2F5B63] hover:bg-[#234A50] text-white" onClick={() => setQuoteModalOpen(true)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Book Consultation Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-full rounded-full border-2 border-[#2F5B63] text-[#2F5B63]" onClick={() => setQuoteModalOpen(true)}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat With Us
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2" style={{ color: '#7F543D' }}>
                  <Phone className="h-4 w-4 text-red-600" />
                  <a href="tel:+918028432737" className="underline hover:text-primary">Call us: +91 80 2843 2737</a>
                </div>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-primary mb-3">Ready to Start Your Wellness Journey?</h3>
                <p className="text-base md:text-lg mb-6" style={{ color: '#7F543D' }}>
                  Take the first step toward holistic healing. Our team will guide you with personalized plans tailored to your needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="rounded-full px-6" onClick={() => setQuoteModalOpen(true)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Book Consultation Now
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full px-6" onClick={() => setQuoteModalOpen(true)}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat With Us
                  </Button>
                </div>
                <div className="mt-4 flex items-center gap-2" style={{ color: '#7F543D' }}>
                  <Phone className="h-5 w-5 text-red-600" />
                  <a href="tel:+918028432737" className="underline hover:text-primary">Call us: +91 80 2843 2737</a>
                </div>
              </div>
              <div>
                <img src="/Center Images/veda5/CTA-image.jpg" alt="VEDA5 Wellness Center" className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 max-w-6xl mx-auto" id="facilities">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">{facilitiesSection?.heading || "Facilities & Amenities"}</h2>
            <p className="text-base md:text-lg mx-auto mb-8" style={{ color: "#7F543D" }}>
              {facilitiesSection?.intro || "Experience healing in comfort with our comprehensive range of traditional and modern facilities"}
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative mb-10">
            <button
              onClick={() => setCurrentFacilityImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
              className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous facility image"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={() => setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length)}
              className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next facility image"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="overflow-hidden px-10 md:px-12">
              <div className="md:hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentFacilityImage * 100}%)` }}
                >
                  {facilityImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div
                        className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                        onClick={() => {
                          setFacilityLightboxImage(index);
                          setFacilityLightboxOpen(true);
                        }}
                      >
                        <img src={image} alt={`VEDA5 Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${Math.min(currentFacilityImage, facilityImages.length - 5) * 20}%)` }}
                >
                  {facilityImages.map((image, index) => (
                    <div key={index} className="w-1/5 flex-shrink-0 px-2">
                      <div
                        className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                        onClick={() => {
                          setFacilityLightboxImage(index);
                          setFacilityLightboxOpen(true);
                        }}
                      >
                        <img src={image} alt={`VEDA5 Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {facilityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFacilityImage(index)}
                  className={`transition-all ${index === currentFacilityImage ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                  aria-label={`Go to facility image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(facilitiesSection?.items || []).map((it, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary bg-white h-full flex flex-col">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                      {iconForFacilityTitle(it.title)}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1">{it.title}</h3>
                  </div>
                  {it.description && (
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                      {it.description}
                    </p>
                  )}
                  {it.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {it.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          <span className="leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {facilityLightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
              <button
                onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">VEDA5 Health Center</div>
                <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                  <img
                    src={facilityImages[facilityLightboxImage]}
                    alt={`VEDA5 Facility ${facilityLightboxImage + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setFacilityLightboxOpen(false)}
                    className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                    aria-label="Close"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex md:hidden items-center justify-between mt-4">
                  <Button
                    onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-12 max-w-6xl mx-auto rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }} id="team">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Center & Team Info</h2>
            <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>{teamIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
              <CardContent className="p-4 md:p-8 h-full flex flex-col">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                      <img src={founderImage} alt="Founder" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">VEDA5 Leadership</h3>
                    <p className="text-xs md:text-sm font-semibold" style={{ color: '#7F543D' }}>Ayurveda • Yoga • Naturopathy</p>
                    <p className="text-xs md:text-sm mt-1 text-primary/70">Guided by experienced wellness experts</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Our leadership team brings together classical Ayurvedic wisdom and modern wellness hospitality to craft safe, personalized, and results-driven healing journeys.
                </p>
                <div className="pt-3 md:pt-4 border-t border-primary/10">
                  <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {["Clinical Oversight", "Personalized Protocols", "Guest Experience", "Holistic Care"].map((e) => (
                      <span key={e} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">{e}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                <CardContent className="p-4 md:p-8 h-full">
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 leading-snug break-words whitespace-normal">{teamGroups[currentTeamSlide]?.title || "Team"}</h3>
                    </div>
                  </div>
                  {teamGroups[currentTeamSlide]?.description && (
                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: '#7F543D' }}>{teamGroups[currentTeamSlide].description}</p>
                  )}
                  <ul className="space-y-2.5">
                    {(teamGroups[currentTeamSlide]?.items || []).map((it, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                        <span className="text-primary mt-1">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <button onClick={prevTeam} className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Previous team card">
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              <button onClick={nextTeam} className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Next team card">
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Patient Success Stories & Reviews (below Expert Medical Team) */}
        <div className="mb-12 max-w-6xl mx-auto" id="reviews">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg" style={{ color: "#7F543D" }}>Hear from guests across Rishikesh, Kerala, and Goa about their transformational healing journeys</p>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-6">
            {(["Rishikesh", "Kerala", "Goa"] as const).map((c) => (
              <Button key={c} onClick={() => setReviewCity(c)} className={`px-3 py-2 md:px-8 md:py-4 text-xs md:text-base font-semibold ${reviewCity === c ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary border-2 border-primary hover:bg-primary/10"}`}>{c}</Button>
            ))}
          </div>
          <div className="relative">
            <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
              <CardContent className="p-4 md:p-12">
                <div className="max-w-4xl mx-auto">
                  {reviewsByCity[reviewCity]?.length > 0 ? (
                    <>
                      <div className="text-primary/20 mb-3 md:mb-4">
                        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>

                      <div className="mb-4 md:mb-6">
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">
                          {reviewsByCity[reviewCity][currentReview].title}
                        </h3>
                        <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                          "{reviewsByCity[reviewCity][currentReview].text}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                          {reviewsByCity[reviewCity][currentReview].name.charAt(0)}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-base md:text-xl font-semibold text-primary">
                              {reviewsByCity[reviewCity][currentReview].name}
                            </h4>
                            {reviewsByCity[reviewCity][currentReview].verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                                ✓ Verified
                              </span>
                            )}
                          </div>
                          <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                            {reviewsByCity[reviewCity][currentReview].location} {reviewsByCity[reviewCity][currentReview].condition && `• ${reviewsByCity[reviewCity][currentReview].condition}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 md:gap-3">
                        {renderStars(reviewsByCity[reviewCity][currentReview].rating)}
                        <span className="text-xs md:text-sm font-semibold text-primary">
                          {reviewsByCity[reviewCity][currentReview].rating}.0
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12 text-lg text-primary/60">Loading reviews...</div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-6">
              <button
                onClick={goPrevReview}
                className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-6">
              <button
                onClick={goNextReview}
                className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
            </div>

            {isReviewAutoPlaying && (
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Auto
              </div>
            )}

            <div className="flex justify-center gap-2 mt-6">
              {(reviewsByCity[reviewCity] || []).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => selectReviewDot(idx)}
                  className={`transition-all rounded-full ${currentReview === idx
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                    }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 mb-10 md:mb-14 px-4" id="awards">
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
              <Award className="h-8 w-8" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards & Media</h2>
            <p className="text-base md:text-lg px-4 mx-auto max-w-2xl" style={{ color: '#7F543D' }}>
              Recognition of our excellence in authentic Ayurvedic healing and patient care
            </p>
          </div>

          <div className="relative group max-w-5xl mx-auto">
            <div className="overflow-hidden px-4 md:px-10">
              {/* Mobile Slider (1 card) */}
              <div className="md:hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentAward * 100}%)` }}
                >
                  {awards.map((award, i) => (
                    <div key={i} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                          <img
                            src={award.image}
                            alt={award.title}
                            className="max-h-[85%] max-w-[85%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">{award.title}</h4>
                          <p className="text-sm italic line-clamp-3" style={{ color: '#7F543D' }}>"{award.description}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Slider (3 cards visible) */}
              <div className="hidden md:block">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${Math.min(currentAward, awards.length - 3) * (100 / 3)}%)` }}
                >
                  {awards.map((award, i) => (
                    <div key={i} className="w-1/3 flex-shrink-0 px-4">
                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                        <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 md:mb-6 p-2 md:p-3 flex items-center justify-center overflow-hidden">
                          <img
                            src={award.image}
                            alt={award.title}
                            className="max-h-[95%] max-w-[95%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-primary mb-3 min-h-[56px] flex items-center justify-center leading-tight">{award.title}</h4>
                          <p className="text-base italic" style={{ color: '#7F543D' }}>"{award.description}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPreviousAward}
              className="absolute left-8 md:-left-4 top-[58%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
              aria-label="Previous award"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button
              onClick={goToNextAward}
              className="absolute right-8 md:-right-4 top-[58%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
              aria-label="Next award"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {awards.slice(0, maxAwardIndex + 1).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentAward(i); }}
                  className={`transition-all duration-300 ${i === currentAward ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                  aria-label={`Go to award ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 mb-12 max-w-6xl mx-auto" id="insurance">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Information</h2>
            <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>Flexible payment options and insurance support to make holistic healthcare accessible</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Insurance Coverage</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>International health insurance may cover Ayurvedic wellness treatments</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Guests should verify eligibility and claim procedures with providers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>VEDA5 supplies detailed medical documentation, reports, and invoices</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Support provided for claims and reimbursement processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <ClipboardList className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Accepts international cards, bank transfers, and cash payments</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Detailed pricing via tariff brochure or reservations team</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Early booking discounts, seasonal offers, and special promotions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Group bookings, extended stays, and payment plans for longer programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 bg-primary/5 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">For International Patients</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Please confirm coverage with your insurer for Ayurvedic treatments. Our team provides necessary documentation and medical reports to support insurance claims and reimbursements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12 max-w-6xl mx-auto" id="faq">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions About VEDA5</h2>
            <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
              Find answers to common questions about treatments, facilities, and your healing journey
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
            <AccordionItem value="faq1" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                <span className="text-lg font-semibold text-primary text-left">What is the minimum duration of treatment at VEDA5?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  The minimum recommended stay is 7 days for wellness and rejuvenation programs, 10-14 days for detoxification packages, and 14-21 days for comprehensive Panchakarma and medical treatment programs. Longer durations provide deeper therapeutic benefits and more sustainable health improvements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                <span className="text-lg font-semibold text-primary text-left">Do I need to bring my medical records?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Yes, bringing previous medical reports, diagnostic test results, current prescriptions, and detailed health history helps Ayurvedic physicians understand your condition comprehensively and design optimal personalized treatment protocols tailored to your specific needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                <span className="text-lg font-semibold text-primary text-left">Is VEDA5 suitable for elderly patients?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Absolutely. VEDA5 welcomes guests of all ages and specializes in providing gentle, age-appropriate treatments for senior citizens. Therapies are carefully adapted to individual stamina, health status, and mobility, ensuring safety and comfort throughout the healing journey.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                <span className="text-lg font-semibold text-primary text-left">Can I continue my regular medications during treatment?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Yes, initially you continue necessary medications. Ayurvedic physicians review your prescriptions during consultation and may gradually reduce dosages as Ayurvedic treatments show positive effects. Never stop medications abruptly without proper physician guidance and monitoring.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                <span className="text-lg font-semibold text-primary text-left">What should I pack for my stay at VEDA5?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Comfortable loose cotton clothing suitable for the climate, personal toiletries, regular medications, previous medical reports, yoga attire, swimwear, sunscreen, insect repellent, and an open mind for healing. VEDA5 provides treatment gowns, towels, and yoga mats.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                <span className="text-lg font-semibold text-primary text-left">Is vegetarian food mandatory?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Yes, VEDA5 serves exclusively vegetarian Satvik organic cuisine as recommended in Ayurvedic principles for optimal healing and detoxification. The delicious meals are nutritious, varied, prepared with fresh ingredients, and customized to individual dosha constitutions. No alcohol is served or permitted at the retreat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq7" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                <span className="text-lg font-semibold text-primary text-left">Can family members stay with patients?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Yes, family members and companions can stay at VEDA5. Accommodation options are available for non-treatment guests who wish to accompany patients. Couples and families are welcome to experience wellness retreats together.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq8" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                <span className="text-lg font-semibold text-primary text-left">Is WiFi and mobile connectivity available?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Limited WiFi is available in designated areas for a nominal charge. However, VEDA5 encourages digital detox as an integral part of the healing process. Disconnecting from technology, emails, and social media significantly enhances treatment benefits, stress reduction, mental peace, and allows for deeper inner connection and rejuvenation.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-12 max-w-6xl mx-auto" id="contact">
          {contactData.length > 0 && (
            <Card className="mb-12 border-2 border-primary overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <CardContent className="p-5 md:p-8">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/10 pb-4">Contact Information</h2>
                <div className="grid gap-6 md:grid-cols-[1fr_1.35fr] lg:gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Address</h4>
                        <div className="flex flex-col space-y-0.5 text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                          {contactData[currentContactIdx].address.map((l, i) => (
                            <span key={i}>{l}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {contactData[currentContactIdx].distances.length > 0 && (
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-primary mb-1">Distance from Major Locations</h4>
                          <ul className="space-y-2 text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                            {contactData[currentContactIdx].distances.map((d, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="md:-mt-16 self-start relative group/map">
                    <div className="rounded-2xl bg-white/70 p-1 shadow-lg border-2 border-primary/20 overflow-hidden">
                      <div className="rounded-xl overflow-hidden relative">
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-white/95 text-primary px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-xl border-2 border-primary/20 backdrop-blur-sm flex items-center gap-2">
                            <MapPin className="h-3 w-3 md:h-4 md:w-4 fill-primary/10" />
                            {maps[currentContactIdx].city}
                          </div>
                        </div>
                        <div className="relative w-full aspect-[800/600]">
                          <iframe
                            title={`Veda5 ${maps[currentContactIdx].city} Map`}
                            src={maps[currentContactIdx].iframe}
                            className="absolute inset-0 h-full w-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Navigation Arrows */}
                    <div className="absolute inset-y-0 left-0 flex items-center -translate-x-3 md:-translate-x-5">
                      <button
                        onClick={goPrevMap}
                        className="bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-20"
                        aria-label="Previous location"
                      >
                        <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                      </button>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center translate-x-3 md:translate-x-5">
                      <button
                        onClick={goNextMap}
                        className="bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-20"
                        aria-label="Next location"
                      >
                        <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {transportText && (
                  <div className="mt-10 p-5 md:p-8 bg-primary/5 rounded-2xl border-l-4 border-l-primary shadow-inner">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <ShieldCheck className="h-7 w-7 text-primary" />
                      </div>
                      <div className="text-center md:text-left w-full">
                        <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">Transportation Services</h4>
                        <div className="max-w-none w-full">
                          <p className="text-sm md:text-base leading-relaxed text-justify md:text-left md:pr-4" style={{ color: '#7F543D' }}>
                            {transportText}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mb-12 max-w-6xl mx-auto">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#234A50' }}>
            <div className="md:hidden">
              <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                <img
                  src="/Center Images/veda5/CTA bottom.jpg"
                  alt="VEDA5 Health Center"
                  className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <h2 className="text-xl font-extrabold text-white text-center mb-8 leading-tight tracking-tight">Begin Your Holistic Healing Journey at Veda5</h2>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-white text-primary hover:bg-white/90 text-sm sm:text-base"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Book Consultation Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500 text-sm sm:text-base"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat With Us
                  </Button>
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 text-white/90 text-sm">
                  <Phone className="h-4 w-4 text-red-400" />
                  <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                </div>
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight">Begin Your Holistic Healing Journey at Veda5</h2>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="rounded-full px-8 bg-white text-primary hover:bg-white/90 text-base font-semibold"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Book Consultation Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500 text-base font-semibold"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat With Us
                  </Button>
                </div>
                <div className="mt-8 flex items-center gap-3 text-white/90">
                  <Phone className="h-5 w-5 text-red-400" />
                  <a href="tel:+918028432737" className="underline hover:text-white font-semibold text-lg">Call us: +91 80 2843 2737</a>
                </div>
              </div>
              <div>
                <img
                  src="/Center Images/veda5/CTA bottom.jpg"
                  alt="VEDA5 Health Center"
                  className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Mobile BROWSE Action (Bottom Left) - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && !isJumpModalOpen && (
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Search size={18} className="-ml-1" />
          <span>BROWSE</span>
        </button>
      )}

      {/* Floating Quote Action (Bottom Right) */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && !isJumpModalOpen && (
        <button
          onClick={() => setQuoteModalOpen(true)}
          className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Phone size={18} className="-ml-1" />
          <span className="hidden md:inline">GET FREE QUOTE</span>
          <span className="md:hidden">QUOTE</span>
        </button>
      )}

      {/* Desktop Vertical JUMP Button - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && !isJumpModalOpen && (
        <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
          <button
            onClick={() => setIsJumpModalOpen(true)}
            className="bg-[#2F5B63] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
          >
            <span className="drop-shadow-sm">B</span>
            <span className="drop-shadow-sm">R</span>
            <Search size={16} strokeWidth={3.5} className="drop-shadow-sm" />
            <span className="drop-shadow-sm">W</span>
            <span className="drop-shadow-sm">S</span>
            <span className="drop-shadow-sm">E</span>
          </button>
        </div>
      )}

      {/* JUMP Modal / Drawer */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />

        <div
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="p-4 pb-4 bg-[#2F5B63] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="flex justify-between items-start gap-3 mb-3 relative z-10">
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[24px] md:text-[26px] font-extrabold leading-tight tracking-tight text-white break-words">
                  Sections of Veda5
                </h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50 flex-shrink-0"
                title="Close Menu"
              >
                <X className="h-6 w-6 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">
                "Directly navigate to any section on this page."
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2.5 custom-scrollbar">
            {jumpSections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => jumpToSection(section.id)}
                className="w-full group relative bg-white hover:bg-[#2F5B63] transition-all duration-300 p-3 rounded-xl border-2 border-primary/20 hover:border-primary flex items-center justify-between shadow-md hover:shadow-xl"
              >
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-primary/5 group-hover:bg-white/10 flex items-center justify-center transition-all duration-200">
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">
                    {section.title}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                  <ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                </div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/5 bg-white rounded-r-full transition-all duration-200" />
              </button>
            ))}
          </div>

          <div className="p-4 text-center border-t border-primary/5 bg-[#F9F8F4]">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-primary/20" />
              <div className="w-2 h-2 rounded-full border border-primary/30" />
              <div className="w-8 h-[1px] bg-primary/20" />
            </div>
            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em] select-none">
              Holistic Healing Retreat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veda5Center;
