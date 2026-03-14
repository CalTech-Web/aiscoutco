"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Clock, CheckCircle, Mail, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Get Started</motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Book a <span className="gradient-text">Discovery Call</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              A 30 to 60 minute conversation where I learn your workflows, identify automation opportunities, and show you what your business could look like with the right AI systems in place.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={fadeUp} className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <Brain size={24} className="text-blue-400 mb-3" />
              <h3 className="text-white font-bold mb-2">What happens on the call</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We spend 30 to 60 minutes walking through your daily and weekly workflows. I ask about what takes the most time, what falls through the cracks, and where you wish you had more help. By the end, I will have identified several areas where AI and automation can make an immediate impact.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
              <Clock size={24} className="text-cyan-400 mb-3" />
              <h3 className="text-white font-bold mb-2">What to expect</h3>
              <ul className="space-y-2">
                {[
                  "30 to 60 minute video call",
                  "No commitment required",
                  "Real insights you keep regardless",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                    <CheckCircle size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6">
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
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
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
                    <p className="text-slate-400 text-sm">Fill out the form below and I will reach out to schedule a time.</p>
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
                    <label className="block text-sm font-medium text-slate-300 mb-1.5">What are the biggest time sinks in your business?</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the manual, repetitive work your team handles. What takes the most time? What falls through the cracks?"
                      className="w-full rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-base transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request a Discovery Call
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-slate-500 text-xs text-center">
                    No spam. No commitment. I typically respond within one business day.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
