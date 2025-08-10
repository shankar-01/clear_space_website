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

function FloatingCard({ service, index }: { service: (typeof services)[0]; index: number }) {
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
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Animated background glow */}
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

      {/* Main card */}
      <motion.div
        className={clsx(
          "relative overflow-hidden rounded-3xl bg-gradient-to-br backdrop-blur-xl border border-white/20 shadow-2xl transform-gpu",
          service.color
        )}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/10"
            animate={{
              x: isHovered ? ["-100%", "100%"] : "-100%",
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: isHovered ? Infinity : 0,
            }}
          />
        </div>

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
          {/* Header */}
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
              <motion.div 
                className="h-0.5 bg-white/60 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </div>
          </div>

          {/* Image with overlay */}
          <div className="relative mb-6 group/image">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover rounded-2xl shadow-lg"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
            
            {/* Floating badge */}
            <motion.div
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FontAwesomeIcon icon={faStar} className="mr-1 text-yellow-500" />
              Premium
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-white/90 mb-6 leading-relaxed">{service.description}</p>

          {/* Features list */}
          <div className="space-y-2 mb-6">
            {service.features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex items-center text-white/80"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-300 text-sm" />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900"
        />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${10 + i * 20}%`,
                top: `${10 + i * 15}%`,
                background: [
                  "linear-gradient(45deg, #8B5CF6, #06B6D4)",
                  "linear-gradient(45deg, #10B981, #F59E0B)",
                  "linear-gradient(45deg, #EF4444, #8B5CF6)",
                  "linear-gradient(45deg, #06B6D4, #10B981)",
                  "linear-gradient(45deg, #F59E0B, #EF4444)",
                ][i],
              }}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-white mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
              Professional Clearance Services
            </motion.div>

            <motion.h2
              className="text-6xl md:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Expert Services,
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Done Right
              </span>
            </motion.h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              From home and garden clearances to office and storage removals — Clear Space delivers 
              <span className="text-purple-300 font-semibold"> professional, respectful, and efficient </span>
              clearance solutions tailored to your needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FloatingCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full px-6 py-2 text-sm text-slate-200 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
              Simple Process
            </motion.div>

            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 text-5xl md:text-6xl font-black text-slate-800 mb-8">
              Clear Your Space in{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                3 Easy Steps
              </span>
            </h2>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our simple and streamlined process ensures a smooth, stress-free clearance experience.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Request a Quote",
                desc: "Contact us with your clearance requirements and receive a prompt, transparent estimate with no hidden fees.",
                color: "from-purple-500 to-violet-600",
                icon: "💬",
              },
              {
                step: "02",
                title: "Schedule a Visit",
                desc: "Choose a convenient time for our professional team to assess your space and begin the clearance process.",
                color: "from-cyan-500 to-blue-600",
                icon: "📅",
              },
              {
                step: "03",
                title: "We Handle the Rest",
                desc: "Our experienced professionals clear your space efficiently and dispose of all waste responsibly and sustainably.",
                color: "from-emerald-500 to-green-600",
                icon: "✨",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`} />
                
                {/* Main card */}
                <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${item.color} rounded-full blur-3xl`} />
                  </div>

                  <div className="relative z-10">
                    {/* Step number and icon */}
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`bg-gradient-to-r ${item.color} text-white text-lg font-black px-4 py-2 rounded-full mr-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.step}
                      </motion.div>
                      <motion.div
                        className="text-3xl bg-white/10 p-3 rounded-2xl backdrop-blur-sm"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.desc}</p>

                    {/* Decorative line */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r ${item.color} rounded-full mt-6`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}