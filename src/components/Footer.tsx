import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary font-poppins mb-4">
              Savastha Global
            </h3>
            <p className="text-sm text-muted-foreground">
              20 years of medical tourism experience guiding you to India's best Ayurvedic centers.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground font-poppins mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/centers" className="text-muted-foreground hover:text-primary transition-colors">Top Centers</Link></li>
              <li><Link to="/treatments" className="text-muted-foreground hover:text-primary transition-colors">Treatments</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground font-poppins mb-4">Popular Treatments</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Panchakarma</li>
              <li>Shirodhara</li>
              <li>Abhyanga</li>
              <li>Stress & Wellness</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground font-poppins mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Email: info@savasthaglobal.com<br />
              Phone: +91 XXX XXX XXXX
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Savastha Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
