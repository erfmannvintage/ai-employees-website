import { plans } from '../data/employees'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const competitors = [
  { name: 'AI Employees', us: true, price: 'From £49/mo', employees: '11 (all plans)', crossCollab: true, contentChains: true, video: true, blogCms: true, leadDiscovery: true, emailAll: true, analytics: true, legal: true, finance: true, ads: true, research: true, autoResearch: true, selfLearning: true, webhooks: true, voiceMode: true, vibeMode: true, trial: '14 days free' },
  { name: 'Sintra.ai', us: false, price: '$97/mo (~£77)', employees: '12+ helpers', crossCollab: false, contentChains: false, video: false, blogCms: false, leadDiscovery: false, emailAll: false, analytics: true, legal: false, finance: false, ads: true, research: false, autoResearch: false, selfLearning: false, webhooks: false, voiceMode: false, vibeMode: false, trial: 'None' },
  { name: 'Marblism', us: false, price: 'From $24/mo (~£19)', employees: '6 employees', crossCollab: false, contentChains: false, video: false, blogCms: true, leadDiscovery: false, emailAll: false, analytics: false, legal: true, finance: false, ads: false, research: false, autoResearch: false, selfLearning: false, webhooks: false, voiceMode: false, vibeMode: false, trial: '7 days' },
  { name: 'Monday.com', us: false, price: 'From $9/seat/mo', employees: '0 (PM tool)', crossCollab: false, contentChains: false, video: false, blogCms: false, leadDiscovery: false, emailAll: false, analytics: true, legal: false, finance: false, ads: false, research: false, autoResearch: false, selfLearning: false, webhooks: true, voiceMode: false, vibeMode: false, trial: '14 days' },
]

