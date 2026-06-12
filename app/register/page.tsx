'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../lib/firebase';

export default function RegisterPage() {
  const router = useRouter();
  
  // স্টেট ম্যানেজমেন্ট
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // ফায়ারবেসে ইউজার তৈরি করা
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // ইউজারের নাম আপডেট করা
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name
        });
      }

      // সফলভাবে অ্যাকাউন্ট তৈরি হলে লগিন পেজে পাঠিয়ে দেওয়া
      router.push('/login');
    } catch (err: any) {
      console.error(err);
      // প্রফেশনাল এরর হ্যান্ডলিং
      if (err.code === 'auth/email-already-in-use') {
        setError('এই ইমেইল দিয়ে ইতোমধ্যে একটি অ্যাকাউন্ট খোলা হয়েছে।');
      } else if (err.code === 'auth/weak-password') {
        setError('পাসওয়ার্ডটি খুব দুর্বল। অন্তত ৬ অক্ষরের পাসওয়ার্ড দিন।');
      } else {
        setError('অ্যাকাউন্ট খুলতে কোনো একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-orange-500 selection:text-white">
      
      {/* LEFT SIDE: Register Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative z-10 bg-white shadow-[20px_0_50px_rgba(0,0,0,0.03)]">
        <div className="max-w-md w-full mx-auto mt-10 mb-10">
          
          <Link href="/" className="text-3xl font-black tracking-tighter mb-10 inline-block">
            <span className="text-blue-600">Amar</span><span className="text-orange-500">Shop</span>
          </Link>

          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Create an account</h1>
          <p className="text-lg text-slate-500 font-medium mb-8">Join our premium shopping experience today.</p>

          {/* এরর মেসেজ দেখানোর জায়গা */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-xl font-medium text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent outline-none transition-all" 
                  placeholder="John Doe" 
                />
              </div>
            </div>

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

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-medium focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent outline-none transition-all" 
                  placeholder="•••••••• (Min 6 characters)" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-600 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center group shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
            >
              {loading ? (
                <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Creating Account...</>
              ) : (
                <>Sign Up <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="relative flex items-center py-6">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-bold uppercase tracking-widest">Or sign up with</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="flex gap-4">
            <button className="w-1/2 flex items-center justify-center py-3.5 px-4 border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 shadow-sm">
              <img src="/images/google.svg" alt="Google" className="w-5 h-5 mr-2" /> Google
            </button>
            <button className="w-1/2 flex items-center justify-center py-3.5 px-4 border border-slate-200 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-slate-700 shadow-sm">
              <img src="/images/apple.svg" alt="Apple" className="w-5 h-5 mr-2" /> Apple
            </button>
          </div>

          <p className="mt-8 text-center text-slate-600 font-medium text-lg">
            Already have an account? <Link href="/login" className="text-blue-600 font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Ultra-Premium Image Banner */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-slate-900">
        <img 
          src="/images/register-bg.jpg" 
          alt="Premium Shopping Registration" 
          className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent"></div>
      </div>

    </div>
  );
}