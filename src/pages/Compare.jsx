import { Link } from 'react-router-dom'

const competitors = [
  {
    name: 'AI Employees',
    us: true,
    employees: '11',
    price: 'From $97/mo',
    aiModels: 'Latest LLMs',
    crossCollab: true,
    videoContent: true,
    blogCms: true,
    emailCampaigns: true,
    analytics: true,
    legalCompliance: true,
    finance: true,
    leadGen: true,
    paidAds: true,
    research: true,
    customTraining: true,
    whiteLabel: true,
    freeTrialDays: '14',
  },
  {
    name: 'Sintra.ai',
    us: false,
    employees: '15+',
    price: '$97/mo',
    aiModels: 'GPT-4, Claude',
    crossCollab: false,
    videoContent: false,
    blogCms: false,
    emailCampaigns: true,
    analytics: true,
    legalCompliance: false,
    finance: false,
    leadGen: true,
    paidAds: true,
    research: false,
    customTraining: false,
    whiteLabel: false,
    freeTrialDays: '0',
  },
  {
    name: 'Marblism',
    us: false,
    employees: '0',
    price: 'From $20/mo',
    aiModels: 'Various',
    crossCollab: false,
    videoContent: false,
    blogCms: false,
    emailCampaigns: false,
    analytics: false,
    legalCompliance: false,
    finance: false,
    leadGen: false,
    paidAds: false,
    research: false,
    customTraining: false,
    whiteLabel: false,
    freeTrialDays: '7',
  },
  {
    name: 'Monday.com',
    us: false,
    employees: '0',
    price: 'From $9/seat',
    aiModels: 'Monday AI',
    crossCollab: false,
    videoContent: false,
    blogCms: false,
    emailCampaigns: true,
    analytics: true,
    legalCompliance: false,
    finance: false,
    leadGen: true,
    paidAds: false,
    research: false,
    customTraining: false,
    whiteLabel: false,
    freeTrialDays: '14',
  },
]

const comparisonRows = [
  { key: 'employees', label: 'AI Employees', type: 'text' },
  { key: 'price', label: 'Starting Price', type: 'text' },
  { key: 'freeTrialDays', label: 'Free Trial', type: 'text' },
  { key: 'crossCollab', label: 'Cross-Team Collaboration', type: 'bool' },
  { key: 'videoContent', label: 'Video Content Creation', type: 'bool' },
  { key: 'blogCms', label: 'Built-in Blog CMS', type: 'bool' },
  { key: 'emailCampaigns', label: 'Email Campaigns', type: 'bool' },
  { key: 'analytics', label: 'Analytics & Reporting', type: 'bool' },
  { key: 'legalCompliance', label: 'Legal & Compliance', type: 'bool' },
  { key: 'finance', label: 'Finance & CFO', type: 'bool' },
  { key: 'leadGen', label: 'Lead Generation', type: 'bool' },
  { key: 'paidAds', label: 'Paid Ads Management', type: 'bool' },
  { key: 'research', label: 'Market Research', type: 'bool' },
  { key: 'customTraining', label: 'Custom AI Training', type: 'bool' },
  { key: 'whiteLabel', label: 'White-Label Options', type: 'bool' },
]

const advantages = [
  {
    title: '11 Specialized Employees',
    desc: 'Not generic chatbots — each AI employee is deeply specialized in their domain with real tools and integrations.',
    icon: '👥',
  },
  {
    title: 'Real Cross-Team Collaboration',
    desc: 'Flora checks strategy with Poppi. Hugh validates deals with Rupert. Your AI team actually works as a team.',
    icon: '🤝',
  },
  {
    title: 'Full Business Coverage',
    desc: 'Marketing, sales, support, content, analytics, legal, advertising, research, and finance. All covered.',
    icon: '🏢',
  },
  {
    title: 'Learns Your Business',
    desc: 'Business Profile, Data Hub, Custom Skills — your AI team gets smarter about YOUR business every day.',
    icon: '🧠',
  },
  {
    title: 'Production-Ready Content',
    desc: 'Blog posts, social media, video, email campaigns — content that\'s ready to publish, not rough drafts.',
    icon: '📝',
  },
  {
    title: 'Enterprise Security',
    desc: 'Row-level security, bank-grade encryption, GDPR compliance. Your data is isolated and protected.',
    icon: '🔒',
  },
]

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-pop-green mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-pop-red/40 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  )
}

export default function Compare() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-paper-warm halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-ink mb-4">
            See How We{' '}
            <span className="text-pop-pink">Compare</span>
          </h1>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            We built AI Employees to be the most complete AI workforce platform. Here's how we stack up.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-3 border-ink shadow-[6px_6px_0_var(--color-ink)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-3 border-ink bg-paper-warm">
                    <th className="text-left px-5 py-4 font-bold text-ink min-w-[200px]">Feature</th>
                    {competitors.map((c) => (
                      <th
                        key={c.name}
                        className={`text-center px-4 py-4 font-bold min-w-[130px] ${
                          c.us ? 'text-pop-pink bg-pop-pink/5' : 'text-ink'
                        }`}
                      >
                        {c.name}
                        {c.us && <span className="block text-xs font-normal text-pop-pink/70 mt-0.5">That's us!</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.key} className={i % 2 === 0 ? 'bg-white' : 'bg-paper/50'}>
                      <td className="px-5 py-3.5 text-sm font-medium text-ink border-t border-halftone">{row.label}</td>
                      {competitors.map((c) => (
                        <td
                          key={c.name}
                          className={`text-center px-4 py-3.5 border-t border-halftone ${
                            c.us ? 'bg-pop-pink/5' : ''
                          }`}
                        >
                          {row.type === 'bool' ? (
                            c[row.key] ? <CheckIcon /> : <CrossIcon />
                          ) : (
                            <span className={`text-sm font-medium ${c.us ? 'text-pop-pink font-bold' : 'text-ink'}`}>
                              {c[row.key]}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 lg:py-20 bg-paper-cool">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center mb-12">
            Why Businesses Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white rounded-lg border-3 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)]">
                <span className="text-3xl block mb-3">{adv.icon}</span>
                <h3 className="font-bold text-lg text-ink mb-2">{adv.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
            Ready to Switch?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Try AI Employees free for 14 days. No credit card required.
          </p>
          <a
            href="https://artifactly-ai-employees.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-pop-pink text-white text-lg font-bold rounded-lg border-3 border-white/30 shadow-[5px_5px_0_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0_rgba(255,255,255,0.2)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  )
}
