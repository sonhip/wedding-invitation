import Carousel from "./components/Carousel";
import FallingSnows from "./components/FallingSnows";
import MusicToggleIcon from "./components/MusicToggleIcon";
import { Toaster } from "./components/ui/toaster";
import CountDownSection from "./pages/count-down-section";
import EventDetailsSection from "./pages/event-details-section";
import FooterSection from "./pages/footer-section";
import GallerySection from "./pages/gallery-section";
import HeroSection from "./pages/hero-section";
import Calendar from "./pages/calendar";
import ThankYouSection from "./pages/thank-you-section";
import BrideGroomSection from "./pages/bride-groom-section";

function App() {
  return (
    <div className="min-h-screen">
      <FallingSnows>
        <HeroSection />
        <Calendar />
        <BrideGroomSection />
        <EventDetailsSection />
        <Carousel />
        <CountDownSection />
        <GallerySection />
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
