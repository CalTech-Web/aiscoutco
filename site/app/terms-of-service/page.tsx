import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | AI Scout Co",
  description: "AI Scout Co terms of service. Read the terms and conditions for using our website and AI consulting services.",
  alternates: {
    canonical: "https://aiscoutco.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | AI Scout Co",
    description: "AI Scout Co terms of service. Read the terms and conditions for using our website and AI consulting services.",
    url: "https://aiscoutco.com/terms-of-service",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | AI Scout Co",
    description: "AI Scout Co terms of service. Read the terms and conditions for using our website and AI consulting services.",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-6">
          {[
            {
              title: "1. Agreement to Terms",
              content: (
                <p>
                  By accessing or using the AI Scout Co website at aiscoutco.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
              ),
            },
            {
              title: "2. Services Description",
              content: (
                <>
                  <p>
                    AI Scout Co provides AI consulting, custom AI system development, and automation services to businesses. Our services include <Link href="/services/discovery" className="text-blue-400 hover:text-blue-300 transition-colors">discovery calls</Link>, opportunity mapping, system architecture, <Link href="/services/build" className="text-blue-400 hover:text-blue-300 transition-colors">development and deployment</Link>, and <Link href="/services/support" className="text-blue-400 hover:text-blue-300 transition-colors">ongoing optimization</Link>.
                  </p>
                  <p className="mt-3">
                    Specific service terms, deliverables, timelines, and pricing are defined in individual service agreements executed between AI Scout Co and each client.
                  </p>
                </>
              ),
            },
            {
              title: "3. Website Use",
              content: (
                <>
                  <p>You agree to use this website only for lawful purposes. You may not:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Use the site in any way that violates applicable laws or regulations</li>
                    <li>Attempt to gain unauthorized access to any part of our systems</li>
                    <li>Transmit any harmful, offensive, or disruptive content</li>
                    <li>Use automated tools to scrape or extract content without permission</li>
                  </ul>
                </>
              ),
            },
            {
              title: "4. Intellectual Property",
              content: (
                <p>
                  All content on this website, including text, graphics, logos, and design, is the property of AI Scout Co and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              ),
            },
            {
              title: "5. Disclaimers",
              content: (
                <p>
                  This website is provided on an &ldquo;as is&rdquo; basis. AI Scout Co makes no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of content on this website. Results described in case studies represent specific client outcomes and are not guaranteed for all engagements.
                </p>
              ),
            },
            {
              title: "6. Limitation of Liability",
              content: (
                <p>
                  To the maximum extent permitted by law, AI Scout Co shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services. Our total liability shall not exceed the amount paid by you for services in the 12 months preceding any claim.
                </p>
              ),
            },
            {
              title: "7. Third-Party Links",
              content: (
                <p>
                  Our website may contain links to third-party websites. These links are provided for your convenience only. AI Scout Co has no control over the content of those sites and accepts no responsibility for them or any loss or damage that may arise from your use of them.
                </p>
              ),
            },
            {
              title: "8. Changes to Terms",
              content: (
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.
                </p>
              ),
            },
            {
              title: "9. Governing Law",
              content: (
                <p>
                  These terms are governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms or your use of our services shall be resolved in accordance with applicable law.
                </p>
              ),
            },
            {
              title: "10. Contact Us",
              content: (
                <p>
                  If you have questions about these terms, please contact us at{" "}
                  <a href="mailto:brandon@aiscoutco.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    brandon@aiscoutco.com
                  </a>{" "}or <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">book a free discovery call</Link>.
                </p>
              ),
            },
          ].map((section, i) => (
            <div key={i} className="rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 md:p-8">
              <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
              <div className="text-slate-300 leading-relaxed">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
