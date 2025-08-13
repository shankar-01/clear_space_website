"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import clsx from "clsx";

const services = [
  {
    title: "House Clearances",
    icon: "🏠",
    description: "Experience a hassle-free house clearance with Clear Space. Our skilled team expertly handles everything from full house clearouts to targeted areas like sheds, attics, and basements.",
    features: ["Full property clearance", "Probate services", "Same-day available"],
    color: "from-violet-600 via-purple-600 to-indigo-600",
    glowColor: "violet",
    image: "https://www.junkhunters.co.uk/wp-content/uploads/2017/09/house-clearance-guide-when-you-move-home.jpg",
  },
  {
    title: "Garden Clearances",
    icon: "🌿",
    description: "Clear Space provides licensed garden clearance services tailored to your needs. As Environment Agency-licensed waste carriers, we prioritize eco-friendly disposal methods.",
    features: ["Eco-friendly disposal", "Licensed carriers", "Full/partial clearance"],
    color: "from-emerald-500 via-green-500 to-teal-500",
    glowColor: "emerald",
    image: "https://media.istockphoto.com/id/1033111894/photo/man-collecting-fallen-autumn-leaves-in-the-yard.jpg?s=612x612&w=0&k=20&c=9AVSo3__QnMbtY_y2BKqbhhSMc7kYGlVnl8TSYS8Whk=",
  },
  {
    title: "Loft Clearance",
    icon: "📦",
    description: "With over 15 years of experience, our trained teams swiftly clear your loft with minimal disruption. We use protective dust sheeting and carefully inspect items.",
    features: ["15+ years experience", "Protective measures", "Thorough inspection"],
    color: "from-blue-600 via-cyan-500 to-teal-500",
    glowColor: "cyan",
    image: "https://removerr.co.uk/wp-content/uploads/2024/03/loft-clearance_belfast_ni.jpg",
  },
  {
    title: "Garage Clearance",
    icon: "🚗",
    description: "Reclaim your garage space with Clear Space. We remove all junk, waste, and unwanted furniture—disposing of everything responsibly.",
    features: ["Complete clearance", "Responsible disposal", "Space optimization"],
    color: "from-orange-500 via-amber-500 to-yellow-500",
    glowColor: "orange",
    image: "https://houseandflatclearance.co.uk/wp-content/uploads/2020/11/garage-clearance-services.jpg",
  },
  {
    title: "Office Clearance",
    icon: "🏢",
    description: "Clear Space offers fast, efficient office clearance services, removing computers, IT equipment, furniture, carpets, and more with minimal disruption.",
    features: ["IT equipment removal", "Flexible scheduling", "Business focused"],
    color: "from-rose-500 via-pink-500 to-purple-500",
    glowColor: "rose",
    image: "https://officeoutlet.be/swfiles/files/shutterstock_1531649345-min.jpg?nc=1612536947",
  },
  {
    title: "Waste Clearance",
    icon: "🗑️",
    description: "Using advanced equipment, we manage waste clearance for residential and commercial clients alike. Whether routine or specialist hoarder clearance.",
    features: ["Advanced equipment", "Residential & commercial", "Specialist services"],
    color: "from-slate-600 via-gray-600 to-zinc-600",
    glowColor: "slate",
    image: "https://www.fastklean.co.uk/wp-content/uploads/2021/07/Rubbish-Removal-Street.jpg",
  },
  {
    title: "Compulsive Hoarding",
    icon: "🤝",
    description: "We offer sensitive and professional hoarder clearance services. Understanding the complexities involved, Clear Space approaches each case with discretion and respect.",
    features: ["Sensitive approach", "Professional handling", "Discretion guaranteed"],
    color: "from-teal-600 via-emerald-600 to-green-600",
    glowColor: "emerald",
    image: "https://www.aifc.com.au/wp-content/uploads/2016/02/hoarding.jpg",
  },
  {
    title: "Storage Unit Clearance",
    icon: "🔒",
    description: "Need fast, efficient storage clearance? Clear Space specializes in quick removals with flexible scheduling and personal attention, helping you declutter.",
    features: ["Quick removals", "Flexible scheduling", "Personal attention"],
    color: "from-indigo-600 via-purple-600 to-pink-600",
    glowColor: "violet",
    image: "https://www.iclearpropertyservices.co.uk/wp-content/uploads/self-storage-clearances-UK.jpg.webp",
  },
  {
    title: "Retirement Home Clearance",
    icon: "🏥",
    description: "We provide compassionate clearance services for care home rooms and assisted living facilities. From furniture removal to carpets and curtains.",
    features: ["Compassionate service", "Care home specialist", "Respectful handling"],
    color: "from-amber-600 via-orange-600 to-red-600",
    glowColor: "orange",
    image: "https://hellocleaners.co.uk/wp-content/uploads/2022/10/cleaning-for-seniors.jpg",
  },
];

