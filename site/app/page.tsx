"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Brain, BarChart3, Clock, CheckCircle, ChevronRight, Bot, Link2, FileText, Globe, Settings2, Star, TrendingUp, Briefcase, Building2, Activity, ShoppingCart, Layers, ChevronDown } from "lucide-react";

function useInViewOnce() {
  const ref = useRef<Element>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, inView] = useInViewOnce();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ end, suffix = "", prefix = "", decimal = "" }: { end: number; suffix?: string; prefix?: string; decimal?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          if (animatedRef.current) return;
          animatedRef.current = true;
          let current = 0;
          const duration = 2000;
          const step = (end / duration) * 16;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{decimal}{suffix}
    </span>
  );
}

const heroParticles = [
  { left: "10%", top: "18%", size: 3, delay: "0s", dur: "12s" },
  { left: "22%", top: "62%", size: 2, delay: "-3.2s", dur: "15s" },
  { left: "38%", top: "12%", size: 4, delay: "-7s", dur: "10s" },
  { left: "52%", top: "78%", size: 2, delay: "-1.5s", dur: "13s" },
  { left: "68%", top: "32%", size: 3, delay: "-5.5s", dur: "11s" },
  { left: "83%", top: "55%", size: 4, delay: "-9s", dur: "14s" },
  { left: "14%", top: "44%", size: 2, delay: "-2.2s", dur: "16s" },
  { left: "58%", top: "8%", size: 3, delay: "-6.3s", dur: "12s" },
  { left: "28%", top: "88%", size: 2, delay: "-4.1s", dur: "15s" },
  { left: "74%", top: "68%", size: 3, delay: "-8.7s", dur: "10s" },
  { left: "6%", top: "72%", size: 2, delay: "-11s", dur: "13s" },
  { left: "91%", top: "22%", size: 3, delay: "-3.8s", dur: "11s" },
  { left: "44%", top: "48%", size: 2, delay: "-7.4s", dur: "14s" },
  { left: "19%", top: "4%", size: 3, delay: "-1.9s", dur: "16s" },
  { left: "79%", top: "82%", size: 4, delay: "-9.6s", dur: "12s" },
];

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {heroParticles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            left: p.left,
            top: p.top,
            background: i % 3 === 0 ? "rgba(59,130,246,0.6)" : i % 3 === 1 ? "rgba(6,182,212,0.6)" : "rgba(139,92,246,0.6)",
            animation: `float-particle ${p.dur} ease-in-out infinite ${p.delay}`,
          }}
        />
      ))}
    </div>
  );
}

type TerminalLine = {
  text: string;
  color: string;
  delay: number;
};

const terminalSequence: TerminalLine[] = [
  { text: "> Connecting to workflow: client_operations.json", color: "text-slate-400", delay: 0 },
  { text: "✓ Connected. Scanning 47 active processes...", color: "text-blue-400", delay: 700 },
  { text: "> Identifying automation opportunities...", color: "text-slate-400", delay: 1500 },
  { text: "✓ Found: 12 steps eligible for AI automation", color: "text-cyan-400", delay: 2300 },
  { text: "> Calculating ROI projections...", color: "text-slate-400", delay: 3200 },
  { text: "✓ Estimated savings: $85,000+/year", color: "text-emerald-400", delay: 4000 },
  { text: "✓ Manual hours eliminated: 20+/week", color: "text-emerald-400", delay: 4600 },
  { text: "> Deploying autonomous agent pipeline...", color: "text-slate-400", delay: 5500 },
  { text: "✓ Agent status: Running | Uptime: 99.9%", color: "text-blue-400", delay: 6400 },
  { text: "✓ Build complete. 6 weeks to production.", color: "text-purple-400", delay: 7200 },
];

function AgentTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const startSequence = useCallback(() => {
    setVisibleLines(0);
    setTypedChars(0);
    timerRefs.current.forEach(clearTimeout);
    timerRefs.current = [];

    terminalSequence.forEach((line, i) => {
      const t1 = setTimeout(() => {
        setVisibleLines(i + 1);
        setTypedChars(0);
        let chars = 0;
        const typeTimer = setInterval(() => {
          chars++;
          setTypedChars(chars);
          if (chars >= line.text.length) clearInterval(typeTimer);
        }, 18);
        timerRefs.current.push(typeTimer as unknown as ReturnType<typeof setTimeout>);
      }, line.delay);
      timerRefs.current.push(t1);
    });

    const resetTimer = setTimeout(() => {
      startSequence();
    }, terminalSequence[terminalSequence.length - 1].delay + 3500);
    timerRefs.current.push(resetTimer);
  }, []);

  useEffect(() => {
    if (inView) {
      startSequence();
    } else {
      timerRefs.current.forEach(clearTimeout);
    }
    return () => timerRefs.current.forEach(clearTimeout);
  }, [inView, startSequence]);

  return (
    <div ref={ref} className="w-full max-w-xl mx-auto mt-12">
      <div
        className="rounded-xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-blue-900/20"
      >
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50 bg-slate-800/60">
          <div className="w-3 h-3 rounded-full bg-rose-500/70" />
          <div className="w-3 h-3 rounded-full bg-amber-500/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
          <span className="ml-2 text-slate-500 text-xs font-mono">ai-scout-agent</span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-mono">running</span>
          </span>
        </div>
        {/* Terminal body */}
        <div className="p-4 font-mono text-xs leading-relaxed min-h-[200px]">
          {terminalSequence.slice(0, visibleLines).map((line, i) => {
            const isCurrentLine = i === visibleLines - 1;
            const displayText = isCurrentLine ? line.text.slice(0, typedChars) : line.text;
            return (
              <div key={i} className={`${line.color} mb-1`}>
                {displayText}
                {isCurrentLine && typedChars < line.text.length && (
                  <span className="inline-block w-1.5 h-3 bg-current ml-0.5 animate-pulse align-middle" />
                )}
              </div>
            );
          })}
          {visibleLines === 0 && (
            <span className="text-slate-600 text-xs">Initializing...</span>
          )}
        </div>
      </div>
    </div>
  );
}

const integrations = [
  { name: "Monday.com", color: "text-orange-400" },
  { name: "Google Workspace", color: "text-blue-400" },
  { name: "OpenAI / Claude", color: "text-emerald-400" },
  { name: "Salesforce", color: "text-cyan-400" },
  { name: "HubSpot", color: "text-orange-300" },
  { name: "Slack", color: "text-purple-400" },
  { name: "Vercel / Next.js", color: "text-slate-300" },
  { name: "Resend / SendGrid", color: "text-blue-300" },
  { name: "Google Meet", color: "text-green-400" },
  { name: "Webhooks", color: "text-cyan-300" },
  { name: "OAuth / SSO", color: "text-purple-300" },
  { name: "Custom APIs", color: "text-blue-400" },
];

function IntegrationsMarquee() {
  const doubled = [...integrations, ...integrations];
  return (
    <div className="relative overflow-hidden py-6 border-y border-slate-800/40 bg-slate-900/20">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
      <div className="text-center mb-4">
        <span className="text-slate-500 text-xs uppercase tracking-widest font-medium">Works with the tools you already use</span>
      </div>
      <div className="animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-3 px-6 flex-shrink-0">
            <span className={`${item.color} text-sm font-semibold whitespace-nowrap`}>{item.name}</span>
            <span className="text-slate-700 text-lg">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "What does it cost?",
    a: "Every project is custom scoped based on your discovery call. I provide transparent pricing with clear ROI projections so you can see exactly what you're getting and what it's worth to your business. Most clients see a return within the first 60 days.",
  },
  {
    q: "What does a discovery call look like?",
    a: "We spend 30 to 60 minutes walking through your daily and weekly workflows. I ask about what takes the most time, what falls through the cracks, and where you wish you had more help. By the end, I'll have identified several areas where AI and automation can make an immediate impact.",
  },
  {
    q: "Do I need to understand AI to work with you?",
    a: "Not at all. My job is to understand the technical complexity so you don't have to. You tell me what you want your work and life to look like, and I figure out how to build it.",
  },
  {
    q: "How long does it take to build a system?",
    a: "It depends on the scope. Simple automations can be live in a week. More complex multi-agent systems with integrations typically take 4 to 8 weeks. I'll give you a clear timeline during the discovery process.",
  },
  {
    q: "Will this replace my employees?",
    a: "Not necessarily. In many cases, automation handles the repetitive work so your team can focus on higher value tasks. In other cases, like the DiamondLinks case study, automation can fully replace a role and deliver even more capability than the previous employee provided.",
  },
  {
    q: "Is my business too small or too large for this?",
    a: "Neither. What matters isn't the size of your company, it's whether your team does manual, repetitive work. A business with two employees doing the same data entry every week is a perfect fit. So is a company with fifty people losing hours to manual reporting every month.",
  },
  {
    q: "Can I see a demo or example?",
    a: "Absolutely. The DiamondLinks case study on this site includes before and after screenshots and a full breakdown of what was built. During your discovery call, I can also walk you through examples relevant to your industry.",
  },
  {
    q: "Why can't I just use ChatGPT, Zapier, or Make?",
    a: "ChatGPT and tools like Zapier are great for simple, one-step tasks. But the businesses I work with have workflows with 10, 15, or 20 interconnected steps, data coming from multiple sources, edge cases that break simple automations, and outputs that need to match their specific standards. What I build are multi-agent systems that orchestrate entire workflows from start to finish, make intelligent decisions at each step, and run without anyone touching them. Most clients have already experimented with these tools and hit their ceiling. The discovery call is where we figure out what actually needs to be built.",
  },
];

