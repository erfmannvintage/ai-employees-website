const posts = [
  { title: 'Why 77% of Businesses Fail at AI', excerpt: 'The AI adoption gap is massive. Here\'s what the successful 5% do differently.', cat: 'AI Strategy', date: 'Apr 10, 2026', time: '6 min', color: 'bg-pop-red' },
  { title: 'AI-Powered Marketing in 2026', excerpt: 'How AI is reshaping every aspect of marketing, and how to stay ahead.', cat: 'Marketing', date: 'Apr 8, 2026', time: '8 min', color: 'bg-pop-blue' },
  { title: 'Replace 3 Freelancers with AI', excerpt: 'Real case study: one founder replaced writers, social managers, and analysts.', cat: 'Case Study', date: 'Apr 5, 2026', time: '5 min', color: 'bg-neon text-black' },
  { title: 'SEO in the Age of AI', excerpt: 'Google\'s algorithms evolved. Here\'s what our SEO AI learned about ranking.', cat: 'SEO', date: 'Apr 2, 2026', time: '7 min', color: 'bg-pop-purple' },
  { title: 'ROI of an AI Workforce', excerpt: 'The exact time and money businesses save with a full AI workforce.', cat: 'Business', date: 'Mar 28, 2026', time: '6 min', color: 'bg-pop-orange' },
  { title: 'Content Pipeline on Autopilot', excerpt: 'Set up Flora, Mabel, and Poppi to publish content without touching a keyboard.', cat: 'Content', date: 'Mar 24, 2026', time: '5 min', color: 'bg-pop-pink' },
]

export default function Blog() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-cream halftone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-pop-red font-extrabold uppercase tracking-[0.2em] text-sm mb-3">Blog</p>
          <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-ink mb-4">Insights & <span className="text-pop-red">Strategies</span></h1>
        </div>
      </section>

      <section className="py-20 section-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p) => (
              <article key={p.title} className="comic-panel-subtle rounded-xl overflow-hidden group cursor-pointer">
                <div className={`h-2 ${p.color}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase rounded ${p.color} ${p.color.includes('neon') ? 'text-black' : 'text-white'}`}>{p.cat}</span>
                    <span className="text-xs text-ink-ghost">{p.time}</span>
                  </div>
                  <h2 className="font-bold text-ink text-lg leading-snug mb-3 group-hover:text-pop-red transition-colors">{p.title}</h2>
                  <p className="text-sm text-ink-faint leading-relaxed mb-4">{p.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-ink-ghost">{p.date}</span>
                    <span className="text-sm font-bold text-pop-red">Read &rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 section-cream">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="comic-panel rounded-xl p-8">
            <h2 className="font-black text-2xl text-ink uppercase mb-2">Stay in the Loop</h2>
            <p className="text-ink-faint text-sm mb-5">AI workforce insights. No spam.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@company.com" className="flex-1 px-4 py-3 bg-light border-2 border-light-200 rounded-lg text-sm text-ink placeholder:text-ink-ghost focus:outline-none focus:border-pop-red" />
              <button type="submit" className="btn-neon text-sm px-5 py-3">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
