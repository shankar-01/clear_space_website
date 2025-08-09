'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const pricing = [
    {
        type: 'Quarter Load',
        weight: 'Typical load around 250kg',
        price: '£205',
        image: '/pricing/quarter.png',
    },
    {
        type: 'Half Load',
        weight: 'Typical load around 500kg',
        price: '£305',
        image: '/pricing/half.png',
    },
    {
        type: 'Three-Quarter Load',
        weight: 'Typical load around 750kg',
        price: '£405',
        image: '/pricing/half_quarter.png',
    },
    {
        type: 'Full Load',
        weight: 'Typical load up to 1100kg',
        price: '£505',
        image: '/pricing/full.png',
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
                    <h2 className="text-4xl font-bold text-[#003366]">Affordable Bulky Waste Clearance</h2>
                    <div className="w-20 h-1 bg-[#66CCFF] mx-auto my-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our bulky waste clearance services cover everything from DIY projects to builder’s waste. We charge £45 + VAT per 100kg with a £65 + VAT call-out fee. Each truck has a maximum load capacity of 1100kg. Within a 10-mile radius, loading time is estimated at 10 minutes per 100kg with a one-person team. Due to the heavier nature of bulky waste — including kitchen or bathroom strip-outs — prices reflect the additional handling required.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {pricing.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white text-center rounded-xl shadow-lg p-6 border-t-4 border-[#4B3BFF]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 * index, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={item.image}
                                    alt={item.type}
                                    className="h-28 object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-[#1A1A1A]">{item.type}</h3>
                            <p className="text-sm text-gray-500">{item.weight}</p>
                            <p className="text-3xl font-bold text-[#4B3BFF] mt-4">
                                ~{item.price} <span className="text-base text-gray-600">+ VAT</span>
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Eco Commitment Section */}
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
                        Our Commitment to Sustainability
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
                                At Clear Space, we prioritize eco-friendly waste clearance. Over 90% of collected items are recycled or donated, ensuring minimal landfill impact.
                            </p>
                            <ul className="space-y-2 list-disc pl-5">
                                <li>Furniture and household goods donated to charities</li>
                                <li>Responsible recycling of electronic equipment</li>
                                <li>All waste processed at licensed, regulated facilities</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
