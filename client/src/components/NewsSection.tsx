import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { format, subDays } from "date-fns";

const newsItems = [
  {
    id: 1,
    title: "SEBI Updates LODR Regulations for Enhanced Corporate Governance",
    excerpt:
      "New amendments to Listing Obligations and Disclosure Requirements aim to strengthen corporate governance practices for listed companies.",
    date: subDays(new Date(), 2),
    category: "SEBI",
    featured: true,
  },
  {
    id: 2,
    title: "MCA Extends Deadline for Annual Return Filing",
    excerpt:
      "Ministry of Corporate Affairs announces extension for Form MGT-7 and AOC-4 filings, providing relief to companies and professionals.",
    date: subDays(new Date(), 5),
    category: "Company Law",
    featured: false,
  },
  {
    id: 3,
    title: "New Guidelines on Related Party Transactions",
    excerpt:
      "Comprehensive framework released for approval and disclosure of related party transactions under Companies Act and SEBI regulations.",
    date: subDays(new Date(), 8),
    category: "Compliance",
    featured: false,
  },
];

interface NewsSectionProps {
  onReadMore?: (id: number) => void;
  onViewAll?: () => void;
}

export default function NewsSection({ onReadMore, onViewAll }: NewsSectionProps) {
  const featuredItem = newsItems.find(item => item.featured);
  const otherItems = newsItems.filter(item => !item.featured);

  return (
    <section id="news" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Stay Updated
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" data-testid="text-news-title">
              Latest Insights
            </h2>
          </div>
          <Button
            variant="outline"
            onClick={onViewAll}
            data-testid="button-view-all-news"
            className="gap-2 self-start md:self-auto"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredItem && (
            <Card
              className="group overflow-visible hover-elevate cursor-pointer transition-all duration-300 border-border/50 hover:shadow-lg lg:row-span-2"
              onClick={() => onReadMore?.(featuredItem.id)}
              data-testid={`card-news-${featuredItem.id}`}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-5 flex-wrap">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/15">{featuredItem.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(featuredItem.date, "MMM dd, yyyy")}
                  </span>
                </div>
                <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors leading-tight">
                  {featuredItem.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {featuredItem.excerpt}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-medium text-primary self-start group/btn"
                  data-testid={`button-read-more-${featuredItem.id}`}
                >
                  Read Full Article
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                </Button>
              </CardContent>
            </Card>
          )}
          
          {otherItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-visible hover-elevate cursor-pointer transition-all duration-300 border-border/50 hover:shadow-md"
              onClick={() => onReadMore?.(item.id)}
              data-testid={`card-news-${item.id}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {format(item.date, "MMM dd, yyyy")}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto font-medium text-primary group/btn"
                  data-testid={`button-read-more-${item.id}`}
                >
                  Read More
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
