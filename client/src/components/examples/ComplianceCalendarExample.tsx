import ComplianceCalendar from "../ComplianceCalendar";

export default function ComplianceCalendarExample() {
  return (
    <div className="max-w-md">
      <ComplianceCalendar onViewFull={() => console.log("View full calendar")} />
    </div>
  );
}