const faqNodes: Record<number, React.ReactNode> = {
  0: (
    <span>
      Every project is custom scoped based on your discovery call. I provide transparent pricing with clear ROI projections so you can see exactly what you&apos;re getting and what it&apos;s worth to your business. Most clients see a return within the first 60 days.{" "}
      <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Get your free automation audit to see a custom estimate.</Link>
    </span>
  ),
  2: (
    <span>
      Not at all. My job is to understand the technical complexity so you don&apos;t have to. You tell me what you want your work and life to look like, and I figure out how to build it.{" "}
      <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Book a free call to get started.</Link>
    </span>
  ),
  3: (
    <span>
      It depends on the scope. Simple automations can be live in a week. More complex multi-agent systems with integrations typically take 4 to 8 weeks.{" "}
      <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Book a free call and I&apos;ll give you a clear timeline for your specific workflow.</Link>
    </span>
  ),
  4: (
    <span>
      Not necessarily. In many cases, automation handles the repetitive work so your team can focus on higher value tasks. In other cases, like the{" "}
      <Link href="/case-study" className="text-blue-400 hover:text-blue-300 transition-colors">DiamondLinks case study</Link>
      , automation can fully replace a role and deliver even more capability than the previous employee provided.
    </span>
  ),
  5: (
    <span>
      Neither. What matters isn&apos;t the size of your company, it&apos;s whether your team does manual, repetitive work. A business with two employees doing the same data entry every week is a perfect fit. So is a company with fifty people losing hours to manual reporting every month.{" "}
      <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Book a free call and find out what applies to you.</Link>
    </span>
  ),
  6: (
    <span>
      Absolutely. The{" "}
      <Link href="/case-study" className="text-blue-400 hover:text-blue-300 transition-colors">DiamondLinks case study</Link>
      {" "}on this site includes before and after screenshots and a full breakdown of what was built. During your discovery call, I can also walk you through examples relevant to your industry.
    </span>
  ),
  7: (
    <span>
      ChatGPT and tools like Zapier are great for simple, one-step tasks. But the businesses I work with have workflows with 10, 15, or 20 interconnected steps, data coming from multiple sources, edge cases that break simple automations, and outputs that need to match their specific standards. What I build are multi-agent systems that orchestrate entire workflows from start to finish, make intelligent decisions at each step, and run without anyone touching them. Most clients have already experimented with these tools and hit their ceiling.{" "}
      <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">The discovery call is where we map out what actually needs to be built.</Link>
    </span>
  ),
};

const webpageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://aiscoutco.com/",
  name: "AI Scout Co | Custom AI Systems & Automation",
  url: "https://aiscoutco.com",
  isPartOf: { "@id": "https://aiscoutco.com/#website" },
  about: { "@id": "https://aiscoutco.com/#organization" },
  description:
    "AI Scout Co helps businesses discover where AI and automation can save time, cut costs, and replace manual work, then builds the custom systems to make it happen.",
  inLanguage: "en-US",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};


