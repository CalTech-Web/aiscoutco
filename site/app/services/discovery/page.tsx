import Link from "next/link";
import { ArrowRight, Brain, BarChart3, Clock, CheckCircle, Search, Lightbulb, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Discovery & Strategy | AI Scout Co",
  description: "Start with a deep-dive discovery session. We map your workflows, identify every automation opportunity, and deliver a prioritized roadmap with ROI projections.",
  keywords: "AI discovery, AI strategy, workflow audit, automation roadmap, free AI consultation, AI consulting",
  alternates: {
    canonical: "https://aiscoutco.com/services/discovery",
  },
  openGraph: {
    title: "AI Discovery & Strategy | AI Scout Co",
    description: "Start with a deep-dive discovery session. We map your workflows, identify every automation opportunity, and deliver a prioritized roadmap with ROI projections.",
    url: "https://aiscoutco.com/services/discovery",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Discovery & Strategy | AI Scout Co",
    description: "Start with a deep-dive discovery session. We map your workflows, identify every automation opportunity, and deliver a prioritized roadmap with ROI projections.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/services/discovery#webpage",
    url: "https://aiscoutco.com/services/discovery",
    name: "AI Discovery & Strategy | AI Scout Co",
    description: "Start with a deep-dive discovery session. We map your workflows, identify every automation opportunity, and deliver a prioritized roadmap with ROI projections.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    about: { "@id": "https://aiscoutco.com/services/discovery#service" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://aiscoutco.com/services/discovery#service",
    name: "AI Discovery & Strategy",
    serviceType: "AI Consulting",
    description: "A free discovery session that maps your workflows, identifies every automation opportunity, and delivers a prioritized roadmap with ROI projections.",
    url: "https://aiscoutco.com/services/discovery",
    areaServed: "US",
    provider: {
      "@type": "Organization",
      "@id": "https://aiscoutco.com/#organization",
      name: "AI Scout Co",
      url: "https://aiscoutco.com",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free initial discovery call with no commitment required.",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "AI Discovery & Strategy", item: "https://aiscoutco.com/services/discovery" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the discovery call really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the initial discovery call is completely free with no commitment required. You keep every insight from the session regardless of what you decide to do next.",
        },
      },
      {
        "@type": "Question",
        name: "What happens during a discovery call?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We spend 30 to 60 minutes walking through your daily and weekly workflows. I ask about what takes the most time, what falls through the cracks, and where you wish you had more help. By the end, you will have a clear picture of what AI can do for your specific situation.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to prepare anything before the discovery call?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No preparation is required. Just come ready to talk about how your business operates day to day. The more you can share about your workflows and pain points, the more useful the opportunity map will be.",
        },
      },
      {
        "@type": "Question",
        name: "What do I get after the discovery call?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You receive a detailed opportunity map showing every place AI and automation can save you time or money, with ROI projections for each opportunity and a phased implementation roadmap.",
        },
      },
    ],
  },
];

export default function DiscoveryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl animate-blob-alt" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider">Service</span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">Step 1</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            AI Discovery
            <br />
            <span className="gradient-text">&amp; Strategy</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Before writing a single line of code, we spend time understanding your business. Every workflow, every bottleneck, every manual task. The result is a clear roadmap showing exactly where AI and automation can have the biggest impact.
          </p>
        </div>
      </section>

      {/* What It Is */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Brain size={20} />
              </div>
              <h2 className="text-2xl font-extrabold text-white">What happens during discovery</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              The discovery session is a 30 to 60 minute deep dive into how your business actually operates. We walk through your daily and weekly workflows, identify where time is being lost, and uncover automation opportunities you may not have considered. By the end of the session, you will have a clear picture of what AI can do for your specific situation.
            </p>
          </div>

          {/* What You Get */}
          <h2 className="text-3xl font-extrabold text-white mb-8">What you get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: <Search size={20} />,
                title: "Workflow Mapping",
                desc: "A complete picture of how your business operates today, including every manual process, handoff point, and repetitive task your team handles.",
                color: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400" },
              },
              {
                icon: <Lightbulb size={20} />,
                title: "Opportunity Identification",
                desc: "A ranked list of every place AI and automation can save you time, eliminate errors, or reduce costs, prioritized by impact and feasibility.",
                color: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
              },
              {
                icon: <TrendingUp size={20} />,
                title: "ROI Projections",
                desc: "Concrete estimates of what each automation opportunity is worth, including time saved per week, annual cost savings, and payback timeline.",
                color: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400" },
              },
              {
                icon: <BarChart3 size={20} />,
                title: "Implementation Roadmap",
                desc: "A phased plan showing which improvements to tackle first, what each phase involves, and a realistic timeline from start to deployment.",
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

          {/* Why It Matters */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={20} className="text-cyan-400" />
              <h2 className="text-2xl font-extrabold text-white">Why start here</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Most businesses have a general sense that AI could help them, but they do not know where to start or whether the investment will pay off. The discovery process removes that uncertainty. You walk away knowing exactly what to build, why it matters, and what it will cost, before spending a dollar on development.
            </p>
            <ul className="space-y-3 list-none">
              {[
                "Free initial consultation with no commitment",
                "You keep every insight regardless of next steps",
                "Most clients identify savings they did not expect",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-400 text-sm mt-4 leading-relaxed">
              See how discovery led to $85,000+/year in savings for one client in the{" "}
              <Link href="/case-study" className="text-blue-400 hover:text-blue-300 transition-colors">
                DiamondLinks case study
              </Link>
              .
            </p>
          </div>

          {/* Industries */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-8 mb-12">
            <h2 className="text-xl font-extrabold text-white mb-3">Industries we work with</h2>
            <p className="text-slate-400 text-sm mb-6">We build custom AI systems for service businesses across every industry. If your team does repetitive work, we can automate it.</p>
            <ul className="flex flex-wrap gap-3">
              <li><Link href="/industries/seo-agencies" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">SEO &amp; digital marketing agencies</Link></li>
              <li><Link href="/industries/professional-services" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">Professional services firms</Link></li>
              <li><Link href="/industries/real-estate" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">Real estate agents</Link></li>
              <li><Link href="/industries/healthcare" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">Healthcare practices</Link></li>
              <li><Link href="/industries/ecommerce" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">E-commerce businesses</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 p-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Start with a free discovery call</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Thirty to sixty minutes is all it takes to find out what AI and automation can do for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 btn-shimmer"
              >
                Get My Free Automation Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services/build"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-lg transition-all duration-200 hover:bg-slate-800/50"
              >
                Next: Custom AI Systems
                <ArrowRight size={20} />
              </Link>
            </div>
            <p className="text-amber-400/80 text-xs font-semibold mt-4">I take on 3 to 5 new clients per month. {["January","February","March","April","May","June","July","August","September","October","November","December"][new Date().getMonth()]} spots are available now.</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
