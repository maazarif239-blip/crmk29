'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => toggleFaq(i)}
            className="w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 min-h-[44px]"
          >
            <span className="text-sm md:text-base font-bold text-gray-900 text-left">{faq.question}</span>
            <svg className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 text-gray-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 pb-6">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
