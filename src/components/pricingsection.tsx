'use client';

import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faStar, faLeaf, faRecycle, faHeart } from "@fortawesome/free-solid-svg-icons";

const pricing = [   {
        type: 'Small Single Item',
        weight: 'e.g. Oven',
        price: '£35-£50',
        image: '/price/single_item.png',
        color: 'from-indigo-600 via-blue-600 to-cyan-500',
        glowColor: 'emerald-500/30',
        popular: false,
        features: ['£35 within 5 miles', '£50 within 10 miles', 'Perfect for appliances'],
    },
    {
        type: 'Large Single Item',
        weight: 'e.g. Sofa - Any distance',
        price: '£70',
        image: '/price/lg_single_item.png',
        color: 'from-indigo-600 via-blue-600 to-cyan-500',
        glowColor: 'purple-500/30',
        popular: false,
        features: ['Furniture collection', 'Professional handling', 'Any location coverage'],
    },
    {
        type: 'X-Small Clearance',
        weight: '1/4 Load - 1 to 2 Person Team',
        price: '£120',
        image: '/price/xs_clearance.png',
        color: 'from-indigo-600 via-blue-600 to-cyan-500',
        glowColor: 'orange-500/30',
        popular: false,
        features: ['Small room clearance', 'Flexible team size', 'Quick turnaround'],
    },
    {
        type: 'Small Clearance',
        weight: '1/2 Load - 1 to 2 Person Team',
        price: '£225',
        image: '/price/sm_clearance.png',
        color: 'from-indigo-600 via-blue-600 to-cyan-500',
        glowColor: 'blue-500/30',
        popular: true,
        features: ['Multi-room clearance', 'Most popular choice', 'Professional team'],
    },
    {
        type: 'Medium Clearance',
        weight: '3/4 Load - 2 Person Team',
        price: '£350',
        image: '/price/md_clearance.png',
        color: 'from-indigo-600 via-blue-600 to-cyan-500',
        glowColor: 'cyan-500/30',
        popular: false,
        features: ['Large property clearance', 'Dedicated 2-person team', 'Comprehensive service'],
    },
    {
        type: 'Large Clearance',
        weight: 'Full Load - 2-3 Person Team',
        price: '£500',
        image: '/price/lg_clearance.png',
        color: 'from-indigo-600 via-blue-600 to-cyan-500',
        glowColor: 'rose-500/30',
        popular: false,
        features: ['Complete house clearance', 'Large dedicated team', 'Maximum capacity service'],
    },
];

