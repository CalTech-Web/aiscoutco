const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/terms-of-service#webpage",
    url: "https://aiscoutco.com/terms-of-service",
    name: "Terms of Service | AI Scout Co",
    description:
      "AI Scout Co terms of service. Read the terms and conditions for using our website and AI consulting services.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://aiscoutco.com/terms-of-service" },
    ],
  },
];

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
