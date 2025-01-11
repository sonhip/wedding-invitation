import React from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FooterSection: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "easeInOut",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="footer-section bg-wedding-deep text-white py-12">
      <div className="container mx-auto text-center">
        {/* Header Text */}
        <div className="footer-item mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Thank You for Celebrating with Us!
          </h2>
        </div>

        {/* Social Media Icons */}
        <div className="footer-item mb-8 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-wedding-light transition-colors duration-300"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-wedding-light transition-colors duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-wedding-light transition-colors duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>

        {/* Copyright Text */}
        <div className="footer-item">
          <p className="text-sm">
            © 2025 [Cô Dâu] & [Chú Rể] - All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
