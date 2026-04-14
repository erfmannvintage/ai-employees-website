import { Link } from 'react-router-dom'
import { plans } from '../data/employees'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const competitors = [
  { name: 'AI Employees', sub: 'Starter £49', us: true, employees: '11 (all plans)', taskModel: 'Simple monthly (500)', crossCollab: true, contentChains: false, vibeMode: false, video: false, blogCms: false, leadDiscovery: false, liveAnalytics: false, legal: true, finance: true, ads: true, research: true, autoResearch: false, selfLearning: true, webhooks: false, emailAll: true, trial: '14 days' },
  { name: 'AI Employees', sub: 'Growth £99', us: true, employees: '11 (all plans)', taskModel: 'Simple monthly (5,000)', crossCollab: true, contentChains: true, vibeMode: true, video: true, blogCms: true, leadDiscovery: true, liveAnalytics: true, legal: true, finance: true, ads: true, research: true, autoResearch: true, selfLearning: true, webhooks: true, emailAll: true, trial: '14 days' },
  { name: 'Sintra.ai', sub: '~£77/mo', us: false, employees: '12+ helpers', taskModel: 'Credits (350/mo — runs out fast)', crossCollab: false, contentChains: false, vibeMode: false, video: false, blogCms: false, leadDiscovery: false, liveAnalytics: false, legal: false, finance: false, ads: true, research: false, autoResearch: false, selfLearning: false, webhooks: false, emailAll: false, trial: 'None' },
  { name: 'Marblism', sub: '~£19-35/mo', us: false, employees: '6 employees', taskModel: 'Simple monthly', crossCollab: false, contentChains: false, vibeMode: false, video: false, blogCms: true, leadDiscovery: false, liveAnalytics: false, legal: true, finance: false, ads: false, research: false, autoResearch: false, selfLearning: false, webhooks: false, emailAll: false, trial: '7 days' },
]

