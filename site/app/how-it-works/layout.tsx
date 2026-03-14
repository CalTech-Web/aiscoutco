import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Process | AI Scout Co",
  description: "See how AI Scout Co takes you from discovery to deployed AI systems in 5 phases. Identify your automation opportunities, then watch them get built.",
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
  isPartOf: { "@type": "WebSite", name: "AI Scout Co", url: "https://aiscoutco.com" },
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

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
