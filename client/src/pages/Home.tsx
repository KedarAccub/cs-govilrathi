import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import ComplianceCalendar from "@/components/ComplianceCalendar";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSlider
          onContactClick={() => scrollToSection("contact")}
          onServicesClick={() => scrollToSection("services")}
        />

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <AboutSection onReadMore={() => console.log("Read more about us")} />
              </div>
              <div>
                <ComplianceCalendar
                  onViewFull={() => console.log("View full calendar")}
                />
              </div>
            </div>
          </div>
        </section>

        <ServicesSection
          onLearnMore={(service) => console.log(`Learn more: ${service}`)}
        />

        <StatsSection />

        <TeamSection />

        <TestimonialsSection />

        <NewsSection
          onReadMore={(id) => console.log(`Read article: ${id}`)}
          onViewAll={() => console.log("View all news")}
        />

        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
