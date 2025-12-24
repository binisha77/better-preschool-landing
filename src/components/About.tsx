'use client';
import React from 'react';

const reasons = [
  {
    id: "01",
    title: "Careful & Fun",
    description: "Tracking development should be joyful! Our playful design makes it fun for kids and parents alike."
  },
  {
    id: "02",
    title: "Super Easy",
    description: "No complicated forms. Just tap, track, and celebrate. Takes seconds to log each moment."
  },
  {
    id: "03",
    title: "Safe & Secure",
    description: "No complicated forms. Just tap, track, and celebrate. Takes seconds to log each moment."
  },
  {
    id: "04",
    title: "Smart Insights",
    description: "See patterns and trends over time. Understand your child's unique rhythm and needs."
  },
  {
    id: "05",
    title: "Celebrate Growth",
    description: "Every milestone matters. Get reminders to celebrate your child's amazing progress."
  }
];

export default function About() {
  return (
    <section id="About" className="w-full ">     
      <div className="bg-brand-blue py-20 px-6 md:px-20 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <span className="border border-white/40 px-4 py-1 rounded-full text-[10px] uppercase tracking-wider mb-6 inline-block">
              Caring Is Always Free
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 ">
              We Help Your Children <br />
              {/* yellow color taken from figma design */}
              <span className="text-brand-yellow">Grow with Confidence.</span>
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl">
              We believe every childs growth journey is unique and special. 
              BetterMontessori was created by parents and educators who wanted a simple, 
              joyful way to track and celebrate every milestone. Our mission is to help 
              parents and educators stay connected to childrens development.
            </p>
          </div>
          <div className="md:w-2/5 flex items-center justify-center relative">
            <div className="hidden md:flex flex-col gap-4 mr-8">
              <div className="w-1.5 h-14 bg-white/30 rounded-full"></div>
              <div className="w-1.5 h-14 bg-white/30 rounded-full"></div>
              <div className="w-1.5 h-14 bg-white/30 rounded-full"></div>
            </div>
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl text-slate-900 text-center max-w-xs transition-transform hover:scale-1 duration-300">
              <p className="font-bold text-xl ">
                “Empowering little learners to build big futures with curiosity and kindness.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 px-6 lg:px-[5%] w-full">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-20 text-slate-800">
          Why Choose <span className="text-brand-blue">Better</span>Montessori?
        </h2>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-20 max-w-[1300px] mx-auto">
          {reasons.map((item) => (
            <div key={item.id} 
            className="flex items-start gap-6 group w-full sm:w-[320px] lg:w-[380px]">
              <div className="bg-[#E0F7FD] text-brand-blue text-2xl font-black w-16 h-14 flex items-center justify-center rounded-2xl flex-shrink-0 group-hover:bg-[#38BAE0] group-hover:text-white transition-colors duration-300">
                {item.id}
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-brand-blue font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}