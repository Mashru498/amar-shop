'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingCart, User, Menu, LogOut, X, Home, Package, Info, Phone } from 'lucide-react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
      router.push('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // মোবাইল মেনুর জন্য প্রফেশনাল লিংক লিস্ট
  const mobileLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
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
              
              {/* Desktop Login/Logout */}
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

              {/* Cart Icon (Hidden on mobile because it's in BottomNav) */}
              <Link href="/cart" className="relative text-gray-700 hover:text-orange-500 transition-colors group hidden md:flex">
                <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
                  0
                </span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-gray-700 hover:text-orange-500 transition-colors tap-highlight-transparent"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Search Bar (Mobile) - Hidden if menu is open for cleaner UI */}
        <div className={`md:hidden px-4 pb-4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 h-0 overflow-hidden pb-0' : 'opacity-100'}`}>
          <div className="flex relative shadow-sm rounded-md overflow-hidden border border-gray-200">
            <input
              type="text"
              className="w-full bg-gray-50 text-gray-900 pl-4 pr-10 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm font-medium"
              placeholder="Search products..."
            />
            <button className="bg-orange-500 text-white px-5 py-2.5 flex items-center justify-center">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================
          MOBILE SIDEBAR (DRAWER) - ULTRA PREMIUM 
          ========================================= */}
      
      {/* Background Dark Overlay with Blur */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar Panel sliding from right */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-[0_0_50px_rgba(0,0,0,0.15)] transform transition-transform duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-slate-50/50">
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-blue-600">Amar</span>
            <span className="text-orange-500">Shop</span>
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 bg-white rounded-full text-gray-500 hover:text-red-500 hover:bg-red-50 shadow-sm transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Profile Section in Sidebar */}
        <div className="p-6 border-b border-gray-100 bg-white">
          {user ? (
            <div className="flex items-center space-x-4">
              {/* Premium Gradient Avatar */}
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-[0_4px_15px_rgba(37,99,235,0.3)]">
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="flex-col overflow-hidden">
                <p className="text-sm font-bold text-gray-900 truncate">{user.displayName || 'Premium User'}</p>
                <p className="text-xs font-medium text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <p className="text-sm font-semibold text-slate-500 text-center">Welcome to your premium store</p>
              <Link 
                href="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 bg-slate-900 text-white font-bold text-center rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
              >
                Sign In / Register
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {mobileLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-4 py-3.5 text-slate-700 hover:text-orange-500 hover:bg-orange-50/80 rounded-xl font-bold transition-all group"
            >
              <link.icon className="h-5 w-5 mr-4 text-slate-400 group-hover:text-orange-500 transition-colors" />
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logout Button at Bottom (If logged in) */}
        {user && (
          <div className="p-5 border-t border-gray-100 bg-gray-50 mt-auto">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center py-3.5 bg-white border border-red-200 text-red-600 font-bold rounded-xl hover:bg-red-50 hover:border-red-300 transition-all shadow-sm"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Secure Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
}