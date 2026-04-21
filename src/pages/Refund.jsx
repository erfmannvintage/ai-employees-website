import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const sections = [
  { t: 'Eligibility', c: 'Within 30 days of first payment on a paid subscription. First subscription period only. Free trials are not eligible for refund. Renewals: pro-rata refunds available within 7 days of a renewal charge.' },
  { t: 'How to Request', c: 'Email billing@sidekicc.com with your account email and the reason. Most requests are processed within 5-10 business days to your original payment method.' },
  { t: 'After a Refund', c: 'Your account is paused and your data is retained for 30 days so you can resubscribe if you change your mind. After 30 days inactive data is permanently deleted (except billing records kept for HMRC).' },
  { t: 'Exceptions', c: 'Terms of Service violations, refund policy abuse, or chargebacks filed without contacting us first disqualify a refund. See Terms section 10 (Acceptable Use) and section 17 (Suspension and termination).' },
  { t: 'Cancellation (no refund needed)', c: 'You can cancel at any time from your account settings. Access continues until the end of your current billing period. No cancellation fees, no lock-in.' },
  { t: 'Your statutory rights', c: 'Consumers in the UK and EU retain rights under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 (14-day cooling-off) and the Consumer Rights Act 2015. This refund policy is in addition to those rights, not a replacement for them.' },
]

export default function Refund() {
  return (
    <div>
      <SEO
        title="Refund Policy — Sidekicc 30-Day Money-Back Guarantee"
        description="30-day money-back guarantee on first-time paid subscriptions. Simple process, no hoops. Your statutory consumer rights are preserved."
        path="/refund"
      />

      <section style={{ background: '#fff', padding: '80px 0 40px' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Legal</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 12 }}>Refund Policy</h1>
          <p style={{ fontSize: 15, color: '#9999aa' }}>Last updated: 21 April 2026</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '20px 0 60px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ background: 'rgba(108,58,255,0.04)', borderRadius: 24, padding: 40, border: '1px solid rgba(108,58,255,0.08)', textAlign: 'center', marginBottom: 40 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(108,58,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <svg width="32" height="32" fill="none" stroke="#6C3AFF" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e' }}>30-Day Money-Back Guarantee</h2>
            <p style={{ fontSize: 15, color: '#4a4a6a', marginTop: 8 }}>Not satisfied within 30 days of your first paid subscription? Full refund. No hoops.</p>
          </div>

          {sections.map((s) => (
            <div key={s.t} style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>{s.t}</h2>
              <p style={{ fontSize: 15, color: '#3d3d5c', lineHeight: 1.75 }}>{s.c}</p>
            </div>
          ))}

          <p style={{ fontSize: 14, color: '#9999aa', marginTop: 32 }}>
            Questions? <Link to="/contact" style={{ color: '#6C3AFF', fontWeight: 600, textDecoration: 'none' }}>Contact us</Link> — we usually respond within 24 hours.
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
              { to: '/terms', t: 'Terms of Service', d: 'Your agreement with Sidekicc.' },
              { to: '/privacy', t: 'Privacy Policy', d: 'How we handle your data.' },
              { to: '/cookies', t: 'Cookie Policy', d: 'What cookies we use and why.' },
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
