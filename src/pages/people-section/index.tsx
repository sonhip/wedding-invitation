import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import brideImage from "../../assets/gallery-images/2.jpeg";
import groomImage from "../../assets/gallery-images/groom.png";

gsap.registerPlugin(ScrollTrigger);

const PeopleSection = () => {
  useEffect(() => {
    // GSAP Animation with ScrollTrigger
    gsap.fromTo(
      ".people-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".people-title",
          start: "top 80%",
        },
      }
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
        scrollTrigger: {
          trigger: ".person-image",
          start: "top 80%",
        },
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
        scrollTrigger: {
          trigger: ".person-info",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-wedding-light text-center">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bride Section */}
          <div className="flex flex-col items-center">
            <img
              src={brideImage}
              alt="Cô Dâu"
              className="person-image w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-6"
            />
            <h3 className="person-info text-2xl font-semibold text-wedding-deep mb-2">
              Thu Trang
            </h3>
            <p className="person-info text-lg text-wedding-purple">
              Cô dâu xinh đẹp và dễ thương.
            </p>
          </div>

          {/* Groom Section */}
          <div className="flex flex-col items-center">
            <img
              src={groomImage}
              alt="Chú Rể"
              className="person-image w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-6"
            />
            <h3 className="person-info text-2xl font-semibold text-wedding-deep mb-2">
              Lê Hậu
            </h3>
            <p className="person-info text-lg text-wedding-purple">
              Chú rể đẹp trai và hài hước.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
