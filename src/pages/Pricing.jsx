import { Link } from 'react-router-dom'
import { plans, employees } from '../data/employees'

const featureComparison = [
  { feature: 'AI Employees', starter: '3', growth: '7', enterprise: '11' },
  { feature: 'Monthly Tasks', starter: '5,000', growth: '25,000', enterprise: 'Unlimited' },
  { feature: 'User Seats', starter: '1', growth: '3', enterprise: 'Unlimited' },
  { feature: 'Response Time', starter: 'Standard', growth: 'Fast', enterprise: 'Instant' },
  { feature: 'Analytics Dashboard', starter: 'Basic', growth: 'Advanced', enterprise: 'Custom' },
  { feature: 'Custom Workflows', starter: false, growth: true, enterprise: true },
  { feature: 'API Access', starter: false, growth: true, enterprise: true },
  { feature: 'Custom AI Training', starter: false, growth: false, enterprise: true },
  { feature: 'Custom Integrations', starter: false, growth: false, enterprise: true },
  { feature: 'White-label Options', starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated Account Manager', starter: false, growth: false, enterprise: true },
  { feature: 'SLA Guarantee', starter: false, growth: false, enterprise: true },
  { feature: 'Priority Support', starter: false, growth: true, enterprise: true },
  { feature: 'Email Support', starter: true, growth: true, enterprise: true },
]

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-paper-warm halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-ink mb-4">
            Simple Pricing,{' '}
            <span className="text-pop-pink">Serious Power</span>
          </h1>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            Choose the plan that fits your team. All plans include a 14-day free trial.
            No credit card required to start.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-xl border-3 border-ink p-8 ${
                  plan.highlight
                    ? 'shadow-[8px_8px_0_var(--color-pop-pink)] scale-[1.02]'
                    : 'shadow-[6px_6px_0_var(--color-ink)]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pop-pink text-white text-sm font-bold rounded-full border-2 border-ink whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-display font-black text-2xl text-ink mb-1">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-display font-black text-5xl text-ink">${plan.price}</span>
                    <span className="text-ink-muted text-lg">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-ink-muted mt-2">{plan.description}</p>
                </div>

                {/* Employees count badge */}
                <div className="flex items-center justify-center gap-2 mb-6 py-2 bg-paper-warm rounded-lg border-2 border-ink">
                  <span className="text-lg">👥</span>
                  <span className="font-bold text-ink">{plan.employees} AI Employees</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg className="w-5 h-5 text-pop-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-ink">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://artifactly-ai-employees.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3.5 font-bold rounded-lg border-2 border-ink transition-all ${
                    plan.highlight
                      ? 'bg-pop-pink text-white shadow-[3px_3px_0_var(--color-ink)] hover:shadow-[1px_1px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px]'
                      : 'bg-white text-ink shadow-[3px_3px_0_var(--color-ink)] hover:shadow-[1px_1px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px]'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 lg:py-20 bg-paper-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center mb-10">
            Feature Comparison
          </h2>

          <div className="bg-white rounded-xl border-3 border-ink shadow-[6px_6px_0_var(--color-ink)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-ink bg-paper-warm">
                    <th className="text-left px-6 py-4 font-bold text-ink">Feature</th>
                    <th className="text-center px-4 py-4 font-bold text-ink">Starter</th>
                    <th className="text-center px-4 py-4 font-bold text-pop-pink">Growth</th>
                    <th className="text-center px-4 py-4 font-bold text-ink">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-paper/50'}>
                      <td className="px-6 py-3.5 text-sm font-medium text-ink border-t border-halftone">{row.feature}</td>
                      {['starter', 'growth', 'enterprise'].map((plan) => (
                        <td key={plan} className="text-center px-4 py-3.5 border-t border-halftone">
                          {typeof row[plan] === 'boolean' ? (
                            row[plan] ? (
                              <svg className="w-5 h-5 text-pop-green mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-ink-muted/30 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            )
                          ) : (
                            <span className="text-sm font-medium text-ink">{row[plan]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl text-ink text-center mb-10">
            Pricing FAQ
          </h2>
          <div className="space-y-4">
            {[
              { q: 'Can I change plans later?', a: 'Absolutely. Upgrade or downgrade at any time. Changes take effect on your next billing cycle.' },
              { q: 'What happens after the free trial?', a: 'After 14 days, choose a plan to continue. If you don\'t, your account pauses — no charge, no data loss.' },
              { q: 'Do you offer annual billing?', a: 'Yes! Save 20% with annual billing. Contact us for enterprise custom pricing.' },
              { q: 'Can I pick which employees I get?', a: 'Yes. On Starter and Growth plans, you choose which AI employees to activate. Enterprise gets all 11.' },
              { q: 'Is there a refund policy?', a: 'Yes. We offer a 30-day money-back guarantee. See our refund policy for details.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-lg border-2 border-ink p-5 shadow-[3px_3px_0_var(--color-ink)]">
                <h3 className="font-bold text-ink mb-1">{faq.q}</h3>
                <p className="text-sm text-ink-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
