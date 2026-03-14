"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Zap, Users, Clock, Star, AlertTriangle, Lightbulb, Code2, BarChart3, Mic, Mail, Brain, RefreshCw, Calendar } from "lucide-react";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(end);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);
    setCount(0);
    let current = 0;
    const duration = 1800;
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
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-0.5 z-50 origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)",
      }}
    />
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen pt-16">
      <ScrollProgressBar />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-600/8 rounded-full blur-3xl animate-blob-alt" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="mb-6 flex items-center justify-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">Case Study</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">SEO Agency</span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">6 Weeks</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6">
              How DiamondLinks
              <br />
              <span className="gradient-text">replaced a $85,000 salary</span>
              <br />
              and got 7 new features
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              A key employee at DiamondLinks managed all client reporting and proposals. Then they got an outside offer. Six weeks later, the role was automated and the company had seven capabilities it never had before.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Summary Stats Bar */}
      <section className="bg-slate-900/70 border-y border-slate-800/50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-extrabold mb-1 text-emerald-400">
                <AnimatedCounter end={85000} prefix="$" suffix="+" />
              </div>
              <div className="text-slate-400 text-sm">Annual savings</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-extrabold mb-1 text-blue-400">
                <AnimatedCounter end={7} />
              </div>
              <div className="text-slate-400 text-sm">New capabilities added</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-extrabold mb-1 text-cyan-400">Seconds</div>
              <div className="text-slate-400 text-sm">To generate a report</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-extrabold mb-1 text-purple-400">
                <AnimatedCounter end={6} suffix=" weeks" />
              </div>
              <div className="text-slate-400 text-sm">Discovery to deployment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* The Challenge */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertTriangle size={20} />
            </div>
            <div>
              <div className="text-red-400 text-xs font-bold uppercase tracking-widest">Chapter 1</div>
              <h2 className="text-3xl font-extrabold text-white">The Challenge</h2>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8 mb-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              DiamondLinks, a leading SEO and online reputation management company, faced a critical crossroads. A key employee who single-handedly managed all client reporting and proposal creation received an outside job offer and requested a <span className="text-red-400 font-semibold">25% raise</span>.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              This was not just a compensation issue. This employee was the linchpin of two core business functions. Without them, the entire client reporting workflow would collapse, and the sales proposal process would grind to a halt.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <Users size={18} />, title: "Single Point of Failure", desc: "One person controlled all client reporting, creating fragility in a core business function." },
              { icon: <Clock size={18} />, title: "Hours Per Report", desc: "Each monthly client report required significant manual effort to compile and format." },
              { icon: <BarChart3 size={18} />, title: "Limited Capabilities", desc: "Plain Google Docs with no visual design, no YTD tracking, no mid-month updates." },
              { icon: <TrendingUp size={18} />, title: "Scaling Problem", desc: "As the client roster grew, the manual process simply could not keep up." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl border border-slate-700/50 bg-slate-900/50">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                  <div className="text-slate-400 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* The Decision */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
              <Lightbulb size={20} />
            </div>
            <div>
              <div className="text-yellow-400 text-xs font-bold uppercase tracking-widest">Chapter 2</div>
              <h2 className="text-3xl font-extrabold text-white">The Decision</h2>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Rather than absorb the increased cost, DiamondLinks saw an opportunity. They reached out for a discovery call to explore whether AI and automation could not only replace the departing employee&apos;s responsibilities but genuinely improve upon them.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              The question was not simply &ldquo;can we automate this?&rdquo; It was &ldquo;if we&apos;re rebuilding this anyway, what does the best possible version look like?&rdquo;
            </p>
          </motion.div>
        </motion.section>

        {/* The Discovery */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Zap size={20} />
            </div>
            <div>
              <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">Chapter 3</div>
              <h2 className="text-3xl font-extrabold text-white">The Discovery</h2>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 mb-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              During the <Link href="/how-it-works" className="text-blue-400 hover:text-blue-300 transition-colors">discovery session</Link>, we mapped every workflow the employee handled. Two major functions emerged, monthly client reporting and sales proposal creation. Both were entirely manual, time-consuming, and limited by human capacity.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              The discovery process revealed not just what needed to be replaced, but a dozen ways to do it better. With autonomous agent orchestration, the new system would not just match what the employee did, it would far exceed it.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6">
              <div className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                <BarChart3 size={18} />
                Function 1: Client Reporting
              </div>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-1">•</span>Monthly reports compiled manually in Google Docs</li>
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-1">•</span>Hours of work per client per month</li>
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-1">•</span>No historical dashboard for clients</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-6">
              <div className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <Star size={18} />
                Function 2: Proposal Creation
              </div>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-1">•</span>Proposals written manually before each sales meeting</li>
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-1">•</span>Required reviewing call notes, emails, and pricing</li>
                <li className="flex items-start gap-2"><span className="text-slate-600 mt-1">•</span>Hours of work per proposal</li>
              </ul>
            </div>
          </motion.div>
        </motion.section>

        {/* What We Built: Reporting */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Code2 size={20} />
            </div>
            <div>
              <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest">Chapter 4</div>
              <h2 className="text-3xl font-extrabold text-white">What We Built</h2>
              <p className="text-slate-400 text-lg">The Automated Reporting System</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 mb-10">
            <p className="text-slate-300 text-lg leading-relaxed">
              The previous reports were plain text documents in Google Docs. Bland, hard to read, and missing key metrics. The new system is an autonomous multi-agent workflow that transforms raw data into stunning, comprehensive reports, with zero human intervention.
            </p>
          </motion.div>

          {/* Before/After screenshots */}
          <motion.div variants={fadeUp} className="mb-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Before &amp; After</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-red-500/30 bg-slate-900/70 overflow-hidden">
                <div className="bg-red-500/10 border-b border-red-500/20 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Before</span>
                  <span className="text-slate-500 text-sm ml-auto">Manual Google Docs</span>
                </div>
                <div className="p-4">
                  <Image
                    src="/images/case-study/before-report.png"
                    alt="DiamondLinks client report before automation: plain text document in Google Docs with no visual design"
                    width={600}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-900/70 overflow-hidden">
                <div className="bg-emerald-500/10 border-b border-emerald-500/20 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">After</span>
                  <span className="text-slate-500 text-sm ml-auto">Automated Dashboard Report</span>
                </div>
                <div className="p-4">
                  <Image
                    src="/images/case-study/after-report.png"
                    alt="DiamondLinks client report after automation: branded dashboard with charts, graphs, and color-coded metrics"
                    width={600}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7 New Features */}
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">7</div>
              <h3 className="text-2xl font-bold text-white">New Features Delivered</h3>
            </div>
            <ol className="space-y-4 list-none">
              {[
                {
                  num: "1",
                  title: "Autonomous Report Generation",
                  color: "blue",
                  desc: "When work is completed in Monday.com, an agent pipeline triggers, pulling performance data from multiple APIs, processing it through specialized sub-agents, and assembling a fully formatted report without any human intervention.",
                  tags: ["Monday.com webhook", "Multi-agent pipeline", "API orchestration"],
                },
                {
                  num: "2",
                  title: "Client Dashboard Portal",
                  color: "cyan",
                  desc: "A secure web application where clients can log in and access all of their historical reports in one place, with search, filtering, and export capabilities.",
                  tags: ["Web application", "Data pipeline", "Report archive"],
                },
                {
                  num: "3",
                  title: "Intelligent Email Summaries",
                  color: "purple",
                  desc: "Each report automatically generates a personalized email to the client, with AI analyzing the data to highlight the most positive changes and notable wins for the month.",
                  tags: ["AI analysis", "Personalized content", "Automated delivery"],
                },
                {
                  num: "4",
                  title: "SSO/OAuth Authentication",
                  color: "emerald",
                  desc: "Enterprise-grade single sign-on so clients access their dashboard with their existing Google or Microsoft credentials, no new passwords to remember.",
                  tags: ["Google OAuth", "Microsoft SSO", "Enterprise security"],
                },
                {
                  num: "5",
                  title: "Mid-Month Instant Reports",
                  color: "yellow",
                  desc: "Previously impossible due to the manual effort required. Now, a comprehensive mid-month check-in report can be generated on demand with a single click.",
                  tags: ["On-demand generation", "Instant delivery", "Single click"],
                },
                {
                  num: "6",
                  title: "MTD and YTD Metrics",
                  color: "orange",
                  desc: "Month-to-date and year-to-date performance tracking that was never available before, giving clients unprecedented visibility into their campaign trajectory.",
                  tags: ["Historical data", "Trend analysis", "Performance tracking"],
                },
                {
                  num: "7",
                  title: "Beautiful Visual Design",
                  color: "pink",
                  desc: "Reports transformed from walls of text into polished, branded documents with charts, graphs, color-coded metrics, and executive summaries.",
                  tags: ["Custom design", "Data visualization", "Brand consistency"],
                },
              ].map((feature) => {
                const colorMap: Record<string, { border: string; bg: string; text: string; tag: string }> = {
                  blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", tag: "bg-blue-500/20 text-blue-300" },
                  cyan: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400", tag: "bg-cyan-500/20 text-cyan-300" },
                  purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400", tag: "bg-purple-500/20 text-purple-300" },
                  emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", tag: "bg-emerald-500/20 text-emerald-300" },
                  yellow: { border: "border-yellow-500/30", bg: "bg-yellow-500/10", text: "text-yellow-400", tag: "bg-yellow-500/20 text-yellow-300" },
                  orange: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400", tag: "bg-orange-500/20 text-orange-300" },
                  pink: { border: "border-pink-500/30", bg: "bg-pink-500/10", text: "text-pink-400", tag: "bg-pink-500/20 text-pink-300" },
                };
                const c = colorMap[feature.color];
                return (
                  <li key={feature.num} className={`rounded-2xl border ${c.border} ${c.bg} p-6`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5 ${c.bg} border ${c.border} ${c.text}`}>
                        {feature.num}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-lg mb-2 ${c.text}`}>{feature.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-3">{feature.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {feature.tags.map((tag, i) => (
                            <span key={i} className={`px-2 py-0.5 rounded-md text-xs font-medium ${c.tag}`}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </motion.div>
        </motion.section>

        {/* What We Built: Proposals */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Star size={20} />
            </div>
            <div>
              <div className="text-purple-400 text-xs font-bold uppercase tracking-widest">Chapter 5</div>
              <h2 className="text-3xl font-extrabold text-white">What We Built</h2>
              <p className="text-slate-400 text-lg">The Automated Proposal System</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-8 mb-8">
            <p className="text-slate-300 text-lg leading-relaxed">
              Proposals were also entirely manual. Every time a salesperson had a meeting with a prospect, someone had to compile call notes, review email threads, reference pricing, and write a custom proposal. This took hours.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            {[
              {
                title: "Call Intelligence",
                desc: "Automatically pulls call logs and Google Meet recordings, extracting key discussion points and prospect requirements through an audio analysis sub-agent.",
                icon: <Mic size={18} />,
              },
              {
                title: "Email Analysis",
                desc: "Scans the full email thread between the company and prospect to capture every detail mentioned, using an NLP agent trained on sales context.",
                icon: <Mail size={18} />,
              },
              {
                title: "Smart Compilation",
                desc: "An orchestration agent combines call insights, email context, standard company pricing, and service descriptions into a polished, personalized proposal.",
                icon: <Brain size={18} />,
              },
              {
                title: "Fallback Logic",
                desc: "If certain information does not exist, such as no call recording or no prior emails, the system intelligently removes those sections rather than leaving gaps or errors.",
                icon: <RefreshCw size={18} />,
              },
              {
                title: "One-Click Generation",
                desc: "Any team member can generate a proposal instantly by clicking a single button, with no technical knowledge required.",
                icon: <Zap size={18} />,
              },
              {
                title: "Pre-Meeting Automation",
                desc: "The system automatically generates and emails the proposal to the salesperson 30 minutes before their next scheduled meeting with the prospect.",
                icon: <Calendar size={18} />,
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-purple-500/20 bg-slate-900/50 hover:border-purple-500/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-purple-300 font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* The Results */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Chapter 6</div>
              <h2 className="text-3xl font-extrabold text-white">The Results</h2>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 mb-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Sixty days after launch, the role was gone and seven new capabilities had taken its place. Client satisfaction went up. The team stopped touching reports and proposals entirely. Nothing in the operation required manual intervention anymore.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Eliminated a $85,000+/year salary, plus benefits",
                "Reports generated in seconds instead of hours",
                "Proposals auto-delivered before every meeting",
              ].map((result, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div variants={fadeUp} className="rounded-2xl border border-blue-500/20 bg-slate-900/50 overflow-hidden">
            <div className="h-px bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
            <div className="p-8">
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-5xl text-blue-400/30 font-serif leading-none mt-1">&ldquo;</div>
                <div>
                  <blockquote className="text-slate-300 text-lg leading-relaxed italic mb-5">
                    We were about to give a key employee a 25% raise just to keep them. Instead, Brandon built us a system that not only replaced every function that employee handled but added seven new capabilities we never had before. Our reports went from bland Google Docs to stunning automated dashboards, and proposals practically write themselves now.
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">D</div>
                    <figcaption className="text-slate-400 text-sm font-semibold">DiamondLinks Leadership</figcaption>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center py-16 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent" />
          <div className="relative">
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold mb-4">
              Could this be your business?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Book a free discovery call and find out exactly where AI and automation can transform your operations.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 btn-shimmer"
              >
                Book a Discovery Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-300 text-sm transition-colors"
              >
                Learn how the five-step process works
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
