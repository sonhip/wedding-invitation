import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const InvitationSection: React.FC = () => {
  useEffect(() => {
    // GSAP Scroll Animation cho phần Invitation
    gsap.fromTo(
      ".invitation-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".invitation-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".invitation-description",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".invitation-description",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".invitation-buttons",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".invitation-buttons",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-wedding-light py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Invitation Title */}
        <div>
          <h2 className="invitation-title text-wedding-deep text-3xl md:text-4xl font-bold">
            You're Invited!
          </h2>
        </div>

        {/* Invitation Description */}
        <div className="invitation-description">
          <p className="text-wedding-purple text-lg mt-4 leading-relaxed">
            We are excited to share this special moment with you. Come join us
            as we begin this new journey together.
          </p>
        </div>

        {/* Invitation Image */}
        <div className="invitation-image mt-8">
          <img
            src="https://placehold.co/600x400"
            alt="Wedding Invitation"
            className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Invitation Buttons */}
        <div className="invitation-buttons space-x-4 mt-8">
          <a
            href="#"
            className="bg-wedding-purple text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:bg-wedding-deep hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Invitation
          </a>
          <a
            href="#"
            className="bg-wedding-deep text-white px-8 py-3 rounded-full text-lg font-semibold transition-all hover:bg-wedding-purple hover:shadow-lg"
          >
            RSVP Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
