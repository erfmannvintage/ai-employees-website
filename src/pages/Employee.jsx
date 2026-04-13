import { useParams, Link } from 'react-router-dom'
import { employees } from '../data/employees'

const detailed = {
  cecil: {
    fullName: 'Cecil Hartington-Smythe', tagline: 'Your right hand. I manage your calendar, emails, and daily operations so you can focus on growing your business.',
    qualifications: ['HubSpot Email Marketing', 'Google Workspace'],
    specialty: 'Email, calendar, MailerLite campaigns, Inbox Zero',
    skills: [{ name: 'Email Management', level: 98 }, { name: 'Calendar Optimization', level: 95 }, { name: 'Task Prioritization', level: 92 }, { name: 'Email Campaigns', level: 88 }, { name: 'Team Coordination', level: 90 }],
    experience: [
      { area: 'Inbox Management', detail: 'Triages every email — flags urgent, drafts replies, archives noise. Achieves Inbox Zero daily.' },
      { area: 'Calendar Control', detail: 'Schedules meetings, blocks focus time, resolves conflicts. Your calendar serves you.' },
      { area: 'Daily Briefings', detail: 'Morning briefings with top priorities, deadlines, and decisions needing attention.' },
      { area: 'Email Campaigns', detail: 'Runs MailerLite newsletters, sequences, automations. Writes, schedules, optimizes.' },
      { area: 'Meeting Management', detail: 'Takes notes, extracts action items, follows up. Nothing slips.' },
      { area: 'Team Coordination', detail: 'Routes tasks across 11 employees — delegates, tracks completion.' },
    ],
    metrics: [{ value: 'Daily', label: 'Inbox Zero' }, { value: '<30s', label: 'Draft Time' }, { value: '11', label: 'Employees Routed' }, { value: 'AM', label: 'Briefing Schedule' }],
    who: 'Business owners drowning in 2+ hours of email and admin daily. If your calendar runs your life, Cecil fixes that.',
  },
  flora: {
    fullName: 'Flora Beaumont', tagline: 'Your social media powerhouse. Scroll-stopping content across every platform, every day.',
    qualifications: ['Content Strategy Frameworks', 'YouTube Analytics'],
    specialty: '10 posts/day across 5 platforms, competitor analysis, video',
    skills: [{ name: 'Content Creation', level: 97 }, { name: 'Video Production', level: 90 }, { name: 'Trend Analysis', level: 95 }, { name: 'Community Management', level: 88 }, { name: 'Platform Strategy', level: 93 }],
    experience: [
      { area: 'Multi-Platform Content', detail: '10+ posts/day across TikTok, Instagram, LinkedIn, Facebook, X. Platform-native.' },
      { area: 'Video Production', detail: 'Scripts, storyboards, produces video optimized for each algorithm.' },
      { area: 'Content Calendars', detail: 'Weekly/monthly calendars with optimal times, themes, campaign tie-ins.' },
      { area: 'Competitor Analysis', detail: 'Tracks competitor content, spots trending formats before they peak.' },
      { area: 'Engagement Strategy', detail: 'Hooks, captions, hashtags that drive comments, shares, saves.' },
      { area: 'Cross-Team Sync', detail: 'Reviews with Poppi on strategy, Mabel on SEO, Raymond on ad creative.' },
    ],
    metrics: [{ value: '10+', label: 'Daily Posts' }, { value: '6', label: 'Platforms' }, { value: '5', label: 'Content Types' }, { value: 'Same Day', label: 'Trend Response' }],
    who: 'Businesses whose social media hasn\'t been updated in weeks. Flora runs it 24/7.',
  },
  basil: {
    fullName: 'Basil Thornbury', tagline: 'Your customer support lead. Every query handled with patience and precision — 24/7.',
    qualifications: ['HubSpot Service Hub', 'CCXP Certified'],
    specialty: 'Support, churn detection, demo booking, HEARD method',
    skills: [{ name: 'Ticket Resolution', level: 96 }, { name: 'Live Chat', level: 94 }, { name: 'Churn Detection', level: 90 }, { name: 'Knowledge Base', level: 92 }, { name: 'CSAT Optimization', level: 88 }],
    experience: [
      { area: 'Instant Response', detail: 'Handles queries via chat, email, tickets. No customer waits more than minutes.' },
      { area: 'HEARD Method', detail: 'Hear, Empathise, Apologise, Resolve, Diagnose — complaints become loyalty.' },
      { area: 'Churn Detection', detail: 'Identifies at-risk customers through sentiment and engagement patterns.' },
      { area: 'Demo Booking', detail: 'Qualifies prospects, books discovery calls, routes hot leads to Hugh.' },
      { area: 'Knowledge Base', detail: 'Builds self-service docs for instant answers to common questions.' },
      { area: 'Escalation', detail: 'Routes complex issues with full context — you get the summary, not the mess.' },
    ],
    metrics: [{ value: '<2m', label: 'Response Time' }, { value: '24/7', label: 'Availability' }, { value: '95%+', label: 'Resolution' }, { value: '4.8/5', label: 'CSAT Target' }],
    who: 'Businesses losing customers to slow or inconsistent support.',
  },
  hugh: {
    fullName: 'Hugh Ashworth-Pemberton', tagline: 'Your sales machine. Discovers leads, runs outreach, manages pipelines, closes deals.',
    qualifications: ['HubSpot Inbound Sales', 'Sales Enablement', 'Sandler Training'],
    specialty: '7-source lead discovery, SPIN/Challenger/MEDDIC, global prospecting',
    skills: [{ name: 'Lead Discovery', level: 97 }, { name: 'Pipeline Management', level: 95 }, { name: 'Outreach Sequences', level: 93 }, { name: 'Sales Methodology', level: 96 }, { name: 'Global Prospecting', level: 88 }],
    experience: [
      { area: '7-Source Discovery', detail: 'Directories, social, intent signals, referrals, events, content, partnerships.' },
      { area: 'Sales Frameworks', detail: 'SPIN Selling, Challenger Sale, MEDDIC — qualify and close at every stage.' },
      { area: 'Outreach Sequences', detail: 'Multi-touch cold emails, follow-ups, nurture campaigns across time zones.' },
      { area: 'Pipeline Management', detail: 'CRM stages, stalled opportunity flags, revenue forecasting.' },
      { area: 'Global Prospecting', detail: 'Cross-market prospecting with localized messaging.' },
      { area: 'Proposals', detail: 'Pitch decks, proposals, follow-ups. Contract review with Rupert.' },
    ],
    metrics: [{ value: '7', label: 'Lead Sources' }, { value: '33', label: 'Industry Maps' }, { value: '3', label: 'Frameworks' }, { value: 'Global', label: 'Reach' }],
    who: 'Businesses with leads falling through the cracks.',
  },
  mabel: {
    fullName: 'Mabel Cavendish', tagline: 'Your SEO content engine. Articles that rank on Google and convert visitors into customers.',
    qualifications: ['Google SEO', 'HubSpot SEO', 'HubSpot Content Marketing', 'Semrush (15+ certs)', 'Ahrefs Academy'],
    specialty: 'Blog SEO, AEO, GEO, hub-and-spoke, Search Console',
    skills: [{ name: 'SEO Writing', level: 98 }, { name: 'Keyword Research', level: 96 }, { name: 'Content Architecture', level: 94 }, { name: 'AEO & GEO', level: 90 }, { name: 'Search Console', level: 92 }],
    experience: [
      { area: 'SEO Architecture', detail: 'Hub-and-spoke structures that establish topical authority and dominate SERPs.' },
      { area: 'Keyword Research', detail: 'Intent, difficulty, SERP features — high-value opportunities.' },
      { area: 'AEO & GEO', detail: 'Answer Engine Optimization for snippets. Generative Engine Optimization for AI search.' },
      { area: 'Search Console', detail: 'Rankings, indexing, CTR tracking, content decay identification.' },
      { area: 'Long-Form Content', detail: 'Research-backed articles optimized for engines and humans.' },
      { area: 'Content Strategy', detail: 'Editorial calendars aligned with goals and seasonal opportunities.' },
    ],
    metrics: [{ value: '15+', label: 'Semrush Certs' }, { value: '3', label: 'SEO Types' }, { value: 'H&S', label: 'Architecture' }, { value: 'Live', label: 'Search Console' }],
    who: 'Businesses invisible on Google. Mabel makes you rank.',
  },
  rupert: {
    fullName: 'Rupert Blackwell-Forsyth', tagline: 'Your legal safety net. Contracts, compliance, and protection — without the hourly rate.',
    qualifications: ['UK GDPR', 'Consumer Rights Act', 'EU AI Act', 'PECR'],
    specialty: 'Contracts, compliance, IP, advertising law',
    skills: [{ name: 'Contract Review', level: 96 }, { name: 'GDPR Compliance', level: 98 }, { name: 'IP Protection', level: 90 }, { name: 'Advertising Law', level: 88 }, { name: 'Risk Assessment', level: 94 }],
    experience: [
      { area: 'Contract Review', detail: 'Flags risky clauses, suggests amendments, protects your interests.' },
      { area: 'GDPR & Data', detail: 'UK GDPR, PECR, international data protection compliance.' },
      { area: 'EU AI Act', detail: 'AI compliance monitoring and advisory as regulations evolve.' },
      { area: 'Policies & Terms', detail: 'ToS, privacy policies, cookie policies, refund policies.' },
      { area: 'IP & Ad Law', detail: 'IP protection and ASA advertising compliance.' },
      { area: 'Legal Databases', detail: 'gov.uk, ICO, legislation.gov.uk, ASA, Companies House.' },
    ],
    metrics: [{ value: 'UK & EU', label: 'Jurisdictions' }, { value: '5', label: 'Legal Sources' }, { value: '4', label: 'Compliance Acts' }, { value: 'Weekly', label: 'Auto-Research' }],
    who: 'Businesses operating without proper legal review.',
  },
  poppi: {
    fullName: 'Poppi Hartwell', tagline: 'Your marketing brain. Strategy, campaigns, and team coordination on autopilot.',
    qualifications: ['AARRR Funnels', 'ICP Frameworks', 'Campaign Orchestration'],
    specialty: 'Team management, strategy, competitive intelligence',
    skills: [{ name: 'Campaign Strategy', level: 97 }, { name: 'Funnel Design', level: 95 }, { name: 'Team Management', level: 96 }, { name: 'Competitive Intel', level: 90 }, { name: 'Brand Positioning', level: 92 }],
    experience: [
      { area: 'AARRR Funnels', detail: 'Acquisition, Activation, Retention, Referral, Revenue — systematic growth.' },
      { area: 'ICP Development', detail: 'Ideal Customer Profiles aligning every marketing touchpoint.' },
      { area: 'Campaign Orchestration', detail: 'Multi-channel: social, email, content, paid ads.' },
      { area: 'Team Management', detail: 'Coordinates Flora, Mabel, Raymond, Hugh on cross-channel efforts.' },
      { area: 'Competitive Intel', detail: 'Monitors competitor positioning, messaging, campaigns.' },
      { area: 'Performance', detail: 'Analyzes results, runs experiments, improves conversion.' },
    ],
    metrics: [{ value: 'AARRR', label: 'Framework' }, { value: '4', label: 'Team Managed' }, { value: '15+', label: 'Auto-Workflows' }, { value: 'Full', label: 'Channel Coverage' }],
    who: 'Businesses doing random marketing without a strategy.',
  },
  ava: {
    fullName: 'Ava Sinclair', tagline: 'Your data translator. Numbers become decisions with dashboards, reports, and predictions.',
    qualifications: ['Google Analytics IQ (GAIQ)'],
    specialty: 'GA4 live access, attribution, cohort analysis, predictive audiences',
    skills: [{ name: 'GA4 & Analytics', level: 98 }, { name: 'Attribution Modelling', level: 94 }, { name: 'Cohort Analysis', level: 92 }, { name: 'Predictive Analytics', level: 90 }, { name: 'Dashboard Design', level: 96 }],
    experience: [
      { area: 'GA4 Live Access', detail: 'Direct connection for real-time monitoring and custom reports.' },
      { area: 'Attribution', detail: 'Models showing which channels drive revenue, not just traffic.' },
      { area: 'Cohort Analysis', detail: 'Customer behaviour over time — retention, spend, engagement.' },
      { area: 'Predictive Audiences', detail: 'AI segments predicting who converts or churns.' },
      { area: 'Anomaly Detection', detail: 'Alerts to problems before they become crises.' },
      { area: 'Dashboards', detail: 'Visual KPI dashboards for your business.' },
    ],
    metrics: [{ value: 'Live', label: 'GA4 Access' }, { value: '3', label: 'Analysis Types' }, { value: 'Real-time', label: 'Monitoring' }, { value: 'Weekly', label: 'Benchmarks' }],
    who: 'Businesses making gut-feel decisions instead of data-driven ones.',
  },
  raymond: {
    fullName: 'Raymond Blake', tagline: 'Your ad spend guardian. Google, Meta, TikTok — maximum ROAS, minimum waste.',
    qualifications: ['All 9 Google Ads Certifications', 'Meta Ads Certified'],
    specialty: 'Google Search/Display/Shopping/PMax, 5-pillar architecture',
    skills: [{ name: 'Google Ads', level: 99 }, { name: 'Meta Ads', level: 94 }, { name: 'Budget Optimization', level: 96 }, { name: 'A/B Testing', level: 92 }, { name: 'Campaign Architecture', level: 95 }],
    experience: [
      { area: 'Google Ads', detail: 'Search, Display, Shopping, Video, Apps, PMax. All 9 certs.' },
      { area: '5-Pillar System', detail: 'Targeting, creative, bidding, landing pages, measurement.' },
      { area: 'Meta Advertising', detail: 'Facebook and Instagram across all placements.' },
      { area: 'Budget Optimization', detail: 'Allocates spend for maximum return per pound.' },
      { area: 'A/B Testing', detail: 'Copy, creative, audiences, bidding, landing pages.' },
      { area: 'Compliance', detail: 'Cross-reviews with Rupert on ASA and platform policies.' },
    ],
    metrics: [{ value: '9/9', label: 'Google Certs' }, { value: '3', label: 'Ad Platforms' }, { value: '5', label: 'Campaign Types' }, { value: '5-Pillar', label: 'Architecture' }],
    who: 'Businesses wasting ad spend with terrible (or unknown) ROAS.',
  },
  bowie: {
    fullName: 'Bowie Fairfax', tagline: 'Your intelligence analyst. Markets, competitors, trends — your unfair advantage.',
    qualifications: ['Oxford MPhil', 'Cambridge MBA', 'PESTLE Analysis', "Porter's Five Forces"],
    specialty: 'Market research, TAM/SAM/SOM, weekly intel scans',
    skills: [{ name: 'Competitor Analysis', level: 98 }, { name: 'Market Research', level: 96 }, { name: 'Trend Forecasting', level: 92 }, { name: 'Strategic Frameworks', level: 97 }, { name: 'Data Mining', level: 90 }],
    experience: [
      { area: 'Competitor Intel', detail: 'Porter\'s Five Forces — pricing, features, positioning, vulnerabilities.' },
      { area: 'Market Sizing', detail: 'TAM, SAM, SOM calculations for strategic planning.' },
      { area: 'Weekly Intel', detail: 'Automated scans Monday and Wednesday. You know first.' },
      { area: 'PESTLE Analysis', detail: 'Political, Economic, Social, Technological, Legal, Environmental.' },
      { area: 'Industry Reports', detail: 'Comprehensive reports with actionable recommendations.' },
      { area: 'Opportunity Spotting', detail: 'Market gaps, emerging trends, positioning opportunities.' },
    ],
    metrics: [{ value: 'Oxbridge', label: 'Education' }, { value: '2x/wk', label: 'Auto-Research' }, { value: '4', label: 'Frameworks' }, { value: 'Global', label: 'Coverage' }],
    who: 'Businesses competing blind without competitor or market intelligence.',
  },
  angela: {
    fullName: 'Angela Whitworth-Sterling', tagline: 'Your CFO. Books, budgets, tax, and strategy with visibility into every pound.',
    qualifications: ['ACA', 'ACCA', 'CIMA Strategic', 'Xero Advisor', 'QuickBooks ProAdvisor Platinum', 'Sage 50'],
    specialty: 'UK tax (CT, VAT, R&D credits), Stripe, QuickBooks, MTD',
    skills: [{ name: 'Financial Planning', level: 98 }, { name: 'Tax Management', level: 96 }, { name: 'Cash Flow Analysis', level: 95 }, { name: 'Cloud Accounting', level: 94 }, { name: 'Strategic Finance', level: 92 }],
    experience: [
      { area: 'UK Tax', detail: 'Corporation Tax, VAT returns, R&D credits. Maximizes allowances.' },
      { area: 'Financial Tools', detail: 'Stripe, QuickBooks, Xero, Sage — real-time across all accounts.' },
      { area: 'MTD Compliance', detail: 'Making Tax Digital — records and quarterly HMRC submissions.' },
      { area: 'Cash Flow', detail: 'Monitors runway, projects flow, alerts before problems hit.' },
      { area: 'Reporting', detail: 'P&L, balance sheets, expenses, board-ready summaries.' },
      { area: 'Strategic Finance', detail: 'Pricing, cost optimization, investment timing, growth financing.' },
    ],
    metrics: [{ value: '6', label: 'Qualifications' }, { value: '4', label: 'Accounting Tools' }, { value: '3', label: 'Tax Types' }, { value: 'Weekly', label: 'Tax Updates' }],
    who: 'Businesses that don\'t know if they\'re profitable.',
  },
}

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

