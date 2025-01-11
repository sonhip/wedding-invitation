import React, { useEffect } from "react";
import Countdown from "react-countdown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const CountDownSection: React.FC = () => {
  useEffect(() => {
    // GSAP Animation khi cuộn vào phần Countdown
    gsap.fromTo(
      ".countdown-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".countdown-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".countdown-timer",
      { opacity: 1, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".countdown-timer",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  // Định nghĩa thời gian cho ngày cưới
  const weddingDate = new Date("2025-05-01T00:00:00").getTime(); // Thay đổi ngày cưới tại đây

  return (
    <section className="bg-wedding-light py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Countdown Title */}
        <div className="countdown-title">
          <h2 className="text-wedding-deep text-3xl md:text-4xl font-bold">
            Countdown to Our Wedding
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-timer mt-8">
          <Countdown
            date={weddingDate}
            renderer={({
              days,
              hours,
              minutes,
              seconds,
            }: {
              days: number;
              hours: number;
              minutes: number;
              seconds: number;
            }) => (
              <div className="text-center">
                <div className="flex justify-center gap-6">
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-wedding-deep">
                      {days}
                    </span>
                    <span className="text-lg text-wedding-deep">Days</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-wedding-deep">
                      {hours}
                    </span>
                    <span className="text-lg text-wedding-deep">Hours</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-wedding-deep">
                      {minutes}
                    </span>
                    <span className="text-lg text-wedding-deep">Minutes</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-wedding-deep">
                      {seconds}
                    </span>
                    <span className="text-lg text-wedding-deep">Seconds</span>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        {/* Buttons */}
        <div className="mt-8">
          <button
            className="bg-wedding-deep text-white py-2 px-8 rounded-lg mr-4 hover:bg-wedding-light transition-colors"
            onClick={() => alert("Send Wedding Wishes!")}
          >
            Send Wedding Wishes
          </button>
          <button
            className="bg-wedding-light text-wedding-deep py-2 px-8 rounded-lg hover:bg-wedding-deep hover:text-white transition-colors"
            onClick={() => alert("RSVP for Wedding!")}
          >
            RSVP
          </button>
        </div>
      </div>
    </section>
  );
};

export default CountDownSection;
