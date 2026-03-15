import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Brain, Zap, Clock, Star, ShoppingCart, BarChart3, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for E-commerce | AI Scout Co",
  description: "Online stores waste hours on customer service, inventory updates, order tracking, and reporting. We build custom AI systems that automate those workflows end to end.",
  keywords: "ai automation for ecommerce, ecommerce ai automation, ai workflow automation ecommerce, ai for online stores, shopify ai automation, ecommerce customer service automation",
  alternates: {
    canonical: "https://aiscoutco.com/industries/ecommerce",
  },
  openGraph: {
    title: "AI Automation for E-commerce | AI Scout Co",
    description: "Online stores waste hours on customer service, inventory updates, order tracking, and reporting. We build custom AI systems that automate those workflows end to end.",
    url: "https://aiscoutco.com/industries/ecommerce",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for E-commerce | AI Scout Co",
    description: "Online stores waste hours on customer service, inventory updates, order tracking, and reporting. We build custom AI systems that automate those workflows end to end.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/industries/ecommerce#webpage",
    url: "https://aiscoutco.com/industries/ecommerce",
    name: "AI Automation for E-commerce | AI Scout Co",
    description: "Online stores waste hours on customer service, inventory updates, order tracking, and reporting. We build custom AI systems that automate those workflows end to end.",
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
      { "@type": "ListItem", position: 3, name: "E-commerce", item: "https://aiscoutco.com/industries/ecommerce" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What e-commerce workflows can be automated with AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The highest-impact AI automations for e-commerce businesses are customer service response handling, order status updates and tracking notifications, inventory reorder alerts and purchase order triggers, and automated performance reporting. These workflows are highly repetitive and volume-dependent, making them ideal candidates for AI systems that scale with your order volume without adding headcount.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI handle e-commerce customer service automatically?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. An AI customer service system can handle order status inquiries, shipping questions, return and exchange requests, and common product questions automatically, escalating only genuinely complex or sensitive issues to a human agent. For most e-commerce stores, 60 to 80 percent of customer service volume is answerable without human involvement.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build an AI automation system for an online store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple automations like order update notifications or inventory alerts can be live in one to two weeks. More complex systems involving customer service AI, multi-platform data pipelines, and automated reporting typically take four to eight weeks. We scope the timeline during the free discovery call before any work begins.",
        },
      },
    ],
  },
];

const painPoints = [
  {
    icon: MessageSquare,
    title: "Customer service volume grows with every order",
    description: "As your store grows, customer service tickets grow with it. Most of those tickets, order status, shipping questions, return requests, are answerable without a human, but someone has to respond to all of them.",
  },
  {
    icon: ShoppingCart,
    title: "Inventory and reorder management is reactive",
    description: "Finding out you ran out of stock after orders are placed, or manually checking reorder levels across hundreds of SKUs, costs you sales and wastes staff time that should go toward growth.",
  },
  {
    icon: BarChart3,
    title: "Performance reporting takes hours every week",
    description: "Pulling data from Shopify, Google Analytics, ad platforms, and email tools into a single report is a recurring manual task that should be automated, not scheduled on someone's calendar.",
  },
];

const automations = [
  {
    icon: MessageSquare,
    title: "AI Customer Service Response System",
    description: "An AI agent monitors your help desk and automatically responds to order status inquiries, shipping questions, return requests, and common product questions. Complex or sensitive issues are escalated to your team with full context already gathered.",
  },
  {
    icon: ShoppingCart,
    title: "Inventory Monitoring & Reorder Automation",
    description: "When a SKU drops below your reorder threshold, an AI pipeline triggers a purchase order draft, notifies your supplier, and updates your inventory management system automatically, before you run out, not after.",
  },
  {
    icon: Zap,
    title: "Order Tracking & Customer Updates",
    description: "From the moment an order is placed to delivery confirmation, an AI system sends proactive tracking updates, handles shipping delay notifications, and follows up post-delivery with review requests, all without manual effort.",
  },
  {
    icon: BarChart3,
    title: "Automated Performance Reporting",
    description: "A scheduled AI pipeline pulls data from your storefront, ad platforms, email tool, and analytics, then assembles a branded performance report and delivers it to your team or stakeholders on a set schedule, no manual data pulling required.",
  },
];

const tools = [
  "Shopify", "WooCommerce", "BigCommerce", "Amazon Seller Central",
  "Klaviyo", "Gorgias", "Zendesk", "Google Analytics",
  "Meta Ads", "Google Ads", "Slack", "Monday.com",
];

export default function EcommercePage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                E-commerce
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation for{" "}
              <span className="gradient-text">E-commerce</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Online stores lose hours every week to customer service tickets, inventory management, and manual reporting that AI can handle automatically. We build custom systems that scale with your order volume without adding headcount.
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
                The manual work that holds e-commerce growth back
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every repetitive task your team handles manually is a ceiling on how fast you can grow without adding staff.
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
            <div className="rounded-2xl bg-gradient-to-br from-cyan-900/30 to-slate-800/50 border border-cyan-500/20 p-8 sm:p-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Real Result
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                $85,000+/year saved by automating one manual role
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                DiamondLinks faced the challenge every growing business faces: a key person handling high-volume, repetitive work needed to be replaced or retained at a much higher cost. They chose automation instead. The result was not just a replacement but a system that did more than the person ever could.
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
              <blockquote className="border-l-4 border-cyan-500 pl-6 mb-8">
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
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
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
                What we automate for e-commerce businesses
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every system is custom built around your store, your tools, and your workflows. The result is a business that scales without proportionally scaling your team.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {automations.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
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
              Integrates with your existing e-commerce stack
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              These systems connect to your storefront, help desk, marketing tools, and analytics platforms through APIs and webhooks. Nothing changes for your team except that the manual work disappears.
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
              <span>Don&apos;t see your platform? If it has an API, we can integrate it.</span>
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
                <Link href="/industries/real-estate" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">
                  Real estate agents
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:border-blue-500/50 text-slate-300 hover:text-white text-sm transition-colors">
                  Healthcare practices
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to scale your store without scaling your team?
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              We start with a free discovery call to map your workflows and identify every automation opportunity. From there, we build and deploy your custom AI system, then support it as your store grows.
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
