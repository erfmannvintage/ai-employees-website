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

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-semibold text-ink">{name}</span>
        <span className="text-sm font-bold text-pop-red">{level}%</span>
      </div>
      <div className="h-3 bg-light-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-pop-red to-pop-orange rounded-full transition-all duration-700" style={{ width: `${level}%` }} />
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
      <div className="py-40 text-center">
        <h1 className="font-black text-4xl text-ink">Employee Not Found</h1>
        <Link to="/about" className="text-pop-red mt-4 inline-block hover:underline">View all employees &rarr;</Link>
      </div>
    )
  }

  return (
    <div>
      {/* HERO — Full width, centered, clean */}
      <section className="section-cream halftone">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24 text-center">
          {/* Portrait */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-4 border-ink shadow-[6px_6px_0_var(--color-ink)] mb-10">
            <img src={emp.image} alt={emp.name} className="w-full h-full object-cover" />
          </div>

          <p className="text-pop-red font-semibold uppercase tracking-[0.25em] text-xs mb-3">{emp.role}</p>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl text-ink leading-[0.9] mb-2">{emp.name}</h1>
          <p className="text-ink-faint text-sm mb-6">{detail.fullName}</p>
          <p className="text-ink-muted text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {detail.tagline}
          </p>

          {/* Metrics strip */}
          <div className="inline-flex flex-wrap justify-center gap-6 sm:gap-10">
            {detail.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-black text-3xl sm:text-4xl text-ink">{m.value}</div>
                <div className="text-[10px] font-semibold text-ink-faint uppercase tracking-widest mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS BAR */}
      <section className="section-ink py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {detail.qualifications.map((q) => (
              <span key={q} className="px-4 py-2 text-sm font-semibold text-neon bg-white/5 border border-white/10 rounded-lg">{q}</span>
            ))}
            <span className="px-4 py-2 text-sm text-white/40 italic">Specialty: {detail.specialty}</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-ink mb-10 text-center">Skills & Expertise</h2>
          <div className="space-y-6">
            {detail.skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section-cream py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-black text-ink mb-12 text-center">What {emp.name} Does</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-light-200" />

            <div className="space-y-10">
              {detail.experience.map((exp, i) => (
                <div key={exp.area} className="flex gap-8 relative">
                  {/* Dot */}
                  <div className="relative shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white border-3 border-pop-red flex items-center justify-center z-10 relative">
                      <span className="font-black text-pop-red text-xs">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pb-2">
                    <h3 className="font-bold text-ink text-lg mb-1">{exp.area}</h3>
                    <p className="text-ink-muted leading-relaxed">{exp.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="section-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-ink mb-6">Ideal For</h2>
          <div className="comic-panel-static rounded-2xl p-10">
            <p className="text-ink-muted text-xl leading-relaxed">{detail.who}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-neon">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-black text-4xl sm:text-5xl text-black mb-4">Ready to Hire {emp.name}?</h2>
          <p className="text-black/60 mb-8 text-lg">{emp.name} activates in under 60 seconds. No setup required.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-dark text-lg px-12 py-5">Start Free Trial</a>
        </div>
      </section>

      {/* REST OF TEAM */}
      <section className="py-20 section-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink mb-10 text-center">Meet the Rest of the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {employees.filter((e) => e.name.toLowerCase() !== slug).map((e) => (
              <Link key={e.name} to={`/employee/${e.name.toLowerCase()}`} className="comic-panel-subtle rounded-2xl overflow-hidden group text-center">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={e.image} alt={e.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-ink text-sm">{e.name}</h3>
                  <p className="text-pop-red text-[10px] font-semibold uppercase tracking-wide">{e.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
