"use client";


import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    title: "Cost-effective",
    description:
      "We provide fair and transparent pricing with fixed, upfront quotes—no hidden fees.",
  },
  {
    title: "Experienced",
    description:
      "Our team has extensive expertise handling all types of waste and clearance challenges.",
  },
  {
    title: "Environmental Responsibility",
    description:
      "We prioritize recycling and donate suitable items to charity to reduce landfill waste.",
  },
  {
    title: "Expert Equipment",
    description:
      "We use advanced vehicles and tools for efficient and safe clearance operations.",
  },
  {
    title: "Excellent Customer Care",
    description:
      "Friendly, professional service with full insurance for peace of mind.",
  },
  {
    title: "Compliant",
    description:
      "We follow all local waste regulations, with licenses and permits in place.",
  },
];

const instaImages = [
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
];

const testimonials = [
  {
    name: "Samantha J.",
    text: "Clear Space Property Services made clearing my house effortless. Highly recommended!",
  },
  {
    name: "David W.",
    text: "Professional, punctual, and environmentally responsible. The best in Surrey!",
  },
  {
    name: "Linda P.",
    text: "Affordable and thorough. They handled my office clearance with care and efficiency.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 md:px-20 py-12 max-w-7xl mx-auto">
      {/* Top Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full h-[320px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl mb-16"
      >
        <img
          src="https://placehold.co/900x400"
          alt="Clear Space team"
          className="rounded-3xl w-full"
          
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-6xl font-extrabold mb-10 text-[#003366]"
      >
        About Our Services
      </motion.h1>

      {/* Paragraph and Side Image */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-16"
      >
        <motion.p
          variants={item}
          className="text-lg leading-relaxed max-w-3xl text-gray-700"
        >
          Welcome to <span className="font-semibold text-[#003366]">Clear Space Property Services</span> – your trusted partner for house, garden, office, and waste clearances in Surrey, London, and the South East. Led by Harry, with 15+ years of experience, we are fully licensed and committed to responsible, efficient service that cares for the environment and your peace of mind.
          <br />
          <br />
          Our team delivers expert clearance solutions tailored to your needs — whether it’s a small garden tidy or a full property clearance, we ensure professional, courteous, and hassle-free service every step of the way.
        </motion.p>

        <motion.div variants={item} className="rounded-3xl shadow-xl overflow-hidden flex-shrink-0 w-full max-w-md md:max-w-lg">
          <img
            src="https://placehold.co/600x450"
            alt="Meet Harry"
            width={600}
            height={450}
            className="rounded-3xl object-cover"
            
          />
        </motion.div>
      </motion.div>

      {/* Features */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-[#003366] text-center"
        >
          Why Choose Us?
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white border border-[#003366] shadow-lg rounded-2xl p-7 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#003366]">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-[#003366] text-center"
        >
          What Our Clients Say
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {testimonials.map(({ name, text }, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#f3f6fc] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="italic text-gray-700 mb-4">“{text}”</p>
              <p className="text-[#003366] font-semibold text-right">— {name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Instagram Section */}
      <section className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-[#003366] text-center"
        >
          From Our Instagram
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {instaImages.map((src, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0, 51, 102, 0.3)" }}
              className="rounded-2xl overflow-hidden cursor-pointer shadow-md"
            >
              <img
                src={src}
                alt={`Instagram image ${idx + 1}`}
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#003366] to-[#001f4d] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform duration-300"
            >
              Follow us on Instagram
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
