import { Link } from 'react-router-dom'
export default function Refund() {
  const sections = [
    { t: 'Our Guarantee', c: '30-day money-back guarantee on all paid plans. Not satisfied? Full refund, no questions asked.' },
    { t: 'Eligibility', c: 'Within 30 days of first payment. First subscription period only. Free trials not eligible. Renewals: pro-rata within 7 days.' },
    { t: 'How to Request', c: 'Email billing@aiemployees.com. Processed in 5-10 business days to original payment method.' },
    { t: 'After Refund', c: 'Account paused. Data retained 30 days. After that, inactive data may be deleted.' },
    { t: 'Exceptions', c: 'Terms violations, refund policy abuse, chargebacks without contacting us first.' },
    { t: 'Cancellation', c: 'Cancel anytime from account settings. Access continues until end of billing period.' },
  ]
  return (
    <div>
      <section className="py-20 section-cream halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-black text-5xl sm:text-6xl uppercase text-ink">Refund Policy</h1>
          <p className="text-ink-ghost mt-3">Last updated: April 12, 2026</p>
        </div>
      </section>
      <section className="py-16 section-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="comic-panel rounded-xl p-6">
            <h3 className="font-black text-lg text-ink uppercase">30-Day Money-Back Guarantee</h3>
            <p className="text-ink-muted text-sm mt-2">Not satisfied within 30 days? Full refund. No hoops.</p>
          </div>
          {sections.slice(1).map((s) => (
            <div key={s.t}>
              <h2 className="font-bold text-lg text-ink mb-2">{s.t}</h2>
              <p className="text-ink-faint text-sm leading-relaxed">{s.c}</p>
            </div>
          ))}
          <p className="text-ink-ghost text-sm">Questions? <Link to="/contact" className="text-pop-red hover:underline">Contact us</Link>.</p>
        </div>
      </section>
    </div>
  )
}
