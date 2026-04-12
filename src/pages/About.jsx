import { employees } from '../data/employees'

export default function About() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-[#6C3AFF] -top-40 right-0" />
        <div className="orb w-[400px] h-[400px] bg-[#FF3366] bottom-0 -left-40" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF3366] mb-4">Our Story</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            The Team Behind
            <br />
            <span className="gradient-text">AI Employees</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We believe every business deserves a world-class team — regardless of budget.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-24 section-darker">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#00D4FF] mb-4">Mission</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-6">Closing the AI Gap</h2>
              <p className="text-white/50 leading-relaxed mb-4">
                77% of businesses say AI is transformational, but only 5% actually use it. The gap isn't desire — it's complexity.
              </p>
              <p className="text-white/50 leading-relaxed mb-4">
                We built AI Employees to close that gap. Sign up, tell us about your business, and get an entire AI workforce — ready to work — in under 60 seconds.
              </p>
              <p className="text-white/40 leading-relaxed">
                No technical setup. No prompt engineering. No hiring. Just results.
              </p>
            </div>
            <div className="glass-card-strong p-8 space-y-8">
              {[
                { value: '11', label: 'Specialized AI Employees', gradient: 'from-[#FF3366] to-[#FF6B35]' },
                { value: '9', label: 'Business Domains Covered', gradient: 'from-[#6C3AFF] to-[#00D4FF]' },
                { value: '24/7', label: 'Always On, Never Absent', gradient: 'from-[#00CC88] to-[#00D4FF]' },
                { value: '<60s', label: 'Setup Time', gradient: 'from-[#FFBE0B] to-[#FF6B35]' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className={`font-display font-black text-4xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</div>
                  <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Profiles */}
      <section className="py-20 lg:py-24 section-dark relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[#00D4FF] top-1/3 -right-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#FFBE0B] mb-4">The Team</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6">
              Meet Your <span className="gradient-text-blue">11 Employees</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Each with deep expertise, distinct personalities, and real tools. They collaborate, cross-review, and learn your business.
            </p>
          </div>

          <div className="space-y-4">
            {employees.map((emp) => (
              <div key={emp.name} className="glass-card p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-white/[0.06] transition-all duration-300">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shrink-0"
                  style={{ background: emp.gradientCSS, boxShadow: `0 8px 30px ${emp.shadowColor}` }}
                >
                  {emp.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-black text-2xl text-white">{emp.name}</h3>
                    <span className="px-3 py-0.5 text-xs font-semibold text-white/80 rounded-full" style={{ background: emp.gradientCSS }}>
                      {emp.role}
                    </span>
                  </div>
                  <p className="text-white/50 leading-relaxed mb-2">{emp.description}</p>
                  <p className="text-sm text-white/30 italic mb-4">"{emp.personality}"</p>
                  <div className="flex flex-wrap gap-2">
                    {emp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 text-[11px] font-medium rounded-md bg-white/[0.05] text-white/40 border border-white/[0.06]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white text-center mb-12">
            What We <span className="gradient-text">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Accessibility', desc: 'Every business deserves AI that works. No technical skills required.', gradient: 'from-[#6C3AFF] to-[#00D4FF]' },
              { title: 'Quality', desc: 'Production-ready output that meets professional standards, not rough drafts.', gradient: 'from-[#FF3366] to-[#FF6B35]' },
              { title: 'Privacy', desc: 'Bank-grade encryption, row-level security, GDPR compliance. We never sell your data.', gradient: 'from-[#00CC88] to-[#00D4FF]' },
            ].map((v) => (
              <div key={v.title} className="glass-card p-7">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center mb-5`}>
                  <span className="text-white font-black text-lg">{v.title[0]}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 gradient-bg-animated relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">Ready to Meet Your Team?</h2>
          <p className="text-lg text-white/50 mb-8">Start your free trial and put all 11 AI employees to work today.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">Start Free Trial</a>
        </div>
      </section>
    </div>
  )
}
