import Link from "next/link";
import { ArrowRight, Clock, CheckCircle, Settings2, TrendingUp, Zap, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI System Support | AI Scout Co",
  description: "AI systems get better over time. Ongoing AI support keeps your systems running, your team unblocked, and your automation evolving as your business grows.",
  keywords: "AI system support, AI maintenance, automation optimization, ongoing AI support, AI system monitoring",
  alternates: {
    canonical: "https://aiscoutco.com/services/support",
  },
  openGraph: {
    title: "AI System Support | AI Scout Co",
    description: "AI systems get better over time. Ongoing AI support keeps your systems running, your team unblocked, and your automation evolving as your business grows.",
    url: "https://aiscoutco.com/services/support",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI System Support | AI Scout Co",
    description: "AI systems get better over time. Ongoing AI support keeps your systems running, your team unblocked, and your automation evolving as your business grows.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/services/support#webpage",
    url: "https://aiscoutco.com/services/support",
    name: "AI System Support | AI Scout Co",
    description: "AI systems get better over time. Ongoing AI support keeps your systems running, your team unblocked, and your automation evolving as your business grows.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    about: { "@id": "https://aiscoutco.com/services/support#service" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://aiscoutco.com/services/support#service",
    name: "Ongoing AI System Support",
    description: "System monitoring, maintenance, performance optimization, and new capability additions to keep your AI automation running and evolving.",
    url: "https://aiscoutco.com/services/support",
    areaServed: "US",
    provider: {
      "@type": "Organization",
      "@id": "https://aiscoutco.com/#organization",
      name: "AI Scout Co",
      url: "https://aiscoutco.com",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: "Available on a monthly retainer basis after the initial 30-day post-launch support period included with every build.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "Ongoing Support", item: "https://aiscoutco.com/services/support" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I have to commit to ongoing support after the build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Every build includes 30 days of post-launch support at no additional cost. After that, ongoing support is available on a retainer basis. Some clients prefer to own and operate their systems independently, and all source code and documentation is delivered at the end of every project.",
        },
      },
      {
        "@type": "Question",
        name: "How fast do you respond when something breaks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Same business day response for all requests. Critical failures are prioritized immediately. There are no ticket queues or account managers, you communicate directly with the person who built your system.",
        },
      },
      {
        "@type": "Question",
        name: "What does ongoing AI system support include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ongoing support covers system monitoring with alerts for failures, maintenance for API changes and model updates, performance optimization, and new capability additions as your business grows. Support clients also get priority access to discuss and build new features.",
        },
      },
      {
        "@type": "Question",
        name: "Can you add new features after the initial build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. As your business grows, new automation opportunities will emerge. Support clients get priority access to discuss and build new additions. The system is designed to evolve with your business, not stay static.",
        },
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-blob-alt" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">Service</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">Step 3</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            AI System
            <br />
            <span className="gradient-text">Support</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Launching a system is the beginning, not the end. As your business evolves and new opportunities emerge, your AI systems should evolve with them. Ongoing support keeps everything running and improving.
          </p>
        </div>
      </section>

      {/* What Is Included */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">What ongoing support includes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: <Shield size={20} />,
                title: "System Monitoring",
                desc: "Active monitoring of all deployed systems with alerts for any failures or anomalies. Issues get caught and resolved before they affect your business.",
                color: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400" },
              },
              {
                icon: <Settings2 size={20} />,
                title: "Maintenance & Updates",
                desc: "API changes, model updates, and dependency upgrades are handled proactively. Your systems stay current without any effort on your part.",
                color: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400" },
              },
              {
                icon: <TrendingUp size={20} />,
                title: "Performance Optimization",
                desc: "Regular reviews of how systems are performing, with improvements to speed, accuracy, and cost efficiency over time.",
                color: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
              },
              {
                icon: <Zap size={20} />,
                title: "New Capability Additions",
                desc: "As your business grows, new automation opportunities will emerge. Support clients get priority access to discuss and build new additions.",
                color: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400" },
              },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${item.color.border} bg-slate-900/50`}>
                <div className={`w-10 h-10 rounded-xl ${item.color.bg} border ${item.color.border} flex items-center justify-center ${item.color.text} mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Response Time */}
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={20} className="text-blue-400" />
              <h2 className="text-2xl font-extrabold text-white">Response times</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              When something breaks or your team needs help, you hear back the same business day. Most issues are resolved within 24 hours.
            </p>
            <ul className="space-y-3 list-none">
              {[
                "Same business day response for all requests",
                "Critical failures prioritized immediately",
                "Direct line of communication, no ticket queues",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Launch */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 mb-12">
            <h2 className="text-2xl font-extrabold text-white mb-4">After launch</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Every build includes 30 days of post-launch support at no additional cost. After that, ongoing support is available on a retainer basis.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Some clients prefer to own and operate their systems independently after launch. That is completely fine. All source code and documentation is delivered at the end of every project.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 p-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Start with a free discovery call</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Learn what is possible for your business before making any commitment.
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
                href="/services/build"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 hover:bg-slate-800/50"
              >
                See what we build
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
