import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Brain, Zap, Clock, Star, Users, Briefcase } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Professional Services | AI Scout Co",
  description: "Law firms, accounting firms, and consultants waste hours on intake, documents, and status updates. We build AI systems that automate those workflows end to end.",
  keywords: "ai workflow automation professional services, ai professional services automation, ai automation for law firms, ai for accounting firms, ai automation for consultants, professional services ai",
  alternates: {
    canonical: "https://aiscoutco.com/industries/professional-services",
  },
  openGraph: {
    title: "AI Automation for Professional Services | AI Scout Co",
    description: "Law firms, accounting firms, and consultants waste hours on intake, documents, and status updates. We build AI systems that automate those workflows end to end.",
    url: "https://aiscoutco.com/industries/professional-services",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Professional Services | AI Scout Co",
    description: "Law firms, accounting firms, and consultants waste hours on intake, documents, and status updates. We build AI systems that automate those workflows end to end.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/industries/professional-services#webpage",
    url: "https://aiscoutco.com/industries/professional-services",
    name: "AI Automation for Professional Services | AI Scout Co",
    description: "Law firms, accounting firms, and consultants waste hours on intake, documents, and status updates. We build AI systems that automate those workflows end to end.",
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
      { "@type": "ListItem", position: 3, name: "Professional Services", item: "https://aiscoutco.com/industries/professional-services" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What parts of a professional services firm can be automated with AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The highest-impact automations for professional services firms are client intake and onboarding, document and contract generation, automated status updates to clients, and CRM data entry. These workflows are highly repetitive and consume significant staff time without adding strategic value.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI automate client intake for law firms and accounting firms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. An AI intake system can collect client information through a structured form, automatically create the client record in your CRM or practice management software, generate an engagement letter or onboarding document, and send a welcome sequence, all without any manual input from your staff.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build an AI automation system for a professional services firm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple automations like document generation or status update emails can be live in one to two weeks. More complex systems involving multiple integrations, such as CRM plus billing plus document management, typically take four to eight weeks. We map the scope during the free discovery call and give you a clear timeline before any work begins.",
        },
      },
    ],
  },
];

const painPoints = [
  {
    icon: Users,
    title: "Client intake is still manual",
    description: "Collecting intake forms, entering data into your CRM or practice management software, and sending onboarding documents by hand is fully automatable and should never require staff time.",
  },
  {
    icon: FileText,
    title: "Document generation takes hours",
    description: "Drafting engagement letters, status reports, proposals, and recurring client deliverables from templates is repetitive work that an AI agent can complete in seconds with the right data.",
  },
  {
    icon: Clock,
    title: "Client updates fall through the cracks",
    description: "Manually emailing clients with status updates, next steps, and deadline reminders creates inconsistent communication and exposes your firm to missed follow-ups.",
  },
];

const automations = [
  {
    icon: Users,
    title: "Automated Client Intake & Onboarding",
    description: "When a new client submits an intake form, an AI pipeline creates the client record in your CRM, generates the engagement letter or onboarding package, and sends the welcome sequence automatically, no staff involvement required.",
  },
  {
    icon: FileText,
    title: "Document & Deliverable Generation",
    description: "Status reports, recurring deliverables, and templated documents are generated automatically when triggered by project milestones or scheduled intervals. Your team reviews and approves; the AI does the drafting.",
  },
  {
    icon: Brain,
    title: "AI-Written Client Summaries",
    description: "At each project milestone or billing cycle, an AI agent analyzes activity, progress, and outcomes, then drafts a personalized client summary email that highlights what was accomplished and what comes next.",
  },
  {
    icon: Zap,
    title: "CRM & Billing System Integration",
    description: "Time entries, client communications, and project status updates flow automatically between your practice management software, CRM, and billing platform through API integrations that eliminate duplicate data entry.",
  },
];

const tools = [
  "Clio", "MyCase", "PracticePanther", "QuickBooks", "Xero",
  "HubSpot", "Salesforce", "Monday.com", "Google Workspace",
  "DocuSign", "Slack", "Microsoft 365",
];

export default function ProfessionalServicesPage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                Professional Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation for{" "}
              <span className="gradient-text">Professional Services</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Law firms, accounting firms, and consulting practices lose hours every week to intake, document generation, and client updates that AI can handle automatically. We build the custom systems that make it happen.
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
                The work that slows professional services firms down
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every hour your staff spends on intake, documents, and status updates is an hour not spent serving clients.
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
            <div className="rounded-2xl bg-gradient-to-br from-purple-900/30 to-slate-800/50 border border-purple-500/20 p-8 sm:p-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Real Result
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                $85,000+/year saved by replacing one manual role
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                DiamondLinks faced the same challenge most professional services firms eventually face: a key person handling critical, repeatable work requested a significant raise or would leave. Instead of absorbing the cost, they asked whether AI could replace and improve every function that role handled. It could, and then some.
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
              <blockquote className="border-l-4 border-purple-500 pl-6 mb-8">
                <p className="text-slate-300 italic leading-relaxed">
                  "We were about to give a key employee a 25% raise just to keep them. Instead, Brandon built us a system that not only replaced every function that employee handled but added seven new capabilities we never had before."
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
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
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
                What we automate for professional services firms
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every system is custom built around your practice, your tools, and your workflows, not a template.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {automations.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-400" />
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
              Integrates with the tools your firm already uses
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              These systems connect to your existing stack through APIs and webhooks. Nothing changes for your team except that the manual work disappears.
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
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Don&apos;t see your tool? If it has an API, we can integrate it.</span>
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Professional services we work with
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, label: "Law Firms", desc: "Client intake, case status updates, document generation, billing integration" },
                { icon: FileText, label: "Accounting Firms", desc: "Client onboarding, recurring report generation, tax prep workflows, QuickBooks integration" },
                { icon: Brain, label: "Consulting Firms", desc: "Proposal automation, deliverable generation, CRM updates, client communication workflows" },
                { icon: Users, label: "Financial Advisors", desc: "Client onboarding, portfolio summary reports, compliance documentation, meeting prep packages" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{item.label}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to automate the work your firm does manually?
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              We start with a free discovery call to map your workflows and identify every automation opportunity. From there, we build and deploy your custom AI system, then support it as your firm grows.
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
