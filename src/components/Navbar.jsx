import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/compare', label: 'Compare' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/help', label: 'Help' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-[var(--color-dark-900)]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF3366] to-[#6C3AFF] flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-extrabold text-xs">AI</span>
            </div>
            <span className="font-display font-black text-lg text-white">AI Employees</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                  location.pathname === link.to
                    ? 'text-white bg-white/[0.08]'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://artifactly-ai-employees.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              Sign In
            </a>
            <a
              href="https://artifactly-ai-employees.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-[#FF3366] to-[#FF5C8A] text-white text-sm font-semibold rounded-lg shadow-[0_4px_15px_rgba(255,51,102,0.3)] hover:shadow-[0_6px_25px_rgba(255,51,102,0.45)] hover:-translate-y-0.5 transition-all"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[var(--color-dark-900)]/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${
                  location.pathname === link.to
                    ? 'text-white bg-white/[0.08]'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/[0.06]">
              <a
                href="https://artifactly-ai-employees.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2.5 bg-gradient-to-r from-[#FF3366] to-[#FF5C8A] text-white text-sm font-semibold rounded-lg"
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
