"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Zap, Brain, BarChart3, Clock, CheckCircle, ChevronRight, Bot, Link2, FileText, Globe, Settings2, Star, TrendingUp, Briefcase, Building2, Activity, ShoppingCart, Layers, ChevronDown } from "lucide-react";

const rotatingOutcomes = [
  "Eliminate $85,000+/year in labor costs.",
  "Save 20+ manual hours every week.",
  "Generate reports in seconds, not hours.",
  "Proposals auto-delivered before every meeting.",
  "Zero manual intervention required.",
];

function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingOutcomes.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="gradient-text font-bold"
      style={{ transition: "opacity 0.4s ease", opacity: visible ? 1 : 0 }}
    >
      {rotatingOutcomes[index]}
    </span>
  );
}

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
  const [count, setCount] = useState(end);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
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

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);
    setCount(0);
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
    return () => clearInterval(timer);
  }, [inView, end, started]);

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
    q: "Do I need to understand AI to work with you?",
    a: "Not at all. My job is to understand the technical complexity so you don't have to. You tell me what you want your work and life to look like, and I figure out how to build it.",
  },
  {
    q: "What does it cost?",
    a: "Every project is custom scoped based on your discovery call. I provide transparent pricing with clear ROI projections so you can see exactly what you're getting and what it's worth to your business. Most clients see a return within the first 60 days.",
  },
  {
    q: "What does a discovery call look like?",
    a: "We spend 30 to 60 minutes walking through your daily and weekly workflows. I ask about what takes the most time, what falls through the cracks, and where you wish you had more help. By the end, I'll have identified several areas where AI and automation can make an immediate impact.",
  },
  {
    q: "Will this replace my employees?",
    a: "Not necessarily. In many cases, automation handles the repetitive work so your team can focus on higher value tasks. In other cases, like the DiamondLinks case study, automation can fully replace a role and deliver even more capability than the previous employee provided.",
  },
  {
    q: "How long does it take to build a system?",
    a: "It depends on the scope. Simple automations can be live in a week. More complex multi-agent systems with integrations typically take 4 to 8 weeks. I'll give you a clear timeline during the discovery process.",
  },
  {
    q: "What tools and platforms do you work with?",
    a: "I integrate with whatever you already use: Monday.com, Google Workspace, Salesforce, HubSpot, Slack, and dozens more. The systems I build connect to your existing workflow through APIs and webhooks, so nothing changes for your team except that manual work disappears.",
  },
  {
    q: "Can I see a demo or example?",
    a: "Absolutely. The DiamondLinks case study on this site includes before and after screenshots and a full breakdown of what was built. During your discovery call, I can also walk you through examples relevant to your industry.",
  },
];

