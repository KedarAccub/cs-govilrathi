import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Suresh Agarwal",
    role: "Managing Director",
    company: "ABC Industries Ltd.",
    content:
      "CS Associates has been our trusted partner for over 10 years. Their expertise in corporate restructuring helped us navigate a complex merger seamlessly. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Meera Patel",
    role: "CFO",
    company: "TechVentures Pvt. Ltd.",
    content:
      "The team's knowledge of SEBI regulations and their timely execution was key in making our IPO possible. Professional, reliable, and always available when needed.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Director",
    company: "Global Exports Ltd.",
    content:
      "Their FEMA compliance expertise has been invaluable for our international operations. CS Associates consistently exceeds our expectations with their thorough approach.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anita Reddy",
    role: "CEO",
    company: "StartUp Hub India",
    content:
      "From company incorporation to ongoing compliance, CS Associates has been with us every step of the way. They make complex regulations easy to understand.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
      );
    }, 6000);
    return () => clearInterval(timer);
  }, [itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, testimonials.length - itemsPerPage)
        : prev - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What Our Clients Say
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight" data-testid="text-testimonials-title">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from businesses who have trusted us with their corporate
            compliance needs.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="relative border-border/50 shadow-md"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <CardContent className="p-7">
                  <Quote className="h-10 w-10 text-primary/15 mb-5" />
                  <p className="text-muted-foreground mb-6 font-serif italic text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              data-testid="button-testimonials-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({
                length: Math.ceil(testimonials.length / itemsPerPage),
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * itemsPerPage)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === i
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                  data-testid={`button-testimonials-dot-${i}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              data-testid="button-testimonials-next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
