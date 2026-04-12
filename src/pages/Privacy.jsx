export default function Privacy() {
  const sections = [
    { t: '1. Introduction', c: 'AI Employees ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your information.' },
    { t: '2. Information We Collect', c: 'Account info (name, email, password), Business Profile data, content you create, communications with us, and payment info (via Stripe). Automatically: usage data, device info, IP address, cookies.' },
    { t: '3. How We Use It', c: 'To provide services, personalise AI employees, process payments, send service communications, respond to enquiries, improve our platform, detect fraud, and comply with law.' },
    { t: '4. Security', c: 'Row-level security (RLS) at database level. Bank-grade encryption in transit (TLS 1.3) and at rest (AES-256). Access strictly controlled and audited.' },
    { t: '5. Data Sharing', c: 'We never sell your data. Shared only with: service providers (hosting, payments), when required by law, business transfers, or with your explicit consent.' },
    { t: '6. Your Rights (GDPR)', c: 'Access, rectify, erase, restrict, portability, object, withdraw consent. Email privacy@aiemployees.com.' },
    { t: '7. Cookies', c: 'Essential cookies for sessions. Analytics cookies for usage understanding. Control via browser settings.' },
    { t: '8. Retention', c: 'Data retained while account active. Deleted within 30 days of closure, except where legally required.' },
    { t: '9. Children', c: 'Not intended for under 18s. We don\'t knowingly collect from children.' },
    { t: '10. Contact', c: 'privacy@aiemployees.com' },
  ]
  return (
    <div>
      <section className="py-20 section-cream halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-black text-5xl sm:text-6xl uppercase text-ink">Privacy Policy</h1>
          <p className="text-ink-ghost mt-3">Last updated: April 12, 2026</p>
        </div>
      </section>
      <section className="py-16 section-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {sections.map((s) => (
            <div key={s.t}>
              <h2 className="font-bold text-lg text-ink mb-2">{s.t}</h2>
              <p className="text-ink-faint text-sm leading-relaxed">{s.c}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