const compRows = [
  { key: 'employees', label: 'AI Employees Included', t: 'text' },
  { key: 'taskModel', label: 'Task/Credit Model', t: 'text' },
  { key: 'trial', label: 'Free Trial', t: 'text' },
  { key: 'crossCollab', label: 'Cross-Employee Peer Review', t: 'bool' },
  { key: 'selfLearning', label: 'Self-Learning (5-layer pipeline)', t: 'bool' },
  { key: 'contentChains', label: 'Content Chains (auto-workflows)', t: 'bool' },
  { key: 'autoResearch', label: 'Weekly Auto-Research (6 tasks)', t: 'bool' },
  { key: 'vibeMode', label: 'Vibe Mode (fully autonomous)', t: 'bool' },
  { key: 'video', label: 'AI Video (TikTok-native)', t: 'bool' },
  { key: 'blogCms', label: 'Built-in Blog CMS + SEO', t: 'bool' },
  { key: 'leadDiscovery', label: 'Lead Discovery Engine (multi-source)', t: 'bool' },
  { key: 'emailAll', label: 'Multi-Provider Email', t: 'bool' },
  { key: 'liveAnalytics', label: 'Live GA4 + YouTube + Search Console', t: 'bool' },
  { key: 'legal', label: 'Legal & Compliance', t: 'bool' },
  { key: 'finance', label: 'Finance & CFO', t: 'bool' },
  { key: 'ads', label: 'Paid Ads (Google 9 certs + Meta)', t: 'bool' },
  { key: 'research', label: 'Market Research', t: 'bool' },
  { key: 'webhooks', label: 'Webhooks (Zapier, Make, n8n)', t: 'bool' },
]

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Pricing</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>
            All 11 Employees. Every Plan. No Credits.
          </h1>
          <p style={{ fontSize: 18, color: '#6b6b8d', maxWidth: 650, margin: '0 auto 8px' }}>
            Unlike competitors who use confusing credit systems, we use simple monthly task limits. All plans include all 11 AI employees — because your team needs the full squad to collaborate properly.
          </p>
          <p style={{ fontSize: 15, color: '#9999aa' }}>All prices in GBP. 14-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* 3 Plan Cards */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {plans.map((p) => (
                <div key={p.name} style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', border: p.highlight ? '2px solid #6C3AFF' : '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', boxShadow: p.highlight ? '0 8px 40px rgba(108,58,255,0.12)' : '0 2px 16px rgba(0,0,0,0.04)' }}>
                  {/* Scene image */}
                  <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                    <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    {p.badge && <div style={{ position: 'absolute', top: 12, right: 12, background: '#6C3AFF', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 8 }}>{p.badge}</div>}
                  </div>

                  <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontWeight: 800, fontSize: 22, color: '#1a1a2e', marginBottom: 4 }}>{p.name}</h3>
                    <div style={{ marginBottom: 4 }}>
                      <span style={{ fontSize: 52, fontWeight: 900, color: '#1a1a2e' }}>{p.currency}{p.price}</span>
                      <span style={{ fontSize: 16, color: '#9999aa' }}>/{p.period}</span>
                    </div>
                    <p style={{ fontSize: 13, color: '#00CC66', fontWeight: 600, marginBottom: 8 }}>
                      or {p.currency}{p.annualPrice}/{p.period} billed annually (save 20%)
                    </p>
                    <p style={{ fontSize: 14, color: '#6b6b8d', marginBottom: 16, lineHeight: 1.5 }}>{p.description}</p>

                    {/* Key stats */}
                    <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                      <div style={{ background: '#fafafa', borderRadius: 10, padding: '8px 12px', flex: 1, textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, fontSize: 15, color: '#1a1a2e' }}>👥 11</div>
                        <div style={{ fontSize: 10, color: '#9999aa' }}>Employees</div>
                      </div>
                      <div style={{ background: '#fafafa', borderRadius: 10, padding: '8px 12px', flex: 1, textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, fontSize: 15, color: '#1a1a2e' }}>{p.taskLimit}</div>
                        <div style={{ fontSize: 10, color: '#9999aa' }}>Tasks/mo</div>
                      </div>
                      <div style={{ background: '#fafafa', borderRadius: 10, padding: '8px 12px', flex: 1, textAlign: 'center' }}>
                        <div style={{ fontWeight: 800, fontSize: 15, color: '#1a1a2e' }}>{p.seats}</div>
                        <div style={{ fontSize: 10, color: '#9999aa' }}>Seats</div>
                      </div>
                    </div>

                    {/* Included features */}
                    <ul style={{ listStyle: 'none', marginBottom: 8, flex: 1 }}>
                      {p.features.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '4px 0' }}>
                          <svg width="14" height="14" fill="#00CC66" viewBox="0 0 20 20" style={{ marginTop: 3, flexShrink: 0 }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                          <span style={{ fontSize: 13, color: '#3d3d5c' }}>{f}</span>
                        </li>
                      ))}
                      {/* Locked features */}
                      {p.lockedFeatures.map((f) => (
                        <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '4px 0' }}>
                          <svg width="14" height="14" fill="#ddd" viewBox="0 0 20 20" style={{ marginTop: 3, flexShrink: 0 }}><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                          <span style={{ fontSize: 13, color: '#bbb' }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: p.highlight ? '#6C3AFF' : '#fff', color: p.highlight ? '#fff' : '#1a1a2e', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '14px 0', textDecoration: 'none', border: p.highlight ? 'none' : '2px solid #e0e0e0', boxShadow: p.highlight ? '0 4px 20px rgba(108,58,255,0.3)' : 'none', marginTop: 8 }}>
                      {p.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why no credits */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ ...cx, textAlign: 'center', maxWidth: 700 }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: '#1a1a2e', marginBottom: 16 }}>Why we don't use credits</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d', lineHeight: 1.7 }}>
            Competitors like Sintra use credit-based pricing where 350 credits can vanish in a couple of hours. Customers describe it as a "money grab" and "bait and switch." We think that's wrong. You should know exactly what you get each month — <strong style={{ color: '#1a1a2e' }}>500, 5,000, or unlimited tasks</strong>. Simple. Predictable. No surprises.
          </p>
        </div>
      </section>

      {/* Value comparison */}
      <section style={{ background: '#fafafa', padding: '60px 0' }}>
        <div style={cx}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', textAlign: 'center', marginBottom: 12 }}>What would this cost without AI Employees?</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d', textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>Hiring freelancers or agencies for the same roles costs £8,000-£25,000/month.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { role: 'Social Media Manager', cost: '£2,000-£3,500/mo' },
              { role: 'SEO Content Writer', cost: '£1,500-£3,000/mo' },
              { role: 'Sales Rep + CRM', cost: '£2,500-£4,000/mo' },
              { role: 'Bookkeeper/CFO', cost: '£1,500-£5,000/mo' },
            ].map((r) => (
              <div key={r.role} style={{ background: '#fff', borderRadius: 16, padding: 24, textAlign: 'center', border: '1px solid #eee' }}>
                <p style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14, marginBottom: 4 }}>{r.role}</p>
                <p style={{ color: '#FF3366', fontWeight: 800, fontSize: 20 }}>{r.cost}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 22, fontWeight: 900, color: '#6C3AFF', marginTop: 32, textAlign: 'center' }}>All 11 roles. From £49/mo. That's less than one hour of a freelancer.</p>
        </div>
      </section>

      {/* Us vs Them — detailed comparison */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#FF3366', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Us vs Them</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a2e', marginBottom: 8 }}>No one else comes close.</h2>
            <p style={{ fontSize: 17, color: '#6b6b8d', maxWidth: 600, margin: '0 auto' }}>We show both our Starter and Growth tiers so you can see exactly what each price point gets you compared to competitors.</p>
          </div>

          <div style={{ background: '#fff', borderRadius: 24, border: '1px solid #eee', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #eee', background: '#fafafa' }}>
                    <th style={{ textAlign: 'left', padding: '16px 20px', fontSize: 13, fontWeight: 600, color: '#6b6b8d', minWidth: 240 }}>Feature</th>
                    {competitors.map((c, i) => (
                      <th key={i} style={{ textAlign: 'center', padding: '16px 10px', fontSize: 12, fontWeight: 700, color: c.us ? '#6C3AFF' : '#6b6b8d', minWidth: 120, background: c.us ? 'rgba(108,58,255,0.04)' : 'transparent' }}>
                        <div>{c.name}</div>
                        <div style={{ fontSize: 11, fontWeight: 500, color: c.us ? '#6C3AFF' : '#9999aa', marginTop: 2 }}>{c.sub}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compRows.map((r) => (
                    <tr key={r.key} style={{ borderTop: '1px solid #eee' }}>
                      <td style={{ padding: '12px 20px', fontSize: 13, color: '#1a1a2e', fontWeight: 500 }}>{r.label}</td>
                      {competitors.map((c, i) => (
                        <td key={i} style={{ textAlign: 'center', padding: '12px 8px', background: c.us ? 'rgba(108,58,255,0.02)' : 'transparent' }}>
                          {r.t === 'bool' ? (
                            c[r.key] ? <span style={{ color: '#00CC66', fontWeight: 700, fontSize: 16 }}>✓</span> : <span style={{ color: '#ddd', fontSize: 16 }}>✕</span>
                          ) : (
                            <span style={{ fontSize: 12, fontWeight: c.us ? 600 : 400, color: c.us ? '#6C3AFF' : '#6b6b8d' }}>{c[r.key]}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Score cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 24 }}>
            {competitors.map((c, i) => {
              const score = compRows.filter(r => r.t === 'bool' && c[r.key]).length
              const total = compRows.filter(r => r.t === 'bool').length
              return (
                <div key={i} style={{ background: c.us ? '#6C3AFF' : '#fff', borderRadius: 16, padding: 20, textAlign: 'center', border: c.us ? 'none' : '1px solid #eee' }}>
                  <div style={{ fontSize: 32, fontWeight: 900, color: c.us ? '#fff' : '#1a1a2e' }}>{score}/{total}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: c.us ? 'rgba(255,255,255,0.7)' : '#6b6b8d', marginTop: 2 }}>{c.name}</div>
                  <div style={{ fontSize: 11, color: c.us ? 'rgba(255,255,255,0.5)' : '#9999aa' }}>{c.sub}</div>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
              Start Your Free Trial
            </a>
            <p style={{ color: '#9999aa', fontSize: 13, marginTop: 12 }}>14-day free trial · No credit card · No credits to run out</p>
          </div>
        </div>
      </section>

      {/* Common problems with other platforms */}
      <section style={{ background: '#1a1a2e', padding: '60px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 8 }}>Problems with other AI employee platforms</h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>Common issues reported by users of competing products — and how we do things differently.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { problem: 'Credit-based pricing', desc: 'Some platforms use confusing credit systems where allowances vanish within hours. Users describe it as feeling punished for actually using the product.', fix: 'We use simple monthly task limits: 500, 5,000, or unlimited. No credits. No surprises.' },
              { problem: 'AI agents don\'t collaborate', desc: 'On most platforms, each AI agent works in isolation. There\'s no cross-checking, no knowledge sharing, no team coordination.', fix: 'Our employees cross-review each other\'s work, share insights, run 5 automated content chains, and coordinate via a team communication system.' },
              { problem: 'Agents forget everything', desc: 'Users report AI agents with minimal memory that forget instructions, require constant re-prompting, and can\'t learn from past work.', fix: 'Every employee has a permanent Brain with business knowledge, learns from every task, gets peer feedback stored permanently, and self-assesses monthly.' },
              { problem: 'Brand safety risks', desc: 'Some platforms publish content automatically without review, leading to embarrassing or brand-damaging outputs reaching customers.', fix: 'Nothing publishes without your approval. Every task goes through peer review by 1-3 colleagues before reaching your Approval Queue.' },
              { problem: 'Constant monitoring needed', desc: 'Users report spending most of their day correcting AI output rather than saving time. The tool adds complexity instead of removing it.', fix: 'Vibe Mode lets employees work autonomously. Daily action plans and the Approval Queue give you oversight without micromanagement.' },
              { problem: 'Missing business functions', desc: 'Many platforms cover marketing and content but lack finance, legal, research, and analytics specialists — leaving gaps you still need to fill.', fix: 'All 11 employees cover 9 business domains: marketing, sales, support, content, analytics, legal, ads, research, and finance. No gaps.' },
            ].map((c) => (
              <div key={c.problem} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,0.06)' }}>
                <h3 style={{ color: '#FF3366', fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{c.problem}</h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>{c.desc}</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.6 }}>
                  <span style={{ color: '#00CC66', fontWeight: 700 }}>How we're different:</span> {c.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', textAlign: 'center', marginBottom: 40 }}>Pricing Questions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { q: 'Why do all plans have all 11 employees?', a: 'Because your marketing strategist needs your sales director, your SEO writer needs your social media manager, and your CFO needs your legal advisor. The cross-review matrix and content chains require the full team. Removing employees breaks the collaboration system that makes AI Employees unique.' },
              { q: 'What\'s the difference between plans then?', a: 'Task limits (500 vs 5,000 vs unlimited), and which CAPABILITIES are unlocked. Starter gives you Chat + Voice. Growth adds Vibe Mode (fully autonomous work), content chains, campaign templates, lead discovery, all integrations, AI image/video gen, and auto-research. Enterprise adds unlimited everything + white-label.' },
              { q: 'What counts as a "task"?', a: 'Any piece of output an employee produces: a social post, a blog article, a lead discovery batch, a financial report, a contract review, an analytics dashboard. Each output = 1 task. A conversation in chat that doesn\'t produce output doesn\'t count.' },
              { q: 'Why don\'t you use credits like Sintra?', a: 'Because credit systems are confusing and punish active users. Sintra customers report 350 credits vanishing in a couple of hours. We use simple monthly task limits — you know exactly what you get. 500, 5,000, or unlimited. No surprises, no "money grab" feeling.' },
              { q: 'Can I upgrade mid-month?', a: 'Yes. Upgrade anytime and get immediate access to new features. Your new task limit applies instantly. You only pay the prorated difference for the remaining days.' },
              { q: 'Why are you cheaper than Sintra?', a: 'We offer MORE features (cross-collaboration, content chains, self-learning, lead discovery, finance, legal, voice/vibe mode) at a LOWER price point. Our Growth plan at £99 beats Sintra\'s £77 plan on 15 out of 15 feature categories. And we don\'t use credits.' },
              { q: 'Is there a refund policy?', a: '30-day money-back guarantee on all paid plans. Not satisfied within 30 days? Full refund, no questions asked. We\'re that confident.' },
              { q: 'What happens when I hit my task limit?', a: 'You get a notification at 80% and 100%. Once you hit the limit, employees can still chat with you but won\'t produce new outputs until next month — or you can upgrade instantly to get more tasks immediately.' },
            ].map((f) => (
              <div key={f.q} style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid #eee' }}>
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
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 32 }}>11 AI employees, 30+ certifications, 80+ frameworks. From £49/month. No credits. No surprises.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  )
}
