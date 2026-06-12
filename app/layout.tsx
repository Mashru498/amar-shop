import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../src/components/Navbar";

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
        {children}
      </body>
    </html>
  );
}