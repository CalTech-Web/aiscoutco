"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Brain, BarChart3, Zap, CheckCircle, Clock, MessageSquare, FileText, Rocket, Settings } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const steps = [
  {
    num: "01",
    icon: <Brain size={28} />,
    title: "Discovery Call",
    tagline: "We sit down together and map your entire operation.",
    color: "blue",
    duration: "30 to 60 minutes",
    desc: "We spend 30 to 60 minutes walking through your daily and weekly workflows. I ask about what takes the most time, what falls through the cracks, and where you wish you had more help. By the end, I will have identified several areas where AI and automation can make an immediate impact.",
    deliverable: "A clear picture of your automation opportunities",
    details: [
      "Workflow audit across all departments",
      "Pain point identification and prioritization",
      "Opportunity brainstorming and ideation",
    ],
    quote: "Most businesses don't even know what AI and automation is capable of doing. During our discovery call, I identify areas of opportunity and dream with you on how best to accomplish your goals.",
  },
  {
    num: "02",
    icon: <BarChart3 size={28} />,
    title: "Opportunity Map",
    tagline: "You receive a ranked plan with real ROI projections.",
    color: "cyan",
    duration: "Delivered within 48 hours",
    desc: "After the discovery call, I deliver a detailed opportunity map showing each automation opportunity ranked by impact and implementation effort. Every recommendation comes with ROI projections so you can see exactly what each automation is worth.",
    deliverable: "A prioritized implementation plan with timelines",
    details: [
      "Ranked list of automation opportunities",
      "ROI projections for each recommendation",
      "Phased implementation timeline",
    ],
  },
  {
    num: "03",
    icon: <Zap size={28} />,
    title: "Build & Deploy",
    tagline: "I architect and deploy your custom AI systems.",
    color: "purple",
    duration: "1 to 8 weeks depending on scope",
    desc: "I architect and build your custom AI systems, integrating autonomous agents, API connections, and intelligent workflows into your existing tools. Every system is built from scratch for your specific business, never a template or off-the-shelf tool.",
    deliverable: "Live, production-ready AI systems",
    details: [
      "Custom agent architecture and orchestration design",
      "API and webhook integrations",
      "Automated testing and quality assurance",
    ],
    technical: ["Autonomous agents", "Sub-agent workflows", "API orchestration", "Webhook triggers", "Token budgeting", "Fallback logic"],
  },
  {
    num: "04",
    icon: <Rocket size={28} />,
    title: "Launch & Train",
    tagline: "Your systems go live and your team gets up to speed.",
    color: "emerald",
    duration: "1 to 3 days",
    desc: "Your new systems go live. I walk your team through everything, answer every question, and stay close until everyone is confident. Within a few days, they won't be able to imagine working without it.",
    deliverable: "A fully operational system with trained users",
    details: [
      "Production deployment and monitoring setup",
      "Team walkthrough and training sessions",
      "48-hour hypercare support post-launch",
    ],
  },
  {
    num: "05",
    icon: <Settings size={28} />,
    title: "Optimize & Evolve",
    tagline: "Your systems grow as your business grows.",
    color: "orange",
    duration: "Ongoing",
    desc: "As your business evolves, your AI systems evolve with it. I monitor performance, tune costs as usage grows, and add new capabilities as your needs change. You will never outgrow what we built together.",
    deliverable: "Continuously improving systems",
    details: [
      "System performance monitoring and tuning",
      "New feature development as needs evolve",
      "Regular strategy sessions to identify new opportunities",
    ],
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; tag: string; numBg: string }> = {
  blue: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400", tag: "bg-blue-500/20 text-blue-300", numBg: "bg-blue-600" },
  cyan: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400", tag: "bg-cyan-500/20 text-cyan-300", numBg: "bg-cyan-600" },
  purple: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400", tag: "bg-purple-500/20 text-purple-300", numBg: "bg-purple-600" },
  emerald: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400", tag: "bg-emerald-500/20 text-emerald-300", numBg: "bg-emerald-600" },
  orange: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400", tag: "bg-orange-500/20 text-orange-300", numBg: "bg-orange-600" },
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">The Process</motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold mb-6">
              Simple for you.
              <br />
              <span className="gradient-text">Specialized from me.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
              Every engagement follows the same five-phase process. You describe what you want your business to look like. I handle the autonomous agent orchestration, API architecture, and custom workflow engineering to make it real.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-orange-500/20 hidden md:block" />

          <ol className="space-y-10 list-none">
            {steps.map((step, i) => {
              const c = colorMap[step.color];
              return (
                <motion.li
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="relative"
                >
                  <motion.div
                    variants={fadeUp}
                    className={`rounded-2xl border ${c.border} ${c.bg} overflow-hidden`}
                  >
                    {/* Header */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-start gap-5">
                        <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} flex-shrink-0`}>
                          {step.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <span className={`text-xs font-bold tracking-widest ${c.text}`}>{step.num}</span>
                            <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${c.tag}`}>{step.duration}</span>
                          </div>
                          <h2 className="text-2xl font-extrabold text-white mb-1">{step.title}</h2>
                          <p className={`font-semibold ${c.text} mb-4`}>{step.tagline}</p>
                          <p className="text-slate-300 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="border-t border-slate-700/30 px-6 md:px-8 py-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">What happens in this phase</div>
                          <ul className="space-y-2">
                            {step.details.map((detail, j) => (
                              <li key={j} className="flex items-start gap-2 text-slate-300 text-sm">
                                <CheckCircle size={14} className={`${c.text} flex-shrink-0 mt-0.5`} />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">Deliverable</div>
                          <div className={`rounded-xl ${c.bg} border ${c.border} p-4 text-sm ${c.text} font-medium mb-4`}>
                            {step.deliverable}
                          </div>
                          {step.technical && (
                            <>
                              <div className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-3">Technologies involved</div>
                              <div className="flex flex-wrap gap-2">
                                {step.technical.map((tech, j) => (
                                  <span key={j} className={`px-2 py-1 rounded-md text-xs font-medium ${c.tag}`}>{tech}</span>
                                ))}
                              </div>
                            </>
                          )}
                          {step.quote && (
                            <div className="rounded-xl border border-slate-700/30 bg-slate-900/50 p-4 mt-4">
                              <p className="text-slate-400 text-sm italic leading-relaxed">&ldquo;{step.quote}&rdquo;</p>
                              <div className="text-slate-500 text-xs mt-2">Brandon Hopkins, Founder</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* FAQ Teaser */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-20"
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-center mb-10">Common questions</motion.h2>
          <motion.div variants={stagger} className="space-y-4">
            {[
              {
                q: "How long does it take to build a system?",
                a: "It depends on the scope. Simple automations can be live in a week. More complex multi-agent systems with integrations typically take 4 to 8 weeks. You will get a clear timeline during the discovery process.",
              },
              {
                q: "Do I need to understand AI to work with you?",
                a: "Not at all. My job is to understand the technical complexity so you do not have to. You tell me what you want your work and life to look like, and I figure out how to build it.",
              },
              {
                q: "What tools and platforms do you integrate with?",
                a: "I integrate with whatever you already use. Monday.com, Google Workspace, Salesforce, HubSpot, Slack, and dozens more. The systems I build connect to your existing workflow through APIs and webhooks, so nothing changes for your team except that manual work disappears.",
              },
              {
                q: "Will this replace my employees?",
                a: <span>Not necessarily. In many cases, automation handles the repetitive work so your team can spend their time on things that actually need a human. In other cases, like the <Link href="/case-study" className="text-blue-400 hover:text-blue-300 transition-colors">DiamondLinks case study</Link>, automation fully replaced a role and delivered more capability than the previous employee provided.</span>,
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6"
              >
                <div className="flex items-start gap-3">
                  <MessageSquare size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                    <div className="text-slate-400 text-sm leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 p-12"
        >
          <h2 className="text-3xl font-extrabold mb-4">Start with Step 1</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            A 30 to 60 minute discovery call costs you nothing. The insights you leave with are yours to keep.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Book a Free Discovery Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
