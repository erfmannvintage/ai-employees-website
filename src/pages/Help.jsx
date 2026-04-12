import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Getting Started',
    icon: '🚀',
    questions: [
      {
        q: 'How do I sign up?',
        a: 'Click "Start Free Trial" on any page. You\'ll create an account in under 30 seconds — no credit card required. After signup, complete your Business Profile and your AI team activates immediately.',
      },
      {
        q: 'What is a Business Profile?',
        a: 'Your Business Profile tells your AI employees about your business — your name, niche, audience, brand voice, products, and more. The more detail you provide, the smarter and more personalized your AI team becomes.',
      },
      {
        q: 'How long does setup take?',
        a: 'Under 60 seconds to get started. Sign up, fill in the basics of your Business Profile, and your 11 AI employees are ready to work. You can add more detail over time.',
      },
      {
        q: 'Do I need any technical skills?',
        a: 'Absolutely not. AI Employees is designed for business owners, not developers. Everything works through a simple chat interface — just tell your employees what you need.',
      },
    ],
  },
  {
    name: 'AI Employees',
    icon: '👥',
    questions: [
      {
        q: 'Who are the 11 AI employees?',
        a: 'Cecil (Executive Assistant), Flora (Social Media), Basil (Support), Hugh (Sales), Mabel (SEO Blog Writer), Rupert (Legal), Poppi (Marketing Strategy), Ava (Analytics), Raymond (Paid Ads), Bowie (Research), and Angela (CFO).',
      },
      {
        q: 'Can the employees work together?',
        a: 'Yes! Cross-team collaboration is a core feature. Flora checks content strategy with Poppi, Hugh validates deals with Rupert, Mabel coordinates SEO with Flora for social distribution. They automatically cross-review each other\'s work.',
      },
      {
        q: 'Do the employees learn about my specific business?',
        a: 'Absolutely. Through your Business Profile, Data Hub uploads, and Custom Skills, your AI employees build deep knowledge of your specific business, products, audience, and brand voice.',
      },
      {
        q: 'Can I choose which employees I want?',
        a: 'On Starter and Growth plans, you choose which employees to activate. Enterprise plan gives you all 11. You can change your selection at any time.',
      },
    ],
  },
  {
    name: 'Billing & Plans',
    icon: '💳',
    questions: [
      {
        q: 'How does the free trial work?',
        a: 'Your 14-day free trial gives you full access to your chosen plan. No credit card required. At the end of the trial, choose a plan to continue or your account pauses — no surprise charges.',
      },
      {
        q: 'Can I change plans?',
        a: 'Yes, upgrade or downgrade at any time. Changes take effect on your next billing cycle. If you upgrade, you get immediate access to the additional features.',
      },
      {
        q: 'Is there a refund policy?',
        a: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied within your first 30 days of a paid plan, contact us for a full refund. See our refund policy for details.',
      },
      {
        q: 'Do you offer annual billing?',
        a: 'Yes! Annual billing saves you 20% compared to monthly. Contact our sales team for enterprise custom pricing.',
      },
    ],
  },
  {
    name: 'Security & Privacy',
    icon: '🔒',
    questions: [
      {
        q: 'Is my data secure?',
        a: 'Yes. We use bank-grade encryption, row-level security (RLS) in our database, and GDPR-compliant data handling. Your data is isolated from other users at every layer.',
      },
      {
        q: 'Do you sell my data?',
        a: 'Never. Your data is yours. We don\'t sell, share, or monetize your business data in any way. See our privacy policy for full details.',
      },
      {
        q: 'Where is my data stored?',
        a: 'Your data is stored in secure, encrypted databases with automatic backups. We use enterprise-grade infrastructure with 99.9% uptime guarantees.',
      },
    ],
  },
  {
    name: 'Integrations',
    icon: '🔌',
    questions: [
      {
        q: 'What tools do you integrate with?',
        a: 'Gmail, Google Calendar, Google Analytics 4, Google Search Console, YouTube Analytics, MailerLite, Stripe, and more. We\'re constantly adding new integrations.',
      },
      {
        q: 'Do I need to set up API keys?',
        a: 'No. Most integrations are provided at the platform level — we handle the technical setup. For personal services like Gmail, you\'ll authenticate with OAuth (just click "Connect" and authorize).',
      },
      {
        q: 'Can I request new integrations?',
        a: 'Absolutely! Contact us with your integration requests. Enterprise plans include custom integrations built to your specifications.',
      },
    ],
  },
]

export default function Help() {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-paper-warm halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-ink mb-4">
            Help{' '}
            <span className="text-pop-pink">Centre</span>
          </h1>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            Everything you need to know about AI Employees. Can't find your answer?{' '}
            <Link to="/contact" className="text-pop-pink font-semibold hover:underline">Contact us</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="font-display font-black text-2xl text-ink">{cat.name}</h2>
                </div>

                <div className="space-y-3">
                  {cat.questions.map((faq, i) => {
                    const id = `${cat.name}-${i}`
                    const isOpen = openItem === id

                    return (
                      <div
                        key={id}
                        className="bg-white rounded-lg border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full flex items-center justify-between px-5 py-4 text-left"
                        >
                          <span className="font-bold text-ink pr-4">{faq.q}</span>
                          <svg
                            className={`w-5 h-5 text-ink-muted shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 border-t border-halftone pt-3">
                            <p className="text-sm text-ink-muted leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16 lg:py-20 bg-paper-cool">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl border-3 border-ink p-8 shadow-[6px_6px_0_var(--color-ink)]">
            <h2 className="font-display font-black text-2xl text-ink mb-3">
              Still Have Questions?
            </h2>
            <p className="text-ink-muted mb-6">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-pop-pink text-white font-bold rounded-lg border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] hover:shadow-[1px_1px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
