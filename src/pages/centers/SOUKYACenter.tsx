import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin, Phone, Mail, Globe, Star, Calendar, ChevronLeft, ChevronRight,
  Award, Users, Heart, Leaf, Sparkles, Hospital, UserCheck, Utensils, ShieldCheck,
  ClipboardList, Stethoscope, Pill, Activity, Home, FileSearch, Images, Search,
  Building2, Droplet, TreePine, TestTube2, MessageCircleHeart, HeartPulse, Brain, Video, TrendingUp, MessageCircle, Compass, ChevronDown, X
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MarkdownContent from "@/components/MarkdownContent";

interface CardData {
  title: string;
  description: string;
  bullets: string[];
}

interface SectionData {
  title: string;
  description: string;
  cards: CardData[];
}

const parseCardSection = (text: string): SectionData => {
  const lines = text.split('\n');
  let title = '';
  let description = '';
  const cards: CardData[] = [];

  let currentCard: CardData | null = null;
  let isHeader = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith('### ')) {
      title = line.replace('### ', '').trim();
      continue;
    }

    if (line.startsWith('**') && line.endsWith('**')) {
      isHeader = false;
      if (currentCard) {
        cards.push(currentCard);
      }
      currentCard = {
        title: line.replace(/\*\*/g, '').trim(),
        description: '',
        bullets: []
      };
      continue;
    }

    if (line.startsWith('* ')) {
      if (currentCard) {
        currentCard.bullets.push(line.replace('* ', '').trim());
      }
      continue;
    }

    // Description text
    if (isHeader) {
      description += (description ? ' ' : '') + line;
    } else if (currentCard) {
      if (currentCard.bullets.length === 0) { // Only add to description if no bullets yet
        currentCard.description += (currentCard.description ? ' ' : '') + line;
      }
    }
  }

  if (currentCard) {
    cards.push(currentCard);
  }

  return { title, description, cards };
};

const iconForTitle = (t: string) => {
  const s = t.toLowerCase();

  // Integrative / Synergy / World's First
  if (s.includes("integrative") || s.includes("approach") || s.includes("synergy") || s.includes("first"))
    return <Hospital className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  // Pioneers / Led by / Founders / Doctors / Expert
  if (s.includes("pioneers") || s.includes("renowned") || s.includes("founder") || s.includes("expert") || s.includes("doctors"))
    return <UserCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  // Accreditation / NABH / Clinical
  if (s.includes("nabh") || s.includes("accredited") || s.includes("clinical") || s.includes("standard"))
    return <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  // Royalty / Luminaries / Trusted / Global
  if (s.includes("royalty") || s.includes("luminaries") || s.includes("trusted") || s.includes("global") || s.includes("recognition"))
    return <Star className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  // 30-Acre / Organic / Farm / Haven / Nature / Sustainable
  if (s.includes("acre") || s.includes("organic") || s.includes("farm") || s.includes("nature") || s.includes("sustainable") || s.includes("environment"))
    return <TreePine className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  // Medicines / Uniquely / Fresh / Pharmacy / Custom
  if (s.includes("medicine") || s.includes("unique") || s.includes("pharmacy") || s.includes("remedies") || s.includes("custom"))
    return <Pill className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  // Rare / Complex / Conditions / Hope
  if (s.includes("rare") || s.includes("complex") || s.includes("conditions") || s.includes("hope") || s.includes("treatment"))
    return <HeartPulse className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  // Globally Recognized / Awarded / Travel
  if (s.includes("recognized") || s.includes("awarded") || s.includes("travel") || s.includes("prestigious"))
    return <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  // Lifestyle / Transformation / Holistic / Tools
  if (s.includes("lifestyle") || s.includes("transformation") || s.includes("holistic") || s.includes("tools"))
    return <Sparkles className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
};

const getFacilityIcon = (t: string) => {
  const s = t.toLowerCase();

  // Accommodations
  if (s.includes("accommodation") || s.includes("room") || s.includes("suite") || s.includes("stay") || s.includes("private"))
    return <Home className="h-7 w-7 text-white" />;

  // Architecture & Design
  if (s.includes("architecture") || s.includes("design") || s.includes("building"))
    return <Building2 className="h-7 w-7 text-white" />;

  // Farm & Agriculture
  if (s.includes("farm") || s.includes("organic") || s.includes("garden") || s.includes("acre"))
    return <TreePine className="h-7 w-7 text-white" />;

  // Infrastructure / Therapy / Pharmacy
  if (s.includes("infrastructure") || s.includes("treatment") || s.includes("therapy") || s.includes("pharmacy"))
    return <Stethoscope className="h-7 w-7 text-white" />;

  // Yoga & Meditation
  if (s.includes("yoga") || s.includes("meditation") || s.includes("hall") || s.includes("mindful"))
    return <Sparkles className="h-7 w-7 text-white" />;

  // Dining & Food
  if (s.includes("dining") || s.includes("cuisine") || s.includes("food") || s.includes("meal") || s.includes("table"))
    return <Utensils className="h-7 w-7 text-white" />;

  // Recreation / Pool / Wellness
  if (s.includes("recreation") || s.includes("pool") || s.includes("swimming") || s.includes("activity")) {
    if (s.includes("pool") || s.includes("swimming") || s.includes("water")) return <Droplet className="h-7 w-7 text-white" />;
    return <Activity className="h-7 w-7 text-white" />;
  }

  // Safety & Clinical
  if (s.includes("safety") || s.includes("nabh") || s.includes("standard") || s.includes("medical"))
    return <ShieldCheck className="h-7 w-7 text-white" />;

  // Guest Services / Transfers / Housekeeping
  if (s.includes("services") || s.includes("housekeeping") || s.includes("laundry") || s.includes("guest") || s.includes("transfer"))
    return <Users className="h-7 w-7 text-white" />;

  return <Heart className="h-7 w-7 text-white" />;
};

