import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export const metadata: Metadata = {
  title: "Amar Shop Pro | Best E-commerce Platform",
  description: "Experience the most professional online shopping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Vercel Cache Bypass & Instant Dark Mode Script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              const savedTheme = localStorage.getItem('amarshop-theme');
              const currentHour = new Date().getHours();
              let isDark = false;

              if (savedTheme === 'dark') {
                isDark = true;
              } else if (savedTheme === 'auto') {
                if (currentHour < 7 || currentHour >= 19) isDark = true;
              }

              if (isDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (_) {}
          `,
        }} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-slate-950 text-slate-900 dark:text-white antialiased transition-colors duration-300 selection:bg-orange-500 selection:text-white" suppressHydrationWarning>
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