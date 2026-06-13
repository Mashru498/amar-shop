import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react'; // শুধু নিরাপদ আইকনগুলো রাখা হয়েছে

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 pt-16 pb-24 md:pb-8 relative z-20 border-t border-slate-800 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================
            MAIN FOOTER COLUMNS
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Intro */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="text-3xl font-black tracking-tighter mb-5 inline-block">
              <span className="text-blue-500">Amar</span><span className="text-orange-500">Shop</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 font-medium pr-4">
              Experience the most professional online shopping. Premium products, secure checkout, and lightning-fast delivery right at your doorstep.
            </p>
            <div className="flex space-x-3 mt-auto">
              {/* Facebook Native SVG */}
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* YouTube Native SVG */}
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-500 hover:-translate-y-1 transition-all duration-300 shadow-lg group">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {['All Products', 'Flash Sale', 'About Us', 'Privacy Policy'].map((name) => (
                <li key={name}>
                  <Link href={`/${name.toLowerCase().replace(' ', '-')}`} className="group flex items-center hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">»</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Support</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {['My Account', 'Track Order', 'Returns Policy', 'FAQs & Help'].map((name) => (
                <li key={name}>
                  <Link href="/support" className="group flex items-center hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">»</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (ঠিকানা বাদ দেওয়া হয়েছে) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center mr-3 shrink-0 group-hover:bg-orange-500 transition-colors">
                  <Phone className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-white transition-colors">+880 1234 567890</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center mr-3 shrink-0 group-hover:bg-orange-500 transition-colors">
                  <Mail className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                </div>
                <span className="group-hover:text-white transition-colors">support@amarshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR (পেমেন্ট ব্যাজ বাদ দেওয়া হয়েছে) */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-white font-bold">Amar Shop</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}