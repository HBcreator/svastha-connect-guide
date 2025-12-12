import { useState, useEffect } from "react";
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
  Building2,
  Utensils,
  Globe,
  TreePine,
} from "lucide-react";

export default function DheemahiKumarakom() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
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

  useEffect(() => {
    fetch("/Center Images/Dheemahi Ayurvedic Centre/Photo Gallery/CDN images-data.txt")
      .then((res) => res.text())
      .then((text) => {
        const urls = text.split("\n").map((s) => s.trim()).filter((s) => s);
        setImages(urls);
      })
      .catch(() => {});
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
      .catch(() => {});
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
    const cls = "h-7 w-7 text-white";
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
    return <ShieldCheck className={cls} />;
  };

  useEffect(() => {
    fetch("/Center Videos/Dheemahi Ayurvedic Centre/CDN-videos.txt")
      .then((res) => res.text())
      .then((text) => {
        const urls = text.split("\n").map((s) => s.trim()).filter((s) => s);
        setVideos(urls);
      })
      .catch(() => {});
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
      .catch(() => {});
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
      .catch(() => {});
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
      .catch(() => {});
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
      .catch(() => {});
  }, []);
  useEffect(() => {
    fetch("/Center Images/Dheemahi Ayurvedic Centre/Facilities and Ameties/CDN-images data.txt")
      .then((res) => res.text())
      .then((text) => {
        const urls = text.split("\n").map((s) => s.trim()).filter((s) => s);
        setFacilityImages(urls);
      })
      .catch(() => {});
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

      <section className="container mx-auto px-3 md:px-4 py-12 max-w-full">
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

                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {images.length > 0 ? `${selectedImage + 1} / ${images.length}` : "0 / 0"}
                </div>
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
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    {images[0] && (
                      <img
                        src={images[0]}
                        alt="Dheemahi 1"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
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
                        <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                          <img
                            src={img}
                            alt={`Dheemahi ${actualIndex + 1}`}
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
                <video key={selectedVideo} controls controlsList="nodownload" preload="metadata" className="w-full h-full object-cover">
                  <source src={videos[selectedVideo]} type="video/mp4" />
                </video>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  {videos.length > 0 ? `Video ${selectedVideo + 1} / ${videos.length}` : "No videos"}
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
        </div>
        {/* Content Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <MarkdownContent contentPath="/content/Dheemahi Ayurvedic Centre/Dheemahi Ayurvedic Centre.txt" />
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
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        </div>
                        <span className="text-base md:text-lg font-semibold text-primary">{sec.title}</span>
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

          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
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
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                        </div>
                        <span className="text-base md:text-lg font-semibold text-primary">{sec.title}</span>
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

          <div className="mb-12">
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

          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {processIntro}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, idx) => (
                <div key={step.n} className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                      {step.n}
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
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

          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img
                    src={"/Center Images/Dheemahi Ayurvedic Centre/Photo Gallery/CTA image.jpg"}
                    alt="Dheemahi Kumarakom Ayurvedic Centre"
                    className="w-full h-auto rounded-xl mb-4 object-cover"
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
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-3 md:px-4 max-w-full">
            <div className="max-w-6xl mx-auto mt-6">
              <div className="mb-12">
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
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                            {facilityIconForTitle(card.title)}
                          </div>
                          <h3 className="text-2xl font-bold text-primary">{card.title}</h3>
                        </div>
                        <ul className="space-y-2.5">
                          {card.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
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
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {facilityLightboxImage + 1} / {facilityImages.length}
                  </div>
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
          )}

        </div>
      </section>

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
              Dheemahi Kumarakom Ayurvedic Centre
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
                Dheemahi Kumarakom Ayurvedic Centre
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
      )}


      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
