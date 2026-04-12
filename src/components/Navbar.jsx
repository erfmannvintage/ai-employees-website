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
    <nav className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-pop-pink rounded-lg border-2 border-ink flex items-center justify-center shadow-[3px_3px_0_var(--color-ink)] group-hover:shadow-[1px_1px_0_var(--color-ink)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
              <span className="text-white font-extrabold text-sm">AI</span>
            </div>
            <span className="font-display font-black text-xl text-ink">AI Employees</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  location.pathname === link.to
                    ? 'text-pop-pink'
                    : 'text-ink-light hover:text-ink hover:bg-paper-warm'
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
              className="text-sm font-semibold text-ink-light hover:text-ink transition-colors"
            >
              Sign In
            </a>
            <a
              href="https://artifactly-ai-employees.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-pop-pink text-white text-sm font-bold rounded-md border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] hover:shadow-[1px_1px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md border-2 border-ink"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-ink bg-paper">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 text-sm font-semibold rounded-md ${
                  location.pathname === link.to
                    ? 'text-pop-pink bg-pop-pink/5'
                    : 'text-ink-light hover:text-ink hover:bg-paper-warm'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-halftone space-y-2">
              <a
                href="https://artifactly-ai-employees.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-4 py-2.5 bg-pop-pink text-white text-sm font-bold rounded-md border-2 border-ink shadow-[3px_3px_0_var(--color-ink)]"
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
