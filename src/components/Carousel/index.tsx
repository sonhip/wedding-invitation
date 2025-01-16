import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import image1 from "../../assets/gallery-images/1.jpeg";
import image2 from "../../assets/gallery-images/2.jpeg";
import image3 from "../../assets/gallery-images/bride.png";
import image4 from "../../assets/gallery-images/tt.png";
import image5 from "../../assets/gallery-images/5.jpeg";
import image6 from "../../assets/gallery-images/tt2.png";
import image7 from "../../assets/gallery-images/7.jpeg";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image3,
  image6,
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
              className="absolute w-full h-full object-cover"
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
