import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-paper-warm halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-ink mb-4">
            Get in{' '}
            <span className="text-pop-pink">Touch</span>
          </h1>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            Questions, feedback, or partnership inquiries? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border-3 border-ink p-8 shadow-[6px_6px_0_var(--color-ink)]">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-5xl mb-4">✅</div>
                    <h2 className="font-display font-black text-2xl text-ink mb-2">Message Sent!</h2>
                    <p className="text-ink-muted">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-ink mb-1.5">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border-2 border-ink rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pop-pink"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink mb-1.5">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border-2 border-ink rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pop-pink"
                          placeholder="Smith"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border-2 border-ink rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pop-pink"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-1.5">Subject</label>
                      <select
                        className="w-full px-4 py-3 border-2 border-ink rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pop-pink bg-white"
                      >
                        <option>General Enquiry</option>
                        <option>Sales</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                        <option>Press / Media</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-1.5">Message</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-ink rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pop-pink resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 bg-pop-pink text-white font-bold rounded-lg border-2 border-ink shadow-[4px_4px_0_var(--color-ink)] hover:shadow-[2px_2px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-lg border-3 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)]">
                <h3 className="font-bold text-lg text-ink mb-3">Email Us</h3>
                <p className="text-sm text-ink-muted">For general inquiries:</p>
                <p className="text-sm font-semibold text-pop-pink">hello@aiemployees.com</p>
                <p className="text-sm text-ink-muted mt-2">For support:</p>
                <p className="text-sm font-semibold text-pop-pink">support@aiemployees.com</p>
              </div>
              <div className="bg-white rounded-lg border-3 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)]">
                <h3 className="font-bold text-lg text-ink mb-3">Response Time</h3>
                <p className="text-sm text-ink-muted">We aim to respond to all enquiries within 24 hours during business days.</p>
              </div>
              <div className="bg-white rounded-lg border-3 border-ink p-6 shadow-[4px_4px_0_var(--color-ink)]">
                <h3 className="font-bold text-lg text-ink mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  {['TikTok', 'YouTube', 'Instagram', 'X'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="px-3 py-1.5 text-xs font-bold text-ink rounded-md border-2 border-ink bg-paper-warm hover:bg-pop-pink hover:text-white hover:border-pop-pink transition-all"
                    >
                      {platform}
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
