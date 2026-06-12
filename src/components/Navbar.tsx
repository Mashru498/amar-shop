'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingCart, User, Menu, LogOut } from 'lucide-react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  // ফায়ারবেস থেকে চেক করা হচ্ছে ইউজার লগিন করা আছে কি না
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // লগআউট হ্যান্ডলার
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login'); // লগআউট হলে লগিন পেজে পাঠিয়ে দেবে
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              <span className="text-blue-600">Amar</span>
              <span className="text-orange-500">Shop</span>
            </Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-center px-10">
            <div className="w-full max-w-3xl flex relative shadow-sm rounded-md overflow-hidden">
              <input
                type="text"
                className="w-full bg-gray-100 text-gray-900 pl-5 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-sm font-medium"
                placeholder="Search for products, brands and more..."
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transition-colors flex items-center justify-center">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-5 md:space-x-8">
            
            {/* ডায়নামিক লগিন/লগআউট সেকশন */}
            {user ? (
              <div className="hidden md:flex items-center space-x-5">
                <div className="flex items-center text-slate-800 font-bold text-sm bg-slate-100 px-3 py-1.5 rounded-full cursor-default">
                  <User className="h-5 w-5 mr-1.5 text-blue-600" />
                  <span className="truncate max-w-[120px]">{user.displayName || 'User'}</span>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="flex items-center text-red-500 hover:text-red-700 transition-colors group font-semibold text-sm"
                >
                  <LogOut className="h-5 w-5 mr-1.5 group-hover:scale-110 transition-transform" />
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="hidden md:flex items-center text-gray-700 hover:text-orange-500 transition-colors group">
                <User className="h-6 w-6 mr-1.5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm">Login</span>
              </Link>
            )}

            <Link href="/cart" className="relative text-gray-700 hover:text-orange-500 transition-colors group">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
                0
              </span>
            </Link>

            <button className="md:hidden text-gray-700 hover:text-orange-500 transition-colors">
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Search Bar (Mobile) */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex relative shadow-sm rounded-md overflow-hidden">
          <input
            type="text"
            className="w-full bg-gray-100 text-gray-900 pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            placeholder="Search products..."
          />
          <button className="bg-orange-500 text-white px-5 py-2.5 flex items-center justify-center">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}