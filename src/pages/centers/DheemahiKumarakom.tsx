import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MarkdownContent from "@/components/MarkdownContent";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Video,
  Images,
  X,
  Users,
  TrendingUp,
  Heart,
  Droplet,
  Brain,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Activity,
  Hospital,
  Pill,
  Award,
  Leaf,
  Home,
  ClipboardList,
  FileSearch,
  UserCheck,
  Phone,
  MessageCircle,
  MessageCircleHeart,
  Building2,
  Utensils,
  Mail,
  Globe,
  TreePine,
  Search,
} from "lucide-react";

export default function DheemahiKumarakom() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [videos, setVideos] = useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxFromFullGallery, setLightboxFromFullGallery] = useState(false);
  const [wrpSections, setWrpSections] = useState<
    { title: string; desc: string[]; bullets: string[] }[]
  >([]);
  const [medSections, setMedSections] = useState<
    { title: string; desc: string[]; bullets: string[] }[]
  >([]);
  const [whyIntro, setWhyIntro] = useState("");
  const [whyItems, setWhyItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [processIntro, setProcessIntro] = useState("");
  const [processSteps, setProcessSteps] = useState<{ n: number; title: string; desc: string; bullets: string[] }[]>([]);
  const [facilitiesIntro, setFacilitiesIntro] = useState("");
  const [facilityCards, setFacilityCards] = useState<{ title: string; bullets: string[] }[]>([]);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const galleryVideoRef = useRef<HTMLVideoElement>(null);
  const [founderName, setFounderName] = useState("");
  const [founderQual, setFounderQual] = useState("");
  const [founderDesc, setFounderDesc] = useState("");
  const [founderTags, setFounderTags] = useState<string[]>([]);
  const [founderTagline, setFounderTagline] = useState("");
  const [teamTitle, setTeamTitle] = useState("");
  const [teamSubheading, setTeamSubheading] = useState("");
  const [teamDesc, setTeamDesc] = useState("");
  const [teamItems, setTeamItems] = useState<string[]>([]);
  const [teamImageError, setTeamImageError] = useState(false);
  const [reviews, setReviews] = useState<{ id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const isReviewAutoPlaying = true;
  const [insuranceIntro, setInsuranceIntro] = useState("");
  const [insuranceBullets, setInsuranceBullets] = useState<string[]>([]);
  const [paymentBullets, setPaymentBullets] = useState<string[]>([]);
  const [internationalText, setInternationalText] = useState("");
  const [faqItems, setFaqItems] = useState<{ question: string; answer: string }[]>([]);
  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [transportText, setTransportText] = useState("");
  const [howToReach, setHowToReach] = useState<{ mode: string; text: string }[]>([]);
  const [showAwards, setShowAwards] = useState(true);
  const [currentAward, setCurrentAward] = useState(0);
  const [isAwardAutoPlaying, setIsAwardAutoPlaying] = useState(true);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMediaAutoPlaying, setIsMediaAutoPlaying] = useState(true);
  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Dheemahi" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Expert Team" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "awards", title: "Awards & Recognition" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "FAQ" },
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
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 300);
  };

  const awards = [
    {
      title: "NABH Accredited Hospital",
      description: "Recognized for maintaining the highest standards in healthcare quality and patient safety as an accredited Ayurvedic medical facility.",
      image: "/Center Images/Dheemahi Ayurvedic Centre/Awards/2.jpg"
    },
    {
      title: "GMP Certified Pharmacy",
      description: "Our in-house herbal pharmacy is GMP certified, guaranteeing the purity, safety, and absolute potency of every medicine provided.",
      image: "/Center Images/Dheemahi Ayurvedic Centre/Awards/1.jpg"
    },
    {
      title: "100-Year Healing Legacy",
      description: "Our greatest recognition is our 100-year healing legacy since 1921, backed by the trust of thousands of patients from across the globe.",
      image: "/Center Images/Dheemahi Ayurvedic Centre/Awards/Award 4 (Our greatest recognition is our 100-year healing legacy since 1921, backed by the trust of thousands of patients from across the globe).jpg"
    },
    {
      title: "Kerala Govt. Green Leaf",
      description: "Officially recognized and approved as a 'Green Leaf' category center by the Government of Kerala for excellence in Ayurvedic practices.",
      image: "/Center Images/Dheemahi Ayurvedic Centre/Awards/3.png"
    }
  ];

  const mediaItems = []; // Keeping empty as per request to only show Awards

  const [maxAwardIndex, setMaxAwardIndex] = useState(awards.length - 1);

  useEffect(() => {
    if (isJumpModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isJumpModalOpen]);

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

  useEffect(() => {
    if (!isMediaAutoPlaying || showAwards) return;
    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMediaAutoPlaying, showAwards, mediaItems.length]);

  const handleNextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const handlePrevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  useEffect(() => {
    fetch("/Center Videos/Dheemahi Ayurvedic Centre/yt i frame testimonies.txt")
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const iframes = doc.querySelectorAll("iframe");
        const urls = Array.from(iframes).map((iframe) => iframe.getAttribute("src")).filter(Boolean) as string[];
        setTestimonialVideos(urls);
      })
      .catch((err) => console.error("Error loading Dheemahi testimonials:", err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTestimonialsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (testimonialSectionRef.current) {
      observer.observe(testimonialSectionRef.current);
    }
    return () => {
      if (testimonialSectionRef.current) {
        observer.unobserve(testimonialSectionRef.current);
      }
    };
  }, []);

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

  useEffect(() => {
    fetch("/Center Images/Dheemahi Ayurvedic Centre/Photo Gallery/CDN images-data.txt")
      .then((res) => res.text())
      .then((text) => {
        const urls = text.split("\n").map((s) => s.trim()).filter((s) => s);
        setImages(urls);
      })
      .catch(() => { });
  }, []);
  useEffect(() => {
    fetch("/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Patient Stories & Reviews.txt")
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
            // Extract condition (optional logic based on keywords)
            if (!current.condition && current.title) {
              const knownConditions = ["Sciatica", "Fatigue", "Stress", "Acne", "Weight", "PCOD", "Joint Pain", "Recovery", "Diabetes", "Migraine"];
              for (const c of knownConditions) {
                if (current.title.toLowerCase().includes(c.toLowerCase())) {
                  current.condition = c;
                  break;
                }
              }
            }
          }
        }
        if (current) items.push(current);
        setReviews(items);
      })
      .catch(() => { });
  }, []);
  useEffect(() => {
    if (reviews.length === 0) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reviews]);
  useEffect(() => {
    fetch("/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Founder & Expert Medical Team.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let tagline = "";
        let currentSection: "none" | "founder" | "team" = "none";
        let fName = "";
        let fQual = "";
        let fDesc = "";
        const fTags: string[] = [];
        let tTitle = "";
        let tSub = "";
        let tDesc = "";
        const tItems: string[] = [];
        let inLeader = false;
        let inTeamIncludes = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            const title = line.slice(4).trim();
            if (title.toLowerCase().includes("dr.")) {
              currentSection = "founder";
              fName = title;
            } else {
              currentSection = "team";
              tTitle = title;
            }
            continue;
          }
          if (currentSection === "none") {
            if (!line.startsWith("**")) tagline = tagline ? `${tagline} ${line}` : line;
            continue;
          }
          if (currentSection === "founder") {
            if (line.startsWith("**") && line.endsWith("**")) {
              if (line.toLowerCase().includes("leadership")) inLeader = true;
              continue;
            }
            if (inLeader) {
              if (line.startsWith("*")) {
                fTags.push(line.replace(/^\*+\s*/, ""));
                continue;
              } else {
                inLeader = false;
              }
            }
            if (!fQual && (line.includes("|") || /^[A-Z]{2,}/.test(line))) {
              fQual = line;
            } else {
              fDesc = fDesc ? `${fDesc} ${line}` : line;
            }
            continue;
          }
          if (currentSection === "team") {
            if (!tSub && !line.startsWith("**") && !line.startsWith("*")) {
              tSub = line;
              continue;
            }
            if (line.startsWith("**") && line.endsWith("**")) {
              if (line.toLowerCase().includes("collaborative")) inTeamIncludes = true;
              continue;
            }
            if (inTeamIncludes) {
              if (line.startsWith("*")) {
                tItems.push(line.replace(/^\*+\s*/, ""));
                continue;
              } else {
                inTeamIncludes = false;
              }
            }
            if (!line.startsWith("**")) {
              tDesc = tDesc ? `${tDesc} ${line}` : line;
            }
            continue;
          }
        }
        setFounderTagline(tagline);
        setFounderName(fName || "Dr. B. Gireesh");
        setFounderQual(fQual || "BAMS | Managing Partner & Chief Physician");
        setFounderDesc(fDesc);
        setFounderTags(fTags);
        setTeamTitle(tTitle || "Our Expert Medical Team");
        setTeamSubheading(tSub || "Five Generations of Healing Expertise");
        setTeamDesc(tDesc);
        setTeamItems(tItems);
      })
      .catch(() => { });
  }, []);
  useEffect(() => {
    fetch("/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Insurance & Payment Info.txt")
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
          if (/^Insurance\s*&\s*Payment Info$/i.test(line)) { section = "intro"; continue; }
          const lower = line.toLowerCase();
          if (lower.includes("insurance coverage")) { section = "ins"; continue; }
          if (lower.includes("payment options")) { section = "pay"; continue; }
          if (lower.includes("international patients")) { section = "intl"; continue; }
          if (section === "ins") { ins.push(line); continue; }
          if (section === "pay") { pay.push(line); continue; }
          if (section === "intl") { intl = intl ? `${intl} ${line}` : line; continue; }
          intro = intro ? `${intro} ${line}` : line;
        }
        setInsuranceIntro(intro);
        setInsuranceBullets(ins);
        setPaymentBullets(pay);
        setInternationalText(intl);
      })
      .catch(() => { });
  }, []);
  useEffect(() => {
    fetch("/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Frequently Asked Questions.txt")
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
      .catch(() => { });
  }, []);
  useEffect(() => {
    fetch("/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/contact info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let section: "none" | "address" | "transport" | "reach" | "distances" = "none";
        const addr: string[] = [];
        let transport = "";
        const reach: { mode: string; text: string }[] = [];
        const dists: string[] = [];
        let currentReach: { mode: string; text: string } | null = null;

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            const t = line.slice(4).toLowerCase();
            if (t.includes("distance")) section = "distances";
            else section = "none";
            continue;
          }

          if (/^Address:/i.test(line)) {
            section = "address";
            addr.push(line.replace(/^Address:\s*/i, ""));
            continue;
          }

          if (line.startsWith("* ") && section === "distances") {
            dists.push(line.replace(/^\*\s*/, ""));
            continue;
          }

          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2);
            const lowerT = t.toLowerCase();

            if (lowerT.includes("address")) { section = "address"; continue; }
            if (lowerT.includes("transportation")) { section = "transport"; continue; }
            if (lowerT.includes("how to reach")) { section = "reach"; continue; }
          }

          if (section === "address") { addr.push(line); continue; }
          if (section === "transport") { transport = transport ? `${transport} ${line}` : line; continue; }

          if (section === "reach") {
            const modeMatch = line.match(/^\*\*(By\s+[^:]+):\*\*\s*(.*)/i);
            if (modeMatch) {
              if (currentReach) reach.push(currentReach);
              currentReach = { mode: modeMatch[1], text: modeMatch[2] };
              continue;
            }
            if (line.startsWith("**") && line.endsWith("**")) {
              const t = line.slice(2, -2);
              if (t.toLowerCase().startsWith("by ")) {
                if (currentReach) reach.push(currentReach);
                currentReach = { mode: t, text: "" };
                continue;
              }
            }
            if (currentReach) {
              currentReach.text = currentReach.text ? `${currentReach.text} ${line}` : line;
            }
            continue;
          }
        }
        if (currentReach) reach.push(currentReach);

        setContactAddress(addr);
        setContactDistances(dists);
        setTransportText(transport);
        setHowToReach(reach);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Why Choose Dheemahi.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inSection = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) { inSection = false; continue; }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) items.push(current);
            current = { title: line.slice(2, -2), description: "", bullets: [] };
            inSection = true;
            continue;
          }
          if (!inSection) {
            intro = intro ? `${intro} ${line}` : line;
          } else if (current) {
            if (line.startsWith("*")) {
              const bullet = line.replace(/^\*+\s*/, "");
              current.bullets.push(bullet);
            } else {
              current.description = current.description ? `${current.description} ${line}` : line;
            }
          }
        }
        if (current) items.push(current);
        setWhyIntro(intro);
        setWhyItems(items);
      })
      .catch(() => { });
  }, []);

  const whyIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    const cls = "h-6 w-6 text-primary group-hover:text-white transition-colors";
    if (s.includes("century") || s.includes("heritage") || s.includes("legacy")) return <Award className={cls} />;
    if (s.includes("sanctuary") || s.includes("facility") || s.includes("medical")) return <Hospital className={cls} />;
    if (s.includes("purity") || s.includes("pharmacy") || s.includes("medicine") || s.includes("oils")) return <Sparkles className={cls} />;
    if (s.includes("environment") || s.includes("village") || s.includes("city") || s.includes("location")) return <MapPin className={cls} />;
    if (s.includes("unique") || s.includes("plan")) return <ClipboardList className={cls} />;
    if (s.includes("daily") || s.includes("physician")) return <Stethoscope className={cls} />;
    if (s.includes("team") || s.includes("experts") || s.includes("chief physician")) return <UserCheck className={cls} />;
    if (s.includes("trust") || s.includes("recognition") || s.includes("ratings") || s.includes("government")) return <ShieldCheck className={cls} />;
    if (s.includes("nature") || s.includes("backwaters") || s.includes("greenery") || s.includes("serene")) return <Leaf className={cls} />;
    return <Heart className={cls} />;
  };
  const processIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    const cls = "h-5 w-5 md:h-6 md:w-6 text-primary";
    if (s.includes("pre-arrival") || s.includes("prearrival") || s.includes("pre arrival") || s.includes("preparation")) return <ClipboardList className={cls} />;
    if (s.includes("arrival") || s.includes("diagnosis")) return <FileSearch className={cls} />;
    if (s.includes("blueprint") || s.includes("personalized") || s.includes("plan")) return <ClipboardList className={cls} />;
    if (s.includes("daily") || s.includes("healing") || s.includes("therapy")) return <Pill className={cls} />;
    if (s.includes("nourishment") || s.includes("meals") || s.includes("yoga") || s.includes("meditation")) return <Activity className={cls} />;
    if (s.includes("home") || s.includes("journey home") || s.includes("empowerment")) return <Home className={cls} />;
    return <HeartPulse className={cls} />;
  };
  const facilityIconForTitle = (title: string) => {
    const t = title.toLowerCase();
    const cls = "h-7 w-7 text-white";
    if (t.includes("ayurveda") || t.includes("treatment") || t.includes("therapy")) return <Droplet className={cls} />;
    if (t.includes("doctor") || t.includes("consultation")) return <Stethoscope className={cls} />;
    if (t.includes("cottage") || t.includes("room") || t.includes("accommodation")) return <Building2 className={cls} />;
    if (t.includes("restaurant") || t.includes("dining") || t.includes("meal") || t.includes("nutrition")) return <Utensils className={cls} />;
    if (t.includes("yoga") || t.includes("meditation") || t.includes("recreation")) return <Activity className={cls} />;
    if (t.includes("conference") || t.includes("group") || t.includes("library") || t.includes("reading")) return <Globe className={cls} />;
    if (t.includes("travel") || t.includes("airport") || t.includes("station") || t.includes("access")) return <MapPin className={cls} />;
    if (t.includes("laundry") || t.includes("housekeeping") || t.includes("gmp") || t.includes("pharmacy")) return <Sparkles className={cls} />;
    if (t.includes("garden") || t.includes("nature") || t.includes("backwater")) return <TreePine className={cls} />;
    if (t.includes("nabh") || t.includes("hospital")) return <ShieldCheck className={cls} />;
    return <Heart className={cls} />;
  };

  useEffect(() => {
    fetch("/Center Videos/Dheemahi Ayurvedic Centre/CDN-videos.txt")
      .then((res) => res.text())
      .then((text) => {
        const urls = text.split("\n").map((s) => s.trim()).filter((s) => s);
        setVideos(urls);
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    const parseWRP = (text: string) => {
      const lines = text.split("\n");
      const sections: { title: string; desc: string[]; bullets: string[] }[] = [];
      let current: { title: string; desc: string[]; bullets: string[] } | null = null;
      for (const raw of lines) {
        const line = raw.trim();
        if (!line) continue;
        if (/^###\s+/.test(line)) {
          continue;
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
          if (current) sections.push(current);
          current = { title, desc: [], bullets: [] };
          continue;
        }
        if (/^[*-]\s+/.test(line)) {
          const bullet = line.replace(/^[*-]\s+/, "");
          if (!current) {
            current = { title: "Program", desc: [], bullets: [] };
          }
          current.bullets.push(bullet);
          continue;
        }
        if (current) {
          current.desc.push(line);
        }
      }
      if (current) sections.push(current);
      return sections;
    };
    fetch(
      "/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Wellness & Rejuvenation Programs.txt"
    )
      .then((res) => res.text())
      .then((text) => setWrpSections(parseWRP(text)))
      .catch(() => { });
  }, []);

  useEffect(() => {
    const parseMED = (text: string) => {
      const lines = text.split("\n");
      const sections: { title: string; desc: string[]; bullets: string[] }[] = [];
      let current: { title: string; desc: string[]; bullets: string[] } | null = null;
      for (const raw of lines) {
        const line = raw.trim();
        if (!line) continue;
        if (/^###\s+/.test(line)) {
          continue;
        }
        if (line.startsWith("**") && line.endsWith("**")) {
          const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
          if (current) sections.push(current);
          current = { title, desc: [], bullets: [] };
          continue;
        }
        if (/^[*-]\s+/.test(line)) {
          const bullet = line.replace(/^[*-]\s+/, "");
          if (!current) {
            current = { title: "Program", desc: [], bullets: [] };
          }
          current.bullets.push(bullet);
          continue;
        }
        if (current) {
          current.desc.push(line);
        }
      }
      if (current) sections.push(current);
      return sections;
    };
    fetch(
      "/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Medical Treatment Programs.txt"
    )
      .then((res) => res.text())
      .then((text) => setMedSections(parseMED(text)))
      .catch(() => { });
  }, []);
  useEffect(() => {
    fetch("/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const steps: { n: number; title: string; desc: string; bullets: string[] }[] = [];
        let current: { n: number; title: string; desc: string; bullets: string[] } | null = null;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;
          const m = line.match(/^(\d+)\.\s+\*\*(.+)\*\*$/);
          if (m) {
            if (current) steps.push(current);
            current = { n: parseInt(m[1], 10), title: m[2], desc: "", bullets: [] };
            continue;
          }
          if (!current) {
            intro = intro ? `${intro} ${line}` : line;
            continue;
          }
          if (/^\*\s+/.test(line)) {
            const bullet = line.replace(/^\*\s+/, "");
            current.bullets.push(bullet);
          } else {
            current.desc = current.desc ? `${current.desc} ${line}` : line;
          }
        }
        if (current) steps.push(current);
        setProcessIntro(intro);
        setProcessSteps(steps);
      })
      .catch(() => { });
  }, []);
  useEffect(() => {
    fetch("/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const cards: { title: string; bullets: string[] }[] = [];
        let current: { title: string; bullets: string[] } | null = null;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) { continue; }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) cards.push(current);
            current = { title: line.slice(2, -2), bullets: [] };
            continue;
          }
          if (/^\*\s+/.test(line)) {
            const b = line.replace(/^\*\s+/, "");
            if (!current) current = { title: "Facility", bullets: [] };
            current.bullets.push(b);
            continue;
          }
          intro = intro ? `${intro} ${line}` : line;
        }
        if (current) cards.push(current);
        setFacilitiesIntro(intro);
        setFacilityCards(cards);
      })
      .catch(() => { });
  }, []);
  useEffect(() => {
    fetch("/Center Images/Dheemahi Ayurvedic Centre/Facilities and Ameties/CDN-images data.txt")
      .then((res) => res.text())
      .then((text) => {
        const urls = text.split("\n").map((s) => s.trim()).filter((s) => s);
        setFacilityImages(urls);
      })
      .catch(() => { });
  }, []);
  useEffect(() => {
    if (facilityLightboxOpen || facilityImages.length === 0) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityLightboxOpen, facilityImages.length]);

  useEffect(() => {
    if (!isAutoPlaying || showVideoGallery || images.length === 0) return;
    const i = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(i);
  }, [isAutoPlaying, showVideoGallery, images]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        setLightboxImage((prev) => (prev + 1) % images.length);
      }
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [lightboxOpen, images.length]);

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
      if (videoElement) observer.unobserve(videoElement);
    };
  }, [selectedVideo, videos.length]);

  const description =
    "Nestled on the serene banks of Lake Vembanad, Dheemahi Kumarakom is a premium NABH-accredited sanctuary for authentic healing. Rooted in over 90 years of family heritage, this retreat masterfully blends deep-rooted Ayurvedic wisdom with modern luxury, offering personalized care in a tranquil lakeside haven.";

  const specialties = [
    "Ayurveda",
    "Panchakarma",
    "Stress Relief",
    "Pain Management",
    "Wellness & Rejuvenation",
    "Lakeside Retreat",
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Dheemahi Kumarakom Ayurvedic Centre

                </h1>
                <p className="text-xl mb-4 opacity-90">
                  Authentic Ayurveda in a tranquil, NABH-accredited lakeside sanctuary
                </p>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Kumarakom, Kerala, India</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <Star className="text-yellow-500 fill-yellow-500 h-5 w-5" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-sm opacity-90">(1000+ reviews)</span>
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

      <section id="gallery" className="container mx-auto px-3 md:px-4 pt-12 pb-2 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
              <Button
                variant={!showVideoGallery ? "default" : "secondary"}
                size="lg"
                onClick={() => setShowVideoGallery(false)}
                className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${!showVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"
                  }`}
              >
                Photo Gallery
              </Button>
              <Button
                variant={showVideoGallery ? "default" : "secondary"}
                size="lg"
                onClick={() => setShowVideoGallery(true)}
                className={`flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${showVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"
                  }`}
              >
                <Video className="h-4 w-4 md:h-6 md:w-6" />
                Video Gallery
              </Button>
            </div>
          </div>

          {!showVideoGallery ? (
            <>
              <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                {images.length > 0 && (
                  <img
                    src={images[selectedImage]}
                    alt={`Dheemahi ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                )}

                <button
                  onClick={() => {
                    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
                  }}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>

                <button
                  onClick={() => {
                    setSelectedImage((prev) => (prev + 1) % images.length);
                  }}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>

                {isAutoPlaying && (
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Auto
                  </div>
                )}

              </div>

              <div className="flex flex-col md:flex-row gap-3 mb-6">
                {/* Large Image - Left Side - Fixed 16:9 Aspect Ratio */}
                <div
                  className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                  onClick={() => {
                    setLightboxImage(0);
                    setLightboxFromFullGallery(false);
                    setLightboxOpen(true);
                  }}
                >
                  {images[0] && (
                    <img
                      src={images[0]}
                      alt="Dheemahi 1"
                      className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                {/* Small Images - Right Side - Fixed 2×2 Grid */}
                <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                  {images.slice(1, 5).map((img, idx) => {
                    const actualIndex = idx + 1; // map to original images index
                    const isLastImage = idx === 3; // bottom-right tile
                    return (
                      <div
                        key={idx}
                        className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                        onClick={() => {
                          setLightboxImage(actualIndex);
                          setLightboxFromFullGallery(false);
                          setLightboxOpen(true);
                        }}
                      >
                        <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '100%' }}>
                          <img
                            src={img}
                            alt={`Dheemahi ${actualIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-cover rounded-xl"
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
                <video key={selectedVideo} controls controlsList="nodownload" preload="metadata" className="w-full h-full object-cover">
                  <source src={videos[selectedVideo]} type="video/mp4" />
                </video>
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
        {/* Content Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
              <MarkdownContent
                contentPath="/content/Top Centers/Dheemahi Kumarakom Ayurvedic Centre/Main content.txt"
                h3ClassName="text-xl sm:text-2xl md:text-2xl font-semibold text-primary leading-snug"
                titleClassName="text-2xl sm:text-3xl md:text-3xl font-semibold text-primary border-b-2 border-primary/20 pb-2"
                onLinkClick={() => setQuoteModalOpen(true)}
              />
            </CardContent>
          </Card>

          <div id="wellness" className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">1000+</div>
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4 border-2 border-green-600">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">Wellness Programs</h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                Cleanse, de-stress, and revitalize your mind, body, and spirit with our holistic wellness programs
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {wrpSections.map((sec) => {
                const slug = sec.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                const Icon = /detox|panchakarma/i.test(sec.title)
                  ? Droplet
                  : /stress/i.test(sec.title)
                    ? Brain
                    : /rejuvenation|anti-?aging/i.test(sec.title)
                      ? Sparkles
                      : /immunity|preventive/i.test(sec.title)
                        ? ShieldCheck
                        : /beauty|skin/i.test(sec.title)
                          ? Sparkles
                          : /post[-\s]?illness|recovery/i.test(sec.title)
                            ? Hospital
                            : /karkidaka|monsoon/i.test(sec.title)
                              ? Droplet
                              : /pregnancy|prenatal|postnatal/i.test(sec.title)
                                ? Heart
                                : /elderly|senior/i.test(sec.title)
                                  ? Users
                                  : /weekend|escape/i.test(sec.title)
                                    ? Activity
                                    : Heart;
                return (
                  <AccordionItem
                    key={slug}
                    value={slug}
                    className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white"
                  >
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-green-600">
                      <div className="flex items-center gap-2 md:gap-3 w-full min-w-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-600">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        </div>
                        <span className="text-sm md:text-lg font-semibold text-primary whitespace-nowrap truncate flex-1 min-w-0 text-left">
                          {sec.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                      {sec.desc.map((p, i) => (
                        <p key={i} className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                          {p}
                        </p>
                      ))}
                      {sec.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2">
                          {sec.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-green-600 mt-1">✓</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div id="medical" className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4 border-2 border-blue-600">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                Comprehensive holistic treatment for acute, chronic, and complex medical conditions
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medSections.map((sec) => {
                const slug = sec.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                const Icon =
                  /diabetes/i.test(sec.title)
                    ? Activity
                    : /(back pain|spinal)/i.test(sec.title)
                      ? Activity
                      : /(pcod|women)/i.test(sec.title)
                        ? Heart
                        : /(arthritis|joint)/i.test(sec.title)
                          ? HeartPulse
                          : /(mental|neurolog|stress)/i.test(sec.title)
                            ? Brain
                            : /(gastro|digest|ibs|gerd)/i.test(sec.title)
                              ? Pill
                              : /(chronic|complex|autoimmune)/i.test(sec.title)
                                ? Hospital
                                : /(cardio|heart)/i.test(sec.title)
                                  ? Heart
                                  : /(skin|psoriasis|eczema)/i.test(sec.title)
                                    ? Sparkles
                                    : /(weight|obesity)/i.test(sec.title)
                                      ? Activity
                                      : /(respiratory|asthma|bronchitis)/i.test(sec.title)
                                        ? ShieldCheck
                                        : /(thyroid)/i.test(sec.title)
                                          ? Activity
                                          : /(fatigue)/i.test(sec.title)
                                            ? Activity
                                            : /(dark circles)/i.test(sec.title)
                                              ? Sparkles
                                              : Heart;
                return (
                  <AccordionItem
                    key={slug}
                    value={slug}
                    className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white"
                  >
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-blue-600">
                      <div className="flex items-center gap-2 md:gap-3 w-full min-w-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-600">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                        </div>
                        <span className="text-sm md:text-lg font-semibold text-primary whitespace-nowrap truncate flex-1 min-w-0 text-left">
                          {sec.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                      {sec.desc.map((p, i) => (
                        <p key={i} className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                          {p}
                        </p>
                      ))}
                      {sec.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2">
                          {sec.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-blue-600 mt-1">✓</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          {/* Video Gallery Section */}
          <div className="mb-12" id="videos">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Video Gallery of Dheemahi Kumarakom
              </h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Experience the serene atmosphere and holistic healing journey at Dheemahi Kumarakom through our video gallery.
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

          <div id="why-choose" className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Why Choose Dheemahi for Your Healing Journey?</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {whyIntro}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyItems.map((it, idx) => (
                <Card
                  key={idx}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary"
                >
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          {whyIconForTitle(it.title)}
                        </div>
                        <h3 className="text-lg font-bold text-primary">{it.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        {it.description}
                      </p>
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

          {/* Testimonials of Dheemahi Ayurvedic Centre - Video Section */}
          <div className="mb-12" id="testimonial-videos" ref={testimonialSectionRef}>
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of Dheemahi Ayurvedic Centre
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
                    {testimonialVideos.length > 0 && (
                      <iframe
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={`${testimonialVideos[selectedTestimonialVideo]}${testimonialVideos[selectedTestimonialVideo].includes('?') ? '&' : '?'}autoplay=${isTestimonialsInView ? "1" : "0"}&mute=0&rel=0`}
                        title="Dheemahi Testimonial Video"
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

              {/* Navigation Buttons - Mobile Only */}
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

          <div id="process" className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {processIntro}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, idx) => (
                <div key={step.n} className="relative flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                      {step.n}
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                    )}
                  </div>
                  <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                    <CardContent className="p-4 md:p-6">
                      <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {step.n}
                      </div>
                      <div className="flex items-center gap-3 mb-4 pl-12 md:pl-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {processIconForTitle(step.title)}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-primary">{step.title}</h3>
                      </div>
                      {step.desc && (
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                          {step.desc}
                        </p>
                      )}
                      {step.bullets.length > 0 && (
                        <ul className="mt-3 space-y-2">
                          {step.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                              <span className="text-primary mt-1">•</span>
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

          <div className="mb-2 md:mb-3">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src={"/Center Images/Dheemahi Ayurvedic Centre/Photo Gallery/CTA image.jpg"}
                    alt="Dheemahi Kumarakom Ayurvedic Centre"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: "#7F543D" }}>
                    Take the first step towards holistic healing. Our expert team guides you with personalized treatment plans tailored to your unique needs.
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
                    src={"/Center Images/Dheemahi Ayurvedic Centre/Photo Gallery/CTA image.jpg"}
                    alt="Dheemahi Kumarakom Ayurvedic Centre"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-3 md:px-4 max-w-full">
            <div className="max-w-6xl mx-auto mt-6">
              <div id="facilities" className="mb-12">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
                  <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>{facilitiesIntro}</p>
                </div>
                <div className="max-w-7xl mx-auto relative mb-10">
                  <button
                    onClick={() => setCurrentFacilityImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                    className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden md:flex items-center justify-center"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length)}
                    className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110 hidden md:flex items-center justify-center"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                  <div className="overflow-hidden px-10 md:px-12">
                    <div className="md:hidden">
                      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentFacilityImage * 100}%)` }}>
                        {facilityImages.map((image, index) => (
                          <div key={index} className="w-full flex-shrink-0 px-2">
                            <div
                              className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                              onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}
                            >
                              <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${Math.min(currentFacilityImage, facilityImages.length - 5) * 20}%)` }}>
                        {facilityImages.map((image, index) => (
                          <div key={index} className="w-1/5 flex-shrink-0 px-2">
                            <div
                              className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                              onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}
                            >
                              <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
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
                  {facilityCards.map((card, idx) => (
                    <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                            {facilityIconForTitle(card.title)}
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1">{card.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {card.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                              <span className="leading-snug">{b}</span>
                            </li>
                          ))}
                        </ul>
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
                        Every facility at Dheemahi Kumarakom is designed and maintained according to NABH accreditation standards,
                        ensuring the highest levels of safety, hygiene, and quality care. Our commitment to excellence
                        means you receive world-class holistic treatment in a serene, naturally therapeutic environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="team" className="mb-10 rounded-3xl p-4 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h1>
              {founderTagline && (
                <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                  {founderTagline}
                </p>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src="/Center Images/Dheemahi Ayurvedic Centre/founder.jpg"
                          alt={founderName || "Founder"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{founderName || "Founder"}</h3>
                      {founderQual && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                          {founderQual}
                        </p>
                      )}
                    </div>
                  </div>
                  {founderDesc && (
                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                      {founderDesc}
                    </p>
                  )}
                  {founderTags.length > 0 && (
                    <div className="pt-3 md:pt-4 border-t border-primary/10">
                      <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {founderTags.map((t, i) => (
                          <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src={
                            teamImageError
                              ? "/Center Images/Dheemahi Ayurvedic Centre/center dp.jpg"
                              : "/Center Images/Dheemahi Ayurvedic Centre/Team.jpg"
                          }
                          alt="Expert Medical Team"
                          className="w-full h-full object-cover"
                          onError={() => setTeamImageError(true)}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{teamTitle || "Expert Medical Team"}</h3>
                      {teamSubheading && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                          {teamSubheading}
                        </p>
                      )}
                    </div>
                  </div>
                  {teamDesc && (
                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                      {teamDesc}
                    </p>
                  )}
                  {teamItems.length > 0 && (
                    <div className="space-y-2 pt-3 md:pt-4 border-t border-primary/10">
                      <p className="text-xs font-semibold text-primary mb-2 md:mb-3">Our Collaborative Team Includes:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {teamItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            <span className="text-xs" style={{ color: "#7F543D" }}>{processInlineFormatting(item)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          <div id="reviews" className="mb-12">
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
                    {reviews.length > 0 && (
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
                            {reviews[currentReview].title}
                          </h3>
                          <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                            "{reviews[currentReview].review}"
                          </p>
                        </div>

                        {/* Reviewer Info */}
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                            {reviews[currentReview].name.charAt(0)}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="text-base md:text-xl font-semibold text-primary">
                                {reviews[currentReview].name}
                              </h4>
                              {reviews[currentReview].verified && (
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                                  ✓ Verified
                                </span>
                              )}
                            </div>
                            <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                              {reviews[currentReview].location} {reviews[currentReview].condition && `• ${reviews[currentReview].condition}`}
                            </p>
                          </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex items-center gap-2 md:gap-3">
                          {renderStars(reviews[currentReview].rating)}
                          <span className="text-xs md:text-sm font-semibold text-primary">
                            {reviews[currentReview].rating}.0
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
                  onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
                  className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-6">
                <button
                  onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
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
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`transition-all rounded-full ${currentReview === idx
                    ? "w-8 h-3 bg-primary"
                    : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                    }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Awards & Media recognition */}
          <div id="awards" className="mt-16 md:mt-24 mb-12">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
                <Award className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards & Media</h2>
              <p className="text-base md:text-lg px-4 mx-auto max-w-2xl" style={{ color: '#7F543D' }}>
                Recognition of Dheemahi's global excellence in authentic Ayurvedic healing and clinical patient care
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
                        <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                          <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden border border-primary/10">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
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
                          <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 md:mb-6 p-4 md:p-6 flex items-center justify-center overflow-hidden border border-primary/10">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
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
                    onClick={() => setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1))}
                    className="absolute left-0 top-[65%] -translate-y-1/2 translate-x-8 md:top-1/2 md:-translate-x-6 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                  >
                    <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => setCurrentAward((prev) => (prev >= maxAwardIndex ? 0 : prev + 1))}
                    className="absolute right-0 top-[65%] -translate-y-1/2 -translate-x-8 md:top-1/2 md:translate-x-6 bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                  >
                    <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                  </button>
                </>
              )}
            </div>
          </div>

          {
            insuranceBullets.length > 0 && (
              <div id="insurance" className="mb-12">
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
            )
          }
          {
            faqItems.length > 0 && (
              <div id="faq" className="mb-12">
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
                      <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-green-600">
                        <span className="text-lg font-semibold text-primary text-left">{it.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pb-6 bg-white">
                        <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>{it.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          }
          {
            contactAddress.length > 0 && (
              <Card id="contact" className="mb-12 border-2 border-primary overflow-hidden transition-all duration-300 hover:shadow-2xl">
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
                                  <span dangerouslySetInnerHTML={{ __html: d.replace(/mob <br\/>-/, '<br/>-') }} />
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
                              title="Dheemahi Map"
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.192817170326!2d76.53378337324679!3d9.622034079427932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062bf01a596b95%3A0xf3d02bd558e91d9d!2sDheemahi%20Ayurvedic%20Centre!5e1!3m2!1sen!2sin!4v1767542221087!5m2!1sen!2sin"
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
            )
          }

          {/* CTA Card */}
          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#234A50' }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                  <img
                    src="/Center Images/Dheemahi Ayurvedic Centre/CTA bottom.jpg"
                    alt="Dheemahi Ayurvedic Village"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-extrabold text-white text-center mb-8 leading-tight tracking-tight">Begin Your Holistic Healing Journey at Dheemahi Ayurvedic Village</h2>
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
                    Begin Your <span className="text-white/90">Holistic Healing Journey</span> at <span className="text-white underline decoration-white/20 underline-offset-8">Dheemahi Ayurvedic Village</span>
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
                    src="/Center Images/Dheemahi Ayurvedic Centre/CTA bottom.jpg"
                    alt="Dheemahi Ayurvedic Village"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {
            facilityLightboxOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
                <button
                  onClick={() =>
                    setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)
                  }
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() =>
                    setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)
                  }
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl">
                  <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
                    Dheemahi Kumarakom Ayurvedic Centre
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                    <img
                      src={facilityImages[facilityLightboxImage]}
                      alt={`Facility ${facilityLightboxImage + 1}`}
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
                      onClick={() =>
                        setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)
                      }
                      className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={() =>
                        setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)
                      }
                      className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            )
          }

        </div >
      </section >

      {lightboxOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
          <button
            onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl">
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
              Dheemahi Gallery
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={images[lightboxImage]}
                alt={`Dheemahi ${lightboxImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => {
                  setLightboxOpen(false);
                  if (!lightboxFromFullGallery) {
                    setShowFullGallery(false);
                  }
                  setLightboxFromFullGallery(false);
                }}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close"
              >
                ✕
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
        showFullGallery && (
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
                  Dheemahi Gallery
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-full cursor-pointer"
                    style={{ paddingBottom: "75%" }}
                    onClick={() => {
                      setLightboxImage(idx);
                      setLightboxFromFullGallery(true);
                      setLightboxOpen(true);
                    }}
                  >
                    <img src={src} alt={`Gallery ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }


      <div className="[&>footer]:mt-0">
        <Footer />
      </div>
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Mobile BROWSE Action (Bottom Left) - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <button
          onClick={() => setIsJumpModalOpen(true)}
          className="md:hidden fixed bottom-6 left-4 z-50 bg-[#2F5B63] text-white rounded-full py-3.5 w-[140px] shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-bold border-2 border-white/20 active:scale-95 whitespace-nowrap"
        >
          <Search size={18} className="-ml-1" />
          <span>BROWSE</span>
        </button>
      )}

      {/* Floating Quote Action (Bottom Right) */}
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

      {/* Desktop Vertical BROWSE Button - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
          {/* BROWSE Button - Static Clean Version */}
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
                  Sections of Dheemahi
                </h2>
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
              Premium Lakeside Retreat
            </p>
          </div>
        </div>
      </div>
    </div >
  );
}

