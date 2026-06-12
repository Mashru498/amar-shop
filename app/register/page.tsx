import React from 'react';
import Link from 'next/link';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-orange-500 selection:text-white">
      
      {/* LEFT SIDE: Register Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10 bg-white shadow-[20px_0_50px_rgba(0,0,0,0.03)] py-12">
        <div className="max-w-md w-full mx-auto">
          
          <Link href="/" className="text-3xl font-black tracking-tighter mb-8 inline-block">
            <span className="text-blue-600">Amar</span><span className="text-orange-500">Shop</span>
          </Link>

          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Create an account</h1>
          <p className="text-lg text-slate-500 font-medium mb-8">Start your premium shopping journey today.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input type="text" className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all" placeholder="John Doe" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input type="email" className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all" placeholder="name@example.com" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input type="password" className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all" placeholder="Create a strong password" />
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center group shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 mt-2">
              Create Account <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-xs text-slate-500 font-medium mt-6 text-center leading-relaxed">
            By creating an account, you agree to our <Link href="#" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>

          <p className="mt-8 text-center text-slate-600 font-medium text-lg pt-6 border-t border-slate-100">
            Already have an account? <Link href="/login" className="text-orange-500 font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Ultra-Premium Image Banner (Local Image) */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-slate-900">
        <img 
          src="/images/register-bg.jpg" 
          alt="Premium Devices" 
          className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>
      </div>

    </div>
  );
}