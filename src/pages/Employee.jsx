import { useParams, Link } from 'react-router-dom'
import { employees } from '../data/employees'

const detailed = {
  cecil: {
    fullName: 'Cecil Hartington-Smythe',
    tagline: 'Your right hand. I manage your calendar, emails, and daily operations so you can focus on growing your business.',
    qualifications: ['HubSpot Email Marketing', 'Google Workspace'],
    specialty: 'Email, calendar, MailerLite campaigns, Inbox Zero',
    skills: [
      { name: 'Email Management', level: 98 },
      { name: 'Calendar Optimization', level: 95 },
      { name: 'Task Prioritization', level: 92 },
      { name: 'Email Campaigns', level: 88 },
      { name: 'Team Coordination', level: 90 },
    ],
    experience: [
      { area: 'Inbox Management', detail: 'Triages every email — flags urgent, drafts replies, archives noise. Achieves Inbox Zero daily.' },
      { area: 'Calendar Control', detail: 'Schedules meetings, blocks focus time, resolves conflicts. Your calendar serves you.' },
      { area: 'Daily Briefings', detail: 'Morning briefings with top priorities, deadlines, and decisions that need your attention.' },
      { area: 'Email Campaigns', detail: 'Runs MailerLite newsletters, sequences, and automations. Writes, schedules, optimizes.' },
      { area: 'Meeting Management', detail: 'Takes notes, extracts action items, follows up with attendees. Nothing slips through.' },
      { area: 'Team Coordination', detail: 'Routes tasks across 11 employees — delegates to the right person, tracks completion.' },
    ],
    metrics: [
      { value: 'Daily', label: 'Inbox Zero' },
      { value: '<30s', label: 'Draft Time' },
      { value: '11', label: 'Employees Routed' },
      { value: 'AM', label: 'Briefing Schedule' },
    ],
    who: 'Business owners drowning in 2+ hours of email and admin daily.',
  },
  flora: {
    fullName: 'Flora Beaumont',
    tagline: 'Your social media powerhouse. Scroll-stopping content across every platform, every day.',
    qualifications: ['Content Strategy Frameworks', 'YouTube Analytics'],
    specialty: '10 posts/day across 5 platforms, competitor analysis, video',
    skills: [
      { name: 'Content Creation', level: 97 },
      { name: 'Video Production', level: 90 },
      { name: 'Trend Analysis', level: 95 },
      { name: 'Community Management', level: 88 },
      { name: 'Platform Strategy', level: 93 },
    ],
    experience: [
      { area: 'Multi-Platform Content', detail: '10+ posts/day across TikTok, Instagram, LinkedIn, Facebook, X. Platform-native formats.' },
      { area: 'Video Production', detail: 'Scripts, storyboards, and produces video optimized for each platform\'s algorithm.' },
      { area: 'Content Calendars', detail: 'Weekly/monthly calendars with optimal posting times, themes, and campaign tie-ins.' },
      { area: 'Competitor Analysis', detail: 'Tracks competitor content, identifies gaps, spots trending formats before they peak.' },
      { area: 'Engagement Strategy', detail: 'Hooks, captions, hashtags that drive comments, shares, and saves.' },
      { area: 'Cross-Team Sync', detail: 'Reviews with Poppi on strategy, Mabel on SEO repurposing, Raymond on ad creative.' },
    ],
    metrics: [
      { value: '10+', label: 'Daily Posts' },
      { value: '6', label: 'Platforms' },
      { value: '5', label: 'Content Types' },
      { value: 'Same Day', label: 'Trend Response' },
    ],
    who: 'Businesses whose social media hasn\'t been updated in weeks.',
  },
  basil: {
    fullName: 'Basil Thornbury',
    tagline: 'Your customer support lead. Every query handled with patience and precision — 24/7.',
    qualifications: ['HubSpot Service Hub', 'CCXP Certified'],
    specialty: 'Support, churn detection, demo booking, HEARD method',
    skills: [
      { name: 'Ticket Resolution', level: 96 },
      { name: 'Live Chat', level: 94 },
      { name: 'Churn Detection', level: 90 },
      { name: 'Knowledge Base', level: 92 },
      { name: 'CSAT Optimization', level: 88 },
    ],
    experience: [
      { area: 'Instant Response', detail: 'Handles queries via chat, email, and tickets. No customer waits more than minutes.' },
      { area: 'HEARD Method', detail: 'Hear, Empathise, Apologise, Resolve, Diagnose — turns complaints into loyalty.' },
      { area: 'Churn Detection', detail: 'Identifies at-risk customers through sentiment analysis and engagement patterns.' },
      { area: 'Demo Booking', detail: 'Qualifies prospects, books discovery calls, routes hot leads to Hugh.' },
      { area: 'Knowledge Base', detail: 'Builds self-service docs so common questions get instant answers.' },
      { area: 'Escalation', detail: 'Routes complex issues with full context — you get the summary, not the mess.' },
    ],
    metrics: [
      { value: '<2m', label: 'Response Time' },
      { value: '24/7', label: 'Availability' },
      { value: '95%+', label: 'Resolution' },
      { value: '4.8/5', label: 'CSAT Target' },
    ],
    who: 'Businesses losing customers to slow or inconsistent support.',
  },
  hugh: {
    fullName: 'Hugh Ashworth-Pemberton',
    tagline: 'Your sales machine. I discover leads, run outreach, manage pipelines, and close deals.',
    qualifications: ['HubSpot Inbound Sales', 'Sales Enablement', 'Sandler Training'],
    specialty: '7-source lead discovery, SPIN/Challenger/MEDDIC, global prospecting',
    skills: [
      { name: 'Lead Discovery', level: 97 },
      { name: 'Pipeline Management', level: 95 },
      { name: 'Outreach Sequences', level: 93 },
      { name: 'Sales Methodology', level: 96 },
      { name: 'Global Prospecting', level: 88 },
    ],
    experience: [
      { area: '7-Source Discovery', detail: 'Finds leads from directories, social, intent signals, referrals, events, content, partnerships.' },
      { area: 'Sales Frameworks', detail: 'SPIN Selling, Challenger Sale, and MEDDIC to qualify and close at every stage.' },
      { area: 'Outreach Sequences', detail: 'Multi-touch cold emails, follow-ups, nurture campaigns across time zones.' },
      { area: 'Pipeline Management', detail: 'Moves deals through CRM stages, flags stalled opportunities, forecasts revenue.' },
      { area: 'Global Prospecting', detail: 'Prospects across markets with localized messaging and cultural awareness.' },
      { area: 'Proposals', detail: 'Creates pitch decks, proposals, follow-up materials. Reviews contracts with Rupert.' },
    ],
    metrics: [
      { value: '7', label: 'Lead Sources' },
      { value: '33', label: 'Industry Maps' },
      { value: '3', label: 'Frameworks' },
      { value: 'Global', label: 'Reach' },
    ],
    who: 'Businesses with leads falling through the cracks.',
  },
  mabel: {
    fullName: 'Mabel Cavendish',
    tagline: 'Your SEO content engine. Articles that rank on Google and convert visitors into customers.',
    qualifications: ['Google SEO', 'HubSpot SEO', 'HubSpot Content Marketing', 'Semrush (15+ certs)', 'Ahrefs Academy'],
    specialty: 'Blog SEO, AEO, GEO, hub-and-spoke, Search Console',
    skills: [
      { name: 'SEO Writing', level: 98 },
      { name: 'Keyword Research', level: 96 },
      { name: 'Content Architecture', level: 94 },
      { name: 'AEO & GEO', level: 90 },
      { name: 'Search Console', level: 92 },
    ],
    experience: [
      { area: 'SEO Architecture', detail: 'Hub-and-spoke content structures that establish topical authority and dominate SERPs.' },
      { area: 'Keyword Research', detail: 'Analyzes intent, difficulty, SERP features to find high-value opportunities.' },
      { area: 'AEO & GEO', detail: 'Answer Engine Optimization for snippets. Generative Engine Optimization for AI search.' },
      { area: 'Search Console', detail: 'Monitors rankings, fixes indexing, tracks CTR, identifies content decay.' },
      { area: 'Long-Form Content', detail: 'Comprehensive, research-backed articles optimized for engines and humans.' },
      { area: 'Content Strategy', detail: 'Editorial calendars aligned with business goals and seasonal opportunities.' },
    ],
    metrics: [
      { value: '15+', label: 'Semrush Certs' },
      { value: '3', label: 'SEO Types' },
      { value: 'H&S', label: 'Architecture' },
      { value: 'Live', label: 'Search Console' },
    ],
    who: 'Businesses invisible on Google. Mabel makes you rank.',
  },
  rupert: {
    fullName: 'Rupert Blackwell-Forsyth',
    tagline: 'Your legal safety net. Contracts, compliance, and protection — without the hourly rate.',
    qualifications: ['UK GDPR', 'Consumer Rights Act', 'EU AI Act', 'PECR'],
    specialty: 'Contracts, compliance, IP, advertising law',
    skills: [
      { name: 'Contract Review', level: 96 },
      { name: 'GDPR Compliance', level: 98 },
      { name: 'IP Protection', level: 90 },
      { name: 'Advertising Law', level: 88 },
      { name: 'Risk Assessment', level: 94 },
    ],
    experience: [
      { area: 'Contract Review', detail: 'Flags risky clauses, suggests amendments, ensures every agreement protects you.' },
      { area: 'GDPR & Data', detail: 'Full UK GDPR, PECR, and international data protection compliance.' },
      { area: 'EU AI Act', detail: 'Monitors and advises on AI compliance as regulations evolve.' },
      { area: 'Policies & Terms', detail: 'Drafts ToS, privacy policies, cookie policies, refund policies.' },
      { area: 'IP & Ad Law', detail: 'IP protection and ASA advertising compliance for marketing materials.' },
      { area: 'Legal Databases', detail: 'Accesses gov.uk, ICO, legislation.gov.uk, ASA, Companies House.' },
    ],
    metrics: [
      { value: 'UK & EU', label: 'Jurisdictions' },
      { value: '5', label: 'Legal Sources' },
      { value: '4', label: 'Compliance Acts' },
      { value: 'Weekly', label: 'Auto-Research' },
    ],
    who: 'Businesses operating without proper legal review.',
  },
  poppi: {
    fullName: 'Poppi Hartwell',
    tagline: 'Your marketing brain. Strategy, campaigns, and team coordination on autopilot.',
    qualifications: ['AARRR Funnels', 'ICP Frameworks', 'Campaign Orchestration'],
    specialty: 'Team management, strategy, competitive intelligence',
    skills: [
      { name: 'Campaign Strategy', level: 97 },
      { name: 'Funnel Design', level: 95 },
      { name: 'Team Management', level: 96 },
      { name: 'Competitive Intel', level: 90 },
      { name: 'Brand Positioning', level: 92 },
    ],
    experience: [
      { area: 'AARRR Funnels', detail: 'Acquisition, Activation, Retention, Referral, Revenue — systematic growth.' },
      { area: 'ICP Development', detail: 'Ideal Customer Profiles that align every marketing touchpoint.' },
      { area: 'Campaign Orchestration', detail: 'Multi-channel campaigns across social, email, content, and paid ads.' },
      { area: 'Team Management', detail: 'Coordinates Flora, Mabel, Raymond, and Hugh on cross-channel efforts.' },
      { area: 'Competitive Intel', detail: 'Monitors competitor positioning, messaging, campaigns. Identifies gaps.' },
      { area: 'Performance', detail: 'Analyzes results, runs experiments, continuously improves conversion.' },
    ],
    metrics: [
      { value: 'AARRR', label: 'Framework' },
      { value: '4', label: 'Team Managed' },
      { value: '15+', label: 'Auto-Workflows' },
      { value: 'Full', label: 'Channel Coverage' },
    ],
    who: 'Businesses doing random marketing without a strategy.',
  },
  ava: {
    fullName: 'Ava Sinclair',
    tagline: 'Your data translator. Numbers become decisions with dashboards, reports, and predictions.',
    qualifications: ['Google Analytics IQ (GAIQ)'],
    specialty: 'GA4 live access, attribution, cohort analysis, predictive audiences',
    skills: [
      { name: 'GA4 & Analytics', level: 98 },
      { name: 'Attribution Modelling', level: 94 },
      { name: 'Cohort Analysis', level: 92 },
      { name: 'Predictive Analytics', level: 90 },
      { name: 'Dashboard Design', level: 96 },
    ],
    experience: [
      { area: 'GA4 Live Access', detail: 'Direct Google Analytics 4 connection for real-time monitoring and custom reports.' },
      { area: 'Attribution', detail: 'Builds models showing which channels drive revenue — not just traffic.' },
      { area: 'Cohort Analysis', detail: 'Customer behaviour patterns over time — retention, spend, engagement.' },
      { area: 'Predictive Audiences', detail: 'AI-powered segments predicting who will convert or churn.' },
      { area: 'Anomaly Detection', detail: 'Monitors patterns, alerts you to problems before they become crises.' },
      { area: 'Dashboards', detail: 'Visual dashboards tracking KPIs that matter for your business.' },
    ],
    metrics: [
      { value: 'Live', label: 'GA4 Access' },
      { value: '3', label: 'Analysis Types' },
      { value: 'Real-time', label: 'Monitoring' },
      { value: 'Weekly', label: 'Benchmarks' },
    ],
    who: 'Businesses making gut-feel decisions instead of data-driven ones.',
  },
  raymond: {
    fullName: 'Raymond Blake',
    tagline: 'Your ad spend guardian. Google, Meta, TikTok — maximum ROAS, minimum waste.',
    qualifications: ['All 9 Google Ads Certifications', 'Meta Ads Certified'],
    specialty: 'Google Search/Display/Shopping/PMax, 5-pillar architecture',
    skills: [
      { name: 'Google Ads', level: 99 },
      { name: 'Meta Ads', level: 94 },
      { name: 'Budget Optimization', level: 96 },
      { name: 'A/B Testing', level: 92 },
      { name: 'Campaign Architecture', level: 95 },
    ],
    experience: [
      { area: 'Google Ads', detail: 'Search, Display, Shopping, Video, Apps, PMax. All 9 certifications.' },
      { area: '5-Pillar System', detail: 'Targeting, creative, bidding, landing pages, measurement — maximum ROAS.' },
      { area: 'Meta Advertising', detail: 'Facebook and Instagram campaigns across all placement types.' },
      { area: 'Budget Optimization', detail: 'Allocates spend across channels for maximum return per pound.' },
      { area: 'A/B Testing', detail: 'Tests copy, creative, audiences, bidding, landing pages continuously.' },
      { area: 'Compliance', detail: 'Cross-reviews with Rupert on ASA and platform ad policies.' },
    ],
    metrics: [
      { value: '9/9', label: 'Google Certs' },
      { value: '3', label: 'Ad Platforms' },
      { value: '5', label: 'Campaign Types' },
      { value: '5-Pillar', label: 'Architecture' },
    ],
    who: 'Businesses wasting ad spend with terrible (or unknown) ROAS.',
  },
  bowie: {
    fullName: 'Bowie Fairfax',
    tagline: 'Your intelligence analyst. Markets, competitors, trends — your unfair advantage.',
    qualifications: ['Oxford MPhil', 'Cambridge MBA', 'PESTLE Analysis', "Porter's Five Forces"],
    specialty: 'Market research, TAM/SAM/SOM, weekly intel scans',
    skills: [
      { name: 'Competitor Analysis', level: 98 },
      { name: 'Market Research', level: 96 },
      { name: 'Trend Forecasting', level: 92 },
      { name: 'Strategic Frameworks', level: 97 },
      { name: 'Data Mining', level: 90 },
    ],
    experience: [
      { area: 'Competitor Intel', detail: 'Porter\'s Five Forces — pricing, features, positioning, vulnerabilities.' },
      { area: 'Market Sizing', detail: 'TAM, SAM, SOM calculations for strategic planning.' },
      { area: 'Weekly Intel', detail: 'Automated competitive scans Monday and Wednesday. You know first.' },
      { area: 'PESTLE Analysis', detail: 'Political, Economic, Social, Technological, Legal, Environmental mapping.' },
      { area: 'Industry Reports', detail: 'Comprehensive reports with actionable recommendations.' },
      { area: 'Opportunity Spotting', detail: 'Market gaps, emerging trends, positioning opportunities.' },
    ],
    metrics: [
      { value: 'Oxbridge', label: 'Education' },
      { value: '2x/wk', label: 'Auto-Research' },
      { value: '4', label: 'Frameworks' },
      { value: 'Global', label: 'Coverage' },
    ],
    who: 'Businesses competing blind without competitor or market intelligence.',
  },
  angela: {
    fullName: 'Angela Whitworth-Sterling',
    tagline: 'Your CFO. Books, budgets, tax, and strategy with visibility into every pound.',
    qualifications: ['ACA', 'ACCA', 'CIMA Strategic', 'Xero Advisor', 'QuickBooks ProAdvisor Platinum', 'Sage 50'],
    specialty: 'UK tax (CT, VAT, R&D credits), Stripe, QuickBooks, MTD',
    skills: [
      { name: 'Financial Planning', level: 98 },
      { name: 'Tax Management', level: 96 },
      { name: 'Cash Flow Analysis', level: 95 },
      { name: 'Cloud Accounting', level: 94 },
      { name: 'Strategic Finance', level: 92 },
    ],
    experience: [
      { area: 'UK Tax', detail: 'Corporation Tax, VAT returns, R&D tax credit claims. Maximizes allowances.' },
      { area: 'Financial Tools', detail: 'Stripe, QuickBooks, Xero, Sage — real-time data across all accounts.' },
      { area: 'MTD Compliance', detail: 'Making Tax Digital — digital records and quarterly HMRC submissions.' },
      { area: 'Cash Flow', detail: 'Monitors runway, projects flow, alerts before problems hit.' },
      { area: 'Reporting', detail: 'P&L, balance sheets, expense breakdowns, board-ready summaries.' },
      { area: 'Strategic Finance', detail: 'Pricing strategy, cost optimization, investment timing, growth financing.' },
    ],
    metrics: [
      { value: '6', label: 'Qualifications' },
      { value: '4', label: 'Accounting Tools' },
      { value: '3', label: 'Tax Types' },
      { value: 'Weekly', label: 'Tax Updates' },
    ],
    who: 'Businesses that don\'t know if they\'re profitable.',
  },
}

