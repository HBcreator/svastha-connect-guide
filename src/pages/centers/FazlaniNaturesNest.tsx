import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Images,
  Video,
  Phone,
  MessageCircle,
  Users,
  Award,
  TrendingUp,
  Heart,
  Globe,
  MessageCircleHeart,
  Stethoscope,
  Droplet,
  Brain,
  Sparkles,
  Activity,
  ShieldCheck,
  Leaf,
  Hospital,
  HeartPulse,
  TreePine,
  UserCheck,
  ClipboardList,
  FileSearch,
  Pill,
  Home,
  Building2,
  Utensils,
  Search,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CardData = {
  title: string;
  description: string;
  bullets: string[];
};

type SectionData = {
  title: string;
  description: string;
  cards: CardData[];
};

const parseCardSection = (text: string): SectionData => {
  const lines = text.split("\n").map((l) => l.trim());
  let title = "";
  let description = "";
  const cards: CardData[] = [];
  let currentCard: CardData | null = null;
  let inCards = false;

  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith("### ")) {
      title = line.replace("### ", "").trim();
      continue;
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      inCards = true;
      if (currentCard) cards.push(currentCard);
      currentCard = {
        title: line.slice(2, -2).trim(),
        description: "",
        bullets: [],
      };
      continue;
    }
    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "").trim();
      if (currentCard && bullet) currentCard.bullets.push(bullet);
      continue;
    }
    if (inCards && currentCard) {
      currentCard.description = currentCard.description
        ? `${currentCard.description} ${line}`
        : line;
    } else {
      description = description ? `${description} ${line}` : line;
    }
  }

  if (currentCard) cards.push(currentCard);
  return { title, description, cards };
};

const iconForTitle = (t: string) => {
  const s = t.toLowerCase();
  if (s.includes("animal") || s.includes("equine")) return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (s.includes("nature") || s.includes("sanctuary") || s.includes("forest")) return <TreePine className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (s.includes("philanthropist") || s.includes("vision")) return <UserCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (s.includes("integrated") || s.includes("global") || s.includes("approach")) return <Hospital className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (s.includes("cuisine") || s.includes("farm")) return <Leaf className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (s.includes("luxury") || s.includes("hospitality")) return <Star className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (s.includes("escape") || s.includes("mumbai") || s.includes("pune")) return <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  if (s.includes("personal") || s.includes("bespoke")) return <Users className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
  return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
};

