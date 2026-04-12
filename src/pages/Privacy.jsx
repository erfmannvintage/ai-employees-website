export default function Privacy() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">Privacy Policy</h1>
          <p className="text-white/30">Last updated: April 12, 2026</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 section-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {[
            { title: '1. Introduction', content: 'AI Employees ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and website.' },
            { title: '2. Information We Collect', content: 'We collect information you provide directly: account information (name, email, password), Business Profile data (business name, niche, audience, brand details), content you create or upload, communications with us, and payment information (processed via Stripe). We also collect automatically: usage data, device information, IP address, and cookies.' },
            { title: '3. How We Use Your Information', content: 'To provide and maintain our services, personalise your AI employees, process transactions, send service communications, respond to enquiries, improve our platform, detect fraud, and comply with legal obligations.' },
            { title: '4. Data Isolation & Security', content: 'Your business data is isolated through row-level security (RLS) at the database level. We use bank-grade encryption for data in transit (TLS 1.3) and at rest (AES-256). Access is strictly controlled and audited.' },
            { title: '5. Data Sharing', content: 'We do not sell, rent, or trade your personal information. We may share data with: service providers (hosting, payment, email), when required by law, in connection with business transfers, or with your explicit consent.' },
            { title: '6. Your Rights (GDPR)', content: 'You have the right to: access, rectify, erase, restrict processing, data portability, object to processing, and withdraw consent. Contact privacy@aiemployees.com to exercise these rights.' },
            { title: '7. Cookies', content: 'We use essential cookies for sessions and preferences, and analytics cookies to understand platform usage. You can control settings through your browser.' },
            { title: '8. Data Retention', content: 'We retain data while your account is active. Upon closure, data is deleted within 30 days, except where legally required.' },
            { title: '9. Children\'s Privacy', content: 'Our services are not intended for individuals under 18. We do not knowingly collect information from children.' },
            { title: '10. Changes', content: 'We may update this policy and will notify you of material changes via email or platform notification.' },
            { title: '11. Contact', content: 'Questions? Email privacy@aiemployees.com.' },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-bold text-xl text-white mb-3">{s.title}</h2>
              <p className="text-white/40 leading-relaxed text-[15px]">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
