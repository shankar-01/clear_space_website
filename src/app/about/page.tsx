"use client"; // Only for app router

import Image from "next/image";
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 md:px-16 py-10">
      {/* Top Image */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl mb-12">
        <Image
          src="/images/About-iClear-Property-Services-1.jpeg"
          alt="Clear Space team"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Our Services</h1>

      {/* Paragraph and Side Image */}
      <div className="flex flex-col lg:flex-row justify-between mb-10 gap-8">
        <p className="text-lg max-w-2xl">
          Welcome to Clear Space Property Services – your trusted partner for house,
          garden, office and waste clearances in Surrey, London, and the South
          East. Led by Harry with 15+ years of experience, we are fully licensed
          and committed to responsible, efficient service...
        </p>
        <Image
          src="/images/Meet-Harry-Stiller-800x600.jpeg"
          alt="Meet Harry"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 shadow-md hover:shadow-xl rounded-xl p-6 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#a000c0]">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Instagram Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-6">From Our Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {instaImages.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`Instagram image ${idx + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        <Link
          href="https://www.instagram.com/yourprofile" // Replace with your Instagram
          target="_blank"
        >
          <button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-md">
            Follow us on Instagram
          </button>
        </Link>
      </div>
    </div>
  );
}
