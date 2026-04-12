import { Link } from 'react-router-dom'

export default function Refund() {
  return (
    <div>
      <section className="py-16 lg:py-24 bg-paper-warm halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-ink mb-4">Refund Policy</h1>
          <p className="text-ink-muted">Last updated: April 12, 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">Our Guarantee</h2>
              <p className="text-ink-light leading-relaxed">
                We want you to be completely satisfied with AI Employees. We offer a straightforward 30-day money-back guarantee on all paid plans.
              </p>
            </div>

            <div className="bg-pop-pink/5 rounded-xl border-3 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)]">
              <h3 className="font-bold text-lg text-ink mb-2">30-Day Money-Back Guarantee</h3>
              <p className="text-ink-light leading-relaxed">
                If you're not satisfied with AI Employees within the first 30 days of your paid subscription, contact us for a full refund. No questions asked, no hoops to jump through.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">Eligibility</h2>
              <ul className="list-disc pl-5 space-y-2 text-ink-light">
                <li>Refund requests must be made within 30 days of your first paid subscription payment</li>
                <li>The guarantee applies to your first subscription period only</li>
                <li>Free trial periods are not eligible for refunds (as no payment is taken)</li>
                <li>Subsequent monthly or annual renewals are eligible for pro-rata refunds if cancelled within 7 days of renewal</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">How to Request a Refund</h2>
              <ol className="list-decimal pl-5 space-y-2 text-ink-light">
                <li>Email us at <strong>billing@aiemployees.com</strong> with your account email and the reason for your request</li>
                <li>We will process your refund within 5-10 business days</li>
                <li>Refunds are issued to the original payment method</li>
                <li>You will receive a confirmation email once the refund has been processed</li>
              </ol>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">After a Refund</h2>
              <p className="text-ink-light leading-relaxed">
                Once a refund is processed, your account will be downgraded to a free/paused state. Your data will be retained for 30 days in case you decide to resubscribe. After 30 days, inactive account data may be permanently deleted.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">Exceptions</h2>
              <p className="text-ink-light leading-relaxed mb-3">Refunds may not be issued in cases of:</p>
              <ul className="list-disc pl-5 space-y-2 text-ink-light">
                <li>Violation of our Terms of Service</li>
                <li>Abuse of the refund policy (e.g., repeated subscribe-and-refund cycles)</li>
                <li>Chargebacks filed without first contacting us for resolution</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">Cancellation</h2>
              <p className="text-ink-light leading-relaxed">
                You can cancel your subscription at any time from your account settings. Cancellation takes effect at the end of your current billing period — you'll continue to have access until then. No further charges will be made after cancellation.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-2xl text-ink mb-3">Contact</h2>
              <p className="text-ink-light leading-relaxed">
                For billing or refund enquiries, contact us at <strong>billing@aiemployees.com</strong> or visit our{' '}
                <Link to="/contact" className="text-pop-pink font-semibold hover:underline">contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
