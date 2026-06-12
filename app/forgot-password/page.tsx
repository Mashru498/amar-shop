'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function ForgotPasswordPage() {
  // স্টেট ম্যানেজমেন্ট
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // পাসওয়ার্ড রিসেট হ্যান্ডলার
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      // ফায়ারবেসের পাসওয়ার্ড রিসেট কমান্ড
      await sendPasswordResetEmail(auth, email);
      
      // সফল হলে সাকসেস মেসেজ দেখাবে
      setMessage('পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে। দয়া করে আপনার ইনবক্স (এবং স্প্যাম ফোল্ডার) চেক করুন।');
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/user-not-found') {
        setError('এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি।');
      } else if (err.code === 'auth/invalid-email') {
        setError('ইমেইল ঠিকানাটি সঠিক নয়।');
      } else {
        setError('লিংক পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-orange-500 selection:text-white">
      
      {/* LEFT SIDE: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10 bg-white shadow-[20px_0_50px_rgba(0,0,0,0.03)]">
        <div className="max-w-md w-full mx-auto">
          
          <Link href="/" className="text-3xl font-black tracking-tighter mb-10 inline-block">
            <span className="text-blue-600">Amar</span><span className="text-orange-500">Shop</span>
          </Link>

          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Forgot password?</h1>
          <p className="text-lg text-slate-500 font-medium mb-10">No worries, we'll send you reset instructions. Please enter the email address associated with your account.</p>

          {/* Success Message */}
          {message && (
            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-r-xl font-medium text-sm flex items-start">
              <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
              {message}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-xl font-medium text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent outline-none transition-all" 
                  placeholder="name@example.com" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center group shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.3)] hover:-translate-y-0.5"
            >
              {loading ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Link...</>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <Link href="/login" className="inline-flex items-center text-slate-600 font-medium text-lg hover:text-slate-900 transition-colors">
              <ArrowLeft className="mr-2 w-5 h-5" /> Back to log in
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Image Banner */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-slate-900">
        <img 
          src="/images/forgot-bg.jpg" 
          alt="Security Dashboard" 
          className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>
      </div>

    </div>
  );
}