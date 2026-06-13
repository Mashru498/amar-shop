'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, ShoppingCart, Zap } from 'lucide-react';

export default function HomePage() {
  // প্রফেশনাল প্রোডাক্ট ডেটা
  const featuredProducts = [
    { id: 1, name: 'AirPods Pro (2nd Gen)', price: '৳ ২৯,৯৯৯', oldPrice: '৳ ৩২,০০০', rating: 4.9, reviews: 128, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=500&auto=format&fit=crop', tag: 'NEW' },
    { id: 2, name: 'Sony WH-1000XM5', price: '৳ ৩৮,৫০০', oldPrice: '৳ ৪০,০০০', rating: 4.8, reviews: 95, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop', tag: 'SALE' },
    { id: 3, name: 'Logitech MX Master 3S', price: '৳ ১২,৫০০', oldPrice: '৳ ১৪,০০০', rating: 4.9, reviews: 210, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=500&auto=format&fit=crop' },
    { id: 4, name: 'Keychron K2 V2', price: '৳ ৯,৮০০', oldPrice: '', rating: 4.7, reviews: 84, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=500&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-10">
      
      {/* =========================================
          HERO SECTION (Desktop Grid + Mobile Swipe) 
          ========================================= */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:h-[500px]">
          
          {/* Main Banner - MacBook Pro */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-xl group">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
            <div className="relative h-full flex flex-col justify-center p-8 md:p-12 z-10">
              <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 font-black text-xs tracking-widest uppercase rounded-full mb-4 w-max backdrop-blur-md border border-blue-500/30">
                Exclusive Release
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
                MacBook Pro <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">M3 Max</span>
              </h1>
              <p className="text-slate-300 text-sm md:text-base max-w-md mb-8 font-medium line-clamp-2 md:line-clamp-none">
                Mind-blowing. Head-turning. The most advanced laptop ever built for professionals.
              </p>
              
              <div className="mb-8">
                <p className="text-xs text-green-400 font-bold mb-1 flex items-center"><Zap className="w-3 h-3 mr-1" /> IN STOCK / READY TO SHIP</p>
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl md:text-4xl font-black text-white">৳৩,২০,০০০</span>
                  <span className="text-lg text-slate-500 line-through font-bold">৳৩,৫০,০০০</span>
                </div>
              </div>

              <Link href="/product/macbook-m3" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm hover:bg-orange-500 hover:text-white transition-all duration-300 w-max shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.3)] hover:-translate-y-1">
                Pre-order Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Side Banners (Mobile Horizontal Scroll / Desktop Stacked) */}
          <div className="flex lg:flex-col gap-4 md:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory hide-scrollbar pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
            
            {/* Banner 2 - PS5 */}
            <div className="min-w-[85vw] sm:min-w-[300px] lg:min-w-0 flex-1 relative bg-gradient-to-br from-indigo-600 to-blue-800 rounded-3xl overflow-hidden shadow-lg group snap-center cursor-pointer">
              <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <span className="inline-block px-3 py-1 bg-red-500 text-white font-black text-[10px] tracking-widest uppercase rounded-md mb-2 w-max shadow-lg">Trending Now</span>
                <h3 className="text-2xl font-black text-white mb-1">PS5 Pro</h3>
                <p className="text-slate-200 text-xs font-medium mb-4">Experience lightning fast loading.</p>
                <button className="flex items-center text-white font-bold text-sm group-hover:text-orange-400 transition-colors w-max">
                  Shop Gaming <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Banner 3 - Watch */}
            <div className="min-w-[85vw] sm:min-w-[300px] lg:min-w-0 flex-1 relative bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl overflow-hidden shadow-lg group snap-center cursor-pointer">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
              <div className="relative h-full flex flex-col justify-center items-center text-center p-6 z-10">
                <Zap className="text-yellow-300 w-10 h-10 mb-3 animate-pulse" />
                <h3 className="text-3xl font-black text-white tracking-tight mb-2">Flash Sale</h3>
                <p className="text-white/90 text-sm font-bold mb-5 bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-sm">Up to 60% Off on Wearables</p>
                <button className="bg-white text-orange-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-900 hover:text-white transition-all shadow-md hover:-translate-y-0.5">
                  Grab The Deal
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          PRODUCT GRID (Touch-Friendly 2-Column Mobile)
          ========================================= */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Just For You</h2>
            <p className="text-slate-500 text-sm font-medium mt-1">Premium selections based on your taste</p>
          </div>
          <Link href="/products" className="hidden sm:flex items-center text-blue-600 font-bold hover:text-orange-500 transition-colors">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* The Magic Grid: 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl md:rounded-3xl p-3 sm:p-5 shadow-[0_5px_15px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative">
              
              {/* Product Badge */}
              {product.tag && (
                <span className={`absolute top-3 sm:top-5 left-3 sm:left-5 z-10 px-2.5 py-1 text-[9px] sm:text-[10px] font-black tracking-wider text-white rounded-md shadow-sm uppercase ${product.tag === 'SALE' ? 'bg-red-500' : 'bg-blue-600'}`}>
                  {product.tag}
                </span>
              )}

              {/* Product Image Box */}
              <div className="relative aspect-square mb-4 rounded-xl md:rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Product Info */}
              <div className="flex-grow flex flex-col">
                <div className="flex items-center space-x-1 mb-1.5 sm:mb-2">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400 fill-orange-400" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-700">{product.rating}</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium">({product.reviews})</span>
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-2 mb-2 group-hover:text-blue-600 transition-colors flex-grow">
                  {product.name}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-auto">
                  <div>
                    <span className="block font-black text-slate-900 text-sm sm:text-base">{product.price}</span>
                    {product.oldPrice && (
                      <span className="block text-[10px] sm:text-xs text-slate-400 line-through font-semibold">{product.oldPrice}</span>
                    )}
                  </div>
                  
                  {/* Ultra-Tap-Friendly Button for Mobile */}
                  <button className="bg-slate-900 text-white w-full sm:w-auto h-9 sm:h-10 px-3 rounded-lg sm:rounded-xl flex items-center justify-center hover:bg-orange-500 hover:shadow-lg transition-all active:scale-95 touch-manipulation">
                    <ShoppingCart className="w-4 h-4 sm:mr-1.5" />
                    <span className="hidden sm:block text-xs font-bold">Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Style for hiding scrollbar elegantly */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}