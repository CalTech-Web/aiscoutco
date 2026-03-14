"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Zap, Brain, BarChart3, Clock, CheckCircle, ChevronRight } from "lucide-react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (end / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
                <Zap size={14} />
                AI Consulting &amp; Automation Systems
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              If you can dream it,
              <br />
              <span className="gradient-text">I build it.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-4 leading-relaxed"
            >
              The first step is for us to dream together.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-500 max-w-2xl mb-10 leading-relaxed"
            >
              AI Scout Co helps businesses discover where AI and automation can save time, cut costs, and replace manual work, then builds the custom systems to make it happen.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 blue-glow"
              >
                Book a Discovery Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 hover:bg-slate-800/50"
              >
                See a Real Case Study
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-3 rounded-full bg-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: 85000, prefix: "$", suffix: "+/yr", label: "Savings per client" },
              { value: 7, suffix: "+", label: "New features delivered" },
              { value: 20, suffix: "+", label: "Manual hours eliminated weekly" },
              { value: 99, suffix: ".9%", label: "System uptime" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Real Results</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-4">
              Proof it works
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl max-w-2xl mx-auto">
              One client. Six weeks. A complete transformation of how their business operates.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-slate-700/50 bg-slate-900/50 overflow-hidden card-hover"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5" />
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">SEO Agency</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">6 Weeks</span>
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 text-white">DiamondLinks</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    A key employee managing all client reporting and proposal creation requested a 25% raise after receiving an outside offer. Instead of paying more, DiamondLinks partnered with AI Scout Co to automate everything, and ended up with a system far more capable than any single employee.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      "Eliminated $85,000+/year salary",
                      "7 new features added",
                      "Reports generated in seconds",
                      "Proposals auto-delivered before meetings",
                      "Zero manual intervention required",
                      "Beautiful, branded client dashboards",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/case-study"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Read the Full Case Study
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="lg:w-72 flex flex-col gap-4">
                  <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-5">
                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Challenge</div>
                    <div className="text-white font-medium text-sm">Key employee departure threatened all reporting and proposals</div>
                  </div>
                  <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-5">
                    <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Timeline</div>
                    <div className="text-4xl font-extrabold gradient-text">6 weeks</div>
                    <div className="text-slate-400 text-sm">from discovery to deployment</div>
                  </div>
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                    <div className="text-emerald-400 text-xs uppercase tracking-wider mb-1">Result</div>
                    <div className="text-white font-medium text-sm">Fully automated system with 7 new capabilities and $85,000+/year in savings</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 rounded-2xl border border-slate-700/30 bg-slate-900/30 p-8 md:p-10"
          >
            <div className="flex gap-4 items-start">
              <div className="text-5xl text-blue-400/30 font-serif leading-none mt-1">&ldquo;</div>
              <div>
                <p className="text-slate-300 text-lg leading-relaxed italic mb-4">
                  We were about to give a key employee a 25% raise just to keep them. Instead, Brandon built us a system that not only replaced every function that employee handled but added seven new capabilities we never had before. Our reports went from bland Google Docs to stunning automated dashboards, and proposals practically write themselves now.
                </p>
                <div className="text-slate-500 text-sm font-medium">DiamondLinks Leadership</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Overview */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">The Process</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-4">
              Simple for you,<br />
              <span className="gradient-text">specialized from us</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl max-w-2xl mx-auto">
              You describe what you want your business to look like. I figure out the autonomous agents, API orchestration, and custom workflows to make it real.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
            {[
              { icon: <Brain size={24} />, step: "01", title: "Discovery Call", desc: "We map your workflows and find every opportunity for AI and automation to save you time and money." },
              { icon: <BarChart3 size={24} />, step: "02", title: "Opportunity Map", desc: "You receive a ranked plan with ROI projections and a clear implementation timeline." },
              { icon: <Zap size={24} />, step: "03", title: "Build & Deploy", desc: "I architect autonomous agent systems, API integrations, and intelligent workflows custom to your business." },
              { icon: <CheckCircle size={24} />, step: "04", title: "Launch & Train", desc: "Systems go live and I walk your team through everything for a seamless transition." },
              { icon: <Clock size={24} />, step: "05", title: "Optimize & Evolve", desc: "As your business grows, I keep refining your systems and adding new capabilities." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl border border-slate-700/50 bg-slate-900/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  {item.icon}
                </div>
                <div className="text-xs font-bold text-blue-500/60 tracking-widest mb-2">{item.step}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ChevronRight size={20} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Learn more about the process
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3">Capabilities</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-4">
              What I build
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: "🤖",
                title: "Autonomous Agent Systems",
                desc: "Multi-agent orchestration with specialized sub-agents that handle complex workflows end-to-end without human intervention. Each agent has defined skills and token budgets.",
              },
              {
                icon: "🔗",
                title: "API & Webhook Integrations",
                desc: "Connect AI to your existing tools, Monday.com, Google Workspace, Salesforce, Slack, and more, through custom API and webhook architectures.",
              },
              {
                icon: "📊",
                title: "Automated Reporting",
                desc: "Real-time data pipelines that pull from multiple sources, process through intelligent agents, and deliver polished reports automatically.",
              },
              {
                icon: "📄",
                title: "Document Generation",
                desc: "Intelligent proposal and document creation that pulls from call recordings, email threads, and databases to produce custom outputs with smart fallback logic.",
              },
              {
                icon: "🌐",
                title: "Client Portal Applications",
                desc: "Secure web applications with SSO/OAuth authentication where your clients can access dashboards, reports, and account information.",
              },
              {
                icon: "⚙️",
                title: "Workflow Automation",
                desc: "End-to-end process automation that eliminates the manual, repetitive work your team handles every day, freeing them for higher-value tasks.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 rounded-2xl border border-slate-700/50 bg-slate-900/50 card-hover"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to find out what<br />
              <span className="gradient-text">AI can do for your business?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
              Book a free 30 to 60 minute discovery call. I&apos;ll identify where automation can make an immediate impact and show you exactly what it would look like.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 blue-glow"
              >
                Book a Free Discovery Call
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-500 text-sm mt-6">
              No commitment. No sales pitch. Just a conversation about what&apos;s possible.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
