import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { posts as livePosts } from '../data/blogPosts'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

export default function Blog() {
  return (
    <div>
      <SEO
        title="Blog — AI Workforce Strategy & Case Studies | Sidekicc"
        description="Guides, case studies, and deep-dives on running your business with AI employees. Written for founders and small-business owners."
        path="/blog"
      />
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Blog</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Insights & Strategies
          </h1>
          <p style={{ fontSize: 17, color: '#6b6b8d', maxWidth: 500, margin: '0 auto' }}>Case studies, strategies, and deep-dives on building a business powered by AI.</p>
        </div>
      </section>

      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {livePosts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <article style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid #eee', cursor: 'pointer', transition: 'all 0.3s', height: '100%' }}>
                  <div style={{ height: 6, background: p.color }} />
                  <div style={{ padding: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                      <span style={{ padding: '4px 10px', fontSize: 11, fontWeight: 600, color: '#fff', background: p.color, borderRadius: 8 }}>{p.cat}</span>
                      <span style={{ fontSize: 12, color: '#9999aa' }}>{p.time}</span>
                    </div>
                    <h2 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 18, lineHeight: 1.4, marginBottom: 10 }}>{p.title}</h2>
                    <p style={{ fontSize: 14, color: '#6b6b8d', lineHeight: 1.6, marginBottom: 16 }}>{p.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 12, color: '#9999aa' }}>{p.date}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: '#6C3AFF' }}>Read →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 500, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <div style={{ background: '#fafafa', borderRadius: 20, padding: 32, border: '1px solid #eee' }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e', marginBottom: 8 }}>Stay in the Loop</h2>
            <p style={{ fontSize: 14, color: '#6b6b8d', marginBottom: 20 }}>AI workforce insights delivered to your inbox. No spam.</p>
            <form style={{ display: 'flex', gap: 10 }} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@company.com" style={{ flex: 1, padding: '12px 16px', border: '1px solid #ddd', borderRadius: 12, fontSize: 14, outline: 'none' }} />
              <button type="submit" style={{ background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 14, borderRadius: 12, padding: '12px 24px', border: 'none', cursor: 'pointer' }}>Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Explore more — internal linking for SEO */}
      <section style={{ background: '#fafafa', padding: '60px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e', marginBottom: 8 }}>Explore Sidekicc</h2>
            <p style={{ fontSize: 15, color: '#6b6b8d' }}>Learn more about the platform behind the posts.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {[
              { to: '/about', title: 'Meet the 11 employees', desc: 'Full CVs for Cecil, Flora, Hugh, Mabel, Rupert, Poppi, Ava, Raymond, Bowie, Angela, Basil.' },
              { to: '/integrations', title: '60+ integrations', desc: 'Every tool Sidekicc connects to — email, social, analytics, finance, legal.' },
              { to: '/pricing', title: 'Pricing from £49/mo', desc: 'Three simple tiers, no credits, 7-day free trial. Compare against competitors.' },
              { to: '/help', title: 'Help Centre', desc: '25+ answers on setup, employees, features, billing, security.' },
            ].map((l) => (
              <Link key={l.to} to={l.to} style={{ background: '#fff', borderRadius: 16, padding: 24, textDecoration: 'none', border: '1px solid #eee', transition: 'all 0.2s', display: 'block' }}>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 16, marginBottom: 6 }}>{l.title}</h3>
                <p style={{ color: '#6b6b8d', fontSize: 13, lineHeight: 1.55 }}>{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
