// pages/index.js
"use client";
import { faCheck, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FaRecycle, FaSmile, FaClock, FaBoxes, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import dynamic from "next/dynamic";
// import { TypeAnimation } from 'react-type-animation';

// Import components - adjust these paths based on your actual file structure
import ServicesPage from "./services/page";
import PricingSection from "@/components/pricingsection"; // Fixed path
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
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Orbs */}
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          />
          <motion.div
            className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear" as const
            }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <motion.div
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center mr-3">
                  {[1,2,3,4,5].map(i => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-xs mr-1" />
                  ))}
                </div>
                <span className="text-white/90">Rated 5.0 by 850+ customers</span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Professional Property Clearance
                  </p>
                  {/* <TypeAnimation
                    sequence={[
                      'Transform Your Space', 2000,
                      'Clear Space, Clear Mind', 2000,
                      'Professional Property Clearance', 2000
                    ]}
                    wrapper="h1"
                    speed={60}
                    className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
                    repeat={Infinity}
                  /> */}
                </motion.div>
                
                <motion.p
                  className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Fast, eco-friendly clearance services across Surrey and London. 
                  <span className="text-cyan-300 font-semibold"> Same-day service available.</span>
                </motion.p>
              </div>

              {/* Key Features */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: <FaShieldAlt />, text: "Licensed & Insured" },
                  { icon: <FaLeaf />, text: "98% Recycling Rate" },
                  { icon: <FaClock />, text: "24/7 Available" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <div className="text-cyan-400 mr-2 text-lg">{feature.icon}</div>
                    <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href="#contact"
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-xl font-bold text-lg text-center transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Free Quote
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
                
                <motion.a
                  href="tel:07538502777"
                  className="group border-2 border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-bold text-lg text-center transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">📞</span> 07538 502777
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-sm border border-green-300/20 p-4 rounded-xl max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="bg-green-500 text-white rounded-full p-2 mr-3">
                  <FontAwesomeIcon icon={faCheck} className="text-sm" />
                </div>
                <div className="text-green-100 text-sm">
                  <p className="font-semibold">Available Today</p>
                  <p className="opacity-90">Free quotes • Licensed carriers • Eco-friendly disposal</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Modern Illustration */}
            <motion.div
              className="relative flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                {/* Main Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl min-h-[500px] w-80 md:w-96"
                  animate={floatingAnimation}
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <FaBoxes className="text-2xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Professional Service</h3>
                    <p className="text-blue-200">Same-day clearance available</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { number: "12K+", label: "Items Cleared", color: "from-blue-400 to-cyan-400" },
                      { number: "850+", label: "Happy Clients", color: "from-purple-400 to-pink-400" },
                      { number: "98%", label: "Recycled", color: "from-green-400 to-emerald-400" },
                      { number: "24/7", label: "Available", color: "from-orange-400 to-red-400" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                          {stat.number}
                        </div>
                        <div className="text-blue-200 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <motion.div
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/30 text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-cyan-100 text-sm mb-2">Ready to get started?</p>
                    <div className="flex items-center justify-center text-white font-semibold">
                      <span>Contact us now</span>
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-cyan-400" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm transform rotate-12 flex items-center"
                  animate={{
                    rotate: [12, 8, 12],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" as const
                  }}
                >
                  <span className="mr-1">⚡</span> Same Day
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm transform -rotate-12 flex items-center"
                  animate={{
                    rotate: [-12, -8, -12],
                    y: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" as const
                  }}
                >
                  <span className="mr-1">🌿</span> Eco-Friendly
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12"
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
                icon: <FaBoxes size={40} className="text-blue-600" />,
                bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
                border: 'border-blue-200'
              },
              {
                value: '98%',
                label: 'Recycling Rate',
                icon: <FaRecycle size={40} className="text-green-600" />,
                bg: 'bg-gradient-to-br from-green-50 to-green-100',
                border: 'border-green-200'
              },
              {
                value: '850+',
                label: 'Happy Clients',
                icon: <FaSmile size={40} className="text-orange-600" />,
                bg: 'bg-gradient-to-br from-orange-50 to-orange-100',
                border: 'border-orange-200'
              },
              {
                value: '24/7',
                label: 'Availability',
                icon: <FaClock size={40} className="text-purple-600" />,
                bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
                border: 'border-purple-200'
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`${stat.bg} border ${stat.border} p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300`}
                variants={item}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-black text-slate-800 mb-2">{stat.value}</div>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
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