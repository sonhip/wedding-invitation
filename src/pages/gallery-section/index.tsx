import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GALLERY_TITLE, GALLERY_IMAGES } from "@/config/const";

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

    // Animation cho từng item với stagger effect
    gsap.fromTo(
      ".gallery-item",
      { opacity: 0, y: 30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          amount: 1.2,
          from: "start",
          ease: "power2.out",
        },
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".gallery-items",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Animation khi mở lightbox
  useEffect(() => {
    if (selectedImage) {
      gsap.fromTo(
        ".lightbox-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        ".lightbox-image",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.5)" }
      );
    }
  }, [selectedImage]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    gsap.to(".lightbox-overlay", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
      },
    });
  };

  return (
    <section className="bg-wedding-light py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Gallery Title */}
        <div className="mb-8 md:mb-12">
          <h2 className="gallery-title text-wedding-deep text-3xl md:text-4xl lg:text-5xl font-bold">
            {GALLERY_TITLE}
          </h2>
          <p className="text-wedding-purple mt-3 text-sm md:text-base">
            Nhấn vào ảnh để xem kích thước lớn hơn
          </p>
        </div>

        {/* Gallery Items - Responsive Grid */}
        <div className="gallery-items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              className="gallery-item cursor-pointer group"
              key={index}
              onClick={() => handleImageClick(image)}
            >
              <div className="gallery-img relative overflow-hidden rounded-lg shadow-lg aspect-square">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-wedding-deep/0 group-hover:bg-wedding-deep/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                    🔍
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="lightbox-overlay fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-wedding-light transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              ×
            </button>
            <div
              className="lightbox-image relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
