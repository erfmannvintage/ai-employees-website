import { Link } from 'react-router-dom'
import { employees } from '../data/employees'

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/artifactly.studio/', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { name: 'Youtube', href: 'https://www.youtube.com/channel/UCWZ2nM7t_q55wLtqew0W7CQ', d: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@artifactlystudio', d: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.01-.3z' },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588522569735', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'X', href: 'https://x.com/Artifactly_', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a2e', color: '#fff' }}>
      {/* Top CTA strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '48px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 800 }}>Ready to hire your AI workforce?</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, marginTop: 4 }}>Start your free trial today. No credit card required.</p>
          </div>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '14px 28px', textDecoration: 'none' }}>
            Get Started Free
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
        </div>
      </div>

      {/* Main footer content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 48 }}>
          {/* Brand + socials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: '#6C3AFF', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>S</div>
              <span style={{ fontWeight: 700, fontSize: 17 }}>Sidekicc</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14, lineHeight: 1.7, marginBottom: 24, maxWidth: 280 }}>
              11 specialized AI employees handling marketing, sales, support, content, analytics, legal, ads, research, and finance.
            </p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', transition: 'all 0.2s' }}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                </a>
              ))}
            </div>

            {/* App Store badges */}
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div><div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>Download on the</div><div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>App Store</div></div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.5)"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.65 12 17.72 10.79l-2.54 2.54 2.54 2.54zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                <div><div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>Get it on</div><div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>Google Play</div></div>
              </div>
            </div>
          </div>

          {/* Your Team */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>Your Team</h4>
            <ul style={{ listStyle: 'none' }}>
              {employees.slice(0, 6).map((e) => (
                <li key={e.name} style={{ marginBottom: 10 }}>
                  <Link to={`/employee/${e.name.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none' }}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>&nbsp;</h4>
            <ul style={{ listStyle: 'none' }}>
              {employees.slice(6).map((e) => (
                <li key={e.name} style={{ marginBottom: 10 }}>
                  <Link to={`/employee/${e.name.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none' }}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>Company</h4>
            <ul style={{ listStyle: 'none' }}>
              {[{ to: '/pricing', l: 'Pricing' }, { to: '/integrations', l: 'Integrations' }, { to: '/about', l: 'About' }, { to: '/blog', l: 'Blog' }, { to: '/help', l: 'Help Centre' }, { to: '/contact', l: 'Contact' }].map((x) => (
                <li key={x.to} style={{ marginBottom: 10 }}>
                  <Link to={x.to} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none' }}>{x.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 20 }}>Legal</h4>
            <ul style={{ listStyle: 'none' }}>
              {[{ to: '/terms', l: 'Terms of Service' }, { to: '/privacy', l: 'Privacy Policy' }, { to: '/refund', l: 'Refund Policy' }].map((x) => (
                <li key={x.to} style={{ marginBottom: 10 }}>
                  <Link to={x.to} style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, textDecoration: 'none' }}>{x.l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, background: '#6C3AFF', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 10 }}>S</div>
            <span style={{ fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Sidekicc</span>
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>&copy; {new Date().getFullYear()} Sidekicc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
