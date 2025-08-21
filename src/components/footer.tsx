"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { company } from "@/constants/info";

export default function FooterSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const charityImages = [
    "/charities/img1.png",
    "/charities/img2.png", 
    "/charities/img3.png",
    "/charities/img4.png"
  ];

  // Check if screen is mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-advance carousel on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % charityImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, charityImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % charityImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + charityImages.length) % charityImages.length);
  };

  const goToSlide = (index : number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="flex flex-col py-4">
        <span className="text-center text-[#003366] py-4 font-semibold text-2xl">
          Proudly Supporting Local Charities
        </span>

        {/* Mobile Carousel */}
        <div className="md:hidden relative px-4">
          <div className="relative bg-white shadow-lg rounded-xl p-6 flex items-center justify-center min-h-[120px]">
            <img 
              src={charityImages[currentSlide]} 
              alt={`Charity Logo ${currentSlide + 1}`} 
              className="w-40 h-auto transition-opacity duration-300" 
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-[#003366] hover:text-[#66CCFF] transition p-2"
              aria-label="Previous charity"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#003366] hover:text-[#66CCFF] transition p-2"
              aria-label="Next charity"
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {charityImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide 
                    ? 'bg-[#003366]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:flex justify-around flex-wrap gap-6 px-4">
          {charityImages.map((src, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-4 flex items-center justify-center transition transform hover:scale-105"
            >
              <img src={src} alt={`Charity Logo ${idx + 1}`} className="w-40 h-auto" />
            </div>
          ))}
        </div>
      </div>

      <footer className="w-full bg-[#e6f3ff] text-[#003366] py-12">
        <div className="w-full container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold">Clear Space</h3>
              </div>
              <p className="text-[#003366cc] mb-4 text-sm">
                Professional property clearance services across Surrey and London.
                Fast, reliable, and environmentally responsible.
              </p>
              <div className="flex space-x-4 mt-3">
                <a href="#" aria-label="Facebook" className="text-[#003366] hover:text-[#66CCFF] transition">
                  <FontAwesomeIcon icon={faFacebookF} size="lg" />
                </a>
                <a href="#" aria-label="Instagram" className="text-[#003366] hover:text-[#66CCFF] transition">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#" aria-label="Twitter" className="text-[#003366] hover:text-[#66CCFF] transition">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-[#003366cc]">
                {[
                  "House Clearance",
                  "Garden Clearance",
                  "Loft Clearance",
                  "Office Clearance",
                  "Storage Clearance",
                  "Hoarder Clearance",
                ].map((service) => (
                  <li key={service}>
                    <a href="#services" className="hover:text-[#66CCFF] transition">{service}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coverage */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Coverage Areas</h4>
              <ul className="space-y-2 text-sm text-[#003366cc]">
                {[
                  "Greater London",
                  "Surrey",
                  "Berkshire",
                  "Kent",
                  "Hampshire",
                  "Middlesex",
                ].map((area) => (
                  <li key={area}>
                    <a href="#coverage" className="hover:text-[#66CCFF] transition">{area}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-4 text-sm text-[#003366cc]">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-[#66CCFF] mt-1" />
                  <a href={company.phone.value} className="hover:text-[#66CCFF] text-base">
                    {company.phone.text}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#66CCFF] mt-1" />
                  <a href={company.email.value} className="hover:text-[#66CCFF] text-base">
                    {company.email.text}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-[#66CCFF] mt-1" />
                  <a href={company.whatsapp.value} className="hover:text-[#66CCFF] text-base">
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#66CCFF] mt-1" />
                  <span className="text-base">Surrey & Greater London Areas</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-4 items-center">
              <img src="/enviroment_agency.png" alt="Environment Agency Logo" className="mr-2 rounded-md" />
              <img src="/checka.png" alt="Checka Logo" className="mr-2 rounded-md" />
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#66CCFF] mt-10 pt-6 text-center text-sm text-[#00336699]">
            <p>
              © {new Date().getFullYear()} Clear Space House Clearness LTD. All rights reserved.
            </p>
            <div className="mt-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              {["Privacy Policy", "Terms of Service", "Cookies", "Licensing"].map((item) => (
                <a key={item} href="#" className="hover:text-[#66CCFF] transition">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}