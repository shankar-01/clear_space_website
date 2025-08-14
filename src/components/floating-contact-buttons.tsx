'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FloatingContactButtons = () => {
  // Replace these with your actual contact numbers
  const phoneNumber = "+447538502777"; // Your business phone number
  const whatsappNumber = "+447538502777"; // Your WhatsApp number

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your clearance services. Could you please provide more information?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-3">
      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 group"
        title="Call us"
      >
        <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
        {/* Optional tooltip */}
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Call Now
        </span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 group box-size-border-box"
        title="Contact us on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
        {/* Optional tooltip */}
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          WhatsApp
        </span>
      </button>
    </div>
  );
};

export default FloatingContactButtons;