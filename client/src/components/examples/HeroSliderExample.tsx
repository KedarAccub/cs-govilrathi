import HeroSlider from "../HeroSlider";

export default function HeroSliderExample() {
  return (
    <HeroSlider
      onContactClick={() => console.log("Contact clicked")}
      onServicesClick={() => console.log("Services clicked")}
    />
  );
}
