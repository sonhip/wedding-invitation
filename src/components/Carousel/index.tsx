import React, { useEffect, useState } from "react";
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

  const handlePrev = () => {
    setDegrees((prev) => prev + 45);
  };

  const handleNext = () => {
    setDegrees((prev) => prev - 45);
  };

  // Tạo interval tự động quay mỗi 2 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setDegrees((prev) => prev - 45); // Quay tự động về phía sau mỗi 2 giây
    }, 2000); // Cập nhật mỗi 2 giây

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    const moveX = e.changedTouches[0].clientX;
    if (moveX > window.innerWidth / 2) {
      setDegrees((prev) => prev - 45); // rotate to the next image
    } else {
      setDegrees((prev) => prev + 45); // rotate to the previous image
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] sm:min-h-screen bg-black overflow-hidden">
      <div
        className="box relative w-52 h-52 sm:w-72 sm:h-72"
        style={{ transform: `perspective(1000px) rotateY(${degrees}deg)` }}
      >
        {galleryImages.map((image, index) => (
          <span
            key={index}
            style={{
              transform: `rotateY(calc(${index + 1} * 45deg)) translateZ(${
                window.innerWidth > 640 ? 400 : 300
              }px)`,
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
      <div className="absolute bottom-10 flex space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RotatingBox;
