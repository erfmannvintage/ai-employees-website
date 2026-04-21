# Data Protection Impact Assessment (DPIA)

**Controller:** Sidekicc [Company legal name, company number]
**Prepared by:** [DPO / Privacy lead name]
**Date:** 21 April 2026 · Version 1.0 (draft — pending sign-off)
**Review cycle:** Annually, or on material change to processing
**Legal basis for DPIA:** UK GDPR Art. 35 (high-risk processing triggered by automated decision-making, systematic monitoring, special category data processing, and novel technology — see s.3 below)

---

## 1. Describe the nature of the processing

### 1.1 Purpose of the processing
Sidekicc is a SaaS platform that provides subscribers with eleven AI-powered "employees" (Cecil, Flora, Basil, Hugh, Mabel, Rupert, Poppi, Ava, Raymond, Bowie, Angela). Each AI employee performs work on behalf of the subscriber across business functions: email management, social media publishing, customer support, sales outreach, SEO writing, legal review, marketing strategy, analytics, paid advertising, market research, and financial accounting.

The core processing activities are:
- Storing subscriber business data (profile, uploaded content).
- Processing subscriber prompts and context through third-party large language models to generate outputs.
- Executing authorised actions via third-party APIs (sending emails, publishing social posts, logging CRM activity, reading accounting data).
- Analysing uploaded audio (customer call recordings, voice notes) by transcription and sentiment analysis.
- Running weekly automated research on behalf of subscribers (market intel, legal updates, competitor tracking).

### 1.2 Nature of the data
- **Account & billing data** — name, email, password hash, billing address, VAT status, payment confirmation (no card data stored).
- **Business Profile data** — 100+ fields about the subscriber's business.
- **Uploaded content** — documents, spreadsheets, presentations, images, audio (call recordings, voice notes), video.
- **Integration data** — OAuth tokens + data pulled from Gmail, Google Calendar, GA4, YouTube Analytics, Search Console, Stripe, QuickBooks, Xero, FreeAgent, Sage, HubSpot, social publishing networks, and others.
- **Usage telemetry** — logs, error reports, aggregate analytics.
- **Third-party personal data** — customer emails, prospect contact details, call recording transcripts containing other people's voices.

### 1.3 Scope of the processing
- **Geographic scope:** United Kingdom primarily, EU and rest-of-world subscribers supported.
- **Subjects:** Subscribers (controllers in their own right), end-customers of subscribers, prospects contacted by Hugh/Cecil, third parties whose voices are in uploaded recordings.
- **Volume:** Projected 1,000 subscribers in year 1; each subscriber may process data about hundreds to thousands of their own customers/prospects.
- **Duration:** Data retained while account active + 30 days post-cancellation (billing records 6 years per HMRC).

### 1.4 Context of the processing
- Subscribers grant Sidekicc access via OAuth or API keys. They remain controllers for any third-party personal data they ingest; Sidekicc is their processor for that data.
- Novel technology: generative AI, autonomous agents (Vibe Mode / Full Automation).
- Subscribers have a reasonable expectation of automation (they actively opt in to AI-executed actions) but third parties (their customers, prospects) may not know AI is involved.
- Power imbalance: subscribers range from individual sole traders to larger SMEs; some may lack privacy expertise.

---

## 2. Consultation

### 2.1 Internal consultation
- [ ] DPO / Privacy lead (name + date)
- [ ] Engineering lead (name + date)
- [ ] Legal counsel (name + date)
- [ ] Information security lead (name + date)

