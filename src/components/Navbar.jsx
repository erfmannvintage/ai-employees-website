import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Team' },
  { to: '/integrations', label: 'Integrations' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/help', label: 'Help' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl" style={{ borderBottom: '1px solid #eee' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>
        <div className="flex items-center justify-between" style={{ height: 72 }}>
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <div className="flex items-center justify-center rounded-xl text-white font-bold text-sm" style={{ width: 36, height: 36, background: '#6C3AFF' }}>S</div>
            <span className="font-bold text-lg" style={{ color: '#1a1a2e' }}>Sidekicc</span>
          </Link>

          <div className="hidden md:flex items-center" style={{ gap: 6 }}>
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="no-underline rounded-lg text-[14px] font-medium transition-colors" style={{ padding: '8px 12px', color: loc.pathname === l.to ? '#6C3AFF' : '#6b6b8d', whiteSpace: 'nowrap' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://app.sidekicc.com" target="_blank" rel="noopener noreferrer" className="no-underline text-[15px] font-medium px-4 py-2" style={{ color: '#6b6b8d' }}>Sign In</a>
            <a href="https://app.sidekicc.com" target="_blank" rel="noopener noreferrer" className="no-underline text-white text-sm font-semibold rounded-xl transition-all hover:-translate-y-0.5" style={{ background: '#6C3AFF', padding: '10px 24px', boxShadow: '0 4px 15px rgba(108,58,255,0.3)' }}>
              Get Started Free
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2" style={{ color: '#1a1a2e' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden" style={{ background: '#fff', borderTop: '1px solid #eee', padding: '16px 32px' }}>
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block no-underline py-3 text-[15px] font-medium" style={{ color: loc.pathname === l.to ? '#6C3AFF' : '#6b6b8d' }}>
              {l.label}
            </Link>
          ))}
          <a href="https://app.sidekicc.com" target="_blank" rel="noopener noreferrer" className="block no-underline text-center text-white text-sm font-semibold rounded-xl mt-3" style={{ background: '#6C3AFF', padding: '12px 24px' }}>
            Get Started Free
          </a>
        </div>
      )}
    </nav>
  )
}
