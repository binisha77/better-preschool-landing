
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
  <footer className="bg-white rounded-t-[3.5rem] pt-10 pb-4 px-6 md:px-20 relative z-20 -mt-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
  
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-6 items-start">
          
          
          <div className="space-y-2">
             <h2 className="text-xl font-bold text-slate-800">               Better<span className="text-brand-blue">Montessori</span>
             </h2>
             <p className="text-slate-500 text-[13px] leading-tight max-w-[220px]">
               Track growth, celebrate milestones, support development.
            </p>
           </div>
          <div>
             <h3 className="font-bold text-slate-800 mb-3 text-base">Product</h3>
             <ul className="space-y-1 text-slate-600 text-[13px]">
               <li className="hover:text-brand-blue cursor-pointer transition-colors">Features</li>
               <li className="hover:text-brand-blue cursor-pointer transition-colors">Stories</li>
               <li className="hover:text-brand-blue cursor-pointer transition-colors">Contacts</li>
            </ul>
           </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-3 text-base">Company</h3>
             <ul className="space-y-1 text-slate-600 text-[13px]">
               <li className="hover:text-brand-blue cursor-pointer transition-colors">About</li>
               <li className="hover:text-brand-blue cursor-pointer transition-colors">Blogs</li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">Contact Us</li>
            </ul>
           </div>

          <div className="flex flex-col gap-4">
             <div>
              <h3 className="text-brand-blue font-bold text-base leading-none ">Get the latest information</h3>
               <div className="relative max-w-sm">
                 <input 
                  type="email" 
                  placeholder="E-mail Address" 
                 className="w-full bg-[#E5E7EB]/50 border-none rounded-full px-5 py-2.5 text-sm outline-none pr-12 placeholder:text-slate-700 text-slate-900"
                 />
                <button className="absolute right-0 top-0 h-full aspect-square bg-[#38BAE0] text-white rounded-full flex items-center justify-center hover:brightness-105 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
               </div>
               <div>
              <h4 className="font-bold text-slate-800 mb-4">Follow Us</h4>
              <nav className="flex gap-3 pt-2">
                 <Link href="#" target="_blank" className="w-8 h-8 transform hover:scale-110 transition-transform">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <circle cx="24" cy="24" r="24" fill="#1877F2"/>
                      <path d="M29 16h-3c-1.1 0-2 .9-2 2v3h5l-1 5h-4v14h-6V26h-3v-5h3v-4c0-3.3 2.7-6 6-6h4v5z" fill="white"/>
                    </svg>
                 </Link>

     <Link href="3" target="_blank" className="w-8 h-8 transform hover:scale-110 transition-transform">
     <svg viewBox="0 0 48 48" className="w-full h-full">
       <defs><linearGradient id="instaG" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f09433"/><stop offset="50%" stopColor="#dc2743"/><stop offset="100%" stopColor="#bc1888"/></linearGradient></defs>
       <rect width="48" height="48" rx="12" fill="url(#instaG)"/>
      <path d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 16.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zm7.3-17.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" fill="white"/>
    </svg>
  </Link>

     <Link href="#" target="_blank" className="w-8 h-8 transform hover:scale-110 transition-transform">
       <svg viewBox="0 0 48 48" className="w-full h-full">
         <circle cx="24" cy="24" r="24" fill="#FF0000"/>
         <path d="M33.5 24l-11.8 6.5V17.5l11.8 6.5z" fill="white"/>
       </svg>
     </Link>

     <Link href="#" target="_blank" className="w-8 h-8 transform hover:scale-110 transition-transform">
       <svg viewBox="0 0 48 48" className="w-full h-full">
         <circle cx="24" cy="24" r="24" fill="#5865F2"/>
         <path d="M31.3 17.5c-1.7-.8-3.5-1.4-5.4-1.7-.1 0-.2.1-.3.2-.2.4-.4.9-.6 1.4-2.1-.3-4.1-.3-6.2 0-.2-.5-.4-1-.6-1.4 0-.1-.1-.2-.2-.2-1.9.3-3.7.9-5.4 1.7-.1 0-.1.1-.1.2-3.4 5.1-4.3 10-2.8 14.9 0 .1.1.2.2.2 2.3 1.7 4.5 2.7 6.6 3.4.1 0 .2 0 .3-.1.5-.7.9-1.4 1.3-2.2 0-.1 0-.2-.2-.3-.7-.3-1.4-.6-2.1-1 0-.1 0-.2.1-.2.1-.1.3-.2.4-.3 4.2 1.9 8.7 1.9 12.9 0 .1.1.3.2.4.3 0 .1.1.2.1.2-.7.4-1.4.7-2.1 1-.1.1-.2.2-.2.3.4.8.8 1.5 1.3 2.2.1.1.2.1.3.1 2.1-.7 4.3-1.7 6.6-3.4.1 0 .1-.1.2-.2 1.8-5.8.3-10.7-2.8-14.9 0-.1-.1-.2-.2-.2zM19.1 26.2c-1.3 0-2.3-1.2-2.3-2.6s1-2.6 2.3-2.6 2.3 1.2 2.3 2.6-1 2.6-2.3 2.6zm9.8 0c-1.3 0-2.3-1.2-2.3-2.6s1-2.6 2.3-2.6 2.3 1.2 2.3 2.6-1 2.6-2.3 2.6z" fill="white"/>
       </svg>
     </Link>
  </nav>
</div>
</div>
</div>
 </div>

       
         <div className="border-t border-slate-100 pt-4 flex flex-col md:flex-row justify-between items-center">
           <p className="text-slate-900 text-[13px] font-medium">
             © 2025 Better<span className="text-brand-blue">Montessori</span>. All rights reserved.
           </p>
          <div className="flex gap-6 text-slate-900 text-[13px] font-medium">
             <span className="hover:text-brand-blue cursor-pointer transition-colors">User Terms & Conditions</span>
            <span className="hover:text-brand-blue cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
       </div>
     </footer>
  );
 }