export default function SOUKYACenter() {
  const [mainContent, setMainContent] = useState("");
  const [facilitiesData, setFacilitiesData] = useState<SectionData | null>(null);
  const [whyChooseData, setWhyChooseData] = useState<SectionData | null>(null);
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [transportText, setTransportText] = useState("");
  const [content, setContent] = useState(""); // Keeping for compatibility if needed, or remove later
  const [testimonials, setTestimonials] = useState<{ id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[]>([]);
  const [selectedMedicalProgram, setSelectedMedicalProgram] = useState<any>(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentReview, setCurrentReview] = useState(0);
  const isReviewAutoPlaying = true;
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [showTopVideoGallery, setShowTopVideoGallery] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const [videoTestimonials, setVideoTestimonials] = useState<{ name: string; location: string; feedback: string }[]>([]);
  const [isFeedbackExpanded, setIsFeedbackExpanded] = useState(false);
  const galleryVideoRef = useRef<HTMLVideoElement>(null);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  // Testimonials Section Intersection Observer
  useEffect(() => {
    const sectionElement = testimonialSectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTestimonialsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    observer.observe(sectionElement);

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  // Video Gallery Intersection Observer for Autoplay/Pause
  useEffect(() => {
    const videoElement = galleryVideoRef.current;
    if (!videoElement) return;

    // Set volume to 50%
    videoElement.volume = 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Browsers often block autoplay with sound. We attempt to play unmuted first.
            videoElement.play().catch(error => {
              console.log("Autoplay with sound prevented:", error);
              // Fallback: Mute and play if unmuted play is blocked
              videoElement.muted = true;
              videoElement.play();
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 } // 50% visibility
    );

    observer.observe(videoElement);

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [selectedVideo]);

  // Body Scroll Lock for Modals/Drawers
  useEffect(() => {
    if (isJumpModalOpen || selectedMedicalProgram) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isJumpModalOpen, selectedMedicalProgram]);

  // Jump Sections Data
  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose SOUKYA" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "awards", title: "Awards & Media" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "F&Q" },
    { id: "contact", title: "Contact Information" }
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // height of any floating header
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 300);
  };
  const [showAwards, setShowAwards] = useState(true);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMediaAutoPlaying, setIsMediaAutoPlaying] = useState(true);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [currentAward, setCurrentAward] = useState(0);
  const [isAwardAutoPlaying, setIsAwardAutoPlaying] = useState(true);

  // Facilities images
  const facilityImages = [
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/19%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/2%20Soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/3%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/4%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/5%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/6%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/7%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/8%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/9%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/20%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/21%20soukkya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/22%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Facilities/23%20Soukya.jpg"
  ];

  // Media items with matching images and PDFs
  const mediaItems = [
    {
      image: "/Center Images/SOUKYA/Media/telegraph-luxury-media01.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/telegraph-luxury-media01.pdf",
      title: "Telegraph Luxury"
    },
    {
      image: "/Center Images/SOUKYA/Media/SOUKYA_Good_Housekeeping02.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/SOUKYA_Good_Housekeeping02.pdf",
      title: "Good Housekeeping"
    },
    {
      image: "/Center Images/SOUKYA/Media/country_and_town_house03.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/country_and_town_house03.pdf",
      title: "Country & Town House"
    },
    {
      image: "/Center Images/SOUKYA/Media/soukya_Forbes04.jpg",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/soukya_Forbes04.pdf",
      title: "Forbes"
    },
    {
      image: "/Center Images/SOUKYA/Media/lifestyle-asia-apr-05.jpg",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/lifestyle-asia-apr-05.pdf",
      title: "Lifestyle Asia"
    },
    {
      image: "/Center Images/SOUKYA/Media/soukya_inside_outside_06.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/soukya_inside_outside_06.pdf",
      title: "Inside Outside"
    },
    {
      image: "/Center Images/SOUKYA/Media/SOUKYA_Outlook_Life_and_Style_07.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/SOUKYA_Outlook_Life_and_Style_07.pdf",
      title: "Outlook Life & Style"
    },
    {
      image: "/Center Images/SOUKYA/Media/SOUKYA_Match_Du_Monde_08.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/SOUKYA_Match_Du_Monde_08.pdf",
      title: "Match Du Monde"
    },
    {
      image: "/Center Images/SOUKYA/Media/SOUKYA_India_Today_09.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/SOUKYA_India_Today_09.pdf",
      title: "India Today"
    }
  ];

  // SOUKYA gallery images (1–30)
  const images = [
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/1%20Soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/2%20Soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/3%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/4%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/5%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/6%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/7%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/8%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/9%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/10%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/11%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/12%20soukya.jpeg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/13%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/14%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/15%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/16%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/17%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/18%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/19%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/20%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/21%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/22%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/23%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/24%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/25%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/26%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/27%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/28%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/29%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/30%20soukya.jpg",
  ];

  const awards = [
    {
      title: "Condé Nast Johansens – Recommended Retreat",
      description: "Officially recognized for exceptional hospitality and world-class wellness services by one of the world's most trusted authorities.",
      image: "/Center Images/SOUKYA/Awards/Award 1.jpg"
    },
    {
      title: "Condé Nast Traveller – Award Winner",
      description: "Winner of the prestigious global travel publication award for celebrating excellence in luxury, wellness, and hospitality.",
      image: "/Center Images/SOUKYA/Awards/Award 2.jpg"
    },
    {
      title: "NABH Accredited Center",
      description: "India's first NABH-accredited AYUSH hospital, recognized for maintaining the highest standards in healthcare quality and patient safety.",
      image: "/Center Images/SOUKYA/Awards/Award 3.png"
    }
  ];

  const [maxAwardIndex, setMaxAwardIndex] = useState(awards.length - 1);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newMax = isMobile ? awards.length - 1 : Math.max(0, awards.length - 3);
      setMaxAwardIndex(newMax);
      setCurrentAward(prev => prev > newMax ? 0 : prev);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [awards.length]);

  useEffect(() => {
    if (!isAwardAutoPlaying || !showAwards) return;
    const id = setInterval(() => {
      setCurrentAward((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [isAwardAutoPlaying, maxAwardIndex, showAwards]);

  const goToPreviousAward = () => {
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };

  const goToNextAward = () => {
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };

  // Load content
  useEffect(() => {
    // Load Main Content
    fetch("/content/Top Centers/Soukya Center/Main Content.txt")
      .then((res) => res.text())
      .then((text) => setMainContent(text))
      .catch((err) => console.error("Error loading Main Content:", err));

    fetch("/content/Top Centers/Soukya Center/Wellness Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inPrograms = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inPrograms = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            inPrograms = true;
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
            continue;
          }
          if (!inPrograms) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        }
        if (current) items.push(current);
        setWellnessIntro(intro);
        setWellnessPrograms(items);
      })
      .catch((err) => console.error("Error loading wellness programs:", err));

    fetch("/content/Top Centers/Soukya Center/Medical Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inPrograms = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inPrograms = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            inPrograms = true;
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
            continue;
          }
          if (!inPrograms) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        }
        if (current) items.push(current);
        setMedicalIntro(intro);
        setMedicalPrograms(items);
      })
      .catch((err) => console.error("Error loading medical programs:", err));

    // Load Facilities
    fetch("/content/Top Centers/Soukya Center/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => setFacilitiesData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Facilities:", err));

    // Load Why Choose
    fetch("/content/Top Centers/Soukya Center/Why Choose SOUKYA.txt")
      .then((res) => res.text())
      .then((text) => setWhyChooseData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Why Choose:", err));

    // Load Contact Information
    fetch("/content/Top Centers/Soukya Center/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let section: "none" | "address" | "distances" | "transport" = "none";
        const addr: string[] = [];
        const dists: string[] = [];
        let transport = "";
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) { section = "none"; continue; }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("address")) { section = "address"; continue; }
            if (t.includes("distance")) { section = "distances"; continue; }
            if (t.includes("transportation")) { section = "transport"; continue; }
          }
          if (section === "address") {
            // Split by <br/> if present
            if (line.includes("<br/>")) {
              addr.push(...line.split("<br/>").map(p => p.trim()));
            } else {
              addr.push(line);
            }
            continue;
          }
          if (section === "distances") {
            if (line.startsWith("*")) dists.push(line.replace(/^\*+\s*/, "").replace(/<br\/>/g, " "));
            continue;
          }
          if (section === "transport") {
            transport = transport ? `${transport} ${line}` : line;
            continue;
          }
        }
        setContactAddress(addr);
        setContactDistances(dists);
        setTransportText(transport);
      })
      .catch((err) => console.error("Error loading Contact Info:", err));

    // Load Video Testimonials Data
    fetch("/content/Testimonies/Soukya/testimonies.txt")
      .then((res) => res.text())
      .then((text) => {
        // Splitting by number followed by dot and newline (e.g., "2.\n")
        const blocks = text.split(/\n\s*\d+\.\s*\n/).filter(b => b.trim());
        const parsed = blocks.map((block, idx) => {
          const lines = block.split('\n').map(l => l.trim()).filter(l => l);
          let name = "Not mentioned";
          let location = "Not mentioned";
          let feedback = "";

          lines.forEach(line => {
            const lower = line.toLowerCase();
            if (lower.startsWith('name:')) {
              name = line.split(':')[1].trim();
            } else if (lower.startsWith('location:')) {
              location = line.split(':')[1].trim();
            } else if (lower.includes('short description') || lower.startsWith('center:')) {
              // skip label lines
            } else if (line.includes('|')) {
              const parts = line.split('|');
              name = parts[0].trim();
              if (name === "atie Kidder") name = "Katie Kidder"; // Fix typo in file
              location = parts[1].trim();
            } else {
              feedback += (feedback ? " " : "") + line;
            }
          });

          return {
            name: name === "Not mentioned" ? "" : name,
            location: location === "Not mentioned" ? "" : location,
            feedback: feedback.trim()
          };
        });
        setVideoTestimonials(parsed);
      })
      .catch((err) => console.error("Error loading Video Testimonials:", err));

    // Load Testimonials
    fetch("/content/Top Centers/Soukya Center/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[] = [];
        let current: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean } | null = null;
        let idCounter = 1;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (!line || line.startsWith("###")) continue;

          // Match Name - Location: **Name - Location**
          const nameMatch = line.match(/^\*\*(.+?)\*\*$/);
          if (nameMatch && !line.includes("Rating:")) {
            if (current) items.push(current);
            const fullStr = nameMatch[1];
            const parts = fullStr.split(" - ");
            const name = parts[0] || "";
            const location = parts[1] || "";
            current = { id: idCounter++, name, location, condition: "", title: "", review: "", rating: 5, verified: true };
            continue;
          }

          // Match Title: *"Title"*
          if (current && line.startsWith('*"') && line.endsWith('"*')) {
            current.title = line.slice(2, -2);
            continue;
          }

          // Match Rating: **Rating: ⭐⭐⭐⭐⭐ (5/5)**
          if (current && line.includes("Rating:")) {
            const ratingMatch = line.match(/\((\d+)\/5\)/);
            if (ratingMatch) {
              current.rating = parseInt(ratingMatch[1]);
            }
            continue;
          }

          // Everything else is review content
          if (current && line && !line.startsWith("**") && !line.startsWith("*")) {
            current.review = current.review ? current.review + " " + line : line;
            // Extract condition if possible from title or first sentence
            if (!current.condition && current.title) {
              const knownConditions = ["Arthritis", "Burnout", "Back Pain", "PCOD", "Addiction", "Diabetes", "Insomnia", "Psoriasis", "Cancer"];
              for (const c of knownConditions) {
                if (current.title.includes(c)) {
                  current.condition = c;
                  break;
                }
              }
            }
          }
        }
        if (current) items.push(current);
        setTestimonials(items);
      })
      .catch((err) => console.error("Error loading reviews:", err));

    // Keep original fetch for now or just set content to empty to avoid errors in renderContent if called
    // fetch("/content/Top Centers/SOUKYA center.txt") ...
  }, []);

  const wellnessIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("detox") || s.includes("purification") || s.includes("panchakarma") || s.includes("shudha")) {
      return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("stress") || s.includes("mental") || s.includes("prakrithi")) {
      return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("anti-aging") || s.includes("rejuvenation") || s.includes("beauty") || s.includes("shakthi")) {
      return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("weight") || s.includes("shareera")) {
      return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("immunity")) {
      return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("taste") || s.includes("introduction")) {
      return <Leaf className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("addict") || s.includes("addiction")) return <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("cancer")) return <Hospital className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("metabolic") || s.includes("lifestyle") || s.includes("diabetes") || s.includes("hypertension") || s.includes("cholesterol")) {
      return <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("musculoskeletal") || s.includes("neurological") || s.includes("arthritis") || s.includes("stroke")) {
      return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("mental") || s.includes("emotional")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("respiratory") || s.includes("allergic") || s.includes("allergy")) {
      return <TreePine className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("skin") || s.includes("dermat")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("reproductive") || s.includes("gynec") || s.includes("gynaec")) {
      return <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("pediatric") || s.includes("development")) {
      return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxImage((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  // Keyboard navigation for full gallery
  useEffect(() => {
    if (!showFullGallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowFullGallery(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showFullGallery]);

  // Navigation functions
  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const selectImage = (index: number) => {
    setSelectedImage(index);
  };

  // Select 6 specific images for thumbnail grid
  const thumbnailImages = [
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/1%20Soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/2%20Soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/12%20soukya.jpeg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/7%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/29%20soukya.jpg",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/24%20soukya.jpg",
  ];

  // Videos from SOUKYA folder
  const videos = [
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Videos/Video%20Gallery/Video-1.mp4",
    "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Videos/Video%20Gallery/Video-2.mp4",
  ];

  const testimonialVideos = [
    "https://www.youtube.com/embed/cfZxiAr13fQ",
    "https://www.youtube.com/embed/7b0Dlw-EoFo",
    "https://www.youtube.com/embed/2glXkilT4e8",
    "https://www.youtube.com/embed/b3yRWvI6Ibs",
    "https://www.youtube.com/embed/y3U8vrCxWhU",
    "https://www.youtube.com/embed/b81r1CT5E04",
    "https://www.youtube.com/embed/rSBl6ujCWN4"
  ];

  // Media carousel navigation
  const handleNextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  // Auto-play for media carousel
  useEffect(() => {
    if (!isMediaAutoPlaying || showAwards) return;

    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMediaAutoPlaying, showAwards, mediaItems.length]);

  // Auto-rotate facilities images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [facilityImages.length]);

  // Review carousel auto-rotation
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPreviousReview = () => {
    if (testimonials.length === 0) return;
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextReview = () => {
    if (testimonials.length === 0) return;
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const selectReview = (index: number) => {
    setCurrentReview(index);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
              }`}
          />
        ))}
      </div>
    );
  };

  const processInlineFormatting = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const regex = /\*\*(.*?)\*\*/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <strong key={match.index} className="font-semibold text-primary">
          {match[1]}
        </strong>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  const renderContent = () => {
    const lines = mainContent.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: "bullet" | "number" | null = null;
    let emptyLineCount = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === "bullet") {
          elements.push(
            <ul
              key={`list-${elements.length}`}
              className="list-disc list-inside mb-6 space-y-2"
              style={{ color: "#7F543D" }}
            >
              {currentList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {processInlineFormatting(item)}
                </li>
              ))}
            </ul>
          );
        } else if (listType === "number") {
          elements.push(
            <ol
              key={`list-${elements.length}`}
              className="list-decimal list-inside mb-6 space-y-2"
              style={{ color: "#7F543D" }}
            >
              {currentList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {processInlineFormatting(item)}
                </li>
              ))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Check for section separator (---)
      if (trimmedLine === '---') {
        flushList();
        elements.push(
          <div key={`separator-${index}`} className="h-8"></div>
        );
        return;
      }

      if (!trimmedLine) {
        flushList();
        emptyLineCount++;
        // Add spacing div for multiple empty lines (sections separator)
        if (emptyLineCount === 2 && elements.length > 0) {
          elements.push(
            <div key={`space-${index}`} className="h-4"></div>
          );
        }
        return;
      }

      // Reset empty line counter when we hit content
      emptyLineCount = 0;

      // Rule 1: Main title (single #)
      if (/^#\s+(.+)/.test(trimmedLine) && !trimmedLine.startsWith("##")) {
        flushList();
        const titleText = trimmedLine.replace(/^#\s+/, "");
        elements.push(
          <h1
            key={`h1-${index}`}
            className="text-2xl md:text-4xl font-bold mb-6 text-primary"
          >
            {processInlineFormatting(titleText)}
          </h1>
        );
        return;
      }

      // Rule 2: Section headings (##)
      if (/^##\s+(.+)/.test(trimmedLine)) {
        flushList();
        const headingText = trimmedLine.replace(/^##\s+/, "");
        elements.push(
          <h2
            key={`h2-${index}`}
            className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-primary"
          >
            {processInlineFormatting(headingText)}
          </h2>
        );
        return;
      }

      // Rule 3: Subsection headings (###)
      if (/^###\s+(.+)/.test(trimmedLine)) {
        flushList();
        const subheadingText = trimmedLine.replace(/^###\s+/, "");
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-primary"
          >
            {processInlineFormatting(subheadingText)}
          </h3>
        );
        return;
      }

      // Rule 4: Bullet points (- or *)
      if (/^[-*]\s+(.+)/.test(trimmedLine)) {
        const itemText = trimmedLine.replace(/^[-*]\s+/, "");
        if (listType !== "bullet") {
          flushList();
          listType = "bullet";
        }
        currentList.push(itemText);
        return;
      }

      // Rule 5: Numbered lists
      if (/^\d+\.\s+(.+)/.test(trimmedLine)) {
        const itemText = trimmedLine.replace(/^\d+\.\s+/, "");
        if (listType !== "number") {
          flushList();
          listType = "number";
        }
        currentList.push(itemText);
        return;
      }

      // Rule 6: Full-line bold text (sub-headings) - NO spacing below
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList();
        const content = trimmedLine.replace(/^\*\*/, '').replace(/\*\*$/, '');
        elements.push(
          <p
            key={`bold-${index}`}
            className="mb-0 leading-relaxed"
            style={{ color: '#7F543D' }}
          >
            <strong className="font-semibold text-primary">{content}</strong>
          </p>
        );
        return;
      }

      // Rule 7: Regular paragraphs
      flushList();
      elements.push(
        <p
          key={`p-${index}`}
          className="mb-6 leading-relaxed"
          style={{ color: "#7F543D" }}
        >
          {processInlineFormatting(trimmedLine)}
        </p>
      );
    });

    flushList();
    return elements;
  };
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  SOUKYA
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  Dr. Mathai's International Holistic Health Centre
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(5000+ reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">

          {/* Photo/Video Gallery Section */}
          <div className="mb-12" id="gallery">
            {/* Gallery Header with Toggle */}
            <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                <Button
                  variant={!showTopVideoGallery ? "default" : "secondary"}
                  size="lg"
                  onClick={() => setShowTopVideoGallery(false)}
                  className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${!showTopVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"
                    }`}
                >
                  Photo Gallery
                </Button>
                <Button
                  variant={showTopVideoGallery ? "default" : "secondary"}
                  size="lg"
                  onClick={() => setShowTopVideoGallery(true)}
                  className={`flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${showTopVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"
                    }`}
                >
                  <Video className="h-4 w-4 md:h-6 md:w-6" />
                  Video Gallery
                </Button>
              </div>
            </div>

            {!showTopVideoGallery ? (
              <>
                {/* Main Carousel */}
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  <img
                    src={images[selectedImage]}
                    alt={`SOUKYA Center ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {images.length}
                  </div>

                  {/* Auto-play indicator */}
                  {isAutoPlaying && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Auto
                    </div>
                  )}
                </div>

                {/* Fixed Grid Gallery - 1 Large (16:9) + 4 Small (2×2) */}
                <div className="flex flex-col md:flex-row gap-3 mb-6">
                  {/* Large Image - Left Side - Fixed 16:9 Aspect Ratio */}
                  <div
                    className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                    onClick={() => {
                      setLightboxImage(images.indexOf(thumbnailImages[0]));
                      setLightboxOpen(true);
                    }}
                  >
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img
                        src={thumbnailImages[0]}
                        alt="SOUKYA 1"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Small Images - Right Side - Fixed 2×2 Grid */}
                  <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                    {thumbnailImages.slice(1, 5).map((img, idx) => {
                      const actualIndex = images.indexOf(img);
                      const isLastImage = idx === 3; // Last small image (bottom-right)

                      return (
                        <div
                          key={idx}
                          className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                          onClick={() => {
                            setLightboxImage(actualIndex);
                            setLightboxOpen(true);
                          }}
                        >
                          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                            <img
                              src={img}
                              alt={`SOUKYA ${actualIndex + 1}`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

                            {/* Show Gallery Button - Floating on Bottom-Right Image */}
                            {isLastImage && (
                              <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/40">
                                <Button
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setShowFullGallery(true);
                                  }}
                                  className="bg-white text-primary hover:bg-white/95 hover:scale-105 font-semibold text-xs md:text-sm px-3 py-2 md:px-4 md:py-3 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform"
                                >
                                  <Images className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
                                  <span className="hidden sm:inline">Show Full Gallery</span>
                                  <span className="sm:hidden">Gallery</span>
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video mb-8">
                  <video
                    key={selectedVideo}
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={videos[selectedVideo]} type="video/mp4" />
                  </video>
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    Video {selectedVideo + 1} / {videos.length}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {videos.map((video, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedVideo(idx)}
                      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-2 ring-primary" : ""
                        }`}
                    >
                      <video muted className="w-full h-full object-cover">
                        <source src={video} type="video/mp4" />
                      </video>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-strong:text-primary">
              <MarkdownContent
                contentPath="/content/Top Centers/Soukya Center/Main Content.txt"
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

          {/* Wellness & Rejuvenation Programs */}
          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }} id="wellness">
            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">5000+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Happy Patients</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.5/5</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Average Rating</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">98%</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Success Rate</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 border-green-700 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">
                Wellness Programs
              </h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {wellnessIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {wellnessPrograms.map((p, idx) => (
                <AccordionItem
                  key={idx}
                  value={`wellness-${idx}`}
                  className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-green-700">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-700">
                        {wellnessIconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                      {p.description}
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Medical Treatment Programs */}
          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }} id="medical">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-700 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">
                Medical Programs
              </h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {medicalIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalPrograms.map((p, idx) => (
                <AccordionItem
                  key={idx}
                  value={`medical-${idx}`}
                  className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-blue-700">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-700">
                        {medicalIconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                      {p.description}
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-blue-600 mt-1">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>


          {/* Video Gallery Section */}
          <div className="mb-12" id="videos">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Video Gallery of Soukya
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                Experience the serene atmosphere and holistic healing journey at SOUKYA through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    <video
                      ref={galleryVideoRef}
                      key={videos[selectedVideo]}
                      src={videos[selectedVideo]}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Arrows - Desktop Only */}
              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                <button
                  onClick={() => setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={() => setSelectedVideo((prev) => (prev + 1) % videos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                  aria-label="Next video"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              {/* Navigation Buttons - Mobile Only */}
              <div className="flex md:hidden items-center justify-between mt-4 px-6">
                <Button
                  onClick={() => setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setSelectedVideo((prev) => (prev + 1) % videos.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                >
                  Next
                </Button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVideo(index)}
                    className={`transition-all ${index === selectedVideo
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                      } rounded-full`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12" id="why-choose">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">
                {whyChooseData?.title || "Why Choose SOUKYA"}
              </h2>
              {whyChooseData?.description && (
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                  {whyChooseData.description}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(whyChooseData?.cards || []).map((it, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary"
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          {iconForTitle(it.title)}
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-primary leading-tight flex-1">{it.title}</h3>
                      </div>
                      {it.description && (
                        <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                          {it.description}
                        </p>
                      )}
                      {it.bullets && it.bullets.length > 0 && (
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

          {/* Testimonials of SOUKYA Center - Video Section */}
          <div className="mb-12" id="testimonial-videos" ref={testimonialSectionRef}>
            <div className="text-center mb-6 lg:mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-2">
                Testimonials of SOUKYA Center
              </h2>
              <p className="text-sm md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                Watch inspiring stories of recovery and wellness from our global family of patients.
              </p>
            </div>

            <div className="max-w-6xl mx-auto relative px-3 md:px-0">
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-stretch">
                {/* Left Side: Video Player */}
                <div className="w-full lg:w-[60%] relative">
                  <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-2xl md:rounded-3xl h-full">
                    <CardContent className="p-0 h-full flex items-center bg-black">
                      <div className="aspect-video w-full relative">
                        <iframe
                          key={testimonialVideos[selectedTestimonialVideo]}
                          src={`${testimonialVideos[selectedTestimonialVideo]}?autoplay=${isTestimonialsInView ? "1" : "0"}&mute=0&rel=0`}
                          title="SOUKYA Testimonial Video"
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Navigation Arrows - Desktop Only (Overlay on Video) */}
                  <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 -mx-6 pointer-events-none">
                    <button
                      onClick={() => {
                        setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length);
                        setIsFeedbackExpanded(false);
                      }}
                      className="bg-white/90 hover:bg-primary hover:text-white text-primary p-3 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length);
                        setIsFeedbackExpanded(false);
                      }}
                      className="bg-white/90 hover:bg-primary hover:text-white text-primary p-3 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Dynamic Data Card */}
                <div className="w-full lg:w-[40%]">
                  {videoTestimonials[selectedTestimonialVideo] && (
                    <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-xl border-2 border-primary/10 h-full flex flex-col justify-center relative overflow-hidden group">
                      {/* Decorative Background */}
                      <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Header Info: Name // Location */}
                        <div className="mb-4 md:mb-6 space-y-1 text-primary">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm md:text-lg font-bold">
                            {videoTestimonials[selectedTestimonialVideo].name && (
                              <span className="text-primary font-black uppercase tracking-tight">
                                Name: {videoTestimonials[selectedTestimonialVideo].name}
                              </span>
                            )}
                            {videoTestimonials[selectedTestimonialVideo].name && videoTestimonials[selectedTestimonialVideo].location && (
                              <span className="text-primary/30 mx-1 font-normal">//</span>
                            )}
                            {videoTestimonials[selectedTestimonialVideo].location && (
                              <span className="text-accent italic font-black">
                                Location: {videoTestimonials[selectedTestimonialVideo].location}
                              </span>
                            )}
                          </div>
                          <div className="h-1 w-12 bg-primary/20 rounded-full mt-2" />
                        </div>

                        {/* Feedback Section */}
                        <div className="flex-1">
                          <div className="flex items-start gap-2">
                            <span className="text-lg md:text-xl font-black text-primary/40 mt-1 flex-shrink-0">Feedback ::</span>
                            <div className="flex-1">
                              <p className={`text-sm md:text-lg leading-relaxed text-primary/70 italic ${!isFeedbackExpanded ? "line-clamp-3 lg:line-clamp-6" : ""}`}>
                                "{videoTestimonials[selectedTestimonialVideo].feedback}"
                              </p>

                              {/* Read More Toggle */}
                              {videoTestimonials[selectedTestimonialVideo].feedback.length > 150 && (
                                <button
                                  onClick={() => setIsFeedbackExpanded(!isFeedbackExpanded)}
                                  className="mt-2 text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/btn"
                                >
                                  {isFeedbackExpanded ? "Show Less" : "Read More"}
                                  <ChevronDown className={`h-4 w-4 transition-transform ${isFeedbackExpanded ? "rotate-180" : "group-hover/btn:translate-y-0.5"}`} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Mobile Navigation inside Data Card (Small indicators) */}
                        <div className="lg:hidden mt-4 flex justify-center gap-1.5">
                          {testimonialVideos.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSelectedTestimonialVideo(index);
                                setIsFeedbackExpanded(false);
                              }}
                              className={`transition-all ${index === selectedTestimonialVideo
                                ? "w-5 h-1.5 bg-primary"
                                : "w-1.5 h-1.5 bg-gray-300"
                                } rounded-full`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Buttons - Mobile Only (Below the container) */}
              <div className="flex lg:hidden items-center justify-between mt-4 px-8">
                <Button
                  onClick={() => {
                    setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length);
                    setIsFeedbackExpanded(false);
                  }}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow text-xs px-6 h-10 border-2 border-primary/20"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => {
                    setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length);
                    setIsFeedbackExpanded(false);
                  }}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow text-xs px-6 h-10 border-2 border-primary/20"
                >
                  Next
                </Button>
              </div>

              {/* Desktop Indicators (Below everything) */}
              <div className="hidden lg:flex justify-center gap-2 mt-8">
                {testimonialVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedTestimonialVideo(index);
                      setIsFeedbackExpanded(false);
                    }}
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

          {/* Treatment Process & Patient Journey - Timeline */}
          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Treatment Process & Patient Journey
              </h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                Your personalized healing journey at SOUKYA, step by step
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="max-w-4xl mx-auto">

              {/* Step 1: Initial Consultation */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    1
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      1
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Initial Consultation & Medical Evaluation
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Day 1
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Upon arrival, every patient undergoes a comprehensive medical evaluation by doctors from each system of medicine. This includes detailed health history, current complaints, lifestyle assessment, and diagnostic tests if required.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2: Personalized Treatment Plan */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    2
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      2
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Personalized Treatment Plan
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Day 1-2
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Based on the joint medical review, a customized treatment protocol is designed specifically for you. The plan includes therapies, medicines, dietary guidelines, and lifestyle recommendations tailored to your condition and health goals.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3: Daily Treatment */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    3
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      3
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Daily Treatment & Monitoring
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Ongoing
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Patients receive daily treatments according to their schedule, which may include Ayurvedic therapies, homeopathic medicines, yoga sessions, and naturopathic treatments. Progress is monitored daily by the medical team with adjustments as needed.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4: Diet & Nutrition */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    4
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      4
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Diet & Nutrition Management
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Daily
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Personalized meal plans are prepared using organic ingredients from the farm. Dietary therapy plays a crucial role in the healing process and is adjusted based on individual needs and treatment progress.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 5: Lifestyle Counseling */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    5
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      5
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Lifestyle Counseling & Education
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Throughout Stay
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Patients receive guidance on lifestyle modifications, stress management techniques, yoga practices, and daily routines to continue at home for sustained health benefits and long-term wellness.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 6: Follow-up Care */}
              <div className="relative flex items-start gap-3 md:gap-6 group">
                {/* Timeline Circle - No line after last step */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    6
                  </div>
                </div>

                {/* Content Card */}
                <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                      6
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Follow-up Care
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Post-Discharge
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      After completing the residential program, patients receive detailed discharge instructions, continuation medicines, and follow-up consultations to ensure long-term health maintenance and sustained wellness.
                    </p>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src="/Center Images/SOUKYA/cta-pathway.jpg"
                    alt="SOUKYA Wellness Center"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: '#7F543D' }}>
                    Take the first step towards holistic healing. Our expert team is here to guide you through personalized treatment plans tailored to your unique needs.
                  </p>
                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-[#2F5B63] hover:bg-[#234A50] text-white"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-2 border-[#2F5B63] text-[#2F5B63]"
                      onClick={() => setQuoteModalOpen(true)}
                    >
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
                  <img
                    src="/Center Images/SOUKYA/cta-pathway.jpg"
                    alt="SOUKYA Wellness Center"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Facilities & Amenities - Category-Based Grid */}
          <div className="mb-12" id="facilities">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {facilitiesData?.title || "Facilities & Amenities"}
              </h2>
              {facilitiesData?.description && (
                <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>
                  {facilitiesData.description}
                </p>
              )}
            </div>

            {/* Facilities Images Carousel - 5 at a time */}
            <div className="max-w-7xl mx-auto relative mb-10">

              {/* Navigation Arrows */}
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

              {/* Carousel Container */}
              <div className="overflow-hidden px-10 md:px-12">
                {/* Mobile: Show 1 at a time */}
                <div className="md:hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentFacilityImage * 100}%)`
                    }}
                  >
                    {facilityImages.map((image, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div
                          className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                          onClick={() => {
                            setFacilityLightboxImage(index);
                            setFacilityLightboxOpen(true);
                          }}
                        >
                          <img
                            src={image}
                            alt={`SOUKYA Facility ${index + 1}`}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop: Show 5 at a time */}
                <div className="hidden md:block">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${Math.min(currentFacilityImage, facilityImages.length - 5) * 20}%)`
                    }}
                  >
                    {facilityImages.map((image, index) => (
                      <div
                        key={index}
                        className="w-1/5 flex-shrink-0 px-2"
                      >
                        <div
                          className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                          onClick={() => {
                            setFacilityLightboxImage(index);
                            setFacilityLightboxOpen(true);
                          }}
                        >
                          <img
                            src={image}
                            alt={`SOUKYA Facility ${index + 1}`}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {facilityImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFacilityImage(index)}
                    className={`transition-all ${index === currentFacilityImage
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                      } rounded-full`}
                    aria-label={`Go to facility image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Category Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(facilitiesData?.cards || []).map((card, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                        {getFacilityIcon(card.title)}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1">
                        {card.title}
                      </h3>
                    </div>

                    {card.description && (
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                        {card.description}
                      </p>
                    )}

                    {card.bullets && card.bullets.length > 0 && (
                      <ul className="space-y-2">
                        {card.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
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

            {/* Additional Info Banner */}
            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    All Facilities Meet International Healthcare Standards
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Every facility at SOUKYA is designed and maintained according to NABH accreditation standards,
                    ensuring the highest levels of safety, hygiene, and quality care. Our commitment to excellence
                    means you receive world-class holistic treatment in a serene, naturally therapeutic environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder & Expert Medical Team */}
          <div className="mb-10 rounded-3xl p-4 md:p-10" style={{ backgroundColor: '#EDE8D0' }} id="team">
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Founder & Team Info
              </h1>
              <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                Led by visionary expertise and supported by generations of traditional healing knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              {/* Founder Card */}
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src="/Center Images/SOUKYA/soukya founder/dr_mathai.jpg"
                          alt="Dr. Issac Mathai"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        Dr. Issac Mathai
                      </h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                        MD (Hom), MRCH (London)
                      </p>
                      <p className="text-xs md:text-sm mt-1 text-primary/70">
                        Founder & Director
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Dr. Issac Mathai is the founder and director of SOUKYA, bringing decades of experience in holistic medicine. His vision was to create a healing sanctuary that integrates multiple traditional systems of medicine under one roof.
                  </p>
                  <div className="pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Holistic Medicine</span>
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Homeopathy</span>
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Integrative Care</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Team Card */}
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src="/Center Images/SOUKYA/soukya founder/Team.jpg"
                          alt="Expert Medical Team"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        Expert Medical Team
                      </h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                        4th Generation Ayurvedic Doctors
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    SOUKYA offers authentic Ayurveda delivered by 4th generation Ayurvedic doctors trained at the best ayurvedic hospitals in the world. Our medical team consists of highly qualified and experienced doctors.
                  </p>
                  <div className="space-y-2 pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2 md:mb-3">Specialized Practitioners:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Ayurvedic Medicine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Homeopathy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Yoga Therapy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Naturopathy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>General Medicine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Counseling</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>


          {/* Patient Success Stories & Reviews */}
          <div className="mb-12" id="reviews">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Patient Stories & Reviews
              </h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                Hear from our patients about their transformational healing journeys
              </p>
            </div>

            {/* Review Carousel */}
            <div className="relative">
              <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                <CardContent className="p-4 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    {testimonials.length > 0 && (
                      <>
                        {/* Quote Icon */}
                        <div className="text-primary/20 mb-3 md:mb-4">
                          <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                          </svg>
                        </div>

                        {/* Review Content */}
                        <div className="mb-4 md:mb-6">
                          <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">
                            {testimonials[currentReview].title}
                          </h3>
                          <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                            "{testimonials[currentReview].review}"
                          </p>
                        </div>

                        {/* Reviewer Info */}
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                            {testimonials[currentReview].name.charAt(0)}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-base md:text-xl font-semibold text-primary">
                                {testimonials[currentReview].name}
                              </h4>
                              {testimonials[currentReview].verified && (
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                                  ✓ Verified
                                </span>
                              )}
                            </div>
                            <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                              {testimonials[currentReview].location} {testimonials[currentReview].condition && `• ${testimonials[currentReview].condition}`}
                            </p>
                          </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex items-center gap-2 md:gap-3">
                          {renderStars(testimonials[currentReview].rating)}
                          <span className="text-xs md:text-sm font-semibold text-primary">
                            {testimonials[currentReview].rating}.0
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-6">
                <button
                  onClick={goToPreviousReview}
                  className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-6">
                <button
                  onClick={goToNextReview}
                  className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>

              {/* Auto-play indicator */}
              {isReviewAutoPlaying && (
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Auto
                </div>
              )}
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => selectReview(idx)}
                  className={`transition-all rounded-full ${currentReview === idx
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                    }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Awards & Media Recognition */}
            <div className="mt-16 md:mt-24" id="awards">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards & Media</h2>
                <p className="text-base md:text-lg px-4 mx-auto max-w-2xl" style={{ color: '#7F543D' }}>
                  Recognition of SOUKYA's global excellence in integrated holistic healing and patient care
                </p>
              </div>

              {/* Toggle Buttons */}
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-10">
                <Button
                  onClick={() => setShowAwards(true)}
                  className={`px-4 py-2 md:px-10 md:py-7 text-sm md:text-lg font-bold transition-all rounded-full ${showAwards
                    ? "bg-primary text-white shadow-xl scale-105"
                    : "bg-white text-primary border-2 border-primary hover:bg-primary/5"
                    }`}
                >
                  <Award className="mr-2 h-4 w-4 md:h-6 md:w-6" />
                  Awards
                </Button>
                <Button
                  onClick={() => setShowAwards(false)}
                  className={`px-4 py-2 md:px-10 md:py-7 text-sm md:text-lg font-bold transition-all rounded-full ${!showAwards
                    ? "bg-primary text-white shadow-xl scale-105"
                    : "bg-white text-primary border-2 border-primary hover:bg-primary/5"
                    }`}
                >
                  <FileSearch className="mr-2 h-4 w-4 md:h-6 md:w-6" />
                  Media Recognition
                </Button>
              </div>

              {/* Awards Section */}
              {showAwards && (
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
                            <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                              <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                                <img
                                  src={award.image}
                                  alt={award.title}
                                  className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                                />
                              </div>
                              <div className="text-center">
                                <h4 className="text-lg font-bold text-primary mb-2 line-clamp-2">{award.title}</h4>
                                <p className="text-xs italic line-clamp-4" style={{ color: '#7F543D' }}>"{award.description}"</p>
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
                        style={{ transform: `translateX(-${currentAward * (100 / 3)}%)` }}
                      >
                        {awards.map((award, i) => (
                          <div key={i} className="w-1/3 flex-shrink-0 px-4">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                              <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 md:mb-6 p-4 md:p-6 flex items-center justify-center overflow-hidden">
                                <img
                                  src={award.image}
                                  alt={award.title}
                                  className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
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
                  {maxAwardIndex > 0 && (
                    <>
                      <button
                        onClick={goToPreviousAward}
                        className="absolute left-8 md:-left-4 top-[52%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                        aria-label="Previous award"
                      >
                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                      <button
                        onClick={goToNextAward}
                        className="absolute right-8 md:-right-4 top-[52%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                        aria-label="Next award"
                      >
                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                      </button>
                    </>
                  )}

                  {/* Indicators */}
                  {maxAwardIndex > 0 && (
                    <div className="flex justify-center gap-2 mt-8">
                      {awards.slice(0, maxAwardIndex + 1).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => { setCurrentAward(i); }}
                          className={`transition-all ${i === currentAward ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                          aria-label={`Go to award ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Media Recognition Section - Carousel */}
              {!showAwards && (
                <div className="max-w-7xl mx-auto relative group">
                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevMedia}
                    className="absolute left-4 md:-left-4 top-[48%] md:top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                    aria-label="Previous media"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={handleNextMedia}
                    className="absolute right-4 md:-right-4 top-[48%] md:top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                    aria-label="Next media"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>

                  {/* Carousel Container */}
                  <div className="overflow-hidden px-4 md:px-12">
                    {/* Mobile: Show 1 at a time */}
                    <div className="md:hidden">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${currentMediaIndex * 100}%)`
                        }}
                      >
                        {mediaItems.map((item, index) => (
                          <div
                            key={index}
                            className="w-full flex-shrink-0 px-2"
                          >
                            <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full">
                              <a
                                href={item.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group/link"
                              >
                                <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover/link:shadow-xl group-hover/link:scale-[1.02]">
                                  <img
                                    src={item.image}
                                    alt={`SOUKYA Featured in ${item.title}`}
                                    className="w-full h-auto object-cover"
                                  />
                                  <div className="absolute inset-0 bg-primary/0 group-hover/link:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover/link:opacity-100 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full">
                                      <p className="text-primary font-bold text-xs flex items-center gap-2">
                                        <FileSearch className="h-4 w-4" />
                                        View PDF
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <p className="text-center mt-4 text-sm font-bold text-primary">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Desktop: Show 4 at a time */}
                    <div className="hidden md:block">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${currentMediaIndex * 25}%)`
                        }}
                      >
                        {mediaItems.map((item, index) => (
                          <div
                            key={index}
                            className="w-1/4 flex-shrink-0 px-3"
                          >
                            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full">
                              <a
                                href={item.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block group/link"
                              >
                                <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover/link:shadow-xl group-hover/link:scale-[1.02]">
                                  <img
                                    src={item.image}
                                    alt={`SOUKYA Featured in ${item.title}`}
                                    className="w-full h-auto object-cover"
                                  />
                                  <div className="absolute inset-0 bg-primary/0 group-hover/link:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover/link:opacity-100 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full">
                                      <p className="text-primary font-bold text-sm flex items-center gap-2">
                                        <FileSearch className="h-4 w-4" />
                                        View PDF
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <p className="text-center mt-4 text-base font-bold text-primary">
                                {item.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex justify-center gap-2 mt-10">
                    {mediaItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => { setCurrentMediaIndex(index); }}
                        className={`transition-all ${index === currentMediaIndex
                          ? "w-8 h-3 bg-primary"
                          : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                          } rounded-full`}
                        aria-label={`Go to media ${index + 1}`}
                      />
                    ))}
                  </div>

                  <p className="text-center mt-12 text-sm md:text-lg italic max-w-3xl mx-auto" style={{ color: "#7F543D" }}>
                    "SOUKYA has been featured in prestigious luxury travel and wellness publications worldwide,
                    showcasing our globally recognized commitment to authentic holistic healing."
                  </p>
                </div>
              )}
            </div>
          </div>


          {/* Insurance & Payment Information */}
          <div className="mb-12" id="insurance">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Insurance & Payment Info
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                Flexible payment options and insurance support to make holistic healthcare accessible
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Insurance Coverage
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Serious medical conditions covered by Indian Insurance providers</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Cashless treatment facility available for eligible conditions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Support with major insurance providers in India</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>International patients can check with their insurance providers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Pill className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Payment Options
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Payment plans available for eligible patients</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Financial assistance programs for qualifying cases</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Multiple payment methods accepted (cards, bank transfer, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Transparent pricing with no hidden costs</span>
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
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      For International Patients
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      International patients are advised to check with their respective insurance providers regarding coverage for holistic and alternative medicine treatments. Our administrative team can provide necessary documentation and medical reports to support your insurance claims.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mb-12" id="faq">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageCircleHeart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                Find answers to common questions about treatments, facilities, and your healing journey
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
              <AccordionItem value="faq1" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                  <span className="text-lg font-semibold text-primary text-left">
                    What is the minimum duration of treatment at SOUKYA?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    The minimum recommended stay is 7 days for wellness programs and 14-21 days for medical treatment programs. Duration depends on individual health conditions and treatment requirements. Our doctors will recommend the optimal duration during your initial consultation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq2" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                  <span className="text-lg font-semibold text-primary text-left">
                    Do I need to bring my medical records?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Yes, bringing previous medical reports, prescriptions, and test results helps doctors understand your health history and design better treatment protocols. This information is valuable for creating a more personalized and effective treatment plan.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq3" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                  <span className="text-lg font-semibold text-primary text-left">
                    Is SOUKYA suitable for elderly patients?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Absolutely. SOUKYA specializes in treating elderly patients with age-related conditions, providing gentle therapies and personalized care suitable for senior citizens. Our facilities are designed to be accessible and comfortable for patients of all ages.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq4" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                  <span className="text-lg font-semibold text-primary text-left">
                    Can I continue my regular medications during treatment?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Yes, you can continue necessary medications. However, as treatment progresses, doctors may gradually reduce or modify medications based on health improvements. All changes are made under professional medical supervision for your safety.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq5" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                  <span className="text-lg font-semibold text-primary text-left">
                    What should I pack for my stay at SOUKYA?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Comfortable cotton clothing, personal toiletries, any regular medications, medical records, and an open mind for healing. SOUKYA provides treatment gowns and towels. We recommend bringing loose, comfortable clothes suitable for yoga and therapy sessions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq6" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                  <span className="text-lg font-semibold text-primary text-left">
                    Is vegetarian food mandatory?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Yes, SOUKYA serves only vegetarian organic meals as part of the therapeutic protocol. The cuisine is delicious, nutritious, and prepared according to Ayurvedic principles. Our chefs create varied and flavorful dishes that support your healing journey.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq7" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                  <span className="text-lg font-semibold text-primary text-left">
                    Can family members stay with patients?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Yes, family members can stay in separate accommodations or companion rooms. This is encouraged, especially for elderly patients or those requiring extra support. Please inform us during booking so we can arrange appropriate accommodation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq8" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                  <span className="text-lg font-semibold text-primary text-left">
                    Is WiFi and mobile connectivity available?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Limited WiFi is available, but SOUKYA encourages digital detox as part of the healing process. The peaceful environment away from technology aids in stress reduction and helps you focus on your wellness journey. Emergency communications are always supported.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Information Card */}
          <Card className="mb-12 border-2 border-primary overflow-hidden transition-all duration-300 hover:shadow-2xl" id="contact">
            <CardContent className="p-5 md:p-8">
              <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/10 pb-4">Contact Information</h2>
              <div className="grid gap-8 md:grid-cols-[1fr_1.35fr] lg:gap-12">
                <div className="space-y-6">
                  {/* Address Section */}
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Address</h4>
                      <p className="flex flex-col space-y-0.5 text-sm md:text-base leading-relaxed" style={{ color: '#7F543D' }}>
                        {contactAddress.filter(l => l.trim() !== "").map((l, i) => (
                          <span key={i}>{l}</span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Distances Section */}
                  {contactDistances.length > 0 && (
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Distance from Major Locations</h4>
                        <ul className="space-y-2 text-sm md:text-base leading-relaxed" style={{ color: '#7F543D' }}>
                          {contactDistances.map((d, i) => (
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

                {/* Map Section */}
                <div className="md:-mt-16 self-start">
                  <div className="rounded-2xl bg-white/70 p-1 shadow-lg border-2 border-primary/20 overflow-hidden">
                    <div className="rounded-xl overflow-hidden">
                      <div className="relative w-full aspect-[800/600]">
                        <iframe
                          title="SOUKYA Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5497.959697916405!2d77.79023769497957!3d12.994569447709578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e8be52b809d%3A0x4a7c24726456ffc4!2sSOUKYA!5e0!3m2!1sen!2sin!4v1767686261555!5m2!1sen!2sin"
                          className="absolute inset-0 h-full w-full"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation Services Section */}
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
          {/* CTA Card */}
          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#234A50' }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                  <img
                    src="/Center Images/SOUKYA/CTA bottom.jpg"
                    alt="SOUKYA Wellness Center"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-extrabold text-white text-center mb-8 leading-tight tracking-tight">Begin Your Holistic Healing Journey at SOUKYA</h2>
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
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                    Begin Your <span className="text-white/90">Holistic Healing Journey</span> at <span className="text-white underline decoration-white/20 underline-offset-8">SOUKYA</span>
                  </h2>
                  <div className="flex flex-wrap gap-5">
                    <Button size="lg" className="rounded-full px-6 bg-white text-primary hover:bg-white/90" onClick={() => setQuoteModalOpen(true)}>
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-6 border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500" onClick={() => setQuoteModalOpen(true)}>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-white/90">
                    <Phone className="h-5 w-5 text-red-400" />
                    <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/SOUKYA/CTA bottom.jpg"
                    alt="SOUKYA Wellness Center"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Mobile BROWSE Action (Bottom Left) - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="md:hidden fixed bottom-6 left-6 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 px-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Search size={18} />
          <span>BROWSE</span>
        </button>
      )}

      {/* Floating Quote Action (Bottom Right) */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <button
          onClick={() => setQuoteModalOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 px-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Phone size={18} />
          <span className="hidden md:inline">GET FREE QUOTE</span>
          <span className="md:hidden">QUOTE</span>
        </button>
      )}

      {/* Full Gallery Modal */}
      {
        showFullGallery && (
          <div
            className="fixed inset-0 bg-[#EDE8D0]/80 backdrop-blur-sm z-50 overflow-auto"
            onClick={() => setShowFullGallery(false)}
          >
            <div className="container mx-auto px-4 py-10" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="relative flex items-center justify-center mb-4 pl-16 md:pl-0">
                <Button onClick={() => setShowFullGallery(false)} className="absolute left-0 bg-white text-primary hover:bg-white/90">
                  Back
                </Button>
                <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">
                  SOUKYA Gallery
                </div>
              </div>

              {/* Masonry Grid Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-full cursor-pointer"
                    style={{ paddingBottom: "75%" }}
                    onClick={() => {
                      setLightboxImage(idx);
                      setLightboxOpen(true);
                    }}
                  >
                    <img src={img} alt={`SOUKYA ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }

      {
        lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
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
              <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
                SOUKYA Health Center
              </div>
              <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={images[lightboxImage]}
                  alt={`SOUKYA ${lightboxImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                  aria-label="Close"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {lightboxImage + 1} / {images.length}
                </div>
              </div>
              <div className="flex md:hidden items-center justify-between mt-4">
                <Button
                  onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )
      }

      {
        facilityLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm"
            onClick={() => setFacilityLightboxOpen(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
              }}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length);
              }}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
                SOUKYA Facilities & Amenities
              </div>
              <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={facilityImages[facilityLightboxImage]}
                  alt={`SOUKYA Facility ${facilityLightboxImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  onClick={() => setFacilityLightboxOpen(false)}
                  className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                  aria-label="Close"
                >
                  ✕
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {facilityLightboxImage + 1} / {facilityImages.length}
                </div>
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
        )
      }
      {/* Desktop Vertical JUMP Button - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 flex-col items-end">
          {/* BROWSE Button */}
          <button
            onClick={() => setIsJumpModalOpen(true)}
            className="bg-[#2F5B63] text-white py-8 px-4 rounded-l-[2rem] shadow-[0_0_30px_rgba(0,0,0,0.2)] border-y-2 border-l-2 border-white/40 hover:border-white hover:shadow-[0_0_40px_rgba(47,91,99,0.4)] hover:pr-7 transition-all duration-500 group flex flex-col items-center justify-center gap-3 font-black text-lg md:text-2xl tracking-tighter overflow-hidden relative"
          >
            {/* Shine effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000" />

            <span className="group-hover:scale-125 group-hover:text-white transition-all duration-300 drop-shadow-md">B</span>
            <span className="group-hover:scale-125 group-hover:text-white transition-all duration-300 drop-shadow-md">R</span>
            <span className="group-hover:scale-125 group-hover:text-white transition-all duration-300 drop-shadow-md">O</span>
            <span className="group-hover:scale-125 group-hover:text-white transition-all duration-300 drop-shadow-md">W</span>
            <span className="group-hover:scale-125 group-hover:text-white transition-all duration-300 drop-shadow-md">S</span>
            <span className="group-hover:scale-125 group-hover:text-white transition-all duration-300 drop-shadow-md">E</span>
          </button>
        </div>
      )}

      {/* JUMP Modal / Drawer */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`} />

        {/* Drawer Content */}
        <div
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Decorative Top Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          {/* Header Area */}
          <div className="p-4 pb-4 bg-[#2F5B63] text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[26px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">
                  Sections of Soukya
                </h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-red-500 text-white rounded-xl transition-all duration-300 shadow-lg border border-white/10 hover:border-red-400"
                title="Close Menu"
              >
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">
                "Directly navigate to any section on this page."
              </p>
            </div>
          </div>

          {/* List of Sections */}
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
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">
                    {section.title}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-200">
                  <ChevronRight className="h-3.5 w-3.5 text-primary group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
                </div>

                {/* Left Accent Bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/5 bg-white rounded-r-full transition-all duration-200" />
              </button>
            ))}
          </div>

          {/* Footer Branding */}
          <div className="p-4 text-center border-t border-primary/5 bg-[#F9F8F4]">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-primary/20" />
              <div className="w-2 h-2 rounded-full border border-primary/30" />
              <div className="w-8 h-[1px] bg-primary/20" />
            </div>
            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em] select-none">
              Holistic Healing Sanctuary
            </p>
          </div>
        </div>
      </div>
      {/* Medical Program Details Drawer */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 flex items-end justify-center ${selectedMedicalProgram ? "visible" : "invisible"}`}
        onClick={() => setSelectedMedicalProgram(null)}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${selectedMedicalProgram ? "opacity-100" : "opacity-0"}`} />
        <div
          className={`relative w-full max-w-2xl bg-[#FCFBF7] rounded-t-[2.5rem] shadow-2xl transition-transform duration-500 ease-out transform ${selectedMedicalProgram ? "translate-y-0" : "translate-y-full"} flex flex-col max-h-[90vh]`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header with Close */}
          <div className="p-6 pb-2 flex items-center justify-end">
            <button
              onClick={() => setSelectedMedicalProgram(null)}
              className="p-2 bg-primary/5 hover:bg-primary/10 text-primary rounded-full transition-all"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-12 pt-2 custom-scrollbar">
            {/* Title & Icon Section */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center border-2 border-blue-600 flex-shrink-0 animate-bounce-subtle">
                <div className="text-blue-600 scale-150">
                  {selectedMedicalProgram && medicalIconForTitle(selectedMedicalProgram.title)}
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-primary leading-tight">
                {selectedMedicalProgram?.title}
              </h2>
            </div>

            {/* Description Card */}
            <div className="relative mb-8 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
              <div className="absolute top-0 left-4 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                Overview
              </div>
              <p className="text-base md:text-lg leading-relaxed text-primary/80 italic">
                "{selectedMedicalProgram?.description}"
              </p>
            </div>

            {/* Key Focus Areas (Bullets) */}
            <h4 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-4 pl-1 border-l-4 border-blue-600">
              Key Focus Areas
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {selectedMedicalProgram?.bullets?.map((b: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all group hover:border-blue-200"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-xs mt-0.5 group-hover:rotate-12 transition-transform">
                    ✓
                  </div>
                  <span className="text-sm md:text-base text-primary/90 font-semibold">{b}</span>
                </div>
              ))}
            </div>

            {/* Action Call */}
            <div className="mt-10 p-6 bg-primary rounded-2xl text-center text-white">
              <p className="text-sm opacity-80 mb-4">Interested in this program? Our specialists are here to guide you.</p>
              <button
                onClick={() => {
                  setSelectedMedicalProgram(null);
                  setQuoteModalOpen(true);
                }}
                className="w-full md:w-auto px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all active:scale-95"
              >
                Inquire About This Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