function SkillBar({ name, level }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-ink w-44 shrink-0">{name}</span>
      <div className="flex-1 h-2.5 bg-light-200 rounded-full overflow-hidden">
        <div className="h-full bg-pop-red rounded-full" style={{ width: `${level}%` }} />
      </div>
      <span className="text-xs font-bold text-ink-faint w-10 text-right">{level}%</span>
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
    <div className="section-white">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* LEFT SIDEBAR — Photo + Key Info */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Photo */}
              <div className="rounded-2xl overflow-hidden border-3 border-ink shadow-[6px_6px_0_var(--color-ink)]">
                <img src={emp.image} alt={emp.name} className="w-full aspect-[3/4] object-cover" />
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {detail.metrics.map((m) => (
                  <div key={m.label} className="bg-cream rounded-xl p-4 text-center border border-light-200">
                    <div className="font-black text-2xl text-ink">{m.value}</div>
                    <div className="text-[10px] font-semibold text-ink-faint uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="text-[10px] font-bold text-ink-faint uppercase tracking-widest mb-3">Qualifications</h3>
                <div className="space-y-2">
                  {detail.qualifications.map((q) => (
                    <div key={q} className="flex items-center gap-2.5">
                      <div className="w-2 h-2 bg-pop-red rounded-full shrink-0" />
                      <span className="text-sm font-medium text-ink">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialty */}
              <div>
                <h3 className="text-[10px] font-bold text-ink-faint uppercase tracking-widest mb-2">Specialty</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{detail.specialty}</p>
              </div>

              {/* Hire CTA */}
              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon w-full text-center">
                Hire {emp.name}
              </a>
            </div>
          </aside>

          {/* RIGHT CONTENT — CV Body */}
          <main className="lg:col-span-8 space-y-16">
            {/* Name & Title */}
            <div>
              <p className="text-pop-red font-semibold uppercase tracking-[0.2em] text-xs mb-2">{emp.role}</p>
              <h1 className="font-black text-5xl sm:text-6xl text-ink leading-[0.9] mb-2">{emp.name}</h1>
              <p className="text-ink-faint mb-6">{detail.fullName}</p>
              <p className="text-ink-muted text-lg leading-relaxed max-w-2xl">
                {detail.tagline}
              </p>
            </div>

            {/* Skills with progress bars */}
            <div>
              <h2 className="text-xs font-bold text-ink-faint uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-pop-red" />
                Skills & Expertise
              </h2>
              <div className="space-y-4">
                {detail.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>

            {/* Experience timeline */}
            <div>
              <h2 className="text-xs font-bold text-ink-faint uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-pop-blue" />
                Experience & Capabilities
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-light-200" />

                <div className="space-y-8">
                  {detail.experience.map((exp) => (
                    <div key={exp.area} className="flex gap-6 relative">
                      {/* Timeline dot */}
                      <div className="w-4 h-4 rounded-full bg-pop-red border-3 border-white shrink-0 mt-1 z-10 shadow-sm" />
                      <div>
                        <h3 className="font-bold text-ink mb-1">{exp.area}</h3>
                        <p className="text-ink-muted text-sm leading-relaxed">{exp.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ideal For */}
            <div>
              <h2 className="text-xs font-bold text-ink-faint uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-pop-orange" />
                Ideal For
              </h2>
              <div className="bg-cream rounded-2xl p-8 border border-light-200">
                <p className="text-ink-muted text-lg leading-relaxed">{detail.who}</p>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 section-neon">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-black text-3xl sm:text-4xl text-black mb-4">Ready to Hire {emp.name}?</h2>
          <p className="text-black/60 mb-8 text-lg">{emp.name} activates in under 60 seconds. No setup required.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-dark text-lg px-12 py-5">Start Free Trial</a>
        </div>
      </section>

      {/* Rest of team */}
      <section className="py-16 section-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink mb-8 text-center">Meet the Rest of the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {employees.filter((e) => e.name.toLowerCase() !== slug).map((e) => (
              <Link key={e.name} to={`/employee/${e.name.toLowerCase()}`} className="comic-panel-subtle rounded-xl overflow-hidden group text-center">
                <div className="aspect-square overflow-hidden">
                  <img src={e.image} alt={e.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-ink text-sm">{e.name}</h3>
                  <p className="text-pop-red text-[10px] font-semibold uppercase">{e.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
