import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Wrench, LifeBuoy, FileText, Brain, Zap, BarChart3, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Workflow Automation | AI Scout Co",
  description: "AI Scout Co builds custom document workflow automation systems that generate reports, proposals, and documents without manual effort. Free discovery call.",
  keywords: "document workflow automation, document management workflow, document workflow solutions, document process automation, automated document workflow, intelligent document automation",
  alternates: {
    canonical: "https://aiscoutco.com/document-workflow-automation",
  },
  openGraph: {
    title: "Document Workflow Automation | AI Scout Co",
    description: "AI Scout Co builds custom document workflow automation systems that generate reports, proposals, and documents without manual effort. Free discovery call.",
    url: "https://aiscoutco.com/document-workflow-automation",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Document Workflow Automation | AI Scout Co",
    description: "AI Scout Co builds custom document workflow automation systems that generate reports, proposals, and documents without manual effort. Free discovery call.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/document-workflow-automation#webpage",
    url: "https://aiscoutco.com/document-workflow-automation",
    name: "Document Workflow Automation | AI Scout Co",
    description: "AI Scout Co builds custom document workflow automation systems that generate reports, proposals, and documents without manual effort. Free discovery call.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    about: { "@id": "https://aiscoutco.com/#organization" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "Document Workflow Automation", item: "https://aiscoutco.com/document-workflow-automation" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://aiscoutco.com/document-workflow-automation#service",
    name: "Document Workflow Automation",
    serviceType: "Document Workflow Automation",
    description: "Custom document workflow automation: AI systems that generate reports, proposals, and business documents automatically by pulling data from your existing tools.",
    provider: { "@id": "https://aiscoutco.com/#organization" },
    areaServed: "US",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: "Free discovery call included. Custom-scoped project pricing based on document complexity and workflow requirements.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is document workflow automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Document workflow automation is the use of AI and intelligent agents to create, route, and deliver business documents without manual effort. Instead of someone compiling data, writing reports, or assembling proposals by hand, an automated document workflow pulls from your existing systems and produces finished documents automatically.",
        },
      },
      {
        "@type": "Question",
        name: "What types of documents can be automated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any document that follows a repeatable structure is a strong candidate. The most common include: client reports and performance dashboards, sales proposals and quotes, invoices and billing statements, onboarding documents, compliance reports, meeting summaries, and internal status updates.",
        },
      },
      {
        "@type": "Question",
        name: "How does automated document workflow connect to my existing tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every system is built with direct API and webhook integrations into the tools you already use, such as Monday.com, Google Workspace, CRM platforms, and project management software. Your team does not need to change platforms or learn new tools. The automation connects to your existing workflow and generates documents in the background.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a document workflow automation system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple document automation can be live in one to two weeks. More complex multi-agent document workflows with multiple data sources and custom formatting typically take four to eight weeks from discovery call to launch. You receive a clear timeline and milestone plan during the discovery phase.",
        },
      },
    ],
  },
];

const phases = [
  {
    icon: Search,
    step: "01",
    title: "Document Workflow Discovery",
    description: "We start with a free 30 to 60 minute call to map every document your team produces manually. I identify which workflows have the highest automation ROI and deliver a prioritized implementation plan.",
    link: { href: "/services/discovery", label: "Learn about the discovery session" },
  },
  {
    icon: Wrench,
    step: "02",
    title: "Custom Automation Development",
    description: "I architect and build your document automation system from scratch, connecting AI agents to your data sources and existing tools. Every document type gets its own intelligent pipeline.",
    link: { href: "/services/build", label: "See what we build" },
  },
  {
    icon: LifeBuoy,
    step: "03",
    title: "Optimization & Support",
    description: "After launch, I monitor your document workflows, tune output quality, and expand automation coverage as your document needs evolve. Your investment compounds over time.",
    link: { href: "/services/support", label: "Explore ongoing support" },
  },
];

