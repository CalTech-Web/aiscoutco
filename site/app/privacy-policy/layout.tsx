const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aiscoutco.com/privacy-policy#webpage",
    url: "https://aiscoutco.com/privacy-policy",
    name: "Privacy Policy | AI Scout Co",
    description:
      "AI Scout Co privacy policy. Learn how we collect and protect your personal information when you use aiscoutco.com.",
    isPartOf: { "@id": "https://aiscoutco.com/#website" },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://aiscoutco.com/privacy-policy" },
    ],
  },
];

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
