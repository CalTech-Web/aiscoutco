import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AI Scout Co",
  description: "AI Scout Co terms of service. Read the terms and conditions for using our website and AI consulting services.",
  alternates: {
    canonical: "https://aiscoutco.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-extrabold text-white mb-3">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the AI Scout Co website at aiscoutco.com, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Services Description</h2>
            <p>
              AI Scout Co provides AI consulting, custom AI system development, and automation services to businesses. Our services include discovery calls, opportunity mapping, system architecture, development, deployment, and ongoing optimization.
            </p>
            <p className="mt-3">
              Specific service terms, deliverables, timelines, and pricing are defined in individual service agreements executed between AI Scout Co and each client.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Website Use</h2>
            <p>You agree to use this website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Use the site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of our systems</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>Use automated tools to scrape or extract content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and design, is the property of AI Scout Co and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Disclaimers</h2>
            <p>
              This website is provided on an &ldquo;as is&rdquo; basis. AI Scout Co makes no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of content on this website. Results described in case studies represent specific client outcomes and are not guaranteed for all engagements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, AI Scout Co shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services. Our total liability shall not exceed the amount paid by you for services in the 12 months preceding any claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. These links are provided for your convenience only. AI Scout Co has no control over the content of those sites and accepts no responsibility for them or any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the United States. Any disputes arising from these terms or your use of our services shall be resolved in accordance with applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contact Us</h2>
            <p>
              If you have questions about these terms, please contact us at{" "}
              <a href="mailto:brandon@aiscoutco.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                brandon@aiscoutco.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
