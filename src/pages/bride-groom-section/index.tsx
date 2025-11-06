import {
  BRIDE_NAME,
  GROOM_NAME,
  INVITATION_TITLE,
  INVITATION_SUBTITLE,
  INVITATION_STORY,
  BRIDE_IMAGE,
  GROOM_IMAGE,
} from "@/config/const";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const BrideGroomSection = () => {
  useEffect(() => {
    // Animation cho tiêu đề từ trên
    gsap.fromTo(
      ".invitation-title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".invitation-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho subtitle từ trái
    gsap.fromTo(
      ".invitation-subtitle",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".invitation-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho ảnh cô dâu từ trái
    gsap.fromTo(
      ".groom-image",
      { opacity: 0, x: -100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".invitation-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho ảnh chú rể từ phải
    gsap.fromTo(
      ".bride-image",
      { opacity: 0, x: 100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".invitation-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho text cô dâu từ trái
    gsap.fromTo(
      ".groom-text",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".invitation-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho text chú rể từ phải
    gsap.fromTo(
      ".bride-text",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".invitation-section",
          start: "top 75%",
        },
      }
    );

    // Animation cho story text từ dưới
    gsap.fromTo(
      ".invitation-story",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".invitation-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="invitation-section py-16 pb-4 md:py-24 bg-wedding-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="invitation-title text-center mb-4 md:mb-6">
          <h2 className="text-wedding-brown text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">
            {INVITATION_TITLE}
          </h2>
        </div>

        {/* Subtitle */}
        <div className="invitation-subtitle text-center mb-8 md:mb-12">
          <p className="text-wedding-brown/70 text-lg md:text-xl lg:text-2xl">
            {INVITATION_SUBTITLE}
          </p>
        </div>

        {/* Couple Images */}
        <div className="relative mb-8 md:mb-12">
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Groom Image */}
            <div className="groom-image flex justify-center md:justify-start">
              <img
                src={GROOM_IMAGE}
                alt="Chú Rể"
                loading="eager"
                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bride Image */}
            <div className="bride-image flex justify-center md:justify-end">
              <img
                src={BRIDE_IMAGE}
                alt="Cô Dâu"
                loading="eager"
                className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bride and Groom Names */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto mb-8 md:mb-12">
          {/* Groom */}
          <div className="groom-text text-center">
            <p className="text-wedding-brown/60 text-4xl lg:text-5xl font-serif italic mb-2">
              Chú rể
            </p>
            <h3 className="text-wedding-brown text-4xl lg:text-5xl font-bold uppercase tracking-wide">
              {GROOM_NAME}
            </h3>
          </div>

          {/* Bride */}
          <div className="bride-text text-center">
            <p className="text-wedding-brown/60 text-4xl lg:text-5xl font-serif italic mb-2">
              Cô dâu
            </p>
            <h3 className="text-wedding-brown text-4xl lg:text-5xl font-bold uppercase tracking-wide">
              {BRIDE_NAME}
            </h3>
          </div>
        </div>

        {/* Story Text */}
        <div className="invitation-story max-w-4xl mx-auto text-center">
          <p className="text-wedding-brown/80 text-base md:text-lg lg:text-xl leading-relaxed">
            {INVITATION_STORY}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrideGroomSection;
