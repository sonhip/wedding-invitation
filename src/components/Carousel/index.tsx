import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import image1 from "../../assets/gallery-images/1.webp";
import image2 from "../../assets/gallery-images/2.webp";
import image3 from "../../assets/gallery-images/3.webp";
import image4 from "../../assets/gallery-images/4.webp";
import image5 from "../../assets/gallery-images/5.webp";
import image6 from "../../assets/gallery-images/6.webp";
import image7 from "../../assets/gallery-images/7.webp";
import image8 from "../../assets/gallery-images/8.webp";
import image9 from "../../assets/gallery-images/9.webp";
import image10 from "../../assets/gallery-images/10.webp";
import image11 from "../../assets/gallery-images/11.webp";
import image12 from "../../assets/gallery-images/12.webp";
import image13 from "../../assets/gallery-images/13.webp";
import image14 from "../../assets/gallery-images/14.webp";
import image15 from "../../assets/gallery-images/15.webp";
import image16 from "../../assets/gallery-images/16.webp";
import image17 from "../../assets/gallery-images/17.webp";
import image18 from "../../assets/gallery-images/18.webp";
import image19 from "../../assets/gallery-images/19.webp";
import image20 from "../../assets/gallery-images/20.webp";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];

const RotatingBox: React.FC = () => {
  const [degrees, setDegrees] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [translateZ, setTranslateZ] = useState(
    window.innerWidth > 640 ? 400 : 300
  );

  useEffect(() => {
    const handleResize = () => {
      setTranslateZ(window.innerWidth > 640 ? 400 : 300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setDegrees((prev) => prev + 45);
    resetInterval();
  };

  const handleNext = () => {
    setDegrees((prev) => prev - 45);
    resetInterval();
  };
  // Hàm reset interval
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Xóa interval cũ
    }
    startAutoRotate(); // Tạo interval mới
  };

  // Hàm tạo interval tự động quay
  const startAutoRotate = () => {
    intervalRef.current = setInterval(() => {
      setDegrees((prev) => prev - 45); // Quay về phía sau mỗi 5 giây
    }, 5000);
  };

  useEffect(() => {
    startAutoRotate(); // Bắt đầu auto rotate khi component mount

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Dọn dẹp interval khi unmount
      }
    };
  }, []);

  return (
    <div className="flex relative flex-col items-center justify-center min-h-[500px] sm:min-h-screen bg-wedding-light overflow-hidden">
      <div
        className="box relative w-52 h-52 sm:w-72 sm:h-72"
        style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` }}
      >
        {galleryImages.map((image, index) => (
          <span
            key={index}
            style={{
              transform: `rotateY(calc(${
                index + 1
              } * 45deg)) translateZ(${translateZ}px)`,
            }}
            className="absolute w-full h-full"
          >
            <img
              src={image}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover"
            />
          </span>
        ))}
      </div>
      <div className="absolute bottom-1 sm:bottom-6 flex space-x-4 sm:space-x-8">
        <button
          onClick={handlePrev}
          className="px-4 py-1 sm:px-6 sm:py-2 bg-wedding-deep text-wedding-light text-sm sm:text-lg font-semibold rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-1 sm:px-6 sm:py-2 bg-wedding-deep text-wedding-light text-sm sm:text-lg font-semibold rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RotatingBox;
