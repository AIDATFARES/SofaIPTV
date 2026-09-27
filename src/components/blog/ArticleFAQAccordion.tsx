"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function ArticleFAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="my-10 space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-xl border border-black/10 bg-white overflow-hidden transition-all duration-300 hover:border-indigo-500/40 shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left gap-4 bg-slate-50/80 hover:bg-white transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                <span className="font-bold text-base sm:text-lg text-black">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180 text-indigo-600" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 py-5 text-slate-700 text-sm sm:text-base leading-relaxed bg-white border-t border-black/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
