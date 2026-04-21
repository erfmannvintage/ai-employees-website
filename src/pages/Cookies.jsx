import { Link } from 'react-router-dom'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const categories = [
  {
    name: 'Strictly necessary',
    purpose: 'Authenticate your session, keep you signed in, remember your cookie preferences, maintain security, and load-balance requests.',
    lawfulBasis: 'No consent required — PECR reg. 6(4) "strictly necessary" exemption.',
    cookies: [
      { name: 'sidekicc.session', duration: 'Session', purpose: 'Active session authentication.' },
      { name: 'sidekicc.cookieConsent', duration: '12 months', purpose: 'Remembers your cookie choices.' },
      { name: 'cf-* / __cf_*', duration: 'Session – 30 days', purpose: 'CDN load balancing and bot protection.' },
    ],
  },
  {
    name: 'Analytics',
    purpose: 'Measure aggregate usage — which pages are visited, how long, which features are used — so we can improve the product. Data is anonymised.',
    lawfulBasis: 'Consent (PECR reg. 6). Off unless you opt in.',
    cookies: [
      { name: '_plausible', duration: '30 days', purpose: 'Privacy-friendly aggregate analytics (no IP tracking, no cross-site profiling).' },
    ],
  },
  {
    name: 'Marketing',
    purpose: 'Attribute signups to campaigns and measure conversion on paid ads.',
    lawfulBasis: 'Consent (PECR reg. 6). Off unless you opt in.',
    cookies: [
      { name: '_gcl_au / _gcl_aw', duration: '90 days', purpose: 'Google Ads conversion measurement.' },
      { name: '_fbp / _fbc', duration: '90 days', purpose: 'Meta Ads conversion measurement.' },
      { name: '_ttp', duration: '390 days', purpose: 'TikTok Ads conversion measurement.' },
    ],
  },
]

function resetConsent() {
  try {
    localStorage.removeItem('sidekicc.cookieConsent')
    window.location.reload()
  } catch {}
}

export default function Cookies() {
  return (
    <div>
      <section style={{ background: '#fff', padding: '80px 0 40px' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Legal</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 12 }}>Cookie Policy</h1>
          <p style={{ fontSize: 15, color: '#9999aa' }}>Last updated: 21 April 2026 · Governed by PECR + UK GDPR.</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '20px 0 60px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
          <p style={{ fontSize: 15, color: '#3d3d5c', lineHeight: 1.75, marginBottom: 24 }}>
            A cookie is a small text file stored on your device when you visit a website. Sidekicc uses cookies and similar technologies (local storage, session storage) to operate the site and, with your permission, to measure usage and attribute marketing.
          </p>
          <p style={{ fontSize: 15, color: '#3d3d5c', lineHeight: 1.75, marginBottom: 40 }}>
            Under the Privacy and Electronic Communications Regulations (PECR) and the UK GDPR, we will only set non-essential cookies with your prior, informed consent. Strictly necessary cookies are exempt and always active.
          </p>

          {categories.map((cat) => (
            <div key={cat.name} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>{cat.name}</h2>
              <p style={{ fontSize: 14, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 6 }}><strong style={{ color: '#1a1a2e' }}>Purpose:</strong> {cat.purpose}</p>
              <p style={{ fontSize: 14, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 14 }}><strong style={{ color: '#1a1a2e' }}>Lawful basis:</strong> {cat.lawfulBasis}</p>
              <div style={{ border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr style={{ background: '#fafafa' }}>
                      <th style={{ textAlign: 'left', padding: '10px 14px', fontWeight: 700, color: '#1a1a2e' }}>Cookie / storage key</th>
                      <th style={{ textAlign: 'left', padding: '10px 14px', fontWeight: 700, color: '#1a1a2e' }}>Duration</th>
                      <th style={{ textAlign: 'left', padding: '10px 14px', fontWeight: 700, color: '#1a1a2e' }}>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.cookies.map((c) => (
                      <tr key={c.name} style={{ borderTop: '1px solid #eee' }}>
                        <td style={{ padding: '10px 14px', color: '#1a1a2e', fontFamily: 'ui-monospace, SFMono-Regular, monospace', fontSize: 12 }}>{c.name}</td>
                        <td style={{ padding: '10px 14px', color: '#6b6b8d' }}>{c.duration}</td>
                        <td style={{ padding: '10px 14px', color: '#6b6b8d' }}>{c.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div style={{ background: 'rgba(108,58,255,0.04)', borderRadius: 16, padding: 24, border: '1px solid rgba(108,58,255,0.08)', marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Change your cookie choices</h2>
            <p style={{ fontSize: 14, color: '#4a4a6a', lineHeight: 1.65, marginBottom: 14 }}>
              Your current choice is stored in your browser. Clear it below to re-open the consent banner and make a new selection.
            </p>
            <button onClick={resetConsent} style={{ background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 14, border: 'none', borderRadius: 10, padding: '10px 20px', cursor: 'pointer' }}>Review my cookie preferences</button>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>Browser-level controls</h2>
          <p style={{ fontSize: 14, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 8 }}>
            Most browsers let you block or delete cookies entirely. See: Chrome, Safari, Firefox, Edge. Blocking strictly necessary cookies will prevent parts of the site from working.
          </p>
          <p style={{ fontSize: 14, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 40 }}>
            You can also set a "Do Not Track" signal in your browser — we respect it where feasible and treat it as a withdrawal of consent for non-essential categories.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>Questions & complaints</h2>
          <p style={{ fontSize: 14, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 16 }}>
            Questions about this policy: <a href="mailto:privacy@sidekicc.com" style={{ color: '#6C3AFF', textDecoration: 'none' }}>privacy@sidekicc.com</a>.<br />
            Complaints to the regulator: Information Commissioner's Office — <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer" style={{ color: '#6C3AFF', textDecoration: 'none' }}>ico.org.uk/make-a-complaint/</a> or 0303 123 1113.
          </p>
        </div>
      </section>

      <section style={{ background: '#fafafa', padding: '60px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e' }}>Related documents</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
            {[
              { to: '/privacy', t: 'Privacy Policy', d: 'How we handle your data.' },
              { to: '/terms', t: 'Terms of Service', d: 'Your agreement with Sidekicc.' },
              { to: '/refund', t: 'Refund Policy', d: '30-day money-back guarantee.' },
            ].map((l) => (
              <Link key={l.to} to={l.to} style={{ background: '#fff', borderRadius: 14, padding: 20, textDecoration: 'none', border: '1px solid #eee' }}>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15, marginBottom: 4 }}>{l.t}</h3>
                <p style={{ color: '#6b6b8d', fontSize: 13 }}>{l.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
