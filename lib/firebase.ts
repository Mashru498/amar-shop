import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// ফায়ারবেস থেকে কপি করা আপনার নিজস্ব কনফিগ ভ্যালুগুলো এখানে বসান
const firebaseConfig = {
  apiKey: "AIzaSyCrflDSTbBL_BMLB7LTy_OtLAdI0Fe8buM",
  authDomain: "amar-shop-5f9d1.firebaseapp.com",
  projectId: "amar-shop-5f9d1",
  storageBucket: "amar-shop-5f9d1.firebasestorage.app",
  messagingSenderId: "277316235922",
  appId: "1:277316235922:web:525c4a7cfced0280692c4b"
};

// Next.js-এ যাতে বারবার ডেটাবেস লোড না হয়, তার জন্য প্রফেশনাল সিঙ্গলটন (Singleton) প্যাটার্ন
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };