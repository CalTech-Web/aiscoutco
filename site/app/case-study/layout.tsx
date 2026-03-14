import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Case Study: DiamondLinks",
  description: "How AI Scout Co automated DiamondLinks' reporting and proposals in 6 weeks, eliminating a $85,000+ salary and delivering 7 new capabilities.",
  keywords: "AI automation case study, DiamondLinks, AI consulting results, automated reporting system, AI ROI, $85000 savings, workflow automation results",
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
  "@id": "https://aiscoutco.com/case-study#article",
  headline: "AI Automation Case Study: DiamondLinks",
  description:
    "How AI Scout Co automated DiamondLinks' reporting and proposals in 6 weeks, eliminating a $85,000+ salary and delivering 7 new capabilities.",
  url: "https://aiscoutco.com/case-study",
  datePublished: "2026-03-14",
  dateModified: "2026-03-14",
  inLanguage: "en-US",
  articleSection: "Case Study",
  keywords: "AI automation, workflow automation, AI consulting, DiamondLinks, autonomous agents, AI ROI, reporting automation, proposal automation, $85000 savings",
  image: {
    "@type": "ImageObject",
    url: "https://aiscoutco.com/assets/case-study/after-report.png",
    description: "DiamondLinks automated reporting dashboard built by AI Scout Co",
  },
  author: {
    "@id": "https://aiscoutco.com/#brandon-hopkins",
  },
  publisher: {
    "@id": "https://aiscoutco.com/#organization",
  },
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://aiscoutco.com/case-study#review",
  itemReviewed: {
    "@type": "Service",
    "@id": "https://aiscoutco.com/services/build#service",
    name: "Custom AI System Development",
    provider: {
      "@id": "https://aiscoutco.com/#organization",
    },
  },
  reviewBody:
    "We were about to give a key employee a 25% raise just to keep them. Instead, Brandon built us a system that not only replaced every function that employee handled but added seven new capabilities we never had before. Our reports went from bland Google Docs to stunning automated dashboards, and proposals practically write themselves now.",
  author: {
    "@type": "Organization",
    name: "DiamondLinks",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  publisher: {
    "@id": "https://aiscoutco.com/#organization",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
    { "@type": "ListItem", position: 2, name: "Case Study: DiamondLinks", item: "https://aiscoutco.com/case-study" },
  ],
};

export default function CaseStudyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
