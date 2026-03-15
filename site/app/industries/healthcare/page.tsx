import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Brain, Zap, Clock, Star, Calendar, Activity } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation for Healthcare | AI Scout Co",
  description: "Medical practices and healthcare businesses waste hours on scheduling, patient intake, documentation, and billing. We build AI systems that automate those administrative workflows.",
  keywords: "ai automation for healthcare, ai automation healthcare, healthcare ai workflow automation, ai for medical practices, healthcare administrative automation, ai patient intake automation",
  alternates: {
    canonical: "https://aiscoutco.com/industries/healthcare",
  },
  openGraph: {
    title: "AI Automation for Healthcare | AI Scout Co",
    description: "Medical practices and healthcare businesses waste hours on scheduling, patient intake, documentation, and billing. We build AI systems that automate those administrative workflows.",
    url: "https://aiscoutco.com/industries/healthcare",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Healthcare | AI Scout Co",
    description: "Medical practices and healthcare businesses waste hours on scheduling, patient intake, documentation, and billing. We build AI systems that automate those administrative workflows.",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/industries/healthcare#webpage",
    url: "https://aiscoutco.com/industries/healthcare",
    name: "AI Automation for Healthcare | AI Scout Co",
    description: "Medical practices and healthcare businesses waste hours on scheduling, patient intake, documentation, and billing. We build AI systems that automate those administrative workflows.",
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
      { "@type": "ListItem", position: 3, name: "Healthcare", item: "https://aiscoutco.com/industries/healthcare" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What healthcare workflows can be automated with AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The highest-impact AI automations for healthcare businesses are administrative: patient scheduling and appointment reminders, intake form collection and record creation, insurance eligibility verification, billing workflow triggers, and post-visit communication sequences. These are fully repetitive, rules-based workflows that do not involve clinical decisions and are strong candidates for automation.",
        },
      },
      {
        "@type": "Question",
        name: "Can AI help with patient scheduling and appointment reminders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. An AI scheduling system can handle appointment confirmation emails, automated reminder sequences at 48 hours and 24 hours before appointments, reschedule requests, and waitlist management. This reduces no-shows and frees front desk staff from phone and email follow-up.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build an AI automation system for a healthcare practice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simple automations like appointment reminders or intake form workflows can be live in one to two weeks. More complex systems that integrate with EHR platforms, billing software, and communication tools typically take four to eight weeks. We scope the timeline during the free discovery call before any work begins.",
        },
      },
    ],
  },
];

const painPoints = [
  {
    icon: Calendar,
    title: "Scheduling and reminders are still manual",
    description: "Front desk staff spend hours confirming appointments, sending reminders, and managing reschedules. An AI system handles all of it automatically from the moment an appointment is booked.",
  },
  {
    icon: FileText,
    title: "Patient intake is a paper and email process",
    description: "Collecting intake forms, entering data into your EHR or practice management system, and sending onboarding instructions by hand wastes staff time that should go toward patient care.",
  },
  {
    icon: Clock,
    title: "Billing and follow-up workflows fall through the cracks",
    description: "Insurance eligibility checks, claim submission triggers, and patient balance follow-ups are repetitive enough to automate fully, but most practices still do them manually.",
  },
];

const automations = [
  {
    icon: Calendar,
    title: "Automated Scheduling & Appointment Reminders",
    description: "When an appointment is booked, an AI pipeline sends a confirmation, schedules a 48-hour reminder, and a 24-hour reminder, then monitors for responses. Reschedule requests trigger a new booking flow automatically, no staff involvement required.",
  },
  {
    icon: FileText,
    title: "Patient Intake & Onboarding Automation",
    description: "New patient intake forms are collected digitally, reviewed by an AI agent for completeness, and the patient record is created automatically in your practice management system. A personalized onboarding sequence is sent without anyone touching it.",
  },
  {
    icon: Brain,
    title: "Post-Visit Communication & Follow-Up",
    description: "After visits, an AI system sends personalized follow-up instructions, satisfaction surveys, and recall reminders on schedule. Patient communication happens consistently without relying on staff memory.",
  },
  {
    icon: Zap,
    title: "Billing Workflow & Insurance Integration",
    description: "Insurance eligibility verification, claim submission triggers, and patient balance follow-up emails can all be automated through API integrations with your billing software and EHR platform, eliminating manual data entry between systems.",
  },
];

const tools = [
  "Epic", "Athenahealth", "Practice Fusion", "Kareo",
  "DrChrono", "QuickBooks", "Google Workspace",
  "Microsoft 365", "Calendly", "Twilio", "Stripe",
];

export default function HealthcarePage() {
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
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                Healthcare
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Automation for{" "}
              <span className="gradient-text">Healthcare</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Medical practices and healthcare businesses lose hours every week to scheduling, intake, and administrative follow-up that AI can handle automatically. We build custom systems that free your staff to focus on patients.
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
                The administrative work that pulls healthcare teams away from patients
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every hour your staff spends on scheduling, intake, and follow-up is an hour not spent on patient care.
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
            <div className="rounded-2xl bg-gradient-to-br from-emerald-900/30 to-slate-800/50 border border-emerald-500/20 p-8 sm:p-12">
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                  Real Result
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                $85,000+/year saved by automating one manual role
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                DiamondLinks faced the same challenge many healthcare businesses face: a key person handling critical, repeatable work needed to be replaced or their cost would grow significantly. Instead of absorbing the cost, they asked whether AI could replace and improve every function that role handled. It could, and then some.
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
              <blockquote className="border-l-4 border-emerald-500 pl-6 mb-8">
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
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
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
                What we automate for healthcare businesses
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Every system is custom built around your practice, your tools, and your patient workflows, not a template. We focus on administrative automation, not clinical decisions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {automations.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-400" />
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
              Integrates with the tools your practice already uses
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              These systems connect to your existing EHR, practice management software, and communication tools through APIs and webhooks. Nothing changes for your team except that the manual work disappears.
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

        {/* Who we work with */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Healthcare businesses we work with
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Activity, label: "Medical Practices", desc: "Scheduling, intake, post-visit follow-up, and billing workflow automation for independent and group practices" },
                { icon: Brain, label: "Mental Health Practices", desc: "Session reminders, intake automation, progress note templates, and client communication workflows" },
                { icon: Calendar, label: "Dental & Specialty Clinics", desc: "Appointment reminders, recall campaigns, new patient onboarding, and insurance verification workflows" },
                { icon: FileText, label: "Healthcare Staffing & Admin", desc: "Credential verification workflows, scheduling coordination, compliance documentation, and staff communication automation" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-emerald-400" />
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
              Ready to give your team more time for patient care?
            </h2>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              We start with a free discovery call to map your administrative workflows and identify every automation opportunity. From there, we build and deploy your custom AI system, then support it as your practice grows.
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
