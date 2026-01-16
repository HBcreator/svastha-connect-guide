import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  Droplet,
  Brain,
  Sparkles,
  Activity,
  ShieldCheck,
  Leaf,
  Heart,
  Phone,
  Hospital,
  Award,
  HeartPulse,
  Pill,
  TreePine,
  UserCheck,
  Stethoscope,
  ClipboardList,
  FileSearch,
  Utensils,
  Home,
  Building2,
  ChevronLeft,
  ChevronRight,
  Images,
  TrendingUp,
  Users,
  MapPin,
  Star,
  Video,
  MessageCircle,
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

interface FounderTeamCardData {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

interface FounderTeamSectionData {
  title: string;
  description: string;
  cards: FounderTeamCardData[];
}

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

const parseFounderTeamSection = (text: string): FounderTeamSectionData => {
  const lines = text.split("\n");
  let title = "";
  let description = "";
  const cards: FounderTeamCardData[] = [];

  let currentCard: FounderTeamCardData | null = null;
  let isHeader = true;

  const pushCard = () => {
    if (currentCard) cards.push(currentCard);
    currentCard = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();
    if (!line) continue;

    if (line.startsWith("### ")) {
      title = line.replace("### ", "").trim();
      continue;
    }

    if (line.startsWith("**") && line.endsWith("**")) {
      const heading = line.replace(/\*\*/g, "").trim();

      // In the Ayurmana content file, this is an internal sub-heading of the founder card,
      // not a separate card.
      if (heading.toLowerCase() === "leadership & expertise" && currentCard) {
        isHeader = false;
        continue;
      }

      isHeader = false;
      pushCard();
      currentCard = {
        title: heading,
        subtitle: "",
        description: "",
        bullets: [],
      };
      continue;
    }

    if (line.startsWith("*")) {
      if (currentCard) {
        currentCard.bullets.push(line.replace(/^\*+\s*/, "").trim());
      }
      continue;
    }

    if (isHeader) {
      description += (description ? " " : "") + line;
      continue;
    }

    if (currentCard) {
      if (!currentCard.subtitle) {
        currentCard.subtitle = line;
        continue;
      }
      currentCard.description += (currentCard.description ? " " : "") + line;
    }
  }

  pushCard();

  return { title, description, cards };
};

const renderBoldText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((p, idx) => {
    const trimmed = p.trim();
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      return <strong key={idx}>{trimmed.replace(/\*\*/g, "")}</strong>;
    }
    return <span key={idx}>{p}</span>;
  });
};

const iconForTitle = (t: string) => {
  const s = t.toLowerCase();

  if (s.includes("integrative") || s.includes("approach") || s.includes("synergy") || s.includes("first"))
    return <Hospital className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("pioneers") || s.includes("renowned") || s.includes("founder") || s.includes("expert") || s.includes("doctors"))
    return <UserCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("nabh") || s.includes("accredited") || s.includes("clinical") || s.includes("standard"))
    return <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("royalty") || s.includes("luminaries") || s.includes("trusted") || s.includes("global") || s.includes("recognition"))
    return <Star className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("acre") || s.includes("organic") || s.includes("farm") || s.includes("nature") || s.includes("sustainable") || s.includes("environment"))
    return <TreePine className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("medicine") || s.includes("unique") || s.includes("pharmacy") || s.includes("remedies") || s.includes("custom"))
    return <Pill className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("rare") || s.includes("complex") || s.includes("conditions") || s.includes("hope") || s.includes("treatment"))
    return <HeartPulse className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("recognized") || s.includes("awarded") || s.includes("travel") || s.includes("prestigious"))
    return <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  if (s.includes("lifestyle") || s.includes("transformation") || s.includes("holistic") || s.includes("tools"))
    return <Sparkles className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;

  return <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />;
};

