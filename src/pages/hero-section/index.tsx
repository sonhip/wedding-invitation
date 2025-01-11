import { gsap } from "gsap";
import { useEffect, useState } from "react";
import WishModalButton from "@/components/WishModalButton";
import image1 from "../../assets/gallery-images/1.webp";
import image10 from "../../assets/gallery-images/10.webp";
import image11 from "../../assets/gallery-images/11.webp";
import image12 from "../../assets/gallery-images/12.webp";
import image13 from "../../assets/gallery-images/13.webp";
import image14 from "../../assets/gallery-images/14.webp";
import image15 from "../../assets/gallery-images/15.webp";
import image16 from "../../assets/gallery-images/16.webp";
import image17 from "../../assets/gallery-images/17.webp";
import image18 from "../../assets/gallery-images/18.webp";
import image19 from "../../assets/gallery-images/19.webp";
import image2 from "../../assets/gallery-images/2.webp";
import image20 from "../../assets/gallery-images/20.webp";
import image3 from "../../assets/gallery-images/3.webp";
import image4 from "../../assets/gallery-images/4.webp";
import image5 from "../../assets/gallery-images/5.webp";
import image6 from "../../assets/gallery-images/6.webp";
import image7 from "../../assets/gallery-images/7.webp";
import image8 from "../../assets/gallery-images/8.webp";
import image9 from "../../assets/gallery-images/9.webp";
export const WEDDING_DATE = "15/01/2025";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
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
        <h1 className="hero-title text-wedding-deep sha text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Trường Sinh & Thu Hà
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
