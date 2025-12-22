import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, Images, Video, Users, TrendingUp, Heart, Droplet, Brain, Sparkles, Activity, HeartPulse, ShieldCheck, UserCheck, Pill, Stethoscope, FileSearch, ClipboardList, Utensils, Home, Globe, Building2, TreePine, Award, Leaf, Hospital } from "lucide-react";

export default function BackToRoots() {
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

  const images = [
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-1.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-2.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-3.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-4.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-5.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-6.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-7.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-8.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-9.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-10.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-11.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-12.jpg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-13.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-14.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-15.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-16.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-17.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-18.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-19.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-20.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-21.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-22.jpeg",
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Images/Photo%20Gallery/root-23.jpeg"
  ];

  const thumbnailImages = [
    images[0],
    images[1],
    images[2],
    images[3],
    images[4],
    images[5],
  ];

  const videos = [
    "https://Savastha.b-cdn.net/Centers/Back%20to%20Roots%20Ayurveda%20Retreat/Videos/root-1.mp4"
  ];

  useEffect(() => {
    fetch("/content/Top Centers/Back to Roots Ayurveda Retreat/Wellness Programs.txt")
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
      .catch((err) => console.error("Error loading Back to Roots wellness content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Back to Roots Ayurveda Retreat/Medical Programs.txt")
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
      .catch((err) => console.error("Error loading Back to Roots medical content:", err));
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Back to Roots Ayurveda Retreat/Why Choose Back to Roots.txt")
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
      .catch((err) => console.error("Error loading Back to Roots why-choose content:", err));
  }, []);

  const whyIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    const cls = "h-6 w-6 text-primary group-hover:text-white transition-colors";
    if (s.includes("generations") || s.includes("legacy")) return <Award className={cls} />;
    if (s.includes("pure") || s.includes("authentic")) return <Leaf className={cls} />;
    if (s.includes("accredited") || s.includes("nabh")) return <ShieldCheck className={cls} />;
    if (s.includes("lakeside") || s.includes("sanctuary") || s.includes("environment")) return <TreePine className={cls} />;
    if (s.includes("unique") || s.includes("plan")) return <FileSearch className={cls} />;
    if (s.includes("physician") || s.includes("medical")) return <Stethoscope className={cls} />;
    if (s.includes("panchakarma") || s.includes("detox")) return <Droplet className={cls} />;
    if (s.includes("holistic")) return <HeartPulse className={cls} />;
    return <Heart className={cls} />;
  };

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
    if (s.includes("spine") || s.includes("neck")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  const iconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("detox") || s.includes("panchakarma")) return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("stress") || s.includes("mental") || s.includes("mindful")) return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("anti-aging") || s.includes("rejuvenation") || s.includes("beauty") || s.includes("skin")) return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("weight")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("immunity")) return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("post-illness") || s.includes("recovery")) return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("corporate") || s.includes("family")) return <Users className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("weekend")) return <Calendar className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("extended")) return <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("elderly")) return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    if (s.includes("lifestyle") || s.includes("prevention")) return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Back to Roots Ayurveda Retreat
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  Authentic Ayurveda in a Serene Lakeside Sanctuary
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Idukki, Kerala, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(100+ reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold w-full md:w-auto"
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
                  alt={`Back to Roots ${selectedImage + 1}`}
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
                      alt="Back to Roots 1"
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
                            alt={`Back to Roots ${actualIndex + 1}`}
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
                        Back to Roots Ayurveda Retreat
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
                          <img src={img} alt={`Back to Roots ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
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
                      Back to Roots Ayurveda Retreat
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={images[lightboxImage]}
                        alt={`Back to Roots ${lightboxImage + 1}`}
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
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed">
            <MarkdownContent contentPath="/content/Top Centers/Back to Roots Ayurveda Retreat/main content.txt" />
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
                    <span className="text-base md:text-lg font-semibold text-primary text-left">{p.title}</span>
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
                    <span className="text-base md:text-lg font-semibold text-primary text-left">{p.title}</span>
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
            <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Why Choose Back to Roots Ayurveda for Your Healing Journey</h2>
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
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
