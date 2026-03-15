import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Brain, Zap, Clock, Star, BarChart, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Small Business | AI Scout Co",
  description: "Small businesses waste hours on repetitive manual work that AI can handle automatically. We build custom AI systems that eliminate that work so you can focus on growing your business.",
  keywords: "ai automation for small business, ai automation small business, ai workflow automation small business, ai automation services small business, small business ai automation, hire ai consultant small business",
  alternates: {
    canonical: "https://aiscoutco.com/small-business",
  },
  openGraph: {
    title: "AI Automation for Small Business | AI Scout Co",
    description: "Small businesses waste hours on repetitive manual work that AI can handle automatically. We build custom AI systems that eliminate that work so you can focus on growing your business.",
    url: "https://aiscoutco.com/small-business",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Small Business | AI Scout Co",
    description: "Small businesses waste hours on repetitive manual work that AI can handle automatically. We build custom AI systems that eliminate that work so you can focus on growing your business.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/small-business#webpage",
    url: "https://aiscoutco.com/small-business",
    name: "AI Automation for Small Business | AI Scout Co",
    description: "Small businesses waste hours on repetitive manual work that AI can handle automatically. We build custom AI systems that eliminate that work so you can focus on growing your business.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    about: { "@id": "https://aiscoutco.com/#organization" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "AI Automation for Small Business", item: "https://aiscoutco.com/small-business" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://aiscoutco.com/small-business#service",
    name: "AI Automation for Small Business",
    serviceType: "AI Business Automation",
    description: "Custom AI systems and workflow automation built for small businesses. Eliminates manual, repetitive work through autonomous agents, API integrations, and intelligent workflows.",
    provider: { "@id": "https://aiscoutco.com/#organization" },
    areaServed: "US",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: "Custom-scoped based on a free discovery call. Transparent pricing with ROI projections before any work begins.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kinds of tasks can AI automate for a small business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any task that is repetitive, rule-based, and done the same way every time is a candidate for automation. For small businesses, the highest-impact automations are reporting and data aggregation, client communication and follow-up, proposal and document generation, scheduling and appointment reminders, invoice and billing workflows, and data entry between software tools.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need technical knowledge to use AI automation as a small business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. My job is to understand the technical complexity so you do not have to. You describe your workflows and the manual work you want to eliminate, and I build the systems that make it happen. Your team interacts with the same tools they already use, the work just happens automatically in the background.",
        },
      },
      {
        "@type": "Question",
        name: "How much does AI automation cost for a small business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every project is custom scoped based on a free discovery call. I provide transparent pricing with clear ROI projections so you can see exactly what you are getting and what it is worth to your business. Most clients see a return within the first 60 days. The free discovery call costs nothing and requires no commitment.",
        },
      },
    ],
  },
];

const painPoints = [
  {
    icon: Clock,
    title: "Manual, repetitive work is eating your time",
    description: "Copying data between tools, sending follow-up emails, generating reports by hand, and managing routine communications are the kinds of tasks that consume entire days. Every hour spent on this is an hour not spent growing your business.",
  },
  {
    icon: FileText,
    title: "You need more output than your team can produce",
    description: "Hiring is expensive and slow. But the volume of work is not slowing down. AI systems can handle entire categories of routine output, from reports to proposals to client updates, without adding headcount.",
  },
  {
    icon: BarChart,
    title: "You are making decisions without good data",
    description: "When reports take hours to compile, you run them less often or not at all. Automated reporting pipelines deliver clean, accurate data on demand, so you always know where things stand.",
  },
];

const automations = [
  {
    icon: BarChart,
    title: "Automated Reporting & Dashboards",
    description: "Raw data from your tools gets pulled, processed, and assembled into formatted reports automatically. No manual compilation, no waiting. Delivered on a schedule or on demand, in the format your team or clients need.",
  },
  {
    icon: FileText,
    title: "Proposal & Document Generation",
    description: "An AI agent pulls call notes, email threads, pricing data, and service details, then assembles a complete, polished proposal before every meeting. What used to take hours now takes seconds and happens automatically.",
  },
  {
    icon: Mail,
    title: "Client Communication & Follow-Up",
    description: "Follow-up emails, onboarding sequences, appointment reminders, and status updates can all be triggered automatically based on actions in your existing tools. Your clients hear from you consistently without any manual effort.",
  },
  {
    icon: Zap,
    title: "Workflow & Data Entry Automation",
    description: "When information moves between tools manually, it creates delay and errors. AI agents with API integrations eliminate the copy-paste work between your CRM, project management software, billing tools, and communication platforms.",
  },
];

