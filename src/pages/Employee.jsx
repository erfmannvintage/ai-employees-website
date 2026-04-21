import { useParams, Link } from 'react-router-dom'
import { employees } from '../data/employees'
import SEO from '../components/SEO'

// Per-employee integrations, file types, and methodologies — sourced from the live app
const extras = {
  cecil: {
    integrations: [
      { name: 'Gmail', how: 'Reads, triages, drafts, and sends email — Inbox Zero every day.' },
      { name: 'Google Calendar', how: 'Creates events, blocks focus time, resolves conflicts, sends invites.' },
      { name: 'MailerLite', how: 'Runs newsletters, drip sequences, automations, segments, and A/B tests.' },
      { name: 'Google Sheets · Drive · Docs', how: 'Pulls data, drafts docs, attaches files to replies.' },
      { name: 'HubSpot meeting scheduler', how: 'Shares booking links so prospects self-schedule.' },
      { name: 'Outlook · Yahoo · Zoho · iCloud · SMTP', how: 'Connect unlimited email accounts — any provider.' },
    ],
    fileTypes: ['Meeting notes', 'Voice memos', 'PDF · DOCX · TXT · MD', 'CSV contact lists'],
    methodologies: ['Inbox Zero', 'OHIO (Only Handle It Once)', 'GTD', 'Eisenhower Matrix', 'AIDA / PAS copywriting', 'CAN-SPAM · GDPR · PECR compliance'],
  },
  flora: {
    integrations: [
      { name: 'TikTok · Instagram · Facebook · X · LinkedIn · YouTube', how: 'Publishes natively to each platform through our social publishing engine.' },
      { name: 'Pinterest · Threads · Bluesky · Reddit · GBP · Telegram · Snapchat · WhatsApp · Discord', how: 'Extended reach — 14 platforms total, each with platform-native formatting.' },
      { name: 'YouTube Analytics (live)', how: 'Tracks video performance, watch time, retention, traffic sources.' },
      { name: 'In-house AI image generation', how: 'Generates branded images at correct aspect ratio per platform (9:16, 4:5, 16:9, 1:1).' },
      { name: 'Native video scene library', how: '6 scene types — Hero, Problem, Comparison, Stat, Text Card, CTA — for TikTok-native video.' },
      { name: 'Media Library', how: 'Uses your uploaded images, audio, and video clips in posts.' },
      { name: 'Competitor Insights', how: 'Tracks competitor accounts — winning formats, hooks, hashtags, content gaps.' },
    ],
    fileTypes: ['Images (JPG · PNG · WEBP)', 'Audio (MP3 · WAV · M4A · OGG)', 'Video clips', 'Voice notes with ideas'],
    methodologies: ['6-scene video architecture', 'Anti-repetition engine', 'Platform-native styling', 'Owner voice replication', 'Trend-aligned scheduling'],
  },
  basil: {
    integrations: [
      { name: 'Gmail', how: 'Reads customer enquiries, drafts empathetic replies, escalates when needed.' },
      { name: 'Google Places reviews', how: 'Monitors and responds to up to 5 recent Google reviews per location.' },
      { name: 'Yelp Fusion', how: '500 free calls/day — reads and responds to reviews.' },
      { name: 'Trustpilot', how: 'Public read of any business — responds to positive and negative reviews.' },
      { name: 'Churn health scoring', how: '5-stage Behavioural Decay model flags at-risk customers before they leave.' },
    ],
    fileTypes: ['Customer call recordings (MP3/WAV)', 'Support voice notes', 'Knowledge base docs', 'Ticket exports (CSV)'],
    methodologies: ['HEARD method (Hear · Empathise · Apologise · Resolve · Diagnose)', 'BANT qualification', 'CSAT · NPS · CES measurement', 'P1-P4 priority tiers', '5-stage churn detection'],
  },
  hugh: {
    integrations: [
      { name: 'Lead Discovery Engine', how: 'Pulls prospects from 7 free sources — no paid APIs needed.' },
      { name: 'Companies House', how: 'UK company records with directors, filings, SIC codes.' },
      { name: 'OpenStreetMap Overpass', how: 'Global business lookup — 33 industry mappings covered.' },
      { name: 'Google Places', how: 'Local business data + review intelligence before outreach.' },
      { name: 'Wikidata · Social scraping · Directory scraping', how: 'Trade associations, Instagram/TikTok/Facebook profiles, vertical directories.' },
      { name: 'Website enrichment', how: 'Scrapes emails, phone numbers, and social handles from prospect sites.' },
      { name: 'HubSpot CRM (free tier)', how: 'Contacts, companies, deals, pipeline stages, unlimited engagement notes.' },
      { name: 'Gmail · MailerLite', how: 'Multi-touch outreach sequences across email providers.' },
    ],
    fileTypes: ['Sales call recordings (MP3/WAV)', 'Competitor spreadsheets (XLSX · CSV)', 'Pitch decks (PPTX · PPT)', 'Prospect list imports (CSV)'],
    methodologies: ['SPIN Selling', 'Challenger Sale', 'MEDDIC', 'CHAMP', 'Signal-based selling', '33 industry playbooks'],
  },
  mabel: {
    integrations: [
      { name: 'Google Search Console (live)', how: 'Real-time rankings, CTR, indexing issues, content decay detection.' },
      { name: 'Blog CMS', how: 'Writes and publishes direct — 2 posts/week (Mon + Thu) auto-saved.' },
      { name: 'Media Library', how: 'Sources visuals and attributes them in blog posts.' },
      { name: 'Review mining engine', how: 'Turns customer complaints into "top problems" blog angles.' },
    ],
    fileTypes: ['Keyword spreadsheets (XLSX · CSV)', 'Research PDFs', 'Competitor blog posts (HTML · MD)', 'Topic briefs (DOCX)'],
    methodologies: ['Hub-and-spoke topical authority', 'AEO (Answer Engine Optimisation)', 'GEO (Generative Engine Optimisation)', 'E-E-A-T signals', 'FAQ snippet schema', 'Internal linking strategy'],
  },
  rupert: {
    integrations: [
      { name: 'gov.uk (live grounded search)', how: 'Latest UK government guidance — tax, employment, data.' },
      { name: 'ICO (Information Commissioner)', how: 'Enforcement actions, GDPR updates, data breach reporting rules.' },
      { name: 'legislation.gov.uk', how: 'Primary source for UK statutes — Consumer Rights Act, DPA 2018, etc.' },
      { name: 'ASA (Advertising Standards)', how: 'Ad copy and campaign review against current ASA rulings.' },
      { name: 'Companies House', how: 'Director records, filings, ownership verification.' },
      { name: 'HMRC · judiciary.uk', how: 'Tax guidance and case law for ongoing compliance.' },
    ],
    fileTypes: ['Contracts (PDF · DOCX)', 'Regulatory documents (PDF)', 'Compliance spreadsheets (XLSX)', 'Policy templates (DOCX)'],
    methodologies: ['UK GDPR · DPA 2018', 'EU AI Act', 'Consumer Rights Act 2015', 'PECR / ePrivacy', 'WCAG 2.2 accessibility', 'ASA advertising codes'],
  },
  poppi: {
    integrations: [
      { name: 'Google Search (live grounded)', how: 'Real-time competitive intel and market moves.' },
      { name: 'Boardroom (team chat)', how: 'Assigns tasks to Flora, Hugh, Mabel, Raymond, Bowie, Cecil, Ava.' },
      { name: 'Competitor Insights', how: 'Listed competitor accounts auto-tracked across platforms.' },
      { name: 'HubSpot pipeline read', how: 'Pipeline value + stage breakdown inform campaign priorities.' },
      { name: 'Live finance snapshot', how: 'Stripe MRR and QuickBooks P&L feed into spend decisions.' },
      { name: 'Campaign templates', how: 'Launches Waitlist · New Subscriber · Free Trial · Retention · Win-Back · Custom.' },
    ],
    fileTypes: ['Presentations (PPTX · PPT)', 'Marketing reports (PDF)', 'Voice notes with campaign ideas', 'Brand guidelines (DOCX · PDF)'],
    methodologies: ['AARRR pirate funnels', 'ICP framework', 'Jobs-to-be-Done', '6 campaign templates', 'Multi-channel orchestration', 'Brand positioning'],
  },
  ava: {
    integrations: [
      { name: 'GA4 (Marketer-level live access)', how: 'Real-time traffic, conversions, attribution — not 30-day exports.' },
      { name: 'YouTube Analytics', how: 'Watch time, retention curves, audience demographics, traffic sources.' },
      { name: 'Google Search Console', how: 'Queries, clicks, impressions, CTR, average position, indexing.' },
      { name: 'BigQuery', how: 'Custom SQL on raw GA4 event data for deep dives.' },
      { name: 'Looker Studio', how: 'Builds executive dashboards with your KPIs.' },
    ],
    fileTypes: ['Historical data (XLSX · CSV)', 'Benchmark reports (PDF)', 'Raw event exports (JSON)', 'Dashboard screenshots'],
    methodologies: ['Attribution modelling (data-driven · last-click · first-click)', 'Cohort analysis', 'Predictive audiences', 'Anomaly detection', 'GA4 event audits', 'Daily metrics framework'],
  },
  raymond: {
    integrations: [
      { name: 'Google Ads (all 9 certifications)', how: 'Search, Display, Video, Shopping, Apps, Measurement, AI-Powered Performance, AI-Powered Shopping, Creative.' },
      { name: 'Meta Ads', how: 'Facebook + Instagram campaigns across all placements.' },
      { name: 'Google Keyword Planner', how: 'Search volume, competition, suggested bids.' },
      { name: 'Meta Ad Library', how: 'Studies what competitors are actually spending on.' },
      { name: 'GA4 integration', how: 'Conversion tracking, attribution, custom audiences for retargeting.' },
      { name: 'Review mining engine', how: 'Grounds ad hooks in real customer pain points, not guesses.' },
    ],
    fileTypes: ['Campaign reports (XLSX · CSV)', 'Ad screenshots (PNG · JPG)', 'Creative briefs (PPTX)', 'Audience exports (CSV)'],
    methodologies: ['TOFU / MOFU / BOFU funnel', '5-pillar architecture (targeting · creative · bidding · landing · measurement)', 'A/B testing framework', 'ROAS optimisation', 'Budget allocation models'],
  },
  bowie: {
    integrations: [
      { name: 'Live grounded web research', how: 'Cited sources — every insight links to a real URL.' },
      { name: 'Community & forum intelligence', how: 'Deep comment mining on niche communities where real pain points live. Auto-discovers relevant discussion spaces for your business type.' },
      { name: 'Launch & industry signals', how: 'Technical launches, product discussions, changelog alerts across developer and founder channels.' },
      { name: 'Structured public data', how: 'Trade associations, industry bodies, and verified registries.' },
      { name: 'Market sizing & traffic intelligence', how: 'Government statistics, traffic estimates, funding data, product landscape across leading research platforms.' },
    ],
    fileTypes: ['Industry reports (PDF)', 'Market data (XLSX)', 'Conference recordings (MP3)', 'Competitor pitch decks (PPTX)'],
    methodologies: ['PESTLE analysis', "Porter's Five Forces", 'TAM / SAM / SOM sizing', 'SWOT', 'Jobs-to-be-Done', 'Blue Ocean Strategy', 'Business Model Canvas'],
  },
  angela: {
    integrations: [
      { name: 'Stripe (live)', how: 'MRR · ARR · churn · ARPU · cancelled-last-30 · subscribers-by-plan.' },
      { name: 'QuickBooks Online', how: 'Live P&L, balance sheet, assets, liabilities, cash, AR, AP.' },
      { name: 'Xero', how: 'Live YTD P&L, balance sheet, cash, outstanding invoices.' },
      { name: 'FreeAgent', how: 'UK sole trader P&L + invoices.' },
      { name: 'Sage', how: 'Traditional UK bookkeeping integration.' },
      { name: 'HMRC · gov.uk (live search)', how: 'Corporation Tax, VAT, R&D credit rates refreshed weekly.' },
      { name: 'HubSpot pipeline cross-check', how: 'Reconciles closed-won deal value vs Stripe actual revenue.' },
    ],
    fileTypes: ['Bank statements (CSV)', 'Financial reports (XLSX)', 'Tax documents (PDF)', 'Receipts (JPG · PNG · PDF)', 'Invoices (PDF · DOCX)'],
    methodologies: ['Corporation Tax planning', 'VAT returns', 'R&D Tax Credits', 'Capital Allowances', 'Dividend/salary split optimisation', 'SEIS / EIS advance assurance', 'MTD (Making Tax Digital) compliance', 'Monthly management accounts'],
  },
}

