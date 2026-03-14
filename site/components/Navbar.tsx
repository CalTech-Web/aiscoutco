"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/case-study", label: "Case Study" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow duration-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" stroke="white" strokeWidth="1" />
            </svg>
          </div>
          <span className="text-lg font-bold logo-gradient">AI Scout Co</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Book a Discovery Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-b border-slate-800 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium py-2 transition-colors ${
                pathname === link.href ? "text-blue-400" : "text-slate-300 hover:text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold text-center transition-all duration-200"
            onClick={() => setMobileOpen(false)}
          >
            Book a Discovery Call
          </Link>
        </div>
      )}
    </header>
  );
}
