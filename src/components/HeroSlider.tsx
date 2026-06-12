'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Zap, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function PremiumHero() {
  return (
    <div className="relative w-full min-h-[90vh] bg-slate-950 flex items-center overflow-hidden font-sans">
      
      {/* 1. Futuristic Background Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Copy & Conversions */}
          <div className="flex flex-col items-start text-left space-y-8 max-w-2xl">
            
            {/* Kicker / Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse mr-3"></span>
              <span className="text-sm font-medium text-slate-300">Over 50,000+ Premium Devices Delivered</span>
            </div>

            {/* Main Headline with Gradient Text */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.1]">
              Elevate Your Reality With <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
                Premium Tech.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl">
              Discover hand-picked, authentic smart gadgets designed to push the boundaries of what's possible. Upgrade your lifestyle with cutting-edge innovation.
            </p>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto pt-2">
              <Link 
                href="/shop" 
                className="group relative flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl overflow-hidden shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.7)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <button className="flex items-center justify-center px-8 py-4 bg-slate-900/50 hover:bg-slate-800 border border-slate-700 text-white font-bold text-lg rounded-xl backdrop-blur-md transition-all duration-300 w-full sm:w-auto group">
                <PlayCircle className="mr-2 w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof & Trust Signals */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-slate-800/60 w-full">
              {/* Avatar Group */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-bold text-white">
                  5k+
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                  <span className="text-white font-bold ml-2">4.9/5</span>
                </div>
                <span className="text-sm text-slate-400">from verified buyers</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Premium Product Showcase (3D/Floating Concept) */}
          <div className="relative hidden lg:flex justify-center items-center h-[600px] w-full perspective-1000">
            
            {/* Core Glowing Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-gradient-to-tr from-blue-600/30 to-orange-500/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
            
            {/* Central Product Image Container (Floating Animation) */}
            <div className="relative z-20 w-[22rem] h-[28rem] bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl flex items-center justify-center animate-[bounce_6s_ease-in-out_infinite] transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
              
              {/* Place your actual transparent PNG product image here */}
              <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-500">
                 {/* Placeholder graphic for product */}
                 <div className="w-48 h-64 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl shadow-inner border border-slate-700 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent"></div>
                 </div>
                 <p className="mt-6 font-medium text-sm tracking-widest uppercase opacity-50">Premium Device</p>
              </div>

              {/* Floating Feature Tags */}
              <div className="absolute -left-12 top-16 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-lg flex items-center shadow-xl animate-[bounce_5s_ease-in-out_infinite_reverse]">
                <Zap className="w-4 h-4 text-orange-400 mr-2" />
                <span className="text-white text-sm font-semibold">M3 Chipset</span>
              </div>

              <div className="absolute -right-8 bottom-24 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-lg flex items-center shadow-xl animate-[bounce_7s_ease-in-out_infinite]">
                <ShieldCheck className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm font-semibold">3 Yrs Warranty</span>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-10 w-24 h-24 border border-slate-700/50 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 border border-slate-700/30 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>

        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className="absolute bottom-0 left-0 w-full border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-md py-4 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm text-slate-400">
          <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> 100% Authentic Products</div>
          <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> Secure SSL Checkout</div>
          <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> Fast Nationwide Delivery</div>
          <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-orange-500" /> 7-Day Easy Returns</div>
        </div>
      </div>
    </div>
  );
}