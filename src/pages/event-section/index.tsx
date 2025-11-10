import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EVENT_CEREMONY_TITLE,
  EVENT_TIME,
  EVENT_DATE_DAY,
  EVENT_DATE_MONTH,
  EVENT_DATE_YEAR,
  EVENT_DAY_NAME,
  EVENT_LUNAR_DATE,
  EVENT_LOCATION_TITLE,
  EVENT_LOCATION_VENUE,
  EVENT_LOCATION_ADDRESS,
  EVENT_LOCATION_CITY,
  EVENT_INVITATION_TEXT,
  EVENT_INVITATION_HIGHLIGHT,
  EVENT_INVITATION_FOOTER,
  BRIDE_EVENT_MAP_LINK,
} from "@/config/const";

gsap.registerPlugin(ScrollTrigger);

const EventSection: React.FC = () => {
  useEffect(() => {
    // Animation for elements
    gsap.fromTo(
      ".event-animate",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".event-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="event-section bg-wedding-cream py-10 md:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-10">
        {/* Double Happiness Icons at top */}
        <div className="event-animate flex justify-between items-start px-2 md:px-12">
          <img
            src="/images/boxes/hi.svg"
            alt="囍"
            className="w-24 h-24 md:w-28 md:h-28"
          />
          <img
            src="/images/boxes/hi.svg"
            alt="囍"
            className="w-24 h-24 md:w-28 md:h-28"
          />
        </div>

        {/* Title */}
        <div className="event-animate">
          <h2 className="text-wedding-brown text-xl md:text-2xl lg:text-3xl font-normal tracking-wide">
            {EVENT_CEREMONY_TITLE}
          </h2>
        </div>

        {/* Date and Time */}
        <div className="event-animate">
          <div className="flex md:flex-row items-center justify-center gap-4 md:gap-12 text-wedding-brown">
            {/* Time */}
            <div className="text-2xl md:text-4xl lg:text-5xl font-normal">
              {EVENT_TIME}
            </div>

            {/* Divider */}
            <div className="block w-px h-12 bg-wedding-brown"></div>

            {/* Date */}
            <div className="text-center">
              <div className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight">
                {EVENT_DATE_DAY}
              </div>
              <div className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight">
                {EVENT_DATE_MONTH}
              </div>
              <div className="text-4xl md:text-7xl lg:text-8xl font-light leading-tight">
                {EVENT_DATE_YEAR}
              </div>
            </div>

            {/* Divider */}
            <div className="block w-px h-12 bg-wedding-brown"></div>

            {/* Day Name */}
            <div className="text-2xl md:text-4xl lg:text-5xl font-normal">
              {EVENT_DAY_NAME}
            </div>
          </div>
        </div>

        {/* Lunar Date */}
        <div className="event-animate">
          <p className="text-wedding-brown/70 text-base md:text-2xl lg:text-3xl italic">
            {EVENT_LUNAR_DATE}
          </p>
        </div>

        {/* Location Title */}
        <div className="event-animate">
          <h3 className="text-wedding-brown text-2xl md:text-4xl lg:text-5xl font-normal">
            {EVENT_LOCATION_TITLE}
          </h3>
        </div>

        {/* Venue */}
        <div className="event-animate">
          <p className="text-wedding-brown text-xl md:text-3xl lg:text-4xl font-bold tracking-wide">
            {EVENT_LOCATION_VENUE}
          </p>
        </div>

        {/* Address */}
        <div className="event-animate space-y-1">
          <p className="text-wedding-brown/80 text-base md:text-2xl lg:text-3xl">
            {EVENT_LOCATION_ADDRESS}
          </p>
          <p className="text-wedding-brown/80 text-base md:text-2xl lg:text-3xl">
            {EVENT_LOCATION_CITY}
          </p>
        </div>

        <div className="event-animate">
          <button
            onClick={() => window.open(BRIDE_EVENT_MAP_LINK, "_blank")}
            className="px-4 sm:px-6 py-2 bg-wedding-brown text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-wedding-brown/90 transition-colors"
          >
            Hướng dẫn đi
          </button>
        </div>

        {/* Circle Double Happiness */}
        <div className="event-animate flex justify-center py-4">
          <img
            src="/images/boxes/hi-circle.webp"
            alt="囍"
            className="w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44"
          />
        </div>

        {/* Invitation Text */}
        <div className="event-animate space-y-2 border-t border-wedding-brown/20 pt-6">
          <p className="text-wedding-brown/80 text-base md:text-xl lg:text-2xl">
            {EVENT_INVITATION_TEXT}
          </p>
          <p className="text-wedding-brown text-xl md:text-3xl lg:text-4xl font-bold">
            {EVENT_INVITATION_HIGHLIGHT}
          </p>
          <p className="text-wedding-brown/80 text-base md:text-xl lg:text-2xl">
            {EVENT_INVITATION_FOOTER}
          </p>
          <div className="w-24 h-px bg-wedding-brown mx-auto mt-3"></div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
