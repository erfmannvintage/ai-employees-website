import { Link } from 'react-router-dom'

const competitors = [
  { name: 'AI Employees', us: true, employees: '11', price: 'From $97/mo', freeTrialDays: '14', crossCollab: true, videoContent: true, blogCms: true, emailCampaigns: true, analytics: true, legalCompliance: true, finance: true, leadGen: true, paidAds: true, research: true, customTraining: true, whiteLabel: true },
  { name: 'Sintra.ai', us: false, employees: '15+', price: '$97/mo', freeTrialDays: '0', crossCollab: false, videoContent: false, blogCms: false, emailCampaigns: true, analytics: true, legalCompliance: false, finance: false, leadGen: true, paidAds: true, research: false, customTraining: false, whiteLabel: false },
  { name: 'Marblism', us: false, employees: '0', price: 'From $20/mo', freeTrialDays: '7', crossCollab: false, videoContent: false, blogCms: false, emailCampaigns: false, analytics: false, legalCompliance: false, finance: false, leadGen: false, paidAds: false, research: false, customTraining: false, whiteLabel: false },
  { name: 'Monday.com', us: false, employees: '0', price: 'From $9/seat', freeTrialDays: '14', crossCollab: false, videoContent: false, blogCms: false, emailCampaigns: true, analytics: true, legalCompliance: false, finance: false, leadGen: true, paidAds: false, research: false, customTraining: false, whiteLabel: false },
]

const comparisonRows = [
  { key: 'employees', label: 'AI Employees', type: 'text' },
  { key: 'price', label: 'Starting Price', type: 'text' },
  { key: 'freeTrialDays', label: 'Free Trial (days)', type: 'text' },
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
  { title: '11 Specialized Employees', desc: 'Not generic chatbots — each AI employee is deeply specialized with real tools and integrations.', icon: '👥', gradient: 'from-[#FF3366] to-[#FF6B35]' },
  { title: 'Cross-Team Collaboration', desc: 'Flora checks strategy with Poppi. Hugh validates deals with Rupert. Your AI team actually works as a team.', icon: '🤝', gradient: 'from-[#6C3AFF] to-[#00D4FF]' },
  { title: 'Full Business Coverage', desc: 'Marketing, sales, support, content, analytics, legal, advertising, research, and finance. All covered.', icon: '🏢', gradient: 'from-[#00CC88] to-[#00D4FF]' },
  { title: 'Learns Your Business', desc: 'Business Profile, Data Hub, Custom Skills — your AI team gets smarter about YOUR business every day.', icon: '🧠', gradient: 'from-[#FFBE0B] to-[#FF6B35]' },
  { title: 'Production-Ready Content', desc: 'Blog posts, social media, video, email campaigns — content ready to publish, not rough drafts.', icon: '📝', gradient: 'from-[#8B5CF6] to-[#D946EF]' },
  { title: 'Enterprise Security', desc: 'Row-level security, bank-grade encryption, GDPR compliance. Your data is isolated and protected.', icon: '🔒', gradient: 'from-[#10B981] to-[#06B6D4]' },
]

export default function Compare() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-[#FF3366] -top-40 -left-40" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00D4FF] mb-4">Comparison</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            See How We <span className="gradient-text">Compare</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            The most complete AI workforce platform. Here's how we stack up against the rest.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 section-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card-strong overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left px-5 py-4 text-sm font-semibold text-white/60 min-w-[180px]">Feature</th>
                    {competitors.map((c) => (
                      <th key={c.name} className={`text-center px-4 py-4 text-sm font-semibold min-w-[120px] ${c.us ? 'text-[#FF3366]' : 'text-white/60'}`}>
                        {c.name}
                        {c.us && <span className="block text-[10px] font-normal text-[#FF3366]/60 mt-0.5">That's us</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.key} className="border-t border-white/[0.04]">
                      <td className="px-5 py-3.5 text-sm text-white/60">{row.label}</td>
                      {competitors.map((c) => (
                        <td key={c.name} className={`text-center px-4 py-3.5 ${c.us ? 'bg-[#FF3366]/[0.03]' : ''}`}>
                          {row.type === 'bool' ? (
                            c[row.key] ? (
                              <svg className="w-5 h-5 text-[#00CC88] mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            ) : (
                              <svg className="w-5 h-5 text-white/10 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                            )
                          ) : (
                            <span className={`text-sm font-medium ${c.us ? 'text-[#FF3366] font-bold' : 'text-white/50'}`}>{c[row.key]}</span>
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

      <section className="py-20 lg:py-24 section-dark relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[#00D4FF] -bottom-40 right-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white text-center mb-12">
            Why Businesses <span className="gradient-text-blue">Choose Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((adv) => (
              <div key={adv.title} className="glass-card p-7 group hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${adv.gradient} flex items-center justify-center mb-5 text-xl transition-transform duration-300 group-hover:scale-110`}>
                  {adv.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{adv.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-bg-animated relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">Ready to Switch?</h2>
          <p className="text-lg text-white/50 mb-8">Try AI Employees free for 14 days. No credit card required.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  )
}
