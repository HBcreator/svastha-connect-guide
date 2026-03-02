import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const KeralaCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedCardSlug, setExpandedCardSlug] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const centers = [
    {
      name: "Parathuvayalil Ayurveda Hospital",
      city: "Perumbavoor, Kochi, Kerala, India",
      description:
        "Parathuvayalil Ayurveda Hospital is a long-standing multispecialty center known for classical Kerala healing with a strong focus on bone, joint, and musculoskeletal care. The hospital combines traditional Marma and Kaya Chikitsa protocols with structured diagnostics, rehabilitation support, and physician-led treatment planning for both acute and chronic conditions.",
      rating: 4.7,
      reviews: 2200,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/1.webp",
      slug: undefined,
    },
    {
      name: "Arya Vaidya Sala (Kottakkal)",
      city: "Kottakkal, Malappuram, Kerala, India",
      description:
        "Arya Vaidya Sala (Kottakkal) is one of the most respected Ayurvedic institutions in India, recognized for preserving classical treatment traditions at large scale. Patients choose AVS for authentic Panchakarma, time-tested formulations, and experienced Vaidyas delivering disciplined, protocol-based care rooted in Kerala Ayurveda heritage.",
      rating: 4.8,
      reviews: 5000,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/2.jpg",
      slug: undefined,
    },
    {
      name: "Rasayana Ayurveda Centre",
      city: "Ezhakkaranadu, Ernakulam, Kerala, India",
      description:
        "Rasayana Ayurveda Centre offers a retreat-style clinical environment focused on detoxification, rejuvenation, and metabolic balance through authentic Ayurvedic therapies. Its programs are commonly selected for digestive disorders, lifestyle diseases, stress management, and long-stay recovery supported by yoga, mindful routines, and sattvic nutrition.",
      rating: 4.8,
      reviews: 1400,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/3.webp",
      slug: undefined,
    },
    {
      name: "Yantra Ayurvedic Resort",
      city: "Nattika Beach, Thrissur, Kerala, India",
      description:
        "Yantra Ayurvedic Resort is a coastal wellness destination designed for travelers who want Panchakarma and restorative therapies in a beachside setting. The center blends traditional doctor-guided treatment plans with yoga, meditation, and customizable rejuvenation programs, making it suitable for detox, stress reset, and preventive care.",
      rating: 4.0,
      reviews: 520,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/4.jpeg",
      slug: undefined,
    },
    {
      name: "Chakra Ayurvedic Resort",
      city: "Kovalam, Thiruvananthapuram, Kerala, India",
      description:
        "Chakra Ayurvedic Resort combines beachside comfort with structured Ayurveda programs for purification, rejuvenation, weight management, and musculoskeletal wellness. With in-house therapies, yoga support, and a calm resort environment, it is often chosen by wellness travelers seeking practical healing outcomes with a relaxed stay format.",
      rating: 4.2,
      reviews: 900,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/5.jpg",
      slug: undefined,
    },
    {
      name: "Deepanjali Ayur Retreat",
      city: "Chazhur, Thrissur, Kerala, India",
      description:
        "Deepanjali Ayur Retreat is a nature-focused healing campus built around intensive Ayurveda and yoga routines in a low-noise village setting. Its physician-supervised plans are tailored for detox, skin and metabolic concerns, pain conditions, and stress disorders, with daily therapeutic schedules and diet discipline aimed at long-term results.",
      rating: 4.9,
      reviews: 800,
      priceRange: "$$$",
      image: "/Anchor pages/Kerala centers/images/6.jpg",
      slug: undefined,
    },
    {
      name: "Somatheeram Ayurvedic Health Resort",
      city: "Kovalam, Kerala, India",
      description:
        "Set by the Arabian Sea in Kovalam, Somatheeram is known for destination-style Ayurveda with medically supervised Panchakarma, daily yoga, and individualized wellness planning. The retreat combines Kerala healing traditions with a calm coastal atmosphere, making it a strong option for detox, stress reset, and long-stay rejuvenation.",
      rating: 4.9,
      reviews: 320,
      priceRange: "$$$",
      image: "/Center Images/somatheeram/Somatheeram 01.jpg",
      slug: "kerala/somatheeram",
    },
    {
      name: "Veda5 – Best Ayurveda, Yoga & Wellness Retreat Center",
      city: "Kaipamangalam, Kerala, India",
      description:
        "Veda5 is one of India's most premium Ayurveda & Yoga wellness retreats - combining luxury, nature, and authentic healing. From Himalayan views in Rishikesh to a serene beachfront retreat in Kerala & Goa, Veda5 offers world-class Ayurveda, detox therapies, and holistic rejuvenation.",
      rating: 4.9,
      reviews: 420,
      priceRange: "$$$$",
      image: "/Center Images/veda5/veda5-1.jpg",
      slug: "veda5",
    },
    {
      name: "Kairali Heritage Resort – Riverside Ayurveda & Wellness Retreat",
      city: "Palakkad, Kerala, India",
      description:
        "Nestled on the banks of the Kattampally River in Kannur, Kairali Heritage offers a tranquil 11-acre riverside haven. Enjoy 24 air-conditioned river-facing cottages, authentic Ayurvedic & yoga therapies, nature-rich surroundings and personalized wellness programs close to the coast and Western Ghats.",
      rating: 4.8,
      reviews: 220,
      priceRange: "$$$",
      image: "/Center Images/Kairali Heritage/Kairali Heritage Center show image.png",
      slug: "kerala/kairali-heritage",
    },
    {
      name: "Agni Ayurvedic Village Resort",
      city: "Kovalam, Kerala, India",
      description:
        "A tranquil wellness hideaway in the heart of Kerala, Agni Ayurvedic Village Resort blends ancient Ayurvedic wisdom with the serenity of nature. Surrounded by lush greenery and peaceful water features, it's a sanctuary where you can slow down, reset your mind, and allow your body to rejuvenate through time-honored therapies. Expect genuine care, nurturing treatments, and an atmosphere that feels like coming home to yourself.",
      rating: 4.7,
      reviews: 190,
      priceRange: "$$$",
      image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
      slug: "kerala/agni-ayurvedic-village",
    },
    {
      name: "Dheemahi Kumarakom – Premium Lakeside Retreat",
      city: "Kumarakom, Kerala, India",
      description:
        "Nestled on the serene banks of Lake Vembanad, Dheemahi Kumarakom is a premium NABH-accredited sanctuary for authentic healing. Rooted in over 90 years of family heritage, this retreat masterfully blends deep-rooted Ayurvedic wisdom with modern luxury, offering personalized care in a tranquil lakeside haven.",
      rating: 4.9,
      reviews: 150,
      priceRange: "$$$",
      image: "/Center Images/Dheemahi Ayurvedic Centre/center dp.jpg",
      slug: "kerala/dheemahi-kumarakom",
    },
    {
      name: "Kairali - The Ayurvedic Healing Village",
      city: "Palakkad, Kerala, India",
      description:
        "Kairali - The Ayurvedic Healing Village ek world-renowned wellness destination hai jo authentic Ayurveda, Panchakarma aur holistic healing par focus karta hai. Lush green surroundings ke beech sthit, yeh NABH-accredited retreat traditional Ayurvedic wisdom ko modern comfort ke saath blend karta hai. Yahan personalized treatment plans, experienced vaidyas aur sattvic lifestyle ke through long-term health, detox aur rejuvenation par kaam kiya jata hai.",
      rating: 4.9,
      reviews: 280,
      priceRange: "$$$$",
      image: "/Center Images/The Ayurvedic Healing Village/Base image.jpg",
      slug: "kerala/kairali-ayurvedic-healing-village",
    },
    {
      name: "Nagarjuna Ayurveda",
      city: "Kalady, Kerala, India",
      description:
        "Nagarjuna Ayurveda Centre is one of India's most trusted and heritage-rich Ayurvedic healthcare institutions, renowned for its authentic, classical treatment approach. Backed by decades of clinical expertise, the centre follows traditional Ayurvedic principles combined with strict diagnostic protocols to deliver effective, result-oriented therapies.",
      rating: 4.8,
      reviews: 200,
      priceRange: "$$$",
      image: "/Center Images/Nagarjuna-ayurveda/Center image.jpg",
      slug: "kerala/nagarjuna-ayurveda-centre",
    },
    {
      name: "Sanjeevanam Ayurveda Hospital",
      city: "Alappuzha, Kerala, India",
      description:
        "Experience the future of holistic healthcare at Sanjeevanam, a pioneering integrative hospital in the heart of Kochi. It masterfully blends the ancient wisdom of Ayurveda with the precision of modern medicine, creating a unique and powerful ecosystem for deep healing. Expect evidence-based care in a modern, professional setting, where your journey to wellness is guided by a multi-disciplinary team of experts.",
      rating: 4.8,
      reviews: 1700,
      priceRange: "$$$",
      image: "/Center Images/Sanjeevanam/Top center thumbnail.jpg",
      slug: "kerala/sanjeevanam-ayurveda-hospital",
    },
    {
      name: "Back to Roots Ayurveda Retreat",
      city: "Cherai, Kerala, India",
      description:
        "Rediscover the roots of true healing at this serene lakeside sanctuary in Idukki. Guided by the wisdom of 4th generation Ayurvedic physicians, this NABH-accredited retreat offers authentic, classical Panchakarma in a pristine natural setting. Expect a deeply personal journey where the focus is on pure, undiluted Ayurveda.",
      rating: 4.9,
      reviews: 100,
      priceRange: "$$$",
      image: "/Center Images/Back to Roots Ayurveda Retreat/top-center thumb.jpg",
      slug: "kerala/back-to-roots",
    },
    {
      name: "Dhathri Ayurveda Resort",
      city: "Thrissur, Kerala, India",
      description:
        "Immerse yourself in three centuries of healing wisdom at Dhathri, a NABH-accredited hospital nestled on the serene backwaters of Kerala. Guided by a profound 300-year-old family legacy, this sanctuary offers authentic, traditional Ayurveda and Panchakarma. Expect a deeply healing journey where ancient heritage meets clinical excellence in a tranquil, natural environment.",
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/Dhathri Ayurveda Resort/Thumb.jpg",
      slug: "kerala/dhathri-ayurveda",
    },
    {
      name: "Krishnendu Ayurveda Hospital",
      city: "Alappuzha, Kerala, India",
      description:
        "Immerse yourself in over 100 years of healing wisdom at Krishnendu, a NABH-accredited hospital in the serene backwaters of Alleppey. Guided by the fourth generation of a renowned physician family, this sanctuary masterfully blends a rich heritage with modern clinical excellence. Expect an authentic and personalized healing journey in a professional and tranquil environment.",
      rating: 4.9,
      reviews: 1500,
      priceRange: "$$$",
      image: "/Center Images/Krishnendu Ayurveda Hospital/Thumb.jpg",
      slug: "kerala/krishnendu-ayurveda-hospital",
    },
    {
      name: "Ayurmana Ayurveda Center",
      city: "Kannur, Kerala, India",
      description:
        "Ayurmana Ayurveda Center is a Kerala wellness retreat focused on authentic therapies, physician-led treatment planning, and restorative lifestyle routines. The center blends classical Panchakarma with calm, nature-driven recovery programs designed to support detoxification, stress balance, and sustainable long-term well-being.",
      rating: 4.8,
      reviews: 234,
      priceRange: "$$$$",
      image: "/Center Images/Ayurmana center/top center thumb.jpg",
      slug: "kerala/ayurmana",
    },
    {
      name: "Chamundi Hill Palace Ayurvedic Resort",
      city: "Mysuru, Karnataka, India",
      description:
        "Chamundi Hill Palace presents a heritage-inspired wellness stay in Mysuru with a focus on classical Ayurvedic therapies, restorative bodywork, and slow-living routines. Guests typically choose it for a quieter retreat format that blends traditional healing practices with personalized care in a nature-facing setting.",
      rating: 4.8,
      reviews: 100,
      priceRange: "$$$$",
      image: "/Center Images/Chamundi Hill Palace/CTA.jpg",
      slug: "mysore/chamundi-hill-palace",
    },
    {
      name: "Athreya Ayurvedic Centre",
      city: "Kottayam, Kerala, India",
      description:
        "Athreya Ayurvedic Centre offers consultation-led Ayurveda with customized treatment protocols based on individual body constitution and current health concerns. Its approach emphasizes authentic Kerala therapies, disciplined daily routines, and doctor-guided recovery plans aimed at sustainable long-term wellness rather than short-term relief.",
      rating: 4.8,
      reviews: 188,
      priceRange: "$$$$",
      image: "/Center Images/Athreya Ayurvedic Centre/CTA.jpg",
      slug: "kerala/athreya-ayurvedic-centre",
    },
    {
      name: "Ayur Bethaniya Ayurveda Hospital",
      city: "Thiruvananthapuram, Kerala, India",
      description:
        "Immerse yourself in holistic healing at Ayur Bethaniya Ayurveda Hospital, a trusted destination for authentic Ayurvedic treatments in the heart of Kerala. Rooted in traditional wisdom and guided by experienced Ayurvedic physicians, the hospital offers personalized therapies designed to restore balance of body, mind, and soul. Set in a calm and healing environment, Ayur Bethaniya combines classical Ayurveda with compassionate care for long-lasting wellness.",
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$",
      image: "/Center Images/Ayur Bethaniya/CTA.jpg",
      slug: "kerala/ayur-bethaniya-ayurveda-hospital",
    },
    {
      name: "AyurSoma Ayurveda Royal Retreat",
      city: "Kovalam, Kerala, India",
      description:
        "Experience world-class Ayurvedic healing at AyurSoma, a premium royal retreat in Kovalam. Combining traditional wisdom with royal luxury, our sanctuary offers authentic Panchakarma, rejuvenation therapies, and personalized wellness programs guided by seasoned Vaidyas in a stunning beachfront setting.",
      rating: 4.8,
      reviews: 159,
      priceRange: "$$$$$",
      image: "/Center Images/AyurSoma Ayurveda/Photo gallery/img 1.jpg",
      slug: "kerala/ayursoma",
    },
    {
      name: "Ayushi Ayurvedic Retreat",
      city: "Rishikesh, Uttarakhand, India",
      description:
        "Experience the essence of authentic Ayurveda at Ayushi Ayurvedic Retreat, a peaceful destination dedicated to holistic healing and natural wellness. Rooted in classical Ayurvedic principles, the retreat offers personalized therapies designed to restore balance of body, mind, and spirit.",
      rating: 4.8,
      reviews: 500,
      priceRange: "$$$$",
      image: "/Center Images/Ayushi Ayurvedic Retreat/Thumb.jpg",
      slug: "kerala/ayushi-ayurvedic-retreat",
    },
    {
      name: "Sitaram Mountain Retreat",
      city: "Thrissur, Kerala, India",
      description:
        "Discover profound healing amidst the breathtaking hills of Munnar at Sitaram Mountain Retreat, a globally acclaimed sanctuary for authentic Ayurvedic wellness. Carrying forward a remarkable 104-year family legacy in traditional healing, this NABH-accredited retreat seamlessly blends classical Ayurvedic principles with the therapeutic power of pristine mountain nature.",
      rating: 4.8,
      reviews: 928,
      priceRange: "$$$$",
      image: "/Center Images/Sitaram Mountain Retreat/thumb.jpg",
      slug: "idukki/sitaram-mountain-retreat",
    },
    {
      name: "Akanta Ayurveda and Yoga Resort",
      city: "Cherai, Kerala, India",
      description:
        "Embrace holistic transformation at Akanta Ayurveda & Yoga Cherai, Kerala's exclusive fully-licensed Ayurveda resort harmoniously positioned between the pristine Arabian Sea and tranquil backwaters. As the only yoga retreat center at Cherai Beach licensed as an Ayurvedic hospital, Akanta integrates government-verified Oushadi Clinic medicines with personalized therapeutic protocols.",
      rating: 4.5,
      reviews: 479,
      priceRange: "$$$$",
      image: "/Center Images/Akanta Ayurveda and Yoga Resort/thumb.jpg",
      slug: "kochi/akanta-ayurveda-and-yoga-resort",
    },
  ];
  const pageOneSlugs = new Set([
    "kerala/somatheeram",
    "veda5",
    "kerala/kairali-heritage",
    "kerala/agni-ayurvedic-village",
    "kerala/dheemahi-kumarakom",
    "kerala/kairali-ayurvedic-healing-village",
    "kerala/nagarjuna-ayurveda-centre",
    "kerala/sanjeevanam-ayurveda-hospital",
    "kerala/back-to-roots",
    "kerala/dhathri-ayurveda",
    "kerala/krishnendu-ayurveda-hospital",
    "kerala/ayursoma",
  ]);
  const pageOneCenters = centers.filter((center) => center.slug && pageOneSlugs.has(center.slug));
  const pageTwoCenters = centers.filter((center) => !(center.slug && pageOneSlugs.has(center.slug)));
  const totalPages = pageTwoCenters.length > 0 ? 2 : 1;
  const paginatedCenters = currentPage === 1 ? pageOneCenters : pageTwoCenters;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-[#2C4E5A] text-white pt-10 pb-7 md:pt-20 md:pb-8">
        <div className="container mx-auto px-4 max-[380px]:px-2">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[17px] sm:text-lg md:text-4xl lg:text-5xl font-bold leading-[1.35] md:leading-[1.75] animate-fade-in px-2 md:px-4">
              <span className="block whitespace-nowrap">Top Ayurvedic Centers and Hospitals in</span>
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Kerala.</span>
            </h2>
            <p
              className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "200ms" }}
            >
              Discover Kerala's finest Ayurvedic centers and wellness retreats.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-4 pb-6 md:pt-8 md:pb-16">
        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
          {paginatedCenters.map((center, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full">
                <div className="relative aspect-[4/3] sm:aspect-[16/8.4] md:aspect-[16/8.2] overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#2C4E5A] mb-2 line-clamp-2 md:line-clamp-1 leading-tight min-h-[2.5rem] md:min-h-[1.6rem]">
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
                    className={`text-sm leading-relaxed md:leading-[1.5] text-foreground/80 mb-1 md:mb-2 ${expandedCardSlug === center.slug ? "" : "line-clamp-6 md:line-clamp-6"}`}
                  >
                    {center.description}
                  </p>
                  {center.description.length > 260 && (
                    <button
                      type="button"
                      className="inline-flex text-xs font-semibold text-primary hover:text-primary/80 w-fit mb-2"
                      onClick={() =>
                        setExpandedCardSlug((prev) =>
                          prev === center.slug ? null : center.slug,
                        )
                      }
                    >
                      {expandedCardSlug === center.slug ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="mt-2 md:mt-auto pt-2 md:pt-3 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        className="w-full font-bold py-4 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                        onClick={() => {
                          if (center.slug) {
                            navigate(`/centers/${center.slug}`);
                            return;
                          }
                          navigate("#");
                        }}
                      >
                        View Details
                      </Button>
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
          ))}
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

export default KeralaCenters;

