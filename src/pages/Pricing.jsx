import { plans } from '../data/employees'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

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

const planImages = { Starter: '/characters/flora.png', Growth: '/characters/poppi.png', Enterprise: '/characters/cecil.png' }
const planColors = { Starter: '#0066FF', Growth: '#6C3AFF', Enterprise: '#FF6600' }

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Pricing</p>
          <h1 style={{ fontSize: 52, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Your Superteam of AI Employees
          </h1>
          <p style={{ fontSize: 18, color: '#6b6b8d', maxWidth: 560, margin: '0 auto' }}>
            Run your emails, socials, SEO, sales, support and finance. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      {/* 3 Plan Cards */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {plans.map((p) => (
                <div key={p.name} style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', border: p.highlight ? '2px solid #6C3AFF' : '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                  {/* Character image header */}
                  <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                    <img src={planImages[p.name]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    <div style={{ position: 'absolute', bottom: 12, left: 12 }}>
                      <span style={{ background: planColors[p.name], color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 8 }}>{p.name}</span>
                    </div>
                  </div>

                  <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {p.badge && (
                      <span style={{ display: 'inline-block', alignSelf: 'flex-start', background: '#6C3AFF', color: '#fff', fontSize: 11, fontWeight: 600, borderRadius: 100, padding: '4px 14px', marginBottom: 12 }}>{p.badge}</span>
                    )}

                    <div style={{ marginBottom: 16 }}>
                      <span style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e' }}>${p.price}</span>
                      <span style={{ fontSize: 16, color: '#9999aa' }}>/{p.period}</span>
                    </div>
                    <p style={{ fontSize: 14, color: '#6b6b8d', marginBottom: 20 }}>{p.description}</p>

                    {/* Employee count badge */}
                    <div style={{ background: '#fafafa', borderRadius: 12, padding: '10px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 16 }}>👥</span>
                      <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>{p.employees} AI Employees</span>
                    </div>

                    <ul style={{ listStyle: 'none', marginBottom: 24, flex: 1 }}>
                      {p.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
                          <svg width="16" height="16" fill="#00CC66" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                          <span style={{ fontSize: 14, color: '#3d3d5c' }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: p.highlight ? '#6C3AFF' : '#fff', color: p.highlight ? '#fff' : '#1a1a2e', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '14px 0', textDecoration: 'none', border: p.highlight ? 'none' : '2px solid #e0e0e0', boxShadow: p.highlight ? '0 4px 20px rgba(108,58,255,0.3)' : 'none' }}>
                      {p.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#0066FF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Us vs Them</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a2e', marginBottom: 8 }}>$97+/mo for 11-Employees-in-1</h2>
            <p style={{ fontSize: 17, color: '#6b6b8d' }}>Replaces $2K-$10K/mo in freelancers.</p>
          </div>

          <div style={{ background: '#fff', borderRadius: 24, border: '1px solid #eee', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee', background: '#fafafa' }}>
                  <th style={{ textAlign: 'left', padding: '16px 24px', fontSize: 14, fontWeight: 600, color: '#6b6b8d' }}>Feature</th>
                  {competitors.map((c) => (
                    <th key={c.name} style={{ textAlign: 'center', padding: '16px 12px', fontSize: 14, fontWeight: 700, color: c.us ? '#6C3AFF' : '#6b6b8d' }}>
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compRows.map((r) => (
                  <tr key={r.key} style={{ borderTop: '1px solid #eee' }}>
                    <td style={{ padding: '14px 24px', fontSize: 14, color: '#1a1a2e', fontWeight: 500 }}>{r.label}</td>
                    {competitors.map((c) => (
                      <td key={c.name} style={{ textAlign: 'center', padding: '14px 12px', background: c.us ? 'rgba(108,58,255,0.03)' : 'transparent' }}>
                        {r.t === 'bool' ? (
                          c[r.key] ? <span style={{ color: '#00CC66', fontWeight: 700, fontSize: 18 }}>✓</span> : <span style={{ color: '#ddd', fontSize: 18 }}>✕</span>
                        ) : (
                          <span style={{ fontSize: 14, fontWeight: c.us ? 700 : 500, color: c.us ? '#6C3AFF' : '#6b6b8d' }}>{c[r.key]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
              Hire Your AI Team
            </a>
            <p style={{ color: '#9999aa', fontSize: 13, marginTop: 12 }}>14-day free trial · No credit card</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', textAlign: 'center', marginBottom: 40 }}>Questions?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { q: 'Can I change plans?', a: 'Upgrade or downgrade anytime. Changes on next billing cycle.' },
              { q: 'After the trial?', a: 'Choose a plan or account pauses. No surprise charges.' },
              { q: 'Annual billing?', a: 'Yes — save 20%. Contact us for enterprise pricing.' },
              { q: 'Pick employees?', a: 'Starter/Growth: you choose. Enterprise: all 11.' },
              { q: 'Refund?', a: '30-day money-back guarantee. No questions asked.' },
              { q: 'Do they learn?', a: 'Yes — through your Profile, Data Hub, and Custom Skills.' },
            ].map((f) => (
              <div key={f.q} style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #eee' }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#1a1a2e', marginBottom: 6 }}>{f.q}</h3>
                <p style={{ fontSize: 14, color: '#6b6b8d', lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#6C3AFF', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', marginBottom: 16 }}>If you're reading this, you're already ahead.</h2>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none', marginTop: 20 }}>
            Meet Your AI Team
          </a>
        </div>
      </section>
    </div>
  )
}
