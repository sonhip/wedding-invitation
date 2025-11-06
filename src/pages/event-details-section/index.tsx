import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EVENT_SECTION_TITLE,
  EVENT_SECTION_DESCRIPTION,
  BRIDE_EVENT_TITLE,
  BRIDE_EVENT_DATE,
  BRIDE_EVENT_TIME,
  BRIDE_EVENT_LOCATION,
  BRIDE_EVENT_MAP_LINK,
  GROOM_EVENT_TITLE,
  GROOM_EVENT_DATE,
  GROOM_EVENT_TIME,
  GROOM_EVENT_LOCATION,
  GROOM_EVENT_MAP_LINK,
  GALLERY_CAROUSEL,
} from "@/config/const";

gsap.registerPlugin(ScrollTrigger);

const EventDetailsSection: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>(
    GALLERY_CAROUSEL[0]
  );

  useEffect(() => {
    // GSAP Scroll animations
    gsap.fromTo(
      ".event-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".event-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".event-description",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".event-description",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".event-details",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".event-details",
          start: "top 80%",
        },
      }
    );

    // Background rotation
    const interval = setInterval(() => {
      // fade out
      gsap.to(".background-image", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // update image
          setBackgroundImage((prev) => {
            const currentIndex = GALLERY_CAROUSEL.indexOf(prev);
            const nextIndex = (currentIndex + 1) % GALLERY_CAROUSEL.length;
            return GALLERY_CAROUSEL[nextIndex];
          });
          // fade in
          gsap.to(".background-image", {
            opacity: 1,
            duration: 1,
          });
        },
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      // optional: kill ScrollTriggers created by this component
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []); // images is stable here (constant within component)

  // hover animations for .btn with cleanup
  useEffect(() => {
    const btns = gsap.utils.toArray(".btn") as HTMLElement[];
    const handlers: Array<{
      el: HTMLElement;
      enter: EventListenerOrEventListenerObject;
      leave: EventListenerOrEventListenerObject;
    }> = [];

    btns.forEach((btn) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(btn as HTMLElement, {
        scale: 1.1,
        duration: 0.2,
        ease: "power1.out",
      });
      const enter = () => tl.play();
      const leave = () => tl.reverse();
      btn.addEventListener("mouseenter", enter);
      btn.addEventListener("mouseleave", leave);
      handlers.push({ el: btn, enter, leave });
    });

    return () =>
      handlers.forEach((h) => {
        h.el.removeEventListener("mouseenter", h.enter);
        h.el.removeEventListener("mouseleave", h.leave);
      });
  }, []);

  return (
    <section className="bg-wedding-light py-16 px-6 relative min-h-[450px]">
      <div
        className="background-image absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        <div>
          <h2
            className="event-title text-wedding-light text-3xl md:text-4xl font-bold text-center"
            style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
          >
            {EVENT_SECTION_TITLE}
          </h2>
        </div>

        <div className="event-description">
          <p
            className="text-wedding-light text-lg mt-4 leading-relaxed text-center"
            style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
          >
            {EVENT_SECTION_DESCRIPTION}
          </p>
        </div>

        <div className="event-details grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3
              className="text-wedding-light text-2xl font-semibold"
              style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
            >
              {BRIDE_EVENT_TITLE}
            </h3>
            <p className="text-wedding-light text-lg">
              Ngày: {BRIDE_EVENT_DATE}
            </p>
            <p className="text-wedding-light text-lg">
              Giờ: {BRIDE_EVENT_TIME}
            </p>
            <p className="text-wedding-light text-lg">
              Địa điểm: {BRIDE_EVENT_LOCATION}
            </p>
            <div className="flex space-x-4">
              <button
                className="btn bg-wedding-deep text-wedding-light px-6 py-2 rounded shadow-lg"
                onClick={() => window.open(BRIDE_EVENT_MAP_LINK, "_blank")}
              >
                Hướng dẫn đi
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3
              className="text-wedding-light text-2xl font-semibold"
              style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
            >
              {GROOM_EVENT_TITLE}
            </h3>
            <p className="text-wedding-light text-lg">
              Ngày: {GROOM_EVENT_DATE}
            </p>
            <p className="text-wedding-light text-lg">
              Giờ: {GROOM_EVENT_TIME}
            </p>
            <p className="text-wedding-light text-lg">
              Địa điểm: {GROOM_EVENT_LOCATION}
            </p>
            <div className="flex space-x-4">
              <button
                className="btn bg-wedding-deep text-wedding-light px-6 py-2 rounded shadow-lg"
                onClick={() => window.open(GROOM_EVENT_MAP_LINK, "_blank")}
              >
                Hướng dẫn đi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
