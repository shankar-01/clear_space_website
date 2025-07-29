"use client";

import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4"
      style={{
        backgroundImage: "url('/banner.png')", // Place the image in public folder
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-opacity-90 rounded-lg shadow-md overflow-hidden">
        {/* Left - Contact Form */}
        <div className="p-8 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-sm text-gray-600 mb-6">
            Please complete the short form below or you can contact us anytime on{' '}
            <a href="tel:01372898076" className="text-blue-600 hover:underline">01372 898 076</a>.
          </p>
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name *"
                required
                className="flex-1 p-2 border-b border-gray-300 bg-transparent outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="flex-1 p-2 border-b border-gray-300 bg-transparent outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address *"
              required
              className="w-full p-2 border-b border-gray-300 bg-transparent outline-none"
            />
            <input
              type="text"
              placeholder="Postcode *"
              required
              className="w-full p-2 border-b border-gray-300 bg-transparent outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 border border-gray-300 bg-white resize-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
            >
              Request A FREE Quote
            </button>
          </form>
        </div>

        {/* Right - Contact Info and Map */}
        <div className="p-8 flex flex-col justify-between bg-white rounded-lg">
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-gray-800">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:01372898076" className="hover:underline">01372 898 076</a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:example@email.com" className="hover:underline">Email Us</a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <FaWhatsapp className="text-blue-600" />
              <a href="https://wa.me/441372898076" target="_blank" className="hover:underline">
                WhatsApp
              </a>
            </div>
          </div>

          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19928.86908866264!2d-0.2543498229926596!3d51.39327988935848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ab0a27353c1%3A0xe84a81e77a4cb6d1!2sWimbledon%2C%20London%2C%20UK!5e0!3m2!1sen!2sde!4v1655999821103!5m2!1sen!2sde"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
