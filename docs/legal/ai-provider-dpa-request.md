# AI Provider — Data Processing Addendum & "No Training" Request

**Purpose:** Template correspondence to confirm in writing that your enterprise AI provider (Google Cloud Vertex AI / Gemini API, or any alternative) will act as your sub-processor under UK GDPR Art. 28 and will not use your subscriber content to train foundation models.

**Why it matters:**
- Your Privacy Policy asserts "your content is not used to train any foundation models." You need written evidence from the provider to back that claim.
- UK GDPR Art. 28 requires a written contract with every processor and sub-processor.
- The EU AI Act Art. 50 transparency obligations assume you know what your upstream AI models do with data.

---

## Current state — what's contractually true today

### Google Cloud Vertex AI / Gemini API (paid tier via Google Cloud)
- Google's published Cloud Data Processing Addendum (CDPA) applies automatically to Google Cloud customers: [cloud.google.com/terms/data-processing-addendum](https://cloud.google.com/terms/data-processing-addendum).
- Google explicitly commits that "Customer Data" processed via Vertex AI / Gemini API on Google Cloud is NOT used to train Google's foundation models. Source: [cloud.google.com/vertex-ai/generative-ai/docs/data-governance](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance).
- UK IDTA and EU SCCs are incorporated by reference in the CDPA.
- Sub-processors disclosed at: [cloud.google.com/terms/subprocessors](https://cloud.google.com/terms/subprocessors).

### Google AI Studio / Gemini API free tier
- Free-tier usage **is** used to improve Google's products including training. Do not use the free tier for subscriber content.
- Paid tier routes content through Vertex AI — confirm your billing configuration points to the paid endpoint.

### Other providers (alternatives or additions)
- **Anthropic (Claude API)** — commercial customers by default: content not used to train. Confirm via Commercial Terms + Data Processing Agreement at [anthropic.com/legal/commercial-terms](https://anthropic.com/legal/commercial-terms).
- **OpenAI API** — API usage not used to train by default as of March 2023. Sign their BAA / DPA: [openai.com/policies/data-processing-addendum/](https://openai.com/policies/data-processing-addendum/).
- **Microsoft Azure OpenAI** — Microsoft contractual "no training" and data residency in EU regions.

---

## Action checklist

- [ ] Confirm your production code points to the paid tier of the chosen provider (Vertex AI endpoint, NOT the AI Studio / free-tier endpoint).
- [ ] Execute (or confirm auto-execution of) the provider's CDPA / DPA.
- [ ] Download a signed copy of the DPA for your records and store in this `docs/legal` folder as `executed-dpa-{provider}-{date}.pdf`.
- [ ] Add the provider to your sub-processor register in the Privacy Policy with: company name, purpose, data categories, country, safeguard (IDTA / SCCs / EU-US DPF).
- [ ] Review the provider's sub-processor list; subscribe to their change-notification mailing list.
- [ ] Document the no-training commitment with a screenshot / PDF of the public page at the time of onboarding (URLs drift).
- [ ] If using Vertex AI: explicitly disable any "Improve models" toggles in the Google Cloud console for your project.
- [ ] Document data residency: select an EU or UK region where available (e.g. `europe-west2` for Vertex AI in London).
- [ ] Turn on data access logging and set a retention period.
- [ ] Confirm your chosen region's compliance certifications match what you disclose (SOC 2, ISO 27001, ISO 27701, Cloud Security Alliance STAR).

---

## Template email — formal request for written confirmation

> To: [provider account manager email, or enterprise-dpa@provider.com]
> From: privacy@sidekicc.com
> Subject: Data Processing Addendum & sub-processor confirmation — Sidekicc Ltd
>
> Hello,
>
> We are preparing Sidekicc for public launch and need written confirmation of the following before we process subscriber personal data through your service:
>
> 1. That [Provider] acts as our processor (or sub-processor) under UK GDPR Article 28 and EU GDPR Article 28 for content we submit to your API under our paid-tier contract.
> 2. That subscriber Customer Data submitted via our API usage is NOT used to train, fine-tune, or otherwise improve your foundation models.
> 3. That an executed Data Processing Addendum (DPA) incorporating UK IDTA / EU Standard Contractual Clauses is in force between our organisations. Please confirm the version and attach a countersigned copy.
> 4. A current list of your sub-processors relied on to deliver the service, and the process by which you notify changes to that list.
> 5. Your certifications and accreditations relevant to this processing (SOC 2 Type II, ISO 27001, ISO 27701, EU-US Data Privacy Framework if applicable).
> 6. The data residency region for our workload and whether content at rest leaves that region for any reason.
> 7. Your incident / breach notification SLA under the DPA.
>
> Our legal entity: [Sidekicc Ltd / Company number / Registered office].
> Our nominated privacy contact: privacy@sidekicc.com.
>
> A written response (or countersigned DPA) is a prerequisite for our go-live. Please send to privacy@sidekicc.com and cc legal@sidekicc.com.
>
> Thank you,
> [Name], [Role] — Sidekicc

---

## What to file when you get a response

Store in this folder:
- `executed-dpa-{provider}-{YYYY-MM-DD}.pdf` — countersigned DPA.
- `subprocessor-list-{provider}-{YYYY-MM-DD}.pdf` — snapshot of their sub-processor page.
- `training-policy-{provider}-{YYYY-MM-DD}.pdf` — snapshot of their data-use / no-training policy page.
- `compliance-certs-{provider}-{YYYY-MM-DD}.pdf` — SOC 2 / ISO 27001 / etc. attestation letters.

Review annually (set a calendar reminder).

---

*Last updated: 21 April 2026. This document is a working template. A qualified data protection solicitor should review your final executed DPA.*
