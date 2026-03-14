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

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
