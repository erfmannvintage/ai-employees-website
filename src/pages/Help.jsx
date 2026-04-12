import { useState } from 'react'
import { Link } from 'react-router-dom'

const cats = [
  { name: 'Getting Started', icon: '🚀', qs: [
    { q: 'How do I sign up?', a: 'Click "Start Free Trial". Account in 30 seconds — no credit card. Complete Business Profile, AI team activates.' },
    { q: 'What is a Business Profile?', a: 'Tells your AI employees about your business — name, niche, audience, brand voice. More detail = smarter team.' },
    { q: 'Technical skills needed?', a: 'None. Everything works through chat. Just tell your employees what you need.' },
  ]},
  { name: 'AI Employees', icon: '👥', qs: [
    { q: 'Who are the 11?', a: 'Cecil (EA), Flora (Social), Basil (Support), Hugh (Sales), Mabel (SEO), Rupert (Legal), Poppi (Marketing), Ava (Analytics), Raymond (Ads), Bowie (Research), Angela (CFO).' },
    { q: 'Can they work together?', a: 'Yes — cross-team collaboration is core. Flora checks with Poppi, Hugh validates with Rupert. Real teamwork.' },
    { q: 'Do they learn my business?', a: 'Through Business Profile, Data Hub, and Custom Skills, they build deep knowledge of YOUR business.' },
  ]},
  { name: 'Billing', icon: '💳', qs: [
    { q: 'Free trial?', a: '14-day full access, no credit card. Choose a plan after or account pauses. No surprise charges.' },
    { q: 'Refund policy?', a: '30-day money-back guarantee. Not satisfied? Full refund, no questions.' },
    { q: 'Annual billing?', a: 'Yes — save 20%.' },
  ]},
  { name: 'Security', icon: '🔒', qs: [
    { q: 'Is my data secure?', a: 'Bank-grade encryption, row-level security, GDPR compliant. Data isolated from other users.' },
    { q: 'Do you sell data?', a: 'Never. Your data is yours. We don\'t sell, share, or monetize it.' },
  ]},
]

export default function Help() {
  const [open, setOpen] = useState(null)
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neon font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Support</p>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white mb-4">Help <span className="text-neon text-glow">Centre</span></h1>
          <p className="text-gray-300 mt-4">Can't find your answer? <Link to="/contact" className="text-neon font-bold hover:underline">Contact us</Link>.</p>
        </div>
      </section>

      <section className="py-20 section-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cats.map((cat) => (
            <div key={cat.name}>
              <h2 className="font-black text-2xl text-white uppercase mb-5 flex items-center gap-3"><span className="text-2xl">{cat.icon}</span>{cat.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.qs.map((faq, i) => {
                  const id = `${cat.name}-${i}`
                  return (
                    <div key={id} onClick={() => setOpen(open === id ? null : id)} className={`cursor-pointer rounded-xl border-3 transition-all ${open === id ? 'border-neon bg-neon text-black' : 'border-dark-400 bg-dark-200 text-white hover:border-neon/30'}`}>
                      <div className="px-5 py-4">
                        <h3 className="font-bold text-sm">{faq.q}</h3>
                        {open === id && <p className={`text-xs mt-2 leading-relaxed ${open === id ? 'text-black/70' : ''}`}>{faq.a}</p>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 section-dark">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="comic-panel rounded-xl p-8 glow-neon">
            <h2 className="font-black text-2xl text-white uppercase mb-3">Still Have Questions?</h2>
            <Link to="/contact" className="btn-neon">Contact Support</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
