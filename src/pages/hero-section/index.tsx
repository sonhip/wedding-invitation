import {
  BRIDE_NAME,
  GROOM_NAME,
  WEDDING_DATE,
  WEDDING_LOCATION,
  WEDDING_LOCATION_CITY,
} from "@/config/const";
import { useGuestName } from "@/hooks/use-query-params";
import { gsap } from "gsap";
import { useEffect } from "react";

const HeroSection = () => {
  const guestName = useGuestName();

  useEffect(() => {
    // GSAP Animation: text từ 2 bên và các phần khác từ dưới lên
    gsap.fromTo(
      ".from-left",
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.15, delay: 0.3 }
    );
    gsap.fromTo(
      ".from-right",
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.15, delay: 0.45 }
    );
    gsap.fromTo(
      ".from-bottom",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, delay: 0.6 }
    );
  }, []);

  return (
    <section className="relative bg-wedding-cream min-h-screen flex items-center justify-center text-center px-6 py-12 overflow-hidden">
      {/* Corner decorations - using images */}
      <img
        src="/images/boxes/corner-topleft.webp"
        alt=""
        className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 object-contain"
      />
      <img
        src="/images/boxes/corner-topleft.webp"
        alt=""
        className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 object-contain rotate-90"
      />
      <img
        src="/images/boxes/corner-topleft.webp"
        alt=""
        className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 object-contain -rotate-90"
      />
      <img
        src="/images/boxes/corner-topleft.webp"
        alt=""
        className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 object-contain rotate-180"
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8 md:space-y-12">
        {/* SAVE THE DATE */}
        <div className="from-bottom">
          <p className="text-wedding-brown text-2xl tracking-[0.3em] font-light uppercase">
            SAVE THE DATE
          </p>
        </div>

        {/* Bride and Groom Names - xuất hiện từ 2 bên */}
        <div className="space-y-4">
          <h1 className="from-left text-wedding-brown text-5xl md:text-7xl lg:text-8xl font-serif leading-tight">
            {GROOM_NAME}
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[2px] bg-wedding-brown"></div>
            ♥️
            <div className="w-16 h-[2px] bg-wedding-brown"></div>
          </div>

          <h1 className="from-right text-wedding-brown text-5xl md:text-7xl lg:text-8xl font-serif leading-tight">
            {BRIDE_NAME}
          </h1>
        </div>

        {/* Double Happiness Symbol - using SVG */}
        <div className="from-bottom flex justify-center">
          <img
            src="/images/boxes/hi.svg"
            alt="囍"
            className="w-32 h-32 md:w-40 md:h-40"
          />
        </div>

        {/* Wedding Date */}
        <div className="from-bottom">
          <p className="text-wedding-brown text-3xl md:text-5xl lg:text-6xl font-light tracking-widest">
            {WEDDING_DATE}
          </p>
        </div>

        {/* Location */}
        <div className="from-bottom space-y-2">
          <p className="text-wedding-brown text-lg md:text-xl lg:text-2xl font-light">
            {WEDDING_LOCATION}
          </p>
          <p className="text-wedding-brown text-lg md:text-xl lg:text-2xl font-light">
            {WEDDING_LOCATION_CITY}
          </p>
        </div>

        {/* Guest Name & Invitation */}
        <div className="from-bottom space-y-4 pt-4">
          <div className="w-full h-[1px] bg-wedding-brown opacity-30 max-w-md mx-auto"></div>
          <p className="text-wedding-brown text-xl md:text-2xl font-serif italic">
            TRÂN TRỌNG KÍNH MỜI
          </p>
          <p className="text-wedding-brown mt-2 text-2xl md:text-3xl lg:text-4xl font-tinos italic !-mb-3">
            {guestName}
          </p>
          <div className="flex items-center justify-center gap-2 !mt-0">
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
            <span className="text-wedding-brown">•</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
