import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Award, Sparkles, Globe2, Star, Users2, ChevronRight, Calendar } from "lucide-react";

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
      <div className="relative w-full px-5 md:px-8 lg:px-12 pt-16 md:pt-28 pb-10 flex-1 flex flex-col justify-center z-10 max-w-[1600px] mx-auto">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Authentic Ayurveda Meets <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EDE8D0] via-[#F0E68C] to-white font-extrabold">
                World-Class Healthcare
              </span>
            </h1>

            {/* Sub-headline Targeting UK, USA, Europe Clients */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-8 font-medium">
              At My Vaidyam, we offer the full spectrum of traditional Ayurveda treatments — tailored to your unique constitution, your health goals, and your life. Whether you are travelling from the UK, the United States, or anywhere across Europe, our team ensures your entire experience is guided, safe, and deeply restorative — from the moment you reach out to the moment you return home, renewed.
            </p>

            {/* CTA Container with Glassmorphism background */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 max-w-xl shadow-2xl">
              <div className="w-full">
                <Button
                  onClick={onQuoteClick}
                  size="lg"
                  className="w-full bg-white text-primary hover:bg-[#EDE8D0] hover:text-primary tracking-wide font-bold text-lg py-7 rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-3 group"
                >
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Get Free Consultation</span>
                </Button>
              </div>

              {/* Reassurance Line */}
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 sm:flex sm:flex-wrap items-center sm:justify-between gap-x-2 gap-y-3 sm:gap-y-2 text-[11px] sm:text-[13px] font-medium text-white/90">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" /> Medical Visa Support
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> End-to-End Concierge
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> Specialised Care
                </span>
                {/* 4th Tag: Only visible on mobile */}
                <span className="flex sm:hidden items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> Verified Centers
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Global Reach Micro-Counters */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col justify-center lg:items-end gap-3 sm:gap-4 mt-6 lg:mt-0">
            
            {/* Metric Card 1 */}
            <div className="flex flex-col items-center justify-center gap-1.5 p-3 lg:w-32 lg:h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/15 transition-all shadow-xl group">
              <div className="p-2 rounded-xl bg-[#F0E68C]/20 group-hover:scale-110 transition-transform">
                <Globe2 className="h-5 w-5 lg:h-8 lg:w-8 text-[#F0E68C]" />
              </div>
              <div className="text-center">
                <span className="text-sm lg:text-2xl font-black block leading-none text-white tracking-tight">40+</span>
                <span className="text-[9px] lg:text-xs text-white/80 block mt-1 font-bold uppercase tracking-wider">Countries</span>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="flex flex-col items-center justify-center gap-1.5 p-3 lg:w-32 lg:h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/15 transition-all shadow-xl group">
              <div className="p-2 rounded-xl bg-[#F0E68C]/20 group-hover:scale-110 transition-transform">
                <Star className="h-5 w-5 lg:h-8 lg:w-8 text-[#F0E68C]" />
              </div>
              <div className="text-center">
                <span className="text-sm lg:text-2xl font-black block leading-none text-white tracking-tight">4.8/5</span>
                <span className="text-[9px] lg:text-xs text-white/80 block mt-1 font-bold uppercase tracking-wider">Rating</span>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="flex flex-col items-center justify-center gap-1.5 p-3 lg:w-32 lg:h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/15 transition-all shadow-xl group">
              <div className="p-2 rounded-xl bg-[#F0E68C]/20 group-hover:scale-110 transition-transform">
                <Users2 className="h-5 w-5 lg:h-8 lg:w-8 text-[#F0E68C]" />
              </div>
              <div className="text-center">
                <span className="text-sm lg:text-2xl font-black block leading-none text-white tracking-tight">100%</span>
                <span className="text-[9px] lg:text-xs text-white/80 block mt-1 font-bold uppercase tracking-wider">Care</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Embedded Global Trust Badges Ticker at bottom of Hero */}
      <div className="relative z-10 bg-primary/60 backdrop-blur-md py-5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-6">
          
          <div className="flex-shrink-0 border-r border-white/20 pr-6 hidden lg:block">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#F0E68C] whitespace-nowrap">
              Clinical Excellence:
            </span>
          </div>

          {/* Infinite Scrolling Ticker Container */}
          <div className="relative flex-1 overflow-hidden">
            <div className="flex gap-8 animate-infinite-scroll w-max">
              {[
                { icon: ShieldCheck, text: "NABH Accredited Centers", color: "text-green-400" },
                { icon: Award, text: "AYUSH Certified Vaidyas", color: "text-[#F0E68C]" },
                { icon: Sparkles, text: "International Hygiene Standards", color: "text-teal-300" },
                { icon: Users2, text: "4th Generation Ayurvedic Lineage", color: "text-blue-300" },
                { icon: Globe2, text: "24/7 Dedicated Concierge Support", color: "text-orange-300" },
                { icon: ShieldCheck, text: "Pure Ayurvedic Formulations", color: "text-green-300" },
                { icon: Award, text: "English-Speaking Medical Staff", color: "text-yellow-200" },
                { icon: Sparkles, text: "Personalized Treatment Protocols", color: "text-purple-300" },
                { icon: Globe2, text: "Safe & Secure International Travel", color: "text-sky-300" },
                { icon: ShieldCheck, text: "Luxury Wellness Retreats", color: "text-pink-300" }
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5 backdrop-blur-sm whitespace-nowrap group hover:bg-white/10 transition-colors">
                  <tag.icon className={`h-4 w-4 ${tag.color} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                  <span className="text-xs sm:text-sm font-bold text-white/90">{tag.text}</span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { icon: ShieldCheck, text: "NABH Accredited Centers", color: "text-green-400" },
                { icon: Award, text: "AYUSH Certified Vaidyas", color: "text-[#F0E68C]" },
                { icon: Sparkles, text: "International Hygiene Standards", color: "text-teal-300" },
                { icon: Users2, text: "4th Generation Ayurvedic Lineage", color: "text-blue-300" },
                { icon: Globe2, text: "24/7 Dedicated Concierge Support", color: "text-orange-300" },
                { icon: ShieldCheck, text: "Pure Ayurvedic Formulations", color: "text-green-300" },
                { icon: Award, text: "English-Speaking Medical Staff", color: "text-yellow-200" },
                { icon: Sparkles, text: "Personalized Treatment Protocols", color: "text-purple-300" },
                { icon: Globe2, text: "Safe & Secure International Travel", color: "text-sky-300" },
                { icon: ShieldCheck, text: "Luxury Wellness Retreats", color: "text-pink-300" }
              ].map((tag, i) => (
                <div key={`dup-${i}`} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/5 backdrop-blur-sm whitespace-nowrap group hover:bg-white/10 transition-colors">
                  <tag.icon className={`h-4 w-4 ${tag.color} flex-shrink-0 group-hover:scale-110 transition-transform`} />
                  <span className="text-xs sm:text-sm font-bold text-white/90">{tag.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

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

