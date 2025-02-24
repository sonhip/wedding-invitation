import WishModalButton from "@/components/WishModalButton";
import { gsap } from "gsap";
import { useEffect, useState } from "react";

export const WEDDING_DATE = "15/03/2025";

const images = [
  "https://res.cloudinary.com/db8mh2s66/image/upload/v1740404783/wedding-images/v6eleejskl4fukahl2xc.jpg",
  "https://res.cloudinary.com/db8mh2s66/image/upload/v1740404782/wedding-images/yhbbxsdprkdvt06lfmab.jpg",
  "https://res.cloudinary.com/db8mh2s66/image/upload/v1740404783/wedding-images/jwxl6cxkkllqsrvkss43.jpg",
  "https://res.cloudinary.com/db8mh2s66/image/upload/v1740404782/wedding-images/csmz2fnpteftwep4lp1c.jpg",
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 3 seconds for image change

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );

    gsap.fromTo(
      ".hero-image",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 1.5 }
    );
  }, []);

  return (
    <section className="relative bg-wedding-light min-h-screen flex items-center justify-center text-center p-6 overflow-hidden">
      {/* Image Slider with repeat if needed */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <div
          className="hero-image w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundRepeat: "repeat-x", // Repeat the image horizontally if not wide enough
            backgroundSize: "auto 100%", // Maintain the aspect ratio and repeat horizontally
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="hero-title text-wedding-deep text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Trần Hiệp & Minh Anh
        </h1>

        {/* Subtitle */}
        <p
          style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
          className="hero-subtitle text-wedding-deep text-2xl md:text-3xl lg:text-4xl mt-8 leading-relaxed"
        >
          {WEDDING_DATE}
        </p>

        <WishModalButton />
      </div>
    </section>
  );
};

export default HeroSection;
