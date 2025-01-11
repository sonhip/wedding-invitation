import { gsap } from "gsap";
import { useEffect, useState } from "react";

const images = [
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831846_UNO06647.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831854_UNO06454.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831856_UNO06456.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831861_UNO06430.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831862_UNO06691.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831865_UNO06571.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831888_UNO06509.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831895_UNO06861.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831898_UNO06564.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831903_UNO06555.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831906_UNO06666.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831907_UNO06487.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831916_UNO06854.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831917_UNO06650.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831917_UNO06720.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831918_UNO06699%20copy.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831926_UNO06616.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831927_UNO06641.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733832028_UNO07070.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733832297_UNO07047.webp",
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

  // GSAP hover animations for buttons
  useEffect(() => {
    gsap.utils.toArray(".btn").forEach((btn) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(btn as HTMLElement, {
        scale: 1.1,
        duration: 0.2,
        ease: "power1.out",
      });
      (btn as HTMLElement).addEventListener("mouseenter", () => tl.play());
      (btn as HTMLElement).addEventListener("mouseleave", () => tl.reverse());
    });
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
        <h1 className="hero-title text-wedding-deep sha text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Trường Sinh & Thu Hà
        </h1>

        {/* Subtitle */}
        <p
          style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
          className="hero-subtitle text-wedding-deep text-2xl md:text-3xl lg:text-4xl mt-8 leading-relaxed"
        >
          08 tháng 01 2025
        </p>

        {/* Button */}
        <button className="btn mt-8 px-6 py-3 bg-wedding-deep text-wedding-light text-lg md:text-xl font-semibold rounded-lg transition">
          Gửi Lời Chúc
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
