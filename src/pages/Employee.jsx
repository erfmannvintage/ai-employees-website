import { useParams, Link } from 'react-router-dom'
import { employees } from '../data/employees'

const detailed = {
  cecil: {
    fullName: 'Cecil Hartington-Smythe',
    tagline: "I manage your calendar, emails, task prioritization, and daily briefings — so you can focus on growing your business, not drowning in admin.",
    qualifications: ['HubSpot Email Marketing', 'Google Workspace'],
    specialty: 'Email, calendar, MailerLite campaigns, Inbox Zero',
    what: [
      "Triages your inbox every morning — flags urgent emails, drafts replies, archives noise",
      "Manages your calendar — schedules meetings, blocks focus time, resolves conflicts",
      "Creates daily briefings with your top priorities, deadlines, and what needs attention",
      "Runs MailerLite email campaigns — newsletters, sequences, automations",
      "Takes meeting notes, extracts action items, and follows up with attendees",
      "Achieves Inbox Zero daily — nothing slips through the cracks",
      "Coordinates across your AI team — routes tasks to the right employee",
    ],
    who: "Business owners who spend 2+ hours a day on email and admin. If your calendar runs your life instead of the other way around, Cecil fixes that.",
  },
  flora: {
    fullName: 'Flora Beaumont',
    tagline: "I craft scroll-stopping social media content across every platform. I know the algorithm and I speak fluent trending.",
    qualifications: ['Content Strategy Frameworks', 'YouTube Analytics'],
    specialty: '10 posts/day across 5 platforms, competitor analysis, video',
    what: [
      "Creates 10+ posts per day across 5 platforms — TikTok, Instagram, LinkedIn, Facebook, X",
      "Builds content calendars with optimal posting schedules for each platform",
      "Produces video content including scripting, editing guidance, and platform-native formats",
      "Runs competitor content analysis to identify gaps and opportunities",
      "Writes captions, hooks, and hashtag strategies that drive engagement",
      "Monitors trends and adapts your content strategy in real-time",
      "Cross-reviews with Poppi on strategy and Mabel on SEO repurposing",
    ],
    who: "Businesses whose social media hasn't been updated in weeks. If you know you should be posting but never find the time, Flora runs it 24/7.",
  },
  basil: {
    fullName: 'Basil Thornbury',
    tagline: "I handle every customer query with patience and precision. 24/7 support that actually makes people smile — and come back.",
    qualifications: ['HubSpot Service Hub', 'CCXP Certified'],
    specialty: 'Support, churn detection, demo booking, HEARD method',
    what: [
      "Responds to customer queries instantly via chat, email, and ticketing systems",
      "Uses the HEARD method (Hear, Empathise, Apologise, Resolve, Diagnose) for every interaction",
      "Detects churn signals early and flags at-risk customers before they leave",
      "Books demos and discovery calls for prospects — qualifies and routes to Hugh",
      "Builds and maintains your knowledge base so common questions get instant answers",
      "Escalates complex issues to you with full context — never drops the ball",
      "Cross-reviews with Rupert on any legal or compliance-sensitive responses",
    ],
    who: "Businesses losing customers because support is slow or inconsistent. If your inbox has unanswered queries from last week, Basil fixes that today.",
  },
  hugh: {
    fullName: 'Hugh Ashworth-Pemberton',
    tagline: "I turn leads into revenue. Pipeline management, outreach sequences, and closing strategies that actually convert.",
    qualifications: ['HubSpot Inbound Sales', 'Sales Enablement', 'Sandler Training'],
    specialty: '7-source lead discovery, SPIN/Challenger/MEDDIC, global prospecting',
    what: [
      "Discovers leads from 7 different sources — directories, social, intent signals, referrals, events, content, and partnerships",
      "Qualifies leads using SPIN Selling, Challenger Sale, and MEDDIC frameworks",
      "Builds and runs outreach sequences — cold emails, follow-ups, nurture campaigns",
      "Manages your CRM pipeline — moves deals through stages, flags stalled opportunities",
      "Runs global prospecting across time zones and markets",
      "Creates proposals, pitch decks, and follow-up materials",
      "Cross-reviews with Rupert on contracts and Poppi on positioning",
    ],
    who: "Businesses with leads falling through the cracks. If you've got interested prospects but no time to follow up, Hugh turns them into paying customers.",
  },
  mabel: {
    fullName: 'Mabel Cavendish',
    tagline: "I write SEO-optimized blog content that ranks on Google and converts visitors into customers. Every piece is researched, structured, and built to perform.",
    qualifications: ['Google SEO', 'HubSpot SEO', 'HubSpot Content Marketing', 'Semrush (15+ certs)', 'Ahrefs Academy'],
    specialty: 'Blog SEO, AEO, GEO, hub-and-spoke, Search Console',
    what: [
      "Writes SEO-optimized articles using hub-and-spoke content architecture",
      "Researches keywords, search intent, and SERP features to find high-value opportunities",
      "Implements Answer Engine Optimization (AEO) for featured snippets and AI overviews",
      "Implements Generative Engine Optimization (GEO) for AI search results",
      "Manages Google Search Console — monitors rankings, fixes indexing issues, tracks performance",
      "Creates content calendars aligned with your marketing strategy",
      "Cross-reviews with Poppi on strategy and Flora on social repurposing",
    ],
    who: "Businesses that know they need a blog but never write. If your competitors are ranking above you on Google, Mabel changes that.",
  },
  rupert: {
    fullName: 'Rupert Blackwell-Forsyth',
    tagline: "I review contracts, draft terms, and keep your business compliant. Your always-on legal safety net — without the hourly rate.",
    qualifications: ['UK GDPR', 'Consumer Rights Act', 'EU AI Act', 'PECR'],
    specialty: 'Contracts, compliance, IP, advertising law',
    what: [
      "Reviews contracts and agreements — flags risky clauses, suggests amendments",
      "Drafts terms of service, privacy policies, and refund policies",
      "Ensures compliance with UK GDPR, Consumer Rights Act, and PECR regulations",
      "Monitors EU AI Act requirements and advises on AI compliance",
      "Handles intellectual property protection and advertising law compliance",
      "Assesses legal risk on business decisions before you commit",
      "Cross-reviews with Poppi on marketing compliance and Angela on financial regulations",
    ],
    who: "Businesses operating without proper legal review. If you've been signing contracts without reading them or running without proper terms, Rupert protects you.",
  },
  poppi: {
    fullName: 'Poppi Hartwell',
    tagline: "I build marketing strategies that move needles. Campaign planning, funnel optimization, and growth tactics — all on autopilot.",
    qualifications: ['AARRR Funnels', 'ICP Frameworks', 'Campaign Orchestration'],
    specialty: 'Team management, strategy, competitive intelligence',
    what: [
      "Creates comprehensive marketing strategies using AARRR funnel frameworks",
      "Builds Ideal Customer Profiles (ICPs) and aligns all marketing to target them",
      "Orchestrates campaigns across all channels — social, email, content, ads",
      "Manages the AI team — coordinates Flora, Mabel, Raymond, and Hugh on cross-channel efforts",
      "Runs competitive intelligence gathering and positioning analysis",
      "Designs marketing funnels from awareness to conversion to retention",
      "Analyzes campaign performance and optimizes for better results",
    ],
    who: "Businesses doing random acts of marketing. If you're posting without a plan and spending without a strategy, Poppi brings order to the chaos.",
  },
  ava: {
    fullName: 'Ava Sinclair',
    tagline: "I turn your data into decisions. Dashboards, reports, and insights that tell you exactly what to do next — not just what happened.",
    qualifications: ['Google Analytics IQ (GAIQ)'],
    specialty: 'GA4 live access, attribution, cohort analysis, predictive audiences',
    what: [
      "Connects directly to your GA4 for live data access and real-time monitoring",
      "Builds attribution models so you know exactly which channels drive revenue",
      "Runs cohort analysis to understand customer behaviour over time",
      "Creates predictive audiences to target your highest-value prospects",
      "Builds custom dashboards tracking your most important business metrics",
      "Detects traffic anomalies and alerts you to problems before they become crises",
      "Cross-reviews with Poppi on strategy metrics and Angela on financial KPIs",
    ],
    who: "Businesses flying blind on their numbers. If you're making decisions based on gut feeling instead of data, Ava gives you clarity.",
  },
  raymond: {
    fullName: 'Raymond Blake',
    tagline: "I manage your ad spend like it's my own money. Google, Meta, TikTok — maximum ROAS, minimum waste.",
    qualifications: ['All 9 Google Ads Certifications', 'Meta Ads Certified'],
    specialty: 'Google Search/Display/Shopping/PMax, 5-pillar architecture',
    what: [
      "Manages Google Search, Display, Shopping, and Performance Max campaigns",
      "Builds campaigns using his proprietary 5-pillar architecture for maximum ROAS",
      "Creates and manages Meta Ads campaigns across Facebook and Instagram",
      "Holds all 9 Google Ads certifications — Search, Display, Shopping, Video, Apps, Measurement, AI-Powered, Creative, and Grow Offline Sales",
      "Optimizes targeting, bidding, and creative for maximum return on ad spend",
      "Runs A/B tests on copy, creative, audiences, and landing pages",
      "Cross-reviews with Ava on metrics and Rupert on advertising compliance",
    ],
    who: "Businesses wasting money on ads that don't convert. If your ROAS is terrible or you don't even know what it is, Raymond fixes your ad spend.",
  },
  bowie: {
    fullName: 'Bowie Fairfax',
    tagline: "I dig deep into markets, competitors, and trends. The intelligence that gives you an unfair advantage over everyone else.",
    qualifications: ['Oxford MPhil', 'Cambridge MBA', 'PESTLE Analysis', "Porter's Five Forces"],
    specialty: 'Market research, TAM/SAM/SOM, weekly intel scans',
    what: [
      "Conducts deep competitor analysis using Porter's Five Forces — pricing, features, positioning, weaknesses",
      "Calculates Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM)",
      "Runs weekly intelligence scans across your competitive landscape",
      "Performs PESTLE analysis — Political, Economic, Social, Technological, Legal, Environmental factors",
      "Creates comprehensive industry reports with actionable recommendations",
      "Identifies market opportunities before they become obvious to competitors",
      "Cross-reviews with Poppi on strategy and Ava on data validation",
    ],
    who: "Businesses competing blindly. If you don't know what your competitors charge, what they're launching, or where the market is heading, Bowie gives you the intelligence edge.",
  },
  angela: {
    fullName: 'Angela Whitworth-Sterling',
    tagline: "I manage your books, budgets, and financial strategy. Crystal-clear visibility into every pound — and a plan to make more of them.",
    qualifications: ['ACA', 'ACCA', 'CIMA Strategic', 'Xero Advisor', 'QuickBooks ProAdvisor Platinum', 'Sage 50'],
    specialty: 'UK tax (CT, VAT, R&D credits), Stripe, QuickBooks, MTD',
    what: [
      "Manages UK Corporation Tax, VAT returns, and R&D tax credit claims",
      "Integrates with Stripe, QuickBooks, Xero, and Sage for real-time financial data",
      "Ensures Making Tax Digital (MTD) compliance for your business",
      "Creates financial forecasts, budgets, and cash flow projections",
      "Monitors cash flow runway and alerts you before problems hit",
      "Generates profit & loss reports, expense breakdowns, and financial summaries",
      "Cross-reviews with Rupert on tax compliance and Ava on business metrics",
    ],
    who: "Businesses that don't know if they're profitable. If your finances live in a spreadsheet you haven't opened in months, Angela brings clarity and control.",
  },
}

