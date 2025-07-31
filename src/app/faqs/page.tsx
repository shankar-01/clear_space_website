"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "I’m unfamiliar with house clearances. How does the process work and what are the costs?",
    answer: "We assess the property, provide a free quote, and then perform the clearance as scheduled. Costs vary based on volume and type of items.",
  },
  {
    question: "Can you also handle overgrown gardens as part of the clearance?",
    answer: "Yes, we offer overgrown garden clearance as an additional service depending on your needs.",
  },
  {
    question: "How quickly can you complete a house clearance?",
    answer: "Most clearances are completed within 1–2 days depending on the size and complexity.",
  },
  {
    question: "Is there a cost for getting a quote?",
    answer: "No, we provide free, no-obligation quotes for all clearances.",
  },
  {
    question: "I have a busy schedule or live far away. When can I arrange a quote visit?",
    answer: "We offer flexible scheduling, including weekends, and can coordinate remote assessments if needed.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-6 md:px-0 bg-white rounded-3xl shadow-lg">
      <h1 className="text-4xl font-extrabold mb-12 text-[#003366] text-center tracking-wide">
        Frequently Asked Questions
      </h1>

      <motion.div
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-[#003366] rounded-2xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="flex items-center w-full p-5 focus:outline-none group"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300
                  ${openIndex === index
                    ? "bg-[#66CCFF] text-[#003366]"
                    : "bg-[#274060] text-[#a1b3cc] group-hover:bg-[#1b2a47] group-hover:text-[#66ccff]"
                }`}
              >
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
              <span
                className={`ml-4 font-semibold text-lg transition-colors duration-300
                ${openIndex === index ? "text-white" : "text-[#a1b3cc] group-hover:text-white"}`}
              >
                {faq.question}
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-10 pb-6 text-[#cbd5e1] text-base leading-relaxed select-text"
              >
                {faq.answer}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
