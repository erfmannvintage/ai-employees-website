export default function Terms() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-white mb-4">Terms of Service</h1>
          <p className="text-white/30">Last updated: April 12, 2026</p>
        </div>
      </section>
      <section className="py-16 lg:py-20 section-darker">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {[
            { title: '1. Agreement to Terms', content: 'By accessing or using AI Employees ("the Service"), you agree to these Terms. If you do not agree, do not use the Service.' },
            { title: '2. Description of Service', content: 'AI Employees provides an AI-powered workforce platform with 11 specialized AI employees for business operations including marketing, sales, support, content, analytics, legal, advertising, research, and finance.' },
            { title: '3. Account Registration', content: 'You must be 18+, provide accurate information, maintain account security, notify us of unauthorised use, and accept responsibility for all account activities.' },
            { title: '4. Subscription & Billing', content: 'Tiered plans billed monthly or annually. 14-day free trial for new accounts. Payment via Stripe. Auto-renewal unless cancelled. You may change or cancel anytime.' },
            { title: '5. Acceptable Use', content: 'Do not: use for unlawful purposes, generate harmful content, reverse-engineer the Service, interfere with servers, send spam, share credentials, or resell without authorisation.' },
            { title: '6. AI-Generated Content', content: 'Content is provided as-is. Review before publication. You retain ownership and are responsible for accuracy and legal compliance.' },
            { title: '7. Intellectual Property', content: 'The Service is owned by AI Employees and protected by IP laws. Your subscription grants a limited, non-exclusive, non-transferable licence.' },
            { title: '8. Limitation of Liability', content: 'We are not liable for indirect, incidental, special, or consequential damages. Total liability shall not exceed amounts paid in the preceding 12 months.' },
            { title: '9. Service Availability', content: 'We target 99.9% uptime but do not guarantee uninterrupted service. Maintenance may cause temporary suspension.' },
            { title: '10. Termination', content: 'We may suspend accounts for Terms violations. Data is retained 30 days post-termination, then permanently deleted.' },
            { title: '11. Governing Law', content: 'Governed by laws of England and Wales. Disputes subject to exclusive jurisdiction of English courts.' },
            { title: '12. Changes', content: 'We may update these Terms. Material changes communicated via email or platform. Continued use constitutes acceptance.' },
            { title: '13. Contact', content: 'Questions? Email legal@aiemployees.com.' },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="font-bold text-xl text-white mb-3">{s.title}</h2>
              <p className="text-white/40 leading-relaxed text-[15px]">{s.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
