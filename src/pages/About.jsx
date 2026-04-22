import { Link } from 'react-router-dom'
import { employees } from '../data/employees'
import SEO from '../components/SEO'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

export default function About() {
  return (
    <div>
      <SEO
        title="Meet the 11 AI Employees — Sidekicc Team"
        description="Meet Cecil, Flora, Basil, Hugh, Mabel, Rupert, Poppi, Ava, Raymond, Bowie, and Angela — the 11 AI employees that run your business. Full CVs, certifications, and specialties."
        path="/about"
      />
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Our Story</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>
            The Team Behind <span style={{ color: '#6C3AFF' }}>Sidekicc</span>
          </h1>
          <p style={{ fontSize: 18, color: '#6b6b8d', maxWidth: 560, margin: '0 auto' }}>
            Every business deserves a world-class team — regardless of budget. See <Link to="/integrations" style={{ color: '#6C3AFF', fontWeight: 600, textDecoration: 'none' }}>every integration</Link> they're connected to, or jump straight to <Link to="/pricing" style={{ color: '#6C3AFF', fontWeight: 600, textDecoration: 'none' }}>pricing</Link>.
          </p>
        </div>
      </section>

      {/* Pain point */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>The Problem</p>
              <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 20 }}>You Want to Scale, But...</h2>
              <p style={{ fontSize: 17, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 20 }}>
                You're wearing too many hats: CEO, marketer, sales rep, support agent, content creator, bookkeeper, legal reviewer. Sound familiar?
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['100+ unread emails every morning', 'Social media hasn\'t been updated in weeks', 'Leads falling through the cracks', 'Finances in a spreadsheet you never open', 'Hiring is expensive, slow, and risky'].map((pain) => (
                  <div key={pain} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF3366', flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: '#3d3d5c' }}>{pain}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ borderRadius: 24, overflow: 'hidden', border: '3px solid #1a1a2e', boxShadow: '6px 6px 0 #6C3AFF' }}>
                <img src="/hero-office.png" alt="AI team at work" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the team — CLICKABLE */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Meet the Team</p>
            <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em' }}>
              Your <span style={{ color: '#6C3AFF' }}>11 Employees</span>
            </h2>
            <p style={{ fontSize: 17, color: '#6b6b8d', marginTop: 12 }}>Click any employee to see their full CV, qualifications, and capabilities.</p>
          </div>

          <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 28 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {employees.map((emp) => (
                <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} style={{ textDecoration: 'none', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)', transition: 'all 0.3s', display: 'block' }}>
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img src={emp.image} alt={emp.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                      <h3 style={{ fontWeight: 800, color: '#1a1a2e', fontSize: 18 }}>{emp.name}</h3>
                      <svg width="16" height="16" fill="none" stroke="#6C3AFF" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </div>
                    <p style={{ color: '#6C3AFF', fontSize: 12, fontWeight: 600, marginBottom: 8 }}>{emp.role}</p>
                    <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.6 }}>"{emp.description}"</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 10 }}>
                      {emp.skills.slice(0, 3).map((s) => (
                        <span key={s} style={{ padding: '3px 8px', fontSize: 11, fontWeight: 600, color: '#6C3AFF', background: 'rgba(108,58,255,0.06)', borderRadius: 6 }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1a1a2e', padding: '60px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, textAlign: 'center' }}>
            {[
              { v: '11', l: 'AI Employees' }, { v: '30+', l: 'Certifications' }, { v: '80+', l: 'Frameworks' },
              { v: '24/7', l: 'Availability' }, { v: '<60s', l: 'Setup Time' }, { v: '6/wk', l: 'Auto-Research' },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#fff' }}>{s.v}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#6C3AFF', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', marginBottom: 16 }}>Welcome to Your New Life.</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 32 }}>Stop doing everything yourself. Let your AI team handle it.</p>
          <a href="https://app.sidekicc.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
            Meet Your AI Team
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </section>
    </div>
  )
}
