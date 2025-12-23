'use client';
import React, { useState } from 'react';

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
                  Thank you, Sovitha! We have received your message and will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#38BAE0] font-bold hover:underline transition-all"
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
                      placeholder="e.g., Sovitha Khadka" 
                      className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#38BAE0] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="e.g., sovitha@email.com" 
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
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-pink-100 hover:text-pink-600 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-red-100 hover:text-red-600 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                </a>
                <a href="#" aria-label="Discord" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-indigo-100 hover:text-indigo-600 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/>
                    <path d="M7.5 7.1c2-.7 4.1-.7 6.1 0 .2.1.3.2.4.3.5.7 1 1.6 1 2.6 0 1.5-.7 2.8-1.8 3.4-.2.1-.4.2-.6.2-.7.2-1.4.3-2.2.3s-1.5-.1-2.2-.3c-.2 0-.4-.1-.6-.2-1.1-.6-1.8-1.9-1.8-3.4 0-1 .5-1.9 1-2.6.1-.1.2-.2.4-.3z"/>
                  </svg>
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}