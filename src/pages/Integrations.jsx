import { Link } from 'react-router-dom'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const categories = [
  {
    name: 'Email, Calendar & Messaging',
    color: '#0066FF',
    blurb: 'Cecil manages every inbox. Basil replies to customers. Hugh runs outreach. Unlimited accounts, any provider.',
    items: [
      { name: 'Gmail', detail: 'Read, triage, draft, send. Cecil · Basil · Hugh.' },
      { name: 'Outlook · Office 365', detail: 'Any number of accounts.' },
      { name: 'Yahoo · Zoho · iCloud · Custom SMTP', detail: 'Any provider works — no restrictions.' },
      { name: 'Google Calendar', detail: 'Create events, block focus time, resolve conflicts. Cecil.' },
      { name: 'MailerLite', detail: 'Campaigns, automations, segments, A/B tests. Cecil · Hugh.' },
      { name: 'HubSpot meeting scheduler', detail: 'Shareable booking links. Cecil.' },
    ],
  },
  {
    name: 'Social Media (14 platforms)',
    color: '#FF1493',
    blurb: 'Flora publishes natively to every platform. Each post formatted for that platform\'s algorithm, dimensions, and audience.',
    items: [
      { name: 'TikTok', detail: '9:16 native video with our in-house scene library.' },
      { name: 'Instagram', detail: 'Feed posts (1:1), Reels (9:16), carousels (4:5), Stories.' },
      { name: 'Facebook', detail: 'Pages, groups, link previews, carousels.' },
      { name: 'X / Twitter', detail: 'Threads, media posts, polls.' },
      { name: 'LinkedIn', detail: 'Personal + company pages, article-length posts.' },
      { name: 'YouTube', detail: 'Shorts + long-form with live Analytics access.' },
      { name: 'Pinterest', detail: 'Pin creation with alt text + destination URLs.' },
      { name: 'Threads', detail: 'Meta\'s text-first platform.' },
      { name: 'Bluesky', detail: 'Decentralised microblogging.' },
      { name: 'Reddit', detail: 'Subreddit-aware posting.' },
      { name: 'Google Business Profile', detail: 'Posts, updates, offers — local SEO.' },
      { name: 'Telegram · Snapchat · WhatsApp · Discord', detail: 'Extended distribution for communities.' },
    ],
  },
  {
    name: 'Analytics & SEO',
    color: '#00CC66',
    blurb: 'Ava and Mabel work on live data — no 30-day-old exports.',
    items: [
      { name: 'Google Analytics 4 (live)', detail: 'Marketer-level — real-time, attribution, custom audiences. Ava.' },
      { name: 'YouTube Analytics', detail: 'Watch time, retention, traffic sources. Flora · Ava.' },
      { name: 'Google Search Console', detail: 'Queries, CTR, indexing, content decay. Mabel · Ava.' },
      { name: 'BigQuery', detail: 'Custom SQL on raw GA4 events. Ava.' },
      { name: 'Looker Studio', detail: 'Executive dashboards. Ava.' },
      { name: 'Google Trends', detail: 'Interest over time for topic mining. Bowie · Mabel.' },
    ],
  },
  {
    name: 'Paid Ads',
    color: '#FF0033',
    blurb: 'Raymond holds all 9 Google Ads certifications plus Meta Ads — manages YOUR campaigns, not 20 agency clients.',
    items: [
      { name: 'Google Ads', detail: 'Search · Display · Video · Shopping · Apps · PMax. All 9 certs.' },
      { name: 'Meta Ads', detail: 'Facebook + Instagram, all placements.' },
      { name: 'Google Keyword Planner', detail: 'Volume, competition, suggested bids.' },
      { name: 'Meta Ad Library', detail: 'Studies what competitors actually spend on.' },
    ],
  },
  {
    name: 'Sales & CRM',
    color: '#FF6600',
    blurb: 'Hugh finds leads, runs outreach, logs activity — all with no paid lead data required.',
    items: [
      { name: 'HubSpot CRM', detail: 'Contacts, companies, deals, pipeline, notes.' },
      { name: 'Companies House', detail: 'UK directors, filings, SIC codes.' },
      { name: 'Global business directory data', detail: '33 industry mappings covered.' },
      { name: 'Google Places', detail: 'Local business data + reviews.' },
      { name: 'Public trade association sources', detail: 'Industry bodies and professional registers.' },
      { name: 'Social + Directory intelligence', detail: 'Profiles across major social networks and vertical directories.' },
      { name: 'Website enrichment', detail: 'Auto-extracts emails, phones, socials.' },
      { name: 'Optional: bring-your-own enrichment keys', detail: 'Plug in premium enrichment if you already have it.' },
    ],
  },
  {
    name: 'Customer Review Sources',
    color: '#FFD700',
    blurb: 'Basil monitors and responds. Hugh reads prospect reviews before outreach. Mabel mines them for blog angles.',
    items: [
      { name: 'Google Places reviews', detail: 'Any business, up to 5 recent reviews.' },
      { name: 'Yelp', detail: 'Any business — read and respond.' },
      { name: 'Trustpilot', detail: 'Public read of any business.' },
    ],
  },
  {
    name: 'Finance & Accounting',
    color: '#FFA500',
    blurb: 'Angela is ACA, ACCA, and CIMA Strategic qualified — same credentials as a Big Four accountant.',
    items: [
      { name: 'Stripe (live)', detail: 'MRR · ARR · churn · ARPU · subscribers-by-plan.' },
      { name: 'QuickBooks Online', detail: 'Live P&L, balance sheet, AR/AP, cash.' },
      { name: 'Xero', detail: 'Live YTD P&L, outstanding invoices.' },
      { name: 'FreeAgent', detail: 'UK sole trader P&L + invoices.' },
      { name: 'Sage', detail: 'Traditional UK bookkeeping.' },
      { name: 'HMRC · gov.uk', detail: 'Live tax rates — CT, VAT, R&D, capital allowances.' },
    ],
  },
  {
    name: 'Legal & Compliance Sources',
    color: '#6C3AFF',
    blurb: 'Rupert accesses 5 authoritative UK legal databases every week — not general-purpose AI knowledge.',
    items: [
      { name: 'gov.uk', detail: 'Primary UK government guidance.' },
      { name: 'ICO (Information Commissioner)', detail: 'Enforcement actions, GDPR updates.' },
      { name: 'legislation.gov.uk', detail: 'UK statutes — DPA 2018, Consumer Rights Act.' },
      { name: 'ASA (Advertising Standards)', detail: 'Rulings against campaign copy.' },
      { name: 'Companies House', detail: 'Director records, ownership.' },
      { name: 'HMRC · judiciary.uk', detail: 'Tax guidance and case law.' },
    ],
  },
  {
    name: 'Research & Intelligence',
    color: '#00CED1',
    blurb: 'Bowie has an Oxford MPhil and Cambridge MBA — and cites a real URL for every insight.',
    items: [
      { name: 'Live grounded web research', detail: 'Every insight cited to a real source URL.' },
      { name: 'Community & forum intelligence', detail: 'Deep comment mining on niche communities for real pain points.' },
      { name: 'Launch & industry signals', detail: 'Technical launches and discussions across developer/founder channels.' },
      { name: 'Market, traffic & funding data', detail: 'Market sizing, competitor traffic estimates, funding rounds, product landscape.' },
    ],
  },
  {
    name: 'AI-Generated Media',
    color: '#7B2FBE',
    blurb: 'Flora produces branded visuals, TikTok-native video, and voiceovers — all in-house through our production pipeline.',
    items: [
      { name: 'AI image generation', detail: 'Branded visuals at correct aspect ratio per platform (9:16, 4:5, 16:9, 1:1).' },
      { name: 'Native video creation', detail: 'Six scene types for TikTok, Reels, and Shorts — not slideshow templates.' },
      { name: 'AI voiceover', detail: 'Text-to-speech on Flora\'s video scripts.' },
    ],
  },
  {
    name: 'Automation & Workspace',
    color: '#FF00FF',
    blurb: 'Connect to 5,000+ external tools. HMAC-signed outbound webhooks for secure triggering.',
    items: [
      { name: 'Webhooks (out)', detail: '11 event types, HMAC signed.' },
      { name: 'Zapier · Make · n8n', detail: 'Any of the 5,000+ apps in those ecosystems.' },
      { name: 'Google Sheets · Drive · Docs', detail: 'Pull data, draft documents, archive exports.' },
    ],
  },
  {
    name: 'Mobile Apps',
    color: '#1a1a2e',
    blurb: 'Approve work, chat with employees, review leads — from your pocket.',
    items: [
      { name: 'iOS app', detail: 'Native experience for iPhone and iPad.' },
      { name: 'Android app', detail: 'Native experience for Android phones and tablets.' },
      { name: 'Progressive Web App', detail: 'Install from any browser with native-like performance.' },
    ],
  },
]

