import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper-warm">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white border-2 border-ink rounded-full shadow-[3px_3px_0_var(--color-ink)]">
            <span className="w-2 h-2 bg-pop-green rounded-full animate-pulse" />
            <span className="text-sm font-bold text-ink">11 AI Employees — Ready to Work</span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.05] mb-6">
            Your Complete{' '}
            <span className="relative inline-block">
              <span className="relative z-10">AI Workforce</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-pop-yellow/60 -skew-x-2 z-0" />
            </span>
            <br />
            for{' '}
            <span className="text-pop-pink">$197/mo</span>
          </h1>

          <p className="text-lg sm:text-xl text-ink-light max-w-2xl mx-auto mb-10 leading-relaxed">
            11 specialized AI employees handling your marketing, sales, support, content, analytics, legal, advertising, research, and finance.
            <strong className="text-ink"> Less than the cost of one freelancer.</strong>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://artifactly-ai-employees.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-pop-pink text-white text-lg font-bold rounded-lg border-3 border-ink shadow-[5px_5px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              Start Free Trial
            </a>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white text-ink text-lg font-bold rounded-lg border-3 border-ink shadow-[5px_5px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              View Pricing
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-pop-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-pop-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              14-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-pop-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V20C240 50 480 0 720 20C960 40 1200 10 1440 30V60H0Z" fill="var(--color-paper)" />
        </svg>
      </div>
    </section>
  )
}

