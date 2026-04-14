import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

/* ============================================
   SECTION 1: HERO — White bg, side-by-side
   ============================================ */
function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '85vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Full-width pop-art background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src="/hero-office.png" alt="AI Employees pop-art office" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        {/* Gradient overlay — dark left for text readability, fades right to show image */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0.6) 60%, rgba(255,255,255,0.1) 100%)' }} />
      </div>

      <div style={{ ...cx, position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ maxWidth: 600 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 100, padding: '8px 18px', marginBottom: 32 }}>
            <span style={{ width: 8, height: 8, background: '#00CC66', borderRadius: '50%' }} /> 11 AI Employees — Ready to Work
          </div>
          <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', color: '#1a1a2e', marginBottom: 24 }}>
            Stop doing everything yourself.
            <br /><span style={{ color: '#6C3AFF' }}>Hire your AI team.</span>
          </h1>
          <p style={{ fontSize: 17, color: '#4a4a6a', lineHeight: 1.7, marginBottom: 16, maxWidth: 520 }}>
            You're the CEO, marketer, sales rep, support agent, content creator, bookkeeper, and legal reviewer — all at once. <strong style={{ color: '#1a1a2e' }}>Your competitors aren't doing this anymore.</strong> They've automated.
          </p>
          <p style={{ fontSize: 17, color: '#4a4a6a', lineHeight: 1.7, marginBottom: 36, maxWidth: 520 }}>
            AI Employees gives you <strong style={{ color: '#1a1a2e' }}>11 specialized AI employees</strong> — 30+ certifications, 80+ frameworks — handling marketing, sales, support, content, analytics, legal, ads, research, and finance. While you sleep. From <strong style={{ color: '#1a1a2e' }}>£49/mo</strong> — less than one hour of a freelancer.
          </p>
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 36px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
              Get Started Free <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <Link to="/pricing" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 36px', textDecoration: 'none', color: '#1a1a2e', border: '2px solid rgba(0,0,0,0.15)', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(4px)' }}>View Pricing</Link>
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 13, color: '#6b6b8d' }}>
            {['No credit card', '7-day free trial', 'Cancel anytime'].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="16" height="16" fill="#00CC66" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>{t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating badge bottom right */}
      <div style={{ position: 'absolute', bottom: 32, right: 48, background: 'rgba(255,255,255,0.95)', borderRadius: 16, boxShadow: '0 8px 30px rgba(0,0,0,0.15)', border: '3px solid #1a1a2e', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 12, zIndex: 10 }}>
        <div style={{ width: 44, height: 44, background: '#00CC66', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16 }}>11</div>
        <div><div style={{ fontWeight: 700, fontSize: 15, color: '#1a1a2e' }}>AI Employees</div><div style={{ fontSize: 12, color: '#6b6b8d' }}>Active & learning</div></div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 2: PAIN POINTS — Bold coral/red bg with halftone dots
   ============================================ */
function PainPoints() {
  const pains = [
    { problem: 'Your inbox has 100+ unread emails', solution: 'Cecil triages every email, drafts replies, achieves Inbox Zero daily, runs MailerLite campaigns across Gmail, Outlook, Yahoo, Zoho, iCloud, or any SMTP server.', image: '/characters/cecil.png', employee: 'Cecil' },
    { problem: 'Social media hasn\'t been updated in weeks', solution: 'Flora creates 10+ posts/day across 6 platforms with AI-generated images, TikTok-native video, and trend-aligned scheduling with platform-optimized scheduling.', image: '/characters/flora.png', employee: 'Flora' },
    { problem: 'Leads are falling through the cracks', solution: 'Hugh discovers leads from multiple data sources across any industry — directories, maps, social media, business databases — then runs SPIN/Challenger/MEDDIC outreach.', image: '/characters/hugh.png', employee: 'Hugh' },
    { problem: 'You\'re guessing at your numbers', solution: 'Ava has live Marketer-level GA4 access, YouTube Analytics, Search Console. Attribution modelling, cohort analysis, predictive audiences — not just dashboards.', image: '/characters/ava.png', employee: 'Ava' },
    { problem: 'Blog hasn\'t been touched in months', solution: 'Mabel writes hub-and-spoke SEO content, implements AEO for snippets and GEO for AI search. 15+ Semrush certs, Ahrefs Academy, Google SEO certified.', image: '/characters/mabel.png', employee: 'Mabel' },
    { problem: 'Finances live in a spreadsheet you never open', solution: 'Angela handles Corporation Tax, VAT, R&D credits, MTD compliance via Stripe, QuickBooks, Xero, Sage. ACA, ACCA, CIMA Strategic qualified.', image: '/characters/angela.png', employee: 'Angela' },
    { problem: 'Signed contracts without reading them', solution: 'Rupert reviews every clause, drafts terms/privacy/refund policies, monitors UK GDPR, Consumer Rights Act, EU AI Act, PECR via 5 legal databases.', image: '/characters/rupert.png', employee: 'Rupert' },
    { problem: 'Ad spend is a black hole', solution: 'Raymond holds all 9 Google Ads certs + Meta Ads. Manages Search, Display, Shopping, PMax campaigns with his 5-pillar architecture for maximum ROAS.', image: '/characters/raymond.png', employee: 'Raymond' },
    { problem: 'Customer support is slow or nonexistent', solution: 'Basil responds in under 2 minutes, 24/7. Uses the HEARD method, detects churn signals early, books demos, builds your knowledge base. HubSpot Service Hub + CCXP certified.', image: '/characters/basil.png', employee: 'Basil' },
    { problem: 'Marketing has no strategy behind it', solution: 'Poppi builds AARRR funnels, creates Ideal Customer Profiles, orchestrates multi-channel campaigns, and manages Flora, Mabel, Raymond, and Hugh as a team.', image: '/characters/poppi.png', employee: 'Poppi' },
    { problem: 'You don\'t know what competitors are doing', solution: 'Bowie runs Porter\'s Five Forces analysis, calculates TAM/SAM/SOM, does PESTLE mapping, and scans your competitive landscape automatically every Monday and Wednesday.', image: '/characters/bowie.png', employee: 'Bowie' },
  ]

  return (
    <section style={{ background: '#FF3366', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      {/* Halftone dot overlay — Lichtenstein style */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1.5px, transparent 1.5px)', backgroundSize: '12px 12px', pointerEvents: 'none' }} />

      <div style={{ ...cx, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600, fontSize: 14, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sound Familiar?</p>
          <h2 style={{ fontSize: 48, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.12 }}>You want to scale your business, but...</h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginTop: 16 }}>You're wearing too many hats. Here's what changes when you hire your AI team:</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {pains.map((p) => (
            <div key={p.problem} style={{ background: 'rgba(255,255,255,0.95)', borderRadius: 24, overflow: 'hidden', border: '3px solid #1a1a2e', boxShadow: '5px 5px 0 rgba(0,0,0,0.15)', display: 'flex' }}>
              {/* Employee image */}
              <div style={{ width: 140, flexShrink: 0, overflow: 'hidden' }}>
                <img src={p.image} alt={p.employee} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              {/* Content */}
              <div style={{ padding: 20, flex: 1 }}>
                <h3 style={{ fontWeight: 800, color: '#FF3366', fontSize: 15, marginBottom: 8 }}>
                  {p.problem}
                </h3>
                <p style={{ color: '#3d3d5c', fontSize: 13, lineHeight: 1.6 }}>
                  <span style={{ color: '#00CC66', fontWeight: 700 }}>→</span> {p.solution}
                </p>
                <p style={{ fontSize: 11, color: '#6C3AFF', fontWeight: 700, marginTop: 8 }}>Solved by {p.employee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 3: WHAT YOU GET — White bg, 3-col grid
   ============================================ */
function WhatYouGet() {
  const tools = [
    { title: 'Chat with Voice & Vibe Mode', desc: 'Talk to any employee via text or voice. Attach any file — documents, PDFs, spreadsheets (.xlsx), presentations (.pptx), images, audio recordings, and video. Vibe Mode lets them work autonomously — set a goal and they plan, execute, and deliver. Every employee has it.' },
    { title: 'Business Profile (100+ Fields)', desc: 'Name, niche, audience, competitors, brand voice, products, social accounts, integration credentials (Stripe, QuickBooks, etc.). This IS the AI training — no prompt engineering needed.' },
    { title: 'Data Hub, Custom Skills & Brain Import', desc: 'Upload any file type — documents, PDFs, spreadsheets, presentations, images, voice notes, sales call recordings, competitor research, marketing materials. Import files directly into any employee\'s Brain — text is extracted automatically from Word docs, Excel, PowerPoint, and PDFs. Teach them YOUR workflows with Custom Skills. Everything stored permanently.' },
    { title: 'Content Calendar & Blog CMS', desc: 'Visual calendar across all platforms. Flora, Mabel, Poppi coordinate here. Built-in Blog CMS with hub-and-spoke architecture, keyword research, Search Console integration.' },
    { title: 'Campaign Templates & Orchestration', desc: '6 pre-built campaigns: Waitlist, Subscriber, Trial, Retention, Win-Back, Custom. Poppi breaks each into employee tasks with plain English explanations — executes across the team automatically.' },
    { title: 'Lead Discovery Engine', desc: 'Hugh finds leads from multiple data sources — business directories, mapping services, social media, trade associations, and website enrichment. Works across any industry. Built-in deduplication and contact extraction.' },
    { title: 'Multi-Account Email Manager', desc: 'Unlimited accounts — Gmail, Outlook, Yahoo, Zoho, iCloud, or any SMTP server. Cecil manages all inboxes from one place. Send, receive, triage, draft, run MailerLite campaigns.' },
    { title: 'AI Image, Video & Audio', desc: 'AI-powered branded images for social posts, blog graphics, marketing. Video production pipeline for TikTok-native explainers and slideshows. Media Library stores images, video, and audio files with playback preview. Flora auto-generates visuals for every post.' },
    { title: 'Daily Action Plans & Team Overview', desc: 'Morning: 4 numbered steps (approve work, check Team Chat, review plan, check leads). Evening: team accomplishment summary. Dashboard shows every employee\'s current task.' },
    { title: 'Approval Queue', desc: 'Nothing publishes without your say-so. Review every piece of work. Approve, edit, or reject. Filter by Pending/Flagged/Passed. Delete anything. Full control.' },
    { title: 'Command Centre & Webhooks', desc: 'Custom automations: "When X happens, trigger Y." Webhook endpoints for Zapier, Make, n8n — Secure signed payloads with automatic failure handling.' },
    { title: 'Proactive Monitoring', desc: 'Angela monitors cash flow weekly. Ava detects traffic anomalies daily. Basil watches churn signals. Rupert tracks compliance deadlines. Bowie scans competitors. Hugh checks pipeline. All automatic.' },
  ]

  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>What You Get</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.12 }}>Not a chatbot. An entire platform your AI team works inside.</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d', lineHeight: 1.7, marginTop: 16 }}>Every employee has Chat, Tasks, Output Review, Schedule, Calendar, Work Log, Media Library, and their own Brain. Plus these shared tools:</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tools.map((t) => (
            <div key={t.title} style={{ background: '#fafafa', borderRadius: 20, padding: 28, border: '1px solid #eee', transition: 'all 0.3s' }}>
              <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 16, marginBottom: 8 }}>{t.title}</h3>
              <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.65 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 4: TEAM SHOWCASE — Purple bg with halftone + character cards
   ============================================ */
function TeamShowcase() {
  return (
    <section style={{ background: '#6C3AFF', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      {/* Halftone overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '10px 10px', pointerEvents: 'none' }} />

      <div style={{ ...cx, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: 14, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your AI Team</p>
          <h2 style={{ fontSize: 48, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.12 }}>11 employees. 9 domains. 30+ certifications.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginTop: 16 }}>
            Cecil manages your inbox. Flora runs socials. Hugh closes deals. Mabel writes SEO content. Rupert reviews contracts. Poppi orchestrates strategy. Ava tracks analytics. Raymond manages ads. Bowie researches competitors. Angela handles finances. Basil supports customers.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {employees.map((emp) => (
            <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} style={{ textDecoration: 'none', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', border: '3px solid #fff', transition: 'transform 0.3s, box-shadow 0.3s' }}>
              <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                <img src={emp.image} alt={emp.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div style={{ padding: 16, background: '#fff' }}>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15 }}>{emp.name}</h3>
                <p style={{ color: '#6C3AFF', fontSize: 11, fontWeight: 600, marginTop: 2 }}>{emp.role}</p>
                <p style={{ color: '#6b6b8d', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>{emp.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 5: CROSS-REVIEW — White bg, side-by-side, character image
   ============================================ */
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
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div style={cx}>
        {/* Top: image + text side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 48 }}>
          <div>
            <div style={{ borderRadius: 24, overflow: 'hidden', border: '4px solid #1a1a2e', boxShadow: '6px 6px 0 #6C3AFF' }}>
              <img src="/hero-collab.png" alt="AI employees collaborating" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
          <div>
            <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Cross-Team Collaboration</p>
            <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 20 }}>Every task is reviewed by 1-3 peers before approval.</h2>
            <p style={{ fontSize: 17, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 24 }}>
              Before any work reaches your Approval Queue, it's cross-reviewed by colleagues with relevant expertise. Flora's social content gets strategy-checked by Poppi. Hugh's outreach gets legal-reviewed by Rupert.
            </p>
            <p style={{ fontSize: 17, color: '#6b6b8d', lineHeight: 1.7 }}>
              When a peer flags an issue, the correction is stored <strong style={{ color: '#1a1a2e' }}>permanently</strong> in the original employee's brain with "Do not repeat this issue." They literally learn from each other.
            </p>
          </div>
        </div>
        {/* Bottom: review pairs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {pairs.map((p) => (
              <div key={p.from} style={{ background: '#fafafa', borderRadius: 16, padding: 20, border: '1px solid #eee', borderLeft: '4px solid #6C3AFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, color: '#6C3AFF', fontSize: 14 }}>{p.from}</span>
                  <span style={{ color: '#ccc' }}>→</span>
                  <span style={{ fontWeight: 600, color: '#1a1a2e', fontSize: 14 }}>{p.to}</span>
                </div>
                <p style={{ color: '#6b6b8d', fontSize: 13, lineHeight: 1.5 }}>{p.why}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 6: LEARNING SYSTEM — Deep blue bg with halftone
   ============================================ */
function LearningSystem() {
  return (
    <section style={{ background: '#0A1628', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      {/* Halftone */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,204,102,0.06) 1.5px, transparent 1.5px)', backgroundSize: '10px 10px', pointerEvents: 'none' }} />

      <div style={{ ...cx, position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <div style={{ width: 120, height: 120, borderRadius: 24, overflow: 'hidden', border: '3px solid #00CC66', margin: '0 auto 24px', boxShadow: '0 0 40px rgba(0,204,102,0.2)' }}>
            <img src="/hero-learning.png" alt="AI learning" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <p style={{ color: '#00CC66', fontWeight: 600, fontSize: 14, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Self-Learning System</p>
          <h2 style={{ fontSize: 48, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.12 }}>They get smarter every single day. Automatically.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginTop: 16 }}>5-layer learning pipeline. The longer you use them, the better they understand your business.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {[
            { n: '1', title: 'Learn from Every Task', desc: 'After completing work, role-specific insights are extracted automatically. Flora learns engagement rates. Angela learns tax deadlines. Hugh learns conversion patterns. Saved permanently to their brain.', color: '#00CC66' },
            { n: '2', title: 'Learn from Peer Feedback', desc: 'Cross-review corrections stored as permanent instructions: "Do not repeat this issue." The cross-review matrix covers all 11 employees with 1-3 reviewers each.', color: '#0066FF' },
            { n: '3', title: 'Weekly Auto-Research (6 tasks)', desc: 'Bowie: competitive intel (Mon) + industry data (Wed). Angela: tax updates (Mon). Rupert: legal scan (Tue). Mabel: SEO algorithms (Mon). Ava: analytics benchmarks (Tue).', color: '#FF6600' },
            { n: '4', title: 'Weekly Knowledge Refresh', desc: 'Every 7 days, search-enabled employees re-research YOUR business for new developments, competitor changes, market shifts. Only genuinely new findings saved.', color: '#FF3366' },
            { n: '5', title: 'Monthly Self-Assessment', desc: 'Each employee checks certifications, identifies 2-3 new skills, assesses weakest areas, creates improvement plans, posts to Team Chat. Proficiency auto-upgrades: Foundational → Intermediate (20 insights) → Advanced (35) → Expert (50).', color: '#6C3AFF' },
            { n: '✓', title: 'What This Means for You', desc: 'Zero training needed. Employees come with 30+ certifications and 80+ frameworks, then self-improve from day one. Mistakes corrected permanently. Knowledge shared across the team. Never goes stale.', color: '#00CC66' },
          ].map((s) => (
            <div key={s.n} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 20, padding: 28, border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: 40, height: 40, background: s.color, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 16 }}>{s.n}</div>
              <h3 style={{ fontWeight: 700, color: '#fff', fontSize: 17, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 7: CONTENT CHAINS — Warm yellow bg, side-by-side with character
   ============================================ */
function MobileApp() {
  return (
    <section style={{ background: '#6C3AFF', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1.5px, transparent 1.5px)', backgroundSize: '10px 10px', pointerEvents: 'none' }} />
      <div style={{ ...cx, position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', borderRadius: 100, padding: '6px 16px', marginBottom: 20 }}>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>📱 Coming Soon</span>
            </div>
            <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 20 }}>
              Your AI team works while you're on the go.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 12 }}>
              <strong style={{ color: '#fff' }}>You're at a meeting.</strong> Cecil just triaged your inbox, Flora posted 10 pieces of content, and Hugh found 15 new leads. You check your phone — everything's in the Approval Queue, waiting for one tap.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 12 }}>
              <strong style={{ color: '#fff' }}>You're on the school run.</strong> Angela flagged a cash flow issue. You voice-message her: "Move the payment to next week." Done. 30 seconds.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 24 }}>
              <strong style={{ color: '#fff' }}>You're on holiday.</strong> Your business doesn't stop because you did. 11 employees keep working, keep learning, keep delivering. You check in when you want, not because you have to.
            </p>

            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
              Approve work, chat with employees, check analytics, review leads — all from your pocket. Because the best business tool is the one you always have with you.
            </p>

            {/* Store badges */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              {/* Apple App Store badge */}
              <div style={{ background: '#000', borderRadius: 10, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 10, opacity: 0.7 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>Coming soon on</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>App Store</div>
                </div>
              </div>

              {/* Google Play badge */}
              <div style={{ background: '#000', borderRadius: 10, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 10, opacity: 0.7 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm.91-.91L19.65 12 17.72 10.79l-2.54 2.54 2.54 2.54zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg>
                <div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>Coming soon on</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', border: '3px solid rgba(255,255,255,0.2)' }}>
              <img src="/mobile-app.png" alt="AI Employees on the go" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContentChains() {
  const chains = [
    { from: 'Mabel', to: 'Flora', desc: 'Blog published → Flora creates 6+ social posts (TikTok, Instagram, Facebook, X, LinkedIn, YouTube), generates branded images, schedules across all platforms. One blog = a week of content.' },
    { from: 'Flora', to: 'Hugh', desc: 'Campaign created → Hugh integrates visuals into outreach sequences. Cold emails reference the campaign, pitch decks use Flora\'s graphics. Sales and marketing always aligned.' },
    { from: 'Bowie', to: 'Poppi', desc: 'Research published → Poppi updates strategy, adjusts Flora\'s content calendar, refines Hugh\'s targeting, posts recommendations to team Boardroom.' },
    { from: 'Hugh', to: 'Cecil', desc: 'Leads discovered → Cecil drafts personalised welcome emails, queues in MailerLite. Warm introduction before Hugh\'s SPIN/Challenger outreach.' },
    { from: 'Ava', to: 'Flora', desc: 'Analytics reported → Flora adjusts posting schedule, doubles down on what\'s working, shifts away from what isn\'t. Content strategy always data-driven.' },
  ]

  return (
    <section style={{ background: '#FFF8E6', padding: '80px 0' }}>
      <div style={cx}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '5px 5px 0 #1a1a2e', border: '3px solid #1a1a2e' }}>
              <img src="/hero-chains.png" alt="Content chain workflow" style={{ width: '100%', display: 'block' }} />
            </div>
          </div>
          <div>
            <p style={{ color: '#FF6600', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Automated Content Chains</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 16 }}>5 workflows that run your pipeline automatically.</h2>
            <p style={{ fontSize: 15, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 24 }}>When one employee finishes, the next one starts. No manual handoffs. Posts to Team Chat so everyone sees.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {chains.map((c, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 12, padding: '14px 18px', border: '1px solid #e8dfc8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14 }}>{c.from}</span>
                    <span style={{ color: '#FF6600', fontWeight: 700 }}>→</span>
                    <span style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 14 }}>{c.to}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#6b6b8d', lineHeight: 1.55 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 8: INTEGRATIONS — Light blue bg
   ============================================ */
function Integrations() {
  const integrations = [
    { cat: 'Email & Calendar', items: ['Gmail', 'Outlook', 'Yahoo', 'Zoho', 'iCloud', 'SMTP', 'Calendar', 'MailerLite'], desc: 'Connect unlimited email accounts — any provider. Cecil manages all inboxes, drafts replies, runs MailerLite campaigns. Google Calendar for scheduling and focus time.', color: '#0066FF' },
    { cat: 'Analytics', items: ['GA4 (Live)', 'YouTube Analytics', 'Search Console'], desc: 'Ava has live Marketer-level GA4 access — real-time, not reports. Attribution modelling, cohort analysis, predictive audiences. YouTube metrics. Search Console rankings.', color: '#00CC66' },
    { cat: 'Social Media', items: ['TikTok', 'Instagram', 'Facebook', 'X', 'YouTube', 'LinkedIn'], desc: 'Flora posts platform-native content across 6 channels with platform-optimized scheduling API. Mandatory format specs for each platform. 10+ posts/day. AI-generated branded images.', color: '#FF1493' },
    { cat: 'Finance & Accounting', items: ['Stripe', 'QuickBooks', 'Xero', 'Sage 50'], desc: 'Angela connects to your accounting stack. Auto-connect on save. Corporation Tax, VAT returns, R&D credits, MTD compliance. Cash flow projections and runway alerts.', color: '#FF6600' },
    { cat: 'Legal & Compliance', items: ['gov.uk', 'ICO', 'legislation.gov.uk', 'ASA', 'Companies House'], desc: 'Rupert accesses 5 legal databases for UK GDPR, Consumer Rights Act, EU AI Act, PECR compliance. Advertising standards. Weekly auto-research every Tuesday.', color: '#6C3AFF' },
    { cat: 'Automation & Workspace', items: ['Webhooks', 'Zapier', 'Make', 'n8n', 'Sheets', 'Drive', 'Docs'], desc: 'Connect to 5,000+ external tools via webhooks. Secure signed payloads. Multiple event types. Google Workspace APIs for document creation and data export.', color: '#00CED1' },
  ]

  return (
    <section style={{ background: '#F0F7FF', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 60px' }}>
          <p style={{ color: '#0066FF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Integrations</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.12 }}>Connected to the tools you already use.</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d', lineHeight: 1.7, marginTop: 16 }}>All integrations provided at platform level — you never touch an API key. For personal services like Gmail, just click "Connect."</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {integrations.map((i) => (
            <div key={i.cat} style={{ background: '#fff', borderRadius: 20, padding: 28, border: '1px solid #e0e8f0', borderTop: `4px solid ${i.color}` }}>
              <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 16, marginBottom: 10 }}>{i.cat}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                {i.items.map((item) => (
                  <span key={item} style={{ padding: '4px 10px', fontSize: 12, fontWeight: 600, color: i.color, background: `${i.color}10`, borderRadius: 8, border: `1px solid ${i.color}20` }}>{item}</span>
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

/* ============================================
   SECTION 9: STATS — Dark bg, bold numbers
   ============================================ */
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
              <div style={{ fontSize: 44, fontWeight: 900, color: '#fff' }}>{s.v}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 10: TESTIMONIALS — White bg, pink container
   ============================================ */
function Testimonials() {
  const t = [
    { q: "I replaced 3 freelancers with AI Employees. My marketing runs 24/7 and the quality is genuinely better. The cross-review system catches things I'd miss.", n: 'Sarah K.', r: 'E-commerce Founder' },
    { q: "Hugh closed more leads in his first week than my previous outreach tool did in a month. The 7-source lead discovery is insane — found prospects I didn't know existed.", n: 'Marcus T.', r: 'SaaS Founder' },
    { q: "Having Ava connected to our GA4 live and Angela managing QuickBooks means I actually understand my numbers. The daily action plans are a game-changer.", n: 'Priya R.', r: 'Agency Owner' },
  ]

  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ color: '#FF1493', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Testimonials</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em' }}>Loved by business owners</h2>
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

/* ============================================
   SECTION 11: PRICING — Gray bg
   ============================================ */
function PricingSection() {
  return (
    <section style={{ background: '#fafafa', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 48px' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Pricing</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 12 }}>All 11 employees. Every plan. No credits.</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d' }}>Simple monthly task limits, not confusing credits. All prices in GBP. 7-day free trial, no credit card.</p>
        </div>

        <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {plans.map((p) => (
              <div key={p.name} style={{ background: '#fff', borderRadius: 24, overflow: 'hidden', border: p.highlight ? '2px solid #6C3AFF' : '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <div style={{ height: 160, overflow: 'hidden', position: 'relative' }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {p.badge && <div style={{ position: 'absolute', top: 10, right: 10, background: '#6C3AFF', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 8 }}>{p.badge}</div>}
                </div>
                <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontWeight: 800, fontSize: 18, color: '#1a1a2e', marginBottom: 4 }}>{p.name}</h3>
                  <div style={{ marginBottom: 4 }}>
                    <span style={{ fontSize: 42, fontWeight: 900, color: '#1a1a2e' }}>{p.currency}{p.price}</span>
                    <span style={{ fontSize: 14, color: '#9999aa' }}>/{p.period}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#00CC66', fontWeight: 600, marginBottom: 12 }}>or {p.currency}{p.annualPrice}/{p.period} annually</p>
                  <p style={{ fontSize: 13, color: '#6b6b8d', marginBottom: 16, lineHeight: 1.5 }}>{p.description}</p>

                  <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                    <div style={{ background: '#fafafa', borderRadius: 8, padding: '6px 10px', flex: 1, textAlign: 'center' }}>
                      <div style={{ fontWeight: 800, fontSize: 13, color: '#1a1a2e' }}>👥 11</div>
                      <div style={{ fontSize: 9, color: '#9999aa' }}>Employees</div>
                    </div>
                    <div style={{ background: '#fafafa', borderRadius: 8, padding: '6px 10px', flex: 1, textAlign: 'center' }}>
                      <div style={{ fontWeight: 800, fontSize: 13, color: '#1a1a2e' }}>{p.taskLimit}</div>
                      <div style={{ fontSize: 9, color: '#9999aa' }}>Tasks/mo</div>
                    </div>
                    <div style={{ background: '#fafafa', borderRadius: 8, padding: '6px 10px', flex: 1, textAlign: 'center' }}>
                      <div style={{ fontWeight: 800, fontSize: 13, color: '#1a1a2e' }}>{p.seats}</div>
                      <div style={{ fontSize: 9, color: '#9999aa' }}>Seats</div>
                    </div>
                  </div>

                  <ul style={{ listStyle: 'none', marginBottom: 16, flex: 1 }}>
                    {p.features.slice(0, 7).map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '3px 0' }}>
                        <svg width="14" height="14" fill="#00CC66" viewBox="0 0 20 20" style={{ marginTop: 3, flexShrink: 0 }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span style={{ fontSize: 12, color: '#3d3d5c' }}>{f}</span>
                      </li>
                    ))}
                    {(p.lockedFeatures || []).slice(0, 3).map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '3px 0' }}>
                        <svg width="14" height="14" fill="#ddd" viewBox="0 0 20 20" style={{ marginTop: 3, flexShrink: 0 }}><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                        <span style={{ fontSize: 12, color: '#bbb' }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: p.highlight ? '#6C3AFF' : '#fff', color: p.highlight ? '#fff' : '#1a1a2e', fontWeight: 600, fontSize: 14, borderRadius: 12, padding: '12px 0', textDecoration: 'none', border: p.highlight ? 'none' : '2px solid #e0e0e0', boxShadow: p.highlight ? '0 4px 20px rgba(108,58,255,0.3)' : 'none' }}>
                    {p.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Link to="/pricing" style={{ color: '#6C3AFF', fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>See full pricing details & competitor comparison →</Link>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SECTION 12: CTA — Purple bg with halftone
   ============================================ */
function FAQ() {
  const faqs = [
    { q: 'What exactly is AI Employees?', a: 'A platform that gives you 11 specialized AI employees — each one a certified expert in their domain. They handle your marketing, sales, support, content, analytics, legal, advertising, research, and finance. They collaborate with each other, cross-review work, and learn your business over time. It\'s like hiring a full department for a fraction of the cost.' },
    { q: 'How is this different from ChatGPT or other AI tools?', a: 'ChatGPT is a general-purpose chatbot. AI Employees are specialized workers with real qualifications (HubSpot, Google Ads certs, ACA, ACCA, etc.), permanent memory of your business, cross-team collaboration, autonomous execution, and integration with your actual tools (email, analytics, accounting, social media). They don\'t just chat — they DO the work.' },
    { q: 'Do I need any technical skills?', a: 'None. Everything works through simple chat or voice. No coding, no prompt engineering, no API setup. Tell your employees what you need in plain English and they deliver. The 6-step onboarding wizard takes 2 minutes.' },
    { q: 'How do the employees learn my business?', a: 'Three ways: your Business Profile (100+ fields), Data Hub (upload any file — documents, PDFs, Excel, PowerPoint, images, voice notes, sales call recordings), and Custom Skills (teach them your workflows). You can also import files directly into any employee\'s Brain — text is extracted automatically from Word, Excel, PowerPoint, and PDFs. Plus a 5-layer self-learning pipeline: task insights, peer feedback, weekly auto-research, knowledge refreshes, and monthly self-assessments. The longer you use them, the smarter they get.' },
    { q: 'What\'s included in the free trial?', a: '7 days of full access at Growth-level (all features, all employees, 5,000 tasks). No credit card required. At the end, choose a plan or your account pauses — no surprise charges. Your data is kept for 30 days in case you come back.' },
    { q: 'Can I cancel anytime?', a: 'Yes. Cancel from your account settings at any time. No lock-in contracts, no cancellation fees. You keep access until the end of your billing period. We also offer a 30-day money-back guarantee on all paid plans.' },
    { q: 'What integrations are supported?', a: 'Email (Gmail, Outlook, Yahoo, Zoho, iCloud, SMTP), Google Calendar, MailerLite, GA4, YouTube Analytics, Search Console, Stripe, QuickBooks, Xero, Sage, plus webhooks for Zapier, Make, n8n, and Google Workspace (Sheets, Drive, Docs).' },
    { q: 'How do you handle security and privacy?', a: 'Bank-grade encryption, database-level security with complete data isolation between users, GDPR compliant. Your data is never sold or shared. AI models don\'t train on your data. You own everything you create.' },
  ]

  return (
    <section style={{ background: '#fff', padding: '80px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>FAQ</p>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em' }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((f) => (
              <details key={f.q} style={{ background: '#fafafa', borderRadius: 16, border: '1px solid #eee', overflow: 'hidden' }}>
                <summary style={{ padding: '20px 24px', cursor: 'pointer', fontWeight: 600, fontSize: 16, color: '#1a1a2e', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {f.q}
                  <span style={{ color: '#6C3AFF', fontSize: 20, fontWeight: 700, marginLeft: 16, flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: '0 24px 20px', fontSize: 15, color: '#6b6b8d', lineHeight: 1.7 }}>
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section style={{ background: '#6C3AFF', position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)', backgroundSize: '12px 12px', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
          Every day you wait is a day
          <br />your competitors gain ground.
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto 16px' }}>
          77% of businesses say AI is transformational but only 5% use it. The gap isn't desire — it's complexity. We eliminated the complexity.
        </p>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '0 auto 40px' }}>
          Right now, while you're reading this, someone in your industry is deploying AI to find your customers, create your content, and close your deals. The question isn't whether to start — it's whether you can afford to wait.
        </p>
        <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
          Get Started Free <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 20 }}>No credit card · 7-day trial · Cancel anytime</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      {/* PainPoints removed — info moved to employee cards */}
      <WhatYouGet />
      <TeamShowcase />
      <CrossReview />
      <LearningSystem />
      <ContentChains />
      <MobileApp />
      <Integrations />
      <Stats />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <CTA />
    </>
  )
}
