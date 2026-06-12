import React from 'react';
import Link from 'next/link';
import { Globe, Camera, Video, Mail, MapPin, Phone, ShieldCheck, ArrowRight, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    // আল্ট্রা-প্রিমিয়াম ডার্ক ব্যাকগ্রাউন্ড এবং টপ বর্ডার গ্রেডিয়েন্ট
    <footer className="bg-[#0B1120] text-slate-400 pt-0 pb-24 md:pb-8 relative z-20 overflow-hidden font-sans">
      
      {/* Top Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* =========================================
            NEWSLETTER SECTION (Premium Touch)
            ========================================= */}
        <div className="border-b border-slate-800/80 pb-12 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-black text-white tracking-tight mb-2">Join our premium club</h3>
            <p className="text-sm font-medium text-slate-500">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          </div>
          <div className="w-full md:w-auto flex-1 max-w-md relative flex shadow-[0_0_30px_rgba(249,115,22,0.05)]">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-[#111827] border border-slate-700/50 text-white pl-12 pr-4 py-3.5 rounded-l-xl focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-medium text-sm placeholder:text-slate-600"
            />
            <button className="bg-orange-500 text-white px-6 py-3.5 rounded-r-xl font-bold hover:bg-orange-600 transition-colors flex items-center shadow-lg group shrink-0 text-sm">
              Subscribe <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* =========================================
            MAIN FOOTER COLUMNS
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Brand & Intro (Takes up 4 columns on large screens) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="text-3xl font-black tracking-tighter mb-5 inline-block">
              <span className="text-blue-500">Amar</span><span className="text-orange-500">Shop</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 font-medium pr-4">
              Experience the most professional online shopping. Premium products, state-of-the-art secure checkout, and lightning-fast delivery right at your doorstep.
            </p>
            <div className="flex space-x-3 mt-auto">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 shadow-lg group"><Globe className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-500 hover:-translate-y-1 transition-all duration-300 shadow-lg group"><Camera className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-500 hover:-translate-y-1 transition-all duration-300 shadow-lg group"><Video className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
            </div>
          </div>

          {/* Quick Links (Takes 3 cols) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {[
                { name: 'All Products', href: '/products' },
                { name: 'Flash Sale', href: '/flash-sale' },
                { name: 'About Us', href: '/about' },
                { name: 'Privacy Policy', href: '/privacy' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">»</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service (Takes 3 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Support</h4>
            <ul className="space-y-3.5 text-sm font-medium">
              {[
                { name: 'My Account', href: '/login' },
                { name: 'Track Order', href: '/orders' },
                { name: 'Returns Policy', href: '/returns' },
                { name: 'FAQs & Help', href: '/faq' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center hover:text-orange-400 transition-colors">
                    <span className="text-orange-500 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">»</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Takes 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start group">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center mr-3 shrink-0 group-hover:bg-orange-500 transition-colors">
                  <MapPin className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                </div>
                <span className="mt-1.5 group-hover:text-white transition-colors">Level 4, Premium IT Park,<br/>Dhaka, Bangladesh</span>
              </li>
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

        {/* =========================================
            BOTTOM BAR (Copyright & Badges)
            ========================================= */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-white font-bold">Amar Shop</span>. All rights reserved.
          </div>
          
          {/* Payment Method Badges (Visual Trust) */}
          <div className="flex items-center space-x-3">
            <div className="px-3 py-1.5 bg-slate-800/50 rounded-md border border-slate-700/50 flex items-center text-xs font-bold text-slate-300"><CreditCard className="w-4 h-4 mr-1.5" /> VISA</div>
            <div className="px-3 py-1.5 bg-slate-800/50 rounded-md border border-slate-700/50 flex items-center text-xs font-bold text-slate-300">MasterCard</div>
          </div>

          <div className="flex items-center text-sm font-bold text-slate-300 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
            <ShieldCheck className="w-4 h-4 mr-2 text-green-500" /> 100% Secure Checkout
          </div>
          
        </div>
      </div>
    </footer>
  );
}