import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface NavigationProps {
  onQuoteClick: () => void;
}

const Navigation = ({ onQuoteClick }: NavigationProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [centersDropdownOpen, setCentersDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileCentersOpen, setMobileCentersOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen || isClosing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, isClosing]);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setMobileMenuOpen(false);
    }, 300);
  };

  const centersLinks = [
    { to: "/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india", label: "Top 10 Centers Bangalore, Hyderabad, Chennai & South India" },
    { to: "/top-12-ayurvedic-centers-hospitals-kerala-india", label: "Kerala Region" },
    { to: "/top-15-ayurvedic-centers-hospitals-goa-india", label: "Goa Region" },
    { to: "/top-10-ayurvedic-centers-hospitals-himalayas-rishikesh-uttarakhand-north-east-india", label: "Top 10 Centers Himalayas & North East India" },
    { to: "/delhi-and-north-india-region-ayurvedic-centers-and-hospitals", label: "Delhi, NCR Region" },
    { to: "/mumbai-pune-nashik-west-india-ayurvedic-centers-and-hospitals", label: "Mumbai, Pune, Nashik & West India." },
  ];

  const programsLinks = [
    { to: "/ayurveda-packages/panchakarma-detox", label: "Panchakarma Detox" },
    { to: "/ayurveda-packages/disease-specific", label: "Disease-Specific" },
    { to: "/ayurveda-packages/lifestyle-wellness", label: "Lifestyle & Wellness" },
    { to: "/ayurveda-packages/beauty-rejuvenation", label: "Beauty & Rejuvenation" },
    { to: "/ayurveda-packages/integrated-retreat", label: "Integrated Retreat" },
  ];

  const servicesLinks = [
    { to: "/holistic-healing/touch-and-bodywork-therapies-in-india", label: "Touch & Bodywork Therapies" },
    { to: "/holistic-healing/energy-and-spiritual-healing-treatments-in-india", label: "Energy & Spiritual Healing" },
    { to: "/holistic-healing/mind-body-interventions-therapies-in-india", label: "Mind-Body Interventions" },
    { to: "/holistic-healing/biological-and-natural-plant-based-therapies-in-india", label: "Biological & Natural/Plant-Based Therapies" },
    { to: "/holistic-healing/specialized-alternative-medical-systems-in-india", label: "Specialized Alternative Medical Systems" },
    { to: "/holistic-healing/ayurveda-ancient-wisdom-for-modern-wellness-in-india", label: "Ayurvedic Healing" },
  ];

  return (
    <>
      <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-xl md:text-2xl font-bold text-primary font-poppins">
                MyVaidyam
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-poppins font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div
                  className={`flex items-center gap-1 font-poppins font-medium cursor-pointer transition-colors ${
                    location.pathname === "/holistic-healing/ayurveda-ancient-wisdom-for-modern-wellness-in-india" || location.pathname.startsWith("/holistic-healing")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Holistic Healing
                  <ChevronDown size={16} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-white border border-border rounded-lg shadow-xl overflow-hidden min-w-[320px]">
                    {servicesLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Centers Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setCentersDropdownOpen(true)}
                onMouseLeave={() => setCentersDropdownOpen(false)}
              >
                <Link
                  to="/centers"
                  className={`flex items-center gap-1 font-poppins font-medium cursor-pointer transition-colors ${
                    location.pathname.startsWith("/centers") ||
                    location.pathname === "/top-12-ayurvedic-centers-hospitals-kerala-india" ||
                    location.pathname === "/top-15-ayurvedic-centers-hospitals-goa-india" ||
                    location.pathname === "/top-10-ayurvedic-centers-hospitals-himalayas-rishikesh-uttarakhand-north-east-india" ||
                    location.pathname === "/delhi-and-north-india-region-ayurvedic-centers-and-hospitals" ||
                    location.pathname === "/mumbai-pune-rajasthan-west-india-ayurvedic-centers-and-hospitals" ||
                    location.pathname === "/mumbai-pune-nashik-west-india-ayurvedic-centers-and-hospitals" ||
                    location.pathname === "/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india"
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Top Centers
                  <ChevronDown size={16} className={`transition-transform duration-200 ${centersDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${centersDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-white border border-border rounded-lg shadow-xl overflow-hidden min-w-[280px]">
                    <Link
                      to="/top-10-ayurvedic-centers-hospitals-bangalore-hyderabad-chennai-south-india"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setCentersDropdownOpen(false)}
                    >
                      Bangalore, Hyderabad, Chennai & South India.
                    </Link>
                    <Link
                      to="/top-12-ayurvedic-centers-hospitals-kerala-india"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setCentersDropdownOpen(false)}
                    >
                      Kerala Region
                    </Link>
                    <Link
                      to="/top-15-ayurvedic-centers-hospitals-goa-india"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setCentersDropdownOpen(false)}
                    >
                      Goa Region
                    </Link>
                    <Link
                      to="/top-10-ayurvedic-centers-hospitals-himalayas-rishikesh-uttarakhand-north-east-india"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setCentersDropdownOpen(false)}
                    >
                      Himalayas, Rishikesh, Uttarakhand & North East
                    </Link>
                    <Link
                      to="/delhi-and-north-india-region-ayurvedic-centers-and-hospitals"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setCentersDropdownOpen(false)}
                    >
                      Delhi, NCR Region
                    </Link>
                    <Link
                      to="/mumbai-pune-nashik-west-india-ayurvedic-centers-and-hospitals"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setCentersDropdownOpen(false)}
                    >
                      Mumbai, Pune, Nashik & West India.
                    </Link>
                  </div>
                </div>
              </div>

              {/* Ayurveda Packages Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <Link
                  to="/ayurveda-packages/panchakarma-detox"
                  className={`flex items-center gap-1 font-poppins font-medium cursor-pointer transition-colors ${
                    location.pathname.startsWith("/ayurveda-packages")
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Ayurveda Packages
                  <ChevronDown size={16} className={`transition-transform duration-200 ${programsDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${programsDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-white border border-border rounded-lg shadow-xl overflow-hidden min-w-[280px]">
                    <Link
                      to="/ayurveda-packages/panchakarma-detox"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      Panchakarma Detox
                    </Link>
                    <Link
                      to="/ayurveda-packages/disease-specific"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      Disease-Specific
                    </Link>
                    <Link
                      to="/ayurveda-packages/lifestyle-wellness"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      Lifestyle & Wellness
                    </Link>
                    <Link
                      to="/ayurveda-packages/beauty-rejuvenation"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      Beauty & Rejuvenation
                    </Link>
                    <Link
                      to="/ayurveda-packages/integrated-retreat"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setProgramsDropdownOpen(false)}
                    >
                      Integrated Retreat
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/ayurveda-treatments"
                className={`font-poppins font-medium transition-colors ${
                  location.pathname === "/ayurveda-treatments"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Ayurveda treatments
              </Link>

              <Link
                to="/about"
                className={`font-poppins font-medium transition-colors ${
                  location.pathname === "/about"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                About Us
              </Link>

              <Button onClick={onQuoteClick} className="font-poppins font-semibold">
                Get Free Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMenu();
                } else {
                  setMobileMenuOpen(true);
                }
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {(mobileMenuOpen || isClosing) && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          {/* Backdrop with blur */}
          <div 
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
              isClosing ? 'opacity-0' : 'opacity-100 animate-fade-in'
            }`}
            onClick={closeMenu}
          />
          
          {/* Menu Panel */}
          <div 
            className={`fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-out ${
              isClosing ? 'translate-x-full' : 'translate-x-0 animate-slide-in-right'
            } flex flex-col`}
          >
            <div className="p-5 border-b border-border shrink-0">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-primary font-poppins">Menu</h2>
                <button
                  className="text-primary"
                  onClick={closeMenu}
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              <Link
                to="/"
                className={`block py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-gray-100"
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="space-y-1">
                <button
                  className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                    location.pathname === "/holistic-healing/ayurveda-ancient-wisdom-for-modern-wellness-in-india" || location.pathname.startsWith("/holistic-healing")
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileServicesOpen((prev) => !prev);
                  }}
                >
                  <span>Holistic Healing</span>
                  <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="space-y-1 pl-2">
                    {servicesLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block py-2.5 px-4 text-sm font-medium text-foreground hover:bg-gray-50 border-l-2 border-primary/20 rounded-md"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Centers Section */}
              <div className="space-y-1">
                <Link
                  to="/centers"
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                    location.pathname.startsWith("/centers")
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileCentersOpen((prev) => !prev);
                  }}
                >
                  <span>Top Centers</span>
                  <ChevronDown size={18} className={`transition-transform ${mobileCentersOpen ? "rotate-180" : ""}`} />
                </Link>
                {mobileCentersOpen && (
                  <div className="space-y-1 pl-2">
                    <Link
                      to="/centers"
                      className="block py-2.5 px-4 text-sm font-medium text-foreground hover:bg-gray-50 border-l-2 border-primary/20 rounded-md"
                      onClick={closeMenu}
                    >
                      All Centers
                    </Link>
                    {centersLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block py-2.5 px-4 text-sm font-medium text-foreground hover:bg-gray-50 border-l-2 border-primary/20 rounded-md"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Ayurveda Packages Section */}
              <div className="space-y-1">
                <Link
                  to="/ayurveda-packages/panchakarma-detox"
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                    location.pathname.startsWith("/ayurveda-packages")
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileProgramsOpen((prev) => !prev);
                  }}
                >
                  <span>Ayurveda Packages</span>
                  <ChevronDown size={18} className={`transition-transform ${mobileProgramsOpen ? "rotate-180" : ""}`} />
                </Link>
                {mobileProgramsOpen && (
                  <div className="space-y-1 pl-2">
                    {programsLinks.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block py-2.5 px-4 text-sm font-medium text-foreground hover:bg-gray-50 border-l-2 border-primary/20 rounded-md"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/ayurveda-treatments"
                className={`block py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                  location.pathname === "/ayurveda-treatments"
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-gray-100"
                }`}
                onClick={closeMenu}
              >
                Ayurveda treatments
              </Link>
              <Link
                to="/about"
                className={`block py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                  location.pathname === "/about"
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:bg-gray-100"
                }`}
                onClick={closeMenu}
              >
                About Us
              </Link>
              <Button
                onClick={() => {
                  onQuoteClick();
                  closeMenu();
                }}
                className="w-full font-poppins font-semibold mt-4"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