function ROICalculator() {
  const [employees, setEmployees] = useState(2);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(35);

  const annualSavings = Math.round(employees * hoursPerWeek * hourlyCost * 52 * 0.7);

  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <FadeUp delay={0}><p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">Quick Estimate</p></FadeUp>
          <FadeUp delay={150}><h2 className="text-4xl md:text-5xl font-extrabold mb-4">What is manual work costing you?</h2></FadeUp>
          <FadeUp delay={300}><p className="text-slate-400 text-xl max-w-2xl mx-auto">Move the sliders to see your estimated annual savings from automation.</p></FadeUp>
        </div>

        <FadeUp delay={150}>
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-slate-300 text-sm font-medium">Employees on repetitive work</label>
                  <span className="text-white font-bold text-lg">{employees}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-slate-600 text-xs mt-1"><span>1</span><span>20</span></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-slate-300 text-sm font-medium">Manual hours per employee/week</label>
                  <span className="text-white font-bold text-lg">{hoursPerWeek} hrs</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-slate-600 text-xs mt-1"><span>2 hrs</span><span>40 hrs</span></div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-slate-300 text-sm font-medium">Average hourly cost</label>
                  <span className="text-white font-bold text-lg">${hourlyCost}/hr</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-slate-600 text-xs mt-1"><span>$15</span><span>$150</span></div>
              </div>
            </div>

            <div className="text-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 mb-8">
              <p className="text-slate-400 text-sm mb-2">What manual work is costing your business each year</p>
              <div className="text-5xl md:text-6xl font-extrabold gradient-text mb-2">
                ${annualSavings.toLocaleString()}+/yr
              </div>
              <p className="text-slate-500 text-xs">Conservative estimate based on real automation results. Your free audit gives you the exact number.</p>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 btn-shimmer"
              >
                Claim My Free ${annualSavings.toLocaleString()}+ Roadmap
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="text-slate-500 text-xs mt-3">Free 30-min call. No commitment required.</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function QuickCaptureForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ name, email, message: "", company: "", industry: "" }),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={24} className="text-emerald-400" />
        </div>
        <p className="text-white font-bold text-xl mb-2">You&apos;re on my list.</p>
        <p className="text-slate-400 text-sm">I&apos;ll reach out same day to schedule your call.</p>
        <p className="text-slate-500 text-xs mt-3 mb-2">While you wait:</p>
        <Link href="/case-study" className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
          Read the DiamondLinks case study <ArrowRight size={14} />
        </Link>
        <p className="text-slate-600 text-xs mt-3">$85,000+/year saved. 7 new capabilities. 6 weeks.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="flex-1 rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          className="flex-1 rounded-xl border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 blue-glow btn-shimmer"
      >
        {loading ? (
          <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
        ) : (
          <>
            Get My Free Automation Audit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
      {error && (
        <p className="text-red-400 text-xs text-center">
          Something went wrong. <a href="mailto:brandon@aiscoutco.com" className="underline hover:text-red-300">Email me directly.</a>
        </p>
      )}
    </form>
  );
}

