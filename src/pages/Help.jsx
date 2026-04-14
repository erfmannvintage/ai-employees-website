import { useState } from 'react'
import { Link } from 'react-router-dom'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const categories = [
  {
    name: 'Getting Started',
    icon: '🚀',
    qs: [
      { q: 'How do I sign up?', a: 'Click "Get Started Free" on any page. You\'ll create an account in under 30 seconds — no credit card required. After signup, you\'ll be guided through a 6-step onboarding wizard: your name, business niche, website, target audience, brand voice, and location. Once complete, all 11 AI employees activate instantly with your business context.' },
      { q: 'What is a Business Profile?', a: 'Your Business Profile is how your AI employees learn about YOUR business. It contains 100+ fields covering your business name, niche, audience, competitors, brand voice, products, social accounts, and integration credentials (Stripe, QuickBooks, etc.). The more detail you provide, the smarter every employee becomes. Think of it as AI training — no prompt engineering needed.' },
      { q: 'How long does setup take?', a: 'Under 60 seconds to get started. The onboarding wizard takes about 2 minutes. Your 11 AI employees activate immediately after with deep platform knowledge plus whatever business context you\'ve provided. You can then add more detail to your Business Profile, upload data to the Data Hub, and create Custom Skills over time — the team keeps getting smarter.' },
      { q: 'Do I need any technical skills?', a: 'Absolutely not. Everything works through a simple chat interface — just tell your employees what you need in plain English. You can also use Voice Mode to talk to them, or Vibe Mode to let them work autonomously. No coding, no prompt engineering, no technical setup. We handle all the infrastructure, API integrations, and AI models.' },
      { q: 'What happens after the onboarding wizard?', a: 'Your Dashboard shows 4 daily action steps: approve employee work, check Team Chat, review your plan, and check leads. You\'ll see "What Your Team Is Working On Today" showing every employee\'s current task. Each employee has their own workspace with Chat, Tasks, Output Review, Schedule, Calendar, Work Log, Media Library, and Brain.' },
    ],
  },
  {
    name: 'Your AI Employees',
    icon: '👥',
    qs: [
      { q: 'Who are the 11 AI employees?', a: 'Cecil (Executive Assistant — email, calendar, MailerLite), Flora (Social Media — 10+ posts/day across 6 platforms), Basil (Customer Support — 24/7, HEARD method), Hugh (Sales — multi-source lead discovery, any industry), Mabel (SEO Blog Writer — hub-and-spoke, AEO, GEO), Rupert (Legal — UK GDPR, contracts, compliance), Poppi (Marketing Strategy — AARRR funnels, team manager), Ava (Analytics — live GA4, attribution, predictive), Raymond (Paid Ads — all 9 Google certs, Meta), Bowie (Research — Oxford/Cambridge, PESTLE, Porter\'s), Angela (CFO — ACA, ACCA, CIMA, Stripe, QuickBooks).' },
      { q: 'Can they work together?', a: 'Yes — cross-team collaboration is a core feature. Every task is cross-reviewed by 1-3 peer employees before reaching your Approval Queue. Flora\'s content gets strategy-checked by Poppi. Hugh\'s outreach gets legal-reviewed by Rupert. Mabel\'s blog gets SEO-checked by Poppi then repurposed by Flora. When a peer flags an issue, the correction is stored permanently in the original employee\'s brain.' },
      { q: 'Do they learn my business?', a: 'Yes, through 3 channels: your Business Profile (100+ fields), Data Hub (upload emails, sales calls, competitor docs), and Custom Skills (teach them YOUR specific workflows). Plus the 5-layer learning pipeline: they learn from every task, peer feedback, weekly auto-research (6 tasks/week), weekly knowledge refresh, and monthly self-assessments. Proficiency auto-upgrades from Foundational to Expert.' },
      { q: 'Can I choose which employees I want?', a: 'On Starter (3 employees) and Growth (7 employees) plans, you choose which to activate. Enterprise gets all 11. You can change your selection at any time.' },
      { q: 'What tools does each employee have?', a: 'Every employee has: Chat (with Voice + Vibe Mode), Today\'s Tasks, Output & Review, Images (AI generation), Schedule (week grid + deadlines), Calendar (Google Calendar), Work Log, Media Library (centralized images/video), and Brain (knowledge base editor). Some have exclusive tools: Cecil has Email/Compose/MailerLite/Automations, Flora has Content Calendar, Hugh has Customer Pipeline, Mabel has Blog CMS, Ava has Analytics, Angela has Finance Dashboard/Expenses.' },
      { q: 'What are the content chains?', a: '5 automated workflows where one employee\'s completed work triggers another\'s task: Mabel blogs → Flora promotes on social. Flora creates campaign → Hugh uses in outreach. Bowie publishes research → Poppi updates strategy. Hugh finds leads → Cecil drafts welcome emails. Ava reports analytics → Flora adjusts content. These fire automatically and post to Team Chat.' },
    ],
  },
  {
    name: 'Features & Integrations',
    icon: '🔌',
    qs: [
      { q: 'What email providers are supported?', a: 'Unlimited email accounts from any provider: Gmail, Outlook, Yahoo, Zoho, iCloud, or any custom SMTP server. Cecil manages all inboxes from one place — send, receive, triage, draft replies, and run MailerLite campaigns (newsletters, sequences, automations). Google Calendar integration for scheduling and focus time.' },
      { q: 'What analytics integrations are there?', a: 'Ava has live Marketer-level access to Google Analytics 4 — real-time data, not just reports. Plus YouTube Analytics for video performance and Google Search Console for rankings, indexing, and CTR. She does attribution modelling, cohort analysis, predictive audiences, anomaly detection, and builds executive dashboards.' },
      { q: 'What social media platforms are supported?', a: 'Flora posts across TikTok, Instagram, Facebook, X (Twitter), YouTube, and LinkedIn with platform-optimized scheduling. She has mandatory format specs for each platform (dimensions, character limits, hashtag rules). 10+ posts/day with optimal timing. AI-generated branded images for every post. Video production pipeline for TikTok-native explainers and slideshow videos.' },
      { q: 'What accounting tools integrate?', a: 'Angela connects to Stripe, QuickBooks, Xero, and Sage 50 for real-time financial data. Auto-connect on save from your Business Profile. She handles UK Corporation Tax, VAT returns, R&D tax credit claims, and Making Tax Digital (MTD) compliance. Cash flow projections, runway alerts, P&L reports.' },
      { q: 'Can I connect external tools?', a: 'Yes — the Command Centre lets you build custom automations and create webhook endpoints for Zapier, Make, n8n, and any other tool. Secure signed payloads with automatic failure handling. Plus Google Workspace APIs (Sheets, Drive, Docs) for document creation and data export.' },
      { q: 'How does lead discovery work?', a: 'Hugh finds leads from multiple data sources: business directories, mapping services, social media, trade associations, and website enrichment (emails, phones, social links). Works across any industry — from restaurants to real estate to yoga studios. Built-in deduplication prevents duplicates.' },
    ],
  },
  {
    name: 'Billing & Plans',
    icon: '💳',
    qs: [
      { q: 'How does the free trial work?', a: '7-day full access to your chosen plan. No credit card required. At the end of the trial, choose a plan to continue or your account pauses — no surprise charges, no data loss. Your data is retained for 30 days in case you resubscribe.' },
      { q: 'Can I change plans?', a: 'Upgrade or downgrade at any time. Changes take effect on your next billing cycle. If you upgrade, you get immediate access to additional employees and features.' },
      { q: 'Is there annual billing?', a: 'Yes — save 20% with annual billing compared to monthly. Contact us for enterprise custom pricing.' },
      { q: 'What\'s the refund policy?', a: '30-day money-back guarantee on all paid plans. Not satisfied within 30 days of your first payment? Contact billing@aiemployees.com for a full refund. No questions asked, no hoops to jump through.' },
    ],
  },
  {
    name: 'Security & Privacy',
    icon: '🔒',
    qs: [
      { q: 'Is my data secure?', a: 'Yes. Bank-grade encryption in transit (TLS 1.3) and at rest (AES-256). Database-level security means your data is completely isolated from other users. Access is strictly controlled and audited. GDPR compliant.' },
      { q: 'Do you sell my data?', a: 'Never. Your data is yours. We don\'t sell, rent, trade, share, or monetize your business data in any way. See our Privacy Policy for full details.' },
      { q: 'Where is my data stored?', a: 'Secure, encrypted databases with automatic backups. Enterprise-grade infrastructure with complete data isolation between subscribers.' },
      { q: 'What about AI model privacy?', a: 'Your business data is used only to power YOUR employees. Your data is not used to train AI models. Conversations and business knowledge stay within your account.' },
    ],
  },
]

