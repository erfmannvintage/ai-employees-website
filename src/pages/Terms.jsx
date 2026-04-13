export default function Terms() {
  const sections = [
    { t: '1. Agreement', c: 'By using AI Employees you agree to these Terms. If not, don\'t use the Service.' },
    { t: '2. Service', c: 'AI-powered workforce platform with 11 specialized employees for marketing, sales, support, content, analytics, legal, advertising, research, and finance.' },
    { t: '3. Accounts', c: 'Must be 18+, provide accurate info, maintain security, notify of unauthorised use. Responsible for all account activity.' },
    { t: '4. Billing', c: 'Tiered plans, monthly or annual. 14-day free trial. Payment via Stripe. Auto-renewal unless cancelled.' },
    { t: '5. Acceptable Use', c: 'No unlawful use, harmful content, reverse engineering, server interference, spam, credential sharing, or unauthorised resale.' },
    { t: '6. AI Content', c: 'Provided as-is. Review before publishing. You retain ownership and responsibility for accuracy and compliance.' },
    { t: '7. IP', c: 'Service owned by AI Employees. Subscription grants limited, non-exclusive, non-transferable licence.' },
    { t: '8. Liability', c: 'Not liable for indirect/consequential damages. Total liability capped at 12 months\' fees.' },
    { t: '9. Availability', c: 'Target 99.9% uptime. May suspend for maintenance.' },
    { t: '10. Termination', c: 'We may suspend for violations. Data retained 30 days post-termination.' },
    { t: '11. Law', c: 'Governed by laws of England and Wales.' },
    { t: '12. Contact', c: 'legal@aiemployees.com' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-brand mb-4">Legal</p>
          <h1 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">Terms of Service</h1>
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
