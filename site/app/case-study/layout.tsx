import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Case Study: DiamondLinks",
  description: "How AI Scout Co automated DiamondLinks' reporting and proposals in 6 weeks, eliminating a $85,000+ salary and delivering 7 new capabilities.",
  alternates: {
    canonical: "https://aiscoutco.com/case-study",
  },
  openGraph: {
    title: "AI Automation Case Study: DiamondLinks",
    description: "How AI Scout Co automated DiamondLinks' reporting and proposals in 6 weeks, eliminating a $85,000+ salary and delivering 7 new capabilities.",
    url: "https://aiscoutco.com/case-study",
    siteName: "AI Scout Co",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Case Study: DiamondLinks",
    description: "How AI Scout Co automated DiamondLinks' reporting and proposals in 6 weeks, eliminating a $85,000+ salary and delivering 7 new capabilities.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Automation Case Study: DiamondLinks",
  description:
    "How AI Scout Co automated DiamondLinks' reporting and proposals in 6 weeks, eliminating a $85,000+ salary and delivering 7 new capabilities.",
  url: "https://aiscoutco.com/case-study",
  author: {
    "@type": "Person",
    name: "Brandon Hopkins",
    url: "https://aiscoutco.com/about",
  },
  publisher: {
    "@type": "Organization",
    name: "AI Scout Co",
    url: "https://aiscoutco.com",
  },
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
