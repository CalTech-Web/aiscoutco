"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Don't show on the contact page — user is already there
  if (pathname === "/contact") return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <Link
        href="/contact"
        className="group flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-xl shadow-blue-900/40 hover:shadow-blue-500/40 transition-all duration-200 btn-shimmer"
      >
        <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
          <Calendar size={14} />
        </span>
        Get a Free Automation Audit
      </Link>
    </div>
  );
}
