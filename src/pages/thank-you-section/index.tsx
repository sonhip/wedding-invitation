import React, { useEffect } from "react";
import { gsap } from "gsap";
import {
  THANK_YOU_TITLE,
  THANK_YOU_MESSAGE_1,
  THANK_YOU_MESSAGE_2,
} from "@/config/const";

const ThankYouSection: React.FC = () => {
  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".thank-you-text",
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.3,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section className="py-16 bg-wedding-brown text-center min-w-96">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="thank-you-text text-3xl md:text-4xl font-bold text-white">
          {THANK_YOU_TITLE}
        </h2>
        <p className="thank-you-text text-lg text-white/80 mt-4">
          {THANK_YOU_MESSAGE_1}
        </p>
        <p className="thank-you-text text-lg text-white/80 mt-2">
          {THANK_YOU_MESSAGE_2}
        </p>
      </div>
    </section>
  );
};

export default ThankYouSection;
