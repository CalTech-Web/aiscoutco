import Link from "next/link";
import { ArrowRight, CheckCircle, BarChart3, FileText, Brain, Zap, TrendingUp, Clock, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for SEO Agencies | AI Scout Co",
  description: "SEO agencies waste hours on manual client reporting and proposals. We build AI systems that automate both, like we did for DiamondLinks, saving them $85,000+/year.",
  keywords: "ai automation for seo agencies, seo agency automation, automated client reporting, ai for digital marketing agencies, seo reporting automation, proposal automation",
  alternates: {
    canonical: "https://aiscoutco.com/industries/seo-agencies",
  },
  openGraph: {
    title: "AI Automation for SEO Agencies | AI Scout Co",
    description: "SEO agencies waste hours on manual client reporting and proposals. We build AI systems that automate both, saving $85,000+/year.",
    url: "https://aiscoutco.com/industries/seo-agencies",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for SEO Agencies | AI Scout Co",
    description: "SEO agencies waste hours on manual client reporting and proposals. We build AI systems that automate both, saving $85,000+/year.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/industries/seo-agencies#webpage",
    url: "https://aiscoutco.com/industries/seo-agencies",
    name: "AI Automation for SEO Agencies | AI Scout Co",
    description: "SEO agencies waste hours on manual client reporting and proposals. We build AI systems that automate both, like we did for DiamondLinks, saving them $85,000+/year.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    about: { "@id": "https://aiscoutco.com/#organization" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://aiscoutco.com/industries" },
      { "@type": "ListItem", position: 3, name: "SEO Agencies", item: "https://aiscoutco.com/industries/seo-agencies" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What parts of an SEO agency can be automated with AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The highest-impact automations for SEO agencies are client reporting, proposal generation, and performance summaries. These three workflows consume the most manual hours and are almost entirely automatable with the right AI system architecture.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to automate client reporting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most SEO agencies, a fully automated reporting system can be live in 4 to 6 weeks. The system pulls data from your existing APIs, processes it through AI agents, and delivers branded reports to clients automatically every month.",
        },
      },
      {
        "@type": "Question",
        name: "Will the automated reports look as good as manually designed ones?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "They will look significantly better. Automated reports include branded dashboards, charts, graphs, color-coded metrics, and AI-written executive summaries that highlight the most positive changes for each client, something that would take hours to produce manually.",
        },
      },
    ],
  },
];

const painPoints = [
  {
    icon: Clock,
    title: "Manual reporting eats hours every month",
    description: "Pulling data from APIs, formatting it in Google Docs, and emailing clients is fully automatable but it still consumes entire days for most agencies.",
  },
  {
    icon: FileText,
    title: "Proposals take hours before every sales meeting",
    description: "Reviewing call notes, email threads, and pricing to write a custom proposal for every prospect is repetitive work that AI can handle in seconds.",
  },
  {
    icon: TrendingUp,
    title: "Clients want more insight, not more PDFs",
    description: "Agencies that deliver branded dashboards, MTD and YTD metrics, and mid-month check-ins win more contracts and retain clients longer.",
  },
];

const automations = [
  {
    icon: BarChart3,
    title: "Automated Client Reporting",
    description: "When work is logged in your project management tool, an AI pipeline triggers automatically, pulls performance data from your ranking and analytics APIs, and delivers a fully formatted, branded report to the client without any human intervention.",
  },
  {
    icon: Brain,
    title: "Intelligent Email Summaries",
    description: "Each report generates a personalized email that highlights the most positive changes and notable wins for the month. AI analyzes the data and writes the summary so your team never has to.",
  },
  {
    icon: FileText,
    title: "Automatic Proposal Generation",
    description: "The system pulls call recordings, email threads, and your pricing, then assembles a polished proposal and emails it to your salesperson 30 minutes before their next scheduled meeting with the prospect.",
  },
  {
    icon: Zap,
    title: "Client Dashboard Portal",
    description: "A secure web application where clients log in with their existing Google or Microsoft credentials and access all of their historical reports, with search, filtering, and export capabilities.",
  },
];

const results = [
  { value: "$85K+", label: "saved per year" },
  { value: "7+", label: "new features delivered" },
  { value: "Seconds", label: "to generate a report" },
  { value: "30 min", label: "before meetings, proposals arrive automatically" },
];

export default function SeoAgenciesPage() {
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
                SEO &amp; Digital Marketing Agencies
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation for{" "}
              <span className="gradient-text">SEO Agencies</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Your team spends days every month on client reports and proposals that AI can generate in seconds. We build the systems that make it happen, and we have a{" "}
              <Link href="/case-study" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                real case study
              </Link>{" "}
              to prove it.
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
                href="/case-study"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
              >
                See the DiamondLinks Case Study
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
                The work that slows SEO agencies down
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every hour spent on reporting and proposals is an hour not spent on client strategy, link building, or growth.
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
                DiamondLinks: $85,000+/year saved
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                DiamondLinks, a leading SEO and online reputation management agency, faced a critical decision when a key employee who handled all their client reporting and proposal creation requested a significant raise after receiving an outside job offer. Instead of absorbing the cost, they asked whether AI could replace and improve every function that employee handled.
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
                <footer className="mt-3 text-slate-400 text-sm">Hilary Spross, DiamondLinks</footer>
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
                What we automate for SEO agencies
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every system is custom built around your tools and workflows, not a template.
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

        {/* Integration callout */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Integrates with tools you already use
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              These systems connect to your existing stack through APIs and webhooks. Nothing changes for your team except that the manual work disappears.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 mb-12">
              {["Monday.com", "Google Workspace", "Semrush", "Ahrefs", "Google Analytics", "Google Search Console", "HubSpot", "Salesforce", "Slack", "Stripe"].map((tool) => (
                <li
                  key={tool}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Don&apos;t see your tool? If it has an API, we can integrate it.</span>
            </div>
          </div>
        </section>

        {/* Other Industries */}
        <section className="py-12 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-6">
              Other industries we serve
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
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
          </div>
        </section>

        {/* Process path */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              How it works
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              We start with a free discovery call to map your workflows and identify every automation opportunity. From there, we build and deploy your custom AI system, then support it as your agency grows.
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
