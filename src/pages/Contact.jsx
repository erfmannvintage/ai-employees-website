import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neon font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Contact</p>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-white mb-4">Get in <span className="text-neon text-glow">Touch</span></h1>
        </div>
      </section>

      <section className="py-20 section-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 comic-panel rounded-xl p-7">
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="font-black text-2xl text-white uppercase">Sent!</h2>
                <p className="text-gray-400 mt-2">We'll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-bold text-gray-300 mb-1">First Name</label><input type="text" required className="w-full px-4 py-3 bg-dark-300 border-2 border-dark-400 rounded-lg text-sm text-white focus:border-neon focus:outline-none" /></div>
                  <div><label className="block text-sm font-bold text-gray-300 mb-1">Last Name</label><input type="text" required className="w-full px-4 py-3 bg-dark-300 border-2 border-dark-400 rounded-lg text-sm text-white focus:border-neon focus:outline-none" /></div>
                </div>
                <div><label className="block text-sm font-bold text-gray-300 mb-1">Email</label><input type="email" required className="w-full px-4 py-3 bg-dark-300 border-2 border-dark-400 rounded-lg text-sm text-white focus:border-neon focus:outline-none" /></div>
                <div><label className="block text-sm font-bold text-gray-300 mb-1">Subject</label>
                  <select className="w-full px-4 py-3 bg-dark-300 border-2 border-dark-400 rounded-lg text-sm text-gray-300 focus:border-neon focus:outline-none">
                    <option>General</option><option>Sales</option><option>Support</option><option>Partnership</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold text-gray-300 mb-1">Message</label><textarea required rows={4} className="w-full px-4 py-3 bg-dark-300 border-2 border-dark-400 rounded-lg text-sm text-white focus:border-neon focus:outline-none resize-none" /></div>
                <button type="submit" className="btn-neon w-full">Send Message</button>
              </form>
            )}
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="comic-panel-subtle rounded-xl p-5"><h3 className="font-bold text-white mb-2">Email</h3><p className="text-neon text-sm font-bold">hello@aiemployees.com</p><p className="text-neon text-sm font-bold mt-1">support@aiemployees.com</p></div>
            <div className="comic-panel-subtle rounded-xl p-5"><h3 className="font-bold text-white mb-2">Response Time</h3><p className="text-gray-400 text-sm">Within 24 hours on business days.</p></div>
            <div className="comic-panel-subtle rounded-xl p-5"><h3 className="font-bold text-white mb-2">Follow Us</h3>
              <div className="flex gap-2 mt-2">{['TikTok','YouTube','Instagram','X'].map((p)=><span key={p} className="px-3 py-1 text-xs font-bold text-neon/70 bg-neon/[0.06] border border-neon/10 rounded">{p}</span>)}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
