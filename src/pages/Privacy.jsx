export default function Privacy() {
  return (
    <div>
      <section className="py-16 lg:py-24 bg-paper-warm halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-ink mb-4">Privacy Policy</h1>
          <p className="text-ink-muted">Last updated: April 12, 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-8">
            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">1. Introduction</h2>
              <p className="text-ink-light leading-relaxed">
                AI Employees ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and website.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">2. Information We Collect</h2>
              <p className="text-ink-light leading-relaxed mb-3">We collect information you provide directly:</p>
              <ul className="list-disc pl-5 space-y-2 text-ink-light">
                <li>Account information (name, email, password)</li>
                <li>Business Profile data (business name, niche, audience, brand details)</li>
                <li>Content you create or upload through the platform</li>
                <li>Communications with us (support tickets, emails)</li>
                <li>Payment information (processed securely via Stripe)</li>
              </ul>
              <p className="text-ink-light leading-relaxed mt-3">We also collect automatically:</p>
              <ul className="list-disc pl-5 space-y-2 text-ink-light">
                <li>Usage data (features used, session duration)</li>
                <li>Device information (browser, operating system)</li>
                <li>IP address and approximate location</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2 text-ink-light">
                <li>To provide, operate, and maintain our services</li>
                <li>To personalise your AI employees with your business context</li>
                <li>To process transactions and send billing information</li>
                <li>To send service-related communications</li>
                <li>To respond to your enquiries and support requests</li>
                <li>To improve and develop our platform</li>
                <li>To detect, prevent, and address fraud and abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">4. Data Isolation & Security</h2>
              <p className="text-ink-light leading-relaxed">
                Your business data is isolated from other users through row-level security (RLS) at the database level. We employ bank-grade encryption for data in transit (TLS 1.3) and at rest (AES-256). Access to your data is strictly controlled and audited.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">5. Data Sharing</h2>
              <p className="text-ink-light leading-relaxed mb-3">
                We do not sell, rent, or trade your personal information. We may share your data only in these circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-ink-light">
                <li><strong>Service providers:</strong> Trusted third parties who help us operate our platform (hosting, payment processing, email delivery)</li>
                <li><strong>Legal compliance:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With your consent:</strong> When you explicitly authorise sharing</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">6. Your Rights (GDPR)</h2>
              <p className="text-ink-light leading-relaxed mb-3">Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2 text-ink-light">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Erase your data ("right to be forgotten")</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-ink-light leading-relaxed mt-3">To exercise these rights, contact us at privacy@aiemployees.com.</p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">7. Cookies</h2>
              <p className="text-ink-light leading-relaxed">
                We use essential cookies to maintain your session and preferences. We use analytics cookies to understand how our platform is used. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">8. Data Retention</h2>
              <p className="text-ink-light leading-relaxed">
                We retain your data for as long as your account is active or as needed to provide services. If you close your account, we will delete your data within 30 days, except where we're required to retain it by law.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">9. Children's Privacy</h2>
              <p className="text-ink-light leading-relaxed">
                Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">10. Changes to This Policy</h2>
              <p className="text-ink-light leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes by email or through our platform. Your continued use of our services after changes constitutes acceptance.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">11. Contact Us</h2>
              <p className="text-ink-light leading-relaxed">
                If you have questions about this Privacy Policy, contact us at:
              </p>
              <p className="text-ink-light leading-relaxed mt-2">
                <strong>Email:</strong> privacy@aiemployees.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
