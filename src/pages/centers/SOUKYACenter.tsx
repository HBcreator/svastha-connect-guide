import { useState, useEffect } from "react";
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
  MapPin, Phone, Mail, Globe, Star, Calendar, ChevronLeft, ChevronRight,
  Award, Users, Heart, Leaf, Sparkles, Hospital, UserCheck, Utensils, ShieldCheck,
  ClipboardList, Stethoscope, Pill, Activity, Home, FileSearch, Images,
  Building2, Droplet, TreePine, TestTube2, MessageCircleHeart, HeartPulse, Brain, Video, TrendingUp, MessageCircle
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";

export default function SOUKYACenter() {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentReview, setCurrentReview] = useState(0);
  const [isReviewAutoPlaying, setIsReviewAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [showAwards, setShowAwards] = useState(true);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isMediaAutoPlaying, setIsMediaAutoPlaying] = useState(true);
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const [facilityLightboxOpen, setFacilityLightboxOpen] = useState(false);
  const [facilityLightboxImage, setFacilityLightboxImage] = useState(0);

  // Facilities images
  const facilityImages = [
    "/Center Images/SOUKYA/Facilities & Amenities/2 Soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/3 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/4 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/5 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/6 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/7 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/8 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/9 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/19 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/20 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/21 soukkya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/22 soukya.jpg",
    "/Center Images/SOUKYA/Facilities & Amenities/23 Soukya.jpg"
  ];

  // Media items with matching images and PDFs
  const mediaItems = [
    {
      image: "/Center Images/SOUKYA/Media/telegraph-luxury-media01.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/telegraph-luxury-media01.pdf",
      title: "Telegraph Luxury"
    },
    {
      image: "/Center Images/SOUKYA/Media/SOUKYA_Good_Housekeeping02.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/SOUKYA_Good_Housekeeping02.pdf",
      title: "Good Housekeeping"
    },
    {
      image: "/Center Images/SOUKYA/Media/country_and_town_house03.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/country_and_town_house03.pdf",
      title: "Country & Town House"
    },
    {
      image: "/Center Images/SOUKYA/Media/soukya_Forbes04.jpg",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/soukya_Forbes04.pdf",
      title: "Forbes"
    },
    {
      image: "/Center Images/SOUKYA/Media/lifestyle-asia-apr-05.jpg",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/lifestyle-asia-apr-05.pdf",
      title: "Lifestyle Asia"
    },
    {
      image: "/Center Images/SOUKYA/Media/soukya_inside_outside_06.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/soukya_inside_outside_06.pdf",
      title: "Inside Outside"
    },
    {
      image: "/Center Images/SOUKYA/Media/SOUKYA_Outlook_Life_and_Style_07.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/SOUKYA_Outlook_Life_and_Style_07.pdf",
      title: "Outlook Life & Style"
    },
    {
      image: "/Center Images/SOUKYA/Media/SOUKYA_Match_Du_Monde_08.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/SOUKYA_Match_Du_Monde_08.pdf",
      title: "Match Du Monde"
    },
    {
      image: "/Center Images/SOUKYA/Media/SOUKYA_India_Today_09.png",
      pdf: "/Center Images/SOUKYA/Media/Pdfs/SOUKYA_India_Today_09.pdf",
      title: "India Today"
    }
  ];

  // SOUKYA gallery images (1–30)
  const images = [
    "/Center Images/SOUKYA/1 Soukya.jpg",
    "/Center Images/SOUKYA/2 Soukya.jpg",
    "/Center Images/SOUKYA/3 soukya.jpg",
    "/Center Images/SOUKYA/4 soukya.jpg",
    "/Center Images/SOUKYA/5 soukya.jpg",
    "/Center Images/SOUKYA/6 soukya.jpg",
    "/Center Images/SOUKYA/7 soukya.jpg",
    "/Center Images/SOUKYA/8 soukya.jpg",
    "/Center Images/SOUKYA/9 soukya.jpg",
    "/Center Images/SOUKYA/10 soukya.jpg",
    "/Center Images/SOUKYA/11 soukya.jpg",
    "/Center Images/SOUKYA/12 soukya.jpeg",
    "/Center Images/SOUKYA/13 soukya.jpg",
    "/Center Images/SOUKYA/14 soukya.jpg",
    "/Center Images/SOUKYA/15 soukya.jpg",
    "/Center Images/SOUKYA/16 soukya.jpg",
    "/Center Images/SOUKYA/17 soukya.jpg",
    "/Center Images/SOUKYA/18 soukya.jpg",
    "/Center Images/SOUKYA/19 soukya.jpg",
    "/Center Images/SOUKYA/20 soukya.jpg",
    "/Center Images/SOUKYA/21 soukya.jpg",
    "/Center Images/SOUKYA/22 soukya.jpg",
    "/Center Images/SOUKYA/23 soukya.jpg",
    "/Center Images/SOUKYA/24 soukya.jpg",
    "/Center Images/SOUKYA/25 soukya.jpg",
    "/Center Images/SOUKYA/26 soukya.jpg",
    "/Center Images/SOUKYA/27 soukya.jpg",
    "/Center Images/SOUKYA/28 soukya.jpg",
    "/Center Images/SOUKYA/29 soukya.jpg",
    "/Center Images/SOUKYA/30 soukya.jpg",
  ];

  // Load content
  useEffect(() => {
    fetch("/content/Top Centers/SOUKYA center.txt")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) =>
        console.error("Error loading SOUKYA center content:", err)
      );
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxImage((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, images.length]);

  // Keyboard navigation for full gallery
  useEffect(() => {
    if (!showFullGallery) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowFullGallery(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showFullGallery]);

  // Navigation functions
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const selectImage = (index: number) => {
    setIsAutoPlaying(false);
    setSelectedImage(index);
  };

  // Select 6 specific images for thumbnail grid
  const thumbnailImages = [
    "/Center Images/SOUKYA/1 Soukya.jpg",
    "/Center Images/SOUKYA/2 Soukya.jpg",
    "/Center Images/SOUKYA/12 soukya.jpeg",
    "/Center Images/SOUKYA/7 soukya.jpg",
    "/Center Images/SOUKYA/29 soukya.jpg",
    "/Center Images/SOUKYA/24 soukya.jpg",
  ];

  // Videos from SOUKYA folder
  const videos = [
    "/Center Videos/Soukya/Video-1.mp4",
    "/Center Videos/Soukya/Video-2.mp4", ];

  // Media carousel navigation
  const handleNextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    setIsMediaAutoPlaying(false);
  };

  const handlePrevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    setIsMediaAutoPlaying(false);
  };

  // Auto-play for media carousel
  useEffect(() => {
    if (!isMediaAutoPlaying || showAwards) return;

    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMediaAutoPlaying, showAwards, mediaItems.length]);

  // Auto-rotate facilities images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [facilityImages.length]);

  // Patient testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United States",
      condition: "Chronic Back Pain",
      rating: 5,
      date: "October 2024",
      avatar: "SJ",
      image: "/Center Images/SOUKYA/Reviews Images/Sarah Johnson.png",
      review: "My experience at SOUKYA was transformational. After years of struggling with chronic back pain, the personalized Panchakarma treatments and therapeutic yoga sessions provided relief I never thought possible. The doctors were incredibly knowledgeable, and the serene environment accelerated my healing journey.",
      verified: true
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Mumbai, India",
      condition: "Stress & Anxiety",
      rating: 5,
      date: "September 2024",
      avatar: "RK",
      image: "/Center Images/SOUKYA/Reviews Images/Rajesh Kumar.png",
      review: "SOUKYA is a sanctuary of healing. The holistic approach combining Ayurveda, meditation, and naturopathy helped me overcome years of work-related stress. Dr. Mathai's team created a personalized treatment plan that addressed not just symptoms but root causes. Highly recommended!",
      verified: true
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "United Kingdom",
      condition: "Digestive Issues",
      rating: 5,
      date: "August 2024",
      avatar: "ET",
      image: "/Center Images/SOUKYA/Reviews Images/Emma Thompson.png",
      review: "The authentic Ayurvedic treatments at SOUKYA exceeded all expectations. The organic food, peaceful surroundings, and expert therapists made my 14-day program incredibly effective. My digestive issues have significantly improved, and I feel more energetic than I have in years.",
      verified: true
    },
    {
      id: 4,
      name: "Michael Chen",
      location: "Singapore",
      condition: "Post-Surgery Recovery",
      rating: 5,
      date: "July 2024",
      avatar: "MC",
      image: "/Center Images/SOUKYA/Reviews Images/Michael Chen.png",
      review: "After my knee surgery, SOUKYA's combination of physiotherapy and Ayurvedic treatments accelerated my recovery remarkably. The personalized care and attention from the medical team was exceptional. The 30-acre organic farm setting provided the perfect healing atmosphere.",
      verified: true
    },
    {
      id: 5,
      name: "Priya Sharma",
      location: "Delhi, India",
      condition: "Weight Management",
      rating: 5,
      date: "June 2024",
      avatar: "PS",
      image: "/Center Images/SOUKYA/Reviews Images/Priya Sharma.png",
      review: "SOUKYA's holistic approach to weight management changed my life. The combination of Ayurvedic diet consultation, yoga, and personalized treatments helped me lose 15 kg sustainably. More importantly, I learned lifestyle changes that I can maintain long-term.",
      verified: true
    },
    {
      id: 6,
      name: "David Martinez",
      location: "Spain",
      condition: "Arthritis",
      rating: 5,
      date: "May 2024",
      avatar: "DM",
      image: "/Center Images/SOUKYA/Reviews Images/David Martinez.png",
      review: "As someone with rheumatoid arthritis, I was skeptical about alternative treatments. SOUKYA proved me wrong. The specialized Ayurvedic therapies, combined with yoga and meditation, significantly reduced my pain and improved my mobility. The NABH accreditation gave me confidence in the quality of care.",
      verified: true
    }
  ];

  // Review carousel auto-rotation
  useEffect(() => {
    if (!isReviewAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval);
  }, [isReviewAutoPlaying, testimonials.length]);

  const goToPreviousReview = () => {
    setIsReviewAutoPlaying(false);
    setCurrentReview((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextReview = () => {
    setIsReviewAutoPlaying(false);
    setCurrentReview((prev) => (prev + 1) % testimonials.length);
  };

  const selectReview = (index: number) => {
    setIsReviewAutoPlaying(false);
    setCurrentReview(index);
  };

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
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
            <ul
              key={`list-${elements.length}`}
              className="list-disc list-inside mb-6 space-y-2"
              style={{ color: "#7F543D" }}
            >
              {currentList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {processInlineFormatting(item)}
                </li>
              ))}
            </ul>
          );
        } else if (listType === "number") {
          elements.push(
            <ol
              key={`list-${elements.length}`}
              className="list-decimal list-inside mb-6 space-y-2"
              style={{ color: "#7F543D" }}
            >
              {currentList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {processInlineFormatting(item)}
                </li>
              ))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      // Check for section separator (---)
      if (trimmedLine === '---') {
        flushList();
        elements.push(
          <div key={`separator-${index}`} className="h-8"></div>
        );
        return;
      }

      if (!trimmedLine) {
        flushList();
        emptyLineCount++;
        // Add spacing div for multiple empty lines (sections separator)
        if (emptyLineCount === 2 && elements.length > 0) {
          elements.push(
            <div key={`space-${index}`} className="h-4"></div>
          );
        }
        return;
      }

      // Reset empty line counter when we hit content
      emptyLineCount = 0;

      // Rule 1: Main title (single #)
      if (/^#\s+(.+)/.test(trimmedLine) && !trimmedLine.startsWith("##")) {
        flushList();
        const titleText = trimmedLine.replace(/^#\s+/, "");
        elements.push(
          <h1
            key={`h1-${index}`}
            className="text-2xl md:text-4xl font-bold mb-6 text-primary"
          >
            {processInlineFormatting(titleText)}
          </h1>
        );
        return;
      }

      // Rule 2: Section headings (##)
      if (/^##\s+(.+)/.test(trimmedLine)) {
        flushList();
        const headingText = trimmedLine.replace(/^##\s+/, "");
        elements.push(
          <h2
            key={`h2-${index}`}
            className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-primary"
          >
            {processInlineFormatting(headingText)}
          </h2>
        );
        return;
      }

      // Rule 3: Subsection headings (###)
      if (/^###\s+(.+)/.test(trimmedLine)) {
        flushList();
        const subheadingText = trimmedLine.replace(/^###\s+/, "");
        elements.push(
          <h3
            key={`h3-${index}`}
            className="text-xl md:text-2xl font-semibold mb-3 mt-6 text-primary"
          >
            {processInlineFormatting(subheadingText)}
          </h3>
        );
        return;
      }

      // Rule 4: Bullet points (- or *)
      if (/^[-*]\s+(.+)/.test(trimmedLine)) {
        const itemText = trimmedLine.replace(/^[-*]\s+/, "");
        if (listType !== "bullet") {
          flushList();
          listType = "bullet";
        }
        currentList.push(itemText);
        return;
      }

      // Rule 5: Numbered lists
      if (/^\d+\.\s+(.+)/.test(trimmedLine)) {
        const itemText = trimmedLine.replace(/^\d+\.\s+/, "");
        if (listType !== "number") {
          flushList();
          listType = "number";
        }
        currentList.push(itemText);
        return;
      }

      // Rule 6: Full-line bold text (sub-headings) - NO spacing below
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList();
        const content = trimmedLine.replace(/^\*\*/, '').replace(/\*\*$/, '');
        elements.push(
          <p
            key={`bold-${index}`}
            className="mb-0 leading-relaxed"
            style={{ color: '#7F543D' }}
          >
            <strong className="font-semibold text-primary">{content}</strong>
          </p>
        );
        return;
      }

      // Rule 7: Regular paragraphs
      flushList();
      elements.push(
        <p
          key={`p-${index}`}
          className="mb-6 leading-relaxed"
          style={{ color: "#7F543D" }}
        >
          {processInlineFormatting(trimmedLine)}
        </p>
      );
    });

    flushList();
    return elements;
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  SOUKYA
                </h1>
                <p className="text-xl mb-4 opacity-90">
                  Dr. Mathai's International Holistic Health Centre
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.9</span>
                  <span className="opacity-90">(500+ reviews)</span>
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

      {/* Main Content */}
      <div className="container mx-auto px-3 md:px-4 py-12 max-w-full">
        <div className="max-w-6xl mx-auto">
          
          {/* Photo/Video Gallery Section */}
          <div className="mb-12">
            {/* Gallery Toggle Header */}
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
            {/* Main Carousel */}
            <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
              <img
                src={images[selectedImage]}
                alt={`SOUKYA Center ${selectedImage + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Navigation Buttons */}
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

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {selectedImage + 1} / {images.length}
              </div>

              {/* Auto-play indicator */}
              {isAutoPlaying && (
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Auto
                </div>
              )}
            </div>

            {/* Fixed Grid Gallery - 1 Large (16:9) + 4 Small (2×2) */}
            <div className="flex flex-col md:flex-row gap-3 mb-6">
              {/* Large Image - Left Side - Fixed 16:9 Aspect Ratio */}
              <div 
                className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                onClick={() => {
                  setLightboxImage(images.indexOf(thumbnailImages[0]));
                  setLightboxOpen(true);
                }}
              >
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={thumbnailImages[0]}
                    alt="SOUKYA 1"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </div>

              {/* Small Images - Right Side - Fixed 2×2 Grid */}
              <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                {thumbnailImages.slice(1, 5).map((img, idx) => {
                  const actualIndex = images.indexOf(img);
                  const isLastImage = idx === 3; // Last small image (bottom-right)
                  
                  return (
                    <div
                      key={idx}
                      className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                      onClick={() => {
                        setLightboxImage(actualIndex);
                        setLightboxOpen(true);
                      }}
                    >
                      <div className="relative w-full" style={{ paddingBottom: '100%' }}>
                        <img
                          src={img}
                          alt={`SOUKYA ${actualIndex + 1}`}
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
              {/* Video Gallery */}
              <div className="space-y-6">
                {/* Main Video Player */}
                <div className="relative rounded-lg overflow-hidden shadow-lg bg-black aspect-video">
                  <video
                    key={selectedVideo}
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={videos[selectedVideo]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    Video {selectedVideo + 1} / {videos.length}
                  </div>
                </div>

                {/* Video Thumbnails */}
                <div className="grid grid-cols-2 gap-4">
                  {videos.map((video, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedVideo(idx)}
                      className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-md ${
                        selectedVideo === idx ? "ring-4 ring-primary" : "ring-2 ring-transparent hover:ring-primary/30"
                      }`}
                    >
                      {/* Video thumbnail images */}
                      <img 
                        src={`/Center Images/SOUKYA/Video gallery images/${idx + 1}.jpg`}
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

          {/* Content Section */}
          <Card className="mb-12">
            <CardContent className="p-8 prose prose-lg max-w-none">
              {content ? renderContent() : <p>Loading content...</p>}
            </CardContent>
          </Card>

          {/* Wellness & Rejuvenation Programs */}
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }}>
            {/* Statistics Section */}
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-primary mb-3">
                Wellness Programs
              </h1>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                Cleanse, de-stress, and revitalize your mind, body, and spirit with our holistic wellness programs
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              <AccordionItem value="detox" className="border-2 border-green-200 rounded-lg px-4 md:px-6 data-[state=open]:border-green-500 transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Droplet className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary">Detoxification Programs</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Complete body cleansing and toxin elimination through Panchakarma and naturopathic therapies.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Traditional Panchakarma detoxification protocols</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Colon cleansing and digestive system rejuvenation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Herbal medicines and therapeutic diets</span>
                    </li>
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
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Relaxation therapies, meditation, and mental wellness programs to overcome modern life stress.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Guided meditation and mindfulness practices</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Shirodhara and Ayurvedic stress-relief therapies</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Professional counseling and emotional support</span>
                    </li>
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
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Vitality enhancement and anti-aging treatments to restore youthful energy and appearance.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Rasayana (rejuvenation) Ayurvedic therapies</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Natural skin care and beauty treatments</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Hormone balancing and vitality restoration</span>
                    </li>
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
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Healthy and sustainable weight loss through holistic Ayurvedic approaches and lifestyle modifications.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Personalized diet plans and nutritional counseling</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Metabolism-boosting Ayurvedic treatments</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Yoga and exercise programs for fitness</span>
                    </li>
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
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Strengthen natural defense systems and prevent diseases through holistic health promotion.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Rasayana therapies for immune enhancement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Herbal supplements and immunity tonics</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Lifestyle disease prevention protocols</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Medical Treatment Programs */}
          <div className="mb-12 rounded-3xl p-8 md:p-12" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Stethoscope className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl md:text-3xl font-bold text-primary mb-3">
                Medical Programs
              </h2>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto" style={{ color: "#7F543D" }}>
                Comprehensive holistic treatment for acute, chronic, and complex medical conditions
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
              <AccordionItem value="addiction" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Heart className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary">Addiction Treatment & Recovery</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Drug, alcohol, and smoking cessation programs with holistic detoxification and counseling support.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Natural detoxification without harsh medications</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Psychological counseling and behavioral therapy</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Long-term recovery support and relapse prevention</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="diabetes" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Activity className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary">Diabetes Management & Control</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Comprehensive blood sugar control and prevention of diabetes complications through integrated care.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Ayurvedic medicines for blood sugar regulation</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Diabetic diet planning and lifestyle modifications</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Complication prevention and organ protection</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="arthritis" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <HeartPulse className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary">Arthritis & Joint Pain Treatment</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Pain management and mobility improvement for all types of arthritis through Ayurvedic therapies.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Specialized Panchakarma for joint disorders</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Therapeutic massage and physiotherapy</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Anti-inflammatory herbal medications</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mental" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Brain className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary">Mental Health & Neurological Disorders</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Treatment for depression, anxiety, stress disorders, and neurological conditions through holistic care.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Ayurvedic psychotherapy and mind-body healing</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Professional counseling and emotional support</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Meditation, yoga, and stress reduction techniques</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="digestive" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Pill className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary">Gastrointestinal & Digestive Disorders</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Comprehensive treatment for IBS, colitis, GERD, and other digestive system conditions.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Digestive fire (Agni) enhancement therapies</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Therapeutic diets for gut healing</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs md:text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Herbal formulations for digestive health</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="chronic" className="border-2 border-blue-200 rounded-lg px-4 md:px-6 data-[state=open]:border-blue-500 transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Hospital className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary">Chronic & Complex Conditions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-3 pb-4 md:pt-4 md:pb-6 bg-white">
                  <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Specialized care for stroke recovery, Parkinson's, cancer support, skin conditions, and more.
                  </p>
                  <ul className="space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Personalized integrated treatment protocols</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Multi-system holistic approach for rare diseases</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-blue-600 mt-1">✓</span>
                      <span>Quality of life improvement and symptom management</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Why Choose SOUKYA - Infographic Section */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-4xl font-bold text-primary mb-3">
                Why Choose SOUKYA for Your Holistic Health Journey
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                Discover what makes SOUKYA India's premier destination for authentic holistic healing
              </p>
            </div>

            {/* Icon Grid Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Card 1: NABH Accreditation */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Award className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        NABH-Accredited AYUSH Hospital
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        India's first NABH-accredited facility ensuring highest standards of care.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Integrated Approach */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Hospital className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        Integrated Multi-System Approach
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        Four healing traditions - Ayurveda, Homeopathy, Yoga, and Naturopathy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3: Personalized Care */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Heart className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        Personalized Care & Attention
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        Individualized treatment protocols for your specific health goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 4: Expert Doctors */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <UserCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        Fourth-Generation Doctors
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        Traditional lineage combining ancient wisdom with modern knowledge.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 5: Global Recognition */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Users className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        Global Recognition & Trust
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        Patients from over 100 countries trust SOUKYA for healing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 6: Sustainable Environment */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Leaf className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        Sustainable Healing Environment
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        30-acre organic farm with naturally therapeutic surroundings.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 7: Comprehensive Treatment */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Sparkles className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        Comprehensive Treatment Range
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        Addresses all health concerns through holistic methods with proven results.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 8: Custom Medicine */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <ShieldCheck className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        Custom Medicine Preparation
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        Freshly prepared medicines customized for maximum efficacy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 9: Organic Nutrition */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Utensils className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">
                        Organic & Therapeutic Nutrition
                      </h3>
                      <p className="text-sm leading-relaxed text-left" style={{ color: "#7F543D" }}>
                        Therapeutic meals from organic farm supporting healing from within.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

          {/* Treatment Process & Patient Journey - Timeline */}
          <div className="mb-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Treatment Process & Patient Journey
              </h2>
              <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                Your personalized healing journey at SOUKYA, step by step
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="max-w-4xl mx-auto">
              
              {/* Step 1: Initial Consultation */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    1
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <ClipboardList className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Initial Consultation & Medical Evaluation
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Day 1
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Upon arrival, every patient undergoes a comprehensive medical evaluation by doctors from each system of medicine. This includes detailed health history, current complaints, lifestyle assessment, and diagnostic tests if required.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 2: Personalized Treatment Plan */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    2
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <FileSearch className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Personalized Treatment Plan
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Day 1-2
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Based on the joint medical review, a customized treatment protocol is designed specifically for you. The plan includes therapies, medicines, dietary guidelines, and lifestyle recommendations tailored to your condition and health goals.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3: Daily Treatment */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    3
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Pill className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Daily Treatment & Monitoring
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Ongoing
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Patients receive daily treatments according to their schedule, which may include Ayurvedic therapies, homeopathic medicines, yoga sessions, and naturopathic treatments. Progress is monitored daily by the medical team with adjustments as needed.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 4: Diet & Nutrition */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    4
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Diet & Nutrition Management
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Daily
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Personalized meal plans are prepared using organic ingredients from the farm. Dietary therapy plays a crucial role in the healing process and is adjusted based on individual needs and treatment progress.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 5: Lifestyle Counseling */}
              <div className="relative flex items-start gap-3 md:gap-6 mb-8 md:mb-12 group">
                {/* Timeline Circle & Line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    5
                  </div>
                  <div className="w-0.5 md:w-1 h-full bg-gradient-to-b from-primary to-primary/30 mt-2"></div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Activity className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Lifestyle Counseling & Education
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Throughout Stay
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      Patients receive guidance on lifestyle modifications, stress management techniques, yoga practices, and daily routines to continue at home for sustained health benefits and long-term wellness.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 6: Follow-up Care */}
              <div className="relative flex items-start gap-3 md:gap-6 group">
                {/* Timeline Circle - No line after last step */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg md:text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    6
                  </div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Home className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-xl font-bold text-primary">
                          Follow-up Care
                        </h3>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          Post-Discharge
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      After completing the residential program, patients receive detailed discharge instructions, continuation medicines, and follow-up consultations to ensure long-term health maintenance and sustained wellness.
                    </p>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>

          {/* Call to Action Section */}
          <div className="mb-12 rounded-3xl overflow-hidden p-6 md:p-8 lg:p-10" style={{ backgroundColor: '#EDE8D0' }}>
            {/* Grid Layout - Mobile & Tablet: Stacked, Desktop: Side by Side */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              
              {/* Left Side: Text Content and Buttons */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
                  Ready to Start Your Wellness Journey?
                </h2>
                <p className="text-sm md:text-base lg:text-lg mb-6" style={{ color: "#7F543D" }}>
                  Take the first step towards holistic healing. Our expert team is here to guide you through personalized treatment plans tailored to your unique needs.
                </p>
                
                {/* Buttons */}
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
                    asChild
                  >
                    <Link to="/contact">
                      <MessageCircle className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                      Chat With Us
                    </Link>
                  </Button>
                </div>
                <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                  📞 Call us: <a href="tel:+918028432737" className="text-primary font-semibold hover:underline">+91 80 2843 2737</a>
                </p>
              </div>

              {/* Right Side: Image */}
              <div className="order-first lg:order-last">
                <img
                  src="/Center Images/SOUKYA/cta-pathway.jpg"
                  alt="SOUKYA Wellness Center"
                  className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>

            </div>
          </div>

          {/* Facilities & Amenities - Category-Based Grid */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Facilities & Amenities
              </h2>
              <p className="text-base md:text-lg mx-auto px-4 mb-8" style={{ color: "#7F543D" }}>
                Experience healing in comfort with our comprehensive range of traditional and modern facilities
              </p>
            </div>
              
            {/* Facilities Images Carousel - 5 at a time */}
            <div className="max-w-7xl mx-auto relative mb-10">
              
              {/* Navigation Arrows */}
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

              {/* Carousel Container */}
              <div className="overflow-hidden px-10 md:px-12">
                {/* Mobile: Show 1 at a time */}
                <div className="md:hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentFacilityImage * 100}%)`
                    }}
                  >
                    {facilityImages.map((image, index) => (
                      <div 
                        key={index}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div 
                          className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                          onClick={() => {
                            setFacilityLightboxImage(index);
                            setFacilityLightboxOpen(true);
                          }}
                        >
                          <img
                            src={image}
                            alt={`SOUKYA Facility ${index + 1}`}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop: Show 5 at a time */}
                <div className="hidden md:block">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ 
                      transform: `translateX(-${Math.min(currentFacilityImage, facilityImages.length - 5) * 20}%)`
                    }}
                  >
                    {facilityImages.map((image, index) => (
                      <div 
                        key={index}
                        className="w-1/5 flex-shrink-0 px-2"
                      >
                        <div 
                          className="bg-white rounded-xl p-2 shadow-lg border border-primary/10 cursor-pointer hover:border-primary/30 transition-all"
                          onClick={() => {
                            setFacilityLightboxImage(index);
                            setFacilityLightboxOpen(true);
                          }}
                        >
                          <img
                            src={image}
                            alt={`SOUKYA Facility ${index + 1}`}
                            className="w-full aspect-video object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {facilityImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFacilityImage(index)}
                    className={`transition-all ${
                      index === currentFacilityImage
                        ? "w-8 h-3 bg-primary"
                        : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                    } rounded-full`}
                    aria-label={`Go to facility image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Category Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Category 1: Accommodation */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building2 className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      Accommodation
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Traditional South Indian architecture cottages</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Air-conditioned single, double & family suites</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Modern amenities with natural aesthetic</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Private bathrooms & comfortable furnishings</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Peaceful garden views from all rooms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Category 2: Wellness & Therapy */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Droplet className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      Wellness & Therapy
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Dedicated Panchakarma therapy centers</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Traditional Ayurvedic massage rooms</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Spacious yoga hall with natural lighting</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Serene meditation pavilions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Hydrotherapy & naturopathy facilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Category 3: Organic Dining */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Utensils className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      Organic Dining
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Farm-to-table organic vegetarian cuisine</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Personalized therapeutic meal plans</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Ayurvedic dietary consultations included</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Fresh juices & herbal teas throughout day</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Mindful eating in pleasant communal setting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Category 4: Natural Environment */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TreePine className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      Natural Environment
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>30-acre certified organic farm surroundings</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Medicinal herb gardens & walking trails</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Bird sanctuary with exotic species</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Tranquil water features & lotus ponds</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Outdoor meditation & yoga spaces</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Category 5: Medical Facilities */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <TestTube2 className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      Medical Facilities
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>NABH-accredited diagnostic laboratory</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>In-house Ayurvedic pharmacy</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Custom medicine preparation facility</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>24/7 medical support & monitoring</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Physiotherapy & rehabilitation centers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Category 6: Support Services */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircleHeart className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      Support Services
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Professional counseling & psychotherapy</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Airport pickup & drop services</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Multilingual staff assistance</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Library with wellness resources</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">•</span>
                      <span>Laundry & housekeeping services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

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
                    Every facility at SOUKYA is designed and maintained according to NABH accreditation standards, 
                    ensuring the highest levels of safety, hygiene, and quality care. Our commitment to excellence 
                    means you receive world-class holistic treatment in a serene, naturally therapeutic environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder & Expert Medical Team */}
          <div className="mb-10 rounded-3xl p-4 md:p-10" style={{ backgroundColor: '#EDE8D0' }}>
            <div className="text-center mb-6 md:mb-10">
              <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Founder & Team Info
              </h1>
              <p className="text-base md:text-lg mx-auto" style={{ color: "#7F543D" }}>
                Led by visionary expertise and supported by generations of traditional healing knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-12">
              {/* Founder Card */}
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img 
                        src="/Center Images/SOUKYA/soukya founder/dr_mathai.jpg" 
                        alt="Dr. Issac Mathai"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        Dr. Issac Mathai
                      </h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                        MD (Hom), MRCH (London)
                      </p>
                      <p className="text-xs md:text-sm mt-1 text-primary/70">
                        Founder & Director
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    Dr. Issac Mathai is the founder and director of SOUKYA, bringing decades of experience in holistic medicine. His vision was to create a healing sanctuary that integrates multiple traditional systems of medicine under one roof.
                  </p>
                  <div className="pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2">Leadership & Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Holistic Medicine</span>
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Homeopathy</span>
                      <span className="text-xs px-2 md:px-3 py-1 bg-primary/10 text-primary rounded-full">Integrative Care</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Team Card */}
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all hover:shadow-xl">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                      <img 
                        src="/Center Images/SOUKYA/soukya founder/Team.jpg" 
                        alt="Expert Medical Team"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">
                        Expert Medical Team
                      </h3>
                      <p className="text-xs md:text-sm font-semibold" style={{ color: "#7F543D" }}>
                        4th Generation Ayurvedic Doctors
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm leading-relaxed mb-3 md:mb-4" style={{ color: "#7F543D" }}>
                    SOUKYA offers authentic Ayurveda delivered by 4th generation Ayurvedic doctors trained at the best ayurvedic hospitals in the world. Our medical team consists of highly qualified and experienced doctors.
                  </p>
                  <div className="space-y-2 pt-3 md:pt-4 border-t border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-2 md:mb-3">Specialized Practitioners:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Ayurvedic Medicine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Homeopathy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Yoga Therapy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Naturopathy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>General Medicine</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-xs" style={{ color: "#7F543D" }}>Counseling</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Patient Success Stories & Reviews */}
          <div className="mb-12">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Patient Stories & Reviews
              </h2>
              <p className="text-base md:text-lg px-4" style={{ color: "#7F543D" }}>
                Hear from our patients about their transformational healing journeys
              </p>
            </div>

            {/* Review Carousel */}
            <div className="relative">
              <Card className="border-2 border-primary/20 shadow-lg overflow-hidden">
                <CardContent className="p-4 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <div className="text-primary/20 mb-3 md:mb-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                      </svg>
                    </div>

                    {/* Review Content */}
                    <div className="mb-4 md:mb-6">
                      <p className="text-sm md:text-xl leading-relaxed mb-4 md:mb-6" style={{ color: "#7F543D" }}>
                        "{testimonials[currentReview].review}"
                      </p>
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      {/* Avatar */}
                      {testimonials[currentReview].image ? (
                        <img
                          src={testimonials[currentReview].image}
                          alt={testimonials[currentReview].name}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary shadow-lg flex-shrink-0 select-none pointer-events-none"
                          draggable="false"
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                          style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
                        />
                      ) : (
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center text-base md:text-xl font-bold flex-shrink-0">
                          {testimonials[currentReview].avatar}
                        </div>
                      )}
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-base md:text-xl font-semibold text-primary">
                            {testimonials[currentReview].name}
                          </h4>
                          {testimonials[currentReview].verified && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs md:text-sm" style={{ color: "#7F543D" }}>
                          {testimonials[currentReview].location} • {testimonials[currentReview].condition}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {testimonials[currentReview].date}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-2 md:gap-3">
                      {renderStars(testimonials[currentReview].rating)}
                      <span className="text-xs md:text-sm font-semibold text-primary">
                        {testimonials[currentReview].rating}.0
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <button
                onClick={goToPreviousReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </button>
              
              <button
                onClick={goToNextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 bg-white hover:bg-primary hover:text-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all border-2 border-primary"
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </button>

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
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => selectReview(idx)}
                  className={`transition-all rounded-full ${
                    currentReview === idx
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Awards & Media Recognition */}
            <div className="mt-8 md:mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
                Awards & Media
              </h3>
              
              {/* Toggle Buttons */}
              <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
                <Button
                  onClick={() => setShowAwards(true)}
                  className={`px-3 py-2 md:px-8 md:py-6 text-xs md:text-base font-semibold transition-all ${
                    showAwards
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-white text-primary border-2 border-primary hover:bg-primary/10"
                  }`}
                >
                  <Award className="mr-1 md:mr-2 h-3 w-3 md:h-5 md:w-5" />
                  Awards
                </Button>
                <Button
                  onClick={() => setShowAwards(false)}
                  className={`px-3 py-2 md:px-8 md:py-6 text-xs md:text-base font-semibold transition-all ${
                    !showAwards
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-white text-primary border-2 border-primary hover:bg-primary/10"
                  }`}
                >
                  <FileSearch className="mr-1 md:mr-2 h-3 w-3 md:h-5 md:w-5" />
                  Media Recognition
                </Button>
              </div>

              {/* Awards Section */}
              {showAwards && (
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                
                {/* Award 1: Condé Nast Johansens */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="/Center Images/SOUKYA/Awards/Award 1.jpg"
                      alt="Condé Nast Johansens - Recommended Retreat"
                      className="w-40 h-40 md:w-48 md:h-48 object-contain mb-4"
                    />
                    <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">
                      Condé Nast Johansens – Recommended Retreat
                    </h4>
                  </div>
                  
                  <div className="space-y-3 text-sm md:text-base" style={{ color: "#7F543D" }}>
                    <p>
                      Soukya has been officially recognized as a <span className="font-semibold">Recommended Retreat</span> by Condé Nast Johansens, one of the world's most trusted authorities on luxury travel and wellness.
                    </p>
                    <p className="font-medium">This distinction is awarded only to select properties that consistently deliver:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>exceptional hospitality</li>
                      <li>world-class wellness and healing services</li>
                      <li>a serene, nature-rich environment</li>
                      <li>outstanding guest satisfaction</li>
                    </ul>
                    <p className="font-semibold text-primary pt-2">
                      This recognition reinforces Soukya's position as a globally trusted holistic healing destination.
                    </p>
                  </div>
                </div>

                {/* Award 2: Condé Nast Traveller */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src="/Center Images/SOUKYA/Awards/Award 2.jpg"
                      alt="Condé Nast Traveller - Award Winner"
                      className="w-40 h-40 md:w-48 md:h-48 object-contain mb-4"
                    />
                    <h4 className="text-lg md:text-xl font-bold text-primary text-center mb-2">
                      Condé Nast Traveller – Award Winner
                    </h4>
                  </div>
                  
                  <div className="space-y-3 text-sm md:text-base" style={{ color: "#7F543D" }}>
                    <p>
                      Soukya is also a proud <span className="font-semibold">Award Winner</span> by Condé Nast Traveller, a prestigious global travel publication known for celebrating excellence in luxury, wellness, and hospitality.
                    </p>
                    <p className="font-medium">This award highlights Soukya for offering:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>an outstanding guest experience</li>
                      <li>innovative and authentic holistic therapies</li>
                      <li>sustainable, nature-based healing practices</li>
                      <li>the highest standards of care and comfort</li>
                    </ul>
                    <p className="font-semibold text-primary pt-2">
                      This international honor places Soukya among the top wellness retreats in the world, trusted by guests from across the globe.
                    </p>
                  </div>
                </div>

              </div>
              )}

              {/* Media Recognition Section - Carousel */}
              {!showAwards && (
              <div className="max-w-7xl mx-auto relative">
                
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevMedia}
                  className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Previous media"
                >
                  <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
                <button
                  onClick={handleNextMedia}
                  className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  aria-label="Next media"
                >
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden px-10 md:px-12">
                  {/* Mobile: Show 1 at a time */}
                  <div className="md:hidden">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ 
                        transform: `translateX(-${currentMediaIndex * 100}%)`
                      }}
                    >
                      {mediaItems.map((item, index) => (
                        <div 
                          key={index}
                          className="w-full flex-shrink-0 px-2"
                        >
                          <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                            <a
                              href={item.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block group"
                            >
                              <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                                <img
                                  src={item.image}
                                  alt={`SOUKYA Featured in ${item.title}`}
                                  className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full">
                                    <p className="text-primary font-bold text-xs flex items-center gap-2">
                                      <FileSearch className="h-4 w-4" />
                                      View PDF
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>
                            <p className="text-center mt-3 text-xs font-semibold text-primary">
                              {item.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desktop: Show 4 at a time */}
                  <div className="hidden md:block">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ 
                        transform: `translateX(-${currentMediaIndex * 25}%)`
                      }}
                    >
                    {mediaItems.map((item, index) => (
                      <div 
                        key={index}
                        className="w-1/4 flex-shrink-0 px-3"
                      >
                        <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all">
                          <a
                            href={item.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            <div className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                              <img
                                src={item.image}
                                alt={`SOUKYA Featured in ${item.title}`}
                                className="w-full h-auto object-cover"
                              />
                              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 px-4 py-2 rounded-full">
                                  <p className="text-primary font-bold text-sm flex items-center gap-2">
                                    <FileSearch className="h-4 w-4" />
                                    View PDF
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                          <p className="text-center mt-3 text-sm font-semibold text-primary">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {mediaItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMediaIndex(index)}
                      className={`transition-all ${
                        index === currentMediaIndex
                          ? "w-8 h-3 bg-primary"
                          : "w-3 h-3 bg-gray-300 hover:bg-primary/50"
                      } rounded-full`}
                      aria-label={`Go to media ${index + 1}`}
                    />
                  ))}
                </div>
                
                <p className="text-center mt-8 text-sm md:text-base max-w-3xl mx-auto" style={{ color: "#7F543D" }}>
                  Soukya has been featured in prestigious luxury travel and wellness publications worldwide, 
                  showcasing our commitment to holistic healing and exceptional guest experiences.
                </p>
              </div>
              )}
            </div>
          </div>

          {/* Insurance & Payment Information */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Insurance & Payment Info
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
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
                    <h3 className="text-xl font-bold text-primary">
                      Insurance Coverage
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Serious medical conditions covered by Indian Insurance providers</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Cashless treatment facility available for eligible conditions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Support with major insurance providers in India</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>International patients can check with their insurance providers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Pill className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      Payment Options
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Payment plans available for eligible patients</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Financial assistance programs for qualifying cases</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Multiple payment methods accepted (cards, bank transfer, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm" style={{ color: "#7F543D" }}>
                      <span className="text-primary mt-1">✓</span>
                      <span>Transparent pricing with no hidden costs</span>
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
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      For International Patients
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                      International patients are advised to check with their respective insurance providers regarding coverage for holistic and alternative medicine treatments. Our administrative team can provide necessary documentation and medical reports to support your insurance claims.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <MessageCircleHeart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg mx-auto px-4" style={{ color: "#7F543D" }}>
                Find answers to common questions about treatments, facilities, and your healing journey
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 max-w-4xl mx-auto">
              <AccordionItem value="faq1" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-primary text-left">
                    What is the minimum duration of treatment at SOUKYA?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    The minimum recommended stay is 7 days for wellness programs and 14-21 days for medical treatment programs. Duration depends on individual health conditions and treatment requirements. Our doctors will recommend the optimal duration during your initial consultation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq2" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-primary text-left">
                    Do I need to bring my medical records?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Yes, bringing previous medical reports, prescriptions, and test results helps doctors understand your health history and design better treatment protocols. This information is valuable for creating a more personalized and effective treatment plan.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq3" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-primary text-left">
                    Is SOUKYA suitable for elderly patients?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Absolutely. SOUKYA specializes in treating elderly patients with age-related conditions, providing gentle therapies and personalized care suitable for senior citizens. Our facilities are designed to be accessible and comfortable for patients of all ages.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq4" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-primary text-left">
                    Can I continue my regular medications during treatment?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Yes, you can continue necessary medications. However, as treatment progresses, doctors may gradually reduce or modify medications based on health improvements. All changes are made under professional medical supervision for your safety.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq5" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-primary text-left">
                    What should I pack for my stay at SOUKYA?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Comfortable cotton clothing, personal toiletries, any regular medications, medical records, and an open mind for healing. SOUKYA provides treatment gowns and towels. We recommend bringing loose, comfortable clothes suitable for yoga and therapy sessions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq6" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-primary text-left">
                    Is vegetarian food mandatory?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Yes, SOUKYA serves only vegetarian organic meals as part of the therapeutic protocol. The cuisine is delicious, nutritious, and prepared according to Ayurvedic principles. Our chefs create varied and flavorful dishes that support your healing journey.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq7" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-primary text-left">
                    Can family members stay with patients?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Yes, family members can stay in separate accommodations or companion rooms. This is encouraged, especially for elderly patients or those requiring extra support. Please inform us during booking so we can arrange appropriate accommodation.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq8" className="border-2 border-primary/20 rounded-lg px-6 data-[state=open]:border-primary transition-colors bg-white">
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="text-lg font-semibold text-primary text-left">
                    Is WiFi and mobile connectivity available?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 bg-white">
                  <p className="text-sm leading-relaxed" style={{ color: "#7F543D" }}>
                    Limited WiFi is available, but SOUKYA encourages digital detox as part of the healing process. The peaceful environment away from technology aids in stress reduction and helps you focus on your wellness journey. Emergency communications are always supported.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Information Card */
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
                        SOUKYA - Dr. Mathai's International Holistic Health Centre<br />
                        Soukya Road, Samethanahalli<br />
                        Whitefield, Bangalore - 560067<br />
                        Karnataka, INDIA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Phone</h4>
                      <p style={{ color: "#7F543D" }}>
                        +91 80 2801 7000 to 08<br />
                        Mobile: +91 98453 74400
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Email</h4>
                      <p style={{ color: "#7F543D" }}>
                        info@soukya.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Website</h4>
                      <a 
                        href="https://www.soukya.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.soukya.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Distance from Airport</h4>
                      <p style={{ color: "#7F543D" }}>
                        30 minutes from Kempegowda International Airport (25 km)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Transportation Services</h4>
                <p style={{ color: "#7F543D" }}>
                  Pick-up and drop services available on request for international and domestic patients 
                  arriving at Bangalore Airport or Railway Station.
                </p>
              </div>
            </CardContent>
          </Card>
          }
          {/* CTA Card */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
                Begin Your Holistic Healing Journey at SOUKYA
              </h3>
              <p className="mb-6 text-sm md:text-base lg:text-lg opacity-90 max-w-3xl mx-auto px-2">
                Experience world-class integrated holistic healthcare at India's premier 
                NABH-accredited AYUSH hospital, set in a serene 30-acre organic farm.
              </p>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold text-xs md:text-sm px-4 py-5 md:px-8 md:py-6 w-full md:w-auto max-w-sm"
                  asChild
                >
                  <Link to="/contact" className="flex items-center justify-center">
                    <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Book Your Consultation Today
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 backdrop-blur-lg z-50 overflow-y-auto" style={{ backgroundColor: 'rgba(237, 232, 208, 0.95)' }}>
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 sticky top-0 backdrop-blur-md py-4 z-10" style={{ backgroundColor: 'rgba(237, 232, 208, 0.9)' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                SOUKYA Gallery ({images.length} Photos)
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowFullGallery(false)}
                className="text-primary hover:bg-primary/10 h-10 w-10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            {/* Masonry Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setLightboxImage(idx);
                    setLightboxOpen(true);
                  }}
                  className="relative group cursor-pointer rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                  <img
                    src={img}
                    alt={`SOUKYA ${idx + 1}`}
                    className="w-full h-full object-cover aspect-square"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FileSearch className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Zoomed Images with Beige Blur Effect */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-lg z-[60] flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }}
          onClick={() => setLightboxOpen(false)}
        >
          {/* Header with Title */}
          <div className="absolute top-0 left-0 right-0 py-6 px-4 text-center z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              SOUKYA Health Center
            </h2>
          </div>

          {/* Desktop: Arrow Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Image Container with Close Button */}
          <div 
            className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center mt-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={images[lightboxImage]}
                alt={`SOUKYA ${lightboxImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              
              {/* Close Button - Inside Image at Top Right */}
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-3 right-3 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg"
                aria-label="Close"
              >
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                {lightboxImage + 1} / {images.length}
              </div>

              {/* Mobile: Previous/Next positioned under image */}
              <div className="md:hidden absolute -bottom-16 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Previous
                </button>
                <button
                  onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
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
              setLightboxImage((prev) => (prev + 1) % images.length);
            }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:bg-primary/10 p-3 rounded-full transition-all z-10 bg-white/80 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          
        </div>
      )}

      {/* Facilities Lightbox Modal */}
      {facilityLightboxOpen && (
        <div
          className="fixed inset-0 backdrop-blur-lg z-[60] flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(237, 232, 208, 0.85)' }}
          onClick={() => setFacilityLightboxOpen(false)}
        >
          {/* Header with Title */}
          <div className="absolute top-0 left-0 right-0 py-6 px-4 text-center z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              SOUKYA Facilities & Amenities
            </h2>
          </div>

          {/* Desktop: Arrow Previous (Facilities) */}
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

          {/* Image Container with Close Button */}
          <div 
            className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center mt-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={facilityImages[facilityLightboxImage]}
                alt={`SOUKYA Facility ${facilityLightboxImage + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setFacilityLightboxOpen(false)}
                className="absolute top-3 right-3 text-primary hover:text-primary/80 bg-white/90 hover:bg-white p-2 rounded-full transition-all z-20 shadow-lg"
                aria-label="Close"
              >
                <svg className="h-6 w-6 md:h-7 md:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/90 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                {facilityLightboxImage + 1} / {facilityImages.length}
              </div>

              {/* Mobile: Previous/Next positioned under image (Facilities) */}
              <div className="md:hidden absolute -bottom-12 left-4 right-4 flex items-center justify-between">
                <button
                  onClick={() => setFacilityLightboxImage((prev) => (prev - 1 + facilityImages.length) % facilityImages.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Previous
                </button>
                <button
                  onClick={() => setFacilityLightboxImage((prev) => (prev + 1) % facilityImages.length)}
                  className="bg-white text-primary px-4 py-2 rounded-full shadow-md"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Desktop: Arrow Next (Facilities) */}
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
  );
}
