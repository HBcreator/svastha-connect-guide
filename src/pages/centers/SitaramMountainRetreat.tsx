import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, Images, MapPin, Star, Video } from "lucide-react";

export default function SitaramMountainRetreat() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showVideoGallery, setShowVideoGallery] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

  useEffect(() => {
    fetch("/Center Images/Sitaram Mountain Retreat/Photo Gallery/Photo Gallery Links.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        setImages(lines);
      })
      .catch((err) => console.error("Error loading Sitaram photo links:", err));

    fetch("/Center Videos/Sitaram Mountain Retreat/Video Gallery Links.txt")
      .then((res) => res.text())
      .then((text) => {
        const lines = text
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        setVideos(lines);
      })
      .catch((err) => console.error("Error loading Sitaram video links:", err));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    if (!isAutoPlaying) return;
    if (showVideoGallery) return;

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, showVideoGallery]);

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
      if (e.key === "Escape") {
        setShowFullGallery(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showFullGallery]);

  const goToPrevious = () => {
    if (images.length === 0) return;
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(true);
  };

  const goToNext = () => {
    if (images.length === 0) return;
    setSelectedImage((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(true);
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Sitaram Mountain Retreat</h1>
                <p className="text-xl mb-4 opacity-90">Authentic Ayurvedic Wellness Sanctuary</p>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="text-lg">Munnar, Kerala</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">4.8</span>
                  <span className="opacity-90">(928+ reviews)</span>
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
                  variant={!showVideoGallery ? "default" : "secondary"}
                  size="lg"
                  onClick={() => setShowVideoGallery(false)}
                  className={`text-sm md:text-xl font-bold px-3 py-4 md:px-6 md:py-6 flex-1 md:flex-none transition-all duration-300 ease-in-out hover:scale-105 ${!showVideoGallery ? "scale-105 shadow-lg" : "bg-accent text-white hover:bg-accent/90"
                    }`}
                >
                  <Images className="h-4 w-4 md:h-6 md:w-6 mr-2" />
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
                {images.length > 0 && (
                  <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg w-full h-[200px] md:h-[500px] lg:h-[400px] group">
                    <img
                      src={images[selectedImage]}
                      alt={`Sitaram Mountain Retreat ${selectedImage + 1}`}
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

                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="absolute top-4 right-4 md:right-24 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-black/80 transition-all"
                    >
                      <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-400 animate-pulse" : "bg-red-400"}`} />
                      {isAutoPlaying ? "Auto" : "Manual"}
                    </button>
                  </div>
                )}

                {thumbnailImages.length > 0 && (
                  <div className="flex flex-col md:flex-row gap-3 md:gap-3">
                    <div
                      className="flex-none w-full md:w-[calc(66.666%-0.375rem)] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group relative"
                      onClick={() => {
                        setSelectedImage(0);
                        setLightboxImage(0);
                        setLightboxOpen(true);
                      }}
                    >
                      <img
                        src={thumbnailImages[0]}
                        alt="Sitaram Mountain Retreat 1"
                        className="w-full h-[220px] md:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex-none w-full md:w-[calc(33.333%-0.375rem)] grid grid-cols-2 gap-3">
                      {thumbnailImages.slice(1, 5).map((img, idx) => {
                        const actualIndex = images.indexOf(img);
                        const isLastImage = idx === 3;
                        return (
                          <div
                            key={img}
                            className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl group"
                            onClick={() => {
                              if (actualIndex >= 0) {
                                setSelectedImage(actualIndex);
                                setLightboxImage(actualIndex);
                              }
                              setLightboxOpen(true);
                            }}
                          >
                            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "100%" }}>
                              <img
                                src={img}
                                alt={`Sitaram Mountain Retreat ${idx + 2}`}
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
                        <div className="text-center text-primary font-bold leading-relaxed whitespace-nowrap text-lg md:text-2xl">Sitaram Mountain Retreat Gallery</div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((img, i) => (
                          <div
                            key={img}
                            className="relative w-full cursor-pointer"
                            style={{ paddingBottom: "75%" }}
                            onClick={() => {
                              setLightboxImage(i);
                              setLightboxOpen(true);
                            }}
                          >
                            <img src={img} alt={`Sitaram Mountain Retreat ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {lightboxOpen && (
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
                      disabled={images.length === 0}
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
                      disabled={images.length === 0}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    <div className="bg-background/90 rounded-xl shadow-2xl p-4 w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                      <div className="text-center text-primary text-2xl font-bold mb-3 leading-relaxed">Sitaram Mountain Retreat</div>
                      <div className="relative rounded-lg overflow-hidden w-full" style={{ paddingBottom: "56.25%" }}>
                        {images[lightboxImage] && (
                          <img
                            src={images[lightboxImage]}
                            alt={`Sitaram Mountain Retreat ${lightboxImage + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}
                        <button
                          onClick={() => setLightboxOpen(false)}
                          className="absolute top-3 right-3 bg-white/90 text-primary rounded-full h-8 w-8 flex items-center justify-center shadow"
                          aria-label="Close"
                        >
                          ✕
                        </button>
                        {images.length > 0 && (
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                            {lightboxImage + 1} / {images.length}
                          </div>
                        )}
                      </div>
                      <div className="flex md:hidden items-center justify-between mt-4">
                        <Button
                          onClick={() => setLightboxImage((prev) => (prev - 1 + images.length) % images.length)}
                          className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                          disabled={images.length === 0}
                        >
                          Previous
                        </Button>
                        <Button
                          onClick={() => setLightboxImage((prev) => (prev + 1) % images.length)}
                          className="bg-white text-primary hover:bg-white/90 rounded-full shadow px-5"
                          disabled={images.length === 0}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-black rounded-xl overflow-hidden shadow-lg">
                  {videos[selectedVideo] ? (
                    <video
                      key={videos[selectedVideo]}
                      src={videos[selectedVideo]}
                      controls
                      className="w-full aspect-video"
                      playsInline
                    />
                  ) : (
                    <div className="w-full aspect-video flex items-center justify-center text-white/70">No videos available</div>
                  )}
                </div>
                <div className="space-y-3">
                  {videos.map((v, idx) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVideo(idx)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${idx === selectedVideo
                        ? "border-primary bg-primary/5 shadow"
                        : "border-primary/20 bg-white hover:border-primary/40"
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          <Video className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-bold text-primary">Video {idx + 1}</div>
                          <div className="text-sm text-muted-foreground">Tap to play</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#7F543D" }}>
              Discover profound healing amidst the breathtaking hills of Munnar at Sitaram Mountain Retreat, a globally acclaimed sanctuary for authentic Ayurvedic wellness. Carrying forward a remarkable 104-year family legacy in traditional healing, this NABH-accredited retreat seamlessly blends classical Ayurvedic principles with the therapeutic power of pristine mountain nature.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
}
