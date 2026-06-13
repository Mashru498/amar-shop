import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer"; 

export const metadata: Metadata = {
  title: "Amar Shop Pro | Best E-commerce Platform",
  description: "Experience the most professional online shopping with Amar Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* ম্যাজিক: বডিতে dark:bg-slate-950 এবং dark:text-white যুক্ত করা হয়েছে */}
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-white antialiased transition-colors duration-500 selection:bg-orange-500 selection:text-white">
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}