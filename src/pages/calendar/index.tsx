import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useMemo } from "react";
import { WEDDING_DATE } from "@/config/const";

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

  // Parse WEDDING_DATE (format: DD/MM/YYYY)
  const { weddingDay, weddingMonth, weddingYear, monthName } = useMemo(() => {
    const [day, month, year] = WEDDING_DATE.split("/").map(Number);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return {
      weddingDay: day,
      weddingMonth: month,
      weddingYear: year,
      monthName: monthNames[month - 1],
    };
  }, []);

  // Generate calendar data dynamically
  const daysInMonth = useMemo(() => {
    // Get first day of the month (0 = Sunday, 1 = Monday, etc.)
    const firstDayOfMonth = new Date(weddingYear, weddingMonth - 1, 1).getDay();
    // Get total days in the month
    const totalDays = new Date(weddingYear, weddingMonth, 0).getDate();

    // Adjust for Monday start (0 = Monday, 6 = Sunday)
    const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const calendar: Array<{
      day: number | string;
      week: number;
      highlight?: boolean;
    }> = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startOffset; i++) {
      calendar.push({ day: "", week: 0 });
    }

    // Add all days of the month
    for (let day = 1; day <= totalDays; day++) {
      const weekNumber = Math.floor(calendar.length / 7);
      calendar.push({
        day,
        week: weekNumber,
        highlight: day === weddingDay,
      });
    }

    return calendar;
  }, [weddingDay, weddingMonth, weddingYear]);

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
            {monthName} <span className="font-normal">{weddingYear}</span>
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
