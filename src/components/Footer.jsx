import { Link } from 'react-router-dom'
import { employees } from '../data/employees'

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/artifactly.studio/', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /> },
  { name: 'Youtube', href: 'https://www.youtube.com/channel/UCWZ2nM7t_q55wLtqew0W7CQ', icon: <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /> },
  { name: 'TikTok', href: 'https://www.tiktok.com/@artifactlystudio', icon: <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.01-.3z" /> },
  { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588522569735', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
  { name: 'X / Twitter', href: 'https://x.com/Artifactly_', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t-3 border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-ink text-sm mb-5">Follow us</h4>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-ink-muted hover:text-ink transition-colors group">
                    <span className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center text-white group-hover:bg-neon group-hover:text-black transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                    </span>
                    <span className="text-sm font-medium">{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Employees */}
          <div>
            <h4 className="font-bold text-ink text-sm mb-5">AI Employees</h4>
            <ul className="space-y-2">
              {employees.slice(0, 6).map((e) => (
                <li key={e.name}><Link to={`/employee/${e.name.toLowerCase()}`} className="text-sm text-ink-muted hover:text-ink transition-colors">AI {e.role}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-ink text-sm mb-5">&nbsp;</h4>
            <ul className="space-y-2">
              {employees.slice(6).map((e) => (
                <li key={e.name}><Link to={`/employee/${e.name.toLowerCase()}`} className="text-sm text-ink-muted hover:text-ink transition-colors">AI {e.role}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-ink text-sm mb-5">Company</h4>
            <ul className="space-y-2">
              {[{ to: '/pricing', l: 'Pricing' }, { to: '/about', l: 'About' }, { to: '/blog', l: 'Blog' }, { to: '/help', l: 'Help Centre' }, { to: '/contact', l: 'Contact' }].map((x) => (
                <li key={x.to}><Link to={x.to} className="text-sm text-ink-muted hover:text-ink transition-colors">{x.l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-ink text-sm mb-5">Legal</h4>
            <ul className="space-y-2">
              {[{ to: '/terms', l: 'Terms of Service' }, { to: '/privacy', l: 'Privacy Policy' }, { to: '/refund', l: 'Refund Policy' }].map((x) => (
                <li key={x.to}><Link to={x.to} className="text-sm text-ink-muted hover:text-ink transition-colors">{x.l}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-2 border-light-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-neon border-2 border-ink rounded-md flex items-center justify-center">
              <span className="text-ink font-black text-[9px]">AI</span>
            </div>
            <span className="font-black text-sm text-ink">AI Employees</span>
          </div>
          <p className="text-xs text-ink-ghost">&copy; {new Date().getFullYear()} AI Employees. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
