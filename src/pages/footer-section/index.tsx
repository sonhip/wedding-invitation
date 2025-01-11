import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const FooterSection: React.FC = () => {
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
      </div>
    </section>
  );
};

export default FooterSection;
