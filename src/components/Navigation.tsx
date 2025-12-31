import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ServicesDropdown } from "@/components/ui/dropdown-services";

interface NavigationProps {
  onQuoteClick: () => void;
}

const Navigation = ({ onQuoteClick }: NavigationProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    { path: "/centers", label: "Top Centers" },
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
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-poppins font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
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
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-3 px-4 rounded-lg font-poppins font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-gray-100"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}
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