function SkillBar({ name, level }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a2e' }}>{name}</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#6C3AFF' }}>{level}%</span>
      </div>
      <div style={{ height: 8, background: '#eee', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${level}%`, background: 'linear-gradient(90deg, #6C3AFF, #0066FF)', borderRadius: 4 }} />
      </div>
    </div>
  )
}

export default function Employee() {
  const { slug } = useParams()
  const emp = employees.find((e) => e.name.toLowerCase() === slug)
  const detail = detailed[slug]

  if (!emp || !detail) {
    return (
      <div style={{ padding: '160px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e' }}>Employee Not Found</h1>
        <Link to="/about" style={{ color: '#6C3AFF', marginTop: 16, display: 'inline-block' }}>View all employees →</Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero — side by side */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>{emp.role}</p>
              <h1 style={{ fontSize: 56, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.08, marginBottom: 8 }}>{emp.name}</h1>
              <p style={{ color: '#9999aa', fontSize: 14, marginBottom: 20 }}>{detail.fullName}</p>
              <p style={{ color: '#6b6b8d', fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>{detail.tagline}</p>

              {/* Qualifications as tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                {detail.qualifications.map((q) => (
                  <span key={q} style={{ padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#6C3AFF', background: 'rgba(108,58,255,0.06)', border: '1px solid rgba(108,58,255,0.12)', borderRadius: 10 }}>{q}</span>
                ))}
              </div>
              <p style={{ color: '#9999aa', fontSize: 13, marginBottom: 32 }}>Specialty: {detail.specialty}</p>

              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 14, padding: '16px 32px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
                Hire {emp.name}
              </a>
            </div>

            <div>
              <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 16 }}>
                <img src={emp.image} alt={emp.name} style={{ width: '100%', borderRadius: 20, display: 'block', aspectRatio: '3/4', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics bar */}
      <section style={{ background: '#1a1a2e', padding: '48px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {detail.metrics.map((m) => (
              <div key={m.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: '#fff' }}>{m.value}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column: Skills left, Experience right */}
      <section style={{ background: '#fafafa', padding: '100px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
            {/* Left: Skills */}
            <div>
              <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Expertise</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', marginBottom: 32 }}>Skills & Proficiency</h2>
              {detail.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>

            {/* Right: Quick capabilities */}
            <div>
              <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Capabilities</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', marginBottom: 32 }}>What {emp.name} Does</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {detail.experience.map((exp, i) => (
                  <div key={exp.area} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#6C3AFF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15, marginBottom: 4 }}>{exp.area}</h3>
                      <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.6 }}>{exp.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For — full width coloured container */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ background: 'rgba(108,58,255,0.05)', borderRadius: 32, padding: 56, textAlign: 'center' }}>
            <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Perfect For</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', marginBottom: 20 }}>Who {emp.name} Is For</h2>
            <p style={{ color: '#3d3d5c', fontSize: 18, lineHeight: 1.7 }}>{detail.who}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#6C3AFF', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', marginBottom: 16 }}>Ready to Hire {emp.name}?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 32 }}>{emp.name} activates in under 60 seconds. No setup required.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Rest of team */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', textAlign: 'center', marginBottom: 40 }}>Meet the Rest of the Team</h2>
          <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
              {employees.filter((e) => e.name.toLowerCase() !== slug).map((e) => (
                <Link key={e.name} to={`/employee/${e.name.toLowerCase()}`} style={{ textDecoration: 'none', background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', textAlign: 'center' }}>
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img src={e.image} alt={e.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: 12 }}>
                    <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 13 }}>{e.name}</h3>
                    <p style={{ color: '#6C3AFF', fontSize: 10, fontWeight: 600 }}>{e.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
