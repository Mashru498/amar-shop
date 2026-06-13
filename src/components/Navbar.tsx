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
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ফায়ারবেস অথেন্টিকেশন
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.displayName) {
        setNewName(currentUser.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

  // ড্রপডাউন কন্ট্রোলার
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ==========================================
  // গ্লোবাল থিম লজিক (সকাল ৭টা - সন্ধ্যা ৭টা)
  // ==========================================
  useEffect(() => {
    const applyTheme = () => {
      const savedTheme = localStorage.getItem('amarshop-theme') || 'light';
      let activeTheme = savedTheme;
      
      if (savedTheme === 'auto') {
        const currentHour = new Date().getHours();
        // সকাল ৭টা (7) থেকে সন্ধ্যা ৭টা (19) পর্যন্ত লাইট মোড
        if (currentHour >= 7 && currentHour < 19) {
          activeTheme = 'light';
        } else {
          activeTheme = 'dark';
        }
      }

      const root = document.documentElement;
      if (activeTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();
    // প্রতি মিনিটে চেক করবে Auto মোড চেঞ্জ হবে কি না
    const intervalId = setInterval(applyTheme, 60000);
    
    // সেটিংস পেজ থেকে চেঞ্জ হলে সাথে সাথে আপডেট হওয়ার লজিক
    window.addEventListener('themeChange', applyTheme);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('themeChange', applyTheme);
    };
  }, []);

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

  const handleUpdateName = async () => {
    if (!newName.trim() || !auth.currentUser) return;
    setIsUpdating(true);
    try {
      await updateProfile(auth.currentUser, { displayName: newName });
      setUser({ ...auth.currentUser, displayName: newName });
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error updating name:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const getInitials = (name: string) => name ? name.charAt(0).toUpperCase() : 'U';

  const mobileLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Package },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-gray-100 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-3xl font-black tracking-tighter hover:opacity-80 transition-opacity">
                <span className="text-blue-600">Amar</span>
                <span className="text-orange-500">Shop</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 items-center justify-center px-10">
              <div className="w-full max-w-2xl flex relative shadow-sm rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-500/10 transition-all duration-300">
                <input
                  type="text"
                  className="w-full bg-slate-50/50 dark:bg-slate-800 text-gray-900 dark:text-white pl-5 pr-12 py-3 focus:outline-none text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-500"
                  placeholder="Search for products, brands and more..."
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transition-colors flex items-center justify-center">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Right Side Icons & Profile */}
            <div className="flex items-center space-x-5 md:space-x-8">
              
              {user ? (
                <div className="hidden md:flex relative" ref={dropdownRef}>
                  {/* Premium Avatar Button */}
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-center h-11 w-11 rounded-full bg-gradient-to-tr from-blue-600 to-orange-500 text-white font-black text-lg shadow-[0_4px_15px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 transition-all duration-300 border-2 border-white dark:border-slate-900 focus:outline-none"
                  >
                    {getInitials(user.displayName)}
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute right-0 top-14 w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-700 py-2 z-50 transform origin-top-right transition-all duration-300 ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                    
                    <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{user.displayName || 'Premium User'}</p>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate mt-0.5">{user.email}</p>
                    </div>

                    <div className="p-2 space-y-1">
                      <button 
                        onClick={() => { setIsEditModalOpen(true); setIsDropdownOpen(false); }}
                        className="w-full flex items-center px-3 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors group"
                      >
                        <Edit2 className="h-4 w-4 mr-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        Edit Profile Name
                      </button>

                      {/* Settings Page Link (No Modal) */}
                      <Link 
                        href="/settings"
                        onClick={() => setIsDropdownOpen(false)}
                        className="w-full flex items-center px-3 py-2.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-xl transition-colors group"
                      >
                        <Settings className="h-4 w-4 mr-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        Settings
                      </Link>
                    </div>

                    <div className="p-2 border-t border-slate-100 dark:border-slate-700">
                      <button 
                        onClick={handleLogout} 
                        className="w-full flex items-center px-3 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors group"
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
              <Link href="/cart" className="relative text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-colors group hidden md:flex">
                <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-2.5 -right-2.5 bg-orange-500 text-white text-[11px] font-black rounded-full h-5 w-5 flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm">
                  0
                </span>
              </Link>

              {/* Mobile Hamburger */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-colors tap-highlight-transparent"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Edit Profile Modal (Existing) */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsEditModalOpen(false)}></div>
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 md:p-8 transform transition-all animate-in fade-in zoom-in-95 duration-200">
            
            <button onClick={() => setIsEditModalOpen(false)} className="absolute top-5 right-5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 p-1.5 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                <UserCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Update Profile</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-3.5 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all font-semibold"
                  placeholder="e.g. Mashru"
                />
              </div>

              <button 
                onClick={handleUpdateName}
                disabled={isUpdating || !newName.trim()}
                className="w-full bg-slate-900 dark:bg-orange-500 text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-orange-500 dark:hover:bg-orange-600 transition-all disabled:opacity-70 flex items-center justify-center mt-2"
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

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-slate-900 z-[70] shadow-[0_0_50px_rgba(0,0,0,0.15)] transform transition-transform duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] md:hidden flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
          <span className="text-2xl font-black tracking-tighter">
            <span className="text-blue-600">Amar</span>
            <span className="text-orange-500">Shop</span>
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 bg-white dark:bg-slate-800 rounded-full text-gray-500 hover:text-red-500 shadow-sm transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 border-b border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          {user ? (
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4 relative">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-blue-600 to-orange-500 flex items-center justify-center text-white font-black text-xl shadow-[0_4px_15px_rgba(37,99,235,0.3)]">
                  {getInitials(user.displayName)}
                </div>
                <div className="flex-col overflow-hidden flex-1">
                  <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{user.displayName || 'Premium User'}</p>
                  <p className="text-xs font-medium text-gray-500 dark:text-slate-400 truncate">{user.email}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => {setIsEditModalOpen(true); setIsMobileMenuOpen(false);}} className="flex-1 flex items-center justify-center py-2 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 rounded-lg">
                  <Edit2 className="w-3.5 h-3.5 mr-1.5" /> Edit Profile
                </button>
                <Link href="/settings" onClick={() => setIsMobileMenuOpen(false)} className="flex-1 flex items-center justify-center py-2 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 rounded-lg">
                  <Settings className="w-3.5 h-3.5 mr-1.5" /> Settings
                </Link>
              </div>
            </div>
          ) : (
             <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-center rounded-xl shadow-lg">Sign In / Register</Link>
          )}
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {mobileLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-4 py-3.5 text-slate-700 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50/80 dark:hover:bg-slate-800 rounded-xl font-bold transition-all group">
              <link.icon className="h-5 w-5 mr-4 text-slate-400 group-hover:text-orange-500 transition-colors" />
              {link.name}
            </Link>
          ))}
        </div>

        {user && (
          <div className="p-5 border-t border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 mt-auto">
            <button onClick={handleLogout} className="w-full flex items-center justify-center py-3.5 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-900/30 text-red-600 font-bold rounded-xl hover:bg-red-50 transition-all shadow-sm">
              <LogOut className="h-5 w-5 mr-2" /> Secure Log Out
            </button>
          </div>
        )}
      </div>
    </>
  );
}