function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/97 backdrop-blur-sm border-t border-slate-700/60 px-4 py-3 flex items-center gap-3 shadow-2xl shadow-black/50">
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors btn-shimmer"
      >
        Get My Free Automation Audit
        <ArrowRight size={16} />
      </Link>
      <button
        onClick={() => { setDismissed(true); setVisible(false); }}
        className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors text-lg"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-700/50 rounded-2xl overflow-hidden bg-slate-900/50 transition-colors duration-200 hover:border-blue-500/30">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-base group-hover:text-blue-300 transition-colors">{question}</span>
        <span
          className="flex-shrink-0 text-slate-400 group-hover:text-blue-400 transition-colors"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      <div
        className="overflow-hidden"
        style={{
          maxHeight: open ? "600px" : "0",
          opacity: open ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [spotlightVisible, setSpotlightVisible] = useState(false);

  const handleHeroMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setSpotlightVisible(true);
  }, []);

  const handleHeroMouseLeave = useCallback(() => {
    setSpotlightVisible(false);
  }, []);

  return (
    <div className="min-h-screen">
      <MobileStickyBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        {/* Background */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 radial-glow" />
        {/* Mouse spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: spotlightVisible ? 1 : 0,
            transition: "opacity 0.4s ease",
            background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.10) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)`,
          }}
        />
        <div className="absolute top-[25vh] left-[25vw] w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[25vh] right-[25vw] w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-blob-alt" />
        <FloatingParticles />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
                <Zap size={14} />
                AI Consulting &amp; Automation Systems
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              If you can dream it,
              <br />
              <span className="gradient-text">I build it.</span>
            </h1>

            <p className="text-xl md:text-2xl mb-3">
              <span className="gradient-text font-bold">$85,000+/year</span>
              <span className="text-slate-400"> saved. </span>
              <span className="gradient-text font-bold">20+ hours/week</span>
              <span className="text-slate-400"> back. Built in 6 weeks.</span>
            </p>

            <p className="text-lg text-slate-400 max-w-2xl mb-6 leading-relaxed">
              Your team is losing hours every week to manual work that never changes. In 30 minutes, I find every automation opportunity in your business and show you the exact dollar savings. Walk away with a concrete plan, no strings attached.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 blue-glow btn-shimmer"
              >
                Get My Free Automation Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#case-study"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 hover:bg-slate-800/50"
              >
                See $85K Saved in 6 Weeks
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="flex items-center gap-3 mt-5 px-5 py-3 rounded-xl border border-slate-700/50 bg-slate-900/60 max-w-md mx-auto">
              <div className="flex-shrink-0 flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <p className="text-slate-400 text-xs leading-snug italic">
                &ldquo;We were about to give a 25% raise to keep an employee. Brandon automated the role in 6 weeks and gave us 7 capabilities we never had.&rdquo;
                <span className="text-slate-500 not-italic ml-1">— DiamondLinks Leadership</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5">
              {[
                "Free 30-60 min call",
                "Walk away with a prioritized roadmap",
                "Keep the roadmap regardless",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <CheckCircle size={12} />
              Guaranteed: I find 3+ automation opportunities or I tell you straight. No pitch, no pressure.
            </div>

            <p className="text-amber-400/70 text-xs font-medium mt-2">I take on 3 to 5 new clients per month. April spots are available now.</p>

            <div className="w-full hidden sm:block">
              <AgentTerminal />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-scroll-bounce w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-blue-400" />
          </div>
        </div>
      </section>

      {/* Integrations Marquee */}
      <IntegrationsMarquee />

      {/* Brandon - Meet the Builder */}
      <section className="py-10 border-b border-slate-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-50 blur-sm" />
                <Image
                  src="/images/brandon-hopkins.jpg"
                  alt="Brandon Hopkins"
                  width={64}
                  height={64}
                  className="relative w-16 h-16 rounded-xl object-cover shadow-lg shadow-blue-500/20"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-blue-400 font-semibold text-xs uppercase tracking-wider mb-1">Meet Your Builder</p>
                <p className="text-white font-bold text-lg mb-1">Brandon Hopkins, Founder &amp; AI Consultant</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I&apos;ve spent 5+ years building custom digital systems across two companies. When you work with AI Scout Co, you work directly with me on every call, every line of code, and every deployment. No account managers, no handoffs.
                </p>
              </div>
              <Link href="/about" className="flex-shrink-0 inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 text-sm font-medium transition-colors whitespace-nowrap">
                About Brandon <ArrowRight size={14} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-xs uppercase tracking-widest font-semibold mb-8">DiamondLinks, 6 weeks after deployment</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 85000, prefix: "$", suffix: "+/yr", decimal: "", label: "Annual savings unlocked" },
              { value: 7, suffix: "+", decimal: "", label: "New features delivered" },
              { value: 20, suffix: "+", decimal: "", label: "Manual hours eliminated weekly" },
              { value: 99, decimal: ".9", suffix: "%", label: "System uptime" },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 150} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                  <AnimatedCounter end={stat.value} prefix={stat.prefix || ""} suffix={stat.suffix || ""} decimal={stat.decimal || ""} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI Scout Co */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeUp delay={0}><p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">Why AI Scout Co</p></FadeUp>
            <FadeUp delay={150}><h2 className="text-4xl md:text-5xl font-extrabold mb-4">Not an agency. <span className="gradient-text">A direct expert.</span></h2></FadeUp>
            <FadeUp delay={300}><p className="text-slate-400 text-xl max-w-2xl mx-auto">Most AI agencies hand your project to junior staff after the sale. Here, you work with the person who builds it.</p></FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain size={24} />,
                color: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400" },
                title: "You work directly with the builder",
                desc: "No account managers, no handoffs, no junior staff. When you hire AI Scout Co, you work directly with Brandon, the person who designs and builds every system.",
              },
              {
                icon: <Zap size={24} />,
                color: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400" },
                title: "I find what you didn't know to look for",
                desc: "Most businesses don't know what AI is capable of until we start exploring together. My discovery-first approach surfaces opportunities you didn't even know existed.",
              },
              {
                icon: <BarChart3 size={24} />,
                color: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
                title: "Every recommendation comes with ROI",
                desc: "You see exactly what each automation will save, in time and money, before a single line of code is written. No guessing, no vague promises.",
              },
            ].map((item, i) => (
              <FadeUp
                key={i}
                delay={i * 150}
                className={`p-6 rounded-2xl border ${item.color.border} bg-slate-900/50 card-hover`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.color.bg} border ${item.color.border} flex items-center justify-center ${item.color.text} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section id="case-study" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeUp delay={0}><p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Real Results</p></FadeUp>
            <FadeUp delay={150}><h2 className="text-4xl md:text-5xl font-extrabold mb-4">Proof it works</h2></FadeUp>
            <FadeUp delay={300}><p className="text-slate-400 text-xl max-w-2xl mx-auto">One client. Six weeks. A complete transformation of how their business operates.</p></FadeUp>
          </div>

          <FadeUp className="relative rounded-2xl border border-slate-700/50 bg-slate-900/50 overflow-hidden card-hover">
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
                    A key employee managing all client reporting and proposal creation received an outside offer and asked for a 25% raise. Instead of absorbing the cost, DiamondLinks automated everything. The replacement system added seven capabilities the old workflow never had, including a branded client portal, and delivered it all without ongoing manual work.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {[
                      "Eliminated $85,000+/year salary",
                      "Reports generated in seconds",
                      "Proposals auto-delivered before meetings",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/case-study"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer"
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
          </FadeUp>

          {/* Testimonial */}
          <FadeUp delay={200} className="mt-8 rounded-2xl border border-blue-500/20 bg-slate-900/50 overflow-hidden">
            <div className="h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-5xl text-blue-400/30 font-serif leading-none mt-1">&ldquo;</div>
                <div>
                  <blockquote className="text-slate-300 text-lg leading-relaxed italic mb-6">
                    We were about to give a key employee a 25% raise just to keep them. Instead, Brandon built us a system that not only replaced every function that employee handled but added seven new capabilities we never had before. Our reports went from bland Google Docs to stunning automated dashboards, and proposals practically write themselves now.
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">D</div>
                    <figcaption className="text-slate-400 text-sm font-semibold">DiamondLinks Leadership</figcaption>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Before/After Visual Proof */}
          <FadeUp delay={250} className="mt-8">
            <p className="text-center text-slate-500 text-xs uppercase tracking-widest font-semibold mb-4">The actual transformation</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-red-500/20 bg-slate-900/70 overflow-hidden">
                <div className="bg-red-500/10 border-b border-red-500/20 px-4 py-2.5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">Before</span>
                  <span className="text-slate-500 text-xs ml-auto">Manual Google Docs</span>
                </div>
                <div className="p-3">
                  <Image
                    src="/images/case-study/before-report.png"
                    alt="DiamondLinks client report before automation: plain text document in Google Docs"
                    width={600}
                    height={400}
                    className="w-full rounded-lg opacity-80"
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/70 overflow-hidden">
                <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-2.5 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">After</span>
                  <span className="text-slate-500 text-xs ml-auto">Automated Dashboard Report</span>
                </div>
                <div className="p-3">
                  <Image
                    src="/images/case-study/after-report.png"
                    alt="DiamondLinks client report after automation: branded dashboard with charts and metrics"
                    width={600}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Mid-page CTA strip */}
          <FadeUp delay={300} className="mt-8 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/20 to-cyan-900/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-bold text-xl">Your business can run like this.</p>
              <p className="text-slate-400 text-sm mt-1">Free 30-60 min call. Walk away with a prioritized roadmap, no commitment required.</p>
              <p className="text-amber-400/80 text-xs font-medium mt-1.5">April spots available now.</p>
            </div>
            <Link
              href="/contact"
              className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer whitespace-nowrap"
            >
              Get a Free Automation Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* How It Works Overview */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeUp delay={0}><p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">The Process</p></FadeUp>
            <FadeUp delay={150}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Simple for you.<br />
                <span className="gradient-text">Sophisticated results.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={300}>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                You describe the problem. I build the custom system that eliminates it, and walk you through everything.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { icon: <Brain size={24} />, step: "01", title: "Discovery Call", desc: "We map your workflows and find every opportunity for AI and automation to save you time and money." },
              { icon: <BarChart3 size={24} />, step: "02", title: "Opportunity Map", desc: "You receive a ranked plan with ROI projections and a clear implementation timeline." },
              { icon: <Zap size={24} />, step: "03", title: "Build & Deploy", desc: "I architect autonomous agent systems, API integrations, and intelligent workflows custom to your business." },
              { icon: <CheckCircle size={24} />, step: "04", title: "Launch & Train", desc: "Systems go live and I walk your team through everything. Manual work that used to take hours runs automatically from day one." },
              { icon: <Clock size={24} />, step: "05", title: "Optimize & Evolve", desc: "As your business grows, I keep refining your systems and adding new capabilities." },
            ].map((item, i) => (
              <FadeUp
                key={i}
                delay={i * 100}
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
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200} className="text-center mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 btn-shimmer"
            >
              Start with a Free Automation Audit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="text-slate-500 text-sm mt-3">30 minutes. No commitment. Walk away with a prioritized roadmap.</p>
          </FadeUp>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeUp delay={0}><p className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3">Capabilities</p></FadeUp>
            <FadeUp delay={150}><h2 className="text-4xl md:text-5xl font-extrabold mb-4">What I build</h2></FadeUp>
            <FadeUp delay={300}><p className="text-slate-400 text-xl max-w-2xl mx-auto">Six categories of manual work I eliminate. Every system is custom built from scratch for your workflow, not adapted from a template.</p></FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot size={24} />,
                color: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400" },
                title: "Autonomous Agent Systems",
                desc: "Complex, multi-step work that once required human oversight now runs on its own. Data flows in, decisions get made, outputs go out, while your team focuses on higher-value work.",
              },
              {
                icon: <Link2 size={24} />,
                color: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
                title: "API & Webhook Integrations",
                desc: "Your existing tools, Monday.com, Google Workspace, Salesforce, Slack, and more, finally work together without manual copy-paste or data re-entry between systems.",
              },
              {
                icon: <BarChart3 size={24} />,
                color: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400" },
                title: "Automated Reporting",
                desc: "Reports that used to take hours to compile, format, and send now arrive automatically. Clients get polished, branded reports without anyone on your team lifting a finger.",
              },
              {
                icon: <FileText size={24} />,
                color: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400" },
                title: "Document Generation",
                desc: "Proposals, contracts, and client documents written and delivered automatically, pulling from your calls, emails, and existing data. Ready 30 minutes before every meeting.",
              },
              {
                icon: <Globe size={24} />,
                color: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400" },
                title: "Client Portal Applications",
                desc: "A branded web app where your clients log in with their existing Google or Microsoft account and see their reports, history, and status, without calling your team.",
              },
              {
                icon: <Settings2 size={24} />,
                color: { border: "border-pink-500/30", bg: "bg-pink-500/10", text: "text-pink-400" },
                title: "Workflow Automation",
                desc: "Your team spends hours on work that follows the same steps every time. I map those workflows and build automation that runs them, so your people can focus on work that actually needs them.",
              },
            ].map((item, i) => (
              <FadeUp
                key={i}
                delay={i * 100}
                className="p-6 rounded-2xl border border-slate-700/50 bg-slate-900/50 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color.bg} border ${item.color.border} flex items-center justify-center ${item.color.text} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200} className="mt-10 rounded-2xl border border-slate-700/40 bg-slate-900/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-bold text-lg">Not sure which of these applies to you?</p>
              <p className="text-slate-400 text-sm mt-1">That&apos;s exactly what the discovery call is for. I&apos;ll identify the highest-ROI opportunities in your specific workflow.</p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer whitespace-nowrap"
              >
                Get a Free Automation Audit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/case-study" className="text-slate-500 hover:text-blue-400 text-xs transition-colors">
                or see a real example →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeUp delay={0}><p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">Who I Help</p></FadeUp>
            <FadeUp delay={150}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Built for any business<br />
                <span className="gradient-text">drowning in manual work</span>
              </h2>
            </FadeUp>
            <FadeUp delay={300}>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                If your team spends hours on work that follows the same steps every time, you have an automation opportunity.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <TrendingUp size={22} />,
                color: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", subtle: "bg-blue-500/5" },
                industry: "SEO & Digital Marketing",
                pain: "Client reports, campaign summaries, and proposal decks eating up your week.",
                link: "/industries/seo-agencies",
              },
              {
                icon: <Briefcase size={22} />,
                color: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400", subtle: "bg-purple-500/5" },
                industry: "Professional Services",
                pain: "Intake forms, client onboarding, deliverable generation, and status updates done manually.",
                link: "/industries/professional-services",
              },
              {
                icon: <Building2 size={22} />,
                color: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400", subtle: "bg-orange-500/5" },
                industry: "Real Estate",
                pain: "Listing updates, lead follow-ups, and market reports that take hours every week.",
                link: "/industries/real-estate",
              },
              {
                icon: <Activity size={22} />,
                color: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", subtle: "bg-emerald-500/5" },
                industry: "Healthcare",
                pain: "Scheduling, documentation, patient communication, and compliance reporting.",
                link: "/industries/healthcare",
              },
              {
                icon: <ShoppingCart size={22} />,
                color: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400", subtle: "bg-cyan-500/5" },
                industry: "E-commerce",
                pain: "Inventory updates, customer service responses, order tracking, and performance reports.",
                link: "/industries/ecommerce",
              },
              {
                icon: <Layers size={22} />,
                color: { border: "border-pink-500/30", bg: "bg-pink-500/10", text: "text-pink-400", subtle: "bg-pink-500/5" },
                industry: "Any Business",
                pain: "If your team does the same manual work on a schedule, I can build a system that does it for them.",
              },
            ].map((item, i) => (
              <FadeUp
                key={i}
                delay={i * 100}
                className={`p-6 rounded-2xl border ${item.color.border} ${item.color.subtle} card-hover group`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.color.bg} border ${item.color.border} flex items-center justify-center ${item.color.text} mb-4`}>
                  {item.icon}
                </div>
                <h3 className={`font-bold text-base mb-2 ${item.color.text}`}>{item.industry}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.pain}</p>
                {"link" in item && item.link && (
                  <Link href={item.link} className={`inline-flex items-center gap-1 text-xs font-semibold mt-3 ${item.color.text} hover:underline`}>
                    See how we help <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200} className="mt-10 rounded-2xl border border-slate-700/40 bg-slate-900/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-bold text-lg">Don&apos;t see your industry?</p>
              <p className="text-slate-400 text-sm mt-1">Industry doesn&apos;t matter. Repetitive manual work does. If your team does the same steps on a schedule, I can build a system that does it for them.</p>
            </div>
            <Link
              href="/contact"
              className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer whitespace-nowrap"
            >
              Get a Free Automation Audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FadeUp delay={0}><p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">Common Questions</p></FadeUp>
            <FadeUp delay={150}><h2 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently asked</h2></FadeUp>
            <FadeUp delay={300}><p className="text-slate-400 text-xl max-w-xl mx-auto">Everything you need to know before booking a call.</p></FadeUp>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 75}>
                <FAQItem question={faq.q} answer={faqNodes[i] ?? faq.a} />
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={100} className="mt-10 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-transparent p-8 text-center">
            <p className="text-white font-bold text-xl mb-2">Still have questions?</p>
            <p className="text-slate-400 text-sm mb-5">Get a free audit and I&apos;ll answer everything specific to your business, your workflows, and your goals.</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer"
            >
              Get a Free Automation Audit
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp delay={0}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              The call is free.<br />
              <span className="gradient-text">The roadmap is yours to keep.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={150}>
            <p className="text-slate-400 text-xl mb-8 max-w-2xl mx-auto">
              In 30 minutes I&apos;ll audit your workflows, find every automation opportunity, and show you the exact dollar savings attached to each one. Walk away with a concrete roadmap, no strings attached.
            </p>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
              {[
                "Full workflow audit to find every AI opportunity",
                "ROI projections tailored to your specific business",
                "Prioritized roadmap, zero obligation to proceed",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={300}>
            <QuickCaptureForm />
          </FadeUp>
          <FadeUp delay={450}>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <CheckCircle size={12} />
              Guaranteed: I find 3+ automation opportunities or I tell you straight. No pitch, no pressure.
            </div>
            <p className="text-emerald-400/80 text-xs font-medium mt-3">Most clients see ROI within 60 days of going live.</p>
            <p className="text-slate-500 text-xs mt-3">
              No commitment.{" "}
              <Link href="/about" className="text-blue-400/70 hover:text-blue-400 transition-colors">
                Learn more about Brandon.
              </Link>
            </p>
            <p className="text-amber-400/70 text-xs font-medium mt-2">I take on 3 to 5 new clients per month. April spots are available now.</p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
