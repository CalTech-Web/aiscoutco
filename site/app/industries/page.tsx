import Link from "next/link";
import { ArrowRight, TrendingUp, Building2, Briefcase, Activity, ShoppingCart, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation by Industry | AI Scout Co",
  description: "Custom AI systems and workflow automation for SEO agencies, professional services, real estate, healthcare, and e-commerce. See how we help your industry.",
  keywords: "ai automation by industry, ai consulting for businesses, workflow automation industries, custom ai systems",
  alternates: {
    canonical: "https://aiscoutco.com/industries",
  },
  openGraph: {
    title: "AI Automation by Industry | AI Scout Co",
    description: "Custom AI systems and workflow automation for SEO agencies, professional services, real estate, healthcare, and e-commerce. See how we help your industry.",
    url: "https://aiscoutco.com/industries",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation by Industry | AI Scout Co",
    description: "Custom AI systems and workflow automation for SEO agencies, professional services, real estate, healthcare, and e-commerce.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/industries#webpage",
    url: "https://aiscoutco.com/industries",
    name: "AI Automation by Industry | AI Scout Co",
    description: "Custom AI systems and workflow automation for SEO agencies, professional services, real estate, healthcare, and e-commerce.",
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
    ],
  },
];

const industries = [
  {
    icon: TrendingUp,
    color: { border: "border-blue-500/30", bg: "bg-blue-500/10", text: "text-blue-400" },
    label: "SEO & Digital Marketing Agencies",
    description: "Automate client reporting, proposal generation, and performance summaries. We built DiamondLinks an AI system that saved $85,000+/year.",
    link: "/industries/seo-agencies",
    cta: "See how we help SEO agencies",
  },
  {
    icon: Briefcase,
    color: { border: "border-purple-500/30", bg: "bg-purple-500/10", text: "text-purple-400" },
    label: "Professional Services",
    description: "Law firms, accounting firms, and consulting practices can automate client intake, document generation, and status updates.",
    link: "/industries/professional-services",
    cta: "See how we help professional services",
  },
  {
    icon: Building2,
    color: { border: "border-orange-500/30", bg: "bg-orange-500/10", text: "text-orange-400" },
    label: "Real Estate",
    description: "Automate lead follow-ups, market reports, CRM updates, and pre-appointment packages so agents focus on closing, not paperwork.",
    link: "/industries/real-estate",
    cta: "See how we help real estate",
  },
  {
    icon: Activity,
    color: { border: "border-emerald-500/30", bg: "bg-emerald-500/10", text: "text-emerald-400" },
    label: "Healthcare",
    description: "Scheduling, patient intake, documentation, and billing workflows are all candidates for AI automation.",
    link: "/industries/healthcare",
    cta: "See how we help healthcare businesses",
  },
  {
    icon: ShoppingCart,
    color: { border: "border-cyan-500/30", bg: "bg-cyan-500/10", text: "text-cyan-400" },
    label: "E-commerce",
    description: "Customer service, inventory management, order tracking, and performance reporting can all be automated with the right AI system.",
    link: "/industries/ecommerce",
    cta: "See how we help e-commerce stores",
  },
  {
    icon: Layers,
    color: { border: "border-pink-500/30", bg: "bg-pink-500/10", text: "text-pink-400" },
    label: "Any Business",
    description: "If your team does the same manual work on a schedule, I can build a system that does it for them. We serve any industry with repetitive workflows.",
    link: "/contact",
    cta: "Get My Free Automation Audit",
  },
];

export default function IndustriesPage() {
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

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation{" "}
              <span className="gradient-text">by Industry</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Every industry has repetitive manual work that AI can handle. We build custom systems tailored to your workflows, your tools, and your business, not off-the-shelf software.
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

        {/* Industry Cards */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`p-6 rounded-xl bg-slate-800/50 border ${item.color.border} flex flex-col`}
                  >
                    <div className={`w-12 h-12 rounded-lg ${item.color.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${item.color.text}`} />
                    </div>
                    <h2 className={`text-lg font-bold mb-3 ${item.color.text}`}>{item.label}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{item.description}</p>
                    {item.link && item.cta && (
                      <Link
                        href={item.link}
                        className={`inline-flex items-center gap-1 text-sm font-semibold ${item.color.text} hover:underline`}
                      >
                        {item.cta}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
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
              Don&apos;t see your industry?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              If your business has repetitive manual workflows, there is almost certainly an AI system that can handle them. Get a free automation audit and I will identify the opportunities specific to your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors"
            >
              Get My Free Automation Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-amber-400/80 text-xs font-semibold mt-6">I take on 3 to 5 new clients per month. {["January","February","March","April","May","June","July","August","September","October","November","December"][new Date().getMonth()]} spots are available now.</p>
          </div>
        </section>

      </div>
    </>
  );
}
