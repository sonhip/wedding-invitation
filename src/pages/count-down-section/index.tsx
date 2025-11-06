import React, { useEffect } from "react";
import Countdown from "react-countdown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConfirmModalButton from "@/components/ConfirmModal";
import SendViaBoxModal from "@/components/SendViaBoxModal";
import { WEDDING_DATE, COUNTDOWN_TITLE } from "@/config/const";

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
  // Chuyển đổi WEDDING_DATE từ "dd/MM/yyyy" sang Date object
  const [day, month, year] = WEDDING_DATE.split("/");
  const timeLeft = new Date(`${year}-${month}-${day}T00:00:00`);

  // GSAP hover animations for buttons
  useEffect(() => {
    gsap.utils.toArray(".btn").forEach((btn) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(btn as HTMLElement, {
        scale: 1.1,
        duration: 0.2,
        ease: "power1.out",
      });
      (btn as HTMLElement).addEventListener("mouseenter", () => tl.play());
      (btn as HTMLElement).addEventListener("mouseleave", () => tl.reverse());
    });
  }, []);

  return (
    <section className="bg-wedding-brown py-16 px-6 min-h-96">
      <div className="max-w-6xl mx-auto text-center">
        {/* Countdown Title */}
        <div className="countdown-title">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            {COUNTDOWN_TITLE}
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-timer mt-8">
          <Countdown
            date={timeLeft}
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
                    <span className="block text-4xl md:text-5xl font-bold text-white">
                      {days}
                    </span>
                    <span className="text-lg text-white/80">Ngày</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-white">
                      {hours}
                    </span>
                    <span className="text-lg text-white/80">Giờ</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-white">
                      {minutes}
                    </span>
                    <span className="text-lg text-white/80">Phút</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-white">
                      {seconds}
                    </span>
                    <span className="text-lg text-white/80">Giây</span>
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-12 px-4">
          <SendViaBoxModal />
          <ConfirmModalButton />
        </div>
      </div>
    </section>
  );
};

export default CountDownSection;
