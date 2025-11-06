import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Calendar = () => {
  useEffect(() => {
    // Animation for calendar fade in
    gsap.fromTo(
      ".calendar-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".calendar-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  // November 2025 calendar data
  const daysInMonth = [
    { day: "", week: 0 }, // Empty cells for alignment
    { day: "", week: 0 },
    { day: "", week: 0 },
    { day: "", week: 0 },
    { day: "", week: 0 },
    { day: 1, week: 0 },
    { day: 2, week: 0 },
    { day: 3, week: 1 },
    { day: 4, week: 1 },
    { day: 5, week: 1 },
    { day: 6, week: 1 },
    { day: 7, week: 1 },
    { day: 8, week: 1 },
    { day: 9, week: 1 },
    { day: 10, week: 2 },
    { day: 11, week: 2 },
    { day: 12, week: 2 },
    { day: 13, week: 2 },
    { day: 14, week: 2 },
    { day: 15, week: 2 },
    { day: 16, week: 2 },
    { day: 17, week: 3 },
    { day: 18, week: 3 },
    { day: 19, week: 3 },
    { day: 20, week: 3 },
    { day: 21, week: 3 },
    { day: 22, week: 3 },
    { day: 23, week: 3 },
    { day: 24, week: 4 },
    { day: 25, week: 4 },
    { day: 26, week: 4 },
    { day: 27, week: 4 },
    { day: 28, week: 4 },
    { day: 29, week: 4 },
    { day: 30, week: 4, highlight: true },
  ];

  return (
    <section className="calendar-section mt-8 relative py-16 md:py-24 bg-wedding-brown overflow-hidden">
      {/* Flower decorations */}
      <img
        src="/images/boxes/flower-left.webp"
        alt=""
        className="absolute left-0 top-0 w-48 h-auto md:w-64 lg:w-80 opacity-60 pointer-events-none"
      />
      <img
        src="/images/boxes/flower-right.webp"
        alt=""
        className="absolute right-0 bottom-0 w-48 h-auto md:w-64 lg:w-80 opacity-60 pointer-events-none"
      />

      <div className="calendar-container relative z-10 max-w-4xl mx-auto px-6">
        {/* Calendar Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif italic mb-2">
            November <span className="font-normal">2025</span>
          </h2>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10">
          {/* Week days header */}
          <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4 md:mb-6">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
              <div
                key={day}
                className="text-white text-center font-bold text-sm md:text-base lg:text-lg tracking-wider"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2 md:gap-4">
            {daysInMonth.map((item, index) => (
              <div
                key={index}
                className="aspect-square flex items-center justify-center relative"
              >
                {item.day ? (
                  item.highlight ? (
                    // Wedding day with animated heart icon containing the day number
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div
                        className="relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                                   flex items-center justify-center
                                   transform transition-transform duration-300 ease-out
                                   motion-safe:animate-pulse hover:scale-105"
                        aria-label={`Wedding day ${item.day}`}
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <path
                            d="M50,90 C50,90 10,65 10,40 C10,25 20,15 32,15 C40,15 45,20 50,28 C55,20 60,15 68,15 C80,15 90,25 90,40 C90,65 50,90 50,90 Z"
                            className="fill-white"
                          />
                        </svg>

                        <span className="absolute inset-0 flex items-center justify-center text-wedding-brown font-bold text-sm md:text-base lg:text-lg pointer-events-none">
                          {item.day}
                        </span>
                      </div>
                    </div>
                  ) : (
                    // Regular day
                    <span className="text-white text-xl md:text-2xl lg:text-3xl font-light">
                      {item.day}
                    </span>
                  )
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
