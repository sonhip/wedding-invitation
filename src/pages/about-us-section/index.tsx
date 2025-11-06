import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STAGES } from "@/config/const";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Định nghĩa kiểu cho dữ liệu giai đoạn
export interface Stage {
  title: string;
  description: string;
  image: string;
}

const AboutUsSection: React.FC = () => {
  useEffect(() => {
    // GSAP Scroll Animation cho từng giai đoạn
    gsap.utils.toArray(".love-stage").forEach((stage: any) => {
      gsap.fromTo(
        stage,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: stage,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-wedding-light py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {STAGES.map((stage, index) => (
          <div
            key={index}
            className={`love-stage flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            {/* Text Content */}
            <div>
              <h2 className="text-wedding-deep text-3xl md:text-4xl font-bold">
                {stage.title}
              </h2>
              <p className="text-wedding-purple text-lg mt-4 leading-relaxed">
                {stage.description}
              </p>
            </div>

            {/* Image */}
            <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl flex-shrink-0">
              <img
                src={stage.image}
                alt={stage.title}
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