export default function AyurmanaCenter() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<
    { title: string; description: string; bullets: string[] }[]
  >([]);

  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<
    { title: string; description: string; bullets: string[] }[]
  >([]);

  const [whyChooseData, setWhyChooseData] = useState<SectionData | null>(null);

  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<
    { title: string; description: string; bullets: string[] }[]
  >([]);

  const [facilitiesData, setFacilitiesData] = useState<SectionData | null>(null);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);

  const [founderTeamData, setFounderTeamData] = useState<FounderTeamSectionData | null>(null);

  const [selectedImage, setSelectedImage] = useState(0);
  const [showTopVideoGallery, setShowTopVideoGallery] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

  const [selectedVideo, setSelectedVideo] = useState(0);
  const [isVideoGalleryInView, setIsVideoGalleryInView] = useState(false);
  const videoGallerySectionRef = useRef<HTMLDivElement>(null);

  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  const withYouTubeParams = (baseSrc: string, params: Record<string, string>) => {
    const [base, existingQuery] = baseSrc.split("?");
    const existing = new URLSearchParams(existingQuery || "");

    Object.entries(params).forEach(([k, v]) => {
      existing.set(k, v);
    });

    const q = existing.toString();
    return q ? `${base}?${q}` : base;
  };

  const images = [
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%201.jpg",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%202.jpg",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%203.jpg",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%204.webp",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%205.jpg",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%206.webp",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%207.jpg",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%208.jpg",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%209.jpg",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%2010.webp",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%2011.webp",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%2012.webp",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%2013.jpg",
    "https://Savastha.b-cdn.net/Centers/Ayurmana%20Ayurvedic%20Center/Images/Photo%20Galley/img%2014%20-%20Copy.jpg",
  ];

  const videoEmbedSrc = "https://www.youtube.com/embed/gR3t_yotVog?si=s5l3kcWMl_XL4tcq";

  const videos = [videoEmbedSrc];

  const testimonialVideos = [
    "https://www.youtube.com/embed/gR3t_yotVog?si=s5l3kcWMl_XL4tcq",
    "https://www.youtube.com/embed/YsSPR0nvuvw?si=x-h-FXoCDx1ttxqR",
    "https://www.youtube.com/embed/g0jDddBhfOs?si=qScuDgw36MN3ec81",
    "https://www.youtube.com/embed/SYjjIADWXMk?si=wpzpkIqprdOCB9y8",
    "https://www.youtube.com/embed/o3gjE6jQ7NY?si=i6h3oaR-s4YRI9y9",
    "https://www.youtube.com/embed/gR3t_yotVog?si=tX5KE8v0ikkgaVTd",
    "https://www.youtube.com/embed/giwjMnPcK70?si=yp7PjExXVK4hx6EJ",
    "https://www.youtube.com/embed/wfLwpOt3xF8?si=KGK1SPY4wYGv_JCG",
    "https://www.youtube.com/embed/xg2nT59Vj_s?si=Rt1pk1JuxJiAwgcb",
    "https://www.youtube.com/embed/6nDO0U1feP8?si=hoM8WSOcUPhBzwx_",
    "https://www.youtube.com/embed/B1MTyTcW088?si=n_i4SxrdT41Ucmoq",
    "https://www.youtube.com/embed/CgeLJx21qN4?si=TPXAlXAtp5GdVpxG",
    "https://www.youtube.com/embed/9-ndvp6sdMs?si=hhMT0igJNB62hLHg",
    "https://www.youtube.com/embed/YOiCvI6P8B0?si=XrAFVW7NqlKJsk8-",
  ];

  const thumbnailImages = images.slice(0, 5);

  useEffect(() => {
    fetch("/content/Top Centers/Ayurmana/Wellness programs.txt")
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
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Ayurmana/Medical Programs.txt")
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
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Ayurmana/Why Choose Ayurmana.txt")
      .then((res) => res.text())
      .then((text) => setWhyChooseData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Why Choose:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Ayurmana/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inSteps = false;

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inSteps = false;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
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

        if (current) items.push(current);
        setTreatmentIntro(intro);
        setTreatmentSteps(items);
      })
      .catch((err) => console.error("Error loading Treatment Process:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Ayurmana/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => setFacilitiesData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Facilities:", err));

    fetch("/Center Images/Ayurmana center/facilities and amenities/Facilities links.txt")
      .then((res) => res.text())
      .then((text) => {
        const imgs = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setFacilityImages(imgs);
      })
      .catch((err) => console.error("Error loading Facilities images:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Ayurmana/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => setFounderTeamData(parseFounderTeamSection(text)))
      .catch((err) => console.error("Error loading Founder & Team Info:", err));
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

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  useEffect(() => {
    if (facilityImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [facilityImages.length]);

  const getFacilityIcon = (t: string) => {
    const s = t.toLowerCase();

    if (s.includes("accommodation") || s.includes("room") || s.includes("suite") || s.includes("stay") || s.includes("private"))
      return <Home className="h-7 w-7 text-white" />;

    if (s.includes("architecture") || s.includes("design") || s.includes("building"))
      return <Building2 className="h-7 w-7 text-white" />;

    if (s.includes("farm") || s.includes("organic") || s.includes("garden") || s.includes("acre"))
      return <TreePine className="h-7 w-7 text-white" />;

    if (s.includes("infrastructure") || s.includes("treatment") || s.includes("therapy") || s.includes("pharmacy"))
      return <Stethoscope className="h-7 w-7 text-white" />;

    if (s.includes("yoga") || s.includes("meditation") || s.includes("hall") || s.includes("mindful"))
      return <Sparkles className="h-7 w-7 text-white" />;

    if (s.includes("dining") || s.includes("cuisine") || s.includes("food") || s.includes("meal") || s.includes("table"))
      return <Utensils className="h-7 w-7 text-white" />;

    if (s.includes("recreation") || s.includes("pool") || s.includes("swimming") || s.includes("activity")) {
      if (s.includes("pool") || s.includes("swimming") || s.includes("water")) return <Droplet className="h-7 w-7 text-white" />;
      return <Activity className="h-7 w-7 text-white" />;
    }

    if (s.includes("safety") || s.includes("nabh") || s.includes("standard") || s.includes("medical"))
      return <ShieldCheck className="h-7 w-7 text-white" />;

    if (s.includes("services") || s.includes("housekeeping") || s.includes("laundry") || s.includes("guest") || s.includes("transfer"))
      return <Users className="h-7 w-7 text-white" />;

    return <Heart className="h-7 w-7 text-white" />;
  };

  useEffect(() => {
    const sectionElement = videoGallerySectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVideoGalleryInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
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
    if (s.includes("weight") || s.includes("shareera") || s.includes("metabolism")) {
      return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("immunity")) {
      return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("taste") || s.includes("introduction") || s.includes("detox") || s.includes("mindful") || s.includes("digital")) {
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

  const processIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("consult") || s.includes("diagnos") || s.includes("evaluation")) {
      return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("plan") || s.includes("blueprint") || s.includes("roadmap")) {
      return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("daily") || s.includes("therapy") || s.includes("treatment") || s.includes("medicine")) {
      return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("cuisine") || s.includes("diet") || s.includes("food") || s.includes("meal")) {
      return <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("mind") || s.includes("yoga") || s.includes("meditation") || s.includes("harmony")) {
      return <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("home") || s.includes("journey") || s.includes("depart") || s.includes("empower")) {
      return <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    return <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (lightboxOpen || showFullGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen, showFullGallery]);

  useEffect(() => {
    if (!lightboxOpen && !showFullGallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        setShowFullGallery(false);
        return;
      }

      if (lightboxOpen) {
        if (e.key === "ArrowLeft") {
          setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
        }
        if (e.key === "ArrowRight") {
          setLightboxImage((prev) => (prev + 1) % images.length);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, lightboxOpen, showFullGallery]);

  const goPrev = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setSelectedImage((prev) => (prev + 1) % images.length);

  const openLightbox = (idx: number) => {
    setLightboxImage(idx);
    setLightboxOpen(true);
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Ayurmana</h1>
                <p className="text-xl mb-4 opacity-90">Ayurvedic Wellness Retreat</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(0 reviews)</span>
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
                  className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${
                    !showTopVideoGallery
                      ? "scale-105 shadow-lg"
                      : "bg-accent text-white hover:bg-accent/90"
                  }`}
                >
                  Photo Gallery
                </Button>

                <Button
                  variant={showTopVideoGallery ? "default" : "secondary"}
                  size="lg"
                  onClick={() => setShowTopVideoGallery(true)}
                  className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${
                    showTopVideoGallery
                      ? "scale-105 shadow-lg"
                      : "bg-accent text-white hover:bg-accent/90"
                  }`}
                >
                  <Video className="mr-2 h-5 w-5" />
                  Video Gallery
                </Button>
              </div>
            </div>

            {!showTopVideoGallery ? (
              <>
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  <img
                    src={images[selectedImage]}
                    alt={`Ayurmana Center ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  <button
                    onClick={goPrev}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>

                  <button
                    onClick={goNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>

                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {images.length}
                  </div>

                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Auto
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 mb-6">
                  <div
                    className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                    onClick={() => openLightbox(images.indexOf(thumbnailImages[0]))}
                    role="button"
                  >
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={thumbnailImages[0]}
                        alt="Ayurmana 1"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  </div>

                  <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                    {thumbnailImages.slice(1, 5).map((img, idx) => {
                      const actualIndex = images.indexOf(img);
                      const isLastImage = idx === 3;

                      return (
                        <div
                          key={idx}
                          className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                          onClick={() => openLightbox(actualIndex)}
                          role="button"
                        >
                          <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                            <img
                              src={img}
                              alt={`Ayurmana ${actualIndex + 1}`}
                              className="absolute inset-0 w-full h-full object-cover"
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
              <div className="rounded-2xl bg-[#E6ECE7] p-4 md:p-6">
                <div className="relative w-full overflow-hidden rounded-xl bg-black">
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src={videoEmbedSrc}
                      title="Ayurmana video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-strong:text-primary">
              <MarkdownContent
                contentPath="/content/Top Centers/Ayurmana/Main Content.txt"
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

          <div className="mb-12" id="videos" ref={videoGallerySectionRef}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Video Gallery of Ayurmana</h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Experience the serene atmosphere and holistic healing journey at Ayurmana through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    <iframe
                      key={`${videos[selectedVideo]}-${isVideoGalleryInView ? "play" : "stop"}`}
                      src={withYouTubeParams(videos[selectedVideo], {
                        autoplay: isVideoGalleryInView ? "1" : "0",
                        mute: isVideoGalleryInView ? "1" : "0",
                        rel: "0",
                      })}
                      title="Ayurmana Video"
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
                    className={`transition-all ${index === selectedVideo ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12" id="why-choose">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {whyChooseData?.title || "Why Choose Ayurmana"}
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
                Testimonials of Ayurmana Center
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
                      key={`${testimonialVideos[selectedTestimonialVideo]}-${isTestimonialsInView ? "play" : "stop"}`}
                      src={withYouTubeParams(testimonialVideos[selectedTestimonialVideo], {
                        autoplay: isTestimonialsInView ? "1" : "0",
                        mute: isTestimonialsInView ? "1" : "0",
                        rel: "0",
                      })}
                      title="Ayurmana Testimonial Video"
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
                  onClick={() =>
                    setSelectedTestimonialVideo((prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length)
                  }
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
                    className={`transition-all ${
                      index === selectedTestimonialVideo ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                    } rounded-full`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process &amp; Patient Journey</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {treatmentIntro}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {treatmentSteps.map((step, idx) => {
                const number = idx + 1;
                const isLast = idx === treatmentSteps.length - 1;

                return (
                  <div
                    key={idx}
                    className={`relative flex items-start gap-3 md:gap-6 ${isLast ? "" : "mb-8 md:mb-12"} group`}
                  >
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                        {number}
                      </div>
                      {!isLast && <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>}
                    </div>

                    <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                      <CardContent className="p-4 md:p-6">
                        <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                          {number}
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            {processIconForTitle(step.title)}
                          </div>
                          <div>
                            <h3 className="text-base md:text-xl font-bold text-primary">{step.title}</h3>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Step {number}</span>
                          </div>
                        </div>

                        <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                          {step.description}
                        </p>

                        {step.bullets.length > 0 && (
                          <ul className="mt-3 space-y-1.5 md:space-y-2">
                            {step.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                                <span className="text-primary mt-1">✓</span>
                                <span className="leading-snug">{b}</span>
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

          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src="/Center Images/Ayurmana center/CTA.jpg"
                    alt="Ayurmana Wellness Center"
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
                    src="/Center Images/Ayurmana center/CTA.jpg"
                    alt="Ayurmana Wellness Center"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
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
                            alt={`Ayurmana Facility ${index + 1}`}
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
                      transform: `translateX(-${Math.min(currentFacilityImage, Math.max(0, facilityImages.length - 5)) * 20}%)`,
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
                            alt={`Ayurmana Facility ${index + 1}`}
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
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    All Facilities Meet International Healthcare Standards
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Every facility at Ayurmana is designed and maintained with strong standards of safety, hygiene, and quality care.
                    Our commitment to excellence means you receive world-class holistic treatment in a serene, naturally therapeutic environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 rounded-3xl p-4 md:p-10" style={{ backgroundColor: "#EDE8D0" }} id="team">
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {founderTeamData?.title || "Founder & Team Info"}
              </h1>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {founderTeamData?.description || ""}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div
                      className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square"
                      style={{
                        background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)",
                      }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src="/Center Images/Ayurmana center/Founder/Founder.webp"
                          alt={founderTeamData?.cards?.[0]?.title || "Founder"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        {founderTeamData?.cards?.[0]?.title || ""}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                        {founderTeamData?.cards?.[0]?.subtitle || ""}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    {founderTeamData?.cards?.[0]?.description || ""}
                  </p>
                  <div className="pt-2 md:pt-3 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2">Leadership &amp; Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {(founderTeamData?.cards?.[0]?.bullets || []).map((b, i) => (
                        <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {renderBoldText(b)}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div
                      className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square"
                      style={{
                        background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)",
                      }}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src="/Center Images/Ayurmana center/Founder/Team.jpeg"
                          alt={founderTeamData?.cards?.[1]?.title || "Team"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        {founderTeamData?.cards?.[1]?.title || ""}
                      </h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                        {founderTeamData?.cards?.[1]?.subtitle || ""}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    {founderTeamData?.cards?.[1]?.description || ""}
                  </p>
                  <div className="space-y-2 pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2 md:mb-3">Key Highlights:</p>
                    <div className="max-h-40 overflow-y-auto pr-1">
                      <div className="grid grid-cols-1 gap-2">
                      {(founderTeamData?.cards?.[1]?.bullets || []).map((b, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                          <span className="text-xs" style={{ color: "#7F543D" }}>
                            {renderBoldText(b)}
                          </span>
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Full Gallery Modal */}
      {
        showFullGallery && (
          <div
            className="fixed inset-0 bg-[#EDE8D0]/80 backdrop-blur-sm z-50 overflow-auto"
            onClick={() => setShowFullGallery(false)}
          >
            <div className="container mx-auto px-4 py-10" onClick={(e) => e.stopPropagation()}>
              <div className="relative flex items-center justify-center mb-4 pl-16 md:pl-0">
                <Button
                  onClick={() => setShowFullGallery(false)}
                  className="absolute left-0 bg-white text-primary hover:bg-white/90"
                >
                  Back
                </Button>
                <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">
                  Ayurmana Gallery
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
                    <img
                      src={img}
                      alt={`Ayurmana ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
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

            <div
              className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
                Ayurmana Health Center
              </div>
              <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={images[lightboxImage]}
                  alt={`Ayurmana ${lightboxImage + 1}`}
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

            <div
              className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
                Ayurmana Facilities
              </div>
              <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={facilityImages[facilityLightboxImage]}
                  alt={`Ayurmana Facility ${facilityLightboxImage + 1}`}
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

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
