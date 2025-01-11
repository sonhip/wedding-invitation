import React, { useEffect } from "react";
import Countdown from "react-countdown";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConfirmModalButton from "@/components/ConfirmModal";
import SendViaBoxModal from "@/components/SendViaBoxModal";
const DAYS_LEFT = 3;

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
  const weddingDate = new Date().getTime() + DAYS_LEFT * 24 * 60 * 60 * 1000;

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
    <section className="bg-wedding-light py-16 px-6 min-h-96">
      <div className="max-w-6xl mx-auto text-center">
        {/* Countdown Title */}
        <div className="countdown-title">
          <h2 className="text-wedding-deep text-3xl md:text-4xl font-bold">
            Đếm ngược đến ngày cưới cùng chúng mình
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
                    <span className="text-lg text-wedding-deep">Ngày</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-wedding-deep">
                      {hours}
                    </span>
                    <span className="text-lg text-wedding-deep">Giờ</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-wedding-deep">
                      {minutes}
                    </span>
                    <span className="text-lg text-wedding-deep">Phút</span>
                  </div>
                  <div className="countdown-item">
                    <span className="block text-4xl md:text-5xl font-bold text-wedding-deep">
                      {seconds}
                    </span>
                    <span className="text-lg text-wedding-deep">Giây</span>
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
