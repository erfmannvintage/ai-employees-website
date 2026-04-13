import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-brand mb-4">Contact</p>
          <h1 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">
            Get in <span className="text-brand">Touch</span>
          </h1>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 card p-8">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-black text-ink tracking-tight">Message Sent!</h2>
                <p className="text-ink-muted mt-2">We'll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">First Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Last Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Email</label>
                  <input type="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Subject</label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent">
                    <option>General</option>
                    <option>Sales</option>
                    <option>Support</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-2">Message</label>
                  <textarea required rows={5} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            )}
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="card p-6">
              <h3 className="font-bold text-ink mb-3">Email</h3>
              <p className="text-brand text-[15px] font-semibold">hello@aiemployees.com</p>
              <p className="text-brand text-[15px] font-semibold mt-1">support@aiemployees.com</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-ink mb-3">Response Time</h3>
              <p className="text-ink-muted text-[15px]">Within 24 hours on business days.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-ink mb-3">Follow Us</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {['TikTok', 'YouTube', 'Instagram', 'X'].map((p) => (
                  <span key={p} className="px-3 py-1.5 text-xs font-semibold text-brand bg-brand/[0.08] rounded-lg">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
