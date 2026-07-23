import AboutSection from "../Components/HomeAboutSection";
import HomeEndSection from "../Components/HomeEndSection";
import HeroSection from "../Components/HomeHeroSection";

export default function Home() {
  return (
    <div className="container mx-auto px-6 2xl:px-0">
      <HeroSection />
      <AboutSection  />
      <HomeEndSection />
    </div>
  );
}
