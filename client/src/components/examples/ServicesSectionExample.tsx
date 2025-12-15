import ServicesSection from "../ServicesSection";

export default function ServicesSectionExample() {
  return (
    <ServicesSection
      onLearnMore={(service) => console.log(`Learn more about: ${service}`)}
    />
  );
}
