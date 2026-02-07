import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity,
  Award,
  Brain,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Droplet,
  FileSearch,
  Globe,
  Heart,
  HeartPulse,
  Home,
  Hospital,
  Images,
  Leaf,
  MapPin,
  MessageCircle,
  MessageCircleHeart,
  Pill,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  TreePine,
  TrendingUp,
  Utensils,
  Users,
  UserCheck,
  Video,
  X,
} from "lucide-react";

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

interface TreatmentStep {
  title: string;
  description: string;
  bullets: string[];
}

const renderInlineBold = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, idx) => {
        const m = part.match(/^\*\*([^*]+)\*\*$/);
        if (m) return <strong key={idx}>{m[1]}</strong>;
        return <span key={idx}>{part}</span>;
      })}
    </>
  );
};

const parseCardSection = (text: string): SectionData => {
  const lines = text.split("\n");
  let title = "";
  let description = "";
  const cards: CardData[] = [];

  let currentCard: CardData | null = null;
  let isHeader = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    if (line.startsWith("### ")) {
      title = line.replace("### ", "").trim();
      continue;
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      isHeader = false;
      if (currentCard) {
        cards.push(currentCard);
      }
      currentCard = {
        title: line.replace(/\*\*/g, "").trim(),
        description: "",
        bullets: [],
      };
      continue;
    }

    if (line.startsWith("* ")) {
      if (currentCard) {
        currentCard.bullets.push(line.replace("* ", "").trim());
      }
      continue;
    }

    if (isHeader) {
      description += (description ? " " : "") + line;
    } else if (currentCard) {
      if (currentCard.bullets.length === 0) {
        currentCard.description += (currentCard.description ? " " : "") + line;
      }
    }
  }

  if (currentCard) {
    cards.push(currentCard);
  }

  return { title, description, cards };
};

const parseTreatmentProcess = (text: string) => {
  const lines = text
    .split("\n")
    .map((l) => l.replace(/\r/g, ""));

  let title = "Treatment Process & Patient Journey";
  let intro = "";
  const steps: TreatmentStep[] = [];

  let current: TreatmentStep | null = null;
  let inSteps = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (!inSteps && line.startsWith("**") && line.endsWith("**")) {
      title = line.replace(/\*\*/g, "").trim();
      continue;
    }

    const stepMatch = line.match(/^\d+\.\s*\*\*(.+?)\*\*$/);
    if (stepMatch) {
      inSteps = true;
      if (current) steps.push(current);
      current = {
        title: stepMatch[1].trim(),
        description: "",
        bullets: [],
      };
      continue;
    }

    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "").trim();
      if (current && bullet) current.bullets.push(bullet);
      continue;
    }

    if (!inSteps) {
      intro += (intro ? " " : "") + line;
    } else if (current) {
      current.description += (current.description ? " " : "") + line;
    }
  }

  if (current) steps.push(current);

  return { title, intro, steps };
};

const iconForTitle = (t: string) => {
  const s = t.toLowerCase();

  if (s.includes("integrative") || s.includes("approach") || s.includes("synergy") || s.includes("first"))
    return <Hospital className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("pioneers") || s.includes("renowned") || s.includes("founder") || s.includes("physician") || s.includes("guided") || s.includes("expert") || s.includes("doctors"))
    return <UserCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("nabh") || s.includes("accredited") || s.includes("clinical") || s.includes("standard") || s.includes("recognized") || s.includes("registered"))
    return <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("royalty") || s.includes("luminaries") || s.includes("trusted") || s.includes("global") || s.includes("recognition"))
    return <Star className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("acre") || s.includes("organic") || s.includes("farm") || s.includes("nature") || s.includes("sustainable") || s.includes("environment") || s.includes("lakeside") || s.includes("sanctuary"))
    return <TreePine className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("medicine") || s.includes("unique") || s.includes("pharmacy") || s.includes("remedies") || s.includes("custom") || s.includes("plan"))
    return <Pill className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("rare") || s.includes("complex") || s.includes("conditions") || s.includes("hope") || s.includes("treatment") || s.includes("panchakarma"))
    return <HeartPulse className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("recognized") || s.includes("awarded") || s.includes("travel") || s.includes("prestigious") || s.includes("school") || s.includes("alliance"))
    return <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("lifestyle") || s.includes("transformation") || s.includes("holistic") || s.includes("tools") || s.includes("support") || s.includes("environment"))
    return <Sparkles className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
};

