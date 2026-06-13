'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Filter, ChevronDown, Grid, List, Star, ShoppingCart, ArrowRight } from 'lucide-react';

// প্রফেশনাল টাইপস্ক্রিপ্ট ইন্টারফেস (এটিই বিল্ড এররটি ফিক্স করবে)
type Product = {
  id: number;
  name: string;
  price: string;
  oldPrice?: string; // '?' মানে এটি থাকতেও পারে, নাও থাকতে পারে (Optional)
  category: string;
  rating: number;
  reviews: number;
  image: string;
  tag?: string;
};

export default function ProductsPage() {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  // টাইপস্ক্রিপ্ট টাইপ (Product[]) যুক্ত করে ডেটা আপডেট করা হলো
  const products: Product[] = [
    { id: 1, name: 'AirPods Pro (2nd Gen)', price: '৳ ২৯,৯৯৯', oldPrice: '৳ ৩২,০০০', category: 'Audio', rating: 4.9, reviews: 128, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=500&auto=format&fit=crop', tag: 'NEW' },
    { id: 2, name: 'Sony WH-1000XM5', price: '৳ ৩৮,৫০০', oldPrice: '৳ ৪০,০০০', category: 'Audio', rating: 4.8, reviews: 95, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=500&auto=format&fit=crop', tag: 'SALE' },
    { id: 3, name: 'Logitech MX Master 3S', price: '৳ ১২,৫০০', oldPrice: '৳ ১৪,০০০', category: 'Accessories', rating: 4.9, reviews: 210, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=500&auto=format&fit=crop' },
    { id: 4, name: 'Keychron K2 V2', price: '৳ ৯,৮০০', category: 'Accessories', rating: 4.7, reviews: 84, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=500&auto=format&fit=crop' },
    { id: 5, name: 'MacBook Pro M3 Max', price: '৳ ৩,২০,০০০', oldPrice: '৳ ৩,৫০,০০০', category: 'Laptops', rating: 5.0, reviews: 45, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500&auto=format&fit=crop', tag: 'HOT' },
    { id: 6, name: 'PlayStation 5 Pro', price: '৳ ৭০,০০০', category: 'Gaming', rating: 4.9, reviews: 320, image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=500&auto=format&fit=crop' },
  ];

  const categories = ['All Categories', 'Laptops', 'Audio', 'Accessories', 'Gaming', 'Smartphones'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20 selection:bg-orange-500 selection:text-white">
      
      {/* =========================================
          PAGE HEADER
          ========================================= */}
      <div className="bg-white border-b border-slate-200 pt-8 pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm font-medium text-slate-400 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-bold">All Products</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Premium Collection</h1>
          <p className="text-slate-500 font-medium mt-2">Explore our highly curated selection of top-tier products.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* =========================================
              LEFT SIDEBAR
              ========================================= */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_5px_20px_rgba(0,0,0,0.02)] sticky top-28">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center"><Filter className="w-4 h-4 mr-2 text-orange-500" /> Filters</h3>
                <button className="text-xs font-bold text-blue-600 hover:text-blue-700">Clear All</button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Categories</h4>
                <ul className="space-y-3">
                  {categories.map((cat, idx) => (
                    <li key={idx}>
                      <label className="flex items-center cursor-pointer group">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center mr-3 transition-colors ${idx === 0 ? 'bg-orange-500 border-orange-500' : 'border-slate-300 bg-white group-hover:border-orange-400'}`}>
                          {idx === 0 && <div className="w-2.5 h-2.5 bg-white rounded-sm"></div>}
                        </div>
                        <span className={`text-sm font-medium transition-colors ${idx === 0 ? 'text-slate-900 font-bold' : 'text-slate-600 group-hover:text-orange-500'}`}>{cat}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Price Range</h4>
                <input type="range" className="w-full accent-orange-500 mb-4" min="0" max="100000" />
                <div className="flex items-center justify-between gap-2">
                  <div className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 w-full text-center">৳০</div>
                  <span className="text-slate-400">-</span>
                  <div className="px-3 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 w-full text-center">৳১,০০,০০০+</div>
                </div>
              </div>
            </div>
          </aside>

          {/* =========================================
              MAIN CONTENT (Product Grid)
              ========================================= */}
          <div className="flex-1">
            
            {/* Toolbar */}
            <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-[0_5px_20px_rgba(0,0,0,0.02)] mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-medium text-slate-500">Showing <span className="font-bold text-slate-900">1-{products.length}</span> of {products.length} results</p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-500">Sort by:</span>
                  <button className="flex items-center px-4 py-2 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                    Featured <ChevronDown className="w-4 h-4 ml-2 text-slate-400" />
                  </button>
                </div>
                <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
                  <button onClick={() => setViewType('grid')} className={`p-1.5 rounded-md transition-all ${viewType === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                    <Grid className="w-4 h-4" />
                  </button>
                  <button onClick={() => setViewType('list')} className={`p-1.5 rounded-md transition-all ${viewType === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* The Magic Grid */}
            <div className={`grid gap-4 sm:gap-6 ${viewType === 'grid' ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {products.map((product) => (
                <div key={product.id} className={`bg-white rounded-2xl p-4 shadow-[0_5px_15px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group relative ${viewType === 'list' ? 'flex items-center gap-6' : 'flex flex-col'}`}>
                  
                  {/* Badge */}
                  {product.tag && (
                    <span className={`absolute top-4 left-4 z-10 px-2.5 py-1 text-[10px] font-black tracking-wider text-white rounded-md shadow-sm uppercase ${product.tag === 'SALE' ? 'bg-red-500' : product.tag === 'HOT' ? 'bg-orange-500' : 'bg-blue-600'}`}>
                      {product.tag}
                    </span>
                  )}

                  {/* Image Box */}
                  <div className={`relative rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center shrink-0 ${viewType === 'list' ? 'w-48 h-48 mb-0' : 'aspect-square mb-5'}`}>
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    
                    {/* Hover Add to Cart Overlay */}
                    {viewType === 'grid' && (
                      <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden md:block">
                        <button className="w-full bg-slate-900/90 backdrop-blur-sm text-white font-bold py-3 rounded-xl flex items-center justify-center hover:bg-orange-500 transition-colors shadow-lg">
                          <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-1.5">{product.category}</p>
                    <h3 className={`font-bold text-slate-900 group-hover:text-blue-600 transition-colors ${viewType === 'list' ? 'text-xl mb-3' : 'text-sm mb-2 line-clamp-2'}`}>
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center space-x-1 mb-3">
                      <Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                      <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                      <span className="text-xs text-slate-400 font-medium">({product.reviews} reviews)</span>
                    </div>
                    
                    <div className={`flex items-center justify-between mt-auto ${viewType === 'list' ? 'max-w-xs' : ''}`}>
                      <div>
                        <span className={`block font-black text-slate-900 ${viewType === 'list' ? 'text-2xl' : 'text-base'}`}>{product.price}</span>
                        {product.oldPrice && <span className="block text-xs text-slate-400 line-through font-semibold">{product.oldPrice}</span>}
                      </div>

                      {/* Button */}
                      <button className={`bg-slate-100 text-slate-900 hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center shadow-sm active:scale-95 ${viewType === 'grid' ? 'md:hidden w-10 h-10 rounded-xl' : 'px-6 py-3 rounded-xl font-bold'}`}>
                        <ShoppingCart className={`${viewType === 'list' ? 'mr-2 w-5 h-5' : 'w-4 h-4'}`} />
                        {viewType === 'list' && 'Add to Cart'}
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden p-1">
                <button className="px-4 py-2 font-bold text-sm text-white bg-blue-600 rounded-lg shadow-sm">1</button>
                <button className="px-4 py-2 font-bold text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">2</button>
                <button className="px-4 py-2 font-bold text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">3</button>
                <button className="px-4 py-2 font-bold text-sm text-slate-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center">Next <ArrowRight className="w-4 h-4 ml-1" /></button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}