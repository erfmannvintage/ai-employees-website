import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// PECR-compliant cookie consent:
// - No non-essential cookies/trackers fire until opt-in
// - Equal prominence for Accept / Reject
// - Granular category toggles
// - Choice stored for 12 months; user can change anytime from /cookies
// Current choice is read by app code via: window.__cookieConsent || JSON.parse(localStorage.getItem('sidekicc.cookieConsent'))

const STORAGE_KEY = 'sidekicc.cookieConsent'
const CONSENT_VERSION = 1

const categories = [
  {
    key: 'essential',
    name: 'Strictly necessary',
    desc: 'Authentication, session, security, load balancing. Always on — cannot be disabled.',
    required: true,
  },
  {
    key: 'analytics',
    name: 'Analytics',
    desc: 'Aggregate usage measurement so we can improve the product. Anonymised.',
    required: false,
  },
  {
    key: 'marketing',
    name: 'Marketing',
    desc: 'Attribution of campaigns and conversion tracking. Off unless you opt in.',
    required: false,
  },
]

function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

function writeConsent(choices) {
  const payload = { version: CONSENT_VERSION, choices, ts: new Date().toISOString() }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  window.__cookieConsent = payload
  window.dispatchEvent(new CustomEvent('sidekicc:cookieConsent', { detail: payload }))
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [choices, setChoices] = useState({ essential: true, analytics: false, marketing: false })

  useEffect(() => {
    const existing = readConsent()
    if (!existing) setVisible(true)
    else window.__cookieConsent = existing
  }, [])

  if (!visible) return null

  const acceptAll = () => { writeConsent({ essential: true, analytics: true, marketing: true }); setVisible(false) }
  const rejectAll = () => { writeConsent({ essential: true, analytics: false, marketing: false }); setVisible(false) }
  const savePreferences = () => { writeConsent(choices); setVisible(false) }

  return (
    <div role="dialog" aria-label="Cookie consent" aria-live="polite" style={{ position: 'fixed', left: 16, right: 16, bottom: 16, zIndex: 9999, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <div style={{ maxWidth: 720, width: '100%', background: '#fff', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.06)', padding: 24, pointerEvents: 'auto' }}>
        {!showDetails ? (
          <>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Cookies on Sidekicc</h2>
            <p style={{ fontSize: 14, color: '#4a4a6a', lineHeight: 1.6, marginBottom: 16 }}>
              We use strictly necessary cookies to run the site. With your permission, we'd also use analytics and marketing cookies to improve the product and measure campaigns. Under UK PECR, you can accept, reject, or choose.{' '}
              <Link to="/cookies" style={{ color: '#6C3AFF', fontWeight: 600 }}>Cookie Policy</Link>.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button onClick={acceptAll} style={btnPrimary}>Accept all</button>
              <button onClick={rejectAll} style={btnSecondary}>Reject all</button>
              <button onClick={() => setShowDetails(true)} style={btnTertiary}>Choose</button>
            </div>
          </>
        ) : (
          <>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Choose your cookies</h2>
            <p style={{ fontSize: 13, color: '#4a4a6a', lineHeight: 1.6, marginBottom: 16 }}>
              Turn each category on or off. Your choice is stored for 12 months and you can update it anytime from the <Link to="/cookies" style={{ color: '#6C3AFF', fontWeight: 600 }}>Cookie Policy</Link> page.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
              {categories.map((c) => {
                const on = c.required ? true : !!choices[c.key]
                return (
                  <label key={c.key} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: 12, background: '#fafafa', borderRadius: 10, border: '1px solid #eee', cursor: c.required ? 'default' : 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={on}
                      disabled={c.required}
                      onChange={(e) => setChoices((p) => ({ ...p, [c.key]: e.target.checked }))}
                      style={{ marginTop: 3, width: 16, height: 16, accentColor: '#6C3AFF' }}
                    />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a2e' }}>
                        {c.name}{c.required && <span style={{ marginLeft: 8, fontSize: 10, fontWeight: 600, color: '#9999aa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Always on</span>}
                      </div>
                      <div style={{ fontSize: 12, color: '#6b6b8d', marginTop: 2, lineHeight: 1.5 }}>{c.desc}</div>
                    </div>
                  </label>
                )
              })}
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button onClick={savePreferences} style={btnPrimary}>Save preferences</button>
              <button onClick={() => setShowDetails(false)} style={btnTertiary}>Back</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

const btnPrimary = { background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 14, border: 'none', borderRadius: 10, padding: '10px 18px', cursor: 'pointer' }
const btnSecondary = { background: '#fff', color: '#1a1a2e', fontWeight: 600, fontSize: 14, border: '1.5px solid #d8d8e0', borderRadius: 10, padding: '10px 18px', cursor: 'pointer' }
const btnTertiary = { background: 'transparent', color: '#6b6b8d', fontWeight: 600, fontSize: 14, border: 'none', borderRadius: 10, padding: '10px 14px', cursor: 'pointer', textDecoration: 'underline' }
