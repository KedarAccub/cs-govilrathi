import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { SiFacebook } from "react-icons/si";

const services = [
  "Company Law & Compliance",
  "Corporate Restructuring",
  "SEBI & Securities Law",
  "Business Valuation",
  "IPO & Listing Services",
  "Foreign Investment (FEMA)",
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "News & Updates", href: "#news" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg mb-1">Stay Updated</h3>
              <p className="text-background/70 text-sm">Subscribe to our newsletter for regulatory updates</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 max-w-xs"
              />
              <Button variant="secondary" className="gap-2 flex-shrink-0">
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
                CS
              </div>
              <div>
                <span className="font-semibold text-lg">CS Associates</span>
                <p className="text-xs text-background/70">Practicing Company Secretaries</p>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-5 leading-relaxed">
              Leading Company Secretary firm providing comprehensive corporate
              secretarial, compliance, and advisory services since 1998.
            </p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-background/70 hover:text-background hover:bg-background/10 rounded-xl"
                onClick={() => console.log("LinkedIn")}
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/70 hover:text-background hover:bg-background/10 rounded-xl"
                onClick={() => console.log("Twitter")}
                data-testid="footer-twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-background/70 hover:text-background hover:bg-background/10 rounded-xl"
                onClick={() => console.log("Facebook")}
                data-testid="footer-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5">Phone</p>
                  <span className="text-background/70 text-sm">
                    +91-98765-43210
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5">Email</p>
                  <span className="text-background/70 text-sm">
                    info@csassociates.com
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5">Address</p>
                  <span className="text-background/70 text-sm leading-relaxed">
                    123, Corporate Tower, Business District, Mumbai - 400001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-background/15" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-background/60 text-sm">
            <span>&copy; {new Date().getFullYear()} CS Associates. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <button className="hover:text-background transition-colors">Privacy Policy</button>
            <span className="hidden md:inline">|</span>
            <button className="hover:text-background transition-colors">Terms of Service</button>
            <span className="hidden md:inline">|</span>
            <span>Member of ICSI</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="text-background/70 hover:text-background hover:bg-background/10 rounded-xl"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
