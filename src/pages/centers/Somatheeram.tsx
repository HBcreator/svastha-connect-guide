import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin, Phone, Mail, Globe, Star, ChevronLeft, ChevronRight,
  Award, Users, Heart, Leaf, Sparkles, ShieldCheck,
  ClipboardList, Stethoscope, Utensils, FileSearch, Images,
  Droplet, TreePine, TestTube2, MessageCircleHeart, Video, TrendingUp, MessageCircle, Brain, Activity, Check, Pill, HeartPulse, Wind, UserCheck, Home, BookOpen, ShoppingBag, CreditCard, Quote, Calendar
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function Somatheeram() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const [showVideoGalleryTop, setShowVideoGalleryTop] = useState(false);
  const [content, setContent] = useState("");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [autoReview, setAutoReview] = useState(true);

  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [galleryLightboxOpen, setGalleryLightboxOpen] = useState(false);
  const [galleryLightboxImage, setGalleryLightboxImage] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [patientReviews, setPatientReviews] = useState<{name:string,country:string,condition:string,date:string,rating:number,photo:string,verified:boolean,quote:string}[]>([]);

  const heroImages = [
    "/Center Images/somatheeram/Somatheeram 01.jpg",
    "/Center Images/somatheeram/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Somatheeram-03.jpg",
    "/Center Images/somatheeram/Somatheeram-04.jpg",
    "/Center Images/somatheeram/Somatheeram-05.jpg",
  ];

  const images = [
    "/Center Images/somatheeram/Somatheeram 01.jpg",
    "/Center Images/somatheeram/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Somatheeram-03.jpg",
    "/Center Images/somatheeram/Somatheeram-04.jpg",
    "/Center Images/somatheeram/Somatheeram-05.jpg",
    "/Center Images/somatheeram/Somatheeram-06.jpg",
    "/Center Images/somatheeram/Somatheeram-07.jpg",
    "/Center Images/somatheeram/Somatheeram-08.jpg",
    "/Center Images/somatheeram/Somatheeram-09.jpg",
    "/Center Images/somatheeram/Somatheeram-10.jpg",
    "/Center Images/somatheeram/Somatheeram-11.jpg",
    "/Center Images/somatheeram/Somatheeram-12.jpg",
    "/Center Images/somatheeram/Somatheeram-13.jpg",
    "/Center Images/somatheeram/Somatheeram-14.jpg",
    "/Center Images/somatheeram/Somatheeram-15.jpg",
    "/Center Images/somatheeram/Somatheeram-16.jpg",
    "/Center Images/somatheeram/Somatheeram-17.jpg",
    "/Center Images/somatheeram/Somatheeram-18.jpg",
    "/Center Images/somatheeram/Somatheeram-19.jpg",
    "/Center Images/somatheeram/Somatheeram-20.jpg",
    "/Center Images/somatheeram/Somatheeram-21.jpg",
    "/Center Images/somatheeram/Somatheeram-22.jpg",
    "/Center Images/somatheeram/Somatheeram-23.jpg",
    "/Center Images/somatheeram/Somatheeram-24.jpg",
    "/Center Images/somatheeram/Somatheeram-25.jpg",
    "/Center Images/somatheeram/Somatheeram-26.jpg",
    "/Center Images/somatheeram/Somatheeram-27.jpg",
    "/Center Images/somatheeram/Somatheeram-28.jpg",
    "/Center Images/somatheeram/Somatheeram-29.jpg",
    "/Center Images/somatheeram/Somatheeram-30.jpg",
    "/Center Images/somatheeram/Somatheeram-31.jpg",
  ];

  const thumbnailImages = [
    "/Center Images/somatheeram/Somatheeram 01.jpg",
    "/Center Images/somatheeram/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Somatheeram-12.jpg",
    "/Center Images/somatheeram/Somatheeram-07.jpg",
    "/Center Images/somatheeram/Somatheeram-31.jpg",
    "/Center Images/somatheeram/Somatheeram-24.jpg",
  ];

  const videos = [
    "/Center Videos/Somatheeram/Somatheeram-01.mp4",
    "/Center Videos/Somatheeram/Somatheeram-02.mp4",
    "/Center Videos/Somatheeram/Somatheeram-03.mp4",
  ];

  const facilityImages = [
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram 01.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-03.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-04.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-05.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-06.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-07.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-08.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-09.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-10.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-11.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-12.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-13.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-14.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-15.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-16.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-17.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-18.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-19.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-20.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-21.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-22.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-23.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-24.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-25.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-26.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-27.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-28.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-29.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-30.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-31.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-32.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-33.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-34.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-35.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-36.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-37.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-38.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-39.jpg",
  ];

  useEffect(() => {
    const avatarFor = (idx:number) => `https://i.pravatar.cc/120?img=${(idx % 70) + 1}`;
    fetch("/content/Top Centers/somatheeram center patient reviews.txt")
      .then((r) => r.text())
      .then((t) => {
        const lines = t.split(/\r?\n/);
        const reviews: {name:string,country:string,condition:string,date:string,rating:number,photo:string,verified:boolean,quote:string}[] = [];
        let current: any = null;
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          const headerMatch = /^\*\*Review\s+\d+\s+-\s+(.+?)\,\s+(.+?)\*\*$/.exec(line);
          if (headerMatch) {
            if (current) reviews.push(current);
            current = {
              name: headerMatch[1],
              country: headerMatch[2],
              condition: "",
              date: "",
              rating: 5,
              photo: avatarFor(reviews.length),
              verified: true,
              quote: "",
            };
            continue;
          }
          const titleMatch = /^\*"(.+?)"\*$/.exec(line);
          if (titleMatch && current) {
            current.quote = `${titleMatch[1]}\n`;
            continue;
          }
          const ratingMatch = /^\*\*Rating:\s*[^\d]*\((\d)\/5\)\*\*$/.exec(line);
          if (ratingMatch && current) {
            current.rating = parseInt(ratingMatch[1], 10);
            continue;
          }
          if (line && current && !line.startsWith("###")) {
            // Append body text
            current.quote += (current.quote ? "\n" : "") + line;
          }
        }
        if (current) reviews.push(current);
        setPatientReviews(reviews);
      })
      .catch(() => {
        // Fallback: keep empty or previous
      });
  }, []);

  const mediaItems = [
    { image: "/Center Images/somatheeram/Somatheeram-03.jpg", pdf: "#", title: "Feature" },
    { image: "/Center Images/somatheeram/Somatheeram-05.jpg", pdf: "#", title: "Recognition" },
    { image: "/Center Images/somatheeram/Somatheeram-06.jpg", pdf: "#", title: "Awards" },
  ];

  const nextFacility = () => setCurrentFacilityIndex((i) => (i + 1) % facilityImages.length);
  const prevFacility = () => setCurrentFacilityIndex((i) => (i - 1 + facilityImages.length) % facilityImages.length);

  useEffect(() => {
    fetch("/content/Top Centers/somatheeram center.txt")
      .then((r) => r.text())
      .then((t) => setContent(t))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setSelectedImage((p) => (p + 1) % images.length);
    }, 3000);
    return () => clearInterval(id);
  }, [isAutoPlaying, images.length]);

  useEffect(() => {
    if (!galleryLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGalleryLightboxOpen(false);
      if (e.key === "ArrowLeft") setGalleryLightboxImage((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setGalleryLightboxImage((prev) => (prev + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryLightboxOpen, images.length]);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentFacilityIndex((i) => (i + 1) % facilityImages.length);
    }, 3000);
    return () => clearInterval(id);
  }, [facilityImages.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") setLightboxIndex((lightboxIndex - 1 + facilityImages.length) % facilityImages.length);
      if (e.key === "ArrowRight") setLightboxIndex((lightboxIndex + 1) % facilityImages.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, lightboxIndex, facilityImages.length]);

  useEffect(() => {
    if (!autoReview) return;
    const id = setInterval(() => {
      setCurrentReviewIndex((i) => (i + 1) % patientReviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [autoReview, patientReviews.length]);
  

  const parsedContent = useMemo(() => {
    if (!content) return null;
    const renderInline = (text: string, keyBase: string) => {
      const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);
      return parts.map((part, i) => {
        if (/^\*\*.*\*\*$/.test(part)) return <strong key={keyBase + i} className="font-semibold text-[#7F543D]">{part.slice(2, -2)}</strong>;
        if (/^\*[^*]+\*$/.test(part)) return <em key={keyBase + i} className="italic text-[#7F543D]">{part.slice(1, -1)}</em>;
        return <span key={keyBase + i}>{part}</span>;
      });
    };
    const lines = content.split(/\r?\n/);
    const nodes: any[] = [];
    let paragraphBuffer: string[] = [];
    let listBuffer: { items: string[]; type: 'star' | 'dash' } | null = null;
    const flushParagraph = (k: string) => {
      if (!paragraphBuffer.length) return;
      nodes.push(<p key={k} className="text-[#7F543D] mb-4">{renderInline(paragraphBuffer.join(" "), k)}</p>);
      paragraphBuffer = [];
    };
    const flushList = (k: string) => {
      if (!listBuffer || !listBuffer.items.length) return;
      nodes.push(
        <ul key={k} className="list-disc pl-5 mb-4 text-[#7F543D]">
          {listBuffer.items.map((li, i) => <li key={k + i}>{renderInline(li, k + "-" + i)}</li>)}
        </ul>
      );
      listBuffer = null;
    };
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) { flushParagraph("p" + i); flushList("l" + i); continue; }
      if (line.startsWith("### ")) { flushParagraph("p" + i); flushList("l" + i); nodes.push(<h2 key={"h2-" + i} className="text-2xl text-primary font-semibold mb-3">{renderInline(line.replace(/^###\s+/, ""), "h2-" + i)}</h2>); continue; }
      const boldMatch = line.match(/^\*\*(.+)\*\*$/);
      if (boldMatch) { flushParagraph("p" + i); flushList("l" + i); const inner = boldMatch[1].trim(); if (inner.length > 30) nodes.push(<h1 key={"h1-" + i} className="text-3xl text-primary font-bold border-b pb-2 mb-4">{renderInline(inner, "h1-" + i)}</h1>); else nodes.push(<h3 key={"h3-" + i} className="text-lg text-primary font-semibold mb-2">{renderInline(inner, "h3-" + i)}</h3>); continue; }
      if (/^[*-]\s+/.test(line)) {
        const isStar = /^\*\s+/.test(line);
        const item = line.replace(/^[*-]\s+/, "").trim();
        if (!listBuffer) {
          listBuffer = { items: [], type: isStar ? 'star' : 'dash' };
        } else if (listBuffer.type !== (isStar ? 'star' : 'dash')) {
          flushList('l' + i);
          listBuffer = { items: [], type: isStar ? 'star' : 'dash' };
        }
        listBuffer.items.push(item);
        continue;
      }
      const numberedBold = line.match(/^\d+\.\s*(?:\*\*(.+)\*\*|(.+))/);
      if (numberedBold) { flushParagraph("p" + i); flushList("l" + i); const inner = numberedBold[1] || numberedBold[2] || line; nodes.push(<h3 key={"num-" + i} className="text-xl text-primary font-semibold mb-2">{renderInline(inner.trim(), "num-" + i)}</h3>); continue; }
      paragraphBuffer.push(line);
    }
    flushParagraph("end"); flushList("end");
    return nodes;
  }, [content]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Somatheeram Ayurvedic Health Resort</h1>
                <p className="text-xl mb-4 opacity-90">Kovalam, Kerala</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Malabar Coast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(320+ reviews)</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
      </div>
    </div>
  </div>

  

      

      

      

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
              <div className="flex items-center mb-6 flex-wrap gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
                <Button
                  variant={!showVideoGalleryTop ? "default" : "outline"}
                  size="lg"
                  onClick={() => setShowVideoGalleryTop(false)}
                  className="text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none"
                >
                  Photo Gallery
                </Button>
                <Button
                  variant={showVideoGalleryTop ? "default" : "outline"}
                  size="lg"
                  onClick={() => setShowVideoGalleryTop(true)}
                  className="flex items-center gap-1 md:gap-2 text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none"
                >
                  <Video className="h-4 w-4 md:h-6 md:w-6" />
                  Video Gallery
                </Button>
              </div>
            </div>

            {!showVideoGalleryTop ? (
              <>
                <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                  <img
                    src={images[selectedImage]}
                    alt={`Somatheeram ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <button
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
                    }}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setSelectedImage((prev) => (prev + 1) % images.length);
                    }}
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
                      setGalleryLightboxImage(images.indexOf(thumbnailImages[0]));
                      setGalleryLightboxOpen(true);
                    }}
                  >
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <img
                        src={thumbnailImages[0]}
                        alt="Somatheeram 1"
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
                            setGalleryLightboxImage(actualIndex);
                            setGalleryLightboxOpen(true);
                          }}
                        >
                          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                            <img
                              src={img}
                              alt={`Somatheeram ${actualIndex + 1}`}
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
              <>
                <div className="space-y-6">
                  <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
                    <video
                      key={selectedVideo}
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src={videos[selectedVideo]} type="video/mp4" />
                    </video>
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                      Video {selectedVideo + 1} / {videos.length}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {videos.map((_, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedVideo(idx)}
                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                          selectedVideo === idx ? "ring-4 ring-primary" : "ring-2 ring-transparent hover:ring-primary/30"
                        }`}
                      >
                        <img
                          src={thumbnailImages[idx]}
                          alt={`Video ${idx + 1} Thumbnail`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                            <Video className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                          Video {idx + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {showFullGallery && (
        <div className="fixed inset-0 bg-black/70 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              className="bg-white text-primary px-4 py-2 rounded-lg"
              onClick={() => setShowFullGallery(false)}
            >
              Close
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
              {images.map((src, i) => (
                <img key={i} src={src} alt={`Somatheeram ${i + 1}`} className="w-full h-full object-cover rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}

      {galleryLightboxOpen && (
        <div
          className="fixed inset-0 backdrop-blur-lg z-[60] flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }}
          onClick={() => setGalleryLightboxOpen(false)}
        >
          <div className="absolute top-0 left-0 right-0 py-6 px-4 text-center z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Somatheeram Ayurvedic Health Resort
            </h2>
          </div>

          {/* Desktop: Arrow Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setGalleryLightboxImage((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <div
            className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center mt-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={images[galleryLightboxImage]}
                alt={`Somatheeram ${galleryLightboxImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />

              <button
                onClick={() => setGalleryLightboxOpen(false)}
                className="absolute top-3 right-3 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg"
                aria-label="Close"
              >
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                {galleryLightboxImage + 1} / {images.length}
              </div>

              {/* Mobile: Previous/Next positioned under image */}
              <div className="md:hidden absolute -bottom-12 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={() => setGalleryLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Previous
                </button>
                <button
                  onClick={() => setGalleryLightboxImage((prev) => (prev + 1) % images.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Desktop: Arrow Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setGalleryLightboxImage((prev) => (prev + 1) % images.length);
            }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      )}
      
      <div className="container mx-auto px-3 md:px-4 max-w-full">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12">
            <CardContent className="p-8 prose prose-lg max-w-none">
              {parsedContent}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10">
              <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Happy Patients</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">4.5/5</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Average Rating</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-xl md:text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-xs md:text-sm" style={{ color: "#7F543D" }}>Success Rate</div>
              </div>
            </div>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Wellness Programs</h2>
              <p className="text-base md:text-lg" style={{ color: "#7F543D" }}>Cleanse, de-stress, and revitalize with holistic Ayurveda</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="detox" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Droplet className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Detoxification Programs</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Authentic Panchakarma cleansing following classical texts to eliminate deep toxins and balance doshas.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Snehana oleation and Swedana herbal steam</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Vamana therapeutic emesis (Kapha)</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Virechana purgation (Pitta)</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Basti medicated enema (Vata)</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Nasya nasal medication</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="stress" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Brain className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Stress Management & Mental Wellness</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Calming therapies with yoga, meditation, and counseling for anxiety, burnout, and insomnia.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Shirodhara for deep relaxation</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Shirobasti oil retention on head</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Takradhara cooling buttermilk therapy</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Pranayama breathing practices</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Meditation & mindfulness</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Psychological counseling support</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rejuvenation" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Sparkles className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Anti‑Aging & Rejuvenation (Rasayana)</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Vitalization of body and mind with Rasayanas to slow aging, enhance immunity, and boost vitality.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Abhyanga and Pizhichil therapies</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Shirodhara for mental peace</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Rejuvenating Rasayana herbal supplements</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Personalized diet for tissue regeneration</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="weight" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Activity className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Weight Management Programs</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Metabolism correction and sustainable weight loss with therapies, medicines, yoga, and diet.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Udvartana powder massage</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Kizhi herbal bundle therapy</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Metabolic enhancement medicines</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Constitution‑specific diet plans & yoga</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="immunity" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Immunity Boosting & Preventive Care</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Immune‑enhancing Rasayanas and therapies to strengthen natural defense mechanisms.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Immune‑enhancing herbal preparations</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Rejuvenating oil therapies</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Pranayama for respiratory strength</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Nutritional counseling for resilience</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="beauty" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Sparkles className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Beauty & Skin Care Programs</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Natural aesthetic therapies for skin rejuvenation, complexion enhancement, and anti‑aging care.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Mukhalepam herbal face treatments</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Body polishing with natural ingredients</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Hair care therapies with traditional oils</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Anti‑aging treatments</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="purification" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Droplet className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Body Purification Package</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm" style={{ color: "#7F543D" }}>Authentic Panchakarma detoxification focusing on deep cleansing and dosha balance.</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Personalized Panchakarma plan</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Herbal internal medicines</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Dosha‑balancing diet guidance</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="preventive" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Preventive Healthcare</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm" style={{ color: "#7F543D" }}>Disease prevention and health promotion through lifestyle, diet, and supportive therapies.</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Lifestyle counseling</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Seasonal Ritucharya routines</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Immunity‑boosting Rasayanas</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="couple" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Couple Wellness Retreats</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm" style={{ color: "#7F543D" }}>Joint healing experiences designed for partners to rejuvenate together.</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Joint therapy sessions</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Private yoga & meditation</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Customized diet for two</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="post-surgical" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Stethoscope className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Post‑Surgical Recovery</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm" style={{ color: "#7F543D" }}>Rehabilitation and strength building to support recovery after surgical procedures.</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Gentle physiotherapy integration</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Circulation‑enhancing oil therapies</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Strength‑building yoga</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sports-injury" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Activity className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Sports Injury Recovery</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm" style={{ color: "#7F543D" }}>Therapeutic treatments tailored for athletes to restore mobility and function.</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Kizhi & localized therapies</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Mobility restoration exercises</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Anti‑inflammatory herbal oils</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3 md:px-4 max-w-full mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Medical Programs</h2>
              <p className="text-base md:text-lg" style={{ color: "#7F543D" }}>Condition‑focused care using authentic Ayurveda protocols</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="arthritis" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Stethoscope className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Arthritis & Joint Disorders</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Rheumatoid arthritis, osteoarthritis, gout, and chronic joint pain management with personalized therapies.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Rheumatoid & osteoarthritis care</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Gout & joint inflammation protocols</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Functional mobility improvement</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="spine" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <ClipboardList className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Back Pain & Spinal Problems</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Sciatica, disc prolapse, spondylosis, and chronic backache addressed by targeted therapies and strengthening.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Sciatica nerve pain relief</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Disc prolapse & spondylosis protocols</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Chronic backache management</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="skin" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Leaf className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Skin Diseases</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Psoriasis, eczema, dermatitis, acne, and vitiligo with internal and external therapies.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Psoriasis & eczema management</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Dermatitis & acne protocols</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Vitiligo support</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="digestive" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Utensils className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Digestive Disorders</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>IBS, chronic constipation, acidity, and liver disorders treated with diet, medicines, and therapies.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>IBS & chronic constipation</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Hyperacidity protocols</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Liver function support</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="neuro" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Brain className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Neurological Conditions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Paralysis, Parkinson’s disease, neuropathy, and migraine care through integrated Ayurvedic protocols.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Post‑paralysis rehabilitation</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Parkinson’s symptom management</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Neuropathy & migraine protocols</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="metabolic" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Pill className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Metabolic Diseases</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Diabetes, thyroid disorders, obesity, and cholesterol issues managed with diet, medicines, and therapies.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Diabetes & thyroid balance</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Obesity & lipid management</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Constitution‑specific nutrition</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="respiratory" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <Wind className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Respiratory Conditions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Asthma, chronic bronchitis, sinusitis, and allergies treated with targeted therapies and lifestyle care.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Asthma & bronchitis support</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Sinusitis & allergy care</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Breathwork & lifestyle guidance</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gyne" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <UserCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Gynecological Issues</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>PCOS, irregular menstruation, and menopausal symptoms addressed with hormone‑supportive Ayurvedic care.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>PCOS protocols</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Cycle regulation care</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Menopause symptom relief</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cardio" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <HeartPulse className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Cardiovascular Problems</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Hypertension and heart health management with diet, lifestyle, and supportive therapies.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Blood pressure regulation</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Cardiac wellness support</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Diet & lifestyle guidance</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="autoimmune" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <ShieldCheck className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Autoimmune Disorders</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Lupus and multiple sclerosis support with immune‑modulating Ayurvedic care.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Lupus management support</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Multiple sclerosis supportive care</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Inflammation modulation</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancer" className="bg-white rounded-xl border-2 border-green-200 data-[state=open]:border-green-500">
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                      <TestTube2 className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-lg font-semibold text-primary">Cancer Rehabilitation</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm mb-3" style={{ color: "#7F543D" }}>Post‑chemotherapy rejuvenation and immunity building with safe supportive therapies.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Strength & vitality restoration</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Immune system support</span></li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>Nutrition & lifestyle guidance</span></li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      
      <section className="py-12 md:py-16 lg:py-20 mt-5">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-3 md:mb-4 font-poppins lg:whitespace-nowrap leading-tight">
                Why Choose Somatheeram for Your Holistic Health Journey
              </h2>

              <p className="text-sm md:text-lg text-[#7F543D] font-poppins mx-auto md:max-w-none lg:whitespace-nowrap leading-snug">
                Discover what makes Somatheeram India's premier destination for authentic holistic healing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 font-poppins leading-snug">
                      Award‑Winning Authentic Ayurveda
                    </h3>
                    <p className="text-sm md:text-base text-[#7F543D] leading-relaxed">
                      Ten‑time Kerala State Best Ayurvedic Centre with global recognition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 font-poppins leading-snug">
                      Medical Leadership & Safety
                    </h3>
                    <p className="text-sm md:text-base text-[#7F543D] leading-relaxed">
                      Led by Kerala's former Director of Ayurveda; 24‑hour physician availability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 font-poppins leading-snug">
                      30+ Years International Trust
                    </h3>
                    <p className="text-sm md:text-base text-[#7F543D] leading-relaxed">
                      German‑Indian management excellence and high guest satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 font-poppins leading-snug">
                      Healing Beach Locale
                    </h3>
                    <p className="text-sm md:text-base text-[#7F543D] leading-relaxed">
                      Pristine Malabar coast setting enhances natural recovery and calm.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <TestTube2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 font-poppins leading-snug">
                      In‑House Ayurvedic Pharmacy
                    </h3>
                    <p className="text-sm md:text-base text-[#7F543D] leading-relaxed">
                      Freshly prepared medicines aligned with your constitution and needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary group">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 font-poppins leading-snug">
                      Comprehensive Wellness & Medical Care
                    </h3>
                    <p className="text-sm md:text-base text-[#7F543D] leading-relaxed">
                      Programs from detox and rejuvenation to disease‑specific treatments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      
      <div className="container mx-auto px-3 md:px-4 max-w-full mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Treatment Process & Patient Journey</h2>
            <p className="text-base md:text-lg" style={{ color: "#7F543D" }}>Your personalized healing journey at Somatheeram, step by step</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {n:1, title:"Arrival & Welcome Orientation", desc:"Traditional welcome, orientation on facilities and schedules, room allocation per medical needs.", tag:"Day 1", icon:"ClipboardList"},
              {n:2, title:"Initial Medical Consultation", desc:"Constitution assessment, dosha imbalance identification, review of health history and labs if required.", tag:"Day 1", icon:"FileSearch"},
              {n:3, title:"Personalized Treatment Plan", desc:"Therapy schedule, internal medicines, diet and yoga recommendations tailored to goals.", tag:"Day 1–2", icon:"Stethoscope"},
              {n:4, title:"Daily Treatment Schedule", desc:"1.5–2 hours of authentic therapies performed each day with fresh herbal preparations.", tag:"Daily", icon:"Pill"},
              {n:5, title:"Dosha‑Specific Meals", desc:"Three vegetarian meals daily following Ayurvedic nutrition, optimized for digestion.", tag:"Daily", icon:"Utensils"},
              {n:6, title:"Yoga & Meditation Practice", desc:"Daily sessions for stress reduction, mental balance, and deeper healing.", tag:"Daily", icon:"Activity"},
              {n:7, title:"Daily Medical Monitoring", desc:"Brief physician check‑ins to adjust therapies and medicines based on progress.", tag:"Ongoing", icon:"HeartPulse"},
              {n:8, title:"Mid‑Stay Consultation", desc:"Detailed progress evaluation and fine‑tuning of remaining program.", tag:"Mid‑Stay", icon:"FileSearch"},
              {n:9, title:"Final Consultation & Home Care", desc:"Discharge summary with diet, lifestyle guidance, continuation medicines, follow‑up plan.", tag:"Discharge", icon:"Home"},
              {n:10, title:"Post‑Treatment Support", desc:"Ongoing support via service office for queries and follow‑up coordination.", tag:"Follow‑up", icon:"MessageCircle"},
            ].map((step, idx) => (
              <div key={step.n} className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    {step.n}
                  </div>
                  {idx < 9 && <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>}
                </div>
                <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {step.icon === "ClipboardList" && <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                        {step.icon === "FileSearch" && <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                        {step.icon === "Stethoscope" && <Stethoscope className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                        {step.icon === "Pill" && <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                        {step.icon === "Utensils" && <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                        {step.icon === "Activity" && <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                        {step.icon === "HeartPulse" && <HeartPulse className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                        {step.icon === "Home" && <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                        {step.icon === "MessageCircle" && <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-primary" />}
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">{step.title}</h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{step.tag}</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>{step.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
      </div>
      </div>
      
      <div className="container mx-auto px-3 md:px-4 max-w-full mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 rounded-3xl overflow-hidden p-6 md:p-8 lg:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Ready to Start Your Wellness Journey?
                </h2>
                <p className="text-sm md:text-base lg:text-lg mb-6" style={{ color: "#7F543D" }}>
                  Take the first step towards holistic healing. Our expert team is here to guide you through personalized treatment plans tailored to your unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-5 lg:px-8 lg:py-6 text-sm md:text-base"
                    asChild
                  >
                    <Link to="/contact">
                      <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                      Book Consultation Now
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-5 lg:px-8 lg:py-6 text-sm md:text-base"
                    onClick={() => setQuoteModalOpen(true)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    Chat With Us
                  </Button>
                </div>
                <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                  📞 Call us: <a href="tel:+914712266501" className="text-primary font-semibold hover:underline">+91 471 22 665 01/02/03</a>
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img
                  src="/Center Images/somatheeram/Facilities & Amenities/Somatheeram-34.jpg"
                  alt="Somatheeram"
                  className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-3 md:px-4 max-w-full mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
            <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>Experience healing in comfort with our comprehensive range of traditional and modern facilities</p>
          </div>

          <div className="max-w-7xl mx-auto relative mb-10">
            <button onClick={prevFacility} className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110">
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
            <button onClick={nextFacility} className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110">
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>

            <div className="overflow-hidden px-10 md:px-12">
              <div className="md:hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentFacilityIndex * 100}%)` }}>
                  {facilityImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}>
                        <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${Math.min(currentFacilityIndex, facilityImages.length - 5) * 20}%)` }}>
                  {facilityImages.map((image, index) => (
                    <div key={index} className="w-1/5 flex-shrink-0 px-2">
                      <div className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all" onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}>
                        <img src={image} alt={`Facility ${index + 1}`} className="w-full aspect-video object-cover rounded-lg" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {facilityImages.map((_, index) => (
                <button key={index} onClick={() => setCurrentFacilityIndex(index)} className={`${index===currentFacilityIndex?"w-8 h-3 bg-primary":"w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full transition-all`} />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Home className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Accommodation</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Traditional cottages and suites</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Air‑conditioned rooms with modern amenities</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Comfortable furnishings and ensuite bathrooms</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Calming garden and sea views</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Droplet className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Wellness & Therapy</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Dedicated Panchakarma therapy centers</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Traditional Ayurvedic massage rooms</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Spacious yoga hall & meditation pavilions</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Hydrotherapy & supportive facilities</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Utensils className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Organic Dining</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Dosha‑specific vegetarian cuisine</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Personalized therapeutic meal plans</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Ayurvedic diet consultations</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Fresh juices & herbal teas</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TreePine className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Natural Environment</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Tropical gardens & walking trails</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Medicinal plant collections</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Tranquil water features</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Outdoor meditation & yoga spaces</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TestTube2 className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Medical Facilities</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>In‑house Ayurvedic pharmacy</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Custom medicine preparation</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>24/7 medical support</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Physiotherapy & rehabilitation</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircleHeart className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Support Services</h3>
                </div>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Professional counseling</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Airport pickup & drop</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Multilingual assistance</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">•</span><span>Library & housekeeping</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-l-primary">
            <div className="flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">All Facilities Meet International Healthcare Standards</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                  Somatheeram maintains the highest levels of safety, hygiene, and quality care, ensuring world‑class holistic treatment in a serene, naturally therapeutic environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      {lightboxOpen && (
        <div
          className="fixed inset-0 backdrop-blur-lg z-[60] flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }}
          onClick={() => setLightboxOpen(false)}
        >
          <div className="absolute top-0 left-0 right-0 py-6 px-4 text-center z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Somatheeram Facilities & Amenities</h2>
          </div>

          {/* Desktop: Arrow Previous (Facilities) */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length); }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center mt-16" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={facilityImages[lightboxIndex]} alt={`Facility ${lightboxIndex + 1}`} className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl" />
              <button onClick={() => setLightboxOpen(false)} className="absolute top-3 right-3 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg" aria-label="Close">
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                {lightboxIndex + 1} / {facilityImages.length}
              </div>

              {/* Mobile: Previous/Next positioned under image (Facilities) */}
              <div className="md:hidden absolute -bottom-12 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={() => setLightboxIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Previous
                </button>
                <button
                  onClick={() => setLightboxIndex((prev) => (prev + 1) % facilityImages.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Desktop: Arrow Next (Facilities) */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % facilityImages.length); }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      )}

      
      
      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 rounded-3xl p-4 md:p-10" style={{ backgroundColor: "#EDE8D0" }}>
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Founder & Team Info</h2>
              <p className="text-base md:text-lg" style={{ color: "#7F543D" }}>Led by visionary expertise and supported by generations of traditional healing knowledge</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img src="/Center Images/somatheeram/medical team and founder image/Founder Dr. Raman.jpg" alt="Dr. Raman" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">Dr. Raman</h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>Chief Medical Officer</p>
                      <p className="text-xs md:text-sm mt-1 text-primary/70">Former Director of Ayurveda, Kerala</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Dr. Raman leads Somatheeram's medical team with decades of experience in classical Ayurvedic medicine, specializing in Panchakarma and chronic disease management for international patients.
                  </p>
                  <div className="pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Ayurvedic Medicine</span>
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Panchakarma</span>
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Integrative Care</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img src="/Center Images/somatheeram/medical team and founder image/Somatheerm-medical team.jpg" alt="Expert Medical Team" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">Expert Medical Team</h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>4th Generation Ayurvedic Doctors</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Somatheeram employs thirteen full‑time Ayurvedic physicians trained at prestigious institutions, with specializations across Panchakarma, Rasayana rejuvenation, and disease‑specific care.
                  </p>
                  <div className="space-y-2 pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2 md:mb-3">Specialized Practitioners:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-xs" style={{ color: "#7F543D" }}>Panchakarma Specialists</span></div>
                      <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-xs" style={{ color: "#7F543D" }}>Rasayana Therapy Experts</span></div>
                      <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-xs" style={{ color: "#7F543D" }}>General Ayurvedic Physicians</span></div>
                      <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-xs" style={{ color: "#7F543D" }}>Yoga Therapy Specialists</span></div>
                      <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-xs" style={{ color: "#7F543D" }}>Pulse Diagnosis Masters</span></div>
                      <div className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span><span className="text-xs" style={{ color: "#7F543D" }}>Marma Therapy Practitioners</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-2">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg" style={{ color: "#7F543D" }}>Hear from our patients about their transformational healing journeys</p>
          </div>
          <div className="relative">
            <button onClick={() => setCurrentReviewIndex((i) => (i - 1 + patientReviews.length) % patientReviews.length)} className="absolute -left-5 md:-left-8 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow border border-[#DCE8E1] flex items-center justify-center text-[#214E41]">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={() => setCurrentReviewIndex((i) => (i + 1) % patientReviews.length)} className="absolute -right-5 md:-right-8 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white shadow border border-[#DCE8E1] flex items-center justify-center text-[#214E41]">
              <ChevronRight className="h-5 w-5" />
            </button>

            <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
              <CardContent className="p-4 md:p-12">
                <div className="flex justify-end">
                  <button onClick={() => setAutoReview((v) => !v)} className="px-3 py-1 rounded-full bg-[#EFEFEF] text-sm flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${autoReview ? "bg-green-500" : "bg-gray-400"}`}></span>
                  Auto
                  </button>
                </div>
                <div className="overflow-hidden">
                  <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentReviewIndex * 100}%)` }}>
                    {patientReviews.map((r, idx) => (
                      <div key={idx} className="w-full flex-shrink-0">
                        <div className="relative max-w-4xl mx-auto">
                          <div className="text-primary/20 mb-3 md:mb-4">
                            <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" /></svg>
                          </div>
                          <p className="mt-2 md:mt-4 text-lg md:text-xl leading-relaxed" style={{ color: "#7F543D" }}>
                            “{r.quote}”
                          </p>
                          <div className="mt-6 flex items-center gap-4">
                            <img src={r.photo} alt={r.name} className="h-14 w-14 rounded-full object-cover shadow" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-lg md:text-xl font-bold text-primary">{r.name}</span>
                                {r.verified && (
                                  <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "#E6F4EA", color: "#1E3A36", borderColor: "#CADBCF", borderWidth: 1 }}>
                                    <UserCheck className="h-3.5 w-3.5" /> verified
                                  </span>
                                )}
                              </div>
                              <div className="text-sm" style={{ color: "#7F543D" }}>{r.country} • {r.condition}</div>
                              <div className="text-xs" style={{ color: "#7F543D" }}>{r.date}</div>
                            </div>
                          </div>
                          <div className="mt-4 flex items-center gap-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-500" fill={i < Math.round(r.rating) ? "#F5C518" : "none"} />
                            ))}
                            <span className="ml-2 text-sm" style={{ color: "#7F543D" }}>{r.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-center gap-2">
                  {patientReviews.map((_, i) => (
                    <button key={i} onClick={() => setCurrentReviewIndex(i)} className={`h-2 w-2 rounded-full ${i===currentReviewIndex?"bg-[#2F6B5F]":"bg-[#D3E3DA]"}`}></button>
                  ))}
                </div>
      </CardContent>
    </Card>
  </div>
</div>
</div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Center Images/somatheeram/Awards/Lay_BestAyurvedic.png" alt="Best Ayurvedic Centre" className="w-48 h-48 md:w-56 md:h-56 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Best Ayurvedic Centre — Kerala State Awards</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <p>Recognized multiple times by Kerala Tourism for excellence in authentic Ayurveda care and guest experience.</p>
                <p className="font-semibold text-primary">Honors consistent quality, clinical expertise, and holistic hospitality.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Center Images/somatheeram/Awards/Lay_NationalTourism.png" alt="National Tourism Award" className="w-48 h-48 md:w-56 md:h-56 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">National Tourism Award — Government of India</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <p>National-level recognition for pioneering Ayurveda wellness tourism and maintaining high standards of service.</p>
                <p className="font-semibold text-primary">Highlights leadership in integrated healing and guest satisfaction.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Center Images/somatheeram/Awards/Lay_GreenLeaf.png" alt="Green Leaf Certification" className="w-48 h-48 md:w-56 md:h-56 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Kerala Tourism — Green Leaf Certification</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <p>Certification awarded to authentic Ayurvedic centers meeting rigorous benchmarks for quality, hygiene, and ethics.</p>
                <p className="font-semibold text-primary">Affirms clinical standards and patient safety.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Center Images/somatheeram/Awards/Lay_Kerala_Award.png" alt="Kerala Tourism Awards" className="w-48 h-48 md:w-56 md:h-56 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Kerala Tourism Awards</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <p>State-level awards across years recognizing excellence in Ayurveda services, sustainability, and hospitality.</p>
                <p className="font-semibold text-primary">Reflects long-standing trust and credibility.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
              <div className="flex flex-col items-center mb-4">
                <img src="/Center Images/somatheeram/Awards/Lay_Food_Award.png" alt="Ayurvedic Cuisine Award" className="w-48 h-48 md:w-56 md:h-56 object-contain mb-4" />
                <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">Award-Winning Ayurvedic Cuisine</h4>
              </div>
              <div className="space-y-2 text-sm md:text-base" style={{ color: "#7F543D" }}>
                <p>Recognition for authentic, dosha-specific vegetarian menus crafted by experienced Ayurvedic chefs.</p>
                <p className="font-semibold text-primary">Emphasizes nutrition, taste, and therapeutic value.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-8">
        <div className="max-w-6xl mx-auto">
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
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>International policies may cover Ayurvedic treatments</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Documentation provided for claim procedures</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Support with major insurance providers</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Check eligibility with your insurer</span></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Payment Options</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Bank transfers, credit cards, and cash</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Transparent pricing with detailed tariff</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>Early booking discounts available</span></li>
                  <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}><span className="text-primary mt-1">✓</span><span>European service office assistance</span></li>
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
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>International patients are advised to check with their respective insurance providers regarding coverage for holistic and alternative medicine treatments. Our administrative team can provide necessary documentation and medical reports to support your insurance claims.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      

      

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MessageCircleHeart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions About Somatheeram</h2>
            <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>Find answers to common questions about treatments, facilities, and your healing journey</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
            <AccordionItem value="item-1" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">What is the minimum duration of treatment at Somatheeram?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>The minimum recommended stay is 7 days for wellness and rejuvenation programs, 14 days for body purification Panchakarma, and 21-28 days for medical treatment of chronic conditions. Ayurvedic healing requires adequate time for treatments to work at deep tissue levels and achieve lasting therapeutic benefits.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Do I need to bring my medical records?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Yes, bringing previous medical reports, diagnostic test results, current prescriptions, and detailed health history helps Ayurvedic physicians understand your condition comprehensively and design optimal treatment protocols tailored to your specific needs.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Is Somatheeram suitable for elderly patients?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Absolutely. Somatheeram specializes in treating elderly patients with age-related conditions such as arthritis, diabetes, hypertension, and mobility issues. Treatments are adapted to individual stamina and health status, ensuring safety and comfort for senior citizens throughout their healing journey.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Can I continue my regular medications during treatment?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Yes, initially you continue necessary medications. Ayurvedic physicians review your prescriptions during consultation and gradually reduce dosages as Ayurvedic treatments begin showing positive effects. Never stop medications abruptly without proper physician guidance and monitoring.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">What should I pack for my stay at Somatheeram?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Comfortable loose cotton clothing, personal toiletries, regular medications, previous medical reports, swimwear, sunscreen, insect repellent, and an open mind for healing. The resort provides treatment gowns, towels, yoga mats, and thermosflasks with Ayurvedic herbal tea.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Is vegetarian food mandatory?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Yes, Somatheeram serves exclusively vegetarian Ayurvedic cuisine as recommended in classical texts for optimal healing and detoxification. The award-winning kitchen prepares approximately 200 different delicious dishes following Ayurvedic nutritional principles, customized to individual dosha constitutions.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Can family members stay with patients?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Yes, family members and companions can stay at the resort. Accommodation options are available for non-treatment guests who pay for room and meals only. However, the resort maintains a peaceful healing atmosphere rather than typical resort entertainment environment.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-lg font-semibold text-primary text-left">Is WiFi and mobile connectivity available?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 bg-white">
                <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>Limited WiFi is available for a nominal charge in designated areas. However, Somatheeram encourages digital detox as an integral part of the healing process. Disconnecting from technology and social media significantly enhances treatment benefits, stress reduction, and mental peace.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-full mt-12">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-12 border-2 border-primary">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Address</h4>
                      <p style={{ color: "#7F543D" }}>
                        Somatheeram Ayurvedic Health Resort<br />
                        Kovalam, Thiruvananthapuram<br />
                        Kerala, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p style={{ color: "#7F543D" }}>+91 471 22 665 01/02/03</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p style={{ color: "#7F543D" }}>info@somatheeram.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Website</h4>
                      <a href="https://www.somatheeram.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.somatheeram.org</a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Begin Your Healing Journey</h3>
                <p className="opacity-90 mb-6">Authentic Ayurveda by the sea with expert medical care and personalized programs.</p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link to="/contact"><Phone className="mr-2 h-4 w-4" />Book Consultation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}