function EmployeeGrid() {
  return (
    <section className="py-20 lg:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-ink mb-4">
            Meet Your AI Team
          </h2>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            11 specialized AI employees, each an expert in their domain. They collaborate, cross-review each other's work, and learn your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {employees.map((emp) => (
            <div
              key={emp.name}
              className="group bg-white rounded-lg border-3 border-ink p-5 shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <div
                className="w-14 h-14 rounded-lg border-2 border-ink flex items-center justify-center text-2xl mb-3"
                style={{ backgroundColor: emp.bgColor }}
              >
                {emp.emoji}
              </div>
              <h3 className="font-bold text-lg text-ink">{emp.name}</h3>
              <p className="text-sm font-semibold mb-2" style={{ color: emp.color }}>{emp.role}</p>
              <p className="text-sm text-ink-muted leading-relaxed">{emp.description}</p>
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
      desc: 'Create your account. No credit card, no setup wizards, no technical knowledge required.',
      color: 'bg-pop-blue',
    },
    {
      num: '02',
      title: 'Tell Us About Your Business',
      desc: 'Fill in your Business Profile — your name, niche, audience, and brand voice. The more detail, the smarter your team.',
      color: 'bg-pop-pink',
    },
    {
      num: '03',
      title: 'Your Team Starts Working',
      desc: 'All 11 employees activate instantly with deep platform knowledge and your business context. Chat, delegate, review.',
      color: 'bg-pop-green',
    },
    {
      num: '04',
      title: 'Scale & Optimize',
      desc: 'Upload more data, create custom skills, connect integrations. Your AI team gets smarter every day.',
      color: 'bg-pop-purple',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-paper-warm halftone-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-ink mb-4">
            How It Works
          </h2>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            Zero technical setup. Sign up, describe your business, and your AI workforce is live.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative bg-white rounded-lg border-3 border-ink p-6 shadow-[5px_5px_0_var(--color-ink)]">
              <div className={`${step.color} w-12 h-12 rounded-lg border-2 border-ink flex items-center justify-center mb-4`}>
                <span className="text-white font-black text-lg">{step.num}</span>
              </div>
              <h3 className="font-bold text-lg text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{step.desc}</p>
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
      icon: '🧠',
      title: 'AI-Powered Intelligence',
      desc: 'Built on cutting-edge language models. Each employee has deep domain expertise and learns your specific business context.',
    },
    {
      icon: '🔄',
      title: 'Cross-Team Collaboration',
      desc: 'Employees review each other\'s work. Flora checks with Poppi on strategy. Hugh validates with Rupert on legal. Real teamwork.',
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      desc: 'Ava tracks every metric. Dashboards, reports, anomaly detection, and predictive insights — all automated.',
    },
    {
      icon: '🎨',
      title: 'Content Pipeline',
      desc: 'From blog posts to social media to video — Mabel, Flora, and Poppi create, schedule, and publish content that converts.',
    },
    {
      icon: '🔌',
      title: 'Plug & Play Integrations',
      desc: 'Gmail, Google Calendar, GA4, MailerLite, Stripe, and more. Your AI team connects to the tools you already use.',
    },
    {
      icon: '🛡️',
      title: 'Enterprise-Grade Security',
      desc: 'Bank-level encryption, row-level security, GDPR compliant. Your data is isolated and protected at every layer.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-ink mb-4">
            Built for Serious Business
          </h2>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            Not a chatbot. Not a toy. A complete AI workforce with real capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white rounded-lg border-3 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <span className="text-3xl block mb-3">{feature.icon}</span>
              <h3 className="font-bold text-lg text-ink mb-2">{feature.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{feature.desc}</p>
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
      avatar: 'SK',
    },
    {
      quote: "Hugh closed more leads in his first week than my previous outreach tool did in a month. The ROI is insane.",
      name: 'Marcus T.',
      role: 'SaaS Founder',
      avatar: 'MT',
    },
    {
      quote: "Having Ava do my analytics and Angela handle finance means I actually understand my numbers for the first time.",
      name: 'Priya R.',
      role: 'Agency Owner',
      avatar: 'PR',
    },
  ]

  const stats = [
    { value: '11', label: 'AI Employees' },
    { value: '24/7', label: 'Availability' },
    { value: '90%', label: 'Time Saved' },
    { value: '<1min', label: 'Response Time' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-paper-cool">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg border-3 border-ink p-6 text-center shadow-[4px_4px_0_var(--color-ink)]">
              <div className="font-display font-black text-3xl sm:text-4xl text-pop-pink">{stat.value}</div>
              <div className="text-sm font-semibold text-ink-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-ink mb-4">
            Loved by Business Owners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-lg border-3 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)]">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-pop-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-ink leading-relaxed mb-4">"{t.quote}"</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-ink bg-pop-pink/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-pop-pink">{t.avatar}</span>
                </div>
                <div>
                  <div className="font-bold text-sm text-ink">{t.name}</div>
                  <div className="text-xs text-ink-muted">{t.role}</div>
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
  const plan = plans[1] // Growth plan

  return (
    <section className="py-20 lg:py-28 bg-paper halftone-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-black text-4xl sm:text-5xl text-ink mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            No hidden fees. No per-seat gotchas. One plan, one team, one price.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-xl border-3 border-ink p-8 shadow-[6px_6px_0_var(--color-ink)] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pop-pink text-white text-sm font-bold rounded-full border-2 border-ink">
              {plan.badge}
            </div>
            <div className="text-center mb-6">
              <h3 className="font-display font-black text-2xl text-ink mb-1">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display font-black text-5xl text-ink">${plan.price}</span>
                <span className="text-ink-muted text-lg">/{plan.period}</span>
              </div>
              <p className="text-sm text-ink-muted mt-2">{plan.description}</p>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-pop-green shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-ink">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://artifactly-ai-employees.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3.5 bg-pop-pink text-white font-bold rounded-lg border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] hover:shadow-[1px_1px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Start Free Trial
            </a>
          </div>
          <div className="text-center mt-6">
            <Link to="/pricing" className="text-pop-pink font-semibold hover:underline">
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
    <section className="py-20 lg:py-28 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="halftone-bg-dense w-full h-full" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display font-black text-4xl sm:text-5xl text-white mb-6">
          Ready to Hire Your
          <br />
          <span className="text-pop-pink">AI Workforce?</span>
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
          Join thousands of businesses running on AI Employees. Start your free trial today — no credit card required.
        </p>
        <a
          href="https://artifactly-ai-employees.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-pop-pink text-white text-lg font-bold rounded-lg border-3 border-white/30 shadow-[5px_5px_0_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0_rgba(255,255,255,0.2)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
        >
          Start Free Trial
        </a>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <EmployeeGrid />
      <HowItWorks />
      <Features />
      <SocialProof />
      <PricingPreview />
      <FinalCTA />
    </>
  )
}
