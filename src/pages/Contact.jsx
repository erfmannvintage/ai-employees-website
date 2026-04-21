import { useState } from 'react'
import SEO from '../components/SEO'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

export default function Contact() {
  const [sent, setSent] = useState(false)

  const inputStyle = { width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: 12, fontSize: 15, background: '#fff', color: '#1a1a2e' }

  return (
    <div>
      <SEO
        title="Contact Sidekicc — hello@sidekicc.com"
        description="Questions, partnership enquiries, or support? Get in touch with Sidekicc — we respond within 24 hours."
        path="/contact"
      />
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Contact</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em' }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: 17, color: '#6b6b8d', marginTop: 12 }}>Questions, feedback, or partnership inquiries? We'd love to hear from you.</p>
        </div>
      </section>

      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 32 }}>
            {/* Form */}
            <div style={{ background: '#fff', borderRadius: 24, padding: 32, border: '1px solid #eee' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(108,58,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <svg width="32" height="32" fill="none" stroke="#6C3AFF" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h2 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e' }}>Message Sent!</h2>
                  <p style={{ color: '#6b6b8d', marginTop: 8 }}>We'll reply within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>First Name</label>
                      <input type="text" required style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Last Name</label>
                      <input type="text" required style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Email</label>
                    <input type="email" required style={inputStyle} />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Subject</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option>General Enquiry</option>
                      <option>Sales</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Press / Media</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#1a1a2e', marginBottom: 6 }}>Message</label>
                    <textarea required rows={5} style={{ ...inputStyle, resize: 'none' }} />
                  </div>
                  <button type="submit" style={{ width: '100%', background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 12, padding: '14px 0', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(108,58,255,0.3)' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #eee' }}>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 10 }}>Email Us</h3>
                <p style={{ fontSize: 15, color: '#6b6b8d', marginBottom: 4 }}>General enquiries:</p>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#6C3AFF' }}>hello@sidekicc.com</p>
                <p style={{ fontSize: 15, color: '#6b6b8d', marginTop: 10, marginBottom: 4 }}>Support:</p>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#6C3AFF' }}>support@sidekicc.com</p>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #eee' }}>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 10 }}>Response Time</h3>
                <p style={{ fontSize: 15, color: '#6b6b8d' }}>We respond to all enquiries within 24 hours during business days.</p>
              </div>
              <div style={{ background: '#fff', borderRadius: 20, padding: 24, border: '1px solid #eee' }}>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: 10 }}>Follow Us</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {[
                    { name: 'TikTok', href: 'https://www.tiktok.com/@artifactlystudio' },
                    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCWZ2nM7t_q55wLtqew0W7CQ' },
                    { name: 'Instagram', href: 'https://www.instagram.com/artifactly.studio/' },
                    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588522569735' },
                    { name: 'X', href: 'https://x.com/Artifactly_' },
                  ].map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" style={{ padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#6C3AFF', background: 'rgba(108,58,255,0.06)', borderRadius: 8, textDecoration: 'none' }}>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