function FloatingCard({ service }: { service: (typeof services)[0] }) {
  const [, setIsHovered] = useState(false);

  const glowColors = {
    violet: "rgba(139, 92, 246, 0.3)",
    emerald: "rgba(16, 185, 129, 0.3)",
    cyan: "rgba(6, 182, 212, 0.3)",
    orange: "rgba(249, 115, 22, 0.3)",
    rose: "rgba(244, 63, 94, 0.3)",
    slate: "rgba(100, 116, 139, 0.3)",
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      {/* Glow */}
      <div
        className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700`}
        style={{
          background: `radial-gradient(circle at center, ${glowColors[service.glowColor as keyof typeof glowColors]}, transparent 70%)`
        }}
      />

      {/* Main Card */}
      <motion.div
        className={clsx(
          "relative overflow-hidden rounded-3xl bg-gradient-to-br backdrop-blur-xl border border-white/20 shadow-2xl transform-gpu",
          service.color
        )}
        whileHover={{ scale: 1.02 }}
      >
        {/* Icon & Title */}
        <div className="flex items-center mb-6 p-8">
          <motion.div
            className="text-4xl mr-4 p-3 bg-white/20 rounded-2xl backdrop-blur-sm"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {service.icon}
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
            <div className="h-0.5 bg-white/60 rounded-full w-full" />
          </div>
        </div>

        {/* Image */}
        <div className="relative mb-6 px-8">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-500" />
            Premium
          </div>
        </div>

        {/* Description */}
        <p className="text-white/90 mb-6 leading-relaxed px-8">{service.description}</p>

        {/* Features */}
        <div className="space-y-2 mb-6 px-8">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center text-white/80">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-300 text-sm" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#contact"
          className="group/cta inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl m-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Quote
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 group-hover/cta:translate-x-1 transition-transform duration-300"
          />
        </motion.a>
      </motion.div>
    </div>
  );
}


export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background - Matching Pricing Page */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Floating orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-screen opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{
                width: `${150 + i * 30}px`,
                height: `${150 + i * 30}px`,
                left: `${5 + i * 15}%`,
                top: `${10 + i * 15}%`,
                background: [
                  "linear-gradient(45deg, #3B82F6, #8B5CF6)",
                  "linear-gradient(45deg, #10B981, #06B6D4)",
                  "linear-gradient(45deg, #F59E0B, #EF4444)",
                  "linear-gradient(45deg, #8B5CF6, #EC4899)",
                  "linear-gradient(45deg, #06B6D4, #10B981)",
                  "linear-gradient(45deg, #EF4444, #F59E0B)",
                ][i],
              }}
            />
          ))}
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            style={{ y: textY }}
            className="mb-16"
          >
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-white mb-6">
              <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
              Professional Clearance Services
            </div>

            <h2 className="text-6xl md:text-8xl font-bold mb-4 text-white">
              Expert Services,<br />
                Done Right
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8 rounded-full" />

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From home and garden clearances to office and storage removals — Clear Space delivers 
              <span className="font-semibold"> professional, respectful, and efficient </span>
              clearance solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FloatingCard key={index} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}