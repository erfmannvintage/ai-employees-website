import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

function Hero() {
  return (
    <section className="section-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="badge mb-8 mx-auto w-fit">
            <span className="w-2 h-2 bg-pop-green rounded-full" />
            11 AI Employees — Ready to Work
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-black leading-[1.05] mb-8 text-ink tracking-tight">
            Your AI employees.
            <br />
            <span className="text-brand">Your unfair advantage.</span>
          </h1>

          <p className="text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto mb-10">
            11 specialized AI employees handle your marketing, sales, support, content, analytics, legal, ads, research, and finance — for less than one freelancer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary-lg">
              Get Started Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <Link to="/pricing" className="btn-secondary text-base px-10 py-[18px]">View Pricing</Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-ink-light">
            {['No credit card required', '14-day free trial', 'Cancel anytime'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pop-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Character carousel */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4">
          {employees.slice(0, 6).map((emp) => (
            <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="shrink-0 w-32 sm:w-40 card-colored group">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img src={emp.image} alt={emp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-3 text-center">
                <p className="font-semibold text-ink text-sm">{emp.name}</p>
                <p className="text-ink-light text-[11px]">{emp.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Logos() {
  return (
    <div className="section-divider" />
  )
}

function EmployeeGrid() {
  return (
    <section className="section-gray py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-brand font-semibold text-sm mb-4">Your AI Team</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight mb-5">
            Meet your 11 employees
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            Each one a certified specialist. They collaborate, cross-review each other's work, and learn your business inside out.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6">
          {employees.map((emp) => (
            <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="card overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={emp.image} alt={emp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-ink">{emp.name}</h3>
                <p className="text-brand text-xs font-semibold mt-0.5">{emp.role}</p>
                <p className="text-ink-light text-sm mt-2.5 leading-relaxed line-clamp-2">{emp.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '1', title: 'Sign up in 30 seconds', desc: 'Create your account. No credit card, no setup wizards, no technical knowledge needed.', color: 'bg-brand' },
    { num: '2', title: 'Describe your business', desc: 'Fill in your Business Profile — name, niche, audience, brand voice. More detail = smarter team.', color: 'bg-pop-blue' },
    { num: '3', title: 'Your team activates', desc: 'All 11 employees spin up with deep platform knowledge plus your business context.', color: 'bg-pop-green' },
    { num: '4', title: 'Scale and grow', desc: 'Upload data, create custom skills, connect integrations. Your AI team gets smarter every day.', color: 'bg-pop-orange' },
  ]

  return (
    <section className="section-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-pop-green font-semibold text-sm mb-4">How It Works</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight">
            Live in under 60 seconds
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="card p-8">
              <div className={`w-12 h-12 ${s.color} text-white rounded-2xl flex items-center justify-center mb-6`}>
                <span className="font-bold text-lg">{s.num}</span>
              </div>
              <h3 className="font-bold text-ink text-lg mb-3">{s.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { title: 'AI-Powered Intelligence', desc: 'Built on cutting-edge LLMs with 30+ certifications and 80+ frameworks mastered across the team.' },
    { title: 'Cross-Team Collaboration', desc: '15+ predefined workflows. Flora checks with Poppi on strategy. Hugh validates with Rupert on legal.' },
    { title: 'Real-Time Analytics', desc: 'GA4 live access, YouTube Analytics, Search Console. Attribution, cohort analysis, predictive audiences.' },
    { title: 'Content Pipeline', desc: '5 automated content chains — Mabel blogs, Flora promotes, Hugh uses in outreach, all automatically.' },
    { title: 'Self-Learning System', desc: 'Employees get smarter with every task. Weekly auto-research, monthly self-assessments, peer review.' },
    { title: 'Enterprise Security', desc: 'Bank-level encryption, row-level security, GDPR compliant. Your data is isolated and protected.' },
  ]

  return (
    <section className="section-gray py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-pop-orange font-semibold text-sm mb-4">Features</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight mb-5">
            Built for serious business
          </h2>
          <p className="text-ink-muted text-lg">Not a chatbot. A complete AI workforce with real capabilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-8">
              <h3 className="font-bold text-ink text-lg mb-3">{f.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="section-brand py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {[
            { value: '30+', label: 'Certifications' },
            { value: '80+', label: 'Frameworks Mastered' },
            { value: '24/7', label: 'Availability' },
            { value: '<60s', label: 'Setup Time' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-black text-5xl sm:text-6xl text-white">{s.value}</div>
              <div className="text-white/70 text-sm font-medium mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { quote: "I replaced 3 freelancers with AI Employees. My marketing runs 24/7 now and the quality is genuinely better.", name: 'Sarah K.', role: 'E-commerce Founder' },
    { quote: "Hugh closed more leads in his first week than my previous outreach tool did in a month. The ROI is insane.", name: 'Marcus T.', role: 'SaaS Founder' },
    { quote: "Having Ava do analytics and Angela handle finance means I actually understand my numbers for the first time.", name: 'Priya R.', role: 'Agency Owner' },
  ]

  return (
    <section className="section-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pop-pink font-semibold text-sm mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight">
            Loved by business owners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-8">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pop-yellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-ink-secondary leading-relaxed mb-6">"{t.quote}"</blockquote>
              <div className="pt-5 border-t border-gray-200">
                <div className="font-semibold text-ink">{t.name}</div>
                <div className="text-sm text-ink-light mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  const plan = plans[1]
  return (
    <section className="section-gray py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <p className="text-brand font-semibold text-sm mb-4">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-ink-muted text-lg">No hidden fees. Start free, scale when you're ready.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="card-lg p-10 border-2 border-brand relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 badge">{plan.badge}</div>
            <div className="text-center mb-8 mt-2">
              <h3 className="font-bold text-xl text-ink">{plan.name}</h3>
              <div className="my-4">
                <span className="font-black text-7xl text-ink">${plan.price}</span>
                <span className="text-ink-light text-xl">/{plan.period}</span>
              </div>
              <p className="text-ink-muted">{plan.description}</p>
            </div>
            <ul className="space-y-3.5 mb-10">
              {plan.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pop-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-ink-secondary">{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center text-lg py-4">Start Free Trial</a>
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="text-brand font-semibold hover:underline">See all plans &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="section-dark py-28 lg:py-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
          Ready to hire your
          <br />
          AI workforce?
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
          Join thousands of businesses running on AI Employees. Start your free trial today.
        </p>
        <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary-lg bg-white text-brand hover:bg-gray-100">
          Get Started Free
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
        <p className="text-white/40 text-sm mt-5">No credit card required · 14-day trial · Cancel anytime</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <EmployeeGrid />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </>
  )
}
