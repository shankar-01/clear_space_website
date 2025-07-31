// pages/index.js
"use client";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FaRecycle, FaSmile, FaClock, FaBoxes } from 'react-icons/fa';
import dynamic from "next/dynamic";
import ServicesPage from "./services/page";
import { TypeAnimation } from 'react-type-animation';
import PricingSection from "@/components/pricingsection";
import ContactPage from "./contact/page";
import FAQPage from "./faqs/page";
import ReviewsPage from "./reviews/page";
const CoverageSection = dynamic(() => import("@/components/coveragesection"), {
  ssr: false,
});

export default function Home() {

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };



  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#003366] to-[#006699] text-white py-16 md:py-24 overflow-hidden">
        {/* Intro Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          src="/intro.mp4"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          {/* Left Content */}
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                'Clear Space', 1000,
                'Professional Property Clearance Services', 2000
              ]}
              wrapper="h1"
              speed={50}
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-white"
              repeat={Infinity}
            />
            <p className="text-xl mb-8 max-w-lg">
              Fast, reliable and eco-friendly clearance services across Surrey and London
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#contact"
                className="bg-white text-[#003366] hover:bg-[#66CCFF] hover:text-white px-6 py-3 rounded-lg font-bold text-center transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                href="tel:07538502777"
                className="border-2 border-white hover:bg-white hover:text-[#003366] px-6 py-3 rounded-lg font-bold text-center transition duration-300"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                Call: 07538 502777
              </motion.a>
              <motion.a
                href="https://wa.me/07538502777"
                className="border-2 border-white hover:bg-white hover:text-[#003366] px-6 py-3 rounded-lg font-bold text-center transition duration-300"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp: 07538 502777
              </motion.a>
            </div>
            <motion.div
              className="mt-8 flex items-center bg-white bg-opacity-20 p-4 rounded-lg max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="bg-[#003366] text-white rounded-full p-2 mr-3">
                <FontAwesomeIcon icon={faCheck} className="text-lg" />
              </div>
              <p className="text-[#003366]">
                Same-day service available • Free on-site quotes • Licensed waste carriers
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative hidden md:block">
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
              <motion.div
                className="absolute -top-4 -right-16 bg-white text-[#003366] px-6 py-3 rounded-lg shadow-lg font-bold transform rotate-3"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [3, -1, 3]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              >
                Same Day Service Available
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#f0f8ff]">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose Clear Space?
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                value: '12,000+',
                label: 'Items Cleared',
                icon: <FaBoxes size={40} className="text-[#003366]" />,
                bg: 'bg-[#e6f2ff]'
              },
              {
                value: '98%',
                label: 'Recycling Rate',
                icon: <FaRecycle size={40} className="text-[#006633]" />,
                bg: 'bg-[#eaffea]'
              },
              {
                value: '850+',
                label: 'Happy Clients',
                icon: <FaSmile size={40} className="text-[#ff9900]" />,
                bg: 'bg-[#fff7e6]'
              },
              {
                value: '24/7',
                label: 'Availability',
                icon: <FaClock size={40} className="text-[#cc0000]" />,
                bg: 'bg-[#ffe6e6]'
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`${stat.bg} p-6 rounded-xl shadow-md text-center border border-[#003366]/10 hover:shadow-xl transition-shadow`}
                variants={item}
                whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#003366] mb-2">{stat.value}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div id="services">
        <ServicesPage />
      </div>

      {/* Coverage Section */}
      <CoverageSection />



      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials */}
      <ReviewsPage />

      {/* FAQ Section */}
      <FAQPage />

      {/* Contact Section */}
      <ContactPage />
    </main>
  );
}