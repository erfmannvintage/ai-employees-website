import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

function Hero() {
  return (
    <section className="section-cream halftone">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <div className="speech-bubble inline-block mb-10">
            11 AI Employees — Ready to Work!
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] mb-8 text-ink">
            Your Complete
            <br />
            <span className="text-pop-red">AI Workforce</span>
          </h1>

          <p className="text-xl text-ink-muted leading-relaxed mb-4 max-w-2xl mx-auto">
            11 specialized AI employees handling your marketing, sales, support, content, analytics, legal, ads, research and finance.
          </p>
          <p className="text-ink-faint text-lg mb-12">
            Less than one freelancer. Starts at <span className="text-ink font-bold">$97/mo</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-lg text-lg px-12 py-5">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
            <Link to="/pricing" className="btn-outline text-lg px-12 py-5">View Pricing</Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-ink-faint">
            {['No credit card', '14-day free trial', 'Cancel anytime'].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-pop-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Character strip below hero text */}
        <div className="mt-16 flex justify-center gap-3 overflow-hidden">
          {employees.slice(0, 6).map((emp) => (
            <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="shrink-0 w-28 sm:w-36">
              <div className="comic-panel-subtle rounded-xl overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img src={emp.image} alt={emp.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-2 text-center">
                  <p className="text-[10px] font-bold text-ink-muted uppercase">{emp.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoBar() {
  return (
    <section className="py-10 section-white border-y-2 border-light-200">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-[11px] font-semibold text-ink-ghost uppercase tracking-[0.25em] mb-6">Integrates with tools you already use</p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 text-ink-ghost">
          {['Gmail', 'Google Calendar', 'GA4', 'MailerLite', 'Stripe', 'YouTube', 'Search Console'].map((t) => (
            <span key={t} className="text-sm font-semibold hover:text-ink transition-colors">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function EmployeeGrid() {
  return (
    <section className="py-28 lg:py-36 section-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-pop-red font-semibold uppercase tracking-[0.2em] text-xs mb-4">Your AI Team</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink mb-5">
            Meet Your <span className="text-pop-red">11 Employees</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Each one a deep specialist. They collaborate, cross-review work, and learn your business inside out.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {employees.slice(0, 8).map((emp) => (
            <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="comic-panel-subtle rounded-2xl overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden bg-light">
                <img src={emp.image} alt={emp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 lg:p-5">
                <h3 className="font-bold text-ink text-base lg:text-lg">{emp.name}</h3>
                <p className="text-pop-red text-[11px] font-semibold uppercase tracking-wider mt-0.5">{emp.role}</p>
                <p className="text-ink-faint text-sm mt-2 leading-relaxed line-clamp-2 hidden sm:block">{emp.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom 3 centered */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mt-6 max-w-[75%] mx-auto">
          {employees.slice(8).map((emp) => (
            <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="comic-panel-subtle rounded-2xl overflow-hidden group">
              <div className="aspect-[3/4] overflow-hidden bg-light">
                <img src={emp.image} alt={emp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 lg:p-5">
                <h3 className="font-bold text-ink text-base lg:text-lg">{emp.name}</h3>
                <p className="text-pop-red text-[11px] font-semibold uppercase tracking-wider mt-0.5">{emp.role}</p>
                <p className="text-ink-faint text-sm mt-2 leading-relaxed line-clamp-2 hidden sm:block">{emp.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/about" className="btn-outline px-10 py-4 text-base">Meet the Full Team &rarr;</Link>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Sign Up', desc: 'Create your account in 30 seconds. No credit card, no technical knowledge needed.', bg: 'bg-pop-red text-white' },
    { num: '02', title: 'Describe Your Business', desc: 'Fill in your Business Profile — name, niche, audience, brand voice. More detail = smarter team.', bg: 'bg-pop-blue text-white' },
    { num: '03', title: 'Team Activates', desc: 'All 11 employees spin up instantly with deep platform knowledge plus your business context.', bg: 'bg-neon text-black' },
    { num: '04', title: 'Scale & Grow', desc: 'Upload data, create custom skills, connect integrations. Your AI team gets smarter every day.', bg: 'bg-pop-orange text-white' },
  ]

  return (
    <section className="py-28 lg:py-36 section-cream halftone">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-pop-blue font-semibold uppercase tracking-[0.2em] text-xs mb-4">How It Works</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            Live in <span className="text-pop-blue">Under 60 Seconds</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="comic-panel rounded-2xl p-8">
              <div className={`w-14 h-14 ${s.bg} rounded-xl border-2 border-ink flex items-center justify-center mb-6`}>
                <span className="font-black">{s.num}</span>
              </div>
              <h3 className="font-bold text-ink text-xl mb-3">{s.title}</h3>
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
    { title: 'AI-Powered Intelligence', desc: 'Built on cutting-edge LLMs. Each employee has deep domain expertise and learns your specific business context.' },
    { title: 'Cross-Team Collaboration', desc: 'Flora checks with Poppi on strategy. Hugh validates with Rupert on legal. Your AI team actually works as a team.' },
    { title: 'Real-Time Analytics', desc: 'Ava tracks every metric. Dashboards, anomaly detection, and predictive insights — all automated.' },
    { title: 'Content Pipeline', desc: 'From blog posts to social media to video — Mabel, Flora, and Poppi create and publish content that converts.' },
    { title: 'Plug & Play Integrations', desc: 'Gmail, Google Calendar, GA4, MailerLite, Stripe, and more. Connects to tools you already use.' },
    { title: 'Enterprise Security', desc: 'Bank-level encryption, row-level security, GDPR compliant. Your data is isolated and protected at every layer.' },
  ]

  return (
    <section className="py-28 lg:py-36 section-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-pop-orange font-semibold uppercase tracking-[0.2em] text-xs mb-4">Features</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            Built for <span className="text-pop-orange">Serious Business</span>
          </h2>
          <p className="text-ink-muted text-lg mt-5 max-w-2xl mx-auto">Not a chatbot. Not a toy. A complete AI workforce with real capabilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="comic-panel-subtle rounded-2xl p-8">
              <h3 className="font-bold text-ink text-lg mb-3">{f.title}</h3>
              <p className="text-ink-faint text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const testimonials = [
    { quote: "I replaced 3 freelancers with AI Employees. My marketing runs 24/7 now and the quality is genuinely better.", name: 'Sarah K.', role: 'E-commerce Founder' },
    { quote: "Hugh closed more leads in his first week than my previous outreach tool did in a month. The ROI is insane.", name: 'Marcus T.', role: 'SaaS Founder' },
    { quote: "Having Ava do analytics and Angela handle finance means I actually understand my numbers for the first time.", name: 'Priya R.', role: 'Agency Owner' },
  ]

  return (
    <section className="py-28 lg:py-36 section-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {[
            { value: '11', label: 'AI Employees' },
            { value: '24/7', label: 'Availability' },
            { value: '90%', label: 'Time Saved' },
            { value: '<1min', label: 'Response Time' },
          ].map((s) => (
            <div key={s.label} className="comic-panel-static rounded-2xl p-8 text-center">
              <div className="font-black text-5xl sm:text-6xl text-pop-red">{s.value}</div>
              <div className="text-sm font-semibold text-ink-faint uppercase tracking-wider mt-3">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-14">
          <p className="text-pop-pink font-semibold uppercase tracking-[0.2em] text-xs mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            Loved by <span className="text-pop-pink">Business Owners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="comic-panel-static rounded-2xl p-8">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pop-yellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-ink-light text-base leading-relaxed mb-6">"{t.quote}"</blockquote>
              <div className="pt-5 border-t-2 border-light-200">
                <div className="font-bold text-ink">{t.name}</div>
                <div className="text-sm text-ink-faint mt-0.5">{t.role}</div>
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
    <section className="py-28 lg:py-36 section-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-pop-purple font-semibold uppercase tracking-[0.2em] text-xs mb-4">Pricing</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink">
            Simple, <span className="text-pop-purple">Transparent</span>
          </h2>
          <p className="text-ink-muted text-lg mt-5">No hidden fees. Start free, scale when you're ready.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="comic-panel-static rounded-2xl p-10 relative" style={{ borderColor: 'var(--color-pop-red)', boxShadow: '6px 6px 0 var(--color-pop-red)' }}>
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="speech-bubble text-sm px-6 py-2.5">{plan.badge}</div>
            </div>
            <div className="text-center mb-8 mt-4">
              <h3 className="font-bold text-xl text-ink">{plan.name}</h3>
              <div className="my-4">
                <span className="font-black text-7xl text-ink">${plan.price}</span>
                <span className="text-ink-faint text-xl">/{plan.period}</span>
              </div>
              <p className="text-ink-muted">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-10">
              {plan.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pop-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-ink-light">{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon w-full text-center text-lg py-4">Start Free Trial</a>
          </div>
          <div className="text-center mt-10">
            <Link to="/pricing" className="text-pop-red font-semibold hover:underline">See all plans &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-28 lg:py-36 section-neon">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight mb-6">
          Ready to Hire Your
          <br />
          AI Workforce?
        </h2>
        <p className="text-xl text-black/60 max-w-2xl mx-auto mb-12">
          Join thousands of businesses running on AI Employees. Start your free trial today — no credit card required.
        </p>
        <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-dark text-lg px-14 py-5">
          Start Free Trial
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
        <p className="text-black/40 text-sm mt-5">14-day free trial · No credit card · Cancel anytime</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <LogoBar />
      <EmployeeGrid />
      <HowItWorks />
      <Features />
      <SocialProof />
      <PricingPreview />
      <FinalCTA />
    </>
  )
}
