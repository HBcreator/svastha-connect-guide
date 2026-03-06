import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { prioritizeTopCenters } from "@/lib/top-centers";

type DelhiCenter = {
  series: number;
  name: string;
  city: string;
  description: string;
  rating: number;
  reviews: string;
  image: string;
  slug?: string;
};

const IMAGE_BY_SERIES: Record<number, string> = {
  1: "/Anchor pages/Delhi/images/1.webp",
  2: "/Anchor pages/Delhi/images/2.jpg",
  3: "/Anchor pages/Delhi/images/3.jpg",
  4: "/Anchor pages/Delhi/images/4.webp",
  5: "/Anchor pages/Delhi/images/5.webp",
  6: "/Anchor pages/Delhi/images/6.webp",
  7: "/Anchor pages/Delhi/images/7.webp",
  8: "/Anchor pages/Delhi/images/8.webp",
  9: "/Anchor pages/Delhi/images/9.jpg",
  10: "/Anchor pages/Delhi/images/10.webp",
  11: "/Anchor pages/Delhi/images/11.webp",
  12: "/Anchor pages/Delhi/images/12.jpg",
  13: "/Anchor pages/Delhi/images/13.jpg",
  14: "/Anchor pages/Delhi/images/14.jpg",
  15: "/Anchor pages/Delhi/images/15.webp",
  16: "/Anchor pages/Delhi/images/16.webp",
  17: "/Anchor pages/Delhi/images/17.webp",
  18: "/Anchor pages/Delhi/images/18.webp",
  19: "/Anchor pages/Delhi/images/19.jpg",
  20: "/Anchor pages/Delhi/images/20.webp",
  21: "/Anchor pages/Delhi/images/21.webp",
  22: "/Anchor pages/Delhi/images/22.webp",
  23: "/Anchor pages/Delhi/images/23.webp",
  24: "/Anchor pages/Delhi/images/24.jpg",
  25: "/Anchor pages/Delhi/images/25.webp",
};

const LOCATION_OVERRIDE_BY_CENTER: Record<string, string> = {
  "Nirmal Ayurved & Panchkarm Clinic": "Shahdara, New Delhi, India",
  "Ch. Brahm Prakash Ayurved Charak Sansthan (CBPACS)": "Khera Dabar, New Delhi, India",
  "Kairali The Ayurvedic Healing Village – Delhi NCR": "Mehrauli, New Delhi, India",
  "SKK Ayurveda & Panchakarma": "Janak Puri, New Delhi, India",
  "Sri Sri Ayurveda Panchakarma Ayurveda Center": "Jhilmil, Delhi, India",
  "Mirasa Ayurveda": "East Of Kailash, Delhi, India",
  "Kerala Ayurveda Life (Ayurveda Panchakarma Clinic)": "Green Park, New Delhi, India",
  "Sri Vaidya Ayurveda Panchakarma": "Vasant Kunj, Delhi, India",
  "Sanjivani Ayurvedic Research Institute": "Vijay Nagar, Delhi, India",
  "Sri Sri Tattva Panchakarma Centre – Delhi": "Jhilmil, Delhi, India",
};

