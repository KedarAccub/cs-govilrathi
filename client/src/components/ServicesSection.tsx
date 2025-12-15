import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  GitMerge,
  Scale,
  TrendingUp,
  Landmark,
  Globe,
  Search,
  FileCheck,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Company Law & Compliance",
    description:
      "Complete secretarial services including ROC filings, board meetings, statutory registers, and annual compliance.",
  },
  {
    icon: GitMerge,
    title: "Corporate Restructuring",
    description:
      "Expert advisory on mergers, demergers, acquisitions, and strategic restructuring under NCLT procedures.",
  },
  {
    icon: Scale,
    title: "SEBI & Securities Law",
    description:
      "SEBI regulations, LODR requirements, insider trading policies, and takeover code advisory.",
  },
  {
    icon: TrendingUp,
    title: "Business Valuation",
    description:
      "Registered valuers providing valuation of securities, financial assets, and business interests.",
  },
  {
    icon: Landmark,
    title: "IPO & Listing Services",
    description:
      "End-to-end support for public issues, rights issues, preferential allotments, and stock exchange listings.",
  },
  {
    icon: Globe,
    title: "Foreign Investment (FEMA)",
    description:
      "RBI approvals, FEMA compliance, ECB filings, and advisory on foreign direct investment regulations.",
  },
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Comprehensive legal and secretarial due diligence for M&A transactions and corporate deals.",
  },
  {
    icon: FileCheck,
    title: "Company Registration",
    description:
      "Incorporation of Private Limited, Public Limited, Section 8 companies, LLPs, and foreign subsidiaries.",
  },
  {
    icon: Briefcase,
    title: "Corporate Advisory",
    description:
      "Strategic advisory on corporate governance, board effectiveness, policy drafting, and regulatory matters.",
  },
];

interface ServicesSectionProps {
  onLearnMore?: (service: string) => void;
}

export default function ServicesSection({ onLearnMore }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive Company Secretary services tailored to meet all your
            corporate compliance and governance requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-elevate cursor-pointer transition-all duration-300 border-border/50 hover:border-primary/30 hover:shadow-lg bg-card"
              data-testid={`card-service-${index}`}
            >
              <CardContent className="p-6 md:p-7">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-medium text-primary group/btn"
                  onClick={() => onLearnMore?.(service.title)}
                  data-testid={`button-learn-more-${index}`}
                >
                  Learn More
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
