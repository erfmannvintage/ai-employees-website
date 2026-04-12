import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[#00D4FF] -top-40 right-0" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#00CC88] mb-4">Contact</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            Get in <span className="gradient-text-blue">Touch</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 section-darker">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="glass-card-strong p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00CC88] to-[#00D4FF] flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="font-display font-black text-2xl text-white mb-2">Message Sent!</h2>
                    <p className="text-white/40">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-white/70 mb-1.5">First Name</label>
                        <input type="text" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-[#6C3AFF]" placeholder="Jane" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white/70 mb-1.5">Last Name</label>
                        <input type="text" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-[#6C3AFF]" placeholder="Smith" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/70 mb-1.5">Email</label>
                      <input type="email" required className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-[#6C3AFF]" placeholder="jane@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/70 mb-1.5">Subject</label>
                      <select className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm text-white/70 focus:outline-none focus:ring-2 focus:ring-[#6C3AFF]">
                        <option>General Enquiry</option>
                        <option>Sales</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                        <option>Press / Media</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-white/70 mb-1.5">Message</label>
                      <textarea required rows={5} className="w-full px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-[#6C3AFF] resize-none" placeholder="Tell us what's on your mind..." />
                    </div>
                    <button type="submit" className="btn-primary w-full">Send Message</button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-5">
              <div className="glass-card p-6">
                <h3 className="font-semibold text-white mb-3">Email Us</h3>
                <p className="text-sm text-white/40 mb-1">General inquiries:</p>
                <p className="text-sm font-semibold text-[#FF3366]">hello@aiemployees.com</p>
                <p className="text-sm text-white/40 mt-3 mb-1">Support:</p>
                <p className="text-sm font-semibold text-[#FF3366]">support@aiemployees.com</p>
              </div>
              <div className="glass-card p-6">
                <h3 className="font-semibold text-white mb-3">Response Time</h3>
                <p className="text-sm text-white/40">We respond to all enquiries within 24 hours during business days.</p>
              </div>
              <div className="glass-card p-6">
                <h3 className="font-semibold text-white mb-3">Follow Us</h3>
                <div className="flex gap-2">
                  {[
                    { name: 'TikTok', href: 'https://www.tiktok.com/@artifactlystudio' },
                    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCWZ2nM7t_q55wLtqew0W7CQ' },
                    { name: 'Instagram', href: 'https://www.instagram.com/artifactly.studio/' },
                    { name: 'X', href: 'https://x.com/Artifactly_' },
                  ].map((p) => (
                    <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-xs font-semibold text-white/50 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-all">
                      {p.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
