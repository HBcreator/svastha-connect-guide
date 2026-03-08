import { useState, useEffect, useRef, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import MarkdownContent from "@/components/MarkdownContent";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, Images, Video, FileSearch, Users, TrendingUp, Droplet, Brain, Sparkles, Activity, ShieldCheck, Leaf, Heart, Stethoscope, Hospital, Award, PawPrint, Building2, Utensils, TreePine, Home, HeartPulse, ClipboardList, Pill, Phone, MessageCircle, BookOpen, UserCheck, Mail, Globe, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function NamasteDwaar() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isJumpModalOpen, setIsJumpModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [selectedTestimonialVideo, setSelectedTestimonialVideo] = useState(0);
  const [testimonialVideos, setTestimonialVideos] = useState<string[]>([]);
  const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
  const testimonialSectionRef = useRef<HTMLDivElement>(null);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [facilityIndex, setFacilityIndex] = useState(0);
  const [facilityAutoPlay, setFacilityAutoPlay] = useState(true);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);
  const [facilityItems, setFacilityItems] = useState<{ title: string; description?: string; bullets: string[] }[]>([]);
  const [founderTitle, setFounderTitle] = useState("Founder");
  const [founderSubtitle, setFounderSubtitle] = useState("");
  const [founderDesc, setFounderDesc] = useState("");
  const [founderBullets, setFounderBullets] = useState<string[]>([]);
  const [teamTitle, setTeamTitle] = useState("Expert Medical Team");
  const [teamSubtitle, setTeamSubtitle] = useState("");
  const [teamDesc, setTeamDesc] = useState("");
  const [teamBullets, setTeamBullets] = useState<string[]>([]);
  const [founderTeamSubtitle, setFounderTeamSubtitle] = useState("");
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);
  const [isTeamAutoPlaying, setIsTeamAutoPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState<Array<{ id: number; name: string; location: string; title: string; condition: string; rating: number; date?: string; avatar: string; image?: string; review: string; verified: boolean }>>([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);
  const [showAwards, setShowAwards] = useState(true);
  const [awardsDescriptions, setAwardsDescriptions] = useState<string[]>([]);
  const [awardsList, setAwardsList] = useState<{ title: string; desc: string }[]>([]);
  const [currentAward, setCurrentAward] = useState(0);
  const [isAwardAutoPlaying, setIsAwardAutoPlaying] = useState(true);
  const [maxAwardIndex, setMaxAwardIndex] = useState(0);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMediaAutoPlaying, setIsMediaAutoPlaying] = useState(true);
  const [mediaLightboxOpen, setMediaLightboxOpen] = useState(false);
  const [mediaLightboxIndex, setMediaLightboxIndex] = useState(0);
  const [mediaZoom, setMediaZoom] = useState(1);
  const [contactAddress, setContactAddress] = useState<string[]>([]);
  const [contactDistances, setContactDistances] = useState<string[]>([]);
  const [transportText, setTransportText] = useState("");
  const [wellnessText, setWellnessText] = useState("");
  const [wellnessHeading, setWellnessHeading] = useState("Wellness Programs");
  const [wellnessIntro, setWellnessIntro] = useState("");
  const [wellnessItems, setWellnessItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [medicalHeading, setMedicalHeading] = useState("Medical Programs");
  const [medicalIntro, setMedicalIntro] = useState("");
  const [medicalItems, setMedicalItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [whyHeading, setWhyHeading] = useState("Why Choose Namaste Dwaar for Your Holistic Health Journey");
  const [whyIntro, setWhyIntro] = useState("");
  const [whyItems, setWhyItems] = useState<{ title: string; description: string; bullets: string[] }[]>([]);
  const [processHeading, setProcessHeading] = useState("Treatment Process & Patient Journey");
  const [processIntro, setProcessIntro] = useState("");
  const [processSteps, setProcessSteps] = useState<{ index: number; title: string; description: string; bullets: string[] }[]>([]);

  const jumpSections = useMemo(() => [
    { id: "gallery", title: "Photo Gallery" },
    { id: "wellness", title: "Wellness Programs" },
    { id: "medical", title: "Medical Programs" },
    { id: "videos", title: "Video Gallery" },
    { id: "why-choose", title: "Why Choose Namaste Dwaar" },
    { id: "testimonial-videos", title: "Testimonials (Videos)" },
    { id: "process", title: "Process & Journey" },
    { id: "facilities", title: "Facilities & Amenities" },
    { id: "team", title: "Founder & Team Info" },
    { id: "reviews", title: "Patient Stories & Reviews" },
    { id: "awards", title: "Awards & Media" },
    { id: "insurance", title: "Insurance & Payment" },
    { id: "faq", title: "F&Q" },
    { id: "contact", title: "Contact Information" }
  ], []);

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
          behavior: "smooth"
        });
      }
    }, 300);
  };

  const images = [
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-01.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-02.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-03.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-04.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-05.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-06.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-07.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-08.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-09.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-10.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-11.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-12.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-13.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-14.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-15.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-16.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-17.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-18.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-19.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-20.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-21.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-22.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-23.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-24.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-25.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-26.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-27.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-28.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-29.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-30.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-31.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-32.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-33.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-34.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-35.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-36.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-37.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-38.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-39.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-40.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-41.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-42.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-43.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-44.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-45.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-46.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-47.jpg",
    "/Center Images/Namastedwaar/image gallery/Namastedwaar-48.jpg",
  ];

  // ... (previous images/videos arrays kept implicit or can be re-declared if needed, but tool replaces contiguous block)
  // To avoid deleting images variable, I started from line 36. 
  // Wait, I am replacing a huge chunk. Let me narrow it down to just the state and parser effect.

  // Actually, I can just replace the definition at line 36 and the parser effect at lines 280-310.
  // This tool call is becoming too large/risky if I replace everything.
  // I will split it. First update the State Definition.


  const thumbnailImages = [
    images[0],
    images[1],
    images[6],
    images[14],
    images[23],
  ];

  const videos = [
    "/Center Videos/Namastedwaar/video gallery/NamasteDwaar-01.mp4",
    "/Center Videos/Namastedwaar/video gallery/NamasteDwaar-02.mp4",
    "/Center Videos/Namastedwaar/video gallery/NamasteDwaar-03.mp4",
    "/Center Videos/Namastedwaar/video gallery/NamasteDwaar-04.mp4",
    "/Center Videos/Namastedwaar/video gallery/NamasteDwaar-05.mp4",
  ];

  const facilityImages = [
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-01.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-02.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-03.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-04.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-05.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-06.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-07.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-08.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-09.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-10.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-11.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-12.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-13.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-14.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-15.jpg",
    "/Center Images/Namastedwaar/Facilities & Amenities/Namastedwaar-16.jpg",
  ];

  const mediaImages = [
    "/Center Images/Namastedwaar/Awards and media/Media-01.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-02.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-03.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-04.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-05.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-06.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-07.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-08.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-09.jpg",
    "/Center Images/Namastedwaar/Awards and media/Media-10.jpg",
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    if (showVideoGallery) return;
    if (lightboxOpen) return;
    if (showFullGallery) return;
    const id = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isAutoPlaying, showVideoGallery, lightboxOpen, showFullGallery, images.length]);

  useEffect(() => {
    if (!facilityAutoPlay) return;
    const id = setInterval(() => {
      setFacilityIndex((prev) => (prev + 1) % facilityImages.length);
    }, 3500);
    return () => clearInterval(id);
  }, [facilityAutoPlay, facilityImages.length]);

  useEffect(() => {
    fetch("/Center%20Videos/Namastedwaar/YT%20i%20frame%20testimonies.txt")
      .then((res) => res.text())
      .then((text) => {
        const urls = text
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean)
          .map((line) => {
            const m = line.match(/src=\"([^\"]+)\"/i);
            return m?.[1] || "";
          })
          .filter(Boolean);
        setTestimonialVideos(urls);
        setSelectedTestimonialVideo(0);
      })
      .catch((err) => console.error("Error loading Namastedwaar testimonial videos:", err));
  }, []);

  useEffect(() => {
    const el = testimonialSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsTestimonialsInView(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Facilities & Amenities.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const items: { title: string; bullets: string[] }[] = [];
        let current: { title: string; bullets: string[] } | null = null;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (/^\*\*.*\*\*$/.test(line)) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
            current = { title, bullets: [] };
            continue;
          }
          if (/^\*\s+/.test(line)) {
            const bullet = line.replace(/^\*\s+/, "");
            if (current) current.bullets.push(bullet);
          }
        }
        if (current) items.push(current);
        const normalized = items.map((it) => ({ title: it.title, bullets: it.bullets.slice(0, 4) }));
        setFacilityItems(normalized);
      })
      .catch(() => {
        setFacilityItems([]);
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Contact Information.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n").map((l) => l.trim());
        let section: "none" | "address" | "distances" | "transport" = "none";
        const addr: string[] = [];
        const dists: string[] = [];
        let transport = "";

        const cleanLine = (s: string) =>
          s
            .replace(/<br\s*\/>/gi, " ")
            .replace(/\s*mob\s*/gi, " ")
            .replace(/\s+/g, " ")
            .trim();

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
            addr.push(cleanLine(line));
            continue;
          }
          if (section === "distances") {
            if (line.startsWith("*")) dists.push(cleanLine(line.replace(/^\*+\s*/, "")));
            continue;
          }
          if (section === "transport") {
            transport = transport ? `${transport} ${cleanLine(line)}` : cleanLine(line);
            continue;
          }
        }

        setContactAddress(addr);
        setContactDistances(dists);
        setTransportText(transport);
      })
      .catch(() => {
        setContactAddress([]);
        setContactDistances([]);
        setTransportText("");
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Patient Success Stories & Reviews.txt")
      .then((res) => res.text())
      .then((text) => {
        const items: Array<{ id: number; name: string; location: string; title: string; condition: string; rating: number; date?: string; avatar: string; image?: string; review: string; verified: boolean }> = [];
        const lines = text.split("\n");
        let current: {
          id: number;
          name: string;
          location: string;
          title: string;
          condition: string;
          rating: number;
          date?: string;
          avatar: string;
          image?: string;
          review: string;
          verified: boolean;
        } | null = null;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;

          const isReviewHeader = (line.startsWith("**") && line.endsWith("**") && line.includes("-") && !line.includes("Rating:"));

          if (isReviewHeader || /^\*\*Review\s+\d+\s+-\s+/.test(line)) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*|\*\*$/g, "");
            // Handle "Review 1 - " prefix if present, otherwise just extract from "Name - Location"
            const content = title.startsWith("Review") ? title.split("-").slice(1).join("-").trim() : title;

            const parts = content.split("-");
            // Assuming format "Name - Location" or "Name, Location" (Review header had combo)
            // The file format is "**Sophia Müller - Berlin, Germany**"
            const name = parts[0].trim();
            const location = parts.length > 1 ? parts.slice(1).join("-").trim() : "";

            current = { id: items.length + 1, name, location, title: "", condition: "", rating: 5, date: undefined, avatar: (name.split(" ")[0][0] + (name.split(" ")[1]?.[0] || "")).toUpperCase(), image: undefined, review: "", verified: true };
            continue;
          }

          if (/^\*".*"\*$/.test(line)) {
            const quote = line.replace(/^\*"|"\*$/g, "");
            if (current) {
              current.condition = quote;
              current.title = quote;
            }
            continue;
          }
          if (/^\*\*Rating:\s*.*\*\*$/.test(line)) {
            const ratingMatch = line.match(/\((\d)\/5\)/);
            const r = ratingMatch ? parseInt(ratingMatch[1], 10) : 5;
            if (current) current.rating = r;
            continue;
          }
          if (current) {
            current.review = current.review ? current.review + " " + line : line;
          }
        }
        if (current) items.push(current);
        setTestimonials(items);
      })
      .catch(() => {
        setTestimonials([
          { id: 1, name: "Guest", location: "India", title: "Transformational healing", condition: "Transformational healing", rating: 5, avatar: "G", review: "Authentic therapies and compassionate care.", verified: true }
        ]);
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Award.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        const items: { title: string; desc: string }[] = [];
        let current: { title: string; desc: string } | null = null;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          const headerMatch = line.match(/^Award\s+(\d+):\s*\*\*(.*?)\*\*/i);
          if (headerMatch) {
            if (current) items.push(current);
            const title = headerMatch[2].trim();
            current = { title, desc: "" };
            continue;
          }
          if (current) {
            current.desc = current.desc ? current.desc + " " + line : line;
          }
        }
        if (current) items.push(current);
        setAwardsList(items);
        if (items.length > 0) {
          setAwardsDescriptions(items.map((i) => i.desc));
        }
      })
      .catch(() => {
        setAwardsList([
          { title: "Best Spa & Wellness Property", desc: "Recognized for excellence in spa and wellness services." },
          { title: "Hotel of the Year – Mid Market", desc: "Awarded for hospitality leadership and guest satisfaction." },
          { title: "Best New Hospitality Product", desc: "Celebrated as an innovative new hospitality product." },
          { title: "Appreciation for Promoting Wellness Tourism", desc: "Appreciated for promoting wellness tourism in the region." },
          { title: "A Mark of Professional Excellence", desc: "Affiliated with leading industry bodies for professional excellence." }
        ]);
      });
  }, []);

  // Award carousel navigation functions
  const goToPreviousAward = () => {
    setCurrentAward((prev) => (prev - 1 < 0 ? maxAwardIndex : prev - 1));
  };

  const goToNextAward = () => {
    setCurrentAward((prev) => (prev + 1 > maxAwardIndex ? 0 : prev + 1));
  };

  // Handle responsive award display
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newMax = isMobile ? Math.max(0, awardsList.length - 1) : Math.max(0, awardsList.length - 3);
      setMaxAwardIndex(newMax);
      setCurrentAward(prev => prev > newMax ? 0 : prev);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [awardsList.length]);

  // Auto-play for awards carousel
  useEffect(() => {
    if (!isAwardAutoPlaying || !showAwards) return;
    const id = setInterval(() => {
      setCurrentAward((prev) => (prev >= maxAwardIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [isAwardAutoPlaying, maxAwardIndex, showAwards]);

  useEffect(() => {
    if (!isMediaAutoPlaying) return;
    const id = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [isMediaAutoPlaying, mediaImages.length]);

  useEffect(() => {
    if (!isReviewAutoPlaying || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isReviewAutoPlaying, testimonials.length]);

  const goToPreviousReview = () => {
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const selectReview = (index: number) => {
    setCurrentReview(index);
  };

  const teamGroups = [
    {
      title: teamTitle,
      description: teamDesc,
      items: teamBullets,
    },
  ];

  useEffect(() => {
    if (!isTeamAutoPlaying || teamGroups.length <= 1) return;
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

  const renderInlineBold = (text: string) => {
    const parts = text.split(/\*\*(.+?)\*\*/g);
    return (
      <>
        {parts.map((part, idx) =>
          idx % 2 === 1 ? <strong key={idx}>{part}</strong> : <span key={idx}>{part}</span>
        )}
      </>
    );
  };

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

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Founder and team info.txt")
      .then((res) => res.text())
      .then((text) => {
        if (!text || !text.trim()) {
          setFounderTitle("Founder");
          setFounderSubtitle("Founder & Director");
          setFounderDesc("Leads Namaste Dwaar with a vision for authentic wellness and compassionate hospitality, integrating traditional healing with modern comfort.");
          setFounderBullets(["Holistic Wellness", "Sustainable Hospitality", "Community Focus", "Guest Experience"]);
          setTeamTitle("Expert Medical Team");
          setTeamSubtitle("Qualified AYUSH Doctors");
          setTeamDesc("The medical team delivers evidence-based Ayurvedic care supported by yoga, naturopathy and nutrition.");
          setTeamBullets(["Ayurveda", "Yoga Therapy", "Naturopathy", "Physiotherapy", "Diet & Nutrition", "Counseling"]);
          return;
        }
        const lines = text.split("\n");
        let section: "founder" | "team" | null = null;
        let subSection: "leadership" | "specialized" | null = null;
        let headerSeen = false;
        let founderTitleLocal = "";
        let teamTitleLocal = "";
        let founderDescLocal = "";
        let teamDescLocal = "";
        const founderBulletsLocal: string[] = [];
        const teamBulletsLocal: string[] = [];
        let subtitleLocal = "";
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (/^###\s+/.test(line)) {
            headerSeen = true;
            continue;
          }
          if (headerSeen && !/^\*\*/.test(line) && !/^[*-]\s+/.test(line)) {
            subtitleLocal = line;
            headerSeen = false;
            continue;
          }
          if (/^\*\*.*\*\*$/.test(line)) {
            const title = line.slice(2, -2);
            const lower = title.toLowerCase();
            if (lower.includes("founder")) {
              section = "founder";
              founderTitleLocal = title;
              subSection = null;
            } else if (lower.includes("team")) {
              section = "team";
              teamTitleLocal = title;
              subSection = null;
            } else if (lower.includes("leadership")) {
              subSection = "leadership";
            } else if (lower.includes("specialized")) {
              subSection = "specialized";
            } else if (!section && !founderTitleLocal) {
              section = "founder";
              founderTitleLocal = title;
              subSection = null;
            }
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            const bullet = line.replace(/^[*-]\s+/, "");
            if (section === "founder" && subSection === "leadership") {
              founderBulletsLocal.push(bullet);
            } else if (section === "team" && subSection === "specialized") {
              teamBulletsLocal.push(bullet);
            }
            continue;
          }
          if (section === "founder") {
            founderDescLocal = founderDescLocal ? founderDescLocal + " " + line : line;
          } else if (section === "team") {
            teamDescLocal = teamDescLocal ? teamDescLocal + " " + line : line;
          }
        }
        setFounderTeamSubtitle(subtitleLocal);
        if (founderTitleLocal) setFounderTitle(founderTitleLocal);
        if (teamTitleLocal) setTeamTitle(teamTitleLocal);
        setFounderDesc(founderDescLocal);
        setTeamDesc(teamDescLocal);
        setFounderBullets(founderBulletsLocal.slice(0, 6));
        setTeamBullets(teamBulletsLocal.slice(0, 8));
      })
      .catch(() => {
        setFounderTitle("Founder");
        setFounderSubtitle("Founder & Director");
        setFounderDesc("Leads Namaste Dwaar with a vision for authentic wellness and compassionate hospitality.");
        setFounderBullets(["Holistic Wellness", "Sustainable Hospitality", "Community Focus", "Guest Experience"]);
        setTeamTitle("Expert Medical Team");
        setTeamSubtitle("Qualified AYUSH Doctors");
        setTeamDesc("The medical team delivers evidence-based Ayurvedic care supported by yoga, naturopathy and nutrition.");
        setTeamBullets(["Ayurveda", "Yoga Therapy", "Naturopathy", "Physiotherapy", "Diet & Nutrition", "Counseling"]);
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Wellness Programs.txt")
      .then((res) => res.text())
      .then((text) => {
        setWellnessText(text);
        const lines = text.split("\n");
        let heading = "Wellness Programs";
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let startedIntro = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            heading = line.replace(/^###\s+/, "");
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
            current = { title, description: "", bullets: [] };
            startedIntro = true;
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            if (current) current.bullets.push(line.replace(/^[*-]\s+/, ""));
            continue;
          }
          if (current) {
            current.description = current.description ? current.description + " " + line : line;
          } else {
            if (!startedIntro) {
              intro = intro ? intro + " " + line : line;
            }
          }
        }
        if (current) items.push(current);
        setWellnessHeading(heading);
        setWellnessIntro(intro);
        setWellnessItems(items);
      })
      .catch(() => {
        setWellnessHeading("Wellness Programs");
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Medical Treatment.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let heading = "Medical Programs";
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let startedIntro = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            heading = line.replace(/^###\s+/, "");
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
            current = { title, description: "", bullets: [] };
            startedIntro = true;
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            if (current) current.bullets.push(line.replace(/^[*-]\s+/, ""));
            continue;
          }
          if (current) {
            current.description = current.description ? current.description + " " + line : line;
          } else {
            if (!startedIntro) {
              intro = intro ? intro + " " + line : line;
            }
          }
        }
        if (current) items.push(current);
        setMedicalHeading(heading);
        setMedicalIntro(intro);
        setMedicalItems(items);
      })
      .catch(() => {
        setMedicalHeading("Medical Programs");
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Why choose Namastedwaar.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let heading = "Why Choose Namaste Dwaar for Your Holistic Health Journey";
        let intro = "";
        const items: { title: string; description: string; bullets: string[] }[] = [];
        let current: { title: string; description: string; bullets: string[] } | null = null;
        let afterHeader = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            heading = line.replace(/^###\s+/, "");
            afterHeader = true;
            continue;
          }
          if (line.startsWith("**") && line.endsWith("**") && line.length > 4) {
            if (current) items.push(current);
            const title = line.replace(/^\*\*/, "").replace(/\*\*$/, "");
            current = { title, description: "", bullets: [] };
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            if (current) current.bullets.push(line.replace(/^[*-]\s+/, ""));
            continue;
          }
          if (current) {
            current.description = current.description ? current.description + " " + line : line;
          } else if (afterHeader) {
            intro = intro ? intro + " " + line : line;
          }
        }
        if (current) items.push(current);
        setWhyHeading(heading);
        setWhyIntro(intro);
        setWhyItems(items);
      })
      .catch(() => {
        setWhyHeading("Why Choose Namaste Dwaar for Your Holistic Health Journey");
      });
  }, []);

  useEffect(() => {
    fetch("/content/Top Centers/Namastedwaar/Treatment Process & Patient Journey.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split("\n");
        let heading = "Treatment Process & Patient Journey";
        let intro = "";
        const steps: { index: number; title: string; description: string; bullets: string[] }[] = [];
        let current: { index: number; title: string; description: string; bullets: string[] } | null = null;
        let afterHeader = false;
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          if (line.startsWith("### ")) {
            heading = line.replace(/^###\s+/, "");
            afterHeader = true;
            continue;
          }
          const boldMatchA = line.match(/^\*\*\s*(\d+)\.\s*(.+?)\s*\*\*$/); // "**1. Title**"
          const boldMatchB = line.match(/^(\d+)\.\s*\*\*(.+?)\*\*$/);         // "1. **Title**"
          const plainMatch = line.match(/^(\d+)\.\s*(.+)$/);                      // "1. Title"

          if (boldMatchA || boldMatchB || plainMatch) {
            if (current) steps.push(current);
            const idx = parseInt((boldMatchA?.[1] || boldMatchB?.[1] || plainMatch?.[1])!, 10);
            const title = (boldMatchA?.[2] || boldMatchB?.[2] || plainMatch?.[2])!;
            current = { index: idx, title, description: "", bullets: [] };
            continue;
          }
          if (/^[*-]\s+/.test(line)) {
            if (current) current.bullets.push(line.replace(/^[*-]\s+/, ""));
            continue;
          }
          if (current) {
            current.description = current.description ? current.description + " " + line : line;
          } else if (afterHeader) {
            intro = intro ? intro + " " + line : line;
          }
        }
        if (current) steps.push(current);
        setProcessHeading(heading);
        setProcessIntro(intro);
        setProcessSteps(steps);
      })
      .catch(() => {
        setProcessHeading("Treatment Process & Patient Journey");
      });
  }, []);

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
      if (e.key === "Escape") setShowFullGallery(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showFullGallery]);

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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <div className="bg-primary text-primary-foreground py-10">
        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Namaste Dwaar</h1>
                <p className="text-xl mb-4 opacity-90">Countryside Wellness Retreat</p>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Near NCR, Delhi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
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

      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full" id="gallery">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
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
                  <img
                    src={images[selectedImage]}
                    alt={`Namaste Dwaar ${selectedImage + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                    onClick={() => {

                    }}
                  />
                  <button
                    onClick={() => { setSelectedImage((prev) => (prev - 1 + images.length) % images.length); }}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={() => { setSelectedImage((prev) => (prev + 1) % images.length); }}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all"
                    aria-label="Next image"
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
                  <div
                    className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                    onClick={() => {
                      const idx = images.indexOf(thumbnailImages[0]);
                      if (idx < 0) return;
                      setLightboxImage(idx);
                      setLightboxOpen(true);
                    }}
                  >
                    <img
                      src={thumbnailImages[0]}
                      alt="Namaste Dwaar"
                      className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>

                  <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                    {thumbnailImages.slice(1, 5).map((img, idx) => (
                      <div
                        key={idx}
                        className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                        onClick={() => {
                          const actualIndex = images.indexOf(img);
                          if (actualIndex < 0) return;
                          setLightboxImage(actualIndex);
                          setLightboxOpen(true);
                        }}
                      >
                        <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: '100%' }}>
                          <img
                            src={img}
                            alt={`Namaste Dwaar Thumb ${idx + 1}`}
                            className="absolute inset-0 w-full h-full object-cover rounded-xl"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                          {idx === 3 && (
                            <div className="absolute inset-0 flex items-end justify-center pb-4 bg-black/40">
                              <Button
                                size="sm"
                                onClick={(e) => { e.stopPropagation(); setShowFullGallery(true); }}
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
                    ))}
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
                      poster={images[0]}
                    >
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
                        className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${selectedVideo === idx ? "ring-4 ring-primary" : "ring-2 ring-transparent hover:ring-primary/30"
                          }`}
                      >
                        <img
                          src={images[(idx + 1) % images.length]}
                          alt={`Video ${idx + 1} Thumbnail`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors">
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
          <Card className="mb-12">
            <CardContent className="px-4 md:px-8 py-6 md:py-8 prose md:prose-lg max-w-none prose-p:text-justify prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
              <MarkdownContent
                contentPath="/content/Top Centers/Namastedwaar/Namastedwaar.txt"
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

          {/* Wellness Programs Section */}
          <div className="mb-12 rounded-3xl p-6 md:p-6 lg:p-12" style={{ backgroundColor: '#EDE8D0' }} id="wellness">
            <div className="grid grid-cols-3 gap-2 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-10 overflow-hidden">
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Users className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">1000+</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Happy Patients</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <Star className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">4.5/5</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Average Rating</div>
              </div>
              <div className="text-center p-2.5 md:p-4 bg-white/60 rounded-xl">
                <div className="inline-flex items-center justify-center w-9 h-9 md:w-12 md:h-12 rounded-full bg-green-100 mb-2 md:mb-3">
                  <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div className="text-base md:text-3xl font-bold text-primary mb-1 whitespace-nowrap">98%</div>
                <div className="text-xs md:text-sm" style={{ color: '#7F543D' }}>Success Rate</div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 border-2 mb-4" style={{ borderColor: '#1A428A' }}>
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">
                {wellnessHeading}
              </h1>
              {wellnessIntro && (
                <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
                  {wellnessIntro}
                </p>
              )}
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {wellnessItems.map((item, idx) => {
                const lower = item.title.toLowerCase();
                const Icon = lower.includes('detox') || lower.includes('panchakarma') ? Droplet
                  : lower.includes('stress') ? Brain
                    : lower.includes('rejuvenation') || lower.includes('anti-aging') ? Sparkles
                      : lower.includes('weight') ? Activity
                        : lower.includes('immunity') || lower.includes('prevent') ? ShieldCheck
                          : Leaf;
                return (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-[#1A428A]">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center border-2" style={{ borderColor: '#1A428A' }}>
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        </div>
                        <span className="text-base md:text-lg font-semibold text-primary">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                      {item.description && (
                        <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                          {item.description}
                        </p>
                      )}
                      {item.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                              <span className="text-green-600 mt-1">&#10003;</span>
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

          {/* Medical Treatment Programs */}
          <div className="mb-12 rounded-3xl p-6 md:p-6 lg:p-12" style={{ backgroundColor: '#EDE8D0' }} id="medical">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 border-2 border-orange-500 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">
                {medicalHeading}
              </h2>
              {medicalIntro && (
                <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: '#7F543D' }}>
                  {medicalIntro}
                </p>
              )}
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              {medicalItems.map((item, idx) => {
                const lower = item.title.toLowerCase();
                const Icon = lower.includes('diabetes') ? Activity
                  : lower.includes('arthritis') || lower.includes('pain') ? Heart
                    : lower.includes('mental') || lower.includes('neurolog') ? Brain
                      : lower.includes('digest') || lower.includes('gastro') ? Leaf
                        : lower.includes('chronic') || lower.includes('complex') ? Hospital
                          : ShieldCheck;
                return (
                  <AccordionItem key={idx} value={`med-${idx}`} className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                    <AccordionTrigger className="hover:no-underline py-3 md:py-4 [&>svg]:text-orange-500">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-orange-500">
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                        </div>
                        <span className="text-base md:text-lg font-semibold text-primary">{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                      {item.description && (
                        <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: '#7F543D' }}>
                          {item.description}
                        </p>
                      )}
                      {item.bullets.length > 0 && (
                        <ul className="space-y-1.5 md:space-y-2">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                              <span className="text-blue-600 mt-1">&#10003;</span>
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
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Video Gallery of Namastedwaar</h2>
              <p className="text-base md:text-lg mx-auto px-4 max-w-4xl" style={{ color: "#7F543D" }}>
                Explore Namaste Dwaar through our video gallery.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-0">
                  <div className="aspect-video w-full relative">
                    <video
                      key={videos[selectedVideo]}
                      src={videos[selectedVideo]}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                    />
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

          {/* Why Choose Namaste Dwaar */}
          <div className="mb-12" id="why-choose">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">
                {whyHeading}
              </h2>
              {whyIntro && (
                <p className="text-base md:text-lg mx-auto px-4" style={{ color: '#7F543D' }}>
                  {whyIntro}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyItems.map((item, idx) => {
                const t = item.title.toLowerCase();
                const Icon = t.includes('accessible') || t.includes('delhi') ? MapPin
                  : t.includes('rural') || t.includes('village') ? TreePine
                    : t.includes('architecture') ? Award
                      : t.includes('restaurant') || t.includes('culinary') ? Utensils
                        : t.includes('doctor') || t.includes('ayush') ? Stethoscope
                          : t.includes('arthritis') || t.includes('diabetes') ? HeartPulse
                            : t.includes('dog') || t.includes('pet') ? PawPrint
                              : t.includes('eco') || t.includes('nature') ? Leaf
                                : t.includes('value') || t.includes('hospitality') ? Home
                                  : t.includes('recreational') || t.includes('activities') ? Activity
                                    : t.includes('family') ? Users
                                      : Home;
                return (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                            <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-left" style={{ color: '#7F543D' }}>{item.description}</p>
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="list-none pl-0 space-y-1.5">
                            {item.bullets.slice(0, 3).map((b, bi) => (
                              <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                                <span className="text-primary mt-1">&#10003;</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {testimonialVideos.length > 0 && (
            <div className="mb-12" id="testimonial-videos" ref={testimonialSectionRef}>
              <div className="text-center mb-8 md:mb-10 px-4">
                <h2 className="text-xl md:text-4xl font-extrabold text-primary mb-2 leading-tight tracking-tight">
                  Testimonials of Namaste Dwaar Center
                </h2>
                <div className="w-12 h-1 bg-primary/20 mx-auto mb-3 rounded-full hidden md:block" />
                <p className="text-sm md:text-lg mx-auto max-w-none leading-relaxed italic" style={{ color: "#7F543D" }}>
                  Watch inspiring stories of recovery and wellness from our guests.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto px-4 md:px-0">
                <Card className="border-2 border-primary/20 shadow-xl overflow-hidden bg-white rounded-3xl">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full relative">
                      <iframe
                        key={testimonialVideos[selectedTestimonialVideo]}
                        src={`${testimonialVideos[selectedTestimonialVideo]}?autoplay=${isTestimonialsInView ? "1" : "0"}&mute=0&rel=0`}
                        title="Namaste Dwaar Testimonial Video"
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
                      setSelectedTestimonialVideo((prev) =>
                        (prev - 1 + testimonialVideos.length) % testimonialVideos.length
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
                      setSelectedTestimonialVideo((prev) =>
                        (prev - 1 + testimonialVideos.length) % testimonialVideos.length
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
                      className={`transition-all ${index === selectedTestimonialVideo ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Call to Action Section */}

          {/* Treatment Process & Patient Journey - Timeline */}
          <div className="mb-12" id="process">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-6">{processHeading}</h2>
              {processIntro && (
                <p className="text-base md:text-lg mx-auto" style={{ color: '#7F543D' }}>
                  {processIntro}
                </p>
              )}
            </div>

            <div className="max-w-4xl mx-auto">
              {processSteps.map((step, idx) => {
                const num = step.index;
                const Icon = num === 1 ? ClipboardList
                  : num === 2 ? FileSearch
                    : num === 3 ? Pill
                      : num === 4 ? Utensils
                        : num === 5 ? Activity
                          : Home;
                const showLine = idx < processSteps.length - 1;
                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                        {num}
                      </div>
                      {showLine && (
                        <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                      )}
                    </div>
                    <Card className="relative w-full max-w-md md:max-w-none mx-auto md:mx-0 md:flex-1 hover:shadow-xl transition-all duration-300 md:hover:-translate-y-1 border-l-4 border-l-primary">
                      <CardContent className="p-4 md:p-6">
                        <div className="md:hidden absolute top-3 left-3 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-sm font-bold shadow-md">
                          {num}
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 pl-12 md:pl-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                          </div>
                          <h3 className="text-base md:text-xl font-bold text-primary pr-2">{step.title}</h3>
                        </div>
                        <p className="text-xs md:text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                          {step.description}
                        </p>
                        {step.bullets && step.bullets.length > 0 && (
                          <ul className="mt-3 space-y-1.5">
                            {step.bullets.map((b, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs md:text-sm" style={{ color: '#7F543D' }}>
                                <span className="text-primary mt-1">&bull;</span>
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
          <div className="mb-12">
            <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
              <div className="md:hidden">
                <div className="max-w-sm mx-auto bg-white/80 rounded-2xl p-4 shadow-lg border-2 border-primary/30">
                  <img src="/Center Images/Namastedwaar/image gallery/Namastedwaar-01.jpg" alt="Namaste Dwaar" className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105" />
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
                  <img src="/Center Images/Namastedwaar/image gallery/Namastedwaar-01.jpg" alt="Namaste Dwaar" className="w-full h-auto rounded-2xl shadow-lg border-2 border-primary/30 object-cover transition-transform duration-700 ease-out hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-3 md:px-4 max-w-full">
          <div className="max-w-6xl mx-auto mt-6">
            <div className="mb-12" id="facilities">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Facilities & Amenities</h2>
                <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: '#7F543D' }}>
                  Experience healing in comfort with our comprehensive range of traditional and modern facilities
                </p>
              </div>

              <div className="max-w-7xl mx-auto relative mb-10">
                <button
                  onClick={() => {
                    setFacilityAutoPlay(false);
                    setFacilityIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);
                  }}
                  className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Previous facility image"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={() => {
                    setFacilityAutoPlay(false);
                    setFacilityIndex((prev) => (prev + 1) % facilityImages.length);
                  }}
                  className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Next facility image"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>

                <div className="overflow-hidden px-10 md:px-12">
                  <div className="md:hidden">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${facilityIndex * 100}%)` }}>
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
                    <div
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${Math.min(facilityIndex, facilityImages.length - 5) * 20}%)` }}
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
                      onClick={() => {
                        setFacilityAutoPlay(false);
                        setFacilityIndex(index);
                      }}
                      className={`transition-all ${index === facilityIndex ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"} rounded-full`}
                      aria-label={`Go to facility image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facilityItems.map((item, idx) => {
                  const t = item.title.toLowerCase();
                  const Icon = t.includes('spa') || t.includes('wellness') ? Droplet
                    : t.includes('consultation') || t.includes('doctor') || t.includes('ayush') ? ClipboardList
                      : t.includes('yoga') || t.includes('meditation') ? Brain
                        : t.includes('pool') ? Activity
                          : t.includes('restaurant') || t.includes('dining') ? Utensils
                            : t.includes('garden') || t.includes('herb') || t.includes('organic') ? Leaf
                              : t.includes('accommodation') || t.includes('suite') || t.includes('room') ? Home
                                : t.includes('machaan') || t.includes('lounge') ? Building2
                                  : t.includes('game') || t.includes('recreation') ? Activity
                                    : t.includes('library') || t.includes('reading') ? BookOpen
                                      : t.includes('conference') || t.includes('event') || t.includes('wedding') ? Award
                                        : t.includes('pet') || t.includes('dog') ? PawPrint
                                          : Home;
                  return (
                    <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-sm">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-primary leading-tight flex-1">
                            {item.title}
                          </h3>
                        </div>

                        {item.description && (
                          <p className="text-sm leading-relaxed mb-3" style={{ color: "#7F543D" }}>
                            {item.description}
                          </p>
                        )}

                        <ul className="space-y-2">
                          {item.bullets.slice(0, 4).map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                              <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                              <span className="leading-snug">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 max-w-6xl mx-auto px-3 md:px-4" id="team">
          <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Founder & Team Info
              </h1>
              {(founderTeamSubtitle || '').length > 0 && (
                <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                  {founderTeamSubtitle}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              {/* Founder Card */}
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl bg-white">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                        <img
                          src="/Center Images/Namastedwaar/Founder and team/Founder Arvind adn charul Rathi.jpg"
                          alt="Founder"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        {founderTitle}
                      </h3>
                      {founderSubtitle && (
                        <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                          {founderSubtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  {founderDesc && (
                    <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                      {founderDesc}
                    </p>
                  )}
                  {founderBullets.length > 0 && (
                    <div className="pt-3 md:pt-4 border-t border-primary/10">
                      <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                      <div className="flex flex-wrap gap-2">
                        {founderBullets.slice(0, 6).map((b, i) => (
                          <span key={i} className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {b}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Medical Team Card */}
              <div className="relative">
                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl h-full bg-white">
                  <CardContent className="p-4 md:p-8 h-full md:h-[480px] md:overflow-y-auto">
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="p-[3px] rounded-full flex-shrink-0 shadow-2xl aspect-square" style={{ background: 'conic-gradient(from 45deg, #F0E68C, #B8860B, #FFD700, #B8860B, #F0E68C)' }}>
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[2px] border-white bg-white">
                          <img
                            src="/Center Images/Namastedwaar/Founder and team/Medical team.jpg"
                            alt="Team"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2 leading-snug break-words whitespace-normal">
                          {teamGroups[currentTeamSlide]?.title || "Team"}
                        </h3>
                        {teamSubtitle && (
                          <p className="text-xs md:text-sm mt-1 text-primary/70">{teamSubtitle}</p>
                        )}
                      </div>
                    </div>
                    {teamGroups[currentTeamSlide]?.description && (
                      <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                        {teamGroups[currentTeamSlide].description}
                      </p>
                    )}
                    <ul className="space-y-2.5">
                      {(teamGroups[currentTeamSlide]?.items || []).slice(0, 12).map((it, idx) => (
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
        </div>


        <div className="mb-12 max-w-6xl mx-auto px-3 md:px-4" id="reviews">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Patient Stories & Reviews</h2>
            <p className="text-base md:text-lg px-4" style={{ color: '#7F543D' }}>
              Hear from our patients about their transformational healing journeys
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-lg overflow-hidden bg-white">
              <CardContent className="p-4 md:p-12">
                <div className="max-w-4xl mx-auto">
                  {testimonials.length > 0 && (
                    <>
                      <div className="text-primary/20 mb-3 md:mb-4">
                        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                        </svg>
                      </div>

                      <div className="mb-4 md:mb-6">
                        <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-4">
                          {testimonials[currentReview].title}
                        </h3>
                        <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: '#7F543D' }}>
                          "{testimonials[currentReview].review}"
                        </p>
                      </div>

                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        {testimonials[currentReview].image ? (
                          <img src={testimonials[currentReview].image} alt={testimonials[currentReview].name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary shadow-lg flex-shrink-0 select-none pointer-events-none" />
                        ) : (
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                            {testimonials[currentReview].avatar}
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-base md:text-xl font-semibold text-primary">{testimonials[currentReview].name}</h4>
                            {testimonials[currentReview].verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">&#10003; Verified</span>
                            )}
                          </div>
                          <p className="text-xs md:text-sm" style={{ color: '#7F543D' }}>
                            {testimonials[currentReview].location}
                          </p>
                          {testimonials[currentReview].date && (<p className="text-xs text-gray-500 mt-1">{testimonials[currentReview].date}</p>)}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 md:gap-3">
                        {renderStars(testimonials[currentReview].rating)}
                        <span className="text-xs md:text-sm font-semibold text-primary">{testimonials[currentReview].rating}.0</span>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {testimonials.length > 1 && (
              <>
                <div className="absolute inset-y-0 left-0 flex items-center translate-x-2 md:-translate-x-6">
                  <button onClick={goToPreviousReview} className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Previous review">
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center -translate-x-2 md:translate-x-6">
                  <button onClick={goToNextReview} className="bg-white/70 hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Next review">
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </div>
              </>
            )}
          </div>

          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button key={idx} onClick={() => selectReview(idx)} className={`transition-all rounded-full ${currentReview === idx ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-gray-300 hover:bg-primary/50'}`} aria-label={`Go to review ${idx + 1}`} />
              ))}
            </div>
          )}
        </div>

        <div className="mb-12 md:mb-16" id="awards">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 text-primary">
              <Award className="h-8 w-8" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Awards & Media</h2>
            <p className="text-base md:text-lg px-4 mx-auto max-w-2xl" style={{ color: '#7F543D' }}>
              Recognition of Namaste Dwaar's global excellence in integrated holistic healing and patient care
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-10">
            <Button
              onClick={() => setShowAwards(true)}
              className={`px-4 py-2 md:px-10 md:py-7 text-sm md:text-lg font-bold transition-all rounded-full ${showAwards
                ? "bg-primary text-white shadow-xl scale-105"
                : "bg-white text-primary border-2 border-primary hover:bg-primary/5"
                }`}
            >
              <Award className="mr-2 h-4 w-4 md:h-6 md:w-6" />
              Awards
            </Button>
            <Button
              onClick={() => setShowAwards(false)}
              className={`px-4 py-2 md:px-10 md:py-7 text-sm md:text-lg font-bold transition-all rounded-full ${!showAwards
                ? "bg-primary text-white shadow-xl scale-105"
                : "bg-white text-primary border-2 border-primary hover:bg-primary/5"
                }`}
            >
              <FileSearch className="mr-2 h-4 w-4 md:h-6 md:w-6" />
              Media Recognition
            </Button>
          </div>

          {/* Awards Carousel */}
          {showAwards && (
            <div className="relative group max-w-5xl mx-auto">
              <div className="overflow-hidden px-4 md:px-10">
                {/* Mobile Slider (1 card) */}
                <div className="md:hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentAward * 100}%)` }}
                  >
                    {awardsList.map((award, i) => (
                      <div key={i} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                          <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
                            <img
                              src={`/Center Images/Namastedwaar/Awards and media/Award-0${i + 1}.jpg`}
                              alt={award.title}
                              className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-lg font-bold text-primary mb-2 line-clamp-2">{award.title}</h4>
                            <p className="text-xs italic" style={{ color: '#7F543D' }}>"{award.desc}"</p>
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
                    {awardsList.map((award, i) => (
                      <div key={i} className="w-1/3 flex-shrink-0 px-4">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col items-center">
                          <div className="w-full aspect-square bg-primary/5 rounded-xl mb-4 md:mb-6 p-4 md:p-6 flex items-center justify-center overflow-hidden">
                            <img
                              src={`/Center Images/Namastedwaar/Awards and media/Award-0${i + 1}.jpg`}
                              alt={award.title}
                              className="max-h-[90%] max-w-[90%] object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-110"
                            />
                          </div>
                          <div className="text-center">
                            <h4 className="text-xl font-bold text-primary mb-3 min-h-[56px] flex items-center justify-center leading-tight">{award.title}</h4>
                            <p className="text-base italic" style={{ color: '#7F543D' }}>"{award.desc}"</p>
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
                    onClick={goToPreviousAward}
                    className="absolute left-6 md:-left-4 top-1/2 -translate-y-[65%] md:-translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                    aria-label="Previous award"
                  >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                  <button
                    onClick={goToNextAward}
                    className="absolute right-6 md:-right-4 top-1/2 -translate-y-[65%] md:-translate-y-1/2 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary z-10"
                    aria-label="Next award"
                  >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </>
              )}

              {/* Indicator Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {awardsList.slice(0, maxAwardIndex + 1).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrentAward(i); }}
                    className={`transition-all rounded-full ${currentAward === i ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                      }`}
                    aria-label={`Go to award ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {!showAwards && (
            <div className="relative">
              <div className="overflow-hidden px-6 md:px-10">
                <div className="md:hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentMediaIndex * 100}%)` }}
                  >
                    {mediaImages.map((img, i) => (
                      <div key={i} className="w-full flex-shrink-0 px-2">
                        <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                          <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-[1.02]">
                            <img src={img} alt={`Media ${i + 1}`} className="w-full h-auto object-cover" onClick={() => { setMediaLightboxIndex(i); setMediaLightboxOpen(true); setMediaZoom(1); }} />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => { setMediaLightboxIndex(i); setMediaLightboxOpen(true); setMediaZoom(1); }}
                                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full cursor-pointer shadow"
                                aria-label={`Open media ${i + 1}`}
                              >
                                <span className="text-primary font-bold text-xs flex items-center gap-2">
                                  <FileSearch className="h-4 w-4" />
                                  View
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentMediaIndex * 25}%)` }}
                  >
                    {mediaImages.map((img, i) => (
                      <div key={i} className="w-1/4 flex-shrink-0 px-3">
                        <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                          <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group hover:shadow-xl hover:scale-[1.02]">
                            <img src={img} alt={`Media ${i + 1}`} className="w-full h-auto object-cover" onClick={() => { setMediaLightboxIndex(i); setMediaLightboxOpen(true); setMediaZoom(1); }} />
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                              <button
                                type="button"
                                onClick={() => { setMediaLightboxIndex(i); setMediaLightboxOpen(true); setMediaZoom(1); }}
                                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full cursor-pointer shadow"
                                aria-label={`Open media ${i + 1}`}
                              >
                                <span className="text-primary font-bold text-xs flex items-center gap-2">
                                  <FileSearch className="h-4 w-4" />
                                  View
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={() => { setIsMediaAutoPlaying(false); setCurrentMediaIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length); }} className="absolute left-0 top-1/2 -translate-y-[65%] md:-translate-y-1/2 translate-x-6 md:-translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Previous">
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              <button onClick={() => { setIsMediaAutoPlaying(false); setCurrentMediaIndex((prev) => (prev + 1) % mediaImages.length); }} className="absolute right-0 top-1/2 -translate-y-[65%] md:-translate-y-1/2 -translate-x-6 md:translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary" aria-label="Next">
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              {isMediaAutoPlaying && (
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Auto
                </div>
              )}

              {mediaLightboxOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} onClick={() => setMediaLightboxOpen(false)}>
                  <button onClick={(e) => { e.stopPropagation(); setMediaLightboxIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length); }} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all" aria-label="Previous">
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <div className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    <img src={mediaImages[mediaLightboxIndex]} alt="Media" className="max-w-full max-h-[85vh] object-contain" style={{ transform: `scale(${mediaZoom})` }} />
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <button className="bg-white text-primary px-3 py-2 rounded-full shadow" onClick={() => setMediaZoom((z) => Math.min(3, z + 0.2))}>+</button>
                      <button className="bg-white text-primary px-3 py-2 rounded-full shadow" onClick={() => setMediaZoom((z) => Math.max(1, z - 0.2))}>-</button>
                      <button className="bg-white text-primary px-3 py-2 rounded-full shadow" onClick={() => setMediaLightboxOpen(false)}>Close</button>
                    </div>
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); setMediaLightboxIndex((prev) => (prev + 1) % mediaImages.length); }} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all" aria-label="Next">
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              )}
              <div className="flex justify-center gap-2 mt-6">
                {mediaImages.map((_, idx) => (
                  <button key={idx} onClick={() => { setIsMediaAutoPlaying(false); setCurrentMediaIndex(idx); }} className={`transition-all rounded-full ${currentMediaIndex === idx ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-gray-300 hover:bg-primary/50'}`} aria-label={`Go to media ${idx + 1}`} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mb-12 max-w-6xl mx-auto px-3 md:px-4" id="insurance">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Insurance & Payment Info</h2>
          <p className="text-base md:text-lg mx-auto px-4" style={{ color: '#7F543D' }}>
            Flexible payment options and insurance support to make holistic healthcare accessible
          </p>
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
                {[
                  "Guests with Indian health insurance may check coverage eligibility for Ayurvedic and wellness treatments.",
                  "Detailed invoices, treatment reports, and medical documentation provided to support claims and reimbursements.",
                  "Assistance with claim processing and paperwork when applicable.",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
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
                {[
                  "Cash, credit cards, debit cards, and bank transfers accepted for stays, dining, and wellness fees.",
                  "Detailed pricing for wellness packages and treatment programs available on inquiry with the reservations team.",
                  "Corporate wellness and group bookings customized with special pricing arrangements.",
                  "Early booking discounts and seasonal promotional offers available periodically.",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#7F543D' }}>
                    <span className="text-primary mt-1">&#10003;</span>
                    <span>{b}</span>
                  </li>
                ))}
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
                <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                  International guests are advised to check coverage with their respective insurance providers for holistic and alternative medicine treatments. The administrative team can provide necessary documentation and medical reports to support claims when applicable.
                </p>
                <p className="text-sm leading-relaxed mt-2" style={{ color: '#7F543D' }}>
                  For complete pricing details, package inclusions, and payment terms, please contact the reservations team directly.
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
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg mx-auto px-4" style={{ color: '#7F543D' }}>
            Find answers to common questions about treatments, facilities, and your healing journey
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
          <AccordionItem value="faq1" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
            <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
              <span className="text-lg font-semibold text-primary text-left">
                What is the minimum duration for wellness programs at Namaste Dwaar?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                Wellness programs range from weekend detox packages (3 days/2 nights) to comprehensive seven-day retreats and extended Panchakarma programs (14-21 days). Minimum stay depends on chosen wellness package and individual health goals. Even brief weekend retreats provide noticeable benefits, while longer durations offer deeper therapeutic results.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq2" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
            <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
              <span className="text-lg font-semibold text-primary text-left">
                How far is Namaste Dwaar from Delhi and major cities?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                is located just 2 hours drive from Delhi on the Delhi-Haridwar National Highway 58, at the 105 km milestone near Muzaffarnagar in Uttar Pradesh. The convenient location makes it an ideal weekend getaway or extended wellness retreat for residents of Delhi-NCR, being closer than traditional Kerala or Goa wellness destinations.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq3" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
            <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
              <span className="text-lg font-semibold text-primary text-left">
                Do I need prior experience with Ayurveda or Yoga?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                No prior experience is necessary. Namaste Dwaar welcomes complete beginners and provides introductory consultations, gentle treatments, and beginner-friendly yoga classes. The experienced medical team and instructors personalize all programs according to individual fitness levels, health conditions, and familiarity with wellness practices.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq4" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
            <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
              <span className="text-lg font-semibold text-primary text-left">
                What type of food is served at Namaste Dwaar?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                Namaste Dwaar offers exceptional culinary diversity with 14 restaurants serving multiple cuisines including authentic Rajasthani, South Indian, Uttarakhand traditional food, and international options. For wellness program guests, therapeutic Ayurvedic vegetarian meals are prepared using organic ingredients according to individual dietary requirements and dosha constitutions.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq5" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
            <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
              <span className="text-lg font-semibold text-primary text-left">
                Is Namaste Dwaar suitable for families with children?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                Absolutely. Namaste Dwaar is family-friendly with facilities for all ages including children's pools, outdoor games, tractor rides, farm experiences, and various recreational activities. The spacious property allows children to explore safely while adults enjoy wellness treatments. Family suites accommodate multiple members comfortably.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq6" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
            <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
              <span className="text-lg font-semibold text-primary text-left">
                Can I bring my pet dog to Namaste Dwaar?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                Yes! Namaste Dwaar is proudly dog-friendly and welcomes four-legged family members. The resort understands the joy and companionship dogs bring and extends the same warmth and hospitality to furry companions, making it an ideal destination for pet owners seeking wellness retreats.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq7" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
            <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
              <span className="text-lg font-semibold text-primary text-left">
                What should I pack for my wellness retreat at Namaste Dwaar?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                Comfortable loose cotton clothing suitable for treatments and yoga, personal toiletries, any regular medications, previous medical reports if applicable, sunscreen, insect repellent, walking shoes for farm tours, and an open mind for healing. The resort provides treatment gowns, towels, and all necessary wellness amenities.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq8" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
            <AccordionTrigger className="hover:no-underline py-4 [&>svg]:text-orange-500">
              <span className="text-lg font-semibold text-primary text-left">
                Are wellness treatments suitable for elderly guests or those with health conditions?
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6 bg-white">
              <p className="text-sm leading-relaxed" style={{ color: '#7F543D' }}>
                Yes, Namaste Dwaar specializes in providing gentle, age-appropriate treatments for senior citizens and guests with various health conditions. AYUSH doctors carefully assess individual health status and design safe, therapeutic protocols. Treatments are monitored and adjusted based on comfort and response, ensuring safety throughout the wellness journey.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {contactAddress.length > 0 && (
        <div className="mb-12 max-w-6xl mx-auto px-3 md:px-4" id="contact">
          <Card className="border-2 border-primary overflow-hidden transition-all duration-300 hover:shadow-2xl">
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
                        {contactAddress.map((l, i) => (
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
                          title="Namaste Dwaar Location"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.860612857214!2d77.71095427368053!3d29.34508049676093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c11ba6b561b07%3A0x71399c32e76dca79!2sNamaste%20Dwaar!5e0!3m2!1sen!2sin!4v1767773407166!5m2!1sen!2sin"
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
        </div>
      )}

      <div className="mb-12 max-w-6xl mx-auto px-3 md:px-4">
        <div className="rounded-3xl p-6 md:p-10" style={{ backgroundColor: '#234A50' }}>
          <div className="md:hidden">
            <div className="max-w-sm mx-auto bg-black/30 rounded-2xl p-4 shadow-lg border-2 border-white/20">
              <img
                src="/Center Images/Namastedwaar/CTA bottom.jpg"
                alt="Namaste Dwaar"
                className="w-full h-auto rounded-xl mb-4 object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <h2 className="text-xl font-bold text-white text-center mb-4">Begin Your Holistic Healing Journey at Namaste Dwaar</h2>
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
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Begin Your Holistic Healing Journey at Namaste Dwaar</h2>
              <div className="flex flex-wrap gap-3">
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
              <div className="mt-4 flex items-center gap-2 text-white/90">
                <Phone className="h-5 w-5 text-red-400" />
                <a href="tel:+918028432737" className="underline hover:text-white">Call us: +91 80 2843 2737</a>
              </div>
            </div>
            <div>
              <img src="/Center Images/Namastedwaar/CTA bottom.jpg" alt="Namaste Dwaar" className="w-full h-auto rounded-2xl shadow-lg border-2 border-white/20 object-cover transition-transform duration-700 ease-out hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

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

      {/* Desktop Vertical JUMP Button - Hidden when lightbox/gallery is open */}
      {!lightboxOpen && !showFullGallery && !facilityLightboxOpen && (
        <div className="hidden md:flex fixed z-[60] right-0 top-1/2 -translate-y-1/2 -translate-x-2 flex-col items-end">
          <button
            onClick={() => setIsJumpModalOpen(true)}
            className="bg-[#2F5B63] text-white py-5 px-2.5 rounded-l-2xl shadow-lg border-y-2 border-l-2 border-white/40 hover:border-white/60 transition-colors duration-300 group flex flex-col items-center justify-center gap-2 font-black text-base tracking-tighter"
          >
            <div className="flex flex-col items-center leading-none">
              <span className="text-base font-black group-hover:tracking-[0.15em] transition-all duration-300">B</span>
              <span className="text-base font-black group-hover:tracking-[0.15em] transition-all duration-300">R</span>
              <span className="text-base font-black group-hover:tracking-[0.15em] transition-all duration-300">W</span>
              <Search size={16} className="my-1 opacity-90" />
              <span className="text-base font-black group-hover:tracking-[0.15em] transition-all duration-300">S</span>
              <span className="text-base font-black group-hover:tracking-[0.15em] transition-all duration-300">E</span>
            </div>
          </button>
        </div>
      )}

      {/* Sections Drawer */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-500 flex justify-end ${isJumpModalOpen ? 'visible' : 'invisible'}`}
        onClick={() => setIsJumpModalOpen(false)}
      >
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isJumpModalOpen ? 'opacity-100' : 'opacity-0'}`} />

        <div
          className={`relative w-full max-w-sm h-full bg-[#FCFBF7] shadow-2xl transition-transform duration-500 ease-out transform ${isJumpModalOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {/* Header */}
          <div className="p-4 pb-4 bg-[#2F5B63] text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />

            <div className="flex justify-between items-start mb-3 relative z-10">
              <div className="space-y-0.5 max-w-[240px]">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-px w-6 bg-white/30" />
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Navigation</span>
                </div>
                <h2 className="text-[22px] md:text-[26px] font-extrabold leading-tight tracking-tight text-white">Sections of Namaste Dwaar</h2>
              </div>
              <button
                onClick={() => setIsJumpModalOpen(false)}
                className="group p-2 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all duration-300 shadow-lg border border-white/10 hover:border-white/50 flex-shrink-0"
                title="Close Menu"
              >
                <X className="h-5 w-5 md:h-6 md:w-6 transition-transform" />
              </button>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 bg-white/5 rounded-xl border border-white/10 relative z-10 backdrop-blur-sm">
              <ClipboardList className="h-4 w-4 text-white/50 flex-shrink-0" />
              <p className="text-[11px] md:text-xs text-white/70 leading-relaxed italic">"Directly navigate to any section on this page."</p>
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

            {/* Bottom Accent */}
            <div className="pt-6 pb-2 flex flex-col items-center opacity-40">
              <div className="flex items-center gap-3 w-full mb-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300" />
                <div className="w-1.5 h-1.5 rounded-full border border-gray-400" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-500">Countryside Wellness Retreat</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setQuoteModalOpen(true)}
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all z-40 flex items-center gap-2 font-semibold"
        aria-label="Get Free Quote"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden md:inline">Get Free Quote</span>
        <span className="md:hidden">Quote</span>
      </button>

      {showFullGallery && (
        <div className="fixed inset-0 bg-[#EDE8D0]/80 backdrop-blur-sm z-50 overflow-auto" onClick={() => setShowFullGallery(false)}>
          <div className="container mx-auto px-4 py-10" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex items-center justify-center mb-4 pl-16 md:pl-0">
              <Button onClick={() => setShowFullGallery(false)} className="absolute left-0 bg-white text-primary hover:bg-white/90">
                Back
              </Button>
              <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">
                Namaste Dwaar
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
                  <img src={img} alt={`Namaste Dwaar ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-[#EDE8D0]/80 backdrop-blur-sm" onClick={() => setLightboxOpen(false)}>
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

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Namaste Dwaar</div>
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full" style={{ paddingBottom: "56.25%" }}>
              <img src={images[lightboxImage]} alt={`Namaste Dwaar ${lightboxImage + 1}`} className="absolute inset-0 w-full h-full object-cover" />
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close">X</button>
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

          <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Namaste Dwaar Facilities & Amenities</div>
            <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
              <img
                src={facilityImages[facilityLightboxImage]}
                alt={`Namaste Dwaar Facility ${facilityLightboxImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                onClick={() => setFacilityLightboxOpen(false)}
                className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                aria-label="Close">X</button>
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
    </div>
  );
}