const getFacilityIcon = (t: string) => {
  const s = t.toLowerCase();

  if (s.includes("accommodation") || s.includes("room") || s.includes("suite") || s.includes("stay") || s.includes("private"))
    return <Home className="h-7 w-7 text-white" />;

  if (s.includes("architecture") || s.includes("design") || s.includes("building"))
    return <Building2 className="h-7 w-7 text-white" />;

  if (s.includes("farm") || s.includes("organic") || s.includes("garden") || s.includes("acre") || s.includes("lakeside") || s.includes("sanctuary"))
    return <TreePine className="h-7 w-7 text-white" />;

  if (s.includes("infrastructure") || s.includes("treatment") || s.includes("therapy") || s.includes("pharmacy") || s.includes("ayurvedic"))
    return <Stethoscope className="h-7 w-7 text-white" />;

  if (s.includes("yoga") || s.includes("meditation") || s.includes("shala") || s.includes("hall") || s.includes("mindful"))
    return <Sparkles className="h-7 w-7 text-white" />;

  if (s.includes("dining") || s.includes("cuisine") || s.includes("food") || s.includes("meal") || s.includes("table") || s.includes("sattvic"))
    return <Utensils className="h-7 w-7 text-white" />;

  if (s.includes("recreation") || s.includes("pool") || s.includes("swimming") || s.includes("activity") || s.includes("beach")) {
    if (s.includes("pool") || s.includes("swimming") || s.includes("water") || s.includes("lake")) return <Droplet className="h-7 w-7 text-white" />;
    return <Activity className="h-7 w-7 text-white" />;
  }

  if (s.includes("safety") || s.includes("nabh") || s.includes("standard") || s.includes("medical") || s.includes("hygiene"))
    return <ShieldCheck className="h-7 w-7 text-white" />;

  if (s.includes("services") || s.includes("housekeeping") || s.includes("laundry") || s.includes("guest") || s.includes("transfer") || s.includes("community"))
    return <Users className="h-7 w-7 text-white" />;

  return <Heart className="h-7 w-7 text-white" />;
};

