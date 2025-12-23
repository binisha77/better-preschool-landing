'use client';
import React, { useState } from 'react';

const faqData = [
  {
    question: "Is BetterMontessori free?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. After that, we have affordable plans starting at just $9.99/month."
  },
  {
    question: "Is BetterMontessori free?",
  },
  {
    question: "Is BetterMontessori free?",
  },
  {
    question: "Is BetterMontessori free?",
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  return (
    <section className="relative py-20 px-6 overflow-hidden bg-white">
      <div className="absolute top-20 -left-20 w-64 h-64 border-[16px] border-sky-100 rounded-full opacity-50" />
      <div className="absolute bottom-20 -right-20 w-64 h-64 border-[16px] border-sky-100 rounded-full opacity-50" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Frequently Asked Questions!
        </h2>
        <div className="space-y-4 mb-16">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className="border-2 border-sky-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-sky-50 transition-colors"
              >
                <span className="font-bold text-slate-800">{item.question}</span>
                <div className={`w-8 h-8 rounded-full bg-[#38BAE0] flex items-center justify-center text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-sky-50 pt-4">
                  {item.answer}
                </div>
              </div> 
            </div>
          ))}
        </div>
        <div className="bg-[#EBF9FE] rounded-[2.5rem] p-10 text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-2">Still have questions?</h3>
          <p className="text-slate-600 text-sm mb-6">
            Can not find the answers of the questions you are looking for?
          </p>
          <button className="bg-white text-slate-800 px-8 py-3 rounded-full border border-slate-200 font-bold hover:shadow-md transition-shadow">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}