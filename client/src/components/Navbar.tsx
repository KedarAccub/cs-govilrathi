import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Phone, Calendar, ArrowRight } from "lucide-react";

const services = [
  { title: "Company Law & Compliance", href: "#services", description: "ROC filings, board meetings, statutory registers" },
  { title: "Corporate Restructuring", href: "#services", description: "Mergers, demergers, acquisitions advisory" },
  { title: "SEBI & Securities Law", href: "#services", description: "LODR compliance, insider trading policies" },
  { title: "Business Valuation", href: "#services", description: "Valuation of securities and financial assets" },
  { title: "IPO & Listing Services", href: "#services", description: "Public issues, preferential allotments" },
  { title: "Foreign Investment (FEMA)", href: "#services", description: "RBI approvals, ECB filings" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <a
          href="#"
          className="flex items-center gap-3"
          data-testid="link-logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg shadow-md">
            CS
          </div>
          <div className="hidden sm:block">
            <span className="font-semibold text-lg tracking-tight">CS Associates</span>
            <p className="text-xs text-muted-foreground">Practicing Company Secretaries</p>
          </div>
        </a>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-lg cursor-pointer transition-all"
                onClick={() => scrollToSection("home")}
                data-testid="link-home"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-lg cursor-pointer transition-all"
                onClick={() => scrollToSection("about")}
                data-testid="link-about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium rounded-lg">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[520px] p-5">
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service) => (
                      <NavigationMenuLink
                        key={service.title}
                        className="block select-none rounded-lg p-4 leading-none no-underline outline-none transition-all hover-elevate cursor-pointer border border-transparent hover:border-border/50"
                        onClick={() => scrollToSection("services")}
                        data-testid={`link-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div className="text-sm font-medium leading-none mb-1.5">
                          {service.title}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {service.description}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <button 
                      onClick={() => scrollToSection("services")}
                      className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      View all services
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-lg cursor-pointer transition-all"
                onClick={() => scrollToSection("team")}
                data-testid="link-team"
              >
                Team
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="px-4 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-lg cursor-pointer transition-all"
                onClick={() => scrollToSection("news")}
                data-testid="link-news"
              >
                Insights
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex lg:hidden"
            data-testid="button-contact-icon"
          >
            <Phone className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            data-testid="button-contact-nav"
            className="hidden lg:flex gap-2"
          >
            <Phone className="h-4 w-4" />
            Contact
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            data-testid="button-contact-cta"
            className="hidden sm:flex gap-2 shadow-md"
          >
            <Calendar className="h-4 w-4" />
            Schedule Consultation
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[380px]">
              <div className="flex flex-col gap-2 mt-8">
                <button
                  className="text-left py-3 px-4 text-base font-medium hover-elevate rounded-lg transition-all"
                  onClick={() => scrollToSection("home")}
                  data-testid="mobile-link-home"
                >
                  Home
                </button>
                <button
                  className="text-left py-3 px-4 text-base font-medium hover-elevate rounded-lg transition-all"
                  onClick={() => scrollToSection("about")}
                  data-testid="mobile-link-about"
                >
                  About
                </button>
                <button
                  className="text-left py-3 px-4 text-base font-medium hover-elevate rounded-lg transition-all"
                  onClick={() => scrollToSection("services")}
                  data-testid="mobile-link-services"
                >
                  Services
                </button>
                <button
                  className="text-left py-3 px-4 text-base font-medium hover-elevate rounded-lg transition-all"
                  onClick={() => scrollToSection("team")}
                  data-testid="mobile-link-team"
                >
                  Team
                </button>
                <button
                  className="text-left py-3 px-4 text-base font-medium hover-elevate rounded-lg transition-all"
                  onClick={() => scrollToSection("news")}
                  data-testid="mobile-link-news"
                >
                  Insights
                </button>
                <div className="pt-4 mt-4 border-t space-y-3">
                  <Button
                    className="w-full gap-2"
                    onClick={() => scrollToSection("contact")}
                    data-testid="mobile-button-consultation"
                  >
                    <Calendar className="h-4 w-4" />
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => scrollToSection("contact")}
                    data-testid="mobile-button-contact"
                  >
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
