import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EVENT_SECTION_TITLE,
  BRIDE_PARENTS_TITLE,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
  BRIDE_EVENT_LOCATION,
  GROOM_PARENTS_TITLE,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  GROOM_EVENT_LOCATION,
} from "@/config/const";

gsap.registerPlugin(ScrollTrigger);

const GatherSection: React.FC = () => {
  useEffect(() => {
    // Animation for title from top
    gsap.fromTo(
      ".gather-title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gather-section",
          start: "top 75%",
        },
      }
    );

    // Animation for bride section from left
    gsap.fromTo(
      ".bride-section",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gather-section",
          start: "top 75%",
        },
      }
    );

    // Animation for groom section from right
    gsap.fromTo(
      ".groom-section",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gather-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="gather-section bg-wedding-cream py-16 pt-0 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title with left border and image aligned horizontally */}
        <div className="gather-title mb-8 md:mb-12">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-1 h-48 bg-wedding-brown flex-shrink-0"></div>
              <div className="pt-8">
                <h2 className="text-wedding-brown text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider leading-tight">
                  {EVENT_SECTION_TITLE.split(" ").map((char, i) => (
                    <span key={i} className="block">
                      {char}
                    </span>
                  ))}
                </h2>
              </div>
            </div>

            {/* Vertical image container to keep image tall */}
            <div className="flex-shrink-0">
              <div className="bg-wedding-brown p-2 h-48 md:h-64 lg:h-80 flex items-center justify-center">
                <img
                  src="/images/boxes/vu-quy.webp"
                  alt="囍"
                  className="h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {/* Bride Section */}
          <div className="bride-section space-y-3">
            <h3 className="text-wedding-brown text-2xl md:text-3xl font-bold tracking-wide">
              {BRIDE_PARENTS_TITLE}
            </h3>
            <div className="space-y-1">
              <p className="text-wedding-brown text-lg md:text-xl">
                {BRIDE_FATHER_NAME}
              </p>
              <p className="text-wedding-brown text-lg md:text-xl">
                {BRIDE_MOTHER_NAME}
              </p>
            </div>
            <p className="text-wedding-brown/80 text-base md:text-lg leading-snug">
              {BRIDE_EVENT_LOCATION}
            </p>
          </div>

          {/* Groom Section */}
          <div className="groom-section space-y-3">
            <h3 className="text-wedding-brown text-2xl md:text-3xl font-bold tracking-wide">
              {GROOM_PARENTS_TITLE}
            </h3>
            <div className="space-y-1">
              <p className="text-wedding-brown text-lg md:text-xl">
                {GROOM_FATHER_NAME}
              </p>
              <p className="text-wedding-brown text-lg md:text-xl">
                {GROOM_MOTHER_NAME}
              </p>
            </div>
            <p className="text-wedding-brown/80 text-base md:text-lg leading-snug">
              {GROOM_EVENT_LOCATION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GatherSection;
