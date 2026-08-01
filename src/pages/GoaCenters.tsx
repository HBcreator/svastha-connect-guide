import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Star, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prioritizeTopCenters } from "@/lib/top-centers";

const GoaCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedCardSlug, setExpandedCardSlug] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const centers = [
    {
      name: "Mercure Goa Devaaya Resort – Ayurveda Wellness Center",
      city: "Divar Island, Goa, India",
      description:
        "The Ayurveda Wellness Center at Mercure Goa Devaaya Resort is a distinguished sanctuary on Divar Island, blending ancient Vedic wisdom with tranquil island living. Perched along the serene backwaters, the center offers an immersive healing experience where classical Panchakarma and rejuvenation therapies are practiced with medical precision. Guests receive highly personalized care guided by experienced Ayurvedic doctors and therapists, focusing on deep detoxification and lifestyle disorder management.",
      rating: 4.9,
      reviews: 1450,
      priceRange: "$$$$",
      image: "/Center Images/Mercure Goa Devaaya Resort/Thumb.jpg",
      slug: "mercure-goa-devaaya-retreat-goa-india",
    },
    {
      name: "Ashiyana Yoga Retreat & Ayurveda",
      city: "Ashvem, North Goa, India",
      description:
        "One of Goa's most established eco-wellness Ayurveda retreats, Ashiyana offers residential detox plans, daily yoga, meditation, sattvic food, and long-stay healing experiences in a lush beach garden setting. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.8,
      reviews: 850,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/images/10.jpg",
      slug: "ashiyana-yoga-retreat-village-goa-india",
    },
    {
      name: "Nalanda Retreat Goa",
      city: "Mandrem, North Goa, India",
      description:
        "A renowned beachfront yoga and wellness retreat with Ayurveda consultations, Panchakarma therapies, longevity spa experiences, and transformational programs designed for rejuvenation and mindful living. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.7,
      reviews: 920,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/images/9.jpg",
      slug: "nalanda-retreat-goa-india",
    },
    {
      name: "Soul Vacation Resort & Wellness Center",
      city: "Colva Beach, South Goa, India",
      description:
        "Immerse yourself in a rejuvenating escape at Soul Vacation, a boutique wellness resort near South Goa beaches. It blends serene coastal living with authentic Ayurveda, stress-relief therapies, and personalized wellness plans for deep rejuvenation. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.8,
      reviews: 1200,
      priceRange: "$$$",
      image: "/Center Images/Soul Vacation Resort and Spa/thumb.jpg",
      slug: "soul-vacation-resort-spa-goa-india",
    },
    {
      name: "SWAN Yoga Retreat & Ayurveda",
      city: "Assagao, North Goa, India",
      description:
        "Experience authentic yogic living at SWAN Yoga Retreat & Ayurveda, an ashram-style healing space in North Goa focused on classical Yoga, Ayurveda therapies, detox, meditation, and long-term lifestyle balance. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.7,
      reviews: 650,
      priceRange: "$$$",
      image: "/Center Images/SWAN Yoga Retreat/Thumb.jpg",
      slug: "swan-yoga-retreat-goa-india",
    },
    {
      name: "Veda5 Wellness Retreat - Arambol",
      city: "Arambol, North Goa, India",
      description:
        "A luxury Ayurveda and Yoga retreat spread across lush coconut groves near Arambol Beach, offering Vaidya consultations, Panchakarma detox plans, daily yoga, meditation, and sattvic nutrition. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.8,
      reviews: 130,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/images/7.jpg",
      slug: "veda5-wellness-retreat-hospital-goa-india",
      // detailsDisabled: "veda5-wellness-retreat-hospital-goa-india",
    },
    {
      name: "Health and Ayurveda (ANHC Goa)",
      city: "Calangute, North Goa, India",
      description:
        "Established in 2001, ANHC is one of Goa's most trusted authentic Ayurveda institutions, known for Kerala-standard Panchakarma, yoga, detox, rejuvenation, and therapeutic healing programs in a serene retreat setting. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.9,
      reviews: 180,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/1.png",
      slug: "ayurvedic-natural-health-center-hospital-goa-india",
    },
    {
      name: "Ayur Touch Ayurvedic Healthcare",
      city: "Candolim, North Goa, India",
      description:
        "A popular and affordable Kerala Ayurveda clinic on Candolim Beach Road, Ayur Touch is recognized for authentic Abhyanga massage, Shirodhara, and Panchakarma therapies focused on stress relief and full-body wellness. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.6,
      reviews: 330,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/2.jpg",
      slug: "ayur-touch-ayurvedic-healthcare-hospital-goa-india",
    },
    {
      name: "Yashraj Ayurveda Clinic",
      city: "Calangute, North Goa, India",
      description:
        "A trusted Panchakarma clinic led by Dr. Raju Bhusnar, Yashraj provides consultation-led Ayurveda with detox, Marma, Shirodhara, and condition-specific healing plans for digestive, hormonal, and lifestyle concerns. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.7,
      reviews: 230,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/3.jpg",
      slug: "yashraj-ayurveda-clinic-hospital-goa-india",
    },
    {
      name: "SreeShanti Wellness",
      city: "Nerul, North Goa, India",
      description:
        "An authentic Panchakarma clinic led by Dr. Jijith C. Ravindran, SreeShanti blends classical Kerala therapies with focused care for skin, weight, PCOD, arthritis, digestive, and chronic lifestyle disorders. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.9,
      reviews: 150,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/5.PNG",
      slug: "shree-shanti-wellness-hospital-goa-india",
    },
    {
      name: "Natural Touch Ayurveda",
      city: "Canacona, South Goa, India",
      description:
        "Rooted in Kerala traditional Ayurveda since 1960, Natural Touch offers beachside Abhyanga, Shirodhara, herbal steam therapies, and Panchakarma in a calm natural setting ideal for long-stay wellness seekers. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.9,
      reviews: 130,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/images/6.jpg",
      slug: "natural-touch-ayurveda-hospital-goa-india",
    },
    {
      name: "KARE Health - Goa",
      city: "Colva Beach, South Goa, India",
      description:
        "A holistic Ayurveda and Yoga retreat in South Goa offering Panchakarma cleanses, dosha consultations, stress-reset programs, Iyengar yoga, and resort-style comfort near Colva Beach. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.9,
      reviews: 680,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/images/14.jpg",
      slug: "kare-health-hospital-goa-india",
    },
    {
      name: "Tattvam on the Beach",
      city: "Arambol, North Goa, India",
      description:
        "A beachside Ayurveda and Yoga wellness retreat featuring Panchakarma programs, Abhyangam, Shirodhara, detox plans, vegetarian meals, and daily yoga for restorative healing in natural surroundings. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 3.9,
      reviews: 450,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Tattvam on the Beach/image 1.webp",
      slug: "tattvam-on-the-beach-resort-goa-india",
    },
    {
      name: "AyurGlow",
      city: "Anjuna, Goa, India",
      description:
        "AyurGlow is a trusted wellness center delivering authentic Panchakarma, rejuvenation therapies, and personalized Ayurveda consultations for stress, lifestyle disorders, skin concerns, and musculoskeletal issues. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.4,
      reviews: 380,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/AyurGlow/image 1.jpg",
      slug: "ayurglow-ayurveda-center-goa-india",
    },
    {
      name: "Goa Sian Spa",
      city: "Arambol, Goa, India",
      description:
        "A premium spa that blends traditional Ayurvedic Healing with curated Asian wellness therapies, offering customized sessions including Abhyanga, Shirodhara, Panchakarma, and holistic rejuvenation. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.3,
      reviews: 320,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Goa Sian Spa/image 1.jpg",
      slug: "goa-sian-spa-center-goa-india",
    },
    {
      name: "Dhara AyurGlow",
      city: "Mapusa, Goa, India",
      description:
        "An established Ayurvedic center known for personalized, root-cause-focused care using classical protocols, premium herbal medicines, and targeted therapies for chronic and lifestyle-related health concerns. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.4,
      reviews: 290,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Dhara AyurGlow/image 1.jpg",
      slug: "dhara-ayurglow-center-goa-india",
    },
    {
      name: "Lotus Goa",
      city: "Orlim, South Goa, India",
      description:
        "A residential nature cure retreat near Varca Beach where Ayurveda, Naturopathy and Yoga run together on one campus, offering classical Panchakarma, Pizhichil, localised Vasti therapies and guided yoga stays. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.3,
      reviews: 400,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Lotus Goa/image 1.jpg",
      slug: "lotus-goa-resort-goa-india",
    },
    {
      name: "Anvi Ayurved",
      city: "Morjim, Goa, India",
      description:
        "Anvi Ayurved offers holistic and organic therapies including Shirodhara, Nasya, Abhyanga, and traditional herbal massage by qualified practitioners, focused on complete mind-body wellness. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.4,
      reviews: 500,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Anvi Ayurved/image 1.jpg",
      slug: "anvi-ayurved-center-goa-india",
    },
    {
      name: "Ayushakti - Goa Branch",
      city: "Porvorim, Goa, India",
      description:
        "A branch of the renowned Ayushakti network, this center is known for Nadi Pariksha-based assessment and customized Panchakarma care for chronic diseases through evidence-backed Ayurveda protocols. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.6,
      reviews: 900,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/Ayushakti Goa Branch/image 1.jpg",
      slug: "ayushakti-goa-branch-center-goa-india",
    },
    {
      name: "Yoga Goa - Ayurveda Retreats",
      city: "Assagao, North Goa, India",
      description:
        "Structured Ayurveda and yoga retreats offering 3 to 21-day healing plans with therapeutic treatments, daily yoga, vegetarian nutrition, and rejuvenation programs in a serene environment. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.5,
      reviews: 550,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Yoga Goa Ayurveda Retreats/image 1.jpg",
      slug: "yoga-goa-ayurveda-retreats-resort-goa-india",
    },
    {
      name: "Ayurveda Goa",
      city: "Arpora & Mandrem, North Goa, India",
      description:
        "Trusted by domestic and international patients since 2008, Ayurveda Goa provides consultation-led Panchakarma and chronic disease management with a practical, non-commercial, patient-first approach. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.7,
      reviews: 1100,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Ayurveda Goa/image 1.jpg",
      slug: "ayurveda-goa-center-goa-india",
    },
    {
      name: "Sai Ayurveda Clinic",
      city: "Colva, Goa, India",
      description:
        "A patient-focused Ayurveda clinic offering personalized consultations, classical Panchakarma, and herbal care for digestive, joint, skin, stress, and lifestyle-related conditions. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.3,
      reviews: 280,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Sai Ayurveda Clinic/image 1.png",
      slug: "sai-ayurveda-clinic-center-goa-india",
    },
    {
      name: "Ayurveda Yoga Village",
      city: "Canacona, Goa, India",
      description:
        "A village-style residential retreat combining classical Ayurvedic therapies, Panchakarma detox, daily yoga, meditation, and sattvic diet for immersive lifestyle reset and long-term wellness. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.5,
      reviews: 480,
      priceRange: "$$$$",
      image: "/Anchor pages/Goa centers/Ayurveda Yoga Village/image 1.jpg",
      slug: "ayurveda-yoga-village-resort-goa-india",
    },
    {
      name: "Abhaya Ayurved",
      city: "Ponda, Goa, India",
      description:
        "A classical Ayurveda treatment center focused on authentic formulations and time-tested protocols for chronic joint, skin, respiratory, neurological, and lifestyle health concerns. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.4,
      reviews: 300,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Abhaya Ayurved/image 1.jpg",
      slug: "abhaya-ayurved-center-goa-india",
    },
    {
      name: "Ayurcare Goa",
      city: "Mandrem, Goa, India",
      description:
        "A comprehensive Ayurveda healthcare center known for personalized treatment plans, diet and lifestyle correction, and Panchakarma therapies for preventive and curative healing. Guests usually choose this center for structured consultation-led care, personalized therapy plans, and sustainable follow-up lifestyle guidance for long-term wellness outcomes.",
      rating: 4.5,
      reviews: 520,
      priceRange: "$$$",
      image: "/Anchor pages/Goa centers/Ayurcare Goa/image 1.jpg",
      slug: "ayurcare-goa-center-goa-india",
    },
  ];
  const orderedCenters = prioritizeTopCenters(centers);
  const totalPages = orderedCenters.length > 12 ? 2 : 1;
  const paginatedCenters = currentPage === 1 ? orderedCenters.slice(0, 12) : orderedCenters.slice(12);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-[#FCFBF7] border-b border-[#EDE8D0] py-3">
        <div className="container mx-auto px-4 max-w-7xl">
          <ol className="flex items-center flex-wrap gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em]">
            <li className="flex items-center gap-2">
              <Link to="/" className="text-primary/50 hover:text-primary transition-colors flex items-center gap-1">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-primary/20" />
            </li>
            <li className="text-primary/90 font-black truncate">
              Top 10 Ayurvedic Centers in Goa
            </li>
          </ol>
        </div>
      </nav>

      <section className="bg-[#2C4E5A] text-white pt-10 pb-7 md:pt-20 md:pb-8">
        <div className="max-w-7xl mx-auto px-5 md:px-10 max-[380px]:px-4">
          <div className="text-center">
            <h2 className="text-[17px] sm:text-lg md:text-4xl lg:text-5xl font-bold leading-[1.35] md:leading-[1.75] animate-fade-in px-2 md:px-4">
              <span className="block whitespace-nowrap">Top Ayurvedic Centers and Hospitals in</span>
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Goa and South West Region.</span>
            </h2>
            <p
              className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "200ms" }}
            >
              Discover Goa&apos;s finest Ayurvedic centers and wellness retreats.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-4 pb-6 md:pt-8 md:pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
          {paginatedCenters.map((center, index) => {
            const cardKey = center.slug ?? center.name;
            return (
            <div key={index} className="flex h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full h-full">
                <div className="relative aspect-[4/3] sm:aspect-[16/8.4] md:aspect-[16/8.2] overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                  <h3
                    title={center.name}
                    className={`text-lg font-bold text-[#2C4E5A] mb-2 leading-tight cursor-pointer ${expandedCardSlug === cardKey ? "" : "line-clamp-2 md:line-clamp-1 min-h-[2.5rem] md:min-h-[1.6rem]"}`}
                    onClick={() =>
                      setExpandedCardSlug((prev) =>
                        prev === cardKey ? null : cardKey,
                      )
                    }
                  >
                    {center.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-foreground/80">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold">{center.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-black text-foreground">{center.rating}</span>
                      <span className="text-xs font-semibold text-foreground/80">({center.reviews})</span>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed md:leading-[1.5] text-foreground/80 mb-1 md:mb-2 ${expandedCardSlug === cardKey ? "" : "line-clamp-6 md:line-clamp-6"}`}
                  >
                    {center.description}
                  </p>
                  <button
                    type="button"
                    className="inline-flex text-xs font-semibold text-primary hover:text-primary/80 w-fit mb-2"
                    onClick={() =>
                      setExpandedCardSlug((prev) =>
                        prev === cardKey ? null : cardKey,
                      )
                    }
                  >
                    {expandedCardSlug === cardKey ? "Read Less" : "Read More"}
                  </button>

                  <div className="mt-2 md:mt-auto pt-2 md:pt-3 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-2">
                      {!((center as { detailsDisabled?: boolean }).detailsDisabled) && center.slug ? (
                        <Button
                          asChild
                          variant="outline"
                          className="w-full font-bold py-4 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                        >
                          <Link to={`/centers/${center.slug}`} target="_blank" rel="noopener noreferrer">
                            View Details
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full font-bold py-4 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                          disabled={(center as { detailsDisabled?: boolean }).detailsDisabled}
                          onClick={() => {
                            // Fallback
                          }}
                        >
                          {(center as { detailsDisabled?: boolean }).detailsDisabled ? "Coming Soon" : "View Details"}
                        </Button>
                      )}
                      <Button
                        onClick={() => setQuoteModalOpen(true)}
                        className="w-full bg-[#2C4E5A] hover:bg-[#1e363e] text-white font-bold py-4 md:py-5 rounded-xl shadow-lg shadow-[#2C4E5A]/20 transition-all duration-300 hover:scale-[1.02] text-sm"
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              setExpandedCardSlug(null);
            }}
            className="rounded-xl"
          >
            Previous
          </Button>
          <span className="text-sm font-semibold text-foreground/80">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => {
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
              setExpandedCardSlug(null);
            }}
            className="rounded-xl"
          >
            Next
          </Button>
        </div>
      </section>

      <Footer />
      <QuoteModal open={quoteModalOpen} onOpenChange={setQuoteModalOpen} />
    </div>
  );
};

export default GoaCenters;


