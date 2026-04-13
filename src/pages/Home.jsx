import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="badge mb-6">
              <span className="w-2 h-2 bg-pop-green rounded-full" />
              11 AI Employees — Ready to Work
            </div>

            <h1 className="text-[42px] sm:text-[52px] lg:text-[60px] font-black leading-[1.08] tracking-tight text-ink mb-6">
              Your AI employees.
              <br />
              <span className="text-brand">Your unfair advantage.</span>
            </h1>

            <p className="text-[17px] text-ink-muted leading-relaxed mb-8 max-w-[480px]">
              11 specialized AI employees handle your marketing, sales, support, content, analytics, legal, ads, research, and finance. Less than one freelancer.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary-lg">
                Get Started Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <Link to="/pricing" className="btn-secondary px-8 py-[18px]">View Pricing</Link>
            </div>

            <div className="flex flex-wrap gap-5 text-[13px] text-ink-light">
              {['No credit card', '14-day free trial', 'Cancel anytime'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-pop-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — character grid */}
          <div className="hidden lg:block">
            <div className="bg-brand/5 rounded-[32px] p-5 relative">
              <div className="grid grid-cols-3 gap-3">
                {employees.slice(0, 6).map((emp) => (
                  <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="group">
                    <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md hover:shadow-lg transition-shadow">
                      <img src={emp.image} alt={emp.name} className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <p className="text-center text-[11px] font-semibold text-ink-muted mt-1.5">{emp.name}</p>
                  </Link>
                ))}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-gray-200 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-pop-green rounded-xl flex items-center justify-center text-white font-bold">11</div>
                <div><div className="font-bold text-ink text-sm">AI Employees</div><div className="text-[11px] text-ink-light">Active & ready</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmployeeShowcase() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <p className="text-brand font-semibold text-sm mb-3">Your AI Team</p>
          <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight mb-4">Meet your 11 employees</h2>
          <p className="text-ink-muted text-[17px] leading-relaxed">Each one a certified specialist. They collaborate, cross-review each other's work, and learn your business.</p>
        </div>

        {/* Coloured container */}
        <div className="bg-[#F0ECFF] rounded-[32px] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {employees.map((emp) => (
              <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={emp.image} alt={emp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-ink text-[15px]">{emp.name}</h3>
                  <p className="text-brand text-[11px] font-semibold mt-0.5">{emp.role}</p>
                  <p className="text-ink-light text-[13px] mt-2 leading-relaxed line-clamp-2 hidden sm:block">{emp.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '1', title: 'Sign up in 30 seconds', desc: 'No credit card, no setup wizards, no technical knowledge needed.', color: '#6C3AFF' },
    { num: '2', title: 'Describe your business', desc: 'Name, niche, audience, brand voice. More detail = smarter team.', color: '#0066FF' },
    { num: '3', title: 'Your team activates', desc: '11 employees spin up with platform knowledge + your context.', color: '#00CC66' },
    { num: '4', title: 'Scale and grow', desc: 'Upload data, create skills, connect integrations. Smarter daily.', color: '#FF6600' },
  ]

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <p className="text-pop-green font-semibold text-sm mb-3">How It Works</p>
          <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">Live in under 60 seconds</h2>
        </div>

        <div className="bg-white rounded-[32px] border border-gray-200 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-5" style={{ background: s.color }}>{s.num}</div>
                <h3 className="font-bold text-ink text-[17px] mb-2">{s.title}</h3>
                <p className="text-ink-muted text-[14px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturePair({ label, title, desc, image, bgColor, reverse }) {
  return (
    <div className="rounded-[32px] overflow-hidden" style={{ background: bgColor }}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 items-center ${reverse ? '' : ''}`}>
        <div className={`p-8 sm:p-10 lg:p-14 ${reverse ? 'lg:order-2' : ''}`}>
          <p className="text-brand font-semibold text-sm mb-3">{label}</p>
          <h3 className="text-[28px] sm:text-[34px] font-black text-ink tracking-tight mb-5 leading-tight">{title}</h3>
          <p className="text-ink-muted leading-relaxed text-[15px]">{desc}</p>
        </div>
        <div className={`flex items-center justify-center p-6 sm:p-8 ${reverse ? 'lg:order-1' : ''}`}>
          <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <p className="text-pop-orange font-semibold text-sm mb-3">Features</p>
          <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight mb-4">Built for serious business</h2>
          <p className="text-ink-muted text-[17px]">Not a chatbot. A complete AI workforce with real capabilities.</p>
        </div>

        <div className="space-y-8">
          <FeaturePair
            label="Cross-Team Collaboration"
            title="Your employees work as a real team"
            desc="15+ predefined workflows. Flora checks strategy with Poppi. Hugh validates contracts with Rupert. Mabel coordinates SEO with Flora. Every task cross-reviewed by 1-3 peers before approval."
            image="/characters/poppi.png"
            bgColor="#F0ECFF"
            reverse={false}
          />
          <FeaturePair
            label="Self-Learning System"
            title="They get smarter every single day"
            desc="5-layer learning pipeline: task insights, peer feedback, weekly auto-research, knowledge refresh, monthly self-assessments. 30+ certifications that stay current. Proficiency auto-upgrades from Foundational to Expert."
            image="/characters/bowie.png"
            bgColor="#E8FFF0"
            reverse={true}
          />
          <FeaturePair
            label="Content Pipeline"
            title="5 automated content chains"
            desc="Mabel blogs → Flora promotes. Flora creates → Hugh uses in outreach. Bowie researches → Poppi updates strategy. Hugh finds leads → Cecil drafts emails. Ava reports → Flora adjusts content."
            image="/characters/flora.png"
            bgColor="#FFF0F0"
            reverse={false}
          />
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="bg-ink py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-[36px] sm:text-[44px] font-black text-white tracking-tight">Not just AI. Certified experts.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { value: '30+', label: 'Certifications', sub: 'Google, HubSpot, Semrush, ACA, ACCA...' },
            { value: '80+', label: 'Frameworks', sub: 'SPIN, MEDDIC, AARRR, PESTLE...' },
            { value: '6', label: 'Weekly Research', sub: 'Automatic domain research tasks' },
            { value: '5', label: 'Content Chains', sub: 'Employee-to-employee automation' },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-3xl p-7 text-center border border-white/10">
              <div className="font-black text-[48px] text-white leading-none">{s.value}</div>
              <div className="font-semibold text-white text-sm mt-2">{s.label}</div>
              <p className="text-white/40 text-[12px] mt-1.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { quote: "I replaced 3 freelancers with AI Employees. My marketing runs 24/7 and the quality is genuinely better.", name: 'Sarah K.', role: 'E-commerce Founder' },
    { quote: "Hugh closed more leads in his first week than my previous tool did in a month. The ROI is insane.", name: 'Marcus T.', role: 'SaaS Founder' },
    { quote: "Having Ava do analytics and Angela handle finance means I actually understand my numbers.", name: 'Priya R.', role: 'Agency Owner' },
  ]

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-14">
          <p className="text-pop-pink font-semibold text-sm mb-3">Testimonials</p>
          <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">Loved by business owners</h2>
        </div>

        <div className="bg-[#FFF5F7] rounded-[32px] p-5 sm:p-7 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 text-pop-yellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <blockquote className="text-ink-secondary text-[15px] leading-relaxed mb-5">"{t.quote}"</blockquote>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-semibold text-ink text-sm">{t.name}</div>
                  <div className="text-[12px] text-ink-light">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  const plan = plans[1]
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <p className="text-brand font-semibold text-sm mb-3">Pricing</p>
          <h2 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight mb-3">Simple, transparent pricing</h2>
          <p className="text-ink-muted text-[17px]">No hidden fees. Start free, scale when ready.</p>
        </div>

        <div className="max-w-[480px] mx-auto">
          <div className="bg-white rounded-[28px] p-8 sm:p-10 border-2 border-brand shadow-xl shadow-brand/10 relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 badge">{plan.badge}</div>
            <div className="text-center mb-8 mt-2">
              <h3 className="font-bold text-lg text-ink">{plan.name}</h3>
              <div className="my-3"><span className="font-black text-[64px] text-ink leading-none">${plan.price}</span><span className="text-ink-light text-lg">/{plan.period}</span></div>
              <p className="text-ink-muted text-[15px]">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pop-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-ink-secondary text-[15px]">{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center text-[16px] py-4">Start Free Trial</a>
          </div>
          <div className="text-center mt-6"><Link to="/pricing" className="text-brand font-semibold hover:underline text-[15px]">See all plans &rarr;</Link></div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-brand py-24 lg:py-32">
      <div className="max-w-[800px] mx-auto px-8 text-center">
        <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-black text-white leading-tight mb-5">
          Ready to hire your
          <br />AI workforce?
        </h2>
        <p className="text-[18px] text-white/70 max-w-[560px] mx-auto mb-10">
          Join thousands of businesses running on AI Employees. Start your free trial today.
        </p>
        <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-brand font-semibold text-[17px] rounded-2xl hover:bg-gray-50 hover:shadow-xl transition-all">
          Get Started Free
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
        <p className="text-white/40 text-[13px] mt-5">No credit card · 14-day trial · Cancel anytime</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <EmployeeShowcase />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </>
  )
}
