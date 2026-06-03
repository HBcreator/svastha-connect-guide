import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prioritizeTopCenters } from "@/lib/top-centers";

type HimalayanCenter = {
  series: number;
  name: string;
  city: string;
  description: string;
  rating: number;
  reviews: string;
  image: string;
  slug?: string;
};

const ANCHOR_IMAGE_BY_SERIES: Record<number, string> = {
  1: "/Anchor pages/Himalayan/images/1.jpg",
  2: "/Anchor pages/Himalayan/images/2.jpg",
  5: "/Anchor pages/Himalayan/images/5.jpg",
  7: "/Anchor pages/Himalayan/images/7.webp",
  8: "/Anchor pages/Himalayan/images/8.webp",
  9: "/Anchor pages/Himalayan/images/9.jpg",
  11: "/Anchor pages/Himalayan/images/11.jpg",
  12: "/Anchor pages/Himalayan/images/12.webp",
  13: "/Anchor pages/Himalayan/images/13.jpg",
  14: "/Anchor pages/Himalayan/images/14.JPG",
  15: "/Anchor pages/Himalayan/images/15.webp",
  16: "/Anchor pages/Himalayan/images/16.webp",
  17: "/Anchor pages/Himalayan/images/17.JPG",
  18: "/Anchor pages/Himalayan/images/18.webp",
  19: "/Anchor pages/Himalayan/images/19.jpeg",
  20: "/Anchor pages/Himalayan/images/20.jpg",
  21: "/Anchor pages/Himalayan/images/21.jpg",
  22: "/Anchor pages/Himalayan/images/22.jpg",
  23: "/Anchor pages/Himalayan/images/23.jpg",
  24: "/Anchor pages/Himalayan/images/24.webp",
  25: "/Anchor pages/Himalayan/images/25.webp",
};

const TOP_CENTER_IMAGE_FALLBACK_BY_SERIES: Record<number, string> = {
  3: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
  4: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
  6: "/Center Images/veda5/veda5-1.jpg",
  10: "/Center Images/Yan Cure Yoga Retreat/Thumb.webp",
};

const SLUG_BY_SERIES: Partial<Record<number, string>> = {
  1: "swami-rama-himalayan-university-ayurveda-center-dehradun-uttarakhand-india",
  2: "ayuskama-ayurveda-clinic-and-panchakarma-centre-rishikesh-uttarakhand-india",
  3: "ananda-in-the-himalayas-uttarakhand-india",
  4: "ayuskama-ayurveda-and-panchakarma-center-dharamshala-india",
  5: "bhole-baba-ayurvedic-hospital-and-research-centre-ranikhet-uttarakhand-india",
  6: "veda5-ayurveda-and-yoga-retreat-rishikesh-india",
  7: "mamgain-ayurvedic-clinic-and-panchakarma-centre-rishikesh-uttarakhand-india",
  8: "haritha-ayurveda-academy-and-panchakarma-center-rishikesh-uttarakhand-india",
  9: "kayakalp-himalayan-research-institute-of-yoga-and-naturopath-hospital-himachal-india",
  10: "yan-cure-yoga-retreat-and-ayurveda-centre-rishikesh-india",
  11: "vedic-yoga-and-ayurveda-retreat-center-rishikesh-uttarakhand-india",
  12: "vedanjana-yoga-and-ayurveda-panchakarma-center-rishikesh-uttarakhand-india",
};

const cleanMarkdownText = (value: string) =>
  value
    .replace(/\*\*/g, "")
    .replace(/\\([.#-])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const formatHimalayanLocation = (value: string) => {
  const cleaned = value.replace(/\s+/g, " ").trim();
  if (!cleaned) return cleaned;

  const commaParts = cleaned
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  if (commaParts.length >= 3) {
    return commaParts.join(", ");
  }

  const mainPart = commaParts.length === 2 ? commaParts[1] : commaParts[0];
  const words = mainPart.split(" ").filter(Boolean);

  if (words.length >= 3) {
    const country = words[words.length - 1];

    if (country === "India" && words.length >= 4 && words[words.length - 2] === "Pradesh") {
      const state = `${words[words.length - 3]} ${words[words.length - 2]}`;
      const city = words.slice(0, -3).join(" ");
      return city ? `${city}, ${state}, ${country}` : `${state}, ${country}`;
    }

    const state = words[words.length - 2];
    const city = words.slice(0, -2).join(" ");
    return `${city}, ${state}, ${country}`;
  }

  return mainPart;
};

const parseCentersFromMarkdown = (markdown: string): HimalayanCenter[] => {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^\|\s*\*\*\d+\*\*/.test(line));

  return lines
    .map((line): HimalayanCenter | null => {
      const parts = line.split("|").map((part) => part.trim());
      if (parts.length < 6) return null;

      const series = Number(cleanMarkdownText(parts[1]));
      const name = cleanMarkdownText(parts[2]);
      const description = cleanMarkdownText(parts[3]);
      const ratingCell = cleanMarkdownText(parts[4]);
      const city = cleanMarkdownText(parts[5]);

      const ratingMatch = ratingCell.match(/\d+(?:\.\d+)?/);
      const reviewsMatch = ratingCell.match(/\(([^)]+)\)/);
      const rating = ratingMatch ? Number(ratingMatch[0]) : 0;
      const reviews = reviewsMatch ? reviewsMatch[1].replace(/\+/g, "").trim() : "0";
      const image =
        ANCHOR_IMAGE_BY_SERIES[series] ||
        TOP_CENTER_IMAGE_FALLBACK_BY_SERIES[series] ||
        "/Anchor pages/Himalayan/images/1.jpg";

      return {
        series,
        name,
        city,
        description,
        rating,
        reviews,
        image,
        slug: SLUG_BY_SERIES[series],
      };
    })
    .filter((center): center is HimalayanCenter => center !== null)
    .sort((a, b) => a.series - b.series);
};

