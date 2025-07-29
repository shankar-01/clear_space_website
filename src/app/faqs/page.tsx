"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 w-full">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggle(index)}
              className="flex items-center w-full text-left group"
            >
              <span className="text-white group-hover:bg-blue-800 transition duration-200 mr-3 bg-gray-500 p-1">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
              <span className="text-gray-800 font-medium group-hover:text-blue-800 transition duration-200">
                {faq.question}
              </span>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
