import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const EventDetailsSection: React.FC = () => {
  useEffect(() => {
    // GSAP Scroll Animation cho phần Event Details
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
  }, []);

  return (
    <section className="bg-wedding-light py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Event Title */}
        <div>
          <h2 className="event-title text-wedding-deep text-3xl md:text-4xl font-bold text-center">
            Event Details
          </h2>
        </div>

        {/* Event Description */}
        <div className="event-description">
          <p className="text-wedding-purple text-lg mt-4 leading-relaxed text-center">
            We are excited to invite you to join us in celebrating our love and
            commitment. Below are the details for our special day.
          </p>
        </div>

        {/* Event Details */}
        <div className="event-details grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-wedding-deep text-2xl font-semibold">
              Wedding Ceremony
            </h3>
            <p className="text-wedding-purple text-lg">Date: 20th March 2025</p>
            <p className="text-wedding-purple text-lg">Time: 4:00 PM</p>
            <p className="text-wedding-purple text-lg">
              Venue: St. Mary’s Church, 123 Wedding St, Wedding Town
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-wedding-deep text-2xl font-semibold">
              Reception Party
            </h3>
            <p className="text-wedding-purple text-lg">Date: 20th March 2025</p>
            <p className="text-wedding-purple text-lg">Time: 6:00 PM</p>
            <p className="text-wedding-purple text-lg">
              Venue: Wedding Hall, 456 Celebration Ave, Wedding Town
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