const HimalayasRishikeshUttarakhandNorthEastCenters = () => {
  const staticPremiumCenters: HimalayanCenter[] = [
    {
      series: 3,
      name: "Ananda In The Himalayas",
      city: "Rishikesh, Uttarakhand, India",
      description:
        "Ananda In The Himalayas is a world-renowned ultra-luxury wellness retreat in the serene Himalayan foothills, dedicated to the profound integration of ancient wisdom and modern clinical excellence.",
      rating: 4.8,
      reviews: "900",
      image: "/Center Images/Ananda in the Himalayas/Thumb.jpg",
      slug: "uttarakhand/ananda-in-the-himalayas",
    },
    {
      series: 4,
      name: "Ayuskama Ayurveda Clinic & Panchakarma Centre",
      city: "Dharamshala, Himachal Pradesh, India",
      description:
        "Ayuskama Ayurveda is a distinguished wellness center in Dharamshala that seamlessly integrates authentic traditional Ayurveda with modern holistic health standards.",
      rating: 4.8,
      reviews: "500",
      image: "/Center Images/Ayuskama Ayurveda/Thumb.jpg",
      slug: "dharamshala/ayuskama-ayurveda",
    },
    {
      series: -1,
      name: "HimVeda Heritage Wellness Centre",
      city: "Dharamshala, Himachal Pradesh, India",
      description:
        "HimVeda Heritage Wellness Centre is a distinguished Ayurvedic sanctuary nestled in the serene Himalayan foothills near Dharamshala, dedicated to authentic classical healing and professional clinical care. The center specializes in traditional Panchakarma and herbal medicine, providing highly personalized treatments for chronic lifestyle disorders and metabolic rejuvenation. Guests experience a peaceful healing environment guided by experienced Vaidyas, where ancient Vedic wisdom is combined with modern diagnostic precision to ensure sustainable health outcomes.",
      rating: 4.8,
      reviews: "500",
      image: "/Center Images/HimVeda/Thumb.jpeg",
      slug: "dharamshala/himveda",
    },
    {
      series: 10,
      name: "Yan Cure Yoga Retreat & Ayurveda Centre",
      city: "Rishikesh, Uttarakhand, India",
      description:
        "Yan Cure Yoga Retreat & Ayurveda Centre is a premier holistic sanctuary in Rishikesh that offers a powerful combination of traditional yoga philosophy and authentic Ayurvedic Healing.",
      rating: 4.8,
      reviews: "500",
      image: "/Center Images/Yan Cure Yoga Retreat/Thumb.webp",
      slug: "rishikesh/yan-cure",
    },
    {
      series: -2,
      name: "Sandhya Hot Spring Health Care",
      city: "Manikaran, Himachal Pradesh, India",
      description:
        "Sandhya Hot Spring Health Care is a premier wellness retreat in Manikaran that harnesses the profound healing power of natural geothermal mineral springs for therapeutic rejuvenation. Located along the banks of the Parvati River, the center offers a unique combination of hydrotherapy, classical Ayurveda, and specialized detoxification programs. Guests benefit from the high sulfur content of the hot springs, which is scientifically recognized for its efficacy in treating skin conditions, joint pains, and stress-related ailments in a peaceful Himalayan setting.",
      rating: 4.6,
      reviews: "500",
      image: "/Center Images/Sandhya Hot Spring Health Care/Thumb.jpg",
      slug: "himachal/sandhya-hot-spring-health-care",
    },
    {
      series: -3,
      name: "Modi Yoga Retreat",
      city: "Rishikesh, Uttarakhand, India",
      description:
        "Modi Yoga Retreat is a premier riverside sanctuary in Rishikesh that seamlessly integrates traditional Hatha Yoga philosophy with authentic Ayurvedic Healing standards.",
      rating: 4.7,
      reviews: "600",
      image: "/Center Images/Modi Yoga Retreat/Thumb.jpg",
      slug: "rishikesh/modi-yoga-retreat",
    },
    {
      series: 6,
      name: "Veda5 Ayurveda & Yoga Retreat",
      city: "Rishikesh, Uttarakhand, India",
      description:
        "Veda5 is a distinguished luxury wellness retreat in Rishikesh that seamlessly integrates authentic Ayurvedic Healing with world-class hospitality and professional medical standards. Nestled in the serene Himalayan foothills with stunning mountain views, the center offers a peaceful sanctuary where classical Panchakarma and holistic therapies are practiced with meticulous care. Guests undergo a transformative journey guided by expert physicians, featuring therapeutic yoga, mindful meditation, and personalized wellness protocols designed for deep rejuvenation. Every element of the stay is thoughtfully curated to restore metabolic balance, strengthen immunity, and promote long-term physical and mental vitality.",
      rating: 4.9,
      reviews: "1000",
      image: "/Center Images/veda5/veda5-1.jpg",
      slug: "veda5-ayurveda-and-yoga-retreat-rishikesh-india",
    },
  ];

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedCardSeries, setExpandedCardSeries] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [centers, setCenters] = useState<HimalayanCenter[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    fetch("/Anchor pages/Himalayan/savastha_himalaya_centers.md")
      .then((response) => response.text())
      .then((markdown) => {
        if (isMounted) {
          setCenters(parseCentersFromMarkdown(markdown));
        }
      })
      .catch((error) => {
        console.error("Failed to load Himalayan centers:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const { paginatedCenters, totalPages } = useMemo(() => {
    const centerBySeries = new Map(centers.map((center) => [center.series, center]));
    
    // Explicitly exclude these from the dynamic list as they are handled in staticPremiumCenters
    const excludedSeries = [3, 4, 6, 10]; 
    
    const baseSeries = [1, 2, 5, 7, 8, 9, 11, 12];
    
    const pageOneList = [
      ...staticPremiumCenters,
      ...baseSeries.map((series) => centerBySeries.get(series)).filter(Boolean),
    ] as HimalayanCenter[];
    
    const pageOneSeriesIds = new Set(pageOneList.map(c => c.series));
    const pageTwoList = centers.filter((center) => !pageOneSeriesIds.has(center.series) && !excludedSeries.includes(center.series));
    
    const paginated = currentPage === 1 ? pageOneList : pageTwoList;
    
    return { paginatedCenters: paginated, totalPages: 2 };
  }, [centers, currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation onQuoteClick={() => setQuoteModalOpen(true)} />

      <section className="bg-[#2C4E5A] text-white pt-10 pb-7 md:pt-20 md:pb-8">
        <div className="container mx-auto px-4 max-[380px]:px-2">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-[17px] sm:text-lg md:text-4xl lg:text-5xl font-bold leading-[1.35] md:leading-[1.75] animate-fade-in px-2 md:px-4">
              <span className="block whitespace-nowrap">Top Ayurvedic Centers and Hospitals in</span>
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Himalayas rishikesh uttarakhand and north east.</span>
            </h2>
            <p
              className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "200ms" }}
            >
              Discover Himalayan region&apos;s finest Ayurvedic centers and wellness retreats.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-4 pb-6 md:pt-8 md:pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
          {paginatedCenters.map((center) => (
            <div key={center.series} className="flex h-full">
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
                    className={`text-lg font-bold text-[#2C4E5A] mb-2 leading-tight cursor-pointer ${expandedCardSeries === center.series ? "" : "line-clamp-2 md:line-clamp-1 min-h-[2.5rem] md:min-h-[1.6rem]"}`}
                    onClick={() =>
                      setExpandedCardSeries((prev) =>
                        prev === center.series ? null : center.series,
                      )
                    }
                  >
                    {center.name}
                  </h3>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-foreground/80">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold">{formatHimalayanLocation(center.city)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-black text-foreground">{center.rating}</span>
                      <span className="text-xs font-semibold text-foreground/80">({center.reviews})</span>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed md:leading-[1.5] text-foreground/80 mb-1 md:mb-2 ${expandedCardSeries === center.series ? "" : "line-clamp-6 md:line-clamp-6"}`}
                  >
                    {center.description}
                  </p>
                  {center.description.length > 260 && (
                    <button
                      type="button"
                      className="inline-flex text-xs font-semibold text-primary hover:text-primary/80 w-fit mb-2"
                      onClick={() =>
                        setExpandedCardSeries((prev) =>
                          prev === center.series ? null : center.series,
                        )
                      }
                    >
                      {expandedCardSeries === center.series ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="mt-2 md:mt-auto pt-2 md:pt-3 border-t border-border/50">
                    <div className="grid grid-cols-2 gap-2">
                      {center.slug ? (
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
                          onClick={() => {
                            // Fallback
                          }}
                        >
                          View Details
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
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((prev) => Math.max(prev - 1, 1));
              setExpandedCardSeries(null);
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
              setExpandedCardSeries(null);
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

export default HimalayasRishikeshUttarakhandNorthEastCenters;

