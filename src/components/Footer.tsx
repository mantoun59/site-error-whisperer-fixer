import { Mail, Phone, MapPin, ExternalLink, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import LogoDisplay from "@/components/LogoDisplay";
import { formatCopyrightLine } from "@/utils/legalNotices";

const Footer = () => {
  const navigate = useNavigate();

  const handleHashNavigation = (hash: string) => {
    navigate('/compliance');
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Company Info */}
          <div className="space-y-6">
            <div className="mb-4">
              <LogoDisplay size="sm" showTagline={true} />
            </div>
            <p className="text-sm text-foreground mb-4">
              Measuring Minds. Shaping Futures.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://www.authencore.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-foreground hover:text-primary transition-colors text-sm"
              >
                www.authencore.org
              </a>
              
              {/* Social Media Links */}
              <div className="space-y-2">
                <h5 className="text-sm font-semibold text-foreground">Follow Us</h5>
                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // Facebook brand color #1877F2
                    }}
                    className="text-[#1877F2] hover:text-[#1664D8] transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // X (Twitter) brand color #000000
                    }}
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // Instagram brand gradient simplified to #E4405F
                    }}
                    className="text-[#E4405F] hover:text-[#C73650] transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // LinkedIn brand color #0A66C2
                    }}
                    className="text-[#0A66C2] hover:text-[#0956A5] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-foreground hover:text-primary transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/assessment"
                className="block text-foreground hover:text-primary transition-colors text-sm"
              >
                Assessments
              </Link>
              <Link
                to="/about"
                className="block text-foreground hover:text-primary transition-colors text-sm"
              >
                About Us
              </Link>
              <Link
                to="/faq"
                className="block text-foreground hover:text-primary transition-colors text-sm"
              >
                FAQ & Platform Guide
              </Link>
              <Link
                to="/privacy"
                className="block text-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Right Section - Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-foreground">
              Contact
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contact@authencore.org"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  contact@authencore.org
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contact@authencore.org"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Business Inquiries
                </a>
              </div>
              
              <div className="pt-2">
                <a
                  href="mailto:contact@authencore.org"
                  className="inline-flex items-center text-primary hover:text-primary-glow transition-colors font-medium"
                >
                  Contact Form
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground text-sm">
              {formatCopyrightLine()} | Advanced AI-Powered Talent Assessment Solutions
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="text-foreground hover:text-primary transition-colors">
                FAQ & Support
              </Link>
              <a href="mailto:contact@authencore.org" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;