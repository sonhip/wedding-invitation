import { gsap } from "gsap";
import { useEffect } from "react";

const HeroSection = () => {
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
    <section className="relative bg-wedding-light min-h-screen flex items-center justify-center text-center p-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="hero-title text-wedding-deep text-4xl md:text-5xl font-bold">
          Anna & John's Wedding
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-wedding-purple text-lg md:text-xl mt-4">
          Join us to celebrate the beginning of forever.
        </p>

        {/* Image */}
        <div className="hero-image mt-8 mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl aspect-w-16 aspect-h-9">
          <img
            src="https://placehold.co/600x400"
            alt="Wedding Placeholder"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-wedding-pink text-white text-base md:text-lg font-semibold rounded-lg hover:bg-wedding-purple transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
