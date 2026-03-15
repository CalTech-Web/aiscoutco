"use client";

import { useState } from "react";
import { ArrowRight, Brain, Clock, CheckCircle, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl animate-blob-alt" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Free Discovery Call</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Find your automation <span className="gradient-text">opportunities for free</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            In 30 to 60 minutes, you&apos;ll have a personalized map of every place AI can save you time and money, with real ROI projections. No technical knowledge required.
          </p>
          <p className="text-amber-400 text-sm font-semibold mt-4">Currently accepting new clients for April 2026. Spots are limited.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <Brain size={24} className="text-blue-400 mb-3" />
              <h3 className="text-white font-bold mb-2">What happens on the call</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We spend 30 to 60 minutes walking through your daily and weekly workflows. I ask about what takes the most time, what falls through the cracks, and where you wish you had more help. By the end, I will have identified several areas where AI and automation can make an immediate impact.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
              <Clock size={24} className="text-cyan-400 mb-3" />
              <h3 className="text-white font-bold mb-2">What you&apos;ll walk away with</h3>
              <ul className="space-y-2">
                {[
                  "Personalized opportunity map with ROI estimates",
                  "Priority list of what to automate first",
                  "No commitment, no sales pressure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
              <MessageSquare size={24} className="text-purple-400 mb-3" />
              <h3 className="text-white font-bold mb-2">Prefer email?</h3>
              <p className="text-slate-400 text-sm mb-3">Reach out directly and I will get back to you within one business day.</p>
              <a
                href="mailto:brandon@aiscoutco.com"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors flex items-center gap-1"
              >
                <Mail size={14} />
                brandon@aiscoutco.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">Request received!</h3>
                  <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
                    I will be in touch within one business day to schedule your discovery call. Looking forward to learning about your business.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white mb-1">Book your discovery call</h2>
                    <p className="text-slate-400 text-sm">Takes about 2 minutes. I&apos;ll respond within one business day to schedule your call.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Your name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Work email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Company name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">Industry</label>
                      <input
                        type="text"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        placeholder="e.g. SEO Agency, Healthcare"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-0.5">What are the biggest time sinks in your business?</label>
                    <p className="text-slate-500 text-xs mb-1.5">This helps me prepare so we can make the most of our time together. Even a sentence or two is helpful.</p>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the manual, repetitive work your team handles. What takes the most time? What falls through the cracks?"
                      className="w-full rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 flex items-start gap-3">
                    <div className="flex-shrink-0 flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b" className="text-amber-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      ))}
                    </div>
                    <p className="text-slate-300 text-xs leading-snug italic">
                      &ldquo;Brandon built us a system that replaced every function and added seven new capabilities we never had before.&rdquo;
                      <span className="text-slate-500 not-italic ml-1">— DiamondLinks Leadership</span>
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-base transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Claim My Free Discovery Call
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  {error && (
                    <p className="text-red-400 text-xs text-center">
                      Something went wrong. Please email me directly at{" "}
                      <a href="mailto:brandon@aiscoutco.com" className="underline hover:text-red-300">brandon@aiscoutco.com</a>.
                    </p>
                  )}
                  <p className="text-slate-500 text-xs text-center">
                    If I can&apos;t find at least 3 automation opportunities in your business, I&apos;ll tell you straight. No pitch, no pressure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* What happens next */}
        <div className="mt-16">
          <p className="text-center text-slate-500 text-xs uppercase tracking-widest font-semibold mb-10">
            What happens next
          </p>
          <div className="relative flex items-start justify-between max-w-2xl mx-auto px-4">
            {/* Connecting line */}
            <div className="absolute top-5 left-12 right-12 h-px bg-gradient-to-r from-blue-500/30 via-cyan-500/30 via-purple-500/30 to-emerald-500/30" />
            {[
              { icon: <Mail size={16} />, label: "You submit the form", color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-500/30" },
              { icon: <MessageSquare size={16} />, label: "I respond within 1 business day", color: "text-cyan-400", bg: "bg-cyan-500/20", border: "border-cyan-500/30" },
              { icon: <Clock size={16} />, label: "We schedule your call", color: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-500/30" },
              { icon: <CheckCircle size={16} />, label: "You get real insights", color: "text-emerald-400", bg: "bg-emerald-500/20", border: "border-emerald-500/30" },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3 z-10 flex-1">
                <div className={`w-10 h-10 rounded-full ${step.bg} border ${step.border} flex items-center justify-center ${step.color} bg-slate-950`}>
                  {step.icon}
                </div>
                <p className="text-slate-400 text-xs text-center leading-snug max-w-[80px]">{step.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
