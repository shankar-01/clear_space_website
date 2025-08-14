"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, Clock, MapPin, PoundSterling, Calendar } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "I'm unfamiliar with house clearances. How does the process work and what are the costs?",
    answer: "We assess the property, provide a free quote, and then perform the clearance as scheduled. Costs vary based on volume and type of items.",
    icon: HelpCircle,
    category: "Process"
  },
  {
    id: 2,
    question: "Can you also handle overgrown gardens as part of the clearance?",
    answer: "Yes, we offer overgrown garden clearance as an additional service depending on your needs.",
    icon: MapPin,
    category: "Services"
  },
  {
    id: 3,
    question: "How quickly can you complete a house clearance?",
    answer: "Most clearances are completed within 1–2 days depending on the size and complexity.",
    icon: Clock,
    category: "Timing"
  },
  {
    id: 4,
    question: "Is there a cost for getting a quote?",
    answer: "No, we provide free, no-obligation quotes for all clearances.",
    icon: PoundSterling,
    category: "Pricing"
  },
  {
    id: 5,
    question: "I have a busy schedule or live far away. When can I arrange a quote visit?",
    answer: "We offer flexible scheduling, including weekends, and can coordinate remote assessments if needed.",
    icon: Calendar,
    category: "Scheduling"
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 shadow-lg"
               style={{ backgroundColor: '#334155' }}>
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get instant answers to common questions about our house clearance services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={faq.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? 'bg-navy-900 shadow-2xl scale-[1.02] border border-navy-700' 
                    : 'bg-navy-800 shadow-lg hover:shadow-xl border border-navy-700/50 hover:border-navy-600'
                }`}
                style={{
                  backgroundColor: isOpen ? '#1e293b' : '#334155',
                  borderColor: isOpen ? '#475569' : '#475569'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 transition-opacity duration-300 ${
                  isOpen || isHovered ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  isOpen 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
                    : 'bg-slate-700 text-slate-300'
                }`}>
                  {faq.category}
                </div>

                <button
                  onClick={() => toggle(index)}
                  className="relative w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-2 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg' 
                        : 'bg-slate-600 text-slate-300 group-hover:bg-blue-600 group-hover:text-white'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Question */}
                    <div className="flex-1 min-w-0 pr-4">
                      <h3 className={`text-lg font-semibold leading-relaxed transition-colors duration-300 ${
                        isOpen 
                          ? 'text-white' 
                          : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-blue-500 text-white rotate-180 shadow-lg' 
                        : 'bg-slate-600 text-slate-300 group-hover:bg-blue-500 group-hover:text-white'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-6 pb-6"
                  >
                    <div className="ml-16 pr-12">
                      <div className="h-px bg-gradient-to-r from-slate-500 to-transparent mb-4"></div>
                      <p className="text-slate-300 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="rounded-2xl p-8 text-white shadow-xl"
               style={{ backgroundColor: '#334155' }}>
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our friendly team is here to help. Get in touch for personalized assistance with your house clearance needs.
            </p>
            <button className="bg-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    style={{ color: '#334155' }}
                    onClick={() => window.location.href = '/contact'}
                    >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}