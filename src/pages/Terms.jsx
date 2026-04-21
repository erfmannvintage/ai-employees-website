import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const sections = [
  {
    t: '1. Who these terms are with',
    c: `These Terms of Service ("Terms") are a contract between you (the "Subscriber" or "you") and Sidekicc ("Sidekicc", "we", "us", "our"), a company registered in England and Wales.

Company details: [Company legal name, company number, registered office, VAT number] — to be confirmed at incorporation.

By creating an account or using the service, you accept these Terms and our Privacy Policy. If you do not accept, do not use the service.`,
  },
  {
    t: '2. What Sidekicc is',
    c: `Sidekicc is a software-as-a-service ("SaaS") platform that provides eleven AI-powered employees to help you run your business. The service includes chat with each AI employee, autonomous "Vibe Mode" execution, integrations with third-party tools, content generation, analytics, and related features as described at sidekicc.com and in your chosen subscription plan.

Sidekicc's AI employees are software tools. They are not human employees, not qualified professionals, and not agents authorised to enter into contracts on your behalf. Any contractual or regulatory consequences of actions taken via your account are your responsibility as the Subscriber.`,
  },
  {
    t: '3. Your account',
    c: `You must be at least 18 and legally capable of entering into this contract. You are responsible for:

• Providing accurate, current information during signup.
• Keeping your login credentials confidential.
• All activity that occurs under your account, whether authorised by you or not.
• Notifying us immediately of any suspected unauthorised access.

You may not share your account, sublicense it, or resell access to the service without our prior written consent.`,
  },
  {
    t: '4. Subscription plans, billing and auto-renewal',
    c: `We offer three subscription tiers — Starter, Growth, and Enterprise — with prices shown on the pricing page in GBP including VAT where applicable. Plans may be billed monthly or annually.

Free trial — New subscribers may start a 7-day free trial without a payment method. We will not charge you unless you actively provide payment details before the trial ends. At trial end, your account will be paused unless you choose to upgrade.

Auto-renewal — Paid subscriptions renew automatically at the end of each billing period at the then-current rate. Under the Digital Markets, Competition and Consumers Act 2024, we will send you a clear reminder before each renewal explaining the date, amount, and how to cancel. You can cancel auto-renewal at any time from your account settings with no cancellation fee.

Price changes — We may change prices for future billing periods with at least 30 days' notice. If you do not accept a price change, you can cancel before it takes effect.

Taxes — Prices shown include UK VAT for UK consumers. B2B subscribers may be charged net of VAT and reverse-charge where applicable.

Payment method — All payments are processed by Stripe. Card data never touches our servers.

Late payment — If a payment fails, we will retry and notify you. If the failure is not resolved within 14 days, we may suspend the service.`,
  },
  {
    t: '5. Consumer cooling-off rights',
    c: `If you are a consumer (not a business) in the UK or EU, the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 give you 14 days to cancel your subscription and receive a full refund.

To use the service during this cooling-off period, you expressly request that we begin providing the service immediately. If you cancel during the cooling-off period after using the service, you acknowledge that you are liable for the pro-rata value of the service already delivered.

To exercise your cooling-off right, email billing@sidekicc.com within 14 days of subscribing.

This section applies only to consumers and does not affect the termination rights of business subscribers.`,
  },
  {
    t: '6. Refund policy',
    c: `Beyond your statutory rights (section 5), we offer a 30-day money-back guarantee on first-time paid subscriptions. If you are not satisfied, email billing@sidekicc.com within 30 days for a full refund.

Refund exceptions — Violations of section 10 (Acceptable Use), refund policy abuse, or chargebacks filed without first contacting us. See the full refund policy.

After a refund, your account is paused and your data retained for 30 days before deletion.`,
  },
  {
    t: '7. AI outputs — important limitations',
    c: `Sidekicc's AI employees produce text, images, video, audio, and data analysis using enterprise-grade generative AI services. You acknowledge and agree that:

• AI outputs may be inaccurate, incomplete, biased, fabricated ("hallucinated"), or otherwise unfit for your purpose without review.
• We do not guarantee the factual correctness, legal validity, financial accuracy, or suitability of any AI output.
• You are responsible for reviewing, editing, and approving AI outputs before they are published, sent, filed, or otherwise acted upon — especially in legal, financial, medical, or professional-advice contexts.
• Rupert (Legal), Angela (CFO), Basil (Support), and all other employees are software tools, not qualified professionals. Outputs are first drafts for your review, not professional advice.

For any matter involving legal, financial, tax, medical, or safety-critical decisions, you should consult a qualified human professional.`,
  },
  {
    t: '8. Autonomous actions (Vibe Mode)',
    c: `When you enable Vibe Mode or connect outbound integrations (email, social, CRM, accounting, webhooks), AI employees may take actions on your behalf — sending emails, publishing posts, logging CRM activity, recording financial entries, triggering webhooks.

You configure the scope of those actions and can disable Vibe Mode or disconnect integrations at any time. Every Vibe Mode action is logged.

You remain the legal controller of all content and all actions taken through your account. That means:

• If Cecil emails a prospect, you (not Sidekicc) are responsible for compliance with PECR reg. 22, UK GDPR direct marketing rules, CAN-SPAM, and similar laws.
• If Flora posts on social media, you are responsible for compliance with the destination platform's terms and any applicable advertising regulations (including ASA rules).
• If Angela records a financial entry, you remain responsible for the accuracy of your accounts and compliance with HMRC obligations.

Sidekicc is a tool provider and data processor for this purpose; you are the data controller and the party with regulatory accountability for those actions.`,
  },
  {
    t: '9. Your content and IP',
    c: `You retain all intellectual property rights in:

• Content you upload to the service (documents, images, audio, voice notes, call recordings, data files).
• Content AI employees generate for you using your prompts and business context.
• Your business data, integration data, and Business Profile information.

You grant Sidekicc a worldwide, non-exclusive, royalty-free licence to process that content solely to deliver the service to you. This licence ends when you delete the content or cancel your account (subject to retention periods in our Privacy Policy).

You warrant that you have the right to upload any content you submit, that your content does not infringe any third party's rights, and that it complies with section 10.

We do not use your content to train our underlying AI models or make it available to other subscribers.`,
  },
  {
    t: '10. Acceptable Use Policy',
    c: `You must not use Sidekicc to create, process, publish, send or store content that:

• Is unlawful under UK, EU, or other applicable law.
• Depicts or promotes child sexual abuse material (CSAM) — we report this to the National Crime Agency and IWF immediately and permanently ban the account.
• Harasses, threatens, defames, or incites violence against any person or group.
• Infringes intellectual property, trade secrets, or privacy rights.
• Creates deepfakes of real people without their documented consent.
• Constitutes spam under PECR reg. 22 (unsolicited marketing without consent or a soft-opt-in exemption).
• Promotes financial fraud, deceptive schemes, or circumvents consumer-protection laws.
• Interferes with platform security — reverse-engineering, scraping, rate-limit evasion, attempting to access other subscribers' data.
• Violates the terms of any third-party platform you connect (Gmail, Outlook, Meta, TikTok, LinkedIn, Stripe, HubSpot, etc.).
• Uses the service to train competing AI models or build a derivative product.
• Is used in a country subject to UK, EU, or UN sanctions.

We may investigate suspected violations, suspend affected accounts with or without notice, and cooperate with law enforcement. Serious violations terminate the contract with no refund.`,
  },
  {
    t: '11. Third-party integrations',
    c: `The service integrates with third-party products listed on the integrations page (email providers, Google Workspace, analytics platforms, MailerLite, Stripe, QuickBooks, Xero, FreeAgent, Sage, HubSpot, social publishing networks, and others).

Your use of those products is governed by their own terms and privacy policies. Sidekicc is not responsible for:

• Third-party product outages or changes to their APIs.
• Suspension of your third-party accounts for your conduct on those platforms.
• Charges levied by third-party providers (e.g. if you exceed a platform's rate limits).

You warrant you have the right to connect each integration and to authorise Sidekicc to act through it.`,
  },
  {
    t: '12. Service availability',
    c: `We aim for 99.9% uptime but do not guarantee uninterrupted service. We may perform scheduled maintenance with reasonable notice and emergency maintenance without notice where necessary for security.

Enterprise subscribers may receive an explicit Service Level Agreement with service credits — see your order form.`,
  },
  {
    t: '13. Changes to the service',
    c: `We develop the service continuously. We may add, modify, or remove features. If a material feature you rely on is removed, we will give at least 30 days' notice and, if the change is materially adverse to you, allow you to cancel and receive a pro-rata refund for the unused portion of your subscription.`,
  },
  {
    t: '14. Warranty and consumer rights',
    c: `For consumers, the Consumer Rights Act 2015 requires the service to be of satisfactory quality, fit for purpose, and as described. These statutory rights cannot be excluded. If the service does not meet these standards, you may be entitled to a repair, price reduction, or refund.

For business subscribers, the service is provided "as is" and "as available" without further warranty, to the maximum extent permitted by law. We specifically disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    t: '15. Liability',
    c: `Nothing in these Terms excludes or limits liability for:

• Death or personal injury caused by our negligence.
• Fraud or fraudulent misrepresentation.
• Consumer statutory rights that cannot lawfully be excluded.
• Any other liability that cannot be excluded under applicable law.

Subject to the above, for business subscribers:

• We are not liable for indirect, consequential, special, incidental, or punitive damages, loss of profits, revenue, goodwill, data, or anticipated savings.
• Our total aggregate liability to you under these Terms in any 12-month period is capped at the fees you paid us in that period.

For consumer subscribers, our liability for foreseeable losses is not capped, but we are not liable for losses that were not reasonably foreseeable at the time you subscribed.`,
  },
  {
    t: '16. Indemnification',
    c: `You agree to indemnify and hold harmless Sidekicc against claims, losses, damages, and reasonable legal costs arising from:

• Your content (including content uploaded to the service or generated by AI at your direction).
• Your actions using the service, including through Vibe Mode and connected integrations.
• Your breach of these Terms or the Acceptable Use Policy.
• Your violation of third-party rights, laws, or platform terms.

Sidekicc will indemnify you against third-party claims that the Sidekicc platform itself (excluding your content and integrations) infringes their intellectual property rights, subject to you notifying us promptly, giving us control of the defence, and cooperating reasonably.`,
  },
  {
    t: '17. Suspension and termination',
    c: `You may cancel at any time from account settings. Cancellation takes effect at the end of your current billing period; you retain access until then. You can export your data before cancellation.

We may suspend or terminate your account with reasonable notice for:

• Material breach of these Terms.
• Non-payment.
• Legal or regulatory reasons.
• Serious violation of the Acceptable Use Policy (including where immediate suspension is necessary for safety or compliance).

On termination, we retain your data for 30 days before permanent deletion, except where a longer retention period is legally required (e.g. billing records for 6 years under HMRC rules).`,
  },
  {
    t: '18. Data Processing Addendum (B2B)',
    c: `For business subscribers who control personal data processed through the service, a Data Processing Addendum ("DPA") is incorporated by reference. The DPA sets out our obligations as your processor under Article 28 UK GDPR, including:

• Processing only on your documented instructions.
• Confidentiality obligations on our personnel.
• Security measures.
• Sub-processor authorisation with 30-day change notice.
• Assistance with data subject rights, impact assessments, and breach notification.
• UK International Data Transfer Agreement / EU SCCs for international transfers.
• Audit rights (with commercial reasonableness).
• Return or deletion of personal data on termination.

Request the current DPA at privacy@sidekicc.com.`,
  },
  {
    t: '19. EU AI Act transparency',
    c: `You are interacting with AI systems when you use Sidekicc. Article 50 of the EU AI Act requires us to disclose this to users in the EU, and we do so here and across the product interface. All AI outputs are labelled as such; we do not attempt to pass AI-generated content off as human-authored.`,
  },
  {
    t: '20. Notices and communications',
    c: `We will send service-related notices to the email address on your account. You should keep this up to date. You may contact us at hello@sidekicc.com, privacy@sidekicc.com, or legal@sidekicc.com as appropriate.`,
  },
  {
    t: '21. Changes to these Terms',
    c: `We may update these Terms from time to time. Material changes will be notified by email at least 14 days before they take effect. If the change is materially adverse, you may cancel before it takes effect.

Non-material updates (typos, clarifications, structural changes) take effect when published.`,
  },
  {
    t: '22. Governing law and disputes',
    c: `These Terms and any dispute arising from them are governed by the laws of England and Wales. Consumers in the UK, EU, or other jurisdictions retain the rights conferred by their local mandatory consumer law.

We will try to resolve any dispute informally first. If that fails, disputes are subject to the exclusive jurisdiction of the courts of England and Wales, except that a consumer may also bring proceedings in the courts of their habitual residence.

EU consumers may use the European Commission's Online Dispute Resolution platform: ec.europa.eu/consumers/odr.`,
  },
  {
    t: '23. Miscellaneous',
    c: `Entire agreement — These Terms, the Privacy Policy, and any DPA or order form make up the entire agreement between us and supersede any prior understanding.

Severability — If any part of these Terms is held invalid, the rest remains in force.

No waiver — Failure to enforce a right is not a waiver of it.

Assignment — You may not assign these Terms without our consent. We may assign them on a merger, acquisition, or sale of assets.

Third-party rights — Nothing in these Terms gives a third party any enforceable right under the Contracts (Rights of Third Parties) Act 1999.

Force majeure — Neither party is liable for failure to perform where the failure is caused by events beyond reasonable control (including internet outages, upstream provider failures, natural disasters, industrial action, acts of war).

Export controls — You may not use the service in violation of applicable export controls or sanctions.`,
  },
  {
    t: '24. Contact',
    c: `General — hello@sidekicc.com
Billing & refunds — billing@sidekicc.com
Privacy & data rights — privacy@sidekicc.com
Legal & contracts — legal@sidekicc.com`,
  },
]

