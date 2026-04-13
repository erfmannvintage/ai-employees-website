import { Link } from 'react-router-dom'

export default function Refund() {
  const sections = [
    { t: 'Eligibility', c: 'Within 30 days of first payment. First subscription period only. Free trials not eligible. Renewals: pro-rata within 7 days.' },
    { t: 'How to Request', c: 'Email billing@aiemployees.com. Processed in 5-10 business days to original payment method.' },
    { t: 'After Refund', c: 'Account paused. Data retained 30 days. After that, inactive data may be deleted.' },
    { t: 'Exceptions', c: 'Terms violations, refund policy abuse, chargebacks without contacting us first.' },
    { t: 'Cancellation', c: 'Cancel anytime from account settings. Access continues until end of billing period.' },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-brand mb-4">Legal</p>
          <h1 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">Refund Policy</h1>
          <p className="text-ink-light mt-3">Last updated: April 12, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-8 space-y-10">
          {/* Guarantee card */}
          <div className="card p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-ink tracking-tight">30-Day Money-Back Guarantee</h3>
            <p className="text-ink-muted text-[15px] mt-2">Not satisfied within 30 days? Full refund. No hoops.</p>
          </div>

          {/* Sections */}
          {sections.map((s) => (
            <div key={s.t}>
              <h2 className="font-bold text-lg text-ink mb-3">{s.t}</h2>
              <p className="text-ink-muted text-[15px] leading-relaxed">{s.c}</p>
            </div>
          ))}

          <p className="text-ink-light text-sm">
            Questions?{' '}
            <Link to="/contact" className="text-brand font-semibold hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
