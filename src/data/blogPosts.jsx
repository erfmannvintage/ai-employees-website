// Blog post registry. Add new posts here — each post includes metadata plus a
// `body` render function that returns the JSX content. Slugs must be URL-safe
// (lowercase, hyphens) and unique. Updates here must also be mirrored in
// public/sitemap.xml and scripts/prerender.mjs so new posts get indexed.

import { Link } from 'react-router-dom'

const linkStyle = { color: '#6C3AFF', textDecoration: 'none', fontWeight: 600 }

export const posts = [
  {
    slug: 'ai-workforce-roi-breakdown',
    title: 'The ROI of an AI Workforce: Breaking Down the Numbers',
    description:
      'A realistic breakdown of what an 11-person AI workforce costs versus freelancers, agencies, and in-house marketing teams. With actual GBP numbers, output volumes, and time-saved hours.',
    cat: 'Business',
    color: '#FF6600',
    date: 'Apr 18, 2026',
    time: '7 min',
    excerpt:
      'We did the math. Here\'s exactly how much time and money businesses save when they deploy 11 AI employees vs. hiring freelancers or agencies. The numbers are dramatic.',
    ogImage: '/hero-office.png',
    body: () => (
      <>
        <p>
          If you run a small or medium business, you already know the maths is brutal.
          A marketing coordinator in the UK costs around £32,000 a year once you add
          pension and NI. A decent freelance copywriter bills £500–£1,200 a month for
          four posts a week. A social media agency? £2,500–£6,000 a month for content
          you still have to approve, tweak and argue about.
        </p>
        <p>
          So when founders hear &ldquo;AI workforce&rdquo; they want the same thing we
          wanted when we built <Link to="/" style={linkStyle}>Sidekicc</Link>: real
          output at a fraction of the cost, not a chatbot that writes &ldquo;As an AI
          language model&hellip;&rdquo; This post breaks down what an AI workforce
          actually produces per month, what it costs, and where the real savings land.
        </p>

        <h2>What counts as an &ldquo;AI workforce&rdquo;</h2>
        <p>
          It&rsquo;s not one chatbot with a business hat on. Sidekicc gives you{' '}
          <Link to="/about" style={linkStyle}>eleven specialised AI employees</Link>{' '}
          who each own a function the way a real team does:
        </p>
        <ul>
          <li><strong>Flora</strong> — social media content (up to 10 posts/day across platforms)</li>
          <li><strong>Mabel</strong> — SEO, blog content, keyword research</li>
          <li><strong>Hugh</strong> — outbound sales, lead research, cold outreach</li>
          <li><strong>Rupert</strong> — paid ads and campaign optimisation</li>
          <li><strong>Ava</strong> — analytics, GA4 reports, conversion tracking</li>
          <li><strong>Poppi</strong> — brand, positioning, AARRR funnel strategy</li>
          <li><strong>Raymond</strong> — finance, cash flow, QuickBooks reconciliation</li>
          <li><strong>Bowie</strong> — legal and compliance (UK GDPR, PECR, contracts)</li>
          <li><strong>Angela</strong> — research, competitor analysis, market intel</li>
          <li><strong>Basil</strong> — customer support and inbox triage</li>
          <li><strong>Cecil</strong> — chief of staff, orchestrates everyone else</li>
        </ul>
        <p>
          They share one business profile, review each other&rsquo;s work, and hand
          tasks off in chains. Flora drafts a post → Poppi checks the brand fit →
          Bowie flags any compliance risk → Ava tracks how it performs. That
          cross-review is where most of the ROI comes from, and it&rsquo;s what a
          single chatbot or a pile of disconnected tools can&rsquo;t give you.
        </p>

        <h2>The cost comparison, with actual numbers</h2>
        <p>
          Here&rsquo;s what a founder typically spends to cover the functions above
          in the UK in 2026, versus what Sidekicc charges for all of them bundled.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, margin: '16px 0 24px', border: '1px solid #eee', borderRadius: 12, overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: '#fafafa' }}>
              <th style={{ textAlign: 'left', padding: '10px 14px', fontWeight: 700, color: '#1a1a2e' }}>Function</th>
              <th style={{ textAlign: 'left', padding: '10px 14px', fontWeight: 700, color: '#1a1a2e' }}>Typical UK spend</th>
              <th style={{ textAlign: 'left', padding: '10px 14px', fontWeight: 700, color: '#1a1a2e' }}>Sidekicc</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '10px 14px' }}>Social content (Flora)</td>
              <td style={{ padding: '10px 14px', color: '#6b6b8d' }}>£800 / mo freelancer</td>
              <td style={{ padding: '10px 14px', color: '#1a1a2e', fontWeight: 600 }}>Included</td>
            </tr>
            <tr style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '10px 14px' }}>SEO + blog (Mabel)</td>
              <td style={{ padding: '10px 14px', color: '#6b6b8d' }}>£1,200 / mo agency</td>
              <td style={{ padding: '10px 14px', color: '#1a1a2e', fontWeight: 600 }}>Included</td>
            </tr>
            <tr style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '10px 14px' }}>Paid ads (Rupert)</td>
              <td style={{ padding: '10px 14px', color: '#6b6b8d' }}>£1,500 / mo + ad spend</td>
              <td style={{ padding: '10px 14px', color: '#1a1a2e', fontWeight: 600 }}>Included</td>
            </tr>
            <tr style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '10px 14px' }}>Sales SDR (Hugh)</td>
              <td style={{ padding: '10px 14px', color: '#6b6b8d' }}>£2,800 / mo in-house</td>
              <td style={{ padding: '10px 14px', color: '#1a1a2e', fontWeight: 600 }}>Included</td>
            </tr>
            <tr style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '10px 14px' }}>Analytics + reporting (Ava)</td>
              <td style={{ padding: '10px 14px', color: '#6b6b8d' }}>£600 / mo part-time</td>
              <td style={{ padding: '10px 14px', color: '#1a1a2e', fontWeight: 600 }}>Included</td>
            </tr>
            <tr style={{ borderTop: '1px solid #eee' }}>
              <td style={{ padding: '10px 14px' }}>Bookkeeping (Raymond)</td>
              <td style={{ padding: '10px 14px', color: '#6b6b8d' }}>£350 / mo accountant</td>
              <td style={{ padding: '10px 14px', color: '#1a1a2e', fontWeight: 600 }}>Included</td>
            </tr>
            <tr style={{ borderTop: '1px solid #eee', background: '#fff8e8' }}>
              <td style={{ padding: '10px 14px', fontWeight: 700 }}>Total</td>
              <td style={{ padding: '10px 14px', color: '#1a1a2e', fontWeight: 700 }}>~£7,250 / mo</td>
              <td style={{ padding: '10px 14px', color: '#6C3AFF', fontWeight: 700 }}>
                <Link to="/pricing" style={linkStyle}>From £49 / mo</Link>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          The point is not that a founder is paying £7,250 today — most don&rsquo;t,
          most have one or two of these covered and the rest gets dropped. The point
          is that the work still needs doing. Sidekicc is what actually happens in
          the gaps, at a cost that lines up with a single freelance retainer.
        </p>

        <h2>What the output actually looks like in a month</h2>
        <p>
          &ldquo;An AI workforce&rdquo; is only useful if the numbers on the other
          side are honest. Here&rsquo;s what an active Sidekicc customer on the{' '}
          <Link to="/pricing" style={linkStyle}>Growth plan</Link> (£99/mo) tends to
          produce in a real calendar month:
        </p>
        <ul>
          <li>~300 social posts across Instagram, LinkedIn, TikTok, Facebook and X</li>
          <li>8–12 blog posts with keyword research and internal linking</li>
          <li>150–400 outbound prospects researched, scored and sequenced</li>
          <li>2–4 paid-ad campaigns set up with creative and copy variants</li>
          <li>Weekly performance reports tied to real GA4 + Search Console data</li>
          <li>Monthly bookkeeping reconciliation if QuickBooks / Xero is connected</li>
          <li>Legal reviews of any customer-facing copy and contract templates</li>
        </ul>
        <p>
          Every one of those is a task inside the same app, tagged to a specific
          employee, with an audit trail and a human approval step where it matters.
          The full plan limit is 5,000 tasks per month on Growth, which almost no
          real customer hits — the point of the limit is to stop runaway automation,
          not to gate normal use.
        </p>

        <h2>Where the ROI really comes from</h2>
        <p>
          The cost comparison is the easy part of the pitch. The harder, better
          argument is about time. When a founder is the marketing lead, the sales
          rep, the support agent and the bookkeeper, the bottleneck is not money —
          it&rsquo;s the six hours they lose every day to context switching.
        </p>
        <p>
          A typical Sidekicc customer saves 18–25 working hours a week inside the
          first month, based on in-app task telemetry. Most of it comes from three
          things:
        </p>
        <ul>
          <li>
            <strong>No blank page.</strong> Every employee drafts. The founder&rsquo;s
            job becomes editing, not writing from scratch.
          </li>
          <li>
            <strong>No tool juggling.</strong> One approval queue for social, blog,
            ads, outreach, and finance. Not seven dashboards.
          </li>
          <li>
            <strong>No context re-explaining.</strong> The{' '}
            <Link to="/" style={linkStyle}>business profile</Link> is shared across
            all 11 employees. Brand voice, target market, value prop — typed once,
            used everywhere.
          </li>
        </ul>

        <h2>When an AI workforce doesn&rsquo;t make sense</h2>
        <p>
          It&rsquo;s worth being honest about the cases where this is the wrong
          buy. If you already have a marketing team of five who are producing
          work you&rsquo;re happy with, Sidekicc is a force-multiplier at best.
          If your business depends on deep 1:1 relationships — high-end consulting,
          bespoke services — the sales function needs human judgement that AI
          won&rsquo;t replace.
        </p>
        <p>
          Where it does make sense: solopreneurs, founder-led teams, bootstrap-
          funded businesses, and small agencies who need to scale output without
          scaling headcount. That&rsquo;s most of the market, which is why the
          category exists.
        </p>

        <h2>Try the maths on your own numbers</h2>
        <p>
          The honest way to know if this works for you is to start with a
          free trial and run it against whatever you&rsquo;d otherwise spend a
          freelancer on this month. If Flora produces your month of Instagram
          content in the first weekend, the ROI case is over before the trial
          ends.
        </p>
        <p>
          Start here: <Link to="/pricing" style={linkStyle}>Pricing &amp; plans</Link>
          {' '}·{' '}<Link to="/about" style={linkStyle}>Meet the 11 employees</Link>
          {' '}·{' '}<Link to="/integrations" style={linkStyle}>Integrations</Link>.
        </p>
      </>
    ),
  },
]

export function findPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}
