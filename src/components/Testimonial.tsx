'use client';

import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Parent, Age 3",
    content: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!",
    alignment: "left" 
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Parent, Age 3",
    content: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!",
    alignment: "right"
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "Parent, Age 3",
    content: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!",
    alignment: "left"
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "Parent, Age 3",
    content: "This app has been a game-changer for us! We can finally see patterns in our daughter's moods and behaviors. The teachers love it too!",
    alignment: "right"
  }
];

export default function Testimonials() {
  return (
    <section id="Testimonials" className="max-w-full py-20 flex flex-col lg:flex-row items-center ioverflow-hidden">
            <div className="lg:w-1/2 bg-brand-blue p-10 md:p-16 pl-6 md:pl-[60px] rounded-tr-[5rem] text-white self-stretch flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Hear From Our Parents And Community!
        </h2>
        
        <div className="space-y-6 text-white/90 leading-relaxed text-lg">
          <p>
            Welcome To Our Testimonials Section, Where You Can Discover The Heartfelt Stories And Genuine Experiences Of Our Parents And Communities.
          </p>
          <p className="poppins-font border-l-4 border-white/20 pl-4">
            &ldquo;Where real voices reflect the trust, growth, and joyful learning that define BetterMontessori. Explore the inspiring journeys shared by families who have been part of our Montessori experience.&rdquo;
          </p>
        </div>
      </div>

   
      <div className="lg:w-1/2 w-full space-y-8 lg:px-12 py-10">
        {testimonials.map((t) => (
          <div 
            key={t.id} 
            className={`flex flex-col max-w-sm transition-transform hover:scale-105 duration-300 ${
              t.alignment === 'right' ? 'ml-auto' : 'ml-0'
            }`}
          >
           
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 leading-none">{t.name}</h4>
                <p className="text-xs text-slate-400 mt-1">{t.role}</p>
              </div>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}