import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, Images, Video, Users, Heart, TrendingUp, Droplet, Brain, Sparkles, ShieldCheck, HeartPulse, Activity, UserCheck, Stethoscope, Pill, Hospital, Home, Utensils, Leaf, Award, ClipboardList, FileSearch, Phone, MessageCircle, Building2, Globe, TreePine } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AgniAyurvedicVillage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [programs, setPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [whyIntro, setWhyIntro] = useState("");
  const [whyItems, setWhyItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [treatmentIntro, setTreatmentIntro] = useState("");
  const [treatmentSteps, setTreatmentSteps] = useState<{ number: number; title: string; description: string; bullets: string[] }[]>([]);
  const [facilitiesIntro, setFacilitiesIntro] = useState("");
  const [facilityCards, setFacilityCards] = useState<{ title: string; bullets: string[] }[]>([]);
  const facilityImages = [
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-01.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-02.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-03.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-04.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-05.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-06.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-07.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-08.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-09.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-10.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-11.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-12.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-13.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-14.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-15.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-16.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-17.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-18.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-19.jpg",
    "/Center Images/Agni - Ayurvedic Village/Facilities and Ameties/facilities-20.jpg",
  ];
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);

  const images = [
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-02.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-03.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-04.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-05.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-06.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-07.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-08.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-09.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-10.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-11.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-12.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-13.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-14.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-15.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-16.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-17.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-18.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-19.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-20.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-21.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-22.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-23.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-24.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-25.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-26.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-27.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-28.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-29.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-30.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-31.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-32.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-33.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-34.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-35.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-36.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-37.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-38.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-39.jpg",
    "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-40.jpg",
  ];

  const thumbnailImages = [
    images[0],
    images[1],
    images[5],
    images[11],
    images[19],
    images[29],
  ];

  const videos = [
    "https://Savastha.b-cdn.net/Centers/Agni%20Ayurvedic%20Village/Videos/Agni%20Ayurvedic%20Village-video-01.mp4",
    "https://Savastha.b-cdn.net/Centers/Agni%20Ayurvedic%20Village/Videos/Agni%20Ayurvedic%20Village-video-02.mp4",
    "https://Savastha.b-cdn.net/Centers/Agni%20Ayurvedic%20Village/Videos/Agni%20Ayurvedic%20Village-video-03.mp4",
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(true);
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(true);
  };

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
    fetch("/content/Top Centers/Agni Ayurvedic Village/Wellness & Rejuvenation Programs.txt")
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
      .catch((err) => console.error("Error loading Agni wellness content:", err));
  }, []);

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

  useEffect(() => {
    fetch("/content/Top Centers/Agni Ayurvedic Village/Medical Treatment Programs.txt")
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
      .catch((err) => console.error("Error loading Agni medical content:", err));
  }, []);

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("panchakarma") || s.includes("detox")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("weight")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("diabetes")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("stress") || s.includes("sleep")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("arthritis") || s.includes("pain")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("immunity") || s.includes("rejuvenation")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("gastro") || s.includes("digest")) return <Pill className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("respiratory")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("neuro")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("women")) return <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("skin")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    if (s.includes("fertility") || s.includes("conception")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  useEffect(() => {
    fetch("/content/Top Centers/Agni Ayurvedic Village/Why Choose Agni Ayurvedic Village.txt")
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
            inSection = false; // main title line
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
      .catch((err) => console.error("Error loading Agni why-choose content:", err));
  }, []);

  const whyIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    const cls = "h-6 w-6 text-primary group-hover:text-white transition-colors";
    if (s.includes("serene") || s.includes("near mumbai") || s.includes("escape")) return <MapPin className={cls} />;
    if (s.includes("legacy") || s.includes("family")) return <Award className={cls} />;
    if (s.includes("authentic") || s.includes("classical ayurveda")) return <Stethoscope className={cls} />;
    if (s.includes("nature") || s.includes("river") || s.includes("air")) return <Leaf className={cls} />;
    if (s.includes("physician") || s.includes("care")) return <Hospital className={cls} />;
    if (s.includes("herbal") || s.includes("medicines") || s.includes("oils")) return <Sparkles className={cls} />;
    if (s.includes("panchakarma") || s.includes("detox")) return <Droplet className={cls} />;
    if (s.includes("integrated") || s.includes("yoga")) return <HeartPulse className={cls} />;
    if (s.includes("living") || s.includes("accommodation") || s.includes("food")) return <Home className={cls} />;
    return <Heart className={cls} />;
  };

  useEffect(() => {
    fetch("/content/Top Centers/Agni Ayurvedic Village/Treatment Process & Patient Journey.txt")
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
      .catch((err) => console.error("Error loading Agni treatment process content:", err));
  }, []);

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

  useEffect(() => {
    fetch("/content/Top Centers/Agni Ayurvedic Village/Facilities & Amenities.txt")
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
      .catch((err) => console.error("Error loading Agni facilities content:", err));
  }, []);

  useEffect(() => {
    if (facilityLightboxOpen) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityImages.length, facilityLightboxOpen]);

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
      : t.includes("garden") || t.includes("nature") || t.includes("wilderness") ? <TreePine className="h-7 w-7 text-white" />
      : t.includes("steam") || t.includes("therapy") ? <Droplet className="h-7 w-7 text-white" />
      : t.includes("nabh") || t.includes("hospital") ? <ShieldCheck className="h-7 w-7 text-white" />
      : <ShieldCheck className="h-7 w-7 text-white" />;
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-4xl font-bold leading-relaxed mb-4">
                  Agni Ayurvedic Village Resort
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  Traditional Ayurveda & Nature Retreat
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.7</span>
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
          <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
              <Button
                variant={!showVideoGallery ? "default" : "outline"}
                size="lg"
                onClick={() => setShowVideoGallery(false)}
                className="text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none"
              >
                Photo Gallery
              </Button>
              <Button
                variant={showVideoGallery ? "default" : "outline"}
                size="lg"
                onClick={() => setShowVideoGallery(true)}
                className="flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none"
              >
                <Video className="h-4 w-4 md:h-6 md:w-6" />
                Video Gallery
              </Button>
            </div>
          </div>

          {!showVideoGallery ? (
            <>
              <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                <img
                  src={images[selectedImage]}
                  alt={`Agni Center ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />
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
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <img
                      src={thumbnailImages[0]}
                      alt="Agni 1"
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
                        onClick={() => {
                          setSelectedImage(actualIndex);
                          setLightboxImage(actualIndex);
                          setLightboxOpen(true);
                        }}
                      >
                        <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                          <img
                            src={img}
                            alt={`Agni ${actualIndex + 1}`}
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
                        Agni Ayurvedic Village Resort
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
                          <img src={img} alt={`Agni ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {lightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
                  {/* Left Arrow (desktop only) */}
                  <button
                    onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  {/* Right Arrow (desktop only) */}
                  <button
                    onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl">
                    <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">
                      Agni Ayurvedic Village Resort
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={images[lightboxImage]}
                        alt={`Agni ${lightboxImage + 1}`}
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
                    {/* Mobile prev/next pills */}
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
              )}
            </>
          ) : (
            <>
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video mb-8">
                <video key={selectedVideo} controls controlsList="nodownload" preload="metadata" className="w-full h-full object-cover">
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

          <Card className="mb-12">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <MarkdownContent contentPath="/content/Top Centers/Agni Ayurvedic Village/Agni Ayurvedic Village.txt" />
            </CardContent>
          </Card>

          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }}>
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
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
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                        {iconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary">{p.title}</span>
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

          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
                {medicalIntro}
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalPrograms.map((p, idx) => (
                <AccordionItem key={idx} value={`med-${idx}`} className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                  <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        {medicalIconForTitle(p.title)}
                      </div>
                      <span className="text-base md:text-lg font-semibold text-primary">{p.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                    {p.description && (
                      <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                        {p.description}
                      </p>
                    )}
                    <ul className="space-y-1.5 md:space-y-2">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
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

          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Why Choose Agni Ayurvedic Village for Your Healing Journey</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: '#7F543D' }}>
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
                      <p className="text-sm leading-relaxed text-left" style={{ color: '#7F543D' }}>{it.description}</p>
                      {it.bullets.length > 0 && (
                        <ul className="list-none pl-0 space-y-1.5">
                          {it.bullets.slice(0, 3).map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
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

          <div className="mb-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>
                {treatmentIntro}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {treatmentSteps.map((s, idx) => (
                <div key={idx} className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                      {s.number}
                    </div>
                    {idx < treatmentSteps.length - 1 && (
                      <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          {treatmentIconForTitle(s.title)}
                        </div>
                        <h3 className="text-base md:text-xl font-bold text-primary">{s.title}</h3>
                      </div>
                      <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#7F543D' }}>{s.description}</p>
                      {s.bullets && s.bullets.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {s.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
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

          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img src="/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg" alt="Agni Ayurvedic Village" className="w-full h-auto rounded-xl mb-4 object-cover" />
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
                  <img src="/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg" alt="Agni Ayurvedic Village" className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-3 md:px-4 max-w-full">
            <div className="max-w-6xl mx-auto mt-6">
              <div className="mb-12">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
                  <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: '#7F543D' }}>{facilitiesIntro}</p>
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
                          <div key={index} className="w-full flex-shrink-0 px-2">
                            <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}>
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
                            <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setFacilityLightboxImage(index); setFacilityLightboxOpen(true); }}>
                              <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-2 mt-6">
                    {facilityImages.map((_, index) => (
                      <button key={index} onClick={() => setCurrentFacilityImage(index)} className={`transition-all ${index === currentFacilityImage ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`} aria-label={`Go to facility image ${index + 1}`} />
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {facilityCards.map((card, idx) => (
                    <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {getFacilityIcon(card.title)}
                          </div>
                          <h3 className="text-2xl font-bold text-primary">{card.title}</h3>
                        </div>
                        <ul className="space-y-2.5">
                          {card.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                              <span className="text-primary mt-1">•</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {facilityLightboxOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm">
              <button onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90" aria-label="Previous">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg items-center justify-center hover:bg-white/90" aria-label="Next">
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl">
                <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Agni Ayurvedic Village Resort</div>
                <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                  <img src={facilityImages[facilityLightboxImage]} alt={`Facility ${facilityLightboxImage + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                  <button onClick={() => setFacilityLightboxOpen(false)} className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow" aria-label="Close">✕</button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">{facilityLightboxImage + 1} / {facilityImages.length}</div>
                </div>
                <div className="flex md:hidden items-center justify-between mt-4">
                  <Button onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)} className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5">
                    Previous
                  </Button>
                  <Button onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)} className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}

          
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
