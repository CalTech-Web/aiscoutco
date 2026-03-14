import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Scout Co | Custom AI Systems & Automation",
  description: "AI Scout Co helps businesses discover where AI and automation can save time, cut costs, and replace manual work, then builds the systems to make it happen.",
  keywords: "AI automation, custom AI systems, business automation, AI consulting, agent orchestration",
  openGraph: {
    title: "AI Scout Co | Custom AI Systems & Automation",
    description: "If you can dream it, I build it. Book a free discovery call and find out where AI can transform your business.",
    url: "https://aiscoutco.com",
    siteName: "AI Scout Co",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0f172a] text-slate-100 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
