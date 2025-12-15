import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Clock, ArrowRight, Download } from "lucide-react";
import { format, addDays, differenceInDays } from "date-fns";

const getUpcomingDeadlines = () => {
  const today = new Date();
  return [
    {
      date: addDays(today, 1),
      title: "Payment of TDS/TCS",
      category: "Tax",
      description: "Payment of TDS/TCS for the previous month",
    },
    {
      date: addDays(today, 3),
      title: "GSTR-1 Filing",
      category: "GST",
      description: "Monthly Return of Outward Supplies",
    },
    {
      date: addDays(today, 5),
      title: "Monthly ROC Compliance",
      category: "ROC",
      description: "Verification of compliance status",
    },
    {
      date: addDays(today, 10),
      title: "GSTR-3B Filing",
      category: "GST",
      description: "Summary Return cum Payment of Tax",
    },
    {
      date: addDays(today, 15),
      title: "Advance Tax Payment",
      category: "Tax",
      description: "Third Installment of Advance Tax (75%)",
    },
    {
      date: addDays(today, 15),
      title: "PF/ESI Payment",
      category: "Labor",
      description: "E-Payment of PF and ESI",
    },
    {
      date: addDays(today, 25),
      title: "Board Meeting",
      category: "Company Law",
      description: "Quarterly Board Meeting requirement",
    },
    {
      date: addDays(today, 30),
      title: "Annual Return Filing",
      category: "ROC",
      description: "Form MGT-7 filing deadline",
    },
  ];
};

function getUrgencyColor(daysRemaining: number): string {
  if (daysRemaining <= 3) return "destructive";
  if (daysRemaining <= 7) return "secondary";
  return "outline";
}

interface ComplianceCalendarProps {
  onViewFull?: () => void;
}

export default function ComplianceCalendar({ onViewFull }: ComplianceCalendarProps) {
  const deadlines = getUpcomingDeadlines();
  const today = new Date();

  return (
    <Card className="h-full border-border/50 shadow-md" data-testid="card-compliance-calendar">
      <CardHeader className="pb-4 border-b">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">Compliance Calendar</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">
                {format(today, "MMMM yyyy")}
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {deadlines.length} Upcoming
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[380px]">
          <div className="p-4 space-y-2">
            {deadlines.map((deadline, index) => {
              const daysRemaining = differenceInDays(deadline.date, today);
              return (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-muted/50 hover-elevate cursor-pointer transition-all border border-transparent hover:border-border/50"
                  data-testid={`deadline-${index}`}
                >
                  <div className="flex-shrink-0 w-12 text-center">
                    <div className="text-xs text-muted-foreground uppercase font-medium">
                      {format(deadline.date, "MMM")}
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {format(deadline.date, "dd")}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <h4 className="font-medium text-sm">
                        {deadline.title}
                      </h4>
                      <Badge
                        variant={getUrgencyColor(daysRemaining) as any}
                        className="text-xs flex-shrink-0"
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        {daysRemaining === 0
                          ? "Today"
                          : daysRemaining === 1
                          ? "Tomorrow"
                          : `${daysRemaining}d`}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {deadline.description}
                    </p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {deadline.category}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        <div className="p-4 border-t flex gap-2">
          <Button
            variant="outline"
            className="flex-1 gap-2"
            onClick={onViewFull}
            data-testid="button-view-full-calendar"
          >
            View Full Calendar
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            data-testid="button-download-calendar"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
