import React, { useEffect } from "react";
import { gsap } from "gsap";

const ThankYouSection: React.FC = () => {
  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".thank-you-text",
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.3,
        delay: 0.5,
      }
    );
  }, []);

  return (
    <section className="py-16 bg-wedding-light text-center min-w-96">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="thank-you-text text-3xl md:text-4xl font-bold text-wedding-deep">
          Cảm ơn bạn!
        </h2>
        <p className="thank-you-text text-lg text-wedding-purple mt-4">
          Chúng tôi rất vui khi được chia sẻ khoảnh khắc đặc biệt này với bạn.
        </p>
        <p className="thank-you-text text-lg text-wedding-purple mt-2">
          Mong rằng bạn sẽ luôn đồng hành cùng chúng tôi trong hành trình phía
          trước.
        </p>
      </div>
    </section>
  );
};

export default ThankYouSection;
