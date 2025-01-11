import { Toaster } from "./components/ui/toaster";
import AboutUsSection from "./pages/about-us-section";
import CountDownSection from "./pages/count-down-section";
import EventDetailsSection from "./pages/event-details-section";
import FooterSection from "./pages/footer-section";
import GallerySection from "./pages/gallery-section";
import HeroSection from "./pages/hero-section";
import PeopleSection from "./pages/people-section";
import ThankYouSection from "./pages/thank-you-section";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <PeopleSection />
      <AboutUsSection />
      <EventDetailsSection />
      <GallerySection />
      <CountDownSection />
      <ThankYouSection />
      <FooterSection />
      <Toaster />
    </div>
  );
}

export default App;
