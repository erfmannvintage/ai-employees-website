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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-brand rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xs">AI</span>
            </div>
            <span className="font-bold text-lg text-ink">AI Employees</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={`px-4 py-2 text-[15px] font-medium rounded-lg transition-all ${location.pathname === link.to ? 'text-brand' : 'text-ink-muted hover:text-ink'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-ink-muted hover:text-ink px-4 py-2">Sign In</a>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-2.5">Get Started Free</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-ink" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {isOpen ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setIsOpen(false)} className={`block px-3 py-3 text-[15px] font-medium rounded-lg ${location.pathname === link.to ? 'text-brand bg-gray-50' : 'text-ink-muted'}`}>{link.label}</Link>
          ))}
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="block mt-2 btn-primary w-full text-center text-sm py-3">Get Started Free</a>
        </div>
      )}
    </nav>
  )
}
