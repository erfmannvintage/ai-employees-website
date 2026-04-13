# AI Employees Marketing Website — Design System

## Brand
- **Purpose**: Convert visitors into free trial signups at artifactly-ai-employees.netlify.app
- **Audience**: Business owners/entrepreneurs who need help with marketing, sales, support, finance
- **Tone**: Professional, confident, trustworthy — but with personality from the comic-art characters
- **Primary action**: "Get Started Free" → links to the app

## Design Rules

### Layout
- All content containers: `max-w-[1200px] mx-auto px-8`
- Sections alternate: white → gray-50 → white → colored container → white
- Section vertical padding: `py-24 lg:py-32` (generous breathing room)
- Section headings: centered with `max-w-[640px] mx-auto` for the intro text
- Feature sections use side-by-side layout: text left + image right (alternating)
- Coloured containers (rounded-[32px]) hold groups of cards inside them
- Cards inside containers are white with rounded-2xl

### Typography
- Headings: font-black, text-ink, tracking-tight
- Section label: text-brand or colored, font-semibold, text-sm
- Section title: text-[36px] sm:text-[44px] font-black
- Body text: text-[15px] or text-[17px], text-ink-muted, leading-relaxed
- NEVER all uppercase for body text or descriptions
- Section labels can be uppercase with tracking-[0.2em]

### Colors
- Brand purple: #6C3AFF (buttons, accents, badges)
- Ink: #1A1A2E (headings, primary text)
- Ink-muted: #6B6B8D (body text)
- Gray-50: #FAFAFA (alternate section bg)
- Colored containers: #F0ECFF (purple tint), #E8FFF0 (green tint), #FFF0F0 (pink tint), #FFF8E8 (orange tint)
- NO neon green, NO pop-red as primary. Those are old themes.

### Components
- Primary button: `btn-primary` — purple bg, white text, rounded-xl, hover lift+shadow
- Secondary button: `btn-secondary` — white bg, border, hover fills dark
- Cards: `card` class — white, rounded-[24px], 1px border, hover lift+shadow
- Badge: `badge` class — purple pill with text
- DO NOT use: comic-panel, comic-panel-subtle, speech-bubble, halftone, btn-neon, section-cream, section-neon, section-ink — these are OLD classes

### Images
- Character images at /characters/{name}.png
- Always use aspect-[3/4] or aspect-square for character images
- Images inside white cards or coloured containers
- Border-radius on images: rounded-2xl or rounded-3xl

### What to AVOID
- Purple gradients (AI slop giveaway)
- Emoji icons in feature sections
- All-uppercase body text
- Cramped layouts with insufficient padding
- Content pushed to one side
- Generic card grids with no visual variety
- Dark backgrounds for main content (only for stats/CTA sections)
