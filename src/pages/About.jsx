import { employees } from '../data/employees'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-brand mb-4">Our Story</p>
          <h1 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight mb-4">
            The Team Behind <span className="text-brand">AI Employees</span>
          </h1>
          <p className="text-ink-muted text-lg max-w-xl mx-auto">
            Every business deserves a world-class team — regardless of budget.
          </p>
        </div>
      </section>

      {/* Pain point — side-by-side */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-brand mb-4">The Problem</p>
              <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight mb-6">
                You Want to Scale, But...
              </h2>
              <h3 className="text-xl font-bold text-ink mb-4">You're Wearing Too Many Hats:</h3>
              <p className="text-ink-muted text-lg mb-6">
                CEO, marketer, sales rep, support agent, accountant... Sound familiar?
              </p>
              <div className="space-y-3">
                {['100+ unread emails every morning', 'Social media? What social media?', 'Everything pushed to "next week"', 'Hiring is expensive and slow'].map((pain) => (
                  <div key={pain} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-brand shrink-0" />
                    <span className="text-ink-secondary text-[15px]">{pain}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="card overflow-hidden max-w-sm">
                <img src="/characters/cecil.png" alt="Overwhelmed business owner" className="w-full aspect-[3/4] object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the team */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-brand mb-4">Stop Juggling</p>
            <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">
              Your <span className="text-brand">11 Employees</span>
            </h2>
          </div>

          <div className="bg-[#F0ECFF] rounded-[32px] p-8 lg:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {employees.map((emp) => (
                <div key={emp.name} className="card overflow-hidden">
                  <div className="aspect-square overflow-hidden bg-gray-50">
                    <img src={emp.image} alt={emp.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-ink text-lg">{emp.name}</h3>
                    <p className="text-brand text-xs font-semibold tracking-wide mb-3">{emp.role}</p>
                    <p className="text-ink-muted text-sm leading-relaxed">"{emp.description}"</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {emp.skills.slice(0, 3).map((s) => (
                        <span key={s} className="px-2 py-0.5 text-[10px] font-semibold text-brand bg-brand/[0.08] rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { v: '11', l: 'AI Employees' },
              { v: '9', l: 'Business Domains' },
              { v: '24/7', l: 'Always On' },
              { v: '<60s', l: 'Setup Time' },
            ].map((s) => (
              <div key={s.l} className="card p-8 text-center">
                <div className="font-black text-4xl text-brand">{s.v}</div>
                <div className="text-sm font-semibold text-ink-muted mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ink">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="text-[36px] sm:text-[44px] font-black text-white tracking-tight mb-6">
            Welcome to Your New Life.
          </h2>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary-lg">
            Meet Your AI Team
          </a>
        </div>
      </section>
    </div>
  )
}
