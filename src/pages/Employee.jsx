import { useParams, Link } from 'react-router-dom'
import { employees } from '../data/employees'

const detailed = {
  cecil: {
    tagline: "I manage your calendar, emails, task prioritization, and daily briefings — so you can focus on growing your business, not drowning in admin.",
    what: [
      "Triages your inbox every morning — flags urgent emails, drafts replies, archives noise",
      "Manages your calendar — schedules meetings, blocks focus time, resolves conflicts",
      "Creates daily briefings with your top priorities, deadlines, and what needs attention",
      "Takes meeting notes, extracts action items, and follows up with attendees",
      "Coordinates across your AI team — routes tasks to the right employee",
    ],
    who: "Business owners who spend 2+ hours a day on email and admin. If your calendar runs your life instead of the other way around, Cecil fixes that.",
  },
  flora: {
    tagline: "I craft scroll-stopping social media content across every platform. I know the algorithm and I speak fluent trending.",
    what: [
      "Creates platform-native content for TikTok, Instagram, LinkedIn, Facebook, X, and YouTube",
      "Builds content calendars with optimal posting schedules for each platform",
      "Writes captions, hooks, and hashtag strategies that drive engagement",
      "Monitors trends and adapts your content strategy in real-time",
      "Cross-reviews with Poppi on strategy and Mabel on SEO repurposing",
    ],
    who: "Businesses whose social media hasn't been updated in weeks. If you know you should be posting but never find the time, Flora runs it 24/7.",
  },
  basil: {
    tagline: "I handle every customer query with patience and precision. 24/7 support that actually makes people smile — and come back.",
    what: [
      "Responds to customer queries instantly via chat, email, and ticketing systems",
      "Builds and maintains your knowledge base so common questions get instant answers",
      "Escalates complex issues to you with full context — never drops the ball",
      "Monitors customer satisfaction scores and flags churn signals early",
      "Cross-reviews with Rupert on any legal or compliance-sensitive responses",
    ],
    who: "Businesses losing customers because support is slow or inconsistent. If your inbox has unanswered queries from last week, Basil fixes that today.",
  },
  hugh: {
    tagline: "I turn leads into revenue. Pipeline management, outreach sequences, and closing strategies that actually convert.",
    what: [
      "Qualifies inbound leads and scores them based on your ideal customer profile",
      "Builds and runs outreach sequences — cold emails, follow-ups, nurture campaigns",
      "Manages your CRM pipeline — moves deals through stages, flags stalled opportunities",
      "Creates proposals, pitch decks, and follow-up materials",
      "Cross-reviews with Rupert on contracts and Poppi on positioning",
    ],
    who: "Businesses with leads falling through the cracks. If you've got interested prospects but no time to follow up, Hugh turns them into paying customers.",
  },
  mabel: {
    tagline: "I write SEO-optimized blog content that ranks on Google and converts visitors into customers. Every piece is researched, structured, and built to perform.",
    what: [
      "Researches keywords and search intent to find high-value content opportunities",
      "Writes long-form, SEO-optimized articles that rank and drive organic traffic",
      "Creates content calendars aligned with your marketing strategy",
      "Optimizes existing content for better rankings and conversions",
      "Cross-reviews with Poppi on strategy and Flora on social repurposing",
    ],
    who: "Businesses that know they need a blog but never write. If your competitors are ranking above you on Google, Mabel changes that.",
  },
  rupert: {
    tagline: "I review contracts, draft terms, and keep your business compliant. Your always-on legal safety net — without the hourly rate.",
    what: [
      "Reviews contracts and agreements — flags risky clauses, suggests amendments",
      "Drafts terms of service, privacy policies, and refund policies",
      "Monitors compliance requirements for your industry (GDPR, data protection, etc.)",
      "Assesses legal risk on business decisions before you commit",
      "Cross-reviews with Poppi on marketing compliance and Angela on financial regulations",
    ],
    who: "Businesses operating without proper legal review. If you've been signing contracts without reading them or running without proper terms, Rupert protects you.",
  },
  poppi: {
    tagline: "I build marketing strategies that move needles. Campaign planning, funnel optimization, and growth tactics — all on autopilot.",
    what: [
      "Creates comprehensive marketing strategies aligned with your business goals",
      "Plans and coordinates campaigns across all channels — social, email, content, ads",
      "Designs marketing funnels from awareness to conversion",
      "Analyzes campaign performance and optimizes for better results",
      "Team manager — coordinates Flora, Mabel, Raymond, and Hugh on cross-channel efforts",
    ],
    who: "Businesses doing random acts of marketing. If you're posting without a plan and spending without a strategy, Poppi brings order to the chaos.",
  },
  ava: {
    tagline: "I turn your data into decisions. Dashboards, reports, and insights that tell you exactly what to do next — not just what happened.",
    what: [
      "Builds custom dashboards tracking your most important business metrics",
      "Creates weekly and monthly reports with actionable insights, not just numbers",
      "Detects traffic anomalies and alerts you to problems before they become crises",
      "Runs predictive analytics to forecast trends and opportunities",
      "Cross-reviews with Poppi on strategy metrics and Angela on financial KPIs",
    ],
    who: "Businesses flying blind on their numbers. If you're making decisions based on gut feeling instead of data, Ava gives you clarity.",
  },
  raymond: {
    tagline: "I manage your ad spend like it's my own money. Google, Meta, TikTok — maximum ROAS, minimum waste.",
    what: [
      "Creates and manages ad campaigns across Google Ads, Meta, and TikTok",
      "Optimizes targeting, bidding, and creative for maximum return on ad spend",
      "Runs A/B tests on copy, creative, audiences, and landing pages",
      "Provides detailed reporting on campaign performance and budget allocation",
      "Cross-reviews with Ava on metrics and Rupert on advertising compliance",
    ],
    who: "Businesses wasting money on ads that don't convert. If your ROAS is terrible or you don't even know what it is, Raymond fixes your ad spend.",
  },
  bowie: {
    tagline: "I dig deep into markets, competitors, and trends. The intelligence that gives you an unfair advantage over everyone else.",
    what: [
      "Conducts deep competitor analysis — pricing, features, positioning, weaknesses",
      "Researches market trends and identifies opportunities before they're obvious",
      "Creates comprehensive industry reports with actionable recommendations",
      "Monitors competitor activity weekly and alerts you to changes",
      "Cross-reviews with Poppi on strategy and Ava on data validation",
    ],
    who: "Businesses competing blindly. If you don't know what your competitors charge, what they're launching, or where the market is heading, Bowie gives you the intelligence edge.",
  },
  angela: {
    tagline: "I manage your books, budgets, and financial strategy. Crystal-clear visibility into every dollar — and a plan to make more of them.",
    what: [
      "Creates financial forecasts, budgets, and cash flow projections",
      "Monitors cash flow runway and alerts you before problems hit",
      "Generates profit & loss reports, expense breakdowns, and financial summaries",
      "Advises on pricing strategy, cost optimization, and investment timing",
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-pop-red font-extrabold uppercase tracking-[0.2em] text-sm mb-3">{emp.role}</p>
              <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-ink mb-4">
                Meet <span className="text-pop-red">{emp.name}</span>
              </h1>
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

      {/* What they do */}
      <section className="py-16 lg:py-20 section-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black text-3xl text-ink uppercase mb-8">
            What {emp.name} Does for You
          </h2>
          <div className="space-y-4">
            {detail.what.map((item, i) => (
              <div key={i} className="comic-panel-subtle rounded-xl p-5 flex items-start gap-4">
                <span className="text-pop-red font-black text-lg shrink-0">&#10003;</span>
                <p className="text-ink-muted leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 section-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black text-2xl text-ink uppercase mb-6">Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            {emp.skills.map((s) => (
              <span key={s} className="px-4 py-2 text-sm font-bold text-pop-red border-2 border-pop-red/30 rounded-lg bg-pop-red/[0.05]">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 section-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black text-2xl text-ink uppercase mb-4">Who {emp.name} Is For</h2>
          <div className="comic-panel rounded-xl p-6">
            <p className="text-ink-muted leading-relaxed text-lg">{detail.who}</p>
          </div>
        </div>
      </section>

      {/* CTA — keep neon */}
      <section className="py-16 section-neon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black text-3xl sm:text-4xl uppercase text-black mb-4">
            Ready to Put {emp.name} to Work?
          </h2>
          <p className="text-black/60 mb-6">Start your free trial. {emp.name} activates in under 60 seconds.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-black text-neon font-black uppercase border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Other employees */}
      <section className="py-16 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-black text-2xl text-ink uppercase mb-6 text-center">Meet the Rest of the Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {employees.filter((e) => e.name.toLowerCase() !== slug).map((e) => (
              <Link key={e.name} to={`/employee/${e.name.toLowerCase()}`} className="comic-panel-subtle rounded-xl overflow-hidden group">
                <div className="aspect-square overflow-hidden"><img src={e.image} alt={e.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
                <div className="p-3">
                  <h3 className="font-bold text-ink text-sm uppercase">{e.name}</h3>
                  <p className="text-pop-red text-[10px] font-bold uppercase">{e.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
