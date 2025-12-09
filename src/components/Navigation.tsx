import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ServicesDropdown } from "@/components/ui/dropdown-services";

interface NavigationProps {
  onQuoteClick: () => void;
}

const Navigation = ({ onQuoteClick }: NavigationProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/centers", label: "Top Centers" },
    { path: "/treatments", label: "Treatments" },
    { path: "/about", label: "About Us" },
  ];

  return (
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 font-poppins font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                onQuoteClick();
                setMobileMenuOpen(false);
              }}
              className="w-full font-poppins font-semibold"
            >
              Get Free Quote
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
