import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Scout Co",
  description: "AI Scout Co privacy policy. Learn how we collect and protect your personal information when you use aiscoutco.com.",
  alternates: {
    canonical: "https://aiscoutco.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | AI Scout Co",
    description: "AI Scout Co privacy policy. Learn how we collect and protect your personal information when you use aiscoutco.com.",
    url: "https://aiscoutco.com/privacy-policy",
    siteName: "AI Scout Co",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AI Scout Co",
    description: "AI Scout Co privacy policy. Learn how we collect and protect your personal information when you use aiscoutco.com.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: March 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-6">
          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p>
                    When you contact us through our website or <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">book a discovery call</Link>, we collect the information you voluntarily provide, including your name, email address, company name, and any details you share in the contact form.
                  </p>
                  <p className="mt-3">
                    We may also collect standard analytics data such as pages visited, browser type, and referring websites. This information is collected in aggregate and is not tied to individual identities.
                  </p>
                </>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <>
                  <p>We use the information you provide to:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Respond to your inquiry and schedule discovery calls</li>
                    <li>Send you information relevant to your request</li>
                    <li>Improve our services and website experience</li>
                    <li>Communicate with you about your project if you become a client</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. Information Sharing",
              content: (
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website or conducting our business, as long as those parties agree to keep this information confidential.
                </p>
              ),
            },
            {
              title: "4. Data Security",
              content: (
                <p>
                  We implement appropriate technical and organizational measures to protect the information you share with us. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              ),
            },
            {
              title: "5. Cookies",
              content: (
                <p>
                  Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect certain functionality on our site.
                </p>
              ),
            },
            {
              title: "6. Third-Party Links",
              content: (
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
                </p>
              ),
            },
            {
              title: "7. Your Rights",
              content: (
                <p>
                  You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at the email address below.
                </p>
              ),
            },
            {
              title: "8. Changes to This Policy",
              content: (
                <p>
                  We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website constitutes acceptance of the updated policy.
                </p>
              ),
            },
            {
              title: "9. Contact Us",
              content: (
                <p>
                  If you have questions about this privacy policy or how we handle your information, please contact us at{" "}
                  <a href="mailto:brandon@aiscoutco.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    brandon@aiscoutco.com
                  </a>{" "}or <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">use our contact page</Link>.
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
