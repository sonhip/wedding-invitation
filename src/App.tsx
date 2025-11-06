import FallingSnows from "./components/FallingSnows";
import MusicToggleIcon from "./components/MusicToggleIcon";
import { Toaster } from "./components/ui/toaster";
import CountDownSection from "./pages/count-down-section";
import FooterSection from "./pages/footer-section";
import GallerySection from "./pages/gallery-section";
import HeroSection from "./pages/hero-section";
import Calendar from "./pages/calendar";
import ThankYouSection from "./pages/thank-you-section";
import BrideGroomSection from "./pages/bride-groom-section";
import GatherSection from "./pages/gather-section";
import EventSection from "./pages/event-section";

function App() {
  return (
    <div className="min-h-screen">
      <FallingSnows>
        <HeroSection />
        <Calendar />
        <BrideGroomSection />
        <GatherSection />
        <EventSection />
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
