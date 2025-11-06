import {
  BRIDE_DESCRIPTION,
  BRIDE_NAME,
  BRIDE_IMAGE,
  GROOM_DESCRIPTION,
  GROOM_NAME,
  GROOM_IMAGE,
} from "@/config/const";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const PeopleSection = () => {
  useEffect(() => {
    // Animation cho ảnh cô dâu từ trái
    gsap.fromTo(
      ".bride-image",
      { opacity: 0, x: -100, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bride-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho text cô dâu từ phải
    gsap.fromTo(
      ".bride-info",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bride-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho ảnh chú rể từ phải
    gsap.fromTo(
      ".groom-image",
      { opacity: 0, x: 100, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".groom-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho text chú rể từ trái
    gsap.fromTo(
      ".groom-info",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".groom-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-wedding-light">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {/* Bride Section - Text trái, Ảnh phải */}
        <div className="bride-section flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg">
          {/* Thông tin cô dâu */}
          <div className="bride-info flex-1 text-center md:text-left order-2 md:order-1">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wedding-deep mb-6">
              {BRIDE_NAME}
            </h3>
            <div className="w-24 h-1 bg-wedding-deep mx-auto md:mx-0 mb-6"></div>
            <p className="text-xl md:text-2xl text-wedding-purple leading-relaxed">
              {BRIDE_DESCRIPTION}
            </p>
          </div>

          {/* Ảnh cô dâu */}
          <div className="bride-image flex-shrink-0 order-1 md:order-2">
            <img
              src={BRIDE_IMAGE}
              alt="Cô Dâu"
              loading="eager"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white object-top hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Groom Section - Ảnh trái, Text phải */}
        <div className="groom-section flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg">
          {/* Ảnh chú rể */}
          <div className="groom-image flex-shrink-0">
            <img
              src={GROOM_IMAGE}
              alt="Chú Rể"
              loading="eager"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl border-4 border-white object-top hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Thông tin chú rể */}
          <div className="groom-info flex-1 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wedding-deep mb-6">
              {GROOM_NAME}
            </h3>
            <div className="w-24 h-1 bg-wedding-deep mx-auto md:mx-0 mb-6"></div>
            <p className="text-xl md:text-2xl text-wedding-purple leading-relaxed">
              {GROOM_DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
