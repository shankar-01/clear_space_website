"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";


const services = [
  {
    title: "House Clearance",
    icon: "🏠",
    description:
      "Complete property clearance services for homes of all sizes. We handle everything from furniture to personal belongings with care and professionalism.",
  },
  {
    title: "Garden Clearance",
    icon: "🌿",
    description:
      "Professional garden waste removal and landscaping clearance. We transform overgrown spaces into clean, usable areas.",
  },
  {
    title: "Loft Clearance",
    icon: "📦",
    description:
      "Efficient loft and attic clearance with safe disposal. We handle bulky items, old furniture, and decades of accumulated items.",
  },
  {
    title: "Office Clearance",
    icon: "🏢",
    description:
      "Commercial clearance services for offices and businesses. Minimal disruption with maximum efficiency.",
  },
  {
    title: "Storage Clearance",
    icon: "🔒",
    description:
      "Clear out storage units quickly and efficiently. We help you reclaim your space and stop paying for unused storage.",
  },
  {
    title: "Hoarder Clearance",
    icon: "🧹",
    description:
      "Specialized services for hoarding situations with sensitivity. Discreet, non-judgmental support for challenging clearances.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen">
      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We offer comprehensive clearance solutions for residential and commercial properties.
              Our team handles everything with care, efficiency, and environmental responsibility.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#f0f8ff] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#003366]/10 flex flex-col"
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <a
                  href="#contact"
                  className="text-[#006699] font-medium hover:text-[#003366] flex items-center"
                >
                  Get a quote
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  {/* <img
                    src="/icons/arrow-right.svg"
                    alt="Arrow Right"
                    className="w-4 h-4 ml-2"
                  /> */}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#f0f8ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Simple Process
            </motion.h2>
            <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Getting your space cleared has never been easier. Just follow these simple steps:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Contact Us",
                desc: "Call or email us with details of your clearance needs",
              },
              {
                step: 2,
                title: "Get a Quote",
                desc: "We provide a free, no-obligation quote",
              },
              {
                step: 3,
                title: "Schedule",
                desc: "Choose a convenient date and time for your clearance",
              },
              {
                step: 4,
                title: "Clearance Day",
                desc: "Our team arrives and clears your space efficiently",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#003366]/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-[#003366] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
