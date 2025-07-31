"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {  useRef } from "react";
import clsx from "clsx";

const services = [
  {
    title: "House Clearance",
    icon: "🏠",
    description: "Complete property clearance services for homes of all sizes...",
    color: "from-[#1e3c72] to-[#2a5298]",
  },
  {
    title: "Garden Clearance",
    icon: "🌿",
    description: "Professional garden waste removal and landscaping clearance...",
    color: "from-[#0f2027] to-[#203a43] to-[#2c5364]",
  },
  {
    title: "Loft Clearance",
    icon: "📦",
    description: "Efficient loft and attic clearance with safe disposal...",
    color: "from-[#2b5876] to-[#4e4376]",
  },
  {
    title: "Office Clearance",
    icon: "🏢",
    description: "Commercial clearance services for offices and businesses...",
    color: "from-[#141e30] to-[#243b55]",
  },
  {
    title: "Storage Clearance",
    icon: "🔒",
    description: "Clear out storage units quickly and efficiently...",
    color: "from-[#3a1c71] to-[#d76d77] to-[#ffaf7b]",
  },
  {
    title: "Hoarder Clearance",
    icon: "👿",
    description: "Specialized services for hoarding situations with sensitivity...",
    color: "from-[#232526] to-[#414345]",
  },
];


function TiltCard({ service }: { service: (typeof services)[0] }) {
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
        "relative rounded-3xl p-6 text-white shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl transform-gpu bg-gradient-to-br",
        service.color
      )}
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full animate-pulse bg-gradient-radial from-white/20 to-transparent opacity-30 blur-2xl rounded-3xl" />
      </div>
      <div className="relative z-10">
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-white/90 mb-4">{service.description}</p>
<a
  href="#contact"
  className="inline-flex items-center gap-2 font-semibold text-[#66CCFF] hover:text-white transition"
>
  Get a quote <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
</a>

      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#f9fafc] min-h-screen">
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-[#003366] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Expert Clearance Services, Done Right
          </motion.h2>
          <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6 rounded-full"></div>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Whether it&apos;s a home, office, garden, or loft — we offer tailored clearance services to suit your needs. Our expert team works with care, speed, and respect for your space and the environment.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <TiltCard key={i} service={service} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#003366] text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
  className="text-4xl md:text-5xl font-extrabold mb-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  Clear Your Space in 3 Easy Steps
</motion.h2>
          <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6 rounded-full"></div>
          <motion.p
            className="text-gray-200 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our streamlined process ensures a hassle-free experience for our clients.
          </motion.p>
        </div>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          {[
            {
              step: "1",
              title: "Request a Quote",
              desc: "Reach out to us with your clearance needs and we’ll provide a quick estimate.",
            },
            {
              step: "2",
              title: "Schedule a Visit",
              desc: "Choose a convenient time for our team to assess and begin the clearance.",
            },
            {
              step: "3",
              title: "We Handle the Rest",
              desc: "Our professionals efficiently clear the space and dispose of waste responsibly.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white text-[#003366] p-6 rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#66CCFF] mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
