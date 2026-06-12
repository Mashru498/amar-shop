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
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg> 
              Google
            </button>
            <button className="w-1/2 flex items-center justify-center py-3.5 px-4 border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 shadow-sm">
              <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.86 3.59-.8 1.55.03 2.76.64 3.47 1.69-2.92 1.74-2.43 5.48.54 6.71-1.08 2.65-2.18 4.14-2.68 4.57zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg> Apple
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

      {/* RIGHT SIDE: Ultra-Premium Image Banner (Local Image) */}
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