import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    // মোবাইলে BottomNav বারের জন্য নিচে এক্সট্রা প্যাডিং (pb-24) রাখা হয়েছে, এটি সিনিয়র ডেভেলপারদের ট্রিক!
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-10 border-t border-slate-800 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Intro */}
          <div className="flex flex-col">
            <Link href="/" className="text-3xl font-black tracking-tighter mb-4 inline-block">
              <span className="text-blue-500">Amar</span>
              <span className="text-orange-500">Shop</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
              Experience the most professional online shopping. Premium products, secure checkout, and fast delivery right at your doorstep.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-lg"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-lg"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-lg"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/products" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 hover:opacity-100 transition-all"></span>All Products</Link></li>
              <li><Link href="/flash-sale" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 hover:opacity-100 transition-all"></span>Flash Sale</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 hover:opacity-100 transition-all"></span>About Us</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 hover:opacity-100 transition-all"></span>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/login" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 hover:opacity-100 transition-all"></span>My Account</Link></li>
              <li><Link href="/orders" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 hover:opacity-100 transition-all"></span>Track Order</Link></li>
              <li><Link href="/faq" className="hover:text-orange-500 transition-colors flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2 opacity-0 hover:opacity-100 transition-all"></span>FAQs & Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <span>Level 4, Premium IT Park, Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                <span>support@amarshop.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Amar Shop. All rights reserved.
          </p>
          <div className="flex items-center text-sm font-bold text-slate-400">
            <ShieldCheck className="w-4 h-4 mr-1.5 text-green-500" /> 100% Secure Checkout
          </div>
        </div>
      </div>
    </footer>
  );
}