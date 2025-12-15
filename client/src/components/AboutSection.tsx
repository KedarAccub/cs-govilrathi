import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Award,
  Users,
  ShieldCheck,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the most trusted Company Secretary firm, known for excellence and innovation.",
  },
  {
    icon: Target,
    title: "Mission",
    description:
      "Providing comprehensive, timely, and cost-effective corporate secretarial services.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Maintaining the highest standards of performance in every engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Open communication, ethical conduct, and treating all clients with respect.",
  },
  {
    icon: Users,
    title: "Recognition",
    description:
      "Recognizing the value of our team members and rewarding successful ideas.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Putting our passion into all that we do with belief and loyalty.",
  },
];

const highlights = [
  "25+ years of distinguished experience",
  "500+ companies successfully served",
  "Expert team of qualified professionals",
  "End-to-end compliance solutions",
];

interface AboutSectionProps {
  onReadMore?: () => void;
}

export default function AboutSection({ onReadMore }: AboutSectionProps) {
  return (
    <section id="about">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
            About Our Firm
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight" data-testid="text-about-title">
            Welcome to CS Associates
          </h2>
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            <p>
              <strong className="text-foreground font-semibold">CS Associates</strong> is a
              leading firm of Practicing Company Secretaries established in
              1998, with over 25 years of distinguished experience in
              corporate secretarial, legal, and compliance functions.
            </p>
            <p>
              Our team of dedicated professionals brings extensive expertise
              in Company Law, SEBI regulations, RBI/FEMA compliance, corporate
              restructuring, and investment banking advisory.
            </p>
          </div>
          
          <div className="mt-8 space-y-3">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <Button
            className="mt-8 gap-2 shadow-md"
            onClick={onReadMore}
            data-testid="button-about-read-more"
          >
            Read More About Us
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((value, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300 border-border/50 hover:border-primary/20 hover:shadow-md"
              data-testid={`card-value-${index}`}
            >
              <CardContent className="p-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