export default function Help() {
  const [openId, setOpenId] = useState(null)

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Support</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Help Centre
          </h1>
          <p style={{ fontSize: 17, color: '#6b6b8d', maxWidth: 500, margin: '0 auto' }}>
            Everything you need to know about AI Employees.
            Can't find your answer? <Link to="/contact" style={{ color: '#6C3AFF', fontWeight: 600, textDecoration: 'none' }}>Contact us</Link>.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          {categories.map((cat) => (
            <div key={cat.name} style={{ marginBottom: 56 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <span style={{ fontSize: 28 }}>{cat.icon}</span>
                <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e' }}>{cat.name}</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {cat.qs.map((faq, i) => {
                  const id = `${cat.name}-${i}`
                  const isOpen = openId === id

                  return (
                    <div
                      key={id}
                      onClick={() => setOpenId(isOpen ? null : id)}
                      style={{
                        background: isOpen ? 'rgba(108,58,255,0.04)' : '#fff',
                        borderRadius: 16,
                        border: isOpen ? '2px solid #6C3AFF' : '1px solid #eee',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ padding: '20px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <h3 style={{ fontWeight: 600, fontSize: 16, color: '#1a1a2e' }}>{faq.q}</h3>
                          <svg
                            width="20" height="20" fill="none" stroke={isOpen ? '#6C3AFF' : '#9999aa'} strokeWidth={2} viewBox="0 0 24 24"
                            style={{ flexShrink: 0, marginLeft: 16, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {isOpen && (
                          <p style={{ fontSize: 15, color: '#6b6b8d', lineHeight: 1.7, marginTop: 12 }}>
                            {faq.a}
                          </p>
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
      <section style={{ background: '#6C3AFF', padding: '80px 0' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', marginBottom: 16 }}>Still Have Questions?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 32 }}>Our team responds within 24 hours.</p>
          <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
            Contact Support
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
