import HeroSection from "../components/HeroSection.js";
import LockerSelector from "../components/LockerSelector.js";
import Benefits from "../components/Benefits.js";
import CallToAction from "../components/CallToAction.js";
import Faq from "../components/Faq.js";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LockerSelector />
      <Benefits />
      <Faq />
      <CallToAction />
    </div>
  );
}
