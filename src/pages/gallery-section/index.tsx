import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831846_UNO06647.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831854_UNO06454.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831856_UNO06456.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831861_UNO06430.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831862_UNO06691.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831865_UNO06571.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831888_UNO06509.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831895_UNO06861.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831898_UNO06564.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831903_UNO06555.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831906_UNO06666.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831907_UNO06487.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831916_UNO06854.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831917_UNO06650.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831917_UNO06720.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831918_UNO06699%20copy.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831926_UNO06616.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733831927_UNO06641.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733832028_UNO07070.webp",
  "https://thiepcuoionline.huythanhjewelry.vn/storage/images/1733832297_UNO07047.webp",
];

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
            Our Journey So Far
          </h2>
        </div>

        {/* Gallery Items */}
        <div className="gallery-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {galleryImages.map((image, index) => (
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
