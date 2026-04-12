const posts = [
  { title: 'Why 77% of Businesses Fail at AI (And How to Be the 5%)', excerpt: 'The AI adoption gap is massive. Here\'s what the successful 5% do differently.', category: 'AI Strategy', date: 'April 10, 2026', readTime: '6 min', gradient: 'from-[#FF3366] to-[#FF6B35]' },
  { title: 'The Complete Guide to AI-Powered Marketing in 2026', excerpt: 'How AI is reshaping every aspect of marketing, and how to stay ahead of the curve.', category: 'Marketing', date: 'April 8, 2026', readTime: '8 min', gradient: 'from-[#6C3AFF] to-[#00D4FF]' },
  { title: 'How to Replace 3 Freelancers with AI Employees', excerpt: 'A real-world case study: one founder replaced writers, social managers, and analysts.', category: 'Case Study', date: 'April 5, 2026', readTime: '5 min', gradient: 'from-[#00CC88] to-[#00D4FF]' },
  { title: 'SEO in the Age of AI: What Google Wants in 2026', excerpt: 'Google\'s algorithms have evolved. Here\'s what our SEO AI has learned about ranking.', category: 'SEO', date: 'April 2, 2026', readTime: '7 min', gradient: 'from-[#8B5CF6] to-[#D946EF]' },
  { title: 'The ROI of an AI Workforce: Breaking Down the Numbers', excerpt: 'Exactly how much time and money businesses save with a full AI workforce.', category: 'Business', date: 'March 28, 2026', readTime: '6 min', gradient: 'from-[#FFBE0B] to-[#FF6B35]' },
  { title: 'Building a Content Pipeline That Runs on Autopilot', excerpt: 'Set up Flora, Mabel, and Poppi to create and publish content without touching a keyboard.', category: 'Content', date: 'March 24, 2026', readTime: '5 min', gradient: 'from-[#EF4444] to-[#FB923C]' },
]

export default function Blog() {
  return (
    <div>
      <section className="py-20 lg:py-28 section-dark relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-[#8B5CF6] -top-40 -left-40" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#FFBE0B] mb-4">Blog</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            Insights & <span className="gradient-text">Strategies</span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Case studies, strategies, and deep-dives on building a business powered by AI.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <article key={post.title} className="group glass-card overflow-hidden hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                <div className={`h-1.5 bg-gradient-to-r ${post.gradient}`} />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-0.5 text-[10px] font-bold text-white rounded-full bg-gradient-to-r ${post.gradient}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-white/30">{post.readTime}</span>
                  </div>
                  <h2 className="font-bold text-white text-lg leading-snug mb-3 group-hover:text-[#FF3366] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/25">{post.date}</span>
                    <span className="text-sm font-semibold text-[#FF3366] group-hover:translate-x-1 transition-transform">Read more &rarr;</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 section-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card-strong p-8 lg:p-10 glow-purple">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-3">Stay in the Loop</h2>
            <p className="text-white/40 mb-6">AI workforce insights delivered to your inbox. No spam.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@company.com" className="flex-1 px-4 py-3 bg-white/[0.05] border border-white/[0.1] rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6C3AFF] focus:border-transparent" />
              <button type="submit" className="btn-primary px-6">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
