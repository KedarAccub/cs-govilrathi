import { useEffect, useState, useRef } from "react";
import { Users, Briefcase, Award, Building } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 25,
    suffix: "+",
    label: "Years of Experience",
    description: "Trusted since 1998",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clients Served",
    description: "Across industries",
  },
  {
    icon: Briefcase,
    value: 2500,
    suffix: "+",
    label: "Cases Completed",
    description: "Successfully delivered",
  },
  {
    icon: Building,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently rated",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 bg-gradient-to-br from-primary via-primary to-[hsl(200,80%,32%)] text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Our Track Record
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Numbers that reflect our commitment to excellence and client success
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  isVisible,
  index,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 2500, isVisible);

  return (
    <div
      className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
      data-testid={`stat-${index}`}
    >
      <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-white/10 flex items-center justify-center">
        <stat.icon className="h-7 w-7" />
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
        {count.toLocaleString()}
        <span className="text-primary-foreground/90">{stat.suffix}</span>
      </div>
      <p className="font-semibold text-lg mb-1">{stat.label}</p>
      <p className="text-primary-foreground/70 text-sm">{stat.description}</p>
    </div>
  );
}
