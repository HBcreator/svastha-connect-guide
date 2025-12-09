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

export default function SomatheeramCenter() {
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
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-01.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-02.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-03.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-04.jpg",
    "/Center Images/somatheeram/Facilities & Amenities/Somatheeram-05.jpg",
  ];

  // All images from Somatheeram folder
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
  ];

  // Load content
  useEffect(() => {
    fetch("/content/Top Centers/somatheeram center.txt")
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) =>
        console.error("Error loading Somatheeram center content:", err)
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

  return (
    <div>
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Somatheeram Ayurvedic Health Resort</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        {/* Add more sections as needed */}
      </div>
      <Footer />
    </div>
  );
}