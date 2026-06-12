import React from 'react';
import Link from 'next/link';
import { 
  Cpu, Shirt, Home, Zap, 
  ShoppingCart, Star, ArrowRight, 
  Mail, TrendingUp, Timer, CreditCard 
} from 'lucide-react';

// --- ডামি ডেটা ---
const categories = [
  { id: 1, name: 'Premium Electronics', icon: Cpu, desc: 'Next-gen gadgets and smart devices.', link: '/tech' },
  { id: 2, name: 'Exclusive Fashion', icon: Shirt, desc: 'Curated apparel for the modern lifestyle.', link: '/fashion' },
  { id: 3, name: 'Home & Living', icon: Home, desc: 'Elevate your personal space.', link: '/home' },
];

const trendingProducts = [
  { id: 1, name: 'Sony Alpha 7 IV', price: '৳250,000', oldPrice: '৳275,000', rating: 4.9, image: 'bg-gray-200' },
  { id: 2, name: 'Apple MacBook Pro M3', price: '৳320,000', oldPrice: '৳350,000', rating: 5.0, image: 'bg-gray-200' },
  { id: 3, name: 'Nike Air Max 2024', price: '৳15,500', oldPrice: '৳18,000', rating: 4.8, image: 'bg-gray-200' },
  { id: 4, name: 'Samsung 65" Neo QLED', price: '৳180,000', oldPrice: '৳210,000', rating: 4.7, image: 'bg-gray-200' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] flex flex-col antialiased selection:bg-orange-500 selection:text-white">
      
      {/* 1. ULTRA-PREMIUM BENTO GRID HERO SECTION */}
      <section className="pt-8 pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[340px]">
            
            {/* BIG HERO BANNER - MACBOOK PRO */}
            <div className="lg:col-span-2 lg:row-span-2 relative rounded-[2rem] overflow-hidden bg-slate-50 group border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
              
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop" 
                  alt="MacBook Pro" 
                  className="w-full h-full object-cover object-right opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
              </div>
              
              <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-14 w-full md:w-3/4">
                
                <div className="inline-flex items-center space-x-2 bg-slate-900 px-4 py-2 rounded-full w-max mb-6 shadow-md">
                  <Zap className="w-4 h-4 text-orange-400 fill-orange-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-white">Exclusive Release</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[1.05] mb-4">
                  MacBook Pro <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    M3 Max
                  </span>
                </h1>
                
                <p className="text-lg text-slate-600 mb-8 max-w-md font-medium leading-relaxed">
                  Mind-blowing. Head-turning. The most advanced laptop ever built for professionals.
                </p>
                
                <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 p-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] w-max">
                  
                  <div className="flex flex-col mb-5">
                    <span className="flex items-center text-xs font-bold text-green-600 uppercase tracking-widest mb-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                      In Stock • Ready to ship
                    </span>
                    <div className="flex items-end space-x-3">
                      <span className="font-black text-slate-900 text-4xl tracking-tight">৳3,20,000</span>
                      <span className="text-sm font-bold text-slate-400 line-through mb-1">৳3,50,000</span>
                    </div>
                    <span className="text-sm font-medium text-slate-500 mt-1 flex items-center">
                      <CreditCard className="w-4 h-4 mr-1.5 text-blue-500" />
                      From ৳26,666/mo with 0% EMI
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="relative overflow-hidden bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg group/btn shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                      <span className="relative z-10 flex items-center">
                        <ShoppingCart className="w-5 h-5 mr-2" /> Pre-order Now 
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <button className="w-14 h-14 rounded-2xl border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all">
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SMALL BOX 1: GAMING (PS5) */}
            <div className="relative rounded-[2rem] overflow-hidden bg-slate-950 group cursor-pointer border border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=800&auto=format&fit=crop" 
                alt="PS5 Console" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-10"></div>
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8">
                <div className="bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full w-max mb-3 uppercase tracking-widest shadow-lg">
                  Trending Now
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">PS5 Pro</h3>
                <p className="text-slate-300 text-sm mb-5 font-medium">Experience lightning fast loading.</p>
                <Link href="/gaming" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full font-bold flex items-center w-max hover:bg-white hover:text-slate-900 transition-all">
                  Shop Gaming <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* SMALL BOX 2: FLASH SALE */}
            <div className="relative rounded-[2rem] overflow-hidden bg-orange-500 group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop" 
                alt="Smartwatch" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700"></div>
              
              <div className="relative z-20 h-full flex flex-col justify-center p-8 text-white">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5 border border-white/30 shadow-inner">
                  <Timer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-2 tracking-tight">Flash Sale</h3>
                <p className="text-orange-100 font-medium mb-6 text-lg">Up to 60% Off on Wearables</p>
                <Link href="/sale" className="bg-white text-orange-600 w-max px-6 py-3 rounded-xl font-bold text-sm shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all hover:-translate-y-1">
                  Grab the Deal
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TOP CATEGORIES */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Explore Top Categories</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link href={cat.link} key={cat.id} className="group relative bg-[#F8FAFC] p-8 rounded-[2rem] shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{cat.name}</h3>
                <p className="text-slate-600 mb-8 font-medium">{cat.desc}</p>
                <div className="flex items-center text-orange-500 font-bold group-hover:text-orange-600">
                  Shop Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING PORTFOLIO */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="flex items-center text-orange-500 font-black mb-3 tracking-widest uppercase text-sm">
                <TrendingUp className="w-5 h-5 mr-2" /> Trending Now
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Premium Selections</h2>
            </div>
            <Link href="/products" className="text-blue-600 font-bold hover:text-blue-700 mt-4 md:mt-0 flex items-center text-lg">
              View All Products <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500">
                <div className={`w-full h-72 ${product.image} relative overflow-hidden flex items-center justify-center bg-slate-100`}>
                  <span className="text-slate-400 font-semibold tracking-widest uppercase text-sm">Product Image</span>
                  <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-2" /> Quick Add
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm font-bold text-slate-700 ml-1.5">{product.rating}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 truncate">{product.name}</h3>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-2xl font-black text-blue-600">{product.price}</span>
                    <span className="text-sm font-semibold text-slate-400 line-through">{product.oldPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-28 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-800 opacity-95"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter leading-tight">Ready to Upgrade Your <br/> Shopping Experience?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_10px_30px_rgb(249,115,22,0.4)] hover:shadow-[0_15px_40px_rgb(249,115,22,0.5)] transition-all hover:-translate-y-1 inline-block">
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            <div>
              <div className="text-4xl font-black tracking-tighter mb-6">
                <span className="text-blue-500">Amar</span><span className="text-orange-500">Shop</span>
              </div>
              <p className="mb-8 font-medium leading-relaxed">The new standard of online shopping in Bangladesh. Premium products, secure checkout, and ultra-fast delivery.</p>
              <div className="flex space-x-5">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-xl mb-6 tracking-tight">Quick Links</h4>
              <ul className="space-y-4 font-medium">
                {['About Us', 'Contact Support', 'Track Order', 'Return Policy'].map((link, idx) => (
                  <li key={idx}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xl mb-6 tracking-tight">Categories</h4>
              <ul className="space-y-4 font-medium">
                {['Electronics', 'Fashion', 'Home Appliances', 'Health & Beauty'].map((link, idx) => (
                  <li key={idx}><a href="#" className="hover:text-orange-500 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-xl mb-6 tracking-tight">Newsletter</h4>
              <p className="mb-6 font-medium">Get exclusive deals and offers directly to your inbox.</p>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="bg-slate-900 text-white px-5 py-4 rounded-l-xl w-full focus:outline-none focus:ring-1 focus:ring-orange-500 border border-slate-800 font-medium"/>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-r-xl transition-colors flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
          
          <div className="pt-8 border-t border-slate-900 text-sm font-medium flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Amar Shop. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}