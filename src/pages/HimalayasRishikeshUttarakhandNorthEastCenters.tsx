import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  3: "uttarakhand/ananda-in-the-himalayas",
  4: "dharamshala/ayuskama-ayurveda",
  6: "veda5",
  10: "rishikesh/yan-cure",
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

  const { orderedCenters, totalPages, paginatedCenters } = useMemo(() => {
    const ordered = prioritizeTopCenters(centers);
    const pages = ordered.length > 12 ? 2 : 1;
    const paginated = currentPage === 1 ? ordered.slice(0, 12) : ordered.slice(12);
    return { orderedCenters: ordered, totalPages: pages, paginatedCenters: paginated };
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
