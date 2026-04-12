import { plans } from '../data/employees'

const comparison = [
  { f: 'AI Employees', s: '3', g: '7', e: '11' },
  { f: 'Monthly Tasks', s: '5,000', g: '25,000', e: 'Unlimited' },
  { f: 'User Seats', s: '1', g: '3', e: 'Unlimited' },
  { f: 'Response Time', s: 'Standard', g: 'Fast', e: 'Instant' },
  { f: 'Analytics', s: 'Basic', g: 'Advanced', e: 'Custom' },
  { f: 'Custom Workflows', s: false, g: true, e: true },
  { f: 'API Access', s: false, g: true, e: true },
  { f: 'Custom AI Training', s: false, g: false, e: true },
  { f: 'White-label', s: false, g: false, e: true },
  { f: 'Dedicated Manager', s: false, g: false, e: true },
  { f: 'Priority Support', s: false, g: true, e: true },
]

const competitors = [
  { name: 'AI Employees', us: true, employees: '11', price: 'From $97', trial: '14 days', crossCollab: true, video: true, blog: true, email: true, analytics: true, legal: true, finance: true, leads: true, ads: true, research: true, training: true },
  { name: 'Sintra.ai', us: false, employees: '15+', price: '$97', trial: 'None', crossCollab: false, video: false, blog: false, email: true, analytics: true, legal: false, finance: false, leads: true, ads: true, research: false, training: false },
  { name: 'Marblism', us: false, employees: '6', price: 'From $24', trial: '7 days', crossCollab: false, video: false, blog: true, email: false, analytics: false, legal: true, finance: false, leads: true, ads: false, research: false, training: false },
  { name: 'Monday', us: false, employees: '0', price: '$9/seat', trial: '14 days', crossCollab: false, video: false, blog: false, email: true, analytics: true, legal: false, finance: false, leads: true, ads: false, research: false, training: false },
]

const compRows = [
  { key: 'employees', label: 'AI Employees', type: 'text' }, { key: 'price', label: 'Price', type: 'text' }, { key: 'trial', label: 'Free Trial', type: 'text' },
  { key: 'crossCollab', label: 'Cross-Team Collaboration', type: 'bool' }, { key: 'video', label: 'Video Content', type: 'bool' }, { key: 'blog', label: 'Blog CMS', type: 'bool' },
  { key: 'email', label: 'Email Campaigns', type: 'bool' }, { key: 'analytics', label: 'Analytics', type: 'bool' }, { key: 'legal', label: 'Legal & Compliance', type: 'bool' },
  { key: 'finance', label: 'Finance & CFO', type: 'bool' }, { key: 'leads', label: 'Lead Generation', type: 'bool' }, { key: 'ads', label: 'Paid Ads', type: 'bool' },
  { key: 'research', label: 'Market Research', type: 'bool' }, { key: 'training', label: 'Custom Training', type: 'bool' },
]

