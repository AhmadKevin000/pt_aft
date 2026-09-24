"use client";

import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.id}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-cyan-500/40 bg-neutral-900 shadow-[0_0_24px_-6px_rgba(34,211,238,0.35)]"
                : "border-white/10 bg-neutral-900/40 hover:border-white/20"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              id={`faq-toggle-${index}`}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span
                className={`text-base font-medium tracking-tight transition-colors duration-200 ${
                  isOpen ? "text-cyan-300" : "text-neutral-100"
                }`}
              >
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-cyan-500/10 rotate-45" : "bg-white/5"
                }`}
              >
                <svg
                  className={`w-3.5 h-3.5 transition-colors duration-200 ${
                    isOpen ? "text-cyan-400" : "text-neutral-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                <div className="h-px bg-white/5 mb-4" />
                <p className="text-neutral-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
