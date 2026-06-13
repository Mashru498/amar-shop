'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingCart, User, Menu, LogOut, X, Home, Package, Info, Phone, Edit2, Settings, UserCircle, Check } from 'lucide-react';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Profile Dropdown & Modal States
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ফায়ারবেস থেকে চেক করা হচ্ছে ইউজার লগিন করা আছে কি না
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.displayName) {
        setNewName(currentUser.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

  // ড্রপডাউনের বাইরে ক্লিক করলে সেটি বন্ধ হওয়ার জাদুকরী ফাংশন
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // লগআউট হ্যান্ডলার
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
      router.push('/login');
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // নাম পরিবর্তনের প্রো-লেভেল ফাংশন
  const handleUpdateName = async () => {
    if (!newName.trim() || !auth.currentUser) return;
    setIsUpdating(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: newName
      });
      setUser({ ...auth.currentUser, displayName: newName });
      setIsEditModalOpen(false);
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Error updating name:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const mobileLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  // ইউজারের নামের প্রথম অক্ষর বের করার ফাংশন
  const getInitials = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-3xl font-black tracking-tighter hover:opacity-80 transition-opacity">
                <span className="text-blue-600">Amar</span>
                <span className="text-orange-500">Shop</span>
              </Link>
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 items-center justify-center px-10">
              <div className="w-full max-w-2xl flex relative shadow-sm rounded-xl overflow-hidden border border-slate-200 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-500/10 transition-all duration-300">
                <input
                  type="text"
                  className="w-full bg-slate-50/50 text-gray-900 pl-5 pr-12 py-3 focus:outline-none text-sm font-medium placeholder:text-slate-400"
                  placeholder="Search for products, brands and more..."
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transition-colors flex items-center justify-center">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right Side Icons & Profile */}
            <div className="flex items-center space-x-5 md:space-x-8">
              
              {/* Profile System (Desktop) */}
              {user ? (
                <div className="hidden md:flex relative" ref={dropdownRef}>
                  {/* Circular Premium Avatar Button */}
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-tr from-blue-600 to-orange-500 text-white font-black text-lg shadow-[0_4px_15px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300 border-2 border-white focus:outline-none"
                  >
                    {getInitials(user.displayName)}
                  </button>

                  {/* Ultra-Premium Dropdown Menu */}
                  <div className={`absolute right-0 top-14 w-64 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 py-2 z-50 transform origin-top-right transition-all duration-300 ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                    
                    {/* User Header in Dropdown */}
                    <div className="px-5 py-4 border-b border-slate-100">
                      <p className="text-sm font-bold text-slate-900 truncate">{user.displayName || 'Premium User'}</p>
                      <p className="text-xs font-medium text-slate-500 truncate mt-0.5">{user.email}</p>
                    </div>

                    <div className="p-2 space-y-1">
                      {/* Edit Profile Option */}
                      <button 
                        onClick={() => { setIsEditModalOpen(true); setIsDropdownOpen(false); }}
                        className="w-full flex items-center px-3 py-2.5 text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors group"
                      >
                        <Edit2 className="h-4 w-4 mr-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        Edit Profile Name
                      </button>

                      {/* Settings Option (Visual) */}
                      <Link href="/account" onClick={() => setIsDropdownOpen(false)} className="w-full flex items-center px-3 py-2.5 text-sm font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors group">
                        <Settings className="h-4 w-4 mr-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        Account Settings
                      </Link>
                    </div>

                    <div className="p-2 border-t border-slate-100">
                      {/* Secure Logout Option */}
                      <button 
                        onClick={handleLogout} 
                        className="w-full flex items-center px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors group"
                      >
                        <LogOut className="h-4 w-4 mr-3 text-red-400 group-hover:text-red-600 transition-colors" />
                        Secure Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link href="/login" className="hidden md:flex items-center px-6 py-2.5 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Link>
              )}

              {/* Cart Icon */}
              <Link href="/cart" className="relative text-slate-700 hover:text-orange-500 transition-colors group hidden md:flex">
                <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-2.5 -right-2.5 bg-orange-500 text-white text-[11px] font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-white shadow-sm">
                  0
                </span>
              </Link>

              {/* Mobile Hamburger Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-slate-700 hover:text-orange-500 transition-colors tap-highlight-transparent"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Search Bar (Mobile) */}
        <div className={`md:hidden px-4 pb-4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 h-0 overflow-hidden pb-0' : 'opacity-100'}`}>
          <div className="flex relative shadow-sm rounded-xl overflow-hidden border border-slate-200">
            <input
              type="text"
              className="w-full bg-slate-50 text-gray-900 pl-4 pr-10 py-3 focus:outline-none text-sm font-medium"
              placeholder="Search products..."
            />
            <button className="bg-orange-500 text-white px-5 py-3 flex items-center justify-center">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================
          EDIT PROFILE MODAL (Glassmorphism UX) 
          ========================================= */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsEditModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 md:p-8 transform transition-all animate-in fade-in zoom-in-95 duration-200">
            
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-5 right-5 text-slate-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <UserCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">Update Profile</h3>
              <p className="text-sm text-slate-500 font-medium mt-1">Choose a display name for your account.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-semibold"
                  placeholder="e.g. Mashru"
                />
              </div>

              <button 
                onClick={handleUpdateName}
                disabled={isUpdating || !newName.trim()}
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-orange-500 hover:shadow-orange-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center mt-2"
              >
                {isUpdating ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>Save Changes <Check className="w-4 h-4 ml-2" /></>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          MOBILE SIDEBAR (DRAWER)
          ========================================= */}
      
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-[0_0_50px_rgba(0,0,0,0.15)] transform transition-transform duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
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

        <div className="p-6 border-b border-gray-100 bg-white">
          {user ? (
            <div className="flex items-center space-x-4 relative">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-[0_4px_15px_rgba(37,99,235,0.3)]">
                {getInitials(user.displayName)}
              </div>
              <div className="flex-col overflow-hidden flex-1">
                <p className="text-sm font-bold text-gray-900 truncate">{user.displayName || 'Premium User'}</p>
                <p className="text-xs font-medium text-gray-500 truncate">{user.email}</p>
              </div>
              {/* Mobile Edit Icon */}
              <button onClick={() => {setIsEditModalOpen(true); setIsMobileMenuOpen(false);}} className="p-2 text-slate-400 hover:text-blue-600 bg-slate-50 rounded-full">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <p className="text-sm font-semibold text-slate-500 text-center">Welcome to your premium store</p>
              <Link 
                href="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 bg-slate-900 text-white font-bold text-center rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
              >
                Sign In / Register
              </Link>
            </div>
          )}
        </div>

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