const tools = [
  "Monday.com", "HubSpot", "Salesforce", "Google Workspace",
  "Microsoft 365", "QuickBooks", "Xero", "Slack",
  "Calendly", "Stripe", "Zapier", "Notion",
];

export default function SmallBusinessPage() {
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
                Small Business
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation for{" "}
              <span className="gradient-text">Small Business</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Small businesses lose dozens of hours every week to repetitive manual work. We build custom AI systems that handle those tasks automatically, so you and your team can focus on the work that actually grows your business.
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
                See How It Works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                The manual work that holds small businesses back
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Most small businesses are not short on ideas. They are short on time and capacity because too much of both go toward work a system could handle.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proof point */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-800/50 border border-blue-500/20 p-8 sm:p-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  Real Result
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                $85,000+/year saved. Seven new capabilities added. Zero new hires.
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                DiamondLinks was facing a situation many small businesses know well: a key person handled critical work, they were about to leave, and the cost of replacing them was growing. Instead of absorbing that cost, they asked whether AI could handle everything that person did, and do it better. It could.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {[
                  { value: "$85K+", label: "saved per year" },
                  { value: "7+", label: "new capabilities added" },
                  { value: "Seconds", label: "to generate what took hours" },
                  { value: "Zero", label: "manual steps for routine work" },
                ].map((r) => (
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

        {/* What We Automate */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What we automate for small businesses
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every system is custom built around your business, your tools, and your workflows. We start with a{" "}
                <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  free discovery session
                </Link>{" "}
                to identify exactly where automation will have the biggest impact for you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {automations.map((item) => {
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

        {/* Integrations */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Integrates with the tools your small business already uses
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              You do not need to switch platforms. The AI systems I build connect to your existing tools through APIs and webhooks so the manual work disappears without changing how your team works.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 mb-12">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <CheckCircle className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>Don&apos;t see your platform? If it has an API, we can integrate it.</span>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-12 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-4">
              We work with small businesses across industries
            </p>
            <ul className="flex flex-wrap justify-center gap-3 mb-6">
              <li>
                <Link href="/industries/seo-agencies" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">
                  SEO &amp; digital marketing agencies
                </Link>
              </li>
              <li>
                <Link href="/industries/professional-services" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">
                  Professional services firms
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">
                  Real estate agents
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">
                  Healthcare practices
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">
                  E-commerce businesses
                </Link>
              </li>
            </ul>
            <p className="text-slate-500 text-sm">
              Any small business with repetitive manual workflows is a candidate.{" "}
              <Link href="/ai-automation-consulting" className="text-blue-400 hover:text-blue-300">
                Learn what AI automation consulting involves.
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Common questions from small business owners
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "What kinds of tasks can AI automate for a small business?",
                  a: "Any task that is repetitive, rule-based, and done the same way every time is a candidate. For small businesses, the highest-impact automations are reporting and data aggregation, client communication and follow-up, proposal and document generation, scheduling and appointment reminders, invoice and billing workflows, and data entry between software tools.",
                },
                {
                  q: "Do I need technical knowledge to get started?",
                  a: "Not at all. You describe your workflows and the manual work you want to eliminate, and I build the systems that make it happen. Your team interacts with the same tools they already use. The work just happens automatically in the background.",
                },
                {
                  q: "How much does AI automation cost for a small business?",
                  a: "Every project is custom scoped after the discovery call. I provide transparent pricing with ROI projections before any work begins, so you can see exactly what you are getting and what it is worth. Most clients see a return within the first 60 days.",
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
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Find out where AI can save your small business the most time
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              We start with a free discovery call where I learn your workflows and identify every place AI and automation can help. From there, I build and deploy a custom system, then support it as your business grows.
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
                href="/how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
              >
                See the full process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-slate-500 text-sm">
              Free discovery call. No commitment required.{" "}
              <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300">
                Learn about the discovery session.
              </Link>
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
