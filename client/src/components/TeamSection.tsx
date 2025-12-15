import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";
import founderImage from "@assets/generated_images/male_professional_headshot_founder.png";
import partnerImage from "@assets/generated_images/female_professional_headshot_partner.png";
import associateImage from "@assets/generated_images/male_professional_headshot_associate.png";
import advisorImage from "@assets/generated_images/female_professional_headshot_advisor.png";

const teamMembers = [
  {
    name: "CS Rajesh Kumar",
    role: "Founder & Managing Partner",
    credentials: "FCS, LLB, MBA",
    image: founderImage,
    bio: "25+ years of experience in Company Secretarial practice with expertise in corporate restructuring and SEBI matters.",
  },
  {
    name: "CS Priya Sharma",
    role: "Senior Partner",
    credentials: "FCS, ACS, B.Com (Hons)",
    image: partnerImage,
    bio: "Specializes in Foreign Investment, FEMA compliance, and RBI regulations with 15+ years of experience.",
  },
  {
    name: "CS Amit Verma",
    role: "Partner",
    credentials: "ACS, M.Com, PGDBM",
    image: associateImage,
    bio: "Expert in IPO & Listing services, Due Diligence, and Securities Law with 12+ years of experience.",
  },
  {
    name: "CS Neha Gupta",
    role: "Associate Partner",
    credentials: "ACS, LLB, B.Com",
    image: advisorImage,
    bio: "Handles Company Law compliance, ROC matters, and Corporate Governance advisory for 8+ years.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Meet Our Experts
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight" data-testid="text-team-title">
            Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A team of experienced professionals dedicated to providing
            exceptional Company Secretary services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-visible hover-elevate transition-all duration-300 border-border/50 hover:shadow-lg group"
              data-testid={`card-team-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-28 h-28 mx-auto mb-5 rounded-2xl overflow-hidden border-4 border-background shadow-lg group-hover:shadow-xl transition-shadow">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {member.credentials}
                </p>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid={`button-linkedin-${index}`}
                    onClick={() => console.log(`LinkedIn: ${member.name}`)}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid={`button-email-${index}`}
                    onClick={() => console.log(`Email: ${member.name}`)}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
