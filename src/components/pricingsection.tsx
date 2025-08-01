'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const pricing = [
    {
        type: 'Small Clearance',
        price: '£70 - £100',
        description: 'Perfect for quick, light removals or single-room clearouts.',
        features: ['1/4 Load', '2 Person Team', 'Includes labor & disposal'],
    },
    {
        type: 'Medium Clearance',
        price: '£120 - £160',
        description: 'Ideal for medium house or office clearances.',
        features: ['1/2 Load', '2 Person Team', 'Labor & responsible disposal'],
    },
    {
        type: 'Large Clearance',
        price: '£250 - £300',
        description: 'Comprehensive full-house or site clearance.',
        features: ['Full Load', '2 Person Team', 'Includes heavy lifting & disposal'],
    },
];

export default function PricingSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView]);

    return (
        <section id="pricing" className="py-16 bg-[#f0f8ff]" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold text-[#003366]">Transparent Pricing</h2>
                    <div className="w-20 h-1 bg-[#66CCFF] mx-auto my-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Clear, upfront pricing with no hidden fees. All prices include labor, transport, and responsible disposal.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricing.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-xl shadow-lg overflow-hidden ${index === 1
                                    ? 'transform scale-105 relative z-10 border-2 border-[#66CCFF]'
                                    : 'border border-[#003366]/20'
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                        >
                            <div
                                className={`p-6 text-center ${index === 1
                                        ? 'bg-gradient-to-r from-[#003366] to-[#006699] text-white'
                                        : 'bg-white'
                                    }`}
                            >
                                <h3 className={`text-xl font-bold text-black ${index === 1 ? 'text-white' : ''}`}>{plan.type}</h3>
                                <div className="mt-4">
                                    <span className={`text-4xl font-bold text-black ${index === 1 ? 'text-white' : ''}`}>{plan.price}</span>
                                    <span
                                        className={`ml-1 ${index === 1 ? 'text-white/80' : 'text-gray-600'
                                            }`}
                                    >
                                        /load
                                    </span>
                                </div>
                                <p className={`mt-2 text-black ${index === 1 ? 'text-white/80' : ''}`}>{plan.description}</p>
                            </div>
                            <div className="p-6 bg-white">
                                <ul className="space-y-3 text-gray-700">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="w-5 h-5 text-[#66CCFF] mr-2"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <motion.a
                                    href={`https://wa.me/07538502777?text=${encodeURIComponent(
                                        `Hi, I’m interested in your "${plan.type}" plan. Can you provide more details?`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-6 block text-center py-3 rounded-lg font-bold transition duration-300 ${index === 1
                                            ? 'bg-white text-[#003366] hover:bg-[#66CCFF]'
                                            : 'bg-[#003366] hover:bg-[#006699] text-white'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get a Quote
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto border border-[#003366]/10"
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <h3 className="text-xl font-bold text-[#003366] mb-4 text-center">
                        Our Eco-Friendly Commitment
                    </h3>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=400&q=80"
                                alt="Eco friendly recycling"
                                className="rounded-xl shadow-md w-40 h-40 object-cover border-2 border-[#66CCFF]"
                            />
                        </div>
                        <div className="md:w-2/3 text-gray-600">
                            <p className="mb-4">
                                At Clear Space, we&apos;re committed to environmentally responsible clearance
                                practices. We strive to recycle or reuse over 90% of the items we collect,
                                minimizing landfill waste.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="w-5 h-5 text-[#66CCFF] mr-2"
                                    />
                                    <span>Furniture and household items donated to charities</span>
                                </li>
                                <li className="flex items-start">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="w-5 h-5 text-[#66CCFF] mr-2"
                                    />
                                    <span>Electronics responsibly recycled</span>
                                </li>
                                <li className="flex items-start">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="w-5 h-5 text-[#66CCFF] mr-2"
                                    />
                                    <span>All waste processed at licensed facilities</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
