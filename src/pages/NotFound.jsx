import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found — Sidekicc"
        description="The page you're looking for doesn't exist. Jump to the team, pricing, or integrations."
        path="/404"
        noindex
      />
      <section style={{ background: '#fff', padding: '120px 0 80px', minHeight: '60vh' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>404</p>
          <h1 style={{ fontSize: 56, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16 }}>
            Page not found.
          </h1>
          <p style={{ fontSize: 17, color: '#6b6b8d', marginBottom: 32, lineHeight: 1.7 }}>
            The page you're looking for doesn't exist — it might have moved, or the link might be wrong. Here's where to go next:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, maxWidth: 560, margin: '0 auto 40px' }}>
            {[
              { to: '/', t: 'Home', d: 'Overview of Sidekicc' },
              { to: '/about', t: 'The 11 AI employees', d: 'Full team CVs' },
              { to: '/integrations', t: 'Integrations', d: '60+ tools connected' },
              { to: '/pricing', t: 'Pricing', d: 'From £49/mo' },
            ].map((l) => (
              <Link key={l.to} to={l.to} style={{ background: '#fafafa', borderRadius: 14, padding: 20, textDecoration: 'none', border: '1px solid #eee', textAlign: 'left' }}>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15, marginBottom: 4 }}>{l.t}</h3>
                <p style={{ color: '#6b6b8d', fontSize: 13 }}>{l.d}</p>
              </Link>
            ))}
          </div>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 15, borderRadius: 12, padding: '14px 28px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.25)' }}>
            Back to home
          </Link>
        </div>
      </section>
    </>
  )
}
