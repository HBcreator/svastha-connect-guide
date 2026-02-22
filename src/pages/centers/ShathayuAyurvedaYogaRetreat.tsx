import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MarkdownContent from "@/components/MarkdownContent";
import {
  Activity,
  Brain,
  BookOpen,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Droplet,
  FileSearch,
  HeartPulse,
  Home,
  Hospital,
  Heart,
  Images,
  Leaf,
  MapPin,
  MessageCircle,
  Pill,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  TreePine,
  TrendingUp,
  Utensils,
  UserCheck,
  Users,
  Video,
} from "lucide-react";

type CardItem = { title: string; description: string; bullets: string[] };
type SectionData = { title: string; description: string; cards: CardItem[] };
type ProcessStep = { title: string; description: string; bullets: string[] };

function parseCardSection(text: string): SectionData {
  const lines = text.split("\n").map((l) => l.trim());
  let title = "";
  let description = "";
  const cards: CardItem[] = [];
  let current: CardItem | null = null;
  let inCards = false;

  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith("### ")) {
      title = line.replace(/^###\s+/, "");
      inCards = false;
      continue;
    }
    if (line.startsWith("**") && line.endsWith("**")) {
      if (current) cards.push(current);
      current = { title: line.slice(2, -2), description: "", bullets: [] };
      inCards = true;
      continue;
    }
    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "");
      if (current) current.bullets.push(bullet);
      continue;
    }
    if (!inCards) {
      description = description ? `${description} ${line}` : line;
    } else if (current) {
      current.description = current.description ? `${current.description} ${line}` : line;
    }
  }

  if (current) cards.push(current);
  return { title, description, cards };
}

function parseProcessSection(text: string): {
  title: string;
  description: string;
  steps: ProcessStep[];
} {
  const lines = text.split("\n").map((l) => l.trim());
  let title = "";
  let description = "";
  const steps: ProcessStep[] = [];
  let current: ProcessStep | null = null;
  let inSteps = false;

  for (const line of lines) {
    if (!line) continue;

    if (!inSteps && line.startsWith("**") && line.endsWith("**")) {
      title = line.slice(2, -2);
      continue;
    }

    const stepMatch = line.match(/^\d+\.\s+\*\*(.+)\*\*$/);
    if (stepMatch) {
      if (current) steps.push(current);
      current = { title: stepMatch[1].trim(), description: "", bullets: [] };
      inSteps = true;
      continue;
    }

    if (line.startsWith("*")) {
      const bullet = line.replace(/^\*+\s*/, "");
      if (current) current.bullets.push(bullet);
      continue;
    }

    if (!inSteps) {
      description = description ? `${description} ${line}` : line;
    } else if (current) {
      current.description = current.description ? `${current.description} ${line}` : line;
    }
  }

  if (current) steps.push(current);
  return { title, description, steps };
}

