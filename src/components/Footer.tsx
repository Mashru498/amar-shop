import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  
  // প্রফেশনাল ডেভেলপমেন্ট অ্যাপ্রোচ: লিংকগুলোকে আলাদা অ্যারেতে রাখা হয়েছে যাতে ভবিষ্যতে পরিবর্তন করা সহজ হয়
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' }
  ];

  const supportLinks = [
    { name: 'Contact Support', href: '/support' }
  ];

  return (
    <footer className="bg-[#050B14] text-slate-400 pt-20 pb-24 md:pb-10 relative z-20 border-t border-slate-800/60 font-sans overflow-hidden">
      
      {/* Background Subtle Premium Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================================
            MAIN FOOTER COLUMNS (Ultra-Balanced Grid)
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-5 flex flex-col pr-0 md:pr-10">
            <Link href="/" className="text-3xl font-black tracking-tighter mb-6 inline-block">
              <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Amar</span>
              <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">Shop</span>
            </Link>
            <p className="text-[14px] leading-relaxed mb-8 font-medium text-slate-400/90 max-w-md">
              Experience the most professional online shopping. Premium products, secure checkout, and lightning-fast delivery right at your doorstep.
            </p>
            <div className="flex space-x-4 mt-auto">
              {/* Facebook Native SVG with Premium Hover */}
              <a href="#" className="w-11 h-11 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-blue-600/25 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* YouTube Native SVG with Premium Hover */}
              <a href="#" className="w-11 h-11 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-500 hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-red-600/25 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (Updated flawlessly) */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold text-[13px] tracking-[0.15em] mb-7 uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-white transition-colors">
                    <span className="text-orange-500 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">⎯</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support (Minimalist and clean) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[13px] tracking-[0.15em] mb-7 uppercase">Support</h4>
            <ul className="space-y-4 text-sm font-medium">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-white transition-colors">
                    <span className="text-orange-500 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">⎯</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Fully Clickable Gmail Link Block) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[13px] tracking-[0.15em] mb-7 uppercase">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#sent?compose=new" target="_blank" rel="noopener noreferrer" className="flex items-center group cursor-pointer w-max tap-highlight-transparent">
                  <div className="w-10 h-10 rounded-xl bg-[#0F172A] border border-slate-800 flex items-center justify-center mr-4 shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300 shadow-sm group-hover:shadow-orange-500/20">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-400 group-hover:text-white transition-colors">mashru2100ci@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR (Ultra-Premium Copyright)
            ========================================= */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-center items-center gap-4 text-center">
          <p className="text-[13px] font-medium text-slate-500">
            © {new Date().getFullYear()} <span className="text-white font-bold">Amar Shop Pro.</span> | Designed & Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400 font-bold tracking-wide">Mashru</span> | Built for Future Leaders
          </p>
        </div>
      </div>
    </footer>
  );
}