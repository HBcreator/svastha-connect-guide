import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, Sparkles, Globe2, Star, Users2, ChevronRight } from "lucide-react";

interface HeroSectionProps {
  onQuoteClick: () => void;
}

const heroImages = [
  "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/1%20Soukya.jpg",
  "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/2%20Soukya.jpg",
  "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/6%20soukya.jpg",
  "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/10%20soukya.jpg",
];

export default function HeroSection({ onQuoteClick }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background auto-slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4500); // Change image every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[650px] md:min-h-[720px] flex flex-col justify-between overflow-hidden bg-primary/10">
      {/* Dynamic Background Images with smooth cross-fade */}
      {heroImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ 
            backgroundImage: `url(${img})`,
            transitionProperty: "opacity, transform",
          }}
        >
          {/* Elegant Dark-Teal Gradient Overlay for optimal contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-black/30" />
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative container mx-auto px-4 pt-20 md:pt-28 pb-12 flex-1 flex flex-col justify-center z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Premium Messaging & CTA */}
          <div className="lg:col-span-8 text-white">
            
            {/* Top Brand Reassurance Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Sparkles className="h-4 w-4 text-[#F0E68C]" />
              <span className="text-xs md:text-sm font-medium tracking-wide text-white/95">
                India's Flagship Ayurvedic Sanctuaries
              </span>
            </div>

            {/* Results-Oriented High-Impact Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
              Authentic Ayurveda Meets <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDE8D0] via-[#F0E68C] to-white font-extrabold">
                World-Class Healthcare
              </span>
            </h1>

            {/* Sub-headline Targeting UK, USA, Europe Clients */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-8 font-light">
              Guiding wellness seekers from the UK, USA, and Europe to fully accredited Ayurvedic retreats. Experience authentic Panchakarma supervised by 4th-generation Vaidyas with end-to-end medical concierge support.
            </p>

            {/* CTA Container with Glassmorphism background */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-xl shadow-2xl">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <Button
                  onClick={onQuoteClick}
                  size="lg"
                  className="bg-white text-primary hover:bg-[#EDE8D0] hover:text-primary tracking-wide font-bold text-base py-6 sm:py-7 px-8 rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group"
                >
                  <span>Request Doctor Pre-Consultation</span>
                  <ChevronRight className="h-5 w-5 text-[#7F543D] group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="text-center sm:text-left sm:pl-2 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-[#F0E68C] block uppercase tracking-wider">
                    Zero Obligation
                  </span>
                  <span className="text-xs text-white/80 block mt-0.5">
                    Free evaluation by experts
                  </span>
                </div>
              </div>

              {/* Reassurance Line */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-white/75">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> Medical Visa Support
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> VIP Airport Transfers
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> English-Speaking Staff
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Global Reach Micro-Counters */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col justify-start sm:justify-center lg:justify-end gap-3 sm:gap-4 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            
            {/* Metric Card 1 */}
            <div className="flex-shrink-0 lg:flex-shrink flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-primary/40 backdrop-blur-sm border border-white/10 text-white min-w-[160px]">
              <div className="p-2 rounded-lg bg-white/10 flex-shrink-0">
                <Globe2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#F0E68C]" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold block leading-none text-white">40+</span>
                <span className="text-xs text-white/75 block mt-1">Countries Served</span>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="flex-shrink-0 lg:flex-shrink flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-primary/40 backdrop-blur-sm border border-white/10 text-white min-w-[160px]">
              <div className="p-2 rounded-lg bg-white/10 flex-shrink-0">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-[#F0E68C]" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold block leading-none text-white">4.8/5</span>
                <span className="text-xs text-white/75 block mt-1">Global Rating</span>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="flex-shrink-0 lg:flex-shrink flex items-center gap-3.5 p-3 sm:p-4 rounded-xl bg-primary/40 backdrop-blur-sm border border-white/10 text-white min-w-[160px]">
              <div className="p-2 rounded-lg bg-white/10 flex-shrink-0">
                <Users2 className="h-5 w-5 sm:h-6 sm:w-6 text-[#F0E68C]" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold block leading-none text-white">100%</span>
                <span className="text-xs text-white/75 block mt-1">Personalized Care</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Embedded Global Trust Badges Strip at bottom of Hero */}
      <div className="relative z-10 border-t border-white/10 bg-primary/60 backdrop-blur-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-white/90">
            
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F0E68C] mr-2 hidden lg:inline">
                Clinical Excellence:
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 sm:px-4 py-1.5 rounded-lg border border-white/5">
              <ShieldCheck className="h-5 w-5 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">NABH Accredited Centers</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 sm:px-4 py-1.5 rounded-lg border border-white/5">
              <Award className="h-5 w-5 text-[#F0E68C] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">AYUSH Certified Vaidyas</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-white/5 px-3 sm:px-4 py-1.5 rounded-lg border border-white/5">
              <Sparkles className="h-5 w-5 text-teal-300 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">International Hygiene Standards</span>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Slide indicators */}
      <div className="absolute right-4 bottom-24 hidden md:flex flex-col gap-2 z-10">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-2 transition-all rounded-full ${
              idx === currentImageIndex ? "h-8 bg-white" : "h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
