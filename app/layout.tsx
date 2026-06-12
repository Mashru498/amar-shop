import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import BottomNav from "../src/components/BottomNav"; // নতুন যোগ করা হলো

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
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        
        {/* মোবাইলে বটম বারের জন্য নিচে স্পেস (pb-16) যোগ করা হলো */}
        <main className="flex-grow pb-16 md:pb-0 relative z-10">
          {children}
        </main>

        <BottomNav /> {/* নতুন যোগ করা হলো */}
      </body>
    </html>
  );
}