export default function Employee() {
  const { slug } = useParams()
  const emp = employees.find((e) => e.name.toLowerCase() === slug)
  const detail = detailed[slug]

  if (!emp || !detail) {
    return (
      <div className="py-40 text-center">
        <h1 className="font-black text-4xl text-ink uppercase">Employee Not Found</h1>
        <Link to="/about" className="text-pop-red mt-4 inline-block hover:underline">View all employees &rarr;</Link>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 section-cream halftone">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-pop-red font-semibold uppercase tracking-[0.2em] text-xs mb-3">{emp.role}</p>
              <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-ink mb-2">
                Meet <span className="text-pop-red">{emp.name}</span>
              </h1>
              <p className="text-ink-faint text-sm mb-6">{detail.fullName}</p>
              <p className="text-ink-muted text-lg leading-relaxed mb-8 italic">
                "{detail.tagline}"
              </p>
              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon">
                Start Working with {emp.name}
              </a>
            </div>
            <div className="comic-panel rounded-2xl overflow-hidden p-2 max-w-md mx-auto lg:mx-0">
              <img src={emp.image} alt={emp.name} className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Specialty */}
      <section className="py-16 section-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Qualifications */}
            <div className="comic-panel-static rounded-2xl p-7">
              <h2 className="font-black text-lg text-ink uppercase mb-4">Qualifications</h2>
              <div className="flex flex-wrap gap-2">
                {detail.qualifications.map((q) => (
                  <span key={q} className="px-3 py-1.5 text-sm font-semibold text-pop-red bg-pop-red/[0.06] border-2 border-pop-red/15 rounded-lg">{q}</span>
                ))}
              </div>
            </div>

            {/* Specialty */}
            <div className="comic-panel-static rounded-2xl p-7">
              <h2 className="font-black text-lg text-ink uppercase mb-4">Specialty</h2>
              <p className="text-ink-muted leading-relaxed">{detail.specialty}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What they do */}
      <section className="py-16 section-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink uppercase mb-8">
            What {emp.name} Does for You
          </h2>
          <div className="space-y-4">
            {detail.what.map((item, i) => (
              <div key={i} className="comic-panel-subtle rounded-xl p-5 flex items-start gap-4">
                <span className="text-pop-green font-black text-lg shrink-0">✓</span>
                <p className="text-ink-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 section-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink uppercase mb-6">Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            {emp.skills.map((s) => (
              <span key={s} className="px-4 py-2 text-sm font-bold text-ink border-2 border-ink/15 rounded-lg bg-light">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 section-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink uppercase mb-4">Who {emp.name} Is For</h2>
          <div className="comic-panel-static rounded-2xl p-8">
            <p className="text-ink-muted leading-relaxed text-lg">{detail.who}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-neon">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-black text-3xl sm:text-4xl text-black mb-4">
            Ready to Put {emp.name} to Work?
          </h2>
          <p className="text-black/60 mb-8 text-lg">Start your free trial. {emp.name} activates in under 60 seconds.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-dark text-lg px-12 py-5">
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Other employees */}
      <section className="py-16 section-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-black text-2xl text-ink uppercase mb-8 text-center">Meet the Rest of the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {employees.filter((e) => e.name.toLowerCase() !== slug).map((e) => (
              <Link key={e.name} to={`/employee/${e.name.toLowerCase()}`} className="comic-panel-subtle rounded-xl overflow-hidden group">
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
