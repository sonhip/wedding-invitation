import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../assets/others/1.webp";
import image2 from "../../assets/others/2.webp";
import image3 from "../../assets/others/3.webp";
import image4 from "../../assets/others/4.webp";
import image5 from "../../assets/others/5.webp";
import image6 from "../../assets/others/6.webp";

const images = [image1, image2, image3, image4, image5, image6];

// Đăng ký plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const EventDetailsSection: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>(
    "https://thiepcuoionline.huythanhjewelry.vn/storage/jkLnqOgzKT.webp"
  );

  useEffect(() => {
    // GSAP Scroll Animation cho phần Event Details
    gsap.fromTo(
      ".event-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".event-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".event-description",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".event-description",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".event-details",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".event-details",
          start: "top 80%",
        },
      }
    );

    // GSAP animation for changing background images
    const interval = setInterval(() => {
      // Animate background change
      gsap.to(".background-image", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          // Update the background image after fade out
          setBackgroundImage((prevImage) => {
            const currentIndex = images.indexOf(prevImage);
            const nextIndex = (currentIndex + 1) % images.length;
            return images[nextIndex];
          });

          // Fade in the new background image
          gsap.to(".background-image", {
            opacity: 1,
            duration: 1,
          });
        },
      });
    }, 3000); // Change background every 3 seconds

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(interval);
  }, []);

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
    <section className="bg-wedding-light py-16 px-6 relative min-h-[450px]">
      {/* Background Image */}
      <div
        className="background-image absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        {/* Event Title */}
        <div>
          <h2
            className="event-title text-wedding-light text-3xl md:text-4xl font-bold text-center"
            style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
          >
            Sự Kiện Cưới
          </h2>
        </div>

        {/* Event Description */}
        <div className="event-description">
          <p
            className="text-wedding-light text-lg mt-4 leading-relaxed text-center"
            style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
          >
            Tình yêu đích thực đứng về phía nhau trong những ngày tốt đẹp và sát
            cánh hơn trong những ngày tồi tệ.
          </p>
        </div>

        {/* Event Details */}
        <div className="event-details grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3
              className="text-wedding-light text-2xl font-semibold"
              style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
            >
              Tiệc nhà gái được tổ chức vào
            </h3>
            <p className="text-wedding-light text-lg">Ngày: 07/01/2025</p>
            <p className="text-wedding-light text-lg">Giờ: 17:00</p>
            <p className="text-wedding-light text-lg">
              Địa điểm: Nhà văn hoá Phường Sài Đồng, Phường Sài Đồng, Quận Long
              Biên, Hà Nội
            </p>
            <div className="flex space-x-4">
              <button
                className="btn bg-wedding-deep text-wedding-light px-6 py-2 rounded shadow-lg"
                onClick={() => window.open("https://maps.google.com", "_blank")}
              >
                Hướng dẫn đi
              </button>
              <button
                className="btn bg-wedding-deep text-wedding-light px-6 py-2 rounded shadow-lg"
                onClick={() =>
                  alert("Đã thêm vào lịch! (Chưa tích hợp với lịch thực tế)")
                }
              >
                Thêm vào lịch
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3
              className="text-wedding-light text-2xl font-semibold"
              style={{ textShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
            >
              Tiệc nhà trai được tổ chức vào
            </h3>
            <p className="text-wedding-light text-lg">Ngày: 08/01/2025</p>
            <p className="text-wedding-light text-lg">Giờ: 17:00</p>
            <p className="text-wedding-light text-lg">
              Địa điểm: Đình Gia Quất, Thượng Thanh, Long Biên, Hà Nội
            </p>
            <div className="flex space-x-4">
              <button
                className="btn bg-wedding-deep text-wedding-light px-6 py-2 rounded shadow-lg"
                onClick={() => window.open("https://maps.google.com", "_blank")}
              >
                Hướng dẫn đi
              </button>
              <button
                className="btn bg-wedding-deep text-wedding-light px-6 py-2 rounded shadow-lg"
                onClick={() =>
                  alert("Đã thêm vào lịch! (Chưa tích hợp với lịch thực tế)")
                }
              >
                Thêm vào lịch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