function Check() { return <span className="text-neon text-lg">✓</span> }
function Cross() { return <span className="text-gray-600 text-lg">✕</span> }

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-28 section-dark halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neon font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Pricing</p>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white mb-4">
            Your Superteam of<br /><span className="text-neon text-glow">AI Employees</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Run your emails, socials, SEO, sales, lead gen, support & finance. All plans include 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 section-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`comic-panel rounded-2xl overflow-hidden relative ${p.highlight ? 'glow-neon-strong' : ''}`}>
                {/* Character header image */}
                <div className="h-48 overflow-hidden bg-dark-300 relative">
                  <img
                    src={p.name === 'Starter' ? '/characters/flora.png' : p.name === 'Growth' ? '/characters/poppi.png' : '/characters/cecil.png'}
                    alt={p.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {p.badge && (
                    <div className="absolute top-3 right-3 speech-bubble text-xs px-3 py-1">{p.badge}</div>
                  )}
                </div>

                <div className="p-7">
                  <h3 className="font-black text-lg text-white uppercase">{p.name} Plan</h3>
                  <div className="my-3">
                    <span className="font-black text-5xl text-neon text-glow">${p.price}</span>
                    <span className="text-gray-400">/{p.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-5">{p.description}</p>

                  <ul className="space-y-2.5 mb-7">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="text-neon font-bold text-sm">✓</span>
                        <span className="text-sm text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://artifactly-ai-employees.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={p.highlight ? 'btn-neon w-full text-center' : 'btn-outline w-full text-center'}
                  >
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 section-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black text-3xl sm:text-4xl text-white uppercase text-center mb-10">Feature Comparison</h2>
          <div className="comic-panel rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neon/20">
                    <th className="text-left px-5 py-4 text-sm font-bold text-gray-400 uppercase">Feature</th>
                    <th className="text-center px-4 py-4 text-sm font-bold text-gray-400 uppercase">Starter</th>
                    <th className="text-center px-4 py-4 text-sm font-bold text-neon uppercase">Growth</th>
                    <th className="text-center px-4 py-4 text-sm font-bold text-gray-400 uppercase">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((r) => (
                    <tr key={r.f} className="border-t border-dark-400">
                      <td className="px-5 py-3 text-sm text-gray-300">{r.f}</td>
                      {['s', 'g', 'e'].map((k) => (
                        <td key={k} className="text-center px-4 py-3">
                          {typeof r[k] === 'boolean' ? (r[k] ? <Check /> : <Cross />) : <span className="text-sm font-medium text-gray-300">{r[k]}</span>}
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

      {/* Us vs Them — Competitor Comparison */}
      <section className="py-20 section-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-pop-red font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Us vs Them</p>
            <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-white uppercase mb-3">
              Just $97+/mo for <span className="text-neon">11-Employees-in-1</span>
            </h2>
            <p className="text-gray-400 text-lg">Replaces $2K-$10K/mo in freelancers. No one else comes close.</p>
          </div>

          <div className="comic-panel rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neon/20">
                    <th className="text-left px-4 py-4 text-xs font-bold text-gray-500 uppercase min-w-[160px]">Us vs Them</th>
                    {competitors.map((c) => (
                      <th key={c.name} className={`text-center px-3 py-4 text-sm font-bold uppercase min-w-[100px] ${c.us ? 'text-neon' : 'text-gray-400'}`}>
                        {c.us && <div className="w-8 h-8 bg-neon border-2 border-black rounded-lg flex items-center justify-center mx-auto mb-1"><span className="text-black font-black text-[10px]">AI</span></div>}
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compRows.map((r) => (
                    <tr key={r.key} className="border-t border-dark-400">
                      <td className="px-4 py-3 text-sm text-gray-300 font-medium">{r.label}</td>
                      {competitors.map((c) => (
                        <td key={c.name} className={`text-center px-3 py-3 ${c.us ? 'bg-neon/[0.03]' : ''}`}>
                          {r.type === 'bool' ? (
                            c[r.key] ? <Check /> : <Cross />
                          ) : (
                            <span className={`text-sm font-medium ${c.us ? 'text-neon font-bold' : 'text-gray-400'}`}>{c[r.key]}</span>
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
            <a
              href="https://artifactly-ai-employees.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon btn-neon-lg"
            >
              Hire Your AI Team
            </a>
            <p className="text-gray-500 text-sm mt-3">14-day free trial · No credit card</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 section-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black text-3xl text-white uppercase text-center mb-10">Questions?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { q: 'Can I change plans?', a: 'Upgrade or downgrade anytime. Changes on next billing cycle.' },
              { q: 'What happens after trial?', a: 'Choose a plan or account pauses. No surprise charges.' },
              { q: 'Annual billing?', a: 'Yes — save 20%. Contact us for enterprise pricing.' },
              { q: 'Can I pick employees?', a: 'Starter/Growth: you choose. Enterprise gets all 11.' },
              { q: 'Refund policy?', a: '30-day money-back guarantee. No questions asked.' },
              { q: 'Do AI Employees learn?', a: 'Yes — they learn your business through your Profile, Data Hub, and Custom Skills.' },
            ].map((faq) => (
              <div key={faq.q} className="speech-bubble text-left">
                <h3 className="font-bold text-sm mb-1">{faq.q}</h3>
                <p className="text-xs text-black/70 font-normal">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 section-neon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black text-4xl sm:text-5xl uppercase text-black mb-4">If You're Reading This,<br />You're Already Ahead.</h2>
          <a
            href="https://artifactly-ai-employees.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-black text-neon font-black uppercase border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Meet Your AI Team
          </a>
          <p className="text-black/50 text-sm mt-3">14-day free trial · No credit card · Cancel anytime</p>
        </div>
      </section>
    </div>
  )
}
