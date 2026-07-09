import AboutSection from "../Components/HomeAboutSection";
import HomeEndSection from "../Components/HomeEndSection";
import HeroSection from "../Components/HomeHeroSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSection />
      <AboutSection />
      <HomeEndSection />
    </div>
  );
}
