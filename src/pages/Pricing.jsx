import { Link } from 'react-router-dom'
import { plans } from '../data/employees'

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
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-[#6C3AFF] -top-40 right-0" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF3366] mb-4">Pricing</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            Simple Pricing,
            <br />
            <span className="gradient-text">Serious Power</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-24 section-darker relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative glass-card-strong p-8 ${
                  plan.highlight ? 'glow-pink ring-1 ring-[#FF3366]/30' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#FF3366] to-[#6C3AFF] text-white text-xs font-bold rounded-full whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-bold text-xl text-white mb-1">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 my-3">
                    <span className="font-display font-black text-5xl text-white">${plan.price}</span>
                    <span className="text-white/40 text-lg">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-white/40">{plan.description}</p>
                </div>

                <div className="flex items-center justify-center gap-2 mb-6 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="text-lg">👥</span>
                  <span className="font-semibold text-white text-sm">{plan.employees} AI Employees</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#00CC88] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-white/50">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://artifactly-ai-employees.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.highlight ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 lg:py-24 section-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white text-center mb-12">
            Feature Comparison
          </h2>

          <div className="glass-card-strong overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-white/60">Feature</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-white/60">Starter</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-[#FF3366]">Growth</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-white/60">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparison.map((row, i) => (
                    <tr key={row.feature} className="border-t border-white/[0.04]">
                      <td className="px-6 py-3.5 text-sm text-white/60">{row.feature}</td>
                      {['starter', 'growth', 'enterprise'].map((plan) => (
                        <td key={plan} className="text-center px-4 py-3.5">
                          {typeof row[plan] === 'boolean' ? (
                            row[plan] ? (
                              <svg className="w-5 h-5 text-[#00CC88] mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            ) : (
                              <svg className="w-5 h-5 text-white/10 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                            )
                          ) : (
                            <span className="text-sm font-medium text-white/50">{row[plan]}</span>
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
      <section className="py-20 lg:py-24 section-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl text-white text-center mb-12">
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
              <div key={faq.q} className="glass-card p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
