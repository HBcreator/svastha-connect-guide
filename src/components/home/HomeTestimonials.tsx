import { Star, Play, CheckCircle, Quote, Sparkles, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    center: "SOUKYA International Holistic Health Centre",
    location: "Bangalore, India",
    videoUrl: "https://www.youtube.com/embed/cfZxiAr13fQ",
    path: "/centers/bangalore/soukya",
    description: "Experience the profound impact of integrative Ayurvedic healing. This featured testimonial showcases a patient's journey to recovery at the world-renowned SOUKYA center.",
  },
  {
    center: "Somatheeram Ayurvedic Health Resort",
    location: "Kerala, India",
    videoUrl: "https://www.youtube.com/embed/H9f_crRvHtk",
    path: "/centers/kerala/somatheeram",
    description: "Discover clinical excellence by the sea. Watch how authentic Ayurvedic protocols at Somatheeram—the world's first Ayurvedic resort—transformed this guest's health.",
  },
  {
    center: "Kairali – The Ayurvedic Healing Village",
    location: "Kerala, India",
    videoUrl: "https://www.youtube.com/embed/4x01PtWfNnk",
    path: "/centers/kerala/kairali-ayurvedic-healing-village",
    description: "Discover the legacy of authentic Ayurvedic healing at Kairali. This testimonial highlights the traditional therapies and serene village atmosphere that facilitate deep recovery.",
  },
  {
    center: "Veda5 – Ayurveda, Yoga & Wellness Retreat",
    location: "Rishikesh, India",
    videoUrl: "https://www.youtube.com/embed/7GJKzML2vlE",
    path: "/centers/veda5",
    description: "Experience world-class wellness in the heart of the Himalayas. Veda5 combines luxury with authentic Vedic protocols, as shared by our international guests.",
  },
  {
    center: "Namaste Dwaar – Countryside Wellness Retreat",
    location: "Uttar Pradesh, India",
    videoUrl: "https://www.youtube.com/embed/INdUQ_P7xbg",
    path: "/centers/delhi/namastedwaar",
    description: "Escape to the countryside for a transformative healing experience. Namaste Dwaar offers a unique blend of heritage and holistic wellness that rejuvenates the spirit.",
  },
];

export default function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const featuredTestimonial = testimonials[currentIndex];

  return (
    <section className="pt-4 pb-4 bg-primary/[0.02]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-3 border border-primary/10">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Featured Clinical Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary tracking-tight mb-3">
            Testimonials of top Ayurvedic centers in India
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-[#7F543D] leading-relaxed">
            Witness the transformational power of authentic Ayurveda through the eyes of patients from across the globe.
          </p>
        </div>

        {/* Featured Video Layout with Navigation */}
        <div className="max-w-5xl mx-auto relative group">
          
          {/* Desktop Navigation Arrows (Hidden on Mobile) */}
          <button 
            onClick={prevTestimonial}
            className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary p-4 rounded-full shadow-2xl transition-all border border-primary/10 items-center justify-center"
            aria-label="Previous center"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button 
            onClick={nextTestimonial}
            className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary hover:text-white text-primary p-4 rounded-full shadow-2xl transition-all border border-primary/10 items-center justify-center"
            aria-label="Next center"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-primary/10 flex flex-col lg:flex-row items-stretch">
            
            {/* Large Video Section */}
            <div className="lg:w-2/3 relative aspect-video bg-black">
              <iframe
                key={featuredTestimonial.videoUrl}
                src={`${featuredTestimonial.videoUrl}?rel=0&modestbranding=1`}
                title="Featured Testimonial"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/3 p-5 md:p-10 flex flex-col justify-center bg-white text-center md:text-left">
              <div className="space-y-3 sm:space-y-5">
                <div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary/60 block mb-1">
                    Center {currentIndex + 1} of {testimonials.length}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-primary leading-tight">
                    {featuredTestimonial.center}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-primary/60 mt-1 flex items-center justify-center md:justify-start gap-1.5">
                    <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary/40" />
                    {featuredTestimonial.location}
                  </p>
                </div>

                <div className="w-10 sm:w-12 h-1 bg-primary/20 rounded-full mx-auto md:mx-0" />

                <p className="text-[13px] sm:text-base text-[#7F543D] leading-relaxed font-medium line-clamp-4 md:line-clamp-none">
                  {featuredTestimonial.description}
                </p>

                <div className="pt-1 flex flex-col gap-3 items-center md:items-start">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                    <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    Verified Patient Story
                  </span>

                  {/* Navigation & Action Controls for Mobile */}
                  <div className="flex items-center justify-between w-full md:w-auto gap-4">
                    {/* Mobile Left Arrow */}
                    <button 
                      onClick={prevTestimonial}
                      className="md:hidden p-3 rounded-full bg-primary text-white shadow-lg transition-all active:scale-95 border border-primary/20"
                      aria-label="Previous center"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    <Link to={featuredTestimonial.path} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none">
                      <Button variant="secondary" size="sm" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white shadow-md border-none transition-all font-bold px-4 py-3 h-auto text-[11px] sm:text-xs">
                        View Center
                        <ArrowRight className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </Link>

                    {/* Mobile Right Arrow */}
                    <button 
                      onClick={nextTestimonial}
                      className="md:hidden p-3 rounded-full bg-primary text-white shadow-lg transition-all active:scale-95 border border-primary/20"
                      aria-label="Next center"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation (Desktop Only) */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-primary" : "w-2 bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
