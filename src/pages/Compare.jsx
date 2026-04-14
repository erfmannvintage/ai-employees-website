
const competitors = [
  { name: 'AI Employees', us: true, employees: '11', price: 'From $97', trial: '7 days', crossCollab: true, video: true, blog: true, email: true, analytics: true, legal: true, finance: true, leads: true, ads: true, research: true, training: true, whiteLabel: true },
  { name: 'Sintra.ai', us: false, employees: '15+', price: '$97', trial: 'None', crossCollab: false, video: false, blog: false, email: true, analytics: true, legal: false, finance: false, leads: true, ads: true, research: false, training: false, whiteLabel: false },
  { name: 'Marblism', us: false, employees: '6', price: 'From $20', trial: '7 days', crossCollab: false, video: false, blog: false, email: false, analytics: false, legal: false, finance: false, leads: false, ads: false, research: false, training: false, whiteLabel: false },
  { name: 'Monday', us: false, employees: '0', price: '$9/seat', trial: '7 days', crossCollab: false, video: false, blog: false, email: true, analytics: true, legal: false, finance: false, leads: true, ads: false, research: false, training: false, whiteLabel: false },
]

const rows = [
  { key: 'employees', label: 'AI Employees', type: 'text' }, { key: 'price', label: 'Price', type: 'text' }, { key: 'trial', label: 'Free Trial', type: 'text' },
  { key: 'crossCollab', label: 'Cross-Team Collaboration', type: 'bool' }, { key: 'video', label: 'Video Content', type: 'bool' }, { key: 'blog', label: 'Blog CMS', type: 'bool' },
  { key: 'email', label: 'Email Campaigns', type: 'bool' }, { key: 'analytics', label: 'Analytics', type: 'bool' }, { key: 'legal', label: 'Legal & Compliance', type: 'bool' },
  { key: 'finance', label: 'Finance & CFO', type: 'bool' }, { key: 'leads', label: 'Lead Generation', type: 'bool' }, { key: 'ads', label: 'Paid Ads', type: 'bool' },
  { key: 'research', label: 'Market Research', type: 'bool' }, { key: 'training', label: 'Custom Training', type: 'bool' }, { key: 'whiteLabel', label: 'White-Label', type: 'bool' },
]

export default function Compare() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neon font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Comparison</p>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white mb-4">See How We <span className="text-neon text-glow">Compare</span></h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">The most complete AI workforce platform on the market.</p>
        </div>
      </section>

      <section className="py-20 section-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="comic-panel rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-neon/20">
                  <th className="text-left px-4 py-4 text-sm font-bold text-gray-400 uppercase min-w-[160px]">Feature</th>
                  {competitors.map((c) => <th key={c.name} className={`text-center px-3 py-4 text-sm font-bold uppercase min-w-[110px] ${c.us ? 'text-neon' : 'text-gray-400'}`}>{c.name}{c.us && <span className="block text-[10px] text-neon/60 normal-case">That's us</span>}</th>)}
                </tr></thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.key} className="border-t border-dark-400">
                      <td className="px-4 py-3 text-sm text-gray-300">{r.label}</td>
                      {competitors.map((c) => <td key={c.name} className={`text-center px-3 py-3 ${c.us ? 'bg-neon/[0.03]' : ''}`}>
                        {r.type === 'bool' ? (c[r.key] ? <span className="text-neon font-bold">✓</span> : <span className="text-gray-500">✕</span>) : <span className={`text-sm font-medium ${c.us ? 'text-neon font-bold' : 'text-gray-400'}`}>{c[r.key]}</span>}
                      </td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-neon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black text-4xl sm:text-5xl uppercase text-black mb-4">If You're Reading This, You're Already Ahead.</h2>
          <p className="text-black/60 text-lg mb-8">Try AI Employees free for 7 days.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-black text-neon font-black uppercase border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Meet Your AI Team
          </a>
        </div>
      </section>
    </div>
  )
}
