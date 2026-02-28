import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { ServicesDropdown } from "@/components/ui/dropdown-services";

interface NavigationProps {
  onQuoteClick: () => void;
}

const Navigation = ({ onQuoteClick }: NavigationProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [centersDropdownOpen, setCentersDropdownOpen] = useState(false);

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

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/treatments", label: "Treatments" },
    { path: "/about", label: "About Us" },
  ];

  return (
    <>
      <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-xl md:text-2xl font-bold text-primary font-poppins">
                Savastha Global
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
              
              <Link
                to="/services"
                className={`font-poppins font-medium transition-colors ${
                  location.pathname === "/services"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Services
              </Link>

              {/* Top Centers Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setCentersDropdownOpen(true)}
                onMouseLeave={() => setCentersDropdownOpen(false)}
              >
                <Link
                  to="/centers"
                  className={`flex items-center gap-1 font-poppins font-medium transition-colors ${
                    location.pathname.startsWith("/centers")
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
                      to="/centers/bangalore-hyderabad-chennai-south-india"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setCentersDropdownOpen(false)}
                    >
                      Bangalore, Hyderabad, Chennai & South India.
                    </Link>
                    <Link
                      to="/kerala-ayurvedic-centers-and-hospitals"
                      className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                      onClick={() => setCentersDropdownOpen(false)}
                    >
                      Kerala Ayurvedic Centers and Hospitals
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/treatments"
                className={`font-poppins font-medium transition-colors ${
                  location.pathname === "/treatments"
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Treatments
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
            className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transition-transform duration-300 ease-out ${
              isClosing ? 'translate-x-full' : 'translate-x-0 animate-slide-in-right'
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-primary font-poppins">Menu</h2>
                <button
                  className="text-primary"
                  onClick={closeMenu}
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
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
                <Link
                  to="/services"
                  className={`block py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                    location.pathname === "/services"
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                  onClick={closeMenu}
                >
                  Services
                </Link>
                
                {/* Mobile Centers Section */}
                <div className="space-y-1">
                  <Link
                    to="/centers"
                    className={`block py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                      location.pathname === "/centers"
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-gray-100"
                    }`}
                    onClick={closeMenu}
                  >
                    Top Centers
                  </Link>
                  <Link
                    to="/centers/bangalore-hyderabad-chennai-south-india"
                    className="block py-3 px-8 text-sm font-medium text-foreground hover:bg-gray-50 border-l-2 border-primary/20 ml-2"
                    onClick={closeMenu}
                  >
                    Bangalore, Hyderabad, Chennai & South India.
                  </Link>
                  <Link
                    to="/kerala-ayurvedic-centers-and-hospitals"
                    className="block py-3 px-8 text-sm font-medium text-foreground hover:bg-gray-50 border-l-2 border-primary/20 ml-2"
                    onClick={closeMenu}
                  >
                    Kerala Ayurvedic Centers and Hospitals
                  </Link>
                </div>

                <Link
                  to="/treatments"
                  className={`block py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                    location.pathname === "/treatments"
                      ? "text-primary bg-primary/10"
                      : "text-foreground hover:bg-gray-100"
                  }`}
                  onClick={closeMenu}
                >
                  Treatments
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
                  className="w-full font-poppins font-semibold mt-6"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
