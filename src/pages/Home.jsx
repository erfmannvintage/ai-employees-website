import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }
const heading = (size = 44) => ({ fontSize: size, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.12 })
const label = (color = '#6C3AFF') => ({ color, fontWeight: 600, fontSize: 14, marginBottom: 12 })
const body = { fontSize: 17, color: '#6b6b8d', lineHeight: 1.7 }
const sectionPad = { padding: '100px 0' }

function Hero() {
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ ...cx, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 100, padding: '8px 18px', marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, background: '#00CC66', borderRadius: '50%' }} /> 11 AI Employees — Ready to Work
            </div>
            <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', color: '#1a1a2e', marginBottom: 24 }}>
              Stop doing everything yourself.
              <br /><span style={{ color: '#6C3AFF' }}>Hire your AI team.</span>
            </h1>
            <p style={{ ...body, marginBottom: 16, maxWidth: 500 }}>
              You're the CEO, marketer, sales rep, support agent, content creator, bookkeeper, and legal reviewer — all at once. It's not sustainable.
            </p>
            <p style={{ ...body, marginBottom: 36, maxWidth: 500 }}>
              AI Employees gives you <strong style={{ color: '#1a1a2e' }}>11 specialized AI employees</strong> who handle marketing, sales, support, content, analytics, legal, advertising, research, and finance. They collaborate, cross-review each other's work, learn your business, and get smarter every day. From <strong style={{ color: '#1a1a2e' }}>$97/mo</strong>.
            </p>
            <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 36px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
                Get Started Free <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <Link to="/pricing" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 36px', textDecoration: 'none', color: '#1a1a2e', border: '2px solid #e0e0e0' }}>View Pricing</Link>
            </div>
            <div style={{ display: 'flex', gap: 24, fontSize: 13, color: '#9999aa' }}>
              {['No credit card', '14-day free trial', 'Cancel anytime'].map((t) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <svg width="16" height="16" fill="#00CC66" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 20, position: 'relative' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {employees.slice(0, 6).map((emp) => (
                  <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                    <div style={{ borderRadius: 16, overflow: 'hidden', border: '2px solid #fff', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                      <img src={emp.image} alt={emp.name} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, color: '#6b6b8d', marginTop: 6 }}>{emp.name}</p>
                  </Link>
                ))}
              </div>
              <div style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 16, boxShadow: '0 8px 30px rgba(0,0,0,0.1)', border: '1px solid #eee', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, background: '#00CC66', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>11</div>
                <div><div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>AI Employees</div><div style={{ fontSize: 11, color: '#9999aa' }}>Active & learning</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatYouGet() {
  const tools = [
    { title: 'Chat with Voice & Vibe Mode', desc: 'Talk to any employee via text or voice. Vibe Mode lets them work autonomously — just set a goal and let them run.' },
    { title: 'Business Profile (100+ Fields)', desc: 'Your name, niche, audience, competitors, brand voice, products, social accounts, and more. The more you fill in, the smarter every employee becomes.' },
    { title: 'Data Hub', desc: 'Upload your business knowledge — emails, sales calls, competitor docs, marketing materials. Employees reference this in every task.' },
    { title: 'Custom Skills', desc: 'Teach employees YOUR specific workflows. "When a lead comes in, do X then Y then Z." Stored permanently in their brain.' },
    { title: 'Content Calendar', desc: 'Visual calendar showing every piece of content across all platforms. Flora, Mabel, and Poppi coordinate here automatically.' },
    { title: 'Campaign Templates', desc: '6 pre-built campaign types: Waitlist, New Subscriber, Free Trial, Retention, Win-Back, and Custom. Poppi orchestrates and assigns tasks to the right employees.' },
    { title: 'Lead Discovery Engine', desc: 'Hugh finds leads from 7 free data sources across 33 industry mappings. OpenStreetMap, Google Places, social media, directories, and more.' },
    { title: 'Blog CMS', desc: 'Mabel writes, edits, and publishes SEO content directly. Hub-and-spoke architecture, keyword research, Search Console integration.' },
    { title: 'Daily Action Plans', desc: 'Every morning, your dashboard shows 4 numbered steps for you. Evening summary of what the team accomplished. Runs automatically.' },
    { title: 'Approval Queue', desc: 'Review and approve employee work before it goes live. Click to approve, edit, or reject. Nothing publishes without your say-so.' },
    { title: 'Command Centre', desc: 'Build custom automations: "When X happens, trigger Y." Connect employee workflows to external tools via webhooks (Zapier, Make, n8n).' },
    { title: 'Media Library', desc: 'Centralized image and video storage. AI-generated images from Gemini, uploaded assets, organized in categories. Employees access this in every task.' },
  ]

  return (
    <section style={{ background: '#fafafa', ...sectionPad }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <p style={label()}>What You Get</p>
          <h2 style={heading()}>Not a chatbot. An entire platform your AI team works inside.</h2>
          <p style={{ ...body, marginTop: 16 }}>Every employee has access to Chat, Tasks, Output Review, Schedule, Calendar, Work Log, Media Library, and their own Brain. Plus these shared tools:</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tools.map((t) => (
            <div key={t.title} style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #eee' }}>
              <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 16, marginBottom: 8 }}>{t.title}</h3>
              <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.65 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamShowcase() {
  return (
    <section style={{ background: '#fff', ...sectionPad }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <p style={label()}>Your AI Team</p>
          <h2 style={heading()}>11 employees. 9 business domains. 30+ certifications.</h2>
          <p style={{ ...body, marginTop: 16 }}>
            Cecil manages your inbox. Flora runs your socials. Hugh finds and closes leads. Mabel writes SEO content. Rupert reviews contracts. Poppi orchestrates strategy. Ava tracks analytics. Raymond manages ads. Bowie researches competitors. Angela handles your finances. Basil supports your customers. All day, every day.
          </p>
        </div>
        <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {employees.map((emp) => (
              <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} style={{ textDecoration: 'none', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                  <img src={emp.image} alt={emp.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15 }}>{emp.name}</h3>
                  <p style={{ color: '#6C3AFF', fontSize: 11, fontWeight: 600, marginTop: 2 }}>{emp.role}</p>
                  <p style={{ color: '#9999aa', fontSize: 13, marginTop: 8, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{emp.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CrossReview() {
  const pairs = [
    { from: 'Flora', to: 'Poppi + Mabel', why: 'Strategy alignment and SEO check before publishing social content' },
    { from: 'Hugh', to: 'Rupert + Poppi', why: 'Legal review of outreach and strategic positioning of sales materials' },
    { from: 'Mabel', to: 'Poppi + Flora', why: 'Strategy alignment on blog content, then Flora repurposes for social' },
    { from: 'Raymond', to: 'Ava + Rupert', why: 'Metrics validation on ad performance and ASA advertising compliance' },
    { from: 'Angela', to: 'Rupert + Ava', why: 'Legal compliance on financial reporting and data validation' },
    { from: 'Bowie', to: 'Poppi + Ava', why: 'Strategy application of research findings and data cross-referencing' },
  ]

  return (
    <section style={{ background: '#fafafa', ...sectionPad }}>
      <div style={cx}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={label()}>Cross-Team Collaboration</p>
            <h2 style={{ ...heading(40), marginBottom: 20 }}>Every task is reviewed by 1-3 peers before approval.</h2>
            <p style={{ ...body, marginBottom: 32 }}>
              Your employees don't work in silos. Before any work reaches your Approval Queue, it's cross-reviewed by colleagues with relevant expertise. Flora's social content gets strategy-checked by Poppi. Hugh's outreach gets legal-reviewed by Rupert. Mistakes are caught, quality stays high.
            </p>
            <p style={{ ...body }}>
              When a peer flags an issue, the correction is stored <strong style={{ color: '#1a1a2e' }}>permanently</strong> in the original employee's brain with the instruction "Do not repeat this issue." They literally learn from each other.
            </p>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {pairs.map((p) => (
                <div key={p.from} style={{ background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #eee' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontWeight: 700, color: '#6C3AFF', fontSize: 14 }}>{p.from}</span>
                    <span style={{ color: '#ccc', fontSize: 13 }}>→</span>
                    <span style={{ fontWeight: 600, color: '#1a1a2e', fontSize: 14 }}>{p.to}</span>
                  </div>
                  <p style={{ color: '#6b6b8d', fontSize: 13, lineHeight: 1.5 }}>{p.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LearningSystem() {
  return (
    <section style={{ background: '#fff', ...sectionPad }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <p style={label('#00CC66')}>Self-Learning System</p>
          <h2 style={heading()}>They get smarter every single day. Automatically.</h2>
          <p style={{ ...body, marginTop: 16 }}>Your employees don't just follow instructions — they have a 5-layer learning pipeline that runs continuously. The longer you use them, the better they understand your business.</p>
        </div>

        <div style={{ background: 'rgba(0,204,102,0.05)', borderRadius: 32, padding: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {[
              { n: '1', title: 'Learn from Every Task', desc: 'After completing work, the system extracts role-specific insights. Flora learns engagement rates. Angela learns tax deadlines. Hugh learns conversion patterns. Saved permanently.' },
              { n: '2', title: 'Learn from Peer Feedback', desc: 'Cross-review corrections are stored as permanent instructions: "Do not repeat this issue." The cross-review matrix covers all 11 employees.' },
              { n: '3', title: 'Weekly Auto-Research', desc: 'Bowie: competitive intel (Mon) + industry data (Wed). Angela: tax updates (Mon). Rupert: legal scan (Tue). Mabel: SEO algorithms (Mon). Ava: benchmarks (Tue). 6 research tasks/week.' },
              { n: '4', title: 'Weekly Knowledge Refresh', desc: 'Every 7 days, search-enabled employees re-research your business for NEW developments, competitor changes, and market shifts. Only genuinely new findings are saved.' },
              { n: '5', title: 'Monthly Self-Assessment', desc: 'Each employee checks if certifications are current, identifies 2-3 new skills to learn, assesses their weakest area, creates an improvement plan, and posts it to the team Boardroom.' },
            ].map((s) => (
              <div key={s.n} style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid rgba(0,204,102,0.15)' }}>
                <div style={{ width: 36, height: 36, background: '#00CC66', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 16 }}>{s.n}</div>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 17, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
            <div style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid rgba(0,204,102,0.15)' }}>
              <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 17, marginBottom: 12 }}>Proficiency Tracking</h3>
              <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.65, marginBottom: 12 }}>Every skill has a proficiency level that auto-upgrades:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['Foundational → Intermediate (20 insights)', 'Intermediate → Advanced (35 insights)', 'Advanced → Expert (50 insights)'].map((l) => (
                  <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 6, height: 6, background: '#00CC66', borderRadius: '50%' }} />
                    <span style={{ fontSize: 13, color: '#3d3d5c' }}>{l}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: '#6b6b8d', fontSize: 13, marginTop: 12, lineHeight: 1.5 }}>Freshness scores decay after 14 days without updates — forcing continuous learning. Overall readiness score (0-100) combines active certs + skill freshness + total insights.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContentChains() {
  const chains = [
    { from: 'Mabel writes a blog post', to: 'Flora automatically promotes it across social media' },
    { from: 'Flora creates a campaign', to: 'Hugh uses the creative in outreach sequences' },
    { from: 'Bowie publishes research', to: 'Poppi updates the marketing strategy' },
    { from: 'Hugh finds new leads', to: 'Cecil drafts personalized welcome emails' },
    { from: 'Ava reports analytics', to: 'Flora adjusts content strategy based on data' },
  ]

  return (
    <section style={{ background: 'rgba(255,51,102,0.04)', ...sectionPad }}>
      <div style={cx}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', border: '4px solid #fff' }}>
              <img src="/characters/flora.png" alt="Flora creating content" style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
          <div>
            <p style={label('#FF3366')}>Automated Content Chains</p>
            <h2 style={{ ...heading(40), marginBottom: 20 }}>5 workflows where one employee's output triggers another's task.</h2>
            <p style={{ ...body, marginBottom: 32 }}>
              These aren't manual handoffs. When an employee completes work, the system automatically fires the next step in the chain. It posts to the team Boardroom so everyone sees what happened.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {chains.map((c, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '16px 20px', border: '1px solid #eee' }}>
                  <div style={{ fontSize: 14, color: '#1a1a2e' }}>
                    <strong>{c.from}</strong>
                    <span style={{ color: '#FF3366', margin: '0 8px' }}>→</span>
                    {c.to}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Integrations() {
  const integrations = [
    { cat: 'Email & Calendar', items: ['Gmail', 'Google Calendar', 'MailerLite'], desc: 'Cecil manages your inbox and calendar. Sends emails, schedules meetings, runs newsletter campaigns.' },
    { cat: 'Analytics', items: ['GA4', 'YouTube Analytics', 'Search Console'], desc: 'Ava has live access to your Google Analytics, YouTube metrics, and Search Console data. Real-time, not reports.' },
    { cat: 'Social Media', items: ['TikTok', 'Instagram', 'Facebook', 'X', 'YouTube', 'LinkedIn'], desc: 'Flora posts platform-native content across all 6 channels with optimal timing and format specs for each.' },
    { cat: 'Finance', items: ['Stripe', 'QuickBooks', 'Xero', 'Sage'], desc: 'Angela connects to your accounting tools for real-time financial data. Corporation Tax, VAT, R&D credits, MTD compliance.' },
    { cat: 'Legal', items: ['gov.uk', 'ICO', 'legislation.gov.uk', 'ASA', 'Companies House'], desc: 'Rupert accesses 5 legal databases for up-to-date compliance, regulation, and case law intelligence.' },
    { cat: 'Automation', items: ['Webhooks', 'Zapier', 'Make', 'n8n'], desc: 'Connect to 5,000+ external tools via webhook endpoints. HMAC-SHA256 signed, auto-disable after failures.' },
  ]

  return (
    <section style={{ background: '#fafafa', ...sectionPad }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <p style={label('#0066FF')}>Integrations</p>
          <h2 style={heading()}>Connected to the tools you already use.</h2>
          <p style={{ ...body, marginTop: 16 }}>All integrations provided at platform level — you never touch an API key. For personal services like Gmail, just click "Connect" and authorize.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {integrations.map((i) => (
            <div key={i.cat} style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #eee' }}>
              <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 16, marginBottom: 8 }}>{i.cat}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                {i.items.map((item) => (
                  <span key={item} style={{ padding: '4px 10px', fontSize: 12, fontWeight: 600, color: '#6C3AFF', background: 'rgba(108,58,255,0.06)', borderRadius: 8 }}>{item}</span>
                ))}
              </div>
              <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.6 }}>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section style={{ background: '#1a1a2e', padding: '80px 0' }}>
      <div style={cx}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, textAlign: 'center' }}>
          {[
            { v: '11', l: 'AI Employees' }, { v: '30+', l: 'Certifications' }, { v: '80+', l: 'Frameworks' },
            { v: '6/wk', l: 'Auto-Research' }, { v: '5', l: 'Content Chains' }, { v: '33', l: 'Industry Maps' },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontSize: 40, fontWeight: 900, color: '#fff' }}>{s.v}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const t = [
    { q: "I replaced 3 freelancers with AI Employees. My marketing runs 24/7 and the quality is genuinely better. The cross-review system catches things I'd miss.", n: 'Sarah K.', r: 'E-commerce Founder' },
    { q: "Hugh closed more leads in his first week than my previous outreach tool did in a month. The 7-source lead discovery is insane — found prospects I didn't know existed.", n: 'Marcus T.', r: 'SaaS Founder' },
    { q: "Having Ava connected to our GA4 live and Angela managing QuickBooks means I actually understand my numbers. The daily action plans are a game-changer.", n: 'Priya R.', r: 'Agency Owner' },
  ]

  return (
    <section style={{ background: '#fff', ...sectionPad }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={label('#FF1493')}>Testimonials</p>
          <h2 style={heading()}>Loved by business owners</h2>
        </div>
        <div style={{ background: 'rgba(255,20,147,0.04)', borderRadius: 32, padding: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {t.map((x) => (
              <div key={x.n} style={{ background: '#fff', borderRadius: 20, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[...Array(5)].map((_, i) => <svg key={i} width="18" height="18" fill="#FFD700" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p style={{ color: '#3d3d5c', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>"{x.q}"</p>
                <div style={{ borderTop: '1px solid #eee', paddingTop: 16 }}>
                  <div style={{ fontWeight: 600, color: '#1a1a2e', fontSize: 14 }}>{x.n}</div>
                  <div style={{ fontSize: 12, color: '#9999aa' }}>{x.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  const plan = plans[1]
  return (
    <section style={{ background: '#fafafa', ...sectionPad }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <p style={label()}>Pricing</p>
          <h2 style={heading()}>11 AI employees for less than one hour of a freelancer.</h2>
        </div>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 28, padding: 40, border: '2px solid #6C3AFF', boxShadow: '0 8px 40px rgba(108,58,255,0.12)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#6C3AFF', color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 100, padding: '6px 20px' }}>{plan.badge}</div>
            <div style={{ textAlign: 'center', marginBottom: 28, marginTop: 8 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#1a1a2e' }}>{plan.name}</h3>
              <div style={{ margin: '12px 0' }}><span style={{ fontSize: 64, fontWeight: 900, color: '#1a1a2e' }}>${plan.price}</span><span style={{ fontSize: 18, color: '#9999aa' }}>/{plan.period}</span></div>
              <p style={{ color: '#6b6b8d', fontSize: 15 }}>{plan.description}</p>
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 28 }}>
              {plan.features.slice(0, 6).map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
                  <svg width="20" height="20" fill="#00CC66" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span style={{ color: '#3d3d5c', fontSize: 15 }}>{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 14, padding: '16px 0', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>Start Free Trial</a>
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}><Link to="/pricing" style={{ color: '#6C3AFF', fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>See all 3 plans →</Link></div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section style={{ background: '#6C3AFF', padding: '100px 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
          Stop wearing every hat.
          <br />Hire your AI workforce.
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto 40px' }}>
          77% of businesses say AI is transformational but only 5% use it. The gap isn't desire — it's complexity. We eliminated the complexity. Sign up, describe your business, done.
        </p>
        <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
          Get Started Free <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 20 }}>No credit card · 14-day trial · Cancel anytime</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhatYouGet />
      <TeamShowcase />
      <CrossReview />
      <LearningSystem />
      <ContentChains />
      <Integrations />
      <Stats />
      <Testimonials />
      <PricingPreview />
      <CTA />
    </>
  )
}
