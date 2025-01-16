import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import EarthBox from "@/components/Earth";

gsap.registerPlugin(ScrollTrigger);

const FooterSection: React.FC = () => {
  useEffect(() => {
    // ScrollTrigger để hiển thị nút scroll-to-top khi người dùng cuộn đến footer
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    ScrollTrigger.create({
      trigger: ".footer-section", // Khi cuộn đến footer
      start: "top bottom", // Bắt đầu khi footer vào tầm nhìn
      end: "bottom top", // Kết thúc khi footer ra khỏi tầm nhìn
      onEnter: () => {
        // Khi footer xuất hiện, nút scroll-to-top sẽ hiển thị
        scrollToTopButton?.classList.remove("hidden");
      },
      onLeaveBack: () => {
        // Khi người dùng cuộn lên, ẩn nút
        scrollToTopButton?.classList.add("hidden");
      },
    });
  }, []);

  const handleScrollToTop = () => {
    // Cuộn trang lên đầu
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="footer-section bg-wedding-deep text-wedding-light py-8">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="footer-item mb-8 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon text-white hover:text-wedding-light transition-colors duration-300"
          >
            <FaFacebookF size={30} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon text-white hover:text-wedding-light transition-colors duration-300"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon text-white hover:text-wedding-light transition-colors duration-300"
          >
            <FaTwitter size={30} />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="footer-item">
          <p className="text-sm text-wedding-light">
            © 2025 [Thu Hà] & [Trường Sinh] - All Rights Reserved
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          id="scrollToTopButton"
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 bg-wedding-light text-wedding-purple p-4 rounded-full shadow-lg transition-all duration-300 hidden"
        >
          ↑
        </button>
        <div className="py-12 pb-20">
          <EarthBox />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
