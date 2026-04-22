// Blog post registry. Add new posts here — each post includes metadata plus a
// `body` render function that returns the JSX content. Slugs must be URL-safe
// (lowercase, hyphens) and unique. Updates here must also be mirrored in
// public/sitemap.xml and scripts/prerender.mjs so new posts get indexed.

import { Link } from 'react-router-dom'

const linkStyle = { color: '#6C3AFF', textDecoration: 'none', fontWeight: 600 }

export const posts = [
  {
    slug: 'replace-freelancers-with-ai-playbook',
    title: 'Replacing 3 Freelancers with Sidekicc: The Step-by-Step Playbook',
    description:
      'How a founder-led business can take three typical freelance retainers — social content, SEO blog, and paid ads — and fold them into a single AI workforce. Includes the migration sequence, what goes first, and where a human freelancer still wins.',
    cat: 'Playbook',
    color: '#00CC66',
    date: 'Apr 20, 2026',
    time: '6 min',
    excerpt:
      'Social content, SEO, and paid ads typically cost £3,500+/mo across three freelancers. Here\'s the migration order, the first-30-days checklist, and the honest caveats on what AI still can\'t do.',
    ogImage: '/hero-collab.png',
    body: () => (
      <>
        <p>
          Most founder-led businesses end up paying three freelancers who
          don&rsquo;t talk to each other. A social media manager on £800 a month.
          An SEO writer on £1,200 a month for four blogs. A paid-ads freelancer
          on £1,500 a month to run Google and Meta campaigns. That&rsquo;s
          £3,500 a month — before ad spend, before tools, before the hours you
          burn chasing drafts and approvals.
        </p>
        <p>
          This post isn&rsquo;t a fabricated customer story. It&rsquo;s the
          step-by-step playbook we&rsquo;ve seen work for founders who want to
          fold those three retainers into a single AI workforce without
          breaking things. Read it end to end and you&rsquo;ll know the order,
          the checkpoints, and — importantly — the cases where you should keep
          the human.
        </p>

        <h2>The three roles you&rsquo;re replacing</h2>
        <p>
          Before anything else, name the work. A freelancer retainer is rarely
          &ldquo;social media&rdquo; in the abstract — it&rsquo;s a specific
          deliverable list. Typical solopreneur freelance stack:
        </p>
        <ul>
          <li>
            <strong>Social freelancer</strong> — 20 posts a month across two
            platforms, 1 reel or TikTok per week, caption + hashtag research.
          </li>
          <li>
            <strong>SEO blog writer</strong> — 4 long-form posts per month,
            keyword brief, on-page optimisation, internal linking.
          </li>
          <li>
            <strong>Paid-ads freelancer</strong> — Google Search + Performance
            Max + Meta Advantage+, weekly reporting, creative refresh.
          </li>
        </ul>
        <p>
          Sidekicc covers all of this with three named employees:{' '}
          <Link to="/employee/flora" style={linkStyle}>Flora</Link> (social),{' '}
          <Link to="/employee/mabel" style={linkStyle}>Mabel</Link> (SEO), and{' '}
          <Link to="/employee/raymond" style={linkStyle}>Raymond</Link> (ads) —
          plus the other eight you get for free, which matter for the migration
          below.
        </p>

        <h2>Day 1–7: set up the business profile before you touch anything</h2>
        <p>
          The mistake every founder makes when they switch to AI is jumping
          into the first task. Don&rsquo;t. The reason freelancers feel more
          &ldquo;dialled in&rdquo; to your brand than AI is that they&rsquo;ve
          absorbed context over months of back-and-forth. Sidekicc compresses
          that into a Business Profile you fill in once.
        </p>
        <p>The first-week checklist:</p>
        <ul>
          <li>Complete the Business Profile — ICP, product, positioning, tone of voice, forbidden language, brand do&rsquo;s and don&rsquo;ts</li>
          <li>Upload your brand guidelines, past campaigns, and best-performing posts into the Data Hub</li>
          <li>Run Angela through a deep-research pass on your business (she&rsquo;ll pull your site, any public socials, reviews, and Companies House) and store findings to the shared brain</li>
          <li>Connect Google Analytics, Search Console, and the social accounts you want managed</li>
          <li>Do NOT publish anything autonomously in week one — keep approvals on</li>
        </ul>
        <p>
          By the end of the first week the employees know your business
          better than a month-one freelancer does. Now you can switch work
          over.
        </p>

        <h2>Week 2: move the social freelancer out first</h2>
        <p>
          Social is the easiest migration because the blast radius of a bad
          post is small and the iteration loop is fast. Keep the freelancer on
          retainer for week 2 — have Flora draft the content calendar and ask
          the freelancer to review it as a quality check. You&rsquo;ll see one
          of two things happen:
        </p>
        <ul>
          <li>
            The freelancer edits &lt; 20% of the drafts. Cancel the retainer at
            the end of week 2.
          </li>
          <li>
            The freelancer edits &gt; 20% of the drafts. The Business Profile
            is under-specified — feed their edits back as training, refine the
            profile, and re-test.
          </li>
        </ul>
        <p>
          By week 4 you should have Flora producing the full calendar, with a
          human (you) approving each post before it publishes. The freelancer
          retainer is gone. Savings: ~£800/mo.
        </p>

        <h2>Week 3–4: move the SEO blog writer</h2>
        <p>
          SEO is slightly harder because the output volume matters less than
          the quality of the content-brief and the integration with your
          existing site. Before you cancel the SEO freelancer, do these three
          things:
        </p>
        <ol>
          <li>Ask Mabel to propose a 3-month content plan based on Search Console data and the existing site&rsquo;s gaps</li>
          <li>Run one of her posts side-by-side with the freelancer&rsquo;s next draft — compare keyword coverage, internal linking, and on-page structure</li>
          <li>Enable the &ldquo;content chain&rdquo; that hands a Mabel draft to Poppi for brand voice and Bowie for legal/compliance check before you see it</li>
        </ol>
        <p>
          The cross-review is where the quality gap closes. A freelance SEO
          writer charging £300/post can&rsquo;t afford a second pair of eyes —
          you&rsquo;re getting 15 minutes of copy-edit, tops. Mabel running
          through Poppi and Bowie gets you the equivalent of an editor and a
          legal reviewer on every post, for the same flat monthly fee.
        </p>
        <p>Savings: ~£1,200/mo once the retainer ends.</p>

        <h2>Week 5–8: the paid-ads freelancer (the slowest one)</h2>
        <p>
          Paid ads is the hardest to migrate because the cost of a mistake is
          real money spent on a broken campaign. Do NOT rush this. The rule:
          keep the ads freelancer on for two billing cycles while Raymond runs
          a parallel shadow account.
        </p>
        <p>
          Raymond&rsquo;s set-up week:
        </p>
        <ul>
          <li>Connect Google Ads and Meta Ads with read-only access first</li>
          <li>Let Raymond audit the freelancer&rsquo;s current campaigns — structure, naming, negatives, exclusions, budget pacing</li>
          <li>Have Raymond draft a new campaign structure in a test account. Review it with the freelancer if you&rsquo;re on good terms — they&rsquo;ll usually be surprised by what he catches</li>
        </ul>
        <p>
          At the end of the second billing cycle, if Raymond is hitting the
          same or better CAC than the freelancer, switch live access. If
          not — the profile or the creative hand-off is probably weak, fix it
          before cancelling.
        </p>
        <p>Savings once switched: ~£1,500/mo.</p>

        <h2>What the three migrations add up to</h2>
        <p>
          Done properly over 6–8 weeks, three freelancer retainers worth
          £3,500/mo are replaced by a single <Link to="/pricing" style={linkStyle}>Growth plan at £99/mo</Link>.
          You still need to pay for ad spend — that&rsquo;s unrelated — and
          you still need to spend 5–10 hours a week reviewing, approving and
          occasionally rewriting outputs. But the retainer spend itself drops
          from £42,000/yr to £1,188/yr. On a bootstrap budget that&rsquo;s the
          difference between hiring your first full-time employee and not.
        </p>

        <h2>The honest caveats: where a human freelancer still wins</h2>
        <p>
          If this post only sold the upside we&rsquo;d be lying. Three places
          where a human freelancer earns their retainer:
        </p>
        <ul>
          <li>
            <strong>Breakthrough creative.</strong> AI is excellent at variants,
            adaptations, and on-brand execution. A freelance creative director
            with genuine taste is still better at coming up with the thing
            nobody else has done. If your brand hinges on creative
            distinctiveness, keep the human on a retainer for concepts and let
            Flora execute them.
          </li>
          <li>
            <strong>Relationship-led sales.</strong> If your sales process
            depends on 1:1 trust with a specific human, Hugh can research and
            sequence but shouldn&rsquo;t be the face of outreach. Use him to
            make the human more productive, not to replace the human.
          </li>
          <li>
            <strong>High-stakes crisis comms.</strong> A bad PR moment needs
            someone who can read the room in real time and take personal
            accountability. Do not let an AI draft your apology.
          </li>
        </ul>

        <h2>Your next step</h2>
        <p>
          Start the free trial, fill in the Business Profile properly
          (seriously, it&rsquo;s the difference between mediocre and excellent
          outputs), and pick the easiest of the three to migrate first. Social
          is the safest. Give it four weeks. If it works, the other two
          retainers will follow naturally.
        </p>
        <p>
          Useful reading while you decide:{' '}
          <Link to="/blog/ai-workforce-roi-breakdown" style={linkStyle}>The ROI of an AI Workforce</Link>
          {' '}·{' '}<Link to="/pricing" style={linkStyle}>Pricing &amp; plans</Link>
          {' '}·{' '}<Link to="/about" style={linkStyle}>Meet the 11 employees</Link>.
        </p>
      </>
    ),
  },
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
