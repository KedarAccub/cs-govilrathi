import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Shield, Award, Users } from "lucide-react";
import heroImage1 from "@assets/generated_images/corporate_meeting_room_professionals.png";
import heroImage2 from "@assets/generated_images/modern_corporate_building_exterior.png";
import heroImage3 from "@assets/generated_images/business_professional_reviewing_documents.png";

const slides = [
  {
    id: 1,
    image: heroImage1,
    subtitle: "Excellence in Corporate Governance",
    title: "Professional Company Secretary Services",
    description:
      "We provide comprehensive Company Secretarial services to help your business thrive while staying compliant with all regulatory requirements.",
  },
  {
    id: 2,
    image: heroImage2,
    subtitle: "Expert Regulatory Guidance",
    title: "Corporate Compliance Made Simple",
    description:
      "Navigate the complexities of company law, SEBI regulations, and corporate governance with our team of experienced professionals.",
  },
  {
    id: 3,
    image: heroImage3,
    subtitle: "Two Decades of Trust",
    title: "Trusted by 500+ Companies",
    description:
      "From startups to listed corporations, we deliver reliable and timely services tailored to your business needs.",
  },
];

const trustBadges = [
  { icon: Shield, label: "ISO Certified" },
  { icon: Award, label: "25+ Years" },
  { icon: Users, label: "500+ Clients" },
];

interface HeroSliderProps {
  onContactClick?: () => void;
  onServicesClick?: () => void;
}

export default function HeroSlider({ onContactClick, onServicesClick }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-10 container mx-auto h-full min-h-[85vh] flex items-center px-4 md:px-6">
        <div className="max-w-2xl">
          <div 
            className={`transition-all duration-700 ease-out ${
              currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              {slides[currentSlide].subtitle}
            </span>
          </div>
          
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            data-testid="text-hero-title"
          >
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-xl">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={onContactClick}
              data-testid="button-hero-consultation"
              className="gap-2 text-base h-12 px-6 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onServicesClick}
              data-testid="button-hero-services"
              className="gap-2 text-base h-12 px-6 bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20"
            >
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/20">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <div className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <badge.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        data-testid="button-hero-next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            data-testid={`button-hero-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
