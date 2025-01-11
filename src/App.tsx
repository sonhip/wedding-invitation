import AboutUsSection from "./pages/about-us-section";
import CountDownSection from "./pages/count-down-section";
import EventDetailsSection from "./pages/event-details-section";
import FooterSection from "./pages/footer-section";
import GallerySection from "./pages/gallery-section";
import HeroSection from "./pages/hero-section";
import InvitationSection from "./pages/invitation-section";

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
      <EventDetailsSection />
      <InvitationSection />
      <GallerySection />
      <CountDownSection />
      <FooterSection />
    </div>
  );
}

export default App;
