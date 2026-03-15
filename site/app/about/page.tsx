"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Code2, Brain, Users, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-blob-alt" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-4">About</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6">
              You work directly
              <br />
              <span className="gradient-text">with the builder.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              No account managers. No salespeople. Just you and the person who will actually design, build, and deploy your systems.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Founder Bio */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar placeholder */}
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 opacity-70 blur-sm animate-pulse" />
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <span className="text-white text-3xl font-extrabold">B</span>
                  </div>
                </div>
                <div>
                  <motion.div variants={fadeUp}>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-3xl font-extrabold text-white">Brandon Hopkins</h2>
                    </div>
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold">Founder, AI Scout Co</span>
                      <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-semibold">Founder, CalTech Web</span>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      I have spent the last 5+ years building digital solutions for businesses across industries. The same problem kept turning up. Businesses drowning in repetitive, manual work that could be automated, and nobody showing them how to fix it.
                    </p>
                    <p>
                      AI Scout Co exists to close that gap. My job starts before the build, with a <Link href="/how-it-works" className="text-blue-400 hover:text-blue-300 transition-colors">genuine discovery</Link> of what your business does, where it gets stuck, and what it would look like if the friction disappeared.
                    </p>
                    <p>
                      I am not here to pitch you on AI as a buzzword. I am here to find the specific workflows in your business that AI and automation can transform, then build the systems to make that transformation real, and <Link href="/services/support" className="text-blue-400 hover:text-blue-300 transition-colors">support them as your business grows</Link>.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="border-t border-slate-700/30 p-8 md:p-12 bg-blue-500/5">
              <div className="flex gap-4 items-start">
                <div className="text-5xl text-blue-400/30 font-serif leading-none">&ldquo;</div>
                <blockquote className="text-slate-300 text-lg leading-relaxed italic">
                  Most businesses don&apos;t even know what AI and automation is capable of doing. During our discovery call, I identify areas of opportunity and dream with you on how best to accomplish your goals.
                </blockquote>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-white mb-8">
            How I think about AI consulting
          </motion.h2>
          <motion.div variants={stagger} className="space-y-6">
            {[
              {
                icon: <Brain size={20} />,
                title: "Discovery first, always",
                color: "blue",
                desc: <span>I never start a project with a pre-built solution in mind. Every engagement begins with genuine curiosity about your specific workflows, goals, and pain points. The best AI systems are ones built around how your business actually works. <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300 transition-colors">See how the discovery service works.</Link></span>,
              },
              {
                icon: <Code2 size={20} />,
                title: "Make it feel simple, but build it right",
                color: "cyan",
                desc: <span>My goal is for your team to experience AI as effortless. Behind that simplicity is real technical depth, autonomous agent orchestration, custom API architecture, intelligent fallback logic, and relentless tuning. <Link href="/services/build" className="text-cyan-400 hover:text-cyan-300 transition-colors">Explore our custom AI systems.</Link></span>,
              },
              {
                icon: <Users size={20} />,
                title: "You are the expert on your business",
                color: "purple",
                desc: "I bring the technical expertise. You bring the domain knowledge. The best outcomes happen when we combine both, which is why I ask a lot of questions and listen carefully before I start designing anything.",
              },
              {
                icon: <Zap size={20} />,
                title: "Integrate, do not replace",
                color: "emerald",
                desc: "I build systems that plug into the tools you already use and love. The goal is not to make you learn new software, it is to make your existing software work harder and smarter on your behalf.",
              },
            ].map((item, i) => {
              const colors: Record<string, { border: string; bg: string; text: string }> = {
                blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400" },
                cyan: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
                purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400" },
                emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400" },
              };
              const c = colors[item.color];
              return (
                <motion.div key={i} variants={fadeUp} className={`rounded-2xl border ${c.border} ${c.bg} p-6`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-2 ${c.text}`}>{item.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* CalTech Web Background */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-white mb-4">Built on 5+ years of digital expertise</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Before AI Scout Co, I founded CalTech Web, a web development and digital solutions agency. That experience across dozens of client projects in different industries gave me a ground-level view of where businesses lose time, money, and momentum to manual processes.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              AI Scout Co is where that work led. Instead of just building websites and digital tools, I now build the intelligent systems that run behind them, and behind your entire operation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: "5+", label: "Years in business" },
                { value: "10+", label: "Years combined team expertise" },
                { value: "Remote", label: "Serving clients nationwide" },
              ].map((stat, i) => (
                <div key={i} className="text-center rounded-xl border border-slate-700/30 bg-slate-800/30 p-4">
                  <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* What makes this different */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-white mb-8">
            What makes AI Scout Co different
          </motion.h2>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "You work directly with the builder",
              "Every system custom built for your business",
              "Real case studies with measurable ROI",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-3 p-4 rounded-xl border border-slate-700/30 bg-slate-900/30">
                <CheckCircle size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.p variants={fadeUp} className="text-slate-400 text-sm mt-4 leading-relaxed">
            I integrate with the tools you already use, bring deep expertise in agent orchestration and API architecture, and find opportunities you did not know existed. <Link href="/case-study" className="text-blue-400 hover:text-blue-300 transition-colors">Read the DiamondLinks case study</Link> to see real results.
          </motion.p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 p-12"
        >
          <h2 className="text-3xl font-extrabold mb-4">Let&apos;s dream together</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free discovery call and find out what AI and automation can unlock for your business.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 btn-shimmer"
          >
            Book a Free Discovery Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-slate-500 text-sm mt-6">
            Want to learn more first?{" "}
            <Link href="/ai-automation-consulting" className="text-blue-400 hover:text-blue-300 transition-colors">
              See how AI automation consulting works.
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
