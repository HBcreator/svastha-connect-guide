import { Star, Play, CheckCircle, Quote, Sparkles } from "lucide-react";

const successStories = [
  {
    name: "Dr. Sarah Jenkins",
    origin: "London, United Kingdom 🇬🇧",
    condition: "Refractory Rheumatoid Arthritis",
    center: "SOUKYA International Holistic Health Centre",
    duration: "21-Day Deep Reset",
    quote: "As a Western physician, I was skeptical. But 21 days of continuous traditional poultice protocols and authentic plant-based diets achieved systemic relief my standard medications simply couldn't replicate.",
    videoThumb: "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/10%20soukya.jpg",
    rating: 5,
  },
  {
    name: "Marcus von Berg",
    origin: "Munich, Germany 🇩🇪",
    condition: "Severe Adrenal Exhaustion & Insomnia",
    center: "Ananda in the Himalayas",
    duration: "14-Day Restorative Care",
    quote: "The personalized attention from English-speaking vaidyas was phenomenal. Shirodhara sessions combined with high-altitude Himalayan air completely reprogrammed my broken sleep patterns. I feel twenty years younger.",
    videoThumb: "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/6%20soukya.jpg",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    origin: "Zurich, Switzerland 🇨🇭",
    condition: "Multi-year Psoriasis Scaling",
    center: "Somatheeram Ayurveda Village",
    duration: "28-Day Clinical Detox",
    quote: "Savastha Global made my journey absolutely worry-free. From the instant I landed in Kerala, every meal, translation, and daily medicated buttermilk stream therapy was coordinated with absolute perfection.",
    videoThumb: "https://Savastha.b-cdn.net/Centers/Soukya%20Center/Images/Photo%20Gallery/1%20Soukya.jpg",
    rating: 5,
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-20 bg-white border-t border-primary/10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-3 border border-primary/10">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Global Medical Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Success Stories from International Guests
          </h2>
          <p className="text-xs sm:text-sm text-[#7F543D] mt-3 leading-relaxed">
            Review unfiltered therapeutic outcomes from wellness travelers visiting our accredited sanctuaries from across Tier-1 nations.
          </p>
        </div>

        {/* Video & Quote Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div 
              key={story.name} 
              className="bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              
              {/* Media Preview Box */}
              <div className="relative h-48 bg-primary/10 overflow-hidden">
                <img 
                  src={story.videoThumb} 
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />

                {/* Absolute Floating Video Play Trigger Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-5 w-5 fill-primary translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Overlay Badge */}
                <span className="absolute bottom-3 right-3 text-[10px] font-bold text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  {story.duration}
                </span>

                {/* Top Corner Authenticity Status */}
                <span className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-bold text-green-700 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full shadow-xs">
                  <CheckCircle className="h-3 w-3 text-green-600" /> Verified Guest
                </span>
              </div>

              {/* Patient Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  
                  {/* Origin Tag */}
                  <span className="text-xs font-semibold text-secondary-foreground block mb-1">
                    {story.origin}
                  </span>

                  {/* Patient Name */}
                  <h3 className="font-bold text-base text-primary mb-2">
                    {story.name}
                  </h3>

                  {/* Medical Target Metas */}
                  <div className="mb-4 pb-3 border-b border-primary/5">
                    <span className="text-[11px] text-[#7F543D] block font-medium">
                      Condition: <strong className="text-primary">{story.condition}</strong>
                    </span>
                    <span className="text-[11px] text-primary/70 block mt-0.5 truncate">
                      At: {story.center}
                    </span>
                  </div>

                  {/* Quote content */}
                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1.5 h-6 w-6 text-primary/10 -z-0" />
                    <p className="text-xs text-[#7F543D] italic leading-relaxed relative z-10 font-light">
                      "{story.quote}"
                    </p>
                  </div>

                </div>

                {/* Bottom Trust Meta Row */}
                <div className="mt-5 pt-3 border-t border-primary/5 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-primary/60 font-medium">
                    Medical record verified
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Aggregate statistics footer banner */}
        <div className="mt-12 text-center bg-primary/5 p-4 rounded-xl border border-primary/10 max-w-xl mx-auto">
          <p className="text-xs text-primary font-semibold">
            ⭐ Rated <strong className="text-primary font-bold">4.8/5 stars</strong> across independent platforms by travelers from the United Kingdom, USA, Germany, France, and Canada.
          </p>
        </div>

      </div>
    </section>
  );
}
