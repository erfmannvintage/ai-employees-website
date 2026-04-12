import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-bg-animated">
      {/* Gradient orbs */}
      <div className="orb w-[600px] h-[600px] bg-[#6C3AFF] -top-40 -right-40 animate-float" />
      <div className="orb w-[500px] h-[500px] bg-[#FF3366] -bottom-40 -left-40 animate-float-delay" />
      <div className="orb w-[300px] h-[300px] bg-[#00D4FF] top-1/3 left-1/2 animate-float-slow" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 glass-card rounded-full">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00CC88] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00CC88]" />
            </span>
            <span className="text-sm font-semibold text-white/80">11 AI Employees — Ready to Work for You</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 tracking-tight">
            <span className="text-white">Your Complete</span>
            <br />
            <span className="gradient-text">AI Workforce</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
            11 specialized AI employees handling your marketing, sales, support,
            content, analytics, legal, advertising, research, and finance.
          </p>
          <p className="text-base sm:text-lg text-white/40 mb-12">
            Less than the cost of one freelancer. Starts at <span className="text-white font-semibold">$97/mo</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="https://artifactly-ai-employees.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4"
            >
              Start Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <Link to="/pricing" className="btn-secondary text-lg px-10 py-4">
              View Pricing
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
            {['No credit card required', '14-day free trial', 'Cancel anytime'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#00CC88]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Floating employee avatars around the hero */}
        <div className="hidden lg:block">
          {employees.slice(0, 6).map((emp, i) => {
            const positions = [
              { top: '15%', left: '3%' },
              { top: '60%', left: '1%' },
              { top: '80%', left: '10%' },
              { top: '15%', right: '3%' },
              { top: '60%', right: '1%' },
              { top: '80%', right: '10%' },
            ]
            const pos = positions[i]
            return (
              <div
                key={emp.name}
                className={`absolute ${i % 2 === 0 ? 'animate-float' : 'animate-float-delay'}`}
                style={pos}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg"
                  style={{ background: emp.gradientCSS, boxShadow: `0 8px 30px ${emp.shadowColor}` }}
                >
                  {emp.initial}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--color-dark-900)] to-transparent" />
    </section>
  )
}

function LogoBar() {
  return (
    <section className="py-14 section-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-white/30 mb-8 uppercase tracking-widest">Integrates with tools you already use</p>
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 text-white/20">
          {['Gmail', 'Google Calendar', 'Analytics', 'MailerLite', 'Stripe', 'YouTube', 'Search Console'].map((tool) => (
            <span key={tool} className="text-sm sm:text-base font-semibold tracking-wide hover:text-white/40 transition-colors">{tool}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function EmployeeGrid() {
  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      <div className="absolute inset-0 halftone-subtle" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FF3366] mb-4">Your AI Team</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Meet Your <span className="gradient-text-blue">11 Employees</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Each one is a deep specialist. They collaborate, cross-review work, and learn your business inside out.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {employees.map((emp) => (
            <div
              key={emp.name}
              className="group glass-card p-6 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1"
              style={{ '--hover-shadow': emp.shadowColor }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: emp.gradientCSS, boxShadow: `0 4px 20px ${emp.shadowColor}` }}
                >
                  {emp.initial}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-lg">{emp.name}</h3>
                  <p className="text-sm font-medium text-white/50">{emp.role}</p>
                </div>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mt-4">{emp.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {emp.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/[0.06] text-white/50 border border-white/[0.06]">
                    {skill}
                  </span>
                ))}
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
    {
      num: '01',
      title: 'Sign Up in 30 Seconds',
      desc: 'Create your account — no credit card, no setup wizards, no technical knowledge needed.',
      gradient: 'from-[#FF3366] to-[#FF5C8A]',
    },
    {
      num: '02',
      title: 'Describe Your Business',
      desc: 'Fill in your Business Profile. Your name, niche, audience, brand voice. More detail = smarter team.',
      gradient: 'from-[#6C3AFF] to-[#8B5CF6]',
    },
    {
      num: '03',
      title: 'Your Team Activates',
      desc: 'All 11 employees spin up instantly with deep platform knowledge plus your business context.',
      gradient: 'from-[#00D4FF] to-[#00CC88]',
    },
    {
      num: '04',
      title: 'Scale & Optimize',
      desc: 'Upload data, create custom skills, connect integrations. Your AI team gets smarter every single day.',
      gradient: 'from-[#FFBE0B] to-[#FF6B35]',
    },
  ]

  return (
    <section className="py-24 lg:py-32 section-darker relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#6C3AFF] top-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00D4FF] mb-4">How It Works</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Live in <span className="gradient-text-blue">Under 60 Seconds</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Zero technical setup. Zero prompt engineering. Just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-10" />
              )}
              <div className="glass-card p-6 h-full hover:bg-white/[0.06] transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-5`}>
                  <span className="text-white font-black text-sm">{step.num}</span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      ),
      title: 'AI-Powered Intelligence',
      desc: 'Built on cutting-edge language models. Each employee has deep domain expertise and learns your specific business context.',
      gradient: 'from-[#6C3AFF] to-[#00D4FF]',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ),
      title: 'Cross-Team Collaboration',
      desc: 'Employees review each other\'s work. Flora checks with Poppi on strategy. Hugh validates with Rupert on legal. Real teamwork.',
      gradient: 'from-[#FF3366] to-[#FF6B35]',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      ),
      title: 'Real-Time Analytics',
      desc: 'Ava tracks every metric. Dashboards, reports, anomaly detection, and predictive insights — all automated.',
      gradient: 'from-[#00D4FF] to-[#00CC88]',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
      ),
      title: 'Content Pipeline',
      desc: 'From blog posts to social media to video — Mabel, Flora, and Poppi create, schedule, and publish content that converts.',
      gradient: 'from-[#8B5CF6] to-[#D946EF]',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
      ),
      title: 'Plug & Play Integrations',
      desc: 'Gmail, Google Calendar, GA4, MailerLite, Stripe, and more. Connects to the tools you already use.',
      gradient: 'from-[#FFBE0B] to-[#FF6B35]',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
      ),
      title: 'Enterprise Security',
      desc: 'Bank-level encryption, row-level security, GDPR compliant. Your data is isolated and protected at every layer.',
      gradient: 'from-[#10B981] to-[#06B6D4]',
    },
  ]

  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-[#FF3366] -bottom-60 -left-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FFBE0B] mb-4">Features</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Built for <span className="gradient-text">Serious Business</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Not a chatbot. Not a toy. A complete AI workforce with real capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="glass-card p-7 group hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 text-white transition-transform duration-300 group-hover:scale-110`}>
                {f.icon}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  const testimonials = [
    {
      quote: "I replaced 3 freelancers with AI Employees. My marketing runs 24/7 now and the quality is genuinely better.",
      name: 'Sarah K.',
      role: 'E-commerce Founder',
    },
    {
      quote: "Hugh closed more leads in his first week than my previous outreach tool did in a month. The ROI is insane.",
      name: 'Marcus T.',
      role: 'SaaS Founder',
    },
    {
      quote: "Having Ava do analytics and Angela handle finance means I actually understand my numbers for the first time.",
      name: 'Priya R.',
      role: 'Agency Owner',
    },
  ]

  const stats = [
    { value: '11', label: 'AI Employees', gradient: 'from-[#FF3366] to-[#FF6B35]' },
    { value: '24/7', label: 'Availability', gradient: 'from-[#6C3AFF] to-[#00D4FF]' },
    { value: '90%', label: 'Time Saved', gradient: 'from-[#00CC88] to-[#00D4FF]' },
    { value: '<1min', label: 'Response Time', gradient: 'from-[#FFBE0B] to-[#FF6B35]' },
  ]

  return (
    <section className="py-24 lg:py-32 section-darker relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#00D4FF] top-20 left-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card-strong p-6 sm:p-8 text-center">
              <div className={`font-display font-black text-4xl sm:text-5xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white/40 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00CC88] mb-4">Testimonials</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white">
            Loved by <span className="gradient-text-pink">Business Owners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-7">
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FFBE0B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-white/70 leading-relaxed mb-6 text-[15px]">"{t.quote}"</blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF3366] to-[#6C3AFF] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{t.name[0]}{t.name.split(' ')[1][0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
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
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-[#6C3AFF] -bottom-40 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#6C3AFF] mb-4">Pricing</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Simple, <span className="gradient-text-blue">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            No hidden fees. No per-seat gotchas. Start free, scale when you're ready.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="glass-card-strong p-8 relative glow-purple">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#FF3366] to-[#6C3AFF] text-white text-xs font-bold rounded-full">
              {plan.badge}
            </div>
            <div className="text-center mb-6">
              <h3 className="font-bold text-xl text-white mb-1">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1 my-3">
                <span className="font-display font-black text-6xl text-white">${plan.price}</span>
                <span className="text-white/40 text-lg">/{plan.period}</span>
              </div>
              <p className="text-sm text-white/40">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#00CC88] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-white/60">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://artifactly-ai-employees.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              Start Free Trial
            </a>
          </div>
          <div className="text-center mt-6">
            <Link to="/pricing" className="text-[#6C3AFF] font-semibold hover:text-[#8B5CF6] transition-colors">
              See all plans &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden gradient-bg-animated">
      <div className="orb w-[600px] h-[600px] bg-[#FF3366] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Ready to Hire Your
          <br />
          <span className="gradient-text">AI Workforce?</span>
        </h2>
        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10">
          Join thousands of businesses running on AI Employees. Start free today.
        </p>
        <a
          href="https://artifactly-ai-employees.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-lg px-12 py-5"
        >
          Start Free Trial
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
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
