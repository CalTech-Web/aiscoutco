import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Brandon Hopkins | AI Scout Co",
  description: "Work directly with Brandon Hopkins, founder and AI consultant. Expert in autonomous AI agents, workflow automation, and API integrations for businesses.",
  alternates: {
    canonical: "https://aiscoutco.com/about",
  },
  openGraph: {
    title: "About Brandon Hopkins | AI Scout Co",
    description: "Work directly with Brandon Hopkins, founder and AI consultant. Expert in autonomous AI agents, workflow automation, and API integrations for businesses.",
    url: "https://aiscoutco.com/about",
    siteName: "AI Scout Co",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Brandon Hopkins | AI Scout Co",
    description: "Work directly with Brandon Hopkins, founder and AI consultant. Expert in autonomous AI agents, workflow automation, and API integrations for businesses.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brandon Hopkins",
  jobTitle: "Founder & AI Consultant",
  url: "https://aiscoutco.com/about",
  worksFor: {
    "@type": "Organization",
    name: "AI Scout Co",
    url: "https://aiscoutco.com",
  },
  description:
    "Brandon Hopkins is the founder of AI Scout Co, specializing in autonomous AI agents, workflow automation, and API integrations for businesses.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
