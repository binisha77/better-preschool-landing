
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white rounded-t-[3rem] pt-20 pb-10 px-6 md:px-20 relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto">
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              Better<span className="text-brand-blue">Montessori</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Track growth, celebrate milestones, support development.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Features</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Stories</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Contacts</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="hover:text-brand-blue cursor-pointer transition-colors">About</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Blogs</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-brand-blue font-bold mb-6 text-lg">Get the latest information</h3>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="E-mail Address" 
                  className="w-full bg-[#E5E7EB]/50 border-none rounded-full px-6 py-4 text-sm focus:ring-2 focus:ring-[#38BAE0] outline-none pr-14"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#38BAE0] text-white p-2 rounded-full hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

       
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">
            © 2025 Better<span className="text-[#38BAE0]">Montessori</span>. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-400 text-xs">
            <span className="hover:text-[#38BAE0] cursor-pointer transition-colors">User Terms & Conditions</span>
            <span className="hover:text-[#38BAE0] cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}