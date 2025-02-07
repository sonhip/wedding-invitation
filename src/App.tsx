import Carousel from "./components/Carousel";
import FallingSnows from "./components/FallingSnows";
import MusicToggleIcon from "./components/MusicToggleIcon";
import { Toaster } from "./components/ui/toaster";
import AboutUsSection from "./pages/about-us-section";
import CountDownSection from "./pages/count-down-section";
import EventDetailsSection from "./pages/event-details-section";
import FooterSection from "./pages/footer-section";
import HeroSection from "./pages/hero-section";
import PeopleSection from "./pages/people-section";
import ThankYouSection from "./pages/thank-you-section";

function App() {
  return (
    <div className="min-h-screen">
      <FallingSnows>
        <HeroSection />
        <PeopleSection />
        <AboutUsSection />
        <EventDetailsSection />
        <Carousel />
        {/* <GallerySection /> */}
        <CountDownSection />
        <ThankYouSection />
        <FooterSection />
        <Toaster />

        {/* Đặt MusicToggleIcon ở cuối cùng */}
        <MusicToggleIcon />
      </FallingSnows>
    </div>
  );
}

export default App;
