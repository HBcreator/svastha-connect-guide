import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MarkdownContent from "@/components/MarkdownContent";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, Images, Video } from "lucide-react";

export default function AgniAyurvedicVillage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

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
    "https://res.cloudinary.com/dl9mofrcz/video/upload/v1765267718/Agni_Ayurvedic_Village-video-01_lq9bpn.mp4",
    "https://res.cloudinary.com/dl9mofrcz/video/upload/v1765267635/Agni_Ayurvedic_Village-video-02_ghm3sh.mp4",
    "https://res.cloudinary.com/dl9mofrcz/video/upload/v1765267671/Agni_Ayurvedic_Village-video-03_rvtkbu.mp4",
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
                  <span className="opacity-90">(190+ reviews)</span>
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
                    <div className="grid grid-cols-3 items-center mb-4">
                      <div>
                        <Button onClick={() => setShowFullGallery(false)} className="bg-white text-primary hover:bg-white/90">
                          Back
                        </Button>
                      </div>
                      <div className="text-center text-primary text-2xl font-bold leading-relaxed">
                        <span className="hidden md:inline">Agni Ayurvedic Village Resort</span>
                        <span className="md:hidden">Agni Ayurvedic Village<br/>Resort</span>
                      </div>
                      <div></div>
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
                      <span className="hidden md:inline">Agni Ayurvedic Village Resort</span>
                      <span className="md:hidden">Agni Ayurvedic Village<br/>Resort</span>
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
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
