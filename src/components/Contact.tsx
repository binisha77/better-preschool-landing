'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import appStoreIcon from '../public/appstoreicon.png';
import playStoreIcon from '../public/playstoreicon.png';


export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    setIsSubmitted(true);
  };

  return (
    <section id="Contact" className="relative bg-brand-blue py-20 px-6 overflow-hidden scroll-mt-24">
      
      <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-1/2 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-32 h-32 md:w-48 md:h-48 bg-white rounded-full -mx-4 opacity-100" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 mt-10">
        <header className="text-center mb-16">
          <div className="inline-block bg-white border-4 border-black px-8 py-2 mb-6 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl md:text-4xl font-black text-black uppercase">Get In Touch</h2>
          </div>
          <p className="text-white font-medium text-sm md:text-base">
            Have questions? We had love to hear from you! Reach out anytime.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <article className="flex-1 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">Message Sent!</h3>
                <p className="text-slate-600 mb-8 max-w-md">
                  Thank you, We have received your message and will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-blue font-bold hover:underline transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-800 mb-8">Send Us a Message!</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g., Jon Doe" 
                      className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#38BAE0] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="e.g., jon@example.com" 
                      className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#38BAE0] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="How can we help?" 
                      className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#38BAE0] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder="Tell us what's in your mind...." 
                      className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#38BAE0] outline-none resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#83D9F2] text-white font-bold py-4 rounded-full hover:bg-[#38BAE0] transition-colors shadow-sm">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </article>
          <aside className="lg:w-1/3 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col justify-between">
            <div className="space-y-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#38BAE0] flex items-center justify-center text-white flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Email</h4>
                  <p className="text-slate-600 text-sm">support@bettermontessori.com</p>
                  <p className="text-xs text-slate-400 mt-1">We reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#38BAE0] flex items-center justify-center text-white flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Phone</h4>
                  <p className="text-slate-600 text-sm">+1 (555) 123-4567</p>
                  <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#38BAE0] flex items-center justify-center text-white flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Address</h4>
                  <p className="text-slate-600 text-sm">123 Learning Lane</p>
                  <p className="text-xs text-slate-400 mt-1">Education City, EC 12345</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="font-bold text-slate-800 mb-4">Follow Us</h4>
              <nav className="flex gap-4">
                 <Link href="#" target="_blank" className="w-10 h-10 transform hover:scale-110 transition-transform">
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <circle cx="24" cy="24" r="24" fill="#1877F2"/>
        <path d="M29 16h-3c-1.1 0-2 .9-2 2v3h5l-1 5h-4v14h-6V26h-3v-5h3v-4c0-3.3 2.7-6 6-6h4v5z" fill="white"/>
      </svg>
    </Link>

    <Link href="3" target="_blank" className="w-10 h-10 transform hover:scale-110 transition-transform">
    <svg viewBox="0 0 48 48" className="w-full h-full">
      <defs><linearGradient id="instaG" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f09433"/><stop offset="50%" stopColor="#dc2743"/><stop offset="100%" stopColor="#bc1888"/></linearGradient></defs>
      <rect width="48" height="48" rx="12" fill="url(#instaG)"/>
      <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm7.3-17.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" fill="white"/>
    </svg>
  </Link>

    <Link href="#" target="_blank" className="w-10 h-10 transform hover:scale-110 transition-transform">
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <circle cx="24" cy="24" r="24" fill="#FF0000"/>
        <path d="M33.5 24l-11.8 6.5V17.5l11.8 6.5z" fill="white"/>
      </svg>
    </Link>

    <Link href="#" target="_blank" className="w-10 h-10 transform hover:scale-110 transition-transform">
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <circle cx="24" cy="24" r="24" fill="#5865F2"/>
        <path d="M31.3 17.5c-1.7-.8-3.5-1.4-5.4-1.7-.1 0-.2.1-.3.2-.2.4-.4.9-.6 1.4-2.1-.3-4.1-.3-6.2 0-.2-.5-.4-1-.6-1.4 0-.1-.1-.2-.2-.2-1.9.3-3.7.9-5.4 1.7-.1 0-.1.1-.1.2-3.4 5.1-4.3 10-2.8 14.9 0 .1.1.2.2.2 2.3 1.7 4.5 2.7 6.6 3.4.1 0 .2 0 .3-.1.5-.7.9-1.4 1.3-2.2 0-.1 0-.2-.2-.3-.7-.3-1.4-.6-2.1-1 0-.1 0-.2.1-.2.1-.1.3-.2.4-.3 4.2 1.9 8.7 1.9 12.9 0 .1.1.3.2.4.3 0 .1.1.2.1.2-.7.4-1.4.7-2.1 1-.1.1-.2.2-.2.3.4.8.8 1.5 1.3 2.2.1.1.2.1.3.1 2.1-.7 4.3-1.7 6.6-3.4.1 0 .1-.1.2-.2 1.8-5.8.3-10.7-2.8-14.9 0-.1-.1-.2-.2-.2zM19.1 26.2c-1.3 0-2.3-1.2-2.3-2.6s1-2.6 2.3-2.6 2.3 1.2 2.3 2.6-1 2.6-2.3 2.6zm9.8 0c-1.3 0-2.3-1.2-2.3-2.6s1-2.6 2.3-2.6 2.3 1.2 2.3 2.6-1 2.6-2.3 2.6z" fill="white"/>
      </svg>
    </Link>
  </nav>
</div>
    </aside>
        </div>
      </div>          
      <div className="w-full flex justify-center items-center mt-20 relative z-20">
  <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white rounded-full flex flex-col items-center justify-center p-8 text-center shadow-2xl">
    <div className="absolute -left-12 md:-left-20 bottom-20 md:bottom-24 transform hover:scale-105 transition-transform">
      <button className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg">
        <Image src="/appstoreicon.png" alt="Apple" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8" />
        <div className="text-left">
          <p className="text-[10px] md:text-xs text-slate-500 uppercase font-semibold">Get it on</p>
          <p className="text-sm md:text-lg font-bold text-slate-900 leading-none">App Store</p>
        </div>
      </button>
    </div>
    <div className="absolute -right-12 md:-right-20 top-20 md:top-24 transform hover:scale-105 transition-transform">
      <button className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-lg">
        <Image
      src="/playstoreicon.png"
      alt="Google Play" 
      width={32}
      height={32}
      className="w-6 h-6 md:w-8 md:h-8 object-contain" 
    />
        <div className="text-left">
          <p className="text-[10px] md:text-xs text-slate-500 uppercase font-semibold">Get it on</p>
          <p className="text-sm md:text-lg font-bold text-slate-900 leading-none">Google Play</p>
        </div>
      </button>
    </div>

    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-[200px] md:max-w-[280px]">
        Download BetterMontessori for instant feedback, personalized insights, and full offline support.
      </p>
    </div>
  </div>
</div>
    </section>
  );
}