const whatWeAutomate = [
  {
    icon: BarChart3,
    title: "Client Reports & Dashboards",
    description: "AI agents pull performance data from your systems, process it through specialized sub-agents, and assemble fully formatted client reports without any human intervention.",
  },
  {
    icon: FileText,
    title: "Proposals & Quotes",
    description: "Automated proposal workflows that compile call notes, email threads, pricing, and context into polished, branded proposals delivered automatically before every meeting.",
  },
  {
    icon: Brain,
    title: "Compliance & Internal Reports",
    description: "Recurring compliance reports and internal status documents generated on a schedule or on demand, pulling live data from your systems and formatted to your standards.",
  },
  {
    icon: Zap,
    title: "Invoices & Billing Documents",
    description: "Invoice and billing workflows triggered automatically by project milestones or time entries, reducing billing delays and eliminating manual document assembly.",
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

export default function DocumentWorkflowAutomationPage() {
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
                Document Automation
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Document Workflow{" "}
              <span className="gradient-text">Automation</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Every business produces documents manually: reports assembled from spreadsheets, proposals drafted from scratch, invoices created one by one. Document workflow automation replaces that manual work with intelligent systems that generate polished, accurate documents on their own.
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

        {/* What is document workflow automation */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What is document workflow automation?
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                Document workflow automation uses AI agents and intelligent pipelines to create, populate, and deliver business documents automatically. Instead of a team member collecting data, writing content, and formatting a final document, an automated system does all of it, triggered by an event, a schedule, or a single click.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                {
                  title: "Data-driven document generation",
                  description: "AI agents pull live data from your project management tools, CRM, spreadsheets, and APIs, then assemble it into a finished document without manual copy-paste.",
                },
                {
                  title: "Custom formatting and branding",
                  description: "Every document follows your exact formatting standards and branding. Reports look polished, proposals look professional, and nothing requires a design review.",
                },
                {
                  title: "Triggered or on-demand delivery",
                  description: "Documents are generated automatically when a project milestone is hit, on a recurring schedule, or on demand from a single button click in your existing tools.",
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
                How our document workflow automation process works
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every document automation engagement follows three phases: discover which documents to automate, build the intelligent pipeline, and optimize output over time.
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

        {/* Document types we automate */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Document workflows we automate
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Any document that follows a repeatable structure can be automated. These are the workflows where intelligent document automation delivers the fastest return.
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
                DiamondLinks: document workflow automation that saved $85,000+/year
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                DiamondLinks, an SEO and online reputation management agency, manually produced every client report and sales proposal by hand. A single employee owned both workflows. When that employee received an outside offer, we ran a{" "}
                <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  discovery session
                </Link>{" "}
                to map every document they produced. The result was a fully automated document workflow system that eliminated the role entirely and added seven capabilities the company never had before.
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
                Industries we serve
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Document workflow automation applies to any industry that produces recurring documents manually. These are the industries we work with most.
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
                Any business that produces documents manually is a fit.
              </Link>{" "}
              <Link href="/business-process-automation" className="text-blue-400 hover:text-blue-300">
                See our full business process automation services.
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Common questions about document workflow automation
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "What is document workflow automation?",
                  a: "Document workflow automation uses AI agents and intelligent pipelines to create, populate, and deliver business documents without manual effort. An automated document workflow pulls live data from your existing systems, processes it through AI, and assembles a finished, formatted document, triggered by an event, a schedule, or a single click.",
                },
                {
                  q: "What types of documents can be automated?",
                  a: "Any document that follows a repeatable structure is a strong candidate. The most common include: client performance reports, sales proposals and quotes, invoices and billing statements, onboarding documents, compliance reports, meeting summaries, and internal status updates.",
                },
                {
                  q: "How does automated document workflow connect to my existing tools?",
                  a: "Every system is built with direct API and webhook integrations into your existing tools, such as Monday.com, Google Workspace, Salesforce, HubSpot, and more. Your team does not need to switch platforms. The document automation runs in the background and delivers finished documents to wherever your team already works.",
                },
                {
                  q: "How long does it take to build a document workflow automation system?",
                  a: "Simple document automation can be live in one to two weeks. More complex multi-agent document workflows with multiple data sources typically take four to eight weeks from discovery call to launch. You receive a clear timeline and milestone plan during the discovery phase before committing to build.",
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
              Ready to automate your document workflows?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              The first step is a free discovery call. In 30 to 60 minutes, we map every document your team produces, identify which workflows have the highest ROI, and you leave with a clear picture of what can be automated.
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
                href="/ai-automation-consulting"
                className="inline-flex items-center gap-2 px-8 py-4 border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Learn about AI automation consulting
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
