import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Wrench, LifeBuoy, BarChart3, FileText, Brain, Zap, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Consulting | AI Scout Co",
  description: "Brandon Hopkins provides AI automation consulting for businesses ready to eliminate manual work. Free discovery call. Custom AI systems. Real results backed by case studies.",
  keywords: "ai automation consulting, ai automation consulting services, ai workflow automation consulting, hire ai automation consultant, business automation consulting, ai process automation consultant",
  alternates: {
    canonical: "https://aiscoutco.com/ai-automation-consulting",
  },
  openGraph: {
    title: "AI Automation Consulting | AI Scout Co",
    description: "Brandon Hopkins provides AI automation consulting for businesses ready to eliminate manual work. Free discovery call. Custom AI systems. Real results.",
    url: "https://aiscoutco.com/ai-automation-consulting",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Consulting | AI Scout Co",
    description: "Brandon Hopkins provides AI automation consulting for businesses ready to eliminate manual work. Free discovery call. Custom AI systems. Real results.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/ai-automation-consulting#webpage",
    url: "https://aiscoutco.com/ai-automation-consulting",
    name: "AI Automation Consulting | AI Scout Co",
    description: "Brandon Hopkins provides AI automation consulting services for businesses ready to eliminate manual work. Free discovery call. Custom AI systems. Real results.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    about: { "@id": "https://aiscoutco.com/#organization" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "AI Automation Consulting", item: "https://aiscoutco.com/ai-automation-consulting" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://aiscoutco.com/ai-automation-consulting#service",
    name: "AI Automation Consulting",
    serviceType: "AI Automation Consulting",
    description: "End-to-end AI automation consulting: workflow discovery, custom AI system development, and ongoing optimization for businesses that want to eliminate manual work.",
    provider: { "@id": "https://aiscoutco.com/#organization" },
    areaServed: "US",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: "Free discovery call included. Custom-scoped project pricing based on workflow complexity and automation goals.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is AI automation consulting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI automation consulting is the process of auditing your business workflows, identifying where AI and automation can eliminate manual work, and then building the custom systems to make it happen. A consultant handles the full lifecycle: discovery, architecture, development, and ongoing optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if I need AI automation consulting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your team spends time on work that follows a repeatable pattern, such as generating reports, sending follow-up emails, updating records, or assembling documents, that work is automatable. The first step is a free discovery call to find out exactly where AI can help your specific business.",
        },
      },
      {
        "@type": "Question",
        name: "What does an AI automation consulting engagement look like?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It starts with a free 30 to 60 minute discovery call to map your workflows and identify automation opportunities. From there, you receive a detailed opportunity map with ROI projections. If you proceed, we architect and build your custom AI system, typically in 4 to 8 weeks. After launch, we provide ongoing optimization and support.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AI automation consulting cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every project is custom scoped after the discovery call. Pricing is transparent, with clear ROI projections so you can see exactly what you are getting and what it is worth. The discovery call itself is always free. Most clients see a return on investment within the first 60 days.",
        },
      },
    ],
  },
];

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Strategy",
    description: "We start with a free 30 to 60 minute call to map your workflows and identify every place AI and automation can help. You receive a detailed opportunity map with ROI projections and a phased implementation plan.",
    link: { href: "/services/discovery", label: "Learn about the discovery session" },
  },
  {
    icon: Wrench,
    step: "02",
    title: "Custom AI System Development",
    description: "We architect and build your custom AI systems from scratch, integrating autonomous agents, API connections, and intelligent workflows directly into the tools you already use. No templates, no off-the-shelf software.",
    link: { href: "/services/build", label: "See what we build" },
  },
  {
    icon: LifeBuoy,
    step: "03",
    title: "Ongoing Optimization & Support",
    description: "After launch, we monitor your systems, tune performance, add new capabilities as your needs evolve, and train your team. The system grows with your business.",
    link: { href: "/services/support", label: "Explore ongoing support" },
  },
];

const whatWeAutomate = [
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Automated report generation that pulls data from your APIs, processes it through AI agents, and delivers formatted reports to clients or stakeholders without human intervention.",
  },
  {
    icon: FileText,
    title: "Document & Proposal Generation",
    description: "AI systems that compile call notes, email threads, pricing, and context into polished proposals or documents, delivered automatically before every meeting.",
  },
  {
    icon: Brain,
    title: "Workflow Orchestration",
    description: "Multi-agent systems that coordinate complex workflows across your tools: project management, CRM, email, calendar, and custom databases, connected through APIs and webhooks.",
  },
  {
    icon: Zap,
    title: "Client & Customer Communication",
    description: "Automated email sequences, intelligent follow-ups, and AI-generated summaries that keep clients informed without your team writing a single message.",
  },
];

const results = [
  { value: "$85K+", label: "saved per year" },
  { value: "7+", label: "new capabilities delivered" },
  { value: "Seconds", label: "to generate a report" },
  { value: "6 weeks", label: "from discovery to live system" },
];

const industries = [
  { label: "SEO & digital marketing agencies", href: "/industries/seo-agencies" },
  { label: "Professional services firms", href: "/industries/professional-services" },
  { label: "Real estate agents", href: "/industries/real-estate" },
  { label: "Healthcare practices", href: "/industries/healthcare" },
  { label: "E-commerce businesses", href: "/industries/ecommerce" },
];

