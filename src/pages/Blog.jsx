import { Link } from 'react-router-dom'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const posts = [
  { title: 'Why 77% of Businesses Fail at AI (And How to Be the 5%)', excerpt: 'The AI adoption gap is massive. Most businesses know AI is transformational but can\'t figure out how to implement it. Here\'s what the successful 5% do differently — and how Sidekicc closes the gap.', cat: 'AI Strategy', date: 'Apr 10, 2026', time: '6 min', color: '#6C3AFF' },
  { title: 'The Complete Guide to AI-Powered Marketing in 2026', excerpt: 'From content creation to ad optimization to analytics — how AI is reshaping every aspect of marketing. Includes Poppi\'s AARRR funnel framework and Flora\'s 10-post-per-day strategy.', cat: 'Marketing', date: 'Apr 8, 2026', time: '8 min', color: '#0066FF' },
  { title: 'How to Replace 3 Freelancers with Sidekicc (Case Study)', excerpt: 'A real-world case study showing how one e-commerce founder replaced freelance writers, social managers, and data analysts — saving £4,200/month while increasing output.', cat: 'Case Study', date: 'Apr 5, 2026', time: '5 min', color: '#00CC66' },
  { title: 'SEO in the Age of AI: What Google Actually Wants', excerpt: 'Google\'s algorithms have evolved. Here\'s what Mabel (our SEO AI) has learned about AEO, GEO, and hub-and-spoke content architecture for ranking in 2026.', cat: 'SEO', date: 'Apr 2, 2026', time: '7 min', color: '#7B2FBE' },
  { title: 'The ROI of an AI Workforce: Breaking Down the Numbers', excerpt: 'We did the math. Here\'s exactly how much time and money businesses save when they deploy 11 AI employees vs. hiring freelancers or agencies. The numbers are dramatic.', cat: 'Business', date: 'Mar 28, 2026', time: '6 min', color: '#FF6600' },
  { title: 'Building a Content Pipeline That Runs on Autopilot', excerpt: 'How to set up Flora, Mabel, and Poppi to create, cross-review, and publish content across every channel — using the 5 automated content chains.', cat: 'Content', date: 'Mar 24, 2026', time: '5 min', color: '#FF1493' },
]

export default function Blog() {
  return (
    <div>
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
            {posts.map((p) => (
              <article key={p.title} style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid #eee', cursor: 'pointer', transition: 'all 0.3s' }}>
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
    </div>
  )
}