const compRows = [
  { key: 'price', label: 'Starting Price', t: 'text' },
  { key: 'employees', label: 'AI Employees', t: 'text' },
  { key: 'trial', label: 'Free Trial', t: 'text' },
  { key: 'crossCollab', label: 'Cross-Employee Collaboration (peer review)', t: 'bool' },
  { key: 'contentChains', label: 'Automated Content Chains (5 workflows)', t: 'bool' },
  { key: 'selfLearning', label: 'Self-Learning System (5-layer pipeline)', t: 'bool' },
  { key: 'autoResearch', label: 'Weekly Auto-Research (6 tasks/week)', t: 'bool' },
  { key: 'vibeMode', label: 'Vibe Mode (fully autonomous work)', t: 'bool' },
  { key: 'voiceMode', label: 'Voice Mode', t: 'bool' },
  { key: 'video', label: 'AI Video Creation (TikTok-native)', t: 'bool' },
  { key: 'blogCms', label: 'Built-in Blog CMS + SEO', t: 'bool' },
  { key: 'leadDiscovery', label: 'Lead Discovery (7 sources, 33 industries)', t: 'bool' },
  { key: 'emailAll', label: 'Multi-Provider Email (Gmail, Outlook, Yahoo, etc.)', t: 'bool' },
  { key: 'analytics', label: 'Live Analytics (GA4, YouTube, Search Console)', t: 'bool' },
  { key: 'legal', label: 'Legal & Compliance (GDPR, contracts, EU AI Act)', t: 'bool' },
  { key: 'finance', label: 'Finance & CFO (tax, VAT, R&D credits, MTD)', t: 'bool' },
  { key: 'ads', label: 'Paid Ads (Google 9 certs + Meta)', t: 'bool' },
  { key: 'research', label: 'Market Research (PESTLE, Porter\'s, TAM/SAM/SOM)', t: 'bool' },
  { key: 'webhooks', label: 'Webhook Integrations (Zapier, Make, n8n)', t: 'bool' },
]

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Pricing</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>
            11 AI Employees. Every Plan.
          </h1>
          <p style={{ fontSize: 18, color: '#6b6b8d', maxWidth: 600, margin: '0 auto 12px' }}>
            All plans include all 11 employees, 30+ certifications, and the self-learning system. Differentiated by usage limits and advanced features.
          </p>
          <p style={{ fontSize: 15, color: '#9999aa' }}>All prices in GBP. 14-day free trial on all plans. No credit card required.</p>
        </div>
      </section>

      {/* 3 Plan Cards with generated images */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {plans.map((p) => (
                <div key={p.name} style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', boxShadow: '0 2px 16px rgba(0,0,0,0.04)', border: p.highlight ? '2px solid #6C3AFF' : '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
                  {/* Generated scene image */}
                  <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {p.badge && (
                      <div style={{ position: 'absolute', top: 12, right: 12, background: '#6C3AFF', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 8 }}>{p.badge}</div>
                    )}
                  </div>

                  <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontWeight: 800, fontSize: 20, color: '#1a1a2e', marginBottom: 4 }}>{p.name}</h3>
                    <div style={{ marginBottom: 8 }}>
                      <span style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e' }}>{p.currency}{p.price}</span>
                      <span style={{ fontSize: 16, color: '#9999aa' }}>/{p.period}</span>
                    </div>
                    <p style={{ fontSize: 13, color: '#00CC66', fontWeight: 600, marginBottom: 12 }}>
                      or {p.currency}{p.annualPrice}/{p.period} billed annually (save 20%)
                    </p>
                    <p style={{ fontSize: 14, color: '#6b6b8d', marginBottom: 20, lineHeight: 1.5 }}>{p.description}</p>

                    {/* All 11 badge */}
                    <div style={{ background: '#fafafa', borderRadius: 12, padding: '10px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 16 }}>👥</span>
                      <span style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>All 11 AI Employees included</span>
                    </div>

                    <ul style={{ listStyle: 'none', marginBottom: 16, flex: 1 }}>
                      {p.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '5px 0' }}>
                          <svg width="16" height="16" fill="#00CC66" viewBox="0 0 20 20" style={{ marginTop: 2, flexShrink: 0 }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                          <span style={{ fontSize: 13, color: '#3d3d5c' }}>{f}</span>
                        </li>
                      ))}
                      {p.notIncluded.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '5px 0' }}>
                          <svg width="16" height="16" fill="#ddd" viewBox="0 0 20 20" style={{ marginTop: 2, flexShrink: 0 }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                          <span style={{ fontSize: 13, color: '#bbb' }}>{f}</span>
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

      {/* Value comparison */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', marginBottom: 12 }}>What would this cost without AI Employees?</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d', maxWidth: 600, margin: '0 auto 40px' }}>Hiring freelancers or agencies for the same 11 roles would cost £8,000-£25,000/month. You get it all from £49.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { role: 'Social Media Manager', cost: '£2,000-£3,500/mo' },
              { role: 'SEO Content Writer', cost: '£1,500-£3,000/mo' },
              { role: 'Sales Rep', cost: '£2,500-£4,000/mo' },
              { role: 'Bookkeeper/CFO', cost: '£1,500-£5,000/mo' },
            ].map((r) => (
              <div key={r.role} style={{ background: '#fafafa', borderRadius: 16, padding: 24, textAlign: 'center' }}>
                <p style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14, marginBottom: 4 }}>{r.role}</p>
                <p style={{ color: '#FF3366', fontWeight: 800, fontSize: 18 }}>{r.cost}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 24, fontWeight: 900, color: '#6C3AFF', marginTop: 32 }}>All 11 roles. From £49/mo. That's less than one hour of a freelancer.</p>
        </div>
      </section>

      {/* Us vs Them */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#FF3366', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Us vs Them</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a2e', marginBottom: 8 }}>No one else comes close.</h2>
            <p style={{ fontSize: 17, color: '#6b6b8d', maxWidth: 600, margin: '0 auto' }}>We built the most complete AI workforce platform on the market. Here's the proof.</p>
          </div>

          <div style={{ background: '#fff', borderRadius: 24, border: '1px solid #eee', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #eee', background: '#fafafa' }}>
                  <th style={{ textAlign: 'left', padding: '16px 20px', fontSize: 13, fontWeight: 600, color: '#6b6b8d', minWidth: 260 }}>Feature</th>
                  {competitors.map((c) => (
                    <th key={c.name} style={{ textAlign: 'center', padding: '16px 12px', fontSize: 13, fontWeight: 700, color: c.us ? '#6C3AFF' : '#6b6b8d', minWidth: 120, background: c.us ? 'rgba(108,58,255,0.04)' : 'transparent' }}>
                      {c.us && <div style={{ width: 28, height: 28, background: '#6C3AFF', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 4px' }}><span style={{ color: '#fff', fontWeight: 700, fontSize: 9 }}>AI</span></div>}
                      {c.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compRows.map((r) => (
                  <tr key={r.key} style={{ borderTop: '1px solid #eee' }}>
                    <td style={{ padding: '12px 20px', fontSize: 13, color: '#1a1a2e', fontWeight: 500 }}>{r.label}</td>
                    {competitors.map((c) => (
                      <td key={c.name} style={{ textAlign: 'center', padding: '12px 8px', background: c.us ? 'rgba(108,58,255,0.02)' : 'transparent' }}>
                        {r.t === 'bool' ? (
                          c[r.key] ? <span style={{ color: '#00CC66', fontWeight: 700, fontSize: 16 }}>✓</span> : <span style={{ color: '#ddd', fontSize: 16 }}>✕</span>
                        ) : (
                          <span style={{ fontSize: 13, fontWeight: c.us ? 700 : 500, color: c.us ? '#6C3AFF' : '#6b6b8d' }}>{c[r.key]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Score summary */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 24 }}>
            {competitors.map((c) => {
              const score = compRows.filter(r => r.t === 'bool' && c[r.key]).length
              const total = compRows.filter(r => r.t === 'bool').length
              return (
                <div key={c.name} style={{ background: c.us ? '#6C3AFF' : '#fff', borderRadius: 16, padding: 20, textAlign: 'center', border: c.us ? 'none' : '1px solid #eee' }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: c.us ? '#fff' : '#1a1a2e' }}>{score}/{total}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: c.us ? 'rgba(255,255,255,0.7)' : '#6b6b8d', marginTop: 4 }}>{c.name}</div>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
              Start Your Free Trial
            </a>
            <p style={{ color: '#9999aa', fontSize: 13, marginTop: 12 }}>14-day free trial · No credit card · Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', textAlign: 'center', marginBottom: 40 }}>Pricing Questions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { q: 'Why do all plans include all 11 employees?', a: 'Because limiting employees defeats the purpose. Your marketing strategist needs to coordinate with your content creator, sales director, and analyst. The team works as a TEAM — removing members breaks the cross-review and content chain systems.' },
              { q: 'What\'s the difference between plans?', a: 'Usage limits (tasks/month), advanced features (Vibe Mode, content chains, webhooks, Custom Skills), and user seats. Starter is for getting started. Growth unlocks full autonomous capabilities. Enterprise removes all limits.' },
              { q: 'Can I upgrade or downgrade?', a: 'Anytime. Changes take effect on your next billing cycle. Upgrading gives immediate access to new features.' },
              { q: 'What counts as a "task"?', a: 'Any piece of work an employee produces: a social post, a blog article, a lead research batch, a financial report, a contract review. Each output = 1 task.' },
              { q: 'Is there a refund policy?', a: '30-day money-back guarantee. Not satisfied? Full refund, no questions. We\'re that confident.' },
              { q: 'Why are you cheaper than Sintra?', a: 'We offer MORE features (cross-collaboration, content chains, self-learning, lead discovery, finance, legal, voice/vibe mode) at a LOWER price. We\'re also UK-based with GBP pricing — no exchange rate surprises.' },
            ].map((f) => (
              <div key={f.q} style={{ background: '#fafafa', borderRadius: 16, padding: 24 }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, color: '#1a1a2e', marginBottom: 8 }}>{f.q}</h3>
                <p style={{ fontSize: 14, color: '#6b6b8d', lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#6C3AFF', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)', backgroundSize: '12px 12px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', marginBottom: 16 }}>Less than a freelancer. More than an agency.</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 32 }}>11 AI employees, 30+ certifications, 80+ frameworks. From £49/month.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  )
}
