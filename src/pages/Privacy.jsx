export default function Privacy() {
  const sections = [
    { t: '1. Introduction', c: 'AI Employees ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information.' },
    { t: '2. Information We Collect', c: 'Account info (name, email, password), Business Profile data, content you create, communications with us, and payment info (via Stripe). Automatically: usage data, device info, IP address, cookies.' },
    { t: '3. How We Use It', c: 'To provide services, personalise AI employees, process payments, send service communications, respond to enquiries, improve our platform, detect fraud, and comply with law.' },
    { t: '4. Security', c: 'Database-level security with complete data isolation. Bank-grade encryption in transit and at rest. Access strictly controlled and audited.' },
    { t: '5. Data Sharing', c: 'We never sell your data. Shared only with: service providers (hosting, payments), when required by law, business transfers, or with your explicit consent.' },
    { t: '6. Your Rights (GDPR)', c: 'Access, rectify, erase, restrict, portability, object, withdraw consent. Email privacy@aiemployees.com.' },
    { t: '7. Cookies', c: 'Essential cookies for sessions. Analytics cookies for usage understanding. Control via browser settings.' },
    { t: '8. Retention', c: 'Data retained while account active. Deleted within 30 days of closure, except where legally required.' },
    { t: '9. Children', c: 'Not intended for under 18s. We don\'t knowingly collect from children.' },
    { t: '10. Contact', c: 'privacy@aiemployees.com' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-brand mb-4">Legal</p>
          <h1 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">Privacy Policy</h1>
          <p className="text-ink-light mt-3">Last updated: April 12, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-8 space-y-10">
          {sections.map((s) => (
            <div key={s.t}>
              <h2 className="font-bold text-lg text-ink mb-3">{s.t}</h2>
              <p className="text-ink-muted text-[15px] leading-relaxed">{s.c}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
