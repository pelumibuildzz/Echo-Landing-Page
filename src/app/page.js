import FeaturesScreen from "@/screens/features-screen";
import HeroScreen from "@/screens/hero-screen";
import HowItWorksScreen from "@/screens/how-it-works-screen";

export default function Home() {
  return (
    <div className="w-screen min-h-screen h-fit">
      <HeroScreen />
      <FeaturesScreen />
      <HowItWorksScreen />
    </div>
  );
}
