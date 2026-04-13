import { plans } from '../data/employees'

const comparison = [
  { f: 'AI Employees', s: '3', g: '7', e: '11' },
  { f: 'Monthly Tasks', s: '5,000', g: '25,000', e: 'Unlimited' },
  { f: 'User Seats', s: '1', g: '3', e: 'Unlimited' },
  { f: 'Response Time', s: 'Standard', g: 'Fast', e: 'Instant' },
  { f: 'Custom Workflows', s: false, g: true, e: true },
  { f: 'API Access', s: false, g: true, e: true },
  { f: 'Custom Training', s: false, g: false, e: true },
  { f: 'White-label', s: false, g: false, e: true },
  { f: 'Dedicated Manager', s: false, g: false, e: true },
  { f: 'Priority Support', s: false, g: true, e: true },
]

const competitors = [
  { name: 'AI Employees', us: true, employees: '11', price: 'From $97', crossCollab: true, video: true, blog: true, analytics: true, legal: true, finance: true, leads: true, ads: true, research: true },
  { name: 'Sintra.ai', us: false, employees: '15+', price: '$97', crossCollab: false, video: false, blog: false, analytics: true, legal: false, finance: false, leads: true, ads: true, research: false },
  { name: 'Marblism', us: false, employees: '6', price: 'From $24', crossCollab: false, video: false, blog: true, analytics: false, legal: true, finance: false, leads: true, ads: false, research: false },
  { name: 'Monday', us: false, employees: '0', price: '$9/seat', crossCollab: false, video: false, blog: false, analytics: true, legal: false, finance: false, leads: true, ads: false, research: false },
]

const compRows = [
  { key: 'employees', label: 'AI Employees', t: 'text' },
  { key: 'price', label: 'Price', t: 'text' },
  { key: 'crossCollab', label: 'Cross-Team Collaboration', t: 'bool' },
  { key: 'video', label: 'Video Content', t: 'bool' },
  { key: 'blog', label: 'Blog CMS', t: 'bool' },
  { key: 'analytics', label: 'Analytics', t: 'bool' },
  { key: 'legal', label: 'Legal & Compliance', t: 'bool' },
  { key: 'finance', label: 'Finance & CFO', t: 'bool' },
  { key: 'leads', label: 'Lead Generation', t: 'bool' },
  { key: 'ads', label: 'Paid Ads', t: 'bool' },
  { key: 'research', label: 'Market Research', t: 'bool' },
]

const planImages = { Starter: '/characters/flora.png', Growth: '/characters/poppi.png', Enterprise: '/characters/cecil.png' }

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-brand mb-4">Pricing</p>
          <h1 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight mb-4">
            Your Superteam of <span className="text-brand">AI Employees</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-xl mx-auto">
            Run your emails, socials, SEO, sales, support and finance. 14-day free trial included.
          </p>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-[#F0ECFF] rounded-[32px] p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p) => (
                <div key={p.name} className={`card overflow-hidden flex flex-col ${p.highlight ? 'ring-2 ring-brand' : ''}`}>
                  <div className="h-48 overflow-hidden bg-gray-50">
                    <img src={planImages[p.name]} alt={p.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    {p.badge && (
                      <span className="badge self-start mb-3">{p.badge}</span>
                    )}
                    <h3 className="font-black text-lg text-ink">{p.name} Plan</h3>
                    <div className="my-3">
                      <span className="font-black text-5xl text-ink">${p.price}</span>
                      <span className="text-ink-light">/{p.period}</span>
                    </div>
                    <p className="text-sm text-ink-muted mb-5">{p.description}</p>
                    <ul className="space-y-2.5 mb-7 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <svg className="w-4 h-4 text-brand shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-ink-muted">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://artifactly-ai-employees.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={p.highlight ? 'btn-primary w-full text-center' : 'btn-secondary w-full text-center'}
                    >
                      {p.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand mb-4">Compare</p>
            <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">Feature Comparison</h2>
          </div>
          <div className="card-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-ink-muted">Feature</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-ink-muted">Starter</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-brand">Growth</th>
                    <th className="text-center px-4 py-4 text-sm font-semibold text-ink-muted">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r) => (
                    <tr key={r.f} className="border-t border-gray-200">
                      <td className="px-6 py-4 text-[15px] text-ink">{r.f}</td>
                      {['s', 'g', 'e'].map((k) => (
                        <td key={k} className="text-center px-4 py-4">
                          {typeof r[k] === 'boolean' ? (
                            r[k] ? (
                              <span className="text-brand font-bold text-lg">&#10003;</span>
                            ) : (
                              <span className="text-ink-light">&#10005;</span>
                            )
                          ) : (
                            <span className="text-[15px] font-medium text-ink">{r[k]}</span>
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

      {/* Competitor Comparison */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand mb-4">Us vs Them</p>
            <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight mb-3">
              Just $97+/mo for <span className="text-brand">11-Employees-in-1</span>
            </h2>
            <p className="text-ink-muted text-lg">Replaces $2K-$10K/mo in freelancers. No one else comes close.</p>
          </div>
          <div className="card-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-ink-muted min-w-[160px]">Feature</th>
                    {competitors.map((c) => (
                      <th key={c.name} className={`text-center px-4 py-4 text-sm font-semibold min-w-[110px] ${c.us ? 'text-brand' : 'text-ink-muted'}`}>
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compRows.map((r) => (
                    <tr key={r.key} className="border-t border-gray-200">
                      <td className="px-6 py-4 text-[15px] text-ink font-medium">{r.label}</td>
                      {competitors.map((c) => (
                        <td key={c.name} className={`text-center px-4 py-4 ${c.us ? 'bg-brand/[0.04]' : ''}`}>
                          {r.t === 'bool' ? (
                            c[r.key] ? (
                              <span className="text-brand font-bold text-lg">&#10003;</span>
                            ) : (
                              <span className="text-ink-light">&#10005;</span>
                            )
                          ) : (
                            <span className={`text-[15px] font-medium ${c.us ? 'text-brand font-bold' : 'text-ink-muted'}`}>
                              {c[r.key]}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary-lg">
              Hire Your AI Team
            </a>
            <p className="text-ink-light text-sm mt-3">14-day free trial &middot; No credit card</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand mb-4">FAQ</p>
            <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">Questions?</h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { q: 'Can I change plans?', a: 'Upgrade or downgrade anytime.' },
              { q: 'After the trial?', a: 'Choose a plan or account pauses. No charges.' },
              { q: 'Annual billing?', a: 'Yes — save 20%.' },
              { q: 'Pick employees?', a: 'Starter/Growth: you choose. Enterprise: all 11.' },
              { q: 'Refund?', a: '30-day money-back guarantee.' },
              { q: 'Do they learn?', a: 'Yes — through your Profile, Data Hub, and Skills.' },
            ].map((f) => (
              <div key={f.q} className="card p-5 text-left">
                <h3 className="font-bold text-[15px] text-ink mb-1">{f.q}</h3>
                <p className="text-sm text-ink-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-brand">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="text-[36px] sm:text-[44px] font-black text-white tracking-tight mb-6">
            If You're Reading This,<br />You're Already Ahead.
          </h2>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-dark btn-primary-lg">
            Meet Your AI Team
          </a>
        </div>
      </section>
    </div>
  )
}
