import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import BottomNav from "../src/components/BottomNav";
import Footer from "../src/components/Footer"; // নতুন ফুটার ইমপোর্ট করা হলো

export const metadata: Metadata = {
  title: "Amar Shop | Best E-commerce Platform",
  description: "Experience the most professional online shopping with Amar Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-orange-500 selection:text-white">
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* Footer & Mobile Bottom Navigation */}
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}