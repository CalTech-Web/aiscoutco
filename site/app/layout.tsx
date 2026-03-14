import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aiscoutco.com"),
  title: "AI Scout Co | Custom AI Systems & Automation",
  description: "AI Scout Co helps businesses discover where AI and automation can save time, cut costs, and replace manual work, then builds the systems to make it happen.",
  keywords: "AI automation, custom AI systems, business automation, AI consulting, agent orchestration",
  alternates: {
    canonical: "https://aiscoutco.com",
  },
  openGraph: {
    title: "AI Scout Co | Custom AI Systems & Automation",
    description: "If you can dream it, I build it. Book a free discovery call and find out where AI can transform your business.",
    url: "https://aiscoutco.com",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Scout Co | Custom AI Systems & Automation",
    description: "If you can dream it, I build it. Book a free discovery call and find out where AI can transform your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#0f172a] text-slate-100 font-sans">
        {/* Ensure content is visible for non-JS crawlers and social preview bots */}
        <noscript>
          <style>{`[style*="opacity: 0"] { opacity: 1 !important; } [style*="transform: translateY"] { transform: none !important; }`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "AI Scout Co",
                url: "https://aiscoutco.com",
                logo: "https://aiscoutco.com/favicon.ico",
                email: "brandon@aiscoutco.com",
                description:
                  "AI Scout Co helps businesses discover where AI and automation can save time, cut costs, and replace manual work, then builds the systems to make it happen.",
                founder: { "@type": "Person", name: "Brandon Hopkins" },
                foundingDate: "2026",
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  bestRating: "5",
                  ratingCount: "1",
                  reviewCount: "1",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "brandon@aiscoutco.com",
                  availableLanguage: "English",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "AI Scout Co",
                url: "https://aiscoutco.com",
              },
            ]),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
