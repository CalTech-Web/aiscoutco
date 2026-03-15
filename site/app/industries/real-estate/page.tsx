import Link from "next/link";
import { ArrowRight, CheckCircle, BarChart3, FileText, Brain, Mail, Clock, Database, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Real Estate Agents | AI Scout Co",
  description: "Real estate agents waste hours on follow-ups, market reports, and CRM updates. We build AI workflow automation systems so you can focus on closing deals.",
  keywords: "ai automation for real estate, ai workflow automation real estate, real estate ai automation, ai crm workflow automation real estate, ai automation for real estate agents",
  alternates: {
    canonical: "https://aiscoutco.com/industries/real-estate",
  },
  openGraph: {
    title: "AI Automation for Real Estate Agents | AI Scout Co",
    description: "Real estate agents waste hours on follow-ups, market reports, and CRM updates. We build AI workflow automation systems so you can focus on closing deals.",
    url: "https://aiscoutco.com/industries/real-estate",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Real Estate Agents | AI Scout Co",
    description: "Real estate agents waste hours on follow-ups, market reports, and CRM updates. We build AI workflow automation systems so you can focus on closing deals.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/industries/real-estate#webpage",
    url: "https://aiscoutco.com/industries/real-estate",
    name: "AI Automation for Real Estate Agents | AI Scout Co",
    description: "Real estate agents waste hours on follow-ups, market reports, and CRM updates. We build AI workflow automation systems so you can focus on closing deals.",
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
      { "@type": "ListItem", position: 3, name: "Real Estate", item: "https://aiscoutco.com/industries/real-estate" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What real estate tasks can be automated with AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The highest-impact real estate automations are lead follow-up email sequences, market report generation, CRM data entry from call recordings, listing description writing, and pre-showing or pre-listing appointment packages. These workflows consume the most manual hours and are almost entirely automatable with the right AI system architecture.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI automate follow-up emails without sounding generic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The AI system reads call notes, email threads, and showing details to write follow-up emails that reference specific properties, objections, and client preferences. Every message sounds personally written because the context is genuinely unique to that client.",
        },
      },
      {
        "@type": "Question",
        name: "How does automated market report generation work for real estate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The system connects to your MLS data, analytics platforms, and CRM, then pulls the relevant metrics for each client or farm area. An AI agent assembles a branded, formatted report and delivers it by email on whatever schedule you set, whether monthly, quarterly, or on demand.",
        },
      },
    ],
  },
];

const painPoints = [
  {
    icon: Mail,
    title: "Follow-up emails pile up after every showing",
    description: "Writing personalized follow-up messages for every prospect, referencing specific properties and conversations, takes time you could spend on new listings.",
  },
  {
    icon: BarChart3,
    title: "Market reports are built manually every month",
    description: "Pulling MLS data, formatting it, and sending neighborhood reports to your sphere of influence is repetitive work that AI can handle automatically.",
  },
  {
    icon: Database,
    title: "CRM updates happen after the fact, if at all",
    description: "Logging showing notes, call summaries, and next steps into your CRM after every appointment eats into the hours you need for active clients.",
  },
];

const automations = [
  {
    icon: Mail,
    title: "Automated Lead Follow-Up",
    description: "The system reads your call recordings and showing notes, then drafts and sends personalized follow-up emails that reference specific properties, objections, and client goals. Every message sounds written by you because the context is genuinely yours.",
  },
  {
    icon: BarChart3,
    title: "Automated Market Reports",
    description: "Connect your MLS data and analytics platforms once. Every month, an AI agent pulls the latest stats for each client or farm area, formats a branded report, and delivers it automatically, without you touching a spreadsheet.",
  },
  {
    icon: Database,
    title: "CRM Auto-Population",
    description: "After every call or showing, the system extracts key details from your call recording or meeting notes and updates your CRM automatically. Your contact history stays current without you logging a single entry.",
  },
  {
    icon: FileText,
    title: "Pre-Appointment Packages",
    description: "Before every listing appointment or buyer consultation, the system automatically generates a personalized package: comparable properties, neighborhood stats, and a tailored presentation, delivered to you 30 minutes before the meeting.",
  },
];

const results = [
  { value: "20+", label: "manual hours eliminated per week" },
  { value: "Seconds", label: "to generate a market report" },
  { value: "30 min", label: "before appointments, packages arrive automatically" },
  { value: "Zero", label: "CRM entries done by hand" },
];

export default function RealEstatePage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-amber-600/8 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                Real Estate
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation for{" "}
              <span className="gradient-text">Real Estate Agents</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Follow-up emails, market reports, and CRM updates consume hours every week that you should be spending with clients. We build AI workflow automation systems that handle every repetitive task so you can focus on closings.
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
                The work that slows real estate agents down
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every hour spent on manual admin is an hour not spent showing properties, building relationships, or growing your book.
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

        {/* Proof Point */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-br from-blue-900/30 to-slate-800/50 border border-blue-500/20 p-8 sm:p-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Proven Results
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The same systems that save $85,000+/year work for any service business
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We built an automated reporting and proposal system for{" "}
                <Link href="/industries/seo-agencies" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  DiamondLinks, a leading SEO agency
                </Link>
                , that eliminated 20+ manual hours per week and saved over $85,000 per year. The same architecture, automated data pipelines, AI-written client communications, and pre-meeting packages auto-delivered 30 minutes before every appointment, applies directly to real estate workflows.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {results.map((r) => (
                  <div key={r.label} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{r.value}</div>
                    <div className="text-slate-400 text-sm">{r.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-blue-500 pl-6 mb-6">
                <p className="text-slate-300 italic leading-relaxed">
                  "We were about to give a key employee a 25% raise just to keep them. Instead, Brandon built us a system that not only replaced every function that employee handled but added seven new capabilities we never had before."
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
                Read the full case study
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
                What we automate for real estate agents
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every system is custom built around your CRM, your tools, and your workflows. Not a template, not an off-the-shelf product.
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
              Integrates with the tools you already use
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              These systems connect to your existing stack through APIs and webhooks. Nothing changes for your team except that the manual work disappears.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 mb-12">
              {["Follow Up Boss", "HubSpot", "Salesforce", "Google Workspace", "Monday.com", "Slack", "DocuSign", "Zillow API", "MLS Data Feeds", "Calendly"].map((tool) => (
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
              We start with a free{" "}
              <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300">
                AI discovery call
              </Link>{" "}
              to map your workflows and identify every automation opportunity. From there, we{" "}
              <Link href="/services/build" className="text-blue-400 hover:text-blue-300">
                build and deploy your custom AI system
              </Link>
              , then{" "}
              <Link href="/services/support" className="text-blue-400 hover:text-blue-300">
                support it as your business grows
              </Link>
              .
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
