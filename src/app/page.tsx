// pages/index.js
"use client";
import { useState } from 'react';
import Head from 'next/head';
import ReviewBanner from '@/components/reviews';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CoveragePage from './coverage/page';
export default function Home() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#a000c0] to-[#da00ff] text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Professional Property <span className="text-yellow-300">Clearance</span> Services
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Fast, reliable and eco-friendly clearance services across Surrey and London
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#contact" 
                  className="bg-white text-[#a000c0] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold text-center transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Get a Free Quote
                </a>
                <a 
                  href="tel:07926867347" 
                  className="border-2 border-white hover:bg-white hover:text-[#a000c0] px-6 py-3 rounded-lg font-bold text-center transition duration-300"
                >
                  Call: 07926 867 347
                </a>
              </div>
              <div className="mt-8 flex items-center bg-white bg-opacity-20 p-4 rounded-lg max-w-md">
                <div className="bg-[#a000c0] text-[#a000c0] rounded-full p-2 mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Same-day service available • Free on-site quotes • Licensed waste carriers</p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white text-[#a000c0] px-6 py-3 rounded-lg shadow-lg font-bold transform rotate-3">
                  Same Day Service Available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-[#a000c0] mb-2">12,000+</div>
                <p className="text-gray-600">Items Cleared</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-[#a000c0] mb-2">98%</div>
                <p className="text-gray-600">Recycling Rate</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-[#a000c0] mb-2">850+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="text-4xl font-bold text-[#a000c0] mb-2">24/7</div>
                <p className="text-gray-600">Availability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-[#a000c0]-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive clearance solutions for residential and commercial properties. 
                Our team handles everything with care, efficiency, and environmental responsibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <a href="#contact" className="text-[#a000c0] font-medium hover:text-[#a000c0] flex items-center">
                    Get a quote
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Simple Process</h2>
              <div className="w-20 h-1 bg-[#a000c0]-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Getting your space cleared has never been easier. Just follow these simple steps:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#a000c0] text-[#a000c0] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Us</h3>
                <p className="text-gray-600">Call or email us with details of your clearance needs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#a000c0] text-[#a000c0] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get a Quote</h3>
                <p className="text-gray-600">We provide a free, no-obligation quote</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#a000c0] text-[#a000c0] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Schedule</h3>
                <p className="text-gray-600">Choose a convenient date and time for your clearance</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-[#a000c0] text-[#a000c0] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Clearance Day</h3>
                <p className="text-gray-600">Our team arrives and clears your space efficiently</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section id="coverage" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Coverage Area</h2>
              <div className="w-20 h-1 bg-[#a000c0]-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We serve properties across Surrey, London, and surrounding counties with same-day service available in most areas
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3 bg-white rounded-xl shadow-sm p-4 border border-gray-200">
                <div className="h-96 w-full bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🗺️</div>
                    <h3 className="text-xl font-bold">Interactive Coverage Map</h3>
                    <p className="text-gray-600 mt-2">Surrey, London, Berkshire, Kent, Hampshire</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Areas We Serve</h3>
                  <div className="space-y-4">
                    {areas.map((area, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                        <span className="font-medium text-gray-700">{area.name}</span>
                        <span className="bg-[#a000c0] text-[#a000c0] px-3 py-1 rounded-full text-sm">
                          {area.count} locations
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#a000c0] to-[#da00ff] text-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">Free On-Site Assessment</h3>
                  <p className="mb-4">Get a free, no-obligation quote for your clearance project. Our team will visit your property to provide an accurate estimate.</p>
                  <a 
                    href="#contact" 
                    className="bg-white text-[#a000c0] hover:bg-gray-100 px-4 py-2 rounded-lg font-bold inline-block transition duration-300 shadow-md"
                  >
                    Request a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Transparent Pricing</h2>
              <div className="w-20 h-1 bg-[#a000c0]-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Clear, upfront pricing with no hidden fees. All prices include labor, transport, and responsible disposal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`rounded-xl shadow-lg overflow-hidden ${index === 1 ? 'transform scale-105 relative z-10 border-2 border-green-500' : 'border border-gray-200'}`}>
                  <div className={`p-6 text-center ${index === 1 ? 'bg-gradient-to-r from-[#a000c0] to-[#da00ff] text-white' : 'bg-white'}`}>
                    <h3 className="text-xl font-bold">{plan.type}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-600">/load</span>
                    </div>
                    <p className="mt-2">{plan.description}</p>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="w-5 h-5 text-[#a000c0] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a 
                      href="#contact" 
                      className={`mt-6 block text-center py-3 rounded-lg font-bold transition duration-300 ${
                        index === 1 
                          ? 'bg-white text-[#a000c0] hover:bg-gray-100' 
                          : 'bg-[#a000c0]-600 hover:bg-[#a000c0]-700 text-white'
                      }`}
                    >
                      Choose Plan
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Our Eco-Friendly Commitment</h3>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                  <div className="bg-[#a000c0] p-4 rounded-full">
                    <div className="bg-[#a000c0] border-2 border-dashed rounded-xl w-32 h-32" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    At Clear Space, we&apos;re committed to environmentally responsible clearance practices. 
                    We strive to recycle or reuse over 90% of the items we collect, minimizing landfill waste.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#a000c0] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Furniture and household items donated to charities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#a000c0] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Electronics responsibly recycled</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#a000c0] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>All waste processed at licensed facilities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
              <div className="w-20 h-1 bg-[#a000c0]-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Rated 4.9/5 from 135+ reviews across Surrey and London. Don&apos;t just take our word for it!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12" />
                    <div className="ml-3">
                      <p className="font-bold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-[#a000c0]-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our clearance services
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">What items can you clear?</h3>
                <p className="text-gray-600">
                  We can clear almost all household and garden items including furniture, appliances, 
                  electronics, garden waste, construction debris, and general clutter. We cannot clear 
                  hazardous materials like asbestos, chemicals, or paint. Contact us if you have specific items in question.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Do I need to be present during clearance?</h3>
                <p className="text-gray-600">
                  While it&apos;s helpful for you to be present to answer any questions, it&apos;s not required. 
                  We can work with keys or access codes if arranged in advance. For probate clearances, 
                  we often work with solicitors or executors remotely.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">How do you dispose of items?</h3>
                <p className="text-gray-600">
                  We&apos;re committed to eco-friendly disposal. Usable items are donated to charities, 
                  recyclables are processed at licensed facilities, and only non-recyclable waste goes 
                  to landfill. We typically achieve over 90% recycling/reuse rates.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Can you clear hoarded properties?</h3>
                <p className="text-gray-600">
                  Yes, we specialize in sensitive hoarding clearances. Our team is trained to work 
                  compassionately in challenging situations. We can provide before/after deep cleaning 
                  services as well.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gradient-to-br from-[#a000c0] to-[#da00ff] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
                <p className="max-w-2xl mx-auto">
                  Contact us today for a free, no-obligation quote for your clearance project. 
                  We typically respond within 1 business hour.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#a000c0] p-2 rounded-lg mr-3">
                          <svg className="w-6 h-6 text-[#a000c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Call Us</h4>
                          <a href="tel:07926867347" className="text-[#a000c0] hover:text-[#a000c0] font-medium text-lg">07926 867 347</a>
                          <p className="text-gray-500 text-sm">Mon-Sun: 7am - 9pm</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-[#a000c0] p-2 rounded-lg mr-3">
                          <svg className="w-6 h-6 text-[#a000c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Email Us</h4>
                          <a href="mailto:info@clearspace.com" className="text-[#a000c0] hover:text-[#a000c0] font-medium text-lg">info@clearspace.com</a>
                          <p className="text-gray-500 text-sm">Response within 1 hour</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-[#a000c0] p-2 rounded-lg mr-3">
                          <svg className="w-6 h-6 text-[#a000c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">Coverage Area</h4>
                          <p className="text-gray-600">Surrey, London, Berkshire, Kent, Hampshire, Middlesex</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h4>
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Send a Message</h3>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email *</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your email"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 mb-1">Phone *</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-gray-700 mb-1">Service Needed</label>
                        <select 
                          id="service" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        <label htmlFor="message" className="block text-gray-700 mb-1">Message *</label>
                        <textarea 
                          id="message" 
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Tell us about your clearance needs"
                          required
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-[#a000c0]-600 hover:bg-[#a000c0]-700 text-white px-6 py-3 rounded-lg font-bold transition duration-300 shadow-md hover:shadow-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
  );
}