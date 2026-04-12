import { useParams, Link } from 'react-router-dom'
import { employees } from '../data/employees'

const detailed = {
  cecil: {
    fullName: 'Cecil Hartington-Smythe',
    tagline: 'Your right hand. I manage your calendar, emails, and daily operations so you can focus on growing your business.',
    qualifications: ['HubSpot Email Marketing', 'Google Workspace'],
    specialty: 'Email, calendar, MailerLite campaigns, Inbox Zero',
    experience: [
      { area: 'Inbox Management', detail: 'Triages every email — flags urgent, drafts replies, archives noise. Achieves Inbox Zero daily.' },
      { area: 'Calendar Control', detail: 'Schedules meetings, blocks focus time, resolves conflicts. Your calendar serves you, not the other way around.' },
      { area: 'Daily Briefings', detail: 'Delivers morning briefings with top priorities, deadlines, and decisions that need your attention.' },
      { area: 'Email Campaigns', detail: 'Runs MailerLite newsletters, sequences, and automations. Writes, schedules, and optimizes send times.' },
      { area: 'Meeting Management', detail: 'Takes meeting notes, extracts action items, follows up with attendees. Nothing slips through.' },
      { area: 'Team Coordination', detail: 'Routes tasks across your AI team — delegates to the right employee, tracks completion.' },
    ],
    metrics: [
      { label: 'Inbox Zero', value: 'Daily' },
      { label: 'Response Draft Time', value: '<30s' },
      { label: 'Task Routing', value: '11 employees' },
      { label: 'Briefing Schedule', value: 'Every morning' },
    ],
    who: 'Business owners drowning in 2+ hours of email and admin daily. If your calendar runs your life, Cecil fixes that.',
  },
  flora: {
    fullName: 'Flora Beaumont',
    tagline: 'Your social media powerhouse. I create scroll-stopping content across every platform, every day.',
    qualifications: ['Content Strategy Frameworks', 'YouTube Analytics'],
    specialty: '10 posts/day across 5 platforms, competitor analysis, video',
    experience: [
      { area: 'Multi-Platform Content', detail: 'Creates 10+ posts/day across TikTok, Instagram, LinkedIn, Facebook, and X. Platform-native formats.' },
      { area: 'Video Production', detail: 'Scripts, storyboards, and produces video content optimized for each platform\'s algorithm.' },
      { area: 'Content Calendars', detail: 'Builds weekly/monthly calendars with optimal posting times, themes, and campaign tie-ins.' },
      { area: 'Competitor Analysis', detail: 'Tracks competitor content, identifies gaps, and spots trending formats before they peak.' },
      { area: 'Engagement Strategy', detail: 'Writes hooks, captions, and hashtag strategies that drive comments, shares, and saves.' },
      { area: 'Cross-Team Sync', detail: 'Reviews with Poppi on strategy, Mabel on SEO repurposing, Raymond on ad creative.' },
    ],
    metrics: [
      { label: 'Daily Output', value: '10+ posts' },
      { label: 'Platforms', value: '6 channels' },
      { label: 'Content Types', value: 'Video, carousel, story, reel, thread' },
      { label: 'Trend Response', value: 'Same day' },
    ],
    who: 'Businesses whose social media hasn\'t been updated in weeks. Flora runs it 24/7 so you never miss a trend.',
  },
  basil: {
    fullName: 'Basil Thornbury',
    tagline: 'Your customer support lead. I handle every query with patience and precision — 24/7 support that makes people smile.',
    qualifications: ['HubSpot Service Hub', 'CCXP Certified'],
    specialty: 'Support, churn detection, demo booking, HEARD method',
    experience: [
      { area: 'Instant Response', detail: 'Handles customer queries via chat, email, and tickets. No customer waits more than minutes.' },
      { area: 'HEARD Method', detail: 'Every interaction follows Hear, Empathise, Apologise, Resolve, Diagnose — turns complaints into loyalty.' },
      { area: 'Churn Detection', detail: 'Identifies at-risk customers early through sentiment analysis and engagement patterns.' },
      { area: 'Demo Booking', detail: 'Qualifies interested prospects, books discovery calls, and routes hot leads to Hugh.' },
      { area: 'Knowledge Base', detail: 'Builds and maintains self-service docs so common questions get instant answers.' },
      { area: 'Escalation Management', detail: 'Routes complex issues with full context — you get the summary, not the mess.' },
    ],
    metrics: [
      { label: 'Response Time', value: '<2 min' },
      { label: 'Availability', value: '24/7' },
      { label: 'Resolution Rate', value: '95%+' },
      { label: 'CSAT Target', value: '4.8/5' },
    ],
    who: 'Businesses losing customers to slow support. If unanswered queries pile up, Basil fixes it today.',
  },
  hugh: {
    fullName: 'Hugh Ashworth-Pemberton',
    tagline: 'Your sales machine. I discover leads, run outreach, manage pipelines, and close deals.',
    qualifications: ['HubSpot Inbound Sales', 'Sales Enablement', 'Sandler Training'],
    specialty: '7-source lead discovery, SPIN/Challenger/MEDDIC, global prospecting',
    experience: [
      { area: '7-Source Lead Discovery', detail: 'Finds prospects from directories, social, intent signals, referrals, events, content, and partnerships.' },
      { area: 'Sales Methodology', detail: 'Applies SPIN Selling, Challenger Sale, and MEDDIC frameworks to qualify and close at every stage.' },
      { area: 'Outreach Sequences', detail: 'Builds multi-touch sequences — cold emails, follow-ups, nurture campaigns across time zones.' },
      { area: 'Pipeline Management', detail: 'Moves deals through CRM stages, flags stalled opportunities, forecasts revenue.' },
      { area: 'Global Prospecting', detail: 'Prospects across markets and time zones with localized messaging and cultural awareness.' },
      { area: 'Proposals & Closing', detail: 'Creates pitch decks, proposals, and follow-up materials. Reviews contracts with Rupert.' },
    ],
    metrics: [
      { label: 'Lead Sources', value: '7 channels' },
      { label: 'Industry Mappings', value: '33 sectors' },
      { label: 'Frameworks', value: 'SPIN, MEDDIC, Challenger' },
      { label: 'Prospecting', value: 'Global' },
    ],
    who: 'Businesses with leads falling through cracks. Hugh turns interested prospects into paying customers.',
  },
  mabel: {
    fullName: 'Mabel Cavendish',
    tagline: 'Your SEO content engine. I write articles that rank on Google and convert visitors into customers.',
    qualifications: ['Google SEO', 'HubSpot SEO', 'HubSpot Content Marketing', 'Semrush (15+ certs)', 'Ahrefs Academy'],
    specialty: 'Blog SEO, AEO, GEO, hub-and-spoke, Search Console',
    experience: [
      { area: 'SEO Architecture', detail: 'Builds hub-and-spoke content structures that establish topical authority and dominate SERPs.' },
      { area: 'Keyword Research', detail: 'Analyzes search intent, keyword difficulty, and SERP features to find high-value opportunities.' },
      { area: 'AEO & GEO', detail: 'Implements Answer Engine Optimization for featured snippets and Generative Engine Optimization for AI search.' },
      { area: 'Search Console', detail: 'Monitors rankings, fixes indexing issues, tracks CTR, and identifies content decay.' },
      { area: 'Long-Form Content', detail: 'Writes comprehensive, research-backed articles optimized for both search engines and humans.' },
      { area: 'Content Strategy', detail: 'Creates editorial calendars aligned with business goals and seasonal opportunities.' },
    ],
    metrics: [
      { label: 'Certifications', value: '15+ Semrush' },
      { label: 'SEO Types', value: 'Traditional, AEO, GEO' },
      { label: 'Architecture', value: 'Hub-and-spoke' },
      { label: 'Tools', value: 'Search Console, Ahrefs, Semrush' },
    ],
    who: 'Businesses invisible on Google. If competitors outrank you, Mabel changes that with content that performs.',
  },
  rupert: {
    fullName: 'Rupert Blackwell-Forsyth',
    tagline: 'Your legal safety net. I review contracts, ensure compliance, and protect your business — without the hourly rate.',
    qualifications: ['UK GDPR', 'Consumer Rights Act', 'EU AI Act', 'PECR'],
    specialty: 'Contracts, compliance, IP, advertising law',
    experience: [
      { area: 'Contract Review', detail: 'Flags risky clauses, suggests amendments, and ensures every agreement protects your interests.' },
      { area: 'GDPR & Data Protection', detail: 'Ensures full compliance with UK GDPR, PECR, and international data protection regulations.' },
      { area: 'EU AI Act', detail: 'Monitors and advises on AI compliance requirements as regulations evolve.' },
      { area: 'Policies & Terms', detail: 'Drafts terms of service, privacy policies, cookie policies, and refund policies.' },
      { area: 'IP & Advertising Law', detail: 'Protects intellectual property and ensures marketing materials comply with ASA regulations.' },
      { area: 'Legal Databases', detail: 'Accesses gov.uk, ICO, legislation.gov.uk, ASA, and Companies House for up-to-date legal intelligence.' },
    ],
    metrics: [
      { label: 'Jurisdictions', value: 'UK & EU' },
      { label: 'Databases', value: '5 legal sources' },
      { label: 'Compliance', value: 'GDPR, PECR, AI Act' },
      { label: 'Auto-Research', value: 'Weekly' },
    ],
    who: 'Businesses running without legal review. If you sign contracts unread or lack proper terms, Rupert protects you.',
  },
  poppi: {
    fullName: 'Poppi Hartwell',
    tagline: 'Your marketing brain. I build strategies, orchestrate campaigns, and manage your entire AI team.',
    qualifications: ['AARRR Funnels', 'ICP Frameworks', 'Campaign Orchestration'],
    specialty: 'Team management, strategy, competitive intelligence',
    experience: [
      { area: 'AARRR Funnels', detail: 'Builds Acquisition, Activation, Retention, Referral, Revenue funnels that systematically grow your business.' },
      { area: 'ICP Development', detail: 'Creates Ideal Customer Profiles and aligns every marketing touchpoint to target them.' },
      { area: 'Campaign Orchestration', detail: 'Plans and coordinates multi-channel campaigns across social, email, content, and paid ads.' },
      { area: 'Team Management', detail: 'Coordinates Flora, Mabel, Raymond, and Hugh — ensures every team member pulls in the same direction.' },
      { area: 'Competitive Intelligence', detail: 'Monitors competitor positioning, messaging, and campaigns. Identifies gaps to exploit.' },
      { area: 'Performance Optimization', detail: 'Analyzes campaign performance, runs experiments, and continuously improves conversion rates.' },
    ],
    metrics: [
      { label: 'Framework', value: 'AARRR + ICP' },
      { label: 'Team Managed', value: '4 employees' },
      { label: 'Channels', value: 'Social, email, content, ads' },
      { label: 'Auto-Collaboration', value: '15+ workflows' },
    ],
    who: 'Businesses doing random marketing. If you post without a plan and spend without strategy, Poppi brings order.',
  },
  ava: {
    fullName: 'Ava Sinclair',
    tagline: 'Your data translator. I turn numbers into decisions with dashboards, reports, and predictive insights.',
    qualifications: ['Google Analytics IQ (GAIQ)'],
    specialty: 'GA4 live access, attribution, cohort analysis, predictive audiences',
    experience: [
      { area: 'GA4 Live Access', detail: 'Connects directly to your Google Analytics 4 for real-time data monitoring and custom reports.' },
      { area: 'Attribution Modelling', detail: 'Builds attribution models so you know exactly which channels drive revenue — not just traffic.' },
      { area: 'Cohort Analysis', detail: 'Analyzes customer behaviour over time to identify patterns in retention, spend, and engagement.' },
      { area: 'Predictive Audiences', detail: 'Creates AI-powered audience segments that predict which users will convert or churn.' },
      { area: 'Anomaly Detection', detail: 'Monitors traffic and conversion patterns — alerts you to problems before they become crises.' },
      { area: 'Executive Dashboards', detail: 'Builds visual dashboards tracking the KPIs that actually matter for your business.' },
    ],
    metrics: [
      { label: 'Integrations', value: 'GA4, YouTube, Search Console' },
      { label: 'Monitoring', value: 'Real-time' },
      { label: 'Analysis Types', value: 'Attribution, cohort, predictive' },
      { label: 'Auto-Research', value: 'Weekly benchmarks' },
    ],
    who: 'Businesses flying blind on numbers. If you make gut-feel decisions instead of data-driven ones, Ava gives clarity.',
  },
  raymond: {
    fullName: 'Raymond Blake',
    tagline: 'Your ad spend guardian. I manage Google, Meta, and TikTok ads for maximum ROAS, minimum waste.',
    qualifications: ['All 9 Google Ads Certifications', 'Meta Ads Certified'],
    specialty: 'Google Search/Display/Shopping/PMax, 5-pillar architecture',
    experience: [
      { area: 'Google Ads Mastery', detail: 'Manages Search, Display, Shopping, Video, Apps, and Performance Max campaigns. Holds all 9 certifications.' },
      { area: '5-Pillar Architecture', detail: 'Builds campaigns using a proprietary 5-pillar structure: targeting, creative, bidding, landing pages, measurement.' },
      { area: 'Meta Advertising', detail: 'Creates and optimizes Facebook and Instagram campaigns across all placement types.' },
      { area: 'Budget Optimization', detail: 'Allocates spend across channels and campaigns for maximum return per pound.' },
      { area: 'A/B Testing', detail: 'Tests copy, creative, audiences, bidding strategies, and landing pages continuously.' },
      { area: 'Compliance', detail: 'Cross-reviews with Rupert to ensure all ads meet ASA and platform advertising policies.' },
    ],
    metrics: [
      { label: 'Google Certs', value: 'All 9' },
      { label: 'Platforms', value: 'Google, Meta, TikTok' },
      { label: 'Campaign Types', value: 'Search, Display, Shopping, PMax, Video' },
      { label: 'Architecture', value: '5-pillar system' },
    ],
    who: 'Businesses wasting ad spend. If your ROAS is terrible (or you don\'t know what it is), Raymond fixes it.',
  },
  bowie: {
    fullName: 'Bowie Fairfax',
    tagline: 'Your intelligence analyst. I dig into markets, competitors, and trends to give you an unfair advantage.',
    qualifications: ['Oxford MPhil', 'Cambridge MBA', 'PESTLE Analysis', "Porter's Five Forces"],
    specialty: 'Market research, TAM/SAM/SOM, weekly intel scans',
    experience: [
      { area: 'Competitor Intelligence', detail: 'Deep analysis using Porter\'s Five Forces — pricing, features, positioning, vulnerabilities, market moves.' },
      { area: 'Market Sizing', detail: 'Calculates TAM (Total Addressable), SAM (Serviceable), and SOM (Obtainable) markets for strategic planning.' },
      { area: 'Weekly Intel Scans', detail: 'Runs automated competitive landscape scans every Monday and Wednesday. You know before they announce.' },
      { area: 'PESTLE Analysis', detail: 'Maps Political, Economic, Social, Technological, Legal, and Environmental factors affecting your market.' },
      { area: 'Industry Reports', detail: 'Creates comprehensive reports with actionable recommendations — not just data, but what to do with it.' },
      { area: 'Opportunity Identification', detail: 'Spots market gaps, emerging trends, and positioning opportunities before competitors see them.' },
    ],
    metrics: [
      { label: 'Education', value: 'Oxford + Cambridge' },
      { label: 'Auto-Research', value: '2x per week' },
      { label: 'Frameworks', value: 'PESTLE, Porter\'s, TAM/SAM/SOM' },
      { label: 'Intel Coverage', value: 'Global markets' },
    ],
    who: 'Businesses competing blind. If you don\'t know competitor pricing, market trends, or where opportunity lies, Bowie changes that.',
  },
  angela: {
    fullName: 'Angela Whitworth-Sterling',
    tagline: 'Your CFO. I manage books, budgets, tax, and financial strategy with crystal-clear visibility into every pound.',
    qualifications: ['ACA', 'ACCA', 'CIMA Strategic', 'Xero Advisor', 'QuickBooks ProAdvisor Platinum', 'Sage 50'],
    specialty: 'UK tax (CT, VAT, R&D credits), Stripe, QuickBooks, MTD',
    experience: [
      { area: 'UK Tax Management', detail: 'Handles Corporation Tax, VAT returns, and R&D tax credit claims. Maximizes allowances, minimizes liability.' },
      { area: 'Financial Tools', detail: 'Integrates with Stripe, QuickBooks, Xero, and Sage for real-time financial data across all accounts.' },
      { area: 'MTD Compliance', detail: 'Ensures Making Tax Digital compliance — digital record-keeping and quarterly HMRC submissions.' },
      { area: 'Cash Flow Management', detail: 'Monitors runway, projects cash flow, and alerts you before problems hit. No surprises.' },
      { area: 'Financial Reporting', detail: 'Generates P&L, balance sheets, expense breakdowns, and board-ready financial summaries.' },
      { area: 'Strategic Finance', detail: 'Advises on pricing strategy, cost optimization, investment timing, and growth financing.' },
    ],
    metrics: [
      { label: 'Qualifications', value: 'ACA, ACCA, CIMA' },
      { label: 'Tools', value: 'Stripe, QuickBooks, Xero, Sage' },
      { label: 'Tax', value: 'CT, VAT, R&D credits' },
      { label: 'Auto-Research', value: 'Weekly tax updates' },
    ],
    who: 'Businesses that don\'t know if they\'re profitable. If finances live in a neglected spreadsheet, Angela brings clarity.',
  },
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
      {/* CV Header — like an elite resume */}
      <section className="section-cream">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="comic-panel-static rounded-2xl overflow-hidden">
                <img src={emp.image} alt={emp.name} className="w-full aspect-[3/4] object-cover" />
              </div>
            </div>

            {/* Header info */}
            <div className="lg:col-span-2">
              <p className="text-pop-red font-semibold uppercase tracking-[0.2em] text-xs mb-2">{emp.role}</p>
              <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl text-ink leading-[0.9] mb-1">
                {emp.name}
              </h1>
              <p className="text-ink-faint text-base mb-6">{detail.fullName}</p>
              <p className="text-ink-muted text-lg leading-relaxed mb-8 max-w-xl">
                {detail.tagline}
              </p>

              {/* Key metrics — like a CV summary bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {detail.metrics.map((m) => (
                  <div key={m.label} className="bg-white border-2 border-light-200 rounded-xl p-4 text-center">
                    <div className="font-black text-lg text-ink">{m.value}</div>
                    <div className="text-[10px] font-semibold text-ink-faint uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Qualifications badges */}
              <div className="mb-6">
                <p className="text-[10px] font-semibold text-ink-faint uppercase tracking-widest mb-3">Qualifications</p>
                <div className="flex flex-wrap gap-2">
                  {detail.qualifications.map((q) => (
                    <span key={q} className="px-3 py-1.5 text-xs font-bold bg-ink text-white rounded-lg">{q}</span>
                  ))}
                </div>
              </div>

              {/* Specialty */}
              <div>
                <p className="text-[10px] font-semibold text-ink-faint uppercase tracking-widest mb-2">Specialty</p>
                <p className="text-ink-muted text-sm">{detail.specialty}</p>
              </div>

              <div className="mt-8">
                <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon">
                  Hire {emp.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience — CV style */}
      <section className="section-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink mb-10 flex items-center gap-3">
            <span className="w-10 h-1 bg-pop-red rounded-full" />
            Experience & Capabilities
          </h2>

          <div className="space-y-0">
            {detail.experience.map((exp, i) => (
              <div key={exp.area} className={`flex gap-6 py-6 ${i < detail.experience.length - 1 ? 'border-b-2 border-light-200' : ''}`}>
                <div className="w-48 shrink-0">
                  <h3 className="font-bold text-ink text-sm">{exp.area}</h3>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed">{exp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills bar */}
      <section className="section-cream py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-pop-blue rounded-full" />
            Core Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {emp.skills.map((s) => (
              <span key={s} className="px-5 py-2.5 text-sm font-semibold text-ink bg-white border-2 border-light-200 rounded-xl">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="section-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink mb-6 flex items-center gap-3">
            <span className="w-10 h-1 bg-pop-orange rounded-full" />
            Ideal For
          </h2>
          <div className="comic-panel-static rounded-2xl p-8">
            <p className="text-ink-muted text-lg leading-relaxed">{detail.who}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-neon">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-black text-3xl sm:text-4xl text-black mb-4">
            Ready to Hire {emp.name}?
          </h2>
          <p className="text-black/60 mb-8 text-lg">{emp.name} activates in under 60 seconds. No setup required.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-dark text-lg px-12 py-5">
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Rest of team */}
      <section className="py-16 section-white">
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
