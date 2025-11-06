import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY_TITLE, GALLERY_IMAGES } from "@/config/const";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const GallerySection: React.FC = () => {
  useEffect(() => {
    // GSAP Scroll Animation cho phần Gallery
    gsap.fromTo(
      ".gallery-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".gallery-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".gallery-items",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".gallery-img",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1.05,
        duration: 1,
        stagger: 0.2,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".gallery-img",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-wedding-light py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Gallery Title */}
        <div>
          <h2 className="gallery-title text-wedding-deep text-3xl md:text-4xl font-bold">
            {GALLERY_TITLE}
          </h2>
        </div>

        {/* Gallery Items */}
        <div className="gallery-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {GALLERY_IMAGES.map((image, index) => (
            <div className="gallery-item" key={index}>
              <div className="gallery-img overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
