'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, ShoppingCart, User } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  // মেনু আইটেমগুলোর লিস্ট (ভবিষ্যতে সহজে পরিবর্তন করার জন্য প্রফেশনাল অ্যারে স্ট্রাকচার)
  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'Cart', href: '/cart', icon: ShoppingCart, badge: 0 },
    { name: 'Profile', href: '/login', icon: User }, // লগিন/প্রোফাইল পেজ
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-slate-200/50 shadow-[0_-10px_40px_rgba(0,0,0,0.04)] z-50 transition-all duration-300">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className="relative flex flex-col items-center justify-center w-full h-full group tap-highlight-transparent"
            >
              {/* Top Active Indicator Line (Smooth Animation) */}
              <div className={`absolute top-0 w-8 h-1 rounded-b-full transition-all duration-300 ease-out ${
                isActive ? 'bg-orange-500 translate-y-0 opacity-100' : 'bg-transparent -translate-y-1 opacity-0'
              }`} />
              
              <div className="relative mt-1">
                <Icon 
                  className={`w-6 h-6 transition-all duration-300 ease-out ${
                    isActive 
                      ? 'text-orange-500 scale-110 drop-shadow-sm' 
                      : 'text-slate-400 group-hover:text-slate-600 group-hover:scale-105'
                  }`} 
                  strokeWidth={isActive ? 2.5 : 2}
                />
                
                {/* Premium Notification Badge for Cart */}
                {item.badge !== undefined && (
                  <span className={`absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-extrabold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white shadow-sm transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`}>
                    {item.badge}
                  </span>
                )}
              </div>
              
              <span className={`text-[10px] font-bold mt-1 transition-colors duration-300 tracking-wide ${
                isActive ? 'text-orange-500' : 'text-slate-400 group-hover:text-slate-600'
              }`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}