const YanCureYogaRetreat = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [showTopVideoGallery, setShowTopVideoGallery] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [selectedCenterVideo, setSelectedCenterVideo] = useState(0);
  const galleryVideoRef = useRef<HTMLVideoElement>(null);

  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);

  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);

  const [whyChooseData, setWhyChooseData] = useState<SectionData | null>(null);

  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  const [treatmentProcessTitle, setTreatmentProcessTitle] = useState("Treatment Process & Patient Journey");
  const [treatmentProcessIntro, setTreatmentProcessIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<TreatmentStep[]>([]);

  const [facilitiesData, setFacilitiesData] = useState<SectionData | null>(null);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);

  const [teamIntro, setTeamIntro] = useState("");
  const [founder, setFounder] = useState<{ name: string; degrees: string[]; role: string; description: string } | null>(null);
  const [founderExpertise, setFounderExpertise] = useState<string[]>([]);
  const [teamGroups, setTeamGroups] = useState<{ title: string; description: string; items: string[] }[]>([]);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [isTeamAutoPlaying, setIsTeamAutoPlaying] = useState(true);
  const founderImage = "/Center Images/Yan Cure Yoga Retreat/Founder/Founder.jpg";
  const teamImage = "/Center Images/Yan Cure Yoga Retreat/Founder/Team.jpg";

  const [testimonials, setTestimonials] = useState<{
    id: number;
    name: string;
    location: string;
    condition: string;
    title: string;
    review: string;
    rating: number;
    verified: boolean;
  }[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);

  const [insuranceIntro, setInsuranceIntro] = useState("");
  const [insuranceBullets, setInsuranceBullets] = useState<string[]>([]);
  const [paymentBullets, setPaymentBullets] = useState<string[]>([]);
  const [internationalText, setInternationalText] = useState("");

  const [faqItems, setFaqItems] = useState<{ question: string; answer: string }[]>([]);

  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactPhones, setContactPhones] = useState<string[]>([]);
  const [contactEmails, setContactEmails] = useState<string[]>([]);
  const [contactWebsite, setContactWebsite] = useState("");
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [transportText, setTransportText] = useState("");

  const [currentAward, setCurrentAward] = useState(0);
  const [isAwardAutoPlaying, setIsAwardAutoPlaying] = useState(true);

  const awards = [
    {
      title: "ISO 9001:2015 Certification",
      description: "Certified Quality Management System for yoga, Ayurveda, naturopathy, Panchakarma, wellness plans, and massage therapy.",
      image: "/Center Images/Yan Cure Yoga Retreat/Awards/Award 1 (certificate of registration).webp",
    },
    {
      title: "Uttarakhand Wellness Registration",
      description: "Government of Uttarakhand certification of wellness registration under AYUSH, recognizing compliant operations and services.",
      image: "/Center Images/Yan Cure Yoga Retreat/Awards/Award 2 (Government of uttrakhand).webp",
    },
    {
      title: "Udyam Registration Certificate",
      description: "Government of India MSME Udyam registration for Yan Cure Yoga Retreat & Ayurveda Centre as a micro enterprise.",
      image: "/Center Images/Yan Cure Yoga Retreat/Awards/Award 3 (Udyyam regitration certificate).webp",
    },
    {
      title: "Nadi Pariksha Workshop Participation",
      description: "Certificate of participation for advanced Nadi Pariksha & Chikitsa Sutra practical workshop (Nadi Vaidya Gurukul).",
      image: "/Center Images/Yan Cure Yoga Retreat/Awards/Award 4 (certificate of partipation).webp",
    },
    {
      title: "Importer-Exporter Code (IEC)",
      description: "Directorate General of Foreign Trade certificate confirming IEC issuance for Yan Cure Yoga Retreat & Ayurveda Centre.",
      image: "/Center Images/Yan Cure Yoga Retreat/Awards/Award 5 (certificate of partipation).webp",
    },
  ];

  const [maxAwardIndex, setMaxAwardIndex] = useState(awards.length - 1);

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

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Yan Cure" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "awards", title: "Awards & Media" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "F&Q" },
    { id: "contact", title: "Contact Information" },
  ];

  const jumpToSection = (id: string) => {
    setIsJumpModalOpen(false);
    setTimeout(() => {
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
    }, 300);
  };

  useEffect(() => {
    fetch("/Center Images/Yan Cure Yoga Retreat/Photo Gallery/Photo Gallery Links.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        setImages(lines);
      })
      .catch((err) => console.error("Error loading Yan Cure photo links:", err));

    fetch("/Center Videos/Yan Cure Yoga Retreat/Video Links.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        setVideos(lines);
      })
      .catch((err) => console.error("Error loading Yan Cure video links:", err));

    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Wellness Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inPrograms = false;

        for (const line of lines) {
          if (!line) continue;

          if (line.startsWith("###")) {
            continue;
          }

          if (line.startsWith("**") && line.endsWith("**")) {
            inPrograms = true;
            if (current) items.push(current);
            current = {
              title: line.replace(/\*\*/g, ""),
              description: "",
              bullets: [],
            };
            continue;
          }

          if (!inPrograms) {
            intro += (intro ? " " : "") + line;
            continue;
          }

          if (line.startsWith("*")) {
            if (current) current.bullets.push(line.replace(/^\*\s*/, ""));
          } else {
            if (current) {
              current.description += (current.description ? " " : "") + line;
            }
          }
        }

        if (current) items.push(current);
        setWellnessIntro(intro);
        setWellnessPrograms(items);
      })
      .catch((err) => console.error("Error loading Yan Cure wellness programs:", err));

    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Medical Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inPrograms = false;

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("###")) {
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            inPrograms = true;
            if (current) items.push(current);
            current = {
              title: line.replace(/\*\*/g, ""),
              description: "",
              bullets: [],
            };
            continue;
          }
          if (!inPrograms) {
            intro += (intro ? " " : "") + line;
            continue;
          }
          if (line.startsWith("*")) {
            if (current) current.bullets.push(line.replace(/^\*\s*/, ""));
          } else {
            if (current) {
              current.description += (current.description ? " " : "") + line;
            }
          }
        }

        if (current) items.push(current);
        setMedicalIntro(intro);
        setMedicalPrograms(items);
      })
      .catch((err) => console.error("Error loading Yan Cure medical programs:", err));

    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Why Choose Yan Cure.txt")
      .then((res) => res.text())
      .then((text) => setWhyChooseData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Yan Cure why choose:", err));

    fetch("/Center Videos/Yan Cure Yoga Retreat/YT-iframe.txt")
      .then((res) => res.text())
      .then((text) => {
        const matches = Array.from(text.matchAll(/src=\"([^\"]+)\"/g));
        const urls = matches.map((m) => (m[1] || "").trim()).filter((u) => u.length > 0);
        setTestimonialVideos(urls);
      })
      .catch((err) => console.error("Error loading Yan Cure testimonial iframes:", err));

    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseTreatmentProcess(text);
        setTreatmentProcessTitle(parsed.title);
        setTreatmentProcessIntro(parsed.intro);
        setTreatmentSteps(parsed.steps);
      })
      .catch((err) => console.error("Error loading Yan Cure treatment process:", err));

    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => setFacilitiesData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Yan Cure facilities:", err));

    fetch("/Center Images/Yan Cure Yoga Retreat/Facilities/Facilities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        setFacilityImages(lines);
      })
      .catch((err) => console.error("Error loading Yan Cure facilities images:", err));

    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => {
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
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2);
            if (/leadership & expertise|core expertise/i.test(t)) {
              section = "expertise";
              continue;
            }
            if (/^dr\b/i.test(t) && name === "") {
              name = t;
              section = "founder";
              continue;
            }
            if (currentGroup) groups.push(currentGroup);
            currentGroup = { title: t, description: "", items: [] };
            section = "group";
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (section === "expertise") {
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
            if (line.includes("|") && degrees.length === 0) {
              const parts = line.split("|").map((p) => p.trim()).filter(Boolean);
              if (parts[0]) degrees.push(parts[0]);
              if (!role && parts[1]) role = parts[1];
              continue;
            }
            if (/Founder|Director|CEO|Physician/i.test(line) && role === "") {
              role = line;
              continue;
            }
            fdesc = fdesc ? `${fdesc} ${line}` : line;
            continue;
          }
          if (section === "group" && currentGroup) {
            currentGroup.description = currentGroup.description ? `${currentGroup.description} ${line}` : line;
            continue;
          }
        }
        if (currentGroup) groups.push(currentGroup);
        setTeamIntro(intro);
        setFounder(name ? { name, degrees, role, description: fdesc } : null);
        setFounderExpertise(expertise);
        setTeamGroups(groups);
      })
      .catch((err) => console.error("Error loading Yan Cure founder content:", err));

    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: {
          id: number;
          name: string;
          location: string;
          condition: string;
          title: string;
          review: string;
          rating: number;
          verified: boolean;
        }[] = [];
        let current: {
          id: number;
          name: string;
          location: string;
          condition: string;
          title: string;
          review: string;
          rating: number;
          verified: boolean;
        } | null = null;
        let idCounter = 1;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
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
            if (ratingMatch) current.rating = parseInt(ratingMatch[1]);
            continue;
          }

          if (current && line && !line.startsWith("**") && !line.startsWith("*")) {
            current.review = current.review ? current.review + " " + line : line;
          }
        }

        if (current) items.push(current);
        setTestimonials(items);
      })
      .catch((err) => console.error("Error loading Yan Cure patient reviews:", err));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newMax = isMobile ? awards.length - 1 : 2;
      setMaxAwardIndex(newMax);
      setCurrentAward((prev) => (prev > newMax ? 0 : prev));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [awards.length]);

  useEffect(() => {
    if (!isAwardAutoPlaying) return;
    const id = setInterval(() => {
      setCurrentAward((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [isAwardAutoPlaying, maxAwardIndex]);

  useEffect(() => {
    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Insurance & Payment Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const ins: string[] = [];
        const pay: string[] = [];
        let intl = "";
        let section: "intro" | "ins" | "pay" | "intl" = "intro";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            section = "intro";
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("insurance")) {
              section = "ins";
              continue;
            }
            if (t.includes("payment")) {
              section = "pay";
              continue;
            }
            if (t.includes("international")) {
              section = "intl";
              continue;
            }
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (section === "ins") ins.push(bullet);
            else if (section === "pay") pay.push(bullet);
            continue;
          }
          if (section === "intro") intro = intro ? `${intro} ${line}` : line;
          else if (section === "intl") intl = intl ? `${intl} ${line}` : line;
        }

        setInsuranceIntro(intro);
        setInsuranceBullets(ins);
        setPaymentBullets(pay);
        setInternationalText(intl);
      })
      .catch((err) => console.error("Error loading Yan Cure insurance content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Frequently Asked Questions.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: { question: string; answer: string }[] = [];
        let currentQ = "";
        let currentA = "";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            if (currentQ) items.push({ question: currentQ, answer: currentA });
            currentQ = line.slice(2, -2).replace(/^\d+\.\s*/, "");
            currentA = "";
            continue;
          }
          currentA = currentA ? `${currentA} ${line}` : line;
        }

        if (currentQ) items.push({ question: currentQ, answer: currentA });
        setFaqItems(items);
      })
      .catch((err) => console.error("Error loading Yan Cure FAQs:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Yan Cure Yoga Retreat/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let section: "none" | "address" | "phones" | "emails" | "website" | "distances" | "transport" = "none";
        const addr: string[] = [];
        const phones: string[] = [];
        const emails: string[] = [];
        const dists: string[] = [];
        let site = "";
        let transport = "";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            section = "none";
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("address")) {
              section = "address";
              continue;
            }
            if (t.includes("phone")) {
              section = "phones";
              continue;
            }
            if (t.includes("email")) {
              section = "emails";
              continue;
            }
            if (t.includes("website")) {
              section = "website";
              continue;
            }
            if (t.includes("distance")) {
              section = "distances";
              continue;
            }
            if (t.includes("transportation")) {
              section = "transport";
              continue;
            }
          }

          if (section === "address") {
            const clean = line.replace(/<br\s*\/?\s*>/gi, "\n");
            clean
              .split("\n")
              .map((s) => s.trim())
              .filter(Boolean)
              .forEach((s) => addr.push(s));
            continue;
          }
          if (section === "phones") {
            if (/^\*/.test(line)) phones.push(line.replace(/^\*+\s*/, ""));
            else if (line) phones.push(line);
            continue;
          }
          if (section === "emails") {
            if (/^\*/.test(line)) emails.push(line.replace(/^\*+\s*/, ""));
            else if (line) emails.push(line);
            continue;
          }
          if (section === "website") {
            site = site ? `${site} ${line}` : line;
            continue;
          }
          if (section === "distances") {
            if (line.startsWith("*")) dists.push(line.replace(/^\*+\s*/, ""));
            continue;
          }
          if (section === "transport") {
            transport = transport ? `${transport} ${line}` : line;
            continue;
          }
        }

        setContactAddress(addr);
        setContactPhones(phones);
        setContactEmails(emails);
        setContactWebsite(site);
        setContactDistances(dists);
        setTransportText(transport);
      })
      .catch((err) => console.error("Error loading Yan Cure contact info:", err));
  }, []);

  useEffect(() => {
    if (!isTeamAutoPlaying || teamGroups.length === 0) return;
    const id = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isTeamAutoPlaying, teamGroups.length]);

  const prevTeam = () => {
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((prev) => (prev - 1 + teamGroups.length) % teamGroups.length);
  };

  const nextTeam = () => {
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
  };

  useEffect(() => {
    if (!isReviewAutoPlaying || testimonials.length === 0) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isReviewAutoPlaying, testimonials.length]);

  const goToPreviousReview = () => {
    setIsReviewAutoPlaying(true);
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextReview = () => {
    setIsReviewAutoPlaying(true);
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const goToPreviousAward = () => {
    setIsAwardAutoPlaying(true);
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };

  const goToNextAward = () => {
    setIsAwardAutoPlaying(true);
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );

  useEffect(() => {
    if (facilityImages.length === 0) return;
    const interval = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [facilityImages.length]);

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
      observer.disconnect();
    };
  }, []);

  const buildTestimonialIframeSrc = (baseUrl: string) => {
    if (!baseUrl) return "";
    const joiner = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${joiner}autoplay=${isTestimonialsInView ? "1" : "0"}&mute=0&rel=0`;
  };

  const iconForTreatmentStep = (index: number) => {
    switch (index) {
      case 0:
        return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 1:
        return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 2:
        return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 3:
        return <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      case 4:
        return <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
      default:
        return <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
  };

  useEffect(() => {
    const videoElement = galleryVideoRef.current;
    if (!videoElement) return;

    videoElement.volume = 0.5;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch((error) => {
              console.log("Autoplay with sound prevented:", error);
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
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [selectedCenterVideo]);

  const wellnessIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("detox") || s.includes("purification") || s.includes("panchakarma") || s.includes("shudha")) {
      return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("stress") || s.includes("mental") || s.includes("prakrithi")) {
      return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("anti-aging") || s.includes("rejuvenation") || s.includes("beauty") || s.includes("shakthi") || s.includes("skin")) {
      return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("weight") || s.includes("shareera") || s.includes("metabolism")) {
      return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("immunity")) {
      return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("taste") || s.includes("introduction") || s.includes("mindful") || s.includes("digital")) {
      return <Leaf className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("addict") || s.includes("addiction")) return <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("cancer")) return <Hospital className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("metabolic") || s.includes("lifestyle") || s.includes("diabetes") || s.includes("hypertension") || s.includes("cholesterol") || s.includes("weight")) {
      return <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("musculoskeletal") || s.includes("neurological") || s.includes("arthritis") || s.includes("stroke") || s.includes("migraine") || s.includes("spine") || s.includes("disc") || s.includes("back")) {
      return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("mental") || s.includes("emotional") || s.includes("anxiety") || s.includes("sleep")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("respiratory") || s.includes("allergic") || s.includes("allergy") || s.includes("asthma") || s.includes("sinus")) {
      return <TreePine className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("skin") || s.includes("dermat") || s.includes("psoriasis") || s.includes("eczema")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("reproductive") || s.includes("gynec") || s.includes("gynaec") || s.includes("women") || s.includes("infert")) {
      return <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("pediatric") || s.includes("development")) {
      return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("digest")) {
      return <Pill className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setLightboxImage((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  useEffect(() => {
    if (!showFullGallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowFullGallery(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showFullGallery]);

  const goToPrevious = () => {
    if (images.length === 0) return;
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    if (images.length === 0) return;
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const thumbnailImages = images.slice(0, 5);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Yan Cure</h1>
                <p className="text-xl mb-4 opacity-90">Yoga Retreat & Ayurveda Centre</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Rishikesh, Uttarakhand</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(500+ reviews)</span>
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

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12" id="gallery">
            <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                <Button
                  variant={!showTopVideoGallery ? "default" : "secondary"}
                  size="lg"
                  onClick={() => setShowTopVideoGallery(false)}
                  className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${!showTopVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"}`}
                >
                  Photo Gallery
                </Button>
                <Button
                  variant={showTopVideoGallery ? "default" : "secondary"}
                  size="lg"
                  onClick={() => setShowTopVideoGallery(true)}
                  className={`flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${showTopVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"}`}
                >
                  <Video className="h-4 w-4 md:h-6 md:w-6" />
                  Video Gallery
                </Button>
              </div>
            </div>

            {!showTopVideoGallery ? (
              <>
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  {images.length > 0 ? (
                    <img
                      src={images[selectedImage]}
                      alt={`Yan Cure ${selectedImage + 1}`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-black/10" />
                  )}

                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                    disabled={images.length === 0}
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>

                  <button
                    onClick={goToNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                    disabled={images.length === 0}
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>

                  {images.length > 0 && (
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      {selectedImage + 1} / {images.length}
                    </div>
                  )}

                  {isAutoPlaying && images.length > 0 && (
                    <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Auto
                    </div>
                  )}
                </div>

                <div className="flex flex-col md:flex-row gap-3 mb-6">
                  <div
                    className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                    onClick={() => {
                      if (thumbnailImages.length === 0) return;
                      setLightboxImage(0);
                      setLightboxOpen(true);
                    }}
                  >
                    {thumbnailImages[0] ? (
                      <img
                        src={thumbnailImages[0]}
                        alt="Yan Cure 1"
                        className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-[220px] md:h-[380px] bg-black/10" />
                    )}
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
                            if (actualIndex < 0) return;
                            setLightboxImage(actualIndex);
                            setLightboxOpen(true);
                          }}
                        >
                          <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "100%" }}>
                            <img
                              src={img}
                              alt={`Yan Cure ${actualIndex + 1}`}
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
                    {videos[selectedVideo] && <source src={videos[selectedVideo]} type="video/mp4" />}
                  </video>
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
                      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-2 ring-primary" : ""}`}
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

          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-strong:text-primary">
              <MarkdownContent
                contentPath="/content/Top Centers/Yan Cure Yoga Retreat/main content.txt"
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

          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="wellness">
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">500+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                  Happy Patients
                </div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.5/5</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                  Average Rating
                </div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">98%</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                  Success Rate
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 border-green-700 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Wellness Programs</h1>
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

          <div className="mb-12 rounded-3xl px-6 py-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="medical">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-blue-700 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Medical Programs</h2>
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

          <div className="mb-12" id="videos">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Video Gallery of Yan Cure</h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Experience the serene atmosphere and holistic healing journey at Yan Cure through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    <video
                      ref={galleryVideoRef}
                      key={videos[selectedCenterVideo]}
                      src={videos[selectedCenterVideo]}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                <button
                  onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                  aria-label="Previous video"
                  disabled={videos.length === 0}
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                  className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                  aria-label="Next video"
                  disabled={videos.length === 0}
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="flex md:hidden items-center justify-between mt-4 px-6">
                <Button
                  onClick={() => setSelectedCenterVideo((prev) => (prev - 1 + videos.length) % videos.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  disabled={videos.length === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={() => setSelectedCenterVideo((prev) => (prev + 1) % videos.length)}
                  className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  disabled={videos.length === 0}
                >
                  Next
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCenterVideo(index)}
                    className={`transition-all ${index === selectedCenterVideo ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12" id="why-choose">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {whyChooseData?.title || "Why Choose Yan Cure"}
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
                        <h3 className="text-base md:text-lg font-bold text-primary leading-tight flex-1 min-h-[2rem] md:min-h-[2.5rem] flex items-center">
                          {it.title}
                        </h3>
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

          <div className="mb-12" id="testimonial-videos" ref={testimonialSectionRef}>
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of Yan Cure Center
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
                    <iframe
                      key={testimonialVideos[selectedTestimonialVideo]}
                      src={buildTestimonialIframeSrc(testimonialVideos[selectedTestimonialVideo])}
                      title="Yan Cure Testimonial Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

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

              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {testimonialVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTestimonialVideo(index)}
                    className={`transition-all ${index === selectedTestimonialVideo ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">{treatmentProcessTitle}</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {treatmentProcessIntro}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {treatmentSteps.map((step, idx) => {
                const isLast = idx === treatmentSteps.length - 1;
                const stepNumber = idx + 1;

                return (
                  <div key={idx} className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                        {stepNumber}
                      </div>
                      {!isLast && <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>}
                    </div>

                    <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                      <CardContent className="p-4 md:p-6">
                        <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                          {stepNumber}
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            {iconForTreatmentStep(idx)}
                          </div>
                          <div>
                            <h3 className="text-base md:text-xl font-bold text-primary">{step.title}</h3>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Step {stepNumber}</span>
                          </div>
                        </div>

                        <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                          {step.description}
                        </p>

                        {step.bullets.length > 0 && (
                          <ul className="mt-3 space-y-1.5 md:space-y-2">
                            {step.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                                <span className="text-primary mt-1">✓</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-12" id="cta">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src="/Center Images/Yan Cure Yoga Retreat/CTA.webp"
                    alt="Yan Cure Wellness Center"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: "#7F543D" }}>
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
                  <div className="mt-4 flex items-center justify-center gap-2" style={{ color: "#7F543D" }}>
                    <Phone className="h-4 w-4 text-red-600" />
                    <a href="tel:+918028432737" className="underline hover:text-primary">
                      Call us: +91 80 2843 2737
                    </a>
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
                    <a href="tel:+918028432737" className="underline hover:text-primary">
                      Call us: +91 80 2843 2737
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Yan Cure Yoga Retreat/CTA.webp"
                    alt="Yan Cure Wellness Center"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

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
                disabled={facilityImages.length === 0}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={() => setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length)}
                className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label="Next facility image"
                disabled={facilityImages.length === 0}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="overflow-hidden px-10 md:px-12">
                <div className="md:hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentFacilityImage * 100}%)`,
                    }}
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
                            alt={`Yan Cure Facility ${index + 1}`}
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
                      transform: `translateX(-${Math.min(currentFacilityImage, facilityImages.length - 5) * 20}%)`,
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
                            alt={`Yan Cure Facility ${index + 1}`}
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
                    className={`transition-all ${index === currentFacilityImage ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
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
                  <h4 className="text-lg font-semibold text-primary mb-2">All Facilities Meet International Healthcare Standards</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Every facility at Yan Cure is designed and maintained with high standards of safety, hygiene, and quality care,
                    ensuring you receive authentic holistic treatment in a serene, naturally therapeutic environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="team">
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h1>
              {teamIntro && <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>{teamIntro}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-stretch">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                <CardContent className="p-4 md:p-8 h-full md:h-[480px] flex flex-col min-h-0">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img src={founderImage} alt="Founder" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{founder?.name || "Founder"}</h3>
                      {founder?.degrees && founder.degrees.length > 0 && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>{founder.degrees.join(" • ")}</p>
                      )}
                      {founder?.role && <p className="text-xs md:text-sm mt-1 text-primary/70">{founder.role}</p>}
                    </div>
                  </div>
                  <div className="flex-1 min-h-0 overflow-y-auto pr-1">
                    {founder?.description && (
                      <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>{founder.description}</p>
                    )}
                  </div>
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
                          <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 leading-snug break-words whitespace-normal">{teamGroups[currentTeamSlide]?.title || "Team"}</h3>
                      </div>
                    </div>
                    {teamGroups[currentTeamSlide]?.description && (
                      <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>{teamGroups[currentTeamSlide].description}</p>
                    )}
                    <ul className="space-y-2.5">
                      {(teamGroups[currentTeamSlide]?.items || []).map((it, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">•</span>
                          <span>{renderInlineBold(it)}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {testimonials.length > 0 && (
            <div className="mb-12" id="reviews">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
                <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                  Hear from our patients about their transformational healing journeys
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
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">{testimonials[currentReview].title}</h3>
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
                            <h4 className="text-base md:text-xl font-semibold text-primary">{testimonials[currentReview].name}</h4>
                            {testimonials[currentReview].verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">✓ Verified</span>
                            )}
                          </div>
                          <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                            {testimonials[currentReview].location}{" "}
                            {testimonials[currentReview].condition && `• ${testimonials[currentReview].condition}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 md:gap-3">
                        {renderStars(testimonials[currentReview].rating)}
                        <span className="text-xs md:text-sm font-semibold text-primary">{testimonials[currentReview].rating}.0</span>
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

                {isReviewAutoPlaying && (
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Auto
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsReviewAutoPlaying(true);
                      setCurrentReview(idx);
                    }}
                    className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"}`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mb-12" id="awards">
            <div className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards and Media</h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                Recognitions and certifications that reflect our commitment to authentic wellness and quality care
              </p>
            </div>

            <div className="relative group max-w-5xl mx-auto">
              <div className="overflow-hidden px-4 md:px-10">
                <div className="md:hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentAward * 100}%)` }}>
                    {awards.map((award, i) => (
                      <div key={i} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                          <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">{award.title}</h4>
                            <p className="text-sm italic line-clamp-3" style={{ color: "#7F543D" }}>
                              "{award.description}"
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentAward * (100 / 3)}%)` }}>
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
                            <h4 className="text-xl font-bold text-primary mb-3">{award.title}</h4>
                            <p className="text-base italic" style={{ color: "#7F543D" }}>
                              "{award.description}"
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={goToPreviousAward}
                className="absolute left-8 md:-left-4 top-[57%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                aria-label="Previous award"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={goToNextAward}
                className="absolute right-8 md:-right-4 top-[57%] md:top-1/2 -translate-y-1/2 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                aria-label="Next award"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="flex justify-center gap-2 mt-8">
                {awards.slice(0, maxAwardIndex + 1).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setIsAwardAutoPlaying(true);
                      setCurrentAward(i);
                    }}
                    className={`transition-all duration-300 ${i === currentAward ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                    aria-label={`Go to award ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {insuranceBullets.length > 0 && (
            <div className="mb-12" id="insurance">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Info</h2>
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>{insuranceIntro}</p>
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
                      {insuranceBullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">✓</span>
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
                      <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                    </div>
                    <ul className="space-y-3">
                      {paymentBullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                          <span className="text-primary mt-1">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              {internationalText && (
                <Card className="mt-6 bg-primary/5 border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">For International Patients</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>{internationalText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {faqItems.length > 0 && (
            <div className="mb-12" id="faq">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <MessageCircleHeart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                  Find answers to common questions about treatments, facilities, and your healing journey
                </p>
              </div>
              <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
                {faqItems.map((it, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500 transition-colors">
                      <span className="text-lg font-semibold text-primary text-left">{it.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4 pb-6 bg-white">
                      <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>{it.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {contactAddress.length > 0 && (
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
                            title="Yan Cure Yoga Retreat Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.4177054449747!2d78.25905977463218!3d30.053559118140498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909173f10633013%3A0x13c870ee662edecf!2sYan%20Cure%20Yoga%20Retreat%20%26%20Ayurveda%20Centre!5e0!3m2!1sen!2sin!4v1770106099959!5m2!1sen!2sin"
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
          )}

          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#234A50" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                  <img
                    src="/Center Images/Yan Cure Yoga Retreat/CTA bottom.jpg"
                    alt="Yan Cure Yoga Retreat"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-bold text-white text-center mb-4">Begin Your Holistic Healing Journey at Yan Cure Yoga Retreat</h2>
                  <div className="space-y-3">
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
                  <div className="mt-4 flex items-center justify-center gap-2 text-white/90 text-sm">
                    <Phone className="h-4 w-4 text-red-400" />
                    <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Begin Your Holistic Healing Journey at Yan Cure Yoga Retreat</h2>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" className="rounded-full px-6 bg-white text-primary hover:bg-white/90" onClick={() => setQuoteModalOpen(true)}>
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-6 border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500" onClick={() => setQuoteModalOpen(true)}>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-white/90">
                    <Phone className="h-5 w-5 text-red-400" />
                    <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Yan Cure Yoga Retreat/CTA bottom.jpg"
                    alt="Yan Cure Yoga Retreat"
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

      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Search size={18} className="-ml-1" />
          <span>BROWSE</span>
        </button>
      )}

      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <button
          onClick={() => setQuoteModalOpen(true)}
          className="fixed bottom-6 right-4 z-50 bg-[#C68D6A] text-white rounded-full py-3.5 w-[140px] md:w-auto md:px-6 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Phone size={18} className="-ml-1" />
          <span className="hidden md:inline">GET FREE QUOTE</span>
          <span className="md:hidden">QUOTE</span>
        </button>
      )}

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

      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? "visible" : "invisible"}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? "opacity-100" : "opacity-0"}`}
        />

        <div
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          <div className="p-4 pb-4 bg-[#2F5B63] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[26px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">Sections of Yan Cure</h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50"
                title="Close Menu"
              >
                <X className="h-6 w-6 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Directly navigate to any section on this page."</p>
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
                    <span className="text-xs font-black text-primary group-hover:text-white transition-all duration-200">{(idx + 1).toString().padStart(2, "0")}</span>
                  </div>
                  <span className="text-sm md:text-base font-bold text-primary group-hover:text-white transition-all duration-200 text-left">{section.title}</span>
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
            <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em] select-none">Holistic Healing Sanctuary</p>
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
                Yan Cure Gallery
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
                  <img src={img} alt={`Yan Cure ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
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
            disabled={images.length === 0}
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
            disabled={images.length === 0}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Yan Cure Yoga Retreat</div>
            <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
              {images[lightboxImage] && (
                <img
                  src={images[lightboxImage]}
                  alt={`Yan Cure ${lightboxImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                ✕
              </button>
              {images.length > 0 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {lightboxImage + 1} / {images.length}
                </div>
              )}
            </div>
            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                disabled={images.length === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                disabled={images.length === 0}
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
            disabled={facilityImages.length === 0}
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
            disabled={facilityImages.length === 0}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Yan Cure Facilities & Amenities</div>
            <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
              {facilityImages[facilityLightboxImage] && (
                <img
                  src={facilityImages[facilityLightboxImage]}
                  alt={`Yan Cure Facility ${facilityLightboxImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <button
                onClick={() => setFacilityLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                ✕
              </button>
              {facilityImages.length > 0 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {facilityLightboxImage + 1} / {facilityImages.length}
                </div>
              )}
            </div>
            <div className="flex md:hidden items-center justify-between mt-4">
              <Button
                onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                disabled={facilityImages.length === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                disabled={facilityImages.length === 0}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YanCureYogaRetreat;