export default function Terms() {
  return (
    <div>
      <SEO
        title="Terms of Service — Sidekicc"
        description="Your agreement with Sidekicc. Subscription, billing, AI output disclaimers, acceptable use, Vibe Mode liability, governing law — Consumer Rights Act 2015 compliant."
        path="/terms"
      />
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 40px' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Legal</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 12 }}>Terms of Service</h1>
          <p style={{ fontSize: 15, color: '#9999aa' }}>Last updated: 21 April 2026 · Version 2.0 · Governed by English law.</p>
        </div>
      </section>

      {/* Quick nav */}
      <section style={{ background: '#fafafa', padding: '24px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 20, border: '1px solid #eee' }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#6C3AFF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Quick Navigation</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4 }}>
              {sections.map((s, i) => (
                <a key={i} href={`#section-${i + 1}`} style={{ color: '#3d3d5c', fontSize: 13, textDecoration: 'none', padding: '4px 0' }}>{s.t}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ background: '#fff', padding: '60px 0 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px' }}>
          {sections.map((s, i) => (
            <div key={s.t} id={`section-${i + 1}`} style={{ marginBottom: 40, scrollMarginTop: 80 }}>
              <h2 style={{ fontWeight: 800, fontSize: 22, color: '#1a1a2e', marginBottom: 14 }}>{s.t}</h2>
              <div style={{ color: '#3d3d5c', fontSize: 15, lineHeight: 1.75, whiteSpace: 'pre-line' }}>{s.c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related legal docs */}
      <section style={{ background: '#fafafa', padding: '60px 0' }}>
        <div style={cx}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e' }}>Related documents</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 900, margin: '0 auto' }}>
            {[
              { to: '/privacy', t: 'Privacy Policy', d: 'How we handle your data.' },
              { to: '/refund', t: 'Refund Policy', d: '30-day money-back guarantee.' },
              { to: '/pricing', t: 'Pricing', d: '3 plans from £49/month.' },
            ].map((l) => (
              <Link key={l.to} to={l.to} style={{ background: '#fff', borderRadius: 14, padding: 20, textDecoration: 'none', border: '1px solid #eee' }}>
                <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15, marginBottom: 4 }}>{l.t}</h3>
                <p style={{ color: '#6b6b8d', fontSize: 13 }}>{l.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
