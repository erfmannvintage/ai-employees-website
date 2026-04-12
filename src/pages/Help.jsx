import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Getting Started', icon: '🚀',
    questions: [
      { q: 'How do I sign up?', a: 'Click "Start Free Trial" on any page. You\'ll create an account in under 30 seconds — no credit card required. Complete your Business Profile and your AI team activates immediately.' },
      { q: 'What is a Business Profile?', a: 'Your Business Profile tells your AI employees about your business — name, niche, audience, brand voice, products. The more detail, the smarter your team.' },
      { q: 'How long does setup take?', a: 'Under 60 seconds. Sign up, fill in the basics, and your 11 AI employees are ready. Add more detail over time.' },
      { q: 'Do I need technical skills?', a: 'Absolutely not. Everything works through a simple chat interface — just tell your employees what you need.' },
    ],
  },
  {
    name: 'AI Employees', icon: '👥',
    questions: [
      { q: 'Who are the 11 AI employees?', a: 'Cecil (EA), Flora (Social Media), Basil (Support), Hugh (Sales), Mabel (SEO Writer), Rupert (Legal), Poppi (Marketing), Ava (Analytics), Raymond (Paid Ads), Bowie (Research), Angela (CFO).' },
      { q: 'Can they work together?', a: 'Yes! Cross-team collaboration is core. Flora checks strategy with Poppi, Hugh validates deals with Rupert, Mabel coordinates SEO with Flora.' },
      { q: 'Do they learn my business?', a: 'Through your Business Profile, Data Hub uploads, and Custom Skills, your AI employees build deep knowledge of your specific business.' },
      { q: 'Can I choose which ones I want?', a: 'On Starter and Growth plans, you choose which to activate. Enterprise gets all 11.' },
    ],
  },
  {
    name: 'Billing & Plans', icon: '💳',
    questions: [
      { q: 'How does the free trial work?', a: '14-day full access. No credit card. At trial end, choose a plan or your account pauses — no surprise charges.' },
      { q: 'Can I change plans?', a: 'Upgrade or downgrade anytime. Changes take effect on your next billing cycle.' },
      { q: 'Is there a refund policy?', a: '30-day money-back guarantee. Not satisfied? Contact us for a full refund.' },
      { q: 'Annual billing?', a: 'Yes — save 20%. Contact sales for enterprise pricing.' },
    ],
  },
  {
    name: 'Security & Privacy', icon: '🔒',
    questions: [
      { q: 'Is my data secure?', a: 'Bank-grade encryption, row-level security (RLS), GDPR-compliant. Your data is isolated from other users at every layer.' },
      { q: 'Do you sell my data?', a: 'Never. Your data is yours. We don\'t sell, share, or monetize your business data.' },
      { q: 'Where is data stored?', a: 'Secure, encrypted databases with automatic backups. Enterprise-grade infrastructure with 99.9% uptime.' },
    ],
  },
  {
    name: 'Integrations', icon: '🔌',
    questions: [
      { q: 'What tools integrate?', a: 'Gmail, Google Calendar, GA4, Search Console, YouTube Analytics, MailerLite, Stripe, and more. Constantly adding new ones.' },
      { q: 'Do I need API keys?', a: 'No. Most integrations are platform-level. For personal services like Gmail, just click "Connect" and authorize.' },
      { q: 'Can I request integrations?', a: 'Absolutely! Enterprise plans include custom integrations built to your specs.' },
    ],
  },
]

export default function Help() {
  const [openItem, setOpenItem] = useState(null)

  return (
    <div>
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[#FFBE0B] -top-40 -left-40 opacity-20" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00CC88] mb-4">Support</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            Help <span className="gradient-text-blue">Centre</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Everything you need to know. Can't find your answer?{' '}
            <Link to="/contact" className="text-[#FF3366] font-semibold hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 section-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="font-display font-black text-2xl text-white">{cat.name}</h2>
              </div>
              <div className="space-y-2">
                {cat.questions.map((faq, i) => {
                  const id = `${cat.name}-${i}`
                  const isOpen = openItem === id
                  return (
                    <div key={id} className="glass-card overflow-hidden">
                      <button onClick={() => setOpenItem(isOpen ? null : id)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                        <span className="font-semibold text-white pr-4 text-sm">{faq.q}</span>
                        <svg className={`w-4 h-4 text-white/30 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4 border-t border-white/[0.04] pt-3">
                          <p className="text-sm text-white/40 leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 section-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card-strong p-8 glow-purple">
            <h2 className="font-display font-black text-2xl text-white mb-3">Still Have Questions?</h2>
            <p className="text-white/40 mb-6">We'll get back to you within 24 hours.</p>
            <Link to="/contact" className="btn-primary">Contact Support</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
