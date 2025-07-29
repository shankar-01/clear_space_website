// pages/index.js
"use client";
import { faCheck, faEnvelope, faMapMarkerAlt, faPhoneAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";


export default function Home() {

  const areas = [
    { name: 'London', count: 28 },
    { name: 'Surrey', count: 42 },
    { name: 'Berkshire', count: 18 },
    { name: 'Kent', count: 22 },
    { name: 'Hampshire', count: 15 },
    { name: 'Middlesex', count: 12 },
  ];

  const services = [
    {
      title: 'House Clearance',
      icon: '🏠',
      description: 'Complete property clearance services for homes of all sizes. We handle everything from furniture to personal belongings with care and professionalism.'
    },
    {
      title: 'Garden Clearance',
      icon: '🌿',
      description: 'Professional garden waste removal and landscaping clearance. We transform overgrown spaces into clean, usable areas.'
    },
    {
      title: 'Loft Clearance',
      icon: '📦',
      description: 'Efficient loft and attic clearance with safe disposal. We handle bulky items, old furniture, and decades of accumulated items.'
    },
    {
      title: 'Office Clearance',
      icon: '🏢',
      description: 'Commercial clearance services for offices and businesses. Minimal disruption with maximum efficiency.'
    },
    {
      title: 'Storage Clearance',
      icon: '🔒',
      description: 'Clear out storage units quickly and efficiently. We help you reclaim your space and stop paying for unused storage.'
    },
    {
      title: 'Hoarder Clearance',
      icon: '🧹',
      description: 'Specialized services for hoarding situations with sensitivity. Discreet, non-judgmental support for challenging clearances.'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah K.',
      location: 'Kingston-upon-Thames',
      text: 'Clear Space cleared my late father\'s house efficiently and with great care. They handled sentimental items respectfully and recycled everything possible. Highly professional service!',
      rating: 5
    },
    {
      name: 'Michael T.',
      location: 'Guildford',
      text: 'Needed my garden cleared after a storm. The team arrived on time, worked efficiently in the rain, and left the space spotless. Would recommend to anyone needing clearance services.',
      rating: 5
    },
    {
      name: 'Emma R.',
      location: 'Wimbledon',
      text: 'Office clearance completed in record time. Very competitive pricing and friendly team. They even donated usable furniture to a local charity on our behalf.',
      rating: 4
    },
    {
      name: 'David L.',
      location: 'Reading',
      text: 'After years of accumulation, our loft was overwhelming. Clear Space cleared it in just 3 hours! Professional, punctual, and reasonably priced. Will use again!',
      rating: 5
    }
  ];

  const pricing = [
    {
      type: 'Van Load',
      price: '£120',
      description: 'Ideal for small clearances or single rooms',
      features: ['Up to 15 items', '1/2 ton capacity', '2-man team', '2 hour minimum']
    },
    {
      type: 'Transit',
      price: '£220',
      description: 'Perfect for medium-sized homes or offices',
      features: ['Up to 30 items', '1 ton capacity', '2-man team', '4 hour service']
    },
    {
      type: 'Luton',
      price: '£350',
      description: 'Best for large clearances and whole properties',
      features: ['Unlimited items', '2 ton capacity', '3-man team', 'Full day service']
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#003366] to-[#006699] text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Professional Property <span className="text-[#66CCFF]">Clearance</span> Services
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Fast, reliable and eco-friendly clearance services across Surrey and London
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#contact"
                className="bg-white text-[#003366] hover:bg-[#66CCFF] hover:text-white px-6 py-3 rounded-lg font-bold text-center transition duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                href="tel:07538502777"
                className="border-2 border-white hover:bg-white hover:text-[#003366] px-6 py-3 rounded-lg font-bold text-center transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >

                Call: 07538 502777
              </motion.a>
            </div>
            <motion.div
              className="mt-8 flex items-center bg-white bg-opacity-20 p-4 rounded-lg max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-[#003366] text-white rounded-full p-2 mr-3">
                <img src={"/icons/tick.svg"} alt="Quote Icon" className="w-6 h-6" />
              </div>
              <p className="text-[#003366]">Same-day service available • Free on-site quotes • Licensed waste carriers</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-white text-[#003366] px-6 py-3 rounded-lg shadow-lg font-bold transform rotate-3"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [3, -1, 3]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              >
                Same Day Service Available
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#f0f8ff]">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              { value: '12,000+', label: 'Items Cleared' },
              { value: '98%', label: 'Recycling Rate' },
              { value: '850+', label: 'Happy Clients' },
              { value: '24/7', label: 'Availability' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center border border-[#003366]/10"
                variants={item}
              >
                <div className="text-4xl font-bold text-[#003366] mb-2">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Services
            </motion.h2>
            <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We offer comprehensive clearance solutions for residential and commercial properties.
              Our team handles everything with care, efficiency, and environmental responsibility.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#f0f8ff] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#003366]/10 flex flex-col"
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <a href="#contact" className="text-[#006699] font-medium hover:text-[#003366] flex items-center">
                  Get a quote
                  <img src="icons/arrow-right.svg" alt="Arrow Right" className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#f0f8ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Simple Process
            </motion.h2>
            <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Getting your space cleared has never been easier. Just follow these simple steps:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Contact Us', desc: 'Call or email us with details of your clearance needs' },
              { step: 2, title: 'Get a Quote', desc: 'We provide a free, no-obligation quote' },
              { step: 3, title: 'Schedule', desc: 'Choose a convenient date and time for your clearance' },
              { step: 4, title: 'Clearance Day', desc: 'Our team arrives and clears your space efficiently' }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#003366]/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-[#003366] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">{step.step}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our Coverage Area
            </motion.h2>
            <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We serve properties across Surrey, London, and surrounding counties with same-day service available in most areas
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 bg-white rounded-xl shadow-sm p-4 border border-[#003366]/10">
              <div className="h-96 w-full bg-gradient-to-br from-[#003366] to-[#006699] border-2 border-[#003366] rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl mb-4">🗺️</div>
                  <h3 className="text-xl font-bold">Interactive Coverage Map</h3>
                  <p className="mt-2">Surrey, London, Berkshire, Kent, Hampshire</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <motion.div
                className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-[#003366]/10"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-bold text-[#003366] mb-4">Areas We Serve</h3>
                <div className="space-y-4">
                  {areas.map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center border-b border-[#003366]/10 pb-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <span className="font-medium text-gray-700">{area.name}</span>
                      <span className="bg-[#66CCFF] text-[#003366] px-3 py-1 rounded-full text-sm font-medium">
                        {area.count} locations
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-r from-[#003366] to-[#006699] text-white rounded-xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-2">Free On-Site Assessment</h3>
                <p className="mb-4">Get a free, no-obligation quote for your clearance project. Our team will visit your property to provide an accurate estimate.</p>
                <motion.a
                  href="#contact"
                  className="bg-white text-[#003366] hover:bg-[#66CCFF] px-4 py-2 rounded-lg font-bold inline-block transition duration-300 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Quote
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-[#f0f8ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transparent Pricing
            </motion.h2>
            <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Clear, upfront pricing with no hidden fees. All prices include labor, transport, and responsible disposal.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-xl shadow-lg overflow-hidden ${index === 1 ? 'transform scale-105 relative z-10 border-2 border-[#66CCFF]' : 'border border-[#003366]/20'}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className={`p-6 text-center ${index === 1 ? 'bg-gradient-to-r from-[#003366] to-[#006699] text-white' : 'bg-white'}`}>
                  <h3 className="text-xl font-bold">{plan.type}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>/load</span>
                  </div>
                  <p className="mt-2">{plan.description}</p>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">

                        <FontAwesomeIcon
                          icon={faCheck}
                          className="w-5 h-5 text-[#66CCFF] mt-0.5 mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="#contact"
                    className={`mt-6 block text-center py-3 rounded-lg font-bold transition duration-300 ${index === 1
                      ? 'bg-white text-[#003366] hover:bg-[#66CCFF]'
                      : 'bg-[#003366] hover:bg-[#006699] text-white'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Choose Plan
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto border border-[#003366]/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-[#003366] mb-4 text-center">Our Eco-Friendly Commitment</h3>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="bg-[#66CCFF] p-4 rounded-full">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-600 mb-4">
                  At Clear Space, we&apos;re committed to environmentally responsible clearance practices.
                  We strive to recycle or reuse over 90% of the items we collect, minimizing landfill waste.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 h-5 text-[#66CCFF] mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span>Furniture and household items donated to charities</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 h-5 text-[#66CCFF] mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span>Electronics responsibly recycled</span>
                  </li>
                  <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 h-5 text-[#66CCFF] mt-0.5 mr-2 flex-shrink-0"
                    />
                    <span>All waste processed at licensed facilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              What Our Customers Say
            </motion.h2>
            <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Rated 4.9/5 from 135+ reviews across Surrey and London. Don&apos;t just take our word for it!
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#f0f8ff] rounded-xl p-6 shadow-sm border border-[#003366]/10"
                variants={item}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
                  <div className="ml-3">
                    <p className="font-bold text-[#003366]">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f0f8ff]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#003366] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="w-20 h-1 bg-[#66CCFF] mx-auto mb-6"></div>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Find answers to common questions about our clearance services
            </motion.p>
          </div>

          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                question: "What items can you clear?",
                answer: "We can clear almost all household and garden items including furniture, appliances, electronics, garden waste, construction debris, and general clutter. We cannot clear hazardous materials like asbestos, chemicals, or paint. Contact us if you have specific items in question."
              },
              {
                question: "Do I need to be present during clearance?",
                answer: "While it's helpful for you to be present to answer any questions, it's not required. We can work with keys or access codes if arranged in advance. For probate clearances, we often work with solicitors or executors remotely."
              },
              {
                question: "How do you dispose of items?",
                answer: "We're committed to eco-friendly disposal. Usable items are donated to charities, recyclables are processed at licensed facilities, and only non-recyclable waste goes to landfill. We typically achieve over 90% recycling/reuse rates."
              },
              {
                question: "Can you clear hoarded properties?",
                answer: "Yes, we specialize in sensitive hoarding clearances. Our team is trained to work compassionately in challenging situations. We can provide before/after deep cleaning services as well."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-[#003366]/10"
                variants={item}
                whileHover={{ x: 5 }}
              >
                <h3 className="text-xl font-bold text-[#003366] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-[#003366] to-[#006699] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Get in Touch
              </motion.h2>
              <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
              <motion.p
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Contact us today for a free, no-obligation quote for your clearance project.
                We typically respond within 1 business hour.
              </motion.p>
            </div>

            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#003366] p-2 rounded-lg mr-3">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#003366]">Call Us</h4>
                        <a href="tel:07538502777" className="text-[#006699] hover:text-[#003366] font-medium text-lg">07538 502777</a>
                        <p className="text-gray-500 text-sm">Mon-Sun: 7am - 9pm</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#003366] p-2 rounded-lg mr-3">
                        <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#003366]">Email Us</h4>
                        <a href="mailto:info@clearspace.com" className="text-[#006699] hover:text-[#003366] font-medium text-lg">info@clearspace.com</a>
                        <p className="text-gray-500 text-sm">Response within 1 hour</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-[#003366] p-2 rounded-lg mr-3">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#003366]">Address</h4>
                       <p className="text-gray-600">
  <strong>CLEAR SPACE</strong> House Clearance<br />
  27 High Street<br />
  Teddington<br />
  TW11 8ET
</p>

                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-[#003366] mb-4">Business Hours</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between border-b pb-2">
                        <span>Monday - Friday</span>
                        <span className="font-medium">7:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span>Saturday</span>
                        <span className="font-medium">8:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#003366] mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-[#003366] mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#003366] mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent"
                        placeholder="Your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-[#003366] mb-1">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent"
                        placeholder="Your phone number"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-[#003366] mb-1">Service Needed</label>
                      <select
                        id="service"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="house">House Clearance</option>
                        <option value="garden">Garden Clearance</option>
                        <option value="loft">Loft Clearance</option>
                        <option value="office">Office Clearance</option>
                        <option value="storage">Storage Clearance</option>
                        <option value="hoarder">Hoarder Clearance</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#003366] mb-1">Message *</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66CCFF] focus:border-transparent"
                        placeholder="Tell us about your clearance needs"
                        required
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full bg-[#003366] hover:bg-[#006699] text-white px-6 py-3 rounded-lg font-bold transition duration-300 shadow-md"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}