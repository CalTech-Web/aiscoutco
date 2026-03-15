import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Wrench, LifeBuoy, BarChart3, FileText, Brain, Zap, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Process Automation Services | AI Scout Co",
  description: "AI Scout Co delivers business process automation services that eliminate manual work. Custom-built AI systems, free discovery call, real ROI.",
  keywords: "business process automation services, business process automation consulting, business process automation consultant, business process automation with ai, intelligent business process automation",
  alternates: {
    canonical: "https://aiscoutco.com/business-process-automation",
  },
  openGraph: {
    title: "Business Process Automation Services | AI Scout Co",
    description: "AI Scout Co delivers business process automation services that eliminate manual work. Custom-built AI systems, free discovery call, real ROI.",
    url: "https://aiscoutco.com/business-process-automation",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Process Automation Services | AI Scout Co",
    description: "AI Scout Co delivers business process automation services that eliminate manual work. Custom-built AI systems, free discovery call, real ROI.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/business-process-automation#webpage",
    url: "https://aiscoutco.com/business-process-automation",
    name: "Business Process Automation Services | AI Scout Co",
    description: "AI Scout Co delivers business process automation services that eliminate manual work. Custom-built AI systems, free discovery call, real ROI.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    about: { "@id": "https://aiscoutco.com/#organization" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "Business Process Automation", item: "https://aiscoutco.com/business-process-automation" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://aiscoutco.com/business-process-automation#service",
    name: "Business Process Automation Services",
    serviceType: "Business Process Automation",
    description: "Custom business process automation services: workflow discovery, AI system development, and ongoing optimization for businesses that want to eliminate manual work.",
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
        name: "What is business process automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Business process automation (BPA) is the use of technology to perform repeatable business tasks with minimal human intervention. Modern BPA uses AI and intelligent agents to handle complex workflows that previously required manual effort, such as report generation, document creation, client communication, and data management.",
        },
      },
      {
        "@type": "Question",
        name: "What business processes can be automated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any process that follows a repeatable pattern is a candidate for automation. The most common include: generating reports and dashboards, creating proposals and documents, sending client or customer communications, updating CRM records, processing invoices, scheduling follow-ups, and compiling data from multiple sources.",
        },
      },
      {
        "@type": "Question",
        name: "How does business process automation consulting work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It starts with a free discovery call to map your current workflows and identify every process that can be automated. You receive a detailed plan with ROI projections. If you proceed, we build your custom automation system in 4 to 8 weeks. After launch, we provide ongoing optimization and support.",
        },
      },
      {
        "@type": "Question",
        name: "How much does business process automation cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every project is custom scoped after the discovery call. Pricing is transparent with clear ROI projections so you know exactly what each automation is worth before committing. The discovery call is always free. Most clients see a return on investment within 60 days.",
        },
      },
    ],
  },
];

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Process Discovery",
    description: "We start with a free 30 to 60 minute call to map every workflow your team handles. I identify the highest-impact automation opportunities, rank them by ROI, and deliver a phased implementation plan.",
    link: { href: "/services/discovery", label: "Learn about the discovery session" },
  },
  {
    icon: Wrench,
    step: "02",
    title: "Custom Automation Development",
    description: "I architect and build your automation systems from scratch, connecting AI agents, APIs, and intelligent workflows directly into the tools you already use. No templates or off-the-shelf software.",
    link: { href: "/services/build", label: "See what we build" },
  },
  {
    icon: LifeBuoy,
    step: "03",
    title: "Optimization & Support",
    description: "After launch, I monitor your systems, tune performance, add new capabilities as your business grows, and train your team. Your automation investment compounds over time.",
    link: { href: "/services/support", label: "Explore ongoing support" },
  },
];

