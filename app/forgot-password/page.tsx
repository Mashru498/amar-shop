import React from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, KeyRound } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-orange-500 selection:text-white">
      
      {/* LEFT SIDE: Reset Password Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10 bg-white shadow-[20px_0_50px_rgba(0,0,0,0.03)] py-12">
        <div className="max-w-md w-full mx-auto">
          
          <Link href="/" className="text-3xl font-black tracking-tighter mb-12 inline-block">
            <span className="text-blue-600">Amar</span><span className="text-orange-500">Shop</span>
          </Link>

          <div className="w-14 h-14 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
            <KeyRound className="w-7 h-7 text-orange-500" />
          </div>

          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Forgot password?</h1>
          <p className="text-lg text-slate-500 font-medium mb-10 leading-relaxed">
            No worries, we'll send you reset instructions. Please enter the email address associated with your account.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="email" 
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent outline-none transition-all shadow-sm" 
                  placeholder="name@example.com" 
                  required
                />
              </div>
            </div>

            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center group shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5">
              Send Reset Link
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100">
            <Link href="/login" className="flex items-center justify-center text-slate-500 font-bold hover:text-slate-900 transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to login
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Ultra-Premium Image Banner (Local Image) */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-slate-900">
        <img 
          src="/images/forgot-bg.jpg" 
          alt="Secure Recovery" 
          className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>
      </div>

    </div>
  );
}