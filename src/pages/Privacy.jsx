import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

const sections = [
  {
    t: '1. Who we are',
    c: `Sidekicc ("Sidekicc", "we", "us", "our") is the controller of your personal data for the purposes of the UK General Data Protection Regulation ("UK GDPR") and the Data Protection Act 2018. You can contact us at privacy@sidekicc.com.

Company details: [Company legal name, Company number, Registered office address, VAT number, ICO registration number] — to be updated at incorporation.

If you have questions about this policy or how we handle your data, email privacy@sidekicc.com. You may also lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk/make-a-complaint/ or on 0303 123 1113. We'd appreciate the chance to resolve any concern first, but that is your legal right.`,
  },
  {
    t: '2. Summary in plain English',
    c: `Sidekicc is a software-as-a-service platform that gives you eleven AI employees. To deliver the service, we process: (a) information about you and your business, (b) content you upload (documents, spreadsheets, audio, images, voice notes), (c) data we pull from third parties you connect (Gmail, Stripe, GA4, QuickBooks, etc.), and (d) usage telemetry to keep the service secure and improve it.

We do not sell your data. We do not use your content to train our underlying AI models. We only share data with the sub-processors listed in section 8, and only where necessary to deliver the service.

When you turn on "Vibe Mode," the AI employees make autonomous decisions and take actions (send emails, publish posts, record financial entries). You remain the controller of all content and actions taken under your account — see sections 6 and 14 for your rights.`,
  },
  {
    t: '3. What data we collect',
    c: `Account data — name, email, password hash, preferences, authentication factors.
Business Profile data — company name, niche, audience, brand voice, competitor list, product descriptions, up to 100+ fields you supply.
Content you upload — documents (.pdf, .docx, .xlsx, .pptx, .txt, .md, .csv, .json, .html), images, audio files (.mp3, .wav, .m4a, .ogg), video, voice notes, call recordings, meeting notes.
Integration data — OAuth tokens, API credentials, and data pulled from the services you connect (email providers, Google Workspace, MailerLite, GA4, YouTube Analytics, Google Search Console, Stripe, QuickBooks Online, Xero, FreeAgent, Sage, HubSpot, Companies House, social publishing, and any webhook destinations you configure). See the integrations page for the full list.
Billing data — name, billing address, VAT status, payment confirmation (card data never touches our servers — handled by Stripe).
Usage data — pages viewed, actions taken, task outputs, feature usage, error logs, approximate location (IP-derived), device/browser info.
Session recordings and heatmaps (marketing site only) — with your consent, we use Microsoft Clarity on sidekicc.com to record anonymised session playback, scroll depth, clicks, and heatmaps so we can improve navigation and conversion. Typed text in form fields, passwords, and images are automatically masked; no data from your signed-in product account (app.sidekicc.com) is recorded.
Communications — support tickets, feature requests, survey responses.
Cookies and similar technologies — see our Cookie Policy.`,
  },
  {
    t: '4. Why we process it (lawful bases)',
    c: `We rely on the following lawful bases under Article 6 UK GDPR:

Contract (Art. 6(1)(b)) — to set up and operate your account, deliver the service you've paid for, process payments, and respond to support requests.

Legitimate interests (Art. 6(1)(f)) — to secure the platform against abuse, prevent fraud, debug issues, analyse aggregate usage to improve the product, and send service-related communications. We balance these interests against your rights; you can object at any time (see section 10).

Consent (Art. 6(1)(a)) — for optional marketing communications, non-essential cookies and analytics, transcription of call recordings, and any special category processing. You can withdraw consent at any time.

Legal obligation (Art. 6(1)(c)) — to retain billing records for HMRC (6 years), respond to lawful requests, and meet anti-money-laundering obligations where they apply.

Where uploaded content includes special category data (Article 9 — health, financial distress, biometric, ethnic origin) or criminal offence data (Article 10), we process it only on your explicit consent or where necessary for the establishment of legal claims. You are responsible for ensuring you have a lawful basis to share third-party special category data with us.`,
  },
  {
    t: '5. AI processing — what you need to know',
    c: `Sidekicc uses large language models from leading enterprise AI providers for chat, reasoning, content generation, image generation, and text extraction. This means:

• When an AI employee processes a request, your prompt plus relevant context from your account is sent to our enterprise AI provider, processed, and returned to our system before being shown to you.

• Our AI providers act as sub-processors under Data Processing Addenda and contractual "no training on customer data" commitments. Your content is not used to train any foundation models.

• AI outputs may be inaccurate, incomplete, biased, or entirely fabricated ("hallucinated"). We do not guarantee the factual accuracy of any AI output. You are responsible for reviewing AI-generated content before acting on it — especially content sent externally (emails, social posts, legal or financial documents).

• AI outputs are not professional advice. Rupert is not a solicitor; Angela is not a chartered accountant; the legal and financial outputs they produce are drafts that should be reviewed by a qualified human professional for anything material.

Automated decision-making and profiling (Article 22 UK GDPR) — When you enable "Vibe Mode," AI employees take autonomous actions on your behalf (sending emails, publishing posts, logging CRM activity). Because you configure, supervise and can halt these actions at any time, we do not consider this "solely automated decision-making producing legal or similarly significant effects" on you — but we recognise it may produce such effects on third parties. You remain the controller of those downstream effects and can turn Vibe Mode off at any time. You have the right to request a review of any automated output by our human support team at privacy@sidekicc.com.

EU AI Act Article 50 transparency — You are interacting with AI systems when you use Sidekicc. All outputs clearly labelled as generated by AI employees; no attempt is made to pass AI content off as human-authored.`,
  },
  {
    t: '6. Actions taken by AI employees on your behalf',
    c: `When you connect Gmail, social accounts, CRMs, or accounting tools, you authorise Sidekicc's AI employees to act through those connections using the OAuth scopes you grant. Specifically:

• Cecil may read, draft and send email on your behalf through Gmail, Outlook, Yahoo, Zoho, iCloud, or any SMTP server you connect.
• Flora may publish posts to any of the 14 social platforms you connect.
• Hugh may send outreach emails through Gmail or MailerLite and log activity in HubSpot CRM.
• Angela may pull live data from Stripe, QuickBooks, Xero, FreeAgent, and Sage (read access only unless you explicitly grant write access).
• Basil may respond to customer reviews on Google, Yelp, and Trustpilot where permitted by those platforms.

You are the legal controller of any personal data those actions touch. If Cecil emails a prospect on your behalf, you (not Sidekicc) are responsible for compliance with PECR reg. 22, CAN-SPAM, and similar direct-marketing laws. You warrant that you have a lawful basis and consent where required.

You can revoke access at any time through your integration settings or directly in your Google/Microsoft/Stripe/HubSpot/etc. account. Revoking access will stop all AI employee activity through that integration immediately.`,
  },
  {
    t: '7. Call recordings and third-party voices',
    c: `If you upload call recordings, voice notes, or video containing other people's voices (customer calls to Basil, sales calls to Hugh, team meetings), you warrant that you have obtained any consent required by law for the recording, its storage on our platform, and its transcription by AI.

We store audio and video for as long as you keep it in your Media Library, then delete per section 9. Transcription is performed by Google AI services under the sub-processor relationship described in section 8.`,
  },
  {
    t: '8. Sub-processors',
    c: `We rely on the following sub-processors. We will give you at least 30 days' notice of any material change to this list via email and an update to this page. You may object to a new sub-processor by terminating your subscription before they are engaged.

AI & content generation — Google Cloud (enterprise AI services) — US/EU.
Database & authentication — enterprise managed Postgres provider — UK/EU primary region.
Hosting & serverless functions — enterprise serverless platform — US.
Payments — Stripe — US/Ireland.
Email delivery (product) — transactional email provider — EU.
Social publishing — social publishing API provider.
Newsletter & campaign email — MailerLite — EU.
CRM relay (your choice) — HubSpot — US/DE.
Error monitoring — production observability provider — US/EU.
Product analytics (privacy-friendly) — analytics provider — EU.
Marketing-site session analytics — Microsoft Clarity (Microsoft Corporation) — US/EU. Used on sidekicc.com only (not in the signed-in product). Masks sensitive fields by default. Transfers covered under the EU-US Data Privacy Framework.
Marketing-site traffic analytics — Google Analytics 4 (Google LLC / Google Ireland Ltd) — EU/US. IP anonymisation enforced by default in GA4; Google Signals disabled. Used on sidekicc.com only. Transfers covered under the EU-US Data Privacy Framework.
Customer support — helpdesk provider — EU.

Named sub-processor identities and contractual DPAs are available on request to privacy@sidekicc.com for B2B subscribers and data protection authorities.

We take reasonable steps to ensure each sub-processor offers equivalent data protection standards, including by entering into UK International Data Transfer Agreements (IDTA), the EU Standard Contractual Clauses, or reliance on the EU-US Data Privacy Framework where that provider is certified.`,
  },
  {
    t: '9. International transfers',
    c: `Some sub-processors are based in or transfer data to the United States. We rely on a combination of:

• The UK International Data Transfer Agreement (IDTA) or the UK Addendum to the EU Standard Contractual Clauses (SCCs) for transfers out of the UK.
• The EU Standard Contractual Clauses (2021) for transfers out of the EEA.
• The EU-US Data Privacy Framework where the sub-processor is certified.

We carry out a Transfer Impact Assessment (TIA) for each non-adequate-country transfer, available on request to privacy@sidekicc.com.`,
  },
  {
    t: '10. Retention',
    c: `Account and Business Profile data — while your account is active and for 30 days after cancellation (soft delete — you can restore). After 30 days, data is permanently purged except where we have a legal obligation to retain.

Uploaded content (documents, audio, images) — same as above.

Billing records — 6 years from last transaction (HMRC obligation).

Support tickets — 3 years from last contact.

Usage logs — 90 days rolling, then aggregated/anonymised.

Marketing preferences — until you opt out, then retained as a suppression record only.

You can export your data at any time from account settings before cancellation. We will delete data sooner on request where we have no overriding legal obligation to retain it.`,
  },
  {
    t: '11. Your rights',
    c: `Under UK GDPR you have the right to:

• Access — get a copy of your personal data.
• Rectification — correct inaccurate data.
• Erasure ("right to be forgotten") — delete data subject to legal exceptions.
• Restriction — limit how we process your data.
• Portability — receive your data in a machine-readable format.
• Object — to processing based on legitimate interests or for direct marketing.
• Withdraw consent — at any time for consent-based processing.
• Not be subject to solely automated decisions — request human review of any AI decision affecting you materially.
• Lodge a complaint with the ICO.

To exercise any right, email privacy@sidekicc.com. We will respond within one month (extendable to three months for complex requests). Where we cannot verify your identity, we may ask for additional information.`,
  },
  {
    t: '12. Security',
    c: `We employ technical and organisational measures appropriate to the risk, including:

• TLS 1.2+ encryption in transit.
• AES-256 encryption at rest with encrypted OAuth token storage.
• Database-level isolation so each subscriber's data is separated from every other subscriber's.
• All third-party API calls via a server-side proxy — API keys never reach the browser.
• CORS restricted to known origins; action whitelist for proxy calls.
• Principle of least privilege for internal access; MFA required for administrative access.
• Regular security reviews, dependency scanning, and penetration testing.

If a personal data breach occurs, we will notify the ICO within 72 hours where required under DPA 2018 s.67 and you directly where your data is affected and the breach is likely to result in a high risk to your rights.`,
  },
  {
    t: '13. Cookies',
    c: `We use strictly necessary cookies for authentication and session management. We use non-essential cookies only with your prior consent (required by PECR reg. 6), collected via our cookie banner on first visit.

See our Cookie Policy for the full list and your choices.`,
  },
  {
    t: '14. Children',
    c: `Sidekicc is not directed at children. We do not knowingly collect data from anyone under 18. If you believe a child has provided data, email privacy@sidekicc.com and we will delete it.`,
  },
  {
    t: '15. Changes to this policy',
    c: `We may update this policy to reflect changes to the service, the law, or our practices. Material changes will be notified to you by email at least 14 days before taking effect, and you may cancel before then if you disagree.

Non-material clarifications (typos, restructuring) take effect when we publish them.`,
  },
  {
    t: '16. Contact',
    c: `Privacy questions, rights requests, or complaints: privacy@sidekicc.com
General contact: hello@sidekicc.com
Postal address: [Registered office to be confirmed]

ICO — ico.org.uk/make-a-complaint/ — 0303 123 1113.`,
  },
]

export default function Privacy() {
  return (
    <div>
      <SEO
        title="Privacy Policy — Sidekicc"
        description="How Sidekicc collects, uses, and protects your data. UK GDPR, DPA 2018, and PECR compliant. Your rights, our sub-processors, and how to contact us."
        path="/privacy"
      />
      {/* Hero */}
      <section style={{ background: '#fff', padding: '80px 0 40px' }}>
        <div style={{ ...cx, textAlign: 'center' }}>
          <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Legal</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ fontSize: 15, color: '#9999aa' }}>Last updated: 22 April 2026 · Version 2.1 · Governed by UK GDPR, Data Protection Act 2018, PECR.</p>
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
              { to: '/terms', t: 'Terms of Service', d: 'Your agreement with Sidekicc.' },
              { to: '/refund', t: 'Refund Policy', d: '30-day money-back guarantee.' },
              { to: '/help', t: 'Help Centre', d: 'Setup, features, billing answers.' },
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