function PricingCard({ item, index }: { item: typeof pricing[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={cardRef}
            className="relative group"
            initial={{ opacity: 0, y: 100, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -20, scale: 1.02 }}
        >
            {/* Glow effect */}
            <motion.div
                className={`absolute -inset-1 bg-${item.glowColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-60`}
                animate={{
                    opacity: isHovered ? [0.3, 0.6, 0.3] : 0,
                }}
                transition={{
                    duration: 2,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut"
                }}
            />

            {/* Popular badge */}
            {item.popular && (
                <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0, scale: 0, y: -20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full shadow-lg font-bold text-sm flex items-center">
                        <FontAwesomeIcon icon={faStar} className="mr-2" />
                        Most Popular
                    </div>
                </motion.div>
            )}

            {/* Main card */}
            <motion.div
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.color} shadow-2xl transform-gpu h-full flex flex-col justify-between`}
                style={{
                    background: isHovered 
                        ? `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%), linear-gradient(135deg, var(--tw-gradient-stops))`
                        : undefined
                }}
            >
                {/* Animated background patterns */}
                <div className="absolute inset-0 opacity-20">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white/20"
                            animate={{
                                x: [0, 30, 0],
                                y: [0, -20, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 4 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5,
                            }}
                            style={{
                                width: `${40 + i * 20}px`,
                                height: `${40 + i * 20}px`,
                                left: `${20 + i * 25}%`,
                                top: `${15 + i * 20}%`,
                            }}
                        />
                    ))}
                </div>

                {/* Mesh gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"
                    animate={{
                        background: isHovered
                            ? [
                                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)",
                                "linear-gradient(225deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
                                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)"
                            ]
                            : "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)"
                    }}
                    transition={{
                        duration: 3,
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeInOut"
                    }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 text-center text-white">
                    {/* Image container */}
                    <motion.div
                        className="mb-6 flex justify-center"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"></div>
                            <img
                                src={item.image}
                                alt={item.type}
                                className="relative h-28 object-contain filter drop-shadow-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                        className="text-2xl font-bold mb-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        {item.type}
                    </motion.h3>

                    {/* Weight info */}
                    <p className="text-white/80 text-sm mb-6 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                        {item.weight}
                    </p>

                    {/* Price */}
                    <motion.div 
                        className="mb-6"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="text-4xl font-black mb-1">
                            ~{item.price}
                        </div>
                        <div className="text-white/70 text-sm">+ VAT</div>
                    </motion.div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                        {item.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center text-sm text-white/90 bg-white/10 rounded-full px-3 py-2 backdrop-blur-sm"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <FontAwesomeIcon icon={faCheckCircle} className="mr-2 text-green-300 text-xs" />
                                {feature}
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    {/* <motion.button
                        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Choose This Plan
                    </motion.button> */}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function PricingSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    return (
        <section id="pricing" className="relative py-32 overflow-hidden" ref={ref}>
            {/* Animated background */}
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

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    style={{ y: textY }}
                    className="text-center mb-20"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm text-white mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <FontAwesomeIcon icon={faStar} className="mr-2 text-yellow-400" />
                        Transparent Pricing
                    </motion.div>

                    {/* Main title */}
                    <motion.h2 
                        className="text-5xl md:text-7xl font-black mb-8 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="text-white">
                            Affordable
                        
                        <br />
                            Waste Clearance
                        </span>
                    </motion.h2>

                    {/* Divider */}
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />

                    {/* Description */}
                    <motion.p
                        className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        Our bulky waste clearance services cover everything from DIY projects to builder &apos;s waste. 
                        <span className="font-semibold"> We charge £45 + VAT per 100kg </span>
                        with a £65 + VAT call-out fee. Each truck has a maximum load capacity of 1100kg.
                    </motion.p>
                </motion.div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                    {pricing.map((item, index) => (
                        <PricingCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Eco Commitment Section */}
                <motion.div
                    className="relative max-w-6xl mx-auto"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-60"></div>
                    
                    {/* Main card */}
                    <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute inset-0 opacity-10">
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full bg-green-400"
                                    animate={{
                                        x: [0, 50, 0],
                                        y: [0, -30, 0],
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 6 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.5,
                                    }}
                                    style={{
                                        width: `${60 + i * 20}px`,
                                        height: `${60 + i * 20}px`,
                                        right: `${10 + i * 20}%`,
                                        top: `${20 + i * 15}%`,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10 p-12">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <motion.div
                                    className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 text-sm text-green-200 mb-4"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <FontAwesomeIcon icon={faLeaf} className="mr-2 text-green-400" />
                                    Sustainability Promise
                                </motion.div>

                                <h3 className="text-4xl font-bold text-white mb-6">
                                    Our Commitment to 
                                    <span> Sustainability</span>
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                {/* Image */}
                                <motion.div 
                                    className="relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-30"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=400&q=80"
                                        alt="Eco friendly recycling"
                                        className="relative rounded-2xl shadow-2xl w-full h-64 object-cover"
                                    />
                                    
                                    {/* Floating stats */}
                                    <motion.div
                                        className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                                        animate={{ y: [-5, 5, -5] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        90%+ Recycled
                                    </motion.div>
                                </motion.div>

                                {/* Text content */}
                                <div className="space-y-6">
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        At Clear Space, we prioritize eco-friendly waste clearance. 
                                        <span className="font-semibold"> Over 90% of collected items </span>
                                        are recycled or donated, ensuring minimal landfill impact.
                                    </p>

                                    {/* Features list */}
                                    <div className="space-y-4">
                                        {[
                                            { icon: faHeart, text: "Furniture and household goods donated to charities" },
                                            { icon: faRecycle, text: "Responsible recycling of electronic equipment" },
                                            { icon: faCheckCircle, text: "All waste processed at licensed, regulated facilities" }
                                        ].map((item, i) => (
                                            <motion.div
                                                key={i}
                                                className="flex items-center bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                whileHover={{ scale: 1.02, x: 5 }}
                                            >
                                                <FontAwesomeIcon 
                                                    icon={item.icon} 
                                                    className="mr-4 text-green-400 text-lg bg-green-500/20 p-2 rounded-full" 
                                                />
                                                <span className="text-gray-300">{item.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    {/* <motion.button
                                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More About Our Process
                                    </motion.button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}