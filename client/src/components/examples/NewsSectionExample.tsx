import NewsSection from "../NewsSection";

export default function NewsSectionExample() {
  return (
    <NewsSection
      onReadMore={(id) => console.log(`Read more: ${id}`)}
      onViewAll={() => console.log("View all news")}
    />
  );
}
