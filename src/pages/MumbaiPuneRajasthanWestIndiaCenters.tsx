import { useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useNavigate, Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

type MumbaiCenter = {
  series: number;
  name: string;
  city: string;
  description: string;
  rating: number;
  reviews: string;
  image: string;
  slug?: string;
  website?: string;
};

const IMAGE_BY_SERIES: Record<number, string> = {
  1: "/Anchor pages/mumbai/images/1.webp",
  2: "/Anchor pages/mumbai/images/2.jpg",
  3: "/Anchor pages/mumbai/images/3.jpg",
  4: "/Anchor pages/mumbai/images/4.jpg",
  5: "/Anchor pages/mumbai/images/5.jpg",
  6: "/Anchor pages/mumbai/images/6.jpeg",
  7: "/Anchor pages/mumbai/images/7.jpg",
  9: "/Anchor pages/mumbai/images/9.jpg",
  10: "/Anchor pages/mumbai/images/10.jpg",
  11: "/Anchor pages/mumbai/images/11.jpg",
  12: "/Anchor pages/mumbai/images/12.jpg",
  13: "/Anchor pages/mumbai/images/13.jpg",
  14: "/Anchor pages/mumbai/images/14.webp",
  15: "/Anchor pages/mumbai/images/15.webp",
  16: "/Anchor pages/mumbai/images/16.jpg",
  17: "/Anchor pages/mumbai/images/17.webp",
  18: "/Anchor pages/mumbai/images/18.jpg",
  19: "/Anchor pages/mumbai/images/19.jpg",
  20: "/Anchor pages/mumbai/images/20.jpg",
  21: "/Anchor pages/mumbai/images/21.jpg",
  22: "/Anchor pages/mumbai/images/22.webp",
  23: "/Anchor pages/mumbai/images/23.webp",
  24: "/Anchor pages/mumbai/images/24.jpg",
  25: "/Anchor pages/mumbai/images/25.webp",
};

const LOCATION_OVERRIDE_BY_SERIES: Record<number, string> = {
  13: "Andheri West, Mumbai, Maharashtra, India",
  14: "Borivali, Mumbai, Maharashtra, India",
  15: "Chembur West, Mumbai, Maharashtra, India",
  16: "Grant Road, Mumbai, Maharashtra, India",
  17: "Andheri East, Mumbai, Maharashtra, India",
  18: "Nerul, Navi Mumbai, Maharashtra, India",
  19: "Dhankawadi, Pune, Maharashtra, India",
  22: "Panchavati, Nashik, Maharashtra, India",
  23: "Gangapur Road, Nashik, Maharashtra, India",
  24: "Panchavati, Nashik, Maharashtra, India",
  25: "Canada Corner, Nashik, Maharashtra, India",
};

const cleanMarkdownText = (value: string) =>
  value
    .replace(/\*\*/g, "")
    .replace(/\\([.#-])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const formatMumbaiLocation = (value: string) => {
  let cleaned = value.replace(/\s+/g, " ").trim();
  cleaned = cleaned.replace(/\s+(Maharashtra)\s+India$/i, ", $1, India");
  cleaned = cleaned.replace(/\s+(Rajasthan)\s+India$/i, ", $1, India");
  if (!/India$/i.test(cleaned)) {
    cleaned = `${cleaned}, India`;
  }
  cleaned = cleaned.replace(/\s+,/g, ",").replace(/,\s*,/g, ", ").trim();
  return cleaned;
};

const parseCentersFromMarkdown = (markdown: string): MumbaiCenter[] => {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^\|\s*\*\*\d+\*\*/.test(line));

  return lines
    .map((line): MumbaiCenter | null => {
      const parts = line.split("|").map((part) => part.trim());
      if (parts.length < 6) return null;

      const series = Number(cleanMarkdownText(parts[1]));
      if (!series || series === 8) return null;

      const name = cleanMarkdownText(parts[2]);
      const description = cleanMarkdownText(parts[3]);
      const ratingCell = cleanMarkdownText(parts[4]);
      const city = LOCATION_OVERRIDE_BY_SERIES[series] || formatMumbaiLocation(cleanMarkdownText(parts[5]));
      const websiteRaw = parts[6] ? cleanMarkdownText(parts[6]) : "";
      const website = /^https?:\/\//i.test(websiteRaw) ? websiteRaw : undefined;

      const ratingMatch = ratingCell.match(/\d+(?:\.\d+)?/);
      const reviewsMatch = ratingCell.match(/\(([^)]+)\)/);
      const rating = ratingMatch ? Number(ratingMatch[0]) : 0;
      const reviews = reviewsMatch ? reviewsMatch[1].replace(/\+/g, "").trim() : "0";
      const image = IMAGE_BY_SERIES[series] || "/Anchor pages/mumbai/images/1.webp";

      return {
        series,
        name,
        city,
        description,
        rating,
        reviews,
        image,
        website,
      };
    })
    .filter((center): center is MumbaiCenter => center !== null)
    .sort((a, b) => a.series - b.series);
};

const MumbaiPuneRajasthanWestIndiaCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedCardSeries, setExpandedCardSeries] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [centers, setCenters] = useState<MumbaiCenter[]>([]);
  const navigate = useNavigate();
  const staticPremiumCenters: MumbaiCenter[] = [
    {
      series: 0,
      name: "Agni Ayurvedic Village Resort",
      city: "Panvel, Mumbai, Maharashtra, India",
      description:
        "A tranquil wellness hideaway blending ancient Ayurvedic wisdom with the serenity of nature. Surrounded by lush greenery and peaceful water features, it’s a sanctuary where you can slow down, reset your mind, and allow your body to rejuvenate through time-honored therapies.",
      rating: 4.8,
      reviews: "1250",
      image: "/Center Images/Agni - Ayurvedic Village/Photo Gallery/Agni-Ayurvedic Village-01.jpg",
      slug: "agni-ayurvedic-village-resort-panvel-mumbai-india",
    },
    {
      series: -1,
      name: "Fazlani Nature's Nest Wellness Centre",
      city: "Pune, Maharashtra, India",
      description:
        "Fazlani Nature's Nest is a premier wellness retreat near Lonavala that blends time-honored natural healing traditions with modern therapeutic excellence. Nestled within lush green landscapes, the center offers a serene environment dedicated to restoring balance through authentic Ayurveda, Naturopathy, and mindful living.",
      rating: 4.7,
      reviews: "1800",
      image: "/Center Images/Fazlani Natures Nest/Thumb.jpg",
      slug: "fazlani-natures-nest-wellness-centre-mumbai-india",
    },
    {
      series: -6,
      name: "Atmantan Wellness Resort",
      city: "Mulshi, Pune, Maharashtra, India",
      description:
        "Set amidst the peaceful Sahyadri hills overlooking Mulshi Lake, Atmantan Wellness Resort is a luxury wellness retreat designed to restore balance and vitality. The resort blends traditional healing systems such as Ayurveda and yoga with modern wellness therapies to support holistic health.",
      rating: 4.8,
      reviews: "3200",
      image: "/Center Images/Atmantan Wellness Resort/Thumb.jpg",
      slug: "atmantan-wellness-resort-pune-india",
    },
    {
      series: -2,
      name: "Viveda Wellness Village",
      city: "Nashik, Maharashtra, India",
      description:
        "Viveda Wellness Village is a transformative retreat near Nashik that integrates ancient Indian healing sciences with modern wellness practices for complete rejuvenation. Nestled in the tranquil Sahyadri ranges, the retreat offers personalized programs guided by expert practitioners to reconnect individuals with nature and holistic living.",
      rating: 4.8,
      reviews: "1100",
      image: "/Center Images/Viveda Wellness Village/Thumb.jpg",
      slug: "viveda-wellness-village-mumbai-india",
    },
    {
      series: -3,
      name: "Dharana At Shillim",
      city: "Shillim, Pune, Maharashtra, India",
      description:
        "Dharana At Shillim is a world-renowned wellness retreat nestled in the serene Sahyadri mountains, dedicated to holistic healing and profound inner transformation. The center masterfully blends traditional ancient wisdom with modern therapeutic science to create a unique and deeply restorative wellness experience.",
      rating: 4.8,
      reviews: "3900",
      image: "/Center Images/Dharana At Shillim/Thumb.jpg",
      slug: "dharana-at-shillim-wellness-retreat-pune-india",
    },
    {
      series: -4,
      name: "Toyam By Orchid Hotels",
      city: "Pune (Bhor), Maharashtra, India",
      description:
        "Toyam by Orchid Hotels is a premier wellness destination near Pune that offers an authentic and immersive journey into the world of traditional Ayurvedic healing. Surrounded by tranquil landscapes, the retreat provides a peaceful sanctuary where classical Panchakarma and rejuvenation therapies are practiced with medical precision.",
      rating: 4.7,
      reviews: "1200",
      image: "/Center Images/Toyam By Orchid Hotels/Thumb.jpg",
      slug: "toyam-by-orchid-hotels-wellness-resort-pune-india",
    },
    {
      series: -5,
      name: "Amanbagh Heritage Wellness Retreat",
      city: "Alwar, Rajasthan, India",
      description:
        "Amanbagh Heritage Wellness Retreat is a world-class sanctuary in Rajasthan, blending Mughal-inspired architectural elegance with profound Ayurvedic healing traditions. Nestled in the rugged Aravalli hills, the retreat offers a peaceful sanctuary where classical Vedic principles and personalized wellness protocols are practiced with meticulous care.",
      rating: 4.8,
      reviews: "600",
      image: "/Center Images/Amanbagh/thumb.jpg",
      slug: "amanbagh-heritage-wellness-retreat-rajasthan-india",
    },
  ];

  useEffect(() => {
    let isMounted = true;

    fetch("/Anchor pages/mumbai/savastha_mumbai_centers-updated.md")
      .then((response) => response.text())
      .then((markdown) => {
        if (isMounted) {
          setCenters(parseCentersFromMarkdown(markdown));
        }
      })
      .catch((error) => {
        console.error("Failed to load Mumbai centers:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const { pageOneCenters, pageTwoCenters } = useMemo(() => {
    const centerBySeries = new Map(centers.map((center) => [center.series, center]));
    
    // Explicitly exclude these from the dynamic list as they are now in staticPremiumCenters
    const excludedSeries = [0, 10]; // Agni and Atmantan series from markdown if any
    
    const baseSeries = [19, 25, 1, 3, 6, 7, 11, 12, 14, 24];
    
    const pageOne = [
      ...staticPremiumCenters,
      ...baseSeries.map((series) => centerBySeries.get(series)).filter(Boolean),
    ] as MumbaiCenter[];
    
    const pageOneSeriesIds = new Set(pageOne.map(c => c.series));
    const pageTwo = centers.filter((center) => !pageOneSeriesIds.has(center.series) && !excludedSeries.includes(center.series));
    
    return { pageOneCenters: pageOne, pageTwoCenters: pageTwo };
  }, [centers]);

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
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Mumbai, Pune, Nashik &amp; West India.</span>
            </h2>
            <p
              className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "200ms" }}
            >
              Discover India&apos;s finest Ayurvedic centers and wellness retreats across West India.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pt-4 pb-6 md:pt-8 md:pb-16">
        <div className="grid items-start md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">
          {paginatedCenters.map((center) => (
            <div key={center.series} className="flex items-start">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-500 flex flex-col w-full">
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
                      <span className="text-xs font-semibold">{center.city}</span>
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
                      ) : center.website ? (
                        <Button
                          asChild
                          variant="outline"
                          className="w-full font-bold py-4 md:py-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm"
                        >
                          <a href={center.website} target="_blank" rel="noopener noreferrer">
                            View Details
                          </a>
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

export default MumbaiPuneRajasthanWestIndiaCenters;
