import { employees } from '../data/employees'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-paper-warm halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-ink mb-4">
            The Story Behind{' '}
            <span className="text-pop-pink">AI Employees</span>
          </h1>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            We believe every business deserves a world-class team — regardless of budget.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-black text-3xl text-ink mb-4">Our Mission</h2>
              <p className="text-ink-light leading-relaxed mb-4">
                77% of businesses say AI is transformational, but only 5% actually use it. The gap isn't desire — it's complexity. Setting up AI tools, hiring prompt engineers, integrating APIs... it's overwhelming.
              </p>
              <p className="text-ink-light leading-relaxed mb-4">
                We built AI Employees to close that gap. Sign up, tell us about your business, and get an entire AI workforce — ready to work — in under 60 seconds.
              </p>
              <p className="text-ink-light leading-relaxed">
                No technical setup. No prompt engineering. No hiring. Just results.
              </p>
            </div>
            <div className="bg-paper-warm rounded-xl border-3 border-ink p-8 shadow-[6px_6px_0_var(--color-ink)]">
              <div className="space-y-6">
                <div>
                  <div className="font-display font-black text-4xl text-pop-pink">11</div>
                  <div className="text-sm font-semibold text-ink-muted">Specialized AI Employees</div>
                </div>
                <div>
                  <div className="font-display font-black text-4xl text-pop-blue">9</div>
                  <div className="text-sm font-semibold text-ink-muted">Business Domains Covered</div>
                </div>
                <div>
                  <div className="font-display font-black text-4xl text-pop-green">24/7</div>
                  <div className="text-sm font-semibold text-ink-muted">Always On, Never Absent</div>
                </div>
                <div>
                  <div className="font-display font-black text-4xl text-pop-purple">&lt;60s</div>
                  <div className="text-sm font-semibold text-ink-muted">Setup Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 lg:py-20 bg-paper-cool">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-4xl sm:text-5xl text-ink mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-ink-light max-w-2xl mx-auto">
              11 AI employees, each with deep expertise, distinct personalities, and real tools.
              They collaborate, cross-review work, and learn your business.
            </p>
          </div>

          <div className="space-y-6">
            {employees.map((emp, i) => (
              <div
                key={emp.name}
                className={`bg-white rounded-xl border-3 border-ink p-6 lg:p-8 shadow-[5px_5px_0_var(--color-ink)] ${
                  i % 2 === 0 ? '' : 'md:flex-row-reverse'
                } flex flex-col md:flex-row gap-6 items-start`}
              >
                {/* Avatar */}
                <div className="shrink-0">
                  <div
                    className="w-20 h-20 rounded-xl border-3 border-ink flex items-center justify-center text-4xl shadow-[3px_3px_0_var(--color-ink)]"
                    style={{ backgroundColor: emp.bgColor }}
                  >
                    {emp.emoji}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-black text-2xl text-ink">{emp.name}</h3>
                    <span
                      className="px-3 py-0.5 text-sm font-bold text-white rounded-full border-2 border-ink"
                      style={{ backgroundColor: emp.color }}
                    >
                      {emp.role}
                    </span>
                  </div>
                  <p className="text-ink-light leading-relaxed mb-3">{emp.description}</p>
                  <p className="text-sm text-ink-muted italic mb-4">"{emp.personality}"</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {emp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-semibold rounded-md border-2 border-ink bg-paper-warm text-ink"
                      >
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
      <section className="py-16 lg:py-20 bg-paper halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-ink text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Accessibility',
                desc: 'Every business — from solopreneurs to enterprises — deserves AI that works. No technical skills required.',
                color: 'bg-pop-blue',
              },
              {
                title: 'Quality',
                desc: 'Not rough drafts. Not generic output. Production-ready work that meets professional standards.',
                color: 'bg-pop-pink',
              },
              {
                title: 'Privacy',
                desc: 'Your data is yours. Bank-grade encryption, row-level security, GDPR compliance. We never sell your data.',
                color: 'bg-pop-green',
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-lg border-3 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)]">
                <div className={`${v.color} w-12 h-12 rounded-lg border-2 border-ink flex items-center justify-center mb-4`}>
                  <span className="text-white font-black text-lg">{v.title[0]}</span>
                </div>
                <h3 className="font-bold text-lg text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-ink">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
            Ready to Meet Your Team?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Start your free trial and put all 11 AI employees to work today.
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
