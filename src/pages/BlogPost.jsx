import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import { findPostBySlug, posts } from '../data/blogPosts'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

export default function BlogPost() {
  const { slug } = useParams()
  const post = findPostBySlug(slug)

  if (!post) return <Navigate to="/404" replace />

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Sidekicc' },
    publisher: {
      '@type': 'Organization',
      name: 'Sidekicc',
      logo: { '@type': 'ImageObject', url: 'https://sidekicc.com/favicon.svg' },
    },
    mainEntityOfPage: `https://sidekicc.com/blog/${post.slug}`,
  }

  return (
    <div>
      <SEO
        title={`${post.title} | Sidekicc`}
        description={post.description}
        path={`/blog/${post.slug}`}
        ogImage={post.ogImage}
        ogType="article"
        jsonLd={articleJsonLd}
      />

      <section style={{ background: '#fff', padding: '60px 0 20px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px' }}>
          <Link to="/blog" style={{ color: '#6C3AFF', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>← All posts</Link>
          <div style={{ marginTop: 24, marginBottom: 16, display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ padding: '4px 10px', fontSize: 11, fontWeight: 600, color: '#fff', background: post.color, borderRadius: 8 }}>{post.cat}</span>
            <span style={{ fontSize: 13, color: '#9999aa' }}>{post.date}</span>
            <span style={{ fontSize: 13, color: '#9999aa' }}>·</span>
            <span style={{ fontSize: 13, color: '#9999aa' }}>{post.time} read</span>
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 16 }}>
            {post.title}
          </h1>
          <p style={{ fontSize: 17, color: '#6b6b8d', lineHeight: 1.6, marginBottom: 32 }}>{post.excerpt}</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '0 0 60px' }}>
        <article style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px', color: '#3d3d5c', fontSize: 17, lineHeight: 1.75 }} className="blog-article">
          <post.body />
        </article>
      </section>

      <section style={{ background: '#fafafa', padding: '60px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e' }}>Keep reading</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 960, margin: '0 auto' }}>
            {related.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} style={{ background: '#fff', borderRadius: 14, padding: 20, textDecoration: 'none', border: '1px solid #eee', display: 'block' }}>
                <span style={{ padding: '3px 8px', fontSize: 10, fontWeight: 600, color: '#fff', background: p.color, borderRadius: 6 }}>{p.cat}</span>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15, marginTop: 10, marginBottom: 6 }}>{p.title}</h3>
                <p style={{ color: '#6b6b8d', fontSize: 13, lineHeight: 1.55 }}>{p.excerpt.slice(0, 100)}{p.excerpt.length > 100 ? '…' : ''}</p>
              </Link>
            ))}
            {related.length === 0 && (
              <Link to="/blog" style={{ gridColumn: '1 / -1', background: '#fff', borderRadius: 14, padding: 20, textDecoration: 'none', border: '1px solid #eee', textAlign: 'center' }}>
                <span style={{ color: '#6C3AFF', fontWeight: 600 }}>Browse all posts →</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ ...cx, textAlign: 'center', maxWidth: 600 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e', marginBottom: 12 }}>Ready to try an AI workforce?</h2>
          <p style={{ fontSize: 15, color: '#6b6b8d', marginBottom: 20 }}>Start free. No card required. Deploy all 11 employees in under 10 minutes.</p>
          <a href="https://app.sidekicc.com" style={{ display: 'inline-block', background: '#6C3AFF', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px 28px', borderRadius: 12, textDecoration: 'none' }}>Get Started Free</a>
        </div>
      </section>
    </div>
  )
}
