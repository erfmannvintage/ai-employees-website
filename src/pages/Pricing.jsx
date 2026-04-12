import { plans } from '../data/employees'

const comparison = [
  { f: 'AI Employees', s: '3', g: '7', e: '11' }, { f: 'Monthly Tasks', s: '5,000', g: '25,000', e: 'Unlimited' },
  { f: 'User Seats', s: '1', g: '3', e: 'Unlimited' }, { f: 'Response Time', s: 'Standard', g: 'Fast', e: 'Instant' },
  { f: 'Custom Workflows', s: false, g: true, e: true }, { f: 'API Access', s: false, g: true, e: true },
  { f: 'Custom Training', s: false, g: false, e: true }, { f: 'White-label', s: false, g: false, e: true },
  { f: 'Dedicated Manager', s: false, g: false, e: true }, { f: 'Priority Support', s: false, g: true, e: true },
]

const competitors = [
  { name: 'AI Employees', us: true, employees: '11', price: 'From $97', crossCollab: true, video: true, blog: true, analytics: true, legal: true, finance: true, leads: true, ads: true, research: true },
  { name: 'Sintra.ai', us: false, employees: '15+', price: '$97', crossCollab: false, video: false, blog: false, analytics: true, legal: false, finance: false, leads: true, ads: true, research: false },
  { name: 'Marblism', us: false, employees: '6', price: 'From $24', crossCollab: false, video: false, blog: true, analytics: false, legal: true, finance: false, leads: true, ads: false, research: false },
  { name: 'Monday', us: false, employees: '0', price: '$9/seat', crossCollab: false, video: false, blog: false, analytics: true, legal: false, finance: false, leads: true, ads: false, research: false },
]
const compRows = [
  { key: 'employees', label: 'AI Employees', t: 'text' }, { key: 'price', label: 'Price', t: 'text' },
  { key: 'crossCollab', label: 'Cross-Team Collaboration', t: 'bool' }, { key: 'video', label: 'Video Content', t: 'bool' },
  { key: 'blog', label: 'Blog CMS', t: 'bool' }, { key: 'analytics', label: 'Analytics', t: 'bool' },
  { key: 'legal', label: 'Legal & Compliance', t: 'bool' }, { key: 'finance', label: 'Finance & CFO', t: 'bool' },
  { key: 'leads', label: 'Lead Generation', t: 'bool' }, { key: 'ads', label: 'Paid Ads', t: 'bool' },
  { key: 'research', label: 'Market Research', t: 'bool' },
]

