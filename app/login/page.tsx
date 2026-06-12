import React from 'react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-orange-500 selection:text-white">
      
      {/* LEFT SIDE: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10 bg-white shadow-[20px_0_50px_rgba(0,0,0,0.03)]">
        <div className="max-w-md w-full mx-auto">
          
          <Link href="/" className="text-3xl font-black tracking-tighter mb-10 inline-block">
            <span className="text-blue-600">Amar</span><span className="text-orange-500">Shop</span>
          </Link>

          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Welcome back</h1>
          <p className="text-lg text-slate-500 font-medium mb-10">Enter your details to access your premium account.</p>

          <div className="flex gap-4 mb-8">
            <button className="w-1/2 flex items-center justify-center py-3.5 px-4 border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 shadow-sm">
              <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" /> Google
            </button>
            <button className="w-1/2 flex items-center justify-center py-3.5 px-4 border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 shadow-sm">
              <img src="/apple.svg" alt="Apple" className="w-5 h-5 mr-2" /> Apple
            </button>
          </div>

          <div className="relative flex items-center py-5">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-bold uppercase tracking-widest">Or continue with email</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input type="email" className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-slate-900">Password</label>
                <Link href="/forgot-password" className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input type="password" className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent outline-none transition-all" placeholder="••••••••" />
              </div>
            </div>

            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center group shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              Sign In <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-center text-slate-600 font-medium text-lg">
            Don't have an account? <Link href="/register" className="text-blue-600 font-bold hover:underline">Create for free</Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Ultra-Premium Image Banner */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-slate-900">
        <img 
          src="/images/login-bg.jpg" 
          alt="Premium Shopping" 
          className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>
      </div>

    </div>
  );
}