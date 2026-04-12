import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

function Hero() {
  return (
    <section className="relative overflow-hidden section-dark halftone">
      {/* Action lines radiating from center */}
      <div className="absolute inset-0 action-lines opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            {/* Speech bubble badge */}
            <div className="speech-bubble inline-block mb-8 text-sm">
              11 AI Employees — Ready to Work!
            </div>

            <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] mb-6 tracking-tight">
              <span className="text-white">Your Complete</span>
              <br />
              <span className="text-neon text-glow">AI Workforce</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 max-w-lg mb-3 leading-relaxed">
              11 specialized AI employees handling your marketing, sales, support, content, analytics, legal, ads, research & finance.
            </p>
            <p className="text-gray-300 mb-8">
              Less than one freelancer. Starts at <span className="text-neon font-bold">$97/mo</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon-lg btn-neon">
                Start Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <Link to="/pricing" className="btn-outline text-lg px-10 py-[18px]">View Pricing</Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300">
              {['No credit card', '14-day free trial', 'Cancel anytime'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-neon rounded-full" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — character showcase */}
          <div className="relative">
            {/* Main featured character */}
            <div className="relative z-10 comic-panel rounded-2xl p-2 max-w-sm mx-auto">
              <img src="/characters/cecil.png" alt="Cecil - Executive Assistant" className="w-full rounded-xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-dark/90 backdrop-blur-sm border-2 border-neon rounded-lg px-4 py-2">
                <span className="text-neon font-extrabold uppercase text-sm">Cecil</span>
                <span className="text-gray-300 text-xs ml-2">Executive Assistant</span>
              </div>
            </div>

            {/* Floating side characters */}
            <div className="absolute -top-4 -left-4 lg:-left-12 w-20 h-20 border-comic rounded-xl overflow-hidden shadow-pop-sm animate-float z-20">
              <img src="/characters/flora.png" alt="Flora" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-2 -right-4 lg:-right-8 w-18 h-18 border-comic rounded-xl overflow-hidden shadow-pop-sm animate-float z-20" style={{ animationDelay: '1s' }}>
              <img src="/characters/poppi.png" alt="Poppi" className="w-full h-full object-cover" style={{ width: '72px', height: '72px' }} />
            </div>
            <div className="absolute -bottom-4 -right-2 lg:-right-10 w-20 h-20 border-comic rounded-xl overflow-hidden shadow-pop-sm animate-float z-20" style={{ animationDelay: '2s' }}>
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
    <section className="py-10 section-100 border-y border-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">Integrates with</p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-gray-400">
          {['Gmail', 'Google Calendar', 'GA4', 'MailerLite', 'Stripe', 'YouTube', 'Search Console'].map((t) => (
            <span key={t} className="text-sm font-bold uppercase tracking-wide hover:text-neon transition-colors">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function EmployeeGrid() {
  return (
    <section className="py-20 lg:py-28 section-dark relative">
      <div className="absolute inset-0 halftone" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-neon font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Your AI Team</p>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase text-white">
            Meet Your <span className="text-neon text-glow">11 Employees</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Each one a deep specialist. They collaborate, cross-review work, and learn your business inside out.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {employees.map((emp) => (
            <div key={emp.name} className="comic-panel-subtle rounded-xl overflow-hidden group cursor-default">
              {/* Character image */}
              <div className="aspect-square overflow-hidden bg-dark-300">
                <img
                  src={emp.image}
                  alt={emp.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Info */}
              <div className="p-3 sm:p-4">
                <h3 className="font-extrabold text-white uppercase text-sm sm:text-base">{emp.name}</h3>
                <p className="text-neon text-xs font-bold uppercase tracking-wide">{emp.role}</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed hidden sm:block">{emp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Sign Up', desc: 'Create your account in 30 seconds. No credit card, no technical knowledge needed.', color: 'bg-pop-red' },
    { num: '02', title: 'Describe Business', desc: 'Fill in your Business Profile — name, niche, audience, brand voice. More detail = smarter team.', color: 'bg-pop-blue' },
    { num: '03', title: 'Team Activates', desc: 'All 11 employees spin up instantly with deep platform knowledge plus your business context.', color: 'bg-neon text-black' },
    { num: '04', title: 'Scale & Grow', desc: 'Upload data, create custom skills, connect integrations. Your AI team gets smarter every day.', color: 'bg-pop-orange' },
  ]

  return (
    <section className="py-20 lg:py-28 section-100 stripes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-neon font-extrabold uppercase tracking-[0.2em] text-sm mb-3">How It Works</p>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase text-white">
            Live in <span className="text-neon text-glow">60 Seconds</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.num} className="comic-panel rounded-xl p-6">
              <div className={`w-14 h-14 ${s.color} border-3 border-black rounded-xl flex items-center justify-center mb-4`}>
                <span className="font-black text-lg">{s.num}</span>
              </div>
              <h3 className="font-extrabold text-white uppercase text-lg mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { icon: '🧠', title: 'AI-Powered Intelligence', desc: 'Built on cutting-edge LLMs. Each employee has deep domain expertise and learns your business context.' },
    { icon: '🤝', title: 'Cross-Team Collaboration', desc: 'Flora checks with Poppi on strategy. Hugh validates with Rupert on legal. Real teamwork.' },
    { icon: '📊', title: 'Real-Time Analytics', desc: 'Ava tracks every metric. Dashboards, anomaly detection, and predictive insights — automated.' },
    { icon: '📝', title: 'Content Pipeline', desc: 'Blog posts to social media to video — Mabel, Flora, and Poppi create and publish content that converts.' },
    { icon: '🔌', title: 'Plug & Play Integrations', desc: 'Gmail, Calendar, GA4, MailerLite, Stripe, and more. Connects to tools you already use.' },
    { icon: '🛡️', title: 'Enterprise Security', desc: 'Bank-level encryption, row-level security, GDPR compliant. Data isolated and protected.' },
  ]

  return (
    <section className="py-20 lg:py-28 section-dark halftone-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-pop-red font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Features</p>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase text-white">
            Built for <span className="text-neon text-glow">Serious Business</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="comic-panel-subtle rounded-xl p-6 group">
              <span className="text-3xl block mb-4">{f.icon}</span>
              <h3 className="font-extrabold text-white uppercase mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
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
    <section className="py-20 lg:py-28 section-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: '11', label: 'AI Employees' },
            { value: '24/7', label: 'Availability' },
            { value: '90%', label: 'Time Saved' },
            { value: '<1min', label: 'Response Time' },
          ].map((s) => (
            <div key={s.label} className="comic-panel rounded-xl p-6 text-center">
              <div className="font-black text-4xl sm:text-5xl text-neon text-glow">{s.value}</div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-pop-pink font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Testimonials</p>
          <h2 className="font-extrabold text-4xl sm:text-5xl uppercase text-white">
            Loved by <span className="text-neon text-glow">Business Owners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="comic-panel rounded-xl p-6">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pop-yellow" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <blockquote className="text-gray-200 leading-relaxed mb-5">"{t.quote}"</blockquote>
              <div className="pt-4 border-t border-gray-500">
                <div className="font-bold text-white text-sm">{t.name}</div>
                <div className="text-xs text-gray-400">{t.role}</div>
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
    <section className="py-20 lg:py-28 section-dark halftone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-neon font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Pricing</p>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase text-white">
            Simple, <span className="text-neon text-glow">Transparent</span>
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="comic-panel rounded-2xl p-8 relative glow-neon">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="speech-bubble text-sm px-5 py-2">{plan.badge}</div>
            </div>
            <div className="text-center mb-6 mt-4">
              <h3 className="font-extrabold text-xl text-white uppercase">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1 my-3">
                <span className="font-black text-6xl text-neon text-glow">${plan.price}</span>
                <span className="text-gray-400 text-lg">/{plan.period}</span>
              </div>
              <p className="text-sm text-gray-400">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-neon rounded-full shrink-0" />
                  <span className="text-sm text-gray-200">{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-neon w-full text-center">
              Start Free Trial
            </a>
          </div>
          <div className="text-center mt-6">
            <Link to="/pricing" className="text-neon font-bold uppercase hover:underline text-sm">See all plans &rarr;</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 section-neon relative overflow-hidden">
      <div className="absolute inset-0 halftone-dense opacity-30" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)' }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-black mb-4 leading-tight">
          Ready to Hire Your AI Workforce?
        </h2>
        <p className="text-lg text-black/70 max-w-2xl mx-auto mb-10">
          Join thousands of businesses running on AI Employees. Start free today.
        </p>
        <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-black text-neon font-black text-lg uppercase border-3 border-black shadow-[5px_5px_0_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0_rgba(0,0,0,0.3)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
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