### 2.2 External consultation
- Data subject input: feedback channels open via privacy@sidekicc.com; pre-launch user interviews planned.
- Sub-processor DPAs executed with: Stripe, MailerLite, HubSpot (subscriber's own account), social publishing provider, email provider, enterprise AI provider, managed database provider, hosting provider.
- Where consultation skipped: [document any decision not to consult a given stakeholder and reason].

---

## 3. Necessity and proportionality

### 3.1 Why Art. 35 DPIA is triggered
At least three triggers apply (any one triggers DPIA):

1. **Automated decision-making with legal or similarly significant effects** (Art. 35(3)(a)). Vibe Mode / Full Automation lets AI employees send commercial emails, post public social content, log CRM data, and record financial entries without human review. Some downstream effects (e.g. marketing communications, accounting entries, legal policy drafts) are potentially "similarly significant" for third parties.
2. **Systematic monitoring on a large scale** (Art. 35(3)(c)). Sidekicc ingests subscriber inboxes (Gmail), subscriber-owned review streams (Google/Yelp/Trustpilot), and subscriber financial systems (Stripe/QuickBooks/Xero) on an ongoing basis.
3. **Processing of special category data on a large scale** (Art. 35(3)(b)). Customer call recordings uploaded by subscribers may incidentally contain health, financial, religious, political, or biometric data. Even though the subscriber controls this, the scale and automation warrant DPIA.
4. **Use of innovative technology** (ICO list of "high-risk processing" — generative AI explicitly called out in ICO's 2024 generative AI consultation).
5. **Combining data from multiple sources** (ICO list).

### 3.2 Lawful basis
Identified per processing activity in section 4 of the Privacy Policy. Primary bases: Contract (Art. 6(1)(b)), Legitimate Interests (Art. 6(1)(f)), Consent (Art. 6(1)(a) for marketing / non-essential cookies / call recording transcription).

### 3.3 Necessity
Each processing activity has been assessed: no less intrusive means achieves the service objective. OAuth is used in preference to password storage. Read-only scopes are preferred over write scopes. Subscriber can disable any integration at any time. Vibe Mode is OFF by default; subscriber must affirmatively enable it.

### 3.4 Proportionality
- Data minimisation: Business Profile fields are optional; subscribers choose what to share.
- Storage limits: 200MB Media Library cap; 500-item cap on stored generations.
- Purpose limitation: enterprise AI provider contractually prohibited from training on subscriber content.
- Accuracy: Subscriber-facing edit/delete tools for all stored data.
- Transparency: Privacy Policy + Cookie Policy + in-product AI labels + Art. 50 EU AI Act disclosure.

---

## 4. Identify and assess risks

| # | Risk | Likelihood | Severity | Overall | Notes |
|---|------|-----------|----------|---------|-------|
| 1 | AI output contains personal data fabrications (hallucination) sent externally (email, social) | Medium | High | High | Vibe Mode bypasses human review; harm to third party possible |
| 2 | OAuth token leak / compromise — attacker reads subscriber email or posts to social | Low | High | Medium | Tokens encrypted at rest; proxy-only; MFA on platform |
| 3 | Sub-processor breach (AI provider, hosting, database) | Low | High | Medium | Contractual notification in 72h; we relay to subscribers |
| 4 | Call recording contains special category data — no lawful basis by subscriber | Medium | High | High | Subscriber warranty in T&Cs; technical controls do not prevent |
| 5 | International transfer challenge (post-Schrems III) | Low | Medium | Low | UK IDTA / EU SCCs + TIA; EU-US DPF where available |
| 6 | Automated decisions affect third parties (e.g. Hugh's outreach to prospect) in a way that engages their Art. 22 rights | Medium | Medium | Medium | Require subscriber to warrant lawful basis; offer human-review route |
| 7 | Subscriber uses service for spam, harassment, defamation | Medium | High | High | AUP enforcement; content monitoring; account termination |
| 8 | Data retention longer than necessary | Low | Low | Low | 30-day post-cancellation purge automated |
| 9 | Child accesses service | Low | Medium | Low | Over-18 warranty; removal on discovery |
| 10 | Subscriber cannot fulfil data subject rights from end-customers because data is spread across integrations | Medium | Medium | Medium | Export and delete tooling per integration |

---

## 5. Identify measures to reduce risk

### 5.1 Organisational measures
- Privacy-by-design baseline in engineering standards.
- Mandatory privacy training for staff handling subscriber data (annual).
- DPO designated: [name] at privacy@sidekicc.com (confirm statutory appointment threshold).
- Register ICO data controller (~£40-£60/yr).
- DPA template available on request for B2B subscribers.
- Incident response plan with 72h ICO notification process.
- Sub-processor due diligence — every new sub-processor reviewed for GDPR compliance + security posture.

### 5.2 Technical measures
- TLS 1.2+ in transit, AES-256 at rest (managed encryption).
- Row-Level Security / per-tenant isolation at the database layer.
- OAuth token encryption with a separate key (KMS-held).
- Server-side proxy for all third-party API calls — credentials never ship to browser.
- CORS allowlist + action whitelist on proxy.
- MFA for staff admin access.
- Rate limits on AI generation endpoints.
- Audit log for every Vibe Mode / Full Automation action.
- Instant "Recall" button pauses all autonomous agent activity.
- Daily caps per employee / per integration, subscriber-configured.

### 5.3 Residual risks
Risk 1 (AI hallucination in autonomous output) — mitigated but not eliminated. Residual **Medium**. Mitigation: (a) subscriber education in onboarding, (b) daily-cap default, (c) content review checkpoints for certain categories (financial entries, legal content), (d) clear Terms clause assigning responsibility.

Risk 4 (special category data in call recordings) — mitigated by subscriber warranty only. Residual **Medium**. Consider: (a) automated detection of likely sensitive content with subscriber prompt before transcription, (b) opt-out from transcription per file.

Risk 7 (misuse) — mitigated by AUP + monitoring. Residual **Medium**. Consider: (a) content classification pre-publication for social posts, (b) SPF/DKIM alignment check for outbound email.

---

## 6. Sign-off

**DPO / Privacy lead:** ____________________ Date: __________
**Engineering lead:** ____________________ Date: __________
**CEO / Accountable exec:** ____________________ Date: __________

**ICO prior consultation required?** Only if residual risk remains HIGH after mitigation. Current assessment: residual HIGH on Risk 1 and Risk 4 before launch-time mitigations are implemented — reassess after mitigations are live. If still HIGH, consult ICO under Art. 36.

---

## 7. Review log

| Date | Reviewer | Change | Decision |
|------|----------|--------|----------|
| 2026-04-21 | [name] | Draft created | Pending sign-off |

---

*This DPIA is a working draft. A qualified data protection solicitor or an external DPO should review and sign off before launch. ICO guidance: [ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/data-protection-impact-assessments-dpias/).*
