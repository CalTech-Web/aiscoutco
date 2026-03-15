import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] mt-auto relative overflow-hidden">
      {/* Gradient top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />
      <div className="h-px bg-gradient-to-r from-blue-500/0 via-cyan-400/80 via-purple-500/60 to-blue-500/0" />
      {/* Subtle background depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[280px] bg-blue-600/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" stroke="white" strokeWidth="1" />
                </svg>
              </div>
              <span className="text-lg font-bold logo-gradient">AI Scout Co</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              AI Scout Co helps businesses discover where AI and automation can save time, cut costs, and replace manual work, then builds the systems to make it happen.
            </p>
            <p className="text-slate-500 text-sm mt-4">
              Powered by{" "}
              <a
                href="https://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Caltechweb
              </a>
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-automation-consulting" className="text-slate-400 hover:text-white text-sm transition-colors">
                  AI Automation Consulting
                </Link>
              </li>
              <li>
                <Link href="/small-business" className="text-slate-400 hover:text-white text-sm transition-colors">
                  AI for Small Business
                </Link>
              </li>
              <li>
                <Link href="/business-process-automation" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Business Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/discovery" className="text-slate-400 hover:text-white text-sm transition-colors">
                  AI Discovery &amp; Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/build" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Custom AI Systems
                </Link>
              </li>
              <li>
                <Link href="/services/support" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Ongoing Support
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer company">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-study" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-800/50 mt-10 pt-8">
          {/* Mini pre-footer CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 rounded-xl border border-blue-500/15 bg-blue-500/5 px-5 py-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              <span className="text-white font-semibold">Ready to automate your business?</span>
              {" "}Free discovery call, no commitment.
            </p>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors btn-shimmer"
            >
              Book a Call
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Copyright row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; 2026 AI Scout Co. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
