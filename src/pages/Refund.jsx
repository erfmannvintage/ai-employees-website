import { Link } from 'react-router-dom'

export default function Refund() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">Refund Policy</h1>
          <p className="text-white/30">Last updated: April 12, 2026</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 section-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="font-bold text-xl text-white mb-3">Our Guarantee</h2>
            <p className="text-white/40 leading-relaxed text-[15px]">We offer a straightforward 30-day money-back guarantee on all paid plans.</p>
          </div>

          <div className="glass-card-strong p-6 glow-pink">
            <h3 className="font-bold text-lg text-white mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-white/50 leading-relaxed text-[15px]">Not satisfied within 30 days of your paid subscription? Contact us for a full refund. No questions asked.</p>
          </div>

          {[
            { title: 'Eligibility', content: 'Requests must be within 30 days of first payment. Applies to first subscription period only. Free trials not eligible (no payment taken). Renewals eligible for pro-rata refund within 7 days.' },
            { title: 'How to Request', content: 'Email billing@aiemployees.com with your account email. Processed within 5-10 business days to your original payment method. Confirmation email sent.' },
            { title: 'After a Refund', content: 'Account downgraded to paused state. Data retained 30 days for potential resubscription. After 30 days, inactive data may be deleted.' },
            { title: 'Exceptions', content: 'Refunds may not be issued for: Terms of Service violations, abuse of refund policy (repeated subscribe-and-refund), or chargebacks filed without contacting us.' },
            { title: 'Cancellation', content: 'Cancel anytime from account settings. Takes effect at end of billing period — you keep access until then. No further charges after cancellation.' },
            { title: 'Contact', content: 'Billing enquiries: billing@aiemployees.com' },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-bold text-xl text-white mb-3">{s.title}</h2>
              <p className="text-white/40 leading-relaxed text-[15px]">{s.content}</p>
            </div>
          ))}

          <p className="text-white/30 text-sm">
            Visit our <Link to="/contact" className="text-[#FF3366] hover:underline">contact page</Link> for any questions.
          </p>
        </div>
      </section>
    </div>
  )
}