export default function FazlaniNaturesNest() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [showTopVideoGallery, setShowTopVideoGallery] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [thumbnailImages, setThumbnailImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [videoThumbs, setVideoThumbs] = useState<string[]>([]);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const galleryVideoRef = useRef<HTMLVideoElement>(null);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);
  const videoPosterOverrides: Record<number, string> = {
    0: "/Center Videos/Fazlani Natures Nest/video 1.jpg",
  };
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [whyChooseData, setWhyChooseData] = useState<SectionData | null>(null);
  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [facilitiesData, setFacilitiesData] = useState<SectionData | null>(null);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [founderTeamData, setFounderTeamData] = useState<SectionData | null>(null);
  const [teamIntro, setTeamIntro] = useState("");
  const [founder, setFounder] = useState<{ name: string; degrees: string[]; role: string; description: string } | null>(null);
  const [founderExpertise, setFounderExpertise] = useState<string[]>([]);
  const [teamGroups, setTeamGroups] = useState<{ title: string; description: string; items: string[] }[]>([]);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [isTeamAutoPlaying, setIsTeamAutoPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState<{ id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [insuranceIntro, setInsuranceIntro] = useState("");
  const [insurancePaymentTitle, setInsurancePaymentTitle] = useState("");
  const [insurancePaymentIntro, setInsurancePaymentIntro] = useState("");
  const [insurancePaymentBullets, setInsurancePaymentBullets] = useState<string[]>([]);
  const [insuranceClaimsTitle, setInsuranceClaimsTitle] = useState("");
  const [insuranceClaimsIntro, setInsuranceClaimsIntro] = useState("");
  const [insuranceClaimsBullets, setInsuranceClaimsBullets] = useState<string[]>([]);
  const [insuranceInternationalTitle, setInsuranceInternationalTitle] = useState("");
  const [insuranceInternationalIntro, setInsuranceInternationalIntro] = useState("");
  const [insuranceInternationalBullets, setInsuranceInternationalBullets] = useState<string[]>([]);
  const [faqItems, setFaqItems] = useState<{ id: string; question: string; answer: string; bullets: string[] }[]>([]);
  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [transportText, setTransportText] = useState("");

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Fazlani" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "awards", title: "Awards" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "FAQ" },
    { id: "contact", title: "Contact Information" },
  ];

  const jumpToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsJumpModalOpen(false);
  };
  const awards = [
    {
      title: "Best Spa & Luxury Winner",
      image: "/Center Images/Fazlani Natures Nest/Awards/1 (best sapand luxury winner).jpg",
      description: "Recognized for premium wellness experiences, luxury hospitality, and serene retreat standards.",
    },
    {
      title: "NABH Accredited",
      image: "/Center Images/Fazlani Natures Nest/Awards/2 (NABH).jpg",
      description: "Accredited for quality standards in patient safety, care delivery, and wellness operations.",
    },
    {
      title: "Tripadvisor Travelers’ Choice 2023",
      image: "/Center Images/Fazlani Natures Nest/Awards/3 (tripadvisor).png",
      description: "Honored by guests worldwide for consistently excellent wellness stays and service.",
    },
    {
      title: "Hospitality Horizon Spa & Wellness Award 2025",
      image: "/Center Images/Fazlani Natures Nest/Awards/4 (Hospitality-Horizon-Spa-Wellness-Award-2025).webp",
      description: "Awarded for innovation and excellence in spa and wellness experiences.",
    },
  ];
  const [currentAward, setCurrentAward] = useState(0);
  const [maxAwardIndex, setMaxAwardIndex] = useState(awards.length - 1);
  const [isAwardsMobile, setIsAwardsMobile] = useState(false);

  useEffect(() => {
    fetch("/Center Images/Fazlani Natures Nest/Photo Gallery/Photo Gallery Links.txt")
      .then((r) => r.text())
      .then((t) => {
        const urls = t
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setImages(urls);
        setSelectedImage(0);
        setLightboxImage(0);
        setThumbnailImages(urls.slice(0, Math.min(5, urls.length)));
      })
      .catch(() => {
        setImages([]);
        setThumbnailImages([]);
      });
  }, []);

  useEffect(() => {
    fetch("/Center Videos/Fazlani Natures Nest/Video Gallery Links.txt")
      .then((r) => r.text())
      .then((t) => {
        const urls = t
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setVideos(urls);
        setSelectedVideo(0);
      })
      .catch(() => setVideos([]));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Wellness Programs.txt")
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
      .catch((err) => console.error("Error loading Fazlani wellness programs:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Medical Programs.txt")
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
      .catch((err) => console.error("Error loading Fazlani medical programs:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Why Choose Fazlani.txt")
      .then((res) => res.text())
      .then((text) => setWhyChooseData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Why Choose Fazlani:", err));
  }, []);

  useEffect(() => {
    fetch("/Center Videos/Fazlani Natures Nest/Testimonies/Testimonies Links yt.txt")
      .then((res) => res.text())
      .then((text) => {
        const matches = Array.from(text.matchAll(/src="([^"]+)"/g)).map((m) => m[1]);
        setTestimonialVideos(matches);
        setSelectedTestimonialVideo(0);
      })
      .catch((err) => console.error("Error loading Fazlani testimonies:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const steps: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inSteps = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inSteps = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) steps.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            inSteps = true;
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
            continue;
          }
          if (!inSteps) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            current.description = current.description ? `${current.description} ${line}` : line;
          }
        }
        if (current) steps.push(current);
        setTreatmentIntro(intro);
        setTreatmentSteps(steps);
      })
      .catch((err) => console.error("Error loading Fazlani treatment process:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => setFacilitiesData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Fazlani facilities:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Founder & Expert Team.txt")
      .then((res) => res.text())
      .then((text) => {
        setFounderTeamData(parseCardSection(text));
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        let name = "";
        const degrees: string[] = [];
        let role = "";
        let fdesc = "";
        const expertise: string[] = [];
        const groups: { title: string; description: string; items: string[] }[] = [];
        let currentGroup: { title: string; description: string; items: string[] } | null = null;
        let section: "intro" | "founder" | "expertise" | "group" = "intro";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            section = "intro";
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).trim();
            if (/founder|philanthropist/i.test(t)) {
              section = "founder";
              continue;
            }
            if (currentGroup) groups.push(currentGroup);
            currentGroup = { title: t, description: "", items: [] };
            section = "group";
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "").trim();
            if (section === "founder") {
              expertise.push(bullet);
              continue;
            }
            if (currentGroup) {
              currentGroup.items.push(bullet);
              continue;
            }
          }
          if (section === "intro") {
            intro = intro ? `${intro} ${line}` : line;
            continue;
          }
          if (section === "founder") {
            if (!name && /Dr\.\s*Abdul/i.test(line)) name = "Dr. Abdul Kader Fazlani";
            if (!role && /Chairman|Founder|Philanthropist/i.test(line)) role = "Founder & Philanthropist";
            fdesc = fdesc ? `${fdesc} ${line}` : line;
            continue;
          }
          if (section === "group" && currentGroup) {
            currentGroup.description = currentGroup.description ? `${currentGroup.description} ${line}` : line;
          }
        }
        if (currentGroup) groups.push(currentGroup);
        setTeamIntro(intro);
        setFounder(name ? { name, degrees, role, description: fdesc } : null);
        setFounderExpertise(expertise);
        setTeamGroups(groups);
      })
      .catch((err) => console.error("Error loading Fazlani founder/team:", err));
  }, []);

  useEffect(() => {
    if (!isTeamAutoPlaying || teamGroups.length === 0) return;
    const id = window.setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [isTeamAutoPlaying, teamGroups.length]);

  const prevTeam = () => {
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((prev) => (prev - 1 + teamGroups.length) % teamGroups.length);
  };
  const nextTeam = () => {
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
  };

  const renderInlineBold = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const regex = /\*\*(.*?)\*\*/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.substring(lastIndex, match.index));
      parts.push(<strong key={match.index} className="font-semibold text-primary">{match[1]}</strong>);
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) parts.push(text.substring(lastIndex));
    return parts.length > 0 ? parts : text;
  };

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[] = [];
        let current: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean } | null = null;
        let idCounter = 1;

        for (const line of lines) {
          if (!line || line.startsWith("###")) continue;

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

          if (current && line.startsWith('*"') && line.endsWith('"*')) {
            current.title = line.slice(2, -2);
            continue;
          }

          if (current && line.includes("Rating:")) {
            const ratingMatch = line.match(/\((\d+)\//);
            if (ratingMatch) {
              current.rating = parseInt(ratingMatch[1]);
            }
            continue;
          }

          if (current) {
            current.review = current.review ? `${current.review} ${line}` : line;
          }
        }
        if (current) items.push(current);
        setTestimonials(items);
        setCurrentReview(0);
      })
      .catch((err) => console.error("Error loading Fazlani reviews:", err));
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
    );
  };

  const parseInsurancePayment = (text: string) => {
    const lines = text.split("\n").map((l) => l.trim());
    const intro: string[] = [];

    let paymentTitle = "";
    let paymentIntro = "";
    const paymentBullets: string[] = [];

    let claimsTitle = "";
    let claimsIntro = "";
    const claimsBullets: string[] = [];

    let intlTitle = "";
    let intlIntro = "";
    const intlBullets: string[] = [];

    type Mode = "intro" | "payment" | "claims" | "intl";
    let mode: Mode = "intro";

    const pushText = (m: Mode, value: string) => {
      if (!value) return;
      if (m === "intro") intro.push(value);
      if (m === "payment") paymentIntro = paymentIntro ? `${paymentIntro} ${value}` : value;
      if (m === "claims") claimsIntro = claimsIntro ? `${claimsIntro} ${value}` : value;
      if (m === "intl") intlIntro = intlIntro ? `${intlIntro} ${value}` : value;
    };

    for (const line of lines) {
      if (!line) continue;
      if (line.startsWith("### ")) continue;

      if (line.startsWith("**") && line.endsWith("**")) {
        const heading = line.slice(2, -2).trim();
        if (heading.toLowerCase().includes("payment")) {
          paymentTitle = heading;
          mode = "payment";
        } else if (heading.toLowerCase().includes("insurance")) {
          claimsTitle = heading;
          mode = "claims";
        } else if (heading.toLowerCase().includes("international")) {
          intlTitle = heading;
          mode = "intl";
        }
        continue;
      }

      if (line.startsWith("*")) {
        const bullet = line.replace(/^\*+\s*/, "").trim();
        if (!bullet) continue;
        if (mode === "payment") paymentBullets.push(bullet);
        if (mode === "claims") claimsBullets.push(bullet);
        if (mode === "intl") intlBullets.push(bullet);
        continue;
      }

      pushText(mode, line);
    }

    setInsuranceIntro(intro.join(" "));
    setInsurancePaymentTitle(paymentTitle);
    setInsurancePaymentIntro(paymentIntro);
    setInsurancePaymentBullets(paymentBullets);
    setInsuranceClaimsTitle(claimsTitle);
    setInsuranceClaimsIntro(claimsIntro);
    setInsuranceClaimsBullets(claimsBullets);
    setInsuranceInternationalTitle(intlTitle);
    setInsuranceInternationalIntro(intlIntro);
    setInsuranceInternationalBullets(intlBullets);
  };

  const parseFaq = (text: string) => {
    const lines = text.split("\n").map((l) => l.trim());
    const items: { id: string; question: string; answer: string; bullets: string[] }[] = [];
    let current: { id: string; question: string; answer: string; bullets: string[] } | null = null;
    for (const line of lines) {
      if (!line) continue;
      if (line.startsWith("### ")) continue;

      if (line.startsWith("**") && line.endsWith("**")) {
        const inner = line.slice(2, -2).trim();
        const m = inner.match(/^(\d+)\.\s*(.+)$/);
        if (m) {
          if (current) items.push(current);
          current = { id: `faq${m[1]}`, question: m[2].trim(), answer: "", bullets: [] };
          continue;
        }
      }

      if (line.startsWith("*")) {
        const bullet = line.replace(/^\*+\s*/, "").trim();
        if (current && bullet) current.bullets.push(bullet);
        continue;
      }

      if (current) {
        current.answer = current.answer ? `${current.answer} ${line}` : line;
      }
    }
    if (current) items.push(current);
    setFaqItems(items);
  };

  const parseContactInfo = (text: string) => {
    const lines = text.split("\n").map((l) => l.trim());
    const addr: string[] = [];
    const dists: string[] = [];
    let transport = "";

    type Mode = "none" | "address" | "distances" | "transport";
    let mode: Mode = "none";

    for (const line of lines) {
      if (!line) continue;
      if (line.startsWith("### ")) continue;

      if (line.startsWith("**") && line.endsWith("**")) {
        const heading = line.slice(2, -2).trim().toLowerCase();
        if (heading.includes("address")) mode = "address";
        else if (heading.includes("distance")) mode = "distances";
        else if (heading.includes("transportation")) mode = "transport";
        continue;
      }

      if (line.startsWith("*")) {
        const bullet = line.replace(/^\*+\s*/, "").trim();
        if (mode === "address") addr.push(bullet);
        else if (mode === "distances") dists.push(bullet);
        else if (mode === "transport") transport = transport ? `${transport} ${bullet}` : bullet;
        continue;
      }

      if (mode === "address") addr.push(line);
      else if (mode === "distances") dists.push(line);
      else if (mode === "transport") transport = transport ? `${transport} ${line}` : line;
    }
    setContactAddress(addr);
    setContactDistances(dists);
    setTransportText(transport);
  };

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Insurance & Payment Info.txt")
      .then((r) => r.text())
      .then((t) => parseInsurancePayment(t))
      .catch(() => {
        setInsuranceIntro("");
        setInsurancePaymentTitle("");
        setInsurancePaymentIntro("");
        setInsurancePaymentBullets([]);
        setInsuranceClaimsTitle("");
        setInsuranceClaimsIntro("");
        setInsuranceClaimsBullets([]);
        setInsuranceInternationalTitle("");
        setInsuranceInternationalIntro("");
        setInsuranceInternationalBullets([]);
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Frequently Asked Questions.txt")
      .then((r) => r.text())
      .then((t) => parseFaq(t))
      .catch(() => setFaqItems([]));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Fazlani Natures Nest/Contact Information.txt")
      .then((r) => r.text())
      .then((t) => parseContactInfo(t))
      .catch((err) => console.error("Error loading Contact Info:", err));
  }, []);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      setIsAwardsMobile(mobile);
      setMaxAwardIndex(Math.max(0, awards.length - (mobile ? 1 : 3)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [awards.length]);

  useEffect(() => {
    if (awards.length === 0) return;
    const id = window.setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % (maxAwardIndex + 1));
    }, 4000);
    return () => window.clearInterval(id);
  }, [awards.length, maxAwardIndex]);

  const goToPreviousAward = () => {
    if (awards.length === 0) return;
    setCurrentAward((prev) => (prev - 1 + (maxAwardIndex + 1)) % (maxAwardIndex + 1));
  };

  const goToNextAward = () => {
    if (awards.length === 0) return;
    setCurrentAward((prev) => (prev + 1) % (maxAwardIndex + 1));
  };

  useEffect(() => {
    fetch("/Center Images/Fazlani Natures Nest/Facilities/Facilities Links.txt")
      .then((r) => r.text())
      .then((t) => {
        const urls = t
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setFacilityImages(urls);
        setCurrentFacilityImage(0);
        setFacilityLightboxImage(0);
      })
      .catch(() => {
        setFacilityImages([]);
      });
  }, []);

  useEffect(() => {
    if (facilityImages.length === 0) return;
    const id = window.setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [facilityImages.length]);

  useEffect(() => {
    if (videos.length === 0) {
      setVideoThumbs([]);
      return;
    }
    let cancelled = false;

    const makeThumb = (src: string) =>
      new Promise<string>((resolve) => {
        const video = document.createElement("video");
        video.crossOrigin = "anonymous";
        video.muted = true;
        video.preload = "metadata";
        video.src = src;

        const cleanup = () => {
          video.removeAttribute("src");
          video.load();
        };

        video.onloadedmetadata = () => {
          const target = Math.min(0.45, Math.max(0.05, video.duration / 2));
          video.currentTime = target;
        };

        video.onseeked = () => {
          try {
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth || 640;
            canvas.height = video.videoHeight || 360;
            const ctx = canvas.getContext("2d");
            if (ctx) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
              cleanup();
              resolve(dataUrl);
              return;
            }
          } catch {
            // ignore and fall through
          }
          cleanup();
          resolve("");
        };

        video.onerror = () => {
          cleanup();
          resolve("");
        };
      });

    Promise.all(videos.map((src) => makeThumb(src))).then((thumbs) => {
      if (!cancelled) setVideoThumbs(thumbs);
    });

    return () => {
      cancelled = true;
    };
  }, [videos]);

  useEffect(() => {
    const videoElement = galleryVideoRef.current;
    if (!videoElement) return;

    videoElement.volume = 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(() => {
              videoElement.muted = true;
              videoElement.play();
            });
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [selectedVideo]);

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

    return () => {
      observer.unobserve(sectionElement);
    };
  }, []);

  useEffect(() => {
    if (isJumpModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isJumpModalOpen]);

  const wellnessIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("detox") || s.includes("purification") || s.includes("panchakarma")) {
      return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("stress") || s.includes("anxiety") || s.includes("mind") || s.includes("mental")) {
      return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("rejuvenation") || s.includes("beauty") || s.includes("radiance")) {
      return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("weight")) {
      return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("immunity")) {
      return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("yogi") || s.includes("yoga") || s.includes("forest") || s.includes("nature")) {
      return <Leaf className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("anxiety") || s.includes("mind") || s.includes("stress")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("diabetes") || s.includes("hypertension") || s.includes("cardiac") || s.includes("metabolic")) {
      return <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("spinal") || s.includes("posture") || s.includes("arthritis") || s.includes("joint")) {
      return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("sleep") || s.includes("insomnia")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("digestive") || s.includes("gut")) return <TreePine className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("women") || s.includes("hormonal")) return <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("rehabilitation") || s.includes("post-injury")) return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("trauma") || s.includes("grief")) return <Hospital className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  const treatmentIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("assessment") || s.includes("consult") || s.includes("evaluation")) {
      return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("plan") || s.includes("itinerary") || s.includes("personal")) {
      return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("therapeutic") || s.includes("treatment") || s.includes("immersion")) {
      return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("nature") || s.includes("animal") || s.includes("connection")) {
      return <TreePine className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("nutrition") || s.includes("nourish") || s.includes("farm")) {
      return <Leaf className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("empower") || s.includes("continued")) {
      return <HeartPulse className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    return <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
  };

  const getFacilityIcon = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("accommodation") || s.includes("room") || s.includes("suite") || s.includes("stay") || s.includes("private"))
      return <Home className="h-7 w-7 text-white" />;
    if (s.includes("architecture") || s.includes("design") || s.includes("building"))
      return <Building2 className="h-7 w-7 text-white" />;
    if (s.includes("farm") || s.includes("organic") || s.includes("garden") || s.includes("outdoor") || s.includes("landscape"))
      return <TreePine className="h-7 w-7 text-white" />;
    if (s.includes("infrastructure") || s.includes("treatment") || s.includes("therapy") || s.includes("clinical") || s.includes("spa"))
      return <Stethoscope className="h-7 w-7 text-white" />;
    if (s.includes("yoga") || s.includes("meditation") || s.includes("hall") || s.includes("mindful"))
      return <Sparkles className="h-7 w-7 text-white" />;
    if (s.includes("dining") || s.includes("cuisine") || s.includes("food") || s.includes("meal") || s.includes("restaurant"))
      return <Utensils className="h-7 w-7 text-white" />;
    if (s.includes("recreation") || s.includes("pool") || s.includes("swimming") || s.includes("activity")) {
      if (s.includes("pool") || s.includes("swimming") || s.includes("water")) return <Droplet className="h-7 w-7 text-white" />;
      return <Activity className="h-7 w-7 text-white" />;
    }
    if (s.includes("safety") || s.includes("standard") || s.includes("quality"))
      return <ShieldCheck className="h-7 w-7 text-white" />;
    if (s.includes("services") || s.includes("housekeeping") || s.includes("laundry") || s.includes("guest") || s.includes("transfer"))
      return <Users className="h-7 w-7 text-white" />;
    return <Heart className="h-7 w-7 text-white" />;
  };

  useEffect(() => {
    if (!isAutoPlaying || showTopVideoGallery || images.length === 0) return;
    const id = window.setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [isAutoPlaying, showTopVideoGallery, images.length]);

  const goToPrevious = () => {
    if (images.length === 0) return;
    setIsAutoPlaying(false);
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (images.length === 0) return;
    setIsAutoPlaying(false);
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-6xl">
          <ol className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] overflow-x-auto whitespace-nowrap pb-1 -mb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <li className="flex items-center gap-2 shrink-0">
              <Link to="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="flex items-center gap-2 shrink-0">
              <Link to="/top-ayurvedic-centers-in-india" className="text-primary/50 hover:text-primary transition-colors">
                Centers
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black shrink-0">
              FAZLANI NATURES NEST WELLNESS CENTER MAHARASHTRA
            </li>
          </ol>
        </div>
      </nav>


      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Fazlani Nature's Nest Wellness Center
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  A serene, nature-immersed retreat for holistic healing and renewal
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Near Lonavala, District Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.7</span>
                  <span className="opacity-90">(1800+)</span>
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
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  {images.length > 0 && (
                    <img
                      src={images[selectedImage]}
                      alt={`Fazlani Nature's Nest ${selectedImage + 1}`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  )}

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

                  {isAutoPlaying && images.length > 0 && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Auto
                    </div>
                  )}
                </div>

                {thumbnailImages.length > 0 && (
                  <div className="flex flex-col md:flex-row gap-3 mb-6">
                    <div
                      className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                      onClick={() => {
                        setLightboxImage(images.indexOf(thumbnailImages[0]));
                        setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={thumbnailImages[0]}
                        alt="Fazlani Nature's Nest 1"
                        className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>

                    <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                      {thumbnailImages.slice(1, 5).map((img, idx) => {
                        const actualIndex = images.indexOf(img);
                        const isLastImage = idx === 3;

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
                              <img
                                src={img}
                                alt={`Fazlani Nature's Nest ${actualIndex + 1}`}
                                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

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
                )}
              </>
            ) : (
              <>
                <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video mb-8">
                  {videos.length > 0 && (
                    <video
                      key={selectedVideo}
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      poster={videoPosterOverrides[selectedVideo]}
                      className="w-full h-full object-cover"
                    >
                      <source src={videos[selectedVideo]} type="video/mp4" />
                    </video>
                  )}
                  {videos.length > 0 && (
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      Video {selectedVideo + 1} / {videos.length}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {videos.map((video, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedVideo(idx)}
                      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-2 ring-primary" : ""
                        }`}
                    >
                      {videoPosterOverrides[idx] ? (
                        <img
                          src={videoPosterOverrides[idx]}
                          alt={`Fazlani Nature's Nest video ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : videoThumbs[idx] ? (
                        <img
                          src={videoThumbs[idx]}
                          alt={`Fazlani Nature's Nest video ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video muted preload="metadata" className="w-full h-full object-cover">
                          <source src={video} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Main Content Section */}
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-strong:text-primary">
              <MarkdownContent
                contentPath="/content/Top Centers/Fazlani Natures Nest/Main content.txt"
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
          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="wellness">
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">1800+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Happy Guests</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.7/5</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Average Rating</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">98%</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Satisfaction</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 border-green-700 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Wellness Programs
              </h1>
              <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto px-4" style={{ color: "#7F543D" }}>
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
                          <span className="text-green-600 mt-1">&#10003;</span>
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
          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="medical">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-700 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Medical Programs
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto px-4" style={{ color: "#7F543D" }}>
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
                          <span className="text-blue-600 mt-1">&#10003;</span>
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
                Video Gallery of Fazlani Nature's Nest
              </h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Experience the serene atmosphere and holistic healing journey at Fazlani Nature's Nest through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    {videos.length > 0 && (
                      <video
                        ref={galleryVideoRef}
                        key={videos[selectedVideo]}
                        src={videos[selectedVideo]}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        poster={videoPosterOverrides[selectedVideo]}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                <button
                  onClick={() => setSelectedVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setSelectedVideo((prev) => (prev + 1) % videos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation Buttons */}
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

          <div className="mb-12" id="why-choose">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {whyChooseData?.title || "Why Choose Fazlani Nature's Nest"}
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
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                          {iconForTitle(it.title)}
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-primary leading-tight flex-1 min-h-[2rem] md:min-h-[2.5rem] flex items-center">{it.title}</h3>
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
                              <span className="text-primary mt-1">&#10003;</span>
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

          {/* Testimonials of Fazlani Nature's Nest Center - Video Section */}
          <div className="mb-12" id="testimonial-videos" ref={testimonialSectionRef}>
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of Fazlani Nature's Nest Center
              </h2>
              <div className="w-12 h-1 bg-primary/20 mx-auto mb-3 rounded-full hidden md:block" />
              <p className="text-sm md:text-lg mx-auto max-w-none leading-relaxed italic" style={{ color: "#7F543D" }}>
                Watch inspiring stories of healing and wellness from our guests.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    {testimonialVideos.length > 0 && (
                      <iframe
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={`${testimonialVideos[selectedTestimonialVideo]}?autoplay=${isTestimonialsInView ? "1" : "0"}&mute=0&rel=0`}
                        title="Fazlani Nature's Nest Testimonial Video"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                <button
                  onClick={() => setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={() => setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="flex md:hidden items-center justify-between mt-4 px-6">
                <Button
                  onClick={() => setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                >
                  Next
                </Button>
              </div>

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

          {/* Treatment Process & Patient Journey - Timeline */}
          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Treatment Process & Patient Journey
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {treatmentIntro || "Your personalized healing journey at Fazlani Nature's Nest, step by step"}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {treatmentSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                      {index + 1}
                    </div>
                    {index < treatmentSteps.length - 1 && (
                      <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                    )}
                  </div>

                  <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                    <CardContent className="p-4 md:p-6">
                      <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {index + 1}
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-12 md:pl-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {treatmentIconForTitle(step.title)}
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-primary pr-2">{step.title}</h3>
                      </div>
                      <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                        {step.description}
                      </p>
                      {step.bullets && step.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {step.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-primary mt-1">&bull;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-12 mt-6">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src="/Center Images/Fazlani Natures Nest/CTA mid.jpg"
                    alt="Fazlani Nature's Nest"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: "#7F543D" }}>
                    Take the first step toward holistic healing. Our expert team guides you with personalized plans tailored to your unique needs.
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
                  <div className="mt-4 flex items-center justify-center gap-2" style={{ color: "#7F543D" }}>
                    <Phone className="h-4 w-4 text-red-600" />
                    <a href="tel:+919000000000" className="underline hover:text-primary">Call us: +91 90000 00000</a>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-primary mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-base md:text-lg mb-6" style={{ color: "#7F543D" }}>
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
                  <div className="mt-4 flex items-center gap-2" style={{ color: "#7F543D" }}>
                    <Phone className="h-5 w-5 text-red-600" />
                    <a href="tel:+919000000000" className="underline hover:text-primary">Call us: +91 90000 00000</a>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Fazlani Natures Nest/CTA mid.jpg"
                    alt="Fazlani Nature's Nest"
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

            <div className="max-w-7xl mx-auto relative mb-10">
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
                          <img
                            src={image}
                            alt={`Fazlani Facility ${index + 1}`}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${Math.min(currentFacilityImage, Math.max(0, facilityImages.length - 5)) * 20}%)`
                    }}
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
                          <img
                            src={image}
                            alt={`Fazlani Facility ${index + 1}`}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
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
                    className={`transition-all ${index === currentFacilityImage
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                      } rounded-full`}
                    aria-label={`Go to facility image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(facilitiesData?.cards || []).map((card, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                        {getFacilityIcon(card.title)}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1 min-h-[2.5rem] flex items-center">
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

            <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    All Facilities Meet International Wellness Standards
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Every facility at Fazlani Nature's Nest is designed to deliver a serene, nature-immersed healing experience with world-class comfort, safety, and care.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder & Team Info */}
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="team">
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {founderTeamData?.title || "Founder & Team Info"}
              </h1>
              {teamIntro && (
                <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                  {teamIntro}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                <CardContent className="p-4 md:p-8 h-full md:h-[480px] flex flex-col">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img src="/Center Images/Fazlani Natures Nest/Founder and team/Founder.jpg" alt="Founder" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{founder?.name || "Founder"}</h3>
                      {founder?.degrees && founder.degrees.length > 0 && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>{founder.degrees.join(" - ")}</p>
                      )}
                      {founder?.role && (
                        <p className="text-xs md:text-sm mt-1 text-primary/70">{founder.role}</p>
                      )}
                    </div>
                  </div>
                  {founder?.description && (
                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>{founder.description}</p>
                  )}
                  {founderExpertise.length > 0 && (
                    <div className="pt-3 md:pt-4 border-t border-primary/10">
                      <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {founderExpertise.map((e, i) => (
                          <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">{e}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <div className="relative">
                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                  <CardContent className="p-4 md:p-8 h-full md:h-[480px] md:overflow-y-auto">
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}>
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                          <img src="/Center Images/Fazlani Natures Nest/Founder and team/team.jpg" alt="Team" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 leading-snug break-words whitespace-normal">
                          {teamGroups[currentTeamSlide]?.title || "Team"}
                        </h3>
                      </div>
                    </div>
                    {teamGroups[currentTeamSlide]?.description && (
                      <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                        {teamGroups[currentTeamSlide].description}
                      </p>
                    )}
                    <ul className="space-y-2.5">
                      {(teamGroups[currentTeamSlide]?.items || []).map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">&bull;</span>
                          <span>{renderInlineBold(it)}</span>
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

          {testimonials.length > 0 && (
            <div className="mb-12" id="reviews">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                  Patient Stories & Reviews
                </h2>
                <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                  Hear from our guests about their transformational healing journeys
                </p>
              </div>

              <div className="relative">
                <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                  <CardContent className="p-4 md:p-12">
                    <div className="max-w-4xl mx-auto">
                      <div className="text-primary/20 mb-3 md:mb-4">
                        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>

                      <div className="mb-4 md:mb-6">
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">
                          {testimonials[currentReview].title}
                        </h3>
                        <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                          "{testimonials[currentReview].review}"
                        </p>
                      </div>

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
                                &#10003; Verified
                              </span>
                            )}
                          </div>
                          <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                            {testimonials[currentReview].location} {testimonials[currentReview].condition && `- ${testimonials[currentReview].condition}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 md:gap-3">
                        {renderStars(testimonials[currentReview].rating)}
                        <span className="text-xs md:text-sm font-semibold text-primary">
                          {testimonials[currentReview].rating}.0
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

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

                <div className="flex justify-center gap-2 mt-6 md:mt-8">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectReview(idx)}
                      className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"}`}
                      aria-label={`Go to review ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Awards Section */}
          <div className="mt-16 md:mt-24 mb-16 md:mb-24" id="awards">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards</h2>
              <p className="text-base md:text-lg px-4 mx-auto max-w-2xl" style={{ color: "#7F543D" }}>
                Recognitions of Fazlani Nature&apos;s Nest for excellence in wellness, hospitality, and guest experience
              </p>
            </div>

            <div className="relative group max-w-5xl mx-auto">
              <div className="overflow-hidden px-4 md:px-10">
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
                            <p className="text-xs italic line-clamp-4" style={{ color: "#7F543D" }}>"{award.description}"</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

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
                            <p className="text-base italic" style={{ color: "#7F543D" }}>"{award.description}"</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
                {insuranceIntro || "Flexible payment options and insurance support to make your wellness journey accessible"}
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
                      {insuranceClaimsTitle || "Insurance Coverage"}
                    </h3>
                  </div>
                  {insuranceClaimsIntro && (
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                      {insuranceClaimsIntro}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {insuranceClaimsBullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                        <span className="text-primary mt-1">&#10003;</span>
                        <span>{b}</span>
                      </li>
                    ))}
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
                      {insurancePaymentTitle || "Payment Options"}
                    </h3>
                  </div>
                  {insurancePaymentIntro && (
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                      {insurancePaymentIntro}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {insurancePaymentBullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                        <span className="text-primary mt-1">&#10003;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {(insuranceInternationalIntro || insuranceInternationalBullets.length > 0) && (
              <Card className="mt-6 bg-primary/5 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {insuranceInternationalTitle || "For International Patients"}
                      </h4>
                      {insuranceInternationalIntro && (
                        <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                          {insuranceInternationalIntro}
                        </p>
                      )}
                      {insuranceInternationalBullets.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {insuranceInternationalBullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-primary mt-1">&#10003;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
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
                Find answers to common questions about programs, facilities, and your healing journey
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                  <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                    <span className="text-lg font-semibold text-primary text-left">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6 bg-white">
                    <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      {item.answer}
                    </p>
                    {item.bullets.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {item.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                            <span className="text-primary mt-1">&#10003;</span>
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

          {/* Contact Information Card */}
          <Card className="mb-12 border-2 border-primary overflow-hidden transition-all duration-300 hover:shadow-2xl" id="contact">
            <CardContent className="p-5 md:p-8">
              <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-primary/10 pb-4">Contact Information</h2>
              <div className="grid gap-8 md:grid-cols-[1fr_1.35fr] lg:gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Address</h4>
                      <p className="flex flex-col space-y-0.5 text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                        {contactAddress.filter((l) => l.trim() !== "").map((l, i) => (
                          <span key={i}>{l}</span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {contactDistances.length > 0 && (
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-primary mb-1">Distance from Major Locations</h4>
                        <ul className="space-y-2 text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
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

                <div className="md:-mt-16 self-start">
                  <div className="rounded-2xl bg-white/70 p-1 shadow-lg border-2 border-primary/20 overflow-hidden">
                    <div className="rounded-xl overflow-hidden">
                      <div className="relative w-full aspect-[800/600]">
                        <iframe
                          title="Fazlani Nature's Nest Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.9993893051605!2d73.61653377424452!3d18.79818056063735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2afd6f1a5acb7%3A0x74f9931797a87670!2sFazlani%20Nature&#39;s%20Nest%20-%20The%20Luxury%20Wellness%20Retreat%20In%20India!5e0!3m2!1sen!2sin!4v1773143849284!5m2!1sen!2sin"
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

              {transportText && (
                <div className="mt-10 p-5 md:p-8 bg-primary/5 rounded-2xl border-l-4 border-l-primary shadow-inner">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <ShieldCheck className="h-7 w-7 text-primary" />
                    </div>
                    <div className="text-center md:text-left w-full">
                      <h4 className="text-xl md:text-2xl font-bold text-primary mb-3">Transportation Services</h4>
                      <div className="max-w-none w-full">
                        <p className="text-sm md:text-base leading-relaxed text-justify md:text-left md:pr-4" style={{ color: "#7F543D" }}>
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
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#234A50" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                  <img
                    src="/Center Images/Fazlani Natures Nest/CTA bottom.jpg"
                    alt="Fazlani Nature's Nest"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-extrabold text-white text-center mb-8 leading-tight tracking-tight">
                    Begin Your Holistic Healing Journey at Fazlani Nature's Nest
                  </h2>
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
                    <a href="tel:+919000000000" className="underline hover:text-white">Call us: +91 90000 00000</a>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                    Begin Your <span className="text-white/90">Holistic Healing Journey</span> at <span className="text-white underline decoration-white/20 underline-offset-8">Fazlani Nature&apos;s Nest</span>
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
                    <a href="tel:+919000000000" className="underline hover:text-white">Call us: +91 90000 00000</a>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Fazlani Natures Nest/CTA bottom.jpg"
                    alt="Fazlani Nature's Nest"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFullGallery && (
        <div
          className="fixed inset-0 bg-[#EDE8D0]/80 backdrop-blur-sm z-50 overflow-auto"
          onClick={() => setShowFullGallery(false)}
        >
          <div className="container mx-auto px-4 py-10" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex items-center justify-center mb-4 pl-16 md:pl-0">
              <Button onClick={() => setShowFullGallery(false)} className="absolute left-0 bg-white text-primary hover:bg-white/90">
                Back
              </Button>
              <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">
                Fazlani Nature's Nest Gallery
              </div>
            </div>

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
                  <img src={img} alt={`Fazlani Nature's Nest ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && (
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
              Fazlani Nature's Nest
            </div>
            <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
              {images.length > 0 && (
                <img
                  src={images[lightboxImage]}
                  alt={`Fazlani Nature's Nest ${lightboxImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Previous
              </Button>
              <Button
                onClick={() => setLightboxImage((prev) => (prev + 1) % images.length) }
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {facilityLightboxOpen && (
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
              Fazlani Nature's Nest Facilities
            </div>
            <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
              {facilityImages.length > 0 && (
                <img
                  src={facilityImages[facilityLightboxImage]}
                  alt={`Fazlani facility ${facilityLightboxImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <button
                onClick={() => setFacilityLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                X
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

      {/* Mobile Floating Buttons */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <>
          <button
            onClick={() => setIsJumpModalOpen(true)}
            className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
          >
            <Search size={18} className="-ml-1" />
            <span>BROWSE</span>
          </button>

          <button
            onClick={() => setQuoteModalOpen(true)}
            className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
          >
            <Phone size={18} className="-ml-1" />
            <span className="hidden md:inline">GET FREE QUOTE</span>
            <span className="md:hidden">QUOTE</span>
          </button>
        </>
      )}

      {/* Desktop Browse Button */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
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

      {/* Browse Drawer */}
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
            <div className="flex justify-between items-start gap-2 mb-3 relative z-10">
              <div className="space-y-0.5 min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[26px] font-extrabold leading-tight tracking-tight whitespace-normal text-white pr-2">
                  Sections of Fazlani
                </h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50 shrink-0 relative z-20"
              >
                <X className="h-6 w-6" />
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
            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em] select-none">
              Holistic Healing Sanctuary
            </p>
          </div>
        </div>
      </div>

      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}

