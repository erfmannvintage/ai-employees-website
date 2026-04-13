import { useState } from 'react'
import { Link } from 'react-router-dom'

const cats = [
  {
    name: 'Getting Started',
    qs: [
      { q: 'How do I sign up?', a: 'Click "Start Free Trial". Account in 30 seconds — no credit card. Complete Business Profile, AI team activates.' },
      { q: 'What is a Business Profile?', a: 'Tells your AI employees about your business — name, niche, audience, brand voice. More detail = smarter team.' },
      { q: 'Technical skills needed?', a: 'None. Everything works through chat. Just tell your employees what you need.' },
    ],
  },
  {
    name: 'AI Employees',
    qs: [
      { q: 'Who are the 11?', a: 'Cecil (EA), Flora (Social), Basil (Support), Hugh (Sales), Mabel (SEO), Rupert (Legal), Poppi (Marketing), Ava (Analytics), Raymond (Ads), Bowie (Research), Angela (CFO).' },
      { q: 'Can they work together?', a: 'Yes — cross-team collaboration is core. Flora checks with Poppi, Hugh validates with Rupert. Real teamwork.' },
      { q: 'Do they learn my business?', a: 'Through Business Profile, Data Hub, and Custom Skills, they build deep knowledge of YOUR business.' },
    ],
  },
  {
    name: 'Billing',
    qs: [
      { q: 'Free trial?', a: '14-day full access, no credit card. Choose a plan after or account pauses. No surprise charges.' },
      { q: 'Refund policy?', a: '30-day money-back guarantee. Not satisfied? Full refund, no questions.' },
      { q: 'Annual billing?', a: 'Yes — save 20%.' },
    ],
  },
  {
    name: 'Security',
    qs: [
      { q: 'Is my data secure?', a: 'Bank-grade encryption, row-level security, GDPR compliant. Data isolated from other users.' },
      { q: 'Do you sell data?', a: 'Never. Your data is yours. We don\'t sell, share, or monetize it.' },
    ],
  },
]

export default function Help() {
  const [open, setOpen] = useState(null)

  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-brand mb-4">Support</p>
          <h1 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight mb-4">
            Help <span className="text-brand">Centre</span>
          </h1>
          <p className="text-ink-muted text-lg">
            Can't find your answer?{' '}
            <Link to="/contact" className="text-brand font-semibold hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-8 space-y-16">
          {cats.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-2xl font-black text-ink tracking-tight mb-6">{cat.name}</h2>
              <div className="space-y-3">
                {cat.qs.map((faq, i) => {
                  const id = `${cat.name}-${i}`
                  const isOpen = open === id
                  return (
                    <div
                      key={id}
                      onClick={() => setOpen(isOpen ? null : id)}
                      className={`card cursor-pointer transition-all ${isOpen ? 'border-brand bg-brand/5' : ''}`}
                    >
                      <div className="px-6 py-5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-[15px] text-ink">{faq.q}</h3>
                          <svg
                            className={`w-5 h-5 text-ink-light shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {isOpen && (
                          <p className="text-sm text-ink-muted mt-3 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-brand">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="text-[36px] sm:text-[44px] font-black text-white tracking-tight mb-6">
            Still Have Questions?
          </h2>
          <Link to="/contact" className="btn-dark btn-primary-lg">Contact Support</Link>
        </div>
      </section>
    </div>
  )
}
