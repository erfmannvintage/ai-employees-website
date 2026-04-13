import { Link } from 'react-router-dom'
import { employees, plans } from '../data/employees'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

function Hero() {
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ ...cx, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 100, padding: '8px 18px', marginBottom: 32 }}>
              <span style={{ width: 8, height: 8, background: '#00CC66', borderRadius: '50%' }} />
              11 AI Employees — Ready to Work
            </div>

            <h1 style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.08, letterSpacing: '-0.02em', color: '#1a1a2e', marginBottom: 24 }}>
              Your AI employees.
              <br />
              <span style={{ color: '#6C3AFF' }}>Your unfair advantage.</span>
            </h1>

            <p style={{ fontSize: 18, color: '#6b6b8d', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              11 specialized AI employees handle your marketing, sales, support, content, analytics, legal, ads, research, and finance. Less than one freelancer.
            </p>

            <div style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 36px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
                Get Started Free
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </a>
              <Link to="/pricing" style={{ display: 'inline-flex', alignItems: 'center', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 36px', textDecoration: 'none', color: '#1a1a2e', border: '2px solid #e0e0e0' }}>
                View Pricing
              </Link>
            </div>

            <div style={{ display: 'flex', gap: 24, fontSize: 13, color: '#9999aa' }}>
              {['No credit card', '14-day free trial', 'Cancel anytime'].map((t) => (
                <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <svg width="16" height="16" fill="#00CC66" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — character collage */}
          <div style={{ position: 'relative' }}>
            <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 20 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {employees.slice(0, 6).map((emp) => (
                  <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                    <div style={{ borderRadius: 16, overflow: 'hidden', border: '2px solid #fff', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                      <img src={emp.image} alt={emp.name} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, color: '#6b6b8d', marginTop: 6 }}>{emp.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            {/* Floating badge */}
            <div style={{ position: 'absolute', bottom: -20, left: -20, background: '#fff', borderRadius: 16, boxShadow: '0 8px 30px rgba(0,0,0,0.1)', border: '1px solid #eee', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 40, height: 40, background: '#00CC66', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>11</div>
              <div><div style={{ fontWeight: 700, fontSize: 14, color: '#1a1a2e' }}>AI Employees</div><div style={{ fontSize: 11, color: '#9999aa' }}>Active & ready</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EmployeeGrid() {
  return (
    <section style={{ background: '#fafafa', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', marginBottom: 60, maxWidth: 640, margin: '0 auto 60px' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Your AI Team</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>Meet your 11 employees</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d', lineHeight: 1.7 }}>Each one a certified specialist. They collaborate, cross-review each other's work, and learn your business.</p>
        </div>

        <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {employees.map((emp) => (
              <Link key={emp.name} to={`/employee/${emp.name.toLowerCase()}`} style={{ textDecoration: 'none', background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'all 0.3s', border: '1px solid rgba(0,0,0,0.04)' }}>
                <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                  <img src={emp.image} alt={emp.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15 }}>{emp.name}</h3>
                  <p style={{ color: '#6C3AFF', fontSize: 11, fontWeight: 600, marginTop: 2 }}>{emp.role}</p>
                  <p style={{ color: '#9999aa', fontSize: 13, marginTop: 8, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{emp.description}</p>
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
    { n: '1', title: 'Sign up in 30 seconds', desc: 'No credit card, no setup wizards, no technical knowledge.', bg: '#6C3AFF' },
    { n: '2', title: 'Describe your business', desc: 'Name, niche, audience, brand voice. More detail = smarter team.', bg: '#0066FF' },
    { n: '3', title: 'Your team activates', desc: '11 employees spin up with platform knowledge + your context.', bg: '#00CC66' },
    { n: '4', title: 'Scale and grow', desc: 'Upload data, create skills, connect integrations. Smarter daily.', bg: '#FF6600' },
  ]

  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
          <p style={{ color: '#00CC66', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>How It Works</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em' }}>Live in under 60 seconds</h2>
        </div>

        <div style={{ background: '#fff', borderRadius: 32, border: '1px solid #eee', padding: 40 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {steps.map((s) => (
              <div key={s.n}>
                <div style={{ width: 52, height: 52, background: s.bg, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 20, marginBottom: 20 }}>{s.n}</div>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 18, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: '#6b6b8d', fontSize: 15, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureSection({ label, title, desc, image, bg, reverse }) {
  return (
    <div style={{ borderRadius: 32, overflow: 'hidden', background: bg }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
        <div style={{ padding: 56, order: reverse ? 2 : 1 }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>{label}</p>
          <h3 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20 }}>{title}</h3>
          <p style={{ color: '#6b6b8d', fontSize: 16, lineHeight: 1.7 }}>{desc}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, order: reverse ? 1 : 2 }}>
          <div style={{ width: 280, height: 280, borderRadius: 24, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', border: '4px solid #fff' }}>
            <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section style={{ background: '#fafafa', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
          <p style={{ color: '#FF6600', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Features</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 16 }}>Built for serious business</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d' }}>Not a chatbot. A complete AI workforce with real capabilities.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <FeatureSection label="Cross-Team Collaboration" title="Your employees work as a real team" desc="15+ predefined workflows. Flora checks strategy with Poppi. Hugh validates contracts with Rupert. Every task cross-reviewed by 1-3 peers." image="/characters/poppi.png" bg="rgba(108,58,255,0.05)" reverse={false} />
          <FeatureSection label="Self-Learning System" title="They get smarter every single day" desc="5-layer learning: task insights, peer feedback, weekly auto-research, knowledge refresh, monthly self-assessments. 30+ certifications that stay current." image="/characters/bowie.png" bg="rgba(0,204,102,0.05)" reverse={true} />
          <FeatureSection label="Content Pipeline" title="5 automated content chains" desc="Mabel blogs → Flora promotes. Flora creates → Hugh outreach. Bowie researches → Poppi strategy. Hugh leads → Cecil emails. Ava reports → Flora adjusts." image="/characters/flora.png" bg="rgba(255,51,102,0.05)" reverse={false} />
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section style={{ background: '#1a1a2e', padding: '80px 0' }}>
      <div style={cx}>
        <h2 style={{ textAlign: 'center', fontSize: 44, fontWeight: 900, color: '#fff', marginBottom: 48 }}>Not just AI. Certified experts.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { v: '30+', l: 'Certifications', s: 'Google, HubSpot, Semrush, ACA, ACCA...' },
            { v: '80+', l: 'Frameworks', s: 'SPIN, MEDDIC, AARRR, PESTLE...' },
            { v: '6', l: 'Weekly Research', s: 'Automatic domain research' },
            { v: '5', l: 'Content Chains', s: 'Employee-to-employee automation' },
          ].map((s) => (
            <div key={s.l} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 24, padding: 32, textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 52, fontWeight: 900, color: '#fff' }}>{s.v}</div>
              <div style={{ fontWeight: 600, color: '#fff', fontSize: 14, marginTop: 8 }}>{s.l}</div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 6 }}>{s.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const t = [
    { q: "I replaced 3 freelancers with AI Employees. My marketing runs 24/7 and the quality is genuinely better.", n: 'Sarah K.', r: 'E-commerce Founder' },
    { q: "Hugh closed more leads in his first week than my previous tool did in a month. The ROI is insane.", n: 'Marcus T.', r: 'SaaS Founder' },
    { q: "Having Ava do analytics and Angela handle finance means I actually understand my numbers.", n: 'Priya R.', r: 'Agency Owner' },
  ]

  return (
    <section style={{ background: '#fff', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ color: '#FF1493', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Testimonials</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em' }}>Loved by business owners</h2>
        </div>

        <div style={{ background: 'rgba(255,20,147,0.04)', borderRadius: 32, padding: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {t.map((x) => (
              <div key={x.n} style={{ background: '#fff', borderRadius: 20, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[...Array(5)].map((_, i) => <svg key={i} width="18" height="18" fill="#FFD700" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <p style={{ color: '#3d3d5c', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>"{x.q}"</p>
                <div style={{ borderTop: '1px solid #eee', paddingTop: 16 }}>
                  <div style={{ fontWeight: 600, color: '#1a1a2e', fontSize: 14 }}>{x.n}</div>
                  <div style={{ fontSize: 12, color: '#9999aa' }}>{x.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plan = plans[1]
  return (
    <section style={{ background: '#fafafa', padding: '100px 0' }}>
      <div style={cx}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Pricing</p>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 12 }}>Simple, transparent pricing</h2>
          <p style={{ fontSize: 17, color: '#6b6b8d' }}>No hidden fees. Start free, scale when ready.</p>
        </div>

        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: 28, padding: 40, border: '2px solid #6C3AFF', boxShadow: '0 8px 40px rgba(108,58,255,0.12)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#6C3AFF', color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 100, padding: '6px 20px' }}>{plan.badge}</div>
            <div style={{ textAlign: 'center', marginBottom: 28, marginTop: 8 }}>
              <h3 style={{ fontWeight: 700, fontSize: 20, color: '#1a1a2e' }}>{plan.name}</h3>
              <div style={{ margin: '12px 0' }}><span style={{ fontSize: 64, fontWeight: 900, color: '#1a1a2e' }}>${plan.price}</span><span style={{ fontSize: 18, color: '#9999aa' }}>/{plan.period}</span></div>
              <p style={{ color: '#6b6b8d', fontSize: 15 }}>{plan.description}</p>
            </div>
            <ul style={{ listStyle: 'none', marginBottom: 28 }}>
              {plan.features.slice(0, 6).map((f) => (
                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
                  <svg width="20" height="20" fill="#00CC66" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span style={{ color: '#3d3d5c', fontSize: 15 }}>{f}</span>
                </li>
              ))}
            </ul>
            <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 14, padding: '16px 0', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
              Start Free Trial
            </a>
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/pricing" style={{ color: '#6C3AFF', fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>See all plans →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section style={{ background: '#6C3AFF', padding: '100px 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
          Ready to hire your
          <br />AI workforce?
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '0 auto 40px' }}>
          Join thousands of businesses running on AI Employees. Start your free trial today.
        </p>
        <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
          Get Started Free
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginTop: 20 }}>No credit card · 14-day trial · Cancel anytime</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <EmployeeGrid />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  )
}
