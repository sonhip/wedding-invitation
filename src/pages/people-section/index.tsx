import React, { useEffect } from "react";
import { gsap } from "gsap";

const PeopleSection = () => {
  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".people-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3 }
    );

    gsap.fromTo(
      ".person-image",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "easeInOut",
        delay: 0.5,
      }
    );

    gsap.fromTo(
      ".person-info",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "easeInOut",
        delay: 0.7,
      }
    );
  }, []);

  return (
    <section className="py-16 bg-wedding-light text-center">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bride Section */}
          <div className="flex flex-col items-center">
            <img
              src="https://thiepcuoionline.huythanhjewelry.vn/storage/ww6AwuBXPc.webp"
              alt="Cô Dâu"
              className="person-image w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-6"
            />
            <h3 className="person-info text-2xl font-semibold text-wedding-deep mb-2">
              Thu Hà
            </h3>
            <p className="person-info text-lg text-wedding-purple">
              Cô dâu xinh đẹp, dễ thương, thông minh và đầy nhiệt huyết.
            </p>
          </div>

          {/* Groom Section */}
          <div className="flex flex-col items-center">
            <img
              src="https://thiepcuoionline.huythanhjewelry.vn/storage/SXg1q25HMZ.webp"
              alt="Chú Rể"
              className="person-image w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-6"
            />
            <h3 className="person-info text-2xl font-semibold text-wedding-deep mb-2">
              Trường Sinh
            </h3>
            <p className="person-info text-lg text-wedding-purple">
              Chú rể điển trai, hài hước và luôn yêu thương cô dâu tận tâm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
