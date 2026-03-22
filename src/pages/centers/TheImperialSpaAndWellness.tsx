import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Images,
  Video,
  Users,
  TrendingUp,
  Heart,
  Stethoscope,
  Droplet,
  Brain,
  Sparkles,
  Activity,
  ShieldCheck,
  UserCheck,
  HeartPulse,
  Award,
  Leaf,
  Hospital,
  Home,
  ClipboardList,
  FileSearch,
  Pill,
  Utensils,
  Phone,
  MessageCircle,
  Building2,
  Globe,
  TreePine,
  MessageCircleHeart,
  Search,
  X,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import QuoteModal from "@/components/QuoteModal";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TheImperialSpaAndWellness = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [soukyaStyleVideoIndex, setSoukyaStyleVideoIndex] = useState(0);
  const soukyaStyleVideoRef = useRef<HTMLVideoElement>(null);
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [programs, setPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [whyIntro, setWhyIntro] = useState("");
  const [whyItems, setWhyItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<{ number: number; title: string; description: string; bullets: string[] }[]>([]);
  const [facilitiesIntro, setFacilitiesIntro] = useState("");
  const [facilityCards, setFacilityCards] = useState<{ title: string; bullets: string[] }[]>([]);
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
  const [testimonials, setTestimonials] = useState<{ id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[]>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);
  const [currentAward, setCurrentAward] = useState(0);
  const [isAwardAutoPlaying, setIsAwardAutoPlaying] = useState(true);
  const [maxAwardIndex, setMaxAwardIndex] = useState(0);
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
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);

  const founderImage = "/Center Images/The Imperial Spa & Salon/Founder/founder.jpg";
  const teamImage = "/Center Images/The Imperial Spa & Salon/Founder/Team.webp";

  const testimonialVideos = [
    "/Center Videos/The Imperial Spa & Salon/Testimonies/testimonies 1.mp4",
    "/Center Videos/The Imperial Spa & Salon/Testimonies/testimonies 2.mp4",
  ];

  const awards = [
    {
      title: "Condé Nast Traveller Readers’ Choice Awards 2025",
      description: "Celebrated by global readers for exceptional luxury hospitality and wellness experiences.",
      image: "/Center Images/The Imperial Spa & Salon/Awards/traveler 1.png",
    },
    {
      title: "Travel + Leisure 500",
      description: "Featured among the world’s finest hotels and resorts by Travel + Leisure.",
      image: "/Center Images/The Imperial Spa & Salon/Awards/traveler 500 2.png",
    },
    {
      title: "50 Best Discovery",
      description: "Recognized as a standout destination for memorable stays and wellness experiences.",
      image: "/Center Images/The Imperial Spa & Salon/Awards/50_best_discovery (Award 3).png",
    },
    {
      title: "World’s Best Awards",
      description: "Honored for excellence in luxury hospitality and guest satisfaction.",
      image: "/Center Images/The Imperial Spa & Salon/Awards/world best traveler award 4.png",
    },
    {
      title: "Robb Report Best of the Best 2020",
      description: "Awarded for standout excellence in luxury travel and hospitality.",
      image: "/Center Images/The Imperial Spa & Salon/Awards/Robb report world best 5.png",
    },
    {
      title: "Indian Best Traveler",
      description: "Recognized for premier heritage luxury and wellness service in India.",
      image: "/Center Images/The Imperial Spa & Salon/Awards/indian best traveler 6.png",
    },
    {
      title: "Michelin Recognition",
      description: "Highlighted for exceptional standards in hospitality and dining experiences.",
      image: "/Center Images/The Imperial Spa & Salon/Awards/michelin award 7.png",
    },
  ];

  const jumpSections = [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Imperial" },
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

  const thumbnailImages = images.slice(0, 6);

  useEffect(() => {
    const photoListPath = "/Center Images/The Imperial Spa & Salon/Photo Gallery/Photo Gallery Links.txt";
    const videoListPath = "/Center Videos/The Imperial Spa & Salon/Video Gallery Links.txt";
    const facilityListPath = "/Center Images/The Imperial Spa & Salon/Facilities/Facilities Links.txt";

    const loadList = async (path: string, setter: (items: string[]) => void) => {
      try {
        const res = await fetch(encodeURI(path));
        const text = await res.text();
        const items = text
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);
        setter(items);
      } catch (err) {
        console.warn("Failed to load gallery list:", path, err);
        setter([]);
      }
    };

    loadList(photoListPath, setImages);
    loadList(videoListPath, setVideos);
    loadList(facilityListPath, setFacilityImages);
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/The Imperial Spa & Salon/Wellness & Rejuvenation Programs.txt")
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
        setPrograms(items);
      })
      .catch((err) => console.error("Error loading Imperial wellness content:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Medical Treatment Programs.txt")
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
      .catch((err) => console.error("Error loading Imperial medical content:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Why Choose The Imperial Spa and Wellness for Your Healing Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let inSection = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) {
            inSection = false;
            continue;
          }
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
      .catch((err) => console.error("Error loading Imperial why-choose content:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let intro = "";
        const steps: { number: number; title: string; description: string; bullets: string[] }[] = [];
        let current: { number: number; title: string; description: string; bullets: string[] } | null = null;
        const stepRegex = /^(\d+)\.\s+\*\*(.+?)\*\*/;
        let inSection = false;
        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) { inSection = false; continue; }
          const match = line.match(stepRegex);
          if (match) {
            if (current) steps.push(current);
            current = { number: parseInt(match[1], 10), title: match[2], description: "", bullets: [] };
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
        if (current) steps.push(current);
        setTreatmentIntro(intro);
        setTreatmentSteps(steps);
      })
      .catch((err) => console.error("Error loading Imperial treatment process content:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const introCollected: string[] = [];
        const cards: { title: string; bullets: string[] }[] = [];
        let current: { title: string; bullets: string[] } | null = null;
        let seenHeading = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            seenHeading = true;
            continue;
          }
          if (!seenHeading) {
            introCollected.push(line);
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**")) {
            if (current) cards.push(current);
            current = { title: line.slice(2, -2), bullets: [] };
            continue;
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (current) current.bullets.push(bullet);
          }
        }
        if (current) cards.push(current);
        setFacilitiesIntro(introCollected.join(" "));
        setFacilityCards(cards);
      })
      .catch((err) => console.error("Error loading Imperial facilities content:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Founder & Team Info.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
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
          if (line.startsWith("### ")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).trim();
            if (/the akoi family/i.test(t)) { section = "founder"; name = t; continue; }
            if (/leadership & expertise/i.test(t)) { section = "expertise"; continue; }
            if (/our expert wellness/i.test(t)) {
              if (currentGroup) groups.push(currentGroup);
              currentGroup = { title: t, description: "", items: [] };
              section = "group";
              continue;
            }
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (section === "expertise") { expertise.push(bullet); continue; }
            if (currentGroup) { currentGroup.items.push(bullet); continue; }
          }
          if (section === "intro") {
            intro = intro ? `${intro} ${line}` : line;
            continue;
          }
          if (section === "founder") {
            if (!role) { role = line; continue; }
            fdesc = fdesc ? `${fdesc} ${line}` : line;
            continue;
          }
          if (section === "group" && currentGroup) {
            if (!currentGroup.description) {
              currentGroup.description = line;
            } else {
              currentGroup.description = currentGroup.description ? `${currentGroup.description} ${line}` : line;
            }
            continue;
          }
        }
        if (currentGroup) groups.push(currentGroup);
        setTeamIntro(intro);
        setFounder(name ? { name, degrees, role, description: fdesc } : null);
        setFounderExpertise(expertise);
        setTeamGroups(groups);
      })
      .catch((err) => console.error("Error loading Imperial founder content:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Patient Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const items: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean }[] = [];
        let current: { id: number; name: string; location: string; condition: string; title: string; review: string; rating: number; verified: boolean } | null = null;
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
            if (ratingMatch) {
              current.rating = parseInt(ratingMatch[1], 10);
            }
            continue;
          }

          if (current && line && !line.startsWith("**") && !line.startsWith("*")) {
            current.review = current.review ? current.review + " " + line : line;
          }
        }
        if (current) items.push(current);
        setTestimonials(items);
      })
      .catch((err) => console.error("Error loading Imperial reviews:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Insurance & Payment Info.txt")
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
          if (line.startsWith("### ")) { section = "intro"; continue; }
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("insurance")) { section = "ins"; continue; }
            if (t.includes("payment")) { section = "pay"; continue; }
            if (t.includes("international")) { section = "intl"; continue; }
          }
          if (line.startsWith("*")) {
            const bullet = line.replace(/^\*+\s*/, "");
            if (section === "ins") ins.push(bullet);
            if (section === "pay") pay.push(bullet);
            continue;
          }
          if (section === "intro") intro = intro ? `${intro} ${line}` : line;
          if (section === "intl") intl = intl ? `${intl} ${line}` : line;
        }
        setInsuranceIntro(intro);
        setInsuranceBullets(ins);
        setPaymentBullets(pay);
        setInternationalText(intl);
      })
      .catch((err) => console.error("Error loading Imperial insurance info:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Frequently Asked Questions.txt")
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
      .catch((err) => console.error("Error loading Imperial FAQs:", err));

    fetch("/content/Top Centers/The Imperial Spa & Salon/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        const addr: string[] = [];
        const phones: string[] = [];
        const emails: string[] = [];
        const dists: string[] = [];
        let site = "";
        let transport = "";
        let section: "address" | "phones" | "emails" | "website" | "distances" | "transport" | "none" = "none";

        for (const line of lines) {
          if (!line) continue;
          if (line.startsWith("### ")) continue;
          if (line.startsWith("**") && line.endsWith("**")) {
            const t = line.slice(2, -2).toLowerCase();
            if (t.includes("address")) { section = "address"; continue; }
            if (t.includes("phone")) { section = "phones"; continue; }
            if (t.includes("email")) { section = "emails"; continue; }
            if (t.includes("website")) { section = "website"; continue; }
            if (t.includes("distance")) { section = "distances"; continue; }
            if (t.includes("transport")) { section = "transport"; continue; }
          }
          if (section === "address") { addr.push(line); continue; }
          if (section === "phones") { if (/^\*/.test(line)) phones.push(line.replace(/^\*+\s*/, "")); else if (line) phones.push(line); continue; }
          if (section === "emails") { if (/^\*/.test(line)) emails.push(line.replace(/^\*+\s*/, "")); else if (line) emails.push(line); continue; }
          if (section === "website") { site = site ? `${site} ${line}` : line; continue; }
          if (section === "distances") { if (line.startsWith("*")) dists.push(line.replace(/^\*+\s*/, "")); continue; }
          if (section === "transport") { transport = transport ? `${transport} ${line}` : line; continue; }
        }
        setContactAddress(addr);
        setContactPhones(phones);
        setContactEmails(emails);
        setContactWebsite(site);
        setContactDistances(dists);
        setTransportText(transport);
      })
      .catch((err) => console.error("Error loading Imperial contact info:", err));
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !images.length) return;
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  useEffect(() => {
    if (!videos.length) return;
    setSelectedVideo((prev) => (prev >= videos.length ? 0 : prev));
  }, [videos.length]);

  useEffect(() => {
    if (!videos.length) return;
    setSoukyaStyleVideoIndex((prev) => (prev >= videos.length ? 0 : prev));
  }, [videos.length]);

  useEffect(() => {
    const videoEl = soukyaStyleVideoRef.current;
    if (!videoEl) return;
    try {
      videoEl.currentTime = 0;
      videoEl.play().catch(() => {});
    } catch {
      // ignore
    }
  }, [soukyaStyleVideoIndex, videos]);

  useEffect(() => {
    if (facilityLightboxOpen || facilityImages.length === 0) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityImages.length, facilityLightboxOpen]);

  useEffect(() => {
    if (!isTeamAutoPlaying || teamGroups.length === 0) return;
    const id = setInterval(() => {
      setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isTeamAutoPlaying, teamGroups.length]);

  useEffect(() => {
    if (!isReviewAutoPlaying || testimonials.length === 0) return;
    const id = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isReviewAutoPlaying, testimonials.length]);

  useEffect(() => {
    if (isJumpModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isJumpModalOpen]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newMax = isMobile ? awards.length - 1 : Math.max(0, awards.length - 3);
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

  const goToPrevious = () => {
    if (!images.length) return;
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(true);
  };

  const goToNext = () => {
    if (!images.length) return;
    setSelectedImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(true);
  };

  const iconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("detox") || s.includes("panchakarma")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("stress") || s.includes("mental")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("anti-aging") || s.includes("rejuvenation")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("weight")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("immunity")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("beauty") || s.includes("skin")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("post-illness") || s.includes("recovery")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("corporate") || s.includes("family")) return <Users className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("weekend")) return <Calendar className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("extended")) return <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("elderly")) return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("lifestyle") || s.includes("prevention")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("pain") || s.includes("arthritis")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("neuro") || s.includes("stress")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("skin") || s.includes("beauty")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("digest") || s.includes("gut")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("immunity") || s.includes("respiratory")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  const whyIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    const cls = "h-6 w-6 text-primary group-hover:text-white transition-colors";
    if (s.includes("serene") || s.includes("delhi") || s.includes("escape")) return <MapPin className={cls} />;
    if (s.includes("legacy") || s.includes("heritage")) return <Award className={cls} />;
    if (s.includes("authentic") || s.includes("ayurveda")) return <Stethoscope className={cls} />;
    if (s.includes("nature") || s.includes("garden")) return <Leaf className={cls} />;
    if (s.includes("therapist") || s.includes("care")) return <Hospital className={cls} />;
    if (s.includes("ritual") || s.includes("oils") || s.includes("spa")) return <Sparkles className={cls} />;
    if (s.includes("detox") || s.includes("panchakarma")) return <Droplet className={cls} />;
    if (s.includes("holistic") || s.includes("wellness")) return <HeartPulse className={cls} />;
    if (s.includes("stay") || s.includes("accommodation")) return <Home className={cls} />;
    return <Heart className={cls} />;
  };

  const treatmentIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("consultation") || s.includes("assessment")) return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("protocol") || s.includes("design") || s.includes("plan")) return <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("daily") && s.includes("treatment")) return <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("nutrition") || s.includes("meals") || s.includes("diet")) return <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("wellness") || s.includes("relaxation") || s.includes("activities")) return <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    if (s.includes("follow-up") || s.includes("maintenance") || s.includes("guidance")) return <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    return <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
  };

  const getFacilityIcon = (title: string) => {
    const t = title.toLowerCase();
    return t.includes("ayurveda") || t.includes("treatment") ? <Droplet className="h-7 w-7 text-white" />
      : t.includes("doctor") ? <Stethoscope className="h-7 w-7 text-white" />
        : t.includes("cottage") || t.includes("room") || t.includes("accommodation") ? <Building2 className="h-7 w-7 text-white" />
          : t.includes("restaurant") || t.includes("dining") || t.includes("meal") ? <Utensils className="h-7 w-7 text-white" />
            : t.includes("pool") || t.includes("recreation") || t.includes("swimming") ? <Activity className="h-7 w-7 text-white" />
              : t.includes("conference") || t.includes("group") ? <Globe className="h-7 w-7 text-white" />
                : t.includes("travel") || t.includes("airport") || t.includes("station") ? <MapPin className="h-7 w-7 text-white" />
                  : t.includes("laundry") || t.includes("housekeeping") ? <Sparkles className="h-7 w-7 text-white" />
                    : t.includes("library") || t.includes("reading") ? <Globe className="h-7 w-7 text-white" />
                      : t.includes("garden") || t.includes("nature") ? <TreePine className="h-7 w-7 text-white" />
                        : t.includes("steam") || t.includes("therapy") ? <Droplet className="h-7 w-7 text-white" />
                          : t.includes("nabh") || t.includes("hospital") ? <ShieldCheck className="h-7 w-7 text-white" />
                            : <ShieldCheck className="h-7 w-7 text-white" />;
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

  const prevTeam = () => {
    if (teamGroups.length === 0) return;
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((prev) => (prev - 1 + teamGroups.length) % teamGroups.length);
  };
  const nextTeam = () => {
    if (teamGroups.length === 0) return;
    setIsTeamAutoPlaying(false);
    setCurrentTeamSlide((prev) => (prev + 1) % teamGroups.length);
  };

  const goToPreviousReview = () => {
    setIsReviewAutoPlaying(true);
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const goToNextReview = () => {
    setIsReviewAutoPlaying(true);
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const goToPreviousAward = () => {
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };
  const goToNextAward = () => {
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };

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

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-4xl font-bold leading-relaxed mb-4">
                  The Imperial Spa and Wellness
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  Luxury Spa & Holistic Wellness Retreat
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">New Delhi, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(8000+)</span>
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

      <div className="container mx-auto px-3 md:px-4 pt-12 pb-2 max-w-full" id="gallery">
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
                {images[selectedImage] && (
                  <img
                    src={images[selectedImage]}
                    alt={`The Imperial Spa ${selectedImage + 1}`}
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
                {isAutoPlaying && images.length > 1 && (
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
                      const idx = images.indexOf(thumbnailImages[0]);
                      setSelectedImage(idx);
                      setLightboxImage(idx);
                      setLightboxOpen(true);
                    }}
                  >
                    <img
                      src={thumbnailImages[0]}
                      alt="The Imperial Spa 1"
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
                          key={img}
                          className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                          onClick={() => {
                            setSelectedImage(actualIndex);
                            setLightboxImage(actualIndex);
                            setLightboxOpen(true);
                          }}
                        >
                          <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "100%" }}>
                            <img
                              src={img}
                              alt={`The Imperial Spa ${actualIndex + 1}`}
                              className="absolute inset-0 w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                            {isLastImage && images.length > 6 && (
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
                        The Imperial Spa Gallery
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {images.map((img, i) => (
                        <div
                          key={img}
                          className="relative w-full cursor-pointer"
                          style={{ paddingBottom: "75%" }}
                          onClick={() => {
                            setLightboxImage(i);
                            setLightboxOpen(true);
                          }}
                        >
                          <img src={img} alt={`The Imperial Spa ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {lightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
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
                    <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">The Imperial Spa and Wellness</div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                      {images[lightboxImage] && (
                        <img
                          src={images[lightboxImage]}
                          alt={`The Imperial Spa ${lightboxImage + 1}`}
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
            </>
          ) : (
            <>
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video mb-8">
                {videos[selectedVideo] && (
                  <video key={selectedVideo} controls controlsList="nodownload" preload="metadata" className="w-full h-full object-cover">
                    <source src={videos[selectedVideo]} type="video/mp4" />
                  </video>
                )}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  Video {videos.length ? selectedVideo + 1 : 0} / {videos.length}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {videos.map((video, idx) => (
                  <div
                    key={video}
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
      </div>

      <div className="container mx-auto px-3 md:px-4 pb-2 max-w-full">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
          <MarkdownContent
            contentPath="/content/Top Centers/The Imperial Spa & Salon/Main content.txt"
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

          <div className="mb-12 rounded-3xl p-6 md:p-6 lg:p-12" style={{ backgroundColor: "#EDE8D0" }} id="wellness">
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">8000+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Happy Patients</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.8/5</div>
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 mb-4" style={{ borderColor: "#1A428A" }}>
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">Wellness Programs</h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {wellnessIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {programs.map((p, idx) => (
                <AccordionItem key={idx} value={`prog-${idx}`} className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-[#1A428A]">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2" style={{ borderColor: "#1A428A" }}>
                        {iconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    {p.description && (
                      <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                        {p.description}
                      </p>
                    )}
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

          <div className="mb-12 rounded-3xl p-6 md:p-6 lg:p-12" style={{ backgroundColor: "#EDE8D0" }} id="medical">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-orange-500 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                {medicalIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalPrograms.map((p, idx) => (
                <AccordionItem key={idx} value={`med-${idx}`} className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-orange-500">
                    <div className="flex items-center gap-2 md:gap-3 min-w-0">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-orange-500">
                        {medicalIconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary truncate">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    {p.description && (
                      <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                        {p.description}
                      </p>
                    )}
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

          <div className="mb-12" id="videos">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Video Gallery of The Imperial Spa and Wellness
              </h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Discover the atmosphere and indulgent experience at The Imperial Spa and Wellness through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative bg-black">
                    {videos[soukyaStyleVideoIndex] && (
                      <video
                        ref={soukyaStyleVideoRef}
                        key={videos[soukyaStyleVideoIndex]}
                        src={videos[soukyaStyleVideoIndex]}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              {videos.length > 1 && (
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                  <button
                    onClick={() => setSoukyaStyleVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Previous video"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => setSoukyaStyleVideoIndex((prev) => (prev + 1) % videos.length)}
                    className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                    aria-label="Next video"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              )}

              {videos.length > 1 && (
                <div className="flex md:hidden items-center justify-between mt-4 px-6">
                  <Button
                    onClick={() => setSoukyaStyleVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => setSoukyaStyleVideoIndex((prev) => (prev + 1) % videos.length)}
                    className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                  >
                    Next
                  </Button>
                </div>
              )}

              {videos.length > 1 && (
                <div className="flex justify-center gap-2 mt-6 md:mt-8">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSoukyaStyleVideoIndex(index)}
                      className={`transition-all ${index === soukyaStyleVideoIndex ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-12" id="why-choose">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">
                Why Choose The Imperial Spa and Wellness for Your Healing Journey
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {whyIntro}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyItems.map((it, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          {whyIconForTitle(it.title)}
                        </div>
                        <h3 className="text-lg font-bold text-primary">{it.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>{it.description}</p>
                      {it.bullets.length > 0 && (
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

          <div className="mb-12" id="testimonial-videos">
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of The Imperial Spa and Wellness
              </h2>
              <div className="w-12 h-1 bg-primary/20 mx-auto mb-3 rounded-full hidden md:block" />
              <p className="text-sm md:text-lg mx-auto max-w-none leading-relaxed italic" style={{ color: "#7F543D" }}>
                Watch heartfelt experiences from guests who found serenity and renewal with us.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative bg-black">
                    {testimonialVideos[selectedTestimonialVideo] && (
                      <video
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={testimonialVideos[selectedTestimonialVideo]}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    )}
                  </div>
                </CardContent>
              </Card>

              {testimonialVideos.length > 1 && (
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
              )}

              {testimonialVideos.length > 1 && (
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
              )}

              {testimonialVideos.length > 1 && (
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
              )}
            </div>
          </div>

          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                {treatmentIntro}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {treatmentSteps.map((s, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                      {s.number}
                    </div>
                    {idx < treatmentSteps.length - 1 && (
                      <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                    )}
                  </div>
                  <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                    <CardContent className="p-4 md:p-6">
                      <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                        {s.number}
                      </div>
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-12 md:pl-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {treatmentIconForTitle(s.title)}
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-primary pr-2">{s.title}</h3>
                      </div>
                      <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>{s.description}</p>
                      {s.bullets && s.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {s.bullets.map((b, i) => (
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

          <div className="mb-2 md:mb-3">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src="/Center Images/The Imperial Spa & Salon/CTA mid.jpg"
                    alt="The Imperial Spa and Wellness"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h3 className="text-xl font-bold text-primary text-center mb-3">Ready to Start Your Wellness Journey?</h3>
                  <p className="text-sm text-center mb-4" style={{ color: "#7F543D" }}>
                    Take the first step toward holistic healing. Our team will guide you with personalized plans tailored to your needs.
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
                    src="/Center Images/The Imperial Spa & Salon/CTA bottom.jpg"
                    alt="The Imperial Spa and Wellness"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-3 md:px-4 max-w-full">
            <div className="max-w-6xl mx-auto mt-6">
              <div className="mb-12" id="facilities">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
                  <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>{facilitiesIntro}</p>
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
                      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentFacilityImage * 100}%)` }}>
                        {facilityImages.map((image, index) => (
                          <div key={image} className="w-full flex-shrink-0 px-2">
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
                          <div key={image} className="w-1/5 flex-shrink-0 px-2">
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
                    <Card
                      key={idx}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            {getFacilityIcon(card.title)}
                          </div>
                          <h3 className="text-lg font-bold text-primary">{card.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {card.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-primary mt-1">&#10003;</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-12 rounded-3xl p-6 md:p-12" style={{ backgroundColor: "#EDE8D0" }} id="team">
                <div className="text-center mb-6 md:mb-10">
                  <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">Founder & Team Info</h1>
                  {teamIntro && (
                    <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>{teamIntro}</p>
                  )}
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch px-1 md:px-0">
                  <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full">
                    <CardContent className="p-4 md:p-8 h-full md:h-[480px] flex flex-col">
                      <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: "conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)" }}>
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                            <img src={founderImage} alt="Founder" className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 leading-snug break-words">
                            {founder?.name || "Founder"}
                          </h3>
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
                              <img src={teamImage} alt="Team" className="w-full h-full object-cover" />
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
                      Hear from our guests about their transformational wellness journeys
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
                        onClick={() => { setIsReviewAutoPlaying(true); setCurrentReview(idx); }}
                        className={`transition-all rounded-full ${currentReview === idx
                          ? "w-8 h-3 bg-primary"
                          : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                          }`}
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
                    Celebrating recognition for heritage luxury, wellness excellence, and guest experience.
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
                            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                              <div className="w-full aspect-square bg-[#2F5B63] rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                                <img
                                  src={award.image}
                                  alt={award.title}
                                  className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                                />
                              </div>
                              <div className="text-center">
                                <h4 className="text-lg font-bold text-primary mb-2 line-clamp-1">{award.title}</h4>
                                <p className="text-sm italic line-clamp-3" style={{ color: "#7F543D" }}>"{award.description}"</p>
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
                              <div className="w-full aspect-square bg-[#2F5B63] rounded-xl mb-4 md:mb-6 p-4 md:p-6 flex items-center justify-center overflow-hidden">
                                <img
                                  src={award.image}
                                  alt={award.title}
                                  className="max-h-[80%] max-w-[80%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                                />
                              </div>
                              <div className="text-center">
                                <h4 className="text-xl font-bold text-primary mb-3">{award.title}</h4>
                                <p className="text-base italic" style={{ color: "#7F543D" }}>"{award.description}"</p>
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
                        onClick={() => { setCurrentAward(i); }}
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
                    <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                      {insuranceIntro}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                            <ShieldCheck className="h-6 w-6 text-green-600" />
                          </div>
                          <h3 className="text-xl font-bold text-primary">Insurance Support</h3>
                        </div>
                        <ul className="space-y-3">
                          {insuranceBullets.map((b, i) => (
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
                          <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                        </div>
                        <ul className="space-y-3">
                          {paymentBullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                              <span className="text-primary mt-1">&#10003;</span>
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
                      Find answers to common questions about treatments, services, and your wellness journey.
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

                        {contactPhones.length > 0 && (
                          <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-primary mb-1">Phone</h4>
                              <div className="flex flex-col space-y-1">
                                {contactPhones.map((p, i) => (
                                  <a key={i} href={`tel:${p.replace(/\s+/g, "")}`} className="text-sm md:text-base underline" style={{ color: "#7F543D" }}>
                                    {p}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {contactEmails.length > 0 && (
                          <div className="flex items-start gap-4">
                            <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-primary mb-1">Email</h4>
                              <div className="flex flex-col space-y-1">
                                {contactEmails.map((e, i) => (
                                  <a key={i} href={`mailto:${e}`} className="text-sm md:text-base underline" style={{ color: "#7F543D" }}>
                                    {e}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        {contactWebsite && (
                          <div className="flex items-start gap-4">
                            <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-bold text-primary mb-1">Website</h4>
                              <p className="text-sm md:text-base underline" style={{ color: "#7F543D" }}>
                                {contactWebsite}
                              </p>
                            </div>
                          </div>
                        )}

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
                                title="The Imperial Spa and Wellness Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.158101307948!2d77.21367628885493!3d28.62502330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35eb02e477%3A0xce8f437dbb2d6ca9!2sThe%20Imperial%20New%20Delhi!5e0!3m2!1sen!2sin!4v1773946353918!5m2!1sen!2sin"
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
            </div>
          </div>
        </div>
      </div>

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
              The Imperial Spa and Wellness Facilities & Amenities
            </div>
            <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={facilityImages[facilityLightboxImage]}
                alt={`The Imperial Facility ${facilityLightboxImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
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

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Mobile BROWSE Action (Bottom Left) */}
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

      {/* Desktop Vertical JUMP Button */}
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

            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[26px] font-extrabold leading-tight tracking-tight whitespace-nowrap text-white">
                  Sections of Imperial
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
              Holistic Healing Sanctuary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheImperialSpaAndWellness;
