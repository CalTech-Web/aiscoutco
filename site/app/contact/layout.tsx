import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call | AI Scout Co",
  description: "Book a free 30 to 60 minute AI discovery call with Brandon Hopkins. Find out exactly where automation can save your business time and money.",
  alternates: {
    canonical: "https://aiscoutco.com/contact",
  },
  openGraph: {
    title: "Book a Free Discovery Call | AI Scout Co",
    description: "Book a free 30 to 60 minute AI discovery call with Brandon Hopkins. Find out exactly where automation can save your business time and money.",
    url: "https://aiscoutco.com/contact",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Discovery Call | AI Scout Co",
    description: "Book a free 30 to 60 minute AI discovery call with Brandon Hopkins. Find out exactly where automation can save your business time and money.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book a Free Discovery Call | AI Scout Co",
  url: "https://aiscoutco.com/contact",
  description:
    "Book a free 30 to 60 minute AI discovery call with Brandon Hopkins. Find out exactly where automation can save your business time and money.",
  isPartOf: { "@type": "WebSite", name: "AI Scout Co", url: "https://aiscoutco.com" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://aiscoutco.com" },
    { "@type": "ListItem", position: 2, name: "Book a Discovery Call", item: "https://aiscoutco.com/contact" },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
