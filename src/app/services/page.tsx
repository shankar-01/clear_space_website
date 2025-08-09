"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

const services = [
  {
    title: "House Clearances",
    icon: "🏠",
    description:
      "Experience a hassle-free house clearance with Clear Space. Our skilled team expertly handles everything from full house clearouts to targeted areas like sheds, attics, and basements. We also offer sensitive probate property clearances with care and speed.",
    color: "from-[#1e3c72] to-[#2a5298]",
    image: "https://www.junkhunters.co.uk/wp-content/uploads/2017/09/house-clearance-guide-when-you-move-home.jpg", // house interior cleanup
  },
  {
    title: "Garden Clearances",
    icon: "🌿",
    description:
      "Clear Space provides licensed garden clearance services tailored to your needs. As Environment Agency-licensed waste carriers, we prioritize eco-friendly disposal methods while efficiently managing both full and partial garden waste removals.",
    color: "from-[#0f2027] to-[#203a43] to-[#2c5364]",
    image: "https://media.istockphoto.com/id/1033111894/photo/man-collecting-fallen-autumn-leaves-in-the-yard.jpg?s=612x612&w=0&k=20&c=9AVSo3__QnMbtY_y2BKqbhhSMc7kYGlVnl8TSYS8Whk=", // garden tools
  },
  {
    title: "Loft Clearance",
    icon: "📦",
    description:
      "With over 15 years of experience, our trained teams swiftly clear your loft with minimal disruption. We use protective dust sheeting and carefully inspect items before clearance to ensure a thorough, safe service.",
    color: "from-[#2b5876] to-[#4e4376]",
    image: "https://removerr.co.uk/wp-content/uploads/2024/03/loft-clearance_belfast_ni.jpg", // attic/loft storage
  },
  {
    title: "Garage Clearance",
    icon: "🚗",
    description:
      "Reclaim your garage space with Clear Space. We remove all junk, waste, and unwanted furniture—disposing of everything responsibly. From garden tools to old car parts, we help make your garage functional again.",
    color: "from-[#141e30] to-[#243b55]",
    image: "https://houseandflatclearance.co.uk/wp-content/uploads/2020/11/garage-clearance-services.jpg", // garage interior
  },
  {
    title: "Office Clearance",
    icon: "🏢",
    description:
      "Clear Space offers fast, efficient office clearance services, removing computers, IT equipment, furniture, carpets, and more. We work flexibly to minimize disruption, handling clearances during or outside work hours.",
    color: "from-[#3a1c71] to-[#d76d77] to-[#ffaf7b]",
    image: "https://officeoutlet.be/swfiles/files/shutterstock_1531649345-min.jpg?nc=1612536947", // office desks
  },
  {
    title: "Waste Clearance",
    icon: "🗑️",
    description:
      "Using advanced equipment, we manage waste clearance for residential and commercial clients alike. Whether routine or specialist hoarder clearance, our flexible scheduling ensures a smooth, hassle-free experience.",
    color: "from-[#232526] to-[#414345]",
    image: "https://www.fastklean.co.uk/wp-content/uploads/2021/07/Rubbish-Removal-Street.jpg", // waste bins
  },
  {
    title: "Compulsive Hoarding",
    icon: "👿",
    description:
      "We offer sensitive and professional hoarder clearance services. Understanding the complexities involved, Clear Space approaches each case with discretion and respect, assisting families and legal advisers effectively.",
    color: "from-[#5a3f37] to-[#2c7744]",
    image: "https://www.aifc.com.au/wp-content/uploads/2016/02/hoarding.jpg", // cluttered room
  },
  {
    title: "Storage Unit Clearance",
    icon: "🔒",
    description:
      "Need fast, efficient storage clearance? Clear Space specializes in quick removals with flexible scheduling and personal attention, helping you declutter and stop paying for unused storage space.",
    color: "from-[#3a1c71] to-[#d76d77] to-[#ffaf7b]",
    image: "https://www.iclearpropertyservices.co.uk/wp-content/uploads/self-storage-clearances-UK.jpg.webp", // storage boxes
  },
  {
    title: "Retirement Home Clearance",
    icon: "🏥",
    description:
      "We provide compassionate clearance services for care home rooms and assisted living facilities. From furniture removal to carpets and curtains, Clear Space ensures professional handling with respect for residents and families.",
    color: "from-[#223344] to-[#446688]",
    image: "https://hellocleaners.co.uk/wp-content/uploads/2022/10/cleaning-for-seniors.jpg", // nursing home room
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
      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={service.image}
          alt={service.title}
          className="rounded-xl mb-4 w-full max-h-40 object-cover shadow-md"
          loading="lazy"
        />
        {/* <div className="text-5xl mb-3">{service.icon}</div> */}
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
            From home and garden clearances to office and storage removals — Clear Space delivers professional, respectful, and efficient clearance solutions tailored to your needs.
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
            Our simple and streamlined process ensures a smooth, stress-free clearance experience.
          </motion.p>
        </div>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3 text-center">
          {[
            {
              step: "1",
              title: "Request a Quote",
              desc: "Contact us with your clearance requirements and receive a prompt, transparent estimate.",
            },
            {
              step: "2",
              title: "Schedule a Visit",
              desc: "Choose a convenient time for our team to assess and begin your clearance.",
            },
            {
              step: "3",
              title: "We Handle the Rest",
              desc: "Our experienced professionals clear your space efficiently and dispose of waste responsibly.",
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