const cleanMarkdownText = (value: string) =>
  value
    .replace(/\*\*/g, "")
    .replace(/\\([.#-])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();

const parseCentersFromMarkdown = (markdown: string): DelhiCenter[] => {
  const lines = markdown
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => /^\|\s*\*\*\d+\*\*/.test(line));

  return lines
    .map((line): DelhiCenter | null => {
      const parts = line.split("|").map((part) => part.trim());
      if (parts.length < 6) return null;

      const series = Number(cleanMarkdownText(parts[1]));
      if (!series || series > 25) return null;

      let name = cleanMarkdownText(parts[2]);
      if (name === "Sri Sri Ayurveda Panchakarma (PanchkarmaTreatment.com)") {
        name = "Sri Sri Ayurveda Panchakarma Ayurveda Center";
      }
      const description = cleanMarkdownText(parts[3]);
      const ratingCell = cleanMarkdownText(parts[4]);
      let city = cleanMarkdownText(parts[5]).replace(/\s+/g, " ").trim();
      city = city.replace(/\s*Delhi India$/i, ", India");
      if (!/India$/i.test(city)) {
        city = `${city}, India`;
      }
      city = city
        .replace(/\s+,/g, ",")
        .replace(/,\s*,/g, ", ")
        .replace(/\s{2,}/g, " ")
        .replace(/,\s*India$/i, ", India")
        .trim();
      if (LOCATION_OVERRIDE_BY_CENTER[name]) {
        city = LOCATION_OVERRIDE_BY_CENTER[name];
      }

      const ratingMatch = ratingCell.match(/\d+(?:\.\d+)?/);
      const reviewsMatch = ratingCell.match(/\(([^)]+)\)/);
      const rating = ratingMatch ? Number(ratingMatch[0]) : 0;
      const reviews = reviewsMatch ? reviewsMatch[1].replace(/\+/g, "").trim() : "0";
      const image = IMAGE_BY_SERIES[series] || "/Anchor pages/Delhi/images/1.webp";

      return {
        series,
        name,
        city,
        description,
        rating,
        reviews,
        image,
      };
    })
    .filter((center): center is DelhiCenter => center !== null)
    .sort((a, b) => a.series - b.series);
};

const DelhiNorthIndiaRegionCenters = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [expandedCardSeries, setExpandedCardSeries] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [centers, setCenters] = useState<DelhiCenter[]>([]);
  const navigate = useNavigate();
  const namasteDwaarCenter: DelhiCenter = {
    series: 0,
    name: "Namaste Dwaar – Countryside Wellness Retreat",
    city: "Mansurpur, Delhi, India",
    description:
      "Namaste Dwaar is an award-winning countryside wellness retreat near Delhi NCR that blends authentic Ayurvedic healing with a peaceful rural environment. The center offers physician-led Panchakarma, detox, stress-relief, and rejuvenation programs tailored to each guest's health goals. Guests benefit from classical therapies, yoga, mindful routines, and farm-fresh sattvic meals designed to support long-term recovery and balance. Its calm natural setting, spacious campus, and personalized hospitality make it ideal for lifestyle reset, preventive wellness, and deeper therapeutic stays. With a focus on holistic care, Namaste Dwaar combines comfort, tradition, and structured healing for sustainable results.",
    rating: 4.7,
    reviews: "300",
    image: "/Center Images/Namastedwaar/Namastedwaar main.jpg",
    slug: "delhi/namastedwaar",
  };

  useEffect(() => {
    let isMounted = true;

    fetch("/Anchor pages/Delhi/savastha_delhi 25_centers .md")
      .then((response) => response.text())
      .then((markdown) => {
        if (isMounted) {
          setCenters(parseCentersFromMarkdown(markdown));
        }
      })
      .catch((error) => {
        console.error("Failed to load Delhi centers:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const { orderedCenters, totalPages, paginatedCenters } = useMemo(() => {
    const baseCenters = [namasteDwaarCenter, ...centers];
    const ordered = prioritizeTopCenters(baseCenters);
    const pages = ordered.length > 12 ? 2 : 1;
    const paginated = currentPage === 1 ? ordered.slice(0, 12) : ordered.slice(12);
    return { orderedCenters: ordered, totalPages: pages, paginatedCenters: paginated };
  }, [centers, currentPage, namasteDwaarCenter]);

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
              <span className="block mt-2 md:mt-4 md:whitespace-nowrap">Delhi and North India Region.</span>
            </h2>
            <p
              className="text-[13px] md:text-lg text-white/80 mt-4 md:mt-8 animate-fade-in max-w-4xl mx-auto md:whitespace-nowrap"
              style={{ animationDelay: "200ms" }}
            >
              Discover Delhi and North India region&apos;s finest Ayurvedic centers and wellness retreats.
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

export default DelhiNorthIndiaRegionCenters;
