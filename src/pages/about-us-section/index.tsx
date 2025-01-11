import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Định nghĩa kiểu cho dữ liệu giai đoạn
interface Stage {
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

  const stages: Stage[] = [
    {
      title: "The Beginning",
      description:
        "Anna and John met at a friend's gathering. Their connection was instant, and the spark of friendship soon blossomed into love.",
      image: "https://placehold.co/400x300?text=The+Beginning",
    },
    {
      title: "Building Memories",
      description:
        "Over the years, they traveled together, shared their dreams, and created countless unforgettable memories.",
      image: "https://placehold.co/400x300?text=Building+Memories",
    },
    {
      title: "A New Chapter",
      description:
        "Now, they embark on the next chapter of their journey, promising to love and cherish each other forever.",
      image: "https://placehold.co/400x300?text=A+New+Chapter",
    },
  ];

  return (
    <section className="bg-wedding-light py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`love-stage grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
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
            <div className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl aspect-w-4 aspect-h-3">
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
