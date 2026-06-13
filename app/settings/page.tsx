'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Clock, Settings as SettingsIcon, MonitorSmartphone } from 'lucide-react';

export default function SettingsPage() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'auto'>('light');

  // পেজ লোড হলে আগের সেভ করা থিম লোড করবে
  useEffect(() => {
    const savedTheme = localStorage.getItem('amarshop-theme') as 'light' | 'dark' | 'auto';
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  // ==========================================
  // PRO-LEVEL INSTANT THEME CONTROLLER
  // ==========================================
  const handleThemeChange = (mode: 'light' | 'dark' | 'auto') => {
    setThemeMode(mode);
    localStorage.setItem('amarshop-theme', mode);
    
    // ম্যাজিক: ক্লিক করা মাত্রই পুরো ওয়েবসাইটের রুট ফাইলে থিম পুশ করা
    const root = document.documentElement;
    
    if (mode === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else if (mode === 'light') {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    } else {
      // Auto Logic: সকাল ৭টা থেকে সন্ধ্যা ৬:৫৯ পর্যন্ত সাদা, এরপর কালো
      const currentHour = new Date().getHours();
      if (currentHour >= 7 && currentHour < 19) {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      } else {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      }
    }
    
    // Navbar-কেও জানিয়ে দেওয়া যাতে সেও আপডেট হয়
    window.dispatchEvent(new Event('themeChange'));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 font-sans py-12 px-4 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        
        {/* Page Header */}
        <div className="flex items-center mb-10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center text-white mr-4 shadow-lg shadow-orange-500/30">
            <SettingsIcon className="w-6 h-6 animate-spin-slow" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">App Settings</h1>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">Manage your visual preferences and account experience.</p>
          </div>
        </div>

        {/* Theme Settings Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-800 transition-all duration-300">
          
          <div className="flex items-center mb-6">
            <MonitorSmartphone className="w-5 h-5 text-blue-500 mr-3" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Appearance (Theme)</h2>
          </div>
          
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-6">
            Customize the interface. The 'Auto' mode intelligently switches to Light mode from 7:00 AM to 6:59 PM, and Dark mode at night.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Light Theme Button */}
            <button 
              onClick={() => handleThemeChange('light')}
              className={`flex flex-col items-center justify-center py-6 rounded-2xl border-2 transition-all duration-300 ${themeMode === 'light' ? 'border-orange-500 bg-orange-50 dark:bg-orange-500/10 text-orange-600 scale-[1.02] shadow-md' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800'}`}
            >
              <Sun className={`w-8 h-8 mb-3 transition-colors ${themeMode === 'light' ? 'text-orange-500' : 'text-slate-400'}`} />
              <span className="text-sm font-bold">Light Mode</span>
              <span className="text-[10px] mt-1 opacity-70">Always bright</span>
            </button>

            {/* Dark Theme Button */}
            <button 
              onClick={() => handleThemeChange('dark')}
              className={`flex flex-col items-center justify-center py-6 rounded-2xl border-2 transition-all duration-300 ${themeMode === 'dark' ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10 text-blue-600 scale-[1.02] shadow-md' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800'}`}
            >
              <Moon className={`w-8 h-8 mb-3 transition-colors ${themeMode === 'dark' ? 'text-blue-500' : 'text-slate-400'}`} />
              <span className="text-sm font-bold">Dark Mode</span>
              <span className="text-[10px] mt-1 opacity-70">Always dark</span>
            </button>

            {/* Auto Theme Button */}
            <button 
              onClick={() => handleThemeChange('auto')}
              className={`flex flex-col items-center justify-center py-6 rounded-2xl border-2 transition-all duration-300 ${themeMode === 'auto' ? 'border-green-500 bg-green-50 dark:bg-green-500/10 text-green-600 scale-[1.02] shadow-md' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800'}`}
            >
              <Clock className={`w-8 h-8 mb-3 transition-colors ${themeMode === 'auto' ? 'text-green-500' : 'text-slate-400'}`} />
              <span className="text-sm font-bold">Auto (7AM-7PM)</span>
              <span className="text-[10px] mt-1 opacity-70">Syncs with time</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}