export default function ShathayuAyurvedaYogaRetreat() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const galleryVideoRef = useRef<HTMLVideoElement | null>(null);
  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [facilitiesData, setFacilitiesData] = useState<SectionData | null>(null);
  const [facilityImages, setFacilityImages] = useState<string[]>([]);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [showTopVideoGallery, setShowTopVideoGallery] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessPrograms, setWellnessPrograms] = useState<
    { title: string; description: string; bullets: string[] }[]
  >([]);
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalPrograms, setMedicalPrograms] = useState<
    { title: string; description: string; bullets: string[] }[]
  >([]);
  const [whyChooseData, setWhyChooseData] = useState<SectionData | null>(null);
  const [processTitle, setProcessTitle] = useState("");
  const [processDescription, setProcessDescription] = useState("");
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([]);

  useEffect(() => {
    const imagesPath = encodeURI(
      "/Center Images/Shathayu Ayurveda Yoga Retreat/Photo gallery/Photo Gallery.txt"
    );
    fetch(imagesPath)
      .then((res) => res.text())
      .then((text) => {
        const parsed = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setImages(parsed);
        setSelectedImage(0);
      })
      .catch((err) => console.error("Error loading Shathayu photo gallery:", err));

    const videosPath = encodeURI(
      "/Center Videos/Shathayu Ayurveda Yoga Retreat/video gallery.txt"
    );
    fetch(videosPath)
      .then((res) => res.text())
      .then((text) => {
        const parsed = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setVideos(parsed);
        setSelectedVideo(0);
      })
      .catch((err) => console.error("Error loading Shathayu video gallery:", err));

    fetch("/content/Top Centers/Shathayu Ayurveda Yoga Retreat/Wellness Programs.txt")
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
      .catch((err) => console.error("Error loading Shathayu wellness programs:", err));

    fetch("/content/Top Centers/Shathayu Ayurveda Yoga Retreat/Medical Programs.txt")
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
      .catch((err) => console.error("Error loading Shathayu medical programs:", err));

    fetch("/content/Top Centers/Shathayu Ayurveda Yoga Retreat/Why Choose Shathayu.txt")
      .then((res) => res.text())
      .then((text) => setWhyChooseData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Shathayu Why Choose:", err));

    fetch(
      "/content/Top Centers/Shathayu Ayurveda Yoga Retreat/Treatment Process & Patient Journey.txt"
    )
      .then((res) => res.text())
      .then((text) => {
        const parsed = parseProcessSection(text);
        setProcessTitle(parsed.title);
        setProcessDescription(parsed.description);
        setProcessSteps(parsed.steps);
      })
      .catch((err) => console.error("Error loading Shathayu process journey:", err));

    fetch("/content/Top Centers/Shathayu Ayurveda Yoga Retreat/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => setFacilitiesData(parseCardSection(text)))
      .catch((err) => console.error("Error loading Shathayu facilities:", err));

    fetch("/Center Images/Shathayu Ayurveda Yoga Retreat/Facilities/Facilities.txt")
      .then((res) => res.text())
      .then((text) => {
        const parsed = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        setFacilityImages(parsed);
        setCurrentFacilityImage(0);
      })
      .catch((err) => console.error("Error loading Shathayu facility images:", err));

    setTestimonialVideos([
      encodeURI(
        "/Center Videos/Shathayu Ayurveda Yoga Retreat/Testimonies/testimonie 1 Shathayu Ayurveda Yoga Retreat video .mp4"
      ),
      encodeURI(
        "/Center Videos/Shathayu Ayurveda Yoga Retreat/Testimonies/testimonie 2 Shathayu Ayurveda Yoga Retreat video .mp4"
      ),
    ]);
    setSelectedTestimonialVideo(0);
  }, []);

  const wellnessIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("detox") || s.includes("purification") || s.includes("panchakarma")) {
      return <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("stress") || s.includes("burnout") || s.includes("mind") || s.includes("digital")) {
      return <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("beauty") || s.includes("skin") || s.includes("rejuvenation") || s.includes("rasayana")) {
      return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("weight") || s.includes("metabolism") || s.includes("spine") || s.includes("joint")) {
      return <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("immunity") || s.includes("preventive")) {
      return <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    if (s.includes("yoga") || s.includes("meditation")) {
      return <Leaf className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
    }
    return <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />;
  };

  const medicalIconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("infert") || s.includes("pcod") || s.includes("pcos")) {
      return <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("diabetes") || s.includes("metabolic") || s.includes("obesity") || s.includes("lifestyle")) {
      return <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("neuro") || s.includes("migraine") || s.includes("stroke")) {
      return <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("stress") || s.includes("anxiety") || s.includes("sleep") || s.includes("insomnia")) {
      return <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("skin") || s.includes("psoriasis") || s.includes("eczema")) {
      return <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("respiratory") || s.includes("asthma") || s.includes("allergy") || s.includes("sinus")) {
      return <TreePine className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("pain") || s.includes("arthritis") || s.includes("spine") || s.includes("back") || s.includes("disc")) {
      return <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("panchakarma") || s.includes("chronic")) {
      return <Hospital className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    if (s.includes("digest") || s.includes("ibs") || s.includes("ibd") || s.includes("gerd") || s.includes("colitis") || s.includes("crohn")) {
      return <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
    }
    return <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />;
  };

  const iconForTitle = (t: string) => {
    const s = t.toLowerCase();
    if (s.includes("legacy") || s.includes("1901") || s.includes("generation")) {
      return <Star className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("accredit") || s.includes("nabh") || s.includes("iso")) {
      return <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("trusted") || s.includes("across india") || s.includes("clinics")) {
      return <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("physician") || s.includes("guided")) {
      return <HeartPulse className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("integrated") || s.includes("approach") || s.includes("yoga") || s.includes("naturopathy")) {
      return <Leaf className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("unique") || s.includes("treatment plan")) {
      return <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("sanctuary") || s.includes("serene") || s.includes("green") || s.includes("bangalore")) {
      return <TreePine className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("educ") || s.includes("empower")) {
      return <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    if (s.includes("lasting") || s.includes("results") || s.includes("100 years") || s.includes("shathayu")) {
      return <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
    }
    return <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
  };

  const processIconForStep = (index: number) => {
    const icons = [
      <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
      <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
      <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
      <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
      <Leaf className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
      <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />,
    ];
    return icons[index] || <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />;
  };

  const getFacilityIcon = (t: string) => {
    const s = t.toLowerCase();

    if (s.includes("accommodation") || s.includes("room") || s.includes("suite") || s.includes("stay") || s.includes("private")) {
      return <Home className="h-7 w-7 text-white" />;
    }
    if (s.includes("architecture") || s.includes("design") || s.includes("building")) {
      return <Building2 className="h-7 w-7 text-white" />;
    }
    if (s.includes("farm") || s.includes("organic") || s.includes("garden") || s.includes("acre") || s.includes("green")) {
      return <TreePine className="h-7 w-7 text-white" />;
    }
    if (s.includes("infrastructure") || s.includes("treatment") || s.includes("therapy") || s.includes("pharmacy") || s.includes("hospital") || s.includes("consultation")) {
      return <Stethoscope className="h-7 w-7 text-white" />;
    }
    if (s.includes("yoga") || s.includes("meditation") || s.includes("hall") || s.includes("mindful")) {
      return <Sparkles className="h-7 w-7 text-white" />;
    }
    if (s.includes("dining") || s.includes("cuisine") || s.includes("food") || s.includes("meal") || s.includes("table")) {
      return <Utensils className="h-7 w-7 text-white" />;
    }
    if (s.includes("recreation") || s.includes("pool") || s.includes("swimming") || s.includes("activity")) {
      if (s.includes("pool") || s.includes("swimming") || s.includes("water")) return <Droplet className="h-7 w-7 text-white" />;
      return <Activity className="h-7 w-7 text-white" />;
    }
    if (s.includes("safety") || s.includes("nabh") || s.includes("standard") || s.includes("medical") || s.includes("iso")) {
      return <ShieldCheck className="h-7 w-7 text-white" />;
    }
    if (s.includes("services") || s.includes("housekeeping") || s.includes("laundry") || s.includes("guest") || s.includes("transfer") || s.includes("staff")) {
      return <Users className="h-7 w-7 text-white" />;
    }

    return <Heart className="h-7 w-7 text-white" />;
  };

  useEffect(() => {
    if (facilityImages.length === 0) return;
    const interval = window.setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [facilityImages.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (showTopVideoGallery) return;
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [images.length, isAutoPlaying, showTopVideoGallery]);

  const goToPrevious = () => {
    if (images.length === 0) return;
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    if (images.length === 0) return;
    setSelectedImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Shathayu Ayurveda Yoga Retreat</h1>
                <p className="text-xl mb-4 opacity-90">Ayurveda • Yoga • Coastal Healing Sanctuary</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Udupi, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(Guest Reviews)</span>
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
                  className={`flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${
                    showTopVideoGallery
                      ? "scale-105 shadow-lg"
                      : "bg-accent text-white hover:bg-accent/90"
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
                      alt={`Shathayu Center ${selectedImage + 1}`}
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
                        setLightboxImage(images.indexOf(thumbnailImages[0]));
                        setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={thumbnailImages[0]}
                        alt="Shathayu 1"
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
                            <div
                              className="relative w-full rounded-xl overflow-hidden"
                              style={{ paddingBottom: "100%" }}
                            >
                              <img
                                src={img}
                                alt={`Shathayu ${actualIndex + 1}`}
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
                      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                        selectedVideo === idx ? "ring-2 ring-primary" : ""
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

          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg prose-strong:text-primary">
              <MarkdownContent
                contentPath="/content/Top Centers/Shathayu Ayurveda Yoga Retreat/main content.txt"
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
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">120+ Years</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                  Healing Legacy
                </div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.8/5</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                  Guest Rating
                </div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">NABH</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                  Accredited Care
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
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Video Gallery of Shathayu</h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Experience the serene atmosphere and holistic healing journey at Shathayu through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative bg-black">
                    {videos.length > 0 ? (
                      <video
                        ref={galleryVideoRef}
                        key={videos[selectedVideo]}
                        src={videos[selectedVideo]}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    ) : null}
                  </div>
                </CardContent>
              </Card>

              {videos.length > 1 && (
                <>
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
                        className={`transition-all ${index === selectedVideo
                          ? "w-8 h-3 bg-primary"
                          : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                          } rounded-full`}
                        aria-label={`Go to video ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="mb-12" id="why-choose">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {whyChooseData?.title || "Why Choose Shathayu?"}
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

          <div className="mb-12" id="testimonial-videos">
            <div className="text-center mb-8 md:mb-10 px-4">
              <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                Testimonials of Shathayu Center
              </h2>
              <div className="w-12 h-1 bg-primary/20 mx-auto mb-3 rounded-full hidden md:block" />
              <p className="text-sm md:text-lg mx-auto max-w-none leading-relaxed italic" style={{ color: "#7F543D" }}>
                Watch inspiring stories of recovery and wellness from our guests.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative bg-black">
                    {testimonialVideos.length > 0 ? (
                      <video
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={testimonialVideos[selectedTestimonialVideo]}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                      />
                    ) : null}
                  </div>
                </CardContent>
              </Card>

              {testimonialVideos.length > 1 && (
                <>
                  <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between px-2 md:-mx-8 pointer-events-none">
                    <button
                      onClick={() =>
                        setSelectedTestimonialVideo(
                          (prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length
                        )
                      }
                      className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                    <button
                      onClick={() =>
                        setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)
                      }
                      className="bg-white/90 hover:bg-primary hover:text-white text-primary p-2 md:p-4 rounded-full shadow-lg transition-all border-2 border-primary pointer-events-auto"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                    </button>
                  </div>

                  <div className="flex md:hidden items-center justify-between mt-4 px-6">
                    <Button
                      onClick={() =>
                        setSelectedTestimonialVideo(
                          (prev) => (prev - 1 + testimonialVideos.length) % testimonialVideos.length
                        )
                      }
                      className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5 border-2 border-primary/20"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={() =>
                        setSelectedTestimonialVideo((prev) => (prev + 1) % testimonialVideos.length)
                      }
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
                </>
              )}
            </div>
          </div>

          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#234A50" }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
                  <img
                    src="/Center Images/Shathayu Ayurveda Yoga Retreat/CTA mid.jpg"
                    alt="Shathayu Ayurveda Yoga Retreat"
                    className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <h2 className="text-xl font-extrabold text-white text-center mb-8 leading-tight tracking-tight">
                    Begin Your Holistic Healing Journey at Shathayu
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
                </div>
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-10 leading-tight tracking-tight">
                    Begin Your <span className="text-white/90">Holistic Healing Journey</span> at{" "}
                    <span className="text-white underline decoration-white/20 underline-offset-8">Shathayu</span>
                  </h2>
                  <div className="flex flex-wrap gap-5">
                    <Button
                      size="lg"
                      className="rounded-full px-6 bg-white text-primary hover:bg-white/90"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Book Consultation Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-6 border-2 border-white/60 bg-transparent text-white hover:bg-orange-500 hover:border-orange-500 active:bg-orange-500 active:border-orange-500"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat With Us
                    </Button>
                  </div>
                </div>
                <div>
                  <img
                    src="/Center Images/Shathayu Ayurveda Yoga Retreat/CTA mid.jpg"
                    alt="Shathayu Ayurveda Yoga Retreat"
                    className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12" id="process">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                {processTitle || "Treatment Process & Patient Journey"}
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                {processDescription || "Your personalized healing journey at Shathayu, step by step"}
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, idx) => {
                const stepNumber = idx + 1;
                const isLast = idx === processSteps.length - 1;

                return (
                  <div
                    key={idx}
                    className={`relative flex items-start gap-3 md:gap-6 ${isLast ? "" : "mb-8 md:mb-12"} group`}
                  >
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                        {stepNumber}
                      </div>
                      {!isLast && (
                        <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                      )}
                    </div>

                    <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                      <CardContent className="p-4 md:p-6">
                        <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                          {stepNumber}
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-10 md:pl-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            {processIconForStep(idx)}
                          </div>
                          <div>
                            <h3 className="text-base md:text-xl font-bold text-primary">{step.title}</h3>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              Step {stepNumber}
                            </span>
                          </div>
                        </div>

                        {step.description && (
                          <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                            {step.description}
                          </p>
                        )}

                        {step.bullets.length > 0 && (
                          <ul className="mt-3 space-y-1.5">
                            {step.bullets.map((b, bi) => (
                              <li
                                key={bi}
                                className="flex items-start gap-2 text-xs md:text-sm"
                                style={{ color: "#7F543D" }}
                              >
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
              {facilityImages.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentFacilityImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)
                    }
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
                </>
              )}

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
                            alt={`Shathayu Facility ${index + 1}`}
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
                            alt={`Shathayu Facility ${index + 1}`}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {facilityImages.length > 0 && (
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
              )}
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
                    Every facility at Shathayu is designed and maintained according to NABH accreditation standards,
                    ensuring the highest levels of safety, hygiene, and quality care. Our commitment to excellence
                    means you receive world-class holistic treatment in a serene, naturally therapeutic environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {showFullGallery && (
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
                Shathayu Gallery
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
                    alt={`Shathayu ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && images.length > 0 && (
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
              Shathayu Ayurveda Yoga Retreat
            </div>
            <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={images[lightboxImage]}
                alt={`Shathayu ${lightboxImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
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
                onClick={() =>
                  setLightboxImage((prev) => (prev - 1 + images.length) % images.length)
                }
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Previous
              </Button>
              <Button
                onClick={() => setLightboxOpen(false)}
                className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
              >
                Close
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

      {facilityLightboxOpen && facilityImages.length > 0 && (
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
              Shathayu Facilities & Amenities
            </div>
            <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={facilityImages[facilityLightboxImage]}
                alt={`Shathayu Facility ${facilityLightboxImage + 1}`}
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
  );
}
