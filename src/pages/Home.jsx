import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

function Hero() {
  return (
    <section className="relative overflow-hidden section-cream halftone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="speech-bubble inline-block mb-8">
              11 AI Employees — Ready to Work!
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 text-ink">
              Your Complete
              <br />
              <span className="text-pop-red">AI Workforce</span>
            </h1>
            <p className="text-lg text-ink-muted max-w-lg mb-2 leading-relaxed">
              11 specialized AI employees handling your marketing, sales, support, content, analytics, legal, ads, research and finance.
            </p>
            <p className="text-ink-faint mb-10">
              Less than one freelancer. Starts at <span className="text-ink font-bold">$97/mo</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon btn-neon-lg">
                Start Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <Link to="/pricing" className="btn-outline text-base px-10 py-[16px]">View Pricing</Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-ink-faint">
              {['No credit card', '14-day free trial', 'Cancel anytime'].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-pop-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="comic-panel-static rounded-2xl p-2 max-w-[380px] mx-auto">
              <img src="/characters/cecil.png" alt="Cecil" className="w-full rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border-2 border-ink rounded-lg px-4 py-2.5">
                <span className="text-ink font-bold text-sm">Cecil</span>
                <span className="text-ink-faint text-xs ml-2">Executive Assistant</span>
              </div>
            </div>
            <div className="absolute -top-4 -left-8 w-20 h-20 border-3 border-ink rounded-xl overflow-hidden shadow-[3px_3px_0_var(--color-ink)] animate-float">
              <img src="/characters/flora.png" alt="Flora" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-8 -right-6 w-16 h-16 border-3 border-ink rounded-xl overflow-hidden shadow-[3px_3px_0_var(--color-ink)] animate-float" style={{ animationDelay: '1.5s' }}>
              <img src="/characters/poppi.png" alt="Poppi" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 w-20 h-20 border-3 border-ink rounded-xl overflow-hidden shadow-[3px_3px_0_var(--color-ink)] animate-float" style={{ animationDelay: '2.5s' }}>
              <img src="/characters/hugh.png" alt="Hugh" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoBar() {
  return (
    <section className="py-8 section-white border-y-2 border-light-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-semibold text-ink-ghost uppercase tracking-[0.2em] mb-5">Integrates with</p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-ink-ghost">
          {['Gmail', 'Google Calendar', 'GA4', 'MailerLite', 'Stripe', 'YouTube', 'Search Console'].map((t) => (
            <span key={t} className="text-xs font-semibold uppercase tracking-wider hover:text-ink transition-colors">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function EmployeeGrid() {
  return (
    <section className="py-24 lg:py-32 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pop-red font-semibold uppercase tracking-[0.2em] text-xs mb-4">Your AI Team</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink mb-4">
            Meet Your <span className="text-pop-red">11 Employees</span>
          </h2>
          <p className="text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Each one a deep specialist. They collaborate, cross-review work, and learn your business inside out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {employees.slice(0, 8).map((emp) => (
            <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="comic-panel-subtle rounded-2xl overflow-hidden group">
              <div className="aspect-[4/5] overflow-hidden bg-light">
                <img src={emp.image} alt={emp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-ink text-lg">{emp.name}</h3>
                <p className="text-pop-red text-xs font-semibold uppercase tracking-wider mt-0.5">{emp.role}</p>
                <p className="text-ink-faint text-sm mt-3 leading-relaxed line-clamp-2">{emp.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          {employees.slice(8).map((emp) => (
            <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} className="comic-panel-subtle rounded-2xl overflow-hidden group">
              <div className="aspect-[4/5] overflow-hidden bg-light">
                <img src={emp.image} alt={emp.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-ink text-lg">{emp.name}</h3>
                <p className="text-pop-red text-xs font-semibold uppercase tracking-wider mt-0.5">{emp.role}</p>
                <p className="text-ink-faint text-sm mt-3 leading-relaxed line-clamp-2">{emp.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about" className="btn-outline px-8 py-3">Meet the Full Team &rarr;</Link>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Sign Up', desc: 'Create your account in 30 seconds. No credit card needed.', bg: 'bg-pop-red' },
    { num: '02', title: 'Describe Business', desc: 'Fill in your Business Profile — niche, audience, brand voice.', bg: 'bg-pop-blue' },
    { num: '03', title: 'Team Activates', desc: 'All 11 employees spin up with your business context.', bg: 'bg-neon' },
    { num: '04', title: 'Scale & Grow', desc: 'Upload data, connect integrations. Team gets smarter daily.', bg: 'bg-pop-orange' },
  ]

  return (
    <section className="py-24 lg:py-32 section-cream halftone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pop-blue font-semibold uppercase tracking-[0.2em] text-xs mb-4">How It Works</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink">
            Live in <span className="text-pop-blue">Under 60 Seconds</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="comic-panel rounded-2xl p-7">
              <div className={`w-12 h-12 ${s.bg} ${s.bg === 'bg-neon' ? 'text-black' : 'text-white'} rounded-xl border-2 border-ink flex items-center justify-center mb-5`}>
                <span className="font-black text-sm">{s.num}</span>
              </div>
              <h3 className="font-bold text-ink text-lg mb-2">{s.title}</h3>
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
    { icon: '🧠', title: 'AI-Powered Intelligence', desc: 'Deep domain expertise. Each employee learns your specific business context.' },
    { icon: '🤝', title: 'Cross-Team Collaboration', desc: 'Flora checks with Poppi. Hugh validates with Rupert. Real teamwork.' },
    { icon: '📊', title: 'Real-Time Analytics', desc: 'Dashboards, anomaly detection, and predictive insights — automated.' },
    { icon: '📝', title: 'Content Pipeline', desc: 'Blog to social to video — create and publish content that converts.' },
    { icon: '🔌', title: 'Plug & Play Integrations', desc: 'Gmail, Calendar, GA4, MailerLite, Stripe. Tools you already use.' },
    { icon: '🛡️', title: 'Enterprise Security', desc: 'Bank-level encryption, row-level security, GDPR compliant.' },
  ]

  return (
    <section className="py-24 lg:py-32 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-pop-orange font-semibold uppercase tracking-[0.2em] text-xs mb-4">Features</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink">
            Built for <span className="text-pop-orange">Serious Business</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="comic-panel-subtle rounded-2xl p-7">
              <span className="text-3xl block mb-5">{f.icon}</span>
              <h3 className="font-bold text-ink text-lg mb-2">{f.title}</h3>
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
    <section className="py-24 lg:py-32 section-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {[
            { value: '11', label: 'AI Employees' },
            { value: '24/7', label: 'Availability' },
            { value: '90%', label: 'Time Saved' },
            { value: '<1min', label: 'Response Time' },
          ].map((s) => (
            <div key={s.label} className="comic-panel-static rounded-2xl p-7 text-center">
              <div className="font-black text-4xl sm:text-5xl text-pop-red">{s.value}</div>
              <div className="text-xs font-semibold text-ink-faint uppercase tracking-wider mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-pop-pink font-semibold uppercase tracking-[0.2em] text-xs mb-4">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink">
            Loved by <span className="text-pop-pink">Business Owners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="comic-panel-static rounded-2xl p-7">
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pop-yellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-ink-light leading-relaxed mb-6">"{t.quote}"</blockquote>
              <div className="pt-5 border-t-2 border-light-200">
                <div className="font-semibold text-ink text-sm">{t.name}</div>
                <div className="text-xs text-ink-faint mt-0.5">{t.role}</div>
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
    <section className="py-24 lg:py-32 section-white halftone-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-pop-purple font-semibold uppercase tracking-[0.2em] text-xs mb-4">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-black text-ink">
            Simple, <span className="text-pop-purple">Transparent</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="comic-panel-static rounded-2xl p-8 relative border-pop-red shadow-[5px_5px_0_var(--color-pop-red)]" style={{ borderColor: 'var(--color-pop-red)' }}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="speech-bubble text-sm px-5 py-2">{plan.badge}</div>
            </div>
            <div className="text-center mb-6 mt-4">
              <h3 className="font-bold text-xl text-ink">{plan.name}</h3>
              <div className="my-4">
                <span className="font-black text-6xl text-ink">${plan.price}</span>
                <span className="text-ink-faint text-lg">/{plan.period}</span>
              </div>
              <p className="text-sm text-ink-muted">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pop-green shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-sm text-ink-light">{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon w-full text-center">Start Free Trial</a>
          </div>
          <div className="text-center mt-8">
            <Link to="/pricing" className="text-pop-red font-semibold hover:underline text-sm">See all plans &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 section-neon halftone">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-5 leading-tight">
          Ready to Hire Your AI Workforce?
        </h2>
        <p className="text-lg text-black/60 max-w-2xl mx-auto mb-10">
          Join thousands of businesses running on AI Employees. Start free today.
        </p>
        <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-dark text-lg px-10 py-5">
          Start Free Trial
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
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