const faqNodes: Record<number, React.ReactNode> = {
  1: (
    <span>
      Every project is custom scoped based on your discovery call. I provide transparent pricing with clear ROI projections so you can see exactly what you&apos;re getting and what it&apos;s worth to your business. Most clients see a return within the first 60 days.{" "}
      <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Book your free discovery call to get a custom quote.</Link>
    </span>
  ),
  3: (
    <span>
      Not necessarily. In many cases, automation handles the repetitive work so your team can focus on higher value tasks. In other cases, like the{" "}
      <Link href="/case-study" className="text-blue-400 hover:text-blue-300 transition-colors">DiamondLinks case study</Link>
      , automation can fully replace a role and deliver even more capability than the previous employee provided.
    </span>
  ),
  6: (
    <span>
      Absolutely. The{" "}
      <Link href="/case-study" className="text-blue-400 hover:text-blue-300 transition-colors">DiamondLinks case study</Link>
      {" "}on this site includes before and after screenshots and a full breakdown of what was built. During your discovery call, I can also walk you through examples relevant to your industry.
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

            <p className="text-xl md:text-2xl mb-3 min-h-[2rem]">
              <RotatingText />
            </p>

            <p className="text-lg text-slate-400 max-w-2xl mb-6 leading-relaxed">
              In one free call, I map every place AI can replace manual work in your business and attach real dollar savings to each one. Walk away with a prioritized plan, no commitment required.
            </p>

            <div className="flex items-center gap-3 mb-8 px-5 py-3 rounded-xl border border-slate-700/50 bg-slate-900/60 max-w-md mx-auto">
              <div className="flex-shrink-0 flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <p className="text-slate-400 text-xs leading-snug italic">
                &ldquo;Brandon saved us $85,000+/year and added 7 capabilities we never had before.&rdquo;
                <span className="text-slate-500 not-italic ml-1">— DiamondLinks</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 blue-glow btn-shimmer"
              >
                Book a Free Discovery Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 hover:bg-slate-800/50"
              >
                See a Real Case Study
                <ChevronRight size={20} />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5">
              {[
                "Free 30-60 min call",
                "Walk away with a prioritized roadmap",
                "No pitch, no obligation",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>

            <p className="text-amber-400/70 text-xs font-medium mt-3">Currently accepting new clients for April 2026. Spots are limited.</p>

            <div className="w-full">
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

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 85000, prefix: "$", suffix: "+/yr", decimal: "", label: "Savings per client" },
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
      <section className="py-24">
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

          {/* Mid-page CTA strip */}
          <FadeUp delay={300} className="mt-8 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/20 to-cyan-900/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-white font-bold text-xl">Could your business run like this?</p>
              <p className="text-slate-400 text-sm mt-1">Free 30-60 min call. Walk away with a prioritized roadmap, no commitment required.</p>
            </div>
            <Link
              href="/contact"
              className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer whitespace-nowrap"
            >
              Book a Free Discovery Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* How It Works Overview */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeUp delay={0}><p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">The Process</p></FadeUp>
            <FadeUp delay={150}>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Simple for you,<br />
                <span className="gradient-text">specialized from us</span>
              </h2>
            </FadeUp>
            <FadeUp delay={300}>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                You describe what you want your business to look like. I figure out the autonomous agents, API orchestration, and custom workflows to make it real.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { icon: <Brain size={24} />, step: "01", title: "Discovery Call", desc: "We map your workflows and find every opportunity for AI and automation to save you time and money." },
              { icon: <BarChart3 size={24} />, step: "02", title: "Opportunity Map", desc: "You receive a ranked plan with ROI projections and a clear implementation timeline." },
              { icon: <Zap size={24} />, step: "03", title: "Build & Deploy", desc: "I architect autonomous agent systems, API integrations, and intelligent workflows custom to your business." },
              { icon: <CheckCircle size={24} />, step: "04", title: "Launch & Train", desc: "Systems go live and I walk your team through everything. Within a few days, they won't be able to imagine working without it." },
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

          <FadeUp delay={200} className="text-center mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Learn more about the process
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services/discovery"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 font-semibold transition-colors"
            >
              Start with a free AI discovery
              <ArrowRight size={18} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeUp delay={0}><p className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3">Capabilities</p></FadeUp>
            <FadeUp delay={150}><h2 className="text-4xl md:text-5xl font-extrabold mb-4">What I build</h2></FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot size={24} />,
                color: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400" },
                title: "Autonomous Agent Systems",
                desc: "Multi-agent orchestration with specialized sub-agents that handle complex workflows without human intervention. Each agent has defined skills and token budgets.",
              },
              {
                icon: <Link2 size={24} />,
                color: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
                title: "API & Webhook Integrations",
                desc: "Connect AI to your existing tools, Monday.com, Google Workspace, Salesforce, Slack, and more, through custom API and webhook architectures.",
              },
              {
                icon: <BarChart3 size={24} />,
                color: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400" },
                title: "Automated Reporting",
                desc: "Real-time data pipelines that pull from multiple sources, process through intelligent agents, and deliver polished reports automatically.",
              },
              {
                icon: <FileText size={24} />,
                color: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400" },
                title: "Document Generation",
                desc: "Intelligent proposal and document creation that pulls from call recordings, email threads, and databases to produce custom outputs with smart fallback logic.",
              },
              {
                icon: <Globe size={24} />,
                color: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400" },
                title: "Client Portal Applications",
                desc: "Secure web applications with SSO/OAuth authentication where your clients can access dashboards, reports, and account information.",
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
            <Link
              href="/contact"
              className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer whitespace-nowrap"
            >
              Book a Free Discovery Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
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
            <p className="text-slate-400 text-sm mb-5">Book a free call and I&apos;ll answer everything specific to your business, your workflows, and your goals.</p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 btn-shimmer"
            >
              Book a Free Discovery Call
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
              Ready to find out what<br />
              <span className="gradient-text">AI can do for your business?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={150}>
            <p className="text-slate-400 text-xl mb-8 max-w-2xl mx-auto">
              Book a free 30 to 60 minute discovery call. I&apos;ll audit your workflows, identify every automation opportunity, and deliver a prioritized roadmap, no obligation required.
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
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30 blue-glow btn-shimmer"
            >
              Book a Free Discovery Call
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
          <FadeUp delay={450}>
            <p className="text-slate-300 text-sm mt-6">
              If I can&apos;t find at least 3 automation opportunities in your business, I&apos;ll tell you straight. No pitch, no pressure.
            </p>
            <p className="text-slate-500 text-xs mt-3">
              No commitment.{" "}
              <Link href="/about" className="text-blue-400/70 hover:text-blue-400 transition-colors">
                Learn more about Brandon.
              </Link>
            </p>
            <p className="text-amber-400/70 text-xs font-medium mt-2">Currently accepting new clients for April 2026. Spots are limited.</p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
