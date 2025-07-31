"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-[#003366] to-[#006699] text-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <motion.p
            className="max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contact us today for a free, no-obligation quote for your clearance project.
            We typically respond within 1 business hour.
          </motion.p>
        </div>

        <motion.div
          className="bg-white text-gray-800 rounded-xl shadow-xl p-6 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#003366]">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FaPhoneAlt className="text-[#006699] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <a href="tel:07538502777" className="text-[#006699] hover:underline">
                      07538 502777
                    </a>
                    <p className="text-sm text-gray-500">Mon-Sun: 7am - 9pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-[#006699] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@clearspace.com"
                      className="text-[#006699] hover:underline"
                    >
                      info@clearspace.com
                    </a>
                    <p className="text-sm text-gray-500">Replies within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaWhatsapp className="text-[#25D366] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/447538502777"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#006699] hover:underline"
                    >
                      Message us now
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#006699] mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600 leading-snug">
                      <strong>CLEAR SPACE</strong> House Clearance<br />
                      27 High Street<br />
                      Teddington<br />
                      TW11 8ET
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-6">
                <h4 className="text-xl font-semibold text-[#003366] mb-3">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-600 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-medium">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">
                Send a Message
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66CCFF]"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66CCFF]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66CCFF]"
                />
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66CCFF]"
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="house">House Clearance</option>
                  <option value="garden">Garden Clearance</option>
                  <option value="loft">Loft Clearance</option>
                  <option value="office">Office Clearance</option>
                  <option value="storage">Storage Clearance</option>
                  <option value="hoarder">Hoarder Clearance</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Your Message *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66CCFF]"
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-[#003366] hover:bg-[#005588] text-white py-3 rounded-lg font-semibold transition duration-300 shadow-md"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 w-full h-72 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d198319.38827550896!2d-0.335012!3d51.291984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875dcbb1a469d2f%3A0x49a32cb18384a1f!2sSurrey%2C%20UK!5e0!3m2!1sen!2suk!4v1722427580000!5m2!1sen!2suk"
              className="w-full h-full border-0 rounded-lg"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
