import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Process | AI Scout Co",
  description: "See how AI Scout Co takes you from discovery to deployed AI systems in 5 phases. Identify your automation opportunities, then watch them get built.",
  keywords: "AI automation process, how AI consulting works, AI implementation steps, automation discovery, AI deployment process, AI system development",
  alternates: {
    canonical: "https://aiscoutco.com/how-it-works",
  },
  openGraph: {
    title: "AI Automation Process | AI Scout Co",
    description: "See how AI Scout Co takes you from discovery to deployed AI systems in 5 phases. Identify your automation opportunities, then watch them get built.",
    url: "https://aiscoutco.com/how-it-works",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Process | AI Scout Co",
    description: "See how AI Scout Co takes you from discovery to deployed AI systems in 5 phases. Identify your automation opportunities, then watch them get built.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AI Automation Process | AI Scout Co",
  url: "https://aiscoutco.com/how-it-works",
  description:
    "See how AI Scout Co takes you from discovery to deployed AI systems in 5 phases. Identify your automation opportunities, then watch them get built.",
  isPartOf: { "@id": "https://aiscoutco.com/#website" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to build a system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the scope. Simple automations can be live in a week. More complex multi-agent systems with integrations typically take 4 to 8 weeks. You will get a clear timeline during the discovery process.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to understand AI to work with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. My job is to understand the technical complexity so you do not have to. You tell me what you want your work and life to look like, and I figure out how to build it.",
      },
    },
    {
      "@type": "Question",
      name: "What tools and platforms do you integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I integrate with whatever you already use. Monday.com, Google Workspace, Salesforce, HubSpot, Slack, and dozens more. The systems I build connect to your existing workflow through APIs and webhooks, so nothing changes for your team except that manual work disappears.",
      },
    },
    {
      "@type": "Question",
      name: "Will this replace my employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. In many cases, automation handles the repetitive work so your team can spend their time on things that actually need a human. In other cases, automation fully replaced a role and delivered more capability than the previous employee provided.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
    { "@type": "ListItem", position: 2, name: "How It Works", item: "https://aiscoutco.com/how-it-works" },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How AI Automation Works: 5-Step Process",
  description: "How AI Scout Co takes your business from discovery to deployed AI systems in 5 phases.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Discovery Call",
      text: "We sit down together and I learn your workflows, pain points, and goals, then identify every place AI and automation can help.",
      url: "https://aiscoutco.com/services/discovery",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Opportunity Map",
      text: "I deliver a detailed plan showing each automation opportunity ranked by impact, complete with ROI projections and implementation timeline.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Build & Deploy",
      text: "I architect and build your custom AI systems, integrating autonomous agents, API connections, and intelligent workflows into your existing tools.",
      url: "https://aiscoutco.com/services/build",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Launch & Train",
      text: "Your new systems go live. I walk your team through everything and make sure the transition is seamless.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Optimize & Evolve",
      text: "As your business grows, I continue refining your systems and adding new capabilities.",
      url: "https://aiscoutco.com/services/support",
    },
  ],
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      {children}
    </>
  );
}
