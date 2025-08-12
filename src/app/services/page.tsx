"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
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
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  
  const rotateX = useSpring(useTransform(y, [0, 1], [15, -15]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-15, 15]), { stiffness: 100, damping: 30 });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

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

  const glowColors = {
    violet: "rgba(139, 92, 246, 0.3)",
    emerald: "rgba(16, 185, 129, 0.3)",
    cyan: "rgba(6, 182, 212, 0.3)",
    orange: "rgba(249, 115, 22, 0.3)",
    rose: "rgba(244, 63, 94, 0.3)",
    slate: "rgba(100, 116, 139, 0.3)",
  };

  return (
    <motion.div
      ref={ref}
      style={{ scale, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        resetTilt();
        setIsHovered(false);
      }}
      className="relative group perspective-1000"
    >
      {/* Glow */}
      <motion.div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
        style={{
          background: `radial-gradient(circle at center, ${glowColors[service.glowColor as keyof typeof glowColors]}, transparent 70%)`
        }}
        animate={{
          scale: isHovered ? [1, 1.05, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
      />

      {/* Main Card */}
      <motion.div
        className={clsx(
          "relative overflow-hidden rounded-3xl bg-gradient-to-br backdrop-blur-xl border border-white/20 shadow-2xl transform-gpu",
          service.color
        )}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 rounded-full bg-white/10 blur-xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 p-8">
          <div className="flex items-center mb-6">
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

          <div className="relative mb-6">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-500" />
              Premium
            </div>
          </div>

          <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>

          <div className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-center text-white/80">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-300 text-sm" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="group/cta inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="ml-2 group-hover/cta:translate-x-1 transition-transform duration-300" 
            />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900"
        />
      </div>

      {/* Hero */}
      <section className="relative py-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-white mb-6">
              <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
              Professional Clearance Services
            </div>

            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Expert Services,<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Done Right
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8 rounded-full" />

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From home and garden clearances to office and storage removals — Clear Space delivers 
              <span className="text-purple-300 font-semibold"> professional, respectful, and efficient </span>
              clearance solutions tailored to your needs.
            </p>
          </div>
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
