import Footer from "@/components/footer";
import FaqScreen from "@/screens/faq-screen";
import FeaturesScreen from "@/screens/features-screen";
import HeroScreen from "@/screens/hero-screen";
import HowItWorksScreen from "@/screens/how-it-works-screen";
import JoinWaitlistScreen from "@/screens/join-waitlist-screen";

export default function Home() {
  return (
    <div className="w-screen min-h-screen h-fit">
      <HeroScreen />
      <FeaturesScreen />
      <HowItWorksScreen />
      <JoinWaitlistScreen />
      <FaqScreen />
      <Footer />
    </div>
  );
}
