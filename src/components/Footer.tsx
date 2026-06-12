import React from 'react';
import Link from 'next/link';
import { Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-slate-400 pt-16 pb-24 md:pb-8 relative z-20 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="text-3xl font-black tracking-tighter mb-5 inline-block">
              <span className="text-blue-500">Amar</span><span className="text-orange-500">Shop</span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 font-medium pr-4">
              Experience the most professional online shopping. Premium products, secure checkout, and lightning-fast delivery right at your doorstep.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg group"><Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg group"><Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" /></a>
            </div>
          </div>

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

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-6 tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center mr-3 shrink-0"><Phone className="w-4 h-4 text-slate-300" /></div>
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center group">
                <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center mr-3 shrink-0"><Mail className="w-4 h-4 text-slate-300" /></div>
                <span>support@amarshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 text-center md:text-left">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-white font-bold">Amar Shop</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}