export default function AiAutomationConsultingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen pt-16">

        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-600/8 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                AI Consulting Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation{" "}
              <span className="gradient-text">Consulting</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Most businesses know they should be using AI. They just don&apos;t know where to start. That&apos;s exactly what AI automation consulting solves: discovering where automation can make the biggest impact, then building the systems to make it real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
              >
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
              >
                See the Full Process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* What AI Automation Consulting Is */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What AI automation consulting actually means
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                It&apos;s not about buying software. It&apos;s about understanding your workflows, finding where manual work is slowing you down, and building custom AI systems that eliminate it.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Workflow audit",
                  description: "Every workflow your team handles is mapped and analyzed for automation potential, from reporting and proposals to follow-ups and data entry.",
                },
                {
                  title: "Custom system design",
                  description: "No templates. Every AI system is architected specifically for your business, integrated with the tools you already use.",
                },
                {
                  title: "Measurable ROI",
                  description: "Every recommendation comes with an ROI projection so you know what each automation is worth before you commit to building it.",
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-5 h-5 text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the Engagement Works */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How the consulting engagement works
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every engagement follows the same three-phase process: discover, build, and optimize.
              </p>
            </div>
            <div className="space-y-8">
              {phases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div key={phase.step} className="flex gap-6 p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-blue-400" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
                        Phase {phase.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                      <p className="text-slate-400 leading-relaxed mb-4">{phase.description}</p>
                      <Link
                        href={phase.link.href}
                        className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                      >
                        {phase.link.label}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Automate */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What AI automation consulting delivers
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every project is different, but these are the most common areas where AI delivers the fastest and largest return.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {whatWeAutomate.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Study Callout */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-800/50 border border-blue-500/20 p-8 sm:p-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Real Result
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                DiamondLinks: from manual work to $85,000+/year in savings
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                DiamondLinks, an SEO and online reputation management agency, reached out for a{" "}
                <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  discovery session
                </Link>{" "}
                after a key employee who handled all client reporting and proposals received an outside job offer. What started as a retention problem became an AI automation consulting engagement that replaced the role entirely and added seven capabilities they never had before.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{r.value}</div>
                    <div className="text-slate-400 text-sm">{r.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-blue-500 pl-6 mb-8">
                <p className="text-slate-300 italic leading-relaxed">
                  "We were about to give a key employee a 25% raise just to keep them. Instead, Brandon built us a system that not only replaced every function that employee handled but added seven new capabilities we never had before. Our reports went from bland Google Docs to stunning automated dashboards, and proposals practically write themselves now."
                </p>
                <footer className="mt-3 text-slate-400 text-sm">DiamondLinks Leadership</footer>
              </blockquote>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <Link
                href="/case-study"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Read the full DiamondLinks case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Industries we work with
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                AI automation consulting applies to any business with repetitive manual workflows. These are the industries we serve most often.
              </p>
            </div>
            <ul className="flex flex-wrap justify-center gap-3 mb-8">
              {industries.map((ind) => (
                <li key={ind.label}>
                  <Link
                    href={ind.href}
                    className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-center text-slate-500 text-sm">
              Don&apos;t see your industry?{" "}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Any business with repetitive workflows is a fit.
              </Link>{" "}
              <Link href="/small-business" className="text-blue-400 hover:text-blue-300">
                See AI automation for small businesses.
              </Link>{" "}
              <Link href="/business-process-automation" className="text-blue-400 hover:text-blue-300">
                Explore our business process automation services.
              </Link>{" "}
              <Link href="/document-workflow-automation" className="text-blue-400 hover:text-blue-300">
                See how we automate document workflows.
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Common questions about AI automation consulting
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "What is AI automation consulting?",
                  a: "It is the process of auditing your business workflows, identifying where AI can eliminate manual work, and building the custom systems to make it happen. The consultant handles the full engagement from discovery through development and ongoing support.",
                },
                {
                  q: "How do I know if I need it?",
                  a: "If your team repeats the same tasks weekly, such as generating reports, sending follow-ups, updating records, or assembling documents, those tasks are strong automation candidates. The discovery call is specifically designed to find every opportunity in your business.",
                },
                {
                  q: "What does an engagement look like from start to finish?",
                  a: "It starts with a free discovery call to map your workflows. From there, you receive an opportunity map with ROI projections. If you proceed, the build phase takes 4 to 8 weeks depending on scope. After launch, ongoing optimization keeps the system performing as your business grows.",
                },
                {
                  q: "What does AI automation consulting cost?",
                  a: "The discovery call is always free. Project pricing is custom scoped after the call, with transparent ROI projections included. Most clients see a return on investment within 60 days of launch.",
                },
              ].map((item) => (
                <div key={item.q} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <h3 className="text-lg font-semibold text-white mb-3">{item.q}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to start your AI automation consulting engagement?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              The first step is a free discovery call. In 30 to 60 minutes, we map your workflows, identify every automation opportunity, and you leave with a clear picture of what AI can do for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
              >
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Meet Brandon Hopkins
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-slate-500 text-sm">
              Free discovery call. No commitment required.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
