"use client";

import { useState } from "react";
import { ArrowRight, Brain, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
        body: JSON.stringify({ ...formData, company: "", industry: "" }),
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
            Walk away knowing exactly <span className="gradient-text">what AI can save your business</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            One free 30-minute call. I map every place AI can cut costs in your business and attach real dollar savings to each one. You keep the roadmap, no strings attached.
          </p>
          <p className="text-amber-400 text-sm font-semibold mt-4">I take on 3 to 5 new clients per month. {["January","February","March","April","May","June","July","August","September","October","November","December"][new Date().getMonth()]} spots are available now.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <CheckCircle size={24} className="text-emerald-400 mb-3" />
              <h3 className="text-white font-bold mb-2">What you&apos;ll walk away with</h3>
              <ul className="space-y-2">
                {[
                  "Personalized automation map with ROI estimates",
                  "Priority list of what to automate first",
                  "Real numbers, not vague promises",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <Brain size={24} className="text-blue-400 mb-3" />
              <h3 className="text-white font-bold mb-2">30 minutes that change how you work</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We walk through your workflows together. I ask what takes the most time, what falls through the cracks, and where you wish you had more help. By the end, you&apos;ll have a clear picture of exactly what AI can automate and what each automation is worth in real dollars.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
              <CheckCircle size={24} className="text-amber-400 mb-3" />
              <h3 className="text-white font-bold mb-2">My guarantee</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                If I can&apos;t find at least 3 automation wins in your business, I&apos;ll say so. You walk away with honest insights either way. No pitch, no pressure.
              </p>
            </div>

            <p className="text-slate-500 text-xs text-center">
              Prefer email?{" "}
              <a href="mailto:brandon@aiscoutco.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                brandon@aiscoutco.com
              </a>
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">You&apos;re on my list.</h3>
                  <p className="text-slate-400 leading-relaxed max-w-sm mx-auto mb-6">
                    I&apos;ll reach out same day to schedule your call. While you wait, see exactly what&apos;s possible.
                  </p>
                  <a
                    href="/case-study"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                  >
                    Read the DiamondLinks Case Study
                    <ArrowRight size={14} />
                  </a>
                  <p className="text-slate-600 text-xs mt-6">$85,000+/year saved. 7 new capabilities delivered. 6 weeks.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-2xl font-extrabold text-white mb-1">Get your free automation roadmap</h2>
                    <p className="text-slate-400 text-sm">Takes about 2 minutes. I typically respond same day to schedule your 30 to 60 minute call.</p>
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

                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">Anything you&apos;d like me to know? <span className="text-slate-500 font-normal">(Optional)</span></label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What takes the most time in your business? Even one sentence helps me prepare."
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
                      <span className="text-slate-500 not-italic ml-1">— Hilary Spross, DiamondLinks</span>
                      <span className="block text-slate-600 not-italic mt-0.5">$85,000+/year saved. 6 weeks.</span>
                    </p>
                  </div>

                  <p className="text-amber-400/80 text-xs font-medium text-center">I take on 3 to 5 new clients per month. {["January","February","March","April","May","June","July","August","September","October","November","December"][new Date().getMonth()]} spots are available now.</p>
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
                        Get My Free Automation Roadmap
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
                    Typically same day. No commitment, no obligation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