export default function Pricing() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-cream halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-pop-red font-semibold uppercase tracking-[0.2em] text-xs mb-4">Pricing</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-ink mb-4">Your Superteam of<br /><span className="text-pop-red">AI Employees</span></h1>
          <p className="text-ink-muted text-lg max-w-xl mx-auto">Run your emails, socials, SEO, sales, support and finance. 14-day free trial included.</p>
        </div>
      </section>

      <section className="py-20 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl overflow-hidden border-3 border-ink ${p.highlight ? 'shadow-[6px_6px_0_var(--color-pop-red)]' : 'shadow-[5px_5px_0_var(--color-ink)]'}`}>
                <div className="h-48 overflow-hidden bg-light">
                  <img src={p.name === 'Starter' ? '/characters/flora.png' : p.name === 'Growth' ? '/characters/poppi.png' : '/characters/cecil.png'} alt={p.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-7 bg-white">
                  {p.badge && <span className="inline-block px-3 py-1 bg-neon text-black text-xs font-bold rounded-full border-2 border-black mb-3">{p.badge}</span>}
                  <h3 className="font-black text-lg text-ink">{p.name} Plan</h3>
                  <div className="my-3"><span className="font-black text-5xl text-ink">${p.price}</span><span className="text-ink-faint">/{p.period}</span></div>
                  <p className="text-sm text-ink-muted mb-5">{p.description}</p>
                  <ul className="space-y-2.5 mb-7">
                    {p.features.map((f) => <li key={f} className="flex items-center gap-2.5"><svg className="w-4 h-4 text-pop-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span className="text-sm text-ink-light">{f}</span></li>)}
                  </ul>
                  <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className={p.highlight ? 'btn-neon w-full text-center' : 'btn-outline w-full text-center'}>{p.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-ink text-center mb-10">Feature Comparison</h2>
          <div className="comic-panel-static rounded-xl overflow-hidden"><div className="overflow-x-auto"><table className="w-full">
            <thead><tr className="border-b-3 border-ink bg-cream"><th className="text-left px-5 py-4 text-sm font-bold text-ink-muted">Feature</th><th className="text-center px-4 py-4 text-sm font-bold text-ink-muted">Starter</th><th className="text-center px-4 py-4 text-sm font-bold text-pop-red">Growth</th><th className="text-center px-4 py-4 text-sm font-bold text-ink-muted">Enterprise</th></tr></thead>
            <tbody>{comparison.map((r) => <tr key={r.f} className="border-t border-light-200"><td className="px-5 py-3 text-sm text-ink">{r.f}</td>{['s','g','e'].map((k)=><td key={k} className="text-center px-4 py-3">{typeof r[k]==='boolean' ? (r[k] ? <span className="text-pop-green font-bold">✓</span> : <span className="text-ink-ghost">✕</span>) : <span className="text-sm font-medium text-ink">{r[k]}</span>}</td>)}</tr>)}</tbody>
          </table></div></div>
        </div>
      </section>

      <section className="py-20 section-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-pop-blue font-semibold uppercase tracking-[0.2em] text-xs mb-4">Us vs Them</p>
            <h2 className="text-3xl sm:text-4xl font-black text-ink mb-2">Just $97+/mo for <span className="text-pop-blue">11-Employees-in-1</span></h2>
            <p className="text-ink-muted">Replaces $2K-$10K/mo in freelancers. No one else comes close.</p>
          </div>
          <div className="comic-panel-static rounded-xl overflow-hidden"><div className="overflow-x-auto"><table className="w-full">
            <thead><tr className="border-b-3 border-ink bg-cream"><th className="text-left px-4 py-4 text-xs font-bold text-ink-muted uppercase min-w-[150px]">Us vs Them</th>
              {competitors.map((c) => <th key={c.name} className={`text-center px-3 py-4 text-sm font-bold min-w-[100px] ${c.us ? 'text-pop-red' : 'text-ink-muted'}`}>{c.name}</th>)}
            </tr></thead>
            <tbody>{compRows.map((r)=><tr key={r.key} className="border-t border-light-200"><td className="px-4 py-3 text-sm text-ink font-medium">{r.label}</td>{competitors.map((c)=><td key={c.name} className={`text-center px-3 py-3 ${c.us ? 'bg-neon/[0.05]' : ''}`}>{r.t==='bool' ? (c[r.key] ? <span className="text-pop-green font-bold">✓</span> : <span className="text-ink-ghost">✕</span>) : <span className={`text-sm font-medium ${c.us ? 'text-pop-red font-bold' : 'text-ink-muted'}`}>{c[r.key]}</span>}</td>)}</tr>)}</tbody>
          </table></div></div>
          <div className="text-center mt-10">
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-lg">Hire Your AI Team</a>
            <p className="text-ink-faint text-sm mt-3">14-day free trial · No credit card</p>
          </div>
        </div>
      </section>

      <section className="py-16 section-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-ink text-center mb-10">Questions?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { q: 'Can I change plans?', a: 'Upgrade or downgrade anytime.' },
              { q: 'After the trial?', a: 'Choose a plan or account pauses. No charges.' },
              { q: 'Annual billing?', a: 'Yes — save 20%.' },
              { q: 'Pick employees?', a: 'Starter/Growth: you choose. Enterprise: all 11.' },
              { q: 'Refund?', a: '30-day money-back guarantee.' },
              { q: 'Do they learn?', a: 'Yes — through your Profile, Data Hub, and Skills.' },
            ].map((f) => <div key={f.q} className="speech-bubble text-left"><h3 className="font-bold text-sm mb-1">{f.q}</h3><p className="text-xs text-black/60 font-normal">{f.a}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-20 section-neon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-4">If You're Reading This,<br />You're Already Ahead.</h2>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-dark text-lg px-10 py-4">Meet Your AI Team</a>
        </div>
      </section>
    </div>
  )
}