const whatWeAutomate = [
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Automated report generation that pulls data from your systems, processes it through AI agents, and delivers formatted reports to clients or leadership without manual effort.",
  },
  {
    icon: FileText,
    title: "Document & Proposal Creation",
    description: "AI-driven systems that compile notes, email threads, pricing, and context into polished proposals or documents, generated automatically before every meeting or deadline.",
  },
  {
    icon: Brain,
    title: "Workflow Orchestration",
    description: "Multi-agent systems that coordinate complex processes across your tools, connecting project management, CRM, email, calendar, and databases through APIs and webhooks.",
  },
  {
    icon: Zap,
    title: "Client Communication",
    description: "Automated email sequences, AI-generated summaries, and intelligent follow-ups that keep clients informed and deals moving without your team writing a single message.",
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

export default function BusinessProcessAutomationPage() {
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
                Automation Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Business Process{" "}
              <span className="gradient-text">Automation Services</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Every business has processes that run on manual effort. Reports that take hours. Proposals assembled from scratch. Follow-ups that slip through the cracks. Business process automation replaces that manual work with intelligent systems that run on their own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
              >
                Get My Free Automation Audit
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

        {/* What is BPA */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What is business process automation?
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Business process automation uses AI and intelligent software agents to complete repetitive tasks that your team currently handles manually. The goal is not to replace your people, it is to free them from work that a system can do better and faster.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Process mapping",
                  description: "Every workflow your team handles is documented and analyzed, from daily tasks to monthly deliverables, to find every automation opportunity.",
                },
                {
                  title: "Custom-built systems",
                  description: "Every automation is built specifically for your business and integrated into the tools you already use. Nothing generic, no new platforms to learn.",
                },
                {
                  title: "Measurable ROI",
                  description: "Every automation recommendation includes an ROI projection so you know what it is worth before committing to build it.",
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

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                How our business process automation consulting works
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
                Business processes we automate
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Any process that follows a repeatable pattern is a candidate for automation. These are the areas where we deliver the fastest and largest return.
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
                DiamondLinks: business process automation that saved $85,000+/year
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                DiamondLinks, an SEO and online reputation management agency, faced a business process problem: all client reporting and proposal creation was manual. When the employee who handled it received an outside offer, they reached out for a{" "}
                <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  discovery session
                </Link>{" "}
                to explore automation. What started as a retention problem became a complete business process overhaul that eliminated the role entirely and added seven capabilities they never had before.
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

        {/* Industries */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Industries we serve
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Business process automation applies to any industry where manual work slows teams down. These are the industries we work with most.
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
              <Link href="/ai-automation-consulting" className="text-blue-400 hover:text-blue-300">
                Learn about our AI automation consulting approach.
              </Link>{" "}
              <Link href="/document-workflow-automation" className="text-blue-400 hover:text-blue-300">
                See our document workflow automation services.
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Common questions about business process automation
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "What is business process automation?",
                  a: "Business process automation (BPA) uses AI and intelligent software agents to perform repeatable tasks with minimal human intervention. Modern BPA goes beyond simple rule-based triggers, using AI to handle complex, judgment-based processes like report generation, proposal writing, and multi-step client communications.",
                },
                {
                  q: "What business processes can be automated?",
                  a: "Any process that follows a repeatable pattern is a strong candidate. The most impactful areas are: client and internal reporting, proposal and document generation, CRM updates and follow-up sequences, invoice and billing workflows, data aggregation from multiple sources, and recurring client communications.",
                },
                {
                  q: "How does business process automation consulting work?",
                  a: "It starts with a free discovery call to map your current workflows and identify the highest-ROI automation opportunities. You receive a detailed plan before committing to anything. The build phase takes 4 to 8 weeks depending on scope. After launch, ongoing optimization keeps your systems running as your business grows.",
                },
                {
                  q: "How much does business process automation cost?",
                  a: "Every project is custom scoped after the discovery call, with transparent pricing and ROI projections included. The discovery call is always free. Most clients see a return on investment within 60 days of launching their first automation.",
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
              Ready to automate your business processes?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              The first step is a free discovery call. In 30 to 60 minutes, we map your workflows, identify every automation opportunity, and you leave with a clear picture of what is possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
              >
                Get My Free Automation Audit
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
