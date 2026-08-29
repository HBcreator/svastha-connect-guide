import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";

const holisticPrograms = [
  {
    name: "Touch & Bodywork Therapies",
    desc: "Explore physical manipulation and massage therapies like Abhyanga, Marma Therapy, and deep tissue treatments designed to relieve tension, improve circulation, and promote deep relaxation.",
    image: "/Services-images/touch_bodywork_main.png",
    link: "/holistic-healing/touch-and-bodywork-therapies-in-india",
  },
  {
    name: "Energy & Spiritual Healing",
    desc: "Restore balance to your body's vital energy fields with subtle therapies like Reiki, Pranic Healing, and Chakra balancing for deep emotional and spiritual harmony.",
    image: "/Services-images/energy_healing_main.png",
    link: "/holistic-healing/energy-and-spiritual-healing-treatments-in-india",
  },
  {
    name: "Mind-Body Interventions",
    desc: "Enhance the mind's positive impact on the physical body through therapeutic Yoga, Meditation, Hypnotherapy, and guided mindfulness practices.",
    image: "/Services-images/mind_body_main.png",
    link: "/holistic-healing/mind-body-interventions-therapies-in-india",
  },
  {
    name: "Biological & Natural Therapies",
    desc: "Heal naturally using plant-derived medicines, herbal supplements, clinical dietary modifications, and biological nutritional interventions.",
    image: "/program-images/biological-consultation.png",
    link: "/holistic-healing/biological-and-natural-plant-based-therapies-in-india",
  },
  {
    name: "Alternative Medical Systems",
    desc: "Discover comprehensive holistic medical frameworks including Homeopathy, Naturopathy, Traditional Chinese Medicine (TCM), and other global traditional systems.",
    image: "/Services-images/specialized_main_india.png",
    link: "/holistic-healing/specialized-alternative-medical-systems-in-india",
  },
  {
    name: "Ayurvedic Healing",
    desc: "Experience the ancient Indian medical system focused on balancing the three Doshas through Panchakarma detoxification, diet, and clinical herbal interventions.",
    image: "/Services-images/Ayurveda.png",
    link: "/holistic-healing/ayurveda-ancient-wisdom-for-modern-wellness-in-india",
  }
];

export default function HomeHolisticHealing() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const totalSlides = holisticPrograms.length;

  const goPrev = () => {
    setMobileSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setExpandedCard(null);
  };
  const goNext = () => {
    setMobileSlide((prev) => (prev + 1) % totalSlides);
    setExpandedCard(null);
  };

  const currentCard = holisticPrograms[mobileSlide];

  return (
    <section className="py-6 sm:py-12 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        {/* Header */}
        <div className="text-center space-y-2 md:space-y-3 px-4 mb-8 sm:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#335765]">
            Explore Holistic Healing Programs
          </h2>
          <p className="text-sm md:text-base text-[#7F543D] max-w-2xl mx-auto">
            Discover a complete spectrum of natural healing therapies designed to restore balance to your mind, body, and spirit.
          </p>
        </div>

        {/* ── MOBILE: 1-card carousel with arrows ── */}
        <div className="md:hidden relative px-2">
          {/* Arrows */}
          <div className="absolute left-0 z-20 top-[110px] -translate-y-1/2">
            <button
              onClick={goPrev}
              className="bg-white/90 hover:bg-white text-[#335765] p-2 rounded-full shadow-lg transition-all border border-[#335765]/20"
              aria-label="Previous program"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute right-0 z-20 top-[110px] -translate-y-1/2">
            <button
              onClick={goNext}
              className="bg-white/90 hover:bg-white text-[#335765] p-2 rounded-full shadow-lg transition-all border border-[#335765]/20"
              aria-label="Next program"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Single Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
            <div className="relative aspect-[16/9] overflow-hidden shrink-0">
              <img
                src={currentCard.image}
                alt={currentCard.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="pt-4 px-4 pb-4 flex flex-col flex-grow">
              <h3 className="text-[17px] font-bold text-[#335765] leading-tight mb-2">
                {currentCard.name}
              </h3>

              <div className="relative mb-4 flex-grow text-left mt-2">
                <p className={`text-[13px] text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCard === currentCard.name ? "" : "line-clamp-3"}`}>
                  {currentCard.desc}
                </p>
                <button
                  onClick={() => setExpandedCard(prev => prev === currentCard.name ? null : currentCard.name)}
                  className="mt-1.5 text-[11px] font-bold text-[#335765] hover:underline block"
                >
                  {expandedCard === currentCard.name ? "Read Less" : "Read More"}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                <Link
                  to={currentCard.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border border-[#335765]/30 text-[#335765] active:bg-[#335765] active:text-white font-semibold h-10 rounded-lg transition-all duration-300 text-xs flex items-center justify-center whitespace-nowrap"
                >
                  View Details
                </Link>
                <Button
                  className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-semibold h-10 rounded-lg shadow-sm text-xs"
                  onClick={() => setQuoteModalOpen(true)}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-5">
            {holisticPrograms.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => { setMobileSlide(dotIdx); setExpandedCard(null); }}
                className={`h-1.5 rounded-full transition-all ${dotIdx === mobileSlide ? "w-6 bg-[#335765]" : "w-1.5 bg-[#C7D1C9]"}`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 3-column grid (all 6 cards visible) ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {holisticPrograms.map((prog, idx) => (
            <div key={idx} className="flex h-full w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-xl transition-all duration-500 flex flex-col w-full text-left">
                <div className="relative aspect-[16/9] overflow-hidden shrink-0">
                  <img
                    src={prog.image}
                    alt={prog.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                <div className="pt-5 px-5 pb-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#335765] leading-tight mb-3">
                    {prog.name}
                  </h3>

                  <div className="relative mb-5 flex-grow text-left">
                    <p className={`text-sm text-[#7F543D] leading-relaxed transition-all duration-300 ${expandedCard === prog.name + idx ? "" : "line-clamp-3"}`}>
                      {prog.desc}
                    </p>
                    <button
                      onClick={() => setExpandedCard(prev => prev === prog.name + idx ? null : prog.name + idx)}
                      className="mt-2 text-xs font-bold text-[#335765] hover:underline block"
                    >
                      {expandedCard === prog.name + idx ? "Read Less" : "Read More"}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link
                      to={prog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white border border-[#335765]/30 text-[#335765] hover:bg-[#335765] hover:text-white font-semibold h-11 rounded-lg transition-all duration-300 text-sm flex items-center justify-center whitespace-nowrap"
                    >
                      View Details
                    </Link>
                    <Button
                      className="w-full bg-[#335765] hover:bg-[#25464c] text-white font-semibold h-11 rounded-lg shadow-sm text-sm"
                      onClick={() => setQuoteModalOpen(true)}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </section>
  );
}