export default function Integrations() {
  const totalItems = categories.reduce((n, c) => n + c.items.length, 0)

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 40px' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Integrations</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Connected to the tools you already use.
          </h1>
          <p style={{ fontSize: 18, color: '#6b6b8d', maxWidth: 680, margin: '0 auto' }}>
            {totalItems}+ integrations across {categories.length} categories. All API keys managed server-side — you never touch credentials. OAuth for everything that supports it.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: '#1a1a2e', padding: '40px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, textAlign: 'center' }}>
            {[
              { v: '14', l: 'Social Platforms' },
              { v: 'Live', l: 'GA4 + GSC + YouTube' },
              { v: '7', l: 'Lead Sources (Free)' },
              { v: '5', l: 'Accounting Tools' },
              { v: '11', l: 'Webhook Events' },
            ].map((s) => (
              <div key={s.l}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#fff' }}>{s.v}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category blocks */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {categories.map((cat) => (
              <div key={cat.name} style={{ background: '#fff', borderRadius: 24, padding: 32, border: '1px solid #eee', borderTop: `4px solid ${cat.color}` }}>
                <div style={{ marginBottom: 20 }}>
                  <h2 style={{ fontSize: 26, fontWeight: 900, color: '#1a1a2e', marginBottom: 8 }}>{cat.name}</h2>
                  <p style={{ fontSize: 15, color: '#6b6b8d', lineHeight: 1.6 }}>{cat.blurb}</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                  {cat.items.map((item) => (
                    <div key={item.name} style={{ background: '#fafafa', borderRadius: 12, padding: '14px 16px', border: '1px solid #eee' }}>
                      <h3 style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e', marginBottom: 4 }}>{item.name}</h3>
                      <p style={{ fontSize: 12, color: '#6b6b8d', lineHeight: 1.5 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security note */}
      <section style={{ background: '#fff', padding: '60px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <p style={{ color: '#00CC66', fontWeight: 600, fontSize: 13, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Security by Design</p>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: '#1a1a2e', marginBottom: 12 }}>Your keys never touch the browser.</h2>
          <p style={{ fontSize: 15, color: '#6b6b8d', lineHeight: 1.7 }}>
            Every third-party API call goes through a secure server-side proxy. CORS is locked to known origins. An action whitelist means only approved calls fire. Database-level isolation separates every subscriber's data. OAuth tokens are encrypted at rest. Webhook payloads are HMAC signed.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#6C3AFF', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1.5px, transparent 1.5px)', backgroundSize: '12px 12px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, color: '#fff', marginBottom: 16 }}>One subscription. Every integration.</h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>From £49/month. No per-integration fees. No seat minimums. No credits to run out.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
            Start Free Trial
          </a>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 16 }}>
            Want to see who uses what? <Link to="/about" style={{ color: '#fff', textDecoration: 'underline' }}>Meet the 11 employees</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
