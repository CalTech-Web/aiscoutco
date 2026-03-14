import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Scout Co",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-extrabold text-white mb-3">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>
              When you contact us through our website or book a discovery call, we collect the information you voluntarily provide, including your name, email address, company name, and any details you share in the contact form.
            </p>
            <p className="mt-3">
              We may also collect standard analytics data such as pages visited, browser type, and referring websites. This information is collected in aggregate and is not tied to individual identities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Respond to your inquiry and schedule discovery calls</li>
              <li>Send you information relevant to your request</li>
              <li>Improve our services and website experience</li>
              <li>Communicate with you about your project if you become a client</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist in operating our website or conducting our business, as long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the information you share with us. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect certain functionality on our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, please contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or how we handle your information, please contact us at{" "}
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
