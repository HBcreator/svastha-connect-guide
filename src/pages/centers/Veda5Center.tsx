import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Phone, Mail, Images, Video, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, Heart, Droplet, Brain, Sparkles, Activity, ShieldCheck, Stethoscope, Moon, HeartPulse, Pill, Wind, UserCheck, Award, Users, Globe, Leaf, Utensils, ClipboardList, FileSearch, Home, MessageCircle, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Veda5Center = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<"Rishikesh" | "Kerala" | "Goa">("Rishikesh");
  const [selectedGallery, setSelectedGallery] = useState<"photos" | "videos">("photos");
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [facilityZoom, setFacilityZoom] = useState(1);
  const [reviewCity, setReviewCity] = useState<"Rishikesh" | "Kerala" | "Goa">("Rishikesh");
  const [reviewsByCity, setReviewsByCity] = useState<Record<string, { name: string; location: string; title: string; text: string; rating: number }[]>>({ Rishikesh: [], Kerala: [], Goa: [] });
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);

  const facilityImages = [
    "/Center Images/veda5/Facilities & Amenities/veda5-01.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-02.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-03.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-04.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-05.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-06.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-07.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-08.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-09.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-10.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-11.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-12.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-13.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-14.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-15.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-16.jpg",
    "/Center Images/veda5/Facilities & Amenities/veda5-17.jpg",
  ];

  const LotusIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 20c4-2 6-5 6-8-2 1-4 1-6 0-2 1-4 1-6 0 0 3 2 6 6 8z" />
      <path d="M12 12c-1.5-2-1.5-4 0-6 1.5 2 1.5 4 0 6z" />
      <path d="M8 12c-2-1.5-3-3.5-3-6 2 1.5 3 3.5 3 6z" />
      <path d="M16 12c2-1.5 3-3.5 3-6-2 1.5-3 3.5-3 6z" />
    </svg>
  );

  const OilPotIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 10h10" />
      <path d="M6 10c0-3 2-5 6-5s6 2 6 5" />
      <path d="M6 10v4a6 6 0 0 0 12 0v-4" />
      <path d="M12 6c0-1 1.5-2 3-2" />
    </svg>
  );

  const assets: Record<string, { photos: string[]; videos: string[] }> = {
    Rishikesh: {
      photos: [
        "/Center Images/veda5/Rishikesh/veda5-R1.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R2.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R3.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R4.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R5.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R6.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R7.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R8.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R9.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R10.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R11.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R12.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R13.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R14.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R15.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R16.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R17.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R18.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R19.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R20.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R21.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R22.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R23.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R24.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R25.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R27.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R28.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R29.jpg",
        "/Center Images/veda5/Rishikesh/veda5-R30.jpg",
      ],
      videos: [
        "/Center Videos/veda5/veda5-Rishikesh-01.mp4",
        "/Center Videos/veda5/veda5-Rishikesh-02.mp4",
        "/Center Videos/veda5/veda5-Rishikesh-03.mp4",
        "/Center Videos/veda5/veda5-Rishikesh-04.mp4",
      ],
    },
    Kerala: {
      photos: [
        "/Center Images/veda5/Kerala/veda5-kerala-01.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-02.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-03.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-04.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-05.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-06.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-07.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-08.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-09.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-10.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-11.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-12.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-13.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-14.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-15.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-16.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-17.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-18.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-19.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-20.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-21.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-22.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-23.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-24.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-25.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-26.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-27.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-28.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-29.jpg",
        "/Center Images/veda5/Kerala/veda5-kerala-30.jpg",
      ],
      videos: [
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-01.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-02.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-03.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-04.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-05.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-06.mp4",
        "/Center Videos/veda5/kerala-videos/VEDA5-Kodungallur-kerala-07.mp4",
      ],
    },
    Goa: {
      photos: [
        "/Center Images/veda5/Goa/veda5-goa-01.jpg",
        "/Center Images/veda5/Goa/veda5-goa-02.jpg",
        "/Center Images/veda5/Goa/veda5-goa-03.jpg",
        "/Center Images/veda5/Goa/veda5-goa-04.jpg",
        "/Center Images/veda5/Goa/veda5-goa-05.jpg",
        "/Center Images/veda5/Goa/veda5-goa-06.jpg",
        "/Center Images/veda5/Goa/veda5-goa-07.jpg",
        "/Center Images/veda5/Goa/veda5-goa-08.jpg",
        "/Center Images/veda5/Goa/veda5-goa-09.jpg",
        "/Center Images/veda5/Goa/veda5-goa-10.jpg",
        "/Center Images/veda5/Goa/veda5-goa-11.jpg",
        "/Center Images/veda5/Goa/veda5-goa-12.jpg",
        "/Center Images/veda5/Goa/veda5-goa-13.jpg",
        "/Center Images/veda5/Goa/veda5-goa-14.jpg",
        "/Center Images/veda5/Goa/veda5-goa-15.jpg",
        "/Center Images/veda5/Goa/veda5-goa-16.jpg",
        "/Center Images/veda5/Goa/veda5-goa-17.jpg",
        "/Center Images/veda5/Goa/veda5-goa-18.jpg",
        "/Center Images/veda5/Goa/veda5-goa-19.jpg",
        "/Center Images/veda5/Goa/veda5-goa-20.jpg",
        "/Center Images/veda5/Goa/veda5-goa-21.jpg",
        "/Center Images/veda5/Goa/veda5-goa-22.jpg",
        "/Center Images/veda5/Goa/veda5-goa-23.jpg",
        "/Center Images/veda5/Goa/veda5-goa-24.jpg",
        "/Center Images/veda5/Goa/veda5-goa-25.jpg",
        "/Center Images/veda5/Goa/veda5-goa-26.jpg",
        "/Center Images/veda5/Goa/veda5-goa-27.jpg",
        "/Center Images/veda5/Goa/veda5-goa-28.jpg",
        "/Center Images/veda5/Goa/veda5-goa-29.jpg",
        "/Center Images/veda5/Goa/veda5-goa-30.jpg",
      ],
      videos: [
        "/Center Videos/veda5/Goa-videos/VEDA5-goa-01.mp4",
        "/Center Videos/veda5/Goa-videos/VEDA5-goa-02.mp4",
        "/Center Videos/veda5/Goa-videos/VEDA5-goa-03.mp4",
      ],
    },
  };

  const images = assets[selectedLocation].photos;
  const videos = assets[selectedLocation].videos;

  if (selectedImage >= images.length && images.length) setSelectedImage(0);
  if (lightboxImage >= images.length && images.length) setLightboxImage(0);

  if (zoom < 1) setZoom(1);

  useEffect(() => {
    if (selectedGallery !== "photos") return;
    if (lightboxOpen) return;
    if (!images.length) return;
    const id = setInterval(() => {
      setSelectedImage((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [selectedGallery, images.length, lightboxOpen]);

  useEffect(() => {
    if (facilityLightboxOpen) return;
    if (!facilityImages.length) return;
    const id = setInterval(() => {
      setCurrentFacilityImage((p) => (p + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [facilityLightboxOpen, facilityImages.length]);

  useEffect(() => {
    if (!facilityLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setFacilityLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
      } else if (e.key === "ArrowRight") {
        setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [facilityLightboxOpen, facilityImages.length]);

  useEffect(() => {
    if (selectedGallery === "videos") {
      setSelectedVideo(0);
    }
    if (selectedGallery === "photos") {
      setSelectedImage(0);
    }
  }, [selectedLocation, selectedGallery]);

  useEffect(() => {
    fetch("/content/Top Centers/veda5 center.txt")
      .then((res) => res.text())
      .then((txt) => setContent(txt))
      .catch(() => {});
  }, []);

  const parseReviews = (text: string) => {
    const lines = text.split("\n");
    const result: { name: string; location: string; title: string; text: string; rating: number }[] = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i].trim();
      if (line.startsWith("**Review")) {
        const heading = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
        const afterDash = heading.split(" - ")[1] || "";
        const namePart = afterDash.split(",")[0]?.trim() || "";
        const locationPart = afterDash.split(",").slice(1).join(",").trim();
        i++;
        while (i < lines.length && !lines[i].trim()) i++;
        let title = "";
        if (i < lines.length && /\*"[\s\S]*"\*/.test(lines[i].trim())) {
          title = lines[i].trim().replace(/^\*"/, "").replace(/"\*$/, "");
          i++;
        }
        while (i < lines.length && !lines[i].trim()) i++;
        const paragraph: string[] = [];
        while (i < lines.length && !lines[i].trim().startsWith("**Rating:")) {
          if (lines[i].trim().startsWith("**Review")) break;
          paragraph.push(lines[i]);
          i++;
        }
        let rating = 5;
        if (i < lines.length && lines[i].trim().startsWith("**Rating:")) {
          const match = lines[i].match(/(\d)\/5/);
          rating = match ? parseInt(match[1], 10) : 5;
          i++;
        }
        result.push({ name: namePart || afterDash, location: locationPart, title, text: paragraph.join("\n").trim(), rating });
        continue;
      }
      i++;
    }
    return result;
  };

  useEffect(() => {
    Promise.all([
      fetch("/content/Top Centers/veda5/patient and reviews/Rishikesh.txt").then((r) => r.text()).catch(() => ""),
      fetch("/content/Top Centers/veda5/patient and reviews/Kerala.txt").then((r) => r.text()).catch(() => ""),
      fetch("/content/Top Centers/veda5/patient and reviews/Goa.txt").then((r) => r.text()).catch(() => ""),
    ]).then(([rishikesh, kerala, goa]) => {
      setReviewsByCity({ Rishikesh: parseReviews(rishikesh), Kerala: parseReviews(kerala), Goa: parseReviews(goa) });
      setCurrentReview(0);
      setIsReviewAutoPlaying(true);
    });
  }, []);

  useEffect(() => {
    setCurrentReview(0);
    setIsReviewAutoPlaying(true);
  }, [reviewCity]);

  useEffect(() => {
    if (!isReviewAutoPlaying) return;
    const arr = reviewsByCity[reviewCity] || [];
    if (!arr.length) return;
    const id = setInterval(() => {
      setCurrentReview((p) => (p + 1) % arr.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isReviewAutoPlaying, reviewCity, reviewsByCity]);

  const goPrevReview = () => {
    const arr = reviewsByCity[reviewCity] || [];
    if (!arr.length) return;
    setIsReviewAutoPlaying(false);
    setCurrentReview((p) => (p - 1 + arr.length) % arr.length);
  };
  const goNextReview = () => {
    const arr = reviewsByCity[reviewCity] || [];
    if (!arr.length) return;
    setIsReviewAutoPlaying(false);
    setCurrentReview((p) => (p + 1) % arr.length);
  };
  const selectReviewDot = (idx: number) => {
    setIsReviewAutoPlaying(false);
    setCurrentReview(idx);
  };
  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />
      ))}
    </div>
  );

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
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: "bullet" | "number" | null = null;
    let emptyLineCount = 0;

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === "bullet") {
          elements.push(
            <ul key={`list-${elements.length}`} className="list-disc list-inside mb-6 space-y-2" style={{ color: "#7F543D" }}>
              {currentList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{processInlineFormatting(item)}</li>
              ))}
            </ul>
          );
        } else if (listType === "number") {
          elements.push(
            <ol key={`list-${elements.length}`} className="list-decimal list-inside mb-6 space-y-2" style={{ color: "#7F543D" }}>
              {currentList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{processInlineFormatting(item)}</li>
              ))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed === "---") {
        flushList();
        elements.push(<div key={`sep-${index}`} className="h-8" />);
        return;
      }
      if (!trimmed) {
        flushList();
        emptyLineCount++;
        if (emptyLineCount === 2 && elements.length > 0) {
          elements.push(<div key={`sp-${index}`} className="h-4" />);
        }
        return;
      }
      emptyLineCount = 0;
      if (/^#\s+(.+)/.test(trimmed) && !trimmed.startsWith("##")) {
        flushList();
        const t = trimmed.replace(/^#\s+/, "");
        elements.push(
          <h1 key={`h1-${index}`} className="text-2xl md:text-4xl font-bold mb-6 text-primary">{processInlineFormatting(t)}</h1>
        );
        return;
      }
      if (/^##\s+(.+)/.test(trimmed)) {
        flushList();
        const t = trimmed.replace(/^##\s+/, "");
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-primary">{processInlineFormatting(t)}</h2>
        );
        return;
      }
      if (/^###\s+(.+)/.test(trimmed)) {
        flushList();
        const t = trimmed.replace(/^###\s+/, "");
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-primary">{processInlineFormatting(t)}</h3>
        );
        return;
      }
      if (/^[-*]\s+(.+)/.test(trimmed)) {
        const item = trimmed.replace(/^[-*]\s+/, "");
        if (listType !== "bullet") {
          flushList();
          listType = "bullet";
        }
        currentList.push(item);
        return;
      }
      if (/^\d+\.\s+(.+)/.test(trimmed)) {
        const item = trimmed.replace(/^\d+\.\s+/, "");
        if (listType !== "number") {
          flushList();
          listType = "number";
        }
        currentList.push(item);
        return;
      }
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        flushList();
        const t = trimmed.replace(/^\*\*/, "").replace(/\*\*$/, "");
        elements.push(
          <p key={`b-${index}`} className="mb-0 leading-relaxed" style={{ color: "#7F543D" }}>
            <strong className="font-semibold text-primary">{t}</strong>
          </p>
        );
        return;
      }
      flushList();
      elements.push(
        <p key={`p-${index}`} className="mb-6 leading-relaxed" style={{ color: "#7F543D" }}>
          {processInlineFormatting(trimmed)}
        </p>
      );
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Veda5</h1>
                <p className="text-xl mb-4 opacity-90">Best Ayurveda, Yoga & Wellness Retreat Center</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Rishikesh, Kerala, Goa, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(420+ reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-8">
        <div className="max-w-6xl mx-auto mb-6">
          <div className="flex flex-wrap justify-center gap-3">
            {(["Rishikesh", "Kerala", "Goa"] as const).map((loc) => (
              <Button
                key={loc}
                size="lg"
                variant={selectedLocation === loc ? "default" : "outline"}
                className={selectedLocation === loc ? "font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl" : "font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl"}
                onClick={() => setSelectedLocation(loc)}
              >
                {loc}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-6">
          <div className="flex justify-center flex-wrap gap-3">
            <Button
              size="lg"
              variant={selectedGallery === "photos" ? "default" : "outline"}
              className={selectedGallery === "photos" ? "font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl" : "font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl"}
              onClick={() => setSelectedGallery("photos")}
            >
              <Images className="mr-2 h-5 w-5" /> Photo Gallery
            </Button>
            <Button
              size="lg"
              variant={selectedGallery === "videos" ? "default" : "outline"}
              className={selectedGallery === "videos" ? "font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl" : "font-semibold px-5 md:px-8 py-2.5 md:py-3 rounded-xl"}
              onClick={() => setSelectedGallery("videos")}
            >
              <Video className="mr-2 h-5 w-5" /> Video Gallery
            </Button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {selectedGallery === "photos" ? (
            images.length ? (
              <div className="space-y-4">
                <div className="relative mb-6 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  <img
                    src={images[selectedImage]}
                    alt={`${selectedLocation} Photo`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {images.length}
                  </div>
                  
                </div>

                {(() => {
                  const len = images.length;
                  const thumbnailImages = images.slice(0, Math.min(5, len));

                  return (
                    <div className="flex flex-col md:flex-row gap-3 mb-6">
                      <div
                        className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                        onClick={() => {
                          setLightboxImage(thumbnailImages.length ? images.indexOf(thumbnailImages[0]) : 0);
                          setLightboxOpen(true);
                        }}
                      >
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <img
                            src={thumbnailImages[0]}
                            alt={`${selectedLocation} thumb 1`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        </div>
                      </div>

                      <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                        {thumbnailImages.slice(1, 5).map((img, idx) => {
                          const actualIndex = images.indexOf(img);
                          const isLast = idx === 3;
                          return (
                            <div
                              key={idx}
                              className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                              onClick={() => {
                                setLightboxImage(actualIndex);
                                setLightboxOpen(true);
                              }}
                            >
                              <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                                <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                                {isLast && (
                                  <div className="absolute inset-0 flex items-end justify-center pb-2 md:pb-4 bg-black/40">
                                    <Button
                                      size="sm"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxOpen(true);
                                      }}
                                      className="bg-white text-primary hover:bg-white/95 hover:scale-105 font-semibold text-xs md:text-sm px-2 md:px-3 py-1 md:py-2 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform w-[90%] max-w-[180px]"
                                    >
                                      <Images className="mr-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
                                      <span className="hidden md:inline">Show Full Gallery</span>
                                      <span className="md:hidden">Gallery</span>
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="rounded-xl border p-6 text-center text-muted-foreground">No photos available for {selectedLocation} yet.</div>
            )
          ) : videos.length ? (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
                <video
                  key={`${selectedLocation}-${selectedVideo}`}
                  controls
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                >
                  <source src={videos[selectedVideo]} type="video/mp4" />
                </video>
                <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  Video {selectedVideo + 1} / {videos.length}
                </div>
              </div>
              <div key={selectedLocation} className="grid grid-cols-2 gap-4">
                {videos.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVideo(idx)}
                    className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-4 ring-primary" : "ring-2 ring-transparent hover:ring-primary/30"}`}
                  >
                    <video src={src} className="w-full h-full object-cover" muted />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Video className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Video {idx + 1}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-xl border p-6 text-center text-muted-foreground">No videos available for {selectedLocation} yet.</div>
          )}
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 backdrop-blur-lg z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(237, 232, 208, 0.95)' }}>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-primary font-bold text-xl md:text-3xl whitespace-nowrap">VEDA5 Health Center</div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-visible">
              <img
                src={images[lightboxImage]}
                alt=""
                className="max-h-[80vh] max-w-[88vw] object-contain"
                style={{ transform: `scale(${zoom})` }}
              />
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow" onClick={() => setLightboxOpen(false)}>
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded">
                {lightboxImage + 1} / {images.length}
              </div>

              {/* Mobile: Previous/Next positioned under image */}
              <div className="md:hidden absolute -bottom-16 left-6 right-6 flex items-center justify-between">
                <button
                  onClick={() => setLightboxImage((i) => (i - 1 + images.length) % images.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Previous
                </button>
                <button
                  onClick={() => setLightboxImage((i) => (i + 1) % images.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Next
                </button>
              </div>

              {/* Desktop: Arrow controls */}
              <button className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow" onClick={() => setLightboxImage((i) => (i - 1 + images.length) % images.length)}>
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow" onClick={() => setLightboxImage((i) => (i + 1) % images.length)}>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto mt-12">
          <Card className="mb-12 rounded-xl">
            <CardContent className="p-8 prose prose-lg max-w-none">
              {content ? renderContent() : <p>Loading content...</p>}
            </CardContent>
          </Card>
        </div>

        

        {/* Wellness & Rejuvenation Programs */}
        <div className="mb-12 max-w-5xl mx-auto rounded-xl p-6 md:p-8" style={{ backgroundColor: '#EDE8D0' }}>
          {/* Statistics Section */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10">
            <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">5,000+</div>
              <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Happy Patients</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">4.5/5</div>
              <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Average Rating</div>
            </div>
            <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">95%</div>
              <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Success Rate</div>
            </div>
          </div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <LotusIcon className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-primary mb-3">Wellness Programs</h3>
            <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
              Cleanse, de-stress, and revitalize your mind, body, and spirit with our holistic wellness programs
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            <AccordionItem value="kayakalpa" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <LotusIcon className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Kayakalpa Rejuvenation & De-Stress Program</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Heal, restore and transform naturally with anti-aging and vitality enhancement.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Restores body strength & youthfulness</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Improves mental clarity & sleep cycle</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Herbal therapies for stress & fatigue relief</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="samshuddhi" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Samshuddhi Ayurveda Detox Program</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Full-body cleansing and immunity boost through traditional detox protocols.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Panchakarma detox + internal toxin removal</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Better digestion & metabolism</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Enhances immunity & energy levels</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="panchakarma" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <OilPotIcon className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Panchakarma Treatment Program</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Annual total detox and dosha balance with customized therapies.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Deep-rooted toxin elimination</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Custom therapies based on body type</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Stronger immunity & longevity support</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="stress" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Stress Management & Mental Wellness</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Relax your mind and heal your emotions through yoga, meditation and calming therapies.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Reduces anxiety and burnout</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Improves focus, peace and sleep</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Meditation and guided relaxation</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rejuvenation" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Anti-Aging & Rejuvenation Therapies</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Anti-aging and skin renewal for youthful energy and glow.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Anti-aging & vitality enhancement</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Herbal facials and nourishment</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Improves complexion and texture</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="weight" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Weight Management Programs</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Natural fat loss and lifestyle balance with personalized care.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Personalized diet + fat-burning therapies</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Corrects metabolism & hormones</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Visible inch loss + improved fitness</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="immunity" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Immunity Boosting & Preventive Care</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Natural body defense strengthening with holistic preventive care.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Rasayana & herbal formulations</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Enhanced stamina & disease resistance</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Great for seasonal change & recovery</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="preventive" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Preventive Healthcare Program</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Stay healthy and disease-free through early lifestyle correction.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Strengthens internal systems</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Early lifestyle correction approach</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Builds long-term wellness habits</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="beauty" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Beauty & Skin Care Therapy</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Glow naturally with skin renewal and nourishing care.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Anti-aging & skin renewal treatments</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Herbal facials + nourishment</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Improves complexion & texture</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="liver" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Liver Detox Program</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Revive your liver and support digestion and vitality.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Removes toxin load & supports digestion</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Improves metabolism & skin health</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Boosts vitality & purification</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mental" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Brain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Mental Health Wellness</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Emotional balance and inner harmony with comprehensive care.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Counselling + yoga + relaxation therapies</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Reduces depression & anxiety symptoms</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Builds emotional resilience</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sleep" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Moon className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Sleep Disorder Therapy</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Non-invasive care for insomnia to restore deep, natural sleep.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Nervous system calming treatments</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Restores sleep routine & energy</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Guided relaxation and bedtime routines</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="holiday" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Great Escapes Wellness Holiday</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                  Vacation-style wellness combining relaxation with authentic healing.
                </p>
                <ul className="space-y-1.5 md:space-y-2">
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Serene nature stay + healing programs</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Activities for body, mind & joy</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}><span className="text-green-600 mt-1">✓</span><span>Perfect wellness vacation for everyone</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-12 max-w-5xl mx-auto rounded-xl p-6 md:p-8" style={{ backgroundColor: '#EDE8D0' }}>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <Stethoscope className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl md:text-3xl font-bold text-primary mb-3">Medical Programs</h3>
            <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
              Integrated, natural, and evidence-based Ayurvedic care for acute, chronic & lifestyle disorders.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            <AccordionItem value="arthritis" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Arthritis & Joint Disorders</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Joint pain relief with natural therapies</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Reduces swelling & improves flexibility</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Helps you move freely in daily life</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="spine" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Back Pain & Spine Care</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Relieves sciatica & disc-related pain</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Strengthens posture + spinal support</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Prevents future back problems</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mentalcare" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Stress, Anxiety & Depression Care</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Deep relaxation for mental peace</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Herbal care for mood & calmness</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Restores sleep and inner balance</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="diabetes" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Pill className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Diabetes & Metabolic Management</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Natural blood sugar regulation</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Protects nerves & organs</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Boosts daily energy and metabolism</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hypertension" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Hypertension & Heart Health</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Manages high BP without stress</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Improves blood circulation</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Heart-friendly lifestyle routines</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="obesity" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Obesity & Weight Management</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Fat reduction + metabolic correction</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>No crash dieting — sustainable results</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Builds confidence and healthy routine</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="digestive" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Droplet className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Digestive & Gut Wellness</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Detox for acidity & constipation</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Herbs to heal inflammation</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Better digestion → better lifestyle</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="respiratory" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Wind className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Asthma & Respiratory Disorders</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Easier breathing with herbal care</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Reduces allergy triggers</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Breathwork to increase lung strength</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skin" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Skin Diseases & Natural Beauty</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Heals psoriasis, eczema & acne</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Treats root cause inside the body</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Brings clear & glowing skin naturally</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="thyroid" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Stethoscope className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Thyroid & Hormonal Balance</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Supports thyroid function naturally</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Helps weight, hair & mood balance</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Holistic endocrine system care</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="women" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <UserCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Women’s Wellness & PCOS Care</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Period pain & cycle regulation</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>PCOS & menopause symptom relief</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Enhances hormonal health & fertility</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="neuro" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Neurological Rehab & Nerve Disorders</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Support for paralysis & neuropathy</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Improves coordination & strength</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Helps regain independence gradually</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cardio" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Cardio-Metabolic Support</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Controls cholesterol & weight</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Stress-free heart strengthening</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Long-term protective care</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="autoimmune" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Autoimmune Disorder Support</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Reduces flare-ups gently</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Gut detox for immune balance</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Improves comfort & energy levels</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fatigue" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-primary">Chronic Fatigue & Low Energy</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                <ul className="space-y-1.5 md:space-y-2" style={{ color: '#7F543D' }}>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Deep energy restoration therapies</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Boosts stamina & immunity</span></li>
                  <li className="flex items-start gap-2 text-sm"><span className="text-blue-600 mt-1">✓</span><span>Enhances mood & productivity</span></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Why Choose VEDA5 - Infographic Section */}
        <div className="mb-12 container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">
              Why Choose VEDA5 for Your Holistic Health Journey
            </h2>
            <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
              Discover what makes VEDA5 India's premier destination for authentic luxury wellness and Ayurvedic healing
            </p>
          </div>

          {/* Icon Grid Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Tripadvisor Best of the Best Winner</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Six consecutive years of Travelers' Choice Awards (2020-2025) with 9.1/10 rating.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Three Breathtaking Locations</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Rishikesh Himalayas, Kerala beachfront, and Goa lakefront healing environments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Stethoscope className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Integrated Multi-System Approach</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Ayurveda, Panchakarma, Naturopathy, Hatha Yoga, and meditation combined.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <UserCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Experienced Ayurvedic Physicians</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Qualified Vaidyas perform pulse diagnosis and personalized treatment protocols.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Completely Personalized Care</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Every plan customized to your constitution, conditions, and wellness goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <ShieldCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Ayur Gold Certified Excellence</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Kerala location holds prestigious Ayur Gold certification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Sparkles className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Luxury Meets Authentic Healing</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Modern amenities with genuine therapies and hospitality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Utensils className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Award-Winning Organic Cuisine</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Satvik vegetarian meals customized to your dosha type.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Leaf className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Fresh Herbal Medicine Preparation</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      VEDA5 Naturals creates natural, toxin-free Ayurvedic products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Users className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Global Recognition & Trust</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Guests from 50+ countries with exceptional reviews.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <ClipboardList className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Flexible Comprehensive Programs</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Weekend escapes to month-long intensive therapies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Globe className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Natural Environment & Digital Detox</h3>
                    <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                      Healing natural energy and mindful disconnection for deep rest.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
            <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>Your personalized healing journey at Veda5, step by step</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">1</div>
                <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
              </div>
              <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-primary">Initial Consultation & Wellness Evaluation</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Day 1</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Your journey starts with a warm welcome and a comprehensive consultation with our Ayurvedic physician using pulse diagnosis and a detailed discussion of your goals and constitution.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">2</div>
                <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
              </div>
              <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-primary">Personalized Wellness Blueprint</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Day 1–2</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    A customized plan outlines your therapies, yoga and meditation sessions, and a personalized Ayurvedic diet tailored to balance your doshas.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">3</div>
                <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
              </div>
              <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-primary">Daily Therapies & Mindful Practices</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Ongoing</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Receive prescribed therapies each day alongside guided yoga and meditation, delivered by skilled therapists and masters.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">4</div>
                <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
              </div>
              <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-primary">Ayurvedic Diet & Nutritional Support</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Daily</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Delicious vegetarian meals prepared with local ingredients, tailored to your dosha and treatment plan to heal from within.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">5</div>
                <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
              </div>
              <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-primary">Lifestyle Guidance & Wellness Education</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Throughout Stay</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Practical guidance on stress management, mindful routines, and healthy habits to continue at home for sustained wellness.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative flex items-start gap-3 md:gap-6 group">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">6</div>
              </div>
              <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold text-primary">Post-Retreat Care & Continued Wellness</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Post‑Retreat</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Final consultation with post‑retreat recommendations, dietary advice, lifestyle practices, and follow‑up support to sustain your results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-12 rounded-3xl overflow-hidden p-6 md:p-8 lg:p-10" style={{ backgroundColor: '#EDE8D0' }}>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">Ready to Start Your Wellness Journey?</h2>
              <p className="text-sm md:text-base lg:text-lg mb-6" style={{ color: '#7F543D' }}>
                Take the first step towards holistic healing. Our expert team is here to guide you through personalized treatment plans tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 py-5 lg:px-8 lg:py-6 text-sm md:text-base" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    Book Consultation Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-5 lg:px-8 lg:py-6 text-sm md:text-base" asChild>
                  <Link to="/contact">
                    <MessageCircle className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    Chat With Us
                  </Link>
                </Button>
              </div>
              <p className="text-xs md:text-sm" style={{ color: '#7F543D' }}>
                📞 Call us: <a href="tel:+918028432737" className="text-primary font-semibold hover:underline">+91 80 2843 2737</a>
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img src="/Center Images/veda5/CTA-image.jpg" alt="VEDA5 Wellness Center" className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
            <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>
              Experience healing in comfort with our comprehensive range of traditional and modern facilities
            </p>
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
                          setFacilityZoom(1);
                        }}
                      >
                        <img src={image} alt={`VEDA5 Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${Math.min(currentFacilityImage, facilityImages.length - 5) * 20}%)` }}
                >
                  {facilityImages.map((image, index) => (
                    <div key={index} className="w-1/5 flex-shrink-0 px-2">
                      <div
                        className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                        onClick={() => {
                          setFacilityLightboxImage(index);
                          setFacilityLightboxOpen(true);
                          setFacilityZoom(1);
                        }}
                      >
                        <img src={image} alt={`VEDA5 Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
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
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Stethoscope className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Medical Consultation Centre</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Experienced Ayurveda physicians</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Personalized diagnosis and treatment plans</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Regular progress monitoring</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Droplet className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Ayurveda Therapy Centre</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Panchakarma and detox therapies</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Authentic herbal treatments</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Skilled therapists and dedicated rooms</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <LotusIcon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Yoga & Meditation Hall</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Daily yoga sessions</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Guided meditation</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Peaceful, spacious environment</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HeartPulse className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Spa & Wellness Centre</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Herbal massages and relaxation therapies</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Holistic rejuvenation spaces</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Utensils className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Organic Dining Restaurant</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Wholesome vegetarian cuisine</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Customized diet plans</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Locally sourced ingredients</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Home className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Luxury Accommodation</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Comfortable rooms and suites</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Nature views and serene ambience</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Modern amenities</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Droplet className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Swimming Pool</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Relaxing poolside environment</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Ideal for gentle aquatic activity</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Leaf className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Ayurvedic Product Shop</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Authentic oils, herbs and wellness products</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Doctor-recommended formulations</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Activity & Recreation Facilities</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Nature walks and outdoor relaxation</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Community spaces for group activities</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Additional Amenities</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Wi‑Fi and on‑site assistance</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Airport transfers on request</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Doctor on call and emergency support</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {facilityLightboxOpen && (
            <div
              className="fixed inset-0 backdrop-blur-lg z-50 flex items-center justify-center p-4"
              style={{ backgroundColor: 'rgba(237, 232, 208, 0.95)' }}
              onClick={() => setFacilityLightboxOpen(false)}
            >
              <div className="absolute top-6 left-1/2 -translate-x-1/2 text-primary font-bold text-xl md:text-3xl whitespace-nowrap">VEDA5 Health Center</div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
                }}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
              </button>

              <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center mt-16 overflow-visible" onClick={(e) => e.stopPropagation()}>
                <div className="relative" style={{ transform: `scale(${facilityZoom})` }}>
                  <img
                    src={facilityImages[facilityLightboxImage]}
                    alt={`VEDA5 Facility ${facilityLightboxImage + 1}`}
                    className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                  />

                  <button
                    onClick={() => setFacilityLightboxOpen(false)}
                    className="absolute top-3 right-3 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg"
                    aria-label="Close"
                  >
                    <X className="h-6 w-6 md:h-7 md:w-7" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                    {facilityLightboxImage + 1} / {facilityImages.length}
                  </div>

                  {/* Mobile: Previous/Next positioned under image (Facilities) */}
                  <div className="md:hidden absolute -bottom-16 left-6 right-6 flex items-center justify-between">
                    <button
                      onClick={(e) => { e.stopPropagation(); setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length); }}
                      className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                    >
                      Previous
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length); }}
                      className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              

              

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length);
                }}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
              </button>
            </div>
          )}
        </div>

        <div className="mb-12 rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Expert Medical Team</h2>
            <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>
              A dedicated team of wellness masters powers VEDA5, creating authentic and life-transforming healing experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">Ayurvedic Physicians (Vaidyas)</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                  <li>Experienced doctors holding BAMS degrees from prestigious Ayurvedic medical colleges</li>
                  <li>Specialized in classical diagnostics including pulse examination (Nadi Pariksha)</li>
                  <li>Experts in Panchakarma therapies and chronic disease management</li>
                  <li>Design personalized treatment protocols tailored to individual wellness goals</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center">
                    <Droplet className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">Panchakarma Therapy Specialists</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                  <li>Expert therapists trained in authentic Panchakarma procedures and protocols</li>
                  <li>Proficient in preparatory therapies and main elimination treatments</li>
                  <li>Skilled in post-purification rejuvenation care and follow-up protocols</li>
                  <li>Undergo continuous training to maintain highest international treatment standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center">
                    <LotusIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">Hatha Yoga Masters</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                  <li>Certified instructors trained in traditional Hatha Yoga lineages and philosophy</li>
                  <li>Expertise in asana styles, pranayama breathing, and meditation practices</li>
                  <li>Provide personalized attention and safe modifications for health conditions</li>
                  <li>Conduct sessions suitable for all levels from beginners to advanced</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">Naturopathy Practitioners</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                  <li>Qualified naturopathic doctors with specialized training in natural healing</li>
                  <li>Experts in dietary planning, hydrotherapy, mud therapy, and detox protocols</li>
                  <li>Design individualized lifestyle modifications complementing Ayurvedic treatments</li>
                  <li>Create comprehensive wellness strategies for sustainable long-term health</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">Wellness Counselors & Support Staff</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                  <li>Professional counselors providing lifestyle guidance and wellness education</li>
                  <li>Experts in stress management coaching and emotional support services</li>
                  <li>Help guests understand Ayurvedic principles and maintain healthy habits</li>
                  <li>Offer post-treatment follow-up and ongoing wellness consultation support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-white flex items-center justify-center">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">Medical Support & Care Team</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base" style={{ color: '#7F543D' }}>
                  <li>24/7 medical professionals available at each VEDA5 location for emergencies</li>
                  <li>Continuous monitoring of treatment progress and guest health conditions</li>
                  <li>Ensure safety, comfort, and immediate attention when needed</li>
                  <li>Coordinate between different specialists for integrated comprehensive care</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Patient Success Stories & Reviews (below Expert Medical Team) */}
        <div className="mb-12">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews
</h2>
            <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>Hear from guests across Rishikesh, Kerala, and Goa about their transformational healing journeys</p>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-6">
            {(["Rishikesh", "Kerala", "Goa"] as const).map((c) => (
              <Button key={c} onClick={() => setReviewCity(c)} className={`px-3 py-2 md:px-8 md:py-4 text-xs md:text-base font-semibold ${reviewCity === c ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary border-2 border-primary hover:bg-primary/10"}`}>{c}</Button>
            ))}
          </div>
          <div className="relative">
            <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
              <CardContent className="p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-primary/20 mb-3 md:mb-4">
                    <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
                  </div>
                  {reviewsByCity[reviewCity]?.length ? (
                    <div>
                      <div className="mb-4 md:mb-6">
                        <p className="text-sm md:text-xl leading-relaxed mb-2" style={{ color: "#7F543D" }}>
                          "{reviewsByCity[reviewCity][currentReview].title}"
                        </p>
                        <p className="text-sm md:text-base leading-relaxed" style={{ color: "#7F543D" }}>
                          {reviewsByCity[reviewCity][currentReview].text}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                          {reviewsByCity[reviewCity][currentReview].name.split(" ").map((w) => w[0]).join("")}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-base md:text-xl font-semibold text-primary">{reviewsByCity[reviewCity][currentReview].name}</h4>
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">✓ Verified</span>
                          </div>
                          <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>{reviewsByCity[reviewCity][currentReview].location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        {renderStars(reviewsByCity[reviewCity][currentReview].rating)}
                        <span className="text-xs md:text-sm font-semibold text-primary">{reviewsByCity[reviewCity][currentReview].rating}.0</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-sm md:text-base" style={{ color: "#7F543D" }}>Loading reviews…</div>
                  )}
                </div>
              </CardContent>
            </Card>
            <button onClick={goPrevReview} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Previous review"><ChevronLeft className="h-4 w-4 md:h-6 md:w-6" /></button>
            <button onClick={goNextReview} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Next review"><ChevronRight className="h-4 w-4 md:h-6 md:w-6" /></button>
            {isReviewAutoPlaying && (
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>Auto</div>
            )}
            <div className="flex justify-center gap-2 mt-6">
              {(reviewsByCity[reviewCity] || []).map((_, idx) => (
                <button key={idx} onClick={() => selectReviewDot(idx)} className={`transition-all rounded-full ${currentReview === idx ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"}`} aria-label={`Go to review ${idx + 1}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 mb-10 md:mb-14">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Awards and rewards/VEDA5/award-01.png" alt="VEDA5 Award 01" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">International Wellness Recognition</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Excellence in holistic wellness and care</li>
                  <li>Authentic Ayurveda and yoga programs</li>
                  <li>High guest satisfaction and trust</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Awards and rewards/VEDA5/award-02.png" alt="VEDA5 Award 02" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Luxury Retreat Distinction</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Premium facilities </li>
                  <li>Personalized care and comfort</li>
                  <li>Consistent service quality</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Awards and rewards/VEDA5/award-03.png" alt="VEDA5 Award 03" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Trusted Healing Destination</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Evidence-based Ayurvedic protocols</li>
                  <li>Experienced physicians and therapists</li>
                  <li>Long-term wellness outcomes</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Awards and rewards/VEDA5/award-04.png" alt="VEDA5 Award 04" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Sustainable Wellness Leadership</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Nature-based healing practices</li>
                  <li>Clean, mindful living environments</li>
                  <li>Ethical and responsible operations</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Awards and rewards/VEDA5/award-05.png" alt="VEDA5 Award 05" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Guest Experience Excellence</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Warm hospitality and attentive care</li>
                  <li>Comfortable, serene accommodations</li>
                  <li>Consistent 5-star feedback</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Awards and rewards/VEDA5/award-06.png" alt="VEDA5 Award 06" className="w-32 h-32 md:w-40 md:h-40 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Global Wellness Community </h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Holistic programs for diverse needs</li>
                  <li>Integrative therapies and education</li>
                  <li>Recognition from wellness bodies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Information</h2>
            <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>Flexible payment options and insurance support to make holistic healthcare accessible</p>
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
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>International health insurance may cover Ayurvedic wellness treatments</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Guests should verify eligibility and claim procedures with providers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>VEDA5 supplies detailed medical documentation, reports, and invoices</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Support provided for claims and reimbursement processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <ClipboardList className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Accepts international cards, bank transfers, and cash payments</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Detailed pricing via tariff brochure or reservations team</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Early booking discounts, seasonal offers, and special promotions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                    <span className="text-primary mt-1">✓</span>
                    <span>Group bookings, extended stays, and payment plans for longer programs</span>
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
                  <h4 className="text-lg font-semibold text-primary mb-2">For International Patients</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Please confirm coverage with your insurer for Ayurvedic treatments. Our team provides necessary documentation and medical reports to support insurance claims and reimbursements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions About VEDA5</h2>
            <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
              Find answers to common questions about treatments, facilities, and your healing journey
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
            <AccordionItem value="faq1" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">What is the minimum duration of treatment at VEDA5?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  The minimum recommended stay is 7 days for wellness and rejuvenation programs, 10-14 days for detoxification packages, and 14-21 days for comprehensive Panchakarma and medical treatment programs. Longer durations provide deeper therapeutic benefits and more sustainable health improvements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Do I need to bring my medical records?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Yes, bringing previous medical reports, diagnostic test results, current prescriptions, and detailed health history helps Ayurvedic physicians understand your condition comprehensively and design optimal personalized treatment protocols tailored to your specific needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Is VEDA5 suitable for elderly patients?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Absolutely. VEDA5 welcomes guests of all ages and specializes in providing gentle, age-appropriate treatments for senior citizens. Therapies are carefully adapted to individual stamina, health status, and mobility, ensuring safety and comfort throughout the healing journey.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Can I continue my regular medications during treatment?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Yes, initially you continue necessary medications. Ayurvedic physicians review your prescriptions during consultation and may gradually reduce dosages as Ayurvedic treatments show positive effects. Never stop medications abruptly without proper physician guidance and monitoring.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">What should I pack for my stay at VEDA5?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Comfortable loose cotton clothing suitable for the climate, personal toiletries, regular medications, previous medical reports, yoga attire, swimwear, sunscreen, insect repellent, and an open mind for healing. VEDA5 provides treatment gowns, towels, and yoga mats.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Is vegetarian food mandatory?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Yes, VEDA5 serves exclusively vegetarian Satvik organic cuisine as recommended in Ayurvedic principles for optimal healing and detoxification. The delicious meals are nutritious, varied, prepared with fresh ingredients, and customized to individual dosha constitutions. No alcohol is served or permitted at the retreat.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq7" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Can family members stay with patients?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Yes, family members and companions can stay at VEDA5. Accommodation options are available for non-treatment guests who wish to accompany patients. Couples and families are welcome to experience wellness retreats together.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq8" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Is WiFi and mobile connectivity available?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Limited WiFi is available in designated areas for a nominal charge. However, VEDA5 encourages digital detox as an integral part of the healing process. Disconnecting from technology, emails, and social media significantly enhances treatment benefits, stress reduction, mental peace, and allows for deeper inner connection and rejuvenation.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mb-12">
          <Card className="border-2 border-primary">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address – Rishikesh</h4>
                      <p style={{ color: "#7F543D" }}>
                        VEDA5 Ayurveda & Yoga Retreat<br />
                        Neelkanth Road, Rattapani<br />
                        Rishikesh - 249137<br />
                        Uttarakhand, INDIA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address – Kerala</h4>
                      <p style={{ color: "#7F543D" }}>
                        VEDA5 Ayurveda & Yoga Retreat<br />
                        Kurikuri Beach, Kaipamangalam<br />
                        Thrissur District - 680615<br />
                        Kerala, INDIA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address – Goa</h4>
                      <p style={{ color: "#7F543D" }}>
                        VEDA5 Luxury Ayurveda & Yoga Retreat<br />
                        Arambol, Pernem<br />
                        North Goa - 403524<br />
                        Goa, INDIA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p style={{ color: "#7F543D" }}>
                        +91 135 304 7777<br />
                        Mobile: +91 98370 48016
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p style={{ color: "#7F543D" }}>info@vedafive.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Website</h4>
                      <a href="https://www.vedafive.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vedafive.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl p-8 md:p-10 bg-primary text-primary-foreground shadow-md mt-10 md:mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Begin Your Holistic Healing Journey at Veda5</h2>
          <p className="text-center mb-6 opacity-90">
            Experience premium Ayurveda and yoga in tranquil natural settings across Rishikesh, Kerala, and Goa.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={() => setQuoteModalOpen(true)}
            >
              Book Your Consultation Today
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 font-semibold"
      >
        <Phone size={20} />
        <span className="hidden md:inline">Get Free Quote</span>
      </button>
    </div>
  );
};

export default Veda5Center;