const detailed = {
  cecil: {
    fullName: 'Cecil Hartington-Smythe', tagline: 'Your right hand. I manage your calendar, emails, and daily operations so you can focus on growing your business.',
    qualifications: ['HubSpot Email Marketing', 'Google Workspace'],
    specialty: 'Email, calendar, MailerLite campaigns, Inbox Zero',
    skills: [{ name: 'Email Management', level: 98 }, { name: 'Calendar Optimization', level: 95 }, { name: 'Task Prioritization', level: 92 }, { name: 'Email Campaigns', level: 88 }, { name: 'Team Coordination', level: 90 }],
    experience: [
      { area: 'Inbox Management', detail: 'Triages every email — flags urgent, drafts replies, archives noise. Achieves Inbox Zero daily.' },
      { area: 'Calendar Control', detail: 'Schedules meetings, blocks focus time, resolves conflicts. Your calendar serves you.' },
      { area: 'Daily Briefings', detail: 'Morning briefings with top priorities, deadlines, and decisions needing attention.' },
      { area: 'Email Campaigns', detail: 'Runs MailerLite newsletters, sequences, automations. Writes, schedules, optimizes.' },
      { area: 'Meeting Management', detail: 'Takes notes, extracts action items, follows up. Nothing slips.' },
      { area: 'Team Coordination', detail: 'Routes tasks across 11 employees — delegates, tracks completion.' },
    ],
    metrics: [{ value: 'Daily', label: 'Inbox Zero' }, { value: '<30s', label: 'Draft Time' }, { value: '11', label: 'Employees Routed' }, { value: 'AM', label: 'Briefing Schedule' }],
    who: 'Business owners and founders spending 2+ hours a day on email, calendar management, and admin tasks. If your inbox has 100+ unread emails, your calendar is a warzone of double-bookings, and you\'re still doing your own MailerLite campaigns at 10pm — Cecil takes over all of it. He connects to Gmail, Outlook, Yahoo, Zoho, iCloud, or any SMTP server. He achieves Inbox Zero every single day, drafts professional replies in under 30 seconds, blocks focus time on your calendar, and runs your newsletter campaigns. You wake up to a morning briefing with your top priorities, deadlines, and decisions that need your attention. Nothing gets missed.',
  },
  flora: {
    fullName: 'Flora Beaumont', tagline: 'Your social media powerhouse. Scroll-stopping content across every platform, every day.',
    qualifications: ['Content Strategy Frameworks', 'YouTube Analytics'],
    specialty: '10 posts/day across 5 platforms, competitor analysis, video',
    skills: [{ name: 'Content Creation', level: 97 }, { name: 'Video Production', level: 90 }, { name: 'Trend Analysis', level: 95 }, { name: 'Community Management', level: 88 }, { name: 'Platform Strategy', level: 93 }],
    experience: [
      { area: 'Multi-Platform Content', detail: '10+ posts/day across TikTok, Instagram, LinkedIn, Facebook, X. Platform-native.' },
      { area: 'Video Production', detail: 'Scripts, storyboards, produces video optimized for each algorithm.' },
      { area: 'Content Calendars', detail: 'Weekly/monthly calendars with optimal times, themes, campaign tie-ins.' },
      { area: 'Competitor Analysis', detail: 'Tracks competitor content, spots trending formats before they peak.' },
      { area: 'Engagement Strategy', detail: 'Hooks, captions, hashtags that drive comments, shares, saves.' },
      { area: 'Cross-Team Sync', detail: 'Reviews with Poppi on strategy, Mabel on SEO, Raymond on ad creative.' },
    ],
    metrics: [{ value: '10+', label: 'Daily Posts' }, { value: '6', label: 'Platforms' }, { value: '5', label: 'Content Types' }, { value: 'Same Day', label: 'Trend Response' }],
    who: 'If you hired a social media manager, you\'d pay £2,000-£3,500/month and they\'d produce maybe 2-3 posts a day across 2 platforms. Flora produces 10+ posts every single day across TikTok, Instagram, Facebook, X, YouTube, and LinkedIn — each one formatted perfectly for that platform\'s algorithm, dimensions, and audience behaviour. She generates branded AI images for every post using AI, creates TikTok-native videos with our video pipeline, runs weekly competitor analysis to see what\'s working in your niche, and adjusts your content strategy based on real data from Ava. She auto-runs every morning — you wake up to a full day\'s content ready for your approval. She never takes holidays, never calls in sick, and never runs out of ideas.',
  },
  basil: {
    fullName: 'Basil Thornbury', tagline: 'Your customer support lead. Every query handled with patience and precision — 24/7.',
    qualifications: ['HubSpot Service Hub', 'CCXP Certified'],
    specialty: 'Support, churn detection, demo booking, HEARD method',
    skills: [{ name: 'Ticket Resolution', level: 96 }, { name: 'Live Chat', level: 94 }, { name: 'Churn Detection', level: 90 }, { name: 'Knowledge Base', level: 92 }, { name: 'CSAT Optimization', level: 88 }],
    experience: [
      { area: 'Instant Response', detail: 'Handles queries via chat, email, tickets. No customer waits more than minutes.' },
      { area: 'HEARD Method', detail: 'Hear, Empathise, Apologise, Resolve, Diagnose — complaints become loyalty.' },
      { area: 'Churn Detection', detail: 'Identifies at-risk customers through sentiment and engagement patterns.' },
      { area: 'Demo Booking', detail: 'Qualifies prospects, books discovery calls, routes hot leads to Hugh.' },
      { area: 'Knowledge Base', detail: 'Builds self-service docs for instant answers to common questions.' },
      { area: 'Escalation', detail: 'Routes complex issues with full context — you get the summary, not the mess.' },
    ],
    metrics: [{ value: '<2m', label: 'Response Time' }, { value: '24/7', label: 'Availability' }, { value: '95%+', label: 'Resolution' }, { value: '4.8/5', label: 'CSAT Target' }],
    who: 'A human customer support agent costs £1,800-£2,500/month, works 8 hours a day, and needs training. Basil works 24/7/365 and responds in under 2 minutes — every time. He\'s CCXP certified, uses the HEARD method to turn angry customers into brand advocates, and detects churn signals before you lose the customer. He books demos for interested prospects (qualifying them with BANT before routing to Hugh), builds your knowledge base so common questions get instant answers, and escalates complex issues with full context so you never have to dig through old tickets. Your CSAT scores go up. Your churn goes down. And you never have to answer "where\'s my order?" at 11pm again.',
  },
  hugh: {
    fullName: 'Hugh Ashworth-Pemberton', tagline: 'Your sales machine. Discovers leads, runs outreach, manages pipelines, closes deals.',
    qualifications: ['HubSpot Inbound Sales', 'Sales Enablement', 'Sandler Training'],
    specialty: '7-source lead discovery, SPIN/Challenger/MEDDIC, global prospecting',
    skills: [{ name: 'Lead Discovery', level: 97 }, { name: 'Pipeline Management', level: 95 }, { name: 'Outreach Sequences', level: 93 }, { name: 'Sales Methodology', level: 96 }, { name: 'Global Prospecting', level: 88 }],
    experience: [
      { area: '7-Source Discovery', detail: 'Directories, social, intent signals, referrals, events, content, partnerships.' },
      { area: 'Sales Frameworks', detail: 'SPIN Selling, Challenger Sale, MEDDIC — qualify and close at every stage.' },
      { area: 'Outreach Sequences', detail: 'Multi-touch cold emails, follow-ups, nurture campaigns across time zones.' },
      { area: 'Pipeline Management', detail: 'CRM stages, stalled opportunity flags, revenue forecasting.' },
      { area: 'Global Prospecting', detail: 'Cross-market prospecting with localized messaging.' },
      { area: 'Proposals', detail: 'Pitch decks, proposals, follow-ups. Contract review with Rupert.' },
    ],
    metrics: [{ value: '7', label: 'Lead Sources' }, { value: '33', label: 'Industry Maps' }, { value: '3', label: 'Frameworks' }, { value: 'Global', label: 'Reach' }],
    who: 'A sales development rep costs £2,500-£4,000/month and still needs a CRM, lead database subscriptions (£200-500/month), and months of training. Hugh comes with his own Lead Discovery Engine that pulls from multiple data sources across any industry — he finds businesses you didn\'t know existed. He\'s trained in SPIN Selling, Challenger Sale, and MEDDIC, so he qualifies leads properly instead of spamming everyone. He builds and runs multi-touch outreach sequences, manages your entire pipeline, creates proposals and pitch decks, and gets contracts reviewed by Rupert before you sign anything. He prospects globally across time zones with localized messaging. The first week he works for you, he\'ll find more leads than your previous tool found in a month.',
  },
  mabel: {
    fullName: 'Mabel Cavendish', tagline: 'Your SEO content engine. Articles that rank on Google and convert visitors into customers.',
    qualifications: ['Google SEO', 'HubSpot SEO', 'HubSpot Content Marketing', 'Semrush (15+ certs)', 'Ahrefs Academy'],
    specialty: 'Blog SEO, AEO, GEO, hub-and-spoke, Search Console',
    skills: [{ name: 'SEO Writing', level: 98 }, { name: 'Keyword Research', level: 96 }, { name: 'Content Architecture', level: 94 }, { name: 'AEO & GEO', level: 90 }, { name: 'Search Console', level: 92 }],
    experience: [
      { area: 'SEO Architecture', detail: 'Hub-and-spoke structures that establish topical authority and dominate SERPs.' },
      { area: 'Keyword Research', detail: 'Intent, difficulty, SERP features — high-value opportunities.' },
      { area: 'AEO & GEO', detail: 'Answer Engine Optimization for snippets. Generative Engine Optimization for AI search.' },
      { area: 'Search Console', detail: 'Rankings, indexing, CTR tracking, content decay identification.' },
      { area: 'Long-Form Content', detail: 'Research-backed articles optimized for engines and humans.' },
      { area: 'Content Strategy', detail: 'Editorial calendars aligned with goals and seasonal opportunities.' },
    ],
    metrics: [{ value: '15+', label: 'Semrush Certs' }, { value: '3', label: 'SEO Types' }, { value: 'H&S', label: 'Architecture' }, { value: 'Live', label: 'Search Console' }],
    who: 'A freelance SEO writer charges £150-£500 per blog post, takes 3-5 days to deliver, and you still have to do your own keyword research and manage Search Console. Mabel writes 2 SEO-optimized articles per week using hub-and-spoke architecture that builds topical authority — not random one-off posts. She holds 15+ Semrush certifications, Ahrefs Academy credentials, Google SEO Fundamentals, and HubSpot Content Marketing. She implements Answer Engine Optimization (AEO) so your content appears in featured snippets, and Generative Engine Optimization (GEO) so you show up in AI search results. She has live Search Console access to monitor your rankings, fix indexing issues, and identify content decay. When she publishes a blog, Flora automatically promotes it across all social channels. That\'s a content pipeline that runs itself.',
  },
  rupert: {
    fullName: 'Rupert Blackwell-Forsyth', tagline: 'Your legal safety net. Contracts, compliance, and protection — without the hourly rate.',
    qualifications: ['UK GDPR', 'Consumer Rights Act', 'EU AI Act', 'PECR'],
    specialty: 'Contracts, compliance, IP, advertising law',
    skills: [{ name: 'Contract Review', level: 96 }, { name: 'GDPR Compliance', level: 98 }, { name: 'IP Protection', level: 90 }, { name: 'Advertising Law', level: 88 }, { name: 'Risk Assessment', level: 94 }],
    experience: [
      { area: 'Contract Review', detail: 'Flags risky clauses, suggests amendments, protects your interests.' },
      { area: 'GDPR & Data', detail: 'UK GDPR, PECR, international data protection compliance.' },
      { area: 'EU AI Act', detail: 'AI compliance monitoring and advisory as regulations evolve.' },
      { area: 'Policies & Terms', detail: 'ToS, privacy policies, cookie policies, refund policies.' },
      { area: 'IP & Ad Law', detail: 'IP protection and ASA advertising compliance.' },
      { area: 'Legal Databases', detail: 'gov.uk, ICO, legislation.gov.uk, ASA, Companies House.' },
    ],
    metrics: [{ value: 'UK & EU', label: 'Jurisdictions' }, { value: '5', label: 'Legal Sources' }, { value: '4', label: 'Compliance Acts' }, { value: 'Weekly', label: 'Auto-Research' }],
    who: 'A solicitor charges £200-£500 per hour. Most small businesses can\'t afford one, so they sign contracts unread, copy privacy policies from competitors, and hope they\'re GDPR compliant. Rupert changes that. He reviews every clause in every contract, flags risky terms, and suggests amendments. He drafts proper terms of service, privacy policies, cookie policies, and refund policies. He monitors UK GDPR, the Consumer Rights Act, EU AI Act, and PECR regulations — accessing gov.uk, ICO, legislation.gov.uk, ASA, and Companies House every week for the latest updates. He reviews Hugh\'s sales outreach for legal compliance, checks Raymond\'s ads against ASA rules, and ensures Angela\'s financial reporting meets regulatory standards. That\'s legal protection that runs 24/7 for less than one hour of a solicitor\'s time.',
  },
  poppi: {
    fullName: 'Poppi Hartwell', tagline: 'Your marketing brain. Strategy, campaigns, and team coordination on autopilot.',
    qualifications: ['AARRR Funnels', 'ICP Frameworks', 'Campaign Orchestration'],
    specialty: 'Team management, strategy, competitive intelligence',
    skills: [{ name: 'Campaign Strategy', level: 97 }, { name: 'Funnel Design', level: 95 }, { name: 'Team Management', level: 96 }, { name: 'Competitive Intel', level: 90 }, { name: 'Brand Positioning', level: 92 }],
    experience: [
      { area: 'AARRR Funnels', detail: 'Acquisition, Activation, Retention, Referral, Revenue — systematic growth.' },
      { area: 'ICP Development', detail: 'Ideal Customer Profiles aligning every marketing touchpoint.' },
      { area: 'Campaign Orchestration', detail: 'Multi-channel: social, email, content, paid ads.' },
      { area: 'Team Management', detail: 'Coordinates Flora, Mabel, Raymond, Hugh on cross-channel efforts.' },
      { area: 'Competitive Intel', detail: 'Monitors competitor positioning, messaging, campaigns.' },
      { area: 'Performance', detail: 'Analyzes results, runs experiments, improves conversion.' },
    ],
    metrics: [{ value: 'AARRR', label: 'Framework' }, { value: '4', label: 'Team Managed' }, { value: '15+', label: 'Auto-Workflows' }, { value: 'Full', label: 'Channel Coverage' }],
    who: 'A marketing consultant charges £3,000-£8,000 per month and gives you a strategy document that sits in a drawer. Poppi doesn\'t just write strategies — she orchestrates them. She builds AARRR funnels (Acquisition, Activation, Retention, Referral, Revenue), creates your Ideal Customer Profile, then breaks every campaign into specific tasks and assigns them to the right employees: Flora handles social, Mabel handles content, Raymond handles ads, Hugh handles outreach. She coordinates the entire team, monitors campaign performance, and adjusts in real-time. She runs competitive intelligence to make sure your positioning stays ahead. And she manages 6 pre-built campaign templates (Waitlist, New Subscriber, Free Trial, Retention, Win-Back, Custom) that you can launch with a single click. That\'s not a strategy consultant — that\'s a marketing department.',
  },
  ava: {
    fullName: 'Ava Sinclair', tagline: 'Your data translator. Numbers become decisions with dashboards, reports, and predictions.',
    qualifications: ['Google Analytics IQ (GAIQ)'],
    specialty: 'GA4 live access, attribution, cohort analysis, predictive audiences',
    skills: [{ name: 'GA4 & Analytics', level: 98 }, { name: 'Attribution Modelling', level: 94 }, { name: 'Cohort Analysis', level: 92 }, { name: 'Predictive Analytics', level: 90 }, { name: 'Dashboard Design', level: 96 }],
    experience: [
      { area: 'GA4 Live Access', detail: 'Direct connection for real-time monitoring and custom reports.' },
      { area: 'Attribution', detail: 'Models showing which channels drive revenue, not just traffic.' },
      { area: 'Cohort Analysis', detail: 'Customer behaviour over time — retention, spend, engagement.' },
      { area: 'Predictive Audiences', detail: 'AI segments predicting who converts or churns.' },
      { area: 'Anomaly Detection', detail: 'Alerts to problems before they become crises.' },
      { area: 'Dashboards', detail: 'Visual KPI dashboards for your business.' },
    ],
    metrics: [{ value: 'Live', label: 'GA4 Access' }, { value: '3', label: 'Analysis Types' }, { value: 'Real-time', label: 'Monitoring' }, { value: 'Weekly', label: 'Benchmarks' }],
    who: 'An analytics consultant charges £100-£250 per hour to produce monthly reports you barely read. Ava is connected live to your Google Analytics 4 at Marketer-level access — she sees everything in real-time, not 30-day-old exports. She builds attribution models that show you exactly which channels drive revenue (not just traffic), runs cohort analysis to understand customer behaviour over time, and creates predictive audiences that target your highest-value prospects. She detects traffic anomalies daily and alerts you before problems become crises. She builds executive dashboards tracking the KPIs that actually matter for YOUR business. And she shares her insights automatically with Poppi (strategy), Flora (content), and Angela (finances) through the team knowledge system. That\'s a data team for the price of one report.',
  },
  raymond: {
    fullName: 'Raymond Blake', tagline: 'Your ad spend guardian. Google, Meta, TikTok — maximum ROAS, minimum waste.',
    qualifications: ['All 9 Google Ads Certifications', 'Meta Ads Certified'],
    specialty: 'Google Search/Display/Shopping/PMax, 5-pillar architecture',
    skills: [{ name: 'Google Ads', level: 99 }, { name: 'Meta Ads', level: 94 }, { name: 'Budget Optimization', level: 96 }, { name: 'A/B Testing', level: 92 }, { name: 'Campaign Architecture', level: 95 }],
    experience: [
      { area: 'Google Ads', detail: 'Search, Display, Shopping, Video, Apps, PMax. All 9 certs.' },
      { area: '5-Pillar System', detail: 'Targeting, creative, bidding, landing pages, measurement.' },
      { area: 'Meta Advertising', detail: 'Facebook and Instagram across all placements.' },
      { area: 'Budget Optimization', detail: 'Allocates spend for maximum return per pound.' },
      { area: 'A/B Testing', detail: 'Copy, creative, audiences, bidding, landing pages.' },
      { area: 'Compliance', detail: 'Cross-reviews with Rupert on ASA and platform policies.' },
    ],
    metrics: [{ value: '9/9', label: 'Google Certs' }, { value: '3', label: 'Ad Platforms' }, { value: '5', label: 'Campaign Types' }, { value: '5-Pillar', label: 'Architecture' }],
    who: 'A PPC agency charges £1,500-£5,000 per month plus a percentage of your ad spend — and they\'re managing 20 other clients at the same time. Raymond manages YOUR campaigns like they\'re his own money. He holds all 9 Google Ads certifications (Search, Display, Video, Shopping, Apps, Measurement, AI-Powered Performance, AI-Powered Shopping, Creative) plus Meta Ads. He builds campaigns using his 5-pillar architecture: targeting, creative, bidding, landing pages, and measurement — each one optimized for maximum ROAS. He runs continuous A/B tests on copy, creative, audiences, and landing pages. He cross-reviews with Ava on performance metrics and Rupert on advertising compliance. If your ROAS is bad, he fixes it. If you don\'t know what your ROAS is, he tells you.',
  },
  bowie: {
    fullName: 'Bowie Fairfax', tagline: 'Your intelligence analyst. Markets, competitors, trends — your unfair advantage.',
    qualifications: ['Oxford MPhil', 'Cambridge MBA', 'PESTLE Analysis', "Porter's Five Forces"],
    specialty: 'Market research, TAM/SAM/SOM, weekly intel scans',
    skills: [{ name: 'Competitor Analysis', level: 98 }, { name: 'Market Research', level: 96 }, { name: 'Trend Forecasting', level: 92 }, { name: 'Strategic Frameworks', level: 97 }, { name: 'Data Mining', level: 90 }],
    experience: [
      { area: 'Competitor Intel', detail: 'Porter\'s Five Forces — pricing, features, positioning, vulnerabilities.' },
      { area: 'Market Sizing', detail: 'TAM, SAM, SOM calculations for strategic planning.' },
      { area: 'Weekly Intel', detail: 'Automated scans Monday and Wednesday. You know first.' },
      { area: 'PESTLE Analysis', detail: 'Political, Economic, Social, Technological, Legal, Environmental.' },
      { area: 'Industry Reports', detail: 'Comprehensive reports with actionable recommendations.' },
      { area: 'Opportunity Spotting', detail: 'Market gaps, emerging trends, positioning opportunities.' },
    ],
    metrics: [{ value: 'Oxbridge', label: 'Education' }, { value: '2x/wk', label: 'Auto-Research' }, { value: '4', label: 'Frameworks' }, { value: 'Global', label: 'Coverage' }],
    who: 'A market research firm charges £5,000-£20,000 per project and takes weeks to deliver. Bowie has an Oxford MPhil and Cambridge MBA, and he works for you every week — not once a quarter. He runs Porter\'s Five Forces analysis on your competitors (pricing, features, positioning, vulnerabilities), calculates your Total Addressable Market, Serviceable Addressable Market, and Serviceable Obtainable Market, and performs PESTLE mapping across Political, Economic, Social, Technological, Legal, and Environmental factors. He scans your competitive landscape automatically every Monday and Wednesday, pulling from gov.uk, ONS, SimilarWeb, Google Trends, Crunchbase, and Product Hunt. His findings feed directly into Poppi\'s marketing strategy and Flora\'s content planning. That\'s an intelligence department that never sleeps.',
  },
  angela: {
    fullName: 'Angela Whitworth-Sterling', tagline: 'Your CFO. Books, budgets, tax, and strategy with visibility into every pound.',
    qualifications: ['ACA', 'ACCA', 'CIMA Strategic', 'Xero Advisor', 'QuickBooks ProAdvisor Platinum', 'Sage 50'],
    specialty: 'UK tax (CT, VAT, R&D credits), Stripe, QuickBooks, MTD',
    skills: [{ name: 'Financial Planning', level: 98 }, { name: 'Tax Management', level: 96 }, { name: 'Cash Flow Analysis', level: 95 }, { name: 'Cloud Accounting', level: 94 }, { name: 'Strategic Finance', level: 92 }],
    experience: [
      { area: 'UK Tax', detail: 'Corporation Tax, VAT returns, R&D credits. Maximizes allowances.' },
      { area: 'Financial Tools', detail: 'Stripe, QuickBooks, Xero, Sage — real-time across all accounts.' },
      { area: 'MTD Compliance', detail: 'Making Tax Digital — records and quarterly HMRC submissions.' },
      { area: 'Cash Flow', detail: 'Monitors runway, projects flow, alerts before problems hit.' },
      { area: 'Reporting', detail: 'P&L, balance sheets, expenses, board-ready summaries.' },
      { area: 'Strategic Finance', detail: 'Pricing, cost optimization, investment timing, growth financing.' },
    ],
    metrics: [{ value: '6', label: 'Qualifications' }, { value: '4', label: 'Accounting Tools' }, { value: '3', label: 'Tax Types' }, { value: 'Weekly', label: 'Tax Updates' }],
    who: 'A part-time bookkeeper costs £800-£1,500/month and still can\'t advise you on tax strategy. A qualified accountant costs £2,000-£5,000/month. Angela is ACA, ACCA, and CIMA Strategic qualified — the same credentials as a Big Four accountant — plus Xero Advisor, QuickBooks ProAdvisor Platinum, and Sage 50 Mastery. She connects to Stripe, QuickBooks, Xero, and Sage for real-time financial data across all your accounts. She handles Corporation Tax planning, VAT returns, R&D tax credit claims, and Making Tax Digital compliance. She monitors your cash flow runway and alerts you before problems hit. She generates P&L reports, balance sheets, expense breakdowns, and board-ready summaries. And she gets her tax knowledge refreshed every Monday morning via auto-research from HMRC and gov.uk. That\'s a CFO who never takes their eye off the numbers.',
  },
}

