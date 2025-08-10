"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import Link from "next/link";

const features = [
  {
    title: "Cost-effective",
    description:
      "We provide fair and transparent pricing with fixed, upfront quotes—no hidden fees.",
    color: "from-[#1e3c72] to-[#2a5298]",
  },
  {
    title: "Experienced",
    description:
      "Our team has extensive expertise handling all types of waste and clearance challenges.",
    color: "from-[#0f2027] to-[#203a43] to-[#2c5364]",
  },
  {
    title: "Environmental Responsibility",
    description:
      "We prioritize recycling and donate suitable items to charity to reduce landfill waste.",
    color: "from-[#2b5876] to-[#4e4376]",
  },
  {
    title: "Expert Equipment",
    description:
      "We use advanced vehicles and tools for efficient and safe clearance operations.",
    color: "from-[#141e30] to-[#243b55]",
  },
  {
    title: "Excellent Customer Care",
    description:
      "Friendly, professional service with full insurance for peace of mind.",
    color: "from-[#3a1c71] to-[#d76d77] to-[#ffaf7b]",
  },
  {
    title: "Compliant",
    description:
      "We follow all local waste regulations, with licenses and permits in place.",
    color: "from-[#232526] to-[#414345]",
  },
];

const instaImages = [
  "https://www.avon-pestcontrol.co.uk/wp-content/uploads/2022/10/Depositphotos_60188121_S.jpg", // junk removal truck
  "https://www.junk-it-scotland.com/wp-content/uploads/2025/01/Garage-Clearance-in-Glasgow-Before-After.png", // recycling
  "https://houseandofficeclearance.co.uk/wp-content/uploads/2020/07/removals-london.jpg", // waste bins
  "https://media.istockphoto.com/id/1316432905/photo/cleaning-home.jpg?s=612x612&w=0&k=20&c=7qvIOziMXBAu5RL0yf4lgTbSYXh7vNoOoASLd6QotEs=", // clearing yard
  "https://wedump4u.co.uk/wp-content/uploads/2023/05/Decluttering-And-Organising_-1024x522.jpg", // workers in vest
  "https://www.rubbishclearanceherts.co.uk/images/slideshow/slide5.jpeg", // environmental protection
  "https://sammysclearances.co.uk/wp-content/uploads/2020/06/before-and-after-property-clearance-small.jpg", // rubbish truck side
  "https://www.junk-it-scotland.com/wp-content/uploads/2025/01/Garden-Clearance-in-Glasgow-Before-After.png", // waste bins again
];

function TiltCard({ feature }: { feature: (typeof features)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 150 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    x.set(mx / rect.width);
    y.set(my / rect.height);
  }

  function resetTilt() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{ rotateX, rotateY }}
      className={clsx(
        "relative rounded-2xl p-5 text-white shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl transform-gpu bg-gradient-to-br",
        feature.color
      )}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full animate-pulse bg-gradient-radial from-white/20 to-transparent opacity-30 blur-2xl rounded-3xl" />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0e1421] text-white px-4 sm:px-6 md:px-10 lg:px-20 py-12 max-w-7xl mx-auto">
      {/* Top Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl mb-12 border border-[#334466]"
      >
        <img
          src="/about.png"
          alt="Clear Space team"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-10 text-[#66CCFF] text-center"
      >
        About Our Services
      </motion.h1>

      {/* Paragraph + Image */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-base sm:text-lg max-w-3xl text-white/90 leading-relaxed">
          Welcome to <span className="font-semibold text-[#66CCFF]">Clear Space Property Services</span> – your trusted partner for house, garden, office, and waste clearances in Surrey, London, and the South East. Led by Harry, with 15+ years of experience, we are fully licensed and committed to responsible, efficient service that cares for the environment and your peace of mind.
          <br /><br />
          Our team delivers expert clearance solutions tailored to your needs — whether it’s a small garden tidy or a full property clearance, we ensure professional, courteous, and hassle-free service every step of the way.
        </p>

        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-[#334466]">
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="Meet Harry"
            className="w-full object-cover h-full"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Features */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center text-[#66CCFF]"
        >
          Why Choose Us?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <TiltCard key={i} feature={feature} />
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center text-[#66CCFF]"
        >
          From Our Instagram
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
        >
          {instaImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(102,204,255,0.5)",
              }}
              className="rounded-2xl overflow-hidden cursor-pointer shadow-md bg-[#12203a]"
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
              className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg shadow-lg transition-transform duration-300"
            >
              Follow us on Instagram
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
