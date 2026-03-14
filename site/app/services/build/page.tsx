import Link from "next/link";
import { ArrowRight, Bot, Link2, BarChart3, FileText, Globe, Settings2, CheckCircle, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Systems | AI Scout Co",
  description: "From autonomous agent pipelines to API integrations and client portals, we build production-ready AI systems custom to your business.",
  alternates: {
    canonical: "https://aiscoutco.com/services/build",
  },
  openGraph: {
    title: "Custom AI Systems | AI Scout Co",
    description: "From autonomous agent pipelines to API integrations and client portals, we build production-ready AI systems custom to your business.",
    url: "https://aiscoutco.com/services/build",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Systems | AI Scout Co",
    description: "From autonomous agent pipelines to API integrations and client portals, we build production-ready AI systems custom to your business.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom AI System Development",
    description: "End-to-end autonomous agent architecture design and deployment. Multi-agent orchestration, API integrations, automated reporting, and custom client portal applications.",
    url: "https://aiscoutco.com/services/build",
    provider: {
      "@type": "Organization",
      name: "AI Scout Co",
      url: "https://aiscoutco.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "Custom AI Systems", item: "https://aiscoutco.com/services/build" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What kinds of AI systems do you build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I build autonomous agent pipelines, API and webhook integrations, automated reporting systems, intelligent document generation, client portal applications, and custom workflow automation. Every system is designed specifically for your business and integrates with the tools you already use.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a custom build take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple automations can be live in a week. More complex multi-agent systems with integrations typically take 4 to 8 weeks. You will get a clear timeline after your discovery call.",
        },
      },
      {
        "@type": "Question",
        name: "What is included in every build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every build includes full source code and documentation, production deployment on reliable infrastructure, 30 days of post-launch support, a team training and walkthrough session, monitoring and alerting setup, and integration testing with your live data.",
        },
      },
      {
        "@type": "Question",
        name: "Will the system work with the tools we already use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every system I build connects to your existing tools through APIs and webhooks. I work with Monday.com, Google Workspace, Salesforce, HubSpot, Slack, and dozens more platforms. Your team does not need to switch to anything new.",
        },
      },
    ],
  },
];

export default function BuildPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-blob-alt" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">Service</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">Step 2</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Custom AI
            <br />
            <span className="gradient-text">Systems</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Once we know what to build, we build it. Every system is custom to your business, integrated with the tools you already use, and designed to run without human intervention.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">What we build</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Bot size={24} />,
                title: "Autonomous Agent Systems",
                desc: "Multi-agent pipelines that handle complex workflows end to end, from triggering on external events to delivering polished outputs, with no human in the loop.",
                color: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400" },
              },
              {
                icon: <Link2 size={24} />,
                title: "API & Webhook Integrations",
                desc: "Connect your existing tools through custom API and webhook architectures. Monday.com, Google Workspace, Salesforce, Slack, and more.",
                color: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
              },
              {
                icon: <BarChart3 size={24} />,
                title: "Automated Reporting",
                desc: "Real-time data pipelines that pull from multiple sources, run through intelligent agents, and deliver polished reports on schedule or on demand.",
                color: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400" },
              },
              {
                icon: <FileText size={24} />,
                title: "Document Generation",
                desc: "Intelligent proposal and document creation that pulls from call recordings, email threads, and databases to produce custom outputs with smart fallback logic.",
                color: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400" },
              },
              {
                icon: <Globe size={24} />,
                title: "Client Portal Applications",
                desc: "Secure web applications with SSO authentication where your clients can access dashboards, reports, and account information in a branded experience.",
                color: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400" },
              },
              {
                icon: <Settings2 size={24} />,
                title: "Workflow Automation",
                desc: "Map any repetitive, rule-based process in your business and replace it with automation that runs it exactly the same way, every time, without your team touching it.",
                color: { border: "border-pink-500/30", bg: "bg-pink-500/10", text: "text-pink-400" },
              },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${item.color.border} bg-slate-900/50`}>
                <div className={`w-12 h-12 rounded-xl ${item.color.bg} border ${item.color.border} flex items-center justify-center ${item.color.text} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* How We Work */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Zap size={20} className="text-blue-400" />
              <h2 className="text-2xl font-extrabold text-white">How we work</h2>
            </div>
            <ol className="space-y-4 list-none">
              {[
                { step: "01", title: "Architecture", desc: "We design the full system before writing code, including agent roles, data flows, API connections, and error handling." },
                { step: "02", title: "Development", desc: "Build in rapid sprints with regular check-ins. You see progress weekly, not just at the end." },
                { step: "03", title: "Testing", desc: "Every system is stress-tested with real data before going live, including edge cases and failure scenarios." },
                { step: "04", title: "Deployment", desc: "Production systems deployed to reliable infrastructure with monitoring, logging, and alerting in place." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-blue-500/60 text-xs font-bold tracking-widest mt-1 w-8 flex-shrink-0" aria-hidden="true">{item.step}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* What Is Included */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 mb-12">
            <h2 className="text-2xl font-extrabold text-white mb-6">Every build includes</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none">
              {[
                "Full source code and documentation",
                "Production deployment on reliable infrastructure",
                "30 days of post-launch support",
                "Team training and walkthrough session",
                "Monitoring and alerting setup",
                "Integration testing with your live data",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 p-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to build something?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Start with a free discovery call to see what is possible for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 btn-shimmer"
              >
                Book a Discovery Call
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services/support"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 hover:bg-slate-800/50"
              >
                Next: Ongoing Support
                <ArrowRight size={20} />
              </Link>
            </div>
            <p className="text-center mt-4 text-slate-500 text-sm">
              Every build starts with{" "}
              <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300 transition-colors">
                AI discovery
              </Link>
              . See it in action in the{" "}
              <Link href="/case-study" className="text-blue-400 hover:text-blue-300 transition-colors">
                DiamondLinks case study
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