const cx = { maxWidth: 1200, margin: '0 auto', padding: '0 32px' }

function SkillBar({ name, level }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: '#1a1a2e' }}>{name}</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#6C3AFF' }}>{level}%</span>
      </div>
      <div style={{ height: 8, background: '#eee', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${level}%`, background: 'linear-gradient(90deg, #6C3AFF, #0066FF)', borderRadius: 4 }} />
      </div>
    </div>
  )
}

export default function Employee() {
  const { slug } = useParams()
  const emp = employees.find((e) => e.name.toLowerCase() === slug)
  const detail = detailed[slug]
  const extra = extras[slug]

  if (!emp || !detail) {
    return (
      <div style={{ padding: '160px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e' }}>Employee Not Found</h1>
        <Link to="/about" style={{ color: '#6C3AFF', marginTop: 16, display: 'inline-block' }}>View all employees →</Link>
      </div>
    )
  }

  const employeeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: detail.fullName,
    jobTitle: emp.role,
    worksFor: { '@type': 'Organization', name: 'Sidekicc' },
    description: detail.tagline,
    knowsAbout: detail.qualifications,
    image: `https://sidekicc.com${emp.image}`,
  }

  return (
    <div>
      <SEO
        title={`${emp.name} — ${emp.role} | Sidekicc AI Employee`}
        description={`${detail.tagline} Qualifications: ${detail.qualifications.join(', ')}. Hire ${emp.name} on Sidekicc from £49/month.`}
        path={`/employee/${slug}`}
        ogImage={emp.image}
        ogType="profile"
        jsonLd={employeeJsonLd}
      />
      {/* Hero — side by side */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>{emp.role}</p>
              <h1 style={{ fontSize: 56, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em', lineHeight: 1.08, marginBottom: 8 }}>{emp.name}</h1>
              <p style={{ color: '#9999aa', fontSize: 14, marginBottom: 16 }}>{detail.fullName}</p>
              <p style={{ color: '#1a1a2e', fontSize: 18, lineHeight: 1.7, marginBottom: 16, fontWeight: 500 }}>{detail.tagline}</p>
              <p style={{ color: '#6b6b8d', fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>{emp.description}</p>

              {/* Qualifications as tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                {detail.qualifications.map((q) => (
                  <span key={q} style={{ padding: '6px 14px', fontSize: 13, fontWeight: 600, color: '#6C3AFF', background: 'rgba(108,58,255,0.06)', border: '1px solid rgba(108,58,255,0.12)', borderRadius: 10 }}>{q}</span>
                ))}
              </div>
              <p style={{ color: '#9999aa', fontSize: 13, marginBottom: 32 }}>Specialty: {detail.specialty}</p>

              <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#6C3AFF', color: '#fff', fontWeight: 600, fontSize: 16, borderRadius: 14, padding: '16px 32px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(108,58,255,0.3)' }}>
                Hire {emp.name}
              </a>
            </div>

            <div>
              <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 16 }}>
                <img src={emp.image} alt={emp.name} style={{ width: '100%', borderRadius: 20, display: 'block', aspectRatio: '3/4', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics bar */}
      <section style={{ background: '#1a1a2e', padding: '48px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {detail.metrics.map((m) => (
              <div key={m.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 40, fontWeight: 900, color: '#fff' }}>{m.value}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column: Skills left, Experience right */}
      <section style={{ background: '#fafafa', padding: '100px 0' }}>
        <div style={cx}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
            {/* Left: Skills */}
            <div>
              <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Expertise</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', marginBottom: 32 }}>Skills & Proficiency</h2>
              {detail.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>

            {/* Right: Quick capabilities */}
            <div>
              <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Capabilities</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', marginBottom: 32 }}>What {emp.name} Does</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {detail.experience.map((exp, i) => (
                  <div key={exp.area} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#6C3AFF', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15, marginBottom: 4 }}>{exp.area}</h3>
                      <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.6 }}>{exp.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations & Tools */}
      {extra && (
        <section style={{ background: '#fff', padding: '100px 0' }}>
          <div style={cx}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Connected To</p>
              <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', letterSpacing: '-0.02em' }}>{emp.name}'s integrations & tools</h2>
              <p style={{ fontSize: 16, color: '#6b6b8d', marginTop: 12, maxWidth: 640, margin: '12px auto 0' }}>Everything live or ready to connect. All API keys managed server-side — you never touch credentials.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {extra.integrations.map((intg) => (
                <div key={intg.name} style={{ background: '#fafafa', borderRadius: 16, padding: 24, border: '1px solid #eee', borderLeft: '4px solid #6C3AFF' }}>
                  <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 15, marginBottom: 6 }}>{intg.name}</h3>
                  <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.6 }}>{intg.how}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Files & Methodologies — two column */}
      {extra && (
        <section style={{ background: '#fafafa', padding: '80px 0' }}>
          <div style={cx}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
              <div style={{ background: '#fff', borderRadius: 24, padding: 32, border: '1px solid #eee' }}>
                <p style={{ color: '#00CC66', fontWeight: 600, fontSize: 13, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Works With</p>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e', marginBottom: 20 }}>File types {emp.name} uses</h3>
                <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>Upload anything relevant — text is extracted automatically, audio is transcribed, and everything is stored permanently in {emp.name}'s Brain.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {extra.fileTypes.map((f) => (
                    <span key={f} style={{ padding: '8px 14px', fontSize: 13, fontWeight: 600, color: '#1a1a2e', background: '#fafafa', border: '1px solid #e8e8f0', borderRadius: 10 }}>{f}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: 24, padding: 32, border: '1px solid #eee' }}>
                <p style={{ color: '#FF6600', fontWeight: 600, fontSize: 13, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Applies</p>
                <h3 style={{ fontSize: 24, fontWeight: 900, color: '#1a1a2e', marginBottom: 20 }}>Methodologies & frameworks</h3>
                <p style={{ color: '#6b6b8d', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>Every output from {emp.name} is grounded in industry-standard frameworks — not generic LLM guesses.</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {extra.methodologies.map((m) => (
                    <li key={m} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '6px 0' }}>
                      <svg width="14" height="14" fill="#FF6600" viewBox="0 0 20 20" style={{ marginTop: 4, flexShrink: 0 }}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span style={{ fontSize: 14, color: '#3d3d5c', lineHeight: 1.5 }}>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full Automation — trust-building showcase */}
      <section style={{ background: '#0A1628', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(0,204,102,0.08) 1.5px, transparent 1.5px)', backgroundSize: '14px 14px', pointerEvents: 'none' }} />
        <div style={{ ...cx, position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <p style={{ color: '#00CC66', fontWeight: 600, fontSize: 14, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Automation</p>
              <h2 style={{ fontSize: 42, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 20 }}>
                Trust {emp.name}? Let them run on their own.
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 16 }}>
                Every piece of work {emp.name} produces starts in your Approval Queue by default — so you can review, edit, and build trust. Once {emp.name} has proven they understand your business and voice, flip <strong style={{ color: '#00CC66' }}>Full Automation</strong> on.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 28 }}>
                {emp.name} executes every task without asking — sending emails, publishing posts, logging CRM activity, closing the loop. You reclaim your time entirely. Turn it off anytime from the employee's settings.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
                {[
                  { t: 'Daily caps', d: 'Hard limits you set per employee.' },
                  { t: 'Audit trail', d: 'Every autonomous action logged with timestamp.' },
                  { t: 'Instant recall', d: 'Pause everything with one tap if anything looks wrong.' },
                ].map((s) => (
                  <div key={s.t} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 14, border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ color: '#00CC66', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{s.t}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, lineHeight: 1.5 }}>{s.d}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Toggle mockup */}
            <div>
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 24, padding: 36, border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
                  <img src={emp.image} alt={emp.name} style={{ width: 56, height: 56, borderRadius: 14, objectFit: 'cover', border: '2px solid rgba(0,204,102,0.4)' }} />
                  <div>
                    <div style={{ color: '#fff', fontSize: 18, fontWeight: 700 }}>{emp.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{emp.role}</div>
                  </div>
                </div>

                <div style={{ background: 'rgba(0,204,102,0.08)', borderRadius: 16, padding: 20, border: '1px solid rgba(0,204,102,0.2)', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ color: '#fff', fontSize: 15, fontWeight: 700, marginBottom: 4 }}>Full Automation</div>
                      <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>Execute without approval</div>
                    </div>
                    {/* iOS-style toggle, ON */}
                    <div style={{ width: 52, height: 30, background: '#00CC66', borderRadius: 15, position: 'relative', boxShadow: '0 0 20px rgba(0,204,102,0.4)' }}>
                      <div style={{ position: 'absolute', top: 3, right: 3, width: 24, height: 24, background: '#fff', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { t: 'Daily task cap', v: '50 tasks / day' },
                    { t: 'Require review for', v: 'Emails over 200 words' },
                    { t: 'Instant recall', v: 'One-tap pause' },
                  ].map((s) => (
                    <div key={s.t} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{s.t}</span>
                      <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{s.v}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 20, padding: '12px 14px', background: 'rgba(0,204,102,0.06)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00CC66', boxShadow: '0 0 10px rgba(0,204,102,0.6)' }} />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>{emp.name} is working autonomously · 12 tasks today</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For — full width coloured container */}
      <section style={{ background: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ background: 'rgba(108,58,255,0.05)', borderRadius: 32, padding: 56, textAlign: 'center' }}>
            <p style={{ color: '#6C3AFF', fontWeight: 600, fontSize: 14, marginBottom: 12 }}>Perfect For</p>
            <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', marginBottom: 20 }}>Who {emp.name} Is For</h2>
            <p style={{ color: '#3d3d5c', fontSize: 18, lineHeight: 1.7 }}>{detail.who}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#6C3AFF', padding: '80px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 44, fontWeight: 900, color: '#fff', marginBottom: 16 }}>Ready to Hire {emp.name}?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 32 }}>{emp.name} activates in under 60 seconds. No setup required.</p>
          <a href="https://artifactly-ai-employees.netlify.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: '#6C3AFF', fontWeight: 600, fontSize: 17, borderRadius: 14, padding: '18px 40px', textDecoration: 'none' }}>
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Rest of team */}
      <section style={{ background: '#fafafa', padding: '80px 0' }}>
        <div style={cx}>
          <h2 style={{ fontSize: 36, fontWeight: 900, color: '#1a1a2e', textAlign: 'center', marginBottom: 40 }}>Meet the Rest of the Team</h2>
          <div style={{ background: 'rgba(108,58,255,0.06)', borderRadius: 32, padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
              {employees.filter((e) => e.name.toLowerCase() !== slug).map((e) => (
                <Link key={e.name} to={`/employee/${e.name.toLowerCase()}`} style={{ textDecoration: 'none', background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', textAlign: 'center' }}>
                  <div style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                    <img src={e.image} alt={e.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={{ padding: 12 }}>
                    <h3 style={{ fontWeight: 700, color: '#1a1a2e', fontSize: 13 }}>{e.name}</h3>
                    <p style={{ color: '#6C3AFF', fontSize: 10, fontWeight: 600 }}>{e.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
