import { employees } from '../data/employees'

export default function About() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neon font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Our Story</p>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white mb-4">The Team Behind<br /><span className="text-neon text-glow">AI Employees</span></h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Every business deserves a world-class team — regardless of budget.</p>
        </div>
      </section>

      {/* Pain point — like Marblism */}
      <section className="py-20 section-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-white mb-6">You Want to Scale, But...</h2>
          <div className="relative inline-block comic-panel rounded-2xl p-4 max-w-md mx-auto">
            <img src="/characters/cecil.png" alt="Overwhelmed business owner" className="w-full rounded-xl" />
            <div className="absolute top-4 left-4 speech-bubble text-xs px-3 py-1.5">100+ unread emails</div>
            <div className="absolute top-1/3 right-2 speech-bubble text-xs px-3 py-1.5">Social media? What social media?</div>
            <div className="absolute bottom-16 left-4 speech-bubble text-xs px-3 py-1.5">Everything pushed to "next week"</div>
          </div>
          <h3 className="font-black text-2xl sm:text-3xl uppercase text-white mt-10">You're Wearing Too Many Hats:</h3>
          <p className="text-gray-300 text-lg mt-2">CEO, marketer, sales rep, support agent, accountant...</p>
        </div>
      </section>

      {/* Meet the team — Marblism style cards */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="speech-bubble inline-block mb-6 text-sm">Stop Juggling. Meet Your New AI Team</div>
            <h2 className="font-black text-4xl sm:text-5xl uppercase text-white">Your <span className="text-neon text-glow">11 Employees</span></h2>
          </div>

          {/* Character cards with images and first-person quotes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {employees.map((emp) => (
              <div key={emp.name} className="comic-panel rounded-xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={emp.image} alt={emp.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-white uppercase text-lg">{emp.name}</h3>
                  <p className="text-neon text-xs font-bold uppercase tracking-wide mb-3">{emp.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed italic">"{emp.description}"</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {emp.skills.slice(0, 3).map((s) => (
                      <span key={s} className="px-2 py-0.5 text-[10px] font-bold text-neon/70 bg-neon/[0.06] border border-neon/10 rounded">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 section-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: '11', l: 'AI Employees' }, { v: '9', l: 'Business Domains' },
              { v: '24/7', l: 'Always On' }, { v: '<60s', l: 'Setup Time' },
            ].map((s) => (
              <div key={s.l} className="comic-panel rounded-xl p-6 text-center">
                <div className="font-black text-4xl text-neon text-glow">{s.v}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-neon">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-black text-4xl sm:text-5xl uppercase text-black mb-4">Welcome to Your New Life.</h2>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-black text-neon font-black uppercase border-3 border-black shadow-[4px_4px_0_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            Meet Your AI Team
          </a>
        </div>
      </section>
    </div>
  )
}
