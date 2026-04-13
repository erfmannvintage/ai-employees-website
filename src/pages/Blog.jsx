const posts = [
  { title: 'Why 77% of Businesses Fail at AI', excerpt: 'The AI adoption gap is massive. Here\'s what the successful 5% do differently.', cat: 'AI Strategy', date: 'Apr 10, 2026', time: '6 min', color: 'bg-brand' },
  { title: 'AI-Powered Marketing in 2026', excerpt: 'How AI is reshaping every aspect of marketing, and how to stay ahead.', cat: 'Marketing', date: 'Apr 8, 2026', time: '8 min', color: 'bg-pop-blue' },
  { title: 'Replace 3 Freelancers with AI', excerpt: 'Real case study: one founder replaced writers, social managers, and analysts.', cat: 'Case Study', date: 'Apr 5, 2026', time: '5 min', color: 'bg-pop-green' },
  { title: 'SEO in the Age of AI', excerpt: 'Google\'s algorithms evolved. Here\'s what our SEO AI learned about ranking.', cat: 'SEO', date: 'Apr 2, 2026', time: '7 min', color: 'bg-pop-purple' },
  { title: 'ROI of an AI Workforce', excerpt: 'The exact time and money businesses save with a full AI workforce.', cat: 'Business', date: 'Mar 28, 2026', time: '6 min', color: 'bg-pop-orange' },
  { title: 'Content Pipeline on Autopilot', excerpt: 'Set up Flora, Mabel, and Poppi to publish content without touching a keyboard.', cat: 'Content', date: 'Mar 24, 2026', time: '5 min', color: 'bg-pop-pink' },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <p className="text-sm font-semibold text-brand mb-4">Blog</p>
          <h1 className="text-[36px] sm:text-[44px] font-black text-ink tracking-tight">
            Insights & <span className="text-brand">Strategies</span>
          </h1>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.title} className="card overflow-hidden group cursor-pointer">
                <div className={`h-1.5 ${p.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg ${p.color} text-white`}>
                      {p.cat}
                    </span>
                    <span className="text-xs text-ink-light">{p.time}</span>
                  </div>
                  <h2 className="font-bold text-ink text-lg leading-snug mb-3 group-hover:text-brand transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">{p.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-ink-light">{p.date}</span>
                    <span className="text-sm font-semibold text-brand">Read &rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-lg mx-auto px-8 text-center">
          <div className="card p-8">
            <h2 className="text-[24px] font-black text-ink tracking-tight mb-2">Stay in the Loop</h2>
            <p className="text-ink-muted text-sm mb-6">AI workforce insights. No spam.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              />
              <button type="submit" className="btn-primary text-sm px-6 py-3">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
