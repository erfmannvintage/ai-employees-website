import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/help', label: 'Help' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-neon border-2 border-ink rounded-lg flex items-center justify-center shadow-[2px_2px_0_var(--color-ink)] group-hover:shadow-[1px_1px_0_var(--color-ink)] group-hover:translate-x-[1px] group-hover:translate-y-[1px] transition-all">
              <span className="text-ink font-black text-xs">AI</span>
            </div>
            <span className="font-black text-lg text-ink">AI Employees</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${location.pathname === link.to ? 'text-ink bg-light' : 'text-ink-muted hover:text-ink hover:bg-light'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink-muted hover:text-ink">Sign In</a>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon text-sm px-5 py-2">Get Started</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 border-2 border-ink rounded-lg" aria-label="Menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t-2 border-ink bg-white px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className={`block px-3 py-2.5 text-sm font-semibold rounded-lg ${location.pathname === link.to ? 'text-ink bg-light' : 'text-ink-muted'}`}>{link.label}</Link>
          ))}
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="block mt-2 btn-neon w-full text-center text-sm py-2.5">Get Started</a>
        </div>
      )}
    </nav